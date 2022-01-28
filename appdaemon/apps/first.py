import appdaemon.plugins.hass.hassapi as hass

class First(hass.Hass):

    def initialize(self):
        self.listen_event(self.first_event, "FIRST_EVENT")


    def first_event(self, event_name, data, kwargs):
        self.log("Hey, it works!")