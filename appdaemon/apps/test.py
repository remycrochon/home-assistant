import hassapi as hass

class Test(hass.Hass):
    def initialize(self):
        duree_tempo=int(self.args["tempo"])
        name_entité = self.get_state(self.args["entite"],attribute="friendly_name")
        self.mon_entité = self.get_entity(self.args["entite"])
        self.mon_entité.listen_state(self.change,attribute="all", duration = duree_tempo,nom=name_entité)
        self.tempo=self.run_in(self.notification, duree_tempo,entité=name_entité,temps=duree_tempo)
        self.log(f'Surveillance de: {name_entité}', log="test_log")

    def change(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        nom_entité = kwargs["nom"]
        #self.log(f'Attention! Etat: {nom_entité} -> {new}/{flag[entity]}', log="test_log")
        self.log(f'Changement Etat:{nom_entité} old= {old} new= {new}', log="test_log")
        message_notification= format(heure)+":"+" Attention: "+ format(nom_entité)+" sur OFF"
        self.tempo = self.cancel_timer
        self.tempo=self.run_in(self.notification, duree_tempo,entité=name_entité,temps=duree_tempo)
#        self.call_service('notify/telegram', message=message_notification)
#        self.call_service('persistent_notification/create', message=message_notification)     

    def notification(self, kwargs):
        heure = str(self.time())[:8]
        nom_entité = kwargs["entité"]
        #self.log(f'Attention! Etat: {nom_entité} -> {new}/{flag[entity]}', log="test_log")
        self.log(f'Etat:{nom_entité} old= {old} new= {new}', log="test_log")
        message_notification= format(heure)+":"+" Attention: "+ format(nom_entité)+" sur OFF"
#        self.call_service('notify/telegram', message=message_notification)
#        self.call_service('persistent_notification/create', message=message_notification)     
