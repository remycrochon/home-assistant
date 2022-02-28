import hassapi as hass

FLAG={} # memorise le changement d'état de on à off

class GroupeAlerte(hass.Hass):
    def initialize(self):
        self.mon_entité = {}
        group = self.get_state(self.args["groupe"], attribute = "all")
        # Recupere les entités du groupe
        entités = group["attributes"]["entity_id"]
        duree_tempo=int(self.args["tempo"])

        for entité in entités:
            # Initialisation du tableau des entités
            name_entité = self.get_state(entité,attribute="friendly_name")
            self.mon_entité[entité] = self.get_entity(entité)
            self.mon_entité[entité].listen_state(self.change_off,new = "off", duration = duree_tempo,nom=name_entité)
            self.mon_entité[entité].listen_state(self.change_on,new = "on", duration = duree_tempo,nom=name_entité)
            FLAG[entité] = self.get_state(entité,attribute="state")
            self.log(f'Surveillance de: {entité}/FLAG={FLAG[entité]}', log="groupealerte_log")

    def change_off(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        FLAG[entity]= "off" # mise à jour du FLAG
        nom_entité =  kwargs["nom"]
        duree= int(self.args["tempo"])
        #self.log(f'Attention! Etat: {nom_entité} -> {new}/{FLAG[entity]}', log="test_log")
        self.log(f'Attention! Etat:{nom_entité} est sur {new} depuis {duree} sec', log="groupealerte_log")
        # Formatage du message de notification
        message_notification= format(heure)+": Attention: "+ format(nom_entité)+" sur OFF depuis: "+ format(duree)+" sec."
        self.call_service('notify/telegram', message=message_notification)
        self.call_service('persistent_notification/create', message=message_notification)
        self.call_service('dwains_dashboard/notification_create', message=message_notification)
        
    def change_on(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        nom_entité = kwargs["nom"]
        #self.log(f'Etat: {nom_entité} = {new}/{FLAG[entity]}', log="groupealerte")
        if FLAG[entity] == "off":
            self.log(f'Retour Etat: {nom_entité} sur {new}', log="groupealerte_log")
            # Formatage du message de notification
            message_notification= format(heure)+":"+" Retour a la normale: "+ format(nom_entité)+" sur ON"
            self.call_service('notify/telegram', message=message_notification)
            self.call_service('persistent_notification/create', message=message_notification)  
            self.call_service('dwains_dashboard/notification_create', message=message_notification)   
            FLAG[entity] = "on" # mise à jour du FLAG

        