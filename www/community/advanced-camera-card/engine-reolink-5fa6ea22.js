import{l as e,e8 as t,ef as a,eb as n,ej as s,eg as r,dU as i,d6 as o,ea as c,e9 as l,ek as h,ed as u,ee as d,eh as g,de as m,dg as _}from"./card-02fb02cb.js";import{B as p,a as y,i as f,g as w}from"./within-dates-fa40ecc6.js";import{C}from"./engine-86b0096c.js";import{p as M}from"./parse-8d4c79b1.js";import{e as k}from"./endOfDay-78898fd4.js";import"./engine-generic-ef9d49cd.js";import"./media-c9012082.js";class D extends t{}class b extends p{constructor(){super(...arguments),this._channel=null}async initialize(e){return await super.initialize(e),this._initializeChannel(),this}_initializeChannel(){const t=this._entity?.unique_id,a=t?String(t).match(/(.*)_(?<channel>\d+)/):null,n=a&&a.groups?.channel?Number(a.groups.channel):null;if(null===n)throw new D(e("error.camera_initialization_reolink"),this.getConfig());this._channel=n}getChannel(){return this._channel}getProxyConfig(){return{...super.getProxyConfig(),media:"auto"===this._config.proxy.media||this._config.proxy.media,ssl_verification:"auto"!==this._config.proxy.ssl_verification&&this._config.proxy.ssl_verification,ssl_ciphers:"auto"===this._config.proxy.ssl_ciphers?"intermediate":this._config.proxy.ssl_ciphers}}}class x{static isReolinkEventQueryResults(e){return e.engine===n.Reolink&&e.type===d.Event}}class v extends y{constructor(){super(...arguments),this._cache=new a}getEngineType(){return n.Reolink}_reolinkFileMetadataGenerator(e,t,a){
/* istanbul ignore next: This situation cannot happen as the directory would
        be rejected by _reolinkDirectoryMetadataGenerator if there was no start date
        -- @preserve */
if(!a?._metadata?.startDate||t.media_class!==s)return null;const n=t.title.split(/ +/),o=M(n[0],"HH:mm:ss",a._metadata.startDate);if(!r(o))return null;const c=n.length>1?n[1].match(/(?<hours>\d+):(?<minutes>\d+):(?<seconds>\d+)/):null,l=c?.groups?{hours:Number(c.groups.hours),minutes:Number(c.groups.minutes),seconds:Number(c.groups.seconds)}:null,h=n.length>2?n.splice(2).map((e=>e.toLowerCase())).sort():null;return{cameraID:e,startDate:o,endDate:l?i(o,l):o,...h&&{what:h}}}_reolinkDirectoryMetadataGenerator(e,t){const a=M(t.title,"yyyy/M/d",new Date);return r(a)?{cameraID:e,startDate:o(a),endDate:k(a)}:null}_reolinkCameraMetadataGenerator(e){const t=e.media_content_id.match(/^media-source:\/\/reolink\/CAM\|(?<configEntryID>.+)\|(?<channel>\d+)$/);return t?.groups?{configEntryID:t.groups.configEntryID,channel:Number(t.groups.channel)}:null}async createCamera(e,t){const a=new b(t,this,{capabilities:new c({"favorite-events":!1,"favorite-recordings":!1,"remote-control-entity":!0,clips:!0,live:!0,menu:!0,recordings:!1,seek:!1,snapshots:!1,substream:!0,trigger:!0,ptz:l(t)??void 0},{disable:t.capabilities?.disable,disableExcept:t.capabilities?.disable_except}),eventCallback:this._eventCallback});return await a.initialize({entityRegistryManager:this._entityRegistryManager,hass:e,stateWatcher:this._stateWatcher})}async _getMatchingDirectories(e,t,a,n){const s=t.getConfig(),r=t.getEntity(),i=r?.config_entry_id;if(null===t.getChannel()||!i)return null;const o=await this._browseMediaManager.walkBrowseMedias(e,[{targets:["media-source://reolink"],metadataGenerator:(e,t)=>this._reolinkCameraMetadataGenerator(e),matcher:e=>e._metadata?.channel===t.getChannel()&&e._metadata?.configEntryID===i}],{...!1!==n?.useCache&&{cache:this._cache}});return o?.length?await this._browseMediaManager.walkBrowseMedias(e,[{targets:[`media-source://reolink/RES|${i}|${t.getChannel()}|`+("low"===s.reolink?.media_resolution?"sub":"main")],metadataGenerator:(e,a)=>this._reolinkDirectoryMetadataGenerator(t.getID(),e),matcher:e=>e.can_expand&&f(e,a?.start,a?.end),sorter:e=>h(e)}],{...!1!==n?.useCache&&{cache:this._cache}}):null}async getEvents(e,t,a,s){if(a.favorite||a.tags?.size||a.what?.size||a.where?.size||a.hasSnapshot)return null;const r=new Map,i=async i=>{const o={...a,cameraIDs:new Set([i])},c=s?.useCache??1?this._requestCache.get(o):null;if(c)return void r.set(o,c);const l=t.getCamera(i),u=l&&l instanceof b?await this._getMatchingDirectories(e,l,o,s):null,g=o.limit??C;let _=[];u?.length&&(_=await this._browseMediaManager.walkBrowseMedias(e,[{targets:u,concurrency:1,metadataGenerator:(e,t)=>this._reolinkFileMetadataGenerator(i,e,t),earlyExit:e=>e.length>=g,matcher:e=>!e.can_expand&&f(e,o.start,o.end),sorter:e=>h(e)}],{...!1!==s?.useCache&&{cache:this._cache}}));const p=m(_,(e=>e._metadata?.startDate),"desc").slice(0,g),y={type:d.Event,engine:n.Reolink,browseMedia:p};(s?.useCache??1)&&this._requestCache.set(o,{...y,cached:!0},y.expiry),r.set(o,y)};return await u(a.cameraIDs,(e=>i(e))),r}generateMediaFromEvents(e,t,a,n){return x.isReolinkEventQueryResults(n)?w(n.browseMedia):null}async getMediaMetadata(e,t,a,s){const r=new Map,o=s?.useCache??1?this._requestCache.get(a):null;if(o)return r.set(a,o),r;const c=new Set,l=async a=>{const n=t.getCamera(a);if(!(n&&n instanceof b))return;const r=await this._getMatchingDirectories(e,n,null,s);for(const e of r??[])
/* istanbul ignore next: This situation cannot happen as the directory
                will not match without metadata -- @preserve */
e._metadata&&c.add(_(e._metadata?.startDate))};await u(a.cameraIDs,(e=>l(e)));const h={type:d.MediaMetadata,engine:n.Reolink,metadata:{...c.size&&{days:c}},expiry:i(new Date,{seconds:g}),cached:!1};return(s?.useCache??1)&&this._requestCache.set(a,{...h,cached:!0},h.expiry),r.set(a,h),r}getCameraMetadata(e,t){return{...super.getCameraMetadata(e,t),engineIcon:"reolink"}}getCameraEndpoints(e,t){const a=e.reolink?.url?{endpoint:e.reolink.url}:null;return{...super.getCameraEndpoints(e,t),...a&&{ui:a}}}}export{v as ReolinkCameraManagerEngine,x as ReolinkQueryResultsClassifier};
