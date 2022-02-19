import hassapi as hass
#import datetime
from datetime import datetime
from datetime import timedelta
import time
JOURNAL=2

class Test(hass.Hass):
    def initialize(self):
        if "certif" in self.args:
            for certif in self.split_device_list(self.args["certif"]):
                self.listen_state(self.state_change, certif)
                self.notification('Surveillance de:'+certif,2,"")

    def state_change(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        nom_entité =  self.friendly_name(entity)
        s_bas= int(self.args["seuil_bas"])
        self.notification("New= "+new,2,"")
        validité = self.get_state(entity,attribute="is_valid")
        # Vérifie si le certificat est valide
        if new !="unknown" or validité == True:
            ce_jour=datetime.strptime(time.strftime('%Y:%m:%d', time.localtime()),'%Y:%m:%d')
            self.notification("ce Jour:" + str(ce_jour),2,"")
            date_de_fin=datetime.strptime(new[:10],'%Y-%m-%d')
            self.notification("Date de Fin:" + str(date_de_fin),2,"")
            if date_de_fin<ce_jour:
                nb_jour=(date_de_fin-ce_jour).days
                self.notification("nb Jour negatifs:" + str(nb_jour),2,"")
            else:
                nb_jour=(date_de_fin-ce_jour).days
                self.notification("nb Jour:" + str(nb_jour),2,"")
                # Vérifie si le nombre de jours est inférieur au seuil bas
                if nb_jour < s_bas:
                    message_notification= "Attention: Fin du certificat <"+ format(nom_entité)+"> dans "+ format(nb_jour)+" J."
                    self.notification(message_notification,0,"teleg")
                else:
                    message_notification= "Le certificat <"+ format(nom_entité)+"> est encore valable "+ format(nb_jour)+" J."
                    self.notification(message_notification,0,"teleg")
        else:
            message_notification= format(heure)+": Attention: Le certificat <"+ format(nom_entité)+"> n'est plus valide."
            self.notification(message_notification,0,"teleg")
            
    # Fonction Notification
    # message =  Texte à afficher
    # niveau = niveau de journalisation 0,1,2
    # si notif == "teleg" on notifie aussi sur Télégram
    def notification(self,texte_message,niveau,notif):
        global JOURNAL
        heure = str(self.time())[:8]
        if niveau <= JOURNAL:
            message_notification= format(heure)+": "+ texte_message
            self.log(message_notification, log="test_log")
            if notif=="teleg":
                self.call_service('notify/telegram', message=message_notification)
                self.call_service('persistent_notification/create', message=message_notification)

    