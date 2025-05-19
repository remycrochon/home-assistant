function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,d=l.trustedTypes,c=d?d.emptyScript:"",h=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p},_="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;f[_]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const $=window,m=$.trustedTypes,y=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,w="?"+A,C=`<${w}>`,E=document,S=()=>E.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,O="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,z=/>/g,H=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,T=/"/g,N=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),I=new WeakMap,D=E.createTreeWalker(E,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}const B=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===P?"!--"===l[1]?r=U:void 0!==l[1]?r=z:void 0!==l[2]?(N.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=null!=o?o:P,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?H:'"'===l[3]?T:M):r===T||r===M?r=H:r===U||r===z?r=P:(r=H,o=void 0);const h=r===H&&t[e+1].startsWith("/>")?" ":"";n+=r===P?i+C:d>=0?(s.push(a),i.slice(0,d)+b+i.slice(d)+A+h):i+A+(-2===d?(s.push(void 0),e):h)}return[V(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,d]=B(t,e);if(this.el=W.createElement(l,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=D.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(b)||e.startsWith(A)){const i=d[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+b).split(A),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?Q:"@"===e[1]?X:J})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(N.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),D.nextNode(),a.push({type:2,index:++o});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)a.push({type:7,index:o}),t+=A.length-1}o++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){var o,n,r,a;if(e===j)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const d=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=G(t,l._$AS(t,e.values),l,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);D.currentNode=o;let n=D.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new q(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Y(n,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=D.nextNode(),r++)}return D.currentNode=E,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var o;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),k(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>x(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=W.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new K(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new W(t)),e}T(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new q(this.k(S()),this.k(S()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,i,s,o){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=G(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=G(this,s[i+r],e,r),a===j&&(a=this._$AH[r]),n||(n=!k(a)||a!==this._$AH[r]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const F=m?m.emptyScript:"";class Q extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class X extends J{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=G(this,t,e,0))&&void 0!==i?i:L)===j)return;const s=this._$AH,o=t===L&&s!==L||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==L&&(s===L||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const tt=$.litHtmlPolyfillSupport;null==tt||tt(W,q),(null!==(g=$.litHtmlVersions)&&void 0!==g?g:$.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et,it;class st extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new q(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}st.finalized=!0,st._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:st});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function lt(t){return at({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;const ct="v2.1.3",ht="ll-custom",ut="local_conditional_card",pt="local_conditional_card_id",vt="show",_t="hide",ft="   LOCAL-CONDITIONAL-CARD",gt=`   version: ${ct}`,$t=Math.max(25,gt.length)+3,mt=(t,e)=>t+" ".repeat(e-t.length);console.info(`%c${mt(ft,$t)}\n%c${mt(gt,$t)}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"local-conditional-card",name:"Local Conditional Card",description:"A conditional card that works only for current view"});const yt=await window.loadCardHelpers();let bt=class extends st{static async getConfigElement(){return await Promise.resolve().then((function(){return Mt})),document.createElement("local-conditional-card-editor")}static getStubConfig(){return{id:pt,default:vt,card:{}}}async setConfig(t){if(!t)throw new Error("Missing configuration");if(this.config=t,this.show="show"===t.default,t.persist_state){const e=localStorage.getItem(this._getStorageKey(t));e&&(this.show="true"===e)}if(!t.card)throw new Error("No card configured");t.card&&await this.createCard(t.card)}get hass(){return this._hass}set hass(t){this.config&&t&&(this._hass=t,this.card&&(this.card.hass=t))}get hidden(){return!this.isVisible()}constructor(){super(),this.preview=!1,this.connectedWhileHidden=!0,this._handleLovelaceDomEvent=this._handleLovelaceDomEvent.bind(this)}render(){const t=this.isVisible();if(this.style.setProperty("display",t?"":"none"),t)return R`${this.card}`}connectedCallback(){super.connectedCallback(),document.addEventListener(ht,this._handleLovelaceDomEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(ht,this._handleLovelaceDomEvent)}_handleLovelaceDomEvent(t){const e=t;if(ut in e.detail&&"ids"in e.detail[ut]&&"action"in e.detail[ut]&&Array.isArray(e.detail[ut].ids)){const t=e.detail[ut].ids;let i=e.detail[ut].action;if("set"===i){const e=t.find((t=>"object"==typeof t&&this.config.id in t));e&&"object"==typeof e&&(i=e[this.config.id])}else i=t.includes(this.config.id)?i:"none";switch(i){case vt:this.show=!0;break;case _t:this.show=!1;break;case"toggle":this.show=!this.show}this.config.persist_state&&localStorage.setItem(this._getStorageKey(),`${this.show}`),this.dispatchEvent(new Event("card-visibility-changed",{bubbles:!0,cancelable:!0}))}}_getStorageKey(t){return`local_conditional_card_state_${(null!=t?t:this.config).id}`}isVisible(){var t;return this.preview&&!(null!==(t=this.config.hide_in_preview)&&void 0!==t&&t)||this.show||this.card&&"hui-error-card"===this.card.localName}async getCardSize(){return this.isVisible()?"getCardSize"in this.card?await this.card.getCardSize():1:0}async createCard(t){this.card=await this._createCard(t)}async _createCard(t){const e=yt.createCardElement(t);return e.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(e,t)})),e.hass=this.hass,e}async _rebuildCard(t,e){const i=await this._createCard(e);t.parentElement&&t.parentElement.replaceChild(i,t),this.card=i}};var At,wt;t([at({attribute:!1})],bt.prototype,"_hass",void 0),t([at({type:Boolean})],bt.prototype,"preview",void 0),t([lt()],bt.prototype,"config",void 0),t([lt()],bt.prototype,"show",void 0),bt=t([nt("local-conditional-card")],bt),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(At||(At={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(wt||(wt={}));var Ct=function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o},Et={labels:{default_state:{prefix:"Default state: ",suffix:"",value:{shown:"shown",hidden:"hidden"}},id:"ID",description:"Configure ID that will be used to change this card's visibility.",persist_state:"Persist card's visibility state",hide_in_preview:"Hide card in edit mode",version:"Version:"}},St={editor:Et},kt={labels:{default_state:{prefix:"Domyślny stan: ",suffix:"",value:{shown:"widoczny",hidden:"ukryty"}},id:"ID",description:"Skonfiguruj ID, które będzie używane do zmiany widoczności tej karty.",persist_state:"Zapisz stan widoczności karty",hide_in_preview:"Ukryj kartę w trybie edycji",version:"Wersja:"}},xt={editor:kt};const Ot={en:Object.freeze({__proto__:null,editor:Et,default:St}),pl:Object.freeze({__proto__:null,editor:kt,default:xt})};function Pt(t,e="",i="",s="",o=t){const n="en";if(!s)try{s=JSON.parse(localStorage.getItem("selectedLanguage")||`"${n}"`)}catch(t){s=(localStorage.getItem("selectedLanguage")||n).replace(/['"]+/g,"")}let r;try{r=Ut(t,null!=s?s:n)}catch(e){r=Ut(t,n)}return void 0===r&&(r=Ut(t,n)),r=null!=r?r:o,""!==e&&""!==i&&(r=r.replace(e,i)),r}function Ut(t,e){try{return t.split(".").reduce(((t,e)=>t[e]),Ot[e])}catch(t){return}}function zt(t,e,i){var s;return function(t,e,i){return"string"==typeof t?Pt(t,"","",e,i):Pt(...t,e,i)}(t,null===(s=null==e?void 0:e.locale)||void 0===s?void 0:s.language,i)}let Ht=class extends st{constructor(){super(...arguments),this._cardTab=!1,this._GUImode=!0,this._guiModeAvailable=!0,this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _id(){var t,e;return null!==(e=null===(t=this._config)||void 0===t?void 0:t.id)&&void 0!==e?e:pt}get _default(){var t,e;return null!==(e=null===(t=this._config)||void 0===t?void 0:t.default)&&void 0!==e?e:vt}get _persist_state(){var t,e;return null!==(e=null===(t=this._config)||void 0===t?void 0:t.persist_state)&&void 0!==e&&e}get _hide_in_preview(){var t,e;return null!==(e=null===(t=this._config)||void 0===t?void 0:t.hide_in_preview)&&void 0!==e&&e}localize(t){return zt(t,this.hass)}render(){var t,e;return this.hass&&this._helpers?R`
            <div class="card-config">
                <div class="toolbar">
                    <sl-tab-group @sl-tab-show=${this._selectTab}>
                        <sl-tab slot="nav" panel="conditions" .active=${!this._cardTab}>
                            ${null===(t=this.hass)||void 0===t?void 0:t.localize("ui.panel.lovelace.editor.card.conditional.conditions")}
                        </sl-tab>
                        <sl-tab slot="nav" panel="card" .active=${this._cardTab}>
                            ${null===(e=this.hass)||void 0===e?void 0:e.localize("ui.panel.lovelace.editor.card.conditional.card")}
                        </sl-tab>
                    </sl-tab-group>
                </div>
                <div id="editor">${this._cardTab?this._renderCardChooser():this._renderCardConfig()}</div>
            </div>
        `:R``}_renderCardConfig(){return R`
            <div class="card-config">
                <div class="values">${this.localize("editor.labels.description")}</div>
                <div class="values">
                    <ha-textfield
                        label=${this.localize("editor.labels.id")}
                        .value=${this._id}
                        .configValue=${"id"}
                        @input=${this._valueChanged}></ha-textfield>
                </div>
                <div class="values">
                    <ha-formfield
                        class="switch-wrapper"
                        .label=${`${this.localize("editor.labels.default_state.prefix")}${this.localize("editor.labels.default_state.value."+(this._default===vt?"shown":"hidden"))}${this.localize("editor.labels.default_state.suffix")}`}>
                        <ha-switch
                            .checked=${this._default===vt}
                            .configValue=${"default"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>
                <div class="values">
                    <ha-formfield class="switch-wrapper" .label=${this.localize("editor.labels.persist_state")}>
                        <ha-switch
                            .checked=${this._persist_state}
                            .configValue=${"persist_state"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>
                <div class="values">
                    <ha-formfield class="switch-wrapper" .label=${this.localize("editor.labels.hide_in_preview")}>
                        <ha-switch
                            .checked=${this._hide_in_preview}
                            .configValue=${"hide_in_preview"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>
                <div class="version">${this.localize("editor.labels.version")} ${ct}</div>
            </div>
        `}_renderCardChooser(){var t,e,i,s;return R` <div class="card">
            ${void 0!==(null===(e=null===(t=this._config)||void 0===t?void 0:t.card)||void 0===e?void 0:e.type)?R`
                      <div class="card-options">
                          <mwc-button
                              @click=${this._toggleMode}
                              .disabled=${!this._guiModeAvailable}
                              class="gui-mode-button">
                              ${null===(i=this.hass)||void 0===i?void 0:i.localize(!this._cardEditorEl||this._GUImode?"ui.panel.lovelace.editor.edit_card.show_code_editor":"ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                          </mwc-button>
                          <mwc-button @click=${this._handleReplaceCard}
                              >${null===(s=this.hass)||void 0===s?void 0:s.localize("ui.panel.lovelace.editor.card.conditional.change_type")}
                          </mwc-button>
                      </div>
                      <hui-card-element-editor
                          .hass=${this.hass}
                          .value=${this._config.card}
                          .lovelace=${this.lovelace}
                          @config-changed=${this._handleCardChanged}
                          @GUImode-changed=${this._handleGUIModeChanged}></hui-card-element-editor>
                  `:R`
                      <hui-card-picker
                          .hass=${this.hass}
                          .lovelace=${this.lovelace}
                          @config-changed=${this._addCard}></hui-card-picker>
                  `}
        </div>`}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;let i;switch(e.configValue){case"default":i=e.checked?vt:_t;break;case"persist_state":i=e.checked;break;case"hide_in_preview":i=!!e.checked||"";break;default:i=e.value}if(this[`_${e.configValue}`]!==i){if(e.configValue)if(""===i){const t=Object.assign({},this._config);delete t[e.configValue],this._config=t}else this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:i});Ct(this,"config-changed",{config:this._config})}}_selectTab(t){this._cardTab="card"===t.detail.name}_toggleMode(){var t;null===(t=this._cardEditorEl)||void 0===t||t.toggleMode()}_handleReplaceCard(){this._config&&(this._config=Object.assign(Object.assign({},this._config),{card:void 0}),Ct(this,"config-changed",{config:this._config}))}_handleCardChanged(t){t.stopPropagation(),this._config&&(this._config=Object.assign(Object.assign({},this._config),{card:t.detail.config}),this._guiModeAvailable=t.detail.guiModeAvailable,Ct(this,"config-changed",{config:this._config}))}_handleGUIModeChanged(t){t.stopPropagation(),this._GUImode=t.detail.guiMode,this._guiModeAvailable=t.detail.guiModeAvailable}_addCard(t){t.stopPropagation(),this._config&&(this._config.card=t.detail.config),Ct(this,"config-changed",{config:this._config})}};Ht.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)})`
        sl-tab {
            flex: 1;
        }

        sl-tab::part(base) {
            width: 100%;
            justify-content: center;
        }

        .card-config {
            position: relative;
            padding-bottom: 1em;
        }

        .values {
            padding-left: 16px;
            margin: 8px;
            display: grid;
        }

        .switch-wrapper {
            padding: 8px;
        }

        .card {
            margin-top: 8px;
            border: 1px solid var(--divider-color);
            padding: 12px;
        }

        @media (max-width: 450px) {
            .card,
            .condition {
                margin: 8px -12px 0;
            }
        }

        .card .card-options {
            display: flex;
            justify-content: flex-end;
            width: 100%;
        }

        .gui-mode-button {
            margin-right: auto;
        }

        .version {
            position: absolute;
            bottom: 0;
            right: 0;
            opacity: 30%;
        }
    `,t([at({attribute:!1})],Ht.prototype,"hass",void 0),t([at()],Ht.prototype,"lovelace",void 0),t([lt()],Ht.prototype,"_config",void 0),t([lt()],Ht.prototype,"_helpers",void 0),t([lt()],Ht.prototype,"_cardTab",void 0),t([lt()],Ht.prototype,"_GUImode",void 0),t([lt()],Ht.prototype,"_guiModeAvailable",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}})({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}("hui-card-element-editor")],Ht.prototype,"_cardEditorEl",void 0),Ht=t([nt("local-conditional-card-editor")],Ht);var Mt=Object.freeze({__proto__:null,get LocalConditionalCardEditor(){return Ht}});export{bt as LocalConditionalCard};
