import hassapi as hass
import datetime
from datetime import datetime
from datetime import timedelta
import time

#  Niveau de JOURNALISATION (log): 0=rien ou 1 =info ou 2=debug 
JOURNAL=2 

class AlerteFinCertificats(hass.Hass):
    def initialize(self):
        if "certif" in self.args:
            for certif in self.split_device_list(self.args["certif"]):
                self.notification('Surveillance de:'+certif,2,"")
        tempo_j = self.run_daily(self.bilan_jour, "00:05:00")
        self.bilan_jour(self)
        #tempo_j = self.run_every(self.bilan_jour, "now", 1 * 60)
        self.log("Initialisation Alert_fin_certificat.py", log="fin_certificats_log")
        self.log("Initialisation Alert_fin_certificat.py", log="error_log")
            
    def bilan_jour(self,kwargs):
        s_bas= int(self.args["seuil_bas"])
        tousvalides=1 # Indicateur que tous les certificats sont valables
        for certif in self.split_device_list(self.args["certif"]):
            self.notification('Lecture de:'+certif,2,"")
            nom_entité =  self.friendly_name(certif)
            
            etat = self.get_state(certif, attribute="state")
            validité = self.get_state(certif,attribute="is_valid")
            self.notification("Friendly_name= "+nom_entité,2,"")
            self.notification("Etat= "+etat,2,"")
            # Vérifie si le certificat est valide
            if etat !="unknown" or validité == True:
                # Création entités dans HA
                binarysensorname="binary_sensor.cert_"+certif[29:]+"_validite"  #binary_sensor.certificat_ha
                #binarysensorname="binary_sensor.cert_"+nom_entité+"_validite"  #binary_sensor.certificat_ha
                self.set_state(binarysensorname, state="on", replace=True, attributes= {"icon": "mdi:check","device_class": "connectivity"})
                self.notification("Binary_SensorName:" + binarysensorname,2,"")
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
                    sensorname="sensor.cert_"+certif[29:]+"_fin"
                    #sensorname="sensor.cert_"+nom_entité+"_fin"
                    self.notification("SensorName:" + sensorname,2,"")

                    # Vérifie si le nombre de jours est inférieur au seuil bas
                    if nb_jour < s_bas:
                        # Mise à jour entités HA
                        message_notification= "Attention: Fin du certificat <"+ format(nom_entité)+"> dans "+ format(nb_jour)+" J."
                        self.set_state(sensorname, state=nb_jour, replace=True, attributes= {"icon": "mdi:alert-octagram", "unit_of_measurement": "J"})
                        self.notification(message_notification,0,"teleg")
                    else:
                        # Mise à jour entités HA
                        message_notification= "Le certificat <"+ format(nom_entité)+"> est encore valable "+ format(nb_jour)+" J."
                        self.set_state(sensorname, state=nb_jour, replace=True, attributes= {"icon": "mdi:check", "unit_of_measurement": "J"})
                        self.notification(message_notification,2,"")
            else:
                tousvalides=0 # Indicateur qu'au moins un certificat n'est plus valable
                # Mise à jour entité HA
                binarysensorname="binary_sensor.cert_"+nom_entité+"_validite"
                self.set_state(binarysensorname, state="off", replace=True, attributes= {"icon": "mdi:alert-octagram","device_class": "connectivity"})
                message_notification= " Attention: Le certificat <"+ format(nom_entité)+"> n'est plus valide."
                self.notification(message_notification,0,"teleg")

        #  mise à jour dans HA de l'indicateur synthèse que les certificats sont valables
        if tousvalides==1:
            self.set_state("binary_sensor.certificat_tous_valides",state="on", replace=True, attributes= {"icon": "mdi:check","device_class": "connectivity"})
        else:
            self.set_state("binary_sensor.certificat_tous_valides",state="off", replace=True, attributes= {"icon": "mdi:alert-octagram","device_class": "connectivity"})



                
    # Fonction Notification
    # message =  Texte à afficher
    # niveau = niveau de journalisation 0,1,2
    # si notif == "teleg" on notifie aussi sur Télégram
    def notification(self,texte_message,niveau,notif):
        global JOURNAL
        heure = str(self.time())[:8]
        if niveau <= JOURNAL:
            message_notification= format(heure)+": "+ texte_message
            self.log(message_notification, log="fin_certificats_log")
            if notif=="teleg":
                self.call_service('notify/telegram', message=message_notification)
                self.call_service('persistent_notification/create', message=message_notification)
                self.call_service('dwains_dashboard/notification_create', message=message_notification)
    