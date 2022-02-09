import hassapi as hass
import datetime
from datetime import datetime, timedelta
import subprocess

flag={}

class Test(hass.Hass):
    def initialize(self):
        self.mon_entité = {}
        group = self.get_state(self.args["groupe"], attribute = "all")
        # Recupere les entités du groupe
        entités = group["attributes"]["entity_id"]
        duree_tempo=int(self.args["tempo"])

        for entité in entités:
            # init timer dictionary, each entry represents a window (name->timer) 
            name_entité = self.get_state(entité,attribute="friendly_name")
            self.mon_entité[entité] = self.get_entity(entité)
            self.mon_entité[entité].listen_state(self.change_off,new = "off", duration = duree_tempo,nom=name_entité)
            self.mon_entité[entité].listen_state(self.change_on,new = "on", duration = duree_tempo,nom=name_entité)
            flag[entité] = self.get_state(entité,attribute="state")
            self.log(f'Surveillance de: {entité}/flag={flag[entité]}', log="test_log")

    def change_off(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        flag[entity]= "off"
        nom_entité = kwargs["nom"]
        #self.log(f'Attention! Etat: {nom_entité} -> {new}/{flag[entity]}', log="test_log")
        self.log(f'Attention! Etat:{nom_entité} sur {new}', log="test_log")
        message_notification= format(heure)+":"+" Attention: "+ format(nom_entité)+" sur OFF"
        self.call_service('notify/telegram', message=message_notification)
        self.call_service('persistent_notification/create', message=message_notification)     
        
    def change_on(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        nom_entité = kwargs["nom"]
        #self.log(f'Etat: {nom_entité} = {new}/{flag[entity]}', log="test_log")
        if flag[entity] == "off":
            self.log(f'Retour Etat: {nom_entité} sur {new}', log="test_log")
            message_notification= format(heure)+":"+" Retour a la normale: "+ format(nom_entité)+" sur ON"
            self.call_service('notify/telegram', message=message_notification)
            self.call_service('persistent_notification/create', message=message_notification)     
            flag[entity] = "on"

#returncode = subprocess.run("/config/gitpush.sh",shell=True)
#self.log(str(returncode), log="test_log")
        