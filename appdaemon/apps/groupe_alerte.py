#import appdaemon.plugins.hass.hassapi as hass
import hassapi as hass
import datetime

duree_tempo=int(10)

class GroupeAlerte(hass.Hass):
    def initialize(self):
        self.log('Initialisation ...')
        self.timers = {}
        group = self.get_state(self.args["groupe"], attribute = "all")
        # Recupere les entités du groupe
        entités = group["attributes"]["entity_id"]
        
        for entité in entités:
            self.log('Surveillance de: ' + str(entité), log="groupealerte_log")
            # init timer dictionary, each entry represents a window (name->timer) 
            self.timers[str(entité)] = None
            self.listen_state(self.change, entité)
            #nom_entité = self.get_state(entité,attribute="entity_id")
            #self.timers[nom_entité]=self.run_in(self.notification, duree_tempo,entité=nom_entité,temps=duree_tempo)
            #self.log(f'Initialisation de: {nom_entité}..pour {duree_tempo}s et {self.timers[nom_entité]}.', log="groupealerte_log")

    def change(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        #duree_tempo=int(self.args["tempo"])
        tempo_on = str(entity)
        nom_entité = str(entity)
        if new == "on":
            cle_tempo = self.timers[nom_entité]
            if cle_tempo != None:
                self.timers[nom_entité] = self.cancel_timer(cle_tempo) 
                #self.log(f'Nouvelle valeur de {entity}: {new}-Tempo={duree_tempo}', log="groupealerte_log")
                #self.log(f'Info tempo: {self.info_timer(cle_tempo)}', log="groupealerte_log")
                self.log(f'Tempo ON {cle_tempo}', log="groupealerte_log")
            else:
                self.log(f'{nom_entité} est ON', log="groupealerte_log")
        else:
            self.timers[nom_entité] = self.run_in(self.notification, duree_tempo,entité=nom_entité,temps=duree_tempo)
            cle_tempo = self.timers[nom_entité]
            #self.log(f'Armement tempo: {self.info_timer(cle_tempo)}', log="groupealerte_log")

    def notification(self, kwargs):
        heure = str(self.time())[:8]
        nom_entité = kwargs["entité"]
        duree_temps= kwargs["temps"]
        self.log(f'Alerte! {nom_entité} est OFF depuis {duree_temps} sec.', log="groupealerte_log")
        #self.call_service('notify/telegram', message=format(heure)+"Alerte!"+ format(nom_entité)+"est out depuis: "+format(duree_temps)+" sec.")
        #self.call_service('persistent_notification/create', message=format(heure)+"Alerte!"+ format(nom_entité)+"est out depuis: "+format(duree_temps)+" sec.")                    