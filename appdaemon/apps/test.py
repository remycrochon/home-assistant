import hassapi as hass
import datetime
from datetime import datetime, timedelta

class Test(hass.Hass):
    def initialize(self):
        self.listen_state(self.change,self.args["h1"])
        self.listen_state(self.change,self.args["h2"])
        self.listen_state(self.change_mode,self.args["mode_de_fonctionnement"])
        self.log('Initialisation.......')
        


    def change(self, entity, attribute, old, new, kwargs):
        self.log(f'Test.')
        h11=self.get_state(self.args["h1"]) #.strftime("%H:%M:%S") 
        h_pivot_max="14:00:00"
        h_pivot_min="11:00:00"
        if h11>h_pivot_max:
            h11=h_pivot_max
            self.set_state(self.args["h1"], state = h_pivot_max)
        if h11<h_pivot_min:
            h11=h_pivot_min
            self.set_state(self.args["h1"], state = h_pivot_min)

        h22=self.get_state(self.args["h2"]) #.strftime("%H:%M:%S") 
        self.log(f'h11= {h11}')
        self.log(f'h22= {h22}')

    def change_mode(self, entity, attribute, old, new, kwargs):
        self.log(f'change mode.')
        liste_mode=self.get_state(self.args["mode_de_fonctionnement"], attribute="options")
        self.log(f'mode= {liste_mode[0]}')
        self.log(f'mode= {liste_mode[1]}')
        self.log(f'mode= {liste_mode[2]}')
        self.log(f'mode= {liste_mode[3]}')
        i=0
        for i in range(liste_mode):
            self.log(f'mode= {liste_mode[i]}')
            
