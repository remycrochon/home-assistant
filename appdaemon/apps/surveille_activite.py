import hassapi as hass

class SurveilleActivite(hass.Hass):
    def initialize(self):
        self.timers = {}
        self.listen_state(self.change,self.args["entite"])
        nom_entité = self.get_state(self.args["entite"],attribute="entity_id")
        duree_tempo=int(self.args["tempo"])
        self.turn_on(self.args["activite_ok"])
        self.timers[nom_entité]=self.run_in(self.notification, duree_tempo,entité=nom_entité,temps=duree_tempo)
        self.log(f'Initialisation de: {nom_entité}..pour {duree_tempo}s et {self.timers[nom_entité]}.', log="test_log")

    def change(self, entity, attribute, old, new, kwargs):
        heure = str(self.time())[:8]
        duree_tempo=int(self.args["tempo"])
        tempo_on = str(entity)
        nom_entité = str(entity)
        nouvelle_valeur = new
        # Mise à on de Com_Ok
        self.turn_on(self.args["activite_ok"])
        self.log(f'Nouvelle valeur de {entity}: {nouvelle_valeur}-Tempo={duree_tempo}', log="test_log")
        cle_tempo = self.timers[nom_entité]
        if cle_tempo != None:
            self.timers[nom_entité] = self.cancel_timer(cle_tempo) 
            #self.log(f'Info tempo: {self.info_timer(cle_tempo)}', log="test_log")
            self.log(f'Fin tempo {cle_tempo}', log="test_log")

        self.timers[nom_entité] = self.run_in(self.notification, duree_tempo,entité=nom_entité,temps=duree_tempo)

    def notification(self, kwargs):
        heure = str(self.time())[:8]
        nom_entité = kwargs["entité"]
        duree_temps= kwargs["temps"]
        # Mise à off de Com_Ok
        self.turn_off(self.args["activite_ok"])
        self.log(f'Alerte! {nom_entité} est out depuis {duree_temps} sec.', log="test_log")
        #self.call_service('notify/telegram', message=format(heure)+"Alerte!"+ format(nom_entité)+"est out depuis: "+format(duree_temps)+" sec.")
        #self.call_service('persistent_notification/create', message=format(heure)+"Alerte!"+ format(nom_entité)+"est out depuis: "+format(duree_temps)+" sec.")        