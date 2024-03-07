import{d as Id,w as si}from"./index.6bbcaYGK.js";var ia={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Fc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new Ad;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let Ad=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const Rd=function(t){const e=Fc(t);return Bc.encodeByteArray(e,!0)},$c=function(t){return Rd(t).replace(/\./g,"")},Sd=function(t){try{return Bc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Cd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Pd=()=>Cd().__FIREBASE_DEFAULTS__,bd=()=>{if(typeof process>"u"||typeof ia>"u")return;const t=ia.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sd(t[1]);return e&&JSON.parse(e)},Dd=()=>{try{return Pd()||bd()||kd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jc=()=>{var t;return(t=Dd())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Nd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function Vd(){try{return typeof indexedDB=="object"}catch{return!1}}function Od(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Md="FirebaseError";let Ui=class qc extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Md,Object.setPrototypeOf(this,qc.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wc.prototype.create)}},Wc=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ld(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ui(s,a,r)}};function Ld(t,e){return t.replace(xd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xd=/\{\$([^}]+)}/g;function ii(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(oa(i)&&oa(o)){if(!ii(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oa(t){return t!==null&&typeof t=="object"}let Sr=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ud{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bd(e))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ut){return this.instances.has(e)}getOptions(e=ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ut){return this.component?this.component.multipleInstances?e:ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fd(t){return t===ut?void 0:t}function Bd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class $d{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ud(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const jd={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},qd=b.INFO,Wd={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Hd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Wd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fi{constructor(e){this.name=e,this._logLevel=qd,this._logHandler=Hd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const zd=(t,e)=>e.some(n=>t instanceof n);let aa,ca;function Gd(){return aa||(aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kd(){return ca||(ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hc=new WeakMap,oi=new WeakMap,zc=new WeakMap,Ls=new WeakMap,Bi=new WeakMap;function Qd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xe(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hc.set(n,t)}).catch(()=>{}),Bi.set(e,t),e}function Xd(t){if(oi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});oi.set(t,e)}let ai={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jd(t){ai=t(ai)}function Yd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xs(this),e,...n);return zc.set(r,e.sort?e.sort():[e]),Xe(r)}:Kd().includes(t)?function(...e){return t.apply(xs(this),e),Xe(Hc.get(this))}:function(...e){return Xe(t.apply(xs(this),e))}}function Zd(t){return typeof t=="function"?Yd(t):(t instanceof IDBTransaction&&Xd(t),zd(t,Gd())?new Proxy(t,ai):t)}function Xe(t){if(t instanceof IDBRequest)return Qd(t);if(Ls.has(t))return Ls.get(t);const e=Zd(t);return e!==t&&(Ls.set(t,e),Bi.set(e,t)),e}const xs=t=>Bi.get(t);function ef(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Xe(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xe(o.result),c.oldVersion,c.newVersion,Xe(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const tf=["get","getKey","getAll","getAllKeys","count"],nf=["put","add","delete","clear"],Us=new Map;function ua(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Us.get(e))return Us.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tf.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Us.set(e,i),i}Jd(t=>({...t,get:(e,n,r)=>ua(e,n)||t.get(e,n,r),has:(e,n)=>!!ua(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class rf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ci="@firebase/app",la="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const _t=new Fi("@firebase/app"),of="@firebase/app-compat",af="@firebase/analytics-compat",cf="@firebase/analytics",uf="@firebase/app-check-compat",lf="@firebase/app-check",hf="@firebase/auth",df="@firebase/auth-compat",ff="@firebase/database",pf="@firebase/database-compat",gf="@firebase/functions",mf="@firebase/functions-compat",_f="@firebase/installations",yf="@firebase/installations-compat",Ef="@firebase/messaging",Tf="@firebase/messaging-compat",vf="@firebase/performance",If="@firebase/performance-compat",wf="@firebase/remote-config",Af="@firebase/remote-config-compat",Rf="@firebase/storage",Sf="@firebase/storage-compat",Cf="@firebase/firestore",Pf="@firebase/firestore-compat",bf="firebase",kf="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ui="[DEFAULT]",Df={[ci]:"fire-core",[of]:"fire-core-compat",[cf]:"fire-analytics",[af]:"fire-analytics-compat",[lf]:"fire-app-check",[uf]:"fire-app-check-compat",[hf]:"fire-auth",[df]:"fire-auth-compat",[ff]:"fire-rtdb",[pf]:"fire-rtdb-compat",[gf]:"fire-fn",[mf]:"fire-fn-compat",[_f]:"fire-iid",[yf]:"fire-iid-compat",[Ef]:"fire-fcm",[Tf]:"fire-fcm-compat",[vf]:"fire-perf",[If]:"fire-perf-compat",[wf]:"fire-rc",[Af]:"fire-rc-compat",[Rf]:"fire-gcs",[Sf]:"fire-gcs-compat",[Cf]:"fire-fst",[Pf]:"fire-fst-compat","fire-js":"fire-js",[bf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Cr=new Map,li=new Map;function Nf(t,e){try{t.container.addComponent(e)}catch(n){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yt(t){const e=t.name;if(li.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;li.set(e,t);for(const n of Cr.values())Nf(n,t);return!0}function Xr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Vf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Je=new Wc("app","Firebase",Vf);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Of{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const At=kf;function Gc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ui,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Je.create("bad-app-name",{appName:String(s)});if(n||(n=jc()),!n)throw Je.create("no-options");const i=Cr.get(s);if(i){if(ii(n,i.options)&&ii(r,i.config))return i;throw Je.create("duplicate-app",{appName:s})}const o=new $d(s);for(const c of li.values())o.addComponent(c);const a=new Of(n,r,o);return Cr.set(s,a),a}function $i(t=ui){const e=Cr.get(t);if(!e&&t===ui&&jc())return Gc();if(!e)throw Je.create("no-app",{appName:t});return e}function Pe(t,e,n){var r;let s=(r=Df[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(a.join(" "));return}yt(new Sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Mf="firebase-heartbeat-database",Lf=1,In="firebase-heartbeat-store";let Fs=null;function Kc(){return Fs||(Fs=ef(Mf,Lf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(In)}}}).catch(t=>{throw Je.create("idb-open",{originalErrorMessage:t.message})})),Fs}async function xf(t){try{return await(await Kc()).transaction(In).objectStore(In).get(Qc(t))}catch(e){if(e instanceof Ui)_t.warn(e.message);else{const n=Je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(n.message)}}}async function ha(t,e){try{const r=(await Kc()).transaction(In,"readwrite");await r.objectStore(In).put(e,Qc(t)),await r.done}catch(n){if(n instanceof Ui)_t.warn(n.message);else{const r=Je.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_t.warn(r.message)}}}function Qc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Uf=1024,Ff=30*24*60*60*1e3;class Bf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=da();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Ff}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=da(),{heartbeatsToSend:r,unsentEntries:s}=$f(this._heartbeatsCache.heartbeats),i=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function da(){return new Date().toISOString().substring(0,10)}function $f(t,e=Uf){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vd()?Od().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ha(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ha(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fa(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function qf(t){yt(new Sr("platform-logger",e=>new rf(e),"PRIVATE")),yt(new Sr("heartbeat",e=>new Bf(e),"PRIVATE")),Pe(ci,la,t),Pe(ci,la,"esm2017"),Pe("fire-js","")}qf("");var Wf="firebase",Hf="10.6.0";/**
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
 */Pe(Wf,Hf,"app");var pa={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const zf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new Qf;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let Qf=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const Xc=function(t){try{return Kf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Xf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Jf=()=>Xf().__FIREBASE_DEFAULTS__,Yf=()=>{if(typeof process>"u"||typeof pa>"u")return;const t=pa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xc(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return Jf()||Yf()||Zf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ep=t=>{var e,n;return(n=(e=Jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yc=t=>{var e;return(e=Jc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function np(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sp(){const t=ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ip="FirebaseError";let Jr=class Zc extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ip,Object.setPrototypeOf(this,Zc.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}},Yr=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?op(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Jr(s,a,r)}};function op(t,e){return t.replace(ap,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ap=/\{\$([^}]+)}/g;function cp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function eu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ga(i)&&ga(o)){if(!eu(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ga(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function xn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function up(t,e){const n=new lp(t,e);return n.subscribe.bind(n)}class lp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Bs),s.error===void 0&&(s.error=Bs),s.complete===void 0&&(s.complete=Bs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bs(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}function ji(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}let ma=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};function tu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dp=tu,nu=new Yr("auth","Firebase",tu());/**
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
 */const Pr=new Fi("@firebase/auth");function fp(t,...e){Pr.logLevel<=b.WARN&&Pr.warn(`Auth (${At}): ${t}`,...e)}function yr(t,...e){Pr.logLevel<=b.ERROR&&Pr.error(`Auth (${At}): ${t}`,...e)}/**
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
 */function Ve(t,...e){throw qi(t,...e)}function be(t,...e){return qi(t,...e)}function ru(t,e,n){const r=Object.assign(Object.assign({},dp()),{[e]:n});return new Yr("auth","Firebase",r).create(e,{appName:t.name})}function pp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ve(t,"argument-error"),ru(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nu.create(t,...e)}function S(t,e,...n){if(!t)throw qi(e,...n)}function Me(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yr(e),new Error(e)}function Fe(t,e){t||Me(e)}/**
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
 */function hi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gp(){return _a()==="http:"||_a()==="https:"}function _a(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function mp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gp()||np()||"connection"in navigator)?navigator.onLine:!0}function _p(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Un{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fe(n>e,"Short delay should be less than long delay!"),this.isMobile=tp()||rp()}get(){return mp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wi(t,e){Fe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class su{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ep=new Un(3e4,6e4);function Hi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jt(t,e,n,r,s={}){return iu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=xn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),su.fetch()(ou(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function iu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yp),e);try{const s=new vp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ar(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ar(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ar(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ar(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ru(t,l,u);Ve(t,l)}}catch(s){if(s instanceof Jr)throw s;Ve(t,"network-request-failed",{message:String(s)})}}async function Tp(t,e,n,r,s={}){const i=await Jt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ou(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Wi(t.config,s):`${t.config.apiScheme}://${s}`}class vp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(be(this.auth,"network-request-failed")),Ep.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ar(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=be(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Ip(t,e){return Jt(t,"POST","/v1/accounts:delete",e)}async function wp(t,e){return Jt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function gn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ap(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=zi(r);S(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gn($s(s.auth_time)),issuedAtTime:gn($s(s.iat)),expirationTime:gn($s(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $s(t){return Number(t)*1e3}function zi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xc(n);return s?JSON.parse(s):(yr("Failed to decode base64 JWT payload"),null)}catch(s){return yr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rp(t){const e=zi(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jr&&Sp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Sp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Cp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class au{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gn(this.lastLoginAt),this.creationTime=gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function br(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wn(t,wp(n,{idToken:r}));S(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kp(i.providerUserInfo):[],a=bp(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new au(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Pp(t){const e=rt(t);await br(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kp(t){return t.map(e=>{var{providerId:n}=e,r=ji(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Dp(t,e){const n=await iu(t,{},async()=>{const r=xn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ou(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",su.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Np(t,e){return Jt(t,"POST","/v2/accounts:revokeToken",Hi(t,e))}/**
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
 */class An{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Dp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new An;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(S(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(S(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new An,this.toJSON())}_performRefresh(){return Me("not implemented")}}/**
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
 */function qe(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ji(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new au(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wn(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ap(this,e)}reload(){return Pp(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await br(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wn(this,Ip(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:O,emailVerified:M,isAnonymous:fe,providerData:pe,stsTokenManager:ct}=n;S(O&&ct,e,"internal-error");const bt=An.fromJSON(this.name,ct);S(typeof O=="string",e,"internal-error"),qe(h,e.name),qe(d,e.name),S(typeof M=="boolean",e,"internal-error"),S(typeof fe=="boolean",e,"internal-error"),qe(f,e.name),qe(y,e.name),qe(I,e.name),qe(E,e.name),qe(k,e.name),qe(L,e.name);const rn=new pt({uid:O,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:fe,photoURL:y,phoneNumber:f,tenantId:I,stsTokenManager:bt,createdAt:k,lastLoginAt:L});return pe&&Array.isArray(pe)&&(rn.providerData=pe.map(or=>Object.assign({},or))),E&&(rn._redirectEventId=E),rn}static async _fromIdTokenResponse(e,n,r=!1){const s=new An;s.updateFromServerResponse(n);const i=new pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await br(i),i}}/**
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
 */const ya=new Map;function Le(t){Fe(t instanceof Function,"Expected a class definition");let e=ya.get(t);return e?(Fe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ya.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class cu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cu.type="NONE";const Ea=cu;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Er(t,e,n){return`firebase:${t}:${e}:${n}`}class Mt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Er(this.userKey,s.apiKey,i),this.fullPersistenceKey=Er("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mt(Le(Ea),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Le(Ea);const o=Er(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=pt._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Mt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Mt(i,e,r))}}/**
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
 */function Ta(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fu(e))return"Blackberry";if(pu(e))return"Webos";if(Gi(e))return"Safari";if((e.includes("chrome/")||lu(e))&&!e.includes("edge/"))return"Chrome";if(du(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uu(t=ce()){return/firefox\//i.test(t)}function Gi(t=ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lu(t=ce()){return/crios\//i.test(t)}function hu(t=ce()){return/iemobile/i.test(t)}function du(t=ce()){return/android/i.test(t)}function fu(t=ce()){return/blackberry/i.test(t)}function pu(t=ce()){return/webos/i.test(t)}function Zr(t=ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vp(t=ce()){var e;return Zr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Op(){return sp()&&document.documentMode===10}function gu(t=ce()){return Zr(t)||du(t)||pu(t)||fu(t)||/windows phone/i.test(t)||hu(t)}function Mp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mu(t,e=[]){let n;switch(t){case"Browser":n=Ta(ce());break;case"Worker":n=`${Ta(ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${At}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Lp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function xp(t,e={}){return Jt(t,"GET","/v2/passwordPolicy",Hi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Up=6;class Fp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Up,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Bp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new va(this),this.idTokenSubscription=new va(this),this.beforeStateQueue=new Lp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Le(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Mt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await br(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_p()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Le(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xp(this),n=new Fp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Np(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Le(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await Mt.create(this,[Le(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function es(t){return rt(t)}class va{constructor(e){this.auth=e,this.observer=null,this.addObserver=up(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function $p(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=be("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$p().appendChild(r)})}function qp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Wp(t,e){const n=Xr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(eu(i,e??{}))return s;Ve(s,"already-initialized")}return n.initialize({options:e})}function Hp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Le);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zp(t,e,n){const r=es(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=_u(e),{host:o,port:a}=Gp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Kp()}function _u(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gp(t){const e=_u(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ia(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ia(o)}}}function Ia(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Kp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Me("not implemented")}_getIdTokenResponse(e){return Me("not implemented")}_linkToIdToken(e,n){return Me("not implemented")}_getReauthenticationResolver(e){return Me("not implemented")}}/**
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
 */async function Lt(t,e){return Tp(t,"POST","/v1/accounts:signInWithIdp",Hi(t,e))}/**
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
 */const Qp="http://localhost";class Et extends yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ji(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Et(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lt(e,n)}buildRequest(){const e={requestUri:Qp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xn(n)}return e}}/**
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
 */class Ki{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Fn extends Ki{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class We extends Fn{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com";We.PROVIDER_ID="facebook.com";/**
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
 */class He extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Et._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return He.credential(n,r)}catch{return null}}}He.GOOGLE_SIGN_IN_METHOD="google.com";He.PROVIDER_ID="google.com";/**
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
 */class ze extends Fn{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch{return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
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
 */class Ge extends Fn{constructor(){super("twitter.com")}static credential(e,n){return Et._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ge.credential(n,r)}catch{return null}}}Ge.TWITTER_SIGN_IN_METHOD="twitter.com";Ge.PROVIDER_ID="twitter.com";/**
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
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pt._fromIdTokenResponse(e,r,s),o=wa(r);return new Bt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wa(r);return new Bt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class kr extends Jr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,kr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new kr(e,n,r,s)}}function Eu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?kr._fromErrorAndOperation(t,i,e,r):i})}async function Xp(t,e,n=!1){const r=await wn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Jp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await wn(t,Eu(r,s,e,t),n);S(i.idToken,r,"internal-error");const o=zi(i.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),Bt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),i}}/**
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
 */async function Yp(t,e,n=!1){const r="signIn",s=await Eu(t,r,e),i=await Bt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Zp(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function eg(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function tg(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function TI(t){return rt(t).signOut()}const Dr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Tu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ng(){const t=ce();return Gi(t)||Zr(t)}const rg=1e3,sg=10;class vu extends Tu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ng()&&Mp(),this.fallbackToPolling=gu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Op()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vu.type="LOCAL";const ig=vu;/**
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
 */class Iu extends Tu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iu.type="SESSION";const wu=Iu;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function og(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ts(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await og(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
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
 */function Qi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ag{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Qi("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ke(){return window}function cg(t){ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Au(){return typeof ke().WorkerGlobalScope<"u"&&typeof ke().importScripts=="function"}async function ug(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hg(){return Au()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Ru="firebaseLocalStorageDb",dg=1,Nr="firebaseLocalStorage",Su="fbase_key";class Bn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ns(t,e){return t.transaction([Nr],e?"readwrite":"readonly").objectStore(Nr)}function fg(){const t=indexedDB.deleteDatabase(Ru);return new Bn(t).toPromise()}function di(){const t=indexedDB.open(Ru,dg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nr,{keyPath:Su})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nr)?e(r):(r.close(),await fg(),e(await di()))})})}async function Aa(t,e,n){const r=ns(t,!0).put({[Su]:e,value:n});return new Bn(r).toPromise()}async function pg(t,e){const n=ns(t,!1).get(e),r=await new Bn(n).toPromise();return r===void 0?null:r.value}function Ra(t,e){const n=ns(t,!0).delete(e);return new Bn(n).toPromise()}const gg=800,mg=3;class Cu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await di(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Au()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(hg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ug(),!this.activeServiceWorker)return;this.sender=new ag(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await di();return await Aa(e,Dr,"1"),await Ra(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Aa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ra(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ns(s,!1).getAll();return new Bn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cu.type="LOCAL";const _g=Cu;new Un(3e4,6e4);/**
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
 */function Pu(t,e){return e?Le(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Xi extends yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yg(t){return Yp(t.auth,new Xi(t),t.bypassAuthState)}function Eg(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Jp(n,new Xi(t),t.bypassAuthState)}async function Tg(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Xp(n,new Xi(t),t.bypassAuthState)}/**
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
 */class bu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yg;case"linkViaPopup":case"linkViaRedirect":return Tg;case"reauthViaPopup":case"reauthViaRedirect":return Eg;default:Ve(this.auth,"internal-error")}}resolve(e){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vg=new Un(2e3,1e4);async function vI(t,e,n){const r=es(t);pp(t,e,Ki);const s=Pu(r,n);return new lt(r,"signInViaPopup",e,s).executeNotNull()}class lt extends bu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,lt.currentPopupAction&&lt.currentPopupAction.cancel(),lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){Fe(this.filter.length===1,"Popup operations only handle one event");const e=Qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vg.get())};e()}}lt.currentPopupAction=null;/**
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
 */const Ig="pendingRedirect",Tr=new Map;class wg extends bu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const r=await Ag(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ag(t,e){const n=Cg(e),r=Sg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Rg(t,e){Tr.set(t._key(),e)}function Sg(t){return Le(t._redirectPersistence)}function Cg(t){return Er(Ig,t.config.apiKey,t.name)}async function Pg(t,e,n=!1){const r=es(t),s=Pu(r,e),o=await new wg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const bg=10*60*1e3;class kg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ku(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(be(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sa(e))}saveEventToCache(e){this.cachedEventUids.add(Sa(e)),this.lastProcessedEventTime=Date.now()}}function Sa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ku({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ku(t);default:return!1}}/**
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
 */async function Ng(t,e={}){return Jt(t,"GET","/v1/projects",e)}/**
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
 */const Vg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Og=/^https?/;async function Mg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ng(t);for(const n of e)try{if(Lg(n))return}catch{}Ve(t,"unauthorized-domain")}function Lg(t){const e=hi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Og.test(n))return!1;if(Vg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const xg=new Un(3e4,6e4);function Ca(){const t=ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ug(t){return new Promise((e,n)=>{var r,s,i;function o(){Ca(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ca(),n(be(t,"network-request-failed"))},timeout:xg.get()})}if(!((s=(r=ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ke().gapi)===null||i===void 0)&&i.load)o();else{const a=qp("iframefcb");return ke()[a]=()=>{gapi.load?o():n(be(t,"network-request-failed"))},jp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vr=null,e})}let vr=null;function Fg(t){return vr=vr||Ug(t),vr}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Bg=new Un(5e3,15e3),$g="__/auth/iframe",jg="emulator/auth/iframe",qg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hg(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wi(e,jg):`https://${t.config.authDomain}/${$g}`,r={apiKey:e.apiKey,appName:t.name,v:At},s=Wg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xn(r).slice(1)}`}async function zg(t){const e=await Fg(t),n=ke().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:Hg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=be(t,"network-request-failed"),a=ke().setTimeout(()=>{i(o)},Bg.get());function c(){ke().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Gg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kg=500,Qg=600,Xg="_blank",Jg="http://localhost";class Pa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yg(t,e,n,r=Kg,s=Qg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Gg),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ce().toLowerCase();n&&(a=lu(u)?Xg:n),uu(u)&&(e=e||Jg,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(Vp(u)&&a!=="_self")return Zg(e||"",a),new Pa(null);const h=window.open(e||"",a,l);S(h,t,"popup-blocked");try{h.focus()}catch{}return new Pa(h)}function Zg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const em="__/auth/handler",tm="emulator/auth/handler",nm=encodeURIComponent("fac");async function ba(t,e,n,r,s,i){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:At,eventId:s};if(e instanceof Ki){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(i||{}))o[l]=h}if(e instanceof Fn){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${nm}=${encodeURIComponent(c)}`:"";return`${rm(t)}?${xn(a).slice(1)}${u}`}function rm({config:t}){return t.emulator?Wi(t,tm):`https://${t.authDomain}/${em}`}/**
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
 */const js="webStorageSupport";class sm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wu,this._completeRedirectFn=Pg,this._overrideRedirectResult=Rg}async _openPopup(e,n,r,s){var i;Fe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ba(e,n,r,hi(),s);return Yg(e,o,Qi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ba(e,n,r,hi(),s);return cg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zg(e),r=new kg(e);return n.register("authEvent",s=>(S(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(js,{type:js},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[js];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Mg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gu()||Gi()||Zr()}}const im=sm;var ka="@firebase/auth",Da="1.4.0";/**
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
 */class om{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function am(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cm(t){yt(new ma("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mu(t)},u=new Bp(r,s,i,c);return Hp(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yt(new ma("auth-internal",e=>{const n=es(e.getProvider("auth").getImmediate());return(r=>new om(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(ka,Da,am(t)),Pe(ka,Da,"esm2017")}/**
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
 */const um=5*60,lm=Yc("authIdTokenMaxAge")||um;let Na=null;const hm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lm)return;const s=n==null?void 0:n.token;Na!==s&&(Na=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dm(t=$i()){const e=Xr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wp(t,{popupRedirectResolver:im,persistence:[_g,ig,wu]}),r=Yc("authTokenSyncURL");if(r){const i=hm(r);eg(n,i,()=>i(n.currentUser)),Zp(n,o=>i(o))}const s=ep("auth");return s&&zp(n,`http://${s}`),n}cm("Browser");var Va={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Du=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Du(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new pm;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let pm=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const gm=function(t){const e=Du(t);return Nu.encodeByteArray(e,!0)},Oa=function(t){return gm(t).replace(/\./g,"")},mm=function(t){try{return Nu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function _m(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const ym=()=>_m().__FIREBASE_DEFAULTS__,Em=()=>{if(typeof process>"u"||typeof Va>"u")return;const t=Va.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mm(t[1]);return e&&JSON.parse(e)},Vu=()=>{try{return ym()||Em()||Tm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vm=t=>{var e,n;return(n=(e=Vu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Im=t=>{const e=vm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]};/**
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
 */function wm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Oa(JSON.stringify(n)),Oa(JSON.stringify(o)),""].join(".")}function Am(){var t;const e=(t=Vu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Rm="FirebaseError";let Ou=class Mu extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rm,Object.setPrototypeOf(this,Mu.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sm.prototype.create)}},Sm=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Cm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ou(s,a,r)}};function Cm(t,e){return t.replace(Pm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pm=/\{\$([^}]+)}/g;/**
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
 */function rs(t){return t&&t._delegate?t._delegate:t}let bm=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Lu="firebasestorage.googleapis.com",xu="storageBucket",km=2*60*1e3,Dm=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class q extends Ou{constructor(e,n,r=0){super(qs(e),`Firebase Storage: ${n} (${qs(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,q.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qs(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($||($={}));function qs(t){return"storage/"+t}function Ji(){const t="An unknown error occurred, please check the error payload for server response.";return new q($.UNKNOWN,t)}function Nm(t){return new q($.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Vm(t){return new q($.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Om(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new q($.UNAUTHENTICATED,t)}function Mm(){return new q($.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Lm(t){return new q($.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function xm(){return new q($.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Um(){return new q($.CANCELED,"User canceled the upload/download.")}function Fm(t){return new q($.INVALID_URL,"Invalid URL '"+t+"'.")}function Bm(t){return new q($.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $m(){return new q($.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+xu+"' property when initializing the app?")}function jm(){return new q($.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qm(){return new q($.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Wm(t){return new q($.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fi(t){return new q($.INVALID_ARGUMENT,t)}function Uu(){return new q($.APP_DELETED,"The Firebase app was deleted.")}function Hm(t){return new q($.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function mn(t,e){return new q($.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function sn(t){throw new q($.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ge{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ge.makeFromUrl(e,n)}catch{return new ge(e,"")}if(r.path==="")return r;throw Bm(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),y={bucket:1,path:3},I=n===Lu?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",k=new RegExp(`^https?://${I}/${s}/${E}`,"i"),O=[{regex:a,indices:c,postModify:i},{regex:f,indices:y,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<O.length;M++){const fe=O[M],pe=fe.regex.exec(e);if(pe){const ct=pe[fe.indices.bucket];let bt=pe[fe.indices.path];bt||(bt=""),r=new ge(ct,bt),fe.postModify(r);break}}if(r==null)throw Fm(e);return r}}class zm{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Gm(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...E){u||(u=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(f,c())},E)}function d(){i&&clearTimeout(i)}function f(E,...k){if(u){d();return}if(E){d(),l.call(null,E,...k);return}if(c()||o){d(),l.call(null,E,...k);return}r<64&&(r*=2);let O;a===1?(a=2,O=0):O=(r+Math.random())*1e3,h(O)}let y=!1;function I(E){y||(y=!0,d(),!u&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function Km(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Qm(t){return t!==void 0}function Xm(t){return typeof t=="object"&&!Array.isArray(t)}function Yi(t){return typeof t=="string"||t instanceof String}function Ma(t){return Zi()&&t instanceof Blob}function Zi(){return typeof Blob<"u"&&!Am()}function La(t,e,n,r){if(r<e)throw fi(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw fi(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function eo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Fu(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var gt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gt||(gt={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Jm(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ym{constructor(e,n,r,s,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new cr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===gt.NO_ERROR,c=i.getStatus();if(!a||Jm(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===gt.ABORT;r(!1,new cr(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new cr(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Qm(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Ji();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Uu():Um();o(c)}else{const c=xm();o(c)}};this.canceled_?n(!1,new cr(!1,null,!0)):this.backoffId_=Gm(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Km(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cr{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Zm(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function e_(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function t_(t,e){e&&(t["X-Firebase-GMPID"]=e)}function n_(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function r_(t,e,n,r,s,i,o=!0){const a=Fu(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return t_(u,e),Zm(u,n),e_(u,i),n_(u,r),new Ym(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function s_(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function i_(...t){const e=s_();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Zi())return new Blob(t);throw new q($.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function o_(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function a_(t){if(typeof atob>"u")throw Wm("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Re={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ws{constructor(e,n){this.data=e,this.contentType=n||null}}function c_(t,e){switch(t){case Re.RAW:return new Ws(Bu(e));case Re.BASE64:case Re.BASE64URL:return new Ws($u(t,e));case Re.DATA_URL:return new Ws(l_(e),h_(e))}throw Ji()}function Bu(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function u_(t){let e;try{e=decodeURIComponent(t)}catch{throw mn(Re.DATA_URL,"Malformed data URL.")}return Bu(e)}function $u(t,e){switch(t){case Re.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw mn(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Re.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw mn(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=a_(e)}catch(s){throw s.message.includes("polyfill")?s:mn(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ju{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw mn(Re.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=d_(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function l_(t){const e=new ju(t);return e.base64?$u(Re.BASE64,e.rest):u_(e.rest)}function h_(t){return new ju(t).contentType}function d_(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ke{constructor(e,n){let r=0,s="";Ma(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ma(this.data_)){const r=this.data_,s=o_(r,e,n);return s===null?null:new Ke(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ke(r,!0)}}static getBlob(...e){if(Zi()){const n=e.map(r=>r instanceof Ke?r.data_:r);return new Ke(i_.apply(null,n))}else{const n=e.map(o=>Yi(o)?c_(Re.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Ke(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function qu(t){let e;try{e=JSON.parse(t)}catch{return null}return Xm(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function f_(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function p_(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Wu(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function g_(t,e){return e}class le{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||g_}}let ur=null;function m_(t){return!Yi(t)||t.length<2?t:Wu(t)}function Hu(){if(ur)return ur;const t=[];t.push(new le("bucket")),t.push(new le("generation")),t.push(new le("metageneration")),t.push(new le("name","fullPath",!0));function e(i,o){return m_(o)}const n=new le("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new le("size");return s.xform=r,t.push(s),t.push(new le("timeCreated")),t.push(new le("updated")),t.push(new le("md5Hash",null,!0)),t.push(new le("cacheControl",null,!0)),t.push(new le("contentDisposition",null,!0)),t.push(new le("contentEncoding",null,!0)),t.push(new le("contentLanguage",null,!0)),t.push(new le("contentType",null,!0)),t.push(new le("metadata","customMetadata",!0)),ur=t,ur}function __(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new ge(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function y_(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return __(r,t),r}function zu(t,e,n){const r=qu(e);return r===null?null:y_(t,r,n)}function E_(t,e,n,r){const s=qu(e);if(s===null||!Yi(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=eo(d,n,r),y=Fu({alt:"media",token:u});return f+y})[0]}function T_(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Gu{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ku(t){if(!t)throw Ji()}function v_(t,e){function n(r,s){const i=zu(t,s,e);return Ku(i!==null),i}return n}function I_(t,e){function n(r,s){const i=zu(t,s,e);return Ku(i!==null),E_(i,s,t.host,t._protocol)}return n}function Qu(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Mm():s=Om():n.getStatus()===402?s=Vm(t.bucket):n.getStatus()===403?s=Lm(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function w_(t){const e=Qu(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Nm(t.path)),i.serverResponse=s.serverResponse,i}return n}function A_(t,e,n){const r=e.fullServerUrl(),s=eo(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Gu(s,i,I_(t,n),o);return a.errorHandler=w_(e),a}function R_(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function S_(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=R_(null,e)),r}function C_(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let M=0;M<2;M++)O=O+Math.random().toString().slice(2);return O}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=S_(e,r,s),l=T_(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Ke.getBlob(h,r,d);if(f===null)throw jm();const y={name:u.fullPath},I=eo(i,t.host,t._protocol),E="POST",k=t.maxUploadRetryTime,L=new Gu(I,E,v_(t,n),k);return L.urlParams=y,L.headers=o,L.body=f.uploadData(),L.errorHandler=Qu(e),L}class P_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw sn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw sn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class b_ extends P_{initXhr(){this.xhr_.responseType="text"}}function Xu(){return new b_}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Tt{constructor(e,n){this._service=e,n instanceof ge?this._location=n:this._location=ge.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tt(e,n)}get root(){const e=new ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wu(this._location.path)}get storage(){return this._service}get parent(){const e=f_(this._location.path);if(e===null)return null;const n=new ge(this._location.bucket,e);return new Tt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Hm(e)}}function k_(t,e,n){t._throwIfRoot("uploadBytes");const r=C_(t.storage,t._location,Hu(),new Ke(e,!0),n);return t.storage.makeRequestWithTokens(r,Xu).then(s=>({metadata:s,ref:t}))}function D_(t){t._throwIfRoot("getDownloadURL");const e=A_(t.storage,t._location,Hu());return t.storage.makeRequestWithTokens(e,Xu).then(n=>{if(n===null)throw qm();return n})}function N_(t,e){const n=p_(t._location.path,e),r=new ge(t._location.bucket,n);return new Tt(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function V_(t){return/^[A-Za-z]+:\/\//.test(t)}function O_(t,e){return new Tt(t,e)}function Ju(t,e){if(t instanceof to){const n=t;if(n._bucket==null)throw $m();const r=new Tt(n,n._bucket);return e!=null?Ju(r,e):r}else return e!==void 0?N_(t,e):t}function M_(t,e){if(e&&V_(e)){if(t instanceof to)return O_(t,e);throw fi("To use ref(service, url), the first argument must be a Storage instance.")}else return Ju(t,e)}function xa(t,e){const n=e==null?void 0:e[xu];return n==null?null:ge.makeFromBucketSpec(n,t)}function L_(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:wm(s,t.app.options.projectId))}class to{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Lu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=km,this._maxUploadRetryTime=Dm,this._requests=new Set,s!=null?this._bucket=ge.makeFromBucketSpec(s,this._host):this._bucket=xa(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ge.makeFromBucketSpec(this._url,e):this._bucket=xa(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){La("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){La("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tt(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new zm(Uu());{const o=r_(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ua="@firebase/storage",Fa="0.11.2";/**
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
 */const Yu="storage";function RI(t,e,n){return t=rs(t),k_(t,e,n)}function SI(t){return t=rs(t),D_(t)}function CI(t,e){return t=rs(t),M_(t,e)}function x_(t=$i(),e){t=rs(t);const r=Xr(t,Yu).getImmediate({identifier:e}),s=Im("storage");return s&&U_(r,...s),r}function U_(t,e,n,r={}){L_(t,e,n,r)}function F_(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new to(n,r,s,e,At)}function B_(){yt(new bm(Yu,F_,"PUBLIC").setMultipleInstances(!0)),Pe(Ua,Fa,""),Pe(Ua,Fa,"esm2017")}B_();var Ba={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Zu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},el={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new j_;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class j_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q_=function(t){const e=Zu(t);return el.encodeByteArray(e,!0)},$a=function(t){return q_(t).replace(/\./g,"")},W_=function(t){try{return el.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function H_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const z_=()=>H_().__FIREBASE_DEFAULTS__,G_=()=>{if(typeof process>"u"||typeof Ba>"u")return;const t=Ba.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},K_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&W_(t[1]);return e&&JSON.parse(e)},Q_=()=>{try{return z_()||G_()||K_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},X_=t=>{var e,n;return(n=(e=Q_())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},J_=t=>{const e=X_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]};/**
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
 */function Y_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$a(JSON.stringify(n)),$a(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Z_="FirebaseError";class ss extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Z_,Object.setPrototypeOf(this,ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ey.prototype.create)}}class ey{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ty(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ss(s,a,r)}}function ty(t,e){return t.replace(ny,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ny=/\{\$([^}]+)}/g;/**
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
 */function ve(t){return t&&t._delegate?t._delegate:t}class ry{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}var sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,no=no||{},A=sy||self;function is(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $n(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iy(t){return Object.prototype.hasOwnProperty.call(t,Hs)&&t[Hs]||(t[Hs]=++oy)}var Hs="closure_uid_"+(1e9*Math.random()>>>0),oy=0;function ay(t,e,n){return t.call.apply(t.bind,arguments)}function cy(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ie(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ie=ay:ie=cy,ie.apply(null,arguments)}function lr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function X(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function st(){this.s=this.s,this.o=this.o}var uy=0;st.prototype.s=!1;st.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),uy!=0)&&iy(this)};st.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ro(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ja(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(is(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function oe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var ly=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{A.addEventListener("test",()=>{},e),A.removeEventListener("test",()=>{},e)}catch{}return t}();function Rn(t){return/^[\s\xa0]*$/.test(t)}function os(){var t=A.navigator;return t&&(t=t.userAgent)?t:""}function Ae(t){return os().indexOf(t)!=-1}function so(t){return so[" "](t),t}so[" "]=function(){};function hy(t,e){var n=rE;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var dy=Ae("Opera"),$t=Ae("Trident")||Ae("MSIE"),nl=Ae("Edge"),pi=nl||$t,rl=Ae("Gecko")&&!(os().toLowerCase().indexOf("webkit")!=-1&&!Ae("Edge"))&&!(Ae("Trident")||Ae("MSIE"))&&!Ae("Edge"),fy=os().toLowerCase().indexOf("webkit")!=-1&&!Ae("Edge");function sl(){var t=A.document;return t?t.documentMode:void 0}var gi;e:{var zs="",Gs=function(){var t=os();if(rl)return/rv:([^\);]+)(\)|;)/.exec(t);if(nl)return/Edge\/([\d\.]+)/.exec(t);if($t)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fy)return/WebKit\/(\S+)/.exec(t);if(dy)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gs&&(zs=Gs?Gs[1]:""),$t){var Ks=sl();if(Ks!=null&&Ks>parseFloat(zs)){gi=String(Ks);break e}}gi=zs}var mi;if(A.document&&$t){var qa=sl();mi=qa||parseInt(gi,10)||void 0}else mi=void 0;var py=mi;function Sn(t,e){if(oe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rl){e:{try{so(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gy[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Sn.$.h.call(this)}}X(Sn,oe);var gy={2:"touch",3:"pen",4:"mouse"};Sn.prototype.h=function(){Sn.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jn="closure_listenable_"+(1e6*Math.random()|0),my=0;function _y(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++my,this.fa=this.ia=!1}function as(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function io(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function yy(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function il(t){const e={};for(const n in t)e[n]=t[n];return e}const Wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ol(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Wa.length;i++)n=Wa[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function cs(t){this.src=t,this.g={},this.h=0}cs.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=yi(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new _y(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function _i(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=tl(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(as(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yi(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var oo="closure_lm_"+(1e6*Math.random()|0),Qs={};function al(t,e,n,r,s){if(r&&r.once)return ul(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)al(t,e[i],n,r,s);return null}return n=uo(n),t&&t[jn]?t.O(e,n,$n(r)?!!r.capture:!!r,s):cl(t,e,n,!1,r,s)}function cl(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=$n(s)?!!s.capture:!!s,a=co(t);if(a||(t[oo]=a=new cs(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Ey(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ly||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(hl(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ey(){function t(n){return e.call(t.src,t.listener,n)}const e=Ty;return t}function ul(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ul(t,e[i],n,r,s);return null}return n=uo(n),t&&t[jn]?t.P(e,n,$n(r)?!!r.capture:!!r,s):cl(t,e,n,!0,r,s)}function ll(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)ll(t,e[i],n,r,s);else r=$n(r)?!!r.capture:!!r,n=uo(n),t&&t[jn]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=yi(i,n,r,s),-1<n&&(as(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=co(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yi(e,n,r,s)),(n=-1<t?e[t]:null)&&ao(n))}function ao(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[jn])_i(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(hl(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=co(e))?(_i(n,t),n.h==0&&(n.src=null,e[oo]=null)):as(t)}}}function hl(t){return t in Qs?Qs[t]:Qs[t]="on"+t}function Ty(t,e){if(t.fa)t=!0;else{e=new Sn(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ao(t),t=n.call(r,e)}return t}function co(t){return t=t[oo],t instanceof cs?t:null}var Xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function uo(t){return typeof t=="function"?t:(t[Xs]||(t[Xs]=function(e){return t.handleEvent(e)}),t[Xs])}function Q(){st.call(this),this.i=new cs(this),this.S=this,this.J=null}X(Q,st);Q.prototype[jn]=!0;Q.prototype.removeEventListener=function(t,e,n,r){ll(this,t,e,n,r)};function ee(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new oe(e,t);else if(e instanceof oe)e.target=e.target||t;else{var s=e;e=new oe(r,t),ol(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=hr(o,r,!0,e)&&s}if(o=e.g=t,s=hr(o,r,!0,e)&&s,s=hr(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=hr(o,r,!1,e)&&s}Q.prototype.N=function(){if(Q.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)as(n[r]);delete t.g[e],t.h--}}this.J=null};Q.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Q.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function hr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&_i(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var lo=A.JSON.stringify;class vy{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Iy(){var t=ho;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wy{constructor(){this.h=this.g=null}add(e,n){const r=dl.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var dl=new vy(()=>new Ay,t=>t.reset());class Ay{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ry(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Sy(t){A.setTimeout(()=>{throw t},0)}let Cn,Pn=!1,ho=new wy,fl=()=>{const t=A.Promise.resolve(void 0);Cn=()=>{t.then(Cy)}};var Cy=()=>{for(var t;t=Iy();){try{t.h.call(t.g)}catch(n){Sy(n)}var e=dl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pn=!1};function us(t,e){Q.call(this),this.h=t||1,this.g=e||A,this.j=ie(this.qb,this),this.l=Date.now()}X(us,Q);m=us.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ee(this,"tick"),this.ga&&(fo(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fo(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}m.N=function(){us.$.N.call(this),fo(this),delete this.g};function po(t,e,n){if(typeof t=="function")n&&(t=ie(t,n));else if(t&&typeof t.handleEvent=="function")t=ie(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(t,e||0)}function pl(t){t.g=po(()=>{t.g=null,t.i&&(t.i=!1,pl(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Py extends st{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pl(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(t){st.call(this),this.h=t,this.g={}}X(bn,st);var Ha=[];function gl(t,e,n,r){Array.isArray(n)||(n&&(Ha[0]=n.toString()),n=Ha);for(var s=0;s<n.length;s++){var i=al(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ml(t){io(t.g,function(e,n){this.g.hasOwnProperty(n)&&ao(e)},t),t.g={}}bn.prototype.N=function(){bn.$.N.call(this),ml(this)};bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ls(){this.g=!0}ls.prototype.Ea=function(){this.g=!1};function by(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function ky(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ot(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ny(t,n)+(r?" "+r:"")})}function Dy(t,e){t.info(function(){return"TIMEOUT: "+e})}ls.prototype.info=function(){};function Ny(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return lo(n)}catch{return e}}var Rt={},za=null;function hs(){return za=za||new Q}Rt.Ta="serverreachability";function _l(t){oe.call(this,Rt.Ta,t)}X(_l,oe);function kn(t){const e=hs();ee(e,new _l(e))}Rt.STAT_EVENT="statevent";function yl(t,e){oe.call(this,Rt.STAT_EVENT,t),this.stat=e}X(yl,oe);function he(t){const e=hs();ee(e,new yl(e,t))}Rt.Ua="timingevent";function El(t,e){oe.call(this,Rt.Ua,t),this.size=e}X(El,oe);function qn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){t()},e)}var ds={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function go(){}go.prototype.h=null;function Ga(t){return t.h||(t.h=t.i())}function vl(){}var Wn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mo(){oe.call(this,"d")}X(mo,oe);function _o(){oe.call(this,"c")}X(_o,oe);var Ei;function fs(){}X(fs,go);fs.prototype.g=function(){return new XMLHttpRequest};fs.prototype.i=function(){return{}};Ei=new fs;function Hn(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new bn(this),this.P=Vy,t=pi?125:void 0,this.V=new us(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Il}function Il(){this.i=null,this.g="",this.h=!1}var Vy=45e3,Ti={},Vr={};m=Hn.prototype;m.setTimeout=function(t){this.P=t};function vi(t,e,n){t.L=1,t.v=gs(Be(e)),t.s=n,t.S=!0,wl(t,null)}function wl(t,e){t.G=Date.now(),zn(t),t.A=Be(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Dl(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Il,t.g=Yl(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Py(ie(t.Pa,t,t.g),t.O)),gl(t.U,t.g,"readystatechange",t.nb),e=t.I?il(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),kn(),by(t.j,t.u,t.A,t.m,t.W,t.s)}m.nb=function(t){t=t.target;const e=this.M;e&&Se(t)==3?e.l():this.Pa(t)};m.Pa=function(t){try{if(t==this.g)e:{const l=Se(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||pi||this.g&&(this.h.h||this.g.ja()||Ja(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?kn(3):kn(2)),ps(this);var n=this.g.da();this.ca=n;t:if(Al(this)){var r=Ja(this.g);t="";var s=r.length,i=Se(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ht(this),_n(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ky(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rn(a)){var u=a;break t}}u=null}if(n=u)Ot(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ii(this,n);else{this.i=!1,this.o=3,he(12),ht(this),_n(this);break e}}this.S?(Rl(this,l,o),pi&&this.i&&l==3&&(gl(this.U,this.V,"tick",this.mb),this.V.start())):(Ot(this.j,this.m,o,null),Ii(this,o)),l==4&&ht(this),this.i&&!this.J&&(l==4?Kl(this.l,this):(this.i=!1,zn(this)))}else eE(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,he(12)):(this.o=0,he(13)),ht(this),_n(this)}}}catch{}finally{}};function Al(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Rl(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Oy(t,n),s==Vr){e==4&&(t.o=4,he(14),r=!1),Ot(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ti){t.o=4,he(15),Ot(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ot(t.j,t.m,s,null),Ii(t,s);Al(t)&&s!=Vr&&s!=Ti&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,he(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),wo(e),e.M=!0,he(11))):(Ot(t.j,t.m,n,"[Invalid Chunked Response]"),ht(t),_n(t))}m.mb=function(){if(this.g){var t=Se(this.g),e=this.g.ja();this.C<e.length&&(ps(this),Rl(this,t,e),this.i&&t!=4&&zn(this))}};function Oy(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Vr:(n=Number(e.substring(n,r)),isNaN(n)?Ti:(r+=1,r+n>e.length?Vr:(e=e.slice(r,r+n),t.C=r+n,e)))}m.cancel=function(){this.J=!0,ht(this)};function zn(t){t.Y=Date.now()+t.P,Sl(t,t.P)}function Sl(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qn(ie(t.lb,t),e)}function ps(t){t.B&&(A.clearTimeout(t.B),t.B=null)}m.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Dy(this.j,this.A),this.L!=2&&(kn(),he(17)),ht(this),this.o=2,_n(this)):Sl(this,this.Y-t)};function _n(t){t.l.H==0||t.J||Kl(t.l,t)}function ht(t){ps(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,fo(t.V),ml(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ii(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||wi(n.i,t))){if(!t.K&&wi(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Lr(n),ys(n);else break e;Io(n),he(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=qn(ie(n.ib,n),6e3));if(1>=Ol(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else dt(n,11)}else if((t.K||n.g==t)&&Lr(n),!Rn(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(yo(i,i.h),i.h=null))}if(r.F){const I=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,x(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Jl(r,r.J?r.pa:null,r.Y),o.K){Ml(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(ps(a),zn(a)),r.g=o}else zl(r);0<n.j.length&&Es(n)}else u[0]!="stop"&&u[0]!="close"||dt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?dt(n,7):vo(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}kn(4)}catch{}}function My(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(is(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Ly(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(is(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Cl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(is(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ly(t),r=My(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Pl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function mt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mt){this.h=t.h,Or(this,t.j),this.s=t.s,this.g=t.g,Mr(this,t.m),this.l=t.l;var e=t.i,n=new Dn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ka(this,n),this.o=t.o}else t&&(e=String(t).match(Pl))?(this.h=!1,Or(this,e[1]||"",!0),this.s=ln(e[2]||""),this.g=ln(e[3]||"",!0),Mr(this,e[4]),this.l=ln(e[5]||"",!0),Ka(this,e[6]||"",!0),this.o=ln(e[7]||"")):(this.h=!1,this.i=new Dn(null,this.h))}mt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hn(e,Qa,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hn(e,Qa,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(hn(n,n.charAt(0)=="/"?By:Fy,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hn(n,jy)),t.join("")};function Be(t){return new mt(t)}function Or(t,e,n){t.j=n?ln(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ka(t,e,n){e instanceof Dn?(t.i=e,qy(t.i,t.h)):(n||(e=hn(e,$y)),t.i=new Dn(e,t.h))}function x(t,e,n){t.i.set(e,n)}function gs(t){return x(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ln(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Uy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Uy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qa=/[#\/\?@]/g,Fy=/[#\?:]/g,By=/[#\?]/g,$y=/[#\?@]/g,jy=/#/g;function Dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function it(t){t.g||(t.g=new Map,t.h=0,t.i&&xy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}m=Dn.prototype;m.add=function(t,e){it(this),this.i=null,t=Yt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bl(t,e){it(t),e=Yt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function kl(t,e){return it(t),e=Yt(t,e),t.g.has(e)}m.forEach=function(t,e){it(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};m.ta=function(){it(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};m.Z=function(t){it(this);let e=[];if(typeof t=="string")kl(this,t)&&(e=e.concat(this.g.get(Yt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};m.set=function(t,e){return it(this),this.i=null,t=Yt(this,t),kl(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};m.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Dl(t,e,n){bl(t,e),0<n.length&&(t.i=null,t.g.set(Yt(t,e),ro(n)),t.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Yt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qy(t,e){e&&!t.j&&(it(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(bl(this,r),Dl(this,s,n))},t)),t.j=e}var Wy=class{constructor(t,e){this.g=t,this.map=e}};function Nl(t){this.l=t||Hy,A.PerformanceNavigationTiming?(t=A.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hy=10;function Vl(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ol(t){return t.h?1:t.g?t.g.size:0}function wi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yo(t,e){t.g?t.g.add(e):t.h=e}function Ml(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Nl.prototype.cancel=function(){if(this.i=Ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ll(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ro(t.i)}var zy=class{stringify(t){return A.JSON.stringify(t,void 0)}parse(t){return A.JSON.parse(t,void 0)}};function Gy(){this.g=new zy}function Ky(t,e,n){const r=n||"";try{Cl(t,function(s,i){let o=s;$n(s)&&(o=lo(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Qy(t,e){const n=new ls;if(A.Image){const r=new Image;r.onload=lr(dr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=lr(dr,n,r,"TestLoadImage: error",!1,e),r.onabort=lr(dr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=lr(dr,n,r,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function dr(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Gn(t){this.l=t.ec||null,this.j=t.ob||!1}X(Gn,go);Gn.prototype.g=function(){return new ms(this.l,this.j)};Gn.prototype.i=function(t){return function(){return t}}({});function ms(t,e){Q.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Eo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}X(ms,Q);var Eo=0;m=ms.prototype;m.open=function(t,e){if(this.readyState!=Eo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nn(this)};m.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||A).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=Eo};m.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xl(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function xl(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}m.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Kn(this):Nn(this),this.readyState==3&&xl(this)}};m.Za=function(t){this.g&&(this.response=this.responseText=t,Kn(this))};m.Ya=function(t){this.g&&(this.response=t,Kn(this))};m.ka=function(){this.g&&Kn(this)};function Kn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nn(t)}m.setRequestHeader=function(t,e){this.v.append(t,e)};m.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Nn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Xy=A.JSON.parse;function j(t){Q.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ul,this.L=this.M=!1}X(j,Q);var Ul="",Jy=/^https?$/i,Yy=["POST","PUT"];m=j.prototype;m.Oa=function(t){this.M=t};m.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ei.g(),this.C=this.u?Ga(this.u):Ga(Ei),this.g.onreadystatechange=ie(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Xa(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=A.FormData&&t instanceof A.FormData,!(0<=tl(Yy,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$l(this),0<this.B&&((this.L=Zy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ie(this.ua,this)):this.A=po(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Xa(this,i)}};function Zy(t){return $t&&typeof t.timeout=="number"&&t.ontimeout!==void 0}m.ua=function(){typeof no<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ee(this,"timeout"),this.abort(8))};function Xa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fl(t),_s(t)}function Fl(t){t.F||(t.F=!0,ee(t,"complete"),ee(t,"error"))}m.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ee(this,"complete"),ee(this,"abort"),_s(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_s(this,!0)),j.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?Bl(this):this.kb())};m.kb=function(){Bl(this)};function Bl(t){if(t.h&&typeof no<"u"&&(!t.C[1]||Se(t)!=4||t.da()!=2)){if(t.v&&Se(t)==4)po(t.La,0,t);else if(ee(t,"readystatechange"),Se(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Pl)[1]||null;!s&&A.self&&A.self.location&&(s=A.self.location.protocol.slice(0,-1)),r=!Jy.test(s?s.toLowerCase():"")}n=r}if(n)ee(t,"complete"),ee(t,"success");else{t.m=6;try{var i=2<Se(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Fl(t)}}finally{_s(t)}}}}function _s(t,e){if(t.g){$l(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ee(t,"ready");try{n.onreadystatechange=r}catch{}}}function $l(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(A.clearTimeout(t.A),t.A=null)}m.isActive=function(){return!!this.g};function Se(t){return t.g?t.g.readyState:0}m.da=function(){try{return 2<Se(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Xy(e)}};function Ja(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ul:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function eE(t){const e={};t=(t.g&&2<=Se(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Rn(t[r]))continue;var n=Ry(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}yy(e,function(r){return r.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jl(t){let e="";return io(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function To(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jl(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):x(t,e,n))}function on(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ql(t){this.Ga=0,this.j=[],this.l=new ls,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=on("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=on("baseRetryDelayMs",5e3,t),this.hb=on("retryDelaySeedMs",1e4,t),this.eb=on("forwardChannelMaxRetries",2,t),this.xa=on("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Nl(t&&t.concurrentRequestLimit),this.Ja=new Gy,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=ql.prototype;m.ra=8;m.H=1;function vo(t){if(Wl(t),t.H==3){var e=t.W++,n=Be(t.I);if(x(n,"SID",t.K),x(n,"RID",e),x(n,"TYPE","terminate"),Qn(t,n),e=new Hn(t,t.l,e),e.L=2,e.v=gs(Be(n)),n=!1,A.navigator&&A.navigator.sendBeacon)try{n=A.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&A.Image&&(new Image().src=e.v,n=!0),n||(e.g=Yl(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zn(e)}Xl(t)}function ys(t){t.g&&(wo(t),t.g.cancel(),t.g=null)}function Wl(t){ys(t),t.u&&(A.clearTimeout(t.u),t.u=null),Lr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&A.clearTimeout(t.m),t.m=null)}function Es(t){if(!Vl(t.i)&&!t.m){t.m=!0;var e=t.Na;Cn||fl(),Pn||(Cn(),Pn=!0),ho.add(e,t),t.C=0}}function tE(t,e){return Ol(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=qn(ie(t.Na,t,e),Ql(t,t.C)),t.C++,!0)}m.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Hn(this,this.l,t);let i=this.s;if(this.U&&(i?(i=il(i),ol(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Hl(this,s,e),n=Be(this.I),x(n,"RID",t),x(n,"CVER",22),this.F&&x(n,"X-HTTP-Session-Id",this.F),Qn(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(jl(i)))+"&"+e:this.o&&To(n,this.o,i)),yo(this.i,s),this.bb&&x(n,"TYPE","init"),this.P?(x(n,"$req",e),x(n,"SID","null"),s.aa=!0,vi(s,n,null)):vi(s,n,e),this.H=2}}else this.H==3&&(t?Ya(this,t):this.j.length==0||Vl(this.i)||Ya(this))};function Ya(t,e){var n;e?n=e.m:n=t.W++;const r=Be(t.I);x(r,"SID",t.K),x(r,"RID",n),x(r,"AID",t.V),Qn(t,r),t.o&&t.s&&To(r,t.o,t.s),n=new Hn(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Hl(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),yo(t.i,n),vi(n,r,e)}function Qn(t,e){t.na&&io(t.na,function(n,r){x(e,r,n)}),t.h&&Cl({},function(n,r){x(e,r,n)})}function Hl(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ie(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{Ky(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function zl(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Cn||fl(),Pn||(Cn(),Pn=!0),ho.add(e,t),t.A=0}}function Io(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=qn(ie(t.Ma,t),Ql(t,t.A)),t.A++,!0)}m.Ma=function(){if(this.u=null,Gl(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=qn(ie(this.jb,this),t)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,he(10),ys(this),Gl(this))};function wo(t){t.B!=null&&(A.clearTimeout(t.B),t.B=null)}function Gl(t){t.g=new Hn(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Be(t.wa);x(e,"RID","rpc"),x(e,"SID",t.K),x(e,"AID",t.V),x(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&x(e,"TO",t.qa),x(e,"TYPE","xmlhttp"),Qn(t,e),t.o&&t.s&&To(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=gs(Be(e)),n.s=null,n.S=!0,wl(n,t)}m.ib=function(){this.v!=null&&(this.v=null,ys(this),Io(this),he(19))};function Lr(t){t.v!=null&&(A.clearTimeout(t.v),t.v=null)}function Kl(t,e){var n=null;if(t.g==e){Lr(t),wo(t),t.g=null;var r=2}else if(wi(t.i,e))n=e.F,Ml(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=hs(),ee(r,new El(r,n)),Es(t)}else zl(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&tE(t,e)||r==2&&Io(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:dt(t,5);break;case 4:dt(t,10);break;case 3:dt(t,6);break;default:dt(t,2)}}}function Ql(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function dt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ie(t.pb,t);n||(n=new mt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||Or(n,"https"),gs(n)),Qy(n.toString(),r)}else he(2);t.H=0,t.h&&t.h.za(e),Xl(t),Wl(t)}m.pb=function(t){t?(this.l.info("Successfully pinged google.com"),he(2)):(this.l.info("Failed to ping google.com"),he(1))};function Xl(t){if(t.H=0,t.ma=[],t.h){const e=Ll(t.i);(e.length!=0||t.j.length!=0)&&(ja(t.ma,e),ja(t.ma,t.j),t.i.i.length=0,ro(t.j),t.j.length=0),t.h.ya()}}function Jl(t,e,n){var r=n instanceof mt?Be(n):new mt(n);if(r.g!="")e&&(r.g=e+"."+r.g),Mr(r,r.m);else{var s=A.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new mt(null);r&&Or(i,r),e&&(i.g=e),s&&Mr(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&x(r,n,e),x(r,"VER",t.ra),Qn(t,r),r}function Yl(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new j(new Gn({ob:!0})):new j(t.va),e.Oa(t.J),e}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function Zl(){}m=Zl.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function xr(){if($t&&!(10<=Number(py)))throw Error("Environmental error: no available transport.")}xr.prototype.g=function(t,e){return new Ee(t,e)};function Ee(t,e){Q.call(this),this.g=new ql(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Rn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rn(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zt(this)}X(Ee,Q);Ee.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;he(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Jl(t,null,t.Y),Es(t)};Ee.prototype.close=function(){vo(this.g)};Ee.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lo(t),t=n);e.j.push(new Wy(e.fb++,t)),e.H==3&&Es(e)};Ee.prototype.N=function(){this.g.h=null,delete this.j,vo(this.g),delete this.g,Ee.$.N.call(this)};function eh(t){mo.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}X(eh,mo);function th(){_o.call(this),this.status=1}X(th,_o);function Zt(t){this.g=t}X(Zt,Zl);Zt.prototype.Ba=function(){ee(this.g,"a")};Zt.prototype.Aa=function(t){ee(this.g,new eh(t))};Zt.prototype.za=function(t){ee(this.g,new th)};Zt.prototype.ya=function(){ee(this.g,"b")};function nE(){this.blockSize=-1}function Ie(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}X(Ie,nE);Ie.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Js(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ie.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Js(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Js(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Js(this,r),s=0;break}}this.h=s,this.i+=e};Ie.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function V(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var rE={};function Ao(t){return-128<=t&&128>t?hy(t,function(e){return new V([e|0],0>e?-1:0)}):new V([t|0],0>t?-1:0)}function Ce(t){if(isNaN(t)||!isFinite(t))return xt;if(0>t)return Y(Ce(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ai;return new V(e,0)}function nh(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Y(nh(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ce(Math.pow(e,8)),r=xt,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Ce(Math.pow(e,i)),r=r.R(i).add(Ce(o))):(r=r.R(n),r=r.add(Ce(o)))}return r}var Ai=4294967296,xt=Ao(0),Ri=Ao(1),Za=Ao(16777216);m=V.prototype;m.ea=function(){if(Te(this))return-Y(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ai+r)*e,e*=Ai}return t};m.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(xe(this))return"0";if(Te(this))return"-"+Y(this).toString(t);for(var e=Ce(Math.pow(t,6)),n=this,r="";;){var s=Fr(n,e).g;n=Ur(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,xe(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};m.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function xe(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Te(t){return t.h==-1}m.X=function(t){return t=Ur(this,t),Te(t)?-1:xe(t)?0:1};function Y(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new V(n,~t.h).add(Ri)}m.abs=function(){return Te(this)?Y(this):this};m.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new V(n,n[n.length-1]&-2147483648?-1:0)};function Ur(t,e){return t.add(Y(e))}m.R=function(t){if(xe(this)||xe(t))return xt;if(Te(this))return Te(t)?Y(this).R(Y(t)):Y(Y(this).R(t));if(Te(t))return Y(this.R(Y(t)));if(0>this.X(Za)&&0>t.X(Za))return Ce(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,fr(n,2*r+2*s),n[2*r+2*s+1]+=i*c,fr(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,fr(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,fr(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new V(n,0)};function fr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function an(t,e){this.g=t,this.h=e}function Fr(t,e){if(xe(e))throw Error("division by zero");if(xe(t))return new an(xt,xt);if(Te(t))return e=Fr(Y(t),e),new an(Y(e.g),Y(e.h));if(Te(e))return e=Fr(t,Y(e)),new an(Y(e.g),e.h);if(30<t.g.length){if(Te(t)||Te(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ri,r=e;0>=r.X(t);)n=ec(n),r=ec(r);var s=kt(n,1),i=kt(r,1);for(r=kt(r,2),n=kt(n,2);!xe(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=kt(r,1),n=kt(n,1)}return e=Ur(t,s.R(e)),new an(s,e)}for(s=xt;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Ce(n),o=i.R(e);Te(o)||0<o.X(t);)n-=r,i=Ce(n),o=i.R(e);xe(i)&&(i=Ri),s=s.add(i),t=Ur(t,o)}return new an(s,t)}m.gb=function(t){return Fr(this,t).h};m.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new V(n,this.h&t.h)};m.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new V(n,this.h|t.h)};m.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new V(n,this.h^t.h)};function ec(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new V(n,t.h)}function kt(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new V(s,t.h)}xr.prototype.createWebChannel=xr.prototype.g;Ee.prototype.send=Ee.prototype.u;Ee.prototype.open=Ee.prototype.m;Ee.prototype.close=Ee.prototype.close;ds.NO_ERROR=0;ds.TIMEOUT=8;ds.HTTP_ERROR=6;Tl.COMPLETE="complete";vl.EventType=Wn;Wn.OPEN="a";Wn.CLOSE="b";Wn.ERROR="c";Wn.MESSAGE="d";Q.prototype.listen=Q.prototype.O;j.prototype.listenOnce=j.prototype.P;j.prototype.getLastError=j.prototype.Sa;j.prototype.getLastErrorCode=j.prototype.Ia;j.prototype.getStatus=j.prototype.da;j.prototype.getResponseJson=j.prototype.Wa;j.prototype.getResponseText=j.prototype.ja;j.prototype.send=j.prototype.ha;j.prototype.setWithCredentials=j.prototype.Oa;Ie.prototype.digest=Ie.prototype.l;Ie.prototype.reset=Ie.prototype.reset;Ie.prototype.update=Ie.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=Ce;V.fromString=nh;var sE=function(){return new xr},iE=function(){return hs()},Ys=ds,oE=Tl,aE=Rt,tc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cE=Gn,pr=vl,uE=j,lE=Ie,Ut=V;const nc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}re.UNAUTHENTICATED=new re(null),re.GOOGLE_CREDENTIALS=new re("google-credentials-uid"),re.FIRST_PARTY=new re("first-party-uid"),re.MOCK_USER=new re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let en="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const vt=new Fi("@firebase/firestore");function cn(){return vt.logLevel}function T(t,...e){if(vt.logLevel<=b.DEBUG){const n=e.map(Ro);vt.debug(`Firestore (${en}): ${t}`,...n)}}function $e(t,...e){if(vt.logLevel<=b.ERROR){const n=e.map(Ro);vt.error(`Firestore (${en}): ${t}`,...n)}}function jt(t,...e){if(vt.logLevel<=b.WARN){const n=e.map(Ro);vt.warn(`Firestore (${en}): ${t}`,...n)}}function Ro(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function w(t="Unexpected state"){const e=`FIRESTORE (${en}) INTERNAL ASSERTION FAILED: `+t;throw $e(e),new Error(e)}function F(t,e){t||w()}function C(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends ss{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ue{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(re.UNAUTHENTICATED))}shutdown(){}}class dE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fE{constructor(e){this.t=e,this.currentUser=re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Ue;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ue,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ue)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new rh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new re(e)}}class pE{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=re.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gE{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pE(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _E{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),this.R=n.token,new mE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function yE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=yE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function N(t,e){return t<e?-1:t>e?1:0}function qt(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class G{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return G.fromMillis(Date.now())}static fromDate(e){return G.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new G(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class R{constructor(e){this.timestamp=e}static fromTimestamp(e){return new R(e)}static min(){return new R(new G(0,0))}static max(){return new R(new G(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&w(),r===void 0?r=e.length-n:r>e.length-n&&w(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class U extends Vn{construct(e,n,r){return new U(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new _(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new U(n)}static emptyPath(){return new U([])}}const EE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends Vn{construct(e,n,r){return new Z(e,n,r)}static isValidIdentifier(e){return EE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new _(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new _(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z(n)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(U.fromString(e))}static fromName(e){return new v(U.fromString(e).popFirst(5))}static empty(){return new v(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&U.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return U.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new U(e.slice()))}}function TE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=R.fromTimestamp(r===1e9?new G(n+1,0):new G(n,r));return new Ze(s,v.empty(),e)}function vE(t){return new Ze(t.readTime,t.key,-1)}class Ze{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ze(R.min(),v.empty(),-1)}static max(){return new Ze(R.max(),v.empty(),-1)}}function IE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=v.comparator(t.documentKey,e.documentKey),n!==0?n:N(t.largestBatchId,e.largestBatchId))}/**
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
 */const wE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function Xn(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==wE)throw t;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new g((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):g.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):g.reject(n)}static resolve(e){return new g((n,r)=>{n(e)})}static reject(e){return new g((n,r)=>{r(e)})}static waitFor(e){return new g((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=g.resolve(!1);for(const r of e)n=n.next(s=>s?g.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new g((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new g((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Jn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class So{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}So._e=-1;function Ts(t){return t==null}function Br(t){return t===0&&1/t==-1/0}function RE(t){return typeof t=="number"&&Number.isInteger(t)&&!Br(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function rc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function St(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class B{constructor(e,n){this.comparator=e,this.root=n||J.EMPTY}insert(e,n){return new B(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(e){return new B(this.comparator,this.root.remove(e,this.comparator).copy(null,null,J.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gr(this.root,e,this.comparator,!1)}getReverseIterator(){return new gr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gr(this.root,e,this.comparator,!0)}}class gr{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class J{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??J.RED,this.left=s??J.EMPTY,this.right=i??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new J(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return J.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();const e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,n,r,s,i){return this}insert(e,n,r){return new J(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class te{constructor(e){this.comparator=e,this.data=new B(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sc(this.data.getIterator())}getIteratorFrom(e){return new sc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof te)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new te(this.comparator);return n.data=e,n}}class sc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class me{constructor(e){this.fields=e,e.sort(Z.comparator)}static empty(){return new me([])}unionWith(e){let n=new te(Z.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new me(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qt(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class oh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new oh("Invalid base64 string: "+i):i}}(e);return new ue(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const SE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function et(t){if(F(!!t),typeof t=="string"){let e=0;const n=SE.exec(t);if(F(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:H(t.seconds),nanos:H(t.nanos)}}function H(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function It(t){return typeof t=="string"?ue.fromBase64String(t):ue.fromUint8Array(t)}/**
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
 */function Co(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Po(t){const e=t.mapValue.fields.__previous_value__;return Co(e)?Po(e):e}function On(t){const e=et(t.mapValue.fields.__local_write_time__.timestampValue);return new G(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class CE{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Mn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const mr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Co(t)?4:PE(t)?9007199254740991:10:w()}function Oe(t,e){if(t===e)return!0;const n=wt(t);if(n!==wt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return On(t).isEqual(On(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=et(s.timestampValue),a=et(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return It(s.bytesValue).isEqual(It(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return H(s.geoPointValue.latitude)===H(i.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return H(s.integerValue)===H(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=H(s.doubleValue),a=H(i.doubleValue);return o===a?Br(o)===Br(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return qt(t.arrayValue.values||[],e.arrayValue.values||[],Oe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(rc(o)!==rc(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Oe(o[c],a[c])))return!1;return!0}(t,e);default:return w()}}function Ln(t,e){return(t.values||[]).find(n=>Oe(n,e))!==void 0}function Wt(t,e){if(t===e)return 0;const n=wt(t),r=wt(e);if(n!==r)return N(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=H(i.integerValue||i.doubleValue),c=H(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ic(t.timestampValue,e.timestampValue);case 4:return ic(On(t),On(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(i,o){const a=It(i),c=It(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=N(a[u],c[u]);if(l!==0)return l}return N(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=N(H(i.latitude),H(o.latitude));return a!==0?a:N(H(i.longitude),H(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Wt(a[u],c[u]);if(l)return l}return N(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===mr.mapValue&&o===mr.mapValue)return 0;if(i===mr.mapValue)return 1;if(o===mr.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=N(c[h],l[h]);if(d!==0)return d;const f=Wt(a[c[h]],u[l[h]]);if(f!==0)return f}return N(c.length,l.length)}(t.mapValue,e.mapValue);default:throw w()}}function ic(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return N(t,e);const n=et(t),r=et(e),s=N(n.seconds,r.seconds);return s!==0?s:N(n.nanos,r.nanos)}function Ht(t){return Si(t)}function Si(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=et(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return It(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return v.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Si(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Si(n.fields[o])}`;return s+"}"}(t.mapValue):w()}function oc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ci(t){return!!t&&"integerValue"in t}function bo(t){return!!t&&"arrayValue"in t}function ac(t){return!!t&&"nullValue"in t}function cc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ir(t){return!!t&&"mapValue"in t}function yn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return St(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class de{constructor(e){this.value=e}static empty(){return new de({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ir(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yn(n)}setAll(e){let n=Z.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=yn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ir(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Oe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ir(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){St(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new de(yn(this.value))}}function ah(t){const e=[];return St(t.fields,(n,r)=>{const s=new Z([n]);if(Ir(r)){const i=ah(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new me(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class se{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new se(e,0,R.min(),R.min(),R.min(),de.empty(),0)}static newFoundDocument(e,n,r,s){return new se(e,1,n,R.min(),r,s,0)}static newNoDocument(e,n){return new se(e,2,n,R.min(),R.min(),de.empty(),0)}static newUnknownDocument(e,n){return new se(e,3,n,R.min(),R.min(),de.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=de.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=de.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class $r{constructor(e,n){this.position=e,this.inclusive=n}}function uc(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),n.key):r=Wt(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Oe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class jr{constructor(e,n="asc"){this.field=e,this.dir=n}}function bE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ch{}class z extends ch{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DE(e,n,r):n==="array-contains"?new OE(e,r):n==="in"?new ME(e,r):n==="not-in"?new LE(e,r):n==="array-contains-any"?new xE(e,r):new z(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NE(e,r):new VE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wt(n,this.value)):n!==null&&wt(this.value)===wt(n)&&this.matchesComparison(Wt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class we extends ch{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new we(e,n)}matches(e){return uh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function uh(t){return t.op==="and"}function lh(t){return kE(t)&&uh(t)}function kE(t){for(const e of t.filters)if(e instanceof we)return!1;return!0}function Pi(t){if(t instanceof z)return t.field.canonicalString()+t.op.toString()+Ht(t.value);if(lh(t))return t.filters.map(e=>Pi(e)).join(",");{const e=t.filters.map(n=>Pi(n)).join(",");return`${t.op}(${e})`}}function hh(t,e){return t instanceof z?function(r,s){return s instanceof z&&r.op===s.op&&r.field.isEqual(s.field)&&Oe(r.value,s.value)}(t,e):t instanceof we?function(r,s){return s instanceof we&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&hh(o,s.filters[a]),!0):!1}(t,e):void w()}function dh(t){return t instanceof z?function(n){return`${n.field.canonicalString()} ${n.op} ${Ht(n.value)}`}(t):t instanceof we?function(n){return n.op.toString()+" {"+n.getFilters().map(dh).join(" ,")+"}"}(t):"Filter"}class DE extends z{constructor(e,n,r){super(e,n,r),this.key=v.fromName(r.referenceValue)}matches(e){const n=v.comparator(e.key,this.key);return this.matchesComparison(n)}}class NE extends z{constructor(e,n){super(e,"in",n),this.keys=fh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VE extends z{constructor(e,n){super(e,"not-in",n),this.keys=fh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>v.fromName(r.referenceValue))}class OE extends z{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bo(n)&&Ln(n.arrayValue,this.value)}}class ME extends z{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ln(this.value.arrayValue,n)}}class LE extends z{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ln(this.value.arrayValue,n)}}class xE extends z{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ln(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class UE{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function hc(t,e=null,n=[],r=[],s=null,i=null,o=null){return new UE(t,e,n,r,s,i,o)}function ko(t){const e=C(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pi(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ts(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ht(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ht(r)).join(",")),e.ce=n}return e.ce}function Do(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lc(t.startAt,e.startAt)&&lc(t.endAt,e.endAt)}function bi(t){return v.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Yn{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function FE(t,e,n,r,s,i,o,a){return new Yn(t,e,n,r,s,i,o,a)}function vs(t){return new Yn(t)}function dc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ph(t){return t.collectionGroup!==null}function En(t){const e=C(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new te(Z.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new jr(i,r))}),n.has(Z.keyField().canonicalString())||e.le.push(new jr(Z.keyField(),r))}return e.le}function De(t){const e=C(t);return e.he||(e.he=BE(e,En(t))),e.he}function BE(t,e){if(t.limitType==="F")return hc(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new jr(s.field,i)});const n=t.endAt?new $r(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $r(t.startAt.position,t.startAt.inclusive):null;return hc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ki(t,e){const n=t.filters.concat([e]);return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qr(t,e,n){return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Is(t,e){return Do(De(t),De(e))&&t.limitType===e.limitType}function gh(t){return`${ko(De(t))}|lt:${t.limitType}`}function Dt(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>dh(s)).join(", ")}]`),Ts(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ht(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ht(s)).join(",")),`Target(${r})`}(De(t))}; limitType=${t.limitType})`}function ws(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):v.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of En(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=uc(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,En(r),s)||r.endAt&&!function(o,a,c){const u=uc(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,En(r),s))}(t,e)}function $E(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mh(t){return(e,n)=>{let r=!1;for(const s of En(t)){const i=jE(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jE(t,e,n){const r=t.field.isKeyField()?v.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Wt(c,u):w()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return w()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){St(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ih(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const qE=new B(v.comparator);function je(){return qE}const _h=new B(v.comparator);function dn(...t){let e=_h;for(const n of t)e=e.insert(n.key,n);return e}function yh(t){let e=_h;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ft(){return Tn()}function Eh(){return Tn()}function Tn(){return new tn(t=>t.toString(),(t,e)=>t.isEqual(e))}const WE=new B(v.comparator),HE=new te(v.comparator);function P(...t){let e=HE;for(const n of t)e=e.add(n);return e}const zE=new te(N);function GE(){return zE}/**
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
 */function Th(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(e)?"-0":e}}function vh(t){return{integerValue:""+t}}function KE(t,e){return RE(e)?vh(e):Th(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class As{constructor(){this._=void 0}}function QE(t,e,n){return t instanceof Wr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Co(i)&&(i=Po(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof zt?wh(t,e):t instanceof Gt?Ah(t,e):function(s,i){const o=Ih(s,i),a=fc(o)+fc(s.Ie);return Ci(o)&&Ci(s.Ie)?vh(a):Th(s.serializer,a)}(t,e)}function XE(t,e,n){return t instanceof zt?wh(t,e):t instanceof Gt?Ah(t,e):n}function Ih(t,e){return t instanceof Hr?function(r){return Ci(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Wr extends As{}class zt extends As{constructor(e){super(),this.elements=e}}function wh(t,e){const n=Rh(e);for(const r of t.elements)n.some(s=>Oe(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gt extends As{constructor(e){super(),this.elements=e}}function Ah(t,e){let n=Rh(e);for(const r of t.elements)n=n.filter(s=>!Oe(s,r));return{arrayValue:{values:n}}}class Hr extends As{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function fc(t){return H(t.integerValue||t.doubleValue)}function Rh(t){return bo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Sh{constructor(e,n){this.field=e,this.transform=n}}function JE(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof zt&&s instanceof zt||r instanceof Gt&&s instanceof Gt?qt(r.elements,s.elements,Oe):r instanceof Hr&&s instanceof Hr?Oe(r.Ie,s.Ie):r instanceof Wr&&s instanceof Wr}(t.transform,e.transform)}class YE{constructor(e,n){this.version=e,this.transformResults=n}}class _e{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _e}static exists(e){return new _e(void 0,e)}static updateTime(e){return new _e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rs{}function Ch(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new No(t.key,_e.none()):new Zn(t.key,t.data,_e.none());{const n=t.data,r=de.empty();let s=new te(Z.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ot(t.key,r,new me(s.toArray()),_e.none())}}function ZE(t,e,n){t instanceof Zn?function(s,i,o){const a=s.value.clone(),c=gc(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ot?function(s,i,o){if(!wr(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=gc(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ph(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vn(t,e,n,r){return t instanceof Zn?function(i,o,a,c){if(!wr(i.precondition,o))return a;const u=i.value.clone(),l=mc(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ot?function(i,o,a,c){if(!wr(i.precondition,o))return a;const u=mc(i.fieldTransforms,c,o),l=o.data;return l.setAll(Ph(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return wr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function eT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ih(r.transform,s||null);i!=null&&(n===null&&(n=de.empty()),n.set(r.field,i))}return n||null}function pc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qt(r,s,(i,o)=>JE(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zn extends Rs{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ot extends Rs{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ph(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gc(t,e,n){const r=new Map;F(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,XE(o,a,n[s]))}return r}function mc(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QE(i,o,e))}return r}class No extends Rs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tT extends Rs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ZE(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vn(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vn(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Eh();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Ch(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),P())}isEqual(e){return this.batchId===e.batchId&&qt(this.mutations,e.mutations,(n,r)=>pc(n,r))&&qt(this.baseMutations,e.baseMutations,(n,r)=>pc(n,r))}}class Vo{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){F(e.mutations.length===r.length);let s=function(){return WE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vo(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class rT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var W,D;function iT(t){switch(t){default:return w();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function bh(t){if(t===void 0)return $e("GRPC error has no .code"),p.UNKNOWN;switch(t){case W.OK:return p.OK;case W.CANCELLED:return p.CANCELLED;case W.UNKNOWN:return p.UNKNOWN;case W.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case W.INTERNAL:return p.INTERNAL;case W.UNAVAILABLE:return p.UNAVAILABLE;case W.UNAUTHENTICATED:return p.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case W.NOT_FOUND:return p.NOT_FOUND;case W.ALREADY_EXISTS:return p.ALREADY_EXISTS;case W.PERMISSION_DENIED:return p.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case W.ABORTED:return p.ABORTED;case W.OUT_OF_RANGE:return p.OUT_OF_RANGE;case W.UNIMPLEMENTED:return p.UNIMPLEMENTED;case W.DATA_LOSS:return p.DATA_LOSS;default:return w()}}(D=W||(W={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function oT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const aT=new Ut([4294967295,4294967295],0);function _c(t){const e=oT().encode(t),n=new lE;return n.update(e),new Uint8Array(n.digest())}function yc(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ut([n,r],0),new Ut([s,i],0)]}class Oo{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fn(`Invalid padding: ${n}`);if(r<0)throw new fn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fn(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fn(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ut.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Ut.fromNumber(r)));return s.compare(aT)===1&&(s=new Ut([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=_c(e),[r,s]=yc(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Oo(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=_c(e),[r,s]=yc(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ss{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,er.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ss(R.min(),s,new B(N),je(),P())}}class er{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new er(r,n,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ar{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class kh{constructor(e,n){this.targetId=e,this.fe=n}}class Dh{constructor(e,n,r=ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ec{constructor(){this.ge=0,this.pe=vc(),this.ye=ue.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=P(),n=P(),r=P();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:w()}}),new er(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=vc()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class cT{constructor(e){this.Le=e,this.ke=new Map,this.qe=je(),this.Qe=Tc(),this.Ke=new B(N)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:w()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(bi(i))if(r===0){const o=new v(i.path);this.We(n,o,se.newNoDocument(o,R.min()))}else F(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=It(r).toUint8Array()}catch(c){if(c instanceof oh)return jt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Oo(o,s,i)}catch(c){return jt(c instanceof fn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&bi(a.target)){const c=new v(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,se.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=P();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ss(e,n,this.Ke,this.qe,r);return this.qe=je(),this.Qe=Tc(),this.Ke=new B(N),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Ec,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new te(N),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||T("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Ec),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Tc(){return new B(v.comparator)}function vc(){return new B(v.comparator)}const uT={asc:"ASCENDING",desc:"DESCENDING"},lT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hT={and:"AND",or:"OR"};class dT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Di(t,e){return t.useProto3Json||Ts(e)?e:{value:e}}function zr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nh(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fT(t,e){return zr(t,e.toTimestamp())}function Ne(t){return F(!!t),R.fromTimestamp(function(n){const r=et(n);return new G(r.seconds,r.nanos)}(t))}function Mo(t,e){return function(r){return new U(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Vh(t){const e=U.fromString(t);return F(xh(e)),e}function Ni(t,e){return Mo(t.databaseId,e.path)}function Zs(t,e){const n=Vh(e);if(n.get(1)!==t.databaseId.projectId)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new v(Oh(n))}function Vi(t,e){return Mo(t.databaseId,e)}function pT(t){const e=Vh(t);return e.length===4?U.emptyPath():Oh(e)}function Oi(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Oh(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ic(t,e,n){return{name:Ni(t,e),fields:n.value.mapValue.fields}}function gT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:w()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(F(l===void 0||typeof l=="string"),ue.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),ue.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:bh(u.code);return new _(l,u.message||"")}(o);n=new Dh(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zs(t,r.document.name),i=Ne(r.document.updateTime),o=r.document.createTime?Ne(r.document.createTime):R.min(),a=new de({mapValue:{fields:r.document.fields}}),c=se.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ar(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zs(t,r.document),i=r.readTime?Ne(r.readTime):R.min(),o=se.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ar([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zs(t,r.document),i=r.removedTargetIds||[];n=new Ar([],i,s,null)}else{if(!("filter"in e))return w();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new sT(s,i),a=r.targetId;n=new kh(a,o)}}return n}function mT(t,e){let n;if(e instanceof Zn)n={update:Ic(t,e.key,e.value)};else if(e instanceof No)n={delete:Ni(t,e.key)};else if(e instanceof ot)n={update:Ic(t,e.key,e.data),updateMask:RT(e.fieldMask)};else{if(!(e instanceof tT))return w();n={verify:Ni(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Wr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Hr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw w()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:w()}(t,e.precondition)),n}function _T(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Ne(s.updateTime):Ne(i);return o.isEqual(R.min())&&(o=Ne(i)),new YE(o,s.transformResults||[])}(n,e))):[]}function yT(t,e){return{documents:[Vi(t,e.path)]}}function ET(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Vi(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vi(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Lh(we.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Nt(h.field),direction:IT(h.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Di(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function TT(t){let e=pT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){F(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(h){const d=Mh(h);return d instanceof we&&lh(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new jr(Vt(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ts(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new $r(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new $r(f,d)}(n.endAt)),FE(e,s,o,i,a,"F",c,u)}function vT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mh(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vt(n.unaryFilter.field);return z.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vt(n.unaryFilter.field);return z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vt(n.unaryFilter.field);return z.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vt(n.unaryFilter.field);return z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t):t.fieldFilter!==void 0?function(n){return z.create(Vt(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return we.create(n.compositeFilter.filters.map(r=>Mh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return w()}}(n.compositeFilter.op))}(t):w()}function IT(t){return uT[t]}function wT(t){return lT[t]}function AT(t){return hT[t]}function Nt(t){return{fieldPath:t.canonicalString()}}function Vt(t){return Z.fromServerFormat(t.fieldPath)}function Lh(t){return t instanceof z?function(n){if(n.op==="=="){if(cc(n.value))return{unaryFilter:{field:Nt(n.field),op:"IS_NAN"}};if(ac(n.value))return{unaryFilter:{field:Nt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cc(n.value))return{unaryFilter:{field:Nt(n.field),op:"IS_NOT_NAN"}};if(ac(n.value))return{unaryFilter:{field:Nt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nt(n.field),op:wT(n.op),value:n.value}}}(t):t instanceof we?function(n){const r=n.getFilters().map(s=>Lh(s));return r.length===1?r[0]:{compositeFilter:{op:AT(n.op),filters:r}}}(t):w()}function RT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qe{constructor(e,n,r,s,i=R.min(),o=R.min(),a=ue.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Qe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qe(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ST{constructor(e){this.ut=e}}function CT(t){const e=TT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class PT{constructor(){this.on=new bT}addToCollectionParentIndex(e,n){return this.on.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return g.resolve()}deleteFieldIndex(e,n){return g.resolve()}deleteAllFieldIndexes(e){return g.resolve()}createTargetIndexes(e,n){return g.resolve()}getDocumentsMatchingTarget(e,n){return g.resolve(null)}getIndexType(e,n){return g.resolve(0)}getFieldIndexes(e,n){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,n){return g.resolve(Ze.min())}getMinOffsetFromCollectionGroup(e,n){return g.resolve(Ze.min())}updateCollectionGroup(e,n,r){return g.resolve()}updateIndexEntries(e,n){return g.resolve()}}class bT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new te(U.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new te(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kt{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Kt(0)}static Nn(){return new Kt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class kT{constructor(){this.changes=new tn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,se.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class DT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class NT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vn(r.mutation,s,me.empty(),G.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,P()).next(()=>r))}getLocalViewOfDocuments(e,n,r=P()){const s=ft();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=dn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ft();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,P()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=je();const o=Tn(),a=function(){return Tn()}();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof ot)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),vn(l.mutation,u,l.mutation.getFieldMask(),G.now())):o.set(u.key,me.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new DT(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Tn();let s=new B((o,a)=>o-a),i=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||me.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||P()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Eh();l.forEach(d=>{if(!i.has(d)){const f=Ch(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return v.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ph(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):g.resolve(ft());let a=-1,c=i;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,P())).next(l=>({batchId:a,changes:yh(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new v(n)).next(r=>{let s=dn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=dn();return this.indexManager.getCollectionParents(e,i).next(a=>g.forEach(a,c=>{const u=function(h,d){return new Yn(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,se.newInvalidDocument(l)))});let a=dn();return o.forEach((c,u)=>{const l=i.get(c);l!==void 0&&vn(l.mutation,u,me.empty(),G.now()),ws(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class VT{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return g.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}}(n)),g.resolve()}getNamedQuery(e,n){return g.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:CT(s.bundledQuery),readTime:Ne(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class OT{constructor(){this.overlays=new B(v.comparator),this.lr=new Map}getOverlay(e,n){return g.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ft();return g.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),g.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),g.resolve()}getOverlaysForCollection(e,n,r){const s=ft(),i=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return g.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new B((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=ft(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ft(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return g.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rT(n,r));let i=this.lr.get(n);i===void 0&&(i=P(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lo{constructor(){this.hr=new te(K.Pr),this.Ir=new te(K.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new K(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new K(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new v(new U([])),r=new K(n,e),s=new K(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new v(new U([])),r=new K(n,e),s=new K(n,e+1);let i=P();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new K(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class K{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return v.comparator(e.key,n.key)||N(e.gr,n.gr)}static Tr(e,n){return N(e.gr,n.gr)||v.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class MT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new te(K.Pr)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nT(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new K(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,n){return g.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new K(n,0),s=new K(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new te(N);return n.forEach(s=>{const i=new K(s,0),o=new K(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),g.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;v.isDocumentKey(i)||(i=i.child(""));const o=new K(new v(i),0);let a=new te(N);return this.yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.gr)),!0)},o),g.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){F(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return g.forEach(n.mutations,s=>{const i=new K(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new K(n,0),s=this.yr.firstAfterOrEqual(r);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class LT{constructor(e){this.Cr=e,this.docs=function(){return new B(v.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():se.newInvalidDocument(n))}getEntries(e,n){let r=je();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():se.newInvalidDocument(s))}),g.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=je();const o=n.path,a=new v(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||IE(vE(l),r)<=0||(s.has(l.key)||ws(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(e,n,r,s){w()}vr(e,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xT(this)}getSize(e){return g.resolve(this.size)}}class xT extends kT{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),g.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class UT{constructor(e){this.persistence=e,this.Fr=new tn(n=>ko(n),Do),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Lo,this.targetCount=0,this.Nr=Kt.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),g.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Kt(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.kn(n),g.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return g.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),g.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),g.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return g.resolve(r)}containsKey(e,n){return g.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class FT{constructor(e,n){this.Br={},this.overlays={},this.Lr=new So(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new UT(this),this.indexManager=new PT,this.remoteDocumentCache=function(s){return new LT(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new ST(n),this.Kr=new VT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new MT(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){T("MemoryPersistence","Starting transaction:",e);const s=new BT(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return g.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class BT extends AE{constructor(e){super(),this.currentSequenceNumber=e}}class xo{constructor(e){this.persistence=e,this.Gr=new Lo,this.zr=null}static jr(e){return new xo(e)}get Hr(){if(this.zr)return this.zr;throw w()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),g.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),g.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Hr,r=>{const s=v.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,R.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return g.or([()=>g.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Uo{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=P(),s=P();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Uo(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class $T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class jT{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $T;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(cn()<=b.DEBUG&&T("QueryEngine","SDK will not create cache indexes for query:",Dt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),g.resolve()):(cn()<=b.DEBUG&&T("QueryEngine","Query:",Dt(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(cn()<=b.DEBUG&&T("QueryEngine","The SDK decides to create cache indexes for query:",Dt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,De(n))):g.resolve())}zi(e,n){if(dc(n))return g.resolve(null);let r=De(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qr(n,null,"F"),r=De(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=P(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Yi(n,a);return this.Zi(n,u,o,c.readTime)?this.zi(e,qr(n,null,"F")):this.Xi(e,u,n,c)}))})))}ji(e,n,r,s){return dc(n)||s.isEqual(R.min())?g.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?g.resolve(null):(cn()<=b.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Dt(n)),this.Xi(e,o,n,TE(s,-1)).next(a=>a))})}Yi(e,n){let r=new te(mh(e));return n.forEach((s,i)=>{ws(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return cn()<=b.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",Dt(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ze.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class qT{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new B(N),this.ns=new tn(i=>ko(i),Do),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NT(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function WT(t,e,n,r){return new qT(t,e,n,r)}async function Uh(t,e){const n=C(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=P();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function HT(t,e){const n=C(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=g.resolve();return d.forEach(y=>{f=f.next(()=>l.getEntry(c,y)).next(I=>{const E=u.docVersions.get(y);F(E!==null),I.version.compareTo(E)<0&&(h.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),l.addEntry(I)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=P();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Fh(t){const e=C(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function zT(t,e){const n=C(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ue.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(I,E,k){return I.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,f,l)&&a.push(n.qr.updateTargetData(i,f))});let c=je(),u=P();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(GT(i,o,e.documentUpdates).next(l=>{c=l.us,u=l.cs})),!r.isEqual(R.min())){const l=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.ts=s,i))}function GT(t,e,n){let r=P(),s=P();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=je();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{us:o,cs:s}})}function KT(t,e){const n=C(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QT(t,e){const n=C(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,g.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Qe(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Mi(t,e,n){const r=C(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Jn(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function wc(t,e,n){const r=C(t);let s=R.min(),i=P();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=C(c),d=h.ns.get(l);return d!==void 0?g.resolve(h.ts.get(d)):h.qr.getTargetData(u,l)}(r,o,De(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:R.min(),n?i:P())).next(a=>(XT(r,$E(e),a),{documents:a,ls:i})))}function XT(t,e,n){let r=t.rs.get(e)||R.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Ac{constructor(){this.activeTargetIds=GE()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JT{constructor(){this.eo=new Ac,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Ac,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class YT{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Rc{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let _r=null;function ei(){return _r===null?_r=function(){return 268435456+Math.round(2147483648*Math.random())}():_r++,"0x"+_r.toString(16)}/**
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
 */const ZT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ev{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ne="WebChannelConnection";class tv extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=ei(),c=this.So(n,r);T("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,i,o),this.Do(n,c,u,s).then(l=>(T("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw jt("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+en}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=ZT[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=ei();return new Promise((o,a)=>{const c=new uE;c.setWithCredentials(!0),c.listenOnce(oE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ys.NO_ERROR:const l=c.getResponseJson();T(ne,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Ys.TIMEOUT:T(ne,`RPC '${e}' ${i} timed out`),a(new _(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ys.HTTP_ERROR:const h=c.getStatus();if(T(ne,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(E){const k=E.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(k)>=0?k:p.UNKNOWN}(f.status);a(new _(y,f.message))}else a(new _(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new _(p.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{T(ne,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);T(ne,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}vo(e,n,r){const s=ei(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sE(),a=iE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new cE({})),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");T(ne,`Creating RPC '${e}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const y=new ev({co:E=>{f?T(ne,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(T(ne,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),T(ne,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},lo:()=>h.close()}),I=(E,k,L)=>{E.listen(k,O=>{try{L(O)}catch(M){setTimeout(()=>{throw M},0)}})};return I(h,pr.EventType.OPEN,()=>{f||T(ne,`RPC '${e}' stream ${s} transport opened.`)}),I(h,pr.EventType.CLOSE,()=>{f||(f=!0,T(ne,`RPC '${e}' stream ${s} transport closed`),y.Ro())}),I(h,pr.EventType.ERROR,E=>{f||(f=!0,jt(ne,`RPC '${e}' stream ${s} transport errored:`,E),y.Ro(new _(p.UNAVAILABLE,"The operation could not be completed")))}),I(h,pr.EventType.MESSAGE,E=>{var k;if(!f){const L=E.data[0];F(!!L);const O=L,M=O.error||((k=O[0])===null||k===void 0?void 0:k.error);if(M){T(ne,`RPC '${e}' stream ${s} received error:`,M);const fe=M.status;let pe=function(rn){const or=W[rn];if(or!==void 0)return bh(or)}(fe),ct=M.message;pe===void 0&&(pe=p.INTERNAL,ct="Unknown error status: "+fe+" with message "+M.message),f=!0,y.Ro(new _(pe,ct)),h.close()}else T(ne,`RPC '${e}' stream ${s} received:`,L),y.Vo(L)}}),I(a,aE.STAT_EVENT,E=>{E.stat===tc.PROXY?T(ne,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===tc.NOPROXY&&T(ne,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function ti(){return typeof document<"u"?document:null}/**
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
 */function Cs(t){return new dT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bh{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&T("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $h{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Bh(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?($e(n.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new _(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return T("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nv extends $h{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=gT(this.serializer,e),r=function(i){if(!("targetChange"in i))return R.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?R.min():o.readTime?Ne(o.readTime):R.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Oi(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=bi(c)?{documents:yT(i,c)}:{query:ET(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Nh(i,o.resumeToken);const u=Di(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(R.min())>0){a.readTime=zr(i,o.snapshotVersion.toTimestamp());const u=Di(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=vT(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Oi(this.serializer),n.removeTarget=e,this.e_(n)}}class rv extends $h{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=_T(e.writeResults,e.commitTime),r=Ne(e.commitTime);return this.listener.I_(r,n)}return F(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Oi(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mT(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sv extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(p.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(p.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class iv{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?($e(n),this.f_=!1):T("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ov{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Ct(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=C(c);u.C_.add(4),await tr(u),u.M_.set("Unknown"),u.C_.delete(4),await Ps(u)}(this))})}),this.M_=new iv(r,s)}}async function Ps(t){if(Ct(t))for(const e of t.v_)await e(!0)}async function tr(t){for(const e of t.v_)await e(!1)}function jh(t,e){const n=C(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),$o(n)?Bo(n):nn(n).Ho()&&Fo(n,e))}function qh(t,e){const n=C(t),r=nn(n);n.D_.delete(e),r.Ho()&&Wh(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Ct(n)&&n.M_.set("Unknown"))}function Fo(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(R.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}nn(t).u_(e)}function Wh(t,e){t.x_.Oe(e),nn(t).c_(e)}function Bo(t){t.x_=new cT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),nn(t).start(),t.M_.g_()}function $o(t){return Ct(t)&&!nn(t).jo()&&t.D_.size>0}function Ct(t){return C(t).C_.size===0}function Hh(t){t.x_=void 0}async function av(t){t.D_.forEach((e,n)=>{Fo(t,e)})}async function cv(t,e){Hh(t),$o(t)?(t.M_.w_(e),Bo(t)):t.M_.set("Unknown")}async function uv(t,e,n){if(t.M_.set("Online"),e instanceof Dh&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){T("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gr(t,r)}else if(e instanceof Ar?t.x_.$e(e):e instanceof kh?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(R.min()))try{const r=await Fh(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.D_.get(u);l&&i.D_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.D_.get(c);if(!l)return;i.D_.set(c,l.withResumeToken(ue.EMPTY_BYTE_STRING,l.snapshotVersion)),Wh(i,c);const h=new Qe(l.target,c,u,l.sequenceNumber);Fo(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){T("RemoteStore","Failed to raise snapshot:",r),await Gr(t,r)}}async function Gr(t,e,n){if(!Jn(e))throw e;t.C_.add(1),await tr(t),t.M_.set("Offline"),n||(n=()=>Fh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Ps(t)})}function zh(t,e){return e().catch(n=>Gr(t,n,e))}async function bs(t){const e=C(t),n=tt(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;lv(e);)try{const s=await KT(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,hv(e,s)}catch(s){await Gr(e,s)}Gh(e)&&Kh(e)}function lv(t){return Ct(t)&&t.b_.length<10}function hv(t,e){t.b_.push(e);const n=tt(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Gh(t){return Ct(t)&&!tt(t).jo()&&t.b_.length>0}function Kh(t){tt(t).start()}async function dv(t){tt(t).E_()}async function fv(t){const e=tt(t);for(const n of t.b_)e.P_(n.mutations)}async function pv(t,e,n){const r=t.b_.shift(),s=Vo.from(r,e,n);await zh(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await bs(t)}async function gv(t,e){e&&tt(t).h_&&await async function(r,s){if(function(o){return iT(o)&&o!==p.ABORTED}(s.code)){const i=r.b_.shift();tt(r).Yo(),await zh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await bs(r)}}(t,e),Gh(t)&&Kh(t)}async function Sc(t,e){const n=C(t);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=Ct(n);n.C_.add(3),await tr(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Ps(n)}async function mv(t,e){const n=C(t);e?(n.C_.delete(2),await Ps(n)):e||(n.C_.add(2),await tr(n),n.M_.set("Unknown"))}function nn(t){return t.O_||(t.O_=function(n,r,s){const i=C(n);return i.A_(),new nv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:av.bind(null,t),Io:cv.bind(null,t),a_:uv.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),$o(t)?Bo(t):t.M_.set("Unknown")):(await t.O_.stop(),Hh(t))})),t.O_}function tt(t){return t.N_||(t.N_=function(n,r,s){const i=C(n);return i.A_(),new rv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:dv.bind(null,t),Io:gv.bind(null,t),T_:fv.bind(null,t),I_:pv.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await bs(t)):(await t.N_.stop(),t.b_.length>0&&(T("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jo{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new jo(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qo(t,e){if($e("AsyncQueue",`${e}: ${t}`),Jn(t))return new _(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ft{constructor(e){this.comparator=e?(n,r)=>e(n,r)||v.comparator(n.key,r.key):(n,r)=>v.comparator(n.key,r.key),this.keyedMap=dn(),this.sortedSet=new B(this.comparator)}static emptySet(e){return new Ft(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ft;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cc{constructor(){this.B_=new B(v.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):w():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qt{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qt(e,n,Ft.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Is(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _v{constructor(){this.k_=void 0,this.listeners=[]}}class yv{constructor(){this.queries=new tn(e=>gh(e),Is),this.onlineState="Unknown",this.q_=new Set}}async function Wo(t,e){const n=C(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new _v),s)try{i.k_=await n.onListen(r)}catch(o){const a=qo(o,`Initialization of query '${Dt(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&zo(n)}async function Ho(t,e){const n=C(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Ev(t,e){const n=C(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&zo(n)}function Tv(t,e,n){const r=C(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function zo(t){t.q_.forEach(e=>{e.next()})}class Go{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Qt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qh{constructor(e){this.key=e}}class Xh{constructor(e){this.key=e}}class vv{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=P(),this.mutatedKeys=P(),this._a=mh(e),this.aa=new Ft(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Cc,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),f=ws(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),I=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?y!==I&&(r.track({type:3,doc:f}),E=!0):this.ha(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this._a(f,c)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(f?(o=o.add(f),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const i=e.la.L_();i.sort((u,l)=>function(d,f){const y=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return y(d)-y(f)}(u.type,l.type)||this._a(u.doc,l.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,i.length!==0||c?{snapshot:new Qt(this.query,e.aa,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Cc,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=P(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new Xh(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new Qh(r))}),n}da(e){this.ia=e.ls,this.oa=P();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Qt.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Iv{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wv{constructor(e){this.key=e,this.Ra=!1}}class Av{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new tn(a=>gh(a),Is),this.fa=new Map,this.ga=new Set,this.pa=new B(v.comparator),this.ya=new Map,this.wa=new Lo,this.Sa={},this.ba=new Map,this.Da=Kt.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Rv(t,e){const n=Mv(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await QT(n.localStore,De(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Sv(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&jh(n.remoteStore,o)}return s}async function Sv(t,e,n,r,s){t.va=(h,d,f)=>async function(I,E,k,L){let O=E.view.ca(k);O.Zi&&(O=await wc(I.localStore,E.query,!1).then(({documents:pe})=>E.view.ca(pe,O)));const M=L&&L.targetChanges.get(E.targetId),fe=E.view.applyChanges(O,I.isPrimaryClient,M);return bc(I,E.targetId,fe.Ta),fe.snapshot}(t,h,d,f);const i=await wc(t.localStore,e,!0),o=new vv(e,i.ls),a=o.ca(i.documents),c=er.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);bc(t,n,u.Ta);const l=new Iv(e,n,o);return t.ma.set(e,l),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function Cv(t,e){const n=C(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Is(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Mi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qh(n.remoteStore,r.targetId),Li(n,r.targetId)}).catch(Xn)):(Li(n,r.targetId),await Mi(n.localStore,r.targetId,!0))}async function Pv(t,e,n){const r=Lv(t);try{const s=await function(o,a){const c=C(o),u=G.now(),l=a.reduce((f,y)=>f.add(y.key),P());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=je(),I=P();return c.ss.getEntries(f,l).next(E=>{y=E,y.forEach((k,L)=>{L.isValidDocument()||(I=I.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,y)).next(E=>{h=E;const k=[];for(const L of a){const O=eT(L,h.get(L.key).overlayedDocument);O!=null&&k.push(new ot(L.key,O,ah(O.value.mapValue),_e.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,k,a)}).next(E=>{d=E;const k=E.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(f,E.batchId,k)})}).then(()=>({batchId:d.batchId,changes:yh(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Sa[o.currentUser.toKey()];u||(u=new B(N)),u=u.insert(a,c),o.Sa[o.currentUser.toKey()]=u}(r,s.batchId,n),await nr(r,s.changes),await bs(r.remoteStore)}catch(s){const i=qo(s,"Failed to persist write");n.reject(i)}}async function Jh(t,e){const n=C(t);try{const r=await zT(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(F(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?F(o.Ra):s.removedDocuments.size>0&&(F(o.Ra),o.Ra=!1))}),await nr(n,r,e)}catch(r){await Xn(r)}}function Pc(t,e,n){const r=C(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=C(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&zo(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bv(t,e,n){const r=C(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new B(v.comparator);o=o.insert(i,se.newNoDocument(i,R.min()));const a=P().add(i),c=new Ss(R.min(),new Map,new B(N),o,a);await Jh(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Ko(r)}else await Mi(r.localStore,e,!1).then(()=>Li(r,e,n)).catch(Xn)}async function kv(t,e){const n=C(t),r=e.batch.batchId;try{const s=await HT(n.localStore,e);Zh(n,r,null),Yh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nr(n,s)}catch(s){await Xn(s)}}async function Dv(t,e,n){const r=C(t);try{const s=await function(o,a){const c=C(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(F(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);Zh(r,e,n),Yh(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nr(r,s)}catch(s){await Xn(s)}}function Yh(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Zh(t,e,n){const r=C(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Li(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||ed(t,r)})}function ed(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(qh(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Ko(t))}function bc(t,e,n){for(const r of n)r instanceof Qh?(t.wa.addReference(r.key,e),Nv(t,r)):r instanceof Xh?(T("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||ed(t,r.key)):w()}function Nv(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(T("SyncEngine","New document in limbo: "+n),t.ga.add(r),Ko(t))}function Ko(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new v(U.fromString(e)),r=t.Da.next();t.ya.set(r,new wv(n)),t.pa=t.pa.insert(n,r),jh(t.remoteStore,new Qe(De(vs(n.path)),r,"TargetPurposeLimboResolution",So._e))}}async function nr(t,e,n){const r=C(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=Uo.Qi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,u){const l=C(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.ki,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Jn(h))throw h;T("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.ts.get(d),y=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(y);l.ts=l.ts.insert(d,I)}}}(r.localStore,i))}async function Vv(t,e){const n=C(t);if(!n.currentUser.isEqual(e)){T("SyncEngine","User change. New user:",e.toKey());const r=await Uh(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new _(p.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nr(n,r._s)}}function Ov(t,e){const n=C(t),r=n.ya.get(e);if(r&&r.Ra)return P().add(r.key);{let s=P();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function Mv(t){const e=C(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ov.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bv.bind(null,e),e.Va.a_=Ev.bind(null,e.eventManager),e.Va.Fa=Tv.bind(null,e.eventManager),e}function Lv(t){const e=C(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dv.bind(null,e),e}class kc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Cs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return WT(this.persistence,new jT,e.initialUser,this.serializer)}createPersistence(e){return new FT(xo.jr,this.serializer)}createSharedClientState(e){return new JT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vv.bind(null,this.syncEngine),await mv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yv}()}createDatastore(e){const n=Cs(e.databaseInfo.databaseId),r=function(i){return new tv(i)}(e.databaseInfo);return function(i,o,a,c){return new sv(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new ov(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Pc(this.syncEngine,n,0),function(){return Rc.D()?new Rc:new YT}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,l){const h=new Av(s,i,o,a,c,u);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=C(n);T("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await tr(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Uv{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=re.UNAUTHENTICATED,this.clientId=sh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{T("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(T("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ni(t,e){t.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Uh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bv(t);T("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Sc(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Sc(e.remoteStore,i)),t._onlineComponents=e}function Fv(t){return t.name==="FirebaseError"?t.code===p.FAILED_PRECONDITION||t.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Bv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await ni(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Fv(n))throw n;jt("Error using user provided cache. Falling back to memory cache: "+n),await ni(t,new kc)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await ni(t,new kc);return t._offlineComponents}async function td(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await Dc(t,t._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await Dc(t,new xv))),t._onlineComponents}function $v(t){return td(t).then(e=>e.syncEngine)}async function Kr(t){const e=await td(t),n=e.eventManager;return n.onListen=Rv.bind(null,e.syncEngine),n.onUnlisten=Cv.bind(null,e.syncEngine),n}function jv(t,e,n={}){const r=new Ue;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new Qo({next:d=>{o.enqueueAndForget(()=>Ho(i,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new _(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new _(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Go(vs(a.path),l,{includeMetadataChanges:!0,J_:!0});return Wo(i,h)}(await Kr(t),t.asyncQueue,e,n,r)),r.promise}function qv(t,e,n={}){const r=new Ue;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new Qo({next:d=>{o.enqueueAndForget(()=>Ho(i,h)),d.fromCache&&c.source==="server"?u.reject(new _(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Go(a,l,{includeMetadataChanges:!0,J_:!0});return Wo(i,h)}(await Kr(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function nd(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Nc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function rd(t,e,n){if(!n)throw new _(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wv(t,e,n,r){if(e===!0&&r===!0)throw new _(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vc(t){if(!v.isDocumentKey(t))throw new _(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Oc(t){if(v.isDocumentKey(t))throw new _(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ks(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":w()}function ye(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ks(t);throw new _(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Hv(t,e){if(e<=0)throw new _(p.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Mc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new _(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ds{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hE;switch(r.type){case"firstParty":return new gE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Nc.get(n);r&&(T("ComponentProvider","Removing Datastore"),Nc.delete(n),r.terminate())}(this),Promise.resolve()}}function zv(t,e,n,r={}){var s;const i=(t=ye(t,Ds))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=re.MOCK_USER;else{a=Y_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new _(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new re(u)}t._authCredentials=new dE(new rh(a,c))}}/**
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
 */class at{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new at(this.firestore,e,this._query)}}class ae{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ye(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}}class Ye extends at{constructor(e,n,r){super(e,n,vs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new v(e))}withConverter(e){return new Ye(this.firestore,e,this._path)}}function DI(t,e,...n){if(t=ve(t),rd("collection","path",e),t instanceof Ds){const r=U.fromString(e,...n);return Oc(r),new Ye(t,null,r)}{if(!(t instanceof ae||t instanceof Ye))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return Oc(r),new Ye(t.firestore,null,r)}}function Gv(t,e,...n){if(t=ve(t),arguments.length===1&&(e=sh.newId()),rd("doc","path",e),t instanceof Ds){const r=U.fromString(e,...n);return Vc(r),new ae(t,null,new v(r))}{if(!(t instanceof ae||t instanceof Ye))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return Vc(r),new ae(t.firestore,t instanceof Ye?t.converter:null,new v(r))}}/**
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
 */class Kv{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Bh(this,"async_queue_retry"),this.iu=()=>{const n=ti();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=ti();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=ti();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ue;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Jn(e))throw e;T("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=jo.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&w()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Lc(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class nt extends Ds{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Kv}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sd(this),this._firestoreClient.terminate()}}function Qv(t,e){const n=typeof t=="object"?t:$i(),r=typeof t=="string"?t:e||"(default)",s=Xr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=J_("firestore");i&&zv(s,...i)}return s}function rr(t){return t._firestoreClient||sd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sd(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,u,l){return new CE(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,nd(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Uv(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(ue.fromBase64String(e))}catch(n){throw new _(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xt(ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ir{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Xv=/^__.*__$/;class Jv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ot(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zn(e,this.data,n,this.fieldTransforms)}}class id{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ot(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function od(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class Ns{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Ns(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Qr(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(od(this.Iu)&&Xv.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Yv{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cs(e)}pu(e,n,r,s=!1){return new Ns({Iu:e,methodName:n,gu:r,path:Z.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vs(t){const e=t._freezeSettings(),n=Cs(t._databaseId);return new Yv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ad(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Jo("Data must be an object, but it was:",o,r);const a=hd(r,o);let c,u;if(i.merge)c=new me(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=xi(e,h,n);if(!o.contains(d))throw new _(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fd(l,d)||l.push(d)}c=new me(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Jv(new de(a),c,u)}class Os extends ir{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Os}}function cd(t,e,n){return new Ns({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Zv extends ir{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=cd(this,e,!0),r=this.yu.map(i=>Pt(i,n)),s=new zt(r);return new Sh(e.path,s)}isEqual(e){return this===e}}class eI extends ir{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=cd(this,e,!0),r=this.yu.map(i=>Pt(i,n)),s=new Gt(r);return new Sh(e.path,s)}isEqual(e){return this===e}}function ud(t,e,n,r){const s=t.pu(1,e,n);Jo("Data must be an object, but it was:",s,r);const i=[],o=de.empty();St(r,(c,u)=>{const l=Yo(e,c,n);u=ve(u);const h=s.Ru(l);if(u instanceof Os)i.push(l);else{const d=Pt(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new me(i);return new id(o,a,s.fieldTransforms)}function ld(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[xi(e,r,n)],c=[s];if(i.length%2!=0)throw new _(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(xi(e,i[d])),c.push(i[d+1]);const u=[],l=de.empty();for(let d=a.length-1;d>=0;--d)if(!fd(u,a[d])){const f=a[d];let y=c[d];y=ve(y);const I=o.Ru(f);if(y instanceof Os)u.push(f);else{const E=Pt(y,I);E!=null&&(u.push(f),l.set(f,E))}}const h=new me(u);return new id(l,h,o.fieldTransforms)}function tI(t,e,n,r=!1){return Pt(n,t.pu(r?4:3,e))}function Pt(t,e){if(dd(t=ve(t)))return Jo("Unsupported field value:",e,t),hd(t,e);if(t instanceof ir)return function(r,s){if(!od(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Pt(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return KE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=G.fromDate(r);return{timestampValue:zr(s.serializer,i)}}if(r instanceof G){const i=new G(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zr(s.serializer,i)}}if(r instanceof Xo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xt)return{bytesValue:Nh(s.serializer,r._byteString)};if(r instanceof ae){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mo(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${ks(r)}`)}(t,e)}function hd(t,e){const n={};return ih(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):St(t,(r,s)=>{const i=Pt(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function dd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof G||t instanceof Xo||t instanceof Xt||t instanceof ae||t instanceof ir)}function Jo(t,e,n){if(!dd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ks(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function xi(t,e,n){if((e=ve(e))instanceof sr)return e._internalPath;if(typeof e=="string")return Yo(t,e);throw Qr("Field path arguments must be of type string or ",t,!1,void 0,n)}const nI=new RegExp("[~\\*/\\[\\]]");function Yo(t,e,n){if(e.search(nI)>=0)throw Qr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sr(...e.split("."))._internalPath}catch{throw Qr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qr(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new _(p.INVALID_ARGUMENT,a+t+c)}function fd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class pd{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rI extends pd{data(){return super.data()}}function Zo(t,e){return typeof e=="string"?Yo(t,e):e instanceof sr?e._internalPath:e._delegate._internalPath}/**
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
 */function gd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ea{}class md extends ea{}function NI(t,e,...n){let r=[];e instanceof ea&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof ta).length,a=i.filter(c=>c instanceof Ms).length;if(o>1||o>0&&a>0)throw new _(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ms extends md{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ms(e,n,r)}_apply(e){const n=this._parse(e);return _d(e._query,n),new at(e.firestore,e.converter,ki(e._query,n))}_parse(e){const n=Vs(e.firestore);return function(i,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Uc(h,l);const f=[];for(const y of h)f.push(xc(c,i,y));d={arrayValue:{values:f}}}else d=xc(c,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Uc(h,l),d=tI(a,o,h,l==="in"||l==="not-in");return z.create(u,l,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function VI(t,e,n){const r=e,s=Zo("where",t);return Ms._create(s,r,n)}class ta extends ea{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ta(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:we.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)_d(o,c),o=ki(o,c)}(e._query,n),new at(e.firestore,e.converter,ki(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class na extends md{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new na(e,n,r)}_apply(e){return new at(e.firestore,e.converter,qr(e._query,this._limit,this._limitType))}}function OI(t){return Hv("limit",t),na._create("limit",t,"F")}function xc(t,e,n){if(typeof(n=ve(n))=="string"){if(n==="")throw new _(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ph(e)&&n.indexOf("/")!==-1)throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(U.fromString(n));if(!v.isDocumentKey(r))throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return oc(t,new v(r))}if(n instanceof ae)return oc(t,n._key);throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ks(n)}.`)}function Uc(t,e){if(!Array.isArray(t)||t.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _d(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sI{convertValue(e,n="none"){switch(wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(It(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw w()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return St(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Xo(H(e.latitude),H(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Po(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(On(e));default:return null}}convertTimestamp(e){const n=et(e);return new G(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=U.fromString(e);F(xh(r));const s=new Mn(r.get(1),r.get(3)),i=new v(r.popFirst(5));return s.isEqual(n)||$e(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function yd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class pn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ed extends pd{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Rr extends Ed{data(e={}){return super.data(e)}}class Td{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new pn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Rr(this._firestore,this._userDataWriter,r.key,r,new pn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Rr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Rr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:iI(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}/**
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
 */function MI(t){t=ye(t,ae);const e=ye(t.firestore,nt);return jv(rr(e),t._key).then(n=>vd(e,t,n))}class ra extends sI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,n)}}function LI(t){t=ye(t,at);const e=ye(t.firestore,nt),n=rr(e),r=new ra(e);return gd(t._query),qv(n,t._query).then(s=>new Td(e,r,t,s))}function xI(t,e,n){t=ye(t,ae);const r=ye(t.firestore,nt),s=yd(t.converter,e,n);return sa(r,[ad(Vs(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,_e.none())])}function UI(t,e,n,...r){t=ye(t,ae);const s=ye(t.firestore,nt),i=Vs(s);let o;return o=typeof(e=ve(e))=="string"||e instanceof sr?ld(i,"updateDoc",t._key,e,n,r):ud(i,"updateDoc",t._key,e),sa(s,[o.toMutation(t._key,_e.exists(!0))])}function oI(t,...e){var n,r,s;t=ve(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Lc(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Lc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof ae)u=ye(t.firestore,nt),l=vs(t._key.path),c={next:h=>{e[o]&&e[o](vd(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ye(t,at);u=ye(h.firestore,nt),l=h._query;const d=new ra(u);c={next:f=>{e[o]&&e[o](new Td(u,d,h,f))},error:e[o+1],complete:e[o+2]},gd(t._query)}return function(d,f,y,I){const E=new Qo(I),k=new Go(f,E,y);return d.asyncQueue.enqueueAndForget(async()=>Wo(await Kr(d),k)),()=>{E.Na(),d.asyncQueue.enqueueAndForget(async()=>Ho(await Kr(d),k))}}(rr(u),l,a,c)}function sa(t,e){return function(r,s){const i=new Ue;return r.asyncQueue.enqueueAndForget(async()=>Pv(await $v(r),s,i)),i.promise}(rr(t),e)}function vd(t,e,n){const r=n.docs.get(e._key),s=new ra(t);return new Ed(t,s,e._key,r,new pn(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class aI{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Vs(e)}set(e,n,r){this._verifyNotCommitted();const s=ri(e,this._firestore),i=yd(s.converter,n,r),o=ad(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,_e.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=ri(e,this._firestore);let o;return o=typeof(n=ve(n))=="string"||n instanceof sr?ld(this._dataReader,"WriteBatch.update",i._key,n,r,s):ud(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,_e.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ri(e,this._firestore);return this._mutations=this._mutations.concat(new No(n._key,_e.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new _(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ri(t,e){if((t=ve(t)).firestore!==e)throw new _(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function FI(...t){return new Zv("arrayUnion",t)}function BI(...t){return new eI("arrayRemove",t)}/**
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
 */function $I(t){return rr(t=ye(t,nt)),new aI(t,e=>sa(t,e))}(function(e,n=!0){(function(s){en=s})(At),yt(new ry("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new nt(new fE(r.getProvider("auth-internal")),new _E(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new _(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mn(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Pe(nc,"4.3.2",e),Pe(nc,"4.3.2","esm2017")})();const cI={apiKey:"AIzaSyDw9JLeLulv4NWcfXmiASirOhw8OCY0fCQ",authDomain:"svelteapp-ae112.firebaseapp.com",projectId:"svelteapp-ae112",storageBucket:"svelteapp-ae112.appspot.com",messagingSenderId:"57862613065",appId:"1:57862613065:web:82f060baffc23e522cf798"};Gc(cI);const uI=Qv(),un=dm(),jI=x_();function lI(){let t;if(!un||!globalThis.window){console.warn("Auth is not initialized or not in browser");const{subscribe:n}=si(null);return{subscribe:n}}const{subscribe:e}=si((un==null?void 0:un.currentUser)??null,n=>(t=tg(un,r=>{n(r)}),()=>t()));return{subscribe:e}}const hI=lI();function dI(t){let e;const n=Gv(uI,t),{subscribe:r}=si(null,s=>(e=oI(n,i=>{s(i.data()??null)}),()=>e()));return{subscribe:r,ref:n,id:n.id}}const qI=Id(hI,(t,e)=>{if(t)return dI(`users/${t.uid}`).subscribe(e);e(null)});export{He as G,hI as a,TI as b,un as c,jI as d,RI as e,UI as f,SI as g,Gv as h,uI as i,MI as j,DI as k,OI as l,VI as m,LI as n,FI as o,BI as p,NI as q,CI as r,vI as s,xI as t,qI as u,$I as w};
