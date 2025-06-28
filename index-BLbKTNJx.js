(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var md={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function sb(){if(m_)return ll;m_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var g in l)g!=="key"&&(c[g]=l[g])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return ll.Fragment=t,ll.jsx=n,ll.jsxs=n,ll}var g_;function ab(){return g_||(g_=1,md.exports=sb()),md.exports}var it=ab(),gd={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function ob(){if(p_)return wt;p_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),C=Symbol.iterator;function V(R){return R===null||typeof R!="object"?null:(R=C&&R[C]||R["@@iterator"],typeof R=="function"?R:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,nt={};function Z(R,Y,et){this.props=R,this.context=Y,this.refs=nt,this.updater=et||j}Z.prototype.isReactComponent={},Z.prototype.setState=function(R,Y){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,Y,"setState")},Z.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function vt(){}vt.prototype=Z.prototype;function At(R,Y,et){this.props=R,this.context=Y,this.refs=nt,this.updater=et||j}var dt=At.prototype=new vt;dt.constructor=At,X(dt,Z.prototype),dt.isPureReactComponent=!0;var Nt=Array.isArray,mt={H:null,A:null,T:null,S:null,V:null},It=Object.prototype.hasOwnProperty;function O(R,Y,et,W,ct,Rt){return et=Rt.ref,{$$typeof:r,type:R,key:Y,ref:et!==void 0?et:null,props:Rt}}function b(R,Y){return O(R.type,Y,void 0,void 0,void 0,R.props)}function w(R){return typeof R=="object"&&R!==null&&R.$$typeof===r}function N(R){var Y={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(et){return Y[et]})}var M=/\/+/g;function P(R,Y){return typeof R=="object"&&R!==null&&R.key!=null?N(""+R.key):Y.toString(36)}function I(){}function Ae(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(I,I):(R.status="pending",R.then(function(Y){R.status==="pending"&&(R.status="fulfilled",R.value=Y)},function(Y){R.status==="pending"&&(R.status="rejected",R.reason=Y)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function ie(R,Y,et,W,ct){var Rt=typeof R;(Rt==="undefined"||Rt==="boolean")&&(R=null);var yt=!1;if(R===null)yt=!0;else switch(Rt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(R.$$typeof){case r:case t:yt=!0;break;case E:return yt=R._init,ie(yt(R._payload),Y,et,W,ct)}}if(yt)return ct=ct(R),yt=W===""?"."+P(R,0):W,Nt(ct)?(et="",yt!=null&&(et=yt.replace(M,"$&/")+"/"),ie(ct,Y,et,"",function(Ht){return Ht})):ct!=null&&(w(ct)&&(ct=b(ct,et+(ct.key==null||R&&R.key===ct.key?"":(""+ct.key).replace(M,"$&/")+"/")+yt)),Y.push(ct)),1;yt=0;var rt=W===""?".":W+":";if(Nt(R))for(var gt=0;gt<R.length;gt++)W=R[gt],Rt=rt+P(W,gt),yt+=ie(W,Y,et,Rt,ct);else if(gt=V(R),typeof gt=="function")for(R=gt.call(R),gt=0;!(W=R.next()).done;)W=W.value,Rt=rt+P(W,gt++),yt+=ie(W,Y,et,Rt,ct);else if(Rt==="object"){if(typeof R.then=="function")return ie(Ae(R),Y,et,W,ct);throw Y=String(R),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return yt}function H(R,Y,et){if(R==null)return R;var W=[],ct=0;return ie(R,W,"","",function(Rt){return Y.call(et,Rt,ct++)}),W}function tt(R){if(R._status===-1){var Y=R._result;Y=Y(),Y.then(function(et){(R._status===0||R._status===-1)&&(R._status=1,R._result=et)},function(et){(R._status===0||R._status===-1)&&(R._status=2,R._result=et)}),R._status===-1&&(R._status=0,R._result=Y)}if(R._status===1)return R._result.default;throw R._result}var lt=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function zt(){}return wt.Children={map:H,forEach:function(R,Y,et){H(R,function(){Y.apply(this,arguments)},et)},count:function(R){var Y=0;return H(R,function(){Y++}),Y},toArray:function(R){return H(R,function(Y){return Y})||[]},only:function(R){if(!w(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},wt.Component=Z,wt.Fragment=n,wt.Profiler=l,wt.PureComponent=At,wt.StrictMode=s,wt.Suspense=p,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mt,wt.__COMPILER_RUNTIME={__proto__:null,c:function(R){return mt.H.useMemoCache(R)}},wt.cache=function(R){return function(){return R.apply(null,arguments)}},wt.cloneElement=function(R,Y,et){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var W=X({},R.props),ct=R.key,Rt=void 0;if(Y!=null)for(yt in Y.ref!==void 0&&(Rt=void 0),Y.key!==void 0&&(ct=""+Y.key),Y)!It.call(Y,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&Y.ref===void 0||(W[yt]=Y[yt]);var yt=arguments.length-2;if(yt===1)W.children=et;else if(1<yt){for(var rt=Array(yt),gt=0;gt<yt;gt++)rt[gt]=arguments[gt+2];W.children=rt}return O(R.type,ct,void 0,void 0,Rt,W)},wt.createContext=function(R){return R={$$typeof:f,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},wt.createElement=function(R,Y,et){var W,ct={},Rt=null;if(Y!=null)for(W in Y.key!==void 0&&(Rt=""+Y.key),Y)It.call(Y,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ct[W]=Y[W]);var yt=arguments.length-2;if(yt===1)ct.children=et;else if(1<yt){for(var rt=Array(yt),gt=0;gt<yt;gt++)rt[gt]=arguments[gt+2];ct.children=rt}if(R&&R.defaultProps)for(W in yt=R.defaultProps,yt)ct[W]===void 0&&(ct[W]=yt[W]);return O(R,Rt,void 0,void 0,null,ct)},wt.createRef=function(){return{current:null}},wt.forwardRef=function(R){return{$$typeof:g,render:R}},wt.isValidElement=w,wt.lazy=function(R){return{$$typeof:E,_payload:{_status:-1,_result:R},_init:tt}},wt.memo=function(R,Y){return{$$typeof:_,type:R,compare:Y===void 0?null:Y}},wt.startTransition=function(R){var Y=mt.T,et={};mt.T=et;try{var W=R(),ct=mt.S;ct!==null&&ct(et,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(zt,lt)}catch(Rt){lt(Rt)}finally{mt.T=Y}},wt.unstable_useCacheRefresh=function(){return mt.H.useCacheRefresh()},wt.use=function(R){return mt.H.use(R)},wt.useActionState=function(R,Y,et){return mt.H.useActionState(R,Y,et)},wt.useCallback=function(R,Y){return mt.H.useCallback(R,Y)},wt.useContext=function(R){return mt.H.useContext(R)},wt.useDebugValue=function(){},wt.useDeferredValue=function(R,Y){return mt.H.useDeferredValue(R,Y)},wt.useEffect=function(R,Y,et){var W=mt.H;if(typeof et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(R,Y)},wt.useId=function(){return mt.H.useId()},wt.useImperativeHandle=function(R,Y,et){return mt.H.useImperativeHandle(R,Y,et)},wt.useInsertionEffect=function(R,Y){return mt.H.useInsertionEffect(R,Y)},wt.useLayoutEffect=function(R,Y){return mt.H.useLayoutEffect(R,Y)},wt.useMemo=function(R,Y){return mt.H.useMemo(R,Y)},wt.useOptimistic=function(R,Y){return mt.H.useOptimistic(R,Y)},wt.useReducer=function(R,Y,et){return mt.H.useReducer(R,Y,et)},wt.useRef=function(R){return mt.H.useRef(R)},wt.useState=function(R){return mt.H.useState(R)},wt.useSyncExternalStore=function(R,Y,et){return mt.H.useSyncExternalStore(R,Y,et)},wt.useTransition=function(){return mt.H.useTransition()},wt.version="19.1.0",wt}var y_;function lm(){return y_||(y_=1,gd.exports=ob()),gd.exports}var me=lm(),pd={exports:{}},ul={},yd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function lb(){return __||(__=1,function(r){function t(H,tt){var lt=H.length;H.push(tt);t:for(;0<lt;){var zt=lt-1>>>1,R=H[zt];if(0<l(R,tt))H[zt]=tt,H[lt]=R,lt=zt;else break t}}function n(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var tt=H[0],lt=H.pop();if(lt!==tt){H[0]=lt;t:for(var zt=0,R=H.length,Y=R>>>1;zt<Y;){var et=2*(zt+1)-1,W=H[et],ct=et+1,Rt=H[ct];if(0>l(W,lt))ct<R&&0>l(Rt,W)?(H[zt]=Rt,H[ct]=lt,zt=ct):(H[zt]=W,H[et]=lt,zt=et);else if(ct<R&&0>l(Rt,lt))H[zt]=Rt,H[ct]=lt,zt=ct;else break t}}return tt}function l(H,tt){var lt=H.sortIndex-tt.sortIndex;return lt!==0?lt:H.id-tt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var p=[],_=[],E=1,C=null,V=3,j=!1,X=!1,nt=!1,Z=!1,vt=typeof setTimeout=="function"?setTimeout:null,At=typeof clearTimeout=="function"?clearTimeout:null,dt=typeof setImmediate<"u"?setImmediate:null;function Nt(H){for(var tt=n(_);tt!==null;){if(tt.callback===null)s(_);else if(tt.startTime<=H)s(_),tt.sortIndex=tt.expirationTime,t(p,tt);else break;tt=n(_)}}function mt(H){if(nt=!1,Nt(H),!X)if(n(p)!==null)X=!0,It||(It=!0,P());else{var tt=n(_);tt!==null&&ie(mt,tt.startTime-H)}}var It=!1,O=-1,b=5,w=-1;function N(){return Z?!0:!(r.unstable_now()-w<b)}function M(){if(Z=!1,It){var H=r.unstable_now();w=H;var tt=!0;try{t:{X=!1,nt&&(nt=!1,At(O),O=-1),j=!0;var lt=V;try{e:{for(Nt(H),C=n(p);C!==null&&!(C.expirationTime>H&&N());){var zt=C.callback;if(typeof zt=="function"){C.callback=null,V=C.priorityLevel;var R=zt(C.expirationTime<=H);if(H=r.unstable_now(),typeof R=="function"){C.callback=R,Nt(H),tt=!0;break e}C===n(p)&&s(p),Nt(H)}else s(p);C=n(p)}if(C!==null)tt=!0;else{var Y=n(_);Y!==null&&ie(mt,Y.startTime-H),tt=!1}}break t}finally{C=null,V=lt,j=!1}tt=void 0}}finally{tt?P():It=!1}}}var P;if(typeof dt=="function")P=function(){dt(M)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Ae=I.port2;I.port1.onmessage=M,P=function(){Ae.postMessage(null)}}else P=function(){vt(M,0)};function ie(H,tt){O=vt(function(){H(r.unstable_now())},tt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return V},r.unstable_next=function(H){switch(V){case 1:case 2:case 3:var tt=3;break;default:tt=V}var lt=V;V=tt;try{return H()}finally{V=lt}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(H,tt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var lt=V;V=H;try{return tt()}finally{V=lt}},r.unstable_scheduleCallback=function(H,tt,lt){var zt=r.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?zt+lt:zt):lt=zt,H){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=lt+R,H={id:E++,callback:tt,priorityLevel:H,startTime:lt,expirationTime:R,sortIndex:-1},lt>zt?(H.sortIndex=lt,t(_,H),n(p)===null&&H===n(_)&&(nt?(At(O),O=-1):nt=!0,ie(mt,lt-zt))):(H.sortIndex=R,t(p,H),X||j||(X=!0,It||(It=!0,P()))),H},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(H){var tt=V;return function(){var lt=V;V=tt;try{return H.apply(this,arguments)}finally{V=lt}}}}(_d)),_d}var v_;function ub(){return v_||(v_=1,yd.exports=lb()),yd.exports}var vd={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function cb(){if(T_)return $e;T_=1;var r=lm();function t(p){var _="https://react.dev/errors/"+p;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)_+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,_,E){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:C==null?null:""+C,children:p,containerInfo:_,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,_){if(p==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$e.createPortal=function(p,_){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return c(p,_,null,E)},$e.flushSync=function(p){var _=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=_,s.p=E,s.d.f()}},$e.preconnect=function(p,_){typeof p=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(p,_))},$e.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},$e.preinit=function(p,_){if(typeof p=="string"&&_&&typeof _.as=="string"){var E=_.as,C=g(E,_.crossOrigin),V=typeof _.integrity=="string"?_.integrity:void 0,j=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;E==="style"?s.d.S(p,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:C,integrity:V,fetchPriority:j}):E==="script"&&s.d.X(p,{crossOrigin:C,integrity:V,fetchPriority:j,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},$e.preinitModule=function(p,_){if(typeof p=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var E=g(_.as,_.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(p)},$e.preload=function(p,_){if(typeof p=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var E=_.as,C=g(E,_.crossOrigin);s.d.L(p,E,{crossOrigin:C,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},$e.preloadModule=function(p,_){if(typeof p=="string")if(_){var E=g(_.as,_.crossOrigin);s.d.m(p,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(p)},$e.requestFormReset=function(p){s.d.r(p)},$e.unstable_batchedUpdates=function(p,_){return p(_)},$e.useFormState=function(p,_,E){return f.H.useFormState(p,_,E)},$e.useFormStatus=function(){return f.H.useHostTransitionStatus()},$e.version="19.1.0",$e}var E_;function hb(){if(E_)return vd.exports;E_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vd.exports=cb(),vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function fb(){if(A_)return ul;A_=1;var r=ub(),t=lm(),n=hb();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===o)return g(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,o=d;break}if(T===o){v=!0,o=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,o=h;break}if(T===o){v=!0,o=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,C=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),At=Symbol.for("react.consumer"),dt=Symbol.for("react.context"),Nt=Symbol.for("react.forward_ref"),mt=Symbol.for("react.suspense"),It=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Z:return"Profiler";case nt:return"StrictMode";case mt:return"Suspense";case It:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case dt:return(e.displayName||"Context")+".Provider";case At:return(e._context.displayName||"Context")+".Consumer";case Nt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:Ae(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return Ae(e(i))}catch{}}return null}var ie=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},zt=[],R=-1;function Y(e){return{current:e}}function et(e){0>R||(e.current=zt[R],zt[R]=null,R--)}function W(e,i){R++,zt[R]=e.current,e.current=i}var ct=Y(null),Rt=Y(null),yt=Y(null),rt=Y(null);function gt(e,i){switch(W(yt,i),W(Rt,e),W(ct,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?jy(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=jy(i),e=Hy(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(ct),W(ct,e)}function Ht(){et(ct),et(Rt),et(yt)}function te(e){e.memoizedState!==null&&W(rt,e);var i=ct.current,a=Hy(i,e.type);i!==a&&(W(Rt,e),W(ct,a))}function be(e){Rt.current===e&&(et(ct),et(Rt)),rt.current===e&&(et(rt),il._currentValue=lt)}var nn=Object.prototype.hasOwnProperty,zn=r.unstable_scheduleCallback,_i=r.unstable_cancelCallback,Oe=r.unstable_shouldYield,Xn=r.unstable_requestPaint,Qe=r.unstable_now,dh=r.unstable_getCurrentPriorityLevel,to=r.unstable_ImmediatePriority,qs=r.unstable_UserBlockingPriority,Kr=r.unstable_NormalPriority,mh=r.unstable_LowPriority,js=r.unstable_IdlePriority,eo=r.log,jl=r.unstable_setDisableYieldValue,le=null,Gt=null;function dn(e){if(typeof eo=="function"&&jl(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(le,e)}catch{}}var Ye=Math.clz32?Math.clz32:Qr,Hl=Math.log,gh=Math.LN2;function Qr(e){return e>>>=0,e===0?32:31-(Hl(e)/gh|0)|0}var Yr=256,Xr=4194304;function Bn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hs(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?h=Bn(o):(v&=T,v!==0?h=Bn(v):a||(a=T&~e,a!==0&&(h=Bn(a))))):(T=o&~d,T!==0?h=Bn(T):v!==0?h=Bn(v):a||(a=o&~e,a!==0&&(h=Bn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function $r(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function no(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function io(){var e=Yr;return Yr<<=1,(Yr&4194048)===0&&(Yr=256),e}function ro(){var e=Xr;return Xr<<=1,(Xr&62914560)===0&&(Xr=4194304),e}function vi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ti(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function so(e,i,a,o,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,S=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-Ye(a),K=1<<F;T[F]=0,S[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~K}o!==0&&$n(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function $n(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ye(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ao(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Ye(a),h=1<<o;h&i|e[o]&i&&(e[o]|=i),a&=~h}}function Ji(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tr(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:l_(e.type))}function Fl(e,i){var a=tt.p;try{return tt.p=e,i()}finally{tt.p=a}}var re=Math.random().toString(36).slice(2),Se="__reactFiber$"+re,pe="__reactProps$"+re,Sn="__reactContainer$"+re,oo="__reactEvents$"+re,ph="__reactListeners$"+re,er="__reactHandles$"+re,Gl="__reactResources$"+re,Zr="__reactMarker$"+re;function nr(e){delete e[Se],delete e[pe],delete e[oo],delete e[ph],delete e[er]}function Ei(e){var i=e[Se];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Sn]||a[Se]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Qy(e);e!==null;){if(a=e[Se])return a;e=Qy(e)}return i}e=a,a=e.parentNode}return null}function Zn(e){if(e=e[Se]||e[Sn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Wn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function rn(e){var i=e[Gl];return i||(i=e[Gl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function he(e){e[Zr]=!0}var lo=new Set,Gs={};function qn(e,i){Ai(e,i),Ai(e+"Capture",i)}function Ai(e,i){for(Gs[e]=i,e=0;e<i.length;e++)lo.add(i[e])}var Kl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ql={},Wr={};function Yl(e){return nn.call(Wr,e)?!0:nn.call(Ql,e)?!1:Kl.test(e)?Wr[e]=!0:(Ql[e]=!0,!1)}function ir(e,i,a){if(Yl(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Jn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Le(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}var Jr,Xl;function bi(e){if(Jr===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Jr=i&&i[1]||"",Xl=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jr+e+Xl}var Ks=!1;function Qs(e,i){if(!e||Ks)return"";Ks=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var z=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){z=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){z=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var S=v.split(`
`),L=T.split(`
`);for(h=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(o===S.length||h===L.length)for(o=S.length-1,h=L.length-1;1<=o&&0<=h&&S[o]!==L[h];)h--;for(;1<=o&&0<=h;o--,h--)if(S[o]!==L[h]){if(o!==1||h!==1)do if(o--,h--,0>h||S[o]!==L[h]){var F=`
`+S[o].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=o&&0<=h);break}}}finally{Ks=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?bi(a):""}function uo(e){switch(e.tag){case 26:case 27:case 5:return bi(e.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 15:return Qs(e.type,!1);case 11:return Qs(e.type.render,!1);case 1:return Qs(e.type,!0);case 31:return bi("Activity");default:return""}}function Ys(e){try{var i="";do i+=uo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function co(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yh(e){var i=co(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){o=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Xs(e){e._valueTracker||(e._valueTracker=yh(e))}function ho(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=co(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function ts(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _h=/[\n"\\]/g;function ye(e){return e.replace(_h,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function mn(e,i,a,o,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+sn(i)):e.value!==""+sn(i)&&(e.value=""+sn(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?rr(e,v,sn(i)):a!=null?rr(e,v,sn(a)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+sn(T):e.removeAttribute("name")}function es(e,i,a,o,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+sn(a):"",i=i!=null?""+sn(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function rr(e,i,a){i==="number"&&ts(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Si(e,i,a,o){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Xt(e,i,a){if(i!=null&&(i=""+sn(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+sn(a):""}function ns(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(ie(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=sn(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function wn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var is=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $l(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||is.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function fo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&a[h]!==o&&$l(e,h,o)}else for(var d in i)i.hasOwnProperty(d)&&$l(e,d,i[d])}function mo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Th=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $s(e){return Th.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wi=null;function Rn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ri=null,Ii=null;function go(e){var i=Zn(e);if(i&&(e=i.stateNode)){var a=e[pe]||null;t:switch(e=i.stateNode,i.type){case"input":if(mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ye(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var h=o[pe]||null;if(!h)throw Error(s(90));mn(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&ho(o)}break t;case"textarea":Xt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Si(e,!!a.multiple,i,!1)}}}var ti=!1;function Zl(e,i,a){if(ti)return e(i,a);ti=!0;try{var o=e(i);return o}finally{if(ti=!1,(Ri!==null||Ii!==null)&&(Fu(),Ri&&(i=Ri,e=Ii,Ii=Ri=null,go(i),e)))for(i=0;i<e.length;i++)go(e[i])}}function rs(e,i){var a=e.stateNode;if(a===null)return null;var o=a[pe]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),In=!1;if(jn)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){In=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{In=!1}var ei=null,sr=null,Ci=null;function po(){if(Ci)return Ci;var e,i=sr,a=i.length,o,h="value"in ei?ei.value:ei.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(o=1;o<=v&&i[a-o]===h[d-o];o++);return Ci=h.slice(e,1<o?1-o:void 0)}function ni(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function yo(){return!1}function Me(e){function i(a,o,h,d,v){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ii:yo,this.isPropagationStopped=yo,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),i}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=Me(Ft),as=E({},Ft,{view:0,detail:0}),Wl=Me(as),Ws,Js,ri,os=E({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(Ws=e.screenX-ri.screenX,Js=e.screenY-ri.screenY):Js=Ws=0,ri=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:Js}}),Cn=Me(os),Jl=E({},os,{dataTransfer:0}),Eh=Me(Jl),ls=E({},as,{relatedTarget:0}),ta=Me(ls),_o=E({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),ea=Me(_o),tu=E({},Ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),na=Me(tu),Ah=E({},Ft,{data:0}),vo=Me(Ah),us={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function To(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=nu[e])?!!i[e]:!1}function cs(){return To}var iu=E({},as,{key:function(e){if(e.key){var i=us[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ia=Me(iu),ru=E({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eo=Me(ru),Di=E({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),su=Me(Di),au=E({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),ou=Me(au),lu=E({},os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ra=Me(lu),an=E({},Ft,{newState:0,oldState:0}),uu=Me(an),cu=[9,13,27,32],si=jn&&"CompositionEvent"in window,u=null;jn&&"documentMode"in document&&(u=document.documentMode);var m=jn&&"TextEvent"in window&&!u,y=jn&&(!si||u&&8<u&&11>=u),A=" ",U=!1;function q(e,i){switch(e){case"keyup":return cu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function we(e,i){switch(e){case"compositionend":return J(i);case"keypress":return i.which!==32?null:(U=!0,A);case"textInput":return e=i.data,e===A&&U?null:e;default:return null}}function Ut(e,i){if(Pt)return e==="compositionend"||!si&&q(e,i)?(e=po(),Ci=sr=ei=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y&&i.locale!=="ko"?null:i.data;default:return null}}var Ve={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Re(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ve[e.type]:i==="textarea"}function Ni(e,i,a,o){Ri?Ii?Ii.push(o):Ii=[o]:Ri=o,i=$u(i,"onChange"),0<i.length&&(a=new Zs("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var ze=null,ai=null;function Ao(e){ky(e,0)}function hu(e){var i=Wn(e);if(ho(i))return e}function rg(e,i){if(e==="change")return i}var sg=!1;if(jn){var bh;if(jn){var Sh="oninput"in document;if(!Sh){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),Sh=typeof ag.oninput=="function"}bh=Sh}else bh=!1;sg=bh&&(!document.documentMode||9<document.documentMode)}function og(){ze&&(ze.detachEvent("onpropertychange",lg),ai=ze=null)}function lg(e){if(e.propertyName==="value"&&hu(ai)){var i=[];Ni(i,ai,e,Rn(e)),Zl(Ao,i)}}function PE(e,i,a){e==="focusin"?(og(),ze=i,ai=a,ze.attachEvent("onpropertychange",lg)):e==="focusout"&&og()}function UE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hu(ai)}function kE(e,i){if(e==="click")return hu(i)}function LE(e,i){if(e==="input"||e==="change")return hu(i)}function zE(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var gn=typeof Object.is=="function"?Object.is:zE;function bo(e,i){if(gn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!nn.call(i,h)||!gn(e[h],i[h]))return!1}return!0}function ug(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cg(e,i){var a=ug(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ug(a)}}function hg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?hg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function fg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ts(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ts(e.document)}return i}function wh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var BE=jn&&"documentMode"in document&&11>=document.documentMode,sa=null,Rh=null,So=null,Ih=!1;function dg(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ih||sa==null||sa!==ts(o)||(o=sa,"selectionStart"in o&&wh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),So&&bo(So,o)||(So=o,o=$u(Rh,"onSelect"),0<o.length&&(i=new Zs("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=sa)))}function hs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var aa={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Ch={},mg={};jn&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function fs(e){if(Ch[e])return Ch[e];if(!aa[e])return e;var i=aa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in mg)return Ch[e]=i[a];return e}var gg=fs("animationend"),pg=fs("animationiteration"),yg=fs("animationstart"),qE=fs("transitionrun"),jE=fs("transitionstart"),HE=fs("transitioncancel"),_g=fs("transitionend"),vg=new Map,Dh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dh.push("scrollEnd");function Hn(e,i){vg.set(e,i),qn(i,[e])}var Tg=new WeakMap;function Dn(e,i){if(typeof e=="object"&&e!==null){var a=Tg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Ys(i)},Tg.set(e,i),i)}return{value:e,source:i,stack:Ys(i)}}var Nn=[],oa=0,Nh=0;function fu(){for(var e=oa,i=Nh=oa=0;i<e;){var a=Nn[i];Nn[i++]=null;var o=Nn[i];Nn[i++]=null;var h=Nn[i];Nn[i++]=null;var d=Nn[i];if(Nn[i++]=null,o!==null&&h!==null){var v=o.pending;v===null?h.next=h:(h.next=v.next,v.next=h),o.pending=h}d!==0&&Eg(a,h,d)}}function du(e,i,a,o){Nn[oa++]=e,Nn[oa++]=i,Nn[oa++]=a,Nn[oa++]=o,Nh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Oh(e,i,a,o){return du(e,i,a,o),mu(e)}function la(e,i){return du(e,null,null,i),mu(e)}function Eg(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ye(a),e=d.hiddenUpdates,o=e[h],o===null?e[h]=[i]:o.push(i),i.lane=a|536870912),d):null}function mu(e){if(50<Xo)throw Xo=0,Lf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ua={};function FE(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,i,a,o){return new FE(e,i,a,o)}function Mh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,i){var a=e.alternate;return a===null?(a=pn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ag(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function gu(e,i,a,o,h,d){var v=0;if(o=e,typeof e=="function")Mh(e)&&(v=1);else if(typeof e=="string")v=KA(e,a,ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=pn(31,a,i,h),e.elementType=w,e.lanes=d,e;case X:return ds(a.children,h,d,i);case nt:v=8,h|=24;break;case Z:return e=pn(12,a,i,h|2),e.elementType=Z,e.lanes=d,e;case mt:return e=pn(13,a,i,h),e.elementType=mt,e.lanes=d,e;case It:return e=pn(19,a,i,h),e.elementType=It,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:case dt:v=10;break t;case At:v=9;break t;case Nt:v=11;break t;case O:v=14;break t;case b:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=pn(v,a,i,h),i.elementType=e,i.type=o,i.lanes=d,i}function ds(e,i,a,o){return e=pn(7,e,o,i),e.lanes=a,e}function Vh(e,i,a){return e=pn(6,e,null,i),e.lanes=a,e}function xh(e,i,a){return i=pn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ca=[],ha=0,pu=null,yu=0,On=[],Mn=0,ms=null,Mi=1,Vi="";function gs(e,i){ca[ha++]=yu,ca[ha++]=pu,pu=e,yu=i}function bg(e,i,a){On[Mn++]=Mi,On[Mn++]=Vi,On[Mn++]=ms,ms=e;var o=Mi;e=Vi;var h=32-Ye(o)-1;o&=~(1<<h),a+=1;var d=32-Ye(i)+h;if(30<d){var v=h-h%5;d=(o&(1<<v)-1).toString(32),o>>=v,h-=v,Mi=1<<32-Ye(i)+h|a<<h|o,Vi=d+e}else Mi=1<<d|a<<h|o,Vi=e}function Ph(e){e.return!==null&&(gs(e,1),bg(e,1,0))}function Uh(e){for(;e===pu;)pu=ca[--ha],ca[ha]=null,yu=ca[--ha],ca[ha]=null;for(;e===ms;)ms=On[--Mn],On[Mn]=null,Vi=On[--Mn],On[Mn]=null,Mi=On[--Mn],On[Mn]=null}var on=null,ue=null,jt=!1,ps=null,oi=!1,kh=Error(s(519));function ys(e){var i=Error(s(418,""));throw Io(Dn(i,e)),kh}function Sg(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[Se]=e,i[pe]=o,a){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(a=0;a<Zo.length;a++)Mt(Zo[a],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),es(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Xs(i);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),ns(i,o.value,o.defaultValue,o.children),Xs(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||qy(i.textContent,a)?(o.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),o.onScroll!=null&&Mt("scroll",i),o.onScrollEnd!=null&&Mt("scrollend",i),o.onClick!=null&&(i.onclick=Zu),i=!0):i=!1,i||ys(e)}function wg(e){for(on=e.return;on;)switch(on.tag){case 5:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:on=on.return}}function wo(e){if(e!==on)return!1;if(!jt)return wg(e),jt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||td(e.type,e.memoizedProps)),a=!a),a&&ue&&ys(e),wg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){ue=Gn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}ue=null}}else i===27?(i=ue,Er(e.type)?(e=rd,rd=null,ue=e):ue=i):ue=on?Gn(e.stateNode.nextSibling):null;return!0}function Ro(){ue=on=null,jt=!1}function Rg(){var e=ps;return e!==null&&(cn===null?cn=e:cn.push.apply(cn,e),ps=null),e}function Io(e){ps===null?ps=[e]:ps.push(e)}var Lh=Y(null),_s=null,xi=null;function ar(e,i,a){W(Lh,i._currentValue),i._currentValue=a}function Pi(e){e._currentValue=Lh.current,et(Lh)}function zh(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function Bh(e,i,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var S=0;S<i.length;S++)if(T.context===i[S]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),zh(d.return,a,e),o||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),zh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Co(e,i,a,o){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;gn(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===rt.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(il):e=[il])}h=h.return}e!==null&&Bh(i,e,a,o),i.flags|=262144}function _u(e){for(e=e.firstContext;e!==null;){if(!gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return Ig(_s,e)}function vu(e,i){return _s===null&&vs(e),Ig(e,i)}function Ig(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},xi===null){if(e===null)throw Error(s(308));xi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else xi=xi.next=i;return a}var GE=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},KE=r.unstable_scheduleCallback,QE=r.unstable_NormalPriority,Ie={$$typeof:dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qh(){return{controller:new GE,data:new Map,refCount:0}}function Do(e){e.refCount--,e.refCount===0&&KE(QE,function(){e.controller.abort()})}var No=null,jh=0,fa=0,da=null;function YE(e,i){if(No===null){var a=No=[];jh=0,fa=Gf(),da={status:"pending",value:void 0,then:function(o){a.push(o)}}}return jh++,i.then(Cg,Cg),i}function Cg(){if(--jh===0&&No!==null){da!==null&&(da.status="fulfilled");var e=No;No=null,fa=0,da=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function XE(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var Dg=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&YE(e,i),Dg!==null&&Dg(e,i)};var Ts=Y(null);function Hh(){var e=Ts.current;return e!==null?e:ee.pooledCache}function Tu(e,i){i===null?W(Ts,Ts.current):W(Ts,i.pool)}function Ng(){var e=Hh();return e===null?null:{parent:Ie._currentValue,pool:e}}var Oo=Error(s(460)),Og=Error(s(474)),Eu=Error(s(542)),Fh={then:function(){}};function Mg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Au(){}function Vg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Au,Au),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Pg(e),e;default:if(typeof i.status=="string")i.then(Au,Au);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Pg(e),e}throw Mo=i,Oo}}var Mo=null;function xg(){if(Mo===null)throw Error(s(459));var e=Mo;return Mo=null,e}function Pg(e){if(e===Oo||e===Eu)throw Error(s(483))}var or=!1;function Gh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function lr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ur(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Kt&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=mu(e),Eg(e,null,a),i}return du(e,o,i,a),mu(e)}function Vo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,ao(e,a)}}function Qh(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Yh=!1;function xo(){if(Yh){var e=da;if(e!==null)throw e}}function Po(e,i,a,o){Yh=!1;var h=e.updateQueue;or=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var S=T,L=S.next;S.next=null,v===null?d=L:v.next=L,v=S;var F=e.alternate;F!==null&&(F=F.updateQueue,T=F.lastBaseUpdate,T!==v&&(T===null?F.firstBaseUpdate=L:T.next=L,F.lastBaseUpdate=S))}if(d!==null){var K=h.baseState;v=0,F=L=S=null,T=d;do{var z=T.lane&-536870913,B=z!==T.lane;if(B?(kt&z)===z:(o&z)===z){z!==0&&z===fa&&(Yh=!0),F!==null&&(F=F.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var _t=e,ft=T;z=i;var Wt=a;switch(ft.tag){case 1:if(_t=ft.payload,typeof _t=="function"){K=_t.call(Wt,K,z);break t}K=_t;break t;case 3:_t.flags=_t.flags&-65537|128;case 0:if(_t=ft.payload,z=typeof _t=="function"?_t.call(Wt,K,z):_t,z==null)break t;K=E({},K,z);break t;case 2:or=!0}}z=T.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},F===null?(L=F=B,S=K):F=F.next=B,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;B=T,T=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(S=K),h.baseState=S,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),yr|=v,e.lanes=v,e.memoizedState=K}}function Ug(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function kg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ug(a[e],i)}var ma=Y(null),bu=Y(0);function Lg(e,i){e=ji,W(bu,e),W(ma,i),ji=e|i.baseLanes}function Xh(){W(bu,ji),W(ma,ma.current)}function $h(){ji=bu.current,et(ma),et(bu)}var cr=0,Ct=null,$t=null,_e=null,Su=!1,ga=!1,Es=!1,wu=0,Uo=0,pa=null,$E=0;function fe(){throw Error(s(321))}function Zh(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!gn(e[a],i[a]))return!1;return!0}function Wh(e,i,a,o,h,d){return cr=d,Ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?Ep:Ap,Es=!1,d=a(o,h),Es=!1,ga&&(d=Bg(i,a,o,h)),zg(e),d}function zg(e){H.H=Ou;var i=$t!==null&&$t.next!==null;if(cr=0,_e=$t=Ct=null,Su=!1,Uo=0,pa=null,i)throw Error(s(300));e===null||xe||(e=e.dependencies,e!==null&&_u(e)&&(xe=!0))}function Bg(e,i,a,o){Ct=e;var h=0;do{if(ga&&(pa=null),Uo=0,ga=!1,25<=h)throw Error(s(301));if(h+=1,_e=$t=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=iA,d=i(a,o)}while(ga);return d}function ZE(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?ko(i):i,e=e.useState()[0],($t!==null?$t.memoizedState:null)!==e&&(Ct.flags|=1024),i}function Jh(){var e=wu!==0;return wu=0,e}function tf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function ef(e){if(Su){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Su=!1}cr=0,_e=$t=Ct=null,ga=!1,Uo=wu=0,pa=null}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Ct.memoizedState=_e=e:_e=_e.next=e,_e}function ve(){if($t===null){var e=Ct.alternate;e=e!==null?e.memoizedState:null}else e=$t.next;var i=_e===null?Ct.memoizedState:_e.next;if(i!==null)_e=i,$t=e;else{if(e===null)throw Ct.alternate===null?Error(s(467)):Error(s(310));$t=e,e={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},_e===null?Ct.memoizedState=_e=e:_e=_e.next=e}return _e}function nf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var i=Uo;return Uo+=1,pa===null&&(pa=[]),e=Vg(pa,e,i),i=Ct,(_e===null?i.memoizedState:_e.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Ep:Ap),e}function Ru(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ko(e);if(e.$$typeof===dt)return Xe(e)}throw Error(s(438,String(e)))}function rf(e){var i=null,a=Ct.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=Ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=nf(),Ct.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=N;return i.index++,a}function Ui(e,i){return typeof i=="function"?i(e):i}function Iu(e){var i=ve();return sf(i,$t,e)}function sf(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,S=null,L=i,F=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(kt&K)===K:(cr&K)===K){var z=L.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===fa&&(F=!0);else if((cr&z)===z){L=L.next,z===fa&&(F=!0);continue}else K={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(T=S=K,v=d):S=S.next=K,Ct.lanes|=z,yr|=z;K=L.action,Es&&a(d,K),d=L.hasEagerState?L.eagerState:a(d,K)}else z={lane:K,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(T=S=z,v=d):S=S.next=z,Ct.lanes|=K,yr|=K;L=L.next}while(L!==null&&L!==i);if(S===null?v=d:S.next=T,!gn(d,e.memoizedState)&&(xe=!0,F&&(a=da,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=S,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function af(e){var i=ve(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);gn(d,i.memoizedState)||(xe=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function qg(e,i,a){var o=Ct,h=ve(),d=jt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!gn(($t||h).memoizedState,a);v&&(h.memoizedState=a,xe=!0),h=h.queue;var T=Fg.bind(null,o,h,e);if(Lo(2048,8,T,[e]),h.getSnapshot!==i||v||_e!==null&&_e.memoizedState.tag&1){if(o.flags|=2048,ya(9,Cu(),Hg.bind(null,o,h,a,i),null),ee===null)throw Error(s(349));d||(cr&124)!==0||jg(o,i,a)}return a}function jg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Ct.updateQueue,i===null?(i=nf(),Ct.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Hg(e,i,a,o){i.value=a,i.getSnapshot=o,Gg(i)&&Kg(e)}function Fg(e,i,a){return a(function(){Gg(i)&&Kg(e)})}function Gg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!gn(e,a)}catch{return!0}}function Kg(e){var i=la(e,2);i!==null&&En(i,e,2)}function of(e){var i=ln();if(typeof e=="function"){var a=e;if(e=a(),Es){dn(!0);try{a()}finally{dn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},i}function Qg(e,i,a,o){return e.baseState=a,sf(e,$t,typeof o=="function"?o:Ui)}function WE(e,i,a,o,h){if(Nu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,Yg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Yg(e,i){var a=i.action,o=i.payload,h=e.state;if(i.isTransition){var d=H.T,v={};H.T=v;try{var T=a(h,o),S=H.S;S!==null&&S(v,T),Xg(e,i,T)}catch(L){lf(e,i,L)}finally{H.T=d}}else try{d=a(h,o),Xg(e,i,d)}catch(L){lf(e,i,L)}}function Xg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$g(e,i,o)},function(o){return lf(e,i,o)}):$g(e,i,a)}function $g(e,i,a){i.status="fulfilled",i.value=a,Zg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Yg(e,a)))}function lf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Zg(i),i=i.next;while(i!==o)}e.action=null}function Zg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Wg(e,i){return i}function Jg(e,i){if(jt){var a=ee.formState;if(a!==null){t:{var o=Ct;if(jt){if(ue){e:{for(var h=ue,d=oi;h.nodeType!==8;){if(!d){h=null;break e}if(h=Gn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ue=Gn(h.nextSibling),o=h.data==="F!";break t}}ys(o)}o=!1}o&&(i=a[0])}}return a=ln(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wg,lastRenderedState:i},a.queue=o,a=_p.bind(null,Ct,o),o.dispatch=a,o=of(!1),d=df.bind(null,Ct,!1,o.queue),o=ln(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,a=WE.bind(null,Ct,h,d,a),h.dispatch=a,o.memoizedState=e,[i,a,!1]}function tp(e){var i=ve();return ep(i,$t,e)}function ep(e,i,a){if(i=sf(e,i,Wg)[0],e=Iu(Ui)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=ko(i)}catch(v){throw v===Oo?Eu:v}else o=i;i=ve();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Ct.flags|=2048,ya(9,Cu(),JE.bind(null,h,a),null)),[o,d,e]}function JE(e,i){e.action=i}function np(e){var i=ve(),a=$t;if(a!==null)return ep(i,a,e);ve(),i=i.memoizedState,a=ve();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function ya(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=Ct.updateQueue,i===null&&(i=nf(),Ct.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Cu(){return{destroy:void 0,resource:void 0}}function ip(){return ve().memoizedState}function Du(e,i,a,o){var h=ln();o=o===void 0?null:o,Ct.flags|=e,h.memoizedState=ya(1|i,Cu(),a,o)}function Lo(e,i,a,o){var h=ve();o=o===void 0?null:o;var d=h.memoizedState.inst;$t!==null&&o!==null&&Zh(o,$t.memoizedState.deps)?h.memoizedState=ya(i,d,a,o):(Ct.flags|=e,h.memoizedState=ya(1|i,d,a,o))}function rp(e,i){Du(8390656,8,e,i)}function sp(e,i){Lo(2048,8,e,i)}function ap(e,i){return Lo(4,2,e,i)}function op(e,i){return Lo(4,4,e,i)}function lp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function up(e,i,a){a=a!=null?a.concat([e]):null,Lo(4,4,lp.bind(null,i,e),a)}function uf(){}function cp(e,i){var a=ve();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Zh(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function hp(e,i){var a=ve();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Zh(i,o[1]))return o[0];if(o=e(),Es){dn(!0);try{e()}finally{dn(!1)}}return a.memoizedState=[o,i],o}function cf(e,i,a){return a===void 0||(cr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=my(),Ct.lanes|=e,yr|=e,a)}function fp(e,i,a,o){return gn(a,i)?a:ma.current!==null?(e=cf(e,a,o),gn(e,i)||(xe=!0),e):(cr&42)===0?(xe=!0,e.memoizedState=a):(e=my(),Ct.lanes|=e,yr|=e,i)}function dp(e,i,a,o,h){var d=tt.p;tt.p=d!==0&&8>d?d:8;var v=H.T,T={};H.T=T,df(e,!1,i,a);try{var S=h(),L=H.S;if(L!==null&&L(T,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var F=XE(S,o);zo(e,i,F,Tn(e))}else zo(e,i,o,Tn(e))}catch(K){zo(e,i,{then:function(){},status:"rejected",reason:K},Tn())}finally{tt.p=d,H.T=v}}function tA(){}function hf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var h=mp(e).queue;dp(e,h,i,lt,a===null?tA:function(){return gp(e),a(o)})}function mp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:lt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function gp(e){var i=mp(e).next.queue;zo(e,i,{},Tn())}function ff(){return Xe(il)}function pp(){return ve().memoizedState}function yp(){return ve().memoizedState}function eA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=Tn();e=lr(a);var o=ur(i,e,a);o!==null&&(En(o,i,a),Vo(o,i,a)),i={cache:qh()},e.payload=i;return}i=i.return}}function nA(e,i,a){var o=Tn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Nu(e)?vp(i,a):(a=Oh(e,i,a,o),a!==null&&(En(a,e,o),Tp(a,i,o)))}function _p(e,i,a){var o=Tn();zo(e,i,a,o)}function zo(e,i,a,o){var h={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))vp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,gn(T,v))return du(e,i,h,0),ee===null&&fu(),!1}catch{}finally{}if(a=Oh(e,i,h,o),a!==null)return En(a,e,o),Tp(a,i,o),!0}return!1}function df(e,i,a,o){if(o={lane:2,revertLane:Gf(),action:o,hasEagerState:!1,eagerState:null,next:null},Nu(e)){if(i)throw Error(s(479))}else i=Oh(e,a,o,2),i!==null&&En(i,e,2)}function Nu(e){var i=e.alternate;return e===Ct||i!==null&&i===Ct}function vp(e,i){ga=Su=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Tp(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,ao(e,a)}}var Ou={readContext:Xe,use:Ru,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe},Ep={readContext:Xe,use:Ru,useCallback:function(e,i){return ln().memoizedState=[e,i===void 0?null:i],e},useContext:Xe,useEffect:rp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Du(4194308,4,lp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Du(4194308,4,e,i)},useInsertionEffect:function(e,i){Du(4,2,e,i)},useMemo:function(e,i){var a=ln();i=i===void 0?null:i;var o=e();if(Es){dn(!0);try{e()}finally{dn(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=ln();if(a!==void 0){var h=a(i);if(Es){dn(!0);try{a(i)}finally{dn(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=nA.bind(null,Ct,e),[o.memoizedState,e]},useRef:function(e){var i=ln();return e={current:e},i.memoizedState=e},useState:function(e){e=of(e);var i=e.queue,a=_p.bind(null,Ct,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(e,i){var a=ln();return cf(a,e,i)},useTransition:function(){var e=of(!1);return e=dp.bind(null,Ct,e.queue,!0,!1),ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=Ct,h=ln();if(jt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),ee===null)throw Error(s(349));(kt&124)!==0||jg(o,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,rp(Fg.bind(null,o,d,e),[e]),o.flags|=2048,ya(9,Cu(),Hg.bind(null,o,d,a,i),null),a},useId:function(){var e=ln(),i=ee.identifierPrefix;if(jt){var a=Vi,o=Mi;a=(o&~(1<<32-Ye(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=wu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=$E++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:ff,useFormState:Jg,useActionState:Jg,useOptimistic:function(e){var i=ln();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=df.bind(null,Ct,!0,a),a.dispatch=i,[e,i]},useMemoCache:rf,useCacheRefresh:function(){return ln().memoizedState=eA.bind(null,Ct)}},Ap={readContext:Xe,use:Ru,useCallback:cp,useContext:Xe,useEffect:sp,useImperativeHandle:up,useInsertionEffect:ap,useLayoutEffect:op,useMemo:hp,useReducer:Iu,useRef:ip,useState:function(){return Iu(Ui)},useDebugValue:uf,useDeferredValue:function(e,i){var a=ve();return fp(a,$t.memoizedState,e,i)},useTransition:function(){var e=Iu(Ui)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:ko(e),i]},useSyncExternalStore:qg,useId:pp,useHostTransitionStatus:ff,useFormState:tp,useActionState:tp,useOptimistic:function(e,i){var a=ve();return Qg(a,$t,e,i)},useMemoCache:rf,useCacheRefresh:yp},iA={readContext:Xe,use:Ru,useCallback:cp,useContext:Xe,useEffect:sp,useImperativeHandle:up,useInsertionEffect:ap,useLayoutEffect:op,useMemo:hp,useReducer:af,useRef:ip,useState:function(){return af(Ui)},useDebugValue:uf,useDeferredValue:function(e,i){var a=ve();return $t===null?cf(a,e,i):fp(a,$t.memoizedState,e,i)},useTransition:function(){var e=af(Ui)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:ko(e),i]},useSyncExternalStore:qg,useId:pp,useHostTransitionStatus:ff,useFormState:np,useActionState:np,useOptimistic:function(e,i){var a=ve();return $t!==null?Qg(a,$t,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:yp},_a=null,Bo=0;function Mu(e){var i=Bo;return Bo+=1,_a===null&&(_a=[]),Vg(_a,e,i)}function qo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Vu(e,i){throw i.$$typeof===C?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function bp(e){var i=e._init;return i(e._payload)}function Sp(e){function i(x,D){if(e){var k=x.deletions;k===null?(x.deletions=[D],x.flags|=16):k.push(D)}}function a(x,D){if(!e)return null;for(;D!==null;)i(x,D),D=D.sibling;return null}function o(x){for(var D=new Map;x!==null;)x.key!==null?D.set(x.key,x):D.set(x.index,x),x=x.sibling;return D}function h(x,D){return x=Oi(x,D),x.index=0,x.sibling=null,x}function d(x,D,k){return x.index=k,e?(k=x.alternate,k!==null?(k=k.index,k<D?(x.flags|=67108866,D):k):(x.flags|=67108866,D)):(x.flags|=1048576,D)}function v(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function T(x,D,k,G){return D===null||D.tag!==6?(D=Vh(k,x.mode,G),D.return=x,D):(D=h(D,k),D.return=x,D)}function S(x,D,k,G){var at=k.type;return at===X?F(x,D,k.props.children,G,k.key):D!==null&&(D.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===b&&bp(at)===D.type)?(D=h(D,k.props),qo(D,k),D.return=x,D):(D=gu(k.type,k.key,k.props,null,x.mode,G),qo(D,k),D.return=x,D)}function L(x,D,k,G){return D===null||D.tag!==4||D.stateNode.containerInfo!==k.containerInfo||D.stateNode.implementation!==k.implementation?(D=xh(k,x.mode,G),D.return=x,D):(D=h(D,k.children||[]),D.return=x,D)}function F(x,D,k,G,at){return D===null||D.tag!==7?(D=ds(k,x.mode,G,at),D.return=x,D):(D=h(D,k),D.return=x,D)}function K(x,D,k){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Vh(""+D,x.mode,k),D.return=x,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case V:return k=gu(D.type,D.key,D.props,null,x.mode,k),qo(k,D),k.return=x,k;case j:return D=xh(D,x.mode,k),D.return=x,D;case b:var G=D._init;return D=G(D._payload),K(x,D,k)}if(ie(D)||P(D))return D=ds(D,x.mode,k,null),D.return=x,D;if(typeof D.then=="function")return K(x,Mu(D),k);if(D.$$typeof===dt)return K(x,vu(x,D),k);Vu(x,D)}return null}function z(x,D,k,G){var at=D!==null?D.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return at!==null?null:T(x,D,""+k,G);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case V:return k.key===at?S(x,D,k,G):null;case j:return k.key===at?L(x,D,k,G):null;case b:return at=k._init,k=at(k._payload),z(x,D,k,G)}if(ie(k)||P(k))return at!==null?null:F(x,D,k,G,null);if(typeof k.then=="function")return z(x,D,Mu(k),G);if(k.$$typeof===dt)return z(x,D,vu(x,k),G);Vu(x,k)}return null}function B(x,D,k,G,at){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return x=x.get(k)||null,T(D,x,""+G,at);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return x=x.get(G.key===null?k:G.key)||null,S(D,x,G,at);case j:return x=x.get(G.key===null?k:G.key)||null,L(D,x,G,at);case b:var Dt=G._init;return G=Dt(G._payload),B(x,D,k,G,at)}if(ie(G)||P(G))return x=x.get(k)||null,F(D,x,G,at,null);if(typeof G.then=="function")return B(x,D,k,Mu(G),at);if(G.$$typeof===dt)return B(x,D,k,vu(D,G),at);Vu(D,G)}return null}function _t(x,D,k,G){for(var at=null,Dt=null,ut=D,pt=D=0,Ue=null;ut!==null&&pt<k.length;pt++){ut.index>pt?(Ue=ut,ut=null):Ue=ut.sibling;var Bt=z(x,ut,k[pt],G);if(Bt===null){ut===null&&(ut=Ue);break}e&&ut&&Bt.alternate===null&&i(x,ut),D=d(Bt,D,pt),Dt===null?at=Bt:Dt.sibling=Bt,Dt=Bt,ut=Ue}if(pt===k.length)return a(x,ut),jt&&gs(x,pt),at;if(ut===null){for(;pt<k.length;pt++)ut=K(x,k[pt],G),ut!==null&&(D=d(ut,D,pt),Dt===null?at=ut:Dt.sibling=ut,Dt=ut);return jt&&gs(x,pt),at}for(ut=o(ut);pt<k.length;pt++)Ue=B(ut,x,pt,k[pt],G),Ue!==null&&(e&&Ue.alternate!==null&&ut.delete(Ue.key===null?pt:Ue.key),D=d(Ue,D,pt),Dt===null?at=Ue:Dt.sibling=Ue,Dt=Ue);return e&&ut.forEach(function(Rr){return i(x,Rr)}),jt&&gs(x,pt),at}function ft(x,D,k,G){if(k==null)throw Error(s(151));for(var at=null,Dt=null,ut=D,pt=D=0,Ue=null,Bt=k.next();ut!==null&&!Bt.done;pt++,Bt=k.next()){ut.index>pt?(Ue=ut,ut=null):Ue=ut.sibling;var Rr=z(x,ut,Bt.value,G);if(Rr===null){ut===null&&(ut=Ue);break}e&&ut&&Rr.alternate===null&&i(x,ut),D=d(Rr,D,pt),Dt===null?at=Rr:Dt.sibling=Rr,Dt=Rr,ut=Ue}if(Bt.done)return a(x,ut),jt&&gs(x,pt),at;if(ut===null){for(;!Bt.done;pt++,Bt=k.next())Bt=K(x,Bt.value,G),Bt!==null&&(D=d(Bt,D,pt),Dt===null?at=Bt:Dt.sibling=Bt,Dt=Bt);return jt&&gs(x,pt),at}for(ut=o(ut);!Bt.done;pt++,Bt=k.next())Bt=B(ut,x,pt,Bt.value,G),Bt!==null&&(e&&Bt.alternate!==null&&ut.delete(Bt.key===null?pt:Bt.key),D=d(Bt,D,pt),Dt===null?at=Bt:Dt.sibling=Bt,Dt=Bt);return e&&ut.forEach(function(rb){return i(x,rb)}),jt&&gs(x,pt),at}function Wt(x,D,k,G){if(typeof k=="object"&&k!==null&&k.type===X&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case V:t:{for(var at=k.key;D!==null;){if(D.key===at){if(at=k.type,at===X){if(D.tag===7){a(x,D.sibling),G=h(D,k.props.children),G.return=x,x=G;break t}}else if(D.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===b&&bp(at)===D.type){a(x,D.sibling),G=h(D,k.props),qo(G,k),G.return=x,x=G;break t}a(x,D);break}else i(x,D);D=D.sibling}k.type===X?(G=ds(k.props.children,x.mode,G,k.key),G.return=x,x=G):(G=gu(k.type,k.key,k.props,null,x.mode,G),qo(G,k),G.return=x,x=G)}return v(x);case j:t:{for(at=k.key;D!==null;){if(D.key===at)if(D.tag===4&&D.stateNode.containerInfo===k.containerInfo&&D.stateNode.implementation===k.implementation){a(x,D.sibling),G=h(D,k.children||[]),G.return=x,x=G;break t}else{a(x,D);break}else i(x,D);D=D.sibling}G=xh(k,x.mode,G),G.return=x,x=G}return v(x);case b:return at=k._init,k=at(k._payload),Wt(x,D,k,G)}if(ie(k))return _t(x,D,k,G);if(P(k)){if(at=P(k),typeof at!="function")throw Error(s(150));return k=at.call(k),ft(x,D,k,G)}if(typeof k.then=="function")return Wt(x,D,Mu(k),G);if(k.$$typeof===dt)return Wt(x,D,vu(x,k),G);Vu(x,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,D!==null&&D.tag===6?(a(x,D.sibling),G=h(D,k),G.return=x,x=G):(a(x,D),G=Vh(k,x.mode,G),G.return=x,x=G),v(x)):a(x,D)}return function(x,D,k,G){try{Bo=0;var at=Wt(x,D,k,G);return _a=null,at}catch(ut){if(ut===Oo||ut===Eu)throw ut;var Dt=pn(29,ut,null,x.mode);return Dt.lanes=G,Dt.return=x,Dt}finally{}}}var va=Sp(!0),wp=Sp(!1),Vn=Y(null),li=null;function hr(e){var i=e.alternate;W(Ce,Ce.current&1),W(Vn,e),li===null&&(i===null||ma.current!==null||i.memoizedState!==null)&&(li=e)}function Rp(e){if(e.tag===22){if(W(Ce,Ce.current),W(Vn,e),li===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(li=e)}}else fr()}function fr(){W(Ce,Ce.current),W(Vn,Vn.current)}function ki(e){et(Vn),li===e&&(li=null),et(Ce)}var Ce=Y(0);function xu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||id(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function mf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=Tn(),h=lr(o);h.payload=i,a!=null&&(h.callback=a),i=ur(e,h,o),i!==null&&(En(i,e,o),Vo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=Tn(),h=lr(o);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=ur(e,h,o),i!==null&&(En(i,e,o),Vo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=Tn(),o=lr(a);o.tag=2,i!=null&&(o.callback=i),i=ur(e,o,a),i!==null&&(En(i,e,a),Vo(i,e,a))}};function Ip(e,i,a,o,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,v):i.prototype&&i.prototype.isPureReactComponent?!bo(a,o)||!bo(h,d):!0}function Cp(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&gf.enqueueReplaceState(i,i.state,null)}function As(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Pu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Dp(e){Pu(e)}function Np(e){console.error(e)}function Op(e){Pu(e)}function Uu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Mp(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function pf(e,i,a){return a=lr(a),a.tag=3,a.payload={element:null},a.callback=function(){Uu(e,i)},a}function Vp(e){return e=lr(e),e.tag=3,e}function xp(e,i,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){Mp(i,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Mp(i,a,o),typeof h!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function rA(e,i,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Co(i,a,h,!0),a=Vn.current,a!==null){switch(a.tag){case 13:return li===null?Bf():a.alternate===null&&ce===0&&(ce=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===Fh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),jf(e,o,h)),!1;case 22:return a.flags|=65536,o===Fh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),jf(e,o,h)),!1}throw Error(s(435,a.tag))}return jf(e,o,h),Bf(),!1}if(jt)return i=Vn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==kh&&(e=Error(s(422),{cause:o}),Io(Dn(e,a)))):(o!==kh&&(i=Error(s(423),{cause:o}),Io(Dn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=Dn(o,a),h=pf(e.stateNode,o,h),Qh(e,h),ce!==4&&(ce=2)),!1;var d=Error(s(520),{cause:o});if(d=Dn(d,a),Yo===null?Yo=[d]:Yo.push(d),ce!==4&&(ce=2),i===null)return!0;o=Dn(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=pf(a.stateNode,o,e),Qh(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(_r===null||!_r.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Vp(h),xp(h,e,a,o),Qh(a,h),!1}a=a.return}while(a!==null);return!1}var Pp=Error(s(461)),xe=!1;function Be(e,i,a,o){i.child=e===null?wp(i,null,a,o):va(i,e.child,a,o)}function Up(e,i,a,o,h){a=a.render;var d=i.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return vs(i),o=Wh(e,i,a,v,d,h),T=Jh(),e!==null&&!xe?(tf(e,i,h),Li(e,i,h)):(jt&&T&&Ph(i),i.flags|=1,Be(e,i,o,h),i.child)}function kp(e,i,a,o,h){if(e===null){var d=a.type;return typeof d=="function"&&!Mh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Lp(e,i,d,o,h)):(e=gu(a.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Sf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(v,o)&&e.ref===i.ref)return Li(e,i,h)}return i.flags|=1,e=Oi(d,o),e.ref=i.ref,e.return=i,i.child=e}function Lp(e,i,a,o,h){if(e!==null){var d=e.memoizedProps;if(bo(d,o)&&e.ref===i.ref)if(xe=!1,i.pendingProps=o=d,Sf(e,h))(e.flags&131072)!==0&&(xe=!0);else return i.lanes=e.lanes,Li(e,i,h)}return yf(e,i,a,o,h)}function zp(e,i,a){var o=i.pendingProps,h=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return Bp(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tu(i,d!==null?d.cachePool:null),d!==null?Lg(i,d):Xh(),Rp(i);else return i.lanes=i.childLanes=536870912,Bp(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Tu(i,d.cachePool),Lg(i,d),fr(),i.memoizedState=null):(e!==null&&Tu(i,null),Xh(),fr());return Be(e,i,h,a),i.child}function Bp(e,i,a,o){var h=Hh();return h=h===null?null:{parent:Ie._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Tu(i,null),Xh(),Rp(i),e!==null&&Co(e,i,o,!0),null}function ku(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function yf(e,i,a,o,h){return vs(i),a=Wh(e,i,a,o,void 0,h),o=Jh(),e!==null&&!xe?(tf(e,i,h),Li(e,i,h)):(jt&&o&&Ph(i),i.flags|=1,Be(e,i,a,h),i.child)}function qp(e,i,a,o,h,d){return vs(i),i.updateQueue=null,a=Bg(i,o,a,h),zg(e),o=Jh(),e!==null&&!xe?(tf(e,i,d),Li(e,i,d)):(jt&&o&&Ph(i),i.flags|=1,Be(e,i,a,d),i.child)}function jp(e,i,a,o,h){if(vs(i),i.stateNode===null){var d=ua,v=a.contextType;typeof v=="object"&&v!==null&&(d=Xe(v)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=gf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Gh(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Xe(v):ua,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(mf(i,a,v,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&gf.enqueueReplaceState(d,d.state,null),Po(i,o,d,h),xo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,S=As(a,T);d.props=S;var L=d.context,F=a.contextType;v=ua,typeof F=="object"&&F!==null&&(v=Xe(F));var K=a.getDerivedStateFromProps;F=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&Cp(i,d,o,v),or=!1;var z=i.memoizedState;d.state=z,Po(i,o,d,h),xo(),L=i.memoizedState,T||z!==L||or?(typeof K=="function"&&(mf(i,a,K,o),L=i.memoizedState),(S=or||Ip(i,a,S,o,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=L),d.props=o,d.state=L,d.context=v,o=S):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Kh(e,i),v=i.memoizedProps,F=As(a,v),d.props=F,K=i.pendingProps,z=d.context,L=a.contextType,S=ua,typeof L=="object"&&L!==null&&(S=Xe(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==K||z!==S)&&Cp(i,d,o,S),or=!1,z=i.memoizedState,d.state=z,Po(i,o,d,h),xo();var B=i.memoizedState;v!==K||z!==B||or||e!==null&&e.dependencies!==null&&_u(e.dependencies)?(typeof T=="function"&&(mf(i,a,T,o),B=i.memoizedState),(F=or||Ip(i,a,F,o,z,B,S)||e!==null&&e.dependencies!==null&&_u(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,B,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,B,S)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=B),d.props=o,d.state=B,d.context=S,o=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,ku(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=va(i,e.child,null,h),i.child=va(i,null,a,h)):Be(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Li(e,i,h),e}function Hp(e,i,a,o){return Ro(),i.flags|=256,Be(e,i,a,o),i.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(e){return{baseLanes:e,cachePool:Ng()}}function Tf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=xn),e}function Fp(e,i,a){var o=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(jt){if(h?hr(i):fr(),jt){var T=ue,S;if(S=T){t:{for(S=T,T=oi;S.nodeType!==8;){if(!T){T=null;break t}if(S=Gn(S.nextSibling),S===null){T=null;break t}}T=S}T!==null?(i.memoizedState={dehydrated:T,treeContext:ms!==null?{id:Mi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},S=pn(18,null,null,0),S.stateNode=T,S.return=i,i.child=S,on=i,ue=null,S=!0):S=!1}S||ys(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return id(T)?i.lanes=32:i.lanes=536870912,null;ki(i)}return T=o.children,o=o.fallback,h?(fr(),h=i.mode,T=Lu({mode:"hidden",children:T},h),o=ds(o,h,a,null),T.return=i,o.return=i,T.sibling=o,i.child=T,h=i.child,h.memoizedState=vf(a),h.childLanes=Tf(e,v,a),i.memoizedState=_f,o):(hr(i),Ef(i,T))}if(S=e.memoizedState,S!==null&&(T=S.dehydrated,T!==null)){if(d)i.flags&256?(hr(i),i.flags&=-257,i=Af(e,i,a)):i.memoizedState!==null?(fr(),i.child=e.child,i.flags|=128,i=null):(fr(),h=o.fallback,T=i.mode,o=Lu({mode:"visible",children:o.children},T),h=ds(h,T,a,null),h.flags|=2,o.return=i,h.return=i,o.sibling=h,i.child=o,va(i,e.child,null,a),o=i.child,o.memoizedState=vf(a),o.childLanes=Tf(e,v,a),i.memoizedState=_f,i=h);else if(hr(i),id(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,o=Error(s(419)),o.stack="",o.digest=v,Io({value:o,source:null,stack:null}),i=Af(e,i,a)}else if(xe||Co(e,i,a,!1),v=(a&e.childLanes)!==0,xe||v){if(v=ee,v!==null&&(o=a&-a,o=(o&42)!==0?1:Ji(o),o=(o&(v.suspendedLanes|a))!==0?0:o,o!==0&&o!==S.retryLane))throw S.retryLane=o,la(e,o),En(v,e,o),Pp;T.data==="$?"||Bf(),i=Af(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=S.treeContext,ue=Gn(T.nextSibling),on=i,jt=!0,ps=null,oi=!1,e!==null&&(On[Mn++]=Mi,On[Mn++]=Vi,On[Mn++]=ms,Mi=e.id,Vi=e.overflow,ms=i),i=Ef(i,o.children),i.flags|=4096);return i}return h?(fr(),h=o.fallback,T=i.mode,S=e.child,L=S.sibling,o=Oi(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&65011712,L!==null?h=Oi(L,h):(h=ds(h,T,a,null),h.flags|=2),h.return=i,o.return=i,o.sibling=h,i.child=o,o=h,h=i.child,T=e.child.memoizedState,T===null?T=vf(a):(S=T.cachePool,S!==null?(L=Ie._currentValue,S=S.parent!==L?{parent:L,pool:L}:S):S=Ng(),T={baseLanes:T.baseLanes|a,cachePool:S}),h.memoizedState=T,h.childLanes=Tf(e,v,a),i.memoizedState=_f,o):(hr(i),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Ef(e,i){return i=Lu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Lu(e,i){return e=pn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Af(e,i,a){return va(i,e.child,null,a),e=Ef(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Gp(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),zh(e.return,i,a)}function bf(e,i,a,o,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=h)}function Kp(e,i,a){var o=i.pendingProps,h=o.revealOrder,d=o.tail;if(Be(e,i,o.children,a),o=Ce.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gp(e,a,i);else if(e.tag===19)Gp(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(W(Ce,o),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&xu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),bf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&xu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}bf(i,!0,a,null,d);break;case"together":bf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Li(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),yr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Co(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Oi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Sf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&_u(e)))}function sA(e,i,a){switch(i.tag){case 3:gt(i,i.stateNode.containerInfo),ar(i,Ie,e.memoizedState.cache),Ro();break;case 27:case 5:te(i);break;case 4:gt(i,i.stateNode.containerInfo);break;case 10:ar(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(hr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Fp(e,i,a):(hr(i),e=Li(e,i,a),e!==null?e.sibling:null);hr(i);break;case 19:var h=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Co(e,i,a,!1),o=(a&i.childLanes)!==0),h){if(o)return Kp(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),W(Ce,Ce.current),o)break;return null;case 22:case 23:return i.lanes=0,zp(e,i,a);case 24:ar(i,Ie,e.memoizedState.cache)}return Li(e,i,a)}function Qp(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)xe=!0;else{if(!Sf(e,a)&&(i.flags&128)===0)return xe=!1,sA(e,i,a);xe=(e.flags&131072)!==0}else xe=!1,jt&&(i.flags&1048576)!==0&&bg(i,yu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,h=o._init;if(o=h(o._payload),i.type=o,typeof o=="function")Mh(o)?(e=As(o,e),i.tag=1,i=jp(null,i,o,e,a)):(i.tag=0,i=yf(null,i,o,e,a));else{if(o!=null){if(h=o.$$typeof,h===Nt){i.tag=11,i=Up(null,i,o,e,a);break t}else if(h===O){i.tag=14,i=kp(null,i,o,e,a);break t}}throw i=Ae(o)||o,Error(s(306,i,""))}}return i;case 0:return yf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,h=As(o,i.pendingProps),jp(e,i,o,h,a);case 3:t:{if(gt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;h=d.element,Kh(e,i),Po(i,o,null,a);var v=i.memoizedState;if(o=v.cache,ar(i,Ie,o),o!==d.cache&&Bh(i,[Ie],a,!0),xo(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Hp(e,i,o,a);break t}else if(o!==h){h=Dn(Error(s(424)),i),Io(h),i=Hp(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ue=Gn(e.firstChild),on=i,jt=!0,ps=null,oi=!0,a=wp(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ro(),o===h){i=Li(e,i,a);break t}Be(e,i,o,a)}i=i.child}return i;case 26:return ku(e,i),e===null?(a=Zy(i.type,null,i.pendingProps,null))?i.memoizedState=a:jt||(a=i.type,e=i.pendingProps,o=Wu(yt.current).createElement(a),o[Se]=i,o[pe]=e,je(o,a,e),he(o),i.stateNode=o):i.memoizedState=Zy(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return te(i),e===null&&jt&&(o=i.stateNode=Yy(i.type,i.pendingProps,yt.current),on=i,oi=!0,h=ue,Er(i.type)?(rd=h,ue=Gn(o.firstChild)):ue=h),Be(e,i,i.pendingProps.children,a),ku(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&jt&&((h=o=ue)&&(o=VA(o,i.type,i.pendingProps,oi),o!==null?(i.stateNode=o,on=i,ue=Gn(o.firstChild),oi=!1,h=!0):h=!1),h||ys(i)),te(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,o=d.children,td(h,d)?o=null:v!==null&&td(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Wh(e,i,ZE,null,null,a),il._currentValue=h),ku(e,i),Be(e,i,o,a),i.child;case 6:return e===null&&jt&&((e=a=ue)&&(a=xA(a,i.pendingProps,oi),a!==null?(i.stateNode=a,on=i,ue=null,e=!0):e=!1),e||ys(i)),null;case 13:return Fp(e,i,a);case 4:return gt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=va(i,null,o,a):Be(e,i,o,a),i.child;case 11:return Up(e,i,i.type,i.pendingProps,a);case 7:return Be(e,i,i.pendingProps,a),i.child;case 8:return Be(e,i,i.pendingProps.children,a),i.child;case 12:return Be(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,ar(i,i.type,o.value),Be(e,i,o.children,a),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,vs(i),h=Xe(h),o=o(h),i.flags|=1,Be(e,i,o,a),i.child;case 14:return kp(e,i,i.type,i.pendingProps,a);case 15:return Lp(e,i,i.type,i.pendingProps,a);case 19:return Kp(e,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},e===null?(a=Lu(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Oi(e.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return zp(e,i,a);case 24:return vs(i),o=Xe(Ie),e===null?(h=Hh(),h===null&&(h=ee,d=qh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:o,cache:h},Gh(i),ar(i,Ie,h)):((e.lanes&a)!==0&&(Kh(e,i),Po(i,null,null,a),xo()),h=e.memoizedState,d=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ar(i,Ie,o)):(o=d.cache,ar(i,Ie,o),o!==h.cache&&Bh(i,[Ie],a,!0))),Be(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function zi(e){e.flags|=4}function Yp(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!n_(i)){if(i=Vn.current,i!==null&&((kt&4194048)===kt?li!==null:(kt&62914560)!==kt&&(kt&536870912)===0||i!==li))throw Mo=Fh,Og;e.flags|=8192}}function zu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ro():536870912,e.lanes|=i,ba|=i)}function jo(e,i){if(!jt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ae(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function aA(e,i,a){var o=i.pendingProps;switch(Uh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(i),null;case 1:return ae(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Pi(Ie),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wo(i)?zi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Rg())),ae(i),null;case 26:return a=i.memoizedState,e===null?(zi(i),a!==null?(ae(i),Yp(i,a)):(ae(i),i.flags&=-16777217)):a?a!==e.memoizedState?(zi(i),ae(i),Yp(i,a)):(ae(i),i.flags&=-16777217):(e.memoizedProps!==o&&zi(i),ae(i),i.flags&=-16777217),null;case 27:be(i),a=yt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&zi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ae(i),null}e=ct.current,wo(i)?Sg(i):(e=Yy(h,o,a),i.stateNode=e,zi(i))}return ae(i),null;case 5:if(be(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&zi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ae(i),null}if(e=ct.current,wo(i))Sg(i);else{switch(h=Wu(yt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(a,{is:o.is}):h.createElement(a)}}e[Se]=i,e[pe]=o;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(je(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&zi(i)}}return ae(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&zi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=yt.current,wo(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,h=on,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Se]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||qy(e.nodeValue,a)),e||ys(i)}else e=Wu(e).createTextNode(o),e[Se]=i,i.stateNode=e}return ae(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=wo(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Se]=i}else Ro(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ae(i),h=!1}else h=Rg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ki(i),i):(ki(i),null)}if(ki(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),zu(i,i.updateQueue),ae(i),null;case 4:return Ht(),e===null&&Xf(i.stateNode.containerInfo),ae(i),null;case 10:return Pi(i.type),ae(i),null;case 19:if(et(Ce),h=i.memoizedState,h===null)return ae(i),null;if(o=(i.flags&128)!==0,d=h.rendering,d===null)if(o)jo(h,!1);else{if(ce!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=xu(e),d!==null){for(i.flags|=128,jo(h,!1),e=d.updateQueue,i.updateQueue=e,zu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Ag(a,e),a=a.sibling;return W(Ce,Ce.current&1|2),i.child}e=e.sibling}h.tail!==null&&Qe()>ju&&(i.flags|=128,o=!0,jo(h,!1),i.lanes=4194304)}else{if(!o)if(e=xu(d),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,zu(i,e),jo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!jt)return ae(i),null}else 2*Qe()-h.renderingStartTime>ju&&a!==536870912&&(i.flags|=128,o=!0,jo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Qe(),i.sibling=null,e=Ce.current,W(Ce,o?e&1|2:e&1),i):(ae(i),null);case 22:case 23:return ki(i),$h(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(ae(i),i.subtreeFlags&6&&(i.flags|=8192)):ae(i),a=i.updateQueue,a!==null&&zu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&et(Ts),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Pi(Ie),ae(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function oA(e,i){switch(Uh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Pi(Ie),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return be(i),null;case 13:if(ki(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ro()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(Ce),null;case 4:return Ht(),null;case 10:return Pi(i.type),null;case 22:case 23:return ki(i),$h(),e!==null&&et(Ts),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Pi(Ie),null;case 25:return null;default:return null}}function Xp(e,i){switch(Uh(i),i.tag){case 3:Pi(Ie),Ht();break;case 26:case 27:case 5:be(i);break;case 4:Ht();break;case 13:ki(i);break;case 19:et(Ce);break;case 10:Pi(i.type);break;case 22:case 23:ki(i),$h(),e!==null&&et(Ts);break;case 24:Pi(Ie)}}function Ho(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var d=a.create,v=a.inst;o=d(),v.destroy=o}a=a.next}while(a!==h)}}catch(T){Jt(i,i.return,T)}}function dr(e,i,a){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var S=a,L=T;try{L()}catch(F){Jt(h,S,F)}}}o=o.next}while(o!==d)}}catch(F){Jt(i,i.return,F)}}function $p(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{kg(i,a)}catch(o){Jt(e,e.return,o)}}}function Zp(e,i,a){a.props=As(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Jt(e,i,o)}}function Fo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(h){Jt(e,i,h)}}function ui(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){Jt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Jt(e,i,h)}else a.current=null}function Wp(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){Jt(e,e.return,h)}}function wf(e,i,a){try{var o=e.stateNode;CA(o,e.type,a,i),o[pe]=i}catch(h){Jt(e,e.return,h)}}function Jp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Er(e.type)||e.tag===4}function Rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Er(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function If(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Zu));else if(o!==4&&(o===27&&Er(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(If(e,i,a),e=e.sibling;e!==null;)If(e,i,a),e=e.sibling}function Bu(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Er(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bu(e,i,a),e=e.sibling;e!==null;)Bu(e,i,a),e=e.sibling}function ty(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);je(i,o,a),i[Se]=e,i[pe]=a}catch(d){Jt(e,e.return,d)}}var Bi=!1,de=!1,Cf=!1,ey=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function lA(e,i){if(e=e.containerInfo,Wf=rc,e=fg(e),wh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,S=-1,L=0,F=0,K=e,z=null;e:for(;;){for(var B;K!==a||h!==0&&K.nodeType!==3||(T=v+h),K!==d||o!==0&&K.nodeType!==3||(S=v+o),K.nodeType===3&&(v+=K.nodeValue.length),(B=K.firstChild)!==null;)z=K,K=B;for(;;){if(K===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++F===o&&(S=v),(B=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=B}a=T===-1||S===-1?null:{start:T,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:e,selectionRange:a},rc=!1,Pe=i;Pe!==null;)if(i=Pe,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Pe=e;else for(;Pe!==null;){switch(i=Pe,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var _t=As(a.type,h,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(_t,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ft){Jt(a,a.return,ft)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)nd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Pe=e;break}Pe=i.return}}function ny(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:mr(e,a),o&4&&Ho(5,a);break;case 1:if(mr(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Jt(a,a.return,v)}else{var h=As(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Jt(a,a.return,v)}}o&64&&$p(a),o&512&&Fo(a,a.return);break;case 3:if(mr(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{kg(e,i)}catch(v){Jt(a,a.return,v)}}break;case 27:i===null&&o&4&&ty(a);case 26:case 5:mr(e,a),i===null&&o&4&&Wp(a),o&512&&Fo(a,a.return);break;case 12:mr(e,a);break;case 13:mr(e,a),o&4&&sy(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yA.bind(null,a),PA(e,a))));break;case 22:if(o=a.memoizedState!==null||Bi,!o){i=i!==null&&i.memoizedState!==null||de,h=Bi;var d=de;Bi=o,(de=i)&&!d?gr(e,a,(a.subtreeFlags&8772)!==0):mr(e,a),Bi=h,de=d}break;case 30:break;default:mr(e,a)}}function iy(e){var i=e.alternate;i!==null&&(e.alternate=null,iy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&nr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var se=null,un=!1;function qi(e,i,a){for(a=a.child;a!==null;)ry(e,i,a),a=a.sibling}function ry(e,i,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(le,a)}catch{}switch(a.tag){case 26:de||ui(a,i),qi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:de||ui(a,i);var o=se,h=un;Er(a.type)&&(se=a.stateNode,un=!1),qi(e,i,a),Jo(a.stateNode),se=o,un=h;break;case 5:de||ui(a,i);case 6:if(o=se,h=un,se=null,qi(e,i,a),se=o,un=h,se!==null)if(un)try{(se.nodeType===9?se.body:se.nodeName==="HTML"?se.ownerDocument.body:se).removeChild(a.stateNode)}catch(d){Jt(a,i,d)}else try{se.removeChild(a.stateNode)}catch(d){Jt(a,i,d)}break;case 18:se!==null&&(un?(e=se,Ky(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ol(e)):Ky(se,a.stateNode));break;case 4:o=se,h=un,se=a.stateNode.containerInfo,un=!0,qi(e,i,a),se=o,un=h;break;case 0:case 11:case 14:case 15:de||dr(2,a,i),de||dr(4,a,i),qi(e,i,a);break;case 1:de||(ui(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zp(a,i,o)),qi(e,i,a);break;case 21:qi(e,i,a);break;case 22:de=(o=de)||a.memoizedState!==null,qi(e,i,a),de=o;break;default:qi(e,i,a)}}function sy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ol(e)}catch(a){Jt(i,i.return,a)}}function uA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new ey),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new ey),i;default:throw Error(s(435,e.tag))}}function Df(e,i){var a=uA(e);i.forEach(function(o){var h=_A.bind(null,e,o);a.has(o)||(a.add(o),o.then(h,h))})}function yn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Er(T.type)){se=T.stateNode,un=!1;break t}break;case 5:se=T.stateNode,un=!1;break t;case 3:case 4:se=T.stateNode.containerInfo,un=!0;break t}T=T.return}if(se===null)throw Error(s(160));ry(d,v,h),se=null,un=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)ay(i,e),i=i.sibling}var Fn=null;function ay(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yn(i,e),_n(e),o&4&&(dr(3,e,e.return),Ho(3,e),dr(5,e,e.return));break;case 1:yn(i,e),_n(e),o&512&&(de||a===null||ui(a,a.return)),o&64&&Bi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=Fn;if(yn(i,e),_n(e),o&512&&(de||a===null||ui(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Zr]||d[Se]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),je(d,o,a),d[Se]=e,he(d),o=d;break t;case"link":var v=t_("link","href",h).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(o),je(d,o,a),h.head.appendChild(d);break;case"meta":if(v=t_("meta","content",h).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(o),je(d,o,a),h.head.appendChild(d);break;default:throw Error(s(468,o))}d[Se]=e,he(d),o=d}e.stateNode=o}else e_(h,e.type,e.stateNode);else e.stateNode=Jy(h,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?e_(h,e.type,e.stateNode):Jy(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&wf(e,e.memoizedProps,a.memoizedProps)}break;case 27:yn(i,e),_n(e),o&512&&(de||a===null||ui(a,a.return)),a!==null&&o&4&&wf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yn(i,e),_n(e),o&512&&(de||a===null||ui(a,a.return)),e.flags&32){h=e.stateNode;try{wn(h,"")}catch(B){Jt(e,e.return,B)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,wf(e,h,a!==null?a.memoizedProps:h)),o&1024&&(Cf=!0);break;case 6:if(yn(i,e),_n(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(B){Jt(e,e.return,B)}}break;case 3:if(ec=null,h=Fn,Fn=Ju(i.containerInfo),yn(i,e),Fn=h,_n(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ol(i.containerInfo)}catch(B){Jt(e,e.return,B)}Cf&&(Cf=!1,oy(e));break;case 4:o=Fn,Fn=Ju(e.stateNode.containerInfo),yn(i,e),_n(e),Fn=o;break;case 12:yn(i,e),_n(e);break;case 13:yn(i,e),_n(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pf=Qe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Df(e,o)));break;case 22:h=e.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,L=Bi,F=de;if(Bi=L||h,de=F||S,yn(i,e),de=F,Bi=L,_n(e),o&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||S||Bi||de||bs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){S=a=i;try{if(d=S.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=S.stateNode;var K=S.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Jt(S,S.return,B)}}}else if(i.tag===6){if(a===null){S=i;try{S.stateNode.nodeValue=h?"":S.memoizedProps}catch(B){Jt(S,S.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Df(e,a))));break;case 19:yn(i,e),_n(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Df(e,o)));break;case 30:break;case 21:break;default:yn(i,e),_n(e)}}function _n(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(Jp(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Rf(e);Bu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(wn(v,""),a.flags&=-33);var T=Rf(e);Bu(e,T,v);break;case 3:case 4:var S=a.stateNode.containerInfo,L=Rf(e);If(e,L,S);break;default:throw Error(s(161))}}catch(F){Jt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function oy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;oy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function mr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ny(e,i.alternate,i),i=i.sibling}function bs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:dr(4,i,i.return),bs(i);break;case 1:ui(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Zp(i,i.return,a),bs(i);break;case 27:Jo(i.stateNode);case 26:case 5:ui(i,i.return),bs(i);break;case 22:i.memoizedState===null&&bs(i);break;case 30:bs(i);break;default:bs(i)}e=e.sibling}}function gr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:gr(h,d,a),Ho(4,d);break;case 1:if(gr(h,d,a),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Jt(o,o.return,L)}if(o=d,h=o.updateQueue,h!==null){var T=o.stateNode;try{var S=h.shared.hiddenCallbacks;if(S!==null)for(h.shared.hiddenCallbacks=null,h=0;h<S.length;h++)Ug(S[h],T)}catch(L){Jt(o,o.return,L)}}a&&v&64&&$p(d),Fo(d,d.return);break;case 27:ty(d);case 26:case 5:gr(h,d,a),a&&o===null&&v&4&&Wp(d),Fo(d,d.return);break;case 12:gr(h,d,a);break;case 13:gr(h,d,a),a&&v&4&&sy(h,d);break;case 22:d.memoizedState===null&&gr(h,d,a),Fo(d,d.return);break;case 30:break;default:gr(h,d,a)}i=i.sibling}}function Nf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Do(a))}function Of(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Do(e))}function ci(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ly(e,i,a,o),i=i.sibling}function ly(e,i,a,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ci(e,i,a,o),h&2048&&Ho(9,i);break;case 1:ci(e,i,a,o);break;case 3:ci(e,i,a,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Do(e)));break;case 12:if(h&2048){ci(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Jt(i,i.return,S)}}else ci(e,i,a,o);break;case 13:ci(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ci(e,i,a,o):Go(e,i):d._visibility&2?ci(e,i,a,o):(d._visibility|=2,Ta(e,i,a,o,(i.subtreeFlags&10256)!==0)),h&2048&&Nf(v,i);break;case 24:ci(e,i,a,o),h&2048&&Of(i.alternate,i);break;default:ci(e,i,a,o)}}function Ta(e,i,a,o,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,S=o,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ta(d,v,T,S,h),Ho(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?Ta(d,v,T,S,h):Go(d,v):(F._visibility|=2,Ta(d,v,T,S,h)),h&&L&2048&&Nf(v.alternate,v);break;case 24:Ta(d,v,T,S,h),h&&L&2048&&Of(v.alternate,v);break;default:Ta(d,v,T,S,h)}i=i.sibling}}function Go(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,h=o.flags;switch(o.tag){case 22:Go(a,o),h&2048&&Nf(o.alternate,o);break;case 24:Go(a,o),h&2048&&Of(o.alternate,o);break;default:Go(a,o)}i=i.sibling}}var Ko=8192;function Ea(e){if(e.subtreeFlags&Ko)for(e=e.child;e!==null;)uy(e),e=e.sibling}function uy(e){switch(e.tag){case 26:Ea(e),e.flags&Ko&&e.memoizedState!==null&&YA(Fn,e.memoizedState,e.memoizedProps);break;case 5:Ea(e);break;case 3:case 4:var i=Fn;Fn=Ju(e.stateNode.containerInfo),Ea(e),Fn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ko,Ko=16777216,Ea(e),Ko=i):Ea(e));break;default:Ea(e)}}function cy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Qo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Pe=o,fy(o,e)}cy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hy(e),e=e.sibling}function hy(e){switch(e.tag){case 0:case 11:case 15:Qo(e),e.flags&2048&&dr(9,e,e.return);break;case 3:Qo(e);break;case 12:Qo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,qu(e)):Qo(e);break;default:Qo(e)}}function qu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Pe=o,fy(o,e)}cy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:dr(8,i,i.return),qu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,qu(i));break;default:qu(i)}e=e.sibling}}function fy(e,i){for(;Pe!==null;){var a=Pe;switch(a.tag){case 0:case 11:case 15:dr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Do(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Pe=o;else t:for(a=e;Pe!==null;){o=Pe;var h=o.sibling,d=o.return;if(iy(o),o===a){Pe=null;break t}if(h!==null){h.return=d,Pe=h;break t}Pe=d}}}var cA={getCacheForType:function(e){var i=Xe(Ie),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},hA=typeof WeakMap=="function"?WeakMap:Map,Kt=0,ee=null,Ot=null,kt=0,Qt=0,vn=null,pr=!1,Aa=!1,Mf=!1,ji=0,ce=0,yr=0,Ss=0,Vf=0,xn=0,ba=0,Yo=null,cn=null,xf=!1,Pf=0,ju=1/0,Hu=null,_r=null,qe=0,vr=null,Sa=null,wa=0,Uf=0,kf=null,dy=null,Xo=0,Lf=null;function Tn(){if((Kt&2)!==0&&kt!==0)return kt&-kt;if(H.T!==null){var e=fa;return e!==0?e:Gf()}return tr()}function my(){xn===0&&(xn=(kt&536870912)===0||jt?io():536870912);var e=Vn.current;return e!==null&&(e.flags|=32),xn}function En(e,i,a){(e===ee&&(Qt===2||Qt===9)||e.cancelPendingCommit!==null)&&(Ra(e,0),Tr(e,kt,xn,!1)),Ti(e,a),((Kt&2)===0||e!==ee)&&(e===ee&&((Kt&2)===0&&(Ss|=a),ce===4&&Tr(e,kt,xn,!1)),hi(e))}function gy(e,i,a){if((Kt&6)!==0)throw Error(s(327));var o=!a&&(i&124)===0&&(i&e.expiredLanes)===0||$r(e,i),h=o?mA(e,i):qf(e,i,!0),d=o;do{if(h===0){Aa&&!o&&Tr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!fA(a)){h=qf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=Yo;var S=T.current.memoizedState.isDehydrated;if(S&&(Ra(T,v).flags|=256),v=qf(T,v,!1),v!==2){if(Mf&&!S){T.errorRecoveryDisabledLanes|=d,Ss|=d,h=4;break t}d=cn,cn=h,d!==null&&(cn===null?cn=d:cn.push.apply(cn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ra(e,0),Tr(e,i,0,!0);break}t:{switch(o=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Tr(o,i,xn,!pr);break t;case 2:cn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Pf+300-Qe(),10<h)){if(Tr(o,i,xn,!pr),Hs(o,0,!0)!==0)break t;o.timeoutHandle=Fy(py.bind(null,o,a,cn,Hu,xf,i,xn,Ss,ba,pr,d,2,-0,0),h);break t}py(o,a,cn,Hu,xf,i,xn,Ss,ba,pr,d,0,-0,0)}}break}while(!0);hi(e)}function py(e,i,a,o,h,d,v,T,S,L,F,K,z,B){if(e.timeoutHandle=-1,K=i.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(nl={stylesheets:null,count:0,unsuspend:QA},uy(i),K=XA(),K!==null)){e.cancelPendingCommit=K(by.bind(null,e,i,d,a,o,h,v,T,S,F,1,z,B)),Tr(e,d,v,!L);return}by(e,i,d,a,o,h,v,T,S)}function fA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],d=h.getSnapshot;h=h.value;try{if(!gn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(e,i,a,o){i&=~Vf,i&=~Ss,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var d=31-Ye(h),v=1<<d;o[d]=-1,h&=~v}a!==0&&$n(e,a,i)}function Fu(){return(Kt&6)===0?($o(0),!1):!0}function zf(){if(Ot!==null){if(Qt===0)var e=Ot.return;else e=Ot,xi=_s=null,ef(e),_a=null,Bo=0,e=Ot;for(;e!==null;)Xp(e.alternate,e),e=e.return;Ot=null}}function Ra(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,NA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),zf(),ee=e,Ot=a=Oi(e.current,null),kt=i,Qt=0,vn=null,pr=!1,Aa=$r(e,i),Mf=!1,ba=xn=Vf=Ss=yr=ce=0,cn=Yo=null,xf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-Ye(o),d=1<<h;i|=e[h],o&=~d}return ji=i,fu(),a}function yy(e,i){Ct=null,H.H=Ou,i===Oo||i===Eu?(i=xg(),Qt=3):i===Og?(i=xg(),Qt=4):Qt=i===Pp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,vn=i,Ot===null&&(ce=1,Uu(e,Dn(i,e.current)))}function _y(){var e=H.H;return H.H=Ou,e===null?Ou:e}function vy(){var e=H.A;return H.A=cA,e}function Bf(){ce=4,pr||(kt&4194048)!==kt&&Vn.current!==null||(Aa=!0),(yr&134217727)===0&&(Ss&134217727)===0||ee===null||Tr(ee,kt,xn,!1)}function qf(e,i,a){var o=Kt;Kt|=2;var h=_y(),d=vy();(ee!==e||kt!==i)&&(Hu=null,Ra(e,i)),i=!1;var v=ce;t:do try{if(Qt!==0&&Ot!==null){var T=Ot,S=vn;switch(Qt){case 8:zf(),v=6;break t;case 3:case 2:case 9:case 6:Vn.current===null&&(i=!0);var L=Qt;if(Qt=0,vn=null,Ia(e,T,S,L),a&&Aa){v=0;break t}break;default:L=Qt,Qt=0,vn=null,Ia(e,T,S,L)}}dA(),v=ce;break}catch(F){yy(e,F)}while(!0);return i&&e.shellSuspendCounter++,xi=_s=null,Kt=o,H.H=h,H.A=d,Ot===null&&(ee=null,kt=0,fu()),v}function dA(){for(;Ot!==null;)Ty(Ot)}function mA(e,i){var a=Kt;Kt|=2;var o=_y(),h=vy();ee!==e||kt!==i?(Hu=null,ju=Qe()+500,Ra(e,i)):Aa=$r(e,i);t:do try{if(Qt!==0&&Ot!==null){i=Ot;var d=vn;e:switch(Qt){case 1:Qt=0,vn=null,Ia(e,i,d,1);break;case 2:case 9:if(Mg(d)){Qt=0,vn=null,Ey(i);break}i=function(){Qt!==2&&Qt!==9||ee!==e||(Qt=7),hi(e)},d.then(i,i);break t;case 3:Qt=7;break t;case 4:Qt=5;break t;case 7:Mg(d)?(Qt=0,vn=null,Ey(i)):(Qt=0,vn=null,Ia(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var T=Ot;if(!v||n_(v)){Qt=0,vn=null;var S=T.sibling;if(S!==null)Ot=S;else{var L=T.return;L!==null?(Ot=L,Gu(L)):Ot=null}break e}}Qt=0,vn=null,Ia(e,i,d,5);break;case 6:Qt=0,vn=null,Ia(e,i,d,6);break;case 8:zf(),ce=6;break t;default:throw Error(s(462))}}gA();break}catch(F){yy(e,F)}while(!0);return xi=_s=null,H.H=o,H.A=h,Kt=a,Ot!==null?0:(ee=null,kt=0,fu(),ce)}function gA(){for(;Ot!==null&&!Oe();)Ty(Ot)}function Ty(e){var i=Qp(e.alternate,e,ji);e.memoizedProps=e.pendingProps,i===null?Gu(e):Ot=i}function Ey(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=qp(a,i,i.pendingProps,i.type,void 0,kt);break;case 11:i=qp(a,i,i.pendingProps,i.type.render,i.ref,kt);break;case 5:ef(i);default:Xp(a,i),i=Ot=Ag(i,ji),i=Qp(a,i,ji)}e.memoizedProps=e.pendingProps,i===null?Gu(e):Ot=i}function Ia(e,i,a,o){xi=_s=null,ef(i),_a=null,Bo=0;var h=i.return;try{if(rA(e,h,i,a,kt)){ce=1,Uu(e,Dn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;ce=1,Uu(e,Dn(a,e.current)),Ot=null;return}i.flags&32768?(jt||o===1?e=!0:Aa||(kt&536870912)!==0?e=!1:(pr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Vn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ay(i,e)):Gu(i)}function Gu(e){var i=e;do{if((i.flags&32768)!==0){Ay(i,pr);return}e=i.return;var a=aA(i.alternate,i,ji);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);ce===0&&(ce=5)}function Ay(e,i){do{var a=oA(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);ce=6,Ot=null}function by(e,i,a,o,h,d,v,T,S){e.cancelPendingCommit=null;do Ku();while(qe!==0);if((Kt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Nh,so(e,a,d,v,T,S),e===ee&&(Ot=ee=null,kt=0),Sa=i,vr=e,wa=a,Uf=d,kf=h,dy=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vA(Kr,function(){return Cy(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,h=tt.p,tt.p=2,v=Kt,Kt|=4;try{lA(e,i,a)}finally{Kt=v,tt.p=h,H.T=o}}qe=1,Sy(),wy(),Ry()}}function Sy(){if(qe===1){qe=0;var e=vr,i=Sa,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var o=tt.p;tt.p=2;var h=Kt;Kt|=4;try{ay(i,e);var d=Jf,v=fg(e.containerInfo),T=d.focusedElem,S=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&hg(T.ownerDocument.documentElement,T)){if(S!==null&&wh(T)){var L=S.start,F=S.end;if(F===void 0&&(F=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(F,T.value.length);else{var K=T.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var B=z.getSelection(),_t=T.textContent.length,ft=Math.min(S.start,_t),Wt=S.end===void 0?ft:Math.min(S.end,_t);!B.extend&&ft>Wt&&(v=Wt,Wt=ft,ft=v);var x=cg(T,ft),D=cg(T,Wt);if(x&&D&&(B.rangeCount!==1||B.anchorNode!==x.node||B.anchorOffset!==x.offset||B.focusNode!==D.node||B.focusOffset!==D.offset)){var k=K.createRange();k.setStart(x.node,x.offset),B.removeAllRanges(),ft>Wt?(B.addRange(k),B.extend(D.node,D.offset)):(k.setEnd(D.node,D.offset),B.addRange(k))}}}}for(K=[],B=T;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<K.length;T++){var G=K[T];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}rc=!!Wf,Jf=Wf=null}finally{Kt=h,tt.p=o,H.T=a}}e.current=i,qe=2}}function wy(){if(qe===2){qe=0;var e=vr,i=Sa,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var o=tt.p;tt.p=2;var h=Kt;Kt|=4;try{ny(e,i.alternate,i)}finally{Kt=h,tt.p=o,H.T=a}}qe=3}}function Ry(){if(qe===4||qe===3){qe=0,Xn();var e=vr,i=Sa,a=wa,o=dy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?qe=5:(qe=0,Sa=vr=null,Iy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(_r=null),Fs(a),i=i.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(le,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=H.T,h=tt.p,tt.p=2,H.T=null;try{for(var d=e.onRecoverableError,v=0;v<o.length;v++){var T=o[v];d(T.value,{componentStack:T.stack})}}finally{H.T=i,tt.p=h}}(wa&3)!==0&&Ku(),hi(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===Lf?Xo++:(Xo=0,Lf=e):Xo=0,$o(0)}}function Iy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Do(i)))}function Ku(e){return Sy(),wy(),Ry(),Cy()}function Cy(){if(qe!==5)return!1;var e=vr,i=Uf;Uf=0;var a=Fs(wa),o=H.T,h=tt.p;try{tt.p=32>a?32:a,H.T=null,a=kf,kf=null;var d=vr,v=wa;if(qe=0,Sa=vr=null,wa=0,(Kt&6)!==0)throw Error(s(331));var T=Kt;if(Kt|=4,hy(d.current),ly(d,d.current,v,a),Kt=T,$o(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(le,d)}catch{}return!0}finally{tt.p=h,H.T=o,Iy(e,i)}}function Dy(e,i,a){i=Dn(a,i),i=pf(e.stateNode,i,2),e=ur(e,i,2),e!==null&&(Ti(e,2),hi(e))}function Jt(e,i,a){if(e.tag===3)Dy(e,e,a);else for(;i!==null;){if(i.tag===3){Dy(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(_r===null||!_r.has(o))){e=Dn(a,e),a=Vp(2),o=ur(i,a,2),o!==null&&(xp(a,o,i,e),Ti(o,2),hi(o));break}}i=i.return}}function jf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new hA;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(a)||(Mf=!0,h.add(a),e=pA.bind(null,e,i,a),i.then(e,e))}function pA(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ee===e&&(kt&a)===a&&(ce===4||ce===3&&(kt&62914560)===kt&&300>Qe()-Pf?(Kt&2)===0&&Ra(e,0):Vf|=a,ba===kt&&(ba=0)),hi(e)}function Ny(e,i){i===0&&(i=ro()),e=la(e,i),e!==null&&(Ti(e,i),hi(e))}function yA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Ny(e,a)}function _A(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),Ny(e,a)}function vA(e,i){return zn(e,i)}var Qu=null,Ca=null,Hf=!1,Yu=!1,Ff=!1,ws=0;function hi(e){e!==Ca&&e.next===null&&(Ca===null?Qu=Ca=e:Ca=Ca.next=e),Yu=!0,Hf||(Hf=!0,EA())}function $o(e,i){if(!Ff&&Yu){Ff=!0;do for(var a=!1,o=Qu;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var v=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Ye(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,xy(o,d))}else d=kt,d=Hs(o,o===ee?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||$r(o,d)||(a=!0,xy(o,d));o=o.next}while(a);Ff=!1}}function TA(){Oy()}function Oy(){Yu=Hf=!1;var e=0;ws!==0&&(DA()&&(e=ws),ws=0);for(var i=Qe(),a=null,o=Qu;o!==null;){var h=o.next,d=My(o,i);d===0?(o.next=null,a===null?Qu=h:a.next=h,h===null&&(Ca=a)):(a=o,(e!==0||(d&3)!==0)&&(Yu=!0)),o=h}$o(e)}function My(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ye(d),T=1<<v,S=h[v];S===-1?((T&a)===0||(T&o)!==0)&&(h[v]=no(T,i)):S<=i&&(e.expiredLanes|=T),d&=~T}if(i=ee,a=kt,a=Hs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Qt===2||Qt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&_i(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$r(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&_i(o),Fs(a)){case 2:case 8:a=qs;break;case 32:a=Kr;break;case 268435456:a=js;break;default:a=Kr}return o=Vy.bind(null,e),a=zn(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&_i(o),e.callbackPriority=2,e.callbackNode=null,2}function Vy(e,i){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ku()&&e.callbackNode!==a)return null;var o=kt;return o=Hs(e,e===ee?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(gy(e,o,i),My(e,Qe()),e.callbackNode!=null&&e.callbackNode===a?Vy.bind(null,e):null)}function xy(e,i){if(Ku())return null;gy(e,i,!0)}function EA(){OA(function(){(Kt&6)!==0?zn(to,TA):Oy()})}function Gf(){return ws===0&&(ws=io()),ws}function Py(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$s(""+e)}function Uy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function AA(e,i,a,o,h){if(i==="submit"&&a&&a.stateNode===h){var d=Py((h[pe]||null).action),v=o.submitter;v&&(i=(i=v[pe]||null)?Py(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new Zs("action","action",null,o,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ws!==0){var S=v?Uy(h,v):new FormData(h);hf(a,{pending:!0,data:S,method:h.method,action:d},null,S)}}else typeof d=="function"&&(T.preventDefault(),S=v?Uy(h,v):new FormData(h),hf(a,{pending:!0,data:S,method:h.method,action:d},d,S))},currentTarget:h}]})}}for(var Kf=0;Kf<Dh.length;Kf++){var Qf=Dh[Kf],bA=Qf.toLowerCase(),SA=Qf[0].toUpperCase()+Qf.slice(1);Hn(bA,"on"+SA)}Hn(gg,"onAnimationEnd"),Hn(pg,"onAnimationIteration"),Hn(yg,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(qE,"onTransitionRun"),Hn(jE,"onTransitionStart"),Hn(HE,"onTransitionCancel"),Hn(_g,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function ky(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var v=o.length-1;0<=v;v--){var T=o[v],S=T.instance,L=T.currentTarget;if(T=T.listener,S!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(F){Pu(F)}h.currentTarget=null,d=S}else for(v=0;v<o.length;v++){if(T=o[v],S=T.instance,L=T.currentTarget,T=T.listener,S!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(F){Pu(F)}h.currentTarget=null,d=S}}}}function Mt(e,i){var a=i[oo];a===void 0&&(a=i[oo]=new Set);var o=e+"__bubble";a.has(o)||(Ly(i,e,2,!1),a.add(o))}function Yf(e,i,a){var o=0;i&&(o|=4),Ly(a,e,o,i)}var Xu="_reactListening"+Math.random().toString(36).slice(2);function Xf(e){if(!e[Xu]){e[Xu]=!0,lo.forEach(function(a){a!=="selectionchange"&&(wA.has(a)||Yf(a,!1,e),Yf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Xu]||(i[Xu]=!0,Yf("selectionchange",!1,i))}}function Ly(e,i,a,o){switch(l_(i)){case 2:var h=WA;break;case 8:h=JA;break;default:h=ud}a=h.bind(null,i,a,e),h=void 0,!In||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function $f(e,i,a,o,h){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=o.return;v!==null;){var S=v.tag;if((S===3||S===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=Ei(T),v===null)return;if(S=v.tag,S===5||S===6||S===26||S===27){o=d=v;continue t}T=T.parentNode}}o=o.return}Zl(function(){var L=d,F=Rn(a),K=[];t:{var z=vg.get(e);if(z!==void 0){var B=Zs,_t=e;switch(e){case"keypress":if(ni(a)===0)break t;case"keydown":case"keyup":B=ia;break;case"focusin":_t="focus",B=ta;break;case"focusout":_t="blur",B=ta;break;case"beforeblur":case"afterblur":B=ta;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=su;break;case gg:case pg:case yg:B=ea;break;case _g:B=ou;break;case"scroll":case"scrollend":B=Wl;break;case"wheel":B=ra;break;case"copy":case"cut":case"paste":B=na;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Eo;break;case"toggle":case"beforetoggle":B=uu}var ft=(i&4)!==0,Wt=!ft&&(e==="scroll"||e==="scrollend"),x=ft?z!==null?z+"Capture":null:z;ft=[];for(var D=L,k;D!==null;){var G=D;if(k=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||k===null||x===null||(G=rs(D,x),G!=null&&ft.push(Wo(D,G,k))),Wt)break;D=D.return}0<ft.length&&(z=new B(z,_t,null,a,F),K.push({event:z,listeners:ft}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==wi&&(_t=a.relatedTarget||a.fromElement)&&(Ei(_t)||_t[Sn]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(_t=a.relatedTarget||a.toElement,B=L,_t=_t?Ei(_t):null,_t!==null&&(Wt=c(_t),ft=_t.tag,_t!==Wt||ft!==5&&ft!==27&&ft!==6)&&(_t=null)):(B=null,_t=L),B!==_t)){if(ft=Cn,G="onMouseLeave",x="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ft=Eo,G="onPointerLeave",x="onPointerEnter",D="pointer"),Wt=B==null?z:Wn(B),k=_t==null?z:Wn(_t),z=new ft(G,D+"leave",B,a,F),z.target=Wt,z.relatedTarget=k,G=null,Ei(F)===L&&(ft=new ft(x,D+"enter",_t,a,F),ft.target=k,ft.relatedTarget=Wt,G=ft),Wt=G,B&&_t)e:{for(ft=B,x=_t,D=0,k=ft;k;k=Da(k))D++;for(k=0,G=x;G;G=Da(G))k++;for(;0<D-k;)ft=Da(ft),D--;for(;0<k-D;)x=Da(x),k--;for(;D--;){if(ft===x||x!==null&&ft===x.alternate)break e;ft=Da(ft),x=Da(x)}ft=null}else ft=null;B!==null&&zy(K,z,B,ft,!1),_t!==null&&Wt!==null&&zy(K,Wt,_t,ft,!0)}}t:{if(z=L?Wn(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var at=rg;else if(Re(z))if(sg)at=LE;else{at=UE;var Dt=PE}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&mo(L.elementType)&&(at=rg):at=kE;if(at&&(at=at(e,L))){Ni(K,at,a,F);break t}Dt&&Dt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&rr(z,"number",z.value)}switch(Dt=L?Wn(L):window,e){case"focusin":(Re(Dt)||Dt.contentEditable==="true")&&(sa=Dt,Rh=L,So=null);break;case"focusout":So=Rh=sa=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,dg(K,a,F);break;case"selectionchange":if(BE)break;case"keydown":case"keyup":dg(K,a,F)}var ut;if(si)t:{switch(e){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Pt?q(e,a)&&(pt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(y&&a.locale!=="ko"&&(Pt||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Pt&&(ut=po()):(ei=F,sr="value"in ei?ei.value:ei.textContent,Pt=!0)),Dt=$u(L,pt),0<Dt.length&&(pt=new vo(pt,e,null,a,F),K.push({event:pt,listeners:Dt}),ut?pt.data=ut:(ut=J(a),ut!==null&&(pt.data=ut)))),(ut=m?we(e,a):Ut(e,a))&&(pt=$u(L,"onBeforeInput"),0<pt.length&&(Dt=new vo("onBeforeInput","beforeinput",null,a,F),K.push({event:Dt,listeners:pt}),Dt.data=ut)),AA(K,e,L,a,F)}ky(K,i)})}function Wo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function $u(e,i){for(var a=i+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=rs(e,a),h!=null&&o.unshift(Wo(e,h,d)),h=rs(e,i),h!=null&&o.push(Wo(e,h,d))),e.tag===3)return o;e=e.return}return[]}function Da(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zy(e,i,a,o,h){for(var d=i._reactName,v=[];a!==null&&a!==o;){var T=a,S=T.alternate,L=T.stateNode;if(T=T.tag,S!==null&&S===o)break;T!==5&&T!==26&&T!==27||L===null||(S=L,h?(L=rs(a,d),L!=null&&v.unshift(Wo(a,L,S))):h||(L=rs(a,d),L!=null&&v.push(Wo(a,L,S)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var RA=/\r\n?/g,IA=/\u0000|\uFFFD/g;function By(e){return(typeof e=="string"?e:""+e).replace(RA,`
`).replace(IA,"")}function qy(e,i){return i=By(i),By(e)===i}function Zu(){}function Zt(e,i,a,o,h,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||wn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&wn(e,""+o);break;case"className":Jn(e,"class",o);break;case"tabIndex":Jn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,a,o);break;case"style":fo(e,o,d);break;case"data":if(i!=="object"){Jn(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$s(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Zt(e,i,"name",h.name,h,null),Zt(e,i,"formEncType",h.formEncType,h,null),Zt(e,i,"formMethod",h.formMethod,h,null),Zt(e,i,"formTarget",h.formTarget,h,null)):(Zt(e,i,"encType",h.encType,h,null),Zt(e,i,"method",h.method,h,null),Zt(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$s(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zu);break;case"onScroll":o!=null&&Mt("scroll",e);break;case"onScrollEnd":o!=null&&Mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=$s(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),ir(e,"popover",o);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ir(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vh.get(a)||a,ir(e,a,o))}}function Zf(e,i,a,o,h,d){switch(a){case"style":fo(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wn(e,o):(typeof o=="number"||typeof o=="bigint")&&wn(e,""+o);break;case"onScroll":o!=null&&Mt("scroll",e);break;case"onScrollEnd":o!=null&&Mt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[pe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ir(e,a,o)}}}function je(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var o=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Zt(e,i,d,v,a,null)}}h&&Zt(e,i,"srcSet",a.srcSet,a,null),o&&Zt(e,i,"src",a.src,a,null);return;case"input":Mt("invalid",e);var T=d=v=h=null,S=null,L=null;for(o in a)if(a.hasOwnProperty(o)){var F=a[o];if(F!=null)switch(o){case"name":h=F;break;case"type":v=F;break;case"checked":S=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Zt(e,i,o,F,a,null)}}es(e,d,T,S,L,v,h,!1),Xs(e);return;case"select":Mt("invalid",e),o=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:Zt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!o,i!=null?Si(e,!!o,i,!1):a!=null&&Si(e,!!o,a,!0);return;case"textarea":Mt("invalid",e),d=h=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Zt(e,i,v,T,a,null)}ns(e,o,h,d),Xs(e);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(o=a[S],o!=null))switch(S){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(e,i,S,o,a,null)}return;case"dialog":Mt("beforetoggle",e),Mt("toggle",e),Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(o=0;o<Zo.length;o++)Mt(Zo[o],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(o=a[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Zt(e,i,L,o,a,null)}return;default:if(mo(i)){for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!==void 0&&Zf(e,i,F,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Zt(e,i,T,o,a,null))}function CA(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,S=null,L=null,F=null;for(B in a){var K=a[B];if(a.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":S=K;default:o.hasOwnProperty(B)||Zt(e,i,B,null,o,K)}}for(var z in o){var B=o[z];if(K=a[z],o.hasOwnProperty(z)&&(B!=null||K!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":F=B;break;case"value":v=B;break;case"defaultValue":T=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==K&&Zt(e,i,z,B,o,K)}}mn(e,v,T,S,L,F,d,h);return;case"select":B=v=T=z=null;for(d in a)if(S=a[d],a.hasOwnProperty(d)&&S!=null)switch(d){case"value":break;case"multiple":B=S;default:o.hasOwnProperty(d)||Zt(e,i,d,null,o,S)}for(h in o)if(d=o[h],S=a[h],o.hasOwnProperty(h)&&(d!=null||S!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==S&&Zt(e,i,h,d,o,S)}i=T,a=v,o=B,z!=null?Si(e,!!a,z,!1):!!o!=!!a&&(i!=null?Si(e,!!a,i,!0):Si(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Zt(e,i,T,null,o,h)}for(v in o)if(h=o[v],d=a[v],o.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Zt(e,i,v,h,o,d)}Xt(e,z,B);return;case"option":for(var _t in a)if(z=a[_t],a.hasOwnProperty(_t)&&z!=null&&!o.hasOwnProperty(_t))switch(_t){case"selected":e.selected=!1;break;default:Zt(e,i,_t,null,o,z)}for(S in o)if(z=o[S],B=a[S],o.hasOwnProperty(S)&&z!==B&&(z!=null||B!=null))switch(S){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Zt(e,i,S,z,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in a)z=a[ft],a.hasOwnProperty(ft)&&z!=null&&!o.hasOwnProperty(ft)&&Zt(e,i,ft,null,o,z);for(L in o)if(z=o[L],B=a[L],o.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Zt(e,i,L,z,o,B)}return;default:if(mo(i)){for(var Wt in a)z=a[Wt],a.hasOwnProperty(Wt)&&z!==void 0&&!o.hasOwnProperty(Wt)&&Zf(e,i,Wt,void 0,o,z);for(F in o)z=o[F],B=a[F],!o.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||Zf(e,i,F,z,o,B);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!o.hasOwnProperty(x)&&Zt(e,i,x,null,o,z);for(K in o)z=o[K],B=a[K],!o.hasOwnProperty(K)||z===B||z==null&&B==null||Zt(e,i,K,z,o,B)}var Wf=null,Jf=null;function Wu(e){return e.nodeType===9?e:e.ownerDocument}function jy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hy(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function td(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ed=null;function DA(){var e=window.event;return e&&e.type==="popstate"?e===ed?!1:(ed=e,!0):(ed=null,!1)}var Fy=typeof setTimeout=="function"?setTimeout:void 0,NA=typeof clearTimeout=="function"?clearTimeout:void 0,Gy=typeof Promise=="function"?Promise:void 0,OA=typeof queueMicrotask=="function"?queueMicrotask:typeof Gy<"u"?function(e){return Gy.resolve(null).then(e).catch(MA)}:Fy;function MA(e){setTimeout(function(){throw e})}function Er(e){return e==="head"}function Ky(e,i){var a=i,o=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var v=e.ownerDocument;if(a&1&&Jo(v.documentElement),a&2&&Jo(v.body),a&4)for(a=v.head,Jo(a),v=a.firstChild;v;){var T=v.nextSibling,S=v.nodeName;v[Zr]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),ol(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);ol(i)}function nd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nd(a),nr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function VA(e,i,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Zr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Gn(e.nextSibling),e===null)break}return null}function xA(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Gn(e.nextSibling),e===null))return null;return e}function id(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function PA(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Gn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var rd=null;function Qy(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function Yy(e,i,a){switch(i=Wu(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Jo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);nr(e)}var Pn=new Map,Xy=new Set;function Ju(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hi=tt.d;tt.d={f:UA,r:kA,D:LA,C:zA,L:BA,m:qA,X:HA,S:jA,M:FA};function UA(){var e=Hi.f(),i=Fu();return e||i}function kA(e){var i=Zn(e);i!==null&&i.tag===5&&i.type==="form"?gp(i):Hi.r(e)}var Na=typeof document>"u"?null:document;function $y(e,i,a){var o=Na;if(o&&typeof i=="string"&&i){var h=ye(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Xy.has(h)||(Xy.add(h),e={rel:e,crossOrigin:a,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),je(i,"link",e),he(i),o.head.appendChild(i)))}}function LA(e){Hi.D(e),$y("dns-prefetch",e,null)}function zA(e,i){Hi.C(e,i),$y("preconnect",e,i)}function BA(e,i,a){Hi.L(e,i,a);var o=Na;if(o&&e&&i){var h='link[rel="preload"][as="'+ye(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ye(a.imageSizes)+'"]')):h+='[href="'+ye(e)+'"]';var d=h;switch(i){case"style":d=Oa(e);break;case"script":d=Ma(e)}Pn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Pn.set(d,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(tl(d))||i==="script"&&o.querySelector(el(d))||(i=o.createElement("link"),je(i,"link",e),he(i),o.head.appendChild(i)))}}function qA(e,i){Hi.m(e,i);var a=Na;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ye(o)+'"][href="'+ye(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ma(e)}if(!Pn.has(d)&&(e=E({rel:"modulepreload",href:e},i),Pn.set(d,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(el(d)))return}o=a.createElement("link"),je(o,"link",e),he(o),a.head.appendChild(o)}}}function jA(e,i,a){Hi.S(e,i,a);var o=Na;if(o&&e){var h=rn(o).hoistableStyles,d=Oa(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(tl(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Pn.get(d))&&sd(e,a);var S=v=o.createElement("link");he(S),je(S,"link",e),S._p=new Promise(function(L,F){S.onload=L,S.onerror=F}),S.addEventListener("load",function(){T.loading|=1}),S.addEventListener("error",function(){T.loading|=2}),T.loading|=4,tc(v,i,o)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function HA(e,i){Hi.X(e,i);var a=Na;if(a&&e){var o=rn(a).hoistableScripts,h=Ma(e),d=o.get(h);d||(d=a.querySelector(el(h)),d||(e=E({src:e,async:!0},i),(i=Pn.get(h))&&ad(e,i),d=a.createElement("script"),he(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function FA(e,i){Hi.M(e,i);var a=Na;if(a&&e){var o=rn(a).hoistableScripts,h=Ma(e),d=o.get(h);d||(d=a.querySelector(el(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=Pn.get(h))&&ad(e,i),d=a.createElement("script"),he(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function Zy(e,i,a,o){var h=(h=yt.current)?Ju(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Oa(a.href),a=rn(h).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Oa(a.href);var d=rn(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(tl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Pn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Pn.set(e,a),d||GA(h,e,a,v.state))),i&&o===null)throw Error(s(528,""));return v}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ma(a),a=rn(h).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Oa(e){return'href="'+ye(e)+'"'}function tl(e){return'link[rel="stylesheet"]['+e+"]"}function Wy(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function GA(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),je(i,"link",a),he(i),e.head.appendChild(i))}function Ma(e){return'[src="'+ye(e)+'"]'}function el(e){return"script[async]"+e}function Jy(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+ye(a.href)+'"]');if(o)return i.instance=o,he(o),o;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),he(o),je(o,"style",h),tc(o,a.precedence,e),i.instance=o;case"stylesheet":h=Oa(a.href);var d=e.querySelector(tl(h));if(d)return i.state.loading|=4,i.instance=d,he(d),d;o=Wy(a),(h=Pn.get(h))&&sd(o,h),d=(e.ownerDocument||e).createElement("link"),he(d);var v=d;return v._p=new Promise(function(T,S){v.onload=T,v.onerror=S}),je(d,"link",o),i.state.loading|=4,tc(d,a.precedence,e),i.instance=d;case"script":return d=Ma(a.src),(h=e.querySelector(el(d)))?(i.instance=h,he(h),h):(o=a,(h=Pn.get(d))&&(o=E({},a),ad(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),he(h),je(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,tc(o,a.precedence,e));return i.instance}function tc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function sd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ad(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var ec=null;function t_(e,i,a){if(ec===null){var o=new Map,h=ec=new Map;h.set(a,o)}else h=ec,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[Zr]||d[Se]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=o.get(v);T?T.push(d):o.set(v,[d])}}return o}function e_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function KA(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function n_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var nl=null;function QA(){}function YA(e,i,a){if(nl===null)throw Error(s(475));var o=nl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Oa(a.href),d=e.querySelector(tl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=nc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=d,he(d);return}d=e.ownerDocument||e,a=Wy(a),(h=Pn.get(h))&&sd(a,h),d=d.createElement("link"),he(d);var v=d;v._p=new Promise(function(T,S){v.onload=T,v.onerror=S}),je(d,"link",a),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=nc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function XA(){if(nl===null)throw Error(s(475));var e=nl;return e.stylesheets&&e.count===0&&od(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&od(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function nc(){if(this.count--,this.count===0){if(this.stylesheets)od(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ic=null;function od(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ic=new Map,i.forEach($A,e),ic=null,nc.call(e))}function $A(e,i){if(!(i.state.loading&4)){var a=ic.get(e);if(a)var o=a.get(null);else{a=new Map,ic.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||o,d===o&&a.set(null,h),a.set(v,h),this.count++,o=nc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var il={$$typeof:dt,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function ZA(e,i,a,o,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.hiddenUpdates=vi(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function i_(e,i,a,o,h,d,v,T,S,L,F,K){return e=new ZA(e,i,a,v,T,S,L,K),i=1,d===!0&&(i|=24),d=pn(3,null,null,i),e.current=d,d.stateNode=e,i=qh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},Gh(d),e}function r_(e){return e?(e=ua,e):ua}function s_(e,i,a,o,h,d){h=r_(h),o.context===null?o.context=h:o.pendingContext=h,o=lr(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ur(e,o,i),a!==null&&(En(a,e,i),Vo(a,e,i))}function a_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function ld(e,i){a_(e,i),(e=e.alternate)&&a_(e,i)}function o_(e){if(e.tag===13){var i=la(e,67108864);i!==null&&En(i,e,67108864),ld(e,67108864)}}var rc=!0;function WA(e,i,a,o){var h=H.T;H.T=null;var d=tt.p;try{tt.p=2,ud(e,i,a,o)}finally{tt.p=d,H.T=h}}function JA(e,i,a,o){var h=H.T;H.T=null;var d=tt.p;try{tt.p=8,ud(e,i,a,o)}finally{tt.p=d,H.T=h}}function ud(e,i,a,o){if(rc){var h=cd(o);if(h===null)$f(e,i,o,sc,a),u_(e,o);else if(eb(h,e,i,a,o))o.stopPropagation();else if(u_(e,o),i&4&&-1<tb.indexOf(e)){for(;h!==null;){var d=Zn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Bn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var S=1<<31-Ye(v);T.entanglements[1]|=S,v&=~S}hi(d),(Kt&6)===0&&(ju=Qe()+500,$o(0))}}break;case 13:T=la(d,2),T!==null&&En(T,d,2),Fu(),ld(d,2)}if(d=cd(o),d===null&&$f(e,i,o,sc,a),d===h)break;h=d}h!==null&&o.stopPropagation()}else $f(e,i,o,null,a)}}function cd(e){return e=Rn(e),hd(e)}var sc=null;function hd(e){if(sc=null,e=Ei(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return sc=e,null}function l_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dh()){case to:return 2;case qs:return 8;case Kr:case mh:return 32;case js:return 268435456;default:return 32}default:return 32}}var fd=!1,Ar=null,br=null,Sr=null,rl=new Map,sl=new Map,wr=[],tb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u_(e,i){switch(e){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":rl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(i.pointerId)}}function al(e,i,a,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Zn(i),i!==null&&o_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function eb(e,i,a,o,h){switch(i){case"focusin":return Ar=al(Ar,e,i,a,o,h),!0;case"dragenter":return br=al(br,e,i,a,o,h),!0;case"mouseover":return Sr=al(Sr,e,i,a,o,h),!0;case"pointerover":var d=h.pointerId;return rl.set(d,al(rl.get(d)||null,e,i,a,o,h)),!0;case"gotpointercapture":return d=h.pointerId,sl.set(d,al(sl.get(d)||null,e,i,a,o,h)),!0}return!1}function c_(e){var i=Ei(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Fl(e.priority,function(){if(a.tag===13){var o=Tn();o=Ji(o);var h=la(a,o);h!==null&&En(h,a,o),ld(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=cd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);wi=o,a.target.dispatchEvent(o),wi=null}else return i=Zn(a),i!==null&&o_(i),e.blockedOn=a,!1;i.shift()}return!0}function h_(e,i,a){ac(e)&&a.delete(i)}function nb(){fd=!1,Ar!==null&&ac(Ar)&&(Ar=null),br!==null&&ac(br)&&(br=null),Sr!==null&&ac(Sr)&&(Sr=null),rl.forEach(h_),sl.forEach(h_)}function oc(e,i){e.blockedOn===i&&(e.blockedOn=null,fd||(fd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,nb)))}var lc=null;function f_(e){lc!==e&&(lc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(hd(o||a)===null)continue;break}var d=Zn(a);d!==null&&(e.splice(i,3),i-=3,hf(d,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function ol(e){function i(S){return oc(S,e)}Ar!==null&&oc(Ar,e),br!==null&&oc(br,e),Sr!==null&&oc(Sr,e),rl.forEach(i),sl.forEach(i);for(var a=0;a<wr.length;a++){var o=wr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)c_(a),a.blockedOn===null&&wr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],d=a[o+1],v=h[pe]||null;if(typeof d=="function")v||f_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[pe]||null)T=v.formAction;else if(hd(h)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),f_(a)}}}function dd(e){this._internalRoot=e}uc.prototype.render=dd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=Tn();s_(a,o,e,i,null,null)},uc.prototype.unmount=dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;s_(e.current,2,null,e,null,null),Fu(),i[Sn]=null}};function uc(e){this._internalRoot=e}uc.prototype.unstable_scheduleHydration=function(e){if(e){var i=tr();e={blockedOn:null,target:e,priority:i};for(var a=0;a<wr.length&&i!==0&&i<wr[a].priority;a++);wr.splice(a,0,e),a===0&&c_(e)}};var d_=t.version;if(d_!=="19.1.0")throw Error(s(527,d_,"19.1.0"));tt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var ib={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{le=cc.inject(ib),Gt=cc}catch{}}return ul.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",h=Dp,d=Np,v=Op,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=i_(e,1,!1,null,null,a,o,h,d,v,T,null),e[Sn]=i.current,Xf(e),new dd(i)},ul.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,h="",d=Dp,v=Np,T=Op,S=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=i_(e,1,!0,i,a??null,o,h,d,v,T,S,L),i.context=r_(null),a=i.current,o=Tn(),o=Ji(o),h=lr(o),h.callback=null,ur(a,h,o),a=o,i.current.lanes=a,Ti(i,a),hi(i),e[Sn]=i.current,Xf(e),new uc(i)},ul.version="19.1.0",ul}var b_;function db(){if(b_)return pd.exports;b_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),pd.exports=fb(),pd.exports}var mb=db(),S_={};/**
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
 */const Xv=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[n++]=l:l<2048?(t[n++]=l>>6|192,t[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=l>>18|240,t[n++]=l>>12&63|128,t[n++]=l>>6&63|128,t[n++]=l&63|128):(t[n++]=l>>12|224,t[n++]=l>>6&63|128,t[n++]=l&63|128)}return t},gb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],f=r[n++],g=r[n++],p=((l&7)<<18|(c&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],f=r[n++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},$v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],f=l+1<r.length,g=f?r[l+1]:0,p=l+2<r.length,_=p?r[l+2]:0,E=c>>2,C=(c&3)<<4|g>>4;let V=(g&15)<<2|_>>6,j=_&63;p||(j=64,f||(V=64)),s.push(n[E],n[C],n[V],n[j])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Xv(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):gb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],g=l<r.length?n[r.charAt(l)]:0;++l;const _=l<r.length?n[r.charAt(l)]:64;++l;const C=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||g==null||_==null||C==null)throw new pb;const V=c<<2|g>>4;if(s.push(V),_!==64){const j=g<<4&240|_>>2;if(s.push(j),C!==64){const X=_<<6&192|C;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class pb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yb=function(r){const t=Xv(r);return $v.encodeByteArray(t,!0)},wc=function(r){return yb(r).replace(/\./g,"")},Zv=function(r){try{return $v.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function _b(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vb=()=>_b().__FIREBASE_DEFAULTS__,Tb=()=>{if(typeof process>"u"||typeof S_>"u")return;const r=S_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Eb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Zv(r[1]);return t&&JSON.parse(t)},Hc=()=>{try{return vb()||Tb()||Eb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Wv=r=>{var t,n;return(n=(t=Hc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},Ab=r=>{const t=Wv(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Jv=()=>{var r;return(r=Hc())===null||r===void 0?void 0:r.config},t0=r=>{var t;return(t=Hc())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class bb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Sb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[wc(JSON.stringify(n)),wc(JSON.stringify(f)),""].join(".")}/**
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
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function Rb(){var r;const t=(r=Hc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ib(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Cb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Db(){const r=en();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Nb(){return!Rb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function n0(){try{return typeof indexedDB=="object"}catch{return!1}}function i0(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var c;t(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){t(n)}})}function Ob(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Mb="FirebaseError";class Yn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Mb,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?Vb(c,s):"Error",g=`${this.serviceName}: ${f} (${l}).`;return new Yn(l,g,s)}}function Vb(r,t){return r.replace(xb,(n,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const xb=/\{\$([^}]+)}/g;function Pb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function El(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const l of n){if(!s.includes(l))return!1;const c=r[l],f=t[l];if(w_(c)&&w_(f)){if(!El(c,f))return!1}else if(c!==f)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function w_(r){return r!==null&&typeof r=="object"}/**
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
 */function Nl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Ub(r,t){const n=new kb(r,t);return n.subscribe.bind(n)}class kb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let l;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Lb(t,["next","error","complete"])?l=t:l={next:t,error:n,complete:s},l.next===void 0&&(l.next=Td),l.error===void 0&&(l.error=Td),l.complete===void 0&&(l.complete=Td);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Td(){}/**
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
 */const zb=1e3,Bb=2,qb=4*60*60*1e3,jb=.5;function R_(r,t=zb,n=Bb){const s=t*Math.pow(n,r),l=Math.round(jb*s*(Math.random()-.5)*2);return Math.min(qb,s+l)}/**
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
 */function Ne(r){return r&&r._delegate?r._delegate:r}class Kn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Rs="[DEFAULT]";/**
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
 */class Hb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new bb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),l=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Gb(t))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=Rs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rs){return this.instances.has(t)}getOptions(t=Rs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&f.resolve(l)}return l}onInit(t,n){var s;const l=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(l,c);const f=this.instances.get(l);return f&&t(f,l),()=>{c.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Fb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Rs){return this.component?this.component.multipleInstances?t:Rs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fb(r){return r===Rs?void 0:r}function Gb(r){return r.instantiationMode==="EAGER"}/**
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
 */class Kb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Hb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xt||(xt={}));const Qb={debug:xt.DEBUG,verbose:xt.VERBOSE,info:xt.INFO,warn:xt.WARN,error:xt.ERROR,silent:xt.SILENT},Yb=xt.INFO,Xb={[xt.DEBUG]:"log",[xt.VERBOSE]:"log",[xt.INFO]:"info",[xt.WARN]:"warn",[xt.ERROR]:"error"},$b=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=Xb[t];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fc{constructor(t){this.name=t,this._logLevel=Yb,this._logHandler=$b,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in xt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,xt.DEBUG,...t),this._logHandler(this,xt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,xt.VERBOSE,...t),this._logHandler(this,xt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,xt.INFO,...t),this._logHandler(this,xt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,xt.WARN,...t),this._logHandler(this,xt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,xt.ERROR,...t),this._logHandler(this,xt.ERROR,...t)}}const Zb=(r,t)=>t.some(n=>r instanceof n);let I_,C_;function Wb(){return I_||(I_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jb(){return C_||(C_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const r0=new WeakMap,Ud=new WeakMap,s0=new WeakMap,Ed=new WeakMap,um=new WeakMap;function tS(r){const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(Pr(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&r0.set(n,r)}).catch(()=>{}),um.set(t,r),t}function eS(r){if(Ud.has(r))return;const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});Ud.set(r,t)}let kd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Ud.get(r);if(t==="objectStoreNames")return r.objectStoreNames||s0.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function nS(r){kd=r(kd)}function iS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Ad(this),t,...n);return s0.set(s,t.sort?t.sort():[t]),Pr(s)}:Jb().includes(r)?function(...t){return r.apply(Ad(this),t),Pr(r0.get(this))}:function(...t){return Pr(r.apply(Ad(this),t))}}function rS(r){return typeof r=="function"?iS(r):(r instanceof IDBTransaction&&eS(r),Zb(r,Wb())?new Proxy(r,kd):r)}function Pr(r){if(r instanceof IDBRequest)return tS(r);if(Ed.has(r))return Ed.get(r);const t=rS(r);return t!==r&&(Ed.set(r,t),um.set(t,r)),t}const Ad=r=>um.get(r);function a0(r,t,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const f=indexedDB.open(r,t),g=Pr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Pr(f.result),p.oldVersion,p.newVersion,Pr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),g}const sS=["get","getKey","getAll","getAllKeys","count"],aS=["put","add","delete","clear"],bd=new Map;function D_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(bd.get(t))return bd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,l=aS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||sS.includes(n)))return;const c=async function(f,...g){const p=this.transaction(f,l?"readwrite":"readonly");let _=p.store;return s&&(_=_.index(g.shift())),(await Promise.all([_[n](...g),l&&p.done]))[0]};return bd.set(t,c),c}nS(r=>({...r,get:(t,n,s)=>D_(t,n)||r.get(t,n,s),has:(t,n)=>!!D_(t,n)||r.has(t,n)}));/**
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
 */class oS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lS(r){const t=r.getComponent();return t?.type==="VERSION"}const Ld="@firebase/app",N_="0.10.13";/**
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
 */const Yi=new Fc("@firebase/app"),uS="@firebase/app-compat",cS="@firebase/analytics-compat",hS="@firebase/analytics",fS="@firebase/app-check-compat",dS="@firebase/app-check",mS="@firebase/auth",gS="@firebase/auth-compat",pS="@firebase/database",yS="@firebase/data-connect",_S="@firebase/database-compat",vS="@firebase/functions",TS="@firebase/functions-compat",ES="@firebase/installations",AS="@firebase/installations-compat",bS="@firebase/messaging",SS="@firebase/messaging-compat",wS="@firebase/performance",RS="@firebase/performance-compat",IS="@firebase/remote-config",CS="@firebase/remote-config-compat",DS="@firebase/storage",NS="@firebase/storage-compat",OS="@firebase/firestore",MS="@firebase/vertexai-preview",VS="@firebase/firestore-compat",xS="firebase",PS="10.14.1";/**
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
 */const zd="[DEFAULT]",US={[Ld]:"fire-core",[uS]:"fire-core-compat",[hS]:"fire-analytics",[cS]:"fire-analytics-compat",[dS]:"fire-app-check",[fS]:"fire-app-check-compat",[mS]:"fire-auth",[gS]:"fire-auth-compat",[pS]:"fire-rtdb",[yS]:"fire-data-connect",[_S]:"fire-rtdb-compat",[vS]:"fire-fn",[TS]:"fire-fn-compat",[ES]:"fire-iid",[AS]:"fire-iid-compat",[bS]:"fire-fcm",[SS]:"fire-fcm-compat",[wS]:"fire-perf",[RS]:"fire-perf-compat",[IS]:"fire-rc",[CS]:"fire-rc-compat",[DS]:"fire-gcs",[NS]:"fire-gcs-compat",[OS]:"fire-fst",[VS]:"fire-fst-compat",[MS]:"fire-vertex","fire-js":"fire-js",[xS]:"fire-js-all"};/**
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
 */const Rc=new Map,kS=new Map,Bd=new Map;function O_(r,t){try{r.container.addComponent(t)}catch(n){Yi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function pi(r){const t=r.name;if(Bd.has(t))return Yi.debug(`There were multiple attempts to register component ${t}.`),!1;Bd.set(t,r);for(const n of Rc.values())O_(n,r);for(const n of kS.values())O_(n,r);return!0}function Ls(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Fi(r){return r.settings!==void 0}/**
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
 */const LS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new ks("app","Firebase",LS);/**
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
 */class zS{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Ya=PS;function o0(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:zd,automaticDataCollectionEnabled:!1},t),l=s.name;if(typeof l!="string"||!l)throw Ur.create("bad-app-name",{appName:String(l)});if(n||(n=Jv()),!n)throw Ur.create("no-options");const c=Rc.get(l);if(c){if(El(n,c.options)&&El(s,c.config))return c;throw Ur.create("duplicate-app",{appName:l})}const f=new Kb(l);for(const p of Bd.values())f.addComponent(p);const g=new zS(n,s,f);return Rc.set(l,g),g}function cm(r=zd){const t=Rc.get(r);if(!t&&r===zd&&Jv())return o0();if(!t)throw Ur.create("no-app",{appName:r});return t}function Un(r,t,n){var s;let l=(s=US[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const c=l.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const g=[`Unable to register library "${l}" with version "${t}":`];c&&g.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&f&&g.push("and"),f&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yi.warn(g.join(" "));return}pi(new Kn(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
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
 */const BS="firebase-heartbeat-database",qS=1,Al="firebase-heartbeat-store";let Sd=null;function l0(){return Sd||(Sd=a0(BS,qS,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Al)}catch(n){console.warn(n)}}}}).catch(r=>{throw Ur.create("idb-open",{originalErrorMessage:r.message})})),Sd}async function jS(r){try{const n=(await l0()).transaction(Al),s=await n.objectStore(Al).get(u0(r));return await n.done,s}catch(t){if(t instanceof Yn)Yi.warn(t.message);else{const n=Ur.create("idb-get",{originalErrorMessage:t?.message});Yi.warn(n.message)}}}async function M_(r,t){try{const s=(await l0()).transaction(Al,"readwrite");await s.objectStore(Al).put(t,u0(r)),await s.done}catch(n){if(n instanceof Yn)Yi.warn(n.message);else{const s=Ur.create("idb-set",{originalErrorMessage:n?.message});Yi.warn(s.message)}}}function u0(r){return`${r.name}!${r.options.appId}`}/**
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
 */const HS=1024,FS=30*24*60*60*1e3;class GS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=V_();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(f=>{const g=new Date(f.date).valueOf();return Date.now()-g<=FS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Yi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=V_(),{heartbeatsToSend:s,unsentEntries:l}=KS(this._heartbeatsCache.heartbeats),c=wc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Yi.warn(n),""}}}function V_(){return new Date().toISOString().substring(0,10)}function KS(r,t=HS){const n=[];let s=r.slice();for(const l of r){const c=n.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),x_(n)>t){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),x_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class QS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n0()?i0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jS(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return M_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return M_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function x_(r){return wc(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function YS(r){pi(new Kn("platform-logger",t=>new oS(t),"PRIVATE")),pi(new Kn("heartbeat",t=>new GS(t),"PRIVATE")),Un(Ld,N_,r),Un(Ld,N_,"esm2017"),Un("fire-js","")}YS("");var XS="firebase",$S="10.14.1";/**
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
 */Un(XS,$S,"app");const c0="@firebase/installations",hm="0.6.9";/**
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
 */const h0=1e4,f0=`w:${hm}`,d0="FIS_v2",ZS="https://firebaseinstallations.googleapis.com/v1",WS=60*60*1e3,JS="installations",tw="Installations";/**
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
 */const ew={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Os=new ks(JS,tw,ew);function m0(r){return r instanceof Yn&&r.code.includes("request-failed")}/**
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
 */function g0({projectId:r}){return`${ZS}/projects/${r}/installations`}function p0(r){return{token:r.token,requestStatus:2,expiresIn:iw(r.expiresIn),creationTime:Date.now()}}async function y0(r,t){const s=(await t.json()).error;return Os.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function _0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function nw(r,{refreshToken:t}){const n=_0(r);return n.append("Authorization",rw(t)),n}async function v0(r){const t=await r();return t.status>=500&&t.status<600?r():t}function iw(r){return Number(r.replace("s","000"))}function rw(r){return`${d0} ${r}`}/**
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
 */async function sw({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=g0(r),l=_0(r),c=t.getImmediate({optional:!0});if(c){const _=await c.getHeartbeatsHeader();_&&l.append("x-firebase-client",_)}const f={fid:n,authVersion:d0,appId:r.appId,sdkVersion:f0},g={method:"POST",headers:l,body:JSON.stringify(f)},p=await v0(()=>fetch(s,g));if(p.ok){const _=await p.json();return{fid:_.fid||n,registrationStatus:2,refreshToken:_.refreshToken,authToken:p0(_.authToken)}}else throw await y0("Create Installation",p)}/**
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
 */function T0(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function aw(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ow=/^[cdef][\w-]{21}$/,qd="";function lw(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=uw(r);return ow.test(n)?n:qd}catch{return qd}}function uw(r){return aw(r).substr(0,22)}/**
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
 */function Gc(r){return`${r.appName}!${r.appId}`}/**
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
 */const E0=new Map;function A0(r,t){const n=Gc(r);b0(n,t),cw(n,t)}function b0(r,t){const n=E0.get(r);if(n)for(const s of n)s(t)}function cw(r,t){const n=hw();n&&n.postMessage({key:r,fid:t}),fw()}let Cs=null;function hw(){return!Cs&&"BroadcastChannel"in self&&(Cs=new BroadcastChannel("[Firebase] FID Change"),Cs.onmessage=r=>{b0(r.data.key,r.data.fid)}),Cs}function fw(){E0.size===0&&Cs&&(Cs.close(),Cs=null)}/**
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
 */const dw="firebase-installations-database",mw=1,Ms="firebase-installations-store";let wd=null;function fm(){return wd||(wd=a0(dw,mw,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ms)}}})),wd}async function Ic(r,t){const n=Gc(r),l=(await fm()).transaction(Ms,"readwrite"),c=l.objectStore(Ms),f=await c.get(n);return await c.put(t,n),await l.done,(!f||f.fid!==t.fid)&&A0(r,t.fid),t}async function S0(r){const t=Gc(r),s=(await fm()).transaction(Ms,"readwrite");await s.objectStore(Ms).delete(t),await s.done}async function Kc(r,t){const n=Gc(r),l=(await fm()).transaction(Ms,"readwrite"),c=l.objectStore(Ms),f=await c.get(n),g=t(f);return g===void 0?await c.delete(n):await c.put(g,n),await l.done,g&&(!f||f.fid!==g.fid)&&A0(r,g.fid),g}/**
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
 */async function dm(r){let t;const n=await Kc(r.appConfig,s=>{const l=gw(s),c=pw(r,l);return t=c.registrationPromise,c.installationEntry});return n.fid===qd?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function gw(r){const t=r||{fid:lw(),registrationStatus:0};return w0(t)}function pw(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Os.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=yw(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_w(r)}:{installationEntry:t}}async function yw(r,t){try{const n=await sw(r,t);return Ic(r.appConfig,n)}catch(n){throw m0(n)&&n.customData.serverCode===409?await S0(r.appConfig):await Ic(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function _w(r){let t=await P_(r.appConfig);for(;t.registrationStatus===1;)await T0(100),t=await P_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await dm(r);return s||n}return t}function P_(r){return Kc(r,t=>{if(!t)throw Os.create("installation-not-found");return w0(t)})}function w0(r){return vw(r)?{fid:r.fid,registrationStatus:0}:r}function vw(r){return r.registrationStatus===1&&r.registrationTime+h0<Date.now()}/**
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
 */async function Tw({appConfig:r,heartbeatServiceProvider:t},n){const s=Ew(r,n),l=nw(r,n),c=t.getImmediate({optional:!0});if(c){const _=await c.getHeartbeatsHeader();_&&l.append("x-firebase-client",_)}const f={installation:{sdkVersion:f0,appId:r.appId}},g={method:"POST",headers:l,body:JSON.stringify(f)},p=await v0(()=>fetch(s,g));if(p.ok){const _=await p.json();return p0(_)}else throw await y0("Generate Auth Token",p)}function Ew(r,{fid:t}){return`${g0(r)}/${t}/authTokens:generate`}/**
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
 */async function mm(r,t=!1){let n;const s=await Kc(r.appConfig,c=>{if(!R0(c))throw Os.create("not-registered");const f=c.authToken;if(!t&&Sw(f))return c;if(f.requestStatus===1)return n=Aw(r,t),c;{if(!navigator.onLine)throw Os.create("app-offline");const g=Rw(c);return n=bw(r,g),g}});return n?await n:s.authToken}async function Aw(r,t){let n=await U_(r.appConfig);for(;n.authToken.requestStatus===1;)await T0(100),n=await U_(r.appConfig);const s=n.authToken;return s.requestStatus===0?mm(r,t):s}function U_(r){return Kc(r,t=>{if(!R0(t))throw Os.create("not-registered");const n=t.authToken;return Iw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function bw(r,t){try{const n=await Tw(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Ic(r.appConfig,s),n}catch(n){if(m0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await S0(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ic(r.appConfig,s)}throw n}}function R0(r){return r!==void 0&&r.registrationStatus===2}function Sw(r){return r.requestStatus===2&&!ww(r)}function ww(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+WS}function Rw(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function Iw(r){return r.requestStatus===1&&r.requestTime+h0<Date.now()}/**
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
 */async function Cw(r){const t=r,{installationEntry:n,registrationPromise:s}=await dm(t);return s?s.catch(console.error):mm(t).catch(console.error),n.fid}/**
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
 */async function Dw(r,t=!1){const n=r;return await Nw(n),(await mm(n,t)).token}async function Nw(r){const{registrationPromise:t}=await dm(r);t&&await t}/**
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
 */function Ow(r){if(!r||!r.options)throw Rd("App Configuration");if(!r.name)throw Rd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Rd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Rd(r){return Os.create("missing-app-config-values",{valueName:r})}/**
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
 */const I0="installations",Mw="installations-internal",Vw=r=>{const t=r.getProvider("app").getImmediate(),n=Ow(t),s=Ls(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xw=r=>{const t=r.getProvider("app").getImmediate(),n=Ls(t,I0).getImmediate();return{getId:()=>Cw(n),getToken:l=>Dw(n,l)}};function Pw(){pi(new Kn(I0,Vw,"PUBLIC")),pi(new Kn(Mw,xw,"PRIVATE"))}Pw();Un(c0,hm);Un(c0,hm,"esm2017");/**
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
 */const Cc="analytics",Uw="firebase_id",kw="origin",Lw=60*1e3,zw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gm="https://www.googletagmanager.com/gtag/js";/**
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
 */const fn=new Fc("@firebase/analytics");/**
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
 */const Bw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bn=new ks("analytics","Analytics",Bw);/**
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
 */function qw(r){if(!r.startsWith(gm)){const t=bn.create("invalid-gtag-resource",{gtagURL:r});return fn.warn(t.message),""}return r}function C0(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function jw(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function Hw(r,t){const n=jw("firebase-js-sdk-policy",{createScriptURL:qw}),s=document.createElement("script"),l=`${gm}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function Fw(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function Gw(r,t,n,s,l,c){const f=s[l];try{if(f)await t[f];else{const p=(await C0(n)).find(_=>_.measurementId===l);p&&await t[p.appId]}}catch(g){fn.error(g)}r("config",l,c)}async function Kw(r,t,n,s,l){try{let c=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const g=await C0(n);for(const p of f){const _=g.find(C=>C.measurementId===p),E=_&&t[_.appId];if(E)c.push(E);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,l||{})}catch(c){fn.error(c)}}function Qw(r,t,n,s){async function l(c,...f){try{if(c==="event"){const[g,p]=f;await Kw(r,t,n,g,p)}else if(c==="config"){const[g,p]=f;await Gw(r,t,n,s,g,p)}else if(c==="consent"){const[g,p]=f;r("consent",g,p)}else if(c==="get"){const[g,p,_]=f;r("get",g,p,_)}else if(c==="set"){const[g]=f;r("set",g)}else r(c,...f)}catch(g){fn.error(g)}}return l}function Yw(r,t,n,s,l){let c=function(...f){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=Qw(c,r,t,n),{gtagCore:c,wrappedGtag:window[l]}}function Xw(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(gm)&&n.src.includes(r))return n;return null}/**
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
 */const $w=30,Zw=1e3;class Ww{constructor(t={},n=Zw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const D0=new Ww;function Jw(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function tR(r){var t;const{appId:n,apiKey:s}=r,l={method:"GET",headers:Jw(s)},c=zw.replace("{app-id}",n),f=await fetch(c,l);if(f.status!==200&&f.status!==304){let g="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(g=p.error.message)}catch{}throw bn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function eR(r,t=D0,n){const{appId:s,apiKey:l,measurementId:c}=r.options;if(!s)throw bn.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:s};throw bn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new rR;return setTimeout(async()=>{g.abort()},Lw),N0({appId:s,apiKey:l,measurementId:c},f,g,t)}async function N0(r,{throttleEndTimeMillis:t,backoffCount:n},s,l=D0){var c;const{appId:f,measurementId:g}=r;try{await nR(s,t)}catch(p){if(g)return fn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:f,measurementId:g};throw p}try{const p=await tR(r);return l.deleteThrottleMetadata(f),p}catch(p){const _=p;if(!iR(_)){if(l.deleteThrottleMetadata(f),g)return fn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${_?.message}]`),{appId:f,measurementId:g};throw p}const E=Number((c=_?.customData)===null||c===void 0?void 0:c.httpStatus)===503?R_(n,l.intervalMillis,$w):R_(n,l.intervalMillis),C={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return l.setThrottleMetadata(f,C),fn.debug(`Calling attemptFetch again in ${E} millis`),N0(r,C,s,l)}}function nR(r,t){return new Promise((n,s)=>{const l=Math.max(t-Date.now(),0),c=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(c),s(bn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function iR(r){if(!(r instanceof Yn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class rR{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function sR(r,t,n,s,l){if(l&&l.global){r("event",n,s);return}else{const c=await t,f=Object.assign(Object.assign({},s),{send_to:c});r("event",n,f)}}/**
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
 */async function aR(){if(n0())try{await i0()}catch(r){return fn.warn(bn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return fn.warn(bn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oR(r,t,n,s,l,c,f){var g;const p=eR(r);p.then(j=>{n[j.measurementId]=j.appId,r.options.measurementId&&j.measurementId!==r.options.measurementId&&fn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${j.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(j=>fn.error(j)),t.push(p);const _=aR().then(j=>{if(j)return s.getId()}),[E,C]=await Promise.all([p,_]);Xw(c)||Hw(c,E.measurementId),l("js",new Date);const V=(g=f?.config)!==null&&g!==void 0?g:{};return V[kw]="firebase",V.update=!0,C!=null&&(V[Uw]=C),l("config",E.measurementId,V),E.measurementId}/**
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
 */class lR{constructor(t){this.app=t}_delete(){return delete gl[this.app.options.appId],Promise.resolve()}}let gl={},k_=[];const L_={};let Id="dataLayer",uR="gtag",z_,O0,B_=!1;function cR(){const r=[];if(e0()&&r.push("This is a browser extension environment."),Ob()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=bn.create("invalid-analytics-context",{errorInfo:t});fn.warn(n.message)}}function hR(r,t,n){cR();const s=r.options.appId;if(!s)throw bn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)fn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bn.create("no-api-key");if(gl[s]!=null)throw bn.create("already-exists",{id:s});if(!B_){Fw(Id);const{wrappedGtag:c,gtagCore:f}=Yw(gl,k_,L_,Id,uR);O0=c,z_=f,B_=!0}return gl[s]=oR(r,k_,L_,t,z_,Id,n),new lR(r)}function fR(r=cm()){r=Ne(r);const t=Ls(r,Cc);return t.isInitialized()?t.getImmediate():dR(r)}function dR(r,t={}){const n=Ls(r,Cc);if(n.isInitialized()){const l=n.getImmediate();if(El(t,n.getOptions()))return l;throw bn.create("already-initialized")}return n.initialize({options:t})}function mR(r,t,n,s){r=Ne(r),sR(O0,gl[r.app.options.appId],t,n,s).catch(l=>fn.error(l))}const q_="@firebase/analytics",j_="0.10.8";function gR(){pi(new Kn(Cc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return hR(s,l,n)},"PUBLIC")),pi(new Kn("analytics-internal",r,"PRIVATE")),Un(q_,j_),Un(q_,j_,"esm2017");function r(t){try{const n=t.getProvider(Cc).getImmediate();return{logEvent:(s,l,c)=>mR(n,s,l,c)}}catch(n){throw bn.create("interop-component-reg-failed",{reason:n})}}}gR();var H_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ns,M0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(O,b){function w(){}w.prototype=b.prototype,O.D=b.prototype,O.prototype=new w,O.prototype.constructor=O,O.C=function(N,M,P){for(var I=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)I[Ae-2]=arguments[Ae];return b.prototype[M].apply(N,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(O,b,w){w||(w=0);var N=Array(16);if(typeof b=="string")for(var M=0;16>M;++M)N[M]=b.charCodeAt(w++)|b.charCodeAt(w++)<<8|b.charCodeAt(w++)<<16|b.charCodeAt(w++)<<24;else for(M=0;16>M;++M)N[M]=b[w++]|b[w++]<<8|b[w++]<<16|b[w++]<<24;b=O.g[0],w=O.g[1],M=O.g[2];var P=O.g[3],I=b+(P^w&(M^P))+N[0]+3614090360&4294967295;b=w+(I<<7&4294967295|I>>>25),I=P+(M^b&(w^M))+N[1]+3905402710&4294967295,P=b+(I<<12&4294967295|I>>>20),I=M+(w^P&(b^w))+N[2]+606105819&4294967295,M=P+(I<<17&4294967295|I>>>15),I=w+(b^M&(P^b))+N[3]+3250441966&4294967295,w=M+(I<<22&4294967295|I>>>10),I=b+(P^w&(M^P))+N[4]+4118548399&4294967295,b=w+(I<<7&4294967295|I>>>25),I=P+(M^b&(w^M))+N[5]+1200080426&4294967295,P=b+(I<<12&4294967295|I>>>20),I=M+(w^P&(b^w))+N[6]+2821735955&4294967295,M=P+(I<<17&4294967295|I>>>15),I=w+(b^M&(P^b))+N[7]+4249261313&4294967295,w=M+(I<<22&4294967295|I>>>10),I=b+(P^w&(M^P))+N[8]+1770035416&4294967295,b=w+(I<<7&4294967295|I>>>25),I=P+(M^b&(w^M))+N[9]+2336552879&4294967295,P=b+(I<<12&4294967295|I>>>20),I=M+(w^P&(b^w))+N[10]+4294925233&4294967295,M=P+(I<<17&4294967295|I>>>15),I=w+(b^M&(P^b))+N[11]+2304563134&4294967295,w=M+(I<<22&4294967295|I>>>10),I=b+(P^w&(M^P))+N[12]+1804603682&4294967295,b=w+(I<<7&4294967295|I>>>25),I=P+(M^b&(w^M))+N[13]+4254626195&4294967295,P=b+(I<<12&4294967295|I>>>20),I=M+(w^P&(b^w))+N[14]+2792965006&4294967295,M=P+(I<<17&4294967295|I>>>15),I=w+(b^M&(P^b))+N[15]+1236535329&4294967295,w=M+(I<<22&4294967295|I>>>10),I=b+(M^P&(w^M))+N[1]+4129170786&4294967295,b=w+(I<<5&4294967295|I>>>27),I=P+(w^M&(b^w))+N[6]+3225465664&4294967295,P=b+(I<<9&4294967295|I>>>23),I=M+(b^w&(P^b))+N[11]+643717713&4294967295,M=P+(I<<14&4294967295|I>>>18),I=w+(P^b&(M^P))+N[0]+3921069994&4294967295,w=M+(I<<20&4294967295|I>>>12),I=b+(M^P&(w^M))+N[5]+3593408605&4294967295,b=w+(I<<5&4294967295|I>>>27),I=P+(w^M&(b^w))+N[10]+38016083&4294967295,P=b+(I<<9&4294967295|I>>>23),I=M+(b^w&(P^b))+N[15]+3634488961&4294967295,M=P+(I<<14&4294967295|I>>>18),I=w+(P^b&(M^P))+N[4]+3889429448&4294967295,w=M+(I<<20&4294967295|I>>>12),I=b+(M^P&(w^M))+N[9]+568446438&4294967295,b=w+(I<<5&4294967295|I>>>27),I=P+(w^M&(b^w))+N[14]+3275163606&4294967295,P=b+(I<<9&4294967295|I>>>23),I=M+(b^w&(P^b))+N[3]+4107603335&4294967295,M=P+(I<<14&4294967295|I>>>18),I=w+(P^b&(M^P))+N[8]+1163531501&4294967295,w=M+(I<<20&4294967295|I>>>12),I=b+(M^P&(w^M))+N[13]+2850285829&4294967295,b=w+(I<<5&4294967295|I>>>27),I=P+(w^M&(b^w))+N[2]+4243563512&4294967295,P=b+(I<<9&4294967295|I>>>23),I=M+(b^w&(P^b))+N[7]+1735328473&4294967295,M=P+(I<<14&4294967295|I>>>18),I=w+(P^b&(M^P))+N[12]+2368359562&4294967295,w=M+(I<<20&4294967295|I>>>12),I=b+(w^M^P)+N[5]+4294588738&4294967295,b=w+(I<<4&4294967295|I>>>28),I=P+(b^w^M)+N[8]+2272392833&4294967295,P=b+(I<<11&4294967295|I>>>21),I=M+(P^b^w)+N[11]+1839030562&4294967295,M=P+(I<<16&4294967295|I>>>16),I=w+(M^P^b)+N[14]+4259657740&4294967295,w=M+(I<<23&4294967295|I>>>9),I=b+(w^M^P)+N[1]+2763975236&4294967295,b=w+(I<<4&4294967295|I>>>28),I=P+(b^w^M)+N[4]+1272893353&4294967295,P=b+(I<<11&4294967295|I>>>21),I=M+(P^b^w)+N[7]+4139469664&4294967295,M=P+(I<<16&4294967295|I>>>16),I=w+(M^P^b)+N[10]+3200236656&4294967295,w=M+(I<<23&4294967295|I>>>9),I=b+(w^M^P)+N[13]+681279174&4294967295,b=w+(I<<4&4294967295|I>>>28),I=P+(b^w^M)+N[0]+3936430074&4294967295,P=b+(I<<11&4294967295|I>>>21),I=M+(P^b^w)+N[3]+3572445317&4294967295,M=P+(I<<16&4294967295|I>>>16),I=w+(M^P^b)+N[6]+76029189&4294967295,w=M+(I<<23&4294967295|I>>>9),I=b+(w^M^P)+N[9]+3654602809&4294967295,b=w+(I<<4&4294967295|I>>>28),I=P+(b^w^M)+N[12]+3873151461&4294967295,P=b+(I<<11&4294967295|I>>>21),I=M+(P^b^w)+N[15]+530742520&4294967295,M=P+(I<<16&4294967295|I>>>16),I=w+(M^P^b)+N[2]+3299628645&4294967295,w=M+(I<<23&4294967295|I>>>9),I=b+(M^(w|~P))+N[0]+4096336452&4294967295,b=w+(I<<6&4294967295|I>>>26),I=P+(w^(b|~M))+N[7]+1126891415&4294967295,P=b+(I<<10&4294967295|I>>>22),I=M+(b^(P|~w))+N[14]+2878612391&4294967295,M=P+(I<<15&4294967295|I>>>17),I=w+(P^(M|~b))+N[5]+4237533241&4294967295,w=M+(I<<21&4294967295|I>>>11),I=b+(M^(w|~P))+N[12]+1700485571&4294967295,b=w+(I<<6&4294967295|I>>>26),I=P+(w^(b|~M))+N[3]+2399980690&4294967295,P=b+(I<<10&4294967295|I>>>22),I=M+(b^(P|~w))+N[10]+4293915773&4294967295,M=P+(I<<15&4294967295|I>>>17),I=w+(P^(M|~b))+N[1]+2240044497&4294967295,w=M+(I<<21&4294967295|I>>>11),I=b+(M^(w|~P))+N[8]+1873313359&4294967295,b=w+(I<<6&4294967295|I>>>26),I=P+(w^(b|~M))+N[15]+4264355552&4294967295,P=b+(I<<10&4294967295|I>>>22),I=M+(b^(P|~w))+N[6]+2734768916&4294967295,M=P+(I<<15&4294967295|I>>>17),I=w+(P^(M|~b))+N[13]+1309151649&4294967295,w=M+(I<<21&4294967295|I>>>11),I=b+(M^(w|~P))+N[4]+4149444226&4294967295,b=w+(I<<6&4294967295|I>>>26),I=P+(w^(b|~M))+N[11]+3174756917&4294967295,P=b+(I<<10&4294967295|I>>>22),I=M+(b^(P|~w))+N[2]+718787259&4294967295,M=P+(I<<15&4294967295|I>>>17),I=w+(P^(M|~b))+N[9]+3951481745&4294967295,O.g[0]=O.g[0]+b&4294967295,O.g[1]=O.g[1]+(M+(I<<21&4294967295|I>>>11))&4294967295,O.g[2]=O.g[2]+M&4294967295,O.g[3]=O.g[3]+P&4294967295}s.prototype.u=function(O,b){b===void 0&&(b=O.length);for(var w=b-this.blockSize,N=this.B,M=this.h,P=0;P<b;){if(M==0)for(;P<=w;)l(this,O,P),P+=this.blockSize;if(typeof O=="string"){for(;P<b;)if(N[M++]=O.charCodeAt(P++),M==this.blockSize){l(this,N),M=0;break}}else for(;P<b;)if(N[M++]=O[P++],M==this.blockSize){l(this,N),M=0;break}}this.h=M,this.o+=b},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var b=1;b<O.length-8;++b)O[b]=0;var w=8*this.o;for(b=O.length-8;b<O.length;++b)O[b]=w&255,w/=256;for(this.u(O),O=Array(16),b=w=0;4>b;++b)for(var N=0;32>N;N+=8)O[w++]=this.g[b]>>>N&255;return O};function c(O,b){var w=g;return Object.prototype.hasOwnProperty.call(w,O)?w[O]:w[O]=b(O)}function f(O,b){this.h=b;for(var w=[],N=!0,M=O.length-1;0<=M;M--){var P=O[M]|0;N&&P==b||(w[M]=P,N=!1)}this.g=w}var g={};function p(O){return-128<=O&&128>O?c(O,function(b){return new f([b|0],0>b?-1:0)}):new f([O|0],0>O?-1:0)}function _(O){if(isNaN(O)||!isFinite(O))return C;if(0>O)return Z(_(-O));for(var b=[],w=1,N=0;O>=w;N++)b[N]=O/w|0,w*=4294967296;return new f(b,0)}function E(O,b){if(O.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(O.charAt(0)=="-")return Z(E(O.substring(1),b));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=_(Math.pow(b,8)),N=C,M=0;M<O.length;M+=8){var P=Math.min(8,O.length-M),I=parseInt(O.substring(M,M+P),b);8>P?(P=_(Math.pow(b,P)),N=N.j(P).add(_(I))):(N=N.j(w),N=N.add(_(I)))}return N}var C=p(0),V=p(1),j=p(16777216);r=f.prototype,r.m=function(){if(nt(this))return-Z(this).m();for(var O=0,b=1,w=0;w<this.g.length;w++){var N=this.i(w);O+=(0<=N?N:4294967296+N)*b,b*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(X(this))return"0";if(nt(this))return"-"+Z(this).toString(O);for(var b=_(Math.pow(O,6)),w=this,N="";;){var M=Nt(w,b).g;w=vt(w,M.j(b));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(O);if(w=M,X(w))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function X(O){if(O.h!=0)return!1;for(var b=0;b<O.g.length;b++)if(O.g[b]!=0)return!1;return!0}function nt(O){return O.h==-1}r.l=function(O){return O=vt(this,O),nt(O)?-1:X(O)?0:1};function Z(O){for(var b=O.g.length,w=[],N=0;N<b;N++)w[N]=~O.g[N];return new f(w,~O.h).add(V)}r.abs=function(){return nt(this)?Z(this):this},r.add=function(O){for(var b=Math.max(this.g.length,O.g.length),w=[],N=0,M=0;M<=b;M++){var P=N+(this.i(M)&65535)+(O.i(M)&65535),I=(P>>>16)+(this.i(M)>>>16)+(O.i(M)>>>16);N=I>>>16,P&=65535,I&=65535,w[M]=I<<16|P}return new f(w,w[w.length-1]&-2147483648?-1:0)};function vt(O,b){return O.add(Z(b))}r.j=function(O){if(X(this)||X(O))return C;if(nt(this))return nt(O)?Z(this).j(Z(O)):Z(Z(this).j(O));if(nt(O))return Z(this.j(Z(O)));if(0>this.l(j)&&0>O.l(j))return _(this.m()*O.m());for(var b=this.g.length+O.g.length,w=[],N=0;N<2*b;N++)w[N]=0;for(N=0;N<this.g.length;N++)for(var M=0;M<O.g.length;M++){var P=this.i(N)>>>16,I=this.i(N)&65535,Ae=O.i(M)>>>16,ie=O.i(M)&65535;w[2*N+2*M]+=I*ie,At(w,2*N+2*M),w[2*N+2*M+1]+=P*ie,At(w,2*N+2*M+1),w[2*N+2*M+1]+=I*Ae,At(w,2*N+2*M+1),w[2*N+2*M+2]+=P*Ae,At(w,2*N+2*M+2)}for(N=0;N<b;N++)w[N]=w[2*N+1]<<16|w[2*N];for(N=b;N<2*b;N++)w[N]=0;return new f(w,0)};function At(O,b){for(;(O[b]&65535)!=O[b];)O[b+1]+=O[b]>>>16,O[b]&=65535,b++}function dt(O,b){this.g=O,this.h=b}function Nt(O,b){if(X(b))throw Error("division by zero");if(X(O))return new dt(C,C);if(nt(O))return b=Nt(Z(O),b),new dt(Z(b.g),Z(b.h));if(nt(b))return b=Nt(O,Z(b)),new dt(Z(b.g),b.h);if(30<O.g.length){if(nt(O)||nt(b))throw Error("slowDivide_ only works with positive integers.");for(var w=V,N=b;0>=N.l(O);)w=mt(w),N=mt(N);var M=It(w,1),P=It(N,1);for(N=It(N,2),w=It(w,2);!X(N);){var I=P.add(N);0>=I.l(O)&&(M=M.add(w),P=I),N=It(N,1),w=It(w,1)}return b=vt(O,M.j(b)),new dt(M,b)}for(M=C;0<=O.l(b);){for(w=Math.max(1,Math.floor(O.m()/b.m())),N=Math.ceil(Math.log(w)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=_(w),I=P.j(b);nt(I)||0<I.l(O);)w-=N,P=_(w),I=P.j(b);X(P)&&(P=V),M=M.add(P),O=vt(O,I)}return new dt(M,O)}r.A=function(O){return Nt(this,O).h},r.and=function(O){for(var b=Math.max(this.g.length,O.g.length),w=[],N=0;N<b;N++)w[N]=this.i(N)&O.i(N);return new f(w,this.h&O.h)},r.or=function(O){for(var b=Math.max(this.g.length,O.g.length),w=[],N=0;N<b;N++)w[N]=this.i(N)|O.i(N);return new f(w,this.h|O.h)},r.xor=function(O){for(var b=Math.max(this.g.length,O.g.length),w=[],N=0;N<b;N++)w[N]=this.i(N)^O.i(N);return new f(w,this.h^O.h)};function mt(O){for(var b=O.g.length+1,w=[],N=0;N<b;N++)w[N]=O.i(N)<<1|O.i(N-1)>>>31;return new f(w,O.h)}function It(O,b){var w=b>>5;b%=32;for(var N=O.g.length-w,M=[],P=0;P<N;P++)M[P]=0<b?O.i(P+w)>>>b|O.i(P+w+1)<<32-b:O.i(P+w);return new f(M,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,M0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=E,Ns=f}).apply(typeof H_<"u"?H_:typeof self<"u"?self:typeof window<"u"?window:{});var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var V0,hl,x0,pc,jd,P0,U0,k0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,y){return u==Array.prototype||u==Object.prototype||(u[m]=y.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof hc=="object"&&hc];for(var m=0;m<u.length;++m){var y=u[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=n(this);function l(u,m){if(m)t:{var y=s;u=u.split(".");for(var A=0;A<u.length-1;A++){var U=u[A];if(!(U in y))break t;y=y[U]}u=u[u.length-1],A=y[u],m=m(A),m!=A&&m!=null&&t(y,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var y=0,A=!1,U={next:function(){if(!A&&y<u.length){var q=y++;return{value:m(q,u[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}l("Array.prototype.values",function(u){return u||function(){return c(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function _(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,y){return u.call.apply(u.bind,arguments)}function C(u,m,y){if(!u)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,A),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function V(u,m,y){return V=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:C,V.apply(null,arguments)}function j(u,m){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),u.apply(this,A)}}function X(u,m){function y(){}y.prototype=m.prototype,u.aa=m.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(A,U,q){for(var J=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)J[Pt-2]=arguments[Pt];return m.prototype[U].apply(A,J)}}function nt(u){const m=u.length;if(0<m){const y=Array(m);for(let A=0;A<m;A++)y[A]=u[A];return y}return[]}function Z(u,m){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(p(A)){const U=u.length||0,q=A.length||0;u.length=U+q;for(let J=0;J<q;J++)u[U+J]=A[J]}else u.push(A)}}class vt{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function At(u){return/^[\s\xa0]*$/.test(u)}function dt(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function Nt(u){return Nt[" "](u),u}Nt[" "]=function(){};var mt=dt().indexOf("Gecko")!=-1&&!(dt().toLowerCase().indexOf("webkit")!=-1&&dt().indexOf("Edge")==-1)&&!(dt().indexOf("Trident")!=-1||dt().indexOf("MSIE")!=-1)&&dt().indexOf("Edge")==-1;function It(u,m,y){for(const A in u)m.call(y,u[A],A,u)}function O(u,m){for(const y in u)m.call(void 0,u[y],y,u)}function b(u){const m={};for(const y in u)m[y]=u[y];return m}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let y,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(y in A)u[y]=A[y];for(let q=0;q<w.length;q++)y=w[q],Object.prototype.hasOwnProperty.call(A,y)&&(u[y]=A[y])}}function M(u){var m=1;u=u.split(":");const y=[];for(;0<m&&u.length;)y.push(u.shift()),m--;return u.length&&y.push(u.join(":")),y}function P(u){g.setTimeout(()=>{throw u},0)}function I(){var u=zt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ae{constructor(){this.h=this.g=null}add(m,y){const A=ie.get();A.set(m,y),this.h?this.h.next=A:this.g=A,this.h=A}}var ie=new vt(()=>new H,u=>u.reset());class H{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,lt=!1,zt=new Ae,R=()=>{const u=g.Promise.resolve(void 0);tt=()=>{u.then(Y)}};var Y=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(y){P(y)}var m=ie;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}lt=!1};function et(){this.s=this.s,this.C=this.C}et.prototype.s=!1,et.prototype.ma=function(){this.s||(this.s=!0,this.N())},et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var ct=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};g.addEventListener("test",y,m),g.removeEventListener("test",y,m)}catch{}return u}();function Rt(u,m){if(W.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,A=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(mt){t:{try{Nt(m.nodeName);var U=!0;break t}catch{}U=!1}U||(m=null)}}else y=="mouseover"?m=u.fromElement:y=="mouseout"&&(m=u.toElement);this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:yt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Rt.aa.h.call(this)}}X(Rt,W);var yt={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var rt="closure_listenable_"+(1e6*Math.random()|0),gt=0;function Ht(u,m,y,A,U){this.listener=u,this.proxy=null,this.src=m,this.type=y,this.capture=!!A,this.ha=U,this.key=++gt,this.da=this.fa=!1}function te(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function be(u){this.src=u,this.g={},this.h=0}be.prototype.add=function(u,m,y,A,U){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var J=zn(u,m,A,U);return-1<J?(m=u[J],y||(m.fa=!1)):(m=new Ht(m,this.src,q,!!A,U),m.fa=y,u.push(m)),m};function nn(u,m){var y=m.type;if(y in u.g){var A=u.g[y],U=Array.prototype.indexOf.call(A,m,void 0),q;(q=0<=U)&&Array.prototype.splice.call(A,U,1),q&&(te(m),u.g[y].length==0&&(delete u.g[y],u.h--))}}function zn(u,m,y,A){for(var U=0;U<u.length;++U){var q=u[U];if(!q.da&&q.listener==m&&q.capture==!!y&&q.ha==A)return U}return-1}var _i="closure_lm_"+(1e6*Math.random()|0),Oe={};function Xn(u,m,y,A,U){if(Array.isArray(m)){for(var q=0;q<m.length;q++)Xn(u,m[q],y,A,U);return null}return y=jl(y),u&&u[rt]?u.K(m,y,_(A)?!!A.capture:!1,U):Qe(u,m,y,!1,A,U)}function Qe(u,m,y,A,U,q){if(!m)throw Error("Invalid event type");var J=_(U)?!!U.capture:!!U,Pt=js(u);if(Pt||(u[_i]=Pt=new be(u)),y=Pt.add(m,y,A,J,q),y.proxy)return y;if(A=dh(),y.proxy=A,A.src=u,A.listener=y,u.addEventListener)ct||(U=J),U===void 0&&(U=!1),u.addEventListener(m.toString(),A,U);else if(u.attachEvent)u.attachEvent(Kr(m.toString()),A);else if(u.addListener&&u.removeListener)u.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function dh(){function u(y){return m.call(u.src,u.listener,y)}const m=mh;return u}function to(u,m,y,A,U){if(Array.isArray(m))for(var q=0;q<m.length;q++)to(u,m[q],y,A,U);else A=_(A)?!!A.capture:!!A,y=jl(y),u&&u[rt]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],y=zn(q,y,A,U),-1<y&&(te(q[y]),Array.prototype.splice.call(q,y,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=js(u))&&(m=u.g[m.toString()],u=-1,m&&(u=zn(m,y,A,U)),(y=-1<u?m[u]:null)&&qs(y))}function qs(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[rt])nn(m.i,u);else{var y=u.type,A=u.proxy;m.removeEventListener?m.removeEventListener(y,A,u.capture):m.detachEvent?m.detachEvent(Kr(y),A):m.addListener&&m.removeListener&&m.removeListener(A),(y=js(m))?(nn(y,u),y.h==0&&(y.src=null,m[_i]=null)):te(u)}}}function Kr(u){return u in Oe?Oe[u]:Oe[u]="on"+u}function mh(u,m){if(u.da)u=!0;else{m=new Rt(m,this);var y=u.listener,A=u.ha||u.src;u.fa&&qs(u),u=y.call(A,m)}return u}function js(u){return u=u[_i],u instanceof be?u:null}var eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function jl(u){return typeof u=="function"?u:(u[eo]||(u[eo]=function(m){return u.handleEvent(m)}),u[eo])}function le(){et.call(this),this.i=new be(this),this.M=this,this.F=null}X(le,et),le.prototype[rt]=!0,le.prototype.removeEventListener=function(u,m,y,A){to(this,u,m,y,A)};function Gt(u,m){var y,A=u.F;if(A)for(y=[];A;A=A.F)y.push(A);if(u=u.M,A=m.type||m,typeof m=="string")m=new W(m,u);else if(m instanceof W)m.target=m.target||u;else{var U=m;m=new W(A,u),N(m,U)}if(U=!0,y)for(var q=y.length-1;0<=q;q--){var J=m.g=y[q];U=dn(J,A,!0,m)&&U}if(J=m.g=u,U=dn(J,A,!0,m)&&U,U=dn(J,A,!1,m)&&U,y)for(q=0;q<y.length;q++)J=m.g=y[q],U=dn(J,A,!1,m)&&U}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var y=u.g[m],A=0;A<y.length;A++)te(y[A]);delete u.g[m],u.h--}}this.F=null},le.prototype.K=function(u,m,y,A){return this.i.add(String(u),m,!1,y,A)},le.prototype.L=function(u,m,y,A){return this.i.add(String(u),m,!0,y,A)};function dn(u,m,y,A){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,q=0;q<m.length;++q){var J=m[q];if(J&&!J.da&&J.capture==y){var Pt=J.listener,we=J.ha||J.src;J.fa&&nn(u.i,J),U=Pt.call(we,A)!==!1&&U}}return U&&!A.defaultPrevented}function Ye(u,m,y){if(typeof u=="function")y&&(u=V(u,y));else if(u&&typeof u.handleEvent=="function")u=V(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(u,m||0)}function Hl(u){u.g=Ye(()=>{u.g=null,u.i&&(u.i=!1,Hl(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class gh extends et{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Hl(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(u){et.call(this),this.h=u,this.g={}}X(Qr,et);var Yr=[];function Xr(u){It(u.g,function(m,y){this.g.hasOwnProperty(y)&&qs(m)},u),u.g={}}Qr.prototype.N=function(){Qr.aa.N.call(this),Xr(this)},Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bn=g.JSON.stringify,Hs=g.JSON.parse,$r=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function no(){}no.prototype.h=null;function io(u){return u.h||(u.h=u.i())}function ro(){}var vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ti(){W.call(this,"d")}X(Ti,W);function so(){W.call(this,"c")}X(so,W);var $n={},ao=null;function Ji(){return ao=ao||new le}$n.La="serverreachability";function Fs(u){W.call(this,$n.La,u)}X(Fs,W);function tr(u){const m=Ji();Gt(m,new Fs(m))}$n.STAT_EVENT="statevent";function Fl(u,m){W.call(this,$n.STAT_EVENT,u),this.stat=m}X(Fl,W);function re(u){const m=Ji();Gt(m,new Fl(m,u))}$n.Ma="timingevent";function Se(u,m){W.call(this,$n.Ma,u),this.size=m}X(Se,W);function pe(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},m)}function Sn(){this.g=!0}Sn.prototype.xa=function(){this.g=!1};function oo(u,m,y,A,U,q){u.info(function(){if(u.g)if(q)for(var J="",Pt=q.split("&"),we=0;we<Pt.length;we++){var Ut=Pt[we].split("=");if(1<Ut.length){var Ve=Ut[0];Ut=Ut[1];var Re=Ve.split("_");J=2<=Re.length&&Re[1]=="type"?J+(Ve+"="+Ut+"&"):J+(Ve+"=redacted&")}}else J=null;else J=q;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+m+`
`+y+`
`+J})}function ph(u,m,y,A,U,q,J){u.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+m+`
`+y+`
`+q+" "+J})}function er(u,m,y,A){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Zr(u,y)+(A?" "+A:"")})}function Gl(u,m){u.info(function(){return"TIMEOUT: "+m})}Sn.prototype.info=function(){};function Zr(u,m){if(!u.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var A=y[u];if(!(2>A.length)){var U=A[1];if(Array.isArray(U)&&!(1>U.length)){var q=U[0];if(q!="noop"&&q!="stop"&&q!="close")for(var J=1;J<U.length;J++)U[J]=""}}}}return Bn(y)}catch{return m}}var nr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ei={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zn;function Wn(){}X(Wn,no),Wn.prototype.g=function(){return new XMLHttpRequest},Wn.prototype.i=function(){return{}},Zn=new Wn;function rn(u,m,y,A){this.j=u,this.i=m,this.l=y,this.R=A||1,this.U=new Qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new he}function he(){this.i=null,this.g="",this.h=!1}var lo={},Gs={};function qn(u,m,y){u.L=1,u.v=ns(mn(m)),u.m=y,u.P=!0,Ai(u,null)}function Ai(u,m){u.F=Date.now(),Wr(u),u.A=mn(u.v);var y=u.A,A=u.R;Array.isArray(A)||(A=[String(A)]),go(y.i,"t",A),u.C=0,y=u.j.J,u.h=new he,u.g=ou(u.j,y?m:null,!u.m),0<u.O&&(u.M=new gh(V(u.Y,u,u.g),u.O)),m=u.U,y=u.g,A=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Yr[0]=U.toString()),U=Yr);for(var q=0;q<U.length;q++){var J=Xn(y,U[q],A||m.handleEvent,!1,m.h||m);if(!J)break;m.g[J.key]=J}m=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),tr(),oo(u.i,u.u,u.A,u.l,u.R,u.m)}rn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Cn(u)==3?m.j():this.Y(u)},rn.prototype.Y=function(u){try{if(u==this.g)t:{const Re=Cn(this.g);var m=this.g.Ba();const Ni=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||Jl(this.g)))){this.J||Re!=4||m==7||(m==8||0>=Ni?tr(3):tr(2)),ir(this);var y=this.g.Z();this.X=y;e:if(Kl(this)){var A=Jl(this.g);u="";var U=A.length,q=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Le(this),Jn(this);var J="";break e}this.h.i=new g.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(A[m],{stream:!(q&&m==U-1)});A.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,ph(this.i,this.u,this.A,this.l,this.R,Re,y),this.o){if(this.T&&!this.K){e:{if(this.g){var Pt,we=this.g;if((Pt=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!At(Pt)){var Ut=Pt;break e}}Ut=null}if(y=Ut)er(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jr(this,y);else{this.o=!1,this.s=3,re(12),Le(this),Jn(this);break t}}if(this.P){y=!0;let ze;for(;!this.J&&this.C<J.length;)if(ze=Ql(this,J),ze==Gs){Re==4&&(this.s=4,re(14),y=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==lo){this.s=4,re(15),er(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else er(this.i,this.l,ze,null),Jr(this,ze);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||J.length!=0||this.h.h||(this.s=1,re(16),y=!1),this.o=this.o&&y,!y)er(this.i,this.l,J,"[Invalid Chunked Response]"),Le(this),Jn(this);else if(0<J.length&&!this.W){this.W=!0;var Ve=this.j;Ve.g==this&&Ve.ba&&!Ve.M&&(Ve.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),cs(Ve),Ve.M=!0,re(11))}}else er(this.i,this.l,J,null),Jr(this,J);Re==4&&Le(this),this.o&&!this.J&&(Re==4?ru(this.j,this):(this.o=!1,Wr(this)))}else Eh(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,re(12)):(this.s=0,re(13)),Le(this),Jn(this)}}}catch{}finally{}};function Kl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Ql(u,m){var y=u.C,A=m.indexOf(`
`,y);return A==-1?Gs:(y=Number(m.substring(y,A)),isNaN(y)?lo:(A+=1,A+y>m.length?Gs:(m=m.slice(A,A+y),u.C=A+y,m)))}rn.prototype.cancel=function(){this.J=!0,Le(this)};function Wr(u){u.S=Date.now()+u.I,Yl(u,u.I)}function Yl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=pe(V(u.ba,u),m)}function ir(u){u.B&&(g.clearTimeout(u.B),u.B=null)}rn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Gl(this.i,this.A),this.L!=2&&(tr(),re(17)),Le(this),this.s=2,Jn(this)):Yl(this,this.S-u)};function Jn(u){u.j.G==0||u.J||ru(u.j,u)}function Le(u){ir(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Xr(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Jr(u,m){try{var y=u.j;if(y.G!=0&&(y.g==u||uo(y.h,u))){if(!u.K&&uo(y.h,u)&&y.G==3){try{var A=y.Da.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)ia(y),ea(y);else break t;To(y),re(18)}}else y.za=U[1],0<y.za-y.T&&37500>U[2]&&y.F&&y.v==0&&!y.C&&(y.C=pe(V(y.Za,y),6e3));if(1>=Qs(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Di(y,11)}else if((u.K||y.g==u)&&ia(y),!At(m))for(U=y.Da.g.parse(m),m=0;m<U.length;m++){let Ut=U[m];if(y.T=Ut[0],Ut=Ut[1],y.G==2)if(Ut[0]=="c"){y.K=Ut[1],y.ia=Ut[2];const Ve=Ut[3];Ve!=null&&(y.la=Ve,y.j.info("VER="+y.la));const Re=Ut[4];Re!=null&&(y.Aa=Re,y.j.info("SVER="+y.Aa));const Ni=Ut[5];Ni!=null&&typeof Ni=="number"&&0<Ni&&(A=1.5*Ni,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const ze=u.g;if(ze){const ai=ze.g?ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var q=A.h;q.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ys(q,q.h),q.h=null))}if(A.D){const Ao=ze.g?ze.g.getResponseHeader("X-HTTP-Session-Id"):null;Ao&&(A.ya=Ao,Xt(A.I,A.D,Ao))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var J=u;if(A.qa=au(A,A.J?A.ia:null,A.W),J.K){sn(A.h,J);var Pt=J,we=A.L;we&&(Pt.I=we),Pt.B&&(ir(Pt),Wr(Pt)),A.g=J}else nu(A);0<y.i.length&&na(y)}else Ut[0]!="stop"&&Ut[0]!="close"||Di(y,7);else y.G==3&&(Ut[0]=="stop"||Ut[0]=="close"?Ut[0]=="stop"?Di(y,7):_o(y):Ut[0]!="noop"&&y.l&&y.l.ta(Ut),y.v=0)}}tr(4)}catch{}}var Xl=class{constructor(u,m){this.g=u,this.map=m}};function bi(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ks(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Qs(u){return u.h?1:u.g?u.g.size:0}function uo(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ys(u,m){u.g?u.g.add(m):u.h=m}function sn(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}bi.prototype.cancel=function(){if(this.i=co(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function co(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const y of u.g.values())m=m.concat(y.D);return m}return nt(u.i)}function yh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],y=u.length,A=0;A<y;A++)m.push(u[A]);return m}m=[],y=0;for(A in u)m[y++]=u[A];return m}function Xs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var y=0;y<u;y++)m.push(y);return m}m=[],y=0;for(const A in u)m[y++]=A;return m}}}function ho(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var y=Xs(u),A=yh(u),U=A.length,q=0;q<U;q++)m.call(void 0,A[q],y&&y[q],u)}var ts=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _h(u,m){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var A=u[y].indexOf("="),U=null;if(0<=A){var q=u[y].substring(0,A);U=u[y].substring(A+1)}else q=u[y];m(q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function ye(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ye){this.h=u.h,es(this,u.j),this.o=u.o,this.g=u.g,rr(this,u.s),this.l=u.l;var m=u.i,y=new wi;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),Si(this,y),this.m=u.m}else u&&(m=String(u).match(ts))?(this.h=!1,es(this,m[1]||"",!0),this.o=wn(m[2]||""),this.g=wn(m[3]||"",!0),rr(this,m[4]),this.l=wn(m[5]||"",!0),Si(this,m[6]||"",!0),this.m=wn(m[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}ye.prototype.toString=function(){var u=[],m=this.j;m&&u.push(is(m,fo,!0),":");var y=this.g;return(y||m=="file")&&(u.push("//"),(m=this.o)&&u.push(is(m,fo,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(is(y,y.charAt(0)=="/"?vh:mo,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",is(y,$s)),u.join("")};function mn(u){return new ye(u)}function es(u,m,y){u.j=y?wn(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function rr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Si(u,m,y){m instanceof wi?(u.i=m,Zl(u.i,u.h)):(y||(m=is(m,Th)),u.i=new wi(m,u.h))}function Xt(u,m,y){u.i.set(m,y)}function ns(u){return Xt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function wn(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function is(u,m,y){return typeof u=="string"?(u=encodeURI(u).replace(m,$l),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function $l(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var fo=/[#\/\?@]/g,mo=/[#\?:]/g,vh=/[#\?]/g,Th=/[#\?@]/g,$s=/#/g;function wi(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rn(u){u.g||(u.g=new Map,u.h=0,u.i&&_h(u.i,function(m,y){u.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}r=wi.prototype,r.add=function(u,m){Rn(this),this.i=null,u=ti(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(m),this.h+=1,this};function Ri(u,m){Rn(u),m=ti(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ii(u,m){return Rn(u),m=ti(u,m),u.g.has(m)}r.forEach=function(u,m){Rn(this),this.g.forEach(function(y,A){y.forEach(function(U){u.call(m,U,A,this)},this)},this)},r.na=function(){Rn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let A=0;A<m.length;A++){const U=u[A];for(let q=0;q<U.length;q++)y.push(m[A])}return y},r.V=function(u){Rn(this);let m=[];if(typeof u=="string")Ii(this,u)&&(m=m.concat(this.g.get(ti(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)m=m.concat(u[y])}return m},r.set=function(u,m){return Rn(this),this.i=null,u=ti(this,u),Ii(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function go(u,m,y){Ri(u,m),0<y.length&&(u.i=null,u.g.set(ti(u,m),nt(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var A=m[y];const q=encodeURIComponent(String(A)),J=this.V(A);for(A=0;A<J.length;A++){var U=q;J[A]!==""&&(U+="="+encodeURIComponent(String(J[A]))),u.push(U)}}return this.i=u.join("&")};function ti(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Zl(u,m){m&&!u.j&&(Rn(u),u.i=null,u.g.forEach(function(y,A){var U=A.toLowerCase();A!=U&&(Ri(this,A),go(this,U,y))},u)),u.j=m}function rs(u,m){const y=new Sn;if(g.Image){const A=new Image;A.onload=j(In,y,"TestLoadImage: loaded",!0,m,A),A.onerror=j(In,y,"TestLoadImage: error",!1,m,A),A.onabort=j(In,y,"TestLoadImage: abort",!1,m,A),A.ontimeout=j(In,y,"TestLoadImage: timeout",!1,m,A),g.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=u}else m(!1)}function jn(u,m){const y=new Sn,A=new AbortController,U=setTimeout(()=>{A.abort(),In(y,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:A.signal}).then(q=>{clearTimeout(U),q.ok?In(y,"TestPingServer: ok",!0,m):In(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),In(y,"TestPingServer: error",!1,m)})}function In(u,m,y,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(y)}catch{}}function ss(){this.g=new $r}function ei(u,m,y){const A=y||"";try{ho(u,function(U,q){let J=U;_(U)&&(J=Bn(U)),m.push(A+q+"="+encodeURIComponent(J))})}catch(U){throw m.push(A+"type="+encodeURIComponent("_badmap")),U}}function sr(u){this.l=u.Ub||null,this.j=u.eb||!1}X(sr,no),sr.prototype.g=function(){return new Ci(this.l,this.j)},sr.prototype.i=function(u){return function(){return u}}({});function Ci(u,m){le.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Ci,le),r=Ci.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,ii(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;po(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function po(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ni(this):ii(this),this.readyState==3&&po(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,ni(this))},r.Qa=function(u){this.g&&(this.response=u,ni(this))},r.ga=function(){this.g&&ni(this)};function ni(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ii(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=m.next();return u.join(`\r
`)};function ii(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function yo(u){let m="";return It(u,function(y,A){m+=A,m+=":",m+=y,m+=`\r
`}),m}function Me(u,m,y){t:{for(A in y){var A=!1;break t}A=!0}A||(y=yo(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Xt(u,m,y))}function Ft(u){le.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(Ft,le);var Zs=/^https?$/i,as=["POST","PUT"];r=Ft.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zn.g(),this.v=this.o?io(this.o):io(Zn),this.g.onreadystatechange=V(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){Wl(this,q);return}if(u=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)y.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())y.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find(q=>q.toLowerCase()=="content-type"),U=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(as,m,void 0))||A||U||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,J]of y)this.g.setRequestHeader(q,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{os(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){Wl(this,q)}};function Wl(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ws(u),ri(u)}function Ws(u){u.A||(u.A=!0,Gt(u,"complete"),Gt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Gt(this,"complete"),Gt(this,"abort"),ri(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),Ft.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Js(this):this.bb())},r.bb=function(){Js(this)};function Js(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Cn(u)!=4||u.Z()!=2)){if(u.u&&Cn(u)==4)Ye(u.Ea,0,u);else if(Gt(u,"readystatechange"),Cn(u)==4){u.h=!1;try{const J=u.Z();t:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var y;if(!(y=m)){var A;if(A=J===0){var U=String(u.D).match(ts)[1]||null;!U&&g.self&&g.self.location&&(U=g.self.location.protocol.slice(0,-1)),A=!Zs.test(U?U.toLowerCase():"")}y=A}if(y)Gt(u,"complete"),Gt(u,"success");else{u.m=6;try{var q=2<Cn(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",Ws(u)}}finally{ri(u)}}}}function ri(u,m){if(u.g){os(u);const y=u.g,A=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Gt(u,"ready");try{y.onreadystatechange=A}catch{}}}function os(u){u.I&&(g.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Cn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Hs(m)}};function Jl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Eh(u){const m={};u=(u.g&&2<=Cn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<u.length;A++){if(At(u[A]))continue;var y=M(u[A]);const U=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const q=m[U]||[];m[U]=q,q.push(y)}O(m,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ls(u,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||m}function ta(u){this.Aa=0,this.i=[],this.j=new Sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ls("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ls("baseRetryDelayMs",5e3,u),this.cb=ls("retryDelaySeedMs",1e4,u),this.Wa=ls("forwardChannelMaxRetries",2,u),this.wa=ls("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(u&&u.concurrentRequestLimit),this.Da=new ss,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ta.prototype,r.la=8,r.G=1,r.connect=function(u,m,y,A){re(0),this.W=u,this.H=m||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=au(this,null,this.W),na(this)};function _o(u){if(tu(u),u.G==3){var m=u.U++,y=mn(u.I);if(Xt(y,"SID",u.K),Xt(y,"RID",m),Xt(y,"TYPE","terminate"),us(u,y),m=new rn(u,u.j,m),m.L=2,m.v=ns(mn(y)),y=!1,g.navigator&&g.navigator.sendBeacon)try{y=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&g.Image&&(new Image().src=m.v,y=!0),y||(m.g=ou(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Wr(m)}su(u)}function ea(u){u.g&&(cs(u),u.g.cancel(),u.g=null)}function tu(u){ea(u),u.u&&(g.clearTimeout(u.u),u.u=null),ia(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function na(u){if(!Ks(u.h)&&!u.s){u.s=!0;var m=u.Ga;tt||R(),lt||(tt(),lt=!0),zt.add(m,u),u.B=0}}function Ah(u,m){return Qs(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=pe(V(u.Ga,u,m),Eo(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new rn(this,this.j,u);let q=this.o;if(this.S&&(q?(q=b(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(U.H=q,q=null),this.P)t:{for(var m=0,y=0;y<this.i.length;y++){e:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,4096<m){m=y;break t}if(m===4096||y===this.i.length-1){m=y+1;break t}}m=1e3}else m=1e3;m=eu(this,U,m),y=mn(this.I),Xt(y,"RID",u),Xt(y,"CVER",22),this.D&&Xt(y,"X-HTTP-Session-Id",this.D),us(this,y),q&&(this.O?m="headers="+encodeURIComponent(String(yo(q)))+"&"+m:this.m&&Me(y,this.m,q)),Ys(this.h,U),this.Ua&&Xt(y,"TYPE","init"),this.P?(Xt(y,"$req",m),Xt(y,"SID","null"),U.T=!0,qn(U,y,null)):qn(U,y,m),this.G=2}}else this.G==3&&(u?vo(this,u):this.i.length==0||Ks(this.h)||vo(this))};function vo(u,m){var y;m?y=m.l:y=u.U++;const A=mn(u.I);Xt(A,"SID",u.K),Xt(A,"RID",y),Xt(A,"AID",u.T),us(u,A),u.m&&u.o&&Me(A,u.m,u.o),y=new rn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),m&&(u.i=m.D.concat(u.i)),m=eu(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ys(u.h,y),qn(y,A,m)}function us(u,m){u.H&&It(u.H,function(y,A){Xt(m,A,y)}),u.l&&ho({},function(y,A){Xt(m,A,y)})}function eu(u,m,y){y=Math.min(u.i.length,y);var A=u.l?V(u.l.Na,u.l,u):null;t:{var U=u.i;let q=-1;for(;;){const J=["count="+y];q==-1?0<y?(q=U[0].g,J.push("ofs="+q)):q=0:J.push("ofs="+q);let Pt=!0;for(let we=0;we<y;we++){let Ut=U[we].g;const Ve=U[we].map;if(Ut-=q,0>Ut)q=Math.max(0,U[we].g-100),Pt=!1;else try{ei(Ve,J,"req"+Ut+"_")}catch{A&&A(Ve)}}if(Pt){A=J.join("&");break t}}}return u=u.i.splice(0,y),m.D=u,A}function nu(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;tt||R(),lt||(tt(),lt=!0),zt.add(m,u),u.v=0}}function To(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=pe(V(u.Fa,u),Eo(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=pe(V(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,re(10),ea(this),iu(this))};function cs(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function iu(u){u.g=new rn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=mn(u.qa);Xt(m,"RID","rpc"),Xt(m,"SID",u.K),Xt(m,"AID",u.T),Xt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Xt(m,"TO",u.ja),Xt(m,"TYPE","xmlhttp"),us(u,m),u.m&&u.o&&Me(m,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=ns(mn(m)),y.m=null,y.P=!0,Ai(y,u)}r.Za=function(){this.C!=null&&(this.C=null,ea(this),To(this),re(19))};function ia(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function ru(u,m){var y=null;if(u.g==m){ia(u),cs(u),u.g=null;var A=2}else if(uo(u.h,m))y=m.D,sn(u.h,m),A=1;else return;if(u.G!=0){if(m.o)if(A==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;A=Ji(),Gt(A,new Se(A,y)),na(u)}else nu(u);else if(U=m.s,U==3||U==0&&0<m.X||!(A==1&&Ah(u,m)||A==2&&To(u)))switch(y&&0<y.length&&(m=u.h,m.i=m.i.concat(y)),U){case 1:Di(u,5);break;case 4:Di(u,10);break;case 3:Di(u,6);break;default:Di(u,2)}}}function Eo(u,m){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*m}function Di(u,m){if(u.j.info("Error code "+m),m==2){var y=V(u.fb,u),A=u.Xa;const U=!A;A=new ye(A||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||es(A,"https"),ns(A),U?rs(A.toString(),y):jn(A.toString(),y)}else re(2);u.G=0,u.l&&u.l.sa(m),su(u),tu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function su(u){if(u.G=0,u.ka=[],u.l){const m=co(u.h);(m.length!=0||u.i.length!=0)&&(Z(u.ka,m),Z(u.ka,u.i),u.h.i.length=0,nt(u.i),u.i.length=0),u.l.ra()}}function au(u,m,y){var A=y instanceof ye?mn(y):new ye(y);if(A.g!="")m&&(A.g=m+"."+A.g),rr(A,A.s);else{var U=g.location;A=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var q=new ye(null);A&&es(q,A),m&&(q.g=m),U&&rr(q,U),y&&(q.l=y),A=q}return y=u.D,m=u.ya,y&&m&&Xt(A,y,m),Xt(A,"VER",u.la),us(u,A),A}function ou(u,m,y){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ft(new sr({eb:y})):new Ft(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function lu(){}r=lu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ra(){}ra.prototype.g=function(u,m){return new an(u,m)};function an(u,m){le.call(this),this.g=new ta(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!At(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!At(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new si(this)}X(an,le),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){_o(this.g)},an.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Bn(u),u=y);m.i.push(new Xl(m.Ya++,u)),m.G==3&&na(m)},an.prototype.N=function(){this.g.l=null,delete this.j,_o(this.g),delete this.g,an.aa.N.call(this)};function uu(u){Ti.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const y in m){u=y;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}X(uu,Ti);function cu(){so.call(this),this.status=1}X(cu,so);function si(u){this.g=u}X(si,lu),si.prototype.ua=function(){Gt(this.g,"a")},si.prototype.ta=function(u){Gt(this.g,new uu(u))},si.prototype.sa=function(u){Gt(this.g,new cu)},si.prototype.ra=function(){Gt(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,k0=function(){return new ra},U0=function(){return Ji()},P0=$n,jd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},nr.NO_ERROR=0,nr.TIMEOUT=8,nr.HTTP_ERROR=6,pc=nr,Ei.COMPLETE="complete",x0=Ei,ro.EventType=vi,vi.OPEN="a",vi.CLOSE="b",vi.ERROR="c",vi.MESSAGE="d",le.prototype.listen=le.prototype.K,hl=ro,Ft.prototype.listenOnce=Ft.prototype.L,Ft.prototype.getLastError=Ft.prototype.Ka,Ft.prototype.getLastErrorCode=Ft.prototype.Ba,Ft.prototype.getStatus=Ft.prototype.Z,Ft.prototype.getResponseJson=Ft.prototype.Oa,Ft.prototype.getResponseText=Ft.prototype.oa,Ft.prototype.send=Ft.prototype.ea,Ft.prototype.setWithCredentials=Ft.prototype.Ha,V0=Ft}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});const F_="@firebase/firestore";/**
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
 */class We{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
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
 */let Xa="10.14.0";/**
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
 */const Vs=new Fc("@firebase/firestore");function cl(){return Vs.logLevel}function ot(r,...t){if(Vs.logLevel<=xt.DEBUG){const n=t.map(pm);Vs.debug(`Firestore (${Xa}): ${r}`,...n)}}function Xi(r,...t){if(Vs.logLevel<=xt.ERROR){const n=t.map(pm);Vs.error(`Firestore (${Xa}): ${r}`,...n)}}function qa(r,...t){if(Vs.logLevel<=xt.WARN){const n=t.map(pm);Vs.warn(`Firestore (${Xa}): ${r}`,...n)}}function pm(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function Et(r="Unexpected state"){const t=`FIRESTORE (${Xa}) INTERNAL ASSERTION FAILED: `+r;throw Xi(t),new Error(t)}function Yt(r,t){r||Et()}function St(r,t){return r}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class st extends Yn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class L0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class yR{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _R{constructor(t){this.t=t,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Yt(this.o===void 0);let s=this.i;const l=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let c=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new kr,t.enqueueRetryable(()=>l(this.currentUser))};const f=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await l(this.currentUser)})},g=p=>{ot("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>g(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(ot("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new kr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(ot("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Yt(typeof s.accessToken=="string"),new L0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Yt(t===null||typeof t=="string"),new We(t)}}class vR{constructor(t,n,s){this.l=t,this.h=n,this.P=s,this.type="FirstParty",this.user=We.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TR{constructor(t,n,s){this.l=t,this.h=n,this.P=s}getToken(){return Promise.resolve(new vR(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ER{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AR{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Yt(this.o===void 0);const s=c=>{c.error!=null&&ot("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.R;return this.R=c.token,ot("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const l=c=>{ot("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?l(c):ot("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Yt(typeof n.token=="string"),this.R=n.token,new ER(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bR(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class z0{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const l=bR(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<n&&(s+=t.charAt(l[c]%t.length))}return s}}function qt(r,t){return r<t?-1:r>t?1:0}function ja(r,t,n){return r.length===t.length&&r.every((s,l)=>n(s,t[l]))}/**
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
 */class De{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new st(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new st(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new st(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new st(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return De.fromMillis(Date.now())}static fromDate(t){return De.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new De(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?qt(this.nanoseconds,t.nanoseconds):qt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class bt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new bt(t)}static min(){return new bt(new De(0,0))}static max(){return new bt(new De(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bl{constructor(t,n,s){n===void 0?n=0:n>t.length&&Et(),s===void 0?s=t.length-n:s>t.length-n&&Et(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return bl.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof bl?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let l=0;l<s;l++){const c=t.get(l),f=n.get(l);if(c<f)return-1;if(c>f)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class ne extends bl{construct(t,n,s){return new ne(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new st(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(l=>l.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const SR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends bl{construct(t,n,s){return new Fe(t,n,s)}static isValidIdentifier(t){return SR.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(t){const n=[];let s="",l=0;const c=()=>{if(s.length===0)throw new st(Q.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;l<t.length;){const g=t[l];if(g==="\\"){if(l+1===t.length)throw new st(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[l+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new st(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,l+=2}else g==="`"?(f=!f,l++):g!=="."||f?(s+=g,l++):(c(),l++)}if(c(),f)throw new st(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
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
 */class ht{constructor(t){this.path=t}static fromPath(t){return new ht(ne.fromString(t))}static fromName(t){return new ht(ne.fromString(t).popFirst(5))}static empty(){return new ht(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ne.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ne.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ht(new ne(t.slice()))}}function wR(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=bt.fromTimestamp(s===1e9?new De(n+1,0):new De(n,s));return new Br(l,ht.empty(),t)}function RR(r){return new Br(r.readTime,r.key,-1)}class Br{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Br(bt.min(),ht.empty(),-1)}static max(){return new Br(bt.max(),ht.empty(),-1)}}function IR(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ht.comparator(r.documentKey,t.documentKey),n!==0?n:qt(r.largestBatchId,t.largestBatchId))}/**
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
 */const CR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ol(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==CR)throw r;ot("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Et(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new $((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,l)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):$.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):$.reject(n)}static resolve(t){return new $((n,s)=>{n(t)})}static reject(t){return new $((n,s)=>{s(t)})}static waitFor(t){return new $((n,s)=>{let l=0,c=0,f=!1;t.forEach(g=>{++l,g.next(()=>{++c,f&&c===l&&n()},p=>s(p))}),f=!0,c===l&&n()})}static or(t){let n=$.resolve(!1);for(const s of t)n=n.next(l=>l?$.resolve(l):s());return n}static forEach(t,n){const s=[];return t.forEach((l,c)=>{s.push(n.call(this,l,c))}),this.waitFor(s)}static mapArray(t,n){return new $((s,l)=>{const c=t.length,f=new Array(c);let g=0;for(let p=0;p<c;p++){const _=p;n(t[_]).next(E=>{f[_]=E,++g,g===c&&s(f)},E=>l(E))}})}static doWhile(t,n){return new $((s,l)=>{const c=()=>{t()===!0?n().next(()=>{c()},l):s()};c()})}}function NR(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ml(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class ym{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ym.oe=-1;function Qc(r){return r==null}function Dc(r){return r===0&&1/r==-1/0}function OR(r){return typeof r=="number"&&Number.isInteger(r)&&!Dc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function G_(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function zs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function B0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class oe{constructor(t,n){this.comparator=t,this.root=n||He.EMPTY}insert(t,n){return new oe(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(t){return new oe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,He.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return n+s.left.size;l<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fc(this.root,t,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fc(this.root,t,this.comparator,!0)}}class fc{constructor(t,n,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?s(t.key,n):1,n&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class He{constructor(t,n,s,l,c){this.key=t,this.value=n,this.color=s??He.RED,this.left=l??He.EMPTY,this.right=c??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,l,c){return new He(t??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let l=this;const c=s(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,n,s),null):c===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(t,n,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,l=this;if(n(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(t,l.key)===0){if(l.right.isEmpty())return He.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Et();const t=this.left.check();if(t!==this.right.check())throw Et();return t+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Et()}get value(){throw Et()}get color(){throw Et()}get left(){throw Et()}get right(){throw Et()}copy(t,n,s,l,c){return this}insert(t,n,s){return new He(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(t){this.comparator=t,this.data=new oe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;n(l.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new K_(this.data.getIterator())}getIteratorFrom(t){return new K_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Ge)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ge(this.comparator);return n.data=t,n}}class K_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class An{constructor(t){this.fields=t,t.sort(Fe.comparator)}static empty(){return new An([])}unionWith(t){let n=new Ge(Fe.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new An(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ja(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class q0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new q0("Invalid base64 string: "+c):c}}(t);return new Ke(n)}static fromUint8Array(t){const n=function(l){let c="";for(let f=0;f<l.length;++f)c+=String.fromCharCode(l[f]);return c}(t);return new Ke(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return qt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const MR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(r){if(Yt(!!r),typeof r=="string"){let t=0;const n=MR.exec(r);if(Yt(!!n),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:ge(r.seconds),nanos:ge(r.nanos)}}function ge(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function xs(r){return typeof r=="string"?Ke.fromBase64String(r):Ke.fromUint8Array(r)}/**
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
 */function _m(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vm(r){const t=r.mapValue.fields.__previous_value__;return _m(t)?vm(t):t}function Sl(r){const t=qr(r.mapValue.fields.__local_write_time__.timestampValue);return new De(t.seconds,t.nanos)}/**
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
 */class VR{constructor(t,n,s,l,c,f,g,p,_){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=_}}class wl{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new wl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof wl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const dc={mapValue:{}};function Ps(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?_m(r)?4:PR(r)?9007199254740991:xR(r)?10:11:Et()}function yi(r,t){if(r===t)return!0;const n=Ps(r);if(n!==Ps(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Sl(r).isEqual(Sl(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const f=qr(l.timestampValue),g=qr(c.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,c){return xs(l.bytesValue).isEqual(xs(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,c){return ge(l.geoPointValue.latitude)===ge(c.geoPointValue.latitude)&&ge(l.geoPointValue.longitude)===ge(c.geoPointValue.longitude)}(r,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return ge(l.integerValue)===ge(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const f=ge(l.doubleValue),g=ge(c.doubleValue);return f===g?Dc(f)===Dc(g):isNaN(f)&&isNaN(g)}return!1}(r,t);case 9:return ja(r.arrayValue.values||[],t.arrayValue.values||[],yi);case 10:case 11:return function(l,c){const f=l.mapValue.fields||{},g=c.mapValue.fields||{};if(G_(f)!==G_(g))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(g[p]===void 0||!yi(f[p],g[p])))return!1;return!0}(r,t);default:return Et()}}function Rl(r,t){return(r.values||[]).find(n=>yi(n,t))!==void 0}function Ha(r,t){if(r===t)return 0;const n=Ps(r),s=Ps(t);if(n!==s)return qt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return qt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const g=ge(c.integerValue||c.doubleValue),p=ge(f.integerValue||f.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1}(r,t);case 3:return Q_(r.timestampValue,t.timestampValue);case 4:return Q_(Sl(r),Sl(t));case 5:return qt(r.stringValue,t.stringValue);case 6:return function(c,f){const g=xs(c),p=xs(f);return g.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const g=c.split("/"),p=f.split("/");for(let _=0;_<g.length&&_<p.length;_++){const E=qt(g[_],p[_]);if(E!==0)return E}return qt(g.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const g=qt(ge(c.latitude),ge(f.latitude));return g!==0?g:qt(ge(c.longitude),ge(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Y_(r.arrayValue,t.arrayValue);case 10:return function(c,f){var g,p,_,E;const C=c.fields||{},V=f.fields||{},j=(g=C.value)===null||g===void 0?void 0:g.arrayValue,X=(p=V.value)===null||p===void 0?void 0:p.arrayValue,nt=qt(((_=j?.values)===null||_===void 0?void 0:_.length)||0,((E=X?.values)===null||E===void 0?void 0:E.length)||0);return nt!==0?nt:Y_(j,X)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===dc.mapValue&&f===dc.mapValue)return 0;if(c===dc.mapValue)return 1;if(f===dc.mapValue)return-1;const g=c.fields||{},p=Object.keys(g),_=f.fields||{},E=Object.keys(_);p.sort(),E.sort();for(let C=0;C<p.length&&C<E.length;++C){const V=qt(p[C],E[C]);if(V!==0)return V;const j=Ha(g[p[C]],_[E[C]]);if(j!==0)return j}return qt(p.length,E.length)}(r.mapValue,t.mapValue);default:throw Et()}}function Q_(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return qt(r,t);const n=qr(r),s=qr(t),l=qt(n.seconds,s.seconds);return l!==0?l:qt(n.nanos,s.nanos)}function Y_(r,t){const n=r.values||[],s=t.values||[];for(let l=0;l<n.length&&l<s.length;++l){const c=Ha(n[l],s[l]);if(c)return c}return qt(n.length,s.length)}function Fa(r){return Hd(r)}function Hd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=qr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return xs(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ht.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",l=!0;for(const c of n.values||[])l?l=!1:s+=",",s+=Hd(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let l="{",c=!0;for(const f of s)c?c=!1:l+=",",l+=`${f}:${Hd(n.fields[f])}`;return l+"}"}(r.mapValue):Et()}function X_(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Fd(r){return!!r&&"integerValue"in r}function Tm(r){return!!r&&"arrayValue"in r}function $_(r){return!!r&&"nullValue"in r}function Z_(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function yc(r){return!!r&&"mapValue"in r}function xR(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function pl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return zs(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=pl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=pl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function PR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class hn{constructor(t){this.value=t}static empty(){return new hn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!yc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=pl(n)}setAll(t){let n=Fe.emptyPath(),s={},l=[];t.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,s,l),s={},l=[],n=g.popLast()}f?s[g.lastSegment()]=pl(f):l.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,l)}delete(t){const n=this.field(t.popLast());yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=n.mapValue.fields[t.get(s)];yc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=l),n=l}return n.mapValue.fields}applyChanges(t,n,s){zs(n,(l,c)=>t[l]=c);for(const l of s)delete t[l]}clone(){return new hn(pl(this.value))}}function j0(r){const t=[];return zs(r.fields,(n,s)=>{const l=new Fe([n]);if(yc(s)){const c=j0(s.mapValue).fields;if(c.length===0)t.push(l);else for(const f of c)t.push(l.child(f))}else t.push(l)}),new An(t)}/**
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
 */class Je{constructor(t,n,s,l,c,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=l,this.createTime=c,this.data=f,this.documentState=g}static newInvalidDocument(t){return new Je(t,0,bt.min(),bt.min(),bt.min(),hn.empty(),0)}static newFoundDocument(t,n,s,l){return new Je(t,1,n,bt.min(),s,l,0)}static newNoDocument(t,n){return new Je(t,2,n,bt.min(),bt.min(),hn.empty(),0)}static newUnknownDocument(t,n){return new Je(t,3,n,bt.min(),bt.min(),hn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(bt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=hn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Je&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nc{constructor(t,n){this.position=t,this.inclusive=n}}function W_(r,t,n){let s=0;for(let l=0;l<r.position.length;l++){const c=t[l],f=r.position[l];if(c.field.isKeyField()?s=ht.comparator(ht.fromName(f.referenceValue),n.key):s=Ha(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function J_(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!yi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Oc{constructor(t,n="asc"){this.field=t,this.dir=n}}function UR(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class H0{}class Ee extends H0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new LR(t,n,s):n==="array-contains"?new qR(t,s):n==="in"?new jR(t,s):n==="not-in"?new HR(t,s):n==="array-contains-any"?new FR(t,s):new Ee(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new zR(t,s):new BR(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ha(n,this.value)):n!==null&&Ps(this.value)===Ps(n)&&this.matchesComparison(Ha(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Et()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends H0{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Qn(t,n)}matches(t){return F0(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function F0(r){return r.op==="and"}function G0(r){return kR(r)&&F0(r)}function kR(r){for(const t of r.filters)if(t instanceof Qn)return!1;return!0}function Gd(r){if(r instanceof Ee)return r.field.canonicalString()+r.op.toString()+Fa(r.value);if(G0(r))return r.filters.map(t=>Gd(t)).join(",");{const t=r.filters.map(n=>Gd(n)).join(",");return`${r.op}(${t})`}}function K0(r,t){return r instanceof Ee?function(s,l){return l instanceof Ee&&s.op===l.op&&s.field.isEqual(l.field)&&yi(s.value,l.value)}(r,t):r instanceof Qn?function(s,l){return l instanceof Qn&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce((c,f,g)=>c&&K0(f,l.filters[g]),!0):!1}(r,t):void Et()}function Q0(r){return r instanceof Ee?function(n){return`${n.field.canonicalString()} ${n.op} ${Fa(n.value)}`}(r):r instanceof Qn?function(n){return n.op.toString()+" {"+n.getFilters().map(Q0).join(" ,")+"}"}(r):"Filter"}class LR extends Ee{constructor(t,n,s){super(t,n,s),this.key=ht.fromName(s.referenceValue)}matches(t){const n=ht.comparator(t.key,this.key);return this.matchesComparison(n)}}class zR extends Ee{constructor(t,n){super(t,"in",n),this.keys=Y0("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class BR extends Ee{constructor(t,n){super(t,"not-in",n),this.keys=Y0("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Y0(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ht.fromName(s.referenceValue))}class qR extends Ee{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Tm(n)&&Rl(n.arrayValue,this.value)}}class jR extends Ee{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Rl(this.value.arrayValue,n)}}class HR extends Ee{constructor(t,n){super(t,"not-in",n)}matches(t){if(Rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Rl(this.value.arrayValue,n)}}class FR extends Ee{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Rl(this.value.arrayValue,s))}}/**
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
 */class GR{constructor(t,n=null,s=[],l=[],c=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=f,this.endAt=g,this.ue=null}}function tv(r,t=null,n=[],s=[],l=null,c=null,f=null){return new GR(r,t,n,s,l,c,f)}function Em(r){const t=St(r);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Gd(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),Qc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Fa(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Fa(s)).join(",")),t.ue=n}return t.ue}function Am(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!UR(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!K0(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!J_(r.startAt,t.startAt)&&J_(r.endAt,t.endAt)}function Kd(r){return ht.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Vl{constructor(t,n=null,s=[],l=[],c=null,f="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=f,this.startAt=g,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KR(r,t,n,s,l,c,f,g){return new Vl(r,t,n,s,l,c,f,g)}function Yc(r){return new Vl(r)}function ev(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function X0(r){return r.collectionGroup!==null}function yl(r){const t=St(r);if(t.ce===null){t.ce=[];const n=new Set;for(const c of t.explicitOrderBy)t.ce.push(c),n.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new Ge(Fe.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(_=>{_.isInequality()&&(g=g.add(_.field))})}),g})(t).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||t.ce.push(new Oc(c,s))}),n.has(Fe.keyField().canonicalString())||t.ce.push(new Oc(Fe.keyField(),s))}return t.ce}function fi(r){const t=St(r);return t.le||(t.le=QR(t,yl(r))),t.le}function QR(r,t){if(r.limitType==="F")return tv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new Oc(l.field,c)});const n=r.endAt?new Nc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Nc(r.startAt.position,r.startAt.inclusive):null;return tv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function Qd(r,t){const n=r.filters.concat([t]);return new Vl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Yd(r,t,n){return new Vl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Xc(r,t){return Am(fi(r),fi(t))&&r.limitType===t.limitType}function $0(r){return`${Em(fi(r))}|lt:${r.limitType}`}function Va(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(l=>Q0(l)).join(", ")}]`),Qc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(l=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(l)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(l=>Fa(l)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(l=>Fa(l)).join(",")),`Target(${s})`}(fi(r))}; limitType=${r.limitType})`}function $c(r,t){return t.isFoundDocument()&&function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ht.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,l){for(const c of yl(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0}(r,t)&&function(s,l){return!(s.startAt&&!function(f,g,p){const _=W_(f,g,p);return f.inclusive?_<=0:_<0}(s.startAt,yl(s),l)||s.endAt&&!function(f,g,p){const _=W_(f,g,p);return f.inclusive?_>=0:_>0}(s.endAt,yl(s),l))}(r,t)}function YR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Z0(r){return(t,n)=>{let s=!1;for(const l of yl(r)){const c=XR(l,t,n);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function XR(r,t,n){const s=r.field.isKeyField()?ht.comparator(t.key,n.key):function(c,f,g){const p=f.data.field(c),_=g.data.field(c);return p!==null&&_!==null?Ha(p,_):Et()}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Et()}}/**
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
 */class $a{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,n]);l.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[n]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){zs(this.inner,(n,s)=>{for(const[l,c]of s)t(l,c)})}isEmpty(){return B0(this.inner)}size(){return this.innerSize}}/**
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
 */const $R=new oe(ht.comparator);function $i(){return $R}const W0=new oe(ht.comparator);function fl(...r){let t=W0;for(const n of r)t=t.insert(n.key,n);return t}function J0(r){let t=W0;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ds(){return _l()}function tT(){return _l()}function _l(){return new $a(r=>r.toString(),(r,t)=>r.isEqual(t))}const ZR=new oe(ht.comparator),WR=new Ge(ht.comparator);function Vt(...r){let t=WR;for(const n of r)t=t.add(n);return t}const JR=new Ge(qt);function tI(){return JR}/**
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
 */function bm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dc(t)?"-0":t}}function eT(r){return{integerValue:""+r}}function eI(r,t){return OR(t)?eT(t):bm(r,t)}/**
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
 */class Zc{constructor(){this._=void 0}}function nI(r,t,n){return r instanceof Mc?function(l,c){const f={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&_m(c)&&(c=vm(c)),c&&(f.fields.__previous_value__=c),{mapValue:f}}(n,t):r instanceof Il?iT(r,t):r instanceof Cl?rT(r,t):function(l,c){const f=nT(l,c),g=nv(f)+nv(l.Pe);return Fd(f)&&Fd(l.Pe)?eT(g):bm(l.serializer,g)}(r,t)}function iI(r,t,n){return r instanceof Il?iT(r,t):r instanceof Cl?rT(r,t):n}function nT(r,t){return r instanceof Vc?function(s){return Fd(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class Mc extends Zc{}class Il extends Zc{constructor(t){super(),this.elements=t}}function iT(r,t){const n=sT(t);for(const s of r.elements)n.some(l=>yi(l,s))||n.push(s);return{arrayValue:{values:n}}}class Cl extends Zc{constructor(t){super(),this.elements=t}}function rT(r,t){let n=sT(t);for(const s of r.elements)n=n.filter(l=>!yi(l,s));return{arrayValue:{values:n}}}class Vc extends Zc{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function nv(r){return ge(r.integerValue||r.doubleValue)}function sT(r){return Tm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function rI(r,t){return r.field.isEqual(t.field)&&function(s,l){return s instanceof Il&&l instanceof Il||s instanceof Cl&&l instanceof Cl?ja(s.elements,l.elements,yi):s instanceof Vc&&l instanceof Vc?yi(s.Pe,l.Pe):s instanceof Mc&&l instanceof Mc}(r.transform,t.transform)}class sI{constructor(t,n){this.version=t,this.transformResults=n}}class kn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new kn}static exists(t){return new kn(void 0,t)}static updateTime(t){return new kn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _c(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Wc{}function aT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Sm(r.key,kn.none()):new xl(r.key,r.data,kn.none());{const n=r.data,s=hn.empty();let l=new Ge(Fe.comparator);for(let c of t.fields)if(!l.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),l=l.add(c)}return new Gr(r.key,s,new An(l.toArray()),kn.none())}}function aI(r,t,n){r instanceof xl?function(l,c,f){const g=l.value.clone(),p=rv(l.fieldTransforms,c,f.transformResults);g.setAll(p),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):r instanceof Gr?function(l,c,f){if(!_c(l.precondition,c))return void c.convertToUnknownDocument(f.version);const g=rv(l.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(oT(l)),p.setAll(g),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(l,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function vl(r,t,n,s){return r instanceof xl?function(c,f,g,p){if(!_c(c.precondition,f))return g;const _=c.value.clone(),E=sv(c.fieldTransforms,p,f);return _.setAll(E),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),null}(r,t,n,s):r instanceof Gr?function(c,f,g,p){if(!_c(c.precondition,f))return g;const _=sv(c.fieldTransforms,p,f),E=f.data;return E.setAll(oT(c)),E.setAll(_),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(C=>C.field))}(r,t,n,s):function(c,f,g){return _c(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g}(r,t,n)}function oI(r,t){let n=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),c=nT(s.transform,l||null);c!=null&&(n===null&&(n=hn.empty()),n.set(s.field,c))}return n||null}function iv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&ja(s,l,(c,f)=>rI(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class xl extends Wc{constructor(t,n,s,l=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Gr extends Wc{constructor(t,n,s,l,c=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function oT(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function rv(r,t,n){const s=new Map;Yt(r.length===n.length);for(let l=0;l<n.length;l++){const c=r[l],f=c.transform,g=t.data.field(c.field);s.set(c.field,iI(f,g,n[l]))}return s}function sv(r,t,n){const s=new Map;for(const l of r){const c=l.transform,f=n.data.field(l.field);s.set(l.field,nI(c,f,t))}return s}class Sm extends Wc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lI extends Wc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uI{constructor(t,n,s,l){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&aI(c,t,s[l])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=vl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=vl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=tT();return this.mutations.forEach(l=>{const c=t.get(l.key),f=c.overlayedDocument;let g=this.applyToLocalView(f,c.mutatedFields);g=n.has(l.key)?null:g;const p=aT(f,g);p!==null&&s.set(l.key,p),f.isValidDocument()||f.convertToNoDocument(bt.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Vt())}isEqual(t){return this.batchId===t.batchId&&ja(this.mutations,t.mutations,(n,s)=>iv(n,s))&&ja(this.baseMutations,t.baseMutations,(n,s)=>iv(n,s))}}class wm{constructor(t,n,s,l){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=l}static from(t,n,s){Yt(t.mutations.length===s.length);let l=function(){return ZR}();const c=t.mutations;for(let f=0;f<c.length;f++)l=l.insert(c[f].key,s[f].version);return new wm(t,n,s,l)}}/**
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
 */class cI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class hI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Te,Lt;function fI(r){switch(r){default:return Et();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0}}function lT(r){if(r===void 0)return Xi("GRPC error has no .code"),Q.UNKNOWN;switch(r){case Te.OK:return Q.OK;case Te.CANCELLED:return Q.CANCELLED;case Te.UNKNOWN:return Q.UNKNOWN;case Te.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case Te.INTERNAL:return Q.INTERNAL;case Te.UNAVAILABLE:return Q.UNAVAILABLE;case Te.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case Te.NOT_FOUND:return Q.NOT_FOUND;case Te.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case Te.ABORTED:return Q.ABORTED;case Te.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case Te.DATA_LOSS:return Q.DATA_LOSS;default:return Et()}}(Lt=Te||(Te={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dI(){return new TextEncoder}/**
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
 */const mI=new Ns([4294967295,4294967295],0);function av(r){const t=dI().encode(r),n=new M0;return n.update(t),new Uint8Array(n.digest())}function ov(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Ns([n,s],0),new Ns([l,c],0)]}class Rm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new dl(`Invalid padding: ${n}`);if(s<0)throw new dl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new dl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new dl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=Ns.fromNumber(this.Ie)}Ee(t,n,s){let l=t.add(n.multiply(Ns.fromNumber(s)));return l.compare(mI)===1&&(l=new Ns([l.getBits(0),l.getBits(1)],0)),l.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=av(t),[s,l]=ov(n);for(let c=0;c<this.hashCount;c++){const f=this.Ee(s,l,c);if(!this.de(f))return!1}return!0}static create(t,n,s){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new Rm(c,l,n);return s.forEach(g=>f.insert(g)),f}insert(t){if(this.Ie===0)return;const n=av(t),[s,l]=ov(n);for(let c=0;c<this.hashCount;c++){const f=this.Ee(s,l,c);this.Ae(f)}}Ae(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class dl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Jc{constructor(t,n,s,l,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const l=new Map;return l.set(t,Pl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Jc(bt.min(),l,new oe(qt),$i(),Vt())}}class Pl{constructor(t,n,s,l,c){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Pl(s,n,Vt(),Vt(),Vt())}}/**
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
 */class vc{constructor(t,n,s,l){this.Re=t,this.removedTargetIds=n,this.key=s,this.Ve=l}}class uT{constructor(t,n){this.targetId=t,this.me=n}}class cT{constructor(t,n,s=Ke.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=l}}class lv{constructor(){this.fe=0,this.ge=cv(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Vt(),n=Vt(),s=Vt();return this.ge.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:n=n.add(l);break;case 1:s=s.add(l);break;default:Et()}}),new Pl(this.pe,this.ye,t,n,s)}Ce(){this.we=!1,this.ge=cv()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Yt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gI{constructor(t){this.Le=t,this.Be=new Map,this.ke=$i(),this.qe=uv(),this.Qe=new oe(qt)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const s=this.Ge(n);switch(t.state){case 0:this.ze(n)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(t.resumeToken));break;default:Et()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((s,l)=>{this.ze(l)&&n(l)})}He(t){const n=t.targetId,s=t.me.count,l=this.Je(n);if(l){const c=l.target;if(Kd(c))if(s===0){const f=new ht(c.path);this.Ue(n,f,Je.newNoDocument(f,bt.min()))}else Yt(s===1);else{const f=this.Ye(n);if(f!==s){const g=this.Ze(t),p=g?this.Xe(g,t,f):1;if(p!==0){this.je(n);const _=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,_)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=n;let f,g;try{f=xs(s).toUint8Array()}catch(p){if(p instanceof q0)return qa("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new Rm(f,l,c)}catch(p){return qa(p instanceof dl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.Ie===0?null:g}Xe(t,n,s){return n.me.count===s-this.nt(t,n.targetId)?0:2}nt(t,n){const s=this.Le.getRemoteKeysForTarget(n);let l=0;return s.forEach(c=>{const f=this.Le.tt(),g=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(g)||(this.Ue(n,c,null),l++)}),l}rt(t){const n=new Map;this.Be.forEach((c,f)=>{const g=this.Je(f);if(g){if(c.current&&Kd(g.target)){const p=new ht(g.target.path);this.ke.get(p)!==null||this.it(f,p)||this.Ue(f,p,Je.newNoDocument(p,t))}c.be&&(n.set(f,c.ve()),c.Ce())}});let s=Vt();this.qe.forEach((c,f)=>{let g=!0;f.forEachWhile(p=>{const _=this.Je(p);return!_||_.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(s=s.add(c))}),this.ke.forEach((c,f)=>f.setReadTime(t));const l=new Jc(t,n,this.Qe,this.ke,s);return this.ke=$i(),this.qe=uv(),this.Qe=new oe(qt),l}$e(t,n){if(!this.ze(t))return;const s=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,s){if(!this.ze(t))return;const l=this.Ge(t);this.it(t,n)?l.Fe(n,1):l.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new lv,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new Ge(qt),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||ot("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new lv),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function uv(){return new oe(ht.comparator)}function cv(){return new oe(ht.comparator)}const pI={asc:"ASCENDING",desc:"DESCENDING"},yI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_I={and:"AND",or:"OR"};class vI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Xd(r,t){return r.useProto3Json||Qc(t)?t:{value:t}}function xc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hT(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function TI(r,t){return xc(r,t.toTimestamp())}function di(r){return Yt(!!r),bt.fromTimestamp(function(n){const s=qr(n);return new De(s.seconds,s.nanos)}(r))}function Im(r,t){return $d(r,t).canonicalString()}function $d(r,t){const n=function(l){return new ne(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?n:n.child(t)}function fT(r){const t=ne.fromString(r);return Yt(yT(t)),t}function Zd(r,t){return Im(r.databaseId,t.path)}function Cd(r,t){const n=fT(t);if(n.get(1)!==r.databaseId.projectId)throw new st(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new st(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ht(mT(n))}function dT(r,t){return Im(r.databaseId,t)}function EI(r){const t=fT(r);return t.length===4?ne.emptyPath():mT(t)}function Wd(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function mT(r){return Yt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function hv(r,t,n){return{name:Zd(r,t),fields:n.value.mapValue.fields}}function AI(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Et()}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(_,E){return _.useProto3Json?(Yt(E===void 0||typeof E=="string"),Ke.fromBase64String(E||"")):(Yt(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Ke.fromUint8Array(E||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&function(_){const E=_.code===void 0?Q.UNKNOWN:lT(_.code);return new st(E,_.message||"")}(f);n=new cT(s,l,c,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=Cd(r,s.document.name),c=di(s.document.updateTime),f=s.document.createTime?di(s.document.createTime):bt.min(),g=new hn({mapValue:{fields:s.document.fields}}),p=Je.newFoundDocument(l,c,f,g),_=s.targetIds||[],E=s.removedTargetIds||[];n=new vc(_,E,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=Cd(r,s.document),c=s.readTime?di(s.readTime):bt.min(),f=Je.newNoDocument(l,c),g=s.removedTargetIds||[];n=new vc([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=Cd(r,s.document),c=s.removedTargetIds||[];n=new vc([],c,l,null)}else{if(!("filter"in t))return Et();{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,f=new hI(l,c),g=s.targetId;n=new uT(g,f)}}return n}function bI(r,t){let n;if(t instanceof xl)n={update:hv(r,t.key,t.value)};else if(t instanceof Sm)n={delete:Zd(r,t.key)};else if(t instanceof Gr)n={update:hv(r,t.key,t.data),updateMask:MI(t.fieldMask)};else{if(!(t instanceof lI))return Et();n={verify:Zd(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const g=f.transform;if(g instanceof Mc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Il)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Cl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof Vc)return{fieldPath:f.field.canonicalString(),increment:g.Pe};throw Et()}(0,s))),t.precondition.isNone||(n.currentDocument=function(l,c){return c.updateTime!==void 0?{updateTime:TI(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Et()}(r,t.precondition)),n}function SI(r,t){return r&&r.length>0?(Yt(t!==void 0),r.map(n=>function(l,c){let f=l.updateTime?di(l.updateTime):di(c);return f.isEqual(bt.min())&&(f=di(c)),new sI(f,l.transformResults||[])}(n,t))):[]}function wI(r,t){return{documents:[dT(r,t.path)]}}function RI(r,t){const n={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=dT(r,l);const c=function(_){if(_.length!==0)return pT(Qn.create(_,"and"))}(t.filters);c&&(n.structuredQuery.where=c);const f=function(_){if(_.length!==0)return _.map(E=>function(V){return{field:xa(V.field),direction:DI(V.dir)}}(E))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=Xd(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(t.endAt)),{_t:n,parent:l}}function II(r){let t=EI(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let l=null;if(s>0){Yt(s===1);const E=n.from[0];E.allDescendants?l=E.collectionId:t=t.child(E.collectionId)}let c=[];n.where&&(c=function(C){const V=gT(C);return V instanceof Qn&&G0(V)?V.getFilters():[V]}(n.where));let f=[];n.orderBy&&(f=function(C){return C.map(V=>function(X){return new Oc(Pa(X.field),function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(V))}(n.orderBy));let g=null;n.limit&&(g=function(C){let V;return V=typeof C=="object"?C.value:C,Qc(V)?null:V}(n.limit));let p=null;n.startAt&&(p=function(C){const V=!!C.before,j=C.values||[];return new Nc(j,V)}(n.startAt));let _=null;return n.endAt&&(_=function(C){const V=!C.before,j=C.values||[];return new Nc(j,V)}(n.endAt)),KR(t,l,f,c,g,"F",p,_)}function CI(r,t){const n=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Et()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function gT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Pa(n.unaryFilter.field);return Ee.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=Pa(n.unaryFilter.field);return Ee.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Pa(n.unaryFilter.field);return Ee.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Pa(n.unaryFilter.field);return Ee.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Et()}}(r):r.fieldFilter!==void 0?function(n){return Ee.create(Pa(n.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Et()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Qn.create(n.compositeFilter.filters.map(s=>gT(s)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Et()}}(n.compositeFilter.op))}(r):Et()}function DI(r){return pI[r]}function NI(r){return yI[r]}function OI(r){return _I[r]}function xa(r){return{fieldPath:r.canonicalString()}}function Pa(r){return Fe.fromServerFormat(r.fieldPath)}function pT(r){return r instanceof Ee?function(n){if(n.op==="=="){if(Z_(n.value))return{unaryFilter:{field:xa(n.field),op:"IS_NAN"}};if($_(n.value))return{unaryFilter:{field:xa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Z_(n.value))return{unaryFilter:{field:xa(n.field),op:"IS_NOT_NAN"}};if($_(n.value))return{unaryFilter:{field:xa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xa(n.field),op:NI(n.op),value:n.value}}}(r):r instanceof Qn?function(n){const s=n.getFilters().map(l=>pT(l));return s.length===1?s[0]:{compositeFilter:{op:OI(n.op),filters:s}}}(r):Et()}function MI(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function yT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class xr{constructor(t,n,s,l,c=bt.min(),f=bt.min(),g=Ke.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new xr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class VI{constructor(t){this.ct=t}}function xI(r){const t=II({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Yd(t,t.limit,"L"):t}/**
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
 */class PI{constructor(){this.un=new UI}addToCollectionParentIndex(t,n){return this.un.add(n),$.resolve()}getCollectionParents(t,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(t,n){return $.resolve()}deleteFieldIndex(t,n){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,n){return $.resolve()}getDocumentsMatchingTarget(t,n){return $.resolve(null)}getIndexType(t,n){return $.resolve(0)}getFieldIndexes(t,n){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,n){return $.resolve(Br.min())}getMinOffsetFromCollectionGroup(t,n){return $.resolve(Br.min())}updateCollectionGroup(t,n,s){return $.resolve()}updateIndexEntries(t,n){return $.resolve()}}class UI{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n]||new Ge(ne.comparator),c=!l.has(s);return this.index[n]=l.add(s),c}has(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n];return l&&l.has(s)}getEntries(t){return(this.index[t]||new Ge(ne.comparator)).toArray()}}/**
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
 */class Ga{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ga(0)}static kn(){return new Ga(-1)}}/**
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
 */class kI{constructor(){this.changes=new $a(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Je.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class LI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class zI{constructor(t,n,s,l){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(l=>(s=l,this.remoteDocumentCache.getEntry(t,n))).next(l=>(s!==null&&vl(s.mutation,l,An.empty(),De.now()),l))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Vt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Vt()){const l=Ds();return this.populateOverlays(t,l,n).next(()=>this.computeViews(t,n,l,s).next(c=>{let f=fl();return c.forEach((g,p)=>{f=f.insert(g,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Ds();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Vt()))}populateOverlays(t,n,s){const l=[];return s.forEach(c=>{n.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((f,g)=>{n.set(f,g)})})}computeViews(t,n,s,l){let c=$i();const f=_l(),g=function(){return _l()}();return n.forEach((p,_)=>{const E=s.get(_.key);l.has(_.key)&&(E===void 0||E.mutation instanceof Gr)?c=c.insert(_.key,_):E!==void 0?(f.set(_.key,E.mutation.getFieldMask()),vl(E.mutation,_,E.mutation.getFieldMask(),De.now())):f.set(_.key,An.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((_,E)=>f.set(_,E)),n.forEach((_,E)=>{var C;return g.set(_,new LI(E,(C=f.get(_))!==null&&C!==void 0?C:null))}),g))}recalculateAndSaveOverlays(t,n){const s=_l();let l=new oe((f,g)=>f-g),c=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const g of f)g.keys().forEach(p=>{const _=n.get(p);if(_===null)return;let E=s.get(p)||An.empty();E=g.applyToLocalView(_,E),s.set(p,E);const C=(l.get(g.batchId)||Vt()).add(p);l=l.insert(g.batchId,C)})}).next(()=>{const f=[],g=l.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),_=p.key,E=p.value,C=tT();E.forEach(V=>{if(!c.has(V)){const j=aT(n.get(V),s.get(V));j!==null&&C.set(V,j),c=c.add(V)}}),f.push(this.documentOverlayCache.saveOverlays(t,_,C))}return $.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,l){return function(f){return ht.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):X0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,l):this.getDocumentsMatchingCollectionQuery(t,n,s,l)}getNextDocuments(t,n,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,l).next(c=>{const f=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,l-c.size):$.resolve(Ds());let g=-1,p=c;return f.next(_=>$.forEach(_,(E,C)=>(g<C.largestBatchId&&(g=C.largestBatchId),c.get(E)?$.resolve():this.remoteDocumentCache.getEntry(t,E).next(V=>{p=p.insert(E,V)}))).next(()=>this.populateOverlays(t,_,c)).next(()=>this.computeViews(t,p,_,Vt())).next(E=>({batchId:g,changes:J0(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ht(n)).next(s=>{let l=fl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l})}getDocumentsMatchingCollectionGroupQuery(t,n,s,l){const c=n.collectionGroup;let f=fl();return this.indexManager.getCollectionParents(t,c).next(g=>$.forEach(g,p=>{const _=function(C,V){return new Vl(V,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(n,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,_,s,l).next(E=>{E.forEach((C,V)=>{f=f.insert(C,V)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,c,l))).next(f=>{c.forEach((p,_)=>{const E=_.getKey();f.get(E)===null&&(f=f.insert(E,Je.newInvalidDocument(E)))});let g=fl();return f.forEach((p,_)=>{const E=c.get(p);E!==void 0&&vl(E.mutation,_,An.empty(),De.now()),$c(n,_)&&(g=g.insert(p,_))}),g})}}/**
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
 */class BI{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(t,n){return this.hr.set(n.id,function(l){return{id:l.id,version:l.version,createTime:di(l.createTime)}}(n)),$.resolve()}getNamedQuery(t,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(t,n){return this.Pr.set(n.name,function(l){return{name:l.name,query:xI(l.bundledQuery),readTime:di(l.readTime)}}(n)),$.resolve()}}/**
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
 */class qI{constructor(){this.overlays=new oe(ht.comparator),this.Ir=new Map}getOverlay(t,n){return $.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ds();return $.forEach(n,l=>this.getOverlay(t,l).next(c=>{c!==null&&s.set(l,c)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((l,c)=>{this.ht(t,n,c)}),$.resolve()}removeOverlaysForBatchId(t,n,s){const l=this.Ir.get(s);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.Ir.delete(s)),$.resolve()}getOverlaysForCollection(t,n,s){const l=Ds(),c=n.length+1,f=new ht(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const p=g.getNext().value,_=p.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===c&&p.largestBatchId>s&&l.set(p.getKey(),p)}return $.resolve(l)}getOverlaysForCollectionGroup(t,n,s,l){let c=new oe((_,E)=>_-E);const f=this.overlays.getIterator();for(;f.hasNext();){const _=f.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>s){let E=c.get(_.largestBatchId);E===null&&(E=Ds(),c=c.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const g=Ds(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((_,E)=>g.set(_,E)),!(g.size()>=l)););return $.resolve(g)}ht(t,n,s){const l=this.overlays.get(s.key);if(l!==null){const f=this.Ir.get(l.largestBatchId).delete(s.key);this.Ir.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new cI(n,s));let c=this.Ir.get(n);c===void 0&&(c=Vt(),this.Ir.set(n,c)),this.Ir.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class jI{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Cm{constructor(){this.Tr=new Ge(ke.Er),this.dr=new Ge(ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,n){const s=new ke(t,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Vr(new ke(t,n))}mr(t,n){t.forEach(s=>this.removeReference(s,n))}gr(t){const n=new ht(new ne([])),s=new ke(n,t),l=new ke(n,t+1),c=[];return this.dr.forEachInRange([s,l],f=>{this.Vr(f),c.push(f.key)}),c}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const n=new ht(new ne([])),s=new ke(n,t),l=new ke(n,t+1);let c=Vt();return this.dr.forEachInRange([s,l],f=>{c=c.add(f.key)}),c}containsKey(t){const n=new ke(t,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ke{constructor(t,n){this.key=t,this.wr=n}static Er(t,n){return ht.comparator(t.key,n.key)||qt(t.wr,n.wr)}static Ar(t,n){return qt(t.wr,n.wr)||ht.comparator(t.key,n.key)}}/**
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
 */class HI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ge(ke.Er)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,l){const c=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new uI(c,n,s,l);this.mutationQueue.push(f);for(const g of l)this.br=this.br.add(new ke(g.key,c)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return $.resolve(f)}lookupMutationBatch(t,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,l=this.vr(s),c=l<0?0:l;return $.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new ke(n,0),l=new ke(n,Number.POSITIVE_INFINITY),c=[];return this.br.forEachInRange([s,l],f=>{const g=this.Dr(f.wr);c.push(g)}),$.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ge(qt);return n.forEach(l=>{const c=new ke(l,0),f=new ke(l,Number.POSITIVE_INFINITY);this.br.forEachInRange([c,f],g=>{s=s.add(g.wr)})}),$.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,l=s.length+1;let c=s;ht.isDocumentKey(c)||(c=c.child(""));const f=new ke(new ht(c),0);let g=new Ge(qt);return this.br.forEachWhile(p=>{const _=p.key.path;return!!s.isPrefixOf(_)&&(_.length===l&&(g=g.add(p.wr)),!0)},f),$.resolve(this.Cr(g))}Cr(t){const n=[];return t.forEach(s=>{const l=this.Dr(s);l!==null&&n.push(l)}),n}removeMutationBatch(t,n){Yt(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return $.forEach(n.mutations,l=>{const c=new ke(l.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,n){const s=new ke(n,0),l=this.br.firstAfterOrEqual(s);return $.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}Fr(t,n){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const n=this.vr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FI{constructor(t){this.Mr=t,this.docs=function(){return new oe(ht.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,l=this.docs.get(s),c=l?l.size:0,f=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(t,n){let s=$i();return n.forEach(l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():Je.newInvalidDocument(l))}),$.resolve(s)}getDocumentsMatchingQuery(t,n,s,l){let c=$i();const f=n.path,g=new ht(f.child("")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:_,value:{document:E}}=p.getNext();if(!f.isPrefixOf(_.path))break;_.path.length>f.length+1||IR(RR(E),s)<=0||(l.has(E.key)||$c(n,E))&&(c=c.insert(E.key,E.mutableCopy()))}return $.resolve(c)}getAllFromCollectionGroup(t,n,s,l){Et()}Or(t,n){return $.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new GI(this)}getSize(t){return $.resolve(this.size)}}class GI extends kI{constructor(t){super(),this.cr=t}applyChanges(t){const n=[];return this.changes.forEach((s,l)=>{l.isValidDocument()?n.push(this.cr.addEntry(t,l)):this.cr.removeEntry(s)}),$.waitFor(n)}getFromCache(t,n){return this.cr.getEntry(t,n)}getAllFromCache(t,n){return this.cr.getEntries(t,n)}}/**
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
 */class KI{constructor(t){this.persistence=t,this.Nr=new $a(n=>Em(n),Am),this.lastRemoteSnapshotVersion=bt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Cm,this.targetCount=0,this.kr=Ga.Bn()}forEachTarget(t,n){return this.Nr.forEach((s,l)=>n(l)),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(t){this.Nr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.kr=new Ga(n),this.highestTargetId=n),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(t,n){return this.Kn(n),$.resolve()}removeTargetData(t,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,n,s){let l=0;const c=[];return this.Nr.forEach((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.Nr.delete(f),c.push(this.removeMatchingKeysForTargetId(t,g.targetId)),l++)}),$.waitFor(c).next(()=>l)}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,n){const s=this.Nr.get(n)||null;return $.resolve(s)}addMatchingKeys(t,n,s){return this.Br.Rr(n,s),$.resolve()}removeMatchingKeys(t,n,s){this.Br.mr(n,s);const l=this.persistence.referenceDelegate,c=[];return l&&n.forEach(f=>{c.push(l.markPotentiallyOrphaned(t,f))}),$.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Br.yr(n);return $.resolve(s)}containsKey(t,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class QI{constructor(t,n){this.qr={},this.overlays={},this.Qr=new ym(0),this.Kr=!1,this.Kr=!0,this.$r=new jI,this.referenceDelegate=t(this),this.Ur=new KI(this),this.indexManager=new PI,this.remoteDocumentCache=function(l){return new FI(l)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new VI(n),this.Gr=new BI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new qI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.qr[t.toKey()];return s||(s=new HI(n,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,n,s){ot("MemoryPersistence","Starting transaction:",t);const l=new YI(this.Qr.next());return this.referenceDelegate.zr(),s(l).next(c=>this.referenceDelegate.jr(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}Hr(t,n){return $.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,n)))}}class YI extends DR{constructor(t){super(),this.currentSequenceNumber=t}}class Dm{constructor(t){this.persistence=t,this.Jr=new Cm,this.Yr=null}static Zr(t){return new Dm(t)}get Xr(){if(this.Yr)return this.Yr;throw Et()}addReference(t,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),$.resolve()}removeReference(t,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),$.resolve()}markPotentiallyOrphaned(t,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(t,n){this.Jr.gr(n.targetId).forEach(l=>this.Xr.add(l.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(l=>{l.forEach(c=>this.Xr.add(c.toString()))}).next(()=>s.removeTargetData(t,n))}zr(){this.Yr=new Set}jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,s=>{const l=ht.fromPath(s);return this.ei(t,l).next(c=>{c||n.removeEntry(l,bt.min())})}).next(()=>(this.Yr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ei(t,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(t){return 0}ei(t,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Hr(t,n)])}}/**
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
 */class Nm{constructor(t,n,s,l){this.targetId=t,this.fromCache=n,this.$i=s,this.Ui=l}static Wi(t,n){let s=Vt(),l=Vt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new Nm(t,n.fromCache,s,l)}}/**
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
 */class XI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class $I{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Nb()?8:NR(en())>0?6:4}()}initialize(t,n){this.Ji=t,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(t,n,s,l){const c={result:null};return this.Yi(t,n).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.Zi(t,n,l,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new XI;return this.Xi(t,n,f).next(g=>{if(c.result=g,this.zi)return this.es(t,n,f,g.size)})}).next(()=>c.result)}es(t,n,s,l){return s.documentReadCount<this.ji?(cl()<=xt.DEBUG&&ot("QueryEngine","SDK will not create cache indexes for query:",Va(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(cl()<=xt.DEBUG&&ot("QueryEngine","Query:",Va(n),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.Hi*l?(cl()<=xt.DEBUG&&ot("QueryEngine","The SDK decides to create cache indexes for query:",Va(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,fi(n))):$.resolve())}Yi(t,n){if(ev(n))return $.resolve(null);let s=fi(n);return this.indexManager.getIndexType(t,s).next(l=>l===0?null:(n.limit!==null&&l===1&&(n=Yd(n,null,"F"),s=fi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Vt(...c);return this.Ji.getDocuments(t,f).next(g=>this.indexManager.getMinOffset(t,s).next(p=>{const _=this.ts(n,g);return this.ns(n,_,f,p.readTime)?this.Yi(t,Yd(n,null,"F")):this.rs(t,_,n,p)}))})))}Zi(t,n,s,l){return ev(n)||l.isEqual(bt.min())?$.resolve(null):this.Ji.getDocuments(t,s).next(c=>{const f=this.ts(n,c);return this.ns(n,f,s,l)?$.resolve(null):(cl()<=xt.DEBUG&&ot("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Va(n)),this.rs(t,f,n,wR(l,-1)).next(g=>g))})}ts(t,n){let s=new Ge(Z0(t));return n.forEach((l,c)=>{$c(t,c)&&(s=s.add(c))}),s}ns(t,n,s,l){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Xi(t,n,s){return cl()<=xt.DEBUG&&ot("QueryEngine","Using full collection scan to execute query:",Va(n)),this.Ji.getDocumentsMatchingQuery(t,n,Br.min(),s)}rs(t,n,s,l){return this.Ji.getDocumentsMatchingQuery(t,s,l).next(c=>(n.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
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
 */class ZI{constructor(t,n,s,l){this.persistence=t,this.ss=n,this.serializer=l,this.os=new oe(qt),this._s=new $a(c=>Em(c),Am),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new zI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.os))}}function WI(r,t,n,s){return new ZI(r,t,n,s)}async function _T(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let l;return n.mutationQueue.getAllMutationBatches(s).next(c=>(l=c,n.ls(t),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],g=[];let p=Vt();for(const _ of l){f.push(_.batchId);for(const E of _.mutations)p=p.add(E.key)}for(const _ of c){g.push(_.batchId);for(const E of _.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(_=>({hs:_,removedBatchIds:f,addedBatchIds:g}))})})}function JI(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const l=t.batch.keys(),c=n.cs.newChangeBuffer({trackRemovals:!0});return function(g,p,_,E){const C=_.batch,V=C.keys();let j=$.resolve();return V.forEach(X=>{j=j.next(()=>E.getEntry(p,X)).next(nt=>{const Z=_.docVersions.get(X);Yt(Z!==null),nt.version.compareTo(Z)<0&&(C.applyToRemoteDocument(nt,_),nt.isValidDocument()&&(nt.setReadTime(_.commitVersion),E.addEntry(nt)))})}),j.next(()=>g.mutationQueue.removeMutationBatch(p,C))}(n,s,t,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let p=Vt();for(let _=0;_<g.mutationResults.length;++_)g.mutationResults[_].transformResults.length>0&&(p=p.add(g.batch.mutations[_].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,l))})}function vT(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ur.getLastRemoteSnapshotVersion(n))}function t1(r,t){const n=St(r),s=t.snapshotVersion;let l=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=n.cs.newChangeBuffer({trackRemovals:!0});l=n.os;const g=[];t.targetChanges.forEach((E,C)=>{const V=l.get(C);if(!V)return;g.push(n.Ur.removeMatchingKeys(c,E.removedDocuments,C).next(()=>n.Ur.addMatchingKeys(c,E.addedDocuments,C)));let j=V.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(C)!==null?j=j.withResumeToken(Ke.EMPTY_BYTE_STRING,bt.min()).withLastLimboFreeSnapshotVersion(bt.min()):E.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(E.resumeToken,s)),l=l.insert(C,j),function(nt,Z,vt){return nt.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-nt.snapshotVersion.toMicroseconds()>=3e8?!0:vt.addedDocuments.size+vt.modifiedDocuments.size+vt.removedDocuments.size>0}(V,j,E)&&g.push(n.Ur.updateTargetData(c,j))});let p=$i(),_=Vt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(c,E))}),g.push(e1(c,f,t.documentUpdates).next(E=>{p=E.Ps,_=E.Is})),!s.isEqual(bt.min())){const E=n.Ur.getLastRemoteSnapshotVersion(c).next(C=>n.Ur.setTargetsMetadata(c,c.currentSequenceNumber,s));g.push(E)}return $.waitFor(g).next(()=>f.apply(c)).next(()=>n.localDocuments.getLocalViewOfDocuments(c,p,_)).next(()=>p)}).then(c=>(n.os=l,c))}function e1(r,t,n){let s=Vt(),l=Vt();return n.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=$i();return n.forEach((g,p)=>{const _=c.get(g);p.isFoundDocument()!==_.isFoundDocument()&&(l=l.add(g)),p.isNoDocument()&&p.version.isEqual(bt.min())?(t.removeEntry(g,p.readTime),f=f.insert(g,p)):!_.isValidDocument()||p.version.compareTo(_.version)>0||p.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(p),f=f.insert(g,p)):ot("LocalStore","Ignoring outdated watch update for ",g,". Current version:",_.version," Watch version:",p.version)}),{Ps:f,Is:l}})}function n1(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function i1(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let l;return n.Ur.getTargetData(s,t).next(c=>c?(l=c,$.resolve(l)):n.Ur.allocateTargetId(s).next(f=>(l=new xr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,l).next(()=>l))))}).then(s=>{const l=n.os.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(t,s.targetId)),s})}async function Jd(r,t,n){const s=St(r),l=s.os.get(t),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,l))}catch(f){if(!Ml(f))throw f;ot("LocalStore",`Failed to update sequence numbers for target ${t}: ${f}`)}s.os=s.os.remove(t),s._s.delete(l.target)}function fv(r,t,n){const s=St(r);let l=bt.min(),c=Vt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,_,E){const C=St(p),V=C._s.get(E);return V!==void 0?$.resolve(C.os.get(V)):C.Ur.getTargetData(_,E)}(s,f,fi(t)).next(g=>{if(g)return l=g.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(f,g.targetId).next(p=>{c=p})}).next(()=>s.ss.getDocumentsMatchingQuery(f,t,n?l:bt.min(),n?c:Vt())).next(g=>(r1(s,YR(t),g),{documents:g,Ts:c})))}function r1(r,t,n){let s=r.us.get(t)||bt.min();n.forEach((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.us.set(t,s)}class dv{constructor(){this.activeTargetIds=tI()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class s1{constructor(){this.so=new dv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,n,s){this.oo[t]=n}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new dv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class a1{_o(t){}shutdown(){}}/**
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
 */class mv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ot("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){ot("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mc=null;function Dd(){return mc===null?mc=function(){return 268435456+Math.round(2147483648*Math.random())}():mc++,"0x"+mc.toString(16)}/**
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
 */const o1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class l1{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const Ze="WebChannelConnection";class u1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",l=encodeURIComponent(this.databaseId.projectId),c=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${l}/databases/${c}`,this.Co=this.databaseId.database==="(default)"?`project_id=${l}`:`project_id=${l}&database_id=${c}`}get Fo(){return!1}Mo(n,s,l,c,f){const g=Dd(),p=this.xo(n,s.toUriEncodedString());ot("RestConnection",`Sending RPC '${n}' ${g}:`,p,l);const _={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(_,c,f),this.No(n,p,_,l).then(E=>(ot("RestConnection",`Received RPC '${n}' ${g}: `,E),E),E=>{throw qa("RestConnection",`RPC '${n}' ${g} failed with error: `,E,"url: ",p,"request:",l),E})}Lo(n,s,l,c,f,g){return this.Mo(n,s,l,c,f)}Oo(n,s,l){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((c,f)=>n[f]=c),l&&l.headers.forEach((c,f)=>n[f]=c)}xo(n,s){const l=o1[n];return`${this.Do}/v1/${s}:${l}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,n,s,l){const c=Dd();return new Promise((f,g)=>{const p=new V0;p.setWithCredentials(!0),p.listenOnce(x0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case pc.NO_ERROR:const E=p.getResponseJson();ot(Ze,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(E)),f(E);break;case pc.TIMEOUT:ot(Ze,`RPC '${t}' ${c} timed out`),g(new st(Q.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const C=p.getStatus();if(ot(Ze,`RPC '${t}' ${c} failed with status:`,C,"response text:",p.getResponseText()),C>0){let V=p.getResponseJson();Array.isArray(V)&&(V=V[0]);const j=V?.error;if(j&&j.status&&j.message){const X=function(Z){const vt=Z.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(vt)>=0?vt:Q.UNKNOWN}(j.status);g(new st(X,j.message))}else g(new st(Q.UNKNOWN,"Server responded with status "+p.getStatus()))}else g(new st(Q.UNAVAILABLE,"Connection failed."));break;default:Et()}}finally{ot(Ze,`RPC '${t}' ${c} completed.`)}});const _=JSON.stringify(l);ot(Ze,`RPC '${t}' ${c} sending request:`,l),p.send(n,"POST",_,s,15)})}Bo(t,n,s){const l=Dd(),c=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=k0(),g=U0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(p.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=c.join("");ot(Ze,`Creating RPC '${t}' stream ${l}: ${E}`,p);const C=f.createWebChannel(E,p);let V=!1,j=!1;const X=new l1({Io:Z=>{j?ot(Ze,`Not sending because RPC '${t}' stream ${l} is closed:`,Z):(V||(ot(Ze,`Opening RPC '${t}' stream ${l} transport.`),C.open(),V=!0),ot(Ze,`RPC '${t}' stream ${l} sending:`,Z),C.send(Z))},To:()=>C.close()}),nt=(Z,vt,At)=>{Z.listen(vt,dt=>{try{At(dt)}catch(Nt){setTimeout(()=>{throw Nt},0)}})};return nt(C,hl.EventType.OPEN,()=>{j||(ot(Ze,`RPC '${t}' stream ${l} transport opened.`),X.yo())}),nt(C,hl.EventType.CLOSE,()=>{j||(j=!0,ot(Ze,`RPC '${t}' stream ${l} transport closed`),X.So())}),nt(C,hl.EventType.ERROR,Z=>{j||(j=!0,qa(Ze,`RPC '${t}' stream ${l} transport errored:`,Z),X.So(new st(Q.UNAVAILABLE,"The operation could not be completed")))}),nt(C,hl.EventType.MESSAGE,Z=>{var vt;if(!j){const At=Z.data[0];Yt(!!At);const dt=At,Nt=dt.error||((vt=dt[0])===null||vt===void 0?void 0:vt.error);if(Nt){ot(Ze,`RPC '${t}' stream ${l} received error:`,Nt);const mt=Nt.status;let It=function(w){const N=Te[w];if(N!==void 0)return lT(N)}(mt),O=Nt.message;It===void 0&&(It=Q.INTERNAL,O="Unknown error status: "+mt+" with message "+Nt.message),j=!0,X.So(new st(It,O)),C.close()}else ot(Ze,`RPC '${t}' stream ${l} received:`,At),X.bo(At)}}),nt(g,P0.STAT_EVENT,Z=>{Z.stat===jd.PROXY?ot(Ze,`RPC '${t}' stream ${l} detected buffering proxy`):Z.stat===jd.NOPROXY&&ot(Ze,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{X.wo()},0),X}}function Nd(){return typeof document<"u"?document:null}/**
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
 */function th(r){return new vI(r,!0)}/**
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
 */class TT{constructor(t,n,s=1e3,l=1.5,c=6e4){this.ui=t,this.timerId=n,this.ko=s,this.qo=l,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),l=Math.max(0,n-s);l>0&&ot("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,l,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ET{constructor(t,n,s,l,c,f,g,p){this.ui=t,this.Ho=s,this.Jo=l,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new TT(t,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():n&&n.code===Q.RESOURCE_EXHAUSTED?(Xi(n.toString()),Xi("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(n)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,l])=>{this.Yo===n&&this.P_(s,l)},s=>{t(()=>{const l=new st(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(l)})})}P_(t,n){const s=this.h_(this.Yo);this.stream=this.T_(t,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(l=>{s(()=>this.I_(l))}),this.stream.onMessage(l=>{s(()=>++this.e_==1?this.E_(l):this.onNext(l))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return ot("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return n=>{this.ui.enqueueAndForget(()=>this.Yo===t?n():(ot("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class c1 extends ET{constructor(t,n,s,l,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,l,f),this.serializer=c}T_(t,n){return this.connection.Bo("Listen",t,n)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const n=AI(this.serializer,t),s=function(c){if(!("targetChange"in c))return bt.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?bt.min():f.readTime?di(f.readTime):bt.min()}(t);return this.listener.d_(n,s)}A_(t){const n={};n.database=Wd(this.serializer),n.addTarget=function(c,f){let g;const p=f.target;if(g=Kd(p)?{documents:wI(c,p)}:{query:RI(c,p)._t},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=hT(c,f.resumeToken);const _=Xd(c,f.expectedCount);_!==null&&(g.expectedCount=_)}else if(f.snapshotVersion.compareTo(bt.min())>0){g.readTime=xc(c,f.snapshotVersion.toTimestamp());const _=Xd(c,f.expectedCount);_!==null&&(g.expectedCount=_)}return g}(this.serializer,t);const s=CI(this.serializer,t);s&&(n.labels=s),this.a_(n)}R_(t){const n={};n.database=Wd(this.serializer),n.removeTarget=t,this.a_(n)}}class h1 extends ET{constructor(t,n,s,l,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,l,f),this.serializer=c}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,n){return this.connection.Bo("Write",t,n)}E_(t){return Yt(!!t.streamToken),this.lastStreamToken=t.streamToken,Yt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Yt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const n=SI(t.writeResults,t.commitTime),s=di(t.commitTime);return this.listener.g_(s,n)}p_(){const t={};t.database=Wd(this.serializer),this.a_(t)}m_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>bI(this.serializer,s))};this.a_(n)}}/**
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
 */class f1 extends class{}{constructor(t,n,s,l){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=l,this.y_=!1}w_(){if(this.y_)throw new st(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,n,s,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.Mo(t,$d(n,s),l,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new st(Q.UNKNOWN,c.toString())})}Lo(t,n,s,l,c){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Lo(t,$d(n,s),l,f,g,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new st(Q.UNKNOWN,f.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class d1{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Xi(n),this.D_=!1):ot("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class m1{constructor(t,n,s,l,c){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=c,this.k_._o(f=>{s.enqueueAndForget(async()=>{Bs(this)&&(ot("RemoteStore","Restarting streams for network reachability change."),await async function(p){const _=St(p);_.L_.add(4),await Ul(_),_.q_.set("Unknown"),_.L_.delete(4),await eh(_)}(this))})}),this.q_=new d1(s,l)}}async function eh(r){if(Bs(r))for(const t of r.B_)await t(!0)}async function Ul(r){for(const t of r.B_)await t(!1)}function AT(r,t){const n=St(r);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),xm(n)?Vm(n):Za(n).r_()&&Mm(n,t))}function Om(r,t){const n=St(r),s=Za(n);n.N_.delete(t),s.r_()&&bT(n,t),n.N_.size===0&&(s.r_()?s.o_():Bs(n)&&n.q_.set("Unknown"))}function Mm(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(bt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Za(r).A_(t)}function bT(r,t){r.Q_.xe(t),Za(r).R_(t)}function Vm(r){r.Q_=new gI({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),Za(r).start(),r.q_.v_()}function xm(r){return Bs(r)&&!Za(r).n_()&&r.N_.size>0}function Bs(r){return St(r).L_.size===0}function ST(r){r.Q_=void 0}async function g1(r){r.q_.set("Online")}async function p1(r){r.N_.forEach((t,n)=>{Mm(r,t)})}async function y1(r,t){ST(r),xm(r)?(r.q_.M_(t),Vm(r)):r.q_.set("Unknown")}async function _1(r,t,n){if(r.q_.set("Online"),t instanceof cT&&t.state===2&&t.cause)try{await async function(l,c){const f=c.cause;for(const g of c.targetIds)l.N_.has(g)&&(await l.remoteSyncer.rejectListen(g,f),l.N_.delete(g),l.Q_.removeTarget(g))}(r,t)}catch(s){ot("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Pc(r,s)}else if(t instanceof vc?r.Q_.Ke(t):t instanceof uT?r.Q_.He(t):r.Q_.We(t),!n.isEqual(bt.min()))try{const s=await vT(r.localStore);n.compareTo(s)>=0&&await function(c,f){const g=c.Q_.rt(f);return g.targetChanges.forEach((p,_)=>{if(p.resumeToken.approximateByteSize()>0){const E=c.N_.get(_);E&&c.N_.set(_,E.withResumeToken(p.resumeToken,f))}}),g.targetMismatches.forEach((p,_)=>{const E=c.N_.get(p);if(!E)return;c.N_.set(p,E.withResumeToken(Ke.EMPTY_BYTE_STRING,E.snapshotVersion)),bT(c,p);const C=new xr(E.target,p,_,E.sequenceNumber);Mm(c,C)}),c.remoteSyncer.applyRemoteEvent(g)}(r,n)}catch(s){ot("RemoteStore","Failed to raise snapshot:",s),await Pc(r,s)}}async function Pc(r,t,n){if(!Ml(t))throw t;r.L_.add(1),await Ul(r),r.q_.set("Offline"),n||(n=()=>vT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ot("RemoteStore","Retrying IndexedDB access"),await n(),r.L_.delete(1),await eh(r)})}function wT(r,t){return t().catch(n=>Pc(r,n,t))}async function nh(r){const t=St(r),n=jr(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;v1(t);)try{const l=await n1(t.localStore,s);if(l===null){t.O_.length===0&&n.o_();break}s=l.batchId,T1(t,l)}catch(l){await Pc(t,l)}RT(t)&&IT(t)}function v1(r){return Bs(r)&&r.O_.length<10}function T1(r,t){r.O_.push(t);const n=jr(r);n.r_()&&n.V_&&n.m_(t.mutations)}function RT(r){return Bs(r)&&!jr(r).n_()&&r.O_.length>0}function IT(r){jr(r).start()}async function E1(r){jr(r).p_()}async function A1(r){const t=jr(r);for(const n of r.O_)t.m_(n.mutations)}async function b1(r,t,n){const s=r.O_.shift(),l=wm.from(s,t,n);await wT(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await nh(r)}async function S1(r,t){t&&jr(r).V_&&await async function(s,l){if(function(f){return fI(f)&&f!==Q.ABORTED}(l.code)){const c=s.O_.shift();jr(s).s_(),await wT(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l)),await nh(s)}}(r,t),RT(r)&&IT(r)}async function gv(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),ot("RemoteStore","RemoteStore received new credentials");const s=Bs(n);n.L_.add(3),await Ul(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await eh(n)}async function w1(r,t){const n=St(r);t?(n.L_.delete(2),await eh(n)):t||(n.L_.add(2),await Ul(n),n.q_.set("Unknown"))}function Za(r){return r.K_||(r.K_=function(n,s,l){const c=St(n);return c.w_(),new c1(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{Eo:g1.bind(null,r),Ro:p1.bind(null,r),mo:y1.bind(null,r),d_:_1.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),xm(r)?Vm(r):r.q_.set("Unknown")):(await r.K_.stop(),ST(r))})),r.K_}function jr(r){return r.U_||(r.U_=function(n,s,l){const c=St(n);return c.w_(),new h1(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:E1.bind(null,r),mo:S1.bind(null,r),f_:A1.bind(null,r),g_:b1.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await nh(r)):(await r.U_.stop(),r.O_.length>0&&(ot("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class Pm{constructor(t,n,s,l,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,l,c){const f=Date.now()+s,g=new Pm(t,n,f,l,c);return g.start(s),g}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(Q.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Um(r,t){if(Xi("AsyncQueue",`${t}: ${r}`),Ml(r))return new st(Q.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class ka{constructor(t){this.comparator=t?(n,s)=>t(n,s)||ht.comparator(n.key,s.key):(n,s)=>ht.comparator(n.key,s.key),this.keyedMap=fl(),this.sortedSet=new oe(this.comparator)}static emptySet(t){return new ka(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ka)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ka;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class pv{constructor(){this.W_=new oe(ht.comparator)}track(t){const n=t.doc.key,s=this.W_.get(n);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(n,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(n):t.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):Et():this.W_=this.W_.insert(n,t)}G_(){const t=[];return this.W_.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ka{constructor(t,n,s,l,c,f,g,p,_){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=_}static fromInitialDocuments(t,n,s,l,c){const f=[];return n.forEach(g=>{f.push({type:0,doc:g})}),new Ka(t,n,ka.emptySet(n),f,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==s[l].type||!n[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
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
 */class R1{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class I1{constructor(){this.queries=yv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const l=St(n),c=l.queries;l.queries=yv(),c.forEach((f,g)=>{for(const p of g.j_)p.onError(s)})})(this,new st(Q.ABORTED,"Firestore shutting down"))}}function yv(){return new $a(r=>$0(r),Xc)}async function CT(r,t){const n=St(r);let s=3;const l=t.query;let c=n.queries.get(l);c?!c.H_()&&t.J_()&&(s=2):(c=new R1,s=t.J_()?0:1);try{switch(s){case 0:c.z_=await n.onListen(l,!0);break;case 1:c.z_=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(f){const g=Um(f,`Initialization of query '${Va(t.query)}' failed`);return void t.onError(g)}n.queries.set(l,c),c.j_.push(t),t.Z_(n.onlineState),c.z_&&t.X_(c.z_)&&km(n)}async function DT(r,t){const n=St(r),s=t.query;let l=3;const c=n.queries.get(s);if(c){const f=c.j_.indexOf(t);f>=0&&(c.j_.splice(f,1),c.j_.length===0?l=t.J_()?0:1:!c.H_()&&t.J_()&&(l=2))}switch(l){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function C1(r,t){const n=St(r);let s=!1;for(const l of t){const c=l.query,f=n.queries.get(c);if(f){for(const g of f.j_)g.X_(l)&&(s=!0);f.z_=l}}s&&km(n)}function D1(r,t,n){const s=St(r),l=s.queries.get(t);if(l)for(const c of l.j_)c.onError(n);s.queries.delete(t)}function km(r){r.Y_.forEach(t=>{t.next()})}var tm,_v;(_v=tm||(tm={})).ea="default",_v.Cache="cache";class NT{constructor(t,n,s){this.query=t,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new Ka(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.na?this.ia(t)&&(this.ta.next(t),n=!0):this.sa(t,this.onlineState)&&(this.oa(t),n=!0),this.ra=t,n}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),n=!0),n}sa(t,n){if(!t.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(t){t=Ka.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==tm.Cache}}/**
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
 */class OT{constructor(t){this.key=t}}class MT{constructor(t){this.key=t}}class N1{constructor(t,n){this.query=t,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Vt(),this.mutatedKeys=Vt(),this.Aa=Z0(t),this.Ra=new ka(this.Aa)}get Va(){return this.Ta}ma(t,n){const s=n?n.fa:new pv,l=n?n.Ra:this.Ra;let c=n?n.mutatedKeys:this.mutatedKeys,f=l,g=!1;const p=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,_=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((E,C)=>{const V=l.get(E),j=$c(this.query,C)?C:null,X=!!V&&this.mutatedKeys.has(V.key),nt=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let Z=!1;V&&j?V.data.isEqual(j.data)?X!==nt&&(s.track({type:3,doc:j}),Z=!0):this.ga(V,j)||(s.track({type:2,doc:j}),Z=!0,(p&&this.Aa(j,p)>0||_&&this.Aa(j,_)<0)&&(g=!0)):!V&&j?(s.track({type:0,doc:j}),Z=!0):V&&!j&&(s.track({type:1,doc:V}),Z=!0,(p||_)&&(g=!0)),Z&&(j?(f=f.add(j),c=nt?c.add(E):c.delete(E)):(f=f.delete(E),c=c.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),c=c.delete(E.key),s.track({type:1,doc:E})}return{Ra:f,fa:s,ns:g,mutatedKeys:c}}ga(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,l){const c=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const f=t.fa.G_();f.sort((E,C)=>function(j,X){const nt=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Et()}};return nt(j)-nt(X)}(E.type,C.type)||this.Aa(E.doc,C.doc)),this.pa(s),l=l!=null&&l;const g=n&&!l?this.ya():[],p=this.da.size===0&&this.current&&!l?1:0,_=p!==this.Ea;return this.Ea=p,f.length!==0||_?{snapshot:new Ka(this.query,t.Ra,c,f,t.mutatedKeys,p===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:g}:{wa:g}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Vt(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return t.forEach(s=>{this.da.has(s)||n.push(new MT(s))}),this.da.forEach(s=>{t.has(s)||n.push(new OT(s))}),n}ba(t){this.Ta=t.Ts,this.da=Vt();const n=this.ma(t.documents);return this.applyChanges(n,!0)}Da(){return Ka.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class O1{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class M1{constructor(t){this.key=t,this.va=!1}}class V1{constructor(t,n,s,l,c,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.Ca={},this.Fa=new $a(g=>$0(g),Xc),this.Ma=new Map,this.xa=new Set,this.Oa=new oe(ht.comparator),this.Na=new Map,this.La=new Cm,this.Ba={},this.ka=new Map,this.qa=Ga.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function x1(r,t,n=!0){const s=LT(r);let l;const c=s.Fa.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.Da()):l=await VT(s,t,n,!0),l}async function P1(r,t){const n=LT(r);await VT(n,t,!0,!1)}async function VT(r,t,n,s){const l=await i1(r.localStore,fi(t)),c=l.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let g;return s&&(g=await U1(r,t,c,f==="current",l.resumeToken)),r.isPrimaryClient&&n&&AT(r.remoteStore,l),g}async function U1(r,t,n,s,l){r.Ka=(C,V,j)=>async function(nt,Z,vt,At){let dt=Z.view.ma(vt);dt.ns&&(dt=await fv(nt.localStore,Z.query,!1).then(({documents:O})=>Z.view.ma(O,dt)));const Nt=At&&At.targetChanges.get(Z.targetId),mt=At&&At.targetMismatches.get(Z.targetId)!=null,It=Z.view.applyChanges(dt,nt.isPrimaryClient,Nt,mt);return Tv(nt,Z.targetId,It.wa),It.snapshot}(r,C,V,j);const c=await fv(r.localStore,t,!0),f=new N1(t,c.Ts),g=f.ma(c.documents),p=Pl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",l),_=f.applyChanges(g,r.isPrimaryClient,p);Tv(r,n,_.wa);const E=new O1(t,n,f);return r.Fa.set(t,E),r.Ma.has(n)?r.Ma.get(n).push(t):r.Ma.set(n,[t]),_.snapshot}async function k1(r,t,n){const s=St(r),l=s.Fa.get(t),c=s.Ma.get(l.targetId);if(c.length>1)return s.Ma.set(l.targetId,c.filter(f=>!Xc(f,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await Jd(s.localStore,l.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(l.targetId),n&&Om(s.remoteStore,l.targetId),em(s,l.targetId)}).catch(Ol)):(em(s,l.targetId),await Jd(s.localStore,l.targetId,!0))}async function L1(r,t){const n=St(r),s=n.Fa.get(t),l=n.Ma.get(s.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Om(n.remoteStore,s.targetId))}async function z1(r,t,n){const s=K1(r);try{const l=await function(f,g){const p=St(f),_=De.now(),E=g.reduce((j,X)=>j.add(X.key),Vt());let C,V;return p.persistence.runTransaction("Locally write mutations","readwrite",j=>{let X=$i(),nt=Vt();return p.cs.getEntries(j,E).next(Z=>{X=Z,X.forEach((vt,At)=>{At.isValidDocument()||(nt=nt.add(vt))})}).next(()=>p.localDocuments.getOverlayedDocuments(j,X)).next(Z=>{C=Z;const vt=[];for(const At of g){const dt=oI(At,C.get(At.key).overlayedDocument);dt!=null&&vt.push(new Gr(At.key,dt,j0(dt.value.mapValue),kn.exists(!0)))}return p.mutationQueue.addMutationBatch(j,_,vt,g)}).next(Z=>{V=Z;const vt=Z.applyToLocalDocumentSet(C,nt);return p.documentOverlayCache.saveOverlays(j,Z.batchId,vt)})}).then(()=>({batchId:V.batchId,changes:J0(C)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),function(f,g,p){let _=f.Ba[f.currentUser.toKey()];_||(_=new oe(qt)),_=_.insert(g,p),f.Ba[f.currentUser.toKey()]=_}(s,l.batchId,n),await kl(s,l.changes),await nh(s.remoteStore)}catch(l){const c=Um(l,"Failed to persist write");n.reject(c)}}async function xT(r,t){const n=St(r);try{const s=await t1(n.localStore,t);t.targetChanges.forEach((l,c)=>{const f=n.Na.get(c);f&&(Yt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1),l.addedDocuments.size>0?f.va=!0:l.modifiedDocuments.size>0?Yt(f.va):l.removedDocuments.size>0&&(Yt(f.va),f.va=!1))}),await kl(n,s,t)}catch(s){await Ol(s)}}function vv(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const l=[];s.Fa.forEach((c,f)=>{const g=f.view.Z_(t);g.snapshot&&l.push(g.snapshot)}),function(f,g){const p=St(f);p.onlineState=g;let _=!1;p.queries.forEach((E,C)=>{for(const V of C.j_)V.Z_(g)&&(_=!0)}),_&&km(p)}(s.eventManager,t),l.length&&s.Ca.d_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function B1(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const l=s.Na.get(t),c=l&&l.key;if(c){let f=new oe(ht.comparator);f=f.insert(c,Je.newNoDocument(c,bt.min()));const g=Vt().add(c),p=new Jc(bt.min(),new Map,new oe(qt),f,g);await xT(s,p),s.Oa=s.Oa.remove(c),s.Na.delete(t),Lm(s)}else await Jd(s.localStore,t,!1).then(()=>em(s,t,n)).catch(Ol)}async function q1(r,t){const n=St(r),s=t.batch.batchId;try{const l=await JI(n.localStore,t);UT(n,s,null),PT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await kl(n,l)}catch(l){await Ol(l)}}async function j1(r,t,n){const s=St(r);try{const l=await function(f,g){const p=St(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let E;return p.mutationQueue.lookupMutationBatch(_,g).next(C=>(Yt(C!==null),E=C.keys(),p.mutationQueue.removeMutationBatch(_,C))).next(()=>p.mutationQueue.performConsistencyCheck(_)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(_,E,g)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E)).next(()=>p.localDocuments.getDocuments(_,E))})}(s.localStore,t);UT(s,t,n),PT(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await kl(s,l)}catch(l){await Ol(l)}}function PT(r,t){(r.ka.get(t)||[]).forEach(n=>{n.resolve()}),r.ka.delete(t)}function UT(r,t,n){const s=St(r);let l=s.Ba[s.currentUser.toKey()];if(l){const c=l.get(t);c&&(n?c.reject(n):c.resolve(),l=l.remove(t)),s.Ba[s.currentUser.toKey()]=l}}function em(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Ma.get(t))r.Fa.delete(s),n&&r.Ca.$a(s,n);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(s=>{r.La.containsKey(s)||kT(r,s)})}function kT(r,t){r.xa.delete(t.path.canonicalString());const n=r.Oa.get(t);n!==null&&(Om(r.remoteStore,n),r.Oa=r.Oa.remove(t),r.Na.delete(n),Lm(r))}function Tv(r,t,n){for(const s of n)s instanceof OT?(r.La.addReference(s.key,t),H1(r,s)):s instanceof MT?(ot("SyncEngine","Document no longer in limbo: "+s.key),r.La.removeReference(s.key,t),r.La.containsKey(s.key)||kT(r,s.key)):Et()}function H1(r,t){const n=t.key,s=n.path.canonicalString();r.Oa.get(n)||r.xa.has(s)||(ot("SyncEngine","New document in limbo: "+n),r.xa.add(s),Lm(r))}function Lm(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const n=new ht(ne.fromString(t)),s=r.qa.next();r.Na.set(s,new M1(n)),r.Oa=r.Oa.insert(n,s),AT(r.remoteStore,new xr(fi(Yc(n.path)),s,"TargetPurposeLimboResolution",ym.oe))}}async function kl(r,t,n){const s=St(r),l=[],c=[],f=[];s.Fa.isEmpty()||(s.Fa.forEach((g,p)=>{f.push(s.Ka(p,t,n).then(_=>{var E;if((_||n)&&s.isPrimaryClient){const C=_?!_.fromCache:(E=n?.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,C?"current":"not-current")}if(_){l.push(_);const C=Nm.Wi(p.targetId,_);c.push(C)}}))}),await Promise.all(f),s.Ca.d_(l),await async function(p,_){const E=St(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>$.forEach(_,V=>$.forEach(V.$i,j=>E.persistence.referenceDelegate.addReference(C,V.targetId,j)).next(()=>$.forEach(V.Ui,j=>E.persistence.referenceDelegate.removeReference(C,V.targetId,j)))))}catch(C){if(!Ml(C))throw C;ot("LocalStore","Failed to update sequence numbers: "+C)}for(const C of _){const V=C.targetId;if(!C.fromCache){const j=E.os.get(V),X=j.snapshotVersion,nt=j.withLastLimboFreeSnapshotVersion(X);E.os=E.os.insert(V,nt)}}}(s.localStore,c))}async function F1(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){ot("SyncEngine","User change. New user:",t.toKey());const s=await _T(n.localStore,t);n.currentUser=t,function(c,f){c.ka.forEach(g=>{g.forEach(p=>{p.reject(new st(Q.CANCELLED,f))})}),c.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await kl(n,s.hs)}}function G1(r,t){const n=St(r),s=n.Na.get(t);if(s&&s.va)return Vt().add(s.key);{let l=Vt();const c=n.Ma.get(t);if(!c)return l;for(const f of c){const g=n.Fa.get(f);l=l.unionWith(g.view.Va)}return l}}function LT(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=xT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=G1.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=B1.bind(null,t),t.Ca.d_=C1.bind(null,t.eventManager),t.Ca.$a=D1.bind(null,t.eventManager),t}function K1(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=q1.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=j1.bind(null,t),t}class Uc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=th(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,n){return null}Ha(t,n){return null}za(t){return WI(this.persistence,new $I,t.initialUser,this.serializer)}Ga(t){return new QI(Dm.Zr,this.serializer)}Wa(t){return new s1}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uc.provider={build:()=>new Uc};class nm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=F1.bind(null,this.syncEngine),await w1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new I1}()}createDatastore(t){const n=th(t.databaseInfo.databaseId),s=function(c){return new u1(c)}(t.databaseInfo);return function(c,f,g,p){return new f1(c,f,g,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,l,c,f,g){return new m1(s,l,c,f,g)}(this.localStore,this.datastore,t.asyncQueue,n=>vv(this.syncEngine,n,0),function(){return mv.D()?new mv:new a1}())}createSyncEngine(t,n){return function(l,c,f,g,p,_,E){const C=new V1(l,c,f,g,p,_);return E&&(C.Qa=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(l){const c=St(l);ot("RemoteStore","RemoteStore shutting down."),c.L_.add(5),await Ul(c),c.k_.shutdown(),c.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}nm.provider={build:()=>new nm};/**
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
 */class zT{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Xi("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Q1{constructor(t,n,s,l,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=l,this.user=We.UNAUTHENTICATED,this.clientId=z0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{ot("FirestoreClient","Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ot("FirestoreClient","Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Um(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Od(r,t){r.asyncQueue.verifyOperationInProgress(),ot("FirestoreClient","Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async l=>{s.isEqual(l)||(await _T(t.localStore,l),s=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Ev(r,t){r.asyncQueue.verifyOperationInProgress();const n=await Y1(r);ot("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>gv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,l)=>gv(t.remoteStore,l)),r._onlineComponents=t}async function Y1(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ot("FirestoreClient","Using user provided OfflineComponentProvider");try{await Od(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(l){return l.name==="FirebaseError"?l.code===Q.FAILED_PRECONDITION||l.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(n))throw n;qa("Error using user provided cache. Falling back to memory cache: "+n),await Od(r,new Uc)}}else ot("FirestoreClient","Using default OfflineComponentProvider"),await Od(r,new Uc);return r._offlineComponents}async function BT(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ot("FirestoreClient","Using user provided OnlineComponentProvider"),await Ev(r,r._uninitializedComponentsProvider._online)):(ot("FirestoreClient","Using default OnlineComponentProvider"),await Ev(r,new nm))),r._onlineComponents}function X1(r){return BT(r).then(t=>t.syncEngine)}async function im(r){const t=await BT(r),n=t.eventManager;return n.onListen=x1.bind(null,t.syncEngine),n.onUnlisten=k1.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=P1.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=L1.bind(null,t.syncEngine),n}function $1(r,t,n={}){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,g,p,_){const E=new zT({next:V=>{E.Za(),f.enqueueAndForget(()=>DT(c,C));const j=V.docs.has(g);!j&&V.fromCache?_.reject(new st(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&V.fromCache&&p&&p.source==="server"?_.reject(new st(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(V)},error:V=>_.reject(V)}),C=new NT(Yc(g.path),E,{includeMetadataChanges:!0,_a:!0});return CT(c,C)}(await im(r),r.asyncQueue,t,n,s)),s.promise}/**
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
 */function qT(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const Av=new Map;/**
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
 */function jT(r,t,n){if(!n)throw new st(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Z1(r,t,n,s){if(t===!0&&s===!0)throw new st(Q.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function bv(r){if(!ht.isDocumentKey(r))throw new st(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Sv(r){if(ht.isDocumentKey(r))throw new st(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ih(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Et()}function Ln(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new st(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ih(r);throw new st(Q.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */class wv{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new st(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new st(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Z1("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qT((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new st(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new st(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new st(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rh{constructor(t,n,s,l){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new st(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wv(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new pR;switch(s.type){case"firstParty":return new TR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new st(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Av.get(n);s&&(ot("ComponentProvider","Removing Datastore"),Av.delete(n),s.terminate())}(this),Promise.resolve()}}function W1(r,t,n,s={}){var l;const c=(r=Ln(r,rh))._getSettings(),f=`${t}:${n}`;if(c.host!=="firestore.googleapis.com"&&c.host!==f&&qa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},c),{host:f,ssl:!1})),s.mockUserToken){let g,p;if(typeof s.mockUserToken=="string")g=s.mockUserToken,p=We.MOCK_USER;else{g=Sb(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new st(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new We(_)}r._authCredentials=new yR(new L0(g,p))}}/**
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
 */class Wa{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Wa(this.firestore,t,this._query)}}class tn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tn(this.firestore,t,this._key)}}class Lr extends Wa{constructor(t,n,s){super(t,n,Yc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tn(this.firestore,null,new ht(t))}withConverter(t){return new Lr(this.firestore,t,this._path)}}function Md(r,t,...n){if(r=Ne(r),jT("collection","path",t),r instanceof rh){const s=ne.fromString(t,...n);return Sv(s),new Lr(r,null,s)}{if(!(r instanceof tn||r instanceof Lr))throw new st(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ne.fromString(t,...n));return Sv(s),new Lr(r.firestore,null,s)}}function Is(r,t,...n){if(r=Ne(r),arguments.length===1&&(t=z0.newId()),jT("doc","path",t),r instanceof rh){const s=ne.fromString(t,...n);return bv(s),new tn(r,null,new ht(s))}{if(!(r instanceof tn||r instanceof Lr))throw new st(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ne.fromString(t,...n));return bv(s),new tn(r.firestore,r instanceof Lr?r.converter:null,new ht(s))}}/**
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
 */class Rv{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new TT(this,"async_queue_retry"),this.Vu=()=>{const s=Nd();s&&ot("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const n=Nd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new kr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Ml(t))throw t;ot("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const l=function(f){let g=f.message||"";return f.stack&&(g=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),g}(s);throw Xi("INTERNAL UNHANDLED ERROR: ",l),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(t,n,s){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const l=Pm.createAndSchedule(this,t,n,s,c=>this.yu(c));return this.Tu.push(l),l}fu(){this.Eu&&Et()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}function Iv(r){return function(n,s){if(typeof n!="object"||n===null)return!1;const l=n;for(const c of s)if(c in l&&typeof l[c]=="function")return!0;return!1}(r,["next","error","complete"])}class Hr extends rh{constructor(t,n,s,l){super(t,n,s,l),this.type="firestore",this._queue=new Rv,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Rv(t),this._firestoreClient=void 0,await t}}}function J1(r,t){const n=typeof r=="object"?r:cm(),s=typeof r=="string"?r:"(default)",l=Ls(n,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=Ab("firestore");c&&W1(l,...c)}return l}function zm(r){if(r._terminated)throw new st(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||tC(r),r._firestoreClient}function tC(r){var t,n,s;const l=r._freezeSettings(),c=function(g,p,_,E){return new VR(g,p,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,qT(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((n=l.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=l.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new Q1(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(g){const p=g?._online.build();return{_offline:g?._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class Qa{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qa(Ke.fromBase64String(t))}catch(n){throw new st(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Qa(Ke.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class sh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new st(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Bm{constructor(t){this._methodName=t}}/**
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
 */class qm{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new st(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new st(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return qt(this._lat,t._lat)||qt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class jm{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0}(this._values,t._values)}}/**
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
 */const eC=/^__.*__$/;class nC{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Gr(t,this.data,this.fieldMask,n,this.fieldTransforms):new xl(t,this.data,n,this.fieldTransforms)}}class HT{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Gr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function FT(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Et()}}class Hm{constructor(t,n,s,l,c,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.vu(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Hm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),l=this.Fu({path:s,xu:!1});return l.Ou(t),l}Nu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),l=this.Fu({path:s,xu:!1});return l.vu(),l}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return kc(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(FT(this.Cu)&&eC.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class iC{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||th(t)}Qu(t,n,s,l=!1){return new Hm({Cu:t,methodName:n,qu:s,path:Fe.emptyPath(),xu:!1,ku:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ah(r){const t=r._freezeSettings(),n=th(r._databaseId);return new iC(r._databaseId,!!t.ignoreUndefinedProperties,n)}function GT(r,t,n,s,l,c={}){const f=r.Qu(c.merge||c.mergeFields?2:0,t,n,l);Fm("Data must be an object, but it was:",f,s);const g=KT(s,f);let p,_;if(c.merge)p=new An(f.fieldMask),_=f.fieldTransforms;else if(c.mergeFields){const E=[];for(const C of c.mergeFields){const V=rm(t,C,n);if(!f.contains(V))throw new st(Q.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);YT(E,V)||E.push(V)}p=new An(E),_=f.fieldTransforms.filter(C=>p.covers(C.field))}else p=null,_=f.fieldTransforms;return new nC(new hn(g),p,_)}class oh extends Bm{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof oh}}function rC(r,t,n,s){const l=r.Qu(1,t,n);Fm("Data must be an object, but it was:",l,s);const c=[],f=hn.empty();zs(s,(p,_)=>{const E=Gm(t,p,n);_=Ne(_);const C=l.Nu(E);if(_ instanceof oh)c.push(E);else{const V=Ll(_,C);V!=null&&(c.push(E),f.set(E,V))}});const g=new An(c);return new HT(f,g,l.fieldTransforms)}function sC(r,t,n,s,l,c){const f=r.Qu(1,t,n),g=[rm(t,s,n)],p=[l];if(c.length%2!=0)throw new st(Q.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let V=0;V<c.length;V+=2)g.push(rm(t,c[V])),p.push(c[V+1]);const _=[],E=hn.empty();for(let V=g.length-1;V>=0;--V)if(!YT(_,g[V])){const j=g[V];let X=p[V];X=Ne(X);const nt=f.Nu(j);if(X instanceof oh)_.push(j);else{const Z=Ll(X,nt);Z!=null&&(_.push(j),E.set(j,Z))}}const C=new An(_);return new HT(E,C,f.fieldTransforms)}function aC(r,t,n,s=!1){return Ll(n,r.Qu(s?4:3,t))}function Ll(r,t){if(QT(r=Ne(r)))return Fm("Unsupported field value:",t,r),KT(r,t);if(r instanceof Bm)return function(s,l){if(!FT(l.Cu))throw l.Bu(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Bu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,l){const c=[];let f=0;for(const g of s){let p=Ll(g,l.Lu(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,l){if((s=Ne(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return eI(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=De.fromDate(s);return{timestampValue:xc(l.serializer,c)}}if(s instanceof De){const c=new De(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xc(l.serializer,c)}}if(s instanceof qm)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qa)return{bytesValue:hT(l.serializer,s._byteString)};if(s instanceof tn){const c=l.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw l.Bu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Im(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof jm)return function(f,g){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:f.toArray().map(p=>{if(typeof p!="number")throw g.Bu("VectorValues must only contain numeric values.");return bm(g.serializer,p)})}}}}}}(s,l);throw l.Bu(`Unsupported field value: ${ih(s)}`)}(r,t)}function KT(r,t){const n={};return B0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zs(r,(s,l)=>{const c=Ll(l,t.Mu(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function QT(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof De||r instanceof qm||r instanceof Qa||r instanceof tn||r instanceof Bm||r instanceof jm)}function Fm(r,t,n){if(!QT(n)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(n)){const s=ih(n);throw s==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+s)}}function rm(r,t,n){if((t=Ne(t))instanceof sh)return t._internalPath;if(typeof t=="string")return Gm(r,t);throw kc("Field path arguments must be of type string or ",r,!1,void 0,n)}const oC=new RegExp("[~\\*/\\[\\]]");function Gm(r,t,n){if(t.search(oC)>=0)throw kc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new sh(...t.split("."))._internalPath}catch{throw kc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function kc(r,t,n,s,l){const c=s&&!s.isEmpty(),f=l!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${l}`),p+=")"),new st(Q.INVALID_ARGUMENT,g+r+p)}function YT(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */class XT{constructor(t,n,s,l,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field($T("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lC extends XT{data(){return super.data()}}function $T(r,t){return typeof t=="string"?Gm(r,t):t instanceof sh?t._internalPath:t._delegate._internalPath}/**
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
 */function uC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new st(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Km{}class cC extends Km{}function hC(r,t,...n){let s=[];t instanceof Km&&s.push(t),s=s.concat(n),function(c){const f=c.filter(p=>p instanceof Ym).length,g=c.filter(p=>p instanceof Qm).length;if(f>1||f>0&&g>0)throw new st(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const l of s)r=l._apply(r);return r}class Qm extends cC{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Qm(t,n,s)}_apply(t){const n=this._parse(t);return ZT(t._query,n),new Wa(t.firestore,t.converter,Qd(t._query,n))}_parse(t){const n=ah(t.firestore);return function(c,f,g,p,_,E,C){let V;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new st(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){Dv(C,E);const j=[];for(const X of C)j.push(Cv(p,c,X));V={arrayValue:{values:j}}}else V=Cv(p,c,C)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||Dv(C,E),V=aC(g,f,C,E==="in"||E==="not-in");return Ee.create(_,E,V)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Ym extends Km{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ym(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Qn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(l,c){let f=l;const g=c.getFlattenedFilters();for(const p of g)ZT(f,p),f=Qd(f,p)}(t._query,n),new Wa(t.firestore,t.converter,Qd(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Cv(r,t,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new st(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!X0(t)&&n.indexOf("/")!==-1)throw new st(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(ne.fromString(n));if(!ht.isDocumentKey(s))throw new st(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return X_(r,new ht(s))}if(n instanceof tn)return X_(r,n._key);throw new st(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ih(n)}.`)}function Dv(r,t){if(!Array.isArray(r)||r.length===0)throw new st(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ZT(r,t){const n=function(l,c){for(const f of l)for(const g of f.getFlattenedFilters())if(c.indexOf(g.op)>=0)return g.op;return null}(r.filters,function(l){switch(l){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new st(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new st(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class fC{convertValue(t,n="none"){switch(Ps(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ge(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(xs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Et()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return zs(t,(l,c)=>{s[l]=this.convertValue(c,n)}),s}convertVectorValue(t){var n,s,l;const c=(l=(s=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||l===void 0?void 0:l.map(f=>ge(f.doubleValue));return new jm(c)}convertGeoPoint(t){return new qm(ge(t.latitude),ge(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=vm(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Sl(t));default:return null}}convertTimestamp(t){const n=qr(t);return new De(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ne.fromString(t);Yt(yT(s));const l=new wl(s.get(1),s.get(3)),c=new ht(s.popFirst(5));return l.isEqual(n)||Xi(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
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
 */function WT(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
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
 */class ml{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class JT extends XT{constructor(t,n,s,l,c,f){super(t,n,s,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field($T("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Tc extends JT{data(t={}){return super.data(t)}}class dC{constructor(t,n,s,l){this._firestore=t,this._userDataWriter=n,this._snapshot=l,this.metadata=new ml(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Tc(this._firestore,this._userDataWriter,s.key,s,new ml(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new st(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map(g=>{const p=new Tc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new ml(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(g=>c||g.type!==3).map(g=>{const p=new Tc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new ml(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);let _=-1,E=-1;return g.type!==0&&(_=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),E=f.indexOf(g.doc.key)),{type:mC(g.type),doc:p,oldIndex:_,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Et()}}/**
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
 */function Nv(r){r=Ln(r,tn);const t=Ln(r.firestore,Hr);return $1(zm(t),r._key).then(n=>eE(t,r,n))}class tE extends fC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qa(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new tn(this.firestore,null,n)}}function gC(r,t,n){r=Ln(r,tn);const s=Ln(r.firestore,Hr),l=WT(r.converter,t);return lh(s,[GT(ah(s),"setDoc",r._key,l,r.converter!==null,n).toMutation(r._key,kn.none())])}function Ov(r,t,n,...s){r=Ln(r,tn);const l=Ln(r.firestore,Hr),c=ah(l);let f;return f=typeof(t=Ne(t))=="string"||t instanceof sh?sC(c,"updateDoc",r._key,t,n,s):rC(c,"updateDoc",r._key,t),lh(l,[f.toMutation(r._key,kn.exists(!0))])}function pC(r){return lh(Ln(r.firestore,Hr),[new Sm(r._key,kn.none())])}function yC(r,t){const n=Ln(r.firestore,Hr),s=Is(r),l=WT(r.converter,t);return lh(n,[GT(ah(r.firestore),"addDoc",s._key,l,r.converter!==null,{}).toMutation(s._key,kn.exists(!1))]).then(()=>s)}function _C(r,...t){var n,s,l;r=Ne(r);let c={includeMetadataChanges:!1,source:"default"},f=0;typeof t[f]!="object"||Iv(t[f])||(c=t[f],f++);const g={includeMetadataChanges:c.includeMetadataChanges,source:c.source};if(Iv(t[f])){const C=t[f];t[f]=(n=C.next)===null||n===void 0?void 0:n.bind(C),t[f+1]=(s=C.error)===null||s===void 0?void 0:s.bind(C),t[f+2]=(l=C.complete)===null||l===void 0?void 0:l.bind(C)}let p,_,E;if(r instanceof tn)_=Ln(r.firestore,Hr),E=Yc(r._key.path),p={next:C=>{t[f]&&t[f](eE(_,r,C))},error:t[f+1],complete:t[f+2]};else{const C=Ln(r,Wa);_=Ln(C.firestore,Hr),E=C._query;const V=new tE(_);p={next:j=>{t[f]&&t[f](new dC(_,V,C,j))},error:t[f+1],complete:t[f+2]},uC(r._query)}return function(V,j,X,nt){const Z=new zT(nt),vt=new NT(j,Z,X);return V.asyncQueue.enqueueAndForget(async()=>CT(await im(V),vt)),()=>{Z.Za(),V.asyncQueue.enqueueAndForget(async()=>DT(await im(V),vt))}}(zm(_),E,g,p)}function lh(r,t){return function(s,l){const c=new kr;return s.asyncQueue.enqueueAndForget(async()=>z1(await X1(s),l,c)),c.promise}(zm(r),t)}function eE(r,t,n){const s=n.docs.get(t._key),l=new tE(r);return new JT(r,l,t._key,s,new ml(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(l){Xa=l})(Ya),pi(new Kn("firestore",(s,{instanceIdentifier:l,options:c})=>{const f=s.getProvider("app").getImmediate(),g=new Hr(new _R(s.getProvider("auth-internal")),new AR(s.getProvider("app-check-internal")),function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new st(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wl(_.options.projectId,E)}(f,l),f);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),Un(F_,"4.7.3",t),Un(F_,"4.7.3","esm2017")})();function Xm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)t.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function nE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vC=nE,iE=new ks("auth","Firebase",nE());/**
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
 */const Lc=new Fc("@firebase/auth");function TC(r,...t){Lc.logLevel<=xt.WARN&&Lc.warn(`Auth (${Ya}): ${r}`,...t)}function Ec(r,...t){Lc.logLevel<=xt.ERROR&&Lc.error(`Auth (${Ya}): ${r}`,...t)}/**
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
 */function Zi(r,...t){throw $m(r,...t)}function mi(r,...t){return $m(r,...t)}function rE(r,t,n){const s=Object.assign(Object.assign({},vC()),{[t]:n});return new ks("auth","Firebase",s).create(t,{appName:r.name})}function zr(r){return rE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $m(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return iE.create(r,...t)}function Tt(r,t,...n){if(!r)throw $m(t,...n)}function Gi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Ec(t),new Error(t)}function Wi(r,t){r||Gi(t)}/**
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
 */function sm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function EC(){return Mv()==="http:"||Mv()==="https:"}function Mv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function AC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EC()||e0()||"connection"in navigator)?navigator.onLine:!0}function bC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class zl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Wi(n>t,"Short delay should be less than long delay!"),this.isMobile=wb()||Cb()}get(){return AC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zm(r,t){Wi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class sE{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wC=new zl(3e4,6e4);function uh(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Ja(r,t,n,s,l={}){return aE(r,l,async()=>{let c={},f={};s&&(t==="GET"?f=s:c={body:JSON.stringify(s)});const g=Nl(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:t,headers:p},c);return Ib()||(_.referrerPolicy="no-referrer"),sE.fetch()(lE(r,r.config.apiHost,n,g),_)})}async function aE(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},SC),t);try{const l=new RC(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw gc(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const g=c.ok?f.errorMessage:f.error.message,[p,_]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw gc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw gc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw gc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw rE(r,E,_);Zi(r,E)}}catch(l){if(l instanceof Yn)throw l;Zi(r,"network-request-failed",{message:String(l)})}}async function oE(r,t,n,s,l={}){const c=await Ja(r,t,n,s,l);return"mfaPendingCredential"in c&&Zi(r,"multi-factor-auth-required",{_serverResponse:c}),c}function lE(r,t,n,s){const l=`${t}${n}?${s}`;return r.config.emulator?Zm(r.config,l):`${r.config.apiScheme}://${l}`}class RC{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(mi(this.auth,"network-request-failed")),wC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=mi(r,t,s);return l.customData._tokenResponse=n,l}/**
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
 */async function IC(r,t){return Ja(r,"POST","/v1/accounts:delete",t)}async function uE(r,t){return Ja(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Tl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function CC(r,t=!1){const n=Ne(r),s=await n.getIdToken(t),l=Wm(s);Tt(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,f=c?.sign_in_provider;return{claims:l,token:s,authTime:Tl(Vd(l.auth_time)),issuedAtTime:Tl(Vd(l.iat)),expirationTime:Tl(Vd(l.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Vd(r){return Number(r)*1e3}function Wm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Ec("JWT malformed, contained fewer than 3 sections"),null;try{const l=Zv(n);return l?JSON.parse(l):(Ec("Failed to decode base64 JWT payload"),null)}catch(l){return Ec("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Vv(r){const t=Wm(r);return Tt(t,"internal-error"),Tt(typeof t.exp<"u","internal-error"),Tt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Dl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Yn&&DC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function DC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class NC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class am{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tl(this.lastLoginAt),this.creationTime=Tl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zc(r){var t;const n=r.auth,s=await r.getIdToken(),l=await Dl(r,uE(n,{idToken:s}));Tt(l?.users.length,n,"internal-error");const c=l.users[0];r._notifyReloadListener(c);const f=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?cE(c.providerUserInfo):[],g=MC(r.providerData,f),p=r.isAnonymous,_=!(r.email&&c.passwordHash)&&!g?.length,E=p?_:!1,C={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new am(c.createdAt,c.lastLoginAt),isAnonymous:E};Object.assign(r,C)}async function OC(r){const t=Ne(r);await zc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function MC(r,t){return[...r.filter(s=>!t.some(l=>l.providerId===s.providerId)),...t]}function cE(r){return r.map(t=>{var{providerId:n}=t,s=Xm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function VC(r,t){const n=await aE(r,{},async()=>{const s=Nl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,f=lE(r,l,"/v1/token",`key=${c}`),g=await r._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",sE.fetch()(f,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xC(r,t){return Ja(r,"POST","/v2/accounts:revokeToken",uh(r,t))}/**
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
 */class La{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Tt(t.idToken,"internal-error"),Tt(typeof t.idToken<"u","internal-error"),Tt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Vv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Tt(t.length!==0,"internal-error");const n=Vv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Tt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await VC(t,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,f=new La;return s&&(Tt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),l&&(Tt(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),c&&(Tt(typeof c=="number","internal-error",{appName:t}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new La,this.toJSON())}_performRefresh(){return Gi("not implemented")}}/**
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
 */function Ir(r,t){Tt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Ki{constructor(t){var{uid:n,auth:s,stsTokenManager:l}=t,c=Xm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new am(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const n=await Dl(this,this.stsTokenManager.getToken(this.auth,t));return Tt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return CC(this,t)}reload(){return OC(this)}_assign(t){this!==t&&(Tt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ki(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await zc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fi(this.auth.app))return Promise.reject(zr(this.auth));const t=await this.getIdToken();return await Dl(this,IC(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,l,c,f,g,p,_,E;const C=(s=n.displayName)!==null&&s!==void 0?s:void 0,V=(l=n.email)!==null&&l!==void 0?l:void 0,j=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,X=(f=n.photoURL)!==null&&f!==void 0?f:void 0,nt=(g=n.tenantId)!==null&&g!==void 0?g:void 0,Z=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,vt=(_=n.createdAt)!==null&&_!==void 0?_:void 0,At=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:dt,emailVerified:Nt,isAnonymous:mt,providerData:It,stsTokenManager:O}=n;Tt(dt&&O,t,"internal-error");const b=La.fromJSON(this.name,O);Tt(typeof dt=="string",t,"internal-error"),Ir(C,t.name),Ir(V,t.name),Tt(typeof Nt=="boolean",t,"internal-error"),Tt(typeof mt=="boolean",t,"internal-error"),Ir(j,t.name),Ir(X,t.name),Ir(nt,t.name),Ir(Z,t.name),Ir(vt,t.name),Ir(At,t.name);const w=new Ki({uid:dt,auth:t,email:V,emailVerified:Nt,displayName:C,isAnonymous:mt,photoURL:X,phoneNumber:j,tenantId:nt,stsTokenManager:b,createdAt:vt,lastLoginAt:At});return It&&Array.isArray(It)&&(w.providerData=It.map(N=>Object.assign({},N))),Z&&(w._redirectEventId=Z),w}static async _fromIdTokenResponse(t,n,s=!1){const l=new La;l.updateFromServerResponse(n);const c=new Ki({uid:n.localId,auth:t,stsTokenManager:l,isAnonymous:s});return await zc(c),c}static async _fromGetAccountInfoResponse(t,n,s){const l=n.users[0];Tt(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?cE(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!c?.length,g=new La;g.updateFromIdToken(s);const p=new Ki({uid:l.localId,auth:t,stsTokenManager:g,isAnonymous:f}),_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new am(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(p,_),p}}/**
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
 */const xv=new Map;function Qi(r){Wi(r instanceof Function,"Expected a class definition");let t=xv.get(r);return t?(Wi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,xv.set(r,t),t)}/**
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
 */class hE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}hE.type="NONE";const Pv=hE;/**
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
 */function Ac(r,t,n){return`firebase:${r}:${t}:${n}`}class za{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Ac(this.userKey,l.apiKey,c),this.fullPersistenceKey=Ac("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ki._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new za(Qi(Pv),t,s);const l=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=l[0]||Qi(Pv);const f=Ac(s,t.config.apiKey,t.name);let g=null;for(const _ of n)try{const E=await _._get(f);if(E){const C=Ki._fromJSON(t,E);_!==c&&(g=C),c=_;break}}catch{}const p=l.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new za(c,t,s):(c=p[0],g&&await c._set(f,g.toJSON()),await Promise.all(n.map(async _=>{if(_!==c)try{await _._remove(f)}catch{}})),new za(c,t,s))}}/**
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
 */function Uv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(gE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yE(t))return"Blackberry";if(_E(t))return"Webos";if(dE(t))return"Safari";if((t.includes("chrome/")||mE(t))&&!t.includes("edge/"))return"Chrome";if(pE(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function fE(r=en()){return/firefox\//i.test(r)}function dE(r=en()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mE(r=en()){return/crios\//i.test(r)}function gE(r=en()){return/iemobile/i.test(r)}function pE(r=en()){return/android/i.test(r)}function yE(r=en()){return/blackberry/i.test(r)}function _E(r=en()){return/webos/i.test(r)}function Jm(r=en()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function PC(r=en()){var t;return Jm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function UC(){return Db()&&document.documentMode===10}function vE(r=en()){return Jm(r)||pE(r)||_E(r)||yE(r)||/windows phone/i.test(r)||gE(r)}/**
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
 */function TE(r,t=[]){let n;switch(r){case"Browser":n=Uv(en());break;case"Worker":n=`${Uv(en())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ya}/${s}`}/**
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
 */class kC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((f,g)=>{try{const p=t(c);f(p)}catch(p){g(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function LC(r,t={}){return Ja(r,"GET","/v2/passwordPolicy",uh(r,t))}/**
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
 */const zC=6;class BC{constructor(t){var n,s,l,c;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:zC,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,l,c,f,g;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsUppercaseLetter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(g=p.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),l&&(n.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<t.length;l++)s=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class qC{constructor(t,n,s,l){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kv(this),this.idTokenSubscription=new kv(this),this.beforeStateQueue=new kC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qi(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await za.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await uE(this,{idToken:t}),s=await Ki._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Fi(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=l?._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===g)&&p?.user&&(l=p.user,c=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(l)}catch(f){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await zc(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=bC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Fi(this.app))return Promise.reject(zr(this));const n=t?Ne(t):null;return n&&Tt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Tt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Fi(this.app)?Promise.reject(zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Fi(this.app)?Promise.reject(zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await LC(this),n=new BC(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ks("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await xC(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qi(t)||this._popupRedirectResolver;Tt(n,this,"argument-error"),this.redirectPersistenceManager=await za.create(this,[Qi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(Tt(g,this,"internal-error"),g.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,l);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=TE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&TC(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ch(r){return Ne(r)}class kv{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ub(n=>this.observer=n)}get next(){return Tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jC(r){tg=r}function HC(r){return tg.loadJS(r)}function FC(){return tg.gapiScript}function GC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function KC(r,t){const n=Ls(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(El(c,t??{}))return l;Zi(l,"already-initialized")}return n.initialize({options:t})}function QC(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Qi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function YC(r,t,n){const s=ch(r);Tt(s._canInitEmulator,s,"emulator-config-failed"),Tt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const l=!1,c=EE(t),{host:f,port:g}=XC(t),p=g===null?"":`:${g}`;s.config.emulator={url:`${c}//${f}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:f,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})}),$C()}function EE(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function XC(r){const t=EE(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:Lv(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:Lv(f)}}}function Lv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function $C(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class AE{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gi("not implemented")}_getIdTokenResponse(t){return Gi("not implemented")}_linkToIdToken(t,n){return Gi("not implemented")}_getReauthenticationResolver(t){return Gi("not implemented")}}/**
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
 */async function Ba(r,t){return oE(r,"POST","/v1/accounts:signInWithIdp",uh(r,t))}/**
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
 */const ZC="http://localhost";class Us extends AE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Us(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Zi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:l}=n,c=Xm(n,["providerId","signInMethod"]);if(!s||!l)return null;const f=new Us(s,l);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Ba(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Ba(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ba(t,n)}buildRequest(){const t={requestUri:ZC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Nl(n)}return t}}/**
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
 */class bE{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bl extends bE{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nr extends Bl{constructor(){super("facebook.com")}static credential(t){return Us._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Nr.credential(t.oauthAccessToken)}catch{return null}}}Nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nr.PROVIDER_ID="facebook.com";/**
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
 */class Or extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Us._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Or.credential(n,s)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
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
 */class Mr extends Bl{constructor(){super("github.com")}static credential(t){return Us._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mr.credential(t.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
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
 */class Vr extends Bl{constructor(){super("twitter.com")}static credential(t,n){return Us._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Vr.credential(n,s)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
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
 */async function WC(r,t){return oE(r,"POST","/v1/accounts:signUp",uh(r,t))}/**
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
 */class Fr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,l=!1){const c=await Ki._fromIdTokenResponse(t,s,l),f=zv(s);return new Fr({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const l=zv(s);return new Fr({user:t,providerId:l,_tokenResponse:s,operationType:n})}}function zv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function JC(r){var t;if(Fi(r.app))return Promise.reject(zr(r));const n=ch(r);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new Fr({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await WC(n,{returnSecureToken:!0}),l=await Fr._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(l.user),l}/**
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
 */class Bc extends Yn{constructor(t,n,s,l){var c;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,l){return new Bc(t,n,s,l)}}function SE(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(r,c,t,s):c})}async function tD(r,t,n=!1){const s=await Dl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Fr._forOperation(r,"link",s)}/**
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
 */async function eD(r,t,n=!1){const{auth:s}=r;if(Fi(s.app))return Promise.reject(zr(s));const l="reauthenticate";try{const c=await Dl(r,SE(s,l,t,r),n);Tt(c.idToken,s,"internal-error");const f=Wm(c.idToken);Tt(f,s,"internal-error");const{sub:g}=f;return Tt(r.uid===g,s,"user-mismatch"),Fr._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Zi(s,"user-mismatch"),c}}/**
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
 */async function nD(r,t,n=!1){if(Fi(r.app))return Promise.reject(zr(r));const s="signIn",l=await SE(r,s,t),c=await Fr._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}function iD(r,t,n,s){return Ne(r).onIdTokenChanged(t,n,s)}function rD(r,t,n){return Ne(r).beforeAuthStateChanged(t,n)}function sD(r,t,n,s){return Ne(r).onAuthStateChanged(t,n,s)}const qc="__sak";/**
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
 */class wE{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qc,"1"),this.storage.removeItem(qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aD=1e3,oD=10;class RE extends wE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&t(n,l,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);UC()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,oD):l()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},aD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}RE.type="LOCAL";const lD=RE;/**
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
 */class IE extends wE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}IE.type="SESSION";const CE=IE;/**
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
 */function uD(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(l=>l.isListeningto(t));if(n)return n;const s=new hh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:l,data:c}=n.data,f=this.handlersMap[l];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const g=Array.from(f).map(async _=>_(n.origin,c)),p=await uD(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hh.receivers=[];/**
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
 */function eg(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class cD{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,f;return new Promise((g,p)=>{const _=eg("",20);l.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:l,onMessage(C){const V=C;if(V.data.eventId===_)switch(V.data.status){case"ack":clearTimeout(E),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(V.data.response);break;default:clearTimeout(E),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:_,data:n},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function gi(){return window}function hD(r){gi().location.href=r}/**
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
 */function DE(){return typeof gi().WorkerGlobalScope<"u"&&typeof gi().importScripts=="function"}async function fD(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dD(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function mD(){return DE()?self:null}/**
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
 */const NE="firebaseLocalStorageDb",gD=1,jc="firebaseLocalStorage",OE="fbase_key";class ql{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fh(r,t){return r.transaction([jc],t?"readwrite":"readonly").objectStore(jc)}function pD(){const r=indexedDB.deleteDatabase(NE);return new ql(r).toPromise()}function om(){const r=indexedDB.open(NE,gD);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(jc,{keyPath:OE})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(jc)?t(s):(s.close(),await pD(),t(await om()))})})}async function Bv(r,t,n){const s=fh(r,!0).put({[OE]:t,value:n});return new ql(s).toPromise()}async function yD(r,t){const n=fh(r,!1).get(t),s=await new ql(n).toPromise();return s===void 0?null:s.value}function qv(r,t){const n=fh(r,!0).delete(t);return new ql(n).toPromise()}const _D=800,vD=3;class ME{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await om(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>vD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hh._getInstance(mD()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await fD(),!this.activeServiceWorker)return;this.sender=new cD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||dD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await om();return await Bv(t,qc,"1"),await qv(t,qc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>yD(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=fh(l,!1).getAll();return new ql(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ME.type="LOCAL";const TD=ME;new zl(3e4,6e4);/**
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
 */function ED(r,t){return t?Qi(t):(Tt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class ng extends AE{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ba(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ba(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ba(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function AD(r){return nD(r.auth,new ng(r),r.bypassAuthState)}function bD(r){const{auth:t,user:n}=r;return Tt(n,t,"internal-error"),eD(n,new ng(r),r.bypassAuthState)}async function SD(r){const{auth:t,user:n}=r;return Tt(n,t,"internal-error"),tD(n,new ng(r),r.bypassAuthState)}/**
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
 */class VE{constructor(t,n,s,l,c=!1){this.auth=t,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:f,type:g}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return AD;case"linkViaPopup":case"linkViaRedirect":return SD;case"reauthViaPopup":case"reauthViaRedirect":return bD;default:Zi(this.auth,"internal-error")}}resolve(t){Wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wD=new zl(2e3,1e4);class Ua extends VE{constructor(t,n,s,l,c){super(t,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,Ua.currentPopupAction&&Ua.currentPopupAction.cancel(),Ua.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Tt(t,this.auth,"internal-error"),t}async onExecution(){Wi(this.filter.length===1,"Popup operations only handle one event");const t=eg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ua.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,wD.get())};t()}}Ua.currentPopupAction=null;/**
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
 */const RD="pendingRedirect",bc=new Map;class ID extends VE{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=bc.get(this.auth._key());if(!t){try{const s=await CD(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}bc.set(this.auth._key(),t)}return this.bypassAuthState||bc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CD(r,t){const n=OD(t),s=ND(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function DD(r,t){bc.set(r._key(),t)}function ND(r){return Qi(r._redirectPersistence)}function OD(r){return Ac(RD,r.config.apiKey,r.name)}async function MD(r,t,n=!1){if(Fi(r.app))return Promise.reject(zr(r));const s=ch(r),l=ED(s,t),f=await new ID(s,l,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const VD=10*60*1e3;class xD{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!PD(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!xE(t)){const l=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(mi(this.auth,l))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=VD&&this.cachedEventUids.clear(),this.cachedEventUids.has(jv(t))}saveEventToCache(t){this.cachedEventUids.add(jv(t)),this.lastProcessedEventTime=Date.now()}}function jv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function xE({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function PD(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xE(r);default:return!1}}/**
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
 */async function UD(r,t={}){return Ja(r,"GET","/v1/projects",t)}/**
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
 */const kD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LD=/^https?/;async function zD(r){if(r.config.emulator)return;const{authorizedDomains:t}=await UD(r);for(const n of t)try{if(BD(n))return}catch{}Zi(r,"unauthorized-domain")}function BD(r){const t=sm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!LD.test(n))return!1;if(kD.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const qD=new zl(3e4,6e4);function Hv(){const r=gi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function jD(r){return new Promise((t,n)=>{var s,l,c;function f(){Hv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hv(),n(mi(r,"network-request-failed"))},timeout:qD.get()})}if(!((l=(s=gi().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)t(gapi.iframes.getContext());else if(!((c=gi().gapi)===null||c===void 0)&&c.load)f();else{const g=GC("iframefcb");return gi()[g]=()=>{gapi.load?f():n(mi(r,"network-request-failed"))},HC(`${FC()}?onload=${g}`).catch(p=>n(p))}}).catch(t=>{throw Sc=null,t})}let Sc=null;function HD(r){return Sc=Sc||jD(r),Sc}/**
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
 */const FD=new zl(5e3,15e3),GD="__/auth/iframe",KD="emulator/auth/iframe",QD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XD(r){const t=r.config;Tt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Zm(t,KD):`https://${r.config.authDomain}/${GD}`,s={apiKey:t.apiKey,appName:r.name,v:Ya},l=YD.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Nl(s).slice(1)}`}async function $D(r){const t=await HD(r),n=gi().gapi;return Tt(n,r,"internal-error"),t.open({where:document.body,url:XD(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QD,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const f=mi(r,"network-request-failed"),g=gi().setTimeout(()=>{c(f)},FD.get());function p(){gi().clearTimeout(g),l(s)}s.ping(p).then(p,()=>{c(f)})}))}/**
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
 */const ZD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WD=500,JD=600,t2="_blank",e2="http://localhost";class Fv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function n2(r,t,n,s=WD,l=JD){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const p=Object.assign(Object.assign({},ZD),{width:s.toString(),height:l.toString(),top:c,left:f}),_=en().toLowerCase();n&&(g=mE(_)?t2:n),fE(_)&&(t=t||e2,p.scrollbars="yes");const E=Object.entries(p).reduce((V,[j,X])=>`${V}${j}=${X},`,"");if(PC(_)&&g!=="_self")return i2(t||"",g),new Fv(null);const C=window.open(t||"",g,E);Tt(C,r,"popup-blocked");try{C.focus()}catch{}return new Fv(C)}function i2(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const r2="__/auth/handler",s2="emulator/auth/handler",a2=encodeURIComponent("fac");async function Gv(r,t,n,s,l,c){Tt(r.config.authDomain,r,"auth-domain-config-required"),Tt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ya,eventId:l};if(t instanceof bE){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",Pb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,C]of Object.entries({}))f[E]=C}if(t instanceof Bl){const E=t.getScopes().filter(C=>C!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const E of Object.keys(g))g[E]===void 0&&delete g[E];const p=await r._getAppCheckToken(),_=p?`#${a2}=${encodeURIComponent(p)}`:"";return`${o2(r)}?${Nl(g).slice(1)}${_}`}function o2({config:r}){return r.emulator?Zm(r,s2):`https://${r.authDomain}/${r2}`}/**
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
 */const xd="webStorageSupport";class l2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CE,this._completeRedirectFn=MD,this._overrideRedirectResult=DD}async _openPopup(t,n,s,l){var c;Wi((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const f=await Gv(t,n,s,sm(),l);return n2(t,f,eg())}async _openRedirect(t,n,s,l){await this._originValidation(t);const c=await Gv(t,n,s,sm(),l);return hD(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(Wi(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await $D(t),s=new xD(t);return n.register("authEvent",l=>(Tt(l?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xd,{type:xd},l=>{var c;const f=(c=l?.[0])===null||c===void 0?void 0:c[xd];f!==void 0&&n(!!f),Zi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zD(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return vE()||dE()||Jm()}}const u2=l2;var Kv="@firebase/auth",Qv="1.7.9";/**
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
 */class c2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function h2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function f2(r){pi(new Kn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;Tt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TE(r)},_=new qC(s,l,c,p);return QC(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),pi(new Kn("auth-internal",t=>{const n=ch(t.getProvider("auth").getImmediate());return(s=>new c2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(Kv,Qv,h2(r)),Un(Kv,Qv,"esm2017")}/**
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
 */const d2=5*60,m2=t0("authIdTokenMaxAge")||d2;let Yv=null;const g2=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>m2)return;const l=n?.token;Yv!==l&&(Yv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function p2(r=cm()){const t=Ls(r,"auth");if(t.isInitialized())return t.getImmediate();const n=KC(r,{popupRedirectResolver:u2,persistence:[TD,lD,CE]}),s=t0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=g2(c.toString());rD(n,f,()=>f(n.currentUser)),iD(n,g=>f(g))}}const l=Wv("auth");return l&&YC(n,`http://${l}`),n}function y2(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}jC({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=l=>{const c=mi("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",y2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});f2("Browser");const _2={apiKey:"AIzaSyAXh_Vc8dj3vqPhWWHgM4i70ArqeYfDJXA",authDomain:"flight-ad3eb.firebaseapp.com",projectId:"flight-ad3eb",storageBucket:"flight-ad3eb.appspot.com",messagingSenderId:"221626771101",appId:"1:221626771101:web:47e86ba13083a01c57d674",measurementId:"G-9C6GW1LKGV"},ig=o0(_2);fR(ig);const Cr=J1(ig),Pd=p2(ig),Dr="flight-ad3eb",v2=({message:r,onConfirm:t,onCancel:n,showCancel:s=!1})=>r?it.jsx("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4",children:it.jsxs("div",{className:"bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-auto transform transition-all scale-100 opacity-100",children:[it.jsx("p",{className:"text-gray-800 text-lg mb-6 text-center",children:r}),it.jsxs("div",{className:"flex justify-center space-x-4",children:[it.jsx("button",{onClick:t,className:"px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150",children:"OK"}),s&&it.jsx("button",{onClick:n,className:"px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition ease-in-out duration-150",children:"Cancel"})]})]})}):null,T2=()=>{const[r,t]=me.useState(""),[n,s]=me.useState(""),[l,c]=me.useState(!1),[f,g]=me.useState(!1),[p,_]=me.useState(""),[E,C]=me.useState(!1),[V,j]=me.useState([]),[X,nt]=me.useState(null),[Z,vt]=me.useState(!1),[At,dt]=me.useState({}),[Nt,mt]=me.useState(""),[It,O]=me.useState(""),[b,w]=me.useState(""),[N,M]=me.useState(""),[P,I]=me.useState(""),[Ae,ie]=me.useState(()=>{}),[H,tt]=me.useState(()=>{}),[lt,zt]=me.useState(!1);me.useEffect(()=>{const rt=sD(Pd,async gt=>{let Ht="";if(gt)Ht=gt.uid;else try{await JC(Pd),Ht=Pd.currentUser.uid}catch(te){console.error("Authentication error:",te),R("Authentication failed. Please try again.",()=>{}),c(!0);return}t(Ht);try{const te=Is(Cr,"artifacts",Dr,"public","data","userProfiles",Ht),be=await Nv(te);be.exists()&&be.data().displayName?s(be.data().displayName):s(Ht.substring(0,8))}catch(te){console.error("Error fetching user profile:",te),R("Failed to load user profile.",()=>{})}c(!0)});return()=>rt()},[]),me.useEffect(()=>{if(!l||!r)return;const rt=Md(Cr,`artifacts/${Dr}/public/data/flights`),gt=hC(rt),Ht=_C(gt,async te=>{const be=te.docs.map(Oe=>({id:Oe.id,...Oe.data()}));be.sort((Oe,Xn)=>Oe.flightNumber.localeCompare(Xn.flightNumber)),j(be);const nn=new Set;be.forEach(Oe=>{Oe.signedUpUsers&&Oe.signedUpUsers.forEach(Xn=>nn.add(Xn))});const zn={...At},_i=Md(Cr,`artifacts/${Dr}/public/data/userProfiles`);await Promise.all(Array.from(nn).map(async Oe=>{if(!zn[Oe]){const Xn=Is(_i,Oe),Qe=await Nv(Xn);zn[Oe]=Qe.exists()&&Qe.data().displayName?Qe.data().displayName:Oe.substring(0,8)}})),dt(zn)},te=>{console.error("Error fetching flights:",te),R("Failed to load flights. Please try refreshing.",()=>{})});return()=>Ht()},[l,r]);const R=(rt,gt,Ht=!1,te=()=>{})=>{I(rt),ie(()=>()=>{gt(),I("")}),zt(Ht),tt(()=>()=>{te(),I("")})},Y=async()=>{if(!n.trim()){R("Callsign cannot be empty.",()=>{});return}if(!r){R("User not authenticated. Please wait.",()=>{});return}try{const rt=Is(Cr,"artifacts",Dr,"public","data","userProfiles",r);await gC(rt,{displayName:n.trim()}),R("Callsign saved successfully!",()=>{}),dt(gt=>({...gt,[r]:n.trim()}))}catch(rt){console.error("Error saving display name:",rt),R(`Failed to save callsign: ${rt.message}`,()=>{})}},et=()=>{p==="54321"?(g(!0),C(!1),_(""),R("Administrator access granted!",()=>{})):(R("Incorrect PIN. Please try again.",()=>{}),_(""))},W=async rt=>{if(rt.preventDefault(),!f){R("Only administrators can add or edit flights. Please log in as admin.",()=>{});return}if(!Nt||!It||!b||!N){R("All fields are required.",()=>{});return}const gt={flightNumber:Nt,departure:It,arrival:b,departureTime:N,signedUpUsers:X?X.signedUpUsers:[]};try{if(X){const Ht=Is(Cr,`artifacts/${Dr}/public/data/flights`,X.id);await Ov(Ht,gt),R("Flight updated successfully!",()=>{})}else await yC(Md(Cr,`artifacts/${Dr}/public/data/flights`),gt),R("Flight added successfully!",()=>{});mt(""),O(""),w(""),M(""),nt(null),vt(!1)}catch(Ht){console.error("Error saving flight:",Ht),R(`Failed to save flight: ${Ht.message}`,()=>{})}},ct=rt=>{if(!f){R("Only administrators can edit flights. Please log in as admin.",()=>{});return}nt(rt),mt(rt.flightNumber),O(rt.departure),w(rt.arrival),M(rt.departureTime||""),vt(!0)},Rt=rt=>{if(!f){R("Only administrators can delete flights. Please log in as admin.",()=>{});return}R("Are you sure you want to delete this flight?",async()=>{try{await pC(Is(Cr,`artifacts/${Dr}/public/data/flights`,rt)),R("Flight deleted successfully!",()=>{})}catch(gt){console.error("Error deleting flight:",gt),R(`Failed to delete flight: ${gt.message}`,()=>{})}},!0,()=>{})},yt=async(rt,gt)=>{if(!r){R("Please wait, authentication is not ready yet.",()=>{});return}const Ht=Is(Cr,`artifacts/${Dr}/public/data/flights`,rt),te=gt.includes(r),be=te?gt.filter(nn=>nn!==r):[...gt,r];try{await Ov(Ht,{signedUpUsers:be}),R(`You have successfully ${te?"unsigned up from":"signed up for"} this flight!`,()=>{})}catch(nn){console.error("Error updating signup status:",nn),R(`Failed to update signup status: ${nn.message}`,()=>{})}};return l?it.jsxs("div",{className:"min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 font-sans flex flex-col items-center",children:[it.jsx(v2,{message:P,onConfirm:Ae,onCancel:H,showCancel:lt}),it.jsxs("div",{className:"w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[it.jsx("div",{className:"mb-6 flex justify-center",children:it.jsx("img",{src:"https://i.imgur.com/Lwd3LxD.png",alt:"ZID FSExpo Cargo Runs Banner",className:"rounded-lg shadow-md w-full max-w-md h-auto object-cover",onError:rt=>{rt.target.onerror=null,rt.target.src="https://placehold.co/600x150/F8F8F8/333333?text=Image+Load+Error%0AProvide+Full+URL"}})}),it.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6",children:"ZID FSExpo Cargo Runs"}),it.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg shadow-inner mb-8 text-center",children:[it.jsx("h2",{className:"text-xl font-semibold text-gray-700 mb-4",children:"Your Profile"}),it.jsxs("p",{className:"text-gray-600 mb-4",children:["Your unique Firebase User ID:"," ",it.jsx("span",{className:"font-mono bg-gray-200 px-2 py-1 rounded text-sm break-all",children:r})]}),it.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[it.jsx("input",{type:"text",value:n,onChange:rt=>s(rt.target.value),className:"flex-grow max-w-xs sm:max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-center sm:text-left",placeholder:"Set your callsign (e.g., CARGO777)","aria-label":"Your Callsign"}),it.jsx("button",{onClick:Y,className:"px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150 ease-in-out",children:"Save Callsign"})]})]}),it.jsxs("div",{className:"mb-6 text-center",children:[f?it.jsx("button",{onClick:()=>g(!1),className:"px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-150 ease-in-out mr-2",children:"Logout Admin"}):it.jsx("button",{onClick:()=>C(!E),className:"px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition duration-150 ease-in-out mr-2",children:E?"Cancel Admin Login":"Admin Login"}),f&&it.jsx("button",{onClick:()=>{vt(!Z),Z&&(nt(null),mt(""),O(""),w(""),M(""))},className:"px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-150 ease-in-out",children:Z?"Cancel Add/Edit Flight":"Add New Flight"})]}),!f&&E&&it.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg shadow-inner mb-8 text-center",children:[it.jsx("h2",{className:"text-xl font-semibold text-gray-700 mb-4",children:"Enter Admin PIN"}),it.jsx("input",{type:"password",value:p,onChange:rt=>_(rt.target.value),className:"mb-4 block w-full sm:w-64 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-center",placeholder:"Enter PIN"}),it.jsx("button",{onClick:et,className:"px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition duration-150 ease-in-out",children:"Login"})]}),f&&Z&&it.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg shadow-inner mb-8",children:[it.jsx("h2",{className:"text-2xl font-semibold text-gray-700 mb-4",children:X?"Edit Flight":"Add New Flight"}),it.jsxs("form",{onSubmit:W,className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[it.jsxs("div",{children:[it.jsx("label",{htmlFor:"flightNumber",className:"block text-sm font-medium text-gray-700",children:"Flight #"}),it.jsx("input",{type:"text",id:"flightNumber",value:Nt,onChange:rt=>mt(rt.target.value),required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),it.jsxs("div",{children:[it.jsx("label",{htmlFor:"departure",className:"block text-sm font-medium text-gray-700",children:"Departure"}),it.jsx("input",{type:"text",id:"departure",value:It,onChange:rt=>O(rt.target.value),required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),it.jsxs("div",{children:[it.jsx("label",{htmlFor:"arrival",className:"block text-sm font-medium text-gray-700",children:"Arrival"}),it.jsx("input",{type:"text",id:"arrival",value:b,onChange:rt=>w(rt.target.value),required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),it.jsxs("div",{children:[it.jsx("label",{htmlFor:"departureTime",className:"block text-sm font-medium text-gray-700",children:"Departure Time (Local)"}),it.jsx("input",{type:"time",id:"departureTime",value:N,onChange:rt=>M(rt.target.value),required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),it.jsx("div",{className:"md:col-span-2 text-center mt-4",children:it.jsx("button",{type:"submit",className:"px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-150 ease-in-out",children:X?"Save Changes":"Add Flight"})})]})]}),it.jsx("div",{className:"overflow-x-auto",children:it.jsxs("table",{className:"min-w-full bg-white rounded-lg shadow-md",children:[it.jsx("thead",{className:"bg-blue-600 text-white",children:it.jsxs("tr",{children:[it.jsx("th",{className:"py-3 px-4 text-left",children:"Flight #"}),it.jsx("th",{className:"py-3 px-4 text-left",children:"Departure"}),it.jsx("th",{className:"py-3 px-4 text-left",children:"Arrival"}),it.jsx("th",{className:"py-3 px-4 text-left",children:"Dep Time"}),it.jsx("th",{className:"py-3 px-4 text-left",children:"Signed Up Pilots"}),it.jsx("th",{className:"py-3 px-4 text-center",children:"Actions"})]})}),it.jsxs("tbody",{children:[V.map(rt=>{const gt=rt.signedUpUsers||[],Ht=gt.includes(r);return it.jsxs("tr",{className:"border-b hover:bg-gray-50",children:[it.jsx("td",{className:"py-2 px-4",children:rt.flightNumber}),it.jsx("td",{className:"py-2 px-4",children:rt.departure}),it.jsx("td",{className:"py-2 px-4",children:rt.arrival}),it.jsx("td",{className:"py-2 px-4",children:rt.departureTime}),it.jsx("td",{className:"py-2 px-4 max-w-xs overflow-auto text-sm",children:gt.length>0?gt.map(te=>At[te]||te.substring(0,8)).join(", "):"No signups yet"}),it.jsxs("td",{className:"py-2 px-4 text-center space-x-2",children:[it.jsx("button",{onClick:()=>yt(rt.id,gt),className:`px-3 py-1 rounded-md text-white font-semibold ${Ht?"bg-red-500 hover:bg-red-600":"bg-green-600 hover:bg-green-700"} focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 focus:ring-opacity-75`,children:Ht?"Unsign":"Sign Up"}),f&&it.jsxs(it.Fragment,{children:[it.jsx("button",{onClick:()=>ct(rt),className:"px-3 py-1 bg-yellow-500 rounded-md text-white font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75",children:"Edit"}),it.jsx("button",{onClick:()=>Rt(rt.id),className:"px-3 py-1 bg-red-600 rounded-md text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75",children:"Delete"})]})]})]},rt.id)}),V.length===0&&it.jsx("tr",{children:it.jsx("td",{colSpan:"6",className:"text-center py-6 text-gray-500",children:"No flights available."})})]})]})})]})]}):it.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100 font-sans",children:it.jsx("p",{className:"text-gray-700 text-lg",children:"Loading application..."})})};mb.createRoot(document.getElementById("root")).render(it.jsx(me.StrictMode,{children:it.jsx(T2,{})}));
