import{dF as t,eZ as e}from"./card-149caa14.js";const a=2,s=(t,e)=>{t._controlsHideTimer&&(t._controlsHideTimer.stop(),delete t._controlsHideTimer,delete t._controlsOriginalValue),t.controls=e},o=(e,a=1)=>{const o=e._controlsOriginalValue??e.controls;s(e,!1),e._controlsHideTimer??=new t,e._controlsOriginalValue=o;const i=()=>{s(e,o),e.removeEventListener("loadstart",i)};e.addEventListener("loadstart",i),e._controlsHideTimer.start(a,(()=>{s(e,o)}))};class i{constructor(t,e,a){this._host=t,this._getVideoCallback=e,this._getControlsDefaultCallback=a??null}async play(){await this._host.updateComplete;const t=this._getVideoCallback();if(t?.play)try{await t.play()}catch(e){if("NotAllowedError"===e.name&&!this.isMuted()){await this.mute();try{await t.play()}catch(t){}}}}async pause(){await this._host.updateComplete,this._getVideoCallback()?.pause()}async mute(){await this._host.updateComplete;const t=this._getVideoCallback();t&&(t.muted=!0)}async unmute(){await this._host.updateComplete;const t=this._getVideoCallback();t&&(t.muted=!1)}isMuted(){return this._getVideoCallback()?.muted??!0}async seek(t){await this._host.updateComplete;const e=this._getVideoCallback();e&&(o(e),e.currentTime=t)}async setControls(t){await this._host.updateComplete;const e=this._getVideoCallback(),a=t??this._getControlsDefaultCallback?.();e&&void 0!==a&&s(e,a)}isPaused(){return this._getVideoCallback()?.paused??!0}async getScreenshotURL(){await this._host.updateComplete;const t=this._getVideoCallback();return t?e(t):null}getFullscreenElement(){return this._getVideoCallback()??null}}const l=t=>void 0!==t.mozHasAudio?t.mozHasAudio:void 0===t.audioTracks||Boolean(t.audioTracks?.length);export{a as M,i as V,o as h,l as m,s};
