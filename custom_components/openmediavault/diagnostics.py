"""Diagnostics support for OMV."""
from __future__ import annotations

from typing import Any

from homeassistant.components.diagnostics import async_redact_data
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DOMAIN

TO_REDACT = {
    "username",
    "password",
}


async def async_get_config_entry_diagnostics(
    hass: HomeAssistant, config_entry: ConfigEntry
) -> dict[str, Any]:
    """Return diagnostics for a config entry."""
    controller = hass.data[DOMAIN][config_entry.entry_id]
    diag: dict[str, Any] = {}
    diag["entry"]: dict[str, Any] = {}

    diag["entry"]["data"] = async_redact_data(config_entry.data, TO_REDACT)
    diag["entry"]["options"] = async_redact_data(config_entry.options, TO_REDACT)
    diag["data"] = async_redact_data(controller.data, TO_REDACT)

    return diag
