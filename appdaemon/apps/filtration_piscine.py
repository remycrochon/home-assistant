import hassapi as hass
#import appdaemon.plugins.hass.hassapi as hass
import datetime
from datetime import timedelta
import logging

# Saisir ici les memes modes que dans HA 
tab_mode = ["Ete", "Hiver", "At F", "Ma F"]

# Fonction de calcul du temps de filtration selon Abaque Abacus 
def duree_abaque(Temperature_eau):
    """Advanced calculation method using an abacus.
    D = a*T^3 + b*T^2 + c*T +d
    T est forçèe a 10°C minimum
    Formule découverte dans: https://github.com/scadinot/pool
    Filtration en heures"""
    temperature_min: float = max(float(Temperature_eau), 10)
    duree = (
            0.00335 * temperature_min ** 3
            - 0.14953 * temperature_min ** 2
            + 2.43489 * temperature_min
            - 10.72859
    )
    duree_m = min(float(duree), 23)
    return duree_m

# Fonction de calcul du temps de filtration "Classique" 
def duree_classique(Temperature_eau):
    """Methode classique temperature / 2"""
    temperature_min: float = max(float(Temperature_eau), 10)
    duree = temperature_min / 2
    duree_m = min(float(duree), 23)
    return duree_m

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

# Programme principal
class FiltrationPiscine(hass.Hass):
    def initialize(self):
        self.listen_state(self.change_temp,self.args["temperature_eau"])
        self.listen_state(self.change_mode,self.args["mode_de_fonctionnement"])
        self.listen_state(self.change_coef,self.args["coef"])
        self.listen_state(self.ecretage_h_pivot,self.args["h_pivot"])
        self.run_every(self.toutesles5minutes, "now", 5 * 60)
        self.log('Initialisation AppDaemon Filtration Piscine.', log="piscine_log")

    def change_temp(self, entity, attribute, old, new, kwargs):
        self.log('Appel traitement changement Temp.', log="piscine_log")
        self.traitement(kwargs)

    def change_mode(self, entity, attribute, old, new, kwargs):
        self.log('Appel traitement changement Mode.', log="piscine_log")
        self.traitement(kwargs)

    def change_coef(self, entity, attribute, old, new, kwargs):
        self.log('Appel traitement changement Coef.', log="piscine_log")
        self.traitement(kwargs)

    def ecretage_h_pivot(self, entity, attribute, old, new, kwargs):
        # Ecretage Heure pivot entre h_pivot_min et h_pivot_max
        h_pivot= new
        h_pivot_max="14:00:00"
        h_pivot_min="11:00:00"
        if h_pivot>h_pivot_max:
            self.set_state(self.args["h_pivot"], state = h_pivot_max)
        if h_pivot<h_pivot_min:
            self.set_state(self.args["h_pivot"], state = h_pivot_min)
        self.traitement(kwargs)

    def toutesles5minutes(self, kwargs):
        self.log('Appel traitement toutes les 5 mn.', log="piscine_log")
        self.traitement(kwargs)

    def traitement(self, kwargs):
        Temperature_eau = self.get_state(self.args["temperature_eau"])
        mode_de_fonctionnement = self.get_state(self.args["mode_de_fonctionnement"])
        pompe = self.args["cde_pompe"]
        h_pivot= self.get_state(self.args["h_pivot"])
        coef=float(self.get_state(self.args["coef"]))/100
        mode_calcul= self.get_state(self.args["mode_calcul"])
        periode_filtration=self.args["periode_filtration"]
        self.log(f'Mode de F= {mode_de_fonctionnement}', log="piscine_log")
        self.log(f'Temp_Eau= {Temperature_eau}', log="piscine_log")
        self.log(f'h_pivot= {h_pivot}', log="piscine_log")
        self.log(f'coef= {coef}', log="piscine_log")
        self.log(f'Mode Calcul Abaque= {mode_calcul}', log="piscine_log")
        #  Mode Ete
        if mode_de_fonctionnement == tab_mode[0]:
            if mode_calcul == "on": # Calcul selon Abaque
                temps_filtration = (duree_abaque(Temperature_eau))*coef
                nb_h_avant = en_heure(float(temps_filtration/2))
                nb_h_apres = en_heure(float(temps_filtration/2))
                self.log(f'Temps de Filtration Abaque: {temps_filtration}', log="piscine_log")
            else: # Calcul selon méthode classique
                temps_filtration = (duree_classique(Temperature_eau))*coef
                nb_h_avant = en_heure(float(temps_filtration/2))
                nb_h_apres = en_heure(float(temps_filtration/2))
                self.log(f'Temps de Filtration Classique: {temps_filtration}', log="piscine_log")
            # Calcul des heures de début et fin filtration en fontion
            # du temps de filtration avant et apres l'heure pivot
            t1 = timedelta(hours=int(h_pivot[:2]), minutes=int(h_pivot[3:5]))
            t2 = timedelta(hours=int(nb_h_avant[:2]), minutes=int(nb_h_avant[3:5]), seconds=int(nb_h_avant[6:8]))
            h_debut = t1 - t2
            t1 = timedelta(hours=int(h_pivot[:2]), minutes=int(h_pivot[3:5]))
            t2 = timedelta(hours=int(nb_h_apres[:2]), minutes=int(nb_h_apres[3:5]), seconds=int(nb_h_apres[6:8]))
            h_fin = t1 + t2
            # Affichage plage horaire
            affichage_texte =str(h_debut)+"/"+str(h_fin)
            self.set_textvalue(periode_filtration,affichage_texte)
            self.log(f'nb_h_avant:{nb_h_avant}-nb_h_apres:{nb_h_apres}', log="piscine_log")
            self.log(f'h_debut:{h_debut}-h_pivot= {h_pivot}-h_fin:{h_fin}', log="piscine_log")
            # self.log(str(h_fin)[:5]) 
            if str(h_fin)[:5] == "1 day": # Ecrete à la fin de la journée
                h_fin = "23:59:59"
            # Marche pompe si dans plage horaire sinon Arret
            if self.now_is_between(str(h_debut),str(h_fin)):
                self.turn_on(pompe)
                self.log("Ma Ppe", log="piscine_log")
            else:
                self.turn_off(pompe)
                self.log("At Ppe", log="piscine_log")

        #  Mode hiver Heure de Début + Une durée en h 
        elif mode_de_fonctionnement == tab_mode[1]:
            h_debut_h= self.get_state(self.args["h_debut_hiver"])
            duree= self.get_state(self.args["duree_hiver"])
            duree_h=en_heure(float(duree))
            td1 = timedelta(hours=int(h_debut_h[:2]), minutes=int(h_debut_h[3:5]), seconds=int(h_debut_h[6:8]))
            td2 = timedelta(hours=int(duree_h[:2]), minutes=int(duree_h[3:5]))
            h_fin_f = td1 + td2
            # Affichage plage horaire
            affichage_texte =str(h_debut_h)+"/"+str(h_fin_f)
            self.set_textvalue(periode_filtration,affichage_texte)
            self.log(f'h_debut_h:{h_debut_h}-Duree H:{duree_h}-H fin:{h_fin_f}', log="piscine_log")
            # Marche pompe si dans plage horaire sinon Arret
            if self.now_is_between(str(h_debut_h),str(h_fin_f)):
                self.turn_on(pompe)
                self.log("Ma Ppe", log="piscine_log")
            else:
                self.turn_off(pompe)
                self.log("At Ppe", log="piscine_log")

        # Mode Arret Forcé
        elif mode_de_fonctionnement == tab_mode[2]:
            self.turn_off(pompe)
            text_affichage = "At manuel"
            self.set_textvalue(periode_filtration,text_affichage)
            self.log("At Ppe", log="piscine_log")

        # Mode Marche Forcée
        elif mode_de_fonctionnement == tab_mode[3]:
            self.turn_on(pompe)
            text_affichage = "Ma manuel"
            self.set_textvalue(periode_filtration,text_affichage)
            self.log("MA Ppe", log="piscine_log")
            
        # Mode Inconnu: revoir le contenu de Input_select.mode_de_fonctionnement
        else:
            self.log('Mode de fonctionnement Piscine Inconnu: {mode_de_fonctionnement}', log="piscine_log")