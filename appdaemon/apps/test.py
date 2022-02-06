import hassapi as hass
import datetime
from datetime import datetime, timedelta

class Test(hass.Hass):
    def initialize(self):
        self.my_enitity = self.get_entity("input_boolean.test_alert")
        self.handle = self.my_enitity.listen_state(self.change)
        self.log('Initialisation Test..', log="test_log")

    def change(self, entity, attribute, old, new, kwargs):
        self.log(f'Etat:{new}', log="test_log")
        pass

