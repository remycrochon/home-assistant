/* Lovelace Custom Cards: meteofrance-raininhourforecast.js
 * 
 * https://developers.home-assistant.io/docs/frontend/custom-ui/lovelace-custom-card/
 * 
 
 Entitie meteo-france:  "sensor.81_next_rain"
 
 entity: {
    "entity_id": "sensor.81_next_rain",
    "state": "unknown",
    "attributes": {
        "forecast_time_ref": "2020-11-24T13:20:00+00:00",
        "1_hour_forecast": {
            "0 min": "Temps sec",
            "5 min": "Temps sec",
            "10 min": "Temps sec",
            "15 min": "Temps sec",
            "20 min": "Temps sec",
            "25 min": "Temps sec",
            "35 min": "Temps sec",
            "45 min": "Temps sec",
            "55 min": "Temps sec"
        },
        "attribution": "Data provided by Météo-France",
        "friendly_name": "Nancy Next rain",
        "device_class": "timestamp"
    },
    "last_changed": "2020-11-24T12:54:16.036941+00:00",
    "last_updated": "2020-11-24T13:09:16.648873+00:00",
    "context": {
        "id": "81f45d2585c15e5cc8498ad2ad6f34a1",
        "parent_id": null,
        "user_id": null
    }
}

{
  "entity_id": "sensor.brest_next_rain",
  "state": "unknown",
  "attributes": {
    "forecast_time_ref": "2020-11-27T13:35:00+00:00",
    "1_hour_forecast": {
      "0 min": "Pas de valeur",
      "5 min": "Pas de valeur",
      "10 min": "Pas de valeur",
      "15 min": "Pas de valeur",
      "20 min": "Pas de valeur",
      "25 min": "Pas de valeur",
      "35 min": "Pas de valeur",
      "45 min": "Pas de valeur",
      "55 min": "Pas de valeur"
    },
    "attribution": "Data provided by Météo-France",
    "friendly_name": "Brest Next rain",
    "device_class": "timestamp"
  },
  "last_changed": "2020-11-25T23:07:08.029456+00:00",
  "last_updated": "2020-11-27T13:27:08.029725+00:00",
  "context": {
    "id": "baca48dff9ef7b28ee9f404af6ffef6f",
    "parent_id": null,
    "user_id": null
  }
}

*/

function nextRainHour(dt, mn) {
            var nextdt = new Date(dt.getTime() + mn*60000) ;
            var timeStr = padRainTimeStr(nextdt.getHours()) +  ":" + padRainTimeStr(nextdt.getMinutes()) ;
            return timeStr ;
}

function padRainTimeStr(i) {
            return (i < 10) ? "0" + i : "" + i;
}

class RainInForecastCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      this.card = document.createElement('ha-card');
      this.content = document.createElement('div');
      this.content.style.padding = '0 16px 16px';
      this.card.appendChild(this.content);
      this.appendChild(this.card);
    }

    const rainColor = {
        "Données indisponibles": "#A4A4A4", 
        "Pas de valeur": "#A4A4A4", 
        "Temps sec": "#FFFFFF", 
        "Pluie faible": "#81DAF5",
        "Pluie modérée": "#0174DF",
        "Pluie forte": "#08088A"
    } ;

    const entity = hass.states[this.config.entity];
    this.card.header = entity.attributes["friendly_name"].replace(' Next rain','') ;
    //console.error("entity: " + JSON.stringify(entity,null, 4));     
    
    const state = entity.state; 
    const eid = entity["entity_id"].replace('sensor.','') ; ;                  // "entity_id": "sensor.caen_next_rain"  => "caen_next_rain"

    var rainColorLevel0mn  = "#A4A4A4" ; 
    var rainColorLevel5mn  = "#A4A4A4" ; 
    var rainColorLevel10mn = "#A4A4A4" ; 
    var rainColorLevel15mn = "#A4A4A4" ;  
    var rainColorLevel20mn = "#A4A4A4" ; 
    var rainColorLevel25mn = "#A4A4A4" ; 
    var rainColorLevel35mn = "#A4A4A4" ; 
    var rainColorLevel45mn = "#A4A4A4" ; 
    var rainColorLevel55mn = "#A4A4A4" ; 
    
    var rainHour0mn  = "00:00" ;
    var rainHour10mn = "00:10" ;
    var rainHour20mn = "00:20" ;
    var rainHour35mn = "00:35" ;
    var rainHour55mn = "00:55" ;

    var forecastDt = "Prévisions indisponibles" ;
    
    if (state != "unavailable") {
    
        rainColorLevel0mn  = rainColor[entity.attributes["1_hour_forecast"]['0 min']] ; 
        rainColorLevel5mn  = rainColor[entity.attributes["1_hour_forecast"]['5 min']] ; 
        rainColorLevel10mn = rainColor[entity.attributes["1_hour_forecast"]['10 min']] ; 
        rainColorLevel15mn = rainColor[entity.attributes["1_hour_forecast"]['15 min']] ; 
        rainColorLevel20mn = rainColor[entity.attributes["1_hour_forecast"]['20 min']] ; 
        rainColorLevel25mn = rainColor[entity.attributes["1_hour_forecast"]['25 min']] ; 
        rainColorLevel35mn = rainColor[entity.attributes["1_hour_forecast"]['35 min']] ; 
        rainColorLevel45mn = rainColor[entity.attributes["1_hour_forecast"]['45 min']] ; 
        rainColorLevel55mn = rainColor[entity.attributes["1_hour_forecast"]['55 min']] ; 
    
        const forecastTimeRef = entity.attributes["forecast_time_ref"] ;    // 2020-11-18T17:30:00+00:00
        var dt = new Date(forecastTimeRef) ;     
        forecastDt = dt.toLocaleString() ;                                  // 19/11/2020 à 14:05:36
    
        rainHour0mn  = nextRainHour(dt, 0) ;
        rainHour10mn = nextRainHour(dt, 10) ;
        rainHour20mn = nextRainHour(dt, 20) ;
        rainHour35mn = nextRainHour(dt, 35) ;
        rainHour55mn = nextRainHour(dt, 55) ;
    }
        
    this.content.innerHTML = `
    <style type="text/css">
            #rainwidget {
                text-align: center;
                height: 130px;
                width: 100%;
                border: 1px solid #0040FF;
                background: #D8D8D8 ;
            }

            #raintitle {
                margin-top: 2px;
                font-size: 1.3em;
            }
            
            .rainheure {
                display: inline-block;
                font-size: 12px;
                font-weight: bold;
                margin-top: 5px;
                width: 9%;
                text-align: center;
            }

            .rainlevel {
                display: inline-block;
                height: 32px;
                width: 9%;
                opacity: 1;
                color: #A4A4A4;
                /*border: 1px solid #0040FF;*/
            }
            
            .rainlevel${eid}0  { background: ${rainColorLevel0mn}; }
            .rainlevel${eid}5  { background: ${rainColorLevel5mn}; }
            .rainlevel${eid}10 { background: ${rainColorLevel10mn}; }
            .rainlevel${eid}15 { background: ${rainColorLevel15mn}; }
            .rainlevel${eid}20 { background: ${rainColorLevel20mn}; }
            .rainlevel${eid}25 { background: ${rainColorLevel25mn}; }
            .rainlevel${eid}35 { background: ${rainColorLevel35mn}; }
            .rainlevel${eid}45 { background: ${rainColorLevel45mn}; }
            .rainlevel${eid}55 { background: ${rainColorLevel55mn}; }

            .rainlegendicon {
                display: inline-block;
                height: 12px;
                width: 12px;
                margin: 1px 1px 1px, 1px;
                opacity: 1;
                margin-left: 18px;
            }
            #rainlegend {
                display: inline-block;
                font-size: 12px;
                margin-left: 3px;
            }
            #rainicon4  { 
                background: #08088A;
            }
            #rainicon3  { 
                background: #0174DF;
            }
            #rainicon2  { 
                background: #81DAF5;
            }
            #rainicon1  { 
                background: #FFFFFF;
            }
            #rainicon0  { 
                background: #A4A4A4;
            }
            #raindate {
                width: 100%;
                font-size: 1em;
                text-align: center;
                position: relative;
                margin-top: 4px;
            }
    </style>   

    <div id="rainwidget">
        <div id="raintitle">Prévision pluie dans l'heure</div>
        <div id="raincontainer">
            <div class="rainheure">${rainHour0mn}</div>
            <div class="rainheure"></div>
            <div class="rainheure">${rainHour10mn}</div>
            <div class="rainheure"></div>
            <div class="rainheure">${rainHour20mn}</div>
            <div class="rainheure"></div>
            <div class="rainheure">${rainHour35mn}</div>
            <div class="rainheure"></div>
            <div class="rainheure">${rainHour55mn}</div>
        </div>
        
        <div id="raincontainer">
        <div class="rainlevel rainlevel${eid}0"></div>
        <div class="rainlevel rainlevel${eid}5"></div>
        <div class="rainlevel rainlevel${eid}10"></div>
        <div class="rainlevel rainlevel${eid}15"></div>
        <div class="rainlevel rainlevel${eid}20"></div>
        <div class="rainlevel rainlevel${eid}25"></div>
        <div class="rainlevel rainlevel${eid}35"></div>
        <div class="rainlevel rainlevel${eid}45"></div>
        <div class="rainlevel rainlevel${eid}55"></div>
        </div>
        
        <div id="raincontainer">
        <div class="rainlegendicon" id="rainicon4"></div><div id="rainlegend">forte</div>
        <div class="rainlegendicon" id="rainicon3"></div><div id="rainlegend">modérée</div>
        <div class="rainlegendicon" id="rainicon2"></div><div id="rainlegend">faible</div>
        <div class="rainlegendicon" id="rainicon1"></div><div id="rainlegend">nulle</div>
        <div class="rainlegendicon" id="rainicon0"></div><div id="rainlegend">n/a</div>
        </div>

        <div id=raindate>${forecastDt}</div>
    </div>
    `;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 3;
  }
}

/* "Manual Card" dans UI
type: 'custom:meteofrance-raininhourforecast'
entity: sensor.brest_next_rain
*/

customElements.define('meteofrance-raininhourforecast', RainInForecastCard);
