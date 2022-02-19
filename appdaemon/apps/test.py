import hassapi as hass

JOURNAL=2

class Test(hass.Hass):
    def initialize(self):
        if "certif" in self.args:
            for certif in self.split_device_list(self.args["certif"]):
                self.listen_state(self.state_change, certif)
                self.notification('Surveillance de:'+certif,2)
                

    def state_change(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        nom_entité =  self.friendly_name(entity)
        s_bas= int(self.args["seuil_bas"])
        date_fin = new
        self.notification("Date de Fin:" + str(date_fin),2)
        validite = self.get_state(entity,attribute="is_valid")
        self.notification("Validité:" + validite,2)
        # Vérifie si le certificat est valide
        validité = self.get_state(entity, "is_valid")
        if validité == False:
            message_notification= format(heure)+": Attention: Le certificat <"+ format(nom_entité)+"> est invalide."
            self.notification(message_notification,2)
            
        if validité != False or validité != True:
            self.notification('Entite <'+nom_entité+'> n est pas un certificat',2)

        # Vérifie si le nombre de jours est inférieur au seuil bas
        if (validité == False or validité == True) and int(new) < int(self.args["seuil_bas"]):
            message_notification= format(heure)+": Attention: Fin du certificat <"+ format(nom_entité)+"> dans "+format(int(new))+" J."
            self.notification(message_notification,2)
            

    # Fonction Notification
    # message =  Texte à afficher
    # niveau = niveau de journalisation 0,1,2
    def notification(self,message,niveau):
        global JOURNAL
        heure = str(self.time())[:8]
        if niveau <= JOURNAL:
            message_notification= format(heure)+": "+ message
            self.log(message_notification, log="test_log")
            #self.call_service('notify/telegram', message=message_notification)
            #self.call_service('persistent_notification/create', message=message_notification)

    