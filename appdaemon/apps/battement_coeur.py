import hassapi as hass

class Heartbeat(hass.Hass):
    def initialize(self):
        if "entite" in self.args:
            for sensor in self.split_device_list(self.args["entite"]):
                self.listen_state(self.change, sensor)
                self.log(f'Surveillance de {sensor}', log="test_log") 

    def change(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        tempo_on = str(entity)
        friendly_name = self.friendly_name(entity)
        nouvelle_valeur = new
        self.log(f'Nouvelle valeur: {nouvelle_valeur}', log="test_log")
        self.timers[tempo_on] = self.run_in(self.notification, 60, entité_n= friendly_name, timer= tempo_on )
        self.log(f'Surveillance de: {entity}', log="test_log")

    def notification(self, kwargs):
        heure = str(self.time())[:8]
        entité_nom = kwargs["entité_n"]
        tempo_on = kwargs["timer"]
        # forget timer reference
        self.timers[tempo_on] = None
        # send your notification   
        self.log(f'Alerte! {entité_nom} est out depuis 1 mn.', log="test_log") 
