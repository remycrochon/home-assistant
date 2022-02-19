import hassapi as hass

class AlerteFinCertificats(hass.Hass):
    def initialize(self):
        if "certif" in self.args:
            for certif in self.split_device_list(self.args["certif"]):
                self.listen_state(self.state_change, certif)
                self.log(f'Surveillance de : {certif}',log="fin_certificats_log")

    def state_change(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        nom_entité =  self.friendly_name(entity)
        s_bas= int(self.args["seuil_bas"])
                
        # Vérifie si le certificat est valide
        validité = self.get_state(entity, "is_valid")
        if validité == False:
            self.log(f'Attention: Le certificat <{nom_entité}> est invalide', log="fin_certificats_log")
            message_notification= format(heure)+": Attention: Le certificat <"+ format(nom_entité)+"> est invalide."
            self.call_service('notify/telegram', message=message_notification)
            self.call_service('persistent_notification/create', message=message_notification)
        if validité != False or validité != True:
            self.log(f'Entite <{nom_entité}> n est pas un certificat', log="fin_certificats_log")

        # Vérifie si le nombre de jours est inférieur au seuil bas
        if (validité == False or validité == True) and int(new) < int(self.args["seuil_bas"]):
            self.log(f'Attention! Le certificat <{nom_entité}> se termine dans {int(new)} J', log="fin_certificats_log")
            # Formatage du message de notification
            message_notification= format(heure)+": Attention: Fin du certificat <"+ format(nom_entité)+"> dans "+format(int(new))+" J."
            self.call_service('notify/telegram', message=message_notification)
            self.call_service('persistent_notification/create', message=message_notification)

    