
import hassapi as hass
import datetime
from datetime import datetime
from datetime import timedelta
import time

# Niveau de JOURNALISATION (log): 0=rien ou 1 =info ou 2=debug 
JOURNAL=2 

class Test(hass.Hass):
    def initialize(self):
        self.notification("Initialisation Surveille Certificats..",1,"")
        if "certif" in self.args:
            for certif in self.split_device_list(self.args["certif"]):
                self.notification('Surveillance de:'+certif,2,"")
        #tempo_j = self.run_daily(self.bilan_jour, "00:05:00")
        tempo_j = self.run_every(self.bilan_jour, "now", 1 * 60)
            
    def bilan_jour(self,kwargs):
        s_bas= int(self.args["seuil_bas"])
        
        for certif in self.split_device_list(self.args["certif"]):
            self.notification('Lecture de:'+certif,2,"")
            nom_entité =  self.friendly_name(certif)
            etat = self.get_state(certif, attribute="state")
            validité = self.get_state(certif,attribute="is_valid")
            
            self.notification("Etat= "+etat,2,"")
            # Vérifie si le certificat est valide
            if etat !="unknown" or validité == True:
                ce_jour=datetime.strptime(time.strftime('%Y:%m:%d', time.localtime()),'%Y:%m:%d')
                self.notification("ce Jour:" + str(ce_jour),2,"")
                date_de_fin=datetime.strptime(etat[:10],'%Y-%m-%d')
                self.notification("Date de Fin:" + str(date_de_fin),2,"")
                if date_de_fin<ce_jour:
                    nb_jour=(date_de_fin-ce_jour).days
                    self.notification("nb Jour negatifs:" + str(nb_jour),2,"")
                else:
                    nb_jour=(date_de_fin-ce_jour).days
                    self.notification("nb Jour:" + str(nb_jour),2,"")
                    sensorname=certif+"_nb_jour"
                    self.set_state(sensorname, state=nb_jour, replace=True, attributes= {"icon": "mdi:check", "unit_of_measurement": "J"})
                    self.notification("SensorName:" + sensorname,2,"")

                    # Vérifie si le nombre de jours est inférieur au seuil bas
                    if nb_jour < s_bas:
                        message_notification= "Attention: Fin du certificat <"+ format(nom_entité)+"> dans "+ format(nb_jour)+" J."
                        self.notification(message_notification,0,"teleg")
                    else:
                        message_notification= "Le certificat <"+ format(nom_entité)+"> est encore valable "+ format(nb_jour)+" J."
                        self.notification(message_notification,2,"")
            else:
                message_notification= " Attention: Le certificat <"+ format(nom_entité)+"> n'est plus valide."
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
#            if notif=="teleg":
#                self.call_service('notify/telegram', message=message_notification)
#                self.call_service('persistent_notification/create', message=message_notification)
    
    