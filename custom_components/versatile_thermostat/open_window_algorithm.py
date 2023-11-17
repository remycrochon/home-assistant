""" This file implements the Open Window by temperature algorithm
    This algo works the following way:
    - each time a new temperature is measured
    -    calculate the slope of the temperature curve. For this we calculate the slope(t) = 1/2 slope(t-1) + 1/2 * dTemp / dt
    -    if the slope is lower than a threshold the window opens alert is notified
    -    if the slope regain positive the end of the window open alert is notified
"""

import logging
from datetime import datetime

_LOGGER = logging.getLogger(__name__)

# To filter bad values
MIN_DELTA_T_SEC = 30  # two temp mesure should be > 10 sec
MAX_SLOPE_VALUE = 2  # slope cannot be > 2 or < -2 -> else this is an aberrant point


class WindowOpenDetectionAlgorithm:
    """The class that implements the algorithm listed above"""

    _alert_threshold: float
    _end_alert_threshold: float
    _last_slope: float
    _last_datetime: datetime
    _last_temperature: float

    def __init__(self, alert_threshold, end_alert_threshold) -> None:
        """Initalize a new algorithm with the both threshold"""
        self._alert_threshold = alert_threshold
        self._end_alert_threshold = end_alert_threshold
        self._last_slope = None
        self._last_datetime = None

    def add_temp_measurement(
        self, temperature: float, datetime_measure: datetime
    ) -> float:
        """Add a new temperature measurement
        returns the last slope
        """
        if self._last_datetime is None or self._last_temperature is None:
            _LOGGER.debug("First initialisation")
            self._last_datetime = datetime_measure
            self._last_temperature = temperature
            return None

        _LOGGER.debug(
            "We are already initialized slope=%s last_temp=%0.2f",
            self._last_slope,
            self._last_temperature,
        )
        lspe = self._last_slope

        delta_t_sec = float((datetime_measure - self._last_datetime).total_seconds())
        delta_t = delta_t_sec / 60.0
        if delta_t_sec <= MIN_DELTA_T_SEC:
            _LOGGER.debug(
                "Delta t is %d < %d which should be not possible. We don't consider this value",
                delta_t_sec,
                MIN_DELTA_T_SEC,
            )
            return lspe

        delta_temp = float(temperature - self._last_temperature)
        new_slope = delta_temp / delta_t
        if new_slope > MAX_SLOPE_VALUE or new_slope < -MAX_SLOPE_VALUE:
            _LOGGER.debug(
                "New_slope is abs(%.2f) > %.2f which should be not possible. We don't consider this value",
                new_slope,
                MAX_SLOPE_VALUE,
            )
            return lspe

        if self._last_slope is None:
            self._last_slope = new_slope
        else:
            self._last_slope = (0.5 * self._last_slope) + (0.5 * new_slope)

        self._last_datetime = datetime_measure
        self._last_temperature = temperature

        _LOGGER.debug(
            "delta_t=%.3f delta_temp=%.3f new_slope=%.3f last_slope=%s slope=%.3f",
            delta_t,
            delta_temp,
            new_slope,
            lspe,
            self._last_slope,
        )
        return self._last_slope

    def is_window_open_detected(self) -> bool:
        """True if the last calculated slope is under (because negative value) the _alert_threshold"""
        if self._alert_threshold is None:
            return False

        return (
            self._last_slope < -self._alert_threshold
            if self._last_slope is not None
            else False
        )

    def is_window_close_detected(self) -> bool:
        """True if the last calculated slope is above (cause negative) the _end_alert_threshold"""
        if self._end_alert_threshold is None:
            return False

        return (
            self._last_slope >= self._end_alert_threshold
            if self._last_slope is not None
            else False
        )

    @property
    def last_slope(self) -> float:
        """Return the last calculated slope"""
        return self._last_slope
