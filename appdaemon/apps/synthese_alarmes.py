import hassapi as hass

# Niveau de JOURNALISATION (log): 0=rien ou 1 =info ou 2=debug 
JOURNAL=2 

class SyntheseAlarmes(hass.Hass):
    def initialize(self):
        message_notification= "Initialisation Synthese Alarmes."
        self.notification(message_notification,0,"")
        self.log(message_notification, log="error_log")
        # Liste des entités sutrveillées, l'"etat" est l'état "anormal"
        self.listen_state(self.change,"binary_sensor.alarme_porte_cellier",etat="on")
        self.listen_state(self.change,"binary_sensor.alarme_porte_garage",etat="on")
        self.listen_state(self.change,"binary_sensor.alarme_porte_sous_sol",etat="on")
        self.listen_state(self.change,"binary_sensor.alarme_petite_porte_sous_solr",etat="on")
        self.listen_state(self.change,"binary_sensor.alarme_status_pac",etat="off")
        self.listen_state(self.change,"binary_sensor.alarme_discord_pac",etat="off")
        self.listen_state(self.change,"binary_sensor.alarme_temp_congelo_haute",etat="on")
        self.listen_state(self.change,"binary_sensor.porte_frigo",etat="on")
        self.listen_state(self.change,"input_boolean.test_alert",etat="off")

    def change(self, entity, attribute, old, new, kwargs):
        etat= kwargs["etat"]
        nom_entité = self.friendly_name(entity)
        #etat = self.get_state(certif, attribute="state")
        if new==etat:
            message_notification= "Alarme: "+nom_entité+" est "+etat
            self.notification(message_notification,0,"teleg")

    # Fonction Notification
    # message =  Texte à afficher
    # niveau = niveau de journalisation 0,1,2
    # si notif == "teleg" on notifie aussi sur Télégram et Dwains Dashboard
    def notification(self,texte_message,niveau,notif):
        global JOURNAL
        heure = str(self.time())[:8]
        if niveau <= JOURNAL:
            message_notification= format(heure)+": "+ texte_message
            self.log(message_notification, log="test_log")
            if notif=="teleg":
                self.call_service('notify/telegram', message=message_notification)
                #self.call_service('persistent_notification/create', message=message_notification)
                self.call_service('dwains_dashboard/notification_create', message=message_notification)