# Version du 19/02/2022
import hassapi as hass
import datetime
from datetime import timedelta
import time

# Variables globales
# Saisir ici les memes modes que dans HA 
TAB_MODE = ["Ete", "Hiver", "At F", "Ma F"]
# Niveau de JOURNALISATION (log): 0=rien ou 1 =info ou 2=debug 
JOURNAL=2 
# RAZ du flag fin_tempo
FIN_TEMPO = 0

# Fonction de calcul du temps de filtration selon Abaque Abacus 
def duree_abaque(Temperature_eau):
    #Advanced calculation method using an abacus.
    #D = a*T^3 + b*T^2 + c*T +d
    #T est forçèe a 10°C minimum
    #Formule découverte dans: https://github.com/scadinot/pool
    #Filtration en heures
    temperature_min: float = max(float(Temperature_eau), 10)
    duree = (
            0.00335 * temperature_min ** 3
            - 0.14953 * temperature_min ** 2
            + 2.43489 * temperature_min
            - 10.72859
    )
    return duree

# Fonction de calcul du temps de filtration "Classique" 
def duree_classique(Temperature_eau):
    #Methode classique temperature / 2
    temperature_min: float = max(float(Temperature_eau), 10)
    duree = temperature_min / 2
    duree_m = min(float(duree), 23)
    return duree

# Fonction de Convertion Int en heure "HH:MM:SS"
def en_heure(t):
    h = int(t)
    # On retire les heures pour ne garder que les minutes.
    t = (t - h) * 60 # 0.24 * 60 = temps_restant en minutes.
    m = int(t)
    # On retire les minutes pour ne garder que les secondes.
    t = (t - m) * 60
    s = int(t)
    return "{:02d}:{:02d}:{:02d}".format(h, m, s)

########## Programme principal ###################
class FiltrationPiscineDev(hass.Hass): 
    def initialize(self):
        global JOURNAL, DUREE_TEMPO, FIN_TEMPO
        message_notification= "Initialisation Dev AppDaemon Filtration Piscine."
        self.notification(message_notification,0)
        self.log(message_notification, log="error_log")
        self.notification("Jounal Notif niveau:"+str(JOURNAL),0)
        self.listen_state(self.change_temp,self.args["temperature_eau"])
        self.listen_state(self.change_mode,self.args["mode_de_fonctionnement"])
        self.listen_state(self.change_coef,self.args["coef"])
        self.listen_state(self.ecretage_h_pivot,self.args["h_pivot"])
        self.listen_state(self.change_mode_calcul,self.args["mode_calcul"])
        self.listen_state(self.change_etat_pompe,self.args["cde_pompe"])
        self.listen_state(self.change_arret_force,self.args["arret_force"])
        self.run_every(self.touteslesxminutes, "now", 5 * 60)
        
        # initialisation de la temporisation avant recopie temperature
        DUREE_TEMPO=float(self.get_state(self.args["tempo_eau"]))
        self.notification("Duree tempo:"+str(DUREE_TEMPO),2)
        nom_entité=self.args["cde_pompe"]
        self.tempo=self.run_in(self.fin_temporisation_mesure_temp, DUREE_TEMPO,entité=nom_entité)
        # Arret de la pompe sur initalisation
        self.turn_off(self.args["cde_pompe"])

# Appelé sur changement de temperature
    def change_temp(self, entity, attribute, old, new, kwargs):
        global JOURNAL
        self.notification('Appel traitement changement Temp.',2)
        self.traitement(kwargs)
# Appelé sur changement de mode de fonctionnement
    def change_mode(self, entity, attribute, old, new, kwargs):
        global JOURNAL, FIN_TEMPO
        FIN_TEMPO = 0
        self.notification('Appel traitement changement Mode.',2)
        self.traitement(kwargs)
# Appelé sur changement de coefficient
    def change_coef(self, entity, attribute, old, new, kwargs):
        global JOURNAL
        self.notification('Appel traitement changement Coef.',2)
        self.traitement(kwargs)
# Appelé sur changement de mode de calcul
    def change_mode_calcul(self, entity, attribute, old, new, kwargs):
        global JOURNAL
        self.notification('Appel traitement changement mode de calcul.',2)
        self.traitement(kwargs)
# Appelé sur changement arret forcé
    def change_arret_force(self, entity, attribute, old, new, kwargs):
        global JOURNAL
        self.notification('Appel traitement sur arret force.',2)
        self.traitement(kwargs)
