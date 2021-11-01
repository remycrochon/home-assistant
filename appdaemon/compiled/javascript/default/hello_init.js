var myDeviceID;
$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Hello Panel");
    content_width = (150 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [150, 150],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();

    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temp-int" id="default-temp-int"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basegauge-default-temp-ext" id="default-temp-ext"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="graph"></div></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclimate-default-pac" id="default-pac"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="levelunits"><h2 class="level" data-bind="text: level, attr:{ style: level_style}"></h2><p class="units" data-bind="html: units, attr:{ style: unit_style}"></p></div><div class="levelunits2"><p class="level2" data-bind="text: level2, attr:{style: level2_style}"></p><p class="units2" data-bind="html: units, attr:{style: unit2_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-uv-vp2" id="default-uv-vp2"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-meteo" id="default-meteo"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}"><p class="primary-climacon" data-bind="css: icon"></p><p class="primary-info" data-bind="text: temperature"></p><p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><br></div><div data-bind="attr: {style: sub_style}"><p class="secondary-detail" data-bind="visible: apparent_temperature"><span class="secondary-icon mdi mdi-thermometer-lines" title="Apparent Temp" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Apparent Temp:&nbsp;</span><span class="secondary-info" data-bind="html: apparent_temperature"></span><span class="secondary-info" data-bind="html: unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: humidity"><span class="secondary-icon mdi mdi-water-percent" title="Humidity" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Humidity:&nbsp;</span><span class="secondary-info" data-bind="text: humidity"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span><br></p><p class="secondary-detail"  data-bind="visible: precip_probability() || precip_intensity()"><span data-bind="visible: precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: precip_probability"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span></span><span data-bind="visible: precip_intensity"><span class="secondary-info" data-bind="visible: precip_intensity() && precip_probability()">&nbsp;/&nbsp;</span><span class="secondary-info" data-bind="text: precip_intensity"></span><span class="secondary-unit" data-bind="text: rain_unit, attr: {style: sub_unit_style}"></span></span></p><p class="secondary-detail" data-bind="visible: wind_speed"><span class="secondary-icon mdi mdi-weather-windy" data-bind="visible: prefer_icons, css: bearing_icon, attr: {title: wind_bearing() + \'&deg;\'}"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Wind:&nbsp;</span><span class="secondary-info" data-bind="text: wind_speed"></span><span class="secondary-unit" data-bind="text: wind_unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: wind_bearing() && !prefer_icons()"><span class="secondary-info" data-bind="html: wind_bearing"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">&deg;</span></p><p class="secondary-detail" data-bind="visible: pressure() != \'\'"><span class="secondary-icon mdi mdi-gauge" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Pressure:&nbsp;</span><span class="secondary-info" data-bind="text: pressure"></span><span class="secondary-info" data-bind="text: pressure_unit, attr: {style: sub_unit_style}"></span></p><div data-bind="visible: show_forecast"><hr><h1 class="title" data-bind="text: forecast_title, attr:{ style: title_style}, visible: show_forecast"></h1><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-climacon" data-bind="css: forecast_icon"></span></p><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-info" data-bind="text: forecast_temperature_min"></span><span class="secondary-info" data-bind="visible: forecast_temperature_max"><span>/</span><span class="secondary-info" data-bind="text: forecast_temperature_max"></span></span></p><p class="secondary-detail" data-bind="visible: forecast_precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: forecast_precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: forecast_precip_probability"></span><span class="secondary-icon" data-bind="attr: {style: sub_unit_style}">%</span></p></div></div></div></li>', 2, 2, 1, 3)
    


    var widgets = {}
    // Initialize Widgets
    
        widgets["default-temp-int"] = new basedisplay("default-temp-int", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.espaltherma_temp_ambiante_int_r1t', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Temp int', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'units': 'C°', 'precision': 1, 'namespace': 'default'})
    
        widgets["default-temp-ext"] = new basegauge("default-temp-ext", "", "default", {'widget_type': 'basegauge', 'entity': 'sensor.vp2_temp_out', 'low_color': '#00aaff', 'med_color': '#00aaff', 'high_color': '#00aaff', 'bgcolor': '#666', 'color': '#00aaff', 'fields': {'title': 'Temp ext', 'title2': '', 'unit': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'widget_style': 'background-color: #444;'}, 'css': {}, 'icons': [], 'static_icons': [], 'units': 'C°', 'max': 45, 'min': 0, 'namespace': 'default'})
    
        widgets["default-pac"] = new baseclimate("default-pac", "", "default", {'widget_type': 'baseclimate', 'entity': 'climate.altherma', 'post_service': {'service': 'climate/set_temperature', 'entity_id': 'climate.altherma'}, 'fields': {'title': 'PAC', 'title2': '', 'units': 'C°', 'level': '', 'level2': ''}, 'icons': [], 'css': {}, 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'level_style': 'color: #00aaff;', 'level2_style': 'color: #00aaff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'unit_style': 'color: #00aaff;', 'unit2_style': 'color: #00aaff;'}, 'units': 'C°', 'namespace': 'default'})
    
        widgets["default-uv-vp2"] = new basedisplay("default-uv-vp2", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.vp2_uv', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'UV', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'units': 'UV', 'precision': 1, 'namespace': 'default'})
    
        widgets["default-meteo"] = new baseweather("default-meteo", "", "default", {'widget_type': 'baseweather', 'fields': {'title': '', 'show_forecast': 0, 'prefer_icons': 0, 'unit': '', 'wind_unit': '', 'pressure_unit': '', 'rain_unit': '', 'temperature': '', 'humidity': '', 'precip_probability': '', 'precip_intensity': '', 'precip_type': '', 'wind_speed': '', 'pressure': '', 'wind_bearing': '', 'apparent_temperature': '', 'icon': '', 'bearing_icon': 'mdi-rotate-0', 'precip_type_icon': 'mdi-umbrella', 'forecast_title': '', 'forecast_temperature_min': '', 'forecast_temperature_max': '', 'forecast_icon': '', 'forecast_precip_probability': '', 'forecast_precip_type': '', 'forecast_precip_type_icon': 'mdi-umbrella'}, 'entities': {'icon': 'sensor.dark_sky_icon', 'temperature': 'sensor.dark_sky_temperature', 'apparent_temperature': 'sensor.dark_sky_apparent_temperature', 'humidity': 'sensor.dark_sky_humidity', 'precip_probability': 'sensor.dark_sky_precip_probability', 'precip_intensity': 'sensor.dark_sky_precip_intensity', 'precip_type': 'sensor.dark_sky_precip', 'pressure': 'sensor.dark_sky_pressure', 'wind_speed': 'sensor.dark_sky_wind_speed', 'wind_bearing': 'sensor.dark_sky_wind_bearing', 'forecast_icon': 'sensor.dark_sky_icon_1d', 'forecast_temperature_min': 'sensor.dark_sky_daily_low_temperature_1d', 'forecast_temperature_max': 'sensor.dark_sky_daily_high_temperature_1d', 'forecast_precip_probability': 'sensor.dark_sky_precip_probability_1d', 'forecast_precip_type': 'sensor.dark_sky_precip_1d'}, 'css': {}, 'static_css': {'title_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;', 'main_style': 'color: #ffaa00;', 'sub_style': 'color: #00aaff;', 'sub_unit_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;'}, 'icons': {'snow': 'mdi-snowflake', 'rain': 'mdi-umbrella', 'sleet': 'mdi-weather-snowy-rainy', 'unknown': 'mdi-umbrella'}, 'static_icons': [], 'entity': 'weather.albi', 'namespace': 'default'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;
    if (location.search != "")
    {
        console.log("begin")
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("deviceid" in result)
        {
            myDeviceID = result.deviceid;
            try
            {
                setCookie('ADdevID', myDeviceID);
            }
            catch (e)
            {
                console.log(e);
            }
        }
        else
        {
            try
            {
                myDeviceID = getCookie('ADdevID');
            }
            catch (e)
            {
                console.log(e);
                myDeviceID = null;
            }
        }
        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "&";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }
    else
    {
        try
        {
            myDeviceID = getCookie('ADdevID');
        }
        catch (e)
        {
            console.log(e);
            myDeviceID = null;
        }
    }

    // Start listening for AD Events

    window.dashstream = new DashStream("ws", location.protocol, document.domain, location.port, "Hello Panel", widgets);

});