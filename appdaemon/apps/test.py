
import hassapi as hass


# Niveau de JOURNALISATION (log): 0=rien ou 1 =info ou 2=debu
JOURNAL=2 
# Seuil PV marche pompe
PV_SEUIL_MA_PPE = 800.0
# Seuil PV Arret pompe
PV_SEUIL_AT_PPE = 300.0
# Cde PPE

class Test(hass.Hass):

    def initialize(self):
        self.notification("Initialisation test..",1,"")
        self.register_constraint("filtre_pu_pv")
        self.listen_state(self.pu_pv_sup,self.args["pu_pv"], duration=5, filtre_pu_pv="sh")
        self.listen_state(self.pu_pv_inf,self.args["pu_pv"], duration=5, filtre_pu_pv="sb")

    def filtre_pu_pv(self,value):
        global PV_SEUIL_MA_PPE,PV_SEUIL_AT_PPE
        valeur = float(self.get_state(self.args["pu_pv"]))
        if value == "sh":
            if valeur > PV_SEUIL_MA_PPE: 
                #self.notification("val_sup= "+str(valeur),2,"")
                return True
        elif value == "sb":
            if valeur < PV_SEUIL_AT_PPE: 
                #self.notification("val_inf= "+str(valeur),2,"")    
                return True
        else:
            return False

    def pu_pv_sup(self, entity, attribute, old, new, kwargs):
        valeur=new
        self.notification("valeur_sup= "+str(valeur),2,"")
    def pu_pv_inf(self, entity, attribute, old, new, kwargs):
        valeur=new
        self.notification("valeur_inf= "+str(valeur),2,"")



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
    
    