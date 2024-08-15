"""Sensor integration for PoolLab"""
from __future__ import annotations
import logging

from homeassistant.components.sensor import SensorEntity
from homeassistant.components.sensor.const import SensorStateClass
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity import DeviceInfo
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from . import DOMAIN, PoolLabCoordinator
from .lib import poollab

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant, config_entry: ConfigEntry, async_add_entities
):
    """Setup sensor platform for the ui"""
    api_coordinator = hass.data[DOMAIN][config_entry.entry_id]
    for a in api_coordinator.data.Accounts:
        params = list(set([m.parameter for m in a.Measurements]))
        _LOGGER.debug(
            "Account: id: %s, Name %s, parameters %s", a.id, a.full_name, params
        )
        sorted_meas = sorted(a.Measurements, key=lambda x: x.timestamp, reverse=True)
        param_added = []
        for m in sorted_meas:
            if m.parameter not in param_added:
                _LOGGER.debug(
                    "Meas: id %s, date %s, parameter %s, scneario %s, value %s, unit %s",
                    m.id,
                    m.timestamp,
                    m.parameter,
                    m.scenario,
                    m.value,
                    m.unit,
                )
                param_added.append(m.parameter)
                async_add_entities([MeasurementSensor(api_coordinator, a, m)])
    return True


class MeasurementSensor(CoordinatorEntity, SensorEntity):
    """Base class for poollab sensor"""

    def __init__(
        self,
        coordinator: PoolLabCoordinator,
        account: poollab.Account,
        meas: poollab.Measurement,
    ) -> None:
        super().__init__(coordinator)
        self._account = account
        self._latest_measurement = meas
        
        self._attr_unique_id = "%s_account%s_%s" % (
            self.coordinator.data.id,
            self._account.id,
            self._latest_measurement.parameter.replace(" ", "_").replace("-", "_").lower(),
        )
        self._attr_name = "%s %s" % (
            self._account.full_name,
            self._latest_measurement.parameter
        )
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, self._account.id)},
            name=self._account.full_name,
            model="%sm3" % self._account.volume,
            manufacturer="PoolLab",
        )
        self._attr_native_unit_of_measurement = self._latest_measurement.unit.split(" ")[0]
        try:
            meas_value = float(self._latest_measurement.value)
            if meas_value >= 100:
                self._attr_suggested_display_precision = 0
            elif meas_value >= 10:
                self._attr_suggested_display_precision = 1
            else:
                self._attr_suggested_display_precision = 2
        except:
            pass
        self._attr_state_class = SensorStateClass.MEASUREMENT
        self._attr_icon = "mdi:water-percent"
        self._attr_native_value = self._latest_measurement.value
        self._attr_extra_state_attributes = {
            "measured_at": self._latest_measurement.timestamp,
            "measure": self._latest_measurement.id,
            "ideal_low": self._latest_measurement.ideal_low,
            "ideal_high": self._latest_measurement.ideal_high,
            "device_serial": self._latest_measurement.device_serial,
            "operator_name": self._latest_measurement.operator_name,
            "comment": self._latest_measurement.comment,
        }

    @callback
    def _handle_coordinator_update(self) -> None:
        """Handle updated data from the coordinator."""
        try:
            self._latest_measurement = self.coordinator.data.get_measurement(
                self._account.id, self._latest_measurement.parameter
            )
            self._attr_native_value = self._latest_measurement.value
            self._attr_extra_state_attributes = {
                "measured_at": self._latest_measurement.timestamp,
                "measure": self._latest_measurement.id,
                "ideal_low": self._latest_measurement.ideal_low,
                "ideal_high": self._latest_measurement.ideal_high,
                "device_serial": self._latest_measurement.device_serial,
                "operator_name": self._latest_measurement.operator_name,
                "comment": self._latest_measurement.comment,
            }
            self.async_write_ha_state()
        except StopIteration:
            _LOGGER.error(
                "Could not find a measurement matching id:%s and parameter:%s",
                self._account.id,
                self._latest_measurement.parameter,
            )

