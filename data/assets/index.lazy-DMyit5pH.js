var Et=i=>{throw TypeError(i)};var nt=(i,e,s)=>e.has(i)||Et("Cannot "+s);var u=(i,e,s)=>(nt(i,e,"read from private field"),s?s.call(i):e.get(i)),C=(i,e,s)=>e.has(i)?Et("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,s),F=(i,e,s,t)=>(nt(i,e,"write to private field"),t?t.call(i,s):e.set(i,s),s),A=(i,e,s)=>(nt(i,e,"access private method"),s);import{S as Kt,p as xt,r as _,s as ut,a as it,n as Wt,i as ct,b as Rt,t as Ht,f as qt,c as Gt,d as Ct,e as _t,g as x,u as Zt,j as g,h as Bt,k as St,R as Jt,l as Xt}from"./index-D4iKu_G7.js";var T,v,X,j,N,K,$,P,Y,W,H,U,Q,L,q,y,J,ht,dt,ft,mt,vt,pt,yt,Dt,Pt,Yt=(Pt=class extends Kt{constructor(e,s){super();C(this,y);C(this,T);C(this,v);C(this,X);C(this,j);C(this,N);C(this,K);C(this,$);C(this,P);C(this,Y);C(this,W);C(this,H);C(this,U);C(this,Q);C(this,L);C(this,q,new Set);this.options=s,F(this,T,e),F(this,P,null),F(this,$,xt()),this.options.experimental_prefetchInRender||u(this,$).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(u(this,v).addObserver(this),kt(u(this,v),this.options)?A(this,y,J).call(this):this.updateResult(),A(this,y,mt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return gt(u(this,v),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return gt(u(this,v),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,A(this,y,vt).call(this),A(this,y,pt).call(this),u(this,v).removeObserver(this)}setOptions(e,s){const t=this.options,r=u(this,v);if(this.options=u(this,T).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof _(this.options.enabled,u(this,v))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");A(this,y,yt).call(this),u(this,v).setOptions(this.options),t._defaulted&&!ut(this.options,t)&&u(this,T).getQueryCache().notify({type:"observerOptionsUpdated",query:u(this,v),observer:this});const a=this.hasListeners();a&&jt(u(this,v),r,this.options,t)&&A(this,y,J).call(this),this.updateResult(s),a&&(u(this,v)!==r||_(this.options.enabled,u(this,v))!==_(t.enabled,u(this,v))||it(this.options.staleTime,u(this,v))!==it(t.staleTime,u(this,v)))&&A(this,y,ht).call(this);const n=A(this,y,dt).call(this);a&&(u(this,v)!==r||_(this.options.enabled,u(this,v))!==_(t.enabled,u(this,v))||n!==u(this,L))&&A(this,y,ft).call(this,n)}getOptimisticResult(e){const s=u(this,T).getQueryCache().build(u(this,T),e),t=this.createResult(s,e);return ee(this,t)&&(F(this,j,t),F(this,K,this.options),F(this,N,u(this,v).state)),t}getCurrentResult(){return u(this,j)}trackResult(e,s){const t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(r),s==null||s(r),e[r])})}),t}trackProp(e){u(this,q).add(e)}getCurrentQuery(){return u(this,v)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=u(this,T).defaultQueryOptions(e),t=u(this,T).getQueryCache().build(u(this,T),s);return t.fetch().then(()=>this.createResult(t,s))}fetch(e){return A(this,y,J).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),u(this,j)))}createResult(e,s){var O;const t=u(this,v),r=this.options,a=u(this,j),n=u(this,N),o=u(this,K),c=e!==t?e.state:u(this,X),{state:h}=e;let f={...h},d=!1,m;if(s._optimisticResults){const R=this.hasListeners(),D=!R&&kt(e,s),z=R&&jt(e,t,s,r);(D||z)&&(f={...f,...Gt(h.data,e.options)}),s._optimisticResults==="isRestoring"&&(f.fetchStatus="idle")}let{error:b,errorUpdatedAt:S,status:w}=f;if(s.select&&f.data!==void 0)if(a&&f.data===(n==null?void 0:n.data)&&s.select===u(this,Y))m=u(this,W);else try{F(this,Y,s.select),m=s.select(f.data),m=Ct(a==null?void 0:a.data,m,s),F(this,W,m),F(this,P,null)}catch(R){F(this,P,R)}else m=f.data;if(s.placeholderData!==void 0&&m===void 0&&w==="pending"){let R;if(a!=null&&a.isPlaceholderData&&s.placeholderData===(o==null?void 0:o.placeholderData))R=a.data;else if(R=typeof s.placeholderData=="function"?s.placeholderData((O=u(this,H))==null?void 0:O.state.data,u(this,H)):s.placeholderData,s.select&&R!==void 0)try{R=s.select(R),F(this,P,null)}catch(D){F(this,P,D)}R!==void 0&&(w="success",m=Ct(a==null?void 0:a.data,R,s),d=!0)}u(this,P)&&(b=u(this,P),m=u(this,W),S=Date.now(),w="error");const E=f.fetchStatus==="fetching",V=w==="pending",I=w==="error",k=V&&E,B=m!==void 0,M={status:w,fetchStatus:f.fetchStatus,isPending:V,isSuccess:w==="success",isError:I,isInitialLoading:k,isLoading:k,data:m,dataUpdatedAt:f.dataUpdatedAt,error:b,errorUpdatedAt:S,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>c.dataUpdateCount||f.errorUpdateCount>c.errorUpdateCount,isFetching:E,isRefetching:E&&!V,isLoadingError:I&&!B,isPaused:f.fetchStatus==="paused",isPlaceholderData:d,isRefetchError:I&&B,isStale:wt(e,s),refetch:this.refetch,promise:u(this,$)};if(this.options.experimental_prefetchInRender){const R=tt=>{M.status==="error"?tt.reject(M.error):M.data!==void 0&&tt.resolve(M.data)},D=()=>{const tt=F(this,$,M.promise=xt());R(tt)},z=u(this,$);switch(z.status){case"pending":e.queryHash===t.queryHash&&R(z);break;case"fulfilled":(M.status==="error"||M.data!==z.value)&&D();break;case"rejected":(M.status!=="error"||M.error!==z.reason)&&D();break}}return M}updateResult(e){const s=u(this,j),t=this.createResult(u(this,v),this.options);if(F(this,N,u(this,v).state),F(this,K,this.options),u(this,N).data!==void 0&&F(this,H,u(this,v)),ut(t,s))return;F(this,j,t);const r={},a=()=>{if(!s)return!0;const{notifyOnChangeProps:n}=this.options,o=typeof n=="function"?n():n;if(o==="all"||!o&&!u(this,q).size)return!0;const l=new Set(o??u(this,q));return this.options.throwOnError&&l.add("error"),Object.keys(u(this,j)).some(c=>{const h=c;return u(this,j)[h]!==s[h]&&l.has(h)})};(e==null?void 0:e.listeners)!==!1&&a()&&(r.listeners=!0),A(this,y,Dt).call(this,{...r,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&A(this,y,mt).call(this)}},T=new WeakMap,v=new WeakMap,X=new WeakMap,j=new WeakMap,N=new WeakMap,K=new WeakMap,$=new WeakMap,P=new WeakMap,Y=new WeakMap,W=new WeakMap,H=new WeakMap,U=new WeakMap,Q=new WeakMap,L=new WeakMap,q=new WeakMap,y=new WeakSet,J=function(e){A(this,y,yt).call(this);let s=u(this,v).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(Wt)),s},ht=function(){A(this,y,vt).call(this);const e=it(this.options.staleTime,u(this,v));if(ct||u(this,j).isStale||!Rt(e))return;const t=Ht(u(this,j).dataUpdatedAt,e)+1;F(this,U,setTimeout(()=>{u(this,j).isStale||this.updateResult()},t))},dt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(u(this,v)):this.options.refetchInterval)??!1},ft=function(e){A(this,y,pt).call(this),F(this,L,e),!(ct||_(this.options.enabled,u(this,v))===!1||!Rt(u(this,L))||u(this,L)===0)&&F(this,Q,setInterval(()=>{(this.options.refetchIntervalInBackground||qt.isFocused())&&A(this,y,J).call(this)},u(this,L)))},mt=function(){A(this,y,ht).call(this),A(this,y,ft).call(this,A(this,y,dt).call(this))},vt=function(){u(this,U)&&(clearTimeout(u(this,U)),F(this,U,void 0))},pt=function(){u(this,Q)&&(clearInterval(u(this,Q)),F(this,Q,void 0))},yt=function(){const e=u(this,T).getQueryCache().build(u(this,T),this.options);if(e===u(this,v))return;const s=u(this,v);F(this,v,e),F(this,X,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},Dt=function(e){_t.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(u(this,j))}),u(this,T).getQueryCache().notify({query:u(this,v),type:"observerResultsUpdated"})})},Pt);function te(i,e){return _(e.enabled,i)!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&e.retryOnMount===!1)}function kt(i,e){return te(i,e)||i.state.data!==void 0&&gt(i,e,e.refetchOnMount)}function gt(i,e,s){if(_(e.enabled,i)!==!1){const t=typeof s=="function"?s(i):s;return t==="always"||t!==!1&&wt(i,e)}return!1}function jt(i,e,s,t){return(i!==e||_(t.enabled,i)===!1)&&(!s.suspense||i.state.status!=="error")&&wt(i,s)}function wt(i,e){return _(e.enabled,i)!==!1&&i.isStaleByTime(it(e.staleTime,i))}function ee(i,e){return!ut(i.getCurrentResult(),e)}var $t=x.createContext(!1),se=()=>x.useContext($t);$t.Provider;function ie(){let i=!1;return{clearReset:()=>{i=!1},reset:()=>{i=!0},isReset:()=>i}}var re=x.createContext(ie()),ae=()=>x.useContext(re);function ne(i,e){return typeof i=="function"?i(...e):!!i}function Tt(){}var oe=(i,e)=>{(i.suspense||i.throwOnError||i.experimental_prefetchInRender)&&(e.isReset()||(i.retryOnMount=!1))},le=i=>{x.useEffect(()=>{i.clearReset()},[i])},ue=({result:i,errorResetBoundary:e,throwOnError:s,query:t})=>i.isError&&!e.isReset()&&!i.isFetching&&t&&ne(s,[i.error,t]),ce=i=>{i.suspense&&(i.staleTime===void 0&&(i.staleTime=1e3),typeof i.gcTime=="number"&&(i.gcTime=Math.max(i.gcTime,1e3)))},he=(i,e)=>i.isLoading&&i.isFetching&&!e,de=(i,e)=>(i==null?void 0:i.suspense)&&e.isPending,It=(i,e,s)=>e.fetchOptimistic(i).catch(()=>{s.clearReset()});function fe(i,e,s){var h,f,d,m,b;const t=Zt(),r=se(),a=ae(),n=t.defaultQueryOptions(i);(f=(h=t.getDefaultOptions().queries)==null?void 0:h._experimental_beforeQuery)==null||f.call(h,n),n._optimisticResults=r?"isRestoring":"optimistic",ce(n),oe(n,a),le(a);const o=!t.getQueryCache().get(n.queryHash),[l]=x.useState(()=>new e(t,n)),c=l.getOptimisticResult(n);if(x.useSyncExternalStore(x.useCallback(S=>{const w=r?Tt:l.subscribe(_t.batchCalls(S));return l.updateResult(),w},[l,r]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),x.useEffect(()=>{l.setOptions(n,{listeners:!1})},[n,l]),de(n,c))throw It(n,l,a);if(ue({result:c,errorResetBoundary:a,throwOnError:n.throwOnError,query:t.getQueryCache().get(n.queryHash)}))throw c.error;if((m=(d=t.getDefaultOptions().queries)==null?void 0:d._experimental_afterQuery)==null||m.call(d,n,c),n.experimental_prefetchInRender&&!ct&&he(c,r)){const S=o?It(n,l,a):(b=t.getQueryCache().get(n.queryHash))==null?void 0:b.promise;S==null||S.catch(Tt).finally(()=>{l.updateResult()})}return n.notifyOnChangeProps?c:l.trackResult(c)}function me(i,e){return fe(i,Yt)}const ve=()=>me({queryKey:["networks"],queryFn:async()=>{try{return await fetch("/api/scan",{method:"GET"}).then(e=>e.json())}catch(i){throw console.error(i),i}}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lt=(...i)=>i.filter((e,s,t)=>!!e&&e.trim()!==""&&t.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ye={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=x.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:t,className:r="",children:a,iconNode:n,...o},l)=>x.createElement("svg",{ref:l,...ye,width:e,height:e,stroke:i,strokeWidth:t?Number(s)*24/Number(e):s,className:Lt("lucide",r),...o},[...n.map(([c,h])=>x.createElement(c,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(i,e)=>{const s=x.forwardRef(({className:t,...r},a)=>x.createElement(ge,{ref:a,iconNode:e,className:Lt(`lucide-${pe(i)}`,t),...r}));return s.displayName=`${i}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=G("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=G("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=G("WifiHigh",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=G("WifiLow",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=G("WifiZero",[["path",{d:"M12 20h.01",key:"zekei9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=G("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);function Ae({rssi:i}){return i>=-15?g.jsx(we,{size:18}):i>=-30?g.jsx(Fe,{size:18}):i>=-60?g.jsx(Ve,{size:18}):g.jsx(Se,{size:18})}function at(i,e){return typeof i=="function"?i(e):i}function Nt(i,e){return At(e).reduce((t,r)=>{if(t===null)return null;if(typeof t<"u")return t[r]},i)}function ot(i,e,s){const t=At(e);function r(a){if(!t.length)return at(s,a);const n=t.shift();if(typeof n=="string"||typeof n=="number"&&!Array.isArray(a))return typeof a=="object"?(a===null&&(a={}),{...a,[n]:r(a[n])}):{[n]:r()};if(Array.isArray(a)&&typeof n=="number"){const o=a.slice(0,n);return[...o.length?o:new Array(n),r(a[n]),...a.slice(n+1)]}return[...new Array(n),r()]}return r(i)}function Ee(i,e){const s=At(e);function t(r){if(!r)return;if(s.length===1){const n=s[0];if(Array.isArray(r)&&typeof n=="number")return r.filter((c,h)=>h!==n);const{[n]:o,...l}=r;return l}const a=s.shift();if(typeof a=="string"&&typeof r=="object")return{...r,[a]:t(r[a])};if(typeof a=="number"&&Array.isArray(r)){if(a>=r.length)return r;const n=r.slice(0,a);return[...n.length?n:new Array(a),t(r[a]),...r.slice(a+1)]}throw new Error("It seems we have created an infinite loop in deleteBy. ")}return t(i)}const xe=/^(\d*)$/gm,Re=/\.(\d*)\./gm,Ce=/^(\d*)\./gm,ke=/\.(\d*$)/gm,je=/\.{2,}/gm,bt="__int__",et=`${bt}$1`;function At(i){if(Array.isArray(i))return[...i];if(typeof i!="string")throw new Error("Path must be a string.");return i.replaceAll("[",".").replaceAll("]","").replace(xe,et).replace(Re,`.${et}.`).replace(Ce,`${et}.`).replace(ke,`.${et}`).replace(je,".").split(".").map(e=>e.indexOf(bt)===0?parseInt(e.substring(bt.length),10):e)}function Te(i){return!(Array.isArray(i)&&i.length===0)}function Mt(i,e){const{asyncDebounceMs:s}=e,{onChangeAsync:t,onBlurAsync:r,onSubmitAsync:a,onBlurAsyncDebounceMs:n,onChangeAsyncDebounceMs:o}=e.validators||{},l=s??0,c={cause:"change",validate:t,debounceMs:o??l},h={cause:"blur",validate:r,debounceMs:n??l},f={cause:"submit",validate:a,debounceMs:0},d=m=>({...m,debounceMs:0});switch(i){case"submit":return[d(c),d(h),f];case"blur":return[h];case"change":return[c];case"server":default:return[]}}function Ft(i,e){const{onChange:s,onBlur:t,onSubmit:r}=e.validators||{},a={cause:"change",validate:s},n={cause:"blur",validate:t},o={cause:"submit",validate:r},l={cause:"server",validate:()=>{}};switch(i){case"submit":return[a,n,o,l];case"server":return[l];case"blur":return[n,l];case"change":default:return[a,l]}}function Ie(i,e){const s=new Map;for(const r of i){const a=[...r.path??[]].map(n=>{const o=typeof n=="object"?n.key:n;return typeof o=="number"?`[${o}]`:o}).join(".").replace(/\.\[/g,"[");s.set(a,(s.get(a)??[]).concat(r))}const t={};return s.forEach((r,a)=>{t[a]=e(r)}),t}function Oe(i){return e=>({form:i(e),fields:Ie(e,i)})}const Ut=(i={})=>()=>{const e=i.transformErrors??(t=>t.map(r=>r.message).join(", ")),s=t=>t==="form"?Oe(e):e;return{validate({value:t,validationSource:r},a){const n=a["~standard"].validate(t);if(n instanceof Promise)throw new Error("async function passed to sync validator");return n.issues?s(r)(n.issues):void 0},async validateAsync({value:t,validationSource:r},a){const n=await a["~standard"].validate(t);return n.issues?s(r)(n.issues):void 0}}},Qt=i=>!!i&&"~standard"in i;function lt(i){return{values:i.values??{},errors:i.errors??[],errorMap:i.errorMap??{},fieldMeta:i.fieldMeta??{},canSubmit:i.canSubmit??!0,isFieldsValid:i.isFieldsValid??!1,isFieldsValidating:i.isFieldsValidating??!1,isFormValid:i.isFormValid??!1,isFormValidating:i.isFormValidating??!1,isSubmitted:i.isSubmitted??!1,isSubmitting:i.isSubmitting??!1,isTouched:i.isTouched??!1,isBlurred:i.isBlurred??!1,isPristine:i.isPristine??!0,isDirty:i.isDirty??!1,isValid:i.isValid??!1,isValidating:i.isValidating??!1,submissionAttempts:i.submissionAttempts??0,validationMetaMap:i.validationMetaMap??{onChange:void 0,onBlur:void 0,onSubmit:void 0,onMount:void 0,onServer:void 0}}}const Pe=i=>typeof i=="object";class _e{constructor(e){var s;this.options={},this.fieldInfo={},this.prevTransformArray=[],this.mount=()=>{const{onMount:t}=this.options.validators||{};if(!t)return;const r=this.runValidator({validate:t,value:{value:this.state.values,formApi:this,validationSource:"form"},type:"validate"});r&&this.store.setState(a=>({...a,errorMap:{...a.errorMap,onMount:r}}))},this.update=t=>{if(!t)return;const r=this.options;this.options=t,this.store.batch(()=>{const a=t.defaultValues&&t.defaultValues!==r.defaultValues&&!this.state.isTouched,n=t.defaultState!==r.defaultState&&!this.state.isTouched;this.store.setState(()=>lt(Object.assign({},this.state,n?t.defaultState:{},a?{values:t.defaultValues}:{})))})},this.reset=(t,r)=>{const{fieldMeta:a}=this.state,n=this.resetFieldMeta(a);t&&!(r!=null&&r.keepDefaultValues)&&(this.options={...this.options,defaultValues:t}),this.store.setState(()=>{var o;return lt({...this.options.defaultState,values:t??this.options.defaultValues??((o=this.options.defaultState)==null?void 0:o.values),fieldMeta:n})})},this.validateAllFields=async t=>{const r=[];return this.store.batch(()=>{Object.values(this.fieldInfo).forEach(n=>{if(!n.instance)return;const o=n.instance;r.push(Promise.resolve().then(()=>o.validate(t))),n.instance.state.meta.isTouched||n.instance.setMeta(l=>({...l,isTouched:!0})),n.instance.state.meta.isBlurred||n.instance.setMeta(l=>({...l,isBlurred:!0}))})}),(await Promise.all(r)).flat()},this.validateArrayFieldsStartingFrom=async(t,r,a)=>{const n=this.getFieldValue(t),o=Array.isArray(n)?Math.max(n.length-1,0):null,l=[`${t}[${r}]`];for(let d=r+1;d<=(o??0);d++)l.push(`${t}[${d}]`);const c=Object.keys(this.fieldInfo).filter(d=>l.some(m=>d.startsWith(m))),h=[];return this.store.batch(()=>{c.forEach(d=>{h.push(Promise.resolve().then(()=>this.validateField(d,a)))})}),(await Promise.all(h)).flat()},this.validateField=(t,r)=>{var a;const n=(a=this.fieldInfo[t])==null?void 0:a.instance;return n?(n.state.meta.isTouched||n.setMeta(o=>({...o,isTouched:!0})),n.state.meta.isBlurred||n.setMeta(o=>({...o,isBlurred:!0})),n.validate(r)):[]},this.validateSync=t=>{const r=Ft(t,this.options);let a=!1;const n={};this.store.batch(()=>{for(const l of r){if(!l.validate)continue;const c=this.runValidator({validate:l.validate,value:{value:this.state.values,formApi:this,validationSource:"form"},type:"validate"}),{formError:h,fieldErrors:f}=Vt(c),d=st(l.cause);if(f)for(const[m,b]of Object.entries(f)){const w={...n[m]||{},[d]:b};n[m]=w;const E=this.getFieldMeta(m);E&&E.errorMap[d]!==b&&this.setFieldMeta(m,V=>({...V,errorMap:{...V.errorMap,[d]:b}}))}this.state.errorMap[d]!==h&&this.store.setState(m=>({...m,errorMap:{...m.errorMap,[d]:h}})),(h||f)&&(a=!0)}});const o=st("submit");return this.state.errorMap[o]&&t!=="submit"&&!a&&this.store.setState(l=>({...l,errorMap:{...l.errorMap,[o]:void 0}})),{hasErrored:a,fieldsErrorMap:n}},this.validateAsync=async t=>{const r=Mt(t,this.options);this.state.isFormValidating||this.store.setState(c=>({...c,isFormValidating:!0}));const a=[];let n;for(const c of r){if(!c.validate)continue;const h=st(c.cause),f=this.state.validationMetaMap[h];f==null||f.lastAbortController.abort();const d=new AbortController;this.state.validationMetaMap[h]={lastAbortController:d},a.push(new Promise(async m=>{let b;try{b=await new Promise((V,I)=>{setTimeout(async()=>{if(d.signal.aborted)return V(void 0);try{V(await this.runValidator({validate:c.validate,value:{value:this.state.values,formApi:this,validationSource:"form",signal:d.signal},type:"validateAsync"}))}catch(k){I(k)}},c.debounceMs)})}catch(V){b=V}const{formError:S,fieldErrors:w}=Vt(b);w&&(n=n?{...n,...w}:w);const E=st(c.cause);if(n)for(const[V,I]of Object.entries(n)){const k=this.getFieldMeta(V);k&&k.errorMap[E]!==I&&this.setFieldMeta(V,B=>({...B,errorMap:{...B.errorMap,[E]:I}}))}this.store.setState(V=>({...V,errorMap:{...V.errorMap,[E]:S}})),m(n?{fieldErrors:n,errorMapKey:E}:void 0)}))}let o=[];const l={};if(a.length){o=await Promise.all(a);for(const c of o)if(c!=null&&c.fieldErrors){const{errorMapKey:h}=c;for(const[f,d]of Object.entries(c.fieldErrors)){const b={...l[f]||{},[h]:d};l[f]=b}}}return this.store.setState(c=>({...c,isFormValidating:!1})),l},this.validate=t=>{const{hasErrored:r,fieldsErrorMap:a}=this.validateSync(t);return r&&!this.options.asyncAlways?a:this.validateAsync(t)},this.handleSubmit=async()=>{var t,r,a,n;if(this.store.setState(l=>({...l,isSubmitted:!1,submissionAttempts:l.submissionAttempts+1})),!this.state.canSubmit)return;this.store.setState(l=>({...l,isSubmitting:!0}));const o=()=>{this.store.setState(l=>({...l,isSubmitting:!1}))};if(await this.validateAllFields("submit"),!this.state.isValid){o(),(r=(t=this.options).onSubmitInvalid)==null||r.call(t,{value:this.state.values,formApi:this});return}this.store.batch(()=>{Object.values(this.fieldInfo).forEach(l=>{var c,h,f;(f=(h=(c=l.instance)==null?void 0:c.options.listeners)==null?void 0:h.onSubmit)==null||f.call(h,{value:l.instance.state.value,fieldApi:l.instance})})});try{await((n=(a=this.options).onSubmit)==null?void 0:n.call(a,{value:this.state.values,formApi:this})),this.store.batch(()=>{this.store.setState(l=>({...l,isSubmitted:!0})),o()})}catch(l){throw o(),l}},this.getFieldValue=t=>Nt(this.state.values,t),this.getFieldMeta=t=>this.state.fieldMeta[t],this.getFieldInfo=t=>{var r;return(r=this.fieldInfo)[t]||(r[t]={instance:null,validationMetaMap:{onChange:void 0,onBlur:void 0,onSubmit:void 0,onMount:void 0,onServer:void 0}})},this.setFieldMeta=(t,r)=>{this.store.setState(a=>({...a,fieldMeta:{...a.fieldMeta,[t]:at(r,a.fieldMeta[t])}}))},this.resetFieldMeta=t=>Object.keys(t).reduce((r,a)=>{const n=a;return r[n]={isValidating:!1,isTouched:!1,isBlurred:!1,isDirty:!1,isPristine:!0,errors:[],errorMap:{}},r},{}),this.setFieldValue=(t,r,a)=>{const n=(a==null?void 0:a.dontUpdateMeta)??!1;this.store.batch(()=>{n||this.setFieldMeta(t,o=>({...o,isTouched:!0,isBlurred:!0,isDirty:!0,errorMap:{...o==null?void 0:o.errorMap,onMount:void 0}})),this.store.setState(o=>({...o,values:ot(o.values,t,r)}))})},this.deleteField=t=>{this.store.setState(r=>{const a={...r};return a.values=Ee(a.values,t),delete a.fieldMeta[t],a}),delete this.fieldInfo[t]},this.pushFieldValue=(t,r,a)=>{this.setFieldValue(t,n=>[...Array.isArray(n)?n:[],r],a),this.validateField(t,"change")},this.insertFieldValue=async(t,r,a,n)=>{this.setFieldValue(t,o=>[...o.slice(0,r),a,...o.slice(r)],n),await this.validateField(t,"change")},this.replaceFieldValue=async(t,r,a,n)=>{this.setFieldValue(t,o=>o.map((l,c)=>c===r?a:l),n),await this.validateField(t,"change"),await this.validateArrayFieldsStartingFrom(t,r,"change")},this.removeFieldValue=async(t,r,a)=>{const n=this.getFieldValue(t),o=Array.isArray(n)?Math.max(n.length-1,0):null;if(this.setFieldValue(t,l=>l.filter((c,h)=>h!==r),a),o!==null){const l=`${t}[${o}]`;Object.keys(this.fieldInfo).filter(h=>h.startsWith(l)).forEach(h=>this.deleteField(h))}await this.validateField(t,"change"),await this.validateArrayFieldsStartingFrom(t,r,"change")},this.swapFieldValues=(t,r,a,n)=>{this.setFieldValue(t,o=>{const l=o[r],c=o[a];return ot(ot(o,`${r}`,c),`${a}`,l)},n),this.validateField(t,"change"),this.validateField(`${t}[${r}]`,"change"),this.validateField(`${t}[${a}]`,"change")},this.moveFieldValues=(t,r,a,n)=>{this.setFieldValue(t,o=>(o.splice(a,0,o.splice(r,1)[0]),o),n),this.validateField(t,"change"),this.validateField(`${t}[${r}]`,"change"),this.validateField(`${t}[${a}]`,"change")},this.store=new Bt(lt({...e==null?void 0:e.defaultState,values:(e==null?void 0:e.defaultValues)??((s=e==null?void 0:e.defaultState)==null?void 0:s.values),isFormValid:!0}),{onUpdate:()=>{var t,r,a,n;let{state:o}=this.store;const l=Object.values(o.fieldMeta),c=l.some(p=>p==null?void 0:p.isValidating),h=!l.some(p=>(p==null?void 0:p.errorMap)&&Te(Object.values(p.errorMap).filter(Boolean))),f=l.some(p=>p==null?void 0:p.isTouched),d=l.some(p=>p==null?void 0:p.isBlurred);f&&((t=o==null?void 0:o.errorMap)!=null&&t.onMount)&&(o.errorMap.onMount=void 0);const m=l.some(p=>p==null?void 0:p.isDirty),b=!m,S=!!((r=o.errorMap)!=null&&r.onMount||l.some(p=>{var M;return(M=p==null?void 0:p.errorMap)==null?void 0:M.onMount})),w=c||o.isFormValidating;o.errors=Object.values(o.errorMap).reduce((p,M)=>M===void 0?p:typeof M=="string"?(p.push(M),p):(M&&Pe(M)&&p.push(M.form),p),[]);const E=o.errors.length===0,V=h&&E,I=o.submissionAttempts===0&&!f&&!S||!w&&!o.isSubmitting&&V;o={...o,isFieldsValidating:c,isFieldsValid:h,isFormValid:E,isValid:V,canSubmit:I,isTouched:f,isBlurred:d,isPristine:b,isDirty:m},this.state=o,this.store.state=this.state;const k=((a=this.options.transform)==null?void 0:a.deps)??[];(k.length!==this.prevTransformArray.length||k.some((p,M)=>p!==this.prevTransformArray[M]))&&((n=this.options.transform)==null||n.fn(this),this.store.state=this.state,this.prevTransformArray=k)}}),this.state=this.store.state,this.update(e||{})}runValidator(e){const s=this.options.validatorAdapter;return s&&(typeof e.validate!="function"||"~standard"in e.validate)?s()[e.type](e.value,e.validate):Qt(e.validate)?Ut()()[e.type](e.value,e.validate):e.validate(e.value)}setErrorMap(e){this.store.setState(s=>({...s,errorMap:{...s.errorMap,...e}}))}}function Vt(i){if(i){if(typeof i=="object"){const e=Vt(i.form).formError,s=i.fields;return{formError:e,fieldErrors:s}}return typeof i!="string"?{formError:"Invalid Form Values"}:{formError:i}}return{formError:void 0}}function st(i){switch(i){case"submit":return"onSubmit";case"blur":return"onBlur";case"mount":return"onMount";case"server":return"onServer";case"change":default:return"onChange"}}class Be{constructor(e){this.options={},this.mount=()=>{var s,t;const r=this.getInfo();r.instance=this;const a=this.form.store.subscribe(()=>{this.store.batch(()=>{const o=this.getValue(),l=this.getMeta();o!==this.state.value&&this.store.setState(c=>({...c,value:o})),l!==this.state.meta&&this.store.setState(c=>({...c,meta:l}))})});this.update(this.options);const{onMount:n}=this.options.validators||{};if(n){const o=this.runValidator({validate:n,value:{value:this.state.value,fieldApi:this,validationSource:"field"},type:"validate"});o&&this.setMeta(l=>({...l,errorMap:{...l==null?void 0:l.errorMap,onMount:o}}))}return(t=(s=this.options.listeners)==null?void 0:s.onMount)==null||t.call(s,{value:this.state.value,fieldApi:this}),()=>{a()}},this.update=s=>{if(this.state.value===void 0){const t=Nt(s.form.options.defaultValues,s.name);s.defaultValue!==void 0?this.setValue(s.defaultValue,{dontUpdateMeta:!0}):t!==void 0&&this.setValue(t,{dontUpdateMeta:!0})}this._getMeta()===void 0&&this.setMeta(this.state.meta),this.options=s},this.getValue=()=>this.form.getFieldValue(this.name),this.setValue=(s,t)=>{var r,a;this.form.setFieldValue(this.name,s,t),(a=(r=this.options.listeners)==null?void 0:r.onChange)==null||a.call(r,{value:this.state.value,fieldApi:this}),this.validate("change")},this._getMeta=()=>this.form.getFieldMeta(this.name),this.getMeta=()=>this._getMeta()??{isValidating:!1,isTouched:!1,isBlurred:!1,isDirty:!1,isPristine:!0,errors:[],errorMap:{},...this.options.defaultMeta},this.setMeta=s=>this.form.setFieldMeta(this.name,s),this.getInfo=()=>this.form.getFieldInfo(this.name),this.pushValue=(s,t)=>this.form.pushFieldValue(this.name,s,t),this.insertValue=(s,t,r)=>this.form.insertFieldValue(this.name,s,t,r),this.replaceValue=(s,t,r)=>this.form.replaceFieldValue(this.name,s,t,r),this.removeValue=(s,t)=>this.form.removeFieldValue(this.name,s,t),this.swapValues=(s,t,r)=>this.form.swapFieldValues(this.name,s,t,r),this.moveValue=(s,t,r)=>this.form.moveFieldValues(this.name,s,t,r),this.getLinkedFields=s=>{const t=Object.values(this.form.fieldInfo),r=[];for(const a of t){if(!a.instance)continue;const{onChangeListenTo:n,onBlurListenTo:o}=a.instance.options.validators||{};s==="change"&&(n!=null&&n.includes(this.name))&&r.push(a.instance),s==="blur"&&(o!=null&&o.includes(this.name))&&r.push(a.instance)}return r},this.validateSync=(s,t)=>{const r=Ft(s,this.options),n=this.getLinkedFields(s).reduce((c,h)=>{const f=Ft(s,h.options);return f.forEach(d=>{d.field=h}),c.concat(f)},[]);let o=!1;this.form.store.batch(()=>{const c=(h,f)=>{const d=Z(f.cause),m=f.validate?Ot(h.runValidator({validate:f.validate,value:{value:h.getValue(),validationSource:"field",fieldApi:h},type:"validate"})):t[d];h.state.meta.errorMap[d]!==m&&h.setMeta(b=>({...b,errorMap:{...b.errorMap,[Z(f.cause)]:m||t[d]}})),(m||t[d])&&(o=!0)};for(const h of r)c(this,h);for(const h of n)h.validate&&c(h.field,h)});const l=Z("submit");return this.state.meta.errorMap[l]&&s!=="submit"&&!o&&this.setMeta(c=>({...c,errorMap:{...c.errorMap,[l]:void 0}})),{hasErrored:o}},this.validateAsync=async(s,t)=>{const r=Mt(s,this.options),a=await t,n=this.getLinkedFields(s),o=n.reduce((d,m)=>{const b=Mt(s,m.options);return b.forEach(S=>{S.field=m}),d.concat(b)},[]);this.state.meta.isValidating||this.setMeta(d=>({...d,isValidating:!0}));for(const d of n)d.setMeta(m=>({...m,isValidating:!0}));const l=[],c=[],h=(d,m,b)=>{const S=Z(m.cause),w=d.getInfo().validationMetaMap[S];w==null||w.lastAbortController.abort();const E=new AbortController;this.getInfo().validationMetaMap[S]={lastAbortController:E},b.push(new Promise(async V=>{var I;let k;try{k=await new Promise((O,R)=>{this.timeoutIds[m.cause]&&clearTimeout(this.timeoutIds[m.cause]),this.timeoutIds[m.cause]=setTimeout(async()=>{if(E.signal.aborted)return O(void 0);try{O(await this.runValidator({validate:m.validate,value:{value:d.getValue(),fieldApi:d,signal:E.signal,validationSource:"field"},type:"validateAsync"}))}catch(D){R(D)}},m.debounceMs)})}catch(O){k=O}if(E.signal.aborted)return V(void 0);const B=Ot(k),p=(I=a[this.name])==null?void 0:I[S],M=B||p;d.setMeta(O=>({...O,errorMap:{...O==null?void 0:O.errorMap,[S]:M}})),V(M)}))};for(const d of r)d.validate&&h(this,d,l);for(const d of o)d.validate&&h(d.field,d,c);let f=[];(l.length||c.length)&&(f=await Promise.all(l),await Promise.all(c)),this.setMeta(d=>({...d,isValidating:!1}));for(const d of n)d.setMeta(m=>({...m,isValidating:!1}));return f.filter(Boolean)},this.validate=s=>{var t;if(!this.state.meta.isTouched)return[];const{fieldsErrorMap:r}=this.form.validateSync(s),{hasErrored:a}=this.validateSync(s,r[this.name]??{});if(a&&!this.options.asyncAlways)return(t=this.getInfo().validationMetaMap[Z(s)])==null||t.lastAbortController.abort(),this.state.meta.errors;const n=this.form.validateAsync(s);return this.validateAsync(s,n)},this.handleChange=s=>{this.setValue(s)},this.handleBlur=()=>{var s,t;this.state.meta.isTouched||(this.setMeta(a=>({...a,isTouched:!0})),this.validate("change")),this.state.meta.isBlurred||this.setMeta(a=>({...a,isBlurred:!0})),this.validate("blur"),(t=(s=this.options.listeners)==null?void 0:s.onBlur)==null||t.call(s,{value:this.state.value,fieldApi:this})},this.form=e.form,this.name=e.name,this.timeoutIds={},e.defaultValue!==void 0&&this.form.setFieldValue(this.name,e.defaultValue,{dontUpdateMeta:!0}),this.store=new Bt({value:this.getValue(),meta:this._getMeta()??{isValidating:!1,isTouched:!1,isBlurred:!1,isDirty:!1,isPristine:!0,errors:[],errorMap:{},...e.defaultMeta}},{onUpdate:()=>{const s=this.store.state;s.meta.errors=Object.values(s.meta.errorMap).filter(t=>t!==void 0),s.meta.isPristine=!s.meta.isDirty,this.prevState=s,this.state=s}}),this.state=this.store.state,this.prevState=this.state,this.options=e}runValidator(e){const s=[this.form.options.validatorAdapter,this.options.validatorAdapter];for(const t of s)if(t&&(typeof e.validate!="function"||"~standard"in e.validate))return t()[e.type](e.value,e.validate);return Qt(e.validate)?Ut()()[e.type](e.value,e.validate):e.validate(e.value)}setErrorMap(e){this.setMeta(s=>({...s,errorMap:{...s.errorMap,...e}}))}}function Ot(i){if(i)return typeof i!="string"?"Invalid Form Values":i}function Z(i){switch(i){case"submit":return"onSubmit";case"blur":return"onBlur";case"mount":return"onMount";case"server":return"onServer";case"change":default:return"onChange"}}const rt=typeof window<"u"?x.useLayoutEffect:x.useEffect;function De(i){const[e]=x.useState(()=>{const t=new Be({...i,form:i.form,name:i.name});return t.Field=zt,t});return rt(e.mount,[e]),rt(()=>{e.update(i)}),St(e.store,i.mode==="array"?s=>[s.meta,Object.keys(s.value??[]).length]:void 0),e}const zt=({children:i,...e})=>{const s=De(e),t=x.useMemo(()=>at(i,s),[i,s,s.state.value,s.state.meta]);return g.jsx(g.Fragment,{children:t})};function $e({form:i,selector:e,children:s}){const t=St(i.store,e);return at(s,t)}function Le(i){const[e]=x.useState(()=>{const s=new _e(i),t=s;return t.Field=function(a){return g.jsx(zt,{...a,form:s})},t.Subscribe=r=>g.jsx($e,{form:s,selector:r.selector,children:r.children}),t});return rt(e.mount,[]),St(e.store,s=>s.isSubmitting),rt(()=>{e.update(i)}),e}function Ne({data:{ssid:i,isOpen:e}}){const s=Le({defaultValues:{ssid:i,password:""},onSubmit:async({value:{password:t,ssid:r}})=>{try{const a=await fetch("/api/save-wifi",{method:"POST",body:JSON.stringify({ssid:r,password:t})});console.log(await a.json())}catch(a){console.error(a)}}});return g.jsxs("form",{className:"inline-flex w-full gap-3",onSubmit:t=>{t.preventDefault(),t.stopPropagation(),s.handleSubmit()},children:[g.jsx(s.Field,{name:"password",children:t=>g.jsx("input",{name:t.name,value:t.state.value,onBlur:t.handleBlur,onChange:r=>t.handleChange(r.target.value),type:"text",className:`input flex-1 ${e==="open"&&"hidden"}`,placeholder:"Password"})}),g.jsx("button",{type:"submit",className:"btn-md ml-auto",children:"Save"})]})}function Ue({data:i}){const[e,s]=Jt.useState(null);return g.jsx("ul",{className:"space-y-1 max-h-96 overflow-y-auto overflow-x-hidden",children:i.map(({id:t,isOpen:r,rssi:a,ssid:n})=>{const o=e===t;return g.jsxs("li",{className:`px-2 py-3 hover:bg-black/15 rounded-md transition-colors duration-200 space-y-3 ${o&&"bg-black/15"}`,role:"button",onClick:()=>s(t),children:[g.jsxs("div",{className:"inline-flex items-center gap-2",children:[g.jsx("p",{className:"truncate max-w-96",children:n}),g.jsx(Ae,{rssi:a}),r==="closed"&&g.jsx(be,{size:18})]}),o?g.jsx(Ne,{data:{id:t,isOpen:r,rssi:a,ssid:n}}):""]},t)})})}const We=Xt("/")({component:Qe});function Qe(){const{data:i,refetch:e,isRefetching:s,isLoading:t}=ve();return g.jsxs(g.Fragment,{children:[g.jsx("h1",{className:"text-2xl font-bold text-center mb-4",children:"Getting started"}),g.jsxs("main",{className:"border rounded-lg p-6 space-y-4",children:[g.jsxs("div",{className:"inline-flex gap-2 justify-between items-center w-full ",children:[g.jsx("p",{className:"text-sm text-gray-400",children:"Please select network..."}),g.jsx("button",{className:"btn",onClick:()=>e(),children:g.jsx(Me,{className:s||t?"animate-spin":"",size:18})})]}),i===void 0?"":g.jsx(Ue,{data:i})]})]})}export{We as Route};
