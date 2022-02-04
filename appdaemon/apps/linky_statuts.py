import hassapi as hass

# Conversion ASCII vers binaire codé décimal
def repr_bin2(str):
    caract = 0
    decod=""        
    for caract in str:
        decod += bin(int(caract,16))[2::].zfill(4)
    return decod

class LinkyStatuts(hass.Hass):
    def initialize(self):
        self.listen_state(self.statuts_change, self.args["registre"])
        self.log("Initialisation Linky..", log="linky_log")

    def statuts_change(self, entity, attribute, old, new, kwargs):
        statuts = new
        if len(statuts)!=8:
            self.log(f"Erreur format registre de statuts= {statuts}", log="linky_log")
        else:
            self.convertion_status(kwargs)

#  Lecture et conversion du registre de statuts du Linky 
    def convertion_status(self, kwargs):
        statuts = self.get_state(self.args["registre"])
        statuts_binaire=(repr_bin2(statuts))

        # Exploitation des 32 bits du statuts poids forts en tête #
        # Bit 0:Contact Sec#
        bit_0= statuts_binaire[31]
        if bit_0 == "0":
            contact_sec = "Ferme"
        else:
            contact_sec = "Ouvert"

        # Bits 1 à 3: Organe de coupure #
        bit_1_3= statuts_binaire[28:31]
        if bit_1_3 == "000":
            organe_de_coupure = "Ferme"
        elif bit_1_3 == "001":
            organe_de_coupure = "Ouvert sur Surpuissance"
        elif bit_1_3 == "010":
            organe_de_coupure = "Ouvert sur Surtension"
        elif bit_1_3 == "011":
            organe_de_coupure = "Ouvert sur Delestage"
        elif bit_1_3 == "100":
            organe_de_coupure = "Ouvert sur Ordre CPL ou Euridis"
        elif bit_1_3 == "101":
            organe_de_coupure = "Ouvert sur Surchauffe avec I>Imax"
        elif bit_1_3 == "110":
            organe_de_coupure = "Ouvert sur Surchauffe avec I<Imax"
        else:
            organe_de_coupure = "??"

        # Bit 4: Etat du cache borne #
        bit_4= statuts_binaire[27]
        if bit_4 == "0":
            cache_borne = "Ferme"
        else:
            cache_borne = "Ouvert"

        # Bit 5: Non utilisé toujours à 0 #

        # Bit 6: Surtension sur une des phases #
        bit_6= statuts_binaire[25]
        if bit_6 == "0":
            surtension = "Pas de Surtension"
        else:
            surtension = "Surtension"

        # Bit 7: Dépassement Puissance de Référence #
        bit_7= statuts_binaire[24]
        if bit_7 == "0":
            dep_pref = "Pas de Depassement"
        else:
            dep_pref = "Depassement en Cours"

        # Bit 8: Producteur ou Consommateur #
        bit_8= statuts_binaire[23]
        if bit_8 == "0":
            fonct_prod_conso = "Consommateur"
        else:
            fonct_prod_conso = "Producteur"

        # Bit 9: Sens de L'énergie active #
        bit_9= statuts_binaire[22]
        if bit_9 == "0":
            sens_energie_act = "Energie active positive"
        else:
            sens_energie_act = "Energie active négative"

        # Bits 10 à 13: Tarif en cours contrat fourniture #
        bit_10_13= statuts_binaire[18:22]
        if bit_10_13 == "0000":
            tarif_fourniture = "Energie ventilee sur index 1"
        elif bit_10_13 == "0001":
            tarif_fourniture = "Energie ventilee sur index 2"
        elif bit_10_13 == "0010":
            tarif_fourniture = "Energie ventilee sur index 3"
        elif bit_10_13 == "0011":
            tarif_fourniture = "Energie ventilee sur index 4"
        elif bit_10_13 == "0100":
            tarif_fourniture = "Energie ventilee sur index 5"
        elif bit_10_13 == "0101":
            tarif_fourniture = "Energie ventilee sur index 6"
        elif bit_10_13 == "0110":
            tarif_fourniture = "Energie ventilee sur index 7"
        elif bit_10_13 == "0111":
            tarif_fourniture = "Energie ventilee sur index 8"
        elif bit_10_13 == "1000":
            tarif_fourniture = "Energie ventilee sur index 9"
        elif bit_10_13 == "1001":
            tarif_fourniture = "Energie ventilee sur index 10"
        else:
            tarif_fourniture = "??"

        # Bits 14 à 15: Tarif en cours contrat fourniture #
        bit_14_15= statuts_binaire[16:18]
        if bit_14_15 == "00":
            tarif_distributeur = "Energie ventilee sur index 1"
        elif bit_14_15 == "01":
            tarif_distributeur = "Energie ventilee sur index 2"
        elif bit_14_15 == "10":
            tarif_distributeur = "Energie ventilee sur index 3"
        elif bit_14_15 == "11":
            tarif_distributeur = "Energie ventilee sur index 4"

        # Bit 16: Mode dégradé horloge #
        bit_16= statuts_binaire[15]
        if bit_16 == "0":
            mode_horloge = "Horloge correcte"
        else:
            mode_horloge = "Horloge mode dégrade"

        # Bit 17: Etat TIC #
        bit_17= statuts_binaire[14]
        if bit_17 == "0":
            etat_tic = "Mode Historique"
        else:
            etat_tic = "Mode Standard"

        # Bit 18: Non utilisé #

        # Bits 19 à 20: Etat de la com Euridis #
        bit_19_20= statuts_binaire[11:13]
        if bit_19_20 == "00":
            com_euridis = "Com désactivee"
        elif bit_19_20 == "01":
            com_euridis = "Com Active sans sécurite"
        elif bit_19_20 == "11":
            com_euridis = "Com Active avec sécurite"
        else:
            com_euridis = "Com ??"

        # Bits 21 à 22: Statut du CPL #
        bit_21_22= statuts_binaire[9:11]
        if bit_21_22 == "00":
            statut_cpl = "New/unlock"
        elif bit_21_22 == "01":
            statut_cpl = "New/Lock"
        elif bit_21_22 == "11":
            statut_cpl = "Registered"
        else:
            statut_cpl = "Com ??"

        # Bit 23: Synchro CPL #
        bit_23= statuts_binaire[8]
        if bit_23 == "0":
            synchro_cpl = "Compteur non synchronise"
        else:
            synchro_cpl = "Compteur synchronise"

        # Bits 24_25: Couleur du jour contrat historique Tempo #
        bit_24_25= statuts_binaire[6:8]
        if bit_24_25 == "00":
            couleur_j_tempo = "Contrat non Tempo"
        elif bit_24_25 == "01":
            couleur_j_tempo = "Bleu"
        elif bit_24_25 == "10":
            couleur_j_tempo = "Blanc"
        elif bit_24_25 == "11":
            couleur_j_tempo = "Rouge"
        else:
            couleur_j_tempo = "Couleur J tempo indefinie"

        # Bits 26_27: Couleur du J+1 contrat historique Tempo #
        bit_26_27= statuts_binaire[4:6]
        if bit_26_27 == "00":
            couleur_j1_tempo = "Contrat non Tempo"
        elif bit_26_27 == "01":
            couleur_j1_tempo = "Bleu"
        elif bit_26_27 == "10":
            couleur_j1_tempo = "Blanc"
        elif bit_26_27 == "11":
            couleur_j1_tempo = "Rouge"
        else:
            couleur_j1_tempo = "Couleur J+1 tempo indefinie"

        # Bits 28_29: Préavis Pointes mobiles #
        bit_28_29= statuts_binaire[2:4]
        if bit_28_29 == "00":
            préavis_p_mobiles = "pas de preavis en cours"
        elif bit_28_29 == "01":
            préavis_p_mobiles = "Preavis PM1 en cours"
        elif bit_28_29 == "10":
            préavis_p_mobiles = "Preavis PM2 en cours"
        elif bit_28_29 == "11":
            préavis_p_mobiles = "Preavis PM3 en cours"
        else:
            préavis_p_mobiles = "Preavis en cours indéfini"
            
        # Bits 30_31: Préavis Pointes mobiles #
        bit_30_31= statuts_binaire[2:4]
        if bit_30_31 == "00":
            pointe_mobile = "pas de pointe mobile"
        elif bit_30_31 == "01":
            pointe_mobile = "PM1 en cours"
        elif bit_30_31 == "10":
            pointe_mobile = "PM2 en cours"
        elif bit_30_31 == "11":
            pointe_mobile = "PM3 en cours"
        else:
            pointe_mobile = "Pointe mobile indefinie"

        #  Mise à jour des entités HA  #

        # Etat du contact Sec (= 1 = fermé en Heure Creuse) #
        if bit_0 == "0":
            self.call_service("input_boolean/turn_on", entity_id = "input_boolean.linky_contact_sec")
        else:
            self.call_service("input_boolean/turn_off", entity_id = "input_boolean.linky_contact_sec")
        
        # Etat de l'organe de coupure #
        self.set_textvalue("input_text.linky_organe_de_coupure", organe_de_coupure)

        #  Sens de l'énergie #
        if bit_9 == "0":
            self.call_service("input_boolean/turn_on", entity_id = "input_boolean.linky_sens_energie_active")
        else:
            self.call_service("input_boolean/turn_off", entity_id = "input_boolean.linky_sens_energie_active")
        self.set_textvalue("input_text.linky_sens_energie_active", sens_energie_act)

        #   Log de Déboggage   
        #    A commenter ou supprimer si inutile #
        self.log(f"Statuts={statuts}", log="linky_log")
        self.log(f"Statuts Binaire={statuts_binaire}", log="linky_log")
        self.log(f"bit_0={bit_0} / Contact Sec={contact_sec}", log="linky_log")
        self.log(f"bit_1_3={bit_1_3} / Organe de coupure={organe_de_coupure}", log="linky_log")
        self.log(f"bit_4={bit_4} / Cache_borne={cache_borne}", log="linky_log")
        self.log(f"bit_6={bit_6} / Surtension={surtension}", log="linky_log")
        self.log(f"bit_7={bit_7} / Dépassement Pref={dep_pref}", log="linky_log")
        self.log(f"bit_8={bit_8} / Fonctionnement={fonct_prod_conso}", log="linky_log")
        self.log(f"bit_9={bit_9} / Sens Energie Active={sens_energie_act}", log="linky_log")
        self.log(f"bit_10_13={bit_10_13} / Tarif fourniture={tarif_fourniture}", log="linky_log")
        self.log(f"bit_14_15={bit_14_15} / Tarif distributeur={tarif_distributeur}", log="linky_log")
        self.log(f"bit_16={bit_16} / Mode dégradé horloge={mode_horloge}", log="linky_log")
        self.log(f"bit_17={bit_17} / Etat TIC={etat_tic}", log="linky_log")
        self.log(f"bit_19_20={bit_19_20} / Com Euridis={com_euridis}", log="linky_log")
        self.log(f"bit_21_22={bit_21_22} / Statut CPL={statut_cpl}", log="linky_log")
        self.log(f"bit_23={bit_23} / Synchro CPL={synchro_cpl}", log="linky_log")
        self.log(f"bit_24_25={bit_24_25} / Couleur Jour tempo={couleur_j_tempo}", log="linky_log")
        self.log(f"bit_26_27={bit_26_27} / Couleur J+1 tempo={couleur_j1_tempo}", log="linky_log")
        self.log(f"bit_28_29={bit_28_29} / Préavis Pointes Mobiles={préavis_p_mobiles}", log="linky_log")
        self.log(f"bit_30_31={bit_30_31} / Pointe Mobile={pointe_mobile}", log="linky_log")        
        self.log(f"Statuts Linky:{statuts}", log="linky_log")
        self.log(f"Statuts Binaire: {statuts_binaire}", log="linky_log")
        self.log(f"Sens Energie Active: {sens_energie_act}", log="linky_log")
    
#        self.call_service('notify/telegram', message="Statuts Linky:" + format(statuts))
#        self.call_service('notify/telegram', message="Sens Energie Active: " + format(sens_energie_act))
#        self.call_service('notify/telegram', message="Tarif Fourniture: " +format(tarif_fourniture))