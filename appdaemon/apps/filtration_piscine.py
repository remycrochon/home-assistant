import hassapi as hass
#import appdaemon.plugins.hass.hassapi as hass
import datetime
from datetime import timedelta
#from astral.sun import sun

tab_mode = ["Ete", "Hiver", "At F", "Ma F"]

class FiltrationPiscine(hass.Hass):
    def initialize(self):
        self.listen_state(self.change_temp,self.args["temperature_eau"])
        self.listen_state(self.change_mode,self.args["mode_de_fonctionnement"])
        self.run_every(self.touteslesminutes, "now", 1 * 60)
        self.log('Initialisation.......')
        
    def change_temp(self, entity, attribute, old, new, kwargs):
        self.log('Appel traitement changement Temp.')
        self.traitement(kwargs)

    def change_mode(self, entity, attribute, old, new, kwargs):
        self.log('Appel traitement changement Mode.')
        self.traitement(kwargs)

    def touteslesminutes(self, kwargs):
        self.log('Appel traitement chaque minutes.')
        self.traitement(kwargs)

    def traitement(self, kwargs):
#       self.log("{} is {}".format(self.friendly_name(entity), new))
#        print ("new temperature:",Temperature_eau)
        Temperature_eau = self.get_state(self.args["temperature_eau"])
        mode_de_fonctionnement = self.get_state(self.args["mode_de_fonctionnement"])
        pompe = self.args["cde_pompe"]
        h_pivot= self.get_state(self.args["h_pivot"])
        coef=float(self.get_state(self.args["coef"]))/100
        mode_calcul= self.get_state(self.args["mode_calcul"])
        periode_filtration=self.args["periode_filtration"]
                
        self.log(f'Mode de F= {mode_de_fonctionnement}')
        self.log(f'Temp_Eau= {Temperature_eau}')
#        self.log(f'h_pivot= {h_pivot}')
        self.log(f'coef= {coef}')
        self.log(f'Mode_Calcul= {mode_calcul}')
######## Définition de fonctions  ######################################
######## Fonction de calcul du temps de filtration selon Abaque Abacus
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
            )*coef
            duree_m = min(float(duree), 23)
            return duree_m
########  Fonction de calcul du temps de filtration "Classique"
        def duree_classique(Temperature_eau):
            """Methode classique
            temperature / 2"""
            temperature_min: float = max(float(Temperature_eau), 10)
            duree = temperature_min / 2
            duree_m = min(float(duree), 23)
            return duree_m
########  Fonction de Convertion Int en heure "HH:MM:SS"
        def en_heure(t):
            h = int(t)
            # On retire les heures pour ne garder que les minutes.
            t = (t - h) * 60 # 0.24 * 60 = temps_restant en minutes.
            m = int(t)
            # On retire les minutes pour ne garder que les secondes.
            t = (t - m) * 60
            s = int(t)
            return "{:02d}:{:02d}:{:02d}".format(h, m, s)

######## Traitements en fonction du mode de fonctionnement
### Mode Ete
        if mode_de_fonctionnement == tab_mode[0]:
            if mode_calcul == "on":
                temps_filtration = (duree_abaque(Temperature_eau))
                self.log(f'Temps de Filtration Abaque: {temps_filtration}')
                h_avant = en_heure(float(temps_filtration/3))
                h_apres = en_heure(float(temps_filtration*2/3))
            else:
                temps_filtration = (duree_classique(Temperature_eau))
                self.log(f'Temps de Filtration Classique: {temps_filtration}')
                h_avant = en_heure(float(temps_filtration/2))
                h_apres = en_heure(float(temps_filtration/2))

## Calcul des heures de début et fin filtration en fontion
## du temps de filtration avant et apres l'heure pivot
            self.log(f'h_avant:{h_avant}-h_apres:{h_apres}')
            td1 = timedelta(hours=int(h_pivot[:2]), minutes=int(h_pivot[3:5]))
            td2 = timedelta(hours=int(h_avant[:2]), minutes=int(h_avant[3:5]), seconds=int(h_avant[6:8]))
            h_debut = td1 - td2
            td1 = timedelta(hours=int(h_pivot[:2]), minutes=int(h_pivot[3:5]))
            td2 = timedelta(hours=int(h_apres[:2]), minutes=int(h_apres[3:5]), seconds=int(h_apres[6:8]))
            h_fin = td1 + td2
            self.log(f'h_debut:{h_debut}-h_pivot= {h_pivot}-h_fin:{h_fin}')
            #self.set_textvalue("input_text.piscine_periode_filtration",str("h_debut:{h_debut}-h_pivot= {h_pivot}-h_fin:{h_fin}"))  
            text_affichage =str(h_debut)+"/"+str(h_fin)
            self.set_textvalue(periode_filtration,text_affichage)

## Log de debug           
#           self.log(str(h_fin)[:5])
            if str(h_fin)[:5] == "1 day": # Ecrete à la fin de la journée
                h_fin = "23:59:59"
            if self.now_is_between(str(h_debut),str(h_fin)):
                self.log("Ma Ppe")
                self.turn_on(pompe)
            else:
                self.log("At Ppe")
                self.turn_off(pompe)

### Mode hiver
# Heure de Début + Une durée en h
        elif mode_de_fonctionnement == tab_mode[1]:
            h_debut_h= self.get_state(self.args["h_debut_hiver"])
            duree= self.get_state(self.args["duree_hiver"])
#            self.log(f'Duree:{duree}')
            duree_h=en_heure(float(duree))
#            self.log(f'h_debut_h:{h_debut_h}-Duree H:{duree_h}')
            td1 = timedelta(hours=int(h_debut_h[:2]), minutes=int(h_debut_h[3:5]), seconds=int(h_debut_h[6:8]))
            td2 = timedelta(hours=int(duree_h[:2]), minutes=int(duree_h[3:5]))
            h_fin_f = td1 + td2
            self.log(f'h_debut_h:{h_debut_h}-Duree H:{duree_h}-H fin:{h_fin_f}')
            self.set_textvalue(periode_filtration,'h_debut_h:{h_debut_h}-Duree H:{duree_h}-H fin:{h_fin_f}')
            if self.now_is_between(str(h_debut_h),str(h_fin_f)):
                self.log("Ma Ppe")
                self.turn_on(pompe)
            else:
                self.log("At Ppe")
                self.turn_off(pompe)

### Mode Arret Forcé
        elif mode_de_fonctionnement == tab_mode[2]:
            self.log("At Ppe")
            self.turn_off(pompe)
### Mode Marche Forcé
        elif mode_de_fonctionnement == tab_mode[3]:
            self.log("Ma Ppe")
            self.turn_on(pompe)
### Mode Inconnu: revoir le Input_select.mode_de_fonctionnement
        else:
            self.log('Mode de fonctionnement Inconnu: {mode_de_fonctionnement}')

