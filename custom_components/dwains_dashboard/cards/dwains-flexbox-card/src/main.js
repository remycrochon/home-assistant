const bases = [customElements.whenDefined('hui-masonry-view'), customElements.whenDefined('hc-lovelace')];
Promise.race(bases).then(() => {

  const LitElement = customElements.get('hui-masonry-view')
    ? Object.getPrototypeOf(customElements.get('hui-masonry-view'))
    : Object.getPrototypeOf(customElements.get('hc-lovelace'));

  const html = LitElement.prototype.html;

  const css = LitElement.prototype.css;


  const createError = (error, config) => {
    return createThing("hui-error-card", {
      type: "error",
      error,
      config,
    });
  };

  const cardHelpers = window.loadCardHelpers()
    ? window.loadCardHelpers()
    : undefined;

  const createThing = async (tag, config) => {
    if (cardHelpers) {
      const cardHelper = await cardHelpers;
      return cardHelper.createCardElement(config);
    }

    const element = document.createElement(tag);

    try {
      element.setConfig(config);
    } catch (err) {
      console.error(tag, err);
      return createError(err.message, config);
    }

    return element;
  };

  class DwainsFlexboxCard extends LitElement {
    constructor() {
      super();
    }

    static get properties() {
      return {
        _config: {},
        _refCards: {},
      };
    }

    set hass(hass) {
      this._hass = hass;
      if (!this._refCards && this._config) {
        this.renderCard();
      }
      if (this._refCards) {
        this._refCards.forEach((card) => {
          card.hass = hass;
        });
      }
    }


    setConfig(config) {
      if (
        !config &&
        ((!config.cards && !Array.isArray(config.cards)) ||
          !config.entities ||
          !Array.isArray(config.entities))
      ) {
        throw new Error("Card config incorrect");
      }

      this._config = config;
      //this._refCards = [];

      if (this._hass) {
        this.renderCard();
      }
    }

    renderCard() {
      const config = this._config.entities || this._config.cards;

      const promises = config.map((config) => this.createCardElement(config));
      Promise.all(promises).then((cards) => {
        this._refCards = cards;
      });
    }

    async createCardElement(cardConfig) {
      let tag = cardConfig.type;

      if (tag.startsWith("divider")) {
        tag = `hui-divider-row`;
      } else if (tag.startsWith("custom:")) {
        tag = tag.substr("custom:".length);
      } else {
        tag = `hui-${tag}-card`;
      }

      const element = await createThing(tag, cardConfig);

      if (cardConfig.item_classes) {
        element.className = "item " + cardConfig.item_classes;
      } else {
        if (this._config.items_classes) {
          element.className = "item " + this._config.items_classes;
        } else {
          element.className = "item";
        }
      }

      element.hass = this._hass;

      element.addEventListener(
        "ll-rebuild",
        (ev) => {
          ev.stopPropagation();
          this.createCardElement(cardConfig).then(() => {
            this.renderCard();
          });
        },
        { once: true }
      );

      return element;
    }

    render() {
      if (!this._config || !this._hass || !this._refCards) {
        return html``;
      }

      var padding;
      if (this._config.padding) {
        padding = "padding";
      }

      return html`
        <div class="wrapper ${padding}">
          <div class="row">
            ${this._refCards}
          </div>
        </div>
      `;
    }

    static get styles() {
      return [
        css`
          /* I used flexbox grid (http://flexboxgrid.com/) for now, not sure if it's good for all browsers */
          .container,
          .container-fluid {
            margin-right: auto;
            margin-left: auto;
          }
          .container-fluid {
            padding-right: 2rem;
            padding-left: 2rem;
          }
          .row {
            box-sizing: border-box;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 0;
            -ms-flex: 0 1 auto;
            flex: 0 1 auto;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -0.25rem;
            margin-left: -0.25rem;
          }
          .row.reverse {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
          }
          .col.reverse {
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
            -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
          }
          .col-xs,
          .col-xs-1,
          .col-xs-10,
          .col-xs-11,
          .col-xs-12,
          .col-xs-2,
          .col-xs-3,
          .col-xs-4,
          .col-xs-5,
          .col-xs-6,
          .col-xs-7,
          .col-xs-8,
          .col-xs-9,
          .col-xs-offset-0,
          .col-xs-offset-1,
          .col-xs-offset-10,
          .col-xs-offset-11,
          .col-xs-offset-12,
          .col-xs-offset-2,
          .col-xs-offset-3,
          .col-xs-offset-4,
          .col-xs-offset-5,
          .col-xs-offset-6,
          .col-xs-offset-7,
          .col-xs-offset-8,
          .col-xs-offset-9 {
            box-sizing: border-box;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            padding-right: 0.25rem;
            padding-left: 0.25rem;
          }
          .col-xs {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            max-width: 100%;
          }
          .col-xs-1 {
            -ms-flex-preferred-size: 8.33333333%;
            flex-basis: 8.33333333%;
            max-width: 8.33333333%;
          }
          .col-xs-2 {
            -ms-flex-preferred-size: 16.66666667%;
            flex-basis: 16.66666667%;
            max-width: 16.66666667%;
          }
          .col-xs-3 {
            -ms-flex-preferred-size: 25%;
            flex-basis: 25%;
            max-width: 25%;
          }
          .col-xs-4 {
            -ms-flex-preferred-size: 33.33333333%;
            flex-basis: 33.33333333%;
            max-width: 33.33333333%;
          }
          .col-xs-5 {
            -ms-flex-preferred-size: 41.66666667%;
            flex-basis: 41.66666667%;
            max-width: 41.66666667%;
          }
          .col-xs-6 {
            -ms-flex-preferred-size: 50%;
            flex-basis: 50%;
            max-width: 50%;
          }
          .col-xs-7 {
            -ms-flex-preferred-size: 58.33333333%;
            flex-basis: 58.33333333%;
            max-width: 58.33333333%;
          }
          .col-xs-8 {
            -ms-flex-preferred-size: 66.66666667%;
            flex-basis: 66.66666667%;
            max-width: 66.66666667%;
          }
          .col-xs-9 {
            -ms-flex-preferred-size: 75%;
            flex-basis: 75%;
            max-width: 75%;
          }
          .col-xs-10 {
            -ms-flex-preferred-size: 83.33333333%;
            flex-basis: 83.33333333%;
            max-width: 83.33333333%;
          }
          .col-xs-11 {
            -ms-flex-preferred-size: 91.66666667%;
            flex-basis: 91.66666667%;
            max-width: 91.66666667%;
          }
          .col-xs-12 {
            -ms-flex-preferred-size: 100%;
            flex-basis: 100%;
            max-width: 100%;
          }
          .col-xs-offset-0 {
            margin-left: 0;
          }
          .col-xs-offset-1 {
            margin-left: 8.33333333%;
          }
          .col-xs-offset-2 {
            margin-left: 16.66666667%;
          }
          .col-xs-offset-3 {
            margin-left: 25%;
          }
          .col-xs-offset-4 {
            margin-left: 33.33333333%;
          }
          .col-xs-offset-5 {
            margin-left: 41.66666667%;
          }
          .col-xs-offset-6 {
            margin-left: 50%;
          }
          .col-xs-offset-7 {
            margin-left: 58.33333333%;
          }
          .col-xs-offset-8 {
            margin-left: 66.66666667%;
          }
          .col-xs-offset-9 {
            margin-left: 75%;
          }
          .col-xs-offset-10 {
            margin-left: 83.33333333%;
          }
          .col-xs-offset-11 {
            margin-left: 91.66666667%;
          }
          .start-xs {
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            text-align: start;
          }
          .center-xs {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            text-align: center;
          }
          .end-xs {
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            text-align: end;
          }
          .top-xs {
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
          }
          .middle-xs {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
          .bottom-xs {
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end;
          }
          .around-xs {
            -ms-flex-pack: distribute;
            justify-content: space-around;
          }
          .between-xs {
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
          }
          .first-xs {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
          }
          .last-xs {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
          }
          @media only screen and (min-width: 48em) {
            .container {
              width: 49rem;
            }
            .col-sm,
            .col-sm-1,
            .col-sm-10,
            .col-sm-11,
            .col-sm-12,
            .col-sm-2,
            .col-sm-3,
            .col-sm-4,
            .col-sm-5,
            .col-sm-6,
            .col-sm-7,
            .col-sm-8,
            .col-sm-9,
            .col-sm-offset-0,
            .col-sm-offset-1,
            .col-sm-offset-10,
            .col-sm-offset-11,
            .col-sm-offset-12,
            .col-sm-offset-2,
            .col-sm-offset-3,
            .col-sm-offset-4,
            .col-sm-offset-5,
            .col-sm-offset-6,
            .col-sm-offset-7,
            .col-sm-offset-8,
            .col-sm-offset-9 {
              box-sizing: border-box;
              -webkit-box-flex: 0;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              padding-right: 0.25rem;
              padding-left: 0.25rem;
            }
            .col-sm {
              -webkit-box-flex: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
              -ms-flex-preferred-size: 0;
              flex-basis: 0;
              max-width: 100%;
            }
            .col-sm-1 {
              -ms-flex-preferred-size: 8.33333333%;
              flex-basis: 8.33333333%;
              max-width: 8.33333333%;
            }
            .col-sm-2 {
              -ms-flex-preferred-size: 16.66666667%;
              flex-basis: 16.66666667%;
              max-width: 16.66666667%;
            }
            .col-sm-3 {
              -ms-flex-preferred-size: 25%;
              flex-basis: 25%;
              max-width: 25%;
            }
            .col-sm-4 {
              -ms-flex-preferred-size: 33.33333333%;
              flex-basis: 33.33333333%;
              max-width: 33.33333333%;
            }
            .col-sm-5 {
              -ms-flex-preferred-size: 41.66666667%;
              flex-basis: 41.66666667%;
              max-width: 41.66666667%;
            }
            .col-sm-6 {
              -ms-flex-preferred-size: 50%;
              flex-basis: 50%;
              max-width: 50%;
            }
            .col-sm-7 {
              -ms-flex-preferred-size: 58.33333333%;
              flex-basis: 58.33333333%;
              max-width: 58.33333333%;
            }
            .col-sm-8 {
              -ms-flex-preferred-size: 66.66666667%;
              flex-basis: 66.66666667%;
              max-width: 66.66666667%;
            }
            .col-sm-9 {
              -ms-flex-preferred-size: 75%;
              flex-basis: 75%;
              max-width: 75%;
            }
            .col-sm-10 {
              -ms-flex-preferred-size: 83.33333333%;
              flex-basis: 83.33333333%;
              max-width: 83.33333333%;
            }
            .col-sm-11 {
              -ms-flex-preferred-size: 91.66666667%;
              flex-basis: 91.66666667%;
              max-width: 91.66666667%;
            }
            .col-sm-12 {
              -ms-flex-preferred-size: 100%;
              flex-basis: 100%;
              max-width: 100%;
            }
            .col-sm-offset-0 {
              margin-left: 0;
            }
            .col-sm-offset-1 {
              margin-left: 8.33333333%;
            }
            .col-sm-offset-2 {
              margin-left: 16.66666667%;
            }
            .col-sm-offset-3 {
              margin-left: 25%;
            }
            .col-sm-offset-4 {
              margin-left: 33.33333333%;
            }
            .col-sm-offset-5 {
              margin-left: 41.66666667%;
            }
            .col-sm-offset-6 {
              margin-left: 50%;
            }
            .col-sm-offset-7 {
              margin-left: 58.33333333%;
            }
            .col-sm-offset-8 {
              margin-left: 66.66666667%;
            }
            .col-sm-offset-9 {
              margin-left: 75%;
            }
            .col-sm-offset-10 {
              margin-left: 83.33333333%;
            }
            .col-sm-offset-11 {
              margin-left: 91.66666667%;
            }
            .start-sm {
              -webkit-box-pack: start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              text-align: start;
            }
            .center-sm {
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              text-align: center;
            }
            .end-sm {
              -webkit-box-pack: end;
              -ms-flex-pack: end;
              justify-content: flex-end;
              text-align: end;
            }
            .top-sm {
              -webkit-box-align: start;
              -ms-flex-align: start;
              align-items: flex-start;
            }
            .middle-sm {
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }
            .bottom-sm {
              -webkit-box-align: end;
              -ms-flex-align: end;
              align-items: flex-end;
            }
            .around-sm {
              -ms-flex-pack: distribute;
              justify-content: space-around;
            }
            .between-sm {
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }
            .first-sm {
              -webkit-box-ordinal-group: 0;
              -ms-flex-order: -1;
              order: -1;
            }
            .last-sm {
              -webkit-box-ordinal-group: 2;
              -ms-flex-order: 1;
              order: 1;
            }
          }
          @media only screen and (min-width: 64em) {
            .container {
              width: 65rem;
            }
            .col-md,
            .col-md-1,
            .col-md-10,
            .col-md-11,
            .col-md-12,
            .col-md-2,
            .col-md-3,
            .col-md-4,
            .col-md-5,
            .col-md-6,
            .col-md-7,
            .col-md-8,
            .col-md-9,
            .col-md-offset-0,
            .col-md-offset-1,
            .col-md-offset-10,
            .col-md-offset-11,
            .col-md-offset-12,
            .col-md-offset-2,
            .col-md-offset-3,
            .col-md-offset-4,
            .col-md-offset-5,
            .col-md-offset-6,
            .col-md-offset-7,
            .col-md-offset-8,
            .col-md-offset-9 {
              box-sizing: border-box;
              -webkit-box-flex: 0;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              padding-right: 0.25rem;
              padding-left: 0.25rem;
            }
            .col-md {
              -webkit-box-flex: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
              -ms-flex-preferred-size: 0;
              flex-basis: 0;
              max-width: 100%;
            }
            .col-md-1 {
              -ms-flex-preferred-size: 8.33333333%;
              flex-basis: 8.33333333%;
              max-width: 8.33333333%;
            }
            .col-md-2 {
              -ms-flex-preferred-size: 16.66666667%;
              flex-basis: 16.66666667%;
              max-width: 16.66666667%;
            }
            .col-md-3 {
              -ms-flex-preferred-size: 25%;
              flex-basis: 25%;
              max-width: 25%;
            }
            .col-md-4 {
              -ms-flex-preferred-size: 33.33333333%;
              flex-basis: 33.33333333%;
              max-width: 33.33333333%;
            }
            .col-md-5 {
              -ms-flex-preferred-size: 41.66666667%;
              flex-basis: 41.66666667%;
              max-width: 41.66666667%;
            }
            .col-md-6 {
              -ms-flex-preferred-size: 50%;
              flex-basis: 50%;
              max-width: 50%;
            }
            .col-md-7 {
              -ms-flex-preferred-size: 58.33333333%;
              flex-basis: 58.33333333%;
              max-width: 58.33333333%;
            }
            .col-md-8 {
              -ms-flex-preferred-size: 66.66666667%;
              flex-basis: 66.66666667%;
              max-width: 66.66666667%;
            }
            .col-md-9 {
              -ms-flex-preferred-size: 75%;
              flex-basis: 75%;
              max-width: 75%;
            }
            .col-md-10 {
              -ms-flex-preferred-size: 83.33333333%;
              flex-basis: 83.33333333%;
              max-width: 83.33333333%;
            }
            .col-md-11 {
              -ms-flex-preferred-size: 91.66666667%;
              flex-basis: 91.66666667%;
              max-width: 91.66666667%;
            }
            .col-md-12 {
              -ms-flex-preferred-size: 100%;
              flex-basis: 100%;
              max-width: 100%;
            }
            .col-md-offset-0 {
              margin-left: 0;
            }
            .col-md-offset-1 {
              margin-left: 8.33333333%;
            }
            .col-md-offset-2 {
              margin-left: 16.66666667%;
            }
            .col-md-offset-3 {
              margin-left: 25%;
            }
            .col-md-offset-4 {
              margin-left: 33.33333333%;
            }
            .col-md-offset-5 {
              margin-left: 41.66666667%;
            }
            .col-md-offset-6 {
              margin-left: 50%;
            }
            .col-md-offset-7 {
              margin-left: 58.33333333%;
            }
            .col-md-offset-8 {
              margin-left: 66.66666667%;
            }
            .col-md-offset-9 {
              margin-left: 75%;
            }
            .col-md-offset-10 {
              margin-left: 83.33333333%;
            }
            .col-md-offset-11 {
              margin-left: 91.66666667%;
            }
            .start-md {
              -webkit-box-pack: start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              text-align: start;
            }
            .center-md {
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              text-align: center;
            }
            .end-md {
              -webkit-box-pack: end;
              -ms-flex-pack: end;
              justify-content: flex-end;
              text-align: end;
            }
            .top-md {
              -webkit-box-align: start;
              -ms-flex-align: start;
              align-items: flex-start;
            }
            .middle-md {
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }
            .bottom-md {
              -webkit-box-align: end;
              -ms-flex-align: end;
              align-items: flex-end;
            }
            .around-md {
              -ms-flex-pack: distribute;
              justify-content: space-around;
            }
            .between-md {
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }
            .first-md {
              -webkit-box-ordinal-group: 0;
              -ms-flex-order: -1;
              order: -1;
            }
            .last-md {
              -webkit-box-ordinal-group: 2;
              -ms-flex-order: 1;
              order: 1;
            }
          }
          @media only screen and (min-width: 75em) {
            .container {
              width: 76rem;
            }
            .col-lg,
            .col-lg-1,
            .col-lg-10,
            .col-lg-11,
            .col-lg-12,
            .col-lg-2,
            .col-lg-3,
            .col-lg-4,
            .col-lg-5,
            .col-lg-6,
            .col-lg-7,
            .col-lg-8,
            .col-lg-9,
            .col-lg-offset-0,
            .col-lg-offset-1,
            .col-lg-offset-10,
            .col-lg-offset-11,
            .col-lg-offset-12,
            .col-lg-offset-2,
            .col-lg-offset-3,
            .col-lg-offset-4,
            .col-lg-offset-5,
            .col-lg-offset-6,
            .col-lg-offset-7,
            .col-lg-offset-8,
            .col-lg-offset-9 {
              box-sizing: border-box;
              -webkit-box-flex: 0;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              padding-right: 0.25rem;
              padding-left: 0.25rem;
            }
            .col-lg {
              -webkit-box-flex: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
              -ms-flex-preferred-size: 0;
              flex-basis: 0;
              max-width: 100%;
            }
            .col-lg-1 {
              -ms-flex-preferred-size: 8.33333333%;
              flex-basis: 8.33333333%;
              max-width: 8.33333333%;
            }
            .col-lg-2 {
              -ms-flex-preferred-size: 16.66666667%;
              flex-basis: 16.66666667%;
              max-width: 16.66666667%;
            }
            .col-lg-3 {
              -ms-flex-preferred-size: 25%;
              flex-basis: 25%;
              max-width: 25%;
            }
            .col-lg-4 {
              -ms-flex-preferred-size: 33.33333333%;
              flex-basis: 33.33333333%;
              max-width: 33.33333333%;
            }
            .col-lg-5 {
              -ms-flex-preferred-size: 41.66666667%;
              flex-basis: 41.66666667%;
              max-width: 41.66666667%;
            }
            .col-lg-6 {
              -ms-flex-preferred-size: 50%;
              flex-basis: 50%;
              max-width: 50%;
            }
            .col-lg-7 {
              -ms-flex-preferred-size: 58.33333333%;
              flex-basis: 58.33333333%;
              max-width: 58.33333333%;
            }
            .col-lg-8 {
              -ms-flex-preferred-size: 66.66666667%;
              flex-basis: 66.66666667%;
              max-width: 66.66666667%;
            }
            .col-lg-9 {
              -ms-flex-preferred-size: 75%;
              flex-basis: 75%;
              max-width: 75%;
            }
            .col-lg-10 {
              -ms-flex-preferred-size: 83.33333333%;
              flex-basis: 83.33333333%;
              max-width: 83.33333333%;
            }
            .col-lg-11 {
              -ms-flex-preferred-size: 91.66666667%;
              flex-basis: 91.66666667%;
              max-width: 91.66666667%;
            }
            .col-lg-12 {
              -ms-flex-preferred-size: 100%;
              flex-basis: 100%;
              max-width: 100%;
            }
            .col-lg-offset-0 {
              margin-left: 0;
            }
            .col-lg-offset-1 {
              margin-left: 8.33333333%;
            }
            .col-lg-offset-2 {
              margin-left: 16.66666667%;
            }
            .col-lg-offset-3 {
              margin-left: 25%;
            }
            .col-lg-offset-4 {
              margin-left: 33.33333333%;
            }
            .col-lg-offset-5 {
              margin-left: 41.66666667%;
            }
            .col-lg-offset-6 {
              margin-left: 50%;
            }
            .col-lg-offset-7 {
              margin-left: 58.33333333%;
            }
            .col-lg-offset-8 {
              margin-left: 66.66666667%;
            }
            .col-lg-offset-9 {
              margin-left: 75%;
            }
            .col-lg-offset-10 {
              margin-left: 83.33333333%;
            }
            .col-lg-offset-11 {
              margin-left: 91.66666667%;
            }
            .start-lg {
              -webkit-box-pack: start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              text-align: start;
            }
            .center-lg {
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              text-align: center;
            }
            .end-lg {
              -webkit-box-pack: end;
              -ms-flex-pack: end;
              justify-content: flex-end;
              text-align: end;
            }
            .top-lg {
              -webkit-box-align: start;
              -ms-flex-align: start;
              align-items: flex-start;
            }
            .middle-lg {
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }
            .bottom-lg {
              -webkit-box-align: end;
              -ms-flex-align: end;
              align-items: flex-end;
            }
            .around-lg {
              -ms-flex-pack: distribute;
              justify-content: space-around;
            }
            .between-lg {
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }
            .first-lg {
              -webkit-box-ordinal-group: 0;
              -ms-flex-order: -1;
              order: -1;
            }
            .last-lg {
              -webkit-box-ordinal-group: 2;
              -ms-flex-order: 1;
              order: 1;
            }
          }

          .item {
            margin-bottom: 0.5rem;
          }

          .wrapper {
            overflow: hidden;
            padding: 0px;
          }
          .wrapper.padding {
            padding: 11px;
          }
          .row {
            overflow: hidden;
            width: auto;
          }

          .d-none {
            display: none !important;
          }
          .d-inline {
            display: inline !important;
          }
          .d-inline-block {
            display: inline-block !important;
          }
          .d-block {
            display: block !important;
          }
          .d-table {
            display: table !important;
          }
          .d-table-row {
            display: table-row !important;
          }
          .d-table-cell {
            display: table-cell !important;
          }
          .d-flex {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
          }
          .d-inline-flex {
            display: -webkit-inline-box !important;
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
          }

          @media (min-width: 576px) {
            .d-sm-none {
              display: none !important;
            }
            .d-sm-inline {
              display: inline !important;
            }
            .d-sm-inline-block {
              display: inline-block !important;
            }
            .d-sm-block {
              display: block !important;
            }
            .d-sm-table {
              display: table !important;
            }
            .d-sm-table-row {
              display: table-row !important;
            }
            .d-sm-table-cell {
              display: table-cell !important;
            }
            .d-sm-flex {
              display: -webkit-box !important;
              display: -ms-flexbox !important;
              display: flex !important;
            }
            .d-sm-inline-flex {
              display: -webkit-inline-box !important;
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }

          @media (min-width: 768px) {
            .d-md-none {
              display: none !important;
            }
            .d-md-inline {
              display: inline !important;
            }
            .d-md-inline-block {
              display: inline-block !important;
            }
            .d-md-block {
              display: block !important;
            }
            .d-md-table {
              display: table !important;
            }
            .d-md-table-row {
              display: table-row !important;
            }
            .d-md-table-cell {
              display: table-cell !important;
            }
            .d-md-flex {
              display: -webkit-box !important;
              display: -ms-flexbox !important;
              display: flex !important;
            }
            .d-md-inline-flex {
              display: -webkit-inline-box !important;
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }

          @media (min-width: 992px) {
            .d-lg-none {
              display: none !important;
            }
            .d-lg-inline {
              display: inline !important;
            }
            .d-lg-inline-block {
              display: inline-block !important;
            }
            .d-lg-block {
              display: block !important;
            }
            .d-lg-table {
              display: table !important;
            }
            .d-lg-table-row {
              display: table-row !important;
            }
            .d-lg-table-cell {
              display: table-cell !important;
            }
            .d-lg-flex {
              display: -webkit-box !important;
              display: -ms-flexbox !important;
              display: flex !important;
            }
            .d-lg-inline-flex {
              display: -webkit-inline-box !important;
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }

          @media (min-width: 1200px) {
            .d-xl-none {
              display: none !important;
            }
            .d-xl-inline {
              display: inline !important;
            }
            .d-xl-inline-block {
              display: inline-block !important;
            }
            .d-xl-block {
              display: block !important;
            }
            .d-xl-table {
              display: table !important;
            }
            .d-xl-table-row {
              display: table-row !important;
            }
            .d-xl-table-cell {
              display: table-cell !important;
            }
            .d-xl-flex {
              display: -webkit-box !important;
              display: -ms-flexbox !important;
              display: flex !important;
            }
            .d-xl-inline-flex {
              display: -webkit-inline-box !important;
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }
        `,
      ];
    }

    getCardSize() {
      return 3;
    }
  }

  if (!customElements.get("dwains-flexbox-card")) {
    customElements.define("dwains-flexbox-card", DwainsFlexboxCard);
    const pjson = require('../package.json');
    console.info(
      `%c DWAINS-FLEXBOX-CARD \n%c    Version ${pjson.version}    `,
      "color: #2fbae5; font-weight: bold; background: black",
      "color: white; font-weight: bold; background: dimgray"
    );
  }
});