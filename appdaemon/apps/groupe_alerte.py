#import appdaemon.plugins.hass.hassapi as hass
import hassapi as hass
import datetime

class GroupeAlerte(hass.Hass):

    def initialize(self):
        self.log('Initialisation ...')
        self.timers = {}
        group = self.get_state(self.args["groupe"], attribute = "all")
        # Recupere les entités du groupe
        entités = group["attributes"]["entity_id"]
        
        for entité in entités:
            self.log('Surveillance de: ' + str(entité))
            # init timer dictionary, each entry represents a window (name->timer) 
            self.timers[str(entité)] = None
            self.listen_state(self.hors_reseau, entité)

    def hors_reseau(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        timer_key_off = str(entity)
        timer_key_on = str(entity)
        friendly_name = self.friendly_name(entity)
        if new == "off":
            self.log(f'{friendly_name} est deconnectee ',log="diag_log")
            self.log(f'Debut tempo pour {friendly_name}')
            self.timers[timer_key_off] = self.run_in(self.send_notification_off, 60, entité_n= friendly_name, timer= timer_key_off )
            timer_on = self.timers[timer_key_on]
#            self.log(f'Surveillance de: {self.timers[timer_key_off]}')
            if timer_on != None:
                self.log(f'Fin tempo off pour {friendly_name}')
                self.timers[timer_key_on] = self.cancel_timer(timer_on) 
        else:
#            self.log(str(friendly_name) + ' est connectee',log="diag_log")
#            self.call_service('notify/telegram', message=format(heure)+" : Entité <" +format(friendly_name)+" > connectée!")
#            self.call_service('persistent_notification/create', message=format(heure)+" : Entité <" +format(friendly_name)+" > connectée!")
            timer_off = self.timers[timer_key_off]
            if timer_off != None:
                self.log(f'Fin tempo on pour {friendly_name}')
                self.timers[timer_key_off] = self.cancel_timer(timer_off) 
            self.timers[timer_key_off] = self.run_in(self.send_notification_on, 60, entité_n= friendly_name, timer= timer_key_off )

    def send_notification_off(self, kwargs):
        heure = str(self.time())[:8]
        entité_nom = kwargs["entité_n"]
        timer_key = kwargs["timer"]
        # forget timer reference
        self.timers[timer_key] = None
        # send your notification   
        self.log(f'Alerte! {entité_nom} est deconnecte depuis 1 mn.') 
        self.call_service('notify/telegram', message=format(heure)+": Entité <" +format(entité_nom)+" > est deconnectée depuis 1mn!")
        self.call_service('persistent_notification/create', message=format(heure)+" : Entité <" +format(entité_nom)+" > est deconnectée depuis 1mn!")

    def send_notification_on(self, kwargs):
        heure = str(self.time())[:8]
        entité_nom = kwargs["entité_n"]
        timer_key = kwargs["timer"]
        # forget timer reference
        self.timers[timer_key] = None
        # send your notification   
        self.log(f'Alerte! {entité_nom} est connecte depuis 1 mn.') 
        self.call_service('notify/telegram', message=format(heure)+": Entité <" +format(entité_nom)+" > est connectée depuis 1mn!")
        self.call_service('persistent_notification/create', message=format(heure)+" : Entité <" +format(entité_nom)+" > est connectée depuis 1mn!")        