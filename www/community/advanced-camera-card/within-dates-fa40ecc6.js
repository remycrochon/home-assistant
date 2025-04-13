import{e8 as t,l as e,d9 as a,dv as s,dx as i,eh as n,df as r,dX as d,i as o,ej as u,ei as c,e1 as l}from"./card-02fb02cb.js";import{C as h,G as g}from"./engine-generic-ef9d49cd.js";import{a as _,V as m}from"./media-c9012082.js";class y extends h{constructor(){super(...arguments),this._entity=null}async initialize(a){const s=this.getConfig(),i=s.camera_entity?await a.entityRegistryManager.getEntity(a.hass,s.camera_entity):null;if(!i||!s.camera_entity)throw new t(e("error.no_camera_entity"),s);return this._entity=i,await super.initialize(a)}getEntity(){return this._entity}}class M extends g{constructor(t,e,a,s,i,n){super(e,n),this._entityRegistryManager=t,this._browseMediaManager=a,this._resolvedMediaCache=s,this._requestCache=i}generateDefaultEventQuery(t,e,s){return[{type:a.Event,cameraIDs:e,...s}]}async getMediaDownloadPath(t,e,a){const n=a.getContentID();if(!n)return null;const r=await s(t,n,this._resolvedMediaCache);return r?{endpoint:i(t,r.url)}:null}getQueryResultMaxAge(t){return t.type===a.Event?n:null}getMediaCapabilities(t){return{canFavorite:!1,canDownload:!0}}}class p extends _{constructor(t,e,a){super(t,e),this._browseMedia=a,a._metadata?.startDate?this._id=`${e}/${r(a._metadata.startDate,"yyyy-MM-dd HH:mm:ss")}`:this._id=a.media_content_id}getStartTime(){return this._browseMedia._metadata?.startDate??null}getEndTime(){return this._browseMedia._metadata?.endDate??null}getVideoContentType(){return m.MP4}getID(){return this._id}getContentID(){return this._browseMedia.media_content_id}getTitle(){const t=this.getStartTime();return t?d(t):this._browseMedia.title}getThumbnail(){return this._browseMedia.thumbnail}getWhat(){return this._browseMedia._metadata?.what??null}getScore(){return null}getTags(){return null}isGroupableWith(t){return this.getMediaType()===t.getMediaType()&&o(this.getWhere(),t.getWhere())&&o(this.getWhat(),t.getWhat())}}class w{static createEventViewMedia(t,e,a){return new p(t,a,e)}}const D=t=>{const e=new Map;for(const a of t){const t=a._metadata?.cameraID;if(!t)continue;const s=a.media_class===u?"clip":a.media_class===c?"snapshot":null;if(!s)continue;const i=w.createEventViewMedia(s,a,t),n=i.getID(),r=e.get(n);(!r||"snapshot"===r.getMediaType()&&"clip"===i.getMediaType())&&e.set(n,i)}return[...e.values()]},b=(t,e,a)=>!!t._metadata&&(e&&a?l({start:t._metadata.startDate,end:t._metadata.endDate},{start:e,end:a}):!e&&a?t._metadata.startDate<=a:!(e&&!a)||t._metadata.startDate>=e);export{y as B,M as a,D as g,b as i};
