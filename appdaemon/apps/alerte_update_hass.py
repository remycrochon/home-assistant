import hassapi as hass

class AlerteUpdateHass(hass.Hass):
    def initialize(self):
        self.mon_entité = {}
        group = self.get_state(self.args["groupe"], attribute = "all")
        # Recupere les entités du groupe
        entités = group["attributes"]["entity_id"]
        
        for entité in entités:
            # Initialisation du tableau des entités
            name_entité = self.get_state(entité,attribute="friendly_name")
            self.mon_entité[entité] = self.get_entity(entité)
            self.mon_entité[entité].listen_state(self.change_on,new = "on", nom=name_entité)
            self.log(f'Surveillance de: {entité}', log="groupealerte_log")

    def change_on(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        nom_entité = kwargs["nom"]
        #self.log(f'Etat: {nom_entité} = {new}/{flag[entity]}', log="groupealerte")
        self.log(f'Mise à jour: {nom_entité} nécessaire', log="groupealerte_log")
        # Formatage du message de notification
        message_notification= format(heure)+": Mise à jour de: "+ format(nom_entité)+" nécessaire"
        self.call_service('notify/telegram', message=message_notification)
        self.call_service('persistent_notification/create', message=message_notification)

        