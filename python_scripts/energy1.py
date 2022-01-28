
'''
Date:  November 5, 2020
Versions used: HA116.1, HassOS and Raspberry PI 3 B
Description:
This Python Script converts histogram type power to energy accumulation.
It needs two input_number entities to be passed as data values:  power, last_power.
input_number.energy_accum is used to accumulate the energy calculation.
The hourly energy calculation is done in a separate script called energy_hour.py
The hourly energy script waits for this script to complete, preventing errors to due
to power changes that occur on the hour boundary.
input_number entities restore the last known value on HA restart.  Sensors do not restore.
Instructions:
1. Python Script setup
   1.1 Create /config/python_scripts directory and copy this file to it.
   1.2 Add this line to configuration.yaml
       python_scripts:    
        
2.  Add these input_number entities to configuration.yaml
    input_number used because their values are restored after HA restarts.
    
    furnace_power:
      name: Furnace Power
      min: 0
      max: 50
      step: 0.1
      unit_of_measurement: 'kW'
    
    last_power:
      min: 0
      max: 100
      step: 0.1
      mode: box
      
    energy_accum:
      min: 0
      max: 1000
      step: 0.1 
        
3.  Add this automation to automations.yaml
    * items are your choosing but must match your sensor names above
    input_number.furnace_power is the input power sensor in this example
- alias: Energy Integration
  initial_state: True
  trigger:
    - platform: state
      entity_id: input_number.furnace_power
  action:
    service: script.turn_on
    entity_id: script.energy
    
4. Add this script to scripts.yaml
energy:
  alias: Energy Integrator
  sequence: 
    - service: python_script.energy
      data:
        power: furnace_power
        last_power: last_power
        energy_accum: energy_accum
5. Use the history_graph lovelace card to display the result.
'''

#logger.warning("Got to energy 1")
WINDOW_SIZE = 60*60

power = data.get('power', '0')
last_power = data.get('last_power', '0')
energy_accum = data.get('energy_accum', '0')


#logger.warning("power = {}".format(power))

if power != '0':
#	input_number_power = "input_number." + power
	input_number_power = power
else:
	logger.warning("Energy script missing power data.")
    
if last_power != '0':
  input_number_last_power = "input_number." + last_power
else:
	logger.error("Energy script missing last_power data.")
    
if energy_accum != '0':
	input_number_energy_acum = "input_number." + energy_accum
else:
	logger.error("Energy script missing energy_accum data.")

# Get power unit and use to set the units for the other sensors used.
power_attr = hass.states.get(input_number_power).attributes
power_unit = power_attr['unit_of_measurement']
energy_unit = power_unit + 'h'
    
energy_accum_state = hass.states.get(input_number_energy_acum)
energy_accum = float(energy_accum_state.state)

power_state = hass.states.get(input_number_power)
power = float(power_state.state)

#Need to get last_power_state since it is reset at start of window
last_power_state = hass.states.get(input_number_last_power)
last_power = float(last_power_state.state)
#No new energy if last power was zero.
if last_power > 0:
    ##logger.warning("Last Power = {}".format(last_power))
    last_power_change = last_power_state.last_changed.timestamp()

    ##logger.warning("Power Test = {}".format(power))
    power_change = power_state.last_changed.timestamp()
    ##logger.warning("power_change = {}".format(power_change))

    delta_time = power_change - last_power_change
    #logger.warning("delta_time = {}".format(delta_time))

    #Convert to energy per hour
    delta_energy = delta_time * last_power / WINDOW_SIZE
    #logger.warning("delta_energy = {}".format(delta_energy))
    
    energy_accum = round(energy_accum + delta_energy,1)
    #logger.warning("energy_accum = {}".format(energy_accum))
    hass.states.set(input_number_energy_acum, energy_accum, {"unit_of_measurement": energy_unit})
    #logger.warning("energy_accum next = {}".format(energy_accum))

#Update last_power with new power
hass.states.set(input_number_last_power, power, {"unit_of_measurement": power_unit})

