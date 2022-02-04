#import appdaemon.plugins.hass.hassapi as hass
import hassapi as hass
import datetime

class GroupeAlerte(hass.Hass):
    def initialize(self):
        self.log('Initialisation ...', log="groupealerte_log")
        self.tempo = {}
        group = self.get_state(self.args["groupe"], attribute = "all")
        # Recupere les entités du groupe
        entités = group["attributes"]["entity_id"]
        duree_tempo=int(self.args["tempo"])
        for entité in entités:
            self.log('Surveillance de: ' + str(entité), log="groupealerte_log")
            # init timer dictionary, each entry represents a window (name->timer) 
            self.tempo[str(entité)] = None
            self.listen_state(self.change, entité)
            nom_entité = self.get_state(entité,attribute="entity_id")
            etat_entité = self.get_state(entité,attribute="state")
            if etat_entité == "off":
                self.tempo[nom_entité]=self.run_in(self.notification, duree_tempo,entité=nom_entité,temps=duree_tempo)
                self.log(f'Initialisation: {nom_entité} est OFF.', log="groupealerte_log")

    def change(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        duree_tempo=int(self.args["tempo"])
        tempo_on = str(entity)
        nom_entité = str(entity)
        if new == "on":
            cle_tempo = self.tempo[nom_entité]
            #self.log(f'Cle Tempo avant test {cle_tempo}', log="groupealerte_log")
            if cle_tempo != None:
                #self.log(f'Tempo {nom_entité} en cours: {self.info_timer(cle_tempo)}', log="groupealerte_log")
                self.tempo[nom_entité] = self.cancel_timer(cle_tempo) 
                #self.log(f'Nouvelle valeur de {entity}: {new}-Tempo={duree_tempo}', log="groupealerte_log")
                #self.log(f'Info tempo: {self.info_timer(cle_tempo)}', log="groupealerte_log")
                #self.log(f'Cle tempo si pas None {cle_tempo}', log="groupealerte_log")
            if cle_tempo == False:
                #self.log(f'Cle tempo si None {cle_tempo}', log="groupealerte_log")
                self.log(f'{nom_entité} est ON', log="groupealerte_log")
                message_notification= format(heure)+":"+ format(nom_entité)+" est ON"
                self.call_service('notify/telegram', message=message_notification)
                self.call_service('persistent_notification/create', message=message_notification)                    
        else:
            self.tempo[nom_entité] = self.run_in(self.notification, duree_tempo,entité=nom_entité,temps=duree_tempo)
            cle_tempo = self.tempo[nom_entité]
            # self.log(f'Armement tempo: {self.info_timer(cle_tempo)}', log="groupealerte_log")

    def notification(self, kwargs):
        heure = str(self.time())[:8]
        nom_entité = kwargs["entité"]
        duree_temps= kwargs["temps"]
        cle_tempo = self.tempo[nom_entité]
        #self.log(f'Cle tempo si Time Out {cle_tempo}', log="groupealerte_log")
        self.tempo[nom_entité] = self.cancel_timer(cle_tempo)
        #cle_tempo = self.tempo[nom_entité]
        self.log(f'Alerte! {nom_entité} est OFF depuis {duree_temps} sec.', log="groupealerte_log")
        message_notification= format(heure)+" Alerte! "+ format(nom_entité)+" est OFF depuis: "+format(duree_temps)+" sec."
        self.call_service('notify/telegram', message=message_notification)
        self.call_service('persistent_notification/create', message=message_notification)                    