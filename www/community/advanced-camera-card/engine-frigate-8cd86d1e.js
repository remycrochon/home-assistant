import{d5 as e,e2 as t,e3 as n,e4 as a,e5 as r,e6 as i,l as s,e7 as o,e8 as c,e9 as g,ea as l,dd as u,dX as m,k as d,i as f,dk as h,eb as p,du as _,db as y,d9 as b,ec as w,ed as D,ee as C,dU as v,j as T,de as I,dg as S,df as M}from"./card-d57b089c.js";import{C as F}from"./engine-86b0096c.js";import{C as z,G as $,g as N}from"./engine-generic-4543f2d0.js";import{a as E,V as R}from"./media-c9012082.js";import{s as Y,e as x}from"./startOfHour-7c4c7e24.js";function H(t){return e(1e3*t)}const j=n.object({camera:n.string(),end_time:n.number().nullable(),false_positive:n.boolean().nullable(),has_clip:n.boolean(),has_snapshot:n.boolean(),id:n.string(),label:n.string(),sub_label:n.string().nullable(),start_time:n.number(),top_score:n.number().nullable(),zones:n.string().array(),retain_indefinitely:n.boolean().optional()}).array(),U=n.object({hour:n.preprocess((e=>Number(e)),n.number().min(0).max(23)),duration:n.number().min(0),events:n.number().min(0)}),Z=n.object({day:n.preprocess((e=>"string"==typeof e?a(e):e),n.date()),events:n.number(),hours:U.array()}).array(),q=n.object({start_time:n.number(),end_time:n.number(),id:n.string()}).array(),W=n.object({success:n.boolean(),message:n.string()}),Q=n.object({camera:n.string(),day:n.string(),label:n.string(),sub_label:n.string().nullable(),zones:n.string().array()}).array(),k=n.object({name:n.string().optional(),features:n.string().array().optional(),presets:n.string().array().optional()}),P=n.object({camera:n.string(),snapshot:n.object({frame_time:n.number()}).nullable(),has_clip:n.boolean(),has_snapshot:n.boolean(),label:n.string(),current_zones:n.string().array()}),A=n.object({before:P,after:P,type:n.enum(["new","update","end"])});const O=async(e,t)=>await r(e,j,{type:"frigate/events/get",...t},!0),L=e=>"birdseye"===e.frigate.camera_name;class V extends z{constructor(e,t,n){super(e,t,n),this._frigateEventHandler=e=>{const t=!e.before.has_snapshot&&e.after.has_snapshot||e.before.snapshot?.frame_time!==e.after.snapshot?.frame_time,n=!e.before.has_clip&&e.after.has_clip,a=this.getConfig();if(a.frigate.zones?.length&&!a.frigate.zones.some((t=>e.after.current_zones.includes(t)))||a.frigate.labels?.length&&!a.frigate.labels.includes(e.after.label))return;const r=a.triggers.events;(r.includes("events")||r.includes("snapshots")&&t||r.includes("clips")&&n)&&this._eventCallback?.({fidelity:"high",cameraID:this.getID(),type:e.type,clip:n&&r.includes("clips"),snapshot:t&&r.includes("snapshots")})}}async initialize(e){return await this._initializeConfig(e.hass,e.entityRegistryManager),await this._initializeCapabilities(e.hass),this._capabilities?.has("trigger")&&await this._subscribeToEvents(e.hass,e.frigateEventWatcher),await super.initialize(e)}async _initializeConfig(e,n){const a=this.getConfig(),r=!!a.frigate?.camera_name,i=a.triggers.motion||a.triggers.occupancy;let g=null;const l=o(a);if(l&&(!r||i)&&(g=await n.getEntity(e,l),!g))throw new c(s("error.no_camera_entity"),a);if(g&&!r){const e=this._getFrigateCameraNameFromEntity(g);e&&(this._config.frigate.camera_name=e)}if(i){const r=await n.getMatchingEntities(e,(e=>e.config_entry_id===g?.config_entry_id&&!e.disabled_by&&e.entity_id.startsWith("binary_sensor.")));if(a.triggers.motion){const e=this._getMotionSensor(a,[...r.values()]);e&&a.triggers.entities.push(e)}if(a.triggers.occupancy){const e=this._getOccupancySensor(a,[...r.values()]);e&&a.triggers.entities.push(...e)}a.triggers.entities=(u=a.triggers.entities)&&u.length?t(u):[]}var u}async _initializeCapabilities(e){const t=this.getConfig(),n=g(this.getConfig()),a=await this._getPTZCapabilities(e,t),r=n||a?{...a,...n}:null,i=L(t);this._capabilities=new l({"favorite-events":!i,"favorite-recordings":!1,"remote-control-entity":!0,seek:!i,clips:!i,snapshots:!i,recordings:!i,live:!0,menu:!0,substream:!0,trigger:!0,...r&&{ptz:r}},{disable:t.capabilities?.disable,disableExcept:t.capabilities?.disable_except})}_getFrigateCameraNameFromEntity(e){if("frigate"===e.platform&&e.unique_id&&"string"==typeof e.unique_id){const t=e.unique_id.match(/:camera:(?<camera>[^:]+)$/);if(t&&t.groups)return t.groups.camera}return null}async _getPTZCapabilities(e,t){if(!t.frigate.camera_name||L(t))return null;let n=null;try{n=await(async(e,t,n)=>await r(e,k,{type:"frigate/ptz/info",instance_id:t,camera:n},!0))(e,t.frigate.client_id,t.frigate.camera_name)}catch(e){return u(e),null}const a=[...n.features?.includes("pt")?["continuous"]:[]],i=[...n.features?.includes("zoom")?["continuous"]:[]],s=n.presets;return a.length||i.length||s?.length?{...a&&{left:a,right:a,up:a,down:a},...i&&{zoomIn:i,zoomOut:i},...s&&{presets:s}}:null}_getMotionSensor(e,t){return e.frigate.camera_name?t.find((t=>"string"==typeof t.unique_id&&!!t.unique_id?.match(new RegExp(`:motion_sensor:${e.frigate.camera_name}`))))?.entity_id??null:null}_getOccupancySensor(e,t){const n=[],a=(e,a)=>{const r=t.find((t=>"string"==typeof t.unique_id&&!!t.unique_id?.match(new RegExp(`:occupancy_sensor:${e}_${a}`))))?.entity_id??null;r&&n.push(r)};if(e.frigate.camera_name){const t=e.frigate.zones?.length?e.frigate.zones:[e.frigate.camera_name],r=e.frigate.labels?.length?e.frigate.labels:["all"];for(const e of t)for(const t of r)a(e,t);if(n.length)return n}return null}async _subscribeToEvents(e,t){const n=this.getConfig();if(!n.triggers.events.length||!n.frigate.camera_name)return;
/* istanbul ignore next -- exercising the matcher is not possible when the
        test uses an event watcher -- @preserve */const a={instanceID:n.frigate.client_id,callback:e=>this._frigateEventHandler(e),matcher:e=>e.after.camera===n.frigate.camera_name};await t.subscribe(e,a),this._onDestroy((()=>t.unsubscribe(a)))}}class G{constructor(){this._requests=[],this._unsubscribeCallback={}}async subscribe(e,t){const n=!this._hasSubscribers(t.instanceID);this._requests.push(t),n&&(this._unsubscribeCallback[t.instanceID]=await e.connection.subscribeMessage((e=>this._receiveHandler(t.instanceID,e)),{type:"frigate/events/subscribe",instance_id:t.instanceID}))}async unsubscribe(e){this._requests=this._requests.filter((t=>t!==e)),this._hasSubscribers(e.instanceID)||(await this._unsubscribeCallback[e.instanceID](),delete this._unsubscribeCallback[e.instanceID])}_hasSubscribers(e){return!!this._requests.filter((t=>t.instanceID===e)).length}_receiveHandler(e,t){let n;try{n=JSON.parse(t)}catch(e){return void console.warn("Received non-JSON payload as Frigate event",t)}const a=A.safeParse(n);if(a.success)for(const t of this._requests)t.instanceID!==e||t.matcher&&!t.matcher(a.data)||t.callback(a.data);else console.warn("Received malformed Frigate event from Home Assistant",t)}}function J(e,t){const n=function(e){if(!B[e]){const t=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n="06/25/2014, 00:00:00"===t||"‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00"===t;B[e]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return B[e]}(t);return"formatToParts"in n?function(e,t){try{const n=e.formatToParts(t),a=[];for(let e=0;e<n.length;e++){const t=X[n[e].type];void 0!==t&&(a[t]=parseInt(n[e].value,10))}return a}catch(e){if(e instanceof RangeError)return[NaN];throw e}}(n,e):function(e,t){const n=e.format(t),a=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[parseInt(a[3],10),parseInt(a[1],10),parseInt(a[2],10),parseInt(a[4],10),parseInt(a[5],10),parseInt(a[6],10)]}(n,e)}const X={year:0,month:1,day:2,hour:3,minute:4,second:5};const B={};function K(e,t,n,a,r,i,s){const o=new Date(0);return o.setUTCFullYear(e,t,n),o.setUTCHours(a,r,i,s),o}const ee=36e5,te=6e4,ne={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function ae(e,t,n){if(!e)return 0;let a,r,i=ne.timezoneZ.exec(e);if(i)return 0;if(i=ne.timezoneHH.exec(e),i)return a=parseInt(i[1],10),ie(a)?-a*ee:NaN;if(i=ne.timezoneHHMM.exec(e),i){a=parseInt(i[2],10);const e=parseInt(i[3],10);return ie(a,e)?(r=Math.abs(a)*ee+e*te,"+"===i[1]?-r:r):NaN}if(function(e){if(se[e])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:e}),se[e]=!0,!0}catch(e){return!1}}(e)){t=new Date(t||Date.now());const a=n?t:function(e){return K(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}(t),r=re(a,e),i=n?r:function(e,t,n){const a=e.getTime();let r=a-t;const i=re(new Date(r),n);if(t===i)return t;r-=i-t;const s=re(new Date(r),n);if(i===s)return i;return Math.max(i,s)}(t,r,e);return-i}return NaN}function re(e,t){const n=J(e,t),a=K(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime();let r=e.getTime();const i=r%1e3;return r-=i>=0?i:1e3+i,a-r}function ie(e,t){return-23<=e&&e<=23&&(null==t||0<=t&&t<=59)}const se={};function oe(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+e-+t}const ce=36e5,ge=6e4,le=2,ue={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/};function me(e,t={}){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);const n=null==t.additionalDigits?le:Number(t.additionalDigits);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))return new Date(e.getTime());if("number"==typeof e||"[object Number]"===Object.prototype.toString.call(e))return new Date(e);if("[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);const a=function(e){const t={};let n,a=ue.dateTimePattern.exec(e);a?(t.date=a[1],n=a[3]):(a=ue.datePattern.exec(e),a?(t.date=a[1],n=a[2]):(t.date=null,n=e));if(n){const e=ue.timeZone.exec(n);e?(t.time=n.replace(e[1],""),t.timeZone=e[1].trim()):t.time=n}return t}(e),{year:r,restDateString:i}=function(e,t){if(e){const n=ue.YYY[t],a=ue.YYYYY[t];let r=ue.YYYY.exec(e)||a.exec(e);if(r){const t=r[1];return{year:parseInt(t,10),restDateString:e.slice(t.length)}}if(r=ue.YY.exec(e)||n.exec(e),r){const t=r[1];return{year:100*parseInt(t,10),restDateString:e.slice(t.length)}}}return{year:null}}(a.date,n),s=function(e,t){if(null===t)return null;let n,a,r;if(!e||!e.length)return n=new Date(0),n.setUTCFullYear(t),n;let i=ue.MM.exec(e);if(i)return n=new Date(0),a=parseInt(i[1],10)-1,_e(t,a)?(n.setUTCFullYear(t,a),n):new Date(NaN);if(i=ue.DDD.exec(e),i){n=new Date(0);const e=parseInt(i[1],10);return function(e,t){if(t<1)return!1;const n=pe(e);if(n&&t>366)return!1;if(!n&&t>365)return!1;return!0}(t,e)?(n.setUTCFullYear(t,0,e),n):new Date(NaN)}if(i=ue.MMDD.exec(e),i){n=new Date(0),a=parseInt(i[1],10)-1;const e=parseInt(i[2],10);return _e(t,a,e)?(n.setUTCFullYear(t,a,e),n):new Date(NaN)}if(i=ue.Www.exec(e),i)return r=parseInt(i[1],10)-1,ye(r)?de(t,r):new Date(NaN);if(i=ue.WwwD.exec(e),i){r=parseInt(i[1],10)-1;const e=parseInt(i[2],10)-1;return ye(r,e)?de(t,r,e):new Date(NaN)}return null}(i,r);if(null===s||isNaN(s.getTime()))return new Date(NaN);if(s){const e=s.getTime();let n,r=0;if(a.time&&(r=function(e){let t,n,a=ue.HH.exec(e);if(a)return t=parseFloat(a[1].replace(",",".")),be(t)?t%24*ce:NaN;if(a=ue.HHMM.exec(e),a)return t=parseInt(a[1],10),n=parseFloat(a[2].replace(",",".")),be(t,n)?t%24*ce+n*ge:NaN;if(a=ue.HHMMSS.exec(e),a){t=parseInt(a[1],10),n=parseInt(a[2],10);const e=parseFloat(a[3].replace(",","."));return be(t,n,e)?t%24*ce+n*ge+1e3*e:NaN}return null}(a.time),null===r||isNaN(r)))return new Date(NaN);if(a.timeZone||t.timeZone){if(n=ae(a.timeZone||t.timeZone,new Date(e+r)),isNaN(n))return new Date(NaN)}else n=oe(new Date(e+r)),n=oe(new Date(e+r+n));return new Date(e+r+n)}return new Date(NaN)}function de(e,t,n){t=t||0,n=n||0;const a=new Date(0);a.setUTCFullYear(e,0,4);const r=7*t+n+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+r),a}const fe=[31,28,31,30,31,30,31,31,30,31,30,31],he=[31,29,31,30,31,30,31,31,30,31,30,31];function pe(e){return e%400==0||e%4==0&&e%100!=0}function _e(e,t,n){if(t<0||t>11)return!1;if(null!=n){if(n<1)return!1;const a=pe(e);if(a&&n>he[t])return!1;if(!a&&n>fe[t])return!1}return!0}function ye(e,t){return!(e<0||e>52)&&(null==t||!(t<0||t>6))}function be(e,t,n){return!(e<0||e>=25)&&((null==t||!(t<0||t>=60))&&(null==n||!(n<0||n>=60)))}const we=e=>{const t=Intl.DateTimeFormat().resolvedOptions().timeZone,n=Math.round(e.end_time?e.end_time-e.start_time:Date.now()/1e3-e.start_time),a=null!==e.top_score?` ${Math.round(100*e.top_score)}%`:"";return`${m(function(e,t,n){const a=ae(t,e=me(e,n),!0),r=new Date(e.getTime()-a),i=new Date(0);return i.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),i.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),i}(1e3*e.start_time,t))} [${n}s, ${d(e.label)}${a}]`};class De extends E{constructor(e,t,n,a,r,i){super(e,t),this._event=n,this._contentID=a,this._thumbnail=r,this._subLabels=i??null}getStartTime(){return H(this._event.start_time)}getEndTime(){return this._event.end_time?H(this._event.end_time):null}inProgress(){return!this.getEndTime()}getVideoContentType(){return R.HLS}getID(){return this._event.id}getContentID(){return this._contentID}getTitle(){return we(this._event)}getThumbnail(){return this._thumbnail}isFavorite(){return this._event.retain_indefinitely??null}setFavorite(e){this._event.retain_indefinitely=e}getWhat(){return[this._event.label]}getWhere(){const e=this._event.zones;return e.length?e:null}getScore(){return this._event.top_score}getTags(){return this._subLabels}isGroupableWith(e){return this.getMediaType()===e.getMediaType()&&f(this.getWhere(),e.getWhere())&&f(this.getWhat(),e.getWhat())}}class Ce extends E{constructor(e,t,n,a,r,i){super(e,t),this._recording=n,this._id=a,this._contentID=r,this._title=i}getID(){return this._id}getStartTime(){return this._recording.startTime}getEndTime(){return this._recording.endTime}inProgress(){return!this.getEndTime()}getVideoContentType(){return R.HLS}getContentID(){return this._contentID}getTitle(){return this._title}getEventCount(){return this._recording.events}}class ve{static createEventViewMedia(e,t,n,a,r){return"clip"===e&&!a.has_clip||"snapshot"===e&&!a.has_snapshot||!n.frigate.client_id||!n.frigate.camera_name?null:new De(e,t,a,((e,t,n,a)=>`media-source://frigate/${e}/event/${a}/${t}/${n.id}`)(n.frigate.client_id,n.frigate.camera_name,a,"clip"===e?"clips":"snapshots"),((e,t)=>`/api/frigate/${e}/thumbnail/${t.id}`)(n.frigate.client_id,a),r)}static createRecordingViewMedia(e,t,n,a){return n.frigate.client_id&&n.frigate.camera_name?new Ce("recording",e,t,((e,t)=>`${e.frigate?.client_id??""}/${e.frigate.camera_name??""}/${t.startTime.getTime()}/${t.endTime.getTime()}`)(n,t),((e,t,n)=>["media-source://frigate",e,"recordings",t,`${n.startTime.getFullYear()}-${String(n.startTime.getMonth()+1).padStart(2,"0")}-${String(String(n.startTime.getDate()).padStart(2,"0"))}`,String(n.startTime.getHours()).padStart(2,"0")].join("/"))(n.frigate.client_id,n.frigate.camera_name,t),((e,t)=>`${e} ${m(t.startTime)}`)(a,t)):null}}class Te{static isFrigateMedia(e){return this.isFrigateEvent(e)||this.isFrigateRecording(e)}static isFrigateEvent(e){return e instanceof De}static isFrigateRecording(e){return e instanceof Ce}}class Ie{static isFrigateEventQueryResults(e){return e.engine===p.Frigate&&e.type===C.Event}static isFrigateRecordingQueryResults(e){return e.engine===p.Frigate&&e.type===C.Recording}static isFrigateRecordingSegmentsResults(e){return e.engine===p.Frigate&&e.type===C.RecordingSegments}}class Se extends ${constructor(e,t,n,a,r){super(t,r),this._throttledSegmentGarbageCollector=h(this._garbageCollectSegments.bind(this),36e5,{leading:!1,trailing:!0}),this._entityRegistryManager=e,this._frigateEventWatcher=new G,this._recordingSegmentsCache=n,this._requestCache=a}getEngineType(){return p.Frigate}async createCamera(e,t){const n=new V(t,this,{eventCallback:this._eventCallback});return await n.initialize({hass:e,entityRegistryManager:this._entityRegistryManager,stateWatcher:this._stateWatcher,frigateEventWatcher:this._frigateEventWatcher})}async getMediaDownloadPath(e,t,n){return Te.isFrigateEvent(n)?{endpoint:`/api/frigate/${t.frigate.client_id}/notifications/${n.getID()}/`+(_.isClip(n)?"clip.mp4":"snapshot.jpg")+"?download=true",sign:!0}:Te.isFrigateRecording(n)?{endpoint:`/api/frigate/${t.frigate.client_id}/recording/${t.frigate.camera_name}/start/${Math.floor(n.getStartTime().getTime()/1e3)}/end/${Math.floor(n.getEndTime().getTime()/1e3)}?download=true`,sign:!0}:null}generateDefaultEventQuery(e,t,n){const a=[...e.getCameraConfigs(t)],r=y(a.map((e=>e?.frigate.zones)),f),i=y(a.map((e=>e?.frigate.labels)),f);if(1===r.length&&1===i.length)return[{type:b.Event,cameraIDs:t,...i[0]&&{what:new Set(i[0])},...r[0]&&{where:new Set(r[0])},...n}];const s=[];for(const a of t){const t=e.getCameraConfig(a);t&&s.push({type:b.Event,cameraIDs:new Set([a]),...t.frigate.labels&&{what:new Set(t.frigate.labels)},...t.frigate.zones&&{where:new Set(t.frigate.zones)},...n})}return s.length?s:null}generateDefaultRecordingQuery(e,t,n){return[{type:b.Recording,cameraIDs:t,...n}]}generateDefaultRecordingSegmentsQuery(e,t,n){return n.start&&n.end?[{type:b.RecordingSegments,cameraIDs:t,start:n.start,end:n.end,...n}]:null}async favoriteMedia(e,t,n,a){Te.isFrigateEvent(n)&&(await async function(e,t,n,a){const o={type:"frigate/event/retain",instance_id:t,event_id:n,retain:a},c=await r(e,W,o,!0);if(!c.success)throw new i(s("error.failed_retain"),{request:o,response:c})}(e,t.frigate.client_id,n.getID(),a),n.setFavorite(a))}_buildInstanceToCameraIDMapFromQuery(e,t){const n=new Map;for(const a of t){const t=this._getQueryableCameraConfig(e,a),r=t?.frigate.client_id;r&&(n.has(r)||n.set(r,new Set),n.get(r)?.add(a))}return n}_getFrigateCameraNamesForCameraIDs(e,t){const n=new Set;for(const a of t){const t=this._getQueryableCameraConfig(e,a);t?.frigate.camera_name&&n.add(t.frigate.camera_name)}return n}async getEvents(e,t,n,a){const r=new Map,i=async(i,s)=>{if(!s||!s.size)return;const o={...n,cameraIDs:s},c=a?.useCache??1?this._requestCache.get(o):null;if(c)return void r.set(n,c);const g={instance_id:i,cameras:Array.from(this._getFrigateCameraNamesForCameraIDs(t,s)),...n.what&&{labels:Array.from(n.what)},...n.where&&{zones:Array.from(n.where)},...n.tags&&{sub_labels:Array.from(n.tags)},...n.end&&{before:Math.floor(n.end.getTime()/1e3)},...n.start&&{after:Math.floor(n.start.getTime()/1e3)},...n.limit&&{limit:n.limit},...n.hasClip&&{has_clip:n.hasClip},...n.hasSnapshot&&{has_snapshot:n.hasSnapshot},...n.favorite&&{favorites:n.favorite},limit:n?.limit??F},l={type:C.Event,engine:p.Frigate,instanceID:i,events:await O(e,g),expiry:v(new Date,{seconds:60}),cached:!1};(a?.useCache??1)&&this._requestCache.set(n,{...l,cached:!0},l.expiry),r.set(o,l)},s=this._buildInstanceToCameraIDMapFromQuery(t,n.cameraIDs);return await Promise.all(Array.from(s.keys()).map((e=>i(e,s.get(e))))),r.size?r:null}async getRecordings(e,t,n,a){const i=new Map,s=async(n,s)=>{const o={...n,cameraIDs:new Set([s])},c=a?.useCache??1?this._requestCache.get(o):null;if(c)return void i.set(o,c);const g=this._getQueryableCameraConfig(t,s);if(!g||!g.frigate.camera_name)return;const l=await(async(e,t,n)=>await r(e,Z,{type:"frigate/recordings/summary",instance_id:t,camera:n,timezone:e.config.time_zone},!0))(e,g.frigate.client_id,g.frigate.camera_name);let u=[];for(const e of l??[])for(const t of e.hours){const n=v(e.day,{hours:t.hour}),a=Y(n),r=x(n);(!o.start||a>=o.start)&&(!o.end||r<=o.end)&&u.push({cameraID:s,startTime:a,endTime:r,events:t.events})}void 0!==o.limit&&(u=I(u,(e=>e.startTime),"desc").slice(0,o.limit));const m={type:C.Recording,engine:p.Frigate,instanceID:g.frigate.client_id,recordings:u,expiry:v(new Date,{seconds:60}),cached:!1};(a?.useCache??1)&&this._requestCache.set(o,{...m,cached:!0},m.expiry),i.set(o,m)};return await Promise.all(Array.from(n.cameraIDs).map((e=>s(n,e)))),i.size?i:null}async getRecordingSegments(e,t,n,a){const i=new Map,s=async(n,s)=>{const o={...n,cameraIDs:new Set([s])},c=this._getQueryableCameraConfig(t,s);if(!c||!c.frigate.camera_name)return;const g={start:o.start,end:o.end},l=a?.useCache??1?this._recordingSegmentsCache.get(s,g):null;if(l)return void i.set(o,{type:C.RecordingSegments,engine:p.Frigate,instanceID:c.frigate.client_id,segments:l,cached:!0});const u={instance_id:c.frigate.client_id,camera:c.frigate.camera_name,after:Math.floor(o.start.getTime()/1e3),before:Math.floor(o.end.getTime()/1e3)},m=await(async(e,t)=>await r(e,q,{type:"frigate/recordings/get",...t},!0))(e,u);(a?.useCache??1)&&this._recordingSegmentsCache.add(s,g,m),i.set(o,{type:C.RecordingSegments,engine:p.Frigate,instanceID:c.frigate.client_id,segments:m,cached:!1})};return await Promise.all(Array.from(n.cameraIDs).map((e=>s(n,e)))),w((()=>this._throttledSegmentGarbageCollector(e,t))),i.size?i:null}_getCameraIDMatch(e,t,n,a){if(1===t.cameraIDs.size)return[...t.cameraIDs][0];for(const[t,r]of e.getCameraConfigEntries())if(r.frigate.client_id===n&&r.frigate.camera_name===a)return t;return null}generateMediaFromEvents(e,t,n,a){if(!Ie.isFrigateEventQueryResults(a))return null;const r=[];for(const e of a.events){const i=this._getCameraIDMatch(t,n,a.instanceID,e.camera);if(!i)continue;const s=this._getQueryableCameraConfig(t,i);if(!s)continue;let o=null;if(n.hasClip||n.hasSnapshot||!e.has_clip&&!e.has_snapshot?n.hasSnapshot&&e.has_snapshot?o="snapshot":n.hasClip&&e.has_clip&&(o="clip"):o=e.has_clip?"clip":"snapshot",!o)continue;const c=ve.createEventViewMedia(o,i,s,e,e.sub_label?this._splitSubLabels(e.sub_label):void 0);c&&r.push(c)}return r}generateMediaFromRecordings(e,t,n,a){if(!Ie.isFrigateRecordingQueryResults(a))return null;const r=[];for(const n of a.recordings){const a=this._getQueryableCameraConfig(t,n.cameraID);if(!a)continue;const i=ve.createRecordingViewMedia(n.cameraID,n,a,this.getCameraMetadata(e,a).title);i&&r.push(i)}return r}getQueryResultMaxAge(e){return e.type===b.Event||e.type===b.Recording?60:null}async getMediaSeekTime(e,t,n,a,r){const i=n.getStartTime(),s=n.getEndTime();if(!i||!s||a<i||a>s)return null;const o=n.getCameraID(),c={cameraIDs:new Set([o]),start:i,end:s,type:b.RecordingSegments},g=await this.getRecordingSegments(e,t,c,r);return g?this._getSeekTimeInSegments(i,a,Array.from(g.values())[0].segments):null}_getQueryableCameraConfig(e,t){const n=e.getCameraConfig(t);return!n||L(n)?null:n}_splitSubLabels(e){return e.split(",").map((e=>e.trim()))}async getMediaMetadata(e,t,n,a){const i=new Map;if((a?.useCache??1)&&this._requestCache.has(n)){const e=this._requestCache.get(n);if(e)return i.set(n,e),i}const s=new Set,o=new Set,c=new Set,g=new Set,l=this._buildInstanceToCameraIDMapFromQuery(t,n.cameraIDs),u=async(n,a)=>{const i=this._getFrigateCameraNamesForCameraIDs(t,a);for(const t of await(async(e,t)=>await r(e,Q,{type:"frigate/events/summary",instance_id:t,timezone:e.config.time_zone},!0))(e,n))i.has(t.camera)&&(t.label&&s.add(t.label),t.zones.length&&t.zones.forEach(o.add,o),t.day&&c.add(t.day),t.sub_label&&this._splitSubLabels(t.sub_label).forEach(g.add,g))},m=async n=>{const r=await this.getRecordings(e,t,{type:b.Recording,cameraIDs:n},a);if(r)for(const e of r.values())if(Ie.isFrigateRecordingQueryResults(e))for(const t of e.recordings)c.add(S(t.startTime))};await D([...l.entries()],(([e,t])=>(async()=>{await Promise.all([u(e,t),m(t)])})()));const d={type:C.MediaMetadata,engine:p.Frigate,metadata:{...s.size&&{what:s},...o.size&&{where:o},...c.size&&{days:c},...g.size&&{tags:g}},expiry:v(new Date,{seconds:60}),cached:!1};return(a?.useCache??1)&&this._requestCache.set(n,{...d,cached:!0},d.expiry),i.set(n,d),i}async _garbageCollectSegments(e,t){const n=this._recordingSegmentsCache.getCameraIDs(),a={cameraIDs:new Set(n),type:b.Recording},r=(e,t)=>`${e}/${t.getDate()}/${t.getHours()}`,i=await this.getRecordings(e,t,a);if(i)for(const[e,t]of i){if(!Ie.isFrigateRecordingQueryResults(t))continue;const n=new Set;for(const e of t.recordings)n.add(r(e.cameraID,e.startTime));const a=Array.from(e.cameraIDs)[0];this._recordingSegmentsCache.expireMatches(a,(e=>{const t=r(a,H(e.start_time));return!n.has(t)}))}}_getSeekTimeInSegments(e,t,n){if(!n.length)return null;let a=0;for(const r of n){const n=H(r.start_time);if(n>t)break;const i=H(r.end_time),s=n<e?e:n;a+=(i>t?t:i).getTime()-s.getTime()}return a/1e3}getMediaCapabilities(e){return{canFavorite:_.isEvent(e),canDownload:!0}}getCameraMetadata(e,t){return{...super.getCameraMetadata(e,t),title:t.title??T(e,t.camera_entity)??T(e,t.webrtc_card?.entity)??d(t.frigate?.camera_name)??t.id??"",engineIcon:"frigate"}}getCameraEndpoints(e,t){const n=(()=>{if(!e.frigate.url)return null;if(!e.frigate.camera_name)return{endpoint:e.frigate.url};const n=`${e.frigate.url}/cameras/`+e.frigate.camera_name;if("live"===t?.view)return{endpoint:n};const a=`${e.frigate.url}/events?camera=`+e.frigate.camera_name,r=`${e.frigate.url}/recording/`+e.frigate.camera_name;switch(t?.media?.getMediaType()){case"clip":case"snapshot":return{endpoint:a};case"recording":const e=t.media.getStartTime();if(e)return{endpoint:r+M(e,"yyyy-MM-dd/HH")}}switch(t?.view){case"clip":case"clips":case"snapshots":case"snapshot":return{endpoint:a};case"recording":case"recordings":return{endpoint:r}}return{endpoint:n}})(),a=N(e,{url:e.go2rtc?.url??`/api/frigate/${e.frigate.client_id}/mse`,stream:e.go2rtc?.stream??e.frigate.camera_name}),r={endpoint:`/api/frigate/${e.frigate.client_id}/jsmpeg/${e.frigate.camera_name}`,sign:!0};return{...super.getCameraEndpoints(e,t),...n&&{ui:n},...a&&{go2rtc:a},...r&&{jsmpeg:r}}}async executePTZAction(e,t,n,a){const r=t.camera_entity;("preset"!==n||a?.preset)&&await e.callService("frigate","ptz",{entity_id:r,action:"stop"===a?.phase?"stop":"zoom_in"===n||"zoom_out"===n?"zoom":"preset"===n?"preset":"move",..."stop"!==a?.phase&&{argument:"zoom_in"===n?"in":"zoom_out"===n?"out":"preset"===n?a?.preset:n}})}}export{Se as FrigateCameraManagerEngine};
