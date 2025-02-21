import{L as ee,_ as L,b as te,c as re,d as S,C as D,r as ne,E as oe,i as F,e as ie,D as w,f as se,u as ae,h as ce,a as K,g as le,j as ue,k as de,G as he,l as fe}from"./client.rEyB5whX.js";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=new Map,z={activated:!1,tokenObservers:[]},ge={initialized:!1,enabled:!1};function l(e){return A.get(e)||Object.assign({},z)}function pe(e,t){return A.set(e,t),A.get(e)}function E(){return ge}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="https://content-firebaseappcheck.googleapis.com/v1",ke="exchangeRecaptchaV3Token",Te="exchangeDebugToken",O={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},we=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,r,n,o,i){if(this.operation=t,this.retryPolicy=r,this.getWaitDuration=n,this.lowerBound=o,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=o,o>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new w,this.pending.promise.catch(r=>{}),await me(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new w,this.pending.promise.catch(r=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(r){this.retryPolicy(r)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const r=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),r}}}function me(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},u=new oe("appCheck","AppCheck",Ae);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e=!1){var t;return e?(t=self.grecaptcha)===null||t===void 0?void 0:t.enterprise:self.grecaptcha}function b(e){if(!l(e).activated)throw u.create("use-before-activation",{appName:e.name})}function q(e){const t=Math.round(e/1e3),r=Math.floor(t/(3600*24)),n=Math.floor((t-r*3600*24)/3600),o=Math.floor((t-r*3600*24-n*3600)/60),i=t-r*3600*24-n*3600-o*60;let s="";return r&&(s+=k(r)+"d:"),n&&(s+=k(n)+"h:"),s+=k(o)+"m:"+k(i)+"s",s}function k(e){return e===0?"00":e>=10?e.toString():"0"+e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _({url:e,body:t},r){const n={"Content-Type":"application/json"},o=r.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&(n["X-Firebase-Client"]=d)}const i={method:"POST",body:JSON.stringify(t),headers:n};let s;try{s=await fetch(e,i)}catch(d){throw u.create("fetch-network-error",{originalErrorMessage:d?.message})}if(s.status!==200)throw u.create("fetch-status-error",{httpStatus:s.status});let c;try{c=await s.json()}catch(d){throw u.create("fetch-parse-error",{originalErrorMessage:d?.message})}const a=c.ttl.match(/^([\d.]+)(s)$/);if(!a||!a[2]||isNaN(Number(a[1])))throw u.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${c.ttl}`});const f=Number(a[1])*1e3,I=Date.now();return{token:c.token,expireTimeMillis:I+f,issuedAtTimeMillis:I}}function ve(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${W}/projects/${r}/apps/${n}:${ke}?key=${o}`,body:{recaptcha_v3_token:t}}}function j(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${W}/projects/${r}/apps/${n}:${Te}?key=${o}`,body:{debug_token:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="firebase-app-check-database",_e=1,g="firebase-app-check-store",G="debug-token";let T=null;function U(){return T||(T=new Promise((e,t)=>{try{const r=indexedDB.open(be,_e);r.onsuccess=n=>{e(n.target.result)},r.onerror=n=>{var o;t(u.create("storage-open",{originalErrorMessage:(o=n.target.error)===null||o===void 0?void 0:o.message}))},r.onupgradeneeded=n=>{const o=n.target.result;switch(n.oldVersion){case 0:o.createObjectStore(g,{keyPath:"compositeKey"})}}}catch(r){t(u.create("storage-open",{originalErrorMessage:r?.message}))}}),T)}function Ce(e){return X(Y(e))}function Pe(e,t){return V(Y(e),t)}function ye(e){return V(G,e)}function Re(){return X(G)}async function V(e,t){const n=(await U()).transaction(g,"readwrite"),i=n.objectStore(g).put({compositeKey:e,value:t});return new Promise((s,c)=>{i.onsuccess=a=>{s()},n.onerror=a=>{var f;c(u.create("storage-set",{originalErrorMessage:(f=a.target.error)===null||f===void 0?void 0:f.message}))}})}async function X(e){const r=(await U()).transaction(g,"readonly"),o=r.objectStore(g).get(e);return new Promise((i,s)=>{o.onsuccess=c=>{const a=c.target.result;i(a?a.value:void 0)},r.onerror=c=>{var a;s(u.create("storage-get",{originalErrorMessage:(a=c.target.error)===null||a===void 0?void 0:a.message}))}})}function Y(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=new ee("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(e){if(F()){let t;try{t=await Ce(e)}catch(r){p.warn(`Failed to read token from IndexedDB. Error: ${r}`)}return t}}function m(e,t){return F()?Pe(e,t).catch(r=>{p.warn(`Failed to write token to IndexedDB. Error: ${r}`)}):Promise.resolve()}async function Se(){let e;try{e=await Re()}catch{}if(e)return e;{const t=ae();return ye(t).catch(r=>p.warn(`Failed to persist debug token to IndexedDB. Error: ${r}`)),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return E().enabled}async function P(){const e=E();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function De(){const e=ie(),t=E();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const r=new w;t.token=r,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?r.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):r.resolve(Se())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe={error:"UNKNOWN_ERROR"};function Me(e){return ce.encodeString(JSON.stringify(e),!1)}async function v(e,t=!1){const r=e.app;b(r);const n=l(r);let o=n.token,i;if(o&&!h(o)&&(n.token=void 0,o=void 0),!o){const a=await n.cachedTokenPromise;a&&(h(a)?o=a:await m(r,void 0))}if(!t&&o&&h(o))return{token:o.token};let s=!1;if(C()){n.exchangeTokenPromise||(n.exchangeTokenPromise=_(j(r,await P()),e.heartbeatServiceProvider).finally(()=>{n.exchangeTokenPromise=void 0}),s=!0);const a=await n.exchangeTokenPromise;return await m(r,a),n.token=a,{token:a.token}}try{n.exchangeTokenPromise||(n.exchangeTokenPromise=n.provider.getToken().finally(()=>{n.exchangeTokenPromise=void 0}),s=!0),o=await l(r).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"?p.warn(a.message):p.error(a),i=a}let c;return o?i?h(o)?c={token:o.token,internalError:i}:c=x(i):(c={token:o.token},n.token=o,await m(r,o)):c=x(i),s&&Z(r,c),c}async function Ne(e){const t=e.app;b(t);const{provider:r}=l(t);if(C()){const n=await P(),{token:o}=await _(j(t,n),e.heartbeatServiceProvider);return{token:o}}else{const{token:n}=await r.getToken();return{token:n}}}function J(e,t,r,n){const{app:o}=e,i=l(o),s={next:r,error:n,type:t};if(i.tokenObservers=[...i.tokenObservers,s],i.token&&h(i.token)){const c=i.token;Promise.resolve().then(()=>{r({token:c.token}),N(e)}).catch(()=>{})}i.cachedTokenPromise.then(()=>N(e))}function Q(e,t){const r=l(e),n=r.tokenObservers.filter(o=>o.next!==t);n.length===0&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),r.tokenObservers=n}function N(e){const{app:t}=e,r=l(t);let n=r.tokenRefresher;n||(n=xe(e),r.tokenRefresher=n),!n.isRunning()&&r.isTokenAutoRefreshEnabled&&n.start()}function xe(e){const{app:t}=e;return new Ee(async()=>{const r=l(t);let n;if(r.token?n=await v(e,!0):n=await v(e),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const r=l(t);if(r.token){let n=r.token.issuedAtTimeMillis+(r.token.expireTimeMillis-r.token.issuedAtTimeMillis)*.5+3e5;const o=r.token.expireTimeMillis-5*60*1e3;return n=Math.min(n,o),Math.max(0,n-Date.now())}else return 0},O.RETRIAL_MIN_WAIT,O.RETRIAL_MAX_WAIT)}function Z(e,t){const r=l(e).tokenObservers;for(const n of r)try{n.type==="EXTERNAL"&&t.error!=null?n.error(t.error):n.next(t)}catch{}}function h(e){return e.expireTimeMillis-Date.now()>0}function x(e){return{token:Me(Oe),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,r){this.app=t,this.heartbeatServiceProvider=r}_delete(){const{tokenObservers:t}=l(this.app);for(const r of t)Q(this.app,r.next);return Promise.resolve()}}function $e(e,t){return new Be(e,t)}function He(e){return{getToken:t=>v(e,t),getLimitedUseToken:()=>Ne(e),addTokenListener:t=>J(e,"INTERNAL",t),removeTokenListener:t=>Q(e.app,t)}}const Le="@firebase/app-check",Fe="0.8.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="https://www.google.com/recaptcha/api.js";function ze(e,t){const r=new w,n=l(e);n.reCAPTCHAState={initialized:r};const o=We(e),i=M(!1);return i?B(e,t,i,o,r):Ge(()=>{const s=M(!1);if(!s)throw new Error("no recaptcha");B(e,t,s,o,r)}),r.promise}function B(e,t,r,n,o){r.ready(()=>{je(e,t,r,n),o.resolve(r)})}function We(e){const t=`fire_app_check_${e.name}`,r=document.createElement("div");return r.id=t,r.style.display="none",document.body.appendChild(r),t}async function qe(e){b(e);const r=await l(e).reCAPTCHAState.initialized.promise;return new Promise((n,o)=>{const i=l(e).reCAPTCHAState;r.ready(()=>{n(r.execute(i.widgetId,{action:"fire_app_check"}))})})}function je(e,t,r,n){const o=r.render(n,{sitekey:t,size:"invisible",callback:()=>{l(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{l(e).reCAPTCHAState.succeeded=!1}}),i=l(e);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:o})}function Ge(e){const t=document.createElement("script");t.src=Ke,t.onload=e,document.head.appendChild(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(){var t,r,n;Ve(this._throttleData);const o=await qe(this._app).catch(s=>{throw u.create("recaptcha-error")});if(!(!((t=l(this._app).reCAPTCHAState)===null||t===void 0)&&t.succeeded))throw u.create("recaptcha-error");let i;try{i=await _(ve(this._app,o),this._heartbeatServiceProvider)}catch(s){throw!((r=s.code)===null||r===void 0)&&r.includes("fetch-status-error")?(this._throttleData=Ue(Number((n=s.customData)===null||n===void 0?void 0:n.httpStatus),this._throttleData),u.create("throttled",{time:q(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):s}return this._throttleData=null,i}initialize(t){this._app=t,this._heartbeatServiceProvider=L(t,"heartbeat"),ze(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof y?this._siteKey===t._siteKey:!1}}function Ue(e,t){if(e===404||e===403)return{backoffCount:1,allowRequestsAfter:Date.now()+we,httpStatus:e};{const r=t?t.backoffCount:0,n=se(r,1e3,2);return{backoffCount:r+1,allowRequestsAfter:Date.now()+n,httpStatus:e}}}function Ve(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw u.create("throttled",{time:q(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e=re(),t){e=te(e);const r=L(e,"app-check");if(E().initialized||De(),C()&&P().then(o=>console.log(`App Check debug token: ${o}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),r.isInitialized()){const o=r.getImmediate(),i=r.getOptions();if(i.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&i.provider.isEqual(t.provider))return o;throw u.create("already-initialized",{appName:e.name})}const n=r.initialize({options:t});return Ye(e,t.provider,t.isTokenAutoRefreshEnabled),l(e).isTokenAutoRefreshEnabled&&J(n,"INTERNAL",()=>{}),n}function Ye(e,t,r){const n=pe(e,Object.assign({},z));n.activated=!0,n.provider=t,n.cachedTokenPromise=Ie(e).then(o=>(o&&h(o)&&(n.token=o,Z(e,{token:o.token})),o)),n.isTokenAutoRefreshEnabled=r===void 0?e.automaticDataCollectionEnabled:r,n.provider.initialize(e)}const Je="app-check",$="app-check-internal";function Qe(){S(new D(Je,e=>{const t=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat");return $e(t,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider($).initialize()})),S(new D($,e=>{const t=e.getProvider("app-check").getImmediate();return He(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),ne(Le,Fe)}Qe();self.FIREBASE_APPCHECK_DEBUG_TOKEN=!0;try{const e=Xe(K,{provider:new y("6LeOLTgqAAAAAJBSAPGy1wapiehgbTHfSBhhBcWn"),isTokenAutoRefreshEnabled:!0})}catch(e){console.error("Error initializing App Check:",e)}const R=le(K);R.setPersistence(ue);const H=document.querySelector("form");H.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(H),r=t.get("email")?.toString(),n=t.get("password")?.toString();if(!(!r||!n))try{const i=await(await de(R,r,n)).user.getIdToken(),s=await fetch("/api/auth/signin",{method:"GET",headers:{Authorization:`Bearer ${i}`}});s.redirected&&window.location.assign(s.url)}catch(o){console.error("Error signing in with email and password:",o)}});const Ze=document.querySelector("#google");Ze.addEventListener("click",async()=>{const e=new he;try{const r=await(await fe(R,e)).user.getIdToken(),n=await fetch("/api/auth/signin",{headers:{Authorization:`Bearer ${r}`}});n.redirected&&window.location.assign(n.url)}catch(t){console.error("Error signing in with Google:",t)}});
