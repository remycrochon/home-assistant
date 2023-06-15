"""
Watchdog App for AppDaemon.

https://github.com/ludeeus/ad-watchdog
"""
import appdaemon.plugins.hass.hassapi as hass


class Watchdog(hass.Hass):
    """The Watchdog class."""
    def initialize(self):
        """initialize the app."""
        self.log("Starting watchdogs.")
        configuration = self.validate_config(self.args)
        if not configuration:
            return

        for watchdog in self.watchdog_config:
            watchdog_name = watchdog
            watchdog_config = self.watchdog_config[watchdog]

            self.log("Configuring {} watchdog".format(watchdog_name))

            for entity in watchdog_config["entities"]:
                self.log("Configuring {} watchdog for {}".format(watchdog_name, entity))

                entity_state = self.get_state(entity, attribute="all")

                if entity_state is None:
                    self.log("{} does not exsist :(".format(entity))
                    continue

                self.listen_state(self.trigger, entity)
                self.trigger(entity, None, None, entity_state.get("state"), None)

    def trigger(self, entity, attribute, old, new, kwargs):
        """Trigger from entity state."""
        entity_state = self.get_state(entity, attribute="all")
        entity_attributes = entity_state.get("attributes", {})

        entity_watchdogs = []

        for watchdog in self.watchdog_config:
            if entity in self.watchdog_config[watchdog]["entities"]:
                entity_watchdogs.append(watchdog)

        entity_attributes["watchdogs"] = entity_watchdogs
        self.set_state(entity, attributes=entity_attributes)

        for watchdog in entity_watchdogs:
            triggers = self.watchdog_config[watchdog]["entities"][entity]

            try:
                new = int(new)
            except Exception:
                pass

            if triggers["above"] is not None:
                if isinstance(new, (float, int)):
                    if new > triggers["above"]:
                        self.log("{} is above {} for {}".format(new, triggers["above"], entity))
                        self.update_watchdog(watchdog, entity, "add")
                        continue

            if triggers["below"] is not None:
                if isinstance(new, (float, int)):
                    if new < triggers["below"]:
                        self.log("{} is below {} for {}".format(new, triggers["below"], entity))
                        self.update_watchdog(watchdog, entity, "add")
                        continue

            if new is None and triggers["state"].lower() == "unknown":
                self.update_watchdog(watchdog, entity, "add")
                continue

            elif isinstance(new, str) and triggers["state"].lower() == new.lower():
                self.update_watchdog(watchdog, entity, "add")
                continue

            self.update_watchdog(watchdog, entity, "remove")

    def update_watchdog(self, watchdog, entity, add_or_remove):
        """Update watchdog info."""
        attributes = {
            "icon": self.watchdog_config[watchdog]["icon"],
            "friendly_name": self.watchdog_config[watchdog]["friendly_name"],
        
        }

        watchdog_state = self.get_state("watchdog.{}".format(watchdog), attribute="all")
        if watchdog_state  is None:
            self.set_state("watchdog.{}".format(watchdog),
                           state=self.state_normal,
                           attributes={"entities": attributes})
            watchdog_state = self.get_state("watchdog.{}".format(watchdog), attribute="all")
        watchdog_attributes = watchdog_state.get("attributes", {})
        watchdog_entities = watchdog_attributes.get("entities", [])
        
        if not isinstance(watchdog_entities, list):
            watchdog_entities = []

        if add_or_remove == "add":
            if entity not in watchdog_entities:
                watchdog_entities.append(entity)
        elif add_or_remove == "remove":
            if entity in watchdog_entities:
                watchdog_entities.remove(entity)

        if watchdog_entities:
            attributes["entities"] = watchdog_entities
            attributes["friendly_names"] = self.get_friendly_names(watchdog_entities)
            self.set_state("watchdog.{}".format(watchdog),
                           state=self.state_offline,
                           attributes=attributes)
        else:
            attributes["entities"] = []
            attributes["friendly_names"] = []
            self.set_state("watchdog.{}".format(watchdog),
                           state=self.state_normal,
                           attributes=attributes)

    def get_friendly_names(self, entities):
        """Return a list of friendly names."""
        friendly = []
        for entity in entities:
            entity_state = self.get_state(entity, attribute="all")
            entity_attributes = entity_state.get("attributes", {})
            friendly.append(entity_attributes.get("friendly_name", entity))
        return friendly

    def validate_config(self, config):
        """Validate the configuration."""
        self.state_normal = config.get("state_normal", "All good")
        self.state_offline = config.get("state_offline", "Something is wrong!")
        self.watchdog_config = {}

        if not isinstance(config["watchdogs"], list):
            self.log("Config option 'watchdogs' is not a list!")
            return False

        for watchdog in config["watchdogs"]:
            if not isinstance(watchdog, dict):
                self.log("Config option 'watchdogs[{}]' is not a dictionary!".format(watchdog))
                return False

            if watchdog.get("name") is None:
                self.log("Required config option 'watchdogs[][name]' is missing!")
                return False

            if not isinstance(watchdog.get("entities"), list):
                self.log("Config option 'watchdogs[][entities]' is not a list!")
                return False

            for entity in watchdog["entities"]:
                if not isinstance(entity, dict):
                    self.log("Config option 'watchdogs[entities][]' is not a dictionary!")
                    return False

        for watchdog in config["watchdogs"]:
            name = watchdog["name"].lower().replace(" ", "_")
            self.watchdog_config[name] = {}
            self.watchdog_config[name]["icon"] = watchdog.get("icon", "mdi:eye")
            self.watchdog_config[name]["friendly_name"] = watchdog["name"]
            self.watchdog_config[name]["entities"] = {}
            for entity in watchdog["entities"]:
                state = entity.get("state")
                if state is True:
                    state = "on"
                elif state is False:
                    state = "off"
                elif state is None:
                    state = "off"
                self.watchdog_config[name]["entities"][entity["entity"]] = {}
                self.watchdog_config[name]["entities"][entity["entity"]]["above"] = entity.get("above")
                self.watchdog_config[name]["entities"][entity["entity"]]["below"] = entity.get("below")
                self.watchdog_config[name]["entities"][entity["entity"]]["state"] = state
        return True
