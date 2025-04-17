/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$4=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;class o$4{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}}const r$2=t=>new o$4("string"==typeof t?t:t+"",void 0,s$3),i$3=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$4(n,t,s$3)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$3=window,r$1=e$3.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$3=e$3.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";class u$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$3||o$3({ReactiveElement:u$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i$2=window,s$1=i$2.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$2="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$2+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$2)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$2).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$2.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i$2.litHtmlVersions)&&void 0!==t?t:i$2.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o$1;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i$1(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(i,n){return o({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var gauge_minExports = {};
var gauge_min = {
  get exports(){ return gauge_minExports; },
  set exports(v){ gauge_minExports = v; },
};

/*!
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 Mykhailo Stadnyk <mikhus@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @version 2.1.7
 */

(function (module) {
	!function(e){function t(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(t||(t="undefined"==typeof window?commonjsGlobal:window),void 0!==t[e])return t[e];for(var i=["webkit","moz","ms","o"],r=0,o=i.length,n=e.charAt(0).toUpperCase()+e.substr(1);r<o;r++){var a=t[i[r]+n];if(void 0!==a)return a}return null}function a(e,t,i,r,o,n,l){if("function"!=typeof r)throw new TypeError("Invalid animation rule:",r);var s=e-i,d=s/o,c=0;d>1&&(d=1),1!==d&&(c=r(d),isFinite(c)&&!isNaN(c)&&(d=c)),t&&t(d),s<o?l.frame=me(function(e){return a(e,t,i,r,o,n,l)}):(n&&n(),l.inProgress=!1);}function l(){Array.prototype.constructor.apply(this,arguments);}function s(e){if(!(e instanceof DOMException&&2152923147===e.result))throw e}function d(e,t){return t.replace(Ve,function(t,i){var r=e[i];return void 0!==r?r:t})}function c(e){return e.majorTicks instanceof Array||(e.majorTicks=e.majorTicks?[e.majorTicks]:[]),e.majorTicks.length||(e.majorTicks.push(We.formatMajorTickNumber(e.minValue,e)),e.majorTicks.push(We.formatMajorTickNumber(e.maxValue,e))),["right"!==e.tickSide,"left"!==e.tickSide]}function h(e,t,i,r,o,n){e.beginPath(),e.moveTo(t+n,i),e.lineTo(t+r-n,i),e.quadraticCurveTo(t+r,i,t+r,i+n),e.lineTo(t+r,i+o-n),e.quadraticCurveTo(t+r,i+o,t+r-n,i+o),e.lineTo(t+n,i+o),e.quadraticCurveTo(t,i+o,t,i+o-n),e.lineTo(t,i+n),e.quadraticCurveTo(t,i,t+n,i),e.closePath();}function u(e,t){var i=t.valueDec,r=t.valueInt,o=0,n=void 0,a=void 0,l=void 0;if(e=parseFloat(e),l=e<0,e=Math.abs(e),i>0){for(a=e.toFixed(i).toString().split("."),n=r-a[0].length;o<n;++o)a[0]="0"+a[0];a=(l?"-":"")+a[0]+"."+a[1];}else {for(a=Math.round(e).toString(),n=r-a.length;o<n;++o)a="0"+a;a=(l?"-":"")+a;}return a}function f(e,t){var i=void 0,r=!1;return i=0===t.majorTicksDec?Math.round(e).toString():e.toFixed(t.majorTicksDec),t.majorTicksInt>1?(r=~i.indexOf("."),~i.indexOf("-")?"-"+[t.majorTicksInt+t.majorTicksDec+2+(r?1:0)-i.length].join("0")+i.replace("-",""):[t.majorTicksInt+t.majorTicksDec+1+(r?1:0)-i.length].join("0")+i):i}function m(e){return e*Math.PI/180}function v(e,t){return {x:-e*Math.sin(t),y:e*Math.cos(t)}}function g(e,t,i,r){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=e.createLinearGradient(o?0:n,o?n:0,o?0:r,o?r:0);return a.addColorStop(0,t),a.addColorStop(1,i),a}function b(e,t){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])return e.restore(),!0;e.save();var i=t.borderShadowWidth;return i&&(e.shadowBlur=i,e.shadowColor=t.colorBorderShadow),!0}function p(e,t){t.needleShadow&&(e.shadowOffsetX=2,e.shadowOffsetY=2,e.shadowBlur=10,e.shadowColor=t.colorNeedleShadowDown);}function w(e,t,i){return e["font"+t+"Style"]+" "+e["font"+t+"Weight"]+" "+e["font"+t+"Size"]*i+"px "+e["font"+t]}function k(e){e.shadowOffsetX=null,e.shadowOffsetY=null,e.shadowBlur=null,e.shadowColor="",e.strokeStyle=null,e.lineWidth=0,e.save();}function y(e,t,i,r){t.valueTextShadow&&(e.shadowOffsetX=i,e.shadowOffsetY=i,e.shadowBlur=r,e.shadowColor=t.colorValueTextShadow);}function x(e,t,i,r,o,n){if(t.valueBox){k(e);var a=t.valueDec?1+t.valueDec:0,l="9".repeat(Math.max.apply(null,[String(parseInt(i)).length+a].concat(t.majorTicks.map(function(e){return String(parseInt(e,10)).length+a})))),s=t.valueText||u(i,t),d=n/200,c=n/100,f=.4*c,m=1.2*c;e.font=w(t,"Value",d),y(e,t,f,m);var v=e.measureText(t.valueText?s:"-"+u(Number(l),t)).width;k(e);var g=parseFloat(t.fontValueSize)*d+f+m,b=c*parseFloat(t.valueBoxStroke),p=2*n-2*b,x=v+10*c,T=1.1*g+f+m,S=c*t.valueBoxBorderRadius,V=(parseFloat(t.valueBoxWidth)||0)/100*p;V>x&&(x=V),x>p&&(x=p);var W=r-x/2,O=o-T/2,A=o-5.75*c;if(e.beginPath(),S?h(e,W,O,x,T,S):e.rect(W,O,x,T),b){var P=e.createRadialGradient(r,A,10*c,r,A,20*c);P.addColorStop(0,t.colorValueBoxRect),P.addColorStop(1,t.colorValueBoxRectEnd),e.strokeStyle=P,e.lineWidth=b,e.stroke();}t.colorValueBoxShadow&&(e.shadowBlur=1.2*c,e.shadowColor=t.colorValueBoxShadow),t.colorValueBoxBackground&&(e.fillStyle=t.colorValueBoxBackground,e.fill()),e.closePath(),e.restore(),y(e,t,f,m),e.fillStyle=t.colorValueText,e.textAlign="center",e.textBaseline="alphabetic",e.fillText(s,W+x/2,o+T/2-g/3),e.restore();}}function T(e){var t=e.value,i=e.minValue,r=e.maxValue,o=.01*(r-i);return {normal:t<i?i:t>r?r:t,indented:t<i?i-o:t>r?r+o:t}}function S(e,t,i,r,o){i.beginPath(),i.arc(0,0,xe(e),0,2*Oe,!0),i.lineWidth=t,i.strokeStyle=o?We.linearGradient(i,r,o,e):r,i.stroke(),i.closePath();}function V(e,t){var i=pe.pixelRatio;return e.maxRadius||(e.maxRadius=e.max-t.borderShadowWidth-t.borderOuterWidth*i-t.borderMiddleWidth*i-t.borderInnerWidth*i+(t.borderOuterWidth?.5:0)+(t.borderMiddleWidth?.5:0)+(t.borderInnerWidth?.5:0)),e.maxRadius}function W(e,t){var i=pe.pixelRatio,r=t.borderShadowWidth*i,o=e.max-r-t.borderOuterWidth*i/2,n=o-t.borderOuterWidth*i/2-t.borderMiddleWidth*i/2+.5,a=n-t.borderMiddleWidth*i/2-t.borderInnerWidth*i/2+.5,l=V(e,t),s=void 0,d=!1;e.save(),t.borderOuterWidth&&(d=We.drawShadow(e,t,d),S(o,t.borderOuterWidth*i,e,t.colorBorderOuter,t.colorBorderOuterEnd)),t.borderMiddleWidth&&(d=We.drawShadow(e,t,d),S(n,t.borderMiddleWidth*i,e,t.colorBorderMiddle,t.colorBorderMiddleEnd)),t.borderInnerWidth&&(d=We.drawShadow(e,t,d),S(a,t.borderInnerWidth*i,e,t.colorBorderInner,t.colorBorderInnerEnd)),We.drawShadow(e,t,d),e.beginPath(),e.arc(0,0,xe(l),0,2*Oe,!0),t.colorPlateEnd?(s=e.createRadialGradient(0,0,l/2,0,0,l),s.addColorStop(0,t.colorPlate),s.addColorStop(1,t.colorPlateEnd)):s=t.colorPlate,e.fillStyle=s,e.fill(),e.closePath(),e.restore();}function O(e,t){var i=e.max*(parseFloat(t.highlightsWidth)||0)/100;if(i){var r=xe(P(e,t)-i/2),o=0,n=t.highlights.length,a=(t.maxValue-t.minValue)/t.ticksAngle;for(e.save();o<n;o++){var l=t.highlights[o];e.beginPath(),e.rotate(Ae),e.arc(0,0,r,We.radians(t.startAngle+(l.from-t.minValue)/a),We.radians(t.startAngle+(l.to-t.minValue)/a),!1),e.strokeStyle=l.color,e.lineWidth=i,e.lineCap=t.highlightsLineCap,e.stroke(),e.closePath(),e.restore(),e.save();}}}function A(e,t){var i=P(e,t),r=void 0,o=void 0,n=void 0,a=0,l=0,s=Math.abs(t.minorTicks)||0,d=t.ticksAngle/(t.maxValue-t.minValue);for(e.lineWidth=pe.pixelRatio,e.strokeStyle=t.colorMinorTicks||t.colorStrokeTicks,e.save(),t.exactTicks?(o=t.maxValue-t.minValue,r=s?o/s:0,l=(Se.mod(t.majorTicks[0],s)||0)*d):r=s*(t.majorTicks.length-1);a<r;++a)(n=t.startAngle+l+a*(t.ticksAngle/r))<=t.ticksAngle+t.startAngle&&(e.rotate(We.radians(n)),e.beginPath(),e.moveTo(0,i),e.lineTo(0,i-.075*e.max),C(e));}function P(e,t){var i=e.max/100;return V(e,t)-5*i-(t.barWidth?2*(parseFloat(t.barStrokeWidth)||0)+((parseFloat(t.barWidth)||0)+5)*i:0)}function M(e,t){We.prepareTicks(t);var i=xe(P(e,t)),r=void 0,o=void 0,n=t.majorTicks.length,a=pe.pixelRatio;for(e.lineWidth=2*a,e.save(),o=t.colorMajorTicks instanceof Array?t.colorMajorTicks:new Array(n).fill(t.colorStrokeTicks||t.colorMajorTicks),r=0;r<n;++r)e.strokeStyle=o[r],e.rotate(We.radians(B(t,t.exactTicks?t.majorTicks[r]:r,n))),e.beginPath(),e.moveTo(0,i),e.lineTo(0,i-.15*e.max),C(e);t.strokeTicks&&(e.strokeStyle=t.colorStrokeTicks||o[0],e.rotate(Ae),e.beginPath(),e.arc(0,0,i,We.radians(t.startAngle),We.radians(t.startAngle+t.ticksAngle),!1),C(e));}function B(e,t,i){if(e.exactTicks){var r=e.ticksAngle/(e.maxValue-e.minValue);return e.startAngle+r*(t-e.minValue)}return e.startAngle+t*(e.ticksAngle/(i-1))}function C(e){e.stroke(),e.restore(),e.closePath(),e.save();}function j(e,t){var i=P(e,t)-.15*e.max,r={},o=0,n=t.majorTicks.length,a="needle"!==t.animationTarget,l=t.colorNumbers instanceof Array?t.colorNumbers:new Array(n).fill(t.colorNumbers),s=a?-(t.value-t.minValue)/(t.maxValue-t.minValue)*t.ticksAngle:0;for(a&&(e.save(),e.rotate(-We.radians(s))),e.font=We.font(t,"Numbers",e.max/200),e.lineWidth=0,e.textAlign="center",e.textBaseline="middle";o<n;++o){var d=s+B(t,t.exactTicks?t.majorTicks[o]:o,n),c=e.measureText(t.majorTicks[o]).width,h=t.fontNumbersSize,u=Math.sqrt(c*c+h*h)/2,f=We.radialPoint(i-u-t.numbersMargin/100*e.max,We.radians(d));360===d&&(d=0),r[d]||(r[d]=!0,e.fillStyle=l[o],e.fillText(t.majorTicks[o],f.x,f.y));}a&&e.restore();}function N(e,t){t.title&&(e.save(),e.font=We.font(t,"Title",e.max/200),e.fillStyle=t.colorTitle,e.textAlign="center",e.fillText(t.title,0,-e.max/4.25,.8*e.max),e.restore());}function E(e,t){t.units&&(e.save(),e.font=We.font(t,"Units",e.max/200),e.fillStyle=t.colorUnits,e.textAlign="center",e.fillText(We.formatContext(t,t.units),0,e.max/3.25,.8*e.max),e.restore());}function _(e,t){if(t.needle){var i=t.ticksAngle<360?We.normalizedValue(t).indented:t.value,r=u?t.startAngle:t.startAngle+(i-t.minValue)/(t.maxValue-t.minValue)*t.ticksAngle;"right"===t.barStartPosition&&(r=t.startAngle+t.ticksAngle-(i-t.minValue)/(t.maxValue-t.minValue)*t.ticksAngle);var o=V(e,t),n=xe(o/100*t.needleCircleSize),a=xe(o/100*t.needleCircleSize*.75),l=xe(o/100*t.needleEnd),s=xe(t.needleStart?o/100*t.needleStart:0),d=o/100*t.needleWidth,c=o/100*t.needleWidth/2,h=pe.pixelRatio,u="needle"!==t.animationTarget;e.save(),We.drawNeedleShadow(e,t),e.rotate(We.radians(r)),e.fillStyle=We.linearGradient(e,t.colorNeedle,t.colorNeedleEnd,l-s),"arrow"===t.needleType?(e.beginPath(),e.moveTo(-c,-s),e.lineTo(-d,0),e.lineTo(-1*h,l),e.lineTo(h,l),e.lineTo(d,0),e.lineTo(c,-s),e.closePath(),e.fill(),e.beginPath(),e.lineTo(-.5*h,l),e.lineTo(-1*h,l),e.lineTo(-d,0),e.lineTo(-c,-s),e.lineTo(c/2*h-2*h,-s),e.closePath(),e.fillStyle=t.colorNeedleShadowUp,e.fill()):(e.beginPath(),e.moveTo(-c,l),e.lineTo(-c,s),e.lineTo(c,s),e.lineTo(c,l),e.closePath(),e.fill()),t.needleCircleSize&&(e.restore(),We.drawNeedleShadow(e,t),t.needleCircleOuter&&(e.beginPath(),e.arc(0,0,n,0,2*Oe,!0),e.fillStyle=We.linearGradient(e,t.colorNeedleCircleOuter,t.colorNeedleCircleOuterEnd,n),e.fill(),e.closePath()),t.needleCircleInner&&(e.beginPath(),e.arc(0,0,a,0,2*Oe,!0),e.fillStyle=We.linearGradient(e,t.colorNeedleCircleInner,t.colorNeedleCircleInnerEnd,a),e.fill(),e.closePath()),e.restore());}}function R(e,t,i){We.drawValueBox(e,t,i,0,e.max-.33*e.max,e.max);}function I(e){var t=e.startAngle,i=e.startAngle+e.ticksAngle,r=t,o=t+(We.normalizedValue(e).normal-e.minValue)/(e.maxValue-e.minValue)*e.ticksAngle;if("middle"===e.barStartPosition){var n=.5*(e.minValue+e.maxValue);e.value<n?(r=180-(n-We.normalizedValue(e).normal)/(e.maxValue-e.minValue)*e.ticksAngle,o=180):(r=180,o=180+(We.normalizedValue(e).normal-n)/(e.maxValue-e.minValue)*e.ticksAngle);}else "right"===e.barStartPosition&&(r=i-o+t,o=i);return {startAngle:r,endAngle:o}}function D(e,t){var i=e.max/100,r=V(e,t)-5*i,o=parseFloat(t.barStrokeWidth+"")||0,n=(parseFloat(t.barWidth+"")||0)*i,a=r-2*o-n,l=(r-a)/2,s=a+l,d=o/s,c=t.startAngle,h=t.startAngle+t.ticksAngle;if(e.save(),e.rotate(Ae),o&&(e.beginPath(),e.arc(0,0,s,We.radians(c)-d,We.radians(h)+d,!1),e.strokeStyle=t.colorBarStroke,e.lineWidth=2*l,e.stroke(),e.closePath()),n&&(e.beginPath(),e.arc(0,0,s,We.radians(c),We.radians(h),!1),e.strokeStyle=t.colorBar,e.lineWidth=n,e.stroke(),e.closePath(),t.barShadow&&(e.beginPath(),e.arc(0,0,r,We.radians(c),We.radians(h),!1),e.clip(),e.beginPath(),e.strokeStyle=t.colorBar,e.lineWidth=1,e.shadowBlur=t.barShadow,e.shadowColor=t.colorBarShadow,e.shadowOffsetX=0,e.shadowOffsetY=0,e.arc(0,0,r,We.radians(t.startAngle),We.radians(t.startAngle+t.ticksAngle),!1),e.stroke(),e.closePath(),e.restore(),e.rotate(Ae)),t.barProgress)){var u=I(t),f=u.startAngle,m=u.endAngle;e.beginPath(),e.arc(0,0,s,We.radians(f),We.radians(m),!1),e.strokeStyle=t.colorBarProgress,e.lineWidth=n,e.stroke(),e.closePath();}e.restore();}function z(e){return e.options.animatedValue?e.options.value:e.value}function L(e,t,i,r,o,n,a,l){e.beginPath(),e.fillStyle=l?We.linearGradient(e,a,l,o>n?o:n,n>o,o>n?i:r):a,t>0?We.roundRect(e,i,r,o,n,t):e.rect(i,r,o,n),e.fill(),e.closePath();}function G(e,t,i,r,o,n,a,l,s){e.beginPath(),e.lineWidth=t,e.strokeStyle=s?We.linearGradient(e,l,s,a,!0,o):l,i>0?We.roundRect(e,r,o,n,a,i):e.rect(r,o,n,a),e.stroke(),e.closePath();}function F(e,t,i,r,o,n){var a=pe.pixelRatio;e.save();var l=t.borderRadius*a,s=o-t.borderShadowWidth-t.borderOuterWidth*a,d=s-t.borderOuterWidth*a-t.borderMiddleWidth*a,c=d-t.borderMiddleWidth*a-t.borderInnerWidth*a,h=c-t.borderInnerWidth*a,u=n-t.borderShadowWidth-t.borderOuterWidth*a,f=u-t.borderOuterWidth*a-t.borderMiddleWidth*a,m=f-t.borderMiddleWidth*a-t.borderInnerWidth*a,v=m-t.borderInnerWidth*a,g=i-(d-s)/2,b=g-(c-d)/2,p=b-(h-c)/2,w=r-(f-u)/2,k=w-(m-f)/2,y=k-(v-m)/2,x=0,T=!1;return t.borderOuterWidth&&(T=We.drawShadow(e,t,T),G(e,t.borderOuterWidth*a,l,i+t.borderOuterWidth*a/2-x,r+t.borderOuterWidth*a/2-x,s,u,t.colorBorderOuter,t.colorBorderOuterEnd),x+=.5*a),t.borderMiddleWidth&&(T=We.drawShadow(e,t,T),G(e,t.borderMiddleWidth*a,l-=1+2*x,g+t.borderMiddleWidth*a/2-x,w+t.borderMiddleWidth*a/2-x,d+2*x,f+2*x,t.colorBorderMiddle,t.colorBorderMiddleEnd),x+=.5*a),t.borderInnerWidth&&(T=We.drawShadow(e,t,T),G(e,t.borderInnerWidth*a,l-=1+2*x,b+t.borderInnerWidth*a/2-x,k+t.borderInnerWidth*a/2-x,c+2*x,m+2*x,t.colorBorderInner,t.colorBorderInnerEnd),x+=.5*a),We.drawShadow(e,t,T),L(e,l,p,y,h+2*x,v+2*x,t.colorPlate,t.colorPlateEnd),e.restore(),[p,y,h,v]}function X(e,t,i,r,o,n){var a=pe.pixelRatio,l=n>=o,s=l?.85*o:n,d=l?n:o;i=l?ye(i+(o-s)/2):i;var c=!!t.title,h=!!t.units,u=!!t.valueBox,f=void 0,m=void 0,v=void 0;l?(m=ye(.05*d),f=ye(.075*d),v=ye(.11*d),c&&(d-=f,r+=f),h&&(d-=m),u&&(d-=v)):(m=f=ye(.15*s),c&&(s-=f,r+=f),h&&(s-=m));var g=2*t.barStrokeWidth,b=t.barBeginCircle?ye(s*t.barBeginCircle/200-g/2):0,p=ye(s*t.barWidth/100-g),w=ye(d*t.barLength/100-g),k=ye((d-w)/2),y=ye(i+(l?s/2:k+b)),x=ye(r+(l?d-k-b+g/2:s/2)),T=!l||t.hasLeft&&t.hasRight?0:(t.hasRight?-1:1)*t.ticksWidth/100*s,S=l||t.hasLeft&&t.hasRight?0:(t.hasRight?-1:1)*t.ticksWidth/100*s;return e.barDimensions={isVertical:l,width:s,length:d,barWidth:p,barLength:w,strokeWidth:g,barMargin:k,radius:b,pixelRatio:a,barOffset:null,titleMargin:c?f:0,unitsMargin:h?m:0,get ticksLength(){return this.barLength-this.barOffset-this.strokeWidth},X:i+T,Y:r+S,x0:y+T,y0:x+S,baseX:i,baseY:r,ticksPadding:t.ticksPadding/100},e.barDimensions}function Y(e,t,i,r,o,n,a){var l=X(e,t,r,o,n,a),s=l.isVertical,d=l.width,c=l.barWidth,h=l.barLength,u=l.strokeWidth,f=l.barMargin,m=l.radius,v=l.x0,g=l.y0,b=l.X,p=l.Y,w=h;if(e.save(),e.beginPath(),t.barBeginCircle){var k=We.radians(s?270:0),y=Math.asin(c/2/m),x=Math.cos(y),T=Math.sin(y),S=v+(s?m*T:m*x-u/2),V=s?g-m*x:g+m*T,W=xe(s?V-g:S-v);e.barDimensions.barOffset=ye(W+m);var O=s?ye(v-m*T):S,A=s?V:ye(g-m*T);"progress"===i&&(h=e.barDimensions.barOffset+(h-e.barDimensions.barOffset)*(We.normalizedValue(t).normal-t.minValue)/(t.maxValue-t.minValue));var P=ye(S+h-e.barDimensions.barOffset+u/2),M=ye(V-h+e.barDimensions.barOffset-u/2);e.arc(v,g,m,k+y,k-y),s?(e.moveTo(S,A),e.lineTo(S,M),e.lineTo(O,M),e.lineTo(O,A)):(e.moveTo(S,A),e.lineTo(P,A),e.lineTo(P,V),e.lineTo(S,V));}else {var B=ye(s?b+(d-c)/2:b+f),C=ye(s?p+h+f:p+(d-c)/2);"progress"===i&&(h*=(t.value-t.minValue)/(t.maxValue-t.minValue)),s?e.rect(B,C,c,-h):e.rect(B,C,h,c);}"progress"!==i&&t.barStrokeWidth&&(e.lineWidth=u,e.strokeStyle=t.colorBarStroke,e.stroke()),"progress"!==i&&t.colorBar?(e.fillStyle=t.colorBarEnd?We.linearGradient(e,t.colorBar,t.colorBarEnd,h,s,s?p:b):t.colorBar,e.fill()):"progress"===i&&t.colorBarProgress&&(e.fillStyle=t.colorBarProgressEnd?We.linearGradient(e,t.colorBarProgress,t.colorBarProgressEnd,w,s,s?p:b):t.colorBarProgress,e.fill()),e.closePath(),t.barBeginCircle&&(e.barDimensions.radius+=u),e.barDimensions.barWidth+=u,e.barDimensions.barLength+=u;}function U(e,t,i,r,o,n){Y(e,t,"",i,r,o,n);}function q(e,t){return t.needleSide!==e||t.tickSide!==e||t.numberSide!==e}function H(e,t,i,r,o,n){t.barProgress&&Y(e,t,"progress",i,r,o,n);}function J(e,t){var i=e.barDimensions,r=i.isVertical,o=i.width,n=i.length,a=i.barWidth,l=i.barOffset,s=i.barMargin,d=i.X,c=i.Y,h=i.ticksLength,u=i.ticksPadding,f=o*(parseFloat(t.highlightsWidth)||0)/100;if(t.highlights&&f){var m="right"!==t.tickSide,v="left"!==t.tickSide,g=0,b=t.highlights.length,p=(o-a)/2,w=t.maxValue-t.minValue,k=ye(r?d+p:d+s+l),y=f,x=r?c+n-s-l:c+p,T=ye((t.ticksWidth/100+u)*o)+(f-t.ticksWidth/100*o),S=ye(a+u*o);for(e.save();g<b;g++){var V=t.highlights[g],W=h*xe(t.minValue-V.from)/w,O=h*xe((V.to-V.from)/w);e.beginPath(),e.fillStyle=V.color,r?(m&&e.rect(k-T,x-W,y,-O),v&&e.rect(k+S,x-W,y,-O)):(m&&e.rect(k+W,x-T,O,y),v&&e.rect(k+W,x+S,O,y)),e.fill(),e.closePath();}}}function Z(e,t,i,r,o){e.beginPath(),e.moveTo(t,i),e.lineTo(r,o),e.stroke(),e.closePath(),e.save();}function $(e,t,i,r,o,n,a,l,s){var d=e.barDimensions,c=d.isVertical,h=d.length,u=d.barWidth,f=d.barOffset,m=d.barMargin,v=d.pixelRatio,g=d.width,b=d.X,p=d.Y,w=d.ticksLength,k=d.ticksPadding,y=(g-u)/2,x=void 0,T=void 0,S=0,V=i.length,W=void 0,O=s*g,A=y-k*g,P=y+u+O+k*g,M=t instanceof Array?t:new Array(i.length).fill(t);e.lineWidth=l*v,e.save();for(var B=w/(o-r);S<V;S++)W=i[S],e.strokeStyle=M[S],c?(T=p+h-m-f+(r-W)*B,n&&(x=b+A,Z(e,x,T,ye(x-O),T)),a&&(x=b+P,Z(e,x,T,ye(x-O),T))):(x=b+m+f-(r-W)*B,n&&(T=p+A,Z(e,x,T,x,ye(T-O))),a&&(T=p+P,Z(e,x,ye(T),x,T-O)));}function K(e,t){var i=We.prepareTicks(t),r=de(i,2),o=r[0],n=r[1],a=2,l=(t.maxValue-t.minValue)/(t.majorTicks.length-1),s=t.colorMajorTicks instanceof Array?t.colorMajorTicks:new Array(t.majorTicks.length).fill(t.colorStrokeTicks||t.colorMajorTicks);if($(e,s,t.exactTicks?t.majorTicks:t.majorTicks.map(function(e,i){return t.minValue+l*i}),t.minValue,t.maxValue,o,n,a,t.ticksWidth/100),t.strokeTicks){var d=e.barDimensions,c=d.isVertical,h=d.length,u=d.width,f=d.barWidth,m=d.barMargin,v=d.barOffset,g=d.X,b=d.Y,p=d.ticksLength,w=d.pixelRatio,k=d.ticksPadding,y=(u-f)/2+f+k*u,x=(u-f)/2-k*u,T=void 0,S=void 0,V=void 0,W=void 0;e.strokeStyle=t.colorStrokeTicks||s[0],a*=w,c?(S=b+h-m-v+a/2,W=S-p-a,o&&(V=T=ye(g+x),Q(e,T,S,V,W)),n&&(V=T=ye(g+y),Q(e,T,S,V,W))):(T=g+m+v-a/2,V=T+p+a,o&&(W=S=ye(b+x),Q(e,T,S,V,W)),n&&(W=S=ye(b+y),Q(e,T,S,V,W)));}}function Q(e,t,i,r,o){e.beginPath(),e.moveTo(t,i),e.lineTo(r,o),e.stroke(),e.closePath();}function ee(e,t){var i=We.prepareTicks(t),r=de(i,2),o=r[0],n=r[1],a=[],l=t.minValue,s=Math.abs(t.minorTicks)||0,d=s?(t.maxValue-t.minValue)/(s*(t.majorTicks.length-1)):0;if(s)if(t.exactTicks)for(var c=Se.mod(t.majorTicks[0],s)||0;l<t.maxValue;l+=s)c+l<t.maxValue&&a.push(c+l);else for(;l<t.maxValue;l+=d)a.push(l);$(e,t.colorMinorTicks||t.colorStrokeTicks,a,t.minValue,t.maxValue,o,n,1,t.ticksWidthMinor/100);}function te(e,t){var i=e.barDimensions,r=i.isVertical,o=i.length,n=i.width,a=i.barWidth,l=i.barMargin,s=i.barOffset,d=i.X,c=i.Y,h=i.ticksLength,u=i.ticksPadding,f=t.maxValue-t.minValue,m=f/(t.majorTicks.length-1),v=t.exactTicks?t.majorTicks:t.majorTicks.map(function(e,i){return t.minValue+m*i}),g=v.length,b="right"!==t.numberSide,p="left"!==t.numberSide,w=t.fontNumbersSize*n/200,k=0,y=(t.ticksWidth/100+2*u)*n,x=(n-a)/2-y,T=(n-a)/2+a+y,S=void 0,V=void 0,W=void 0,O=void 0,A=t.colorNumbers instanceof Array?t.colorNumbers:new Array(g).fill(t.colorNumbers),P=t.numbersMargin/100*n;for(e.font=We.font(t,"Numbers",n/200),e.lineWidth=0,e.textAlign="center";k<g;k++)e.fillStyle=A[k],O=t.majorTicks[k],W=t.exactTicks?h*((v[k]-t.minValue)/f):k*h/(g-1),r?(V=c+o-l-s-W+w/3,b&&(e.textAlign="right",e.fillText(O,d+x-P,V)),p&&(e.textAlign="left",e.fillText(O,d+T+P,V))):(e.measureText(O).width,S=d+l+s+W,b&&e.fillText(O,S,c+x-P),p&&e.fillText(O,S,c+T+w+P));}function ie(e,t){if(t.title){var i=e.barDimensions,r=i.isVertical,o=i.width,n=i.length,a=i.baseX,l=i.baseY,s=i.titleMargin,d=t.fontTitleSize*o/200,c=ye(a+(r?o:n)/2),h=ye(l+s/2-(r?d:d/2)-.025*(r?n:o));e.save(),e.textAlign="center",e.fillStyle=t.colorTitle,e.font=We.font(t,"Title",o/200),e.lineWidth=0,e.fillText(t.title,c,h,r?o:n);}}function re(e,t){if(t.units){var i=e.barDimensions,r=i.isVertical,o=i.width,n=i.length,a=i.baseX,l=i.baseY,s=i.unitsMargin,d=t.fontUnitsSize*o/200,c=ye(a+(r?o:n)/2),h=ye(l+(r?n:o)+s/2-d/2);e.save(),e.textAlign="center",e.fillStyle=t.colorUnits,e.font=We.font(t,"Units",o/200),e.lineWidth=0,e.fillText(We.formatContext(t,t.units),c,h,r?o:n);}}function oe(e,t){if(t.needle){var i=e.barDimensions,r=i.isVertical,o=i.width,n=i.length,a=i.barWidth,l=i.barOffset,s=i.barMargin,d=i.ticksLength,c=i.X,h=i.Y,u=i.ticksPadding,f="right"!==t.needleSide,m="left"!==t.needleSide,v=d*(We.normalizedValue(t).indented-t.minValue)/(t.maxValue-t.minValue),g=(t.ticksWidth/100+u)*o,b=a/2+g,p=b*(t.needleEnd/100),w=void 0,k=void 0,y=void 0,x=void 0,T="arrow"===t.needleType.toLowerCase()?le:ae,S=(o-a)/2,V=b*(t.needleStart/100),W=S-g-V,O=S+a+g+V;e.save(),We.drawNeedleShadow(e,t),r?(y=ye(h+n-s-l-v),f&&(w=ye(c+W),k=w+p,T(e,t,w,y,k,y,p)),m&&(w=ye(c+O),k=w-p,T(e,t,w,y,k,y,p,!0))):(w=ye(c+s+l+v),f&&(y=ye(h+W),x=y+p,T(e,t,w,y,w,x,p)),m&&(y=ye(h+O),x=y-p,T(e,t,w,y,w,x,p,!0))),e.restore();}}function ne(e,t,i,r){return t.colorNeedleEnd?We.linearGradient(e,r?t.colorNeedleEnd:t.colorNeedle,r?t.colorNeedle:t.colorNeedleEnd,i,!e.barDimensions.isVertical):t.colorNeedle}function ae(e,t,i,r,o,n,a,l){e.lineWidth=t.needleWidth,e.strokeStyle=ne(e,t,a,l),e.beginPath(),e.moveTo(i,r),e.lineTo(o,n),e.stroke(),e.closePath();}function le(e,t,i,r,o,n,a,l){var s=ye(.4*a),d=a-s,c=i===o,h=t.needleWidth/2;e.fillStyle=ne(e,t,a,l),e.beginPath(),c?(r>n&&(d*=-1),e.moveTo(i-h,r),e.lineTo(i+h,r),e.lineTo(i+h,r+d),e.lineTo(i,n),e.lineTo(i-h,r+d),e.lineTo(i-h,r)):(i>o&&(d*=-1),e.moveTo(i,r-h),e.lineTo(i,r+h),e.lineTo(i+d,r+h),e.lineTo(o,r),e.lineTo(i+d,r-h),e.lineTo(i,r-h)),e.fill(),e.closePath();}function se(e,t,i,r,o,n,a){var l=(parseFloat(t.fontValueSize)||0)*n/200,s=(.11*a-l)/2;e.barDimensions.isVertical&&We.drawValueBox(e,t,i,r+n/2,o+a-l-s,n);}var de=function(){function e(e,t){var i=[],r=!0,o=!1,n=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(i.push(a.value),!t||i.length!==t);r=!0);}catch(e){o=!0,n=e;}finally{try{!r&&l.return&&l.return();}finally{if(o)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ce=function e(t,i,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,i,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},he=function e(t,i,r,o){var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var a=Object.getPrototypeOf(t);null!==a&&e(a,i,r,o);}else if("value"in n&&n.writable)n.value=r;else {var l=n.set;void 0!==l&&l.call(o,r);}return r},ue=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var i=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(void 0!==o&&null!==o)for(var n=Object.keys(Object(o)),a=0,l=n.length;a<l;a++){var s=n[a],d=Object.getOwnPropertyDescriptor(o,s);void 0!==d&&d.enumerable&&(i[s]=o[s]);}}return i}}),Array.prototype.indexOf||Object.defineProperty(Array.prototype,"indexOf",{value:function(e,t){var i;if(null===this)throw new TypeError('"this" is null or not defined');var r=Object(this),o=r.length>>>0;if(0===o)return -1;var n=+t||0;if(Math.abs(n)===1/0&&(n=0),n>=o)return -1;for(i=Math.max(n>=0?n:o-Math.abs(n),0);i<o;){if(i in r&&r[i]===e)return i;i++;}return -1}}),Array.prototype.fill||Object.defineProperty(Array.prototype,"fill",{value:function(e){if(null===this)throw new TypeError("this is null or not defined");for(var t=Object(this),i=t.length>>>0,r=arguments[1],o=r>>0,n=o<0?Math.max(i+o,0):Math.min(o,i),a=arguments[2],l=void 0===a?i:a>>0,s=l<0?Math.max(i+l,0):Math.min(l,i);n<s;)t[n]=e,n++;return t}}),"undefined"==typeof window&&(window="undefined"==typeof commonjsGlobal?{}:commonjsGlobal);var fe=function(){function e(){o(this,e),this._events={},this.addListener=this.on,this.removeListener=this.off;}return ue(e,[{key:"emit",value:function(e){if(this._events[e]){for(var t=0,i=this._events[e].length,r=arguments.length,o=Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];for(;t<i;t++)this._events[e][t]&&this._events[e][t].apply(this,o);}}},{key:"once",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];for(var o=0,n=i.length,a=this;o<n;o++)!function(){var t=i[o],r=function i(){a.off(e,i),t.apply(a,arguments);};i[o]=r;}();this.on.apply(this,[e].concat(i));}},{key:"on",value:function(e){this._events[e]||(this._events[e]=[]);for(var t=0,i=arguments.length<=1?0:arguments.length-1;t<i;t++)this._events[e].push(arguments.length<=t+1?void 0:arguments[t+1]);}},{key:"off",value:function(e){if(this._events[e])for(var t=0,i=arguments.length<=1?0:arguments.length-1;t<i;t++)for(var r=arguments.length<=t+1?void 0:arguments[t+1],o=void 0;~(o=this._events[e].indexOf(r));)this._events[e].splice(o,1);}},{key:"removeAllListeners",value:function(e){delete this._events[e];}},{key:"listeners",get:function(){return this._events}}]),e}(),me=n("requestAnimationFrame")||function(e){return setTimeout(function(){return e((new Date).getTime())},1e3/60)},ve={linear:function(e){return e},quad:function(e){return Math.pow(e,2)},dequad:function(e){return 1-ve.quad(1-e)},quint:function(e){return Math.pow(e,5)},dequint:function(e){return 1-Math.pow(1-e,5)},cycle:function(e){return 1-Math.sin(Math.acos(e))},decycle:function(e){return Math.sin(Math.acos(1-e))},bounce:function(e){return 1-ve.debounce(1-e)},debounce:function(e){for(var t=0,i=1;1;t+=i,i/=2)if(e>=(7-4*t)/11)return -Math.pow((11-6*t-11*e)/4,2)+Math.pow(i,2)},elastic:function(e){return 1-ve.delastic(1-e)},delastic:function(e){return Math.pow(2,10*(e-1))*Math.cos(20*Math.PI*1.5/3*e)}},ge=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"linear",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};if(o(this,e),this.duration=i,this.rule=t,this.draw=r,this.end=n,"function"!=typeof this.draw)throw new TypeError("Invalid animation draw callback:",r);if("function"!=typeof this.end)throw new TypeError("Invalid animation end callback:",n)}return ue(e,[{key:"animate",value:function(e,t){var i=this;this.frame&&this.cancel();var r=window.performance&&window.performance.now?window.performance.now():n("animationStartTime")||Date.now();e=e||this.draw,t=t||this.end,this.draw=e,this.end=t,this.frame=me(function(o){return a(o,e,r,ve[i.rule]||i.rule,i.duration,t,i)});}},{key:"cancel",value:function(){if(this.frame){(n("cancelAnimationFrame")||function(e){})(this.frame),this.frame=null;}}},{key:"destroy",value:function(){this.cancel(),this.draw=null,this.end=null;}}]),e}();ge.rules=ve;var be=function(){function t(i,r,n){o(this,t),this.options=i,this.element=r.toLowerCase(),this.type=t.toDashed(n),this.Type=e[n],this.mutationsObserved=!1,this.isObservable=!!window.MutationObserver,window.GAUGES_NO_AUTO_INIT||t.domReady(this.traverse.bind(this));}return ue(t,[{key:"isValidNode",value:function(e){return !(!e.tagName||e.tagName.toLowerCase()!==this.element||e.getAttribute("data-type")!==this.type)}},{key:"traverse",value:function(){for(var e=document.getElementsByTagName(this.element),t=0,i=e.length;t<i;t++)this.process(e[t]);this.isObservable&&!this.mutationsObserved&&(new MutationObserver(this.observe.bind(this)).observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeOldValue:!0,characterDataOldValue:!0}),this.mutationsObserved=!0);}},{key:"observe",value:function(e){for(var t=0,i=e.length;t<i;t++){var r=e[t];if("attributes"===r.type&&"data-type"===r.attributeName&&this.isValidNode(r.target)&&r.oldValue!==this.type)setTimeout(this.process.bind(this,r.target));else if(r.addedNodes&&r.addedNodes.length)for(var o=0,n=r.addedNodes.length;o<n;o++)setTimeout(this.process.bind(this,r.addedNodes[o]));}}},{key:"process",value:function(e){var i=this;if(!this.isValidNode(e))return null;var r=void 0,o=JSON.parse(JSON.stringify(this.options)),n=null;for(r in o)if(o.hasOwnProperty(r)){var a=t.toAttributeName(r),l=t.parse(e.getAttribute(a));null!==l&&void 0!==l&&(o[r]=l);}return o.renderTo=e,n=new this.Type(o),n.draw&&n.draw(),this.isObservable?(n.observer=new MutationObserver(function(r){r.forEach(function(r){if("attributes"===r.type){var o=r.attributeName.toLowerCase(),a=e.getAttribute(o).toLowerCase();if("data-type"===o&&a&&a!==i.type)n.observer.disconnect(),delete n.observer,n.destroy&&n.destroy();else if("data-"===o.substr(0,5)){var l=o.substr(5).split("-").map(function(e,t){return t?e.charAt(0).toUpperCase()+e.substr(1):e}).join(""),s={};s[l]=t.parse(e.getAttribute(r.attributeName)),"value"===l?n&&(n.value=s[l]):n.update&&n.update(s);}}});}),n.observer.observe(e,{attributes:!0}),n):n}}],[{key:"parse",value:function(e){if("true"===e)return !0;if("false"===e)return !1;if("undefined"!==e){if("null"===e)return null;if(/^[-+#.\w\d\s]+(?:,[-+#.\w\d\s]*)+$/.test(e))return e.split(",");try{return JSON.parse(e)}catch(e){}return e}}},{key:"toDashed",value:function(e){for(var t=e.split(/(?=[A-Z])/),i=1,r=t.length,o=t[0].toLowerCase();i<r;i++)o+="-"+t[i].toLowerCase();return o}},{key:"toCamelCase",value:function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=e.split(/-/),r=0,o=i.length,n="";r<o;r++)n+=r||t?i[r][0].toUpperCase()+i[r].substr(1).toLowerCase():i[r].toLowerCase();return n}},{key:"toAttributeName",value:function(e){return "data-"+t.toDashed(e)}},{key:"domReady",value:function(e){if(/comp|inter|loaded/.test((window.document||{}).readyState+""))return e();window.addEventListener?window.addEventListener("DOMContentLoaded",e,!1):window.attachEvent&&window.attachEvent("onload",e);}}]),t}(),pe=function(){function e(t,i,r){o(this,e),e.collection.push(this),this.width=i||0,this.height=r||0,this.element=t,this.init();}return ue(e,[{key:"init",value:function(){var t=e.pixelRatio;this.element.width=this.width*t,this.element.height=this.height*t,this.element.style.width=this.width+"px",this.element.style.height=this.height+"px",this.elementClone=this.element.cloneNode(!0),this.context=this.element.getContext("2d"),this.contextClone=this.elementClone.getContext("2d"),this.drawWidth=this.element.width,this.drawHeight=this.element.height,this.drawX=this.drawWidth/2,this.drawY=this.drawHeight/2,this.minSide=this.drawX<this.drawY?this.drawX:this.drawY,this.elementClone.initialized=!1,this.contextClone.translate(this.drawX,this.drawY),this.contextClone.save(),this.context.translate(this.drawX,this.drawY),this.context.save(),this.context.max=this.contextClone.max=this.minSide,this.context.maxRadius=this.contextClone.maxRadius=null;}},{key:"destroy",value:function(){var t=e.collection.indexOf(this);~t&&e.collection.splice(t,1),this.context.clearRect(-this.drawX,-this.drawY,this.drawWidth,this.drawHeight),this.context.max=null,delete this.context.max,this.context.maxRadius=null,delete this.context.maxRadius,this.context=null,this.contextClone=null,this.elementClone=null,this.element=null,this.onRedraw=null;}},{key:"commit",value:function(){var t=e.pixelRatio;return 1!==t&&(this.contextClone.scale(t,t),this.contextClone.save()),this}},{key:"redraw",value:function(){return this.init(),this.onRedraw&&this.onRedraw(),this
	}}],[{key:"redraw",value:function(){for(var t=0,i=e.collection.length;t<i;t++)e.collection[t].redraw();}},{key:"pixelRatio",get:function(){return window.devicePixelRatio||1}}]),e}();pe.collection=[],window.matchMedia&&window.matchMedia("screen and (min-resolution: 2dppx)").addListener(pe.redraw);var we={renderTo:null,width:0,height:0,minValue:0,maxValue:100,value:0,units:!1,exactTicks:!1,majorTicks:[0,20,40,60,80,100],minorTicks:10,strokeTicks:!0,animatedValue:!1,animateOnInit:!1,title:!1,borders:!0,numbersMargin:1,listeners:null,valueInt:3,valueDec:2,majorTicksInt:1,majorTicksDec:0,animation:!0,animationDuration:500,animationRule:"cycle",colorPlate:"#fff",colorPlateEnd:"",colorMajorTicks:"#444",colorMinorTicks:"#666",colorStrokeTicks:"",colorTitle:"#888",colorUnits:"#888",colorNumbers:"#444",colorNeedle:"rgba(240,128,128,1)",colorNeedleEnd:"rgba(255,160,122,.9)",colorValueText:"#444",colorValueTextShadow:"rgba(0,0,0,0.3)",colorBorderShadow:"rgba(0,0,0,0.5)",colorBorderOuter:"#ddd",colorBorderOuterEnd:"#aaa",colorBorderMiddle:"#eee",colorBorderMiddleEnd:"#f0f0f0",colorBorderInner:"#fafafa",colorBorderInnerEnd:"#ccc",colorValueBoxRect:"#888",colorValueBoxRectEnd:"#666",colorValueBoxBackground:"#babab2",colorValueBoxShadow:"rgba(0,0,0,1)",colorNeedleShadowUp:"rgba(2,255,255,0.2)",colorNeedleShadowDown:"rgba(188,143,143,0.45)",colorBarStroke:"#222",colorBar:"#ccc",colorBarProgress:"#888",colorBarShadow:"#000",fontNumbers:"Arial",fontTitle:"Arial",fontUnits:"Arial",fontValue:"Arial",fontNumbersSize:20,fontTitleSize:24,fontUnitsSize:22,fontValueSize:26,fontNumbersStyle:"normal",fontTitleStyle:"normal",fontUnitsStyle:"normal",fontValueStyle:"normal",fontNumbersWeight:"normal",fontTitleWeight:"normal",fontUnitsWeight:"normal",fontValueWeight:"normal",needle:!0,needleShadow:!0,needleType:"arrow",needleStart:5,needleEnd:85,needleWidth:4,borderOuterWidth:3,borderMiddleWidth:3,borderInnerWidth:3,borderShadowWidth:3,valueBox:!0,valueBoxStroke:5,valueBoxWidth:0,valueText:"",valueTextShadow:!0,valueBoxBorderRadius:2.5,highlights:[{from:20,to:60,color:"#eee"},{from:60,to:80,color:"#ccc"},{from:80,to:100,color:"#999"}],highlightsWidth:15,highlightsLineCap:"butt",barWidth:20,barStrokeWidth:0,barProgress:!0,barShadow:0};l.prototype=Object.create(Array.prototype),l.prototype.constructor=l,l.prototype.get=function(e){if("string"==typeof e)for(var t=0,i=this.length;t<i;t++){var r=this[t].options.renderTo.tagName?this[t].options.renderTo:document.getElementById(this[t].options.renderTo||"");if(r.getAttribute("id")===e)return this[t]}else if("number"==typeof e)return this[e];return null};var ke="2.1.7",ye=Math.round,xe=Math.abs,Te=new l;Te.version=ke;var Se=function(t){function n(t){o(this,n);var r=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this)),a=r.constructor.name;if("BaseGauge"===a)throw new TypeError("Attempt to instantiate abstract class!");if(Te.push(r),t.listeners&&Object.keys(t.listeners).forEach(function(e){(t.listeners[e]instanceof Array?t.listeners[e]:[t.listeners[e]]).forEach(function(t){r.on(e,t);});}),r.version=ke,r.type=e[a]||n,r.initialized=!1,t.minValue=parseFloat(t.minValue),t.maxValue=parseFloat(t.maxValue),t.value=parseFloat(t.value)||0,t.borders||(t.borderInnerWidth=t.borderMiddleWidth=t.borderOuterWidth=0),!t.renderTo)throw TypeError("Canvas element was not specified when creating the Gauge object!");var l=t.renderTo.tagName?t.renderTo:document.getElementById(t.renderTo);if(!(l instanceof HTMLCanvasElement))throw TypeError("Given gauge canvas element is invalid!");return t.width=parseFloat(t.width)||0,t.height=parseFloat(t.height)||0,t.width&&t.height||(t.width||(t.width=l.parentNode?l.parentNode.offsetWidth:l.offsetWidth),t.height||(t.height=l.parentNode?l.parentNode.offsetHeight:l.offsetHeight)),r.options=t||{},r.options.animateOnInit&&(r._value=r.options.value,r.options.value=r.options.minValue),r.canvas=new pe(l,t.width,t.height),r.canvas.onRedraw=r.draw.bind(r),r.animation=new ge(t.animationRule,t.animationDuration),r}return r(n,t),ue(n,[{key:"update",value:function(e){return Object.assign(this.options,this.type.configure(e||{})),this.canvas.width=this.options.width,this.canvas.height=this.options.height,this.animation.rule=this.options.animationRule,this.animation.duration=this.options.animationDuration,this.canvas.redraw(),this}},{key:"destroy",value:function(){var e=Te.indexOf(this);~e&&Te.splice(e,1),this.canvas.destroy(),this.canvas=null,this.animation.destroy(),this.animation=null,this.emit("destroy");}},{key:"draw",value:function(){return this.options.animateOnInit&&!this.initialized&&(this.value=this._value,this.initialized=!0,this.emit("init")),this.emit("render"),this}},{key:"value",set:function(e){var t=this;e=n.ensureValue(e,this.options.minValue);var i=this.options.value;if(e!==i)if(this.options.animation){if(this.animation.frame&&(this.options.value=this._value,this._value===e))return this.animation.cancel(),void delete this._value;void 0===this._value&&(this._value=e),this.emit("animationStart"),this.animation.animate(function(r){var o=i+(e-i)*r;t.options.animatedValue&&t.emit("value",o,t.value),t.options.value=o,t.draw(),t.emit("animate",r,t.options.value);},function(){void 0!==t._value&&(t.emit("value",t._value,t.value),t.options.value=t._value,delete t._value),t.draw(),t.emit("animationEnd");});}else this.emit("value",e,this.value),this.options.value=e,this.draw();},get:function(){return void 0===this._value?this.options.value:this._value}}],[{key:"configure",value:function(e){return e}},{key:"initialize",value:function(e,t){return new be(t,"canvas",e)}},{key:"fromElement",value:function(e){var t=be.toCamelCase(e.getAttribute("data-type")),i=e.attributes,r=0,o=i.length,n={};if(t){for(/Gauge$/.test(t)||(t+="Gauge");r<o;r++)n[be.toCamelCase(i[r].name.replace(/^data-/,""),!1)]=be.parse(i[r].value);new be(n,e.tagName,t).process(e);}}},{key:"ensureValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e=parseFloat(e),!isNaN(e)&&isFinite(e)||(e=parseFloat(t)||0),e}},{key:"mod",value:function(e,t){return (e%t+t)%t}},{key:"version",get:function(){return ke}}]),n}(fe);void 0!==e&&(e.BaseGauge=Se,e.gauges=(window.document||{}).gauges=Te);var Ve=/{([_a-zA-Z]+[_a-zA-Z0-9]*)}/g,We={roundRect:h,padValue:u,formatMajorTickNumber:f,radians:m,radialPoint:v,linearGradient:g,drawNeedleShadow:p,drawValueBox:x,verifyError:s,prepareTicks:c,drawShadow:b,font:w,normalizedValue:T,formatContext:d},Oe=Math.PI,Ae=Oe/2,Pe=Object.assign({},we,{ticksAngle:270,startAngle:45,colorNeedleCircleOuter:"#f0f0f0",colorNeedleCircleOuterEnd:"#ccc",colorNeedleCircleInner:"#e8e8e8",colorNeedleCircleInnerEnd:"#f5f5f5",needleCircleSize:10,needleCircleInner:!0,needleCircleOuter:!0,needleStart:20,animationTarget:"needle",useMinPath:!1,barWidth:0,barStartPosition:"left"}),Me=function(e){function t(e){return o(this,t),e=Object.assign({},Pe,e||{}),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t.configure(e)))}return r(t,e),ue(t,[{key:"draw",value:function(){try{var e=this.canvas,i=[-e.drawX,-e.drawY,e.drawWidth,e.drawHeight],r=i[0],o=i[1],n=i[2],a=i[3],l=this.options;if("needle"===l.animationTarget){if(!e.elementClone.initialized){var s=e.contextClone;s.clearRect(r,o,n,a),s.save(),this.emit("beforePlate"),W(s,l),this.emit("beforeHighlights"),O(s,l),this.emit("beforeMinorTicks"),A(s,l),this.emit("beforeMajorTicks"),M(s,l),this.emit("beforeNumbers"),j(s,l),this.emit("beforeTitle"),N(s,l),this.emit("beforeUnits"),E(s,l),e.elementClone.initialized=!0;}this.canvas.commit(),e.context.clearRect(r,o,n,a),e.context.save(),e.context.drawImage(e.elementClone,r,o,n,a),e.context.save(),this.emit("beforeProgressBar"),D(e.context,l),this.emit("beforeValueBox"),R(e.context,l,z(this)),this.emit("beforeNeedle"),_(e.context,l);}else {var d=-We.radians((l.value-l.minValue)/(l.maxValue-l.minValue)*l.ticksAngle);if(e.context.clearRect(r,o,n,a),e.context.save(),this.emit("beforePlate"),W(e.context,l),e.context.rotate(d),this.emit("beforeHighlights"),O(e.context,l),this.emit("beforeMinorTicks"),A(e.context,l),this.emit("beforeMajorTicks"),M(e.context,l),this.emit("beforeNumbers"),j(e.context,l),this.emit("beforeProgressBar"),D(e.context,l),e.context.rotate(-d),e.context.save(),!e.elementClone.initialized){var c=e.contextClone;c.clearRect(r,o,n,a),c.save(),this.emit("beforeTitle"),N(c,l),this.emit("beforeUnits"),E(c,l),this.emit("beforeNeedle"),_(c,l),e.elementClone.initialized=!0;}e.context.drawImage(e.elementClone,r,o,n,a);}this.emit("beforeValueBox"),R(e.context,l,z(this)),ce(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"draw",this).call(this);}catch(e){We.verifyError(e);}return this}},{key:"value",set:function(e){e=Se.ensureValue(e,this.options.minValue),this.options.animation&&360===this.options.ticksAngle&&this.options.useMinPath&&(this._value=e,e=this.options.value+((e-this.options.value)%360+540)%360-180),he(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"value",e,this);},get:function(){return ce(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"value",this)}}],[{key:"configure",value:function(e){return e.barWidth>50&&(e.barWidth=50),isNaN(e.startAngle)&&(e.startAngle=45),isNaN(e.ticksAngle)&&(e.ticksAngle=270),e.ticksAngle>360&&(e.ticksAngle=360),e.ticksAngle<0&&(e.ticksAngle=0),e.startAngle<0&&(e.startAngle=0),e.startAngle>360&&(e.startAngle=360),e}}]),t}(Se);void 0!==e&&(e.RadialGauge=Me),Se.initialize("RadialGauge",Pe);var Be=Object.assign({},we,{borderRadius:0,barBeginCircle:30,colorBarEnd:"",colorBarProgressEnd:"",needleWidth:6,tickSide:"both",needleSide:"both",numberSide:"both",ticksWidth:10,ticksWidthMinor:5,ticksPadding:5,barLength:85,fontTitleSize:26,highlightsWidth:10}),Ce=function(e){function n(e){return o(this,n),e=Object.assign({},Be,e||{}),i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n.configure(e)))}return r(n,e),ue(n,[{key:"draw",value:function(){try{var e=this.canvas,i=[-e.drawX,-e.drawY,e.drawWidth,e.drawHeight],r=i[0],o=i[1],a=i[2],l=i[3],s=this.options;if(!e.elementClone.initialized){var d=e.contextClone;d.clearRect(r,o,a,l),d.save(),this.emit("beforePlate"),this.drawBox=F(d,s,r,o,a,l),this.emit("beforeBar"),U.apply(void 0,[d,s].concat(t(this.drawBox))),e.context.barDimensions=d.barDimensions,this.emit("beforeHighlights"),J(d,s),this.emit("beforeMinorTicks"),ee(d,s),this.emit("beforeMajorTicks"),K(d,s),this.emit("beforeNumbers"),te(d,s),this.emit("beforeTitle"),ie(d,s),this.emit("beforeUnits"),re(d,s),e.elementClone.initialized=!0;}this.canvas.commit(),e.context.clearRect(r,o,a,l),e.context.save(),e.context.drawImage(e.elementClone,r,o,a,l),e.context.save(),this.emit("beforeProgressBar"),H.apply(void 0,[e.context,s].concat(t(this.drawBox))),this.emit("beforeNeedle"),oe(e.context,s),this.emit("beforeValueBox"),se.apply(void 0,[e.context,s,s.animatedValue?this.options.value:this.value].concat(t(this.drawBox))),ce(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"draw",this).call(this);}catch(e){We.verifyError(e);}return this}}],[{key:"configure",value:function(e){return e.barStrokeWidth>=e.barWidth&&(e.barStrokeWidth=ye(e.barWidth/2)),e.hasLeft=q("right",e),e.hasRight=q("left",e),e.value>e.maxValue&&(e.value=e.maxValue),e.value<e.minValue&&(e.value=e.minValue),Se.configure(e)}}]),n}(Se);void 0!==e&&(e.LinearGauge=Ce),Se.initialize("LinearGauge",Be),Object.assign(e,{Collection:l,GenericOptions:we,Animation:ge,BaseGauge:Se,drawings:We,SmartCanvas:pe,DomObserver:be,vendorize:n});}(module.exports);
} (gauge_min));

var Gauge = gauge_minExports;

const CARD_VERSION = "0.9.0";

var common$1 = {
	version: "Version",
	invalid_configuration: "Invalid configuration",
	show_warning: "Show Warning"
};
var en = {
	common: common$1
};

var en$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    common: common$1,
    'default': en
});

