const fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

if (
  !customElements.get("ha-switch") &&
  customElements.get("paper-toggle-button")
) {
  customElements.define("ha-switch", customElements.get("paper-toggle-button"));
}

const LitElement = customElements.get("hui-masonry-view")
  ? Object.getPrototypeOf(customElements.get("hui-masonry-view"))
  : Object.getPrototypeOf(customElements.get("hui-view"));
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

const HELPERS = window.loadCardHelpers();

const DefaultSensors = new Map([
  ["cloudCoverEntity", "_cloud_cover"],
  ["rainChanceEntity", "_rain_chance"],
  ["freezeChanceEntity", "_freeze_chance"],
  ["snowChanceEntity", "_snow_chance"],
  ["uvEntity", "_uv"],
  ["rainForecastEntity", "_next_rain"],
]);

export class MeteofranceWeatherCardEditor extends LitElement {
  setConfig(config) {
    this._config = { ...config };
  }

  static get properties() {
    return { hass: {}, _config: {} };
  }

  get _entity() {
    return this._config.entity || "";
  }

  get _name() {
    return this._config.name || "";
  }

  get _icons() {
    return this._config.icons || "";
  }

  get _current() {
    return this._config.current !== false;
  }

  get _details() {
    return this._config.details !== false;
  }

  get _forecast() {
    return this._config.forecast !== false;
  }

  get _number_of_forecasts() {
    return this._config.number_of_forecasts || 5;
  }

  // Météo France
  // Switches state
  get _one_hour_forecast() {
    return this._config.one_hour_forecast !== false;
  }

  get _alert_forecast() {
    return this._config.alert_forecast !== false;
  }

  get _animated_icons() {
    return this._config.animated_icons !== false;
  }

  // Config value
  get _alertEntity() {
    return this._config.alertEntity || "";
  }

  get _cloudCoverEntity() {
    return this._config.cloudCoverEntity || "";
  }

  get _freezeChanceEntity() {
    return this._config.freezeChanceEntity || "";
  }

  get _rainChanceEntity() {
    return this._config.rainChanceEntity || "";
  }

  get _rainForecastEntity() {
    return this._config.rainForecastEntity || "";
  }

  get _snowChanceEntity() {
    return this._config.snowChanceEntity || "";
  }

  get _uvEntity() {
    return this._config.uvEntity || "";
  }

  get _detailEntity() {
    return this._config.detailEntity || "";
  }

  firstUpdated() {
    HELPERS.then((help) => {
      if (help.importMoreInfoControl) {
        help.importMoreInfoControl("fan");
      }
    });
  }

  render() {
    if (!this.hass) {
      return html``;
    }

    return html`
      <div class="card-config">
        <div>
          <paper-input
            label="Name"
            .value="${this._name}"
            .configValue="${"name"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          ${this.renderSensorPicker(
            "Détail",
            this._detailEntity,
            "detailEntity"
          )}
          <paper-input
            label="Icons location"
            .value="${this._icons}"
            .configValue="${"icons"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <!-- Primary weather entity -->
          ${this.renderWeatherPicker("Entity", this._entity, "entity")}
          <!-- Switches -->
          <ul class="switches">
            ${this.renderSwitchOption("Show current", this._current, "current")}
            ${this.renderSwitchOption("Show details", this._details, "details")}
            ${this.renderSwitchOption(
              "Show one hour forecast",
              this._one_hour_forecast,
              "one_hour_forecast"
            )}
            ${this.renderSwitchOption(
              "Show alert",
              this._alert_forecast,
              "alert_forecast"
            )}
            ${this.renderSwitchOption(
              "Show forecast",
              this._forecast,
              "forecast"
            )}
            ${this.renderSwitchOption(
              "Use animated icons",
              this._animated_icons,
              "animated_icons"
            )}
          </ul>
          <!-- -->
          <paper-input
            label="Number of future forcasts"
            type="number"
            min="1"
            max="8"
            value=${this._number_of_forecasts}
            .configValue="${"number_of_forecasts"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <!-- Meteo France weather entities -->
          ${this.renderSensorPicker(
            "Risque de pluie",
            this._rainChanceEntity,
            "rainChanceEntity"
          )}
          ${this.renderSensorPicker("UV", this._uvEntity, "uvEntity")}
          ${this.renderSensorPicker(
            "Couverture nuageuse",
            this._cloudCoverEntity,
            "cloudCoverEntity"
          )}
          ${this.renderSensorPicker(
            "Risque de gel",
            this._freezeChanceEntity,
            "freezeChanceEntity"
          )}
          ${this.renderSensorPicker(
            "Risque de neige",
            this._snowChanceEntity,
            "snowChanceEntity"
          )}
          ${this.renderSensorPicker(
            "Vigilance Météo",
            this._alertEntity,
            "alertEntity"
          )}
          ${this.renderSensorPicker(
            "Pluie dans l'heure",
            this._rainForecastEntity,
            "rainForecastEntity"
          )}
        </div>
      </div>
    `;
  }

  renderWeatherPicker(label, entity, configAttr) {
    return this.renderPicker(label, entity, configAttr, "weather");
  }

  renderSensorPicker(label, entity, configAttr) {
    return this.renderPicker(label, entity, configAttr, "sensor");
  }

  renderPicker(label, entity, configAttr, domain) {
    return html`
      <ha-entity-picker
        label="${label}"
        .hass="${this.hass}"
        .value="${entity}"
        .configValue="${configAttr}"
        .includeDomains="${domain}"
        @change="${this._valueChanged}"
        allow-custom-entity
      ></ha-entity-picker>
    `;
  }

  renderSwitchOption(label, state, configAttr) {
    return html`
      <li class="switch">
              <ha-switch
                .checked=${state}
                .configValue="${configAttr}"
                @change="${this._valueChanged}"
              ></ha-switch
              ><span>${label}</span>
            </div>
          </li>
    `;
  }

  _weatherEntityChanged(entityName) {
    DefaultSensors.forEach((sensorSuffix, configAttribute) => {
      const entity = "sensor." + entityName + sensorSuffix;
      if (this.hass.states[entity] !== undefined)
        this._config = {
          ...this._config,
          [configAttribute]: entity,
        };
    });
  }

  _valueChanged(ev) {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === "") {
        delete this._config[target.configValue];
      } else {
        if (target.configValue === "entity")
          this._weatherEntityChanged(target.value.split(".")[1]);
        this._config = {
          ...this._config,
          [target.configValue]:
            target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, "config-changed", { config: this._config });
  }

  static get styles() {
    return css`
      .switches {
        margin: 8px 0;
        display: flex;
        flex-flow: row wrap;
        list-style: none;
        padding: 0;
      }
      .switch {
        display: flex;
        align-items: center;
        width: 50%;
        height: 40px;
      }
      .switches span {
        padding: 0 16px;
      }
    `;
  }
}

customElements.define(
  "meteofrance-weather-card-editor",
  MeteofranceWeatherCardEditor
);
