############################################################
#
# This class aims to get the Snowy Hydro catchment levels
#
# written to be run from AppDaemon for a HASS or HASSIO install
#
# updated: 08/05/2020
# 
############################################################

############################################################
# 
# In the apps.yaml file you will need the following
# updated for your database path, stop ids and name of your flag
#
# snowy_dams:
#   module: snowydams
#   class: Get_Snowy_Dams
#   DAM_FLAG: "input_boolean.check_snowy_dams"
#
############################################################

# import the function libraries
import requests
import datetime
import json
import appdaemon.plugins.hass.hassapi as hass

class Get_Snowy_Dams(hass.Hass):

    # the name of the flag in HA (input_boolean.xxx) that will be watched/turned off
    DAM_FLAG = ""

    base_url = "https://www.snowyhydro.com.au/wp-content/themes/snowyhydro/inc/getData.php?yearA="
    extra_url = "&yearB="
    URL = ""

    up_sensor = "sensor.snowy_dam_last_updated"
    payload = {}
    headers = {
        'User-Agent': 'Mozilla/5.0'
    }

    # run each step against the database
    def initialize(self):

        # get the values from the app.yaml that has the relevant personal settings
        self.DAM_FLAG = self.args["DAM_FLAG"]

        #build todays url
        self.build_url()

        # create the original sensor
        self.load()

        # listen to HA for the flag to update the sensor
        self.listen_state(self.main, self.DAM_FLAG, new="on")

        # set to run each morning at 5.17am
        runtime = datetime.time(5,17,0)
        self.run_daily(self.daily_load, runtime)

    # run the app
    def main(self, entity, attribute, old, new, kwargs):
        """ create the sensor and turn off the flag
            
        """
        # create the sensor with the dam information 
        self.load()
        
        # turn off the flag in HA to show completion
        self.turn_off(self.DAM_FLAG)

    # schedule the app
    def daily_load(self, kwargs):
        """ scheduled load
            
        """

        #build todays url
        self.build_url()
        
        # create the sensor with the dam information 
        self.load()
       
    def build_url(self):
        """ build the url for today
        """
        # get today's date
        today = datetime.date.today()
        # get current year and last year
        thisyear = today.year
        lastyear = thisyear - 1
        #update the url for today
        self.URL = self.base_url + str(thisyear) + self.extra_url + str(lastyear)


    def load(self):
        """ parse the ICON Water ACT dam level website
        """

        #connect to the website and scrape the dam levels for the ACT
        url = self.URL
        response = requests.request("GET", url, headers=self.headers, data = self.payload)
        
        #create a sensor to keep track last time this was run
        tim = datetime.datetime.now()
        date_time = tim.strftime("%d/%m/%Y, %H:%M:%S")
        self.set_state(self.up_sensor, state=date_time, replace=True, attributes= {"icon": "mdi:timeline-clock-outline", "friendly_name": "Snowy Dam Levels Data last sourced"})
        
        #get yesterdays info & this year
        today = datetime.date.today()
        thisyear = today.year
        yesterday = today - datetime.timedelta(days=1)
        yester_date = yesterday.strftime("%Y-%m-%d")

        #read in the json dataset
        page = response.json()
        # use the current year as the first key
        jtags = page[str(thisyear)]

        #get the second series - with percentages and remaining volumes
        dams = jtags['snowyhydro']['level']
        for dam in dams:
            if str(dam["-date"]) == yester_date:
                lakes = dam["lake"]
                for lake in lakes:
                    lname = lake["-name"]
                    ldate = lake["-dataTimestamp"]
                    lvol = lake["#text"]
                
                    if lname == "Lake Eucumbene":
                        sensorname = "sensor.snowy_dam_eucumbene"
                    elif lname == "Lake Jindabyne":
                        sensorname = "sensor.snowy_dam_jindabyne"
                    elif lname == "Tantangara Reservoir":
                        sensorname = "sensor.snowy_dam_tantangara"
                    else:
                        sensorname = ""

                    if sensorname != "":
                        #create the sensors for each of the dams and the combined volumes
                        self.set_state(sensorname, state=lvol, replace=True, attributes= {"icon": "mdi:cup-water", "friendly_name": "Snowy - " + lname + " level", "unit_of_measurement": "%", "Measurement Record Date": ldate})