var common = {
	version: "Verzia",
	invalid_configuration: "Chybná konfigurácia",
	show_warning: "Zobraziť upozornenie"
};
var sk = {
	common: common
};

var sk$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    common: common,
    'default': sk
});

var languages = {
    en: en$1,
    sk: sk$1,
};
function localize(string, search = "", replace = "") {
    const section = string.split(".")[0];
    const key = string.split(".")[1];
    const lang = (localStorage.getItem("selectedLanguage") || "en")
        .replace(/['"]+/g, "")
        .replace("-", "_");
    var tranlated;
    try {
        tranlated = languages[lang][section][key];
    }
    catch (e) {
        tranlated = languages["en"][section][key];
    }
    if (tranlated === undefined)
        tranlated = languages["en"][section][key];
    if (search !== "" && replace !== "") {
        tranlated = tranlated.replace(search, replace);
    }
    return tranlated;
}

/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Tomas Hellström (@helto4real) (https://github.com/custom-cards/canvas-gauge-card)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
// Check if config or Entity changed
function hasConfigOrEntityChanged(element, changedProps, forceUpdate) {
    if (changedProps.has('config') || forceUpdate) {
        return true;
    }
    if (element.config.entity) {
        const oldHass = changedProps.get('hass');
        if (oldHass) {
            return (oldHass.states[element.config.entity]
                !== element.hass.states[element.config.entity]);
        }
        return true;
    }
    else {
        return false;
    }
}
/* eslint no-console: 0 */
console.info(`%c  CANVAS-GAUGE-CARD \n%c  ${localize("common.version")} ${CARD_VERSION}    `, "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");
window.customCards = window.customCards || [];
window.customCards.push({
    type: "canvas-gauge-card",
    name: "Canvas Gauge Card",
    description: "A canvas gauge card from http://canvas-gauges.com/",
});
let CanvasGaugeCard = class CanvasGaugeCard extends s {
    static getStubConfig() {
        return {};
    }
    setConfig(config) {
        if (!config || config.show_error) {
            throw new Error(localize("common.invalid_configuration"));
        }
        // Have no ide why I need to do this or the thing bugs in .. but I do
        this.config = config;
        this._config = Object.assign({ gauge: config.gauge }, config);
        this._gaugeWidth = config.card_width
            ? config.card_width
            : config.gauge["width"];
        this._gaugeHeight = config.card_height
            ? config.card_height
            : config.gauge["height"];
        this._shadowHeight = config.shadow_height ? config.shadow_height : "0%";
        this._useDropshadow = config.dropshadow ? config.dropshadow : false;
        this._fontSize = config.font_size
            ? config.font_size
            : `calc(${config.gauge["height"]}px/22)`;
    }
    shouldUpdate(changedProps) {
        return hasConfigOrEntityChanged(this, changedProps, false);
    }
    // Here we need to refresh the actual gauge after it has rendered
    updated(_) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (this._gauge == null) {
            var gauge;
            if (((_a = this._config) === null || _a === void 0 ? void 0 : _a.gauge.type) == "linear-gauge") {
                gauge = new Gauge.LinearGauge({
                    renderTo: this._canvasElement,
                    height: this._config.gauge["height"],
                    width: this._config.gauge["width"],
                    value: 0,
                });
            }
            else if (((_b = this._config) === null || _b === void 0 ? void 0 : _b.gauge.type) == "radial-gauge") {
                gauge = new Gauge.RadialGauge({
                    renderTo: this._canvasElement,
                    height: this._config.gauge["height"],
                    width: this._config.gauge["width"],
                    value: 0,
                });
            }
            for (const key in (_c = this._config) === null || _c === void 0 ? void 0 : _c.gauge) {
                if ((_e = (_d = this._config) === null || _d === void 0 ? void 0 : _d.gauge) === null || _e === void 0 ? void 0 : _e.hasOwnProperty(key)) {
                    gauge.options[key] = this._config.gauge[key];
                }
            }
            this._gauge = gauge;
        }
        var entityId = (_f = this._config) === null || _f === void 0 ? void 0 : _f.entity;
        this._state = (_g = this.hass) === null || _g === void 0 ? void 0 : _g.states[entityId].state;
        this._gauge["value"] = this._state;
        this._gauge.draw(); // Have to call to redraw canvas
    }
    render() {
        if (!this._config || !this.hass) {
            return x ``;
        }
        // Check for stateObj or other necessary things and render a warning if missing
        // if provided in the future, this is a good spot doing just that :)
        if (this._config.show_warning) {
            return x `
        <ha-card>
          <div class="warning">${localize("common.show_warning")}</div>
        </ha-card>
      `;
        }
        return x `
      <style>
        :host {
          ${this._useDropshadow ?
            `          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);`
            : ` `}
          display: block !important;
          border-radius: 2px !important;
          transition: all 0.3s ease-out !important;
          background-color: ${this._config.background_color
            ? this._config.background_color
            : "transparent"} !important;
        }
        .cardroot {
          width: ${this._gaugeWidth}px;
          height: calc(
            ${this._gaugeHeight}px +
              ${this._config.shadow_bottom ? this._config.shadow_bottom : 0}px
          );
          position: relative;
          margin: auto;
        }
        .container {
          width: ${this._gaugeWidth}px;
          height: ${this._gaugeHeight}px;
          position: relative;
          top: 0px;
          overflow: hidden;
          text-align: center;
        }
        .innercontainer {
          position: relative;
          top: ${this._config.card_top ? this._config.card_top : 0};
          left: ${this._config.card_left ? this._config.card_left : 0};
        }
        .shadow {
          visible: ${this._shadowHeight == "0%" ? `none` : `block`};
          width: 100%;
          height: ${this._shadowHeight};
          left: 0px;
          bottom: 0px;
          background: rgba(0, 0, 0, 0.5);
          position: absolute;
        }
        .state {
          position: relative;
          float: left;
          top: 50%;
          left: 50%;
          color: white;
          font-size: 100%;
          transform: translate(-50%, -50%);
        }
      </style>
      <div class="cardroot">
        <div
          class="container"
          width=${this._gaugeWidth}
          height=${this._gaugeHeight}
        >
          <div
            class="innercontainer"
            width=${this._gaugeWidth}
            height=${this._gaugeHeight}
            @click=${this.clickHandler}
          >
            <canvas id="canvaselement"> </canvas>
          </div>
        </div>
        <div class="shadow">
          <div class="state" style="font-size: ${this._fontSize}">
            ${this._config.name}
          </div>
        </div>
      </div>
    `;
    }
    static get styles() {
        return i$3 `
    .warning {
  display: block;
  color: black;
  background - color: #fce588;
  padding: 8px;
}
`;
    }
    clickHandler(_) {
        var _a;
        this._fire("hass-more-info", { entityId: (_a = this._config) === null || _a === void 0 ? void 0 : _a.entity });
    }
    /**
     * Fires the event that opens the enity info
     */
    _fire(type, detail) {
        var _a;
        var event = new Event(type, {
            bubbles: true,
            cancelable: false,
            composed: true,
        });
        event.detail = detail || {};
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
        return event;
    }
};
__decorate([
    n$1()
], CanvasGaugeCard.prototype, "hass", void 0);
__decorate([
    n$1()
], CanvasGaugeCard.prototype, "_config", void 0);
__decorate([
    i("#canvaselement")
], CanvasGaugeCard.prototype, "_canvasElement", void 0);
CanvasGaugeCard = __decorate([
    e$1("canvas-gauge-card")
], CanvasGaugeCard);

export { CanvasGaugeCard, hasConfigOrEntityChanged };