# Appelé sur changement d'état de la pompe de filtrage
    def change_etat_pompe(self, entity, attribute, old, new, kwargs):
        global JOURNAL, FIN_TEMPO ,DUREE_TEMPO
        nom_entité=self.args["cde_pompe"]
        if new=="on":
            self.tempo=self.run_in(self.fin_temporisation_mesure_temp, DUREE_TEMPO,entité=nom_entité)
        else:
            FIN_TEMPO = 0
            cle_tempo = self.tempo
            if cle_tempo != None:
                self.tempo = self.cancel_timer(cle_tempo)   
        
        self.notification('Appel traitement changement etat pompe.',2)
        self.traitement(kwargs)
# Appelé sur fin temporisation suit à demarrage de la pompe
    def fin_temporisation_mesure_temp(self,kwargs):
        global JOURNAL, FIN_TEMPO 
        FIN_TEMPO = 1
        self.notification('Fin temporisation circulation eau.',2)
        self.traitement(kwargs)

# Ecretage Heure pivot entre h_pivot_min et h_pivot_max
    def ecretage_h_pivot(self, entity, attribute, old, new, kwargs):
        h_pivot= new
        h_pivot_max="14:00:00"
        h_pivot_min="11:00:00"
        if h_pivot>h_pivot_max:
            self.set_state(self.args["h_pivot"], state = h_pivot_max)
        if h_pivot<h_pivot_min:
            self.set_state(self.args["h_pivot"], state = h_pivot_min)
        self.traitement(kwargs)

# Appelé toutes les x minutes
    def touteslesxminutes(self, kwargs):
        global JOURNAL
        self.notification('Appel traitement toutes les x mn.',2)
        self.traitement(kwargs)

    def traitement(self, kwargs):
        global JOURNAL, FIN_TEMPO
        h_locale=time.strftime('%H:%M:%S', time.localtime())
        Mesure_temperature_eau = float(self.get_state(self.args["temperature_eau"]))
        Mem_temperature_eau = float(self.get_state(self.args["mem_temp"]))
        mode_de_fonctionnement = self.get_state(self.args["mode_de_fonctionnement"])
        arret_force = self.get_state(self.args["arret_force"])
        pompe = self.args["cde_pompe"]
        pivot= self.get_state(self.args["h_pivot"])
        coef=float(self.get_state(self.args["coef"]))/100
        mode_calcul= self.get_state(self.args["mode_calcul"])
        periode_filtration=self.args["periode_filtration"]

        # Flag FIN_TEMPO
        self.notification("Flag fin tempo= "+str(FIN_TEMPO),2)

        #  Mode Ete
        if mode_de_fonctionnement == TAB_MODE[0]:
            # Temporisation avant prise en compte de la mesure de la temperature
            # sinon on travaille avec la memoire de la temperature avant arret de la pompe
            # mémorise la température eau de la veille.
            if FIN_TEMPO == 1:
                Temperature_eau=Mesure_temperature_eau
                self.set_value(self.args["mem_temp"], Mesure_temperature_eau)
            else:
                Temperature_eau=Mem_temperature_eau

            if mode_calcul == "on": # Calcul selon Abaque
                temps_filtration = (duree_abaque(Temperature_eau)) * coef
                nb_h_avant = en_heure(float(temps_filtration / 2))
                nb_h_apres = en_heure(float(temps_filtration / 2))
                nb_h_total = en_heure(float(temps_filtration))
                self.notification("Duree Filtration Mode Abaque: "+ str(temps_filtration)[:6]+" h",2)
            
            else: # Calcul selon méthode classique
                temps_filtration = (duree_classique(Temperature_eau))*coef
                nb_h_avant = en_heure(float(temps_filtration / 2))
                nb_h_apres = en_heure(float(temps_filtration / 2))
                nb_h_total = en_heure(float(temps_filtration))
                self.notification("Duree Filtration Mode Classique: "+ str(temps_filtration)[:6]+" h",2)

            # Calcul des heures de début et fin filtration en fontion
            # du temps de filtration avant et apres l'heure pivot
            # Adapte l'heure de début de filtration à l'heure actuelle
            # Limitation de la fin de filtration à 23:59:59
            h_maintenant = timedelta(hours=int(h_locale[:2]), minutes=int(h_locale[3:5]), seconds=int(h_locale[6:8]))
            h_pivot = timedelta(hours=int(pivot[:2]), minutes=int(pivot[3:5]))
            h_avant_t = timedelta(hours=int(nb_h_avant[:2]), minutes=int(nb_h_avant[3:5]), seconds=int(nb_h_avant[6:8]))
            h_apres_t = timedelta(hours=int(nb_h_apres[:2]), minutes=int(nb_h_apres[3:5]), seconds=int(nb_h_apres[6:8]))
            h_total_t = timedelta(hours=int(nb_h_total[:2]), minutes=int(nb_h_total[3:5]), seconds=int(nb_h_total[6:8]))
            h_max_t = timedelta(hours=23, minutes=59, seconds=59)

            h_debut = h_pivot - h_avant_t
            h_fin= h_pivot + h_apres_t

