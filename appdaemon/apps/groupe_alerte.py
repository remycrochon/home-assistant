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
        timer_key = str(entity)
        friendly_name = self.friendly_name(entity)
        if new == "off":
            self.log(str(entity) + ' est deconnectee ',log="diag_log")
            self.log(f'Debut tempo pour {friendly_name}')
            self.timers[timer_key] = self.run_in(self.send_notification, 60, entité_n= friendly_name, timer= timer_key )
        else:
#            self.log(str(friendly_name) + ' est connectee',log="diag_log")
#            self.call_service('notify/telegram', message=format(heure)+" : Entité <" +format(friendly_name)+" > connectée!")
#            self.call_service('persistent_notification/create', message=format(heure)+" : Entité <" +format(friendly_name)+" > connectée!")
            timer = self.timers[timer_key]
            if timer != None:
                self.log(f'Fin tempo pour {friendly_name}')
                self.timers[timer_key] = self.cancel_timer(timer) 

    def send_notification(self, kwargs):
        heure = str(self.time())[:8]
        entité_nom = kwargs["entité_n"]
        timer_key = kwargs["timer"]
        # forget timer reference
        self.timers[timer_key] = None
        # send your notification   
        self.log(f'Alerte! {entité_nom} est deconnecte depuis 1 mn.') 
        self.call_service('notify/telegram', message=format(heure)+": Entité <" +format(entité_nom)+" > est deconnectée depuis 1mn!")
        self.call_service('persistent_notification/create', message=format(heure)+" : Entité <" +format(entité_nom)+" > est deconnectée depuis 1mn!")