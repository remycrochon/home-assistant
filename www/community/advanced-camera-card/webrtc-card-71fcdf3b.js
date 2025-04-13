import{a as e,eV as t,cY as a,dG as r,dp as s,l as o,dq as i,ds as n,dt as d,dr as c,r as l,_ as h,n as m,b as u,t as p,e6 as b,x as g}from"./card-d57b089c.js";import{d as v}from"./dispatch-live-error-77263f1a.js";import{g as w}from"./get-technology-for-video-rtc-778a0c05.js";import{V as y,s as C,h as _,m as f,M as x}from"./audio-15da01ad.js";let k=class extends e{constructor(){super(...arguments),this.controls=!1,this._message=null,this._mediaPlayerController=new y(this,(()=>this._getVideo()),(()=>this.controls)),this._webrtcTask=new t(this,this._getWebRTCCardElement,(()=>[1]))}async getMediaPlayerController(){return this._mediaPlayerController}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){this._message=null,super.disconnectedCallback()}willUpdate(e){["cameraConfig","cameraEndpoints"].some((t=>e.has(t)))&&(this._message=null)}_getVideoRTC(){return this.renderRoot?.querySelector("#webrtc")??null}_getVideo(){return this._getVideoRTC()?.video??null}async _getWebRTCCardElement(){return await customElements.whenDefined("webrtc-camera"),customElements.get("webrtc-camera")}_createWebRTC(){const e=this._webrtcTask.value;if(e&&this.hass&&this.cameraConfig){const t=new e,a={intersection:0,muted:!0,...this.cameraConfig.webrtc_card};return a.url||a.entity||!this.cameraEndpoints?.webrtcCard||(a.entity=this.cameraEndpoints.webrtcCard.endpoint),t.setConfig(a),t.hass=this.hass,t}return null}render(){if(this._message)return a(this._message);return r(this._webrtcTask,(()=>{let e;try{e=this._createWebRTC()}catch(e){return this._message={type:"error",message:e instanceof b?e.message:o("error.webrtc_card_reported_error")+": "+e.message,context:e.context},void v(this)}return e&&(e.id="webrtc"),g`${e}`}),{inProgressFunc:()=>s({message:o("error.webrtc_card_waiting"),cardWideConfig:this.cardWideConfig})})}updated(){this.updateComplete.then((()=>{const e=this._getVideoRTC(),t=this._getVideo();t&&(C(t,this.controls),t.onloadeddata=()=>{this.controls&&_(t,x),i(this,t,{mediaPlayerController:this._mediaPlayerController,capabilities:{supportsPause:!0,hasAudio:f(t)},...e&&{technology:w(e)}})},t.onplay=()=>n(this),t.onpause=()=>d(this),t.onvolumechange=()=>c(this))}))}static get styles(){return l(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n/* Don't drop shadow or have radius for nested webrtc card */\n#webrtc ha-card {\n  border-radius: 0px;\n  margin: 0px;\n  box-shadow: none;\n}\n\nha-card,\ndiv.fix-safari,\n#video {\n  background: unset;\n  background-color: unset;\n}\n\n#webrtc #video {\n  object-fit: var(--advanced-camera-card-media-layout-fit, contain);\n  object-position: var(--advanced-camera-card-media-layout-position-x, 50%) var(--advanced-camera-card-media-layout-position-y, 50%);\n  object-view-box: inset(var(--advanced-camera-card-media-layout-view-box-top, 0%) var(--advanced-camera-card-media-layout-view-box-right, 0%) var(--advanced-camera-card-media-layout-view-box-bottom, 0%) var(--advanced-camera-card-media-layout-view-box-left, 0%));\n}")}};h([m({attribute:!1})],k.prototype,"cameraConfig",void 0),h([m({attribute:!1})],k.prototype,"cameraEndpoints",void 0),h([m({attribute:!1})],k.prototype,"cardWideConfig",void 0),h([m({attribute:!0,type:Boolean})],k.prototype,"controls",void 0),h([u()],k.prototype,"_message",void 0),k=h([p("advanced-camera-card-live-webrtc-card")],k);export{k as AdvancedCameraCardLiveWebRTCCard};