#            if h_debut<h_maintenant:
#                h_debut=h_maintenant
#                h_fin=h_maintenant+h_total_t
#                h_fin= min(h_fin,h_max_t)
            h_fin= min(h_fin,h_max_t)
            message_notification= "Nb h_avant_t: "+str(h_avant_t)+"/Nb h_apres_t: "+str(h_apres_t)+"/Nb h_total_t: "+str(h_total_t)
            self.notification(message_notification,1)
            message_notification="h_debut: "+str(h_debut)+"/h_pivot: "+str(h_pivot)+"/h_fin: "+str(h_fin) 
            self.notification(message_notification,1)
            # Affichage plage horaire
            affichage_texte =str(h_debut)[:5]+"/"+str(h_pivot)[:5]+"/"+str(h_fin)[:5]
            self.set_textvalue(periode_filtration,affichage_texte)

            # Marche pompe si dans plage horaire sinon Arret
            if self.now_is_between(str(h_debut),str(h_fin)):
                ma_ppe=1
            else:
                ma_ppe=0

# Notifications de debug
            message_notification="Mode de fonctionnement: "+mode_de_fonctionnement
            self.notification(message_notification,2)
            message_notification=" Temp Eau= "+str(Temperature_eau)
            self.notification(message_notification,2)
            message_notification="h_pivot= "+str(pivot)
            self.notification(message_notification,2)
            message_notification="coef= "+str(coef)
            self.notification(message_notification,2)

        #  Mode hiver Heure de Début + Une durée en h 
        elif mode_de_fonctionnement == TAB_MODE[1]:
            h_debut_h= self.get_state(self.args["h_debut_hiver"])
            duree= self.get_state(self.args["duree_hiver"])
            duree_h=en_heure(float(duree))
            h_debut_t = timedelta(hours=int(h_debut_h[:2]), minutes=int(h_debut_h[3:5]), seconds=int(h_debut_h[6:8]))
            duree_t = timedelta(hours=int(duree_h[:2]), minutes=int(duree_h[3:5]))
            h_fin_f = h_debut_t + duree_t
            # Affichage plage horaire
            affichage_texte =str(h_debut_h)[:5]+"/"+str(h_fin_f)[:5]
            self.set_textvalue(periode_filtration,affichage_texte)

            message_notification="h_debut_h"+str(h_debut_h)+"-Duree H:"+str(duree_h)+"-H fin:"+str(h_fin_f)
            self.notification(message_notification,2)
            # Marche pompe si dans plage horaire sinon Arret
            if self.now_is_between(str(h_debut_h),str(h_fin_f)):
                ma_ppe=1
            else:
                ma_ppe=0
 
        # Mode Arret Forcé
        elif mode_de_fonctionnement == TAB_MODE[2]:
            ma_ppe=0
            text_affichage = "At manuel"
            self.set_textvalue(periode_filtration,text_affichage)

        # Mode Marche Forcée
        elif mode_de_fonctionnement == TAB_MODE[3]:
            ma_ppe=1
            text_affichage = "Ma manuel"
            self.set_textvalue(periode_filtration,text_affichage)
            
        # Mode Inconnu: revoir le contenu de Input_select.mode_de_fonctionnement
        else:
            message_notification="Mode de fonctionnement Piscine Inconnu: "+mode_de_fonctionnement
            self.notification(message_notification,0)

        # Calcul sortie commande pompe filtration
        # Arret pompe sur arret forcé
        if arret_force=="on":
            self.turn_off(pompe) 
            self.notification("Att sur Delestage",1)
        else:
            if ma_ppe==1:
                self.turn_on(pompe)
                self.notification("Ma Pompe",1)
            else:
                self.turn_off(pompe)
                self.notification("Arret Pompe",1)

    # Fonction Notification
    # message =  Texte à afficher
    # niveau = niveau de journalisation 0,1,2
    def notification(self,message,niveau):
        global JOURNAL
        heure = str(self.time())[:8]
        if niveau <= JOURNAL:
            message_notification= format(heure)+": "+ message
            self.log(message_notification, log="piscine_log")
            #self.call_service('notify/telegram', message=message_notification)
            #self.call_service('persistent_notification/create', message=message_notification)