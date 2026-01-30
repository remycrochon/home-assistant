#!/usr/bin/env python3
"""
Sensor component for Cryptoinfo Advanced
Author: TheHoliestRoger
"""

import voluptuous as vol
from datetime import timedelta

from .const.const import (
    _LOGGER,
    DEFAULT_MAX_FETCH_FAILURES,
    DOMAIN,
    PLATFORMS,
    CONF_CRYPTOCURRENCY_NAME,
    CONF_CURRENCY_NAME,
    CONF_MULTIPLIER,
    CONF_UPDATE_FREQUENCY,
    CONF_API_MODE,
    CONF_POOL_PREFIX,
    CONF_FETCH_ARGS,
    CONF_EXTRA_SENSORS,
    CONF_EXTRA_SENSOR_PROPERTY,
    CONF_API_DOMAIN_NAME,
    CONF_POOL_NAME,
    CONF_DIFF_MULTIPLIER,
    CONF_BLOCK_TIME_MINUTES,
    CONF_DIFFICULTY_WINDOW,
    CONF_HALVING_WINDOW,
    CONF_MAX_FETCH_FAILURES,
)

from .manager import CryptoInfoAdvEntityManager, CryptoInfoAdvDataFetchType
from .crypto_sensor import CryptoinfoAdvSensor

from homeassistant.components.sensor import (
    CONF_STATE_CLASS,
    PLATFORM_SCHEMA,
    STATE_CLASSES_SCHEMA,
)
from homeassistant.const import (
    CONF_UNIQUE_ID,
    CONF_ID,
    CONF_UNIT_OF_MEASUREMENT,
)
import homeassistant.helpers.config_validation as cv
from homeassistant.helpers.reload import async_setup_reload_service


async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):

    await async_setup_reload_service(hass, DOMAIN, PLATFORMS)

    _LOGGER.debug("Setup Cryptoinfo Advanced sensor")

    id_name = config.get(CONF_ID)
    unique_id = config.get(CONF_UNIQUE_ID)
    state_class = config.get(CONF_STATE_CLASS)
    cryptocurrency_name = config.get(CONF_CRYPTOCURRENCY_NAME).lower().strip()
    currency_name = config.get(CONF_CURRENCY_NAME).lower().strip()
    unit_of_measurement = config.get(CONF_UNIT_OF_MEASUREMENT).strip()
    multiplier = config.get(CONF_MULTIPLIER).strip()
    update_frequency = timedelta(minutes=(float(config.get(CONF_UPDATE_FREQUENCY))))
    api_mode = config.get(CONF_API_MODE).lower().strip()
    pool_prefix = config.get(CONF_POOL_PREFIX)
    fetch_args = config.get(CONF_FETCH_ARGS)
    extra_sensors = config.get(CONF_EXTRA_SENSORS, [])
    api_domain_name = config.get(CONF_API_DOMAIN_NAME).lower().strip()
    pool_name = config.get(CONF_POOL_NAME).strip()
    diff_multiplier = config.get(CONF_DIFF_MULTIPLIER)
    block_time_minutes = config.get(CONF_BLOCK_TIME_MINUTES)
    difficulty_window = config.get(CONF_DIFFICULTY_WINDOW)
    halving_window = config.get(CONF_HALVING_WINDOW)
    max_fetch_failures = config.get(CONF_MAX_FETCH_FAILURES)

    entities = []

    try:
        new_sensor = CryptoinfoAdvSensor(
            hass,
            cryptocurrency_name,
            currency_name,
            unit_of_measurement,
            multiplier,
            update_frequency,
            id_name,
            unique_id,
            state_class,
            api_mode,
            pool_prefix,
            fetch_args,
            extra_sensors,
            api_domain_name,
            pool_name,
            diff_multiplier,
            block_time_minutes,
            difficulty_window,
            halving_window,
            max_fetch_failures,
        )
        if new_sensor.check_valid_config(False):
            entities.append(new_sensor)
            entities.extend(new_sensor.init_child_sensors())
    except Exception as error:
        _LOGGER.error(f"{type(error).__name__}: {error}")
        return False

    async_add_entities(entities)
    CryptoInfoAdvEntityManager.instance().add_entities(entities)


PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Required(CONF_CRYPTOCURRENCY_NAME, default="bitcoin"): cv.string,
        vol.Required(CONF_CURRENCY_NAME, default="usd"): cv.string,
        vol.Optional(CONF_UNIT_OF_MEASUREMENT, default="$"): cv.string,
        vol.Required(CONF_MULTIPLIER, default=1): cv.string,
        vol.Required(CONF_UPDATE_FREQUENCY, default=60): cv.string,
        vol.Optional(CONF_ID, default=""): cv.string,
        vol.Optional(CONF_UNIQUE_ID): cv.string,
        vol.Optional(CONF_STATE_CLASS): STATE_CLASSES_SCHEMA,
        vol.Optional(
            CONF_API_MODE,
            default=str(CryptoInfoAdvDataFetchType.PRICE_MAIN)
        ): vol.In(CryptoInfoAdvEntityManager.instance().fetch_types),
        vol.Optional(CONF_POOL_PREFIX, default=[""]): vol.All(
            cv.ensure_list,
            [cv.string],
        ),
        vol.Optional(CONF_MAX_FETCH_FAILURES, default=DEFAULT_MAX_FETCH_FAILURES): cv.positive_int,
        vol.Optional(CONF_FETCH_ARGS, default=""): cv.string,
        vol.Optional(CONF_EXTRA_SENSORS): vol.All(
            cv.ensure_list,
            [
                vol.Schema(
                    {
                        vol.Optional(CONF_ID, default=""): cv.string,
                        vol.Optional(CONF_UNIQUE_ID): cv.string,
                        vol.Optional(CONF_STATE_CLASS): STATE_CLASSES_SCHEMA,
                        vol.Required(CONF_EXTRA_SENSOR_PROPERTY): vol.In(CryptoinfoAdvSensor.get_valid_extra_sensor_keys()),
                        vol.Optional(CONF_UNIT_OF_MEASUREMENT, default="$"): cv.string,
                    }
                )
            ],
        ),
        vol.Optional(CONF_API_DOMAIN_NAME, default=""): cv.string,
        vol.Optional(CONF_POOL_NAME, default=""): cv.string,
        vol.Optional(CONF_DIFF_MULTIPLIER, default=""): cv.string,
        vol.Optional(CONF_BLOCK_TIME_MINUTES, default=""): cv.string,
        vol.Optional(CONF_DIFFICULTY_WINDOW, default=""): cv.string,
        vol.Optional(CONF_HALVING_WINDOW, default=""): cv.string,
    }
)
