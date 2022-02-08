import hassapi as hass
import datetime
from datetime import datetime, timedelta
import subprocess

class Test(hass.Hass):
    def initialize(self):
        self.mon_entité = {}
        group = self.get_state(self.args["groupe"], attribute = "all")
        # Recupere les entités du groupe
        entités = group["attributes"]["entity_id"]
        duree_tempo=int(self.args["tempo"])

        for entité in entités:
            self.log('Surveillance de: ' + str(entité), log="test_log")
            # init timer dictionary, each entry represents a window (name->timer) 
            name_entité = self.get_state(entité,attribute="entity_id")
            self.mon_entité[entité] = self.get_entity(entité)
            self.mon_entité[entité].listen_state(self.change_off,new = "off", duration = 10,nom=name_entité)
            self.mon_entité[entité].listen_state(self.change_on,new = "on", duration = 1,nom=name_entité)

#            self.my_entity = self.get_entity("input_boolean.test_alert")
#            self.my_entity.listen_state(self.change_off,new = "off", duration = 10)
#            self.my_entity.listen_state(self.change_on,new = "on", duration = 10)
#            #self.listen_state("input_boolean.test_alert",self.change,new = "on", duration = 10)
#            self.log('Initialisation Test..', log="test_log")

    def change_off(self, entity, attribute, old, new, kwargs):
        nom_entité = kwargs["nom"]
        self.log(f'Etat:{nom_entité}={new}', log="test_log")
        
    def change_on(self, entity, attribute, old, new, kwargs):
        nom_entité = kwargs["nom"]
        returncode = subprocess.run("/config/gitpush.sh",shell=True)
        self.log(str(returncode), log="test_log")
        self.log(f'Etat:{nom_entité}={new}', log="test_log")
        