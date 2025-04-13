import{dF as t,cW as e,dG as i,_ as n,n as a,b as o,t as s,a as r,dH as c,x as d,e as l,dI as h,r as p,dJ as u,dK as m,dL as _,k as v,l as g,dM as f,dN as b,dl as z}from"./card-edf1c6f3.js";class y{constructor(){this._options=null,this._viewportIntersecting=null,this._microphoneMuteTimer=new t,this._root=null,this._eventListeners=new Map,this._children=[],this._target=null,this._mutationObserver=new MutationObserver(this._mutationHandler.bind(this)),this._intersectionObserver=new IntersectionObserver(this._intersectionHandler.bind(this)),this._mediaLoadedHandler=async t=>{this._target?.index===t&&(await this._unmuteTargetIfConfigured(this._target.selected?"selected":"visible"),await this._playTargetIfConfigured(this._target.selected?"selected":"visible"))},this._visibilityHandler=async()=>{await this._changeVisibility("visible"===document.visibilityState)},this._changeVisibility=async t=>{t?(await this._unmuteTargetIfConfigured("visible"),await this._playTargetIfConfigured("visible")):(await this._pauseAllIfConfigured("hidden"),await this._muteAllIfConfigured("hidden"))},document.addEventListener("visibilitychange",this._visibilityHandler)}setOptions(t){this._options?.microphoneState!==t.microphoneState&&this._microphoneStateChangeHandler(this._options?.microphoneState,t.microphoneState),this._options=t}hasRoot(){return!!this._root}destroy(){this._viewportIntersecting=null,this._microphoneMuteTimer.stop(),this._root=null,this._removeChildHandlers(),this._children=[],this._target=null,this._mutationObserver.disconnect(),this._intersectionObserver.disconnect(),document.removeEventListener("visibilitychange",this._visibilityHandler)}async setTarget(t,e){this._target?.index===t&&this._target?.selected===e||(this._target?.selected&&(await this._pauseTargetIfConfigured("unselected"),await this._muteTargetIfConfigured("unselected"),this._microphoneMuteTimer.stop()),this._target={selected:e,index:t},e?(await this._unmuteTargetIfConfigured("selected"),await this._playTargetIfConfigured("selected")):(await this._unmuteTargetIfConfigured("visible"),await this._playTargetIfConfigured("visible")))}unsetTarget(){this._target=null}async _playTargetIfConfigured(t){null!==this._target&&this._options?.autoPlayConditions?.includes(t)&&await this._play(this._target.index)}async _play(t){await((await(this._children[t]?.getMediaPlayerController()))?.play())}async _unmuteTargetIfConfigured(t){null!==this._target&&this._options?.autoUnmuteConditions?.includes(t)&&await this._unmute(this._target.index)}async _unmute(t){await((await(this._children[t]?.getMediaPlayerController()))?.unmute())}async _pauseAllIfConfigured(t){if(this._options?.autoPauseConditions?.includes(t))for(const t of this._children.keys())await this._pause(t)}async _pauseTargetIfConfigured(t){null!==this._target&&this._options?.autoPauseConditions?.includes(t)&&await this._pause(this._target.index)}async _pause(t){await((await(this._children[t]?.getMediaPlayerController()))?.pause())}async _muteAllIfConfigured(t){if(this._options?.autoMuteConditions?.includes(t))for(const t of this._children.keys())await this._mute(t)}async _muteTargetIfConfigured(t){null!==this._target&&this._options?.autoMuteConditions?.includes(t)&&await this._mute(this._target.index)}async _mute(t){await((await(this._children[t]?.getMediaPlayerController()))?.mute())}_mutationHandler(t,e){this._initializeRoot()}_removeChildHandlers(){for(const[t,e]of this._eventListeners.entries())t.removeEventListener("advanced-camera-card:media:loaded",e);this._eventListeners.clear()}setRoot(t){return t!==this._root&&(this._target=null,this._root=t,this._initializeRoot(),this._intersectionObserver.disconnect(),this._intersectionObserver.observe(this._root),this._mutationObserver.disconnect(),this._mutationObserver.observe(this._root,{childList:!0,subtree:!0}),!0)}_initializeRoot(){if(this._options&&this._root){this._removeChildHandlers(),this._children=[...this._root.querySelectorAll(this._options.playerSelector)];for(const[t,e]of this._children.entries()){const i=()=>this._mediaLoadedHandler(t);this._eventListeners.set(e,i),e.addEventListener("advanced-camera-card:media:loaded",i)}}}async _intersectionHandler(t){const e=this._viewportIntersecting;this._viewportIntersecting=t.some((t=>t.isIntersecting)),null!==e&&e!==this._viewportIntersecting&&await this._changeVisibility(this._viewportIntersecting)}async _microphoneStateChangeHandler(t,e){t&&e&&(t.muted&&!e.muted?await this._unmuteTargetIfConfigured("microphone"):!t.muted&&e.muted&&this._options?.autoMuteConditions?.includes("microphone")&&this._microphoneMuteTimer.start(this._options.microphoneMuteSeconds??60,(async()=>{await this._muteTargetIfConfigured("microphone")})))}}const w={active:!0,breakpoints:{},lazyLoadCount:0};function C(t={}){let e,i,n;const a=new Set,o=["init","select"],s=["select"];function r(){"hidden"===document.visibilityState&&e.lazyUnloadConditions?.includes("hidden")?a.forEach((t=>{e.lazyUnloadCallback&&(e.lazyUnloadCallback(t,n[t]),a.delete(t))})):"visible"===document.visibilityState&&e.lazyLoadCallback&&d()}function c(t){return a.has(t)}function d(){const t=e.lazyLoadCount,o=i.selectedScrollSnap(),s=new Set;for(let e=1;e<=t&&o-e>=0;e++)s.add(o-e);s.add(o);for(let e=1;e<=t&&o+e<n.length;e++)s.add(o+e);s.forEach((t=>{!c(t)&&e.lazyLoadCallback&&(a.add(t),e.lazyLoadCallback(t,n[t]))}))}function l(){const t=i.previousScrollSnap();c(t)&&e.lazyUnloadCallback&&(e.lazyUnloadCallback(t,n[t]),a.delete(t))}return{name:"autoLazyLoad",options:t,init:function(a,c){const{mergeOptions:h,optionsAtMedia:p}=c,u=h(w,t);e=p(u),i=a,n=i.slideNodes(),e.lazyLoadCallback&&o.forEach((t=>i.on(t,d))),e.lazyUnloadCallback&&e.lazyUnloadConditions?.includes("unselected")&&s.forEach((t=>i.on(t,l))),document.addEventListener("visibilitychange",r)},destroy:function(){e.lazyLoadCallback&&o.forEach((t=>i.off(t,d))),e.lazyUnloadCallback&&s.forEach((t=>i.off(t,l))),document.removeEventListener("visibilitychange",r)}}}function x(){let t,i=[];const n=[];function a(e){const a=e.composedPath();for(const[o,s]of[...i.entries()].reverse())if(a.includes(s)){n[o]=e.detail,o!==t.selectedScrollSnap()&&e.stopPropagation();break}}function o(e){const a=e.composedPath();for(const[o,s]of i.entries())if(a.includes(s)){delete n[o],o!==t.selectedScrollSnap()&&e.stopPropagation();break}}function s(){const a=t.selectedScrollSnap(),o=n[a];o&&e(i[a],o)}return{name:"autoMediaLoadedInfo",options:{},init:function(e){t=e,i=t.slideNodes();for(const t of i)t.addEventListener("advanced-camera-card:media:loaded",a),t.addEventListener("advanced-camera-card:media:unloaded",o);t.on("init",s),t.containerNode().addEventListener("advanced-camera-card:carousel:force-select",s)},destroy:function(){for(const t of i)t.removeEventListener("advanced-camera-card:media:loaded",a),t.removeEventListener("advanced-camera-card:media:unloaded",o);t.off("init",s),t.containerNode().removeEventListener("advanced-camera-card:carousel:force-select",s)}}}class I{constructor(t){this._scrolling=!1,this._shouldReInitOnScrollStop=!1,this._scrollingStart=()=>{this._scrolling=!0},this._scrollingStop=()=>{this._scrolling=!1,this._shouldReInitOnScrollStop&&(this._shouldReInitOnScrollStop=!1,this._debouncedReInit())},this._debouncedReInit=i((()=>{this._scrolling=!1,this._shouldReInitOnScrollStop=!1,this._emblaApi?.reInit()}),500,{trailing:!0}),this._emblaApi=t,this._emblaApi.on("scroll",this._scrollingStart),this._emblaApi.on("settle",this._scrollingStop),this._emblaApi.on("destroy",this.destroy)}destroy(){this._emblaApi.off("scroll",this._scrollingStart),this._emblaApi.off("settle",this._scrollingStop),this._emblaApi.off("destroy",this.destroy)}reinit(){this._scrolling?this._shouldReInitOnScrollStop=!0:this._debouncedReInit()}}function S(){let t,e=null,n=null;const a=new Map,o=new ResizeObserver((function(t){let e=!1;for(const i of t){const t={height:i.contentRect.height,width:i.contentRect.width},n=a.get(i.target);t.width&&t.height&&(n?.height!==t.height||n?.width!==t.width)&&(a.set(i.target,t),e=!0)}e&&r()})),s=new IntersectionObserver((function(t){const i=t.some((t=>t.isIntersecting));if(i!==n){const t=i&&null!==n;n=i,t&&e?.reinit()}})),r=i((()=>function(){const{slideRegistry:i,options:{axis:n}}=t.internalEngine();if("y"===n)return;t.containerNode().style.removeProperty("max-height");const a=i[t.selectedScrollSnap()],o=t.slideNodes(),s=Math.max(...a.map((t=>o[t].getBoundingClientRect().height)));!isNaN(s)&&s>0&&(t.containerNode().style.maxHeight=`${s}px`);e?.reinit()}()),200,{trailing:!0});return{name:"autoSize",options:{},init:function(i){t=i,e=new I(t),s.observe(t.containerNode()),o.observe(t.containerNode());for(const e of t.slideNodes())o.observe(e);t.containerNode().addEventListener("advanced-camera-card:media:loaded",r),t.on("settle",r)},destroy:function(){s.disconnect(),o.disconnect(),e?.destroy(),t.containerNode().removeEventListener("advanced-camera-card:media:loaded",r),t.off("settle",r)}}}let A=class extends r{constructor(){super(...arguments),this.disabled=!1,this.label="",this._thumbnailError=!1,this._embedThumbnailTask=c(this,(()=>this.hass),(()=>this.thumbnail))}set controlConfig(t){t?.size&&this.style.setProperty("--advanced-camera-card-next-prev-size",`${t.size}px`),this._controlConfig=t}render(){if(this.disabled||!this._controlConfig||"none"==this._controlConfig.style)return d``;const t=!this.thumbnail||["chevrons","icons"].includes(this._controlConfig.style)||this._thumbnailError,e={controls:!0,left:"left"===this.side,right:"right"===this.side,thumbnails:!t,icons:t};if(t){const t=this.icon&&!this._thumbnailError&&"chevrons"!==this._controlConfig.style?this.icon:"left"===this.side?{icon:"mdi:chevron-left"}:{icon:"mdi:chevron-right"};return d` <ha-icon-button class="${l(e)}" .label=${this.label}>
        <advanced-camera-card-icon
          .hass=${this.hass}
          .icon=${t}
        ></advanced-camera-card-icon>
      </ha-icon-button>`}return h(this._embedThumbnailTask,(t=>t?d`<img
              src="${t}"
              class="${l(e)}"
              title="${this.label}"
              aria-label="${this.label}"
            />`:d``),{inProgressFunc:()=>d`<div class=${l(e)}></div>`,errorFunc:t=>{this._thumbnailError=!0}})}static get styles(){return p("ha-icon-button {\n  color: var(--advanced-camera-card-button-color);\n  background-color: var(--advanced-camera-card-button-background);\n  border-radius: 50%;\n  padding: 0px;\n  margin: 3px;\n  --ha-icon-display: block;\n  /* Buttons can always be clicked */\n  pointer-events: auto;\n}\n\n:host {\n  --advanced-camera-card-next-prev-size: 48px;\n  --advanced-camera-card-next-prev-size-hover: calc(\n    var(--advanced-camera-card-next-prev-size) * 2\n  );\n  --advanced-camera-card-left-position: 45px;\n  --advanced-camera-card-right-position: 45px;\n  --mdc-icon-button-size: var(--advanced-camera-card-next-prev-size);\n  --mdc-icon-size: calc(var(--mdc-icon-button-size) / 2);\n}\n\n.controls {\n  position: absolute;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.controls.left {\n  left: var(--advanced-camera-card-left-position);\n}\n\n.controls.right {\n  right: var(--advanced-camera-card-right-position);\n}\n\n.controls.icons {\n  top: calc(50% - var(--advanced-camera-card-next-prev-size) / 2);\n}\n\n.controls.thumbnails {\n  border-radius: 50%;\n  height: var(--advanced-camera-card-next-prev-size);\n  top: calc(50% - var(--advanced-camera-card-next-prev-size) / 2);\n  box-shadow: var(--advanced-camera-card-css-box-shadow, 0px 0px 20px 5px black);\n  transition: all 0.2s ease-out;\n  opacity: 0.8;\n  aspect-ratio: 1/1;\n}\n\n.controls.thumbnails:hover {\n  opacity: 1 !important;\n  height: var(--advanced-camera-card-next-prev-size-hover);\n  top: calc(50% - var(--advanced-camera-card-next-prev-size-hover) / 2);\n}\n\n.controls.left.thumbnails:hover {\n  left: calc(var(--advanced-camera-card-left-position) - (var(--advanced-camera-card-next-prev-size-hover) - var(--advanced-camera-card-next-prev-size)) / 2);\n}\n\n.controls.right.thumbnails:hover {\n  right: calc(var(--advanced-camera-card-right-position) - (var(--advanced-camera-card-next-prev-size-hover) - var(--advanced-camera-card-next-prev-size)) / 2);\n}")}};n([a({attribute:!1})],A.prototype,"side",void 0),n([a({attribute:!1})],A.prototype,"hass",void 0),n([o()],A.prototype,"_controlConfig",void 0),n([a({attribute:!1})],A.prototype,"thumbnail",void 0),n([a({attribute:!1})],A.prototype,"icon",void 0),n([a({attribute:!0,type:Boolean})],A.prototype,"disabled",void 0),n([a()],A.prototype,"label",void 0),n([o()],A.prototype,"_thumbnailError",void 0),A=n([s("advanced-camera-card-next-previous-control")],A);class ${constructor(t){this._config=null,this._hass=null,this._cameraManager=null,this._cameraID=null,this._host=t}setConfig(t){this._config=t??null,this._host.setAttribute("data-orientation",t?.orientation??"horizontal"),this._host.setAttribute("data-position",t?.position??"bottom-right"),this._host.setAttribute("style",Object.entries(t?.style??{}).map((([t,e])=>`${t}:${e}`)).join(";"))}getConfig(){return this._config}setCamera(t,e){this._cameraManager=t??null,this._cameraID=e??null}setForceVisibility(t){this._forceVisibility=t}handleAction(t,e){const i=e??t.detail.item??null;t.stopPropagation();const n=t.detail.action,a=u(n,i);a&&m(this._host,{actions:a,...i&&{config:i}})}shouldDisplay(){return void 0!==this._forceVisibility?this._forceVisibility:"auto"===this._config?.mode?!!this._cameraID&&!!this._cameraManager?.getCameraCapabilities(this._cameraID)?.hasPTZCapability():"on"===this._config?.mode}getPTZActions(){const t=this._cameraID?this._cameraManager?.getCameraCapabilities(this._cameraID):null,e=t&&t.hasPTZCapability(),i=t?.getPTZCapabilities(),n=t=>({start_tap_action:_({ptzAction:t?.ptzAction,ptzPhase:"start",ptzPreset:t?.preset}),end_tap_action:_({ptzAction:t?.ptzAction,ptzPhase:"stop",ptzPreset:t?.preset})}),a=t=>({tap_action:_({ptzAction:t?.ptzAction,ptzPreset:t?.preset})}),o={};e&&!i?.up||(o.up=n({ptzAction:"up"})),e&&!i?.down||(o.down=n({ptzAction:"down"})),e&&!i?.left||(o.left=n({ptzAction:"left"})),e&&!i?.right||(o.right=n({ptzAction:"right"})),e&&!i?.zoomIn||(o.zoom_in=n({ptzAction:"zoom_in"})),e&&!i?.zoomOut||(o.zoom_out=n({ptzAction:"zoom_out"})),e&&!i?.presets?.length||(o.home=a());for(const t of i?.presets??[])o.presets??=[],o.presets.push({preset:t,actions:a({preset:t,ptzAction:"preset"})});return o}}let L=class extends r{constructor(){super(...arguments),this._controller=new $(this),this._actions=null}willUpdate(t){t.has("config")&&this._controller.setConfig(this.config),(t.has("cameraManager")||t.has("cameraID"))&&this._controller.setCamera(this.cameraManager,this.cameraID),t.has("forceVisibility")&&this._controller.setForceVisibility(this.forceVisibility),(t.has("cameraID")||t.has("cameraManager"))&&(this._actions=this._controller.getPTZActions())}render(){if(!this._controller.shouldDisplay())return;const t=(t,e,i)=>{const n={[t]:!0,disabled:!i?.actions&&!i?.renderWithoutAction};return i?.actions||i?.renderWithoutAction?d`<advanced-camera-card-icon
            class=${l(n)}
            .icon=${{icon:e}}
            .title=${g(`elements.ptz.${t}`)}
            .actionHandler=${i.actions?f({hasHold:b(i.actions?.hold_action),hasDoubleClick:b(i.actions?.double_tap_action)}):void 0}
            @action=${t=>i.actions&&this._controller.handleAction(t,i.actions)}
          ></advanced-camera-card-icon>`:d``},e=this._actions?.presets?.length?this._actions.presets.map((t=>({title:v(t.preset),icon:"mdi:cctv",...t.actions,hold_action:{action:"perform-action",perform_action:"camera.preset_recall"}}))):null,i=this._controller.getConfig();return d` <div class="ptz">
      ${!i?.hide_pan_tilt&&(this._actions?.left||this._actions?.right||this._actions?.up||this._actions?.down)?d`<div class="ptz-move">
            ${t("right","mdi:arrow-right",{actions:this._actions?.right})}
            ${t("left","mdi:arrow-left",{actions:this._actions?.left})}
            ${t("up","mdi:arrow-up",{actions:this._actions?.up})}
            ${t("down","mdi:arrow-down",{actions:this._actions?.down})}
          </div>`:""}
      ${i?.hide_zoom||!this._actions?.zoom_in&&!this._actions?.zoom_out?d``:d` <div class="ptz-zoom">
            ${t("zoom_in","mdi:plus",{actions:this._actions.zoom_in})}
            ${t("zoom_out","mdi:minus",{actions:this._actions.zoom_out})}
          </div>`}
      ${i?.hide_home||!this._actions?.home&&!e?.length?"":d`<div class="ptz-presets">
            ${t("home","mdi:home",{actions:this._actions?.home})}
            ${e?.length?d`<advanced-camera-card-submenu
                  class="presets"
                  .hass=${this.hass}
                  .items=${e}
                  @action=${t=>this._controller.handleAction(t)}
                >
                  ${t("presets","vertical"===i?.orientation?"mdi:dots-vertical":"mdi:dots-horizontal",{renderWithoutAction:!0})}
                </advanced-camera-card-submenu>`:""}
          </div>`}
    </div>`}static get styles(){return p(":host {\n  position: absolute;\n  width: fit-content;\n  height: fit-content;\n  --advanced-camera-card-ptz-icon-size: 24px;\n}\n\n:host([data-position$=-left]) {\n  left: 5%;\n}\n\n:host([data-position$=-right]) {\n  right: 5%;\n}\n\n:host([data-position^=top-]) {\n  top: 5%;\n}\n\n:host([data-position^=bottom-]) {\n  bottom: 5%;\n}\n\n/*****************\n * Main Containers\n *****************/\n.ptz {\n  display: flex;\n  gap: 10px;\n  color: var(--light-primary-color);\n  opacity: 0.4;\n  transition: opacity 0.3s ease-in-out;\n}\n\n:host([data-orientation=vertical]) .ptz {\n  flex-direction: column;\n}\n\n:host([data-orientation=horizontal]) .ptz {\n  flex-direction: row;\n}\n\n.ptz:hover {\n  opacity: 1;\n}\n\n:host([data-orientation=vertical]) .ptz div {\n  width: calc(var(--advanced-camera-card-ptz-icon-size) * 3);\n}\n\n:host([data-orientation=horizontal]) .ptz div {\n  height: calc(var(--advanced-camera-card-ptz-icon-size) * 3);\n}\n\n.ptz-move,\n.ptz-zoom,\n.ptz-presets {\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.ptz-move {\n  height: calc(var(--advanced-camera-card-ptz-icon-size) * 3);\n  width: calc(var(--advanced-camera-card-ptz-icon-size) * 3);\n  border-radius: 50%;\n}\n\n:host([data-orientation=horizontal]) .ptz .ptz-zoom,\n:host([data-orientation=horizontal]) .ptz .ptz-presets {\n  width: calc(var(--advanced-camera-card-ptz-icon-size) * 1.5);\n}\n\n:host([data-orientation=vertical]) .ptz .ptz-zoom,\n:host([data-orientation=vertical]) .ptz .ptz-presets {\n  height: calc(var(--advanced-camera-card-ptz-icon-size) * 1.5);\n}\n\n.ptz-zoom,\n.ptz-presets {\n  border-radius: var(--ha-card-border-radius, 4px);\n}\n\n/***********\n * PTZ Icons\n ***********/\n.ptz-move advanced-camera-card-icon {\n  position: absolute;\n  --mdc-icon-size: var(--advanced-camera-card-ptz-icon-size);\n}\n\nadvanced-camera-card-icon:not(.disabled),\nadvanced-camera-card-submenu:not(.disabled) {\n  cursor: pointer;\n}\n\n.disabled {\n  color: var(--disabled-text-color);\n}\n\n.up {\n  top: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.down {\n  bottom: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.left {\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.right {\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.ptz-presets,\n.ptz-zoom {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n:host([data-orientation=vertical]) .ptz-presets,\n:host([data-orientation=vertical]) .ptz-zoom {\n  flex-direction: row;\n}\n\n:host([data-orientation=horizontal]) .ptz-presets,\n:host([data-orientation=horizontal]) .ptz-zoom {\n  flex-direction: column;\n}")}};function T(t){z(t,"live:error")}n([a({attribute:!1})],L.prototype,"config",void 0),n([a({attribute:!1})],L.prototype,"cameraManager",void 0),n([a({attribute:!1})],L.prototype,"cameraID",void 0),n([a({attribute:!1})],L.prototype,"forceVisibility",void 0),L=n([s("advanced-camera-card-ptz")],L);export{C as A,y as M,x as a,S as b,T as d};
