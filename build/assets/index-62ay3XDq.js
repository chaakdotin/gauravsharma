(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const y of m)if(y.type==="childList")for(const E of y.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function d(m){const y={};return m.integrity&&(y.integrity=m.integrity),m.referrerPolicy&&(y.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?y.credentials="include":m.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function o(m){if(m.ep)return;m.ep=!0;const y=d(m);fetch(m.href,y)}})();var vc={exports:{}},Ma={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function z0(){if(zd)return Ma;zd=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(o,m,y){var E=null;if(y!==void 0&&(E=""+y),m.key!==void 0&&(E=""+m.key),"key"in m){y={};for(var _ in m)_!=="key"&&(y[_]=m[_])}else y=m;return m=y.ref,{$$typeof:c,type:o,key:E,ref:m!==void 0?m:null,props:y}}return Ma.Fragment=f,Ma.jsx=d,Ma.jsxs=d,Ma}var Md;function M0(){return Md||(Md=1,vc.exports=z0()),vc.exports}var u=M0(),yc={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function A0(){if(Ad)return ee;Ad=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),E=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),C=Symbol.iterator;function U(g){return g===null||typeof g!="object"?null:(g=C&&g[C]||g["@@iterator"],typeof g=="function"?g:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Z={};function X(g,D,L){this.props=g,this.context=D,this.refs=Z,this.updater=L||W}X.prototype.isReactComponent={},X.prototype.setState=function(g,D){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,D,"setState")},X.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function H(){}H.prototype=X.prototype;function ue(g,D,L){this.props=g,this.context=D,this.refs=Z,this.updater=L||W}var P=ue.prototype=new H;P.constructor=ue,Q(P,X.prototype),P.isPureReactComponent=!0;var be=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},De=Object.prototype.hasOwnProperty;function Re(g,D,L,B,V,re){return L=re.ref,{$$typeof:c,type:g,key:D,ref:L!==void 0?L:null,props:re}}function Ce(g,D){return Re(g.type,D,void 0,void 0,void 0,g.props)}function we(g){return typeof g=="object"&&g!==null&&g.$$typeof===c}function Pe(g){var D={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(L){return D[L]})}var ot=/\/+/g;function Xe(g,D){return typeof g=="object"&&g!==null&&g.key!=null?Pe(""+g.key):D.toString(36)}function wn(){}function jn(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(wn,wn):(g.status="pending",g.then(function(D){g.status==="pending"&&(g.status="fulfilled",g.value=D)},function(D){g.status==="pending"&&(g.status="rejected",g.reason=D)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Qe(g,D,L,B,V){var re=typeof g;(re==="undefined"||re==="boolean")&&(g=null);var I=!1;if(g===null)I=!0;else switch(re){case"bigint":case"string":case"number":I=!0;break;case"object":switch(g.$$typeof){case c:case f:I=!0;break;case M:return I=g._init,Qe(I(g._payload),D,L,B,V)}}if(I)return V=V(g),I=B===""?"."+Xe(g,0):B,be(V)?(L="",I!=null&&(L=I.replace(ot,"$&/")+"/"),Qe(V,D,L,"",function(Ft){return Ft})):V!=null&&(we(V)&&(V=Ce(V,L+(V.key==null||g&&g.key===V.key?"":(""+V.key).replace(ot,"$&/")+"/")+I)),D.push(V)),1;I=0;var et=B===""?".":B+":";if(be(g))for(var ye=0;ye<g.length;ye++)B=g[ye],re=et+Xe(B,ye),I+=Qe(B,D,L,re,V);else if(ye=U(g),typeof ye=="function")for(g=ye.call(g),ye=0;!(B=g.next()).done;)B=B.value,re=et+Xe(B,ye++),I+=Qe(B,D,L,re,V);else if(re==="object"){if(typeof g.then=="function")return Qe(jn(g),D,L,B,V);throw D=String(g),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return I}function z(g,D,L){if(g==null)return g;var B=[],V=0;return Qe(g,B,"","",function(re){return D.call(L,re,V++)}),B}function q(g){if(g._status===-1){var D=g._result;D=D(),D.then(function(L){(g._status===0||g._status===-1)&&(g._status=1,g._result=L)},function(L){(g._status===0||g._status===-1)&&(g._status=2,g._result=L)}),g._status===-1&&(g._status=0,g._result=D)}if(g._status===1)return g._result.default;throw g._result}var J=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function pe(){}return ee.Children={map:z,forEach:function(g,D,L){z(g,function(){D.apply(this,arguments)},L)},count:function(g){var D=0;return z(g,function(){D++}),D},toArray:function(g){return z(g,function(D){return D})||[]},only:function(g){if(!we(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ee.Component=X,ee.Fragment=d,ee.Profiler=m,ee.PureComponent=ue,ee.StrictMode=o,ee.Suspense=S,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ee.__COMPILER_RUNTIME={__proto__:null,c:function(g){return F.H.useMemoCache(g)}},ee.cache=function(g){return function(){return g.apply(null,arguments)}},ee.cloneElement=function(g,D,L){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var B=Q({},g.props),V=g.key,re=void 0;if(D!=null)for(I in D.ref!==void 0&&(re=void 0),D.key!==void 0&&(V=""+D.key),D)!De.call(D,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&D.ref===void 0||(B[I]=D[I]);var I=arguments.length-2;if(I===1)B.children=L;else if(1<I){for(var et=Array(I),ye=0;ye<I;ye++)et[ye]=arguments[ye+2];B.children=et}return Re(g.type,V,void 0,void 0,re,B)},ee.createContext=function(g){return g={$$typeof:E,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:y,_context:g},g},ee.createElement=function(g,D,L){var B,V={},re=null;if(D!=null)for(B in D.key!==void 0&&(re=""+D.key),D)De.call(D,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(V[B]=D[B]);var I=arguments.length-2;if(I===1)V.children=L;else if(1<I){for(var et=Array(I),ye=0;ye<I;ye++)et[ye]=arguments[ye+2];V.children=et}if(g&&g.defaultProps)for(B in I=g.defaultProps,I)V[B]===void 0&&(V[B]=I[B]);return Re(g,re,void 0,void 0,null,V)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(g){return{$$typeof:_,render:g}},ee.isValidElement=we,ee.lazy=function(g){return{$$typeof:M,_payload:{_status:-1,_result:g},_init:q}},ee.memo=function(g,D){return{$$typeof:p,type:g,compare:D===void 0?null:D}},ee.startTransition=function(g){var D=F.T,L={};F.T=L;try{var B=g(),V=F.S;V!==null&&V(L,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(pe,J)}catch(re){J(re)}finally{F.T=D}},ee.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ee.use=function(g){return F.H.use(g)},ee.useActionState=function(g,D,L){return F.H.useActionState(g,D,L)},ee.useCallback=function(g,D){return F.H.useCallback(g,D)},ee.useContext=function(g){return F.H.useContext(g)},ee.useDebugValue=function(){},ee.useDeferredValue=function(g,D){return F.H.useDeferredValue(g,D)},ee.useEffect=function(g,D,L){var B=F.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(g,D)},ee.useId=function(){return F.H.useId()},ee.useImperativeHandle=function(g,D,L){return F.H.useImperativeHandle(g,D,L)},ee.useInsertionEffect=function(g,D){return F.H.useInsertionEffect(g,D)},ee.useLayoutEffect=function(g,D){return F.H.useLayoutEffect(g,D)},ee.useMemo=function(g,D){return F.H.useMemo(g,D)},ee.useOptimistic=function(g,D){return F.H.useOptimistic(g,D)},ee.useReducer=function(g,D,L){return F.H.useReducer(g,D,L)},ee.useRef=function(g){return F.H.useRef(g)},ee.useState=function(g){return F.H.useState(g)},ee.useSyncExternalStore=function(g,D,L){return F.H.useSyncExternalStore(g,D,L)},ee.useTransition=function(){return F.H.useTransition()},ee.version="19.1.1",ee}var Rd;function zc(){return Rd||(Rd=1,yc.exports=A0()),yc.exports}var R=zc(),xc={exports:{}},Aa={},bc={exports:{}},Sc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function R0(){return Od||(Od=1,(function(c){function f(z,q){var J=z.length;z.push(q);e:for(;0<J;){var pe=J-1>>>1,g=z[pe];if(0<m(g,q))z[pe]=q,z[J]=g,J=pe;else break e}}function d(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var q=z[0],J=z.pop();if(J!==q){z[0]=J;e:for(var pe=0,g=z.length,D=g>>>1;pe<D;){var L=2*(pe+1)-1,B=z[L],V=L+1,re=z[V];if(0>m(B,J))V<g&&0>m(re,B)?(z[pe]=re,z[V]=J,pe=V):(z[pe]=B,z[L]=J,pe=L);else if(V<g&&0>m(re,J))z[pe]=re,z[V]=J,pe=V;else break e}}return q}function m(z,q){var J=z.sortIndex-q.sortIndex;return J!==0?J:z.id-q.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;c.unstable_now=function(){return y.now()}}else{var E=Date,_=E.now();c.unstable_now=function(){return E.now()-_}}var S=[],p=[],M=1,C=null,U=3,W=!1,Q=!1,Z=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function be(z){for(var q=d(p);q!==null;){if(q.callback===null)o(p);else if(q.startTime<=z)o(p),q.sortIndex=q.expirationTime,f(S,q);else break;q=d(p)}}function F(z){if(Z=!1,be(z),!Q)if(d(S)!==null)Q=!0,De||(De=!0,Xe());else{var q=d(p);q!==null&&Qe(F,q.startTime-z)}}var De=!1,Re=-1,Ce=5,we=-1;function Pe(){return X?!0:!(c.unstable_now()-we<Ce)}function ot(){if(X=!1,De){var z=c.unstable_now();we=z;var q=!0;try{e:{Q=!1,Z&&(Z=!1,ue(Re),Re=-1),W=!0;var J=U;try{t:{for(be(z),C=d(S);C!==null&&!(C.expirationTime>z&&Pe());){var pe=C.callback;if(typeof pe=="function"){C.callback=null,U=C.priorityLevel;var g=pe(C.expirationTime<=z);if(z=c.unstable_now(),typeof g=="function"){C.callback=g,be(z),q=!0;break t}C===d(S)&&o(S),be(z)}else o(S);C=d(S)}if(C!==null)q=!0;else{var D=d(p);D!==null&&Qe(F,D.startTime-z),q=!1}}break e}finally{C=null,U=J,W=!1}q=void 0}}finally{q?Xe():De=!1}}}var Xe;if(typeof P=="function")Xe=function(){P(ot)};else if(typeof MessageChannel<"u"){var wn=new MessageChannel,jn=wn.port2;wn.port1.onmessage=ot,Xe=function(){jn.postMessage(null)}}else Xe=function(){H(ot,0)};function Qe(z,q){Re=H(function(){z(c.unstable_now())},q)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(z){z.callback=null},c.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<z?Math.floor(1e3/z):5},c.unstable_getCurrentPriorityLevel=function(){return U},c.unstable_next=function(z){switch(U){case 1:case 2:case 3:var q=3;break;default:q=U}var J=U;U=q;try{return z()}finally{U=J}},c.unstable_requestPaint=function(){X=!0},c.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=U;U=z;try{return q()}finally{U=J}},c.unstable_scheduleCallback=function(z,q,J){var pe=c.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pe+J:pe):J=pe,z){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=J+g,z={id:M++,callback:q,priorityLevel:z,startTime:J,expirationTime:g,sortIndex:-1},J>pe?(z.sortIndex=J,f(p,z),d(S)===null&&z===d(p)&&(Z?(ue(Re),Re=-1):Z=!0,Qe(F,J-pe))):(z.sortIndex=g,f(S,z),Q||W||(Q=!0,De||(De=!0,Xe()))),z},c.unstable_shouldYield=Pe,c.unstable_wrapCallback=function(z){var q=U;return function(){var J=U;U=q;try{return z.apply(this,arguments)}finally{U=J}}}})(Sc)),Sc}var _d;function O0(){return _d||(_d=1,bc.exports=R0()),bc.exports}var Nc={exports:{}},ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function _0(){if(Dd)return ke;Dd=1;var c=zc();function f(S){var p="https://react.dev/errors/"+S;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)p+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+S+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function y(S,p,M){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:C==null?null:""+C,children:S,containerInfo:p,implementation:M}}var E=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(S,p){if(S==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ke.createPortal=function(S,p){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(f(299));return y(S,p,null,M)},ke.flushSync=function(S){var p=E.T,M=o.p;try{if(E.T=null,o.p=2,S)return S()}finally{E.T=p,o.p=M,o.d.f()}},ke.preconnect=function(S,p){typeof S=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(S,p))},ke.prefetchDNS=function(S){typeof S=="string"&&o.d.D(S)},ke.preinit=function(S,p){if(typeof S=="string"&&p&&typeof p.as=="string"){var M=p.as,C=_(M,p.crossOrigin),U=typeof p.integrity=="string"?p.integrity:void 0,W=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;M==="style"?o.d.S(S,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:C,integrity:U,fetchPriority:W}):M==="script"&&o.d.X(S,{crossOrigin:C,integrity:U,fetchPriority:W,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ke.preinitModule=function(S,p){if(typeof S=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var M=_(p.as,p.crossOrigin);o.d.M(S,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(S)},ke.preload=function(S,p){if(typeof S=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var M=p.as,C=_(M,p.crossOrigin);o.d.L(S,M,{crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ke.preloadModule=function(S,p){if(typeof S=="string")if(p){var M=_(p.as,p.crossOrigin);o.d.m(S,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(S)},ke.requestFormReset=function(S){o.d.r(S)},ke.unstable_batchedUpdates=function(S,p){return S(p)},ke.useFormState=function(S,p,M){return E.H.useFormState(S,p,M)},ke.useFormStatus=function(){return E.H.useHostTransitionStatus()},ke.version="19.1.1",ke}var Cd;function D0(){if(Cd)return Nc.exports;Cd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),Nc.exports=_0(),Nc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function C0(){if(Ud)return Aa;Ud=1;var c=O0(),f=zc(),d=D0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function y(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(y(e)!==e)throw Error(o(188))}function S(e){var t=e.alternate;if(!t){if(t=y(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return _(a),e;if(i===l)return _(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==l.return)n=a,l=i;else{for(var r=!1,s=a.child;s;){if(s===n){r=!0,n=a,l=i;break}if(s===l){r=!0,l=a,n=i;break}s=s.sibling}if(!r){for(s=i.child;s;){if(s===n){r=!0,n=i,l=a;break}if(s===l){r=!0,l=i,n=a;break}s=s.sibling}if(!r)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,C=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),P=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),Pe=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=ot&&e[ot]||e["@@iterator"],typeof e=="function"?e:null)}var wn=Symbol.for("react.client.reference");function jn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case X:return"Profiler";case Z:return"StrictMode";case F:return"Suspense";case De:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case P:return(e.displayName||"Context")+".Provider";case ue:return(e._context.displayName||"Context")+".Consumer";case be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return t=e.displayName||null,t!==null?t:jn(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return jn(e(t))}catch{}}return null}var Qe=Array.isArray,z=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},pe=[],g=-1;function D(e){return{current:e}}function L(e){0>g||(e.current=pe[g],pe[g]=null,g--)}function B(e,t){g++,pe[g]=e.current,e.current=t}var V=D(null),re=D(null),I=D(null),et=D(null);function ye(e,t){switch(B(I,t),B(re,e),B(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?td(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=td(t),e=nd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(V),B(V,e)}function Ft(){L(V),L(re),L(I)}function nu(e){e.memoizedState!==null&&B(et,e);var t=V.current,n=nd(t,e.type);t!==n&&(B(re,e),B(V,n))}function Ua(e){re.current===e&&(L(V),L(re)),et.current===e&&(L(et),wa._currentValue=J)}var lu=Object.prototype.hasOwnProperty,au=c.unstable_scheduleCallback,iu=c.unstable_cancelCallback,ih=c.unstable_shouldYield,uh=c.unstable_requestPaint,jt=c.unstable_now,rh=c.unstable_getCurrentPriorityLevel,Dc=c.unstable_ImmediatePriority,Cc=c.unstable_UserBlockingPriority,Ha=c.unstable_NormalPriority,ch=c.unstable_LowPriority,Uc=c.unstable_IdlePriority,sh=c.log,oh=c.unstable_setDisableYieldValue,Ol=null,tt=null;function It(e){if(typeof sh=="function"&&oh(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Ol,e)}catch{}}var nt=Math.clz32?Math.clz32:hh,fh=Math.log,dh=Math.LN2;function hh(e){return e>>>=0,e===0?32:31-(fh(e)/dh|0)|0}var Ba=256,qa=4194304;function En(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function La(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?a=En(l):(r&=s,r!==0?a=En(r):n||(n=s&~e,n!==0&&(a=En(n))))):(s=l&~i,s!==0?a=En(s):r!==0?a=En(r):n||(n=l&~e,n!==0&&(a=En(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function _l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hc(){var e=Ba;return Ba<<=1,(Ba&4194048)===0&&(Ba=256),e}function Bc(){var e=qa;return qa<<=1,(qa&62914560)===0&&(qa=4194304),e}function uu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ph(e,t,n,l,a,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,h=e.expirationTimes,N=e.hiddenUpdates;for(n=r&~n;0<n;){var T=31-nt(n),O=1<<T;s[T]=0,h[T]=-1;var w=N[T];if(w!==null)for(N[T]=null,T=0;T<w.length;T++){var j=w[T];j!==null&&(j.lane&=-536870913)}n&=~O}l!==0&&qc(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function qc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-nt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function Lc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-nt(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function ru(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Sd(e.type))}function gh(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var Pt=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Pt,Je="__reactProps$"+Pt,Zn="__reactContainer$"+Pt,su="__reactEvents$"+Pt,vh="__reactListeners$"+Pt,yh="__reactHandles$"+Pt,Gc="__reactResources$"+Pt,Cl="__reactMarker$"+Pt;function ou(e){delete e[Ze],delete e[Je],delete e[su],delete e[vh],delete e[yh]}function Vn(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zn]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ud(e);e!==null;){if(n=e[Ze])return n;e=ud(e)}return t}e=n,n=e.parentNode}return null}function kn(e){if(e=e[Ze]||e[Zn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ul(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Kn(e){var t=e[Gc];return t||(t=e[Gc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Cl]=!0}var Xc=new Set,Qc={};function Tn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Qc[e]=t,e=0;e<t.length;e++)Xc.add(t[e])}var xh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zc={},Vc={};function bh(e){return lu.call(Vc,e)?!0:lu.call(Zc,e)?!1:xh.test(e)?Vc[e]=!0:(Zc[e]=!0,!1)}function Ya(e,t,n){if(bh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ga(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function _t(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var fu,kc;function $n(e){if(fu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fu=t&&t[1]||"",kc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fu+e+kc}var du=!1;function hu(e,t){if(!e||du)return"";du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(j){var w=j}Reflect.construct(e,[],O)}else{try{O.call()}catch(j){w=j}e.call(O.prototype)}}else{try{throw Error()}catch(j){w=j}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(j){if(j&&w&&typeof j.stack=="string")return[j.stack,w.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],s=i[1];if(r&&s){var h=r.split(`
`),N=s.split(`
`);for(a=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;a<N.length&&!N[a].includes("DetermineComponentFrameRoot");)a++;if(l===h.length||a===N.length)for(l=h.length-1,a=N.length-1;1<=l&&0<=a&&h[l]!==N[a];)a--;for(;1<=l&&0<=a;l--,a--)if(h[l]!==N[a]){if(l!==1||a!==1)do if(l--,a--,0>a||h[l]!==N[a]){var T=`
`+h[l].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=l&&0<=a);break}}}finally{du=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$n(n):""}function Sh(e){switch(e.tag){case 26:case 27:case 5:return $n(e.type);case 16:return $n("Lazy");case 13:return $n("Suspense");case 19:return $n("SuspenseList");case 0:case 15:return hu(e.type,!1);case 11:return hu(e.type.render,!1);case 1:return hu(e.type,!0);case 31:return $n("Activity");default:return""}}function Kc(e){try{var t="";do t+=Sh(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nh(e){var t=Jc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xa(e){e._valueTracker||(e._valueTracker=Nh(e))}function $c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Jc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Qa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wh=/[\n"\\]/g;function dt(e){return e.replace(wh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function mu(e,t,n,l,a,i,r,s){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?pu(e,r,ft(t)):n!=null?pu(e,r,ft(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+ft(s):e.removeAttribute("name")}function Wc(e,t,n,l,a,i,r,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;n=n!=null?""+ft(n):"",t=t!=null?""+ft(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function pu(e,t,n){t==="number"&&Qa(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Wn(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Fc(e,t,n){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ft(n):""}function Ic(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(Qe(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=ft(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||jh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function es(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&Pc(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&Pc(e,i,t[i])}function gu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Th=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Za(e){return Th.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vu=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var In=null,Pn=null;function ts(e){var t=kn(e);if(t&&(e=t.stateNode)){var n=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(mu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[Je]||null;if(!a)throw Error(o(90));mu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&$c(l)}break e;case"textarea":Fc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}}}var xu=!1;function ns(e,t,n){if(xu)return e(t,n);xu=!0;try{var l=e(t);return l}finally{if(xu=!1,(In!==null||Pn!==null)&&(Ai(),In&&(t=In,e=Pn,Pn=In=null,ts(t),e)))for(t=0;t<e.length;t++)ts(e[t])}}function Hl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Je]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(Dt)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){bu=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{bu=!1}var en=null,Su=null,Va=null;function ls(){if(Va)return Va;var e,t=Su,n=t.length,l,a="value"in en?en.value:en.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===a[i-l];l++);return Va=a.slice(e,1<l?1-l:void 0)}function ka(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ka(){return!0}function as(){return!1}function $e(e){function t(n,l,a,i,r){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ka:as,this.isPropagationStopped=as,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ja=$e(zn),ql=M({},zn,{view:0,detail:0}),zh=$e(ql),Nu,wu,Ll,$a=M({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ll&&(Ll&&e.type==="mousemove"?(Nu=e.screenX-Ll.screenX,wu=e.screenY-Ll.screenY):wu=Nu=0,Ll=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),is=$e($a),Mh=M({},$a,{dataTransfer:0}),Ah=$e(Mh),Rh=M({},ql,{relatedTarget:0}),ju=$e(Rh),Oh=M({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),_h=$e(Oh),Dh=M({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ch=$e(Dh),Uh=M({},zn,{data:0}),us=$e(Uh),Hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qh[e])?!!t[e]:!1}function Eu(){return Lh}var Yh=M({},ql,{key:function(e){if(e.key){var t=Hh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ka(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?ka(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ka(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=$e(Yh),Xh=M({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rs=$e(Xh),Qh=M({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),Zh=$e(Qh),Vh=M({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=$e(Vh),Kh=M({},$a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jh=$e(Kh),$h=M({},zn,{newState:0,oldState:0}),Wh=$e($h),Fh=[9,13,27,32],Tu=Dt&&"CompositionEvent"in window,Yl=null;Dt&&"documentMode"in document&&(Yl=document.documentMode);var Ih=Dt&&"TextEvent"in window&&!Yl,cs=Dt&&(!Tu||Yl&&8<Yl&&11>=Yl),ss=" ",os=!1;function fs(e,t){switch(e){case"keyup":return Fh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var el=!1;function Ph(e,t){switch(e){case"compositionend":return ds(t);case"keypress":return t.which!==32?null:(os=!0,ss);case"textInput":return e=t.data,e===ss&&os?null:e;default:return null}}function em(e,t){if(el)return e==="compositionend"||!Tu&&fs(e,t)?(e=ls(),Va=Su=en=null,el=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cs&&t.locale!=="ko"?null:t.data;default:return null}}var tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tm[e.type]:t==="textarea"}function ms(e,t,n,l){In?Pn?Pn.push(l):Pn=[l]:In=l,t=Ui(t,"onChange"),0<t.length&&(n=new Ja("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Gl=null,Xl=null;function nm(e){Wf(e,0)}function Wa(e){var t=Ul(e);if($c(t))return e}function ps(e,t){if(e==="change")return t}var gs=!1;if(Dt){var zu;if(Dt){var Mu="oninput"in document;if(!Mu){var vs=document.createElement("div");vs.setAttribute("oninput","return;"),Mu=typeof vs.oninput=="function"}zu=Mu}else zu=!1;gs=zu&&(!document.documentMode||9<document.documentMode)}function ys(){Gl&&(Gl.detachEvent("onpropertychange",xs),Xl=Gl=null)}function xs(e){if(e.propertyName==="value"&&Wa(Xl)){var t=[];ms(t,Xl,e,yu(e)),ns(nm,t)}}function lm(e,t,n){e==="focusin"?(ys(),Gl=t,Xl=n,Gl.attachEvent("onpropertychange",xs)):e==="focusout"&&ys()}function am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wa(Xl)}function im(e,t){if(e==="click")return Wa(t)}function um(e,t){if(e==="input"||e==="change")return Wa(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:rm;function Ql(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!lu.call(t,a)||!lt(e[a],t[a]))return!1}return!0}function bs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ss(e,t){var n=bs(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bs(n)}}function Ns(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ns(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ws(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qa(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qa(e.document)}return t}function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var cm=Dt&&"documentMode"in document&&11>=document.documentMode,tl=null,Ru=null,Zl=null,Ou=!1;function js(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ou||tl==null||tl!==Qa(l)||(l=tl,"selectionStart"in l&&Au(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Zl&&Ql(Zl,l)||(Zl=l,l=Ui(Ru,"onSelect"),0<l.length&&(t=new Ja("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=tl)))}function Mn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nl={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionrun:Mn("Transition","TransitionRun"),transitionstart:Mn("Transition","TransitionStart"),transitioncancel:Mn("Transition","TransitionCancel"),transitionend:Mn("Transition","TransitionEnd")},_u={},Es={};Dt&&(Es=document.createElement("div").style,"AnimationEvent"in window||(delete nl.animationend.animation,delete nl.animationiteration.animation,delete nl.animationstart.animation),"TransitionEvent"in window||delete nl.transitionend.transition);function An(e){if(_u[e])return _u[e];if(!nl[e])return e;var t=nl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Es)return _u[e]=t[n];return e}var Ts=An("animationend"),zs=An("animationiteration"),Ms=An("animationstart"),sm=An("transitionrun"),om=An("transitionstart"),fm=An("transitioncancel"),As=An("transitionend"),Rs=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function St(e,t){Rs.set(e,t),Tn(t,[e])}var Os=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var n=Os.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Kc(t)},Os.set(e,t),t)}return{value:e,source:t,stack:Kc(t)}}var mt=[],ll=0,Cu=0;function Fa(){for(var e=ll,t=Cu=ll=0;t<e;){var n=mt[t];mt[t++]=null;var l=mt[t];mt[t++]=null;var a=mt[t];mt[t++]=null;var i=mt[t];if(mt[t++]=null,l!==null&&a!==null){var r=l.pending;r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a}i!==0&&_s(n,a,i)}}function Ia(e,t,n,l){mt[ll++]=e,mt[ll++]=t,mt[ll++]=n,mt[ll++]=l,Cu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Uu(e,t,n,l){return Ia(e,t,n,l),Pa(e)}function al(e,t){return Ia(e,null,null,t),Pa(e)}function _s(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-nt(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function Pa(e){if(50<pa)throw pa=0,Gr=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var il={};function dm(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,l){return new dm(e,t,n,l)}function Hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ct(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ds(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ei(e,t,n,l,a,i){var r=0;if(l=e,typeof e=="function")Hu(e)&&(r=1);else if(typeof e=="string")r=m0(e,n,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=at(31,n,t,a),e.elementType=we,e.lanes=i,e;case Q:return Rn(n.children,a,i,t);case Z:r=8,a|=24;break;case X:return e=at(12,n,t,a|2),e.elementType=X,e.lanes=i,e;case F:return e=at(13,n,t,a),e.elementType=F,e.lanes=i,e;case De:return e=at(19,n,t,a),e.elementType=De,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case P:r=10;break e;case ue:r=9;break e;case be:r=11;break e;case Re:r=14;break e;case Ce:r=16,l=null;break e}r=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=at(r,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function Rn(e,t,n,l){return e=at(7,e,l,t),e.lanes=n,e}function Bu(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function qu(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ul=[],rl=0,ti=null,ni=0,pt=[],gt=0,On=null,Ut=1,Ht="";function _n(e,t){ul[rl++]=ni,ul[rl++]=ti,ti=e,ni=t}function Cs(e,t,n){pt[gt++]=Ut,pt[gt++]=Ht,pt[gt++]=On,On=e;var l=Ut;e=Ht;var a=32-nt(l)-1;l&=~(1<<a),n+=1;var i=32-nt(t)+a;if(30<i){var r=a-a%5;i=(l&(1<<r)-1).toString(32),l>>=r,a-=r,Ut=1<<32-nt(t)+a|n<<a|l,Ht=i+e}else Ut=1<<i|n<<a|l,Ht=e}function Lu(e){e.return!==null&&(_n(e,1),Cs(e,1,0))}function Yu(e){for(;e===ti;)ti=ul[--rl],ul[rl]=null,ni=ul[--rl],ul[rl]=null;for(;e===On;)On=pt[--gt],pt[gt]=null,Ht=pt[--gt],pt[gt]=null,Ut=pt[--gt],pt[gt]=null}var Ke=null,je=null,se=!1,Dn=null,Et=!1,Gu=Error(o(519));function Cn(e){var t=Error(o(418,""));throw Kl(ht(t,e)),Gu}function Us(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[Je]=l,n){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(n=0;n<va.length;n++)ae(va[n],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),Wc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xa(t);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),Ic(t,l.value,l.defaultValue,l.children),Xa(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||ed(t.textContent,n)?(l.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),l.onScroll!=null&&ae("scroll",t),l.onScrollEnd!=null&&ae("scrollend",t),l.onClick!=null&&(t.onclick=Hi),t=!0):t=!1,t||Cn(e)}function Hs(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ke=Ke.return}}function Vl(e){if(e!==Ke)return!1;if(!se)return Hs(e),se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lc(e.type,e.memoizedProps)),n=!n),n&&je&&Cn(e),Hs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){je=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}je=null}}else t===27?(t=je,vn(e.type)?(e=rc,rc=null,je=e):je=t):je=Ke?wt(e.stateNode.nextSibling):null;return!0}function kl(){je=Ke=null,se=!1}function Bs(){var e=Dn;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),Dn=null),e}function Kl(e){Dn===null?Dn=[e]:Dn.push(e)}var Xu=D(null),Un=null,Bt=null;function tn(e,t,n){B(Xu,t._currentValue),t._currentValue=n}function qt(e){e._currentValue=Xu.current,L(Xu)}function Qu(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Zu(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var r=a.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=a;for(var h=0;h<t.length;h++)if(s.context===t[h]){i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Qu(i.return,n,e),l||(r=null);break e}i=s.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(o(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),Qu(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Jl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var s=a.type;lt(a.pendingProps.value,r.value)||(e!==null?e.push(s):e=[s])}}else if(a===et.current){if(r=a.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(wa):e=[wa])}a=a.return}e!==null&&Zu(t,e,n,l),t.flags|=262144}function li(e){for(e=e.firstContext;e!==null;){if(!lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hn(e){Un=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return qs(Un,e)}function ai(e,t){return Un===null&&Hn(e),qs(e,t)}function qs(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Bt===null){if(e===null)throw Error(o(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return n}var hm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},mm=c.unstable_scheduleCallback,pm=c.unstable_NormalPriority,Oe={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new hm,data:new Map,refCount:0}}function $l(e){e.refCount--,e.refCount===0&&mm(pm,function(){e.controller.abort()})}var Wl=null,ku=0,cl=0,sl=null;function gm(e,t){if(Wl===null){var n=Wl=[];ku=0,cl=Jr(),sl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return ku++,t.then(Ls,Ls),t}function Ls(){if(--ku===0&&Wl!==null){sl!==null&&(sl.status="fulfilled");var e=Wl;Wl=null,cl=0,sl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vm(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Ys=z.S;z.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&gm(e,t),Ys!==null&&Ys(e,t)};var Bn=D(null);function Ku(){var e=Bn.current;return e!==null?e:ve.pooledCache}function ii(e,t){t===null?B(Bn,Bn.current):B(Bn,t.pool)}function Gs(){var e=Ku();return e===null?null:{parent:Oe._currentValue,pool:e}}var Fl=Error(o(460)),Xs=Error(o(474)),ui=Error(o(542)),Ju={then:function(){}};function Qs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ri(){}function Zs(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ri,ri),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ks(e),e;default:if(typeof t.status=="string")t.then(ri,ri);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ks(e),e}throw Il=t,Fl}}var Il=null;function Vs(){if(Il===null)throw Error(o(459));var e=Il;return Il=null,e}function ks(e){if(e===Fl||e===ui)throw Error(o(483))}var nn=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ln(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(oe&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Pa(e),_s(e,null,n),t}return Ia(e,l,t,n),Pa(e)}function Pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Lc(e,n)}}function Fu(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Iu=!1;function ea(){if(Iu){var e=sl;if(e!==null)throw e}}function ta(e,t,n,l){Iu=!1;var a=e.updateQueue;nn=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var h=s,N=h.next;h.next=null,r===null?i=N:r.next=N,r=h;var T=e.alternate;T!==null&&(T=T.updateQueue,s=T.lastBaseUpdate,s!==r&&(s===null?T.firstBaseUpdate=N:s.next=N,T.lastBaseUpdate=h))}if(i!==null){var O=a.baseState;r=0,T=N=h=null,s=i;do{var w=s.lane&-536870913,j=w!==s.lane;if(j?(ie&w)===w:(l&w)===w){w!==0&&w===cl&&(Iu=!0),T!==null&&(T=T.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var $=e,k=s;w=t;var me=n;switch(k.tag){case 1:if($=k.payload,typeof $=="function"){O=$.call(me,O,w);break e}O=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=k.payload,w=typeof $=="function"?$.call(me,O,w):$,w==null)break e;O=M({},O,w);break e;case 2:nn=!0}}w=s.callback,w!==null&&(e.flags|=64,j&&(e.flags|=8192),j=a.callbacks,j===null?a.callbacks=[w]:j.push(w))}else j={lane:w,tag:s.tag,payload:s.payload,callback:s.callback,next:null},T===null?(N=T=j,h=O):T=T.next=j,r|=w;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;j=s,s=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);T===null&&(h=O),a.baseState=h,a.firstBaseUpdate=N,a.lastBaseUpdate=T,i===null&&(a.shared.lanes=0),hn|=r,e.lanes=r,e.memoizedState=O}}function Ks(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Js(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ks(n[e],t)}var ol=D(null),ci=D(0);function $s(e,t){e=Vt,B(ci,e),B(ol,t),Vt=e|t.baseLanes}function Pu(){B(ci,Vt),B(ol,ol.current)}function er(){Vt=ci.current,L(ol),L(ci)}var un=0,te=null,de=null,Me=null,si=!1,fl=!1,qn=!1,oi=0,na=0,dl=null,ym=0;function Te(){throw Error(o(321))}function tr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function nr(e,t,n,l,a,i){return un=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Do:Co,qn=!1,i=n(l,a),qn=!1,fl&&(i=Fs(t,n,l,a)),Ws(e),i}function Ws(e){z.H=gi;var t=de!==null&&de.next!==null;if(un=0,Me=de=te=null,si=!1,na=0,dl=null,t)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&li(e)&&(He=!0))}function Fs(e,t,n,l){te=e;var a=0;do{if(fl&&(dl=null),na=0,fl=!1,25<=a)throw Error(o(301));if(a+=1,Me=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Em,i=t(n,l)}while(fl);return i}function xm(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?la(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(te.flags|=1024),t}function lr(){var e=oi!==0;return oi=0,e}function ar(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ir(e){if(si){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}si=!1}un=0,Me=de=te=null,fl=!1,na=oi=0,dl=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?te.memoizedState=Me=e:Me=Me.next=e,Me}function Ae(){if(de===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Me===null?te.memoizedState:Me.next;if(t!==null)Me=t,de=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Me===null?te.memoizedState=Me=e:Me=Me.next=e}return Me}function ur(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function la(e){var t=na;return na+=1,dl===null&&(dl=[]),e=Zs(dl,e,t),t=te,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Do:Co),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return la(e);if(e.$$typeof===P)return Ve(e)}throw Error(o(438,String(e)))}function rr(e){var t=null,n=te.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ur(),te.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Pe;return t.index++,n}function Lt(e,t){return typeof t=="function"?t(e):t}function di(e){var t=Ae();return cr(t,de,e)}function cr(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var s=r=null,h=null,N=t,T=!1;do{var O=N.lane&-536870913;if(O!==N.lane?(ie&O)===O:(un&O)===O){var w=N.revertLane;if(w===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),O===cl&&(T=!0);else if((un&w)===w){N=N.next,w===cl&&(T=!0);continue}else O={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},h===null?(s=h=O,r=i):h=h.next=O,te.lanes|=w,hn|=w;O=N.action,qn&&n(i,O),i=N.hasEagerState?N.eagerState:n(i,O)}else w={lane:O,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},h===null?(s=h=w,r=i):h=h.next=w,te.lanes|=O,hn|=O;N=N.next}while(N!==null&&N!==t);if(h===null?r=i:h.next=s,!lt(i,e.memoizedState)&&(He=!0,T&&(n=sl,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=h,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function sr(e){var t=Ae(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);lt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function Is(e,t,n){var l=te,a=Ae(),i=se;if(i){if(n===void 0)throw Error(o(407));n=n()}else n=t();var r=!lt((de||a).memoizedState,n);r&&(a.memoizedState=n,He=!0),a=a.queue;var s=to.bind(null,l,a,e);if(aa(2048,8,s,[e]),a.getSnapshot!==t||r||Me!==null&&Me.memoizedState.tag&1){if(l.flags|=2048,hl(9,hi(),eo.bind(null,l,a,n,t),null),ve===null)throw Error(o(349));i||(un&124)!==0||Ps(l,t,n)}return n}function Ps(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t=ur(),te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eo(e,t,n,l){t.value=n,t.getSnapshot=l,no(t)&&lo(e)}function to(e,t,n){return n(function(){no(t)&&lo(e)})}function no(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function lo(e){var t=al(e,2);t!==null&&st(t,e,2)}function or(e){var t=We();if(typeof e=="function"){var n=e;if(e=n(),qn){It(!0);try{n()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function ao(e,t,n,l){return e.baseState=n,cr(e,de,typeof l=="function"?l:Lt)}function bm(e,t,n,l,a){if(pi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};z.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,io(t,i)):(i.next=n.next,t.pending=n.next=i)}}function io(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=z.T,r={};z.T=r;try{var s=n(a,l),h=z.S;h!==null&&h(r,s),uo(e,t,s)}catch(N){fr(e,t,N)}finally{z.T=i}}else try{i=n(a,l),uo(e,t,i)}catch(N){fr(e,t,N)}}function uo(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){ro(e,t,l)},function(l){return fr(e,t,l)}):ro(e,t,n)}function ro(e,t,n){t.status="fulfilled",t.value=n,co(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,io(e,n)))}function fr(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,co(t),t=t.next;while(t!==l)}e.action=null}function co(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function so(e,t){return t}function oo(e,t){if(se){var n=ve.formState;if(n!==null){e:{var l=te;if(se){if(je){t:{for(var a=je,i=Et;a.nodeType!==8;){if(!i){a=null;break t}if(a=wt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){je=wt(a.nextSibling),l=a.data==="F!";break e}}Cn(l)}l=!1}l&&(t=n[0])}}return n=We(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},n.queue=l,n=Ro.bind(null,te,l),l.dispatch=n,l=or(!1),i=gr.bind(null,te,!1,l.queue),l=We(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=bm.bind(null,te,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function fo(e){var t=Ae();return ho(t,de,e)}function ho(e,t,n){if(t=cr(e,t,so)[0],e=di(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=la(t)}catch(r){throw r===Fl?ui:r}else l=t;t=Ae();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(te.flags|=2048,hl(9,hi(),Sm.bind(null,a,n),null)),[l,i,e]}function Sm(e,t){e.action=t}function mo(e){var t=Ae(),n=de;if(n!==null)return ho(t,n,e);Ae(),t=t.memoizedState,n=Ae();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function hl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=ur(),te.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function hi(){return{destroy:void 0,resource:void 0}}function po(){return Ae().memoizedState}function mi(e,t,n,l){var a=We();l=l===void 0?null:l,te.flags|=e,a.memoizedState=hl(1|t,hi(),n,l)}function aa(e,t,n,l){var a=Ae();l=l===void 0?null:l;var i=a.memoizedState.inst;de!==null&&l!==null&&tr(l,de.memoizedState.deps)?a.memoizedState=hl(t,i,n,l):(te.flags|=e,a.memoizedState=hl(1|t,i,n,l))}function go(e,t){mi(8390656,8,e,t)}function vo(e,t){aa(2048,8,e,t)}function yo(e,t){return aa(4,2,e,t)}function xo(e,t){return aa(4,4,e,t)}function bo(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function So(e,t,n){n=n!=null?n.concat([e]):null,aa(4,4,bo.bind(null,t,e),n)}function dr(){}function No(e,t){var n=Ae();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&tr(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function wo(e,t){var n=Ae();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&tr(t,l[1]))return l[0];if(l=e(),qn){It(!0);try{e()}finally{It(!1)}}return n.memoizedState=[l,t],l}function hr(e,t,n){return n===void 0||(un&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=zf(),te.lanes|=e,hn|=e,n)}function jo(e,t,n,l){return lt(n,t)?n:ol.current!==null?(e=hr(e,n,l),lt(e,t)||(He=!0),e):(un&42)===0?(He=!0,e.memoizedState=n):(e=zf(),te.lanes|=e,hn|=e,t)}function Eo(e,t,n,l,a){var i=q.p;q.p=i!==0&&8>i?i:8;var r=z.T,s={};z.T=s,gr(e,!1,t,n);try{var h=a(),N=z.S;if(N!==null&&N(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var T=vm(h,l);ia(e,t,T,ct(e))}else ia(e,t,l,ct(e))}catch(O){ia(e,t,{then:function(){},status:"rejected",reason:O},ct())}finally{q.p=i,z.T=r}}function Nm(){}function mr(e,t,n,l){if(e.tag!==5)throw Error(o(476));var a=To(e).queue;Eo(e,a,t,J,n===null?Nm:function(){return zo(e),n(l)})}function To(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:J},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function zo(e){var t=To(e).next.queue;ia(e,t,{},ct())}function pr(){return Ve(wa)}function Mo(){return Ae().memoizedState}function Ao(){return Ae().memoizedState}function wm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ct();e=ln(n);var l=an(t,e,n);l!==null&&(st(l,t,n),Pl(l,t,n)),t={cache:Vu()},e.payload=t;return}t=t.return}}function jm(e,t,n){var l=ct();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},pi(e)?Oo(t,n):(n=Uu(e,t,n,l),n!==null&&(st(n,e,l),_o(n,t,l)))}function Ro(e,t,n){var l=ct();ia(e,t,n,l)}function ia(e,t,n,l){var a={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(pi(e))Oo(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,s=i(r,n);if(a.hasEagerState=!0,a.eagerState=s,lt(s,r))return Ia(e,t,a,0),ve===null&&Fa(),!1}catch{}finally{}if(n=Uu(e,t,a,l),n!==null)return st(n,e,l),_o(n,t,l),!0}return!1}function gr(e,t,n,l){if(l={lane:2,revertLane:Jr(),action:l,hasEagerState:!1,eagerState:null,next:null},pi(e)){if(t)throw Error(o(479))}else t=Uu(e,n,l,2),t!==null&&st(t,e,2)}function pi(e){var t=e.alternate;return e===te||t!==null&&t===te}function Oo(e,t){fl=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _o(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Lc(e,n)}}var gi={readContext:Ve,use:fi,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te},Do={readContext:Ve,use:fi,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:go,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,mi(4194308,4,bo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){mi(4,2,e,t)},useMemo:function(e,t){var n=We();t=t===void 0?null:t;var l=e();if(qn){It(!0);try{e()}finally{It(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=We();if(n!==void 0){var a=n(t);if(qn){It(!0);try{n(t)}finally{It(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=jm.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=or(e);var t=e.queue,n=Ro.bind(null,te,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:dr,useDeferredValue:function(e,t){var n=We();return hr(n,e,t)},useTransition:function(){var e=or(!1);return e=Eo.bind(null,te,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=te,a=We();if(se){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),ve===null)throw Error(o(349));(ie&124)!==0||Ps(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,go(to.bind(null,l,i,e),[e]),l.flags|=2048,hl(9,hi(),eo.bind(null,l,i,n,t),null),n},useId:function(){var e=We(),t=ve.identifierPrefix;if(se){var n=Ht,l=Ut;n=(l&~(1<<32-nt(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=oi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=ym++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:pr,useFormState:oo,useActionState:oo,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=gr.bind(null,te,!0,n),n.dispatch=t,[e,t]},useMemoCache:rr,useCacheRefresh:function(){return We().memoizedState=wm.bind(null,te)}},Co={readContext:Ve,use:fi,useCallback:No,useContext:Ve,useEffect:vo,useImperativeHandle:So,useInsertionEffect:yo,useLayoutEffect:xo,useMemo:wo,useReducer:di,useRef:po,useState:function(){return di(Lt)},useDebugValue:dr,useDeferredValue:function(e,t){var n=Ae();return jo(n,de.memoizedState,e,t)},useTransition:function(){var e=di(Lt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:la(e),t]},useSyncExternalStore:Is,useId:Mo,useHostTransitionStatus:pr,useFormState:fo,useActionState:fo,useOptimistic:function(e,t){var n=Ae();return ao(n,de,e,t)},useMemoCache:rr,useCacheRefresh:Ao},Em={readContext:Ve,use:fi,useCallback:No,useContext:Ve,useEffect:vo,useImperativeHandle:So,useInsertionEffect:yo,useLayoutEffect:xo,useMemo:wo,useReducer:sr,useRef:po,useState:function(){return sr(Lt)},useDebugValue:dr,useDeferredValue:function(e,t){var n=Ae();return de===null?hr(n,e,t):jo(n,de.memoizedState,e,t)},useTransition:function(){var e=sr(Lt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:la(e),t]},useSyncExternalStore:Is,useId:Mo,useHostTransitionStatus:pr,useFormState:mo,useActionState:mo,useOptimistic:function(e,t){var n=Ae();return de!==null?ao(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:rr,useCacheRefresh:Ao},ml=null,ua=0;function vi(e){var t=ua;return ua+=1,ml===null&&(ml=[]),Zs(ml,e,t)}function ra(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yi(e,t){throw t.$$typeof===C?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uo(e){var t=e._init;return t(e._payload)}function Ho(e){function t(x,v){if(e){var b=x.deletions;b===null?(x.deletions=[v],x.flags|=16):b.push(v)}}function n(x,v){if(!e)return null;for(;v!==null;)t(x,v),v=v.sibling;return null}function l(x){for(var v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function a(x,v){return x=Ct(x,v),x.index=0,x.sibling=null,x}function i(x,v,b){return x.index=b,e?(b=x.alternate,b!==null?(b=b.index,b<v?(x.flags|=67108866,v):b):(x.flags|=67108866,v)):(x.flags|=1048576,v)}function r(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function s(x,v,b,A){return v===null||v.tag!==6?(v=Bu(b,x.mode,A),v.return=x,v):(v=a(v,b),v.return=x,v)}function h(x,v,b,A){var Y=b.type;return Y===Q?T(x,v,b.props.children,A,b.key):v!==null&&(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ce&&Uo(Y)===v.type)?(v=a(v,b.props),ra(v,b),v.return=x,v):(v=ei(b.type,b.key,b.props,null,x.mode,A),ra(v,b),v.return=x,v)}function N(x,v,b,A){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=qu(b,x.mode,A),v.return=x,v):(v=a(v,b.children||[]),v.return=x,v)}function T(x,v,b,A,Y){return v===null||v.tag!==7?(v=Rn(b,x.mode,A,Y),v.return=x,v):(v=a(v,b),v.return=x,v)}function O(x,v,b){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Bu(""+v,x.mode,b),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case U:return b=ei(v.type,v.key,v.props,null,x.mode,b),ra(b,v),b.return=x,b;case W:return v=qu(v,x.mode,b),v.return=x,v;case Ce:var A=v._init;return v=A(v._payload),O(x,v,b)}if(Qe(v)||Xe(v))return v=Rn(v,x.mode,b,null),v.return=x,v;if(typeof v.then=="function")return O(x,vi(v),b);if(v.$$typeof===P)return O(x,ai(x,v),b);yi(x,v)}return null}function w(x,v,b,A){var Y=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return Y!==null?null:s(x,v,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return b.key===Y?h(x,v,b,A):null;case W:return b.key===Y?N(x,v,b,A):null;case Ce:return Y=b._init,b=Y(b._payload),w(x,v,b,A)}if(Qe(b)||Xe(b))return Y!==null?null:T(x,v,b,A,null);if(typeof b.then=="function")return w(x,v,vi(b),A);if(b.$$typeof===P)return w(x,v,ai(x,b),A);yi(x,b)}return null}function j(x,v,b,A,Y){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return x=x.get(b)||null,s(v,x,""+A,Y);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case U:return x=x.get(A.key===null?b:A.key)||null,h(v,x,A,Y);case W:return x=x.get(A.key===null?b:A.key)||null,N(v,x,A,Y);case Ce:var ne=A._init;return A=ne(A._payload),j(x,v,b,A,Y)}if(Qe(A)||Xe(A))return x=x.get(b)||null,T(v,x,A,Y,null);if(typeof A.then=="function")return j(x,v,b,vi(A),Y);if(A.$$typeof===P)return j(x,v,b,ai(v,A),Y);yi(v,A)}return null}function $(x,v,b,A){for(var Y=null,ne=null,G=v,K=v=0,qe=null;G!==null&&K<b.length;K++){G.index>K?(qe=G,G=null):qe=G.sibling;var ce=w(x,G,b[K],A);if(ce===null){G===null&&(G=qe);break}e&&G&&ce.alternate===null&&t(x,G),v=i(ce,v,K),ne===null?Y=ce:ne.sibling=ce,ne=ce,G=qe}if(K===b.length)return n(x,G),se&&_n(x,K),Y;if(G===null){for(;K<b.length;K++)G=O(x,b[K],A),G!==null&&(v=i(G,v,K),ne===null?Y=G:ne.sibling=G,ne=G);return se&&_n(x,K),Y}for(G=l(G);K<b.length;K++)qe=j(G,x,K,b[K],A),qe!==null&&(e&&qe.alternate!==null&&G.delete(qe.key===null?K:qe.key),v=i(qe,v,K),ne===null?Y=qe:ne.sibling=qe,ne=qe);return e&&G.forEach(function(Nn){return t(x,Nn)}),se&&_n(x,K),Y}function k(x,v,b,A){if(b==null)throw Error(o(151));for(var Y=null,ne=null,G=v,K=v=0,qe=null,ce=b.next();G!==null&&!ce.done;K++,ce=b.next()){G.index>K?(qe=G,G=null):qe=G.sibling;var Nn=w(x,G,ce.value,A);if(Nn===null){G===null&&(G=qe);break}e&&G&&Nn.alternate===null&&t(x,G),v=i(Nn,v,K),ne===null?Y=Nn:ne.sibling=Nn,ne=Nn,G=qe}if(ce.done)return n(x,G),se&&_n(x,K),Y;if(G===null){for(;!ce.done;K++,ce=b.next())ce=O(x,ce.value,A),ce!==null&&(v=i(ce,v,K),ne===null?Y=ce:ne.sibling=ce,ne=ce);return se&&_n(x,K),Y}for(G=l(G);!ce.done;K++,ce=b.next())ce=j(G,x,K,ce.value,A),ce!==null&&(e&&ce.alternate!==null&&G.delete(ce.key===null?K:ce.key),v=i(ce,v,K),ne===null?Y=ce:ne.sibling=ce,ne=ce);return e&&G.forEach(function(T0){return t(x,T0)}),se&&_n(x,K),Y}function me(x,v,b,A){if(typeof b=="object"&&b!==null&&b.type===Q&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case U:e:{for(var Y=b.key;v!==null;){if(v.key===Y){if(Y=b.type,Y===Q){if(v.tag===7){n(x,v.sibling),A=a(v,b.props.children),A.return=x,x=A;break e}}else if(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ce&&Uo(Y)===v.type){n(x,v.sibling),A=a(v,b.props),ra(A,b),A.return=x,x=A;break e}n(x,v);break}else t(x,v);v=v.sibling}b.type===Q?(A=Rn(b.props.children,x.mode,A,b.key),A.return=x,x=A):(A=ei(b.type,b.key,b.props,null,x.mode,A),ra(A,b),A.return=x,x=A)}return r(x);case W:e:{for(Y=b.key;v!==null;){if(v.key===Y)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(x,v.sibling),A=a(v,b.children||[]),A.return=x,x=A;break e}else{n(x,v);break}else t(x,v);v=v.sibling}A=qu(b,x.mode,A),A.return=x,x=A}return r(x);case Ce:return Y=b._init,b=Y(b._payload),me(x,v,b,A)}if(Qe(b))return $(x,v,b,A);if(Xe(b)){if(Y=Xe(b),typeof Y!="function")throw Error(o(150));return b=Y.call(b),k(x,v,b,A)}if(typeof b.then=="function")return me(x,v,vi(b),A);if(b.$$typeof===P)return me(x,v,ai(x,b),A);yi(x,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,v!==null&&v.tag===6?(n(x,v.sibling),A=a(v,b),A.return=x,x=A):(n(x,v),A=Bu(b,x.mode,A),A.return=x,x=A),r(x)):n(x,v)}return function(x,v,b,A){try{ua=0;var Y=me(x,v,b,A);return ml=null,Y}catch(G){if(G===Fl||G===ui)throw G;var ne=at(29,G,null,x.mode);return ne.lanes=A,ne.return=x,ne}finally{}}}var pl=Ho(!0),Bo=Ho(!1),vt=D(null),Tt=null;function rn(e){var t=e.alternate;B(_e,_e.current&1),B(vt,e),Tt===null&&(t===null||ol.current!==null||t.memoizedState!==null)&&(Tt=e)}function qo(e){if(e.tag===22){if(B(_e,_e.current),B(vt,e),Tt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tt=e)}}else cn()}function cn(){B(_e,_e.current),B(vt,vt.current)}function Yt(e){L(vt),Tt===e&&(Tt=null),L(_e)}var _e=D(0);function xi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||uc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function vr(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yr={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=ct(),a=ln(l);a.payload=t,n!=null&&(a.callback=n),t=an(e,a,l),t!==null&&(st(t,e,l),Pl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=ct(),a=ln(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=an(e,a,l),t!==null&&(st(t,e,l),Pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ct(),l=ln(n);l.tag=2,t!=null&&(l.callback=t),t=an(e,l,n),t!==null&&(st(t,e,n),Pl(t,e,n))}};function Lo(e,t,n,l,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!Ql(n,l)||!Ql(a,i):!0}function Yo(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&yr.enqueueReplaceState(t,t.state,null)}function Ln(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=M({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Go(e){bi(e)}function Xo(e){console.error(e)}function Qo(e){bi(e)}function Si(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zo(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function xr(e,t,n){return n=ln(n),n.tag=3,n.payload={element:null},n.callback=function(){Si(e,t)},n}function Vo(e){return e=ln(e),e.tag=3,e}function ko(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Zo(t,n,l)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Zo(t,n,l),typeof a!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Tm(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Jl(t,n,a,!0),n=vt.current,n!==null){switch(n.tag){case 13:return Tt===null?Qr():n.alternate===null&&Ee===0&&(Ee=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Ju?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Vr(e,l,a)),!1;case 22:return n.flags|=65536,l===Ju?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Vr(e,l,a)),!1}throw Error(o(435,n.tag))}return Vr(e,l,a),Qr(),!1}if(se)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==Gu&&(e=Error(o(422),{cause:l}),Kl(ht(e,n)))):(l!==Gu&&(t=Error(o(423),{cause:l}),Kl(ht(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=ht(l,n),a=xr(e.stateNode,l,a),Fu(e,a),Ee!==4&&(Ee=2)),!1;var i=Error(o(520),{cause:l});if(i=ht(i,n),ma===null?ma=[i]:ma.push(i),Ee!==4&&(Ee=2),t===null)return!0;l=ht(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=xr(n.stateNode,l,e),Fu(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(mn===null||!mn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Vo(a),ko(a,e,n,l),Fu(n,a),!1}n=n.return}while(n!==null);return!1}var Ko=Error(o(461)),He=!1;function Le(e,t,n,l){t.child=e===null?Bo(t,null,n,l):pl(t,e.child,n,l)}function Jo(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var r={};for(var s in l)s!=="ref"&&(r[s]=l[s])}else r=l;return Hn(t),l=nr(e,t,n,r,i,a),s=lr(),e!==null&&!He?(ar(e,t,a),Gt(e,t,a)):(se&&s&&Lu(t),t.flags|=1,Le(e,t,l,a),t.child)}function $o(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!Hu(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Wo(e,t,i,l,a)):(e=ei(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!zr(e,a)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ql,n(r,l)&&e.ref===t.ref)return Gt(e,t,a)}return t.flags|=1,e=Ct(i,l),e.ref=t.ref,e.return=t,t.child=e}function Wo(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(Ql(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,zr(e,a))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Gt(e,t,a)}return br(e,t,n,l,a)}function Fo(e,t,n){var l=t.pendingProps,a=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Io(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,i!==null?i.cachePool:null),i!==null?$s(t,i):Pu(),qo(t);else return t.lanes=t.childLanes=536870912,Io(e,t,i!==null?i.baseLanes|n:n,n)}else i!==null?(ii(t,i.cachePool),$s(t,i),cn(),t.memoizedState=null):(e!==null&&ii(t,null),Pu(),cn());return Le(e,t,a,n),t.child}function Io(e,t,n,l){var a=Ku();return a=a===null?null:{parent:Oe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ii(t,null),Pu(),qo(t),e!==null&&Jl(e,t,l,!0),null}function Ni(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function br(e,t,n,l,a){return Hn(t),n=nr(e,t,n,l,void 0,a),l=lr(),e!==null&&!He?(ar(e,t,a),Gt(e,t,a)):(se&&l&&Lu(t),t.flags|=1,Le(e,t,n,a),t.child)}function Po(e,t,n,l,a,i){return Hn(t),t.updateQueue=null,n=Fs(t,l,n,a),Ws(e),l=lr(),e!==null&&!He?(ar(e,t,i),Gt(e,t,i)):(se&&l&&Lu(t),t.flags|=1,Le(e,t,n,i),t.child)}function ef(e,t,n,l,a){if(Hn(t),t.stateNode===null){var i=il,r=n.contextType;typeof r=="object"&&r!==null&&(i=Ve(r)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=yr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},$u(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?Ve(r):il,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(vr(t,n,r,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&yr.enqueueReplaceState(i,i.state,null),ta(t,l,i,a),ea(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,h=Ln(n,s);i.props=h;var N=i.context,T=n.contextType;r=il,typeof T=="object"&&T!==null&&(r=Ve(T));var O=n.getDerivedStateFromProps;T=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,T||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||N!==r)&&Yo(t,i,l,r),nn=!1;var w=t.memoizedState;i.state=w,ta(t,l,i,a),ea(),N=t.memoizedState,s||w!==N||nn?(typeof O=="function"&&(vr(t,n,O,l),N=t.memoizedState),(h=nn||Lo(t,n,h,l,w,N,r))?(T||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=N),i.props=l,i.state=N,i.context=r,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Wu(e,t),r=t.memoizedProps,T=Ln(n,r),i.props=T,O=t.pendingProps,w=i.context,N=n.contextType,h=il,typeof N=="object"&&N!==null&&(h=Ve(N)),s=n.getDerivedStateFromProps,(N=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==O||w!==h)&&Yo(t,i,l,h),nn=!1,w=t.memoizedState,i.state=w,ta(t,l,i,a),ea();var j=t.memoizedState;r!==O||w!==j||nn||e!==null&&e.dependencies!==null&&li(e.dependencies)?(typeof s=="function"&&(vr(t,n,s,l),j=t.memoizedState),(T=nn||Lo(t,n,T,l,w,j,h)||e!==null&&e.dependencies!==null&&li(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,j,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,j,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=j),i.props=l,i.state=j,i.context=h,l=T):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ni(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=pl(t,e.child,null,a),t.child=pl(t,null,n,a)):Le(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Gt(e,t,a),e}function tf(e,t,n,l){return kl(),t.flags|=256,Le(e,t,n,l),t.child}var Sr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nr(e){return{baseLanes:e,cachePool:Gs()}}function wr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=yt),e}function nf(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(a?rn(t):cn(),se){var s=je,h;if(h=s){e:{for(h=s,s=Et;h.nodeType!==8;){if(!s){s=null;break e}if(h=wt(h.nextSibling),h===null){s=null;break e}}s=h}s!==null?(t.memoizedState={dehydrated:s,treeContext:On!==null?{id:Ut,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},h=at(18,null,null,0),h.stateNode=s,h.return=t,t.child=h,Ke=t,je=null,h=!0):h=!1}h||Cn(t)}if(s=t.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return uc(s)?t.lanes=32:t.lanes=536870912,null;Yt(t)}return s=l.children,l=l.fallback,a?(cn(),a=t.mode,s=wi({mode:"hidden",children:s},a),l=Rn(l,a,n,null),s.return=t,l.return=t,s.sibling=l,t.child=s,a=t.child,a.memoizedState=Nr(n),a.childLanes=wr(e,r,n),t.memoizedState=Sr,l):(rn(t),jr(t,s))}if(h=e.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(i)t.flags&256?(rn(t),t.flags&=-257,t=Er(e,t,n)):t.memoizedState!==null?(cn(),t.child=e.child,t.flags|=128,t=null):(cn(),a=l.fallback,s=t.mode,l=wi({mode:"visible",children:l.children},s),a=Rn(a,s,n,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,pl(t,e.child,null,n),l=t.child,l.memoizedState=Nr(n),l.childLanes=wr(e,r,n),t.memoizedState=Sr,t=a);else if(rn(t),uc(s)){if(r=s.nextSibling&&s.nextSibling.dataset,r)var N=r.dgst;r=N,l=Error(o(419)),l.stack="",l.digest=r,Kl({value:l,source:null,stack:null}),t=Er(e,t,n)}else if(He||Jl(e,t,n,!1),r=(n&e.childLanes)!==0,He||r){if(r=ve,r!==null&&(l=n&-n,l=(l&42)!==0?1:ru(l),l=(l&(r.suspendedLanes|n))!==0?0:l,l!==0&&l!==h.retryLane))throw h.retryLane=l,al(e,l),st(r,e,l),Ko;s.data==="$?"||Qr(),t=Er(e,t,n)}else s.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,je=wt(s.nextSibling),Ke=t,se=!0,Dn=null,Et=!1,e!==null&&(pt[gt++]=Ut,pt[gt++]=Ht,pt[gt++]=On,Ut=e.id,Ht=e.overflow,On=t),t=jr(t,l.children),t.flags|=4096);return t}return a?(cn(),a=l.fallback,s=t.mode,h=e.child,N=h.sibling,l=Ct(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,N!==null?a=Ct(N,a):(a=Rn(a,s,n,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,s=e.child.memoizedState,s===null?s=Nr(n):(h=s.cachePool,h!==null?(N=Oe._currentValue,h=h.parent!==N?{parent:N,pool:N}:h):h=Gs(),s={baseLanes:s.baseLanes|n,cachePool:h}),a.memoizedState=s,a.childLanes=wr(e,r,n),t.memoizedState=Sr,l):(rn(t),n=e.child,e=n.sibling,n=Ct(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function jr(e,t){return t=wi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wi(e,t){return e=at(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Er(e,t,n){return pl(t,e.child,null,n),e=jr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Qu(e.return,t,n)}function Tr(e,t,n,l,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=a)}function af(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;if(Le(e,t,l.children,n),l=_e.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lf(e,n,t);else if(e.tag===19)lf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(B(_e,l),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&xi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Tr(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&xi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Tr(t,!0,n,null,i);break;case"together":Tr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Jl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&li(e)))}function zm(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),tn(t,Oe,e.memoizedState.cache),kl();break;case 27:case 5:nu(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:tn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(rn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?nf(e,t,n):(rn(t),e=Gt(e,t,n),e!==null?e.sibling:null);rn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Jl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return af(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),B(_e,_e.current),l)break;return null;case 22:case 23:return t.lanes=0,Fo(e,t,n);case 24:tn(t,Oe,e.memoizedState.cache)}return Gt(e,t,n)}function uf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!zr(e,n)&&(t.flags&128)===0)return He=!1,zm(e,t,n);He=(e.flags&131072)!==0}else He=!1,se&&(t.flags&1048576)!==0&&Cs(t,ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,a=l._init;if(l=a(l._payload),t.type=l,typeof l=="function")Hu(l)?(e=Ln(l,e),t.tag=1,t=ef(null,t,l,e,n)):(t.tag=0,t=br(null,t,l,e,n));else{if(l!=null){if(a=l.$$typeof,a===be){t.tag=11,t=Jo(null,t,l,e,n);break e}else if(a===Re){t.tag=14,t=$o(null,t,l,e,n);break e}}throw t=jn(l)||l,Error(o(306,t,""))}}return t;case 0:return br(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=Ln(l,t.pendingProps),ef(e,t,l,a,n);case 3:e:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,Wu(e,t),ta(t,l,null,n);var r=t.memoizedState;if(l=r.cache,tn(t,Oe,l),l!==i.cache&&Zu(t,[Oe],n,!0),ea(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=tf(e,t,l,n);break e}else if(l!==a){a=ht(Error(o(424)),t),Kl(a),t=tf(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=wt(e.firstChild),Ke=t,se=!0,Dn=null,Et=!0,n=Bo(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(kl(),l===a){t=Gt(e,t,n);break e}Le(e,t,l,n)}t=t.child}return t;case 26:return Ni(e,t),e===null?(n=od(t.type,null,t.pendingProps,null))?t.memoizedState=n:se||(n=t.type,e=t.pendingProps,l=Bi(I.current).createElement(n),l[Ze]=t,l[Je]=e,Ge(l,n,e),Ue(l),t.stateNode=l):t.memoizedState=od(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nu(t),e===null&&se&&(l=t.stateNode=rd(t.type,t.pendingProps,I.current),Ke=t,Et=!0,a=je,vn(t.type)?(rc=a,je=wt(l.firstChild)):je=a),Le(e,t,t.pendingProps.children,n),Ni(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((a=l=je)&&(l=t0(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Ke=t,je=wt(l.firstChild),Et=!1,a=!0):a=!1),a||Cn(t)),nu(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,lc(a,i)?l=null:r!==null&&lc(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=nr(e,t,xm,null,null,n),wa._currentValue=a),Ni(e,t),Le(e,t,l,n),t.child;case 6:return e===null&&se&&((e=n=je)&&(n=n0(n,t.pendingProps,Et),n!==null?(t.stateNode=n,Ke=t,je=null,e=!0):e=!1),e||Cn(t)),null;case 13:return nf(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=pl(t,null,l,n):Le(e,t,l,n),t.child;case 11:return Jo(e,t,t.type,t.pendingProps,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,tn(t,t.type,l.value),Le(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,Hn(t),a=Ve(a),l=l(a),t.flags|=1,Le(e,t,l,n),t.child;case 14:return $o(e,t,t.type,t.pendingProps,n);case 15:return Wo(e,t,t.type,t.pendingProps,n);case 19:return af(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=wi(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ct(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Fo(e,t,n);case 24:return Hn(t),l=Ve(Oe),e===null?(a=Ku(),a===null&&(a=ve,i=Vu(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},$u(t),tn(t,Oe,a)):((e.lanes&n)!==0&&(Wu(e,t),ta(t,null,null,n),ea()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),tn(t,Oe,l)):(l=i.cache,tn(t,Oe,l),l!==a.cache&&Zu(t,[Oe],n,!0))),Le(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Xt(e){e.flags|=4}function rf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pd(t)){if(t=vt.current,t!==null&&((ie&4194048)===ie?Tt!==null:(ie&62914560)!==ie&&(ie&536870912)===0||t!==Tt))throw Il=Ju,Xs;e.flags|=8192}}function ji(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bc():536870912,e.lanes|=t,xl|=t)}function ca(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Mm(e,t,n){var l=t.pendingProps;switch(Yu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),qt(Oe),Ft(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vl(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bs())),Se(t),null;case 26:return n=t.memoizedState,e===null?(Xt(t),n!==null?(Se(t),rf(t,n)):(Se(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Xt(t),Se(t),rf(t,n)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==l&&Xt(t),Se(t),t.flags&=-16777217),null;case 27:Ua(t),n=I.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}e=V.current,Vl(t)?Us(t):(e=rd(a,l,n),t.stateNode=e,Xt(t))}return Se(t),null;case 5:if(Ua(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}if(e=V.current,Vl(t))Us(t);else{switch(a=Bi(I.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?a.createElement("select",{is:l.is}):a.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?a.createElement(n,{is:l.is}):a.createElement(n)}}e[Ze]=t,e[Je]=l;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(Ge(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xt(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=I.current,Vl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Ke,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||ed(e.nodeValue,n)),e||Cn(t)}else e=Bi(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Vl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(o(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a[Ze]=t}else kl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),a=!1}else a=Bs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Yt(t),t):(Yt(t),null)}if(Yt(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ji(t,t.updateQueue),Se(t),null;case 4:return Ft(),e===null&&Ir(t.stateNode.containerInfo),Se(t),null;case 10:return qt(t.type),Se(t),null;case 19:if(L(_e),a=t.memoizedState,a===null)return Se(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)ca(a,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=xi(e),i!==null){for(t.flags|=128,ca(a,!1),e=i.updateQueue,t.updateQueue=e,ji(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ds(n,e),n=n.sibling;return B(_e,_e.current&1|2),t.child}e=e.sibling}a.tail!==null&&jt()>zi&&(t.flags|=128,l=!0,ca(a,!1),t.lanes=4194304)}else{if(!l)if(e=xi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ji(t,e),ca(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!se)return Se(t),null}else 2*jt()-a.renderingStartTime>zi&&n!==536870912&&(t.flags|=128,l=!0,ca(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=jt(),t.sibling=null,e=_e.current,B(_e,l?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Yt(t),er(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),n=t.updateQueue,n!==null&&ji(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&L(Bn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qt(Oe),Se(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Am(e,t){switch(Yu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(Oe),Ft(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ua(t),null;case 13:if(Yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));kl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(_e),null;case 4:return Ft(),null;case 10:return qt(t.type),null;case 22:case 23:return Yt(t),er(),e!==null&&L(Bn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(Oe),null;case 25:return null;default:return null}}function cf(e,t){switch(Yu(t),t.tag){case 3:qt(Oe),Ft();break;case 26:case 27:case 5:Ua(t);break;case 4:Ft();break;case 13:Yt(t);break;case 19:L(_e);break;case 10:qt(t.type);break;case 22:case 23:Yt(t),er(),e!==null&&L(Bn);break;case 24:qt(Oe)}}function sa(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,r=n.inst;l=i(),r.destroy=l}n=n.next}while(n!==a)}}catch(s){ge(t,t.return,s)}}function sn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var r=l.inst,s=r.destroy;if(s!==void 0){r.destroy=void 0,a=t;var h=n,N=s;try{N()}catch(T){ge(a,h,T)}}}l=l.next}while(l!==i)}}catch(T){ge(t,t.return,T)}}function sf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Js(t,n)}catch(l){ge(e,e.return,l)}}}function of(e,t,n){n.props=Ln(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ge(e,t,l)}}function oa(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){ge(e,t,a)}}function zt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){ge(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ge(e,t,a)}else n.current=null}function ff(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){ge(e,e.return,a)}}function Mr(e,t,n){try{var l=e.stateNode;Wm(l,e.type,n,t),l[Je]=t}catch(a){ge(e,e.return,a)}}function df(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vn(e.type)||e.tag===4}function Ar(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hi));else if(l!==4&&(l===27&&vn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Rr(e,t,n),e=e.sibling;e!==null;)Rr(e,t,n),e=e.sibling}function Ei(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&vn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ei(e,t,n),e=e.sibling;e!==null;)Ei(e,t,n),e=e.sibling}function hf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ge(t,l,n),t[Ze]=e,t[Je]=n}catch(i){ge(e,e.return,i)}}var Qt=!1,ze=!1,Or=!1,mf=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Rm(e,t){if(e=e.containerInfo,tc=Qi,e=ws(e),Au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,s=-1,h=-1,N=0,T=0,O=e,w=null;t:for(;;){for(var j;O!==n||a!==0&&O.nodeType!==3||(s=r+a),O!==i||l!==0&&O.nodeType!==3||(h=r+l),O.nodeType===3&&(r+=O.nodeValue.length),(j=O.firstChild)!==null;)w=O,O=j;for(;;){if(O===e)break t;if(w===n&&++N===a&&(s=r),w===i&&++T===l&&(h=r),(j=O.nextSibling)!==null)break;O=w,w=O.parentNode}O=j}n=s===-1||h===-1?null:{start:s,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(nc={focusedElem:e,selectionRange:n},Qi=!1,Be=t;Be!==null;)if(t=Be,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Be=e;else for(;Be!==null;){switch(t=Be,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var $=Ln(n.type,a,n.elementType===n.type);e=l.getSnapshotBeforeUpdate($,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(k){ge(n,n.return,k)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ic(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ic(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Be=e;break}Be=t.return}}function pf(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:on(e,n),l&4&&sa(5,n);break;case 1:if(on(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ge(n,n.return,r)}else{var a=Ln(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ge(n,n.return,r)}}l&64&&sf(n),l&512&&oa(n,n.return);break;case 3:if(on(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Js(e,t)}catch(r){ge(n,n.return,r)}}break;case 27:t===null&&l&4&&hf(n);case 26:case 5:on(e,n),t===null&&l&4&&ff(n),l&512&&oa(n,n.return);break;case 12:on(e,n);break;case 13:on(e,n),l&4&&yf(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Lm.bind(null,n),l0(e,n))));break;case 22:if(l=n.memoizedState!==null||Qt,!l){t=t!==null&&t.memoizedState!==null||ze,a=Qt;var i=ze;Qt=l,(ze=t)&&!i?fn(e,n,(n.subtreeFlags&8772)!==0):on(e,n),Qt=a,ze=i}break;case 30:break;default:on(e,n)}}function gf(e){var t=e.alternate;t!==null&&(e.alternate=null,gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ou(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,Fe=!1;function Zt(e,t,n){for(n=n.child;n!==null;)vf(e,t,n),n=n.sibling}function vf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 26:ze||zt(n,t),Zt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ze||zt(n,t);var l=xe,a=Fe;vn(n.type)&&(xe=n.stateNode,Fe=!1),Zt(e,t,n),xa(n.stateNode),xe=l,Fe=a;break;case 5:ze||zt(n,t);case 6:if(l=xe,a=Fe,xe=null,Zt(e,t,n),xe=l,Fe=a,xe!==null)if(Fe)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(n.stateNode)}catch(i){ge(n,t,i)}else try{xe.removeChild(n.stateNode)}catch(i){ge(n,t,i)}break;case 18:xe!==null&&(Fe?(e=xe,id(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),za(e)):id(xe,n.stateNode));break;case 4:l=xe,a=Fe,xe=n.stateNode.containerInfo,Fe=!0,Zt(e,t,n),xe=l,Fe=a;break;case 0:case 11:case 14:case 15:ze||sn(2,n,t),ze||sn(4,n,t),Zt(e,t,n);break;case 1:ze||(zt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&of(n,t,l)),Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:ze=(l=ze)||n.memoizedState!==null,Zt(e,t,n),ze=l;break;default:Zt(e,t,n)}}function yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{za(e)}catch(n){ge(t,t.return,n)}}function Om(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mf),t;default:throw Error(o(435,e.tag))}}function _r(e,t){var n=Om(e);t.forEach(function(l){var a=Ym.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}function it(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 27:if(vn(s.type)){xe=s.stateNode,Fe=!1;break e}break;case 5:xe=s.stateNode,Fe=!1;break e;case 3:case 4:xe=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(xe===null)throw Error(o(160));vf(i,r,a),xe=null,Fe=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)xf(t,e),t=t.sibling}var Nt=null;function xf(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:it(t,e),ut(e),l&4&&(sn(3,e,e.return),sa(3,e),sn(5,e,e.return));break;case 1:it(t,e),ut(e),l&512&&(ze||n===null||zt(n,n.return)),l&64&&Qt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Nt;if(it(t,e),ut(e),l&512&&(ze||n===null||zt(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Cl]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),Ge(i,l,n),i[Ze]=e,Ue(i),l=i;break e;case"link":var r=hd("link","href",a).get(l+(n.href||""));if(r){for(var s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(s,1);break t}}i=a.createElement(l),Ge(i,l,n),a.head.appendChild(i);break;case"meta":if(r=hd("meta","content",a).get(l+(n.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(s,1);break t}}i=a.createElement(l),Ge(i,l,n),a.head.appendChild(i);break;default:throw Error(o(468,l))}i[Ze]=e,Ue(i),l=i}e.stateNode=l}else md(a,e.type,e.stateNode);else e.stateNode=dd(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?md(a,e.type,e.stateNode):dd(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Mr(e,e.memoizedProps,n.memoizedProps)}break;case 27:it(t,e),ut(e),l&512&&(ze||n===null||zt(n,n.return)),n!==null&&l&4&&Mr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(it(t,e),ut(e),l&512&&(ze||n===null||zt(n,n.return)),e.flags&32){a=e.stateNode;try{Fn(a,"")}catch(j){ge(e,e.return,j)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,Mr(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Or=!0);break;case 6:if(it(t,e),ut(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(j){ge(e,e.return,j)}}break;case 3:if(Yi=null,a=Nt,Nt=qi(t.containerInfo),it(t,e),Nt=a,ut(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{za(t.containerInfo)}catch(j){ge(e,e.return,j)}Or&&(Or=!1,bf(e));break;case 4:l=Nt,Nt=qi(e.stateNode.containerInfo),it(t,e),ut(e),Nt=l;break;case 12:it(t,e),ut(e);break;case 13:it(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qr=jt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_r(e,l)));break;case 22:a=e.memoizedState!==null;var h=n!==null&&n.memoizedState!==null,N=Qt,T=ze;if(Qt=N||a,ze=T||h,it(t,e),ze=T,Qt=N,ut(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||h||Qt||ze||Yn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){h=n=t;try{if(i=h.stateNode,a)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=h.stateNode;var O=h.memoizedProps.style,w=O!=null&&O.hasOwnProperty("display")?O.display:null;s.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(j){ge(h,h.return,j)}}}else if(t.tag===6){if(n===null){h=t;try{h.stateNode.nodeValue=a?"":h.memoizedProps}catch(j){ge(h,h.return,j)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,_r(e,n))));break;case 19:it(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_r(e,l)));break;case 30:break;case 21:break;default:it(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(df(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var a=n.stateNode,i=Ar(e);Ei(e,i,a);break;case 5:var r=n.stateNode;n.flags&32&&(Fn(r,""),n.flags&=-33);var s=Ar(e);Ei(e,s,r);break;case 3:case 4:var h=n.stateNode.containerInfo,N=Ar(e);Rr(e,N,h);break;default:throw Error(o(161))}}catch(T){ge(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function on(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pf(e,t.alternate,t),t=t.sibling}function Yn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sn(4,t,t.return),Yn(t);break;case 1:zt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&of(t,t.return,n),Yn(t);break;case 27:xa(t.stateNode);case 26:case 5:zt(t,t.return),Yn(t);break;case 22:t.memoizedState===null&&Yn(t);break;case 30:Yn(t);break;default:Yn(t)}e=e.sibling}}function fn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:fn(a,i,n),sa(4,i);break;case 1:if(fn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(N){ge(l,l.return,N)}if(l=i,a=l.updateQueue,a!==null){var s=l.stateNode;try{var h=a.shared.hiddenCallbacks;if(h!==null)for(a.shared.hiddenCallbacks=null,a=0;a<h.length;a++)Ks(h[a],s)}catch(N){ge(l,l.return,N)}}n&&r&64&&sf(i),oa(i,i.return);break;case 27:hf(i);case 26:case 5:fn(a,i,n),n&&l===null&&r&4&&ff(i),oa(i,i.return);break;case 12:fn(a,i,n);break;case 13:fn(a,i,n),n&&r&4&&yf(a,i);break;case 22:i.memoizedState===null&&fn(a,i,n),oa(i,i.return);break;case 30:break;default:fn(a,i,n)}t=t.sibling}}function Dr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$l(n))}function Cr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e))}function Mt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sf(e,t,n,l),t=t.sibling}function Sf(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,n,l),a&2048&&sa(9,t);break;case 1:Mt(e,t,n,l);break;case 3:Mt(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e)));break;case 12:if(a&2048){Mt(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,s=i.onPostCommit;typeof s=="function"&&s(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else Mt(e,t,n,l);break;case 13:Mt(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,n,l):fa(e,t):i._visibility&2?Mt(e,t,n,l):(i._visibility|=2,gl(e,t,n,l,(t.subtreeFlags&10256)!==0)),a&2048&&Dr(r,t);break;case 24:Mt(e,t,n,l),a&2048&&Cr(t.alternate,t);break;default:Mt(e,t,n,l)}}function gl(e,t,n,l,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,r=t,s=n,h=l,N=r.flags;switch(r.tag){case 0:case 11:case 15:gl(i,r,s,h,a),sa(8,r);break;case 23:break;case 22:var T=r.stateNode;r.memoizedState!==null?T._visibility&2?gl(i,r,s,h,a):fa(i,r):(T._visibility|=2,gl(i,r,s,h,a)),a&&N&2048&&Dr(r.alternate,r);break;case 24:gl(i,r,s,h,a),a&&N&2048&&Cr(r.alternate,r);break;default:gl(i,r,s,h,a)}t=t.sibling}}function fa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:fa(n,l),a&2048&&Dr(l.alternate,l);break;case 24:fa(n,l),a&2048&&Cr(l.alternate,l);break;default:fa(n,l)}t=t.sibling}}var da=8192;function vl(e){if(e.subtreeFlags&da)for(e=e.child;e!==null;)Nf(e),e=e.sibling}function Nf(e){switch(e.tag){case 26:vl(e),e.flags&da&&e.memoizedState!==null&&g0(Nt,e.memoizedState,e.memoizedProps);break;case 5:vl(e);break;case 3:case 4:var t=Nt;Nt=qi(e.stateNode.containerInfo),vl(e),Nt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=da,da=16777216,vl(e),da=t):vl(e));break;default:vl(e)}}function wf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ha(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Be=l,Ef(l,e)}wf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jf(e),e=e.sibling}function jf(e){switch(e.tag){case 0:case 11:case 15:ha(e),e.flags&2048&&sn(9,e,e.return);break;case 3:ha(e);break;case 12:ha(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ti(e)):ha(e);break;default:ha(e)}}function Ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Be=l,Ef(l,e)}wf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sn(8,t,t.return),Ti(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ti(t));break;default:Ti(t)}e=e.sibling}}function Ef(e,t){for(;Be!==null;){var n=Be;switch(n.tag){case 0:case 11:case 15:sn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$l(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Be=l;else e:for(n=e;Be!==null;){l=Be;var a=l.sibling,i=l.return;if(gf(l),l===n){Be=null;break e}if(a!==null){a.return=i,Be=a;break e}Be=i}}}var _m={getCacheForType:function(e){var t=Ve(Oe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Dm=typeof WeakMap=="function"?WeakMap:Map,oe=0,ve=null,le=null,ie=0,fe=0,rt=null,dn=!1,yl=!1,Ur=!1,Vt=0,Ee=0,hn=0,Gn=0,Hr=0,yt=0,xl=0,ma=null,Ie=null,Br=!1,qr=0,zi=1/0,Mi=null,mn=null,Ye=0,pn=null,bl=null,Sl=0,Lr=0,Yr=null,Tf=null,pa=0,Gr=null;function ct(){if((oe&2)!==0&&ie!==0)return ie&-ie;if(z.T!==null){var e=cl;return e!==0?e:Jr()}return Yc()}function zf(){yt===0&&(yt=(ie&536870912)===0||se?Hc():536870912);var e=vt.current;return e!==null&&(e.flags|=32),yt}function st(e,t,n){(e===ve&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Nl(e,0),gn(e,ie,yt,!1)),Dl(e,n),((oe&2)===0||e!==ve)&&(e===ve&&((oe&2)===0&&(Gn|=n),Ee===4&&gn(e,ie,yt,!1)),At(e))}function Mf(e,t,n){if((oe&6)!==0)throw Error(o(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||_l(e,t),a=l?Hm(e,t):Zr(e,t,!0),i=l;do{if(a===0){yl&&!l&&gn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!Cm(n)){a=Zr(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var s=e;a=ma;var h=s.current.memoizedState.isDehydrated;if(h&&(Nl(s,r).flags|=256),r=Zr(s,r,!1),r!==2){if(Ur&&!h){s.errorRecoveryDisabledLanes|=i,Gn|=i,a=4;break e}i=Ie,Ie=a,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}a=r}if(i=!1,a!==2)continue}}if(a===1){Nl(e,0),gn(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:gn(l,t,yt,!dn);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(a=qr+300-jt(),10<a)){if(gn(l,t,yt,!dn),La(l,0,!0)!==0)break e;l.timeoutHandle=ld(Af.bind(null,l,n,Ie,Mi,Br,t,yt,Gn,xl,dn,i,2,-0,0),a);break e}Af(l,n,Ie,Mi,Br,t,yt,Gn,xl,dn,i,0,-0,0)}}break}while(!0);At(e)}function Af(e,t,n,l,a,i,r,s,h,N,T,O,w,j){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(Na={stylesheets:null,count:0,unsuspend:p0},Nf(t),O=v0(),O!==null)){e.cancelPendingCommit=O(Hf.bind(null,e,t,i,n,l,a,r,s,h,T,1,w,j)),gn(e,i,r,!N);return}Hf(e,t,i,n,l,a,r,s,h)}function Cm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!lt(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t,n,l){t&=~Hr,t&=~Gn,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-nt(a),r=1<<i;l[i]=-1,a&=~r}n!==0&&qc(e,n,t)}function Ai(){return(oe&6)===0?(ga(0),!1):!0}function Xr(){if(le!==null){if(fe===0)var e=le.return;else e=le,Bt=Un=null,ir(e),ml=null,ua=0,e=le;for(;e!==null;)cf(e.alternate,e),e=e.return;le=null}}function Nl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Im(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Xr(),ve=e,le=n=Ct(e.current,null),ie=t,fe=0,rt=null,dn=!1,yl=_l(e,t),Ur=!1,xl=yt=Hr=Gn=hn=Ee=0,Ie=ma=null,Br=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-nt(l),i=1<<a;t|=e[a],l&=~i}return Vt=t,Fa(),n}function Rf(e,t){te=null,z.H=gi,t===Fl||t===ui?(t=Vs(),fe=3):t===Xs?(t=Vs(),fe=4):fe=t===Ko?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,le===null&&(Ee=1,Si(e,ht(t,e.current)))}function Of(){var e=z.H;return z.H=gi,e===null?gi:e}function _f(){var e=z.A;return z.A=_m,e}function Qr(){Ee=4,dn||(ie&4194048)!==ie&&vt.current!==null||(yl=!0),(hn&134217727)===0&&(Gn&134217727)===0||ve===null||gn(ve,ie,yt,!1)}function Zr(e,t,n){var l=oe;oe|=2;var a=Of(),i=_f();(ve!==e||ie!==t)&&(Mi=null,Nl(e,t)),t=!1;var r=Ee;e:do try{if(fe!==0&&le!==null){var s=le,h=rt;switch(fe){case 8:Xr(),r=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var N=fe;if(fe=0,rt=null,wl(e,s,h,N),n&&yl){r=0;break e}break;default:N=fe,fe=0,rt=null,wl(e,s,h,N)}}Um(),r=Ee;break}catch(T){Rf(e,T)}while(!0);return t&&e.shellSuspendCounter++,Bt=Un=null,oe=l,z.H=a,z.A=i,le===null&&(ve=null,ie=0,Fa()),r}function Um(){for(;le!==null;)Df(le)}function Hm(e,t){var n=oe;oe|=2;var l=Of(),a=_f();ve!==e||ie!==t?(Mi=null,zi=jt()+500,Nl(e,t)):yl=_l(e,t);e:do try{if(fe!==0&&le!==null){t=le;var i=rt;t:switch(fe){case 1:fe=0,rt=null,wl(e,t,i,1);break;case 2:case 9:if(Qs(i)){fe=0,rt=null,Cf(t);break}t=function(){fe!==2&&fe!==9||ve!==e||(fe=7),At(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Qs(i)?(fe=0,rt=null,Cf(t)):(fe=0,rt=null,wl(e,t,i,7));break;case 5:var r=null;switch(le.tag){case 26:r=le.memoizedState;case 5:case 27:var s=le;if(!r||pd(r)){fe=0,rt=null;var h=s.sibling;if(h!==null)le=h;else{var N=s.return;N!==null?(le=N,Ri(N)):le=null}break t}}fe=0,rt=null,wl(e,t,i,5);break;case 6:fe=0,rt=null,wl(e,t,i,6);break;case 8:Xr(),Ee=6;break e;default:throw Error(o(462))}}Bm();break}catch(T){Rf(e,T)}while(!0);return Bt=Un=null,z.H=l,z.A=a,oe=n,le!==null?0:(ve=null,ie=0,Fa(),Ee)}function Bm(){for(;le!==null&&!ih();)Df(le)}function Df(e){var t=uf(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?Ri(e):le=t}function Cf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Po(n,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Po(n,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:ir(t);default:cf(n,t),t=le=Ds(t,Vt),t=uf(n,t,Vt)}e.memoizedProps=e.pendingProps,t===null?Ri(e):le=t}function wl(e,t,n,l){Bt=Un=null,ir(t),ml=null,ua=0;var a=t.return;try{if(Tm(e,a,t,n,ie)){Ee=1,Si(e,ht(n,e.current)),le=null;return}}catch(i){if(a!==null)throw le=a,i;Ee=1,Si(e,ht(n,e.current)),le=null;return}t.flags&32768?(se||l===1?e=!0:yl||(ie&536870912)!==0?e=!1:(dn=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Uf(t,e)):Ri(t)}function Ri(e){var t=e;do{if((t.flags&32768)!==0){Uf(t,dn);return}e=t.return;var n=Mm(t.alternate,t,Vt);if(n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Ee===0&&(Ee=5)}function Uf(e,t){do{var n=Am(e.alternate,e);if(n!==null){n.flags&=32767,le=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=n}while(e!==null);Ee=6,le=null}function Hf(e,t,n,l,a,i,r,s,h){e.cancelPendingCommit=null;do Oi();while(Ye!==0);if((oe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=Cu,ph(e,n,i,r,s,h),e===ve&&(le=ve=null,ie=0),bl=t,pn=e,Sl=n,Lr=i,Yr=a,Tf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gm(Ha,function(){return Gf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,a=q.p,q.p=2,r=oe,oe|=4;try{Rm(e,t,n)}finally{oe=r,q.p=a,z.T=l}}Ye=1,Bf(),qf(),Lf()}}function Bf(){if(Ye===1){Ye=0;var e=pn,t=bl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var l=q.p;q.p=2;var a=oe;oe|=4;try{xf(t,e);var i=nc,r=ws(e.containerInfo),s=i.focusedElem,h=i.selectionRange;if(r!==s&&s&&s.ownerDocument&&Ns(s.ownerDocument.documentElement,s)){if(h!==null&&Au(s)){var N=h.start,T=h.end;if(T===void 0&&(T=N),"selectionStart"in s)s.selectionStart=N,s.selectionEnd=Math.min(T,s.value.length);else{var O=s.ownerDocument||document,w=O&&O.defaultView||window;if(w.getSelection){var j=w.getSelection(),$=s.textContent.length,k=Math.min(h.start,$),me=h.end===void 0?k:Math.min(h.end,$);!j.extend&&k>me&&(r=me,me=k,k=r);var x=Ss(s,k),v=Ss(s,me);if(x&&v&&(j.rangeCount!==1||j.anchorNode!==x.node||j.anchorOffset!==x.offset||j.focusNode!==v.node||j.focusOffset!==v.offset)){var b=O.createRange();b.setStart(x.node,x.offset),j.removeAllRanges(),k>me?(j.addRange(b),j.extend(v.node,v.offset)):(b.setEnd(v.node,v.offset),j.addRange(b))}}}}for(O=[],j=s;j=j.parentNode;)j.nodeType===1&&O.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<O.length;s++){var A=O[s];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Qi=!!tc,nc=tc=null}finally{oe=a,q.p=l,z.T=n}}e.current=t,Ye=2}}function qf(){if(Ye===2){Ye=0;var e=pn,t=bl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var l=q.p;q.p=2;var a=oe;oe|=4;try{pf(e,t.alternate,t)}finally{oe=a,q.p=l,z.T=n}}Ye=3}}function Lf(){if(Ye===4||Ye===3){Ye=0,uh();var e=pn,t=bl,n=Sl,l=Tf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,bl=pn=null,Yf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(mn=null),cu(n),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=z.T,a=q.p,q.p=2,z.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var s=l[r];i(s.value,{componentStack:s.stack})}}finally{z.T=t,q.p=a}}(Sl&3)!==0&&Oi(),At(e),a=e.pendingLanes,(n&4194090)!==0&&(a&42)!==0?e===Gr?pa++:(pa=0,Gr=e):pa=0,ga(0)}}function Yf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$l(t)))}function Oi(e){return Bf(),qf(),Lf(),Gf()}function Gf(){if(Ye!==5)return!1;var e=pn,t=Lr;Lr=0;var n=cu(Sl),l=z.T,a=q.p;try{q.p=32>n?32:n,z.T=null,n=Yr,Yr=null;var i=pn,r=Sl;if(Ye=0,bl=pn=null,Sl=0,(oe&6)!==0)throw Error(o(331));var s=oe;if(oe|=4,jf(i.current),Sf(i,i.current,r,n),oe=s,ga(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ol,i)}catch{}return!0}finally{q.p=a,z.T=l,Yf(e,t)}}function Xf(e,t,n){t=ht(n,t),t=xr(e.stateNode,t,2),e=an(e,t,2),e!==null&&(Dl(e,2),At(e))}function ge(e,t,n){if(e.tag===3)Xf(e,e,n);else for(;t!==null;){if(t.tag===3){Xf(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(mn===null||!mn.has(l))){e=ht(n,e),n=Vo(2),l=an(t,n,2),l!==null&&(ko(n,l,t,e),Dl(l,2),At(l));break}}t=t.return}}function Vr(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Dm;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(Ur=!0,a.add(n),e=qm.bind(null,e,t,n),t.then(e,e))}function qm(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ve===e&&(ie&n)===n&&(Ee===4||Ee===3&&(ie&62914560)===ie&&300>jt()-qr?(oe&2)===0&&Nl(e,0):Hr|=n,xl===ie&&(xl=0)),At(e)}function Qf(e,t){t===0&&(t=Bc()),e=al(e,t),e!==null&&(Dl(e,t),At(e))}function Lm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qf(e,n)}function Ym(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Qf(e,n)}function Gm(e,t){return au(e,t)}var _i=null,jl=null,kr=!1,Di=!1,Kr=!1,Xn=0;function At(e){e!==jl&&e.next===null&&(jl===null?_i=jl=e:jl=jl.next=e),Di=!0,kr||(kr=!0,Qm())}function ga(e,t){if(!Kr&&Di){Kr=!0;do for(var n=!1,l=_i;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var r=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-nt(42|e)+1)-1,i&=a&~(r&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Kf(l,i))}else i=ie,i=La(l,l===ve?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||_l(l,i)||(n=!0,Kf(l,i));l=l.next}while(n);Kr=!1}}function Xm(){Zf()}function Zf(){Di=kr=!1;var e=0;Xn!==0&&(Fm()&&(e=Xn),Xn=0);for(var t=jt(),n=null,l=_i;l!==null;){var a=l.next,i=Vf(l,t);i===0?(l.next=null,n===null?_i=a:n.next=a,a===null&&(jl=n)):(n=l,(e!==0||(i&3)!==0)&&(Di=!0)),l=a}ga(e)}function Vf(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-nt(i),s=1<<r,h=a[r];h===-1?((s&n)===0||(s&l)!==0)&&(a[r]=mh(s,t)):h<=t&&(e.expiredLanes|=s),i&=~s}if(t=ve,n=ie,n=La(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&iu(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_l(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&iu(l),cu(n)){case 2:case 8:n=Cc;break;case 32:n=Ha;break;case 268435456:n=Uc;break;default:n=Ha}return l=kf.bind(null,e),n=au(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&iu(l),e.callbackPriority=2,e.callbackNode=null,2}function kf(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Oi()&&e.callbackNode!==n)return null;var l=ie;return l=La(e,e===ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Mf(e,l,t),Vf(e,jt()),e.callbackNode!=null&&e.callbackNode===n?kf.bind(null,e):null)}function Kf(e,t){if(Oi())return null;Mf(e,t,!0)}function Qm(){Pm(function(){(oe&6)!==0?au(Dc,Xm):Zf()})}function Jr(){return Xn===0&&(Xn=Hc()),Xn}function Jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Za(""+e)}function $f(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Zm(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Jf((a[Je]||null).action),r=l.submitter;r&&(t=(t=r[Je]||null)?Jf(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var s=new Ja("action","action",null,l,a);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Xn!==0){var h=r?$f(a,r):new FormData(a);mr(n,{pending:!0,data:h,method:a.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=r?$f(a,r):new FormData(a),mr(n,{pending:!0,data:h,method:a.method,action:i},i,h))},currentTarget:a}]})}}for(var $r=0;$r<Du.length;$r++){var Wr=Du[$r],Vm=Wr.toLowerCase(),km=Wr[0].toUpperCase()+Wr.slice(1);St(Vm,"on"+km)}St(Ts,"onAnimationEnd"),St(zs,"onAnimationIteration"),St(Ms,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(sm,"onTransitionRun"),St(om,"onTransitionStart"),St(fm,"onTransitionCancel"),St(As,"onTransitionEnd"),Jn("onMouseEnter",["mouseout","mouseover"]),Jn("onMouseLeave",["mouseout","mouseover"]),Jn("onPointerEnter",["pointerout","pointerover"]),Jn("onPointerLeave",["pointerout","pointerover"]),Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(va));function Wf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var s=l[r],h=s.instance,N=s.currentTarget;if(s=s.listener,h!==i&&a.isPropagationStopped())break e;i=s,a.currentTarget=N;try{i(a)}catch(T){bi(T)}a.currentTarget=null,i=h}else for(r=0;r<l.length;r++){if(s=l[r],h=s.instance,N=s.currentTarget,s=s.listener,h!==i&&a.isPropagationStopped())break e;i=s,a.currentTarget=N;try{i(a)}catch(T){bi(T)}a.currentTarget=null,i=h}}}}function ae(e,t){var n=t[su];n===void 0&&(n=t[su]=new Set);var l=e+"__bubble";n.has(l)||(Ff(t,e,2,!1),n.add(l))}function Fr(e,t,n){var l=0;t&&(l|=4),Ff(n,e,l,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[Ci]){e[Ci]=!0,Xc.forEach(function(n){n!=="selectionchange"&&(Km.has(n)||Fr(n,!1,e),Fr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,Fr("selectionchange",!1,t))}}function Ff(e,t,n,l){switch(Sd(t)){case 2:var a=b0;break;case 8:a=S0;break;default:a=dc}n=a.bind(null,t,n,e),a=void 0,!bu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Pr(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var s=l.stateNode.containerInfo;if(s===a)break;if(r===4)for(r=l.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;s!==null;){if(r=Vn(s),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){l=i=r;continue e}s=s.parentNode}}l=l.return}ns(function(){var N=i,T=yu(n),O=[];e:{var w=Rs.get(e);if(w!==void 0){var j=Ja,$=e;switch(e){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":j=Gh;break;case"focusin":$="focus",j=ju;break;case"focusout":$="blur",j=ju;break;case"beforeblur":case"afterblur":j=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Zh;break;case Ts:case zs:case Ms:j=_h;break;case As:j=kh;break;case"scroll":case"scrollend":j=zh;break;case"wheel":j=Jh;break;case"copy":case"cut":case"paste":j=Ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=rs;break;case"toggle":case"beforetoggle":j=Wh}var k=(t&4)!==0,me=!k&&(e==="scroll"||e==="scrollend"),x=k?w!==null?w+"Capture":null:w;k=[];for(var v=N,b;v!==null;){var A=v;if(b=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||b===null||x===null||(A=Hl(v,x),A!=null&&k.push(ya(v,A,b))),me)break;v=v.return}0<k.length&&(w=new j(w,$,null,n,T),O.push({event:w,listeners:k}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",w&&n!==vu&&($=n.relatedTarget||n.fromElement)&&(Vn($)||$[Zn]))break e;if((j||w)&&(w=T.window===T?T:(w=T.ownerDocument)?w.defaultView||w.parentWindow:window,j?($=n.relatedTarget||n.toElement,j=N,$=$?Vn($):null,$!==null&&(me=y($),k=$.tag,$!==me||k!==5&&k!==27&&k!==6)&&($=null)):(j=null,$=N),j!==$)){if(k=is,A="onMouseLeave",x="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(k=rs,A="onPointerLeave",x="onPointerEnter",v="pointer"),me=j==null?w:Ul(j),b=$==null?w:Ul($),w=new k(A,v+"leave",j,n,T),w.target=me,w.relatedTarget=b,A=null,Vn(T)===N&&(k=new k(x,v+"enter",$,n,T),k.target=b,k.relatedTarget=me,A=k),me=A,j&&$)t:{for(k=j,x=$,v=0,b=k;b;b=El(b))v++;for(b=0,A=x;A;A=El(A))b++;for(;0<v-b;)k=El(k),v--;for(;0<b-v;)x=El(x),b--;for(;v--;){if(k===x||x!==null&&k===x.alternate)break t;k=El(k),x=El(x)}k=null}else k=null;j!==null&&If(O,w,j,k,!1),$!==null&&me!==null&&If(O,me,$,k,!0)}}e:{if(w=N?Ul(N):window,j=w.nodeName&&w.nodeName.toLowerCase(),j==="select"||j==="input"&&w.type==="file")var Y=ps;else if(hs(w))if(gs)Y=um;else{Y=am;var ne=lm}else j=w.nodeName,!j||j.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?N&&gu(N.elementType)&&(Y=ps):Y=im;if(Y&&(Y=Y(e,N))){ms(O,Y,n,T);break e}ne&&ne(e,w,N),e==="focusout"&&N&&w.type==="number"&&N.memoizedProps.value!=null&&pu(w,"number",w.value)}switch(ne=N?Ul(N):window,e){case"focusin":(hs(ne)||ne.contentEditable==="true")&&(tl=ne,Ru=N,Zl=null);break;case"focusout":Zl=Ru=tl=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,js(O,n,T);break;case"selectionchange":if(cm)break;case"keydown":case"keyup":js(O,n,T)}var G;if(Tu)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else el?fs(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(cs&&n.locale!=="ko"&&(el||K!=="onCompositionStart"?K==="onCompositionEnd"&&el&&(G=ls()):(en=T,Su="value"in en?en.value:en.textContent,el=!0)),ne=Ui(N,K),0<ne.length&&(K=new us(K,e,null,n,T),O.push({event:K,listeners:ne}),G?K.data=G:(G=ds(n),G!==null&&(K.data=G)))),(G=Ih?Ph(e,n):em(e,n))&&(K=Ui(N,"onBeforeInput"),0<K.length&&(ne=new us("onBeforeInput","beforeinput",null,n,T),O.push({event:ne,listeners:K}),ne.data=G)),Zm(O,e,N,n,T)}Wf(O,t)})}function ya(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Hl(e,n),a!=null&&l.unshift(ya(e,a,i)),a=Hl(e,t),a!=null&&l.push(ya(e,a,i))),e.tag===3)return l;e=e.return}return[]}function El(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function If(e,t,n,l,a){for(var i=t._reactName,r=[];n!==null&&n!==l;){var s=n,h=s.alternate,N=s.stateNode;if(s=s.tag,h!==null&&h===l)break;s!==5&&s!==26&&s!==27||N===null||(h=N,a?(N=Hl(n,i),N!=null&&r.unshift(ya(n,N,h))):a||(N=Hl(n,i),N!=null&&r.push(ya(n,N,h)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Jm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace(Jm,`
`).replace($m,"")}function ed(e,t){return t=Pf(t),Pf(e)===t}function Hi(){}function he(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Fn(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Fn(e,""+l);break;case"className":Ga(e,"class",l);break;case"tabIndex":Ga(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ga(e,n,l);break;case"style":es(e,l,i);break;case"data":if(t!=="object"){Ga(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Za(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",a.name,a,null),he(e,t,"formEncType",a.formEncType,a,null),he(e,t,"formMethod",a.formMethod,a,null),he(e,t,"formTarget",a.formTarget,a,null)):(he(e,t,"encType",a.encType,a,null),he(e,t,"method",a.method,a,null),he(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Za(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Hi);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Za(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Ya(e,"popover",l);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ya(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Eh.get(n)||n,Ya(e,n,l))}}function ec(e,t,n,l,a,i){switch(n){case"style":es(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Fn(e,l):(typeof l=="number"||typeof l=="bigint")&&Fn(e,""+l);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[Je]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Ya(e,n,l)}}}function Ge(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:he(e,t,i,r,n,null)}}a&&he(e,t,"srcSet",n.srcSet,n,null),l&&he(e,t,"src",n.src,n,null);return;case"input":ae("invalid",e);var s=i=r=a=null,h=null,N=null;for(l in n)if(n.hasOwnProperty(l)){var T=n[l];if(T!=null)switch(l){case"name":a=T;break;case"type":r=T;break;case"checked":h=T;break;case"defaultChecked":N=T;break;case"value":i=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:he(e,t,l,T,n,null)}}Wc(e,i,s,h,N,r,a,!1),Xa(e);return;case"select":ae("invalid",e),l=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(s=n[a],s!=null))switch(a){case"value":i=s;break;case"defaultValue":r=s;break;case"multiple":l=s;default:he(e,t,a,s,n,null)}t=i,n=r,e.multiple=!!l,t!=null?Wn(e,!!l,t,!1):n!=null&&Wn(e,!!l,n,!0);return;case"textarea":ae("invalid",e),i=a=l=null;for(r in n)if(n.hasOwnProperty(r)&&(s=n[r],s!=null))switch(r){case"value":l=s;break;case"defaultValue":a=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:he(e,t,r,s,n,null)}Ic(e,l,a,i),Xa(e);return;case"option":for(h in n)if(n.hasOwnProperty(h)&&(l=n[h],l!=null))switch(h){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:he(e,t,h,l,n,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(l=0;l<va.length;l++)ae(va[l],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(l=n[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:he(e,t,N,l,n,null)}return;default:if(gu(t)){for(T in n)n.hasOwnProperty(T)&&(l=n[T],l!==void 0&&ec(e,t,T,l,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(l=n[s],l!=null&&he(e,t,s,l,n,null))}function Wm(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,r=null,s=null,h=null,N=null,T=null;for(j in n){var O=n[j];if(n.hasOwnProperty(j)&&O!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":h=O;default:l.hasOwnProperty(j)||he(e,t,j,null,l,O)}}for(var w in l){var j=l[w];if(O=n[w],l.hasOwnProperty(w)&&(j!=null||O!=null))switch(w){case"type":i=j;break;case"name":a=j;break;case"checked":N=j;break;case"defaultChecked":T=j;break;case"value":r=j;break;case"defaultValue":s=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:j!==O&&he(e,t,w,j,l,O)}}mu(e,r,s,h,N,T,i,a);return;case"select":j=r=s=w=null;for(i in n)if(h=n[i],n.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":j=h;default:l.hasOwnProperty(i)||he(e,t,i,null,l,h)}for(a in l)if(i=l[a],h=n[a],l.hasOwnProperty(a)&&(i!=null||h!=null))switch(a){case"value":w=i;break;case"defaultValue":s=i;break;case"multiple":r=i;default:i!==h&&he(e,t,a,i,l,h)}t=s,n=r,l=j,w!=null?Wn(e,!!n,w,!1):!!l!=!!n&&(t!=null?Wn(e,!!n,t,!0):Wn(e,!!n,n?[]:"",!1));return;case"textarea":j=w=null;for(s in n)if(a=n[s],n.hasOwnProperty(s)&&a!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:he(e,t,s,null,l,a)}for(r in l)if(a=l[r],i=n[r],l.hasOwnProperty(r)&&(a!=null||i!=null))switch(r){case"value":w=a;break;case"defaultValue":j=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(o(91));break;default:a!==i&&he(e,t,r,a,l,i)}Fc(e,w,j);return;case"option":for(var $ in n)if(w=n[$],n.hasOwnProperty($)&&w!=null&&!l.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:he(e,t,$,null,l,w)}for(h in l)if(w=l[h],j=n[h],l.hasOwnProperty(h)&&w!==j&&(w!=null||j!=null))switch(h){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:he(e,t,h,w,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var k in n)w=n[k],n.hasOwnProperty(k)&&w!=null&&!l.hasOwnProperty(k)&&he(e,t,k,null,l,w);for(N in l)if(w=l[N],j=n[N],l.hasOwnProperty(N)&&w!==j&&(w!=null||j!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(137,t));break;default:he(e,t,N,w,l,j)}return;default:if(gu(t)){for(var me in n)w=n[me],n.hasOwnProperty(me)&&w!==void 0&&!l.hasOwnProperty(me)&&ec(e,t,me,void 0,l,w);for(T in l)w=l[T],j=n[T],!l.hasOwnProperty(T)||w===j||w===void 0&&j===void 0||ec(e,t,T,w,l,j);return}}for(var x in n)w=n[x],n.hasOwnProperty(x)&&w!=null&&!l.hasOwnProperty(x)&&he(e,t,x,null,l,w);for(O in l)w=l[O],j=n[O],!l.hasOwnProperty(O)||w===j||w==null&&j==null||he(e,t,O,w,l,j)}var tc=null,nc=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function td(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ac=null;function Fm(){var e=window.event;return e&&e.type==="popstate"?e===ac?!1:(ac=e,!0):(ac=null,!1)}var ld=typeof setTimeout=="function"?setTimeout:void 0,Im=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,Pm=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(e){return ad.resolve(null).then(e).catch(e0)}:ld;function e0(e){setTimeout(function(){throw e})}function vn(e){return e==="head"}function id(e,t){var n=t,l=0,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(0<l&&8>l){n=l;var r=e.ownerDocument;if(n&1&&xa(r.documentElement),n&2&&xa(r.body),n&4)for(n=r.head,xa(n),r=n.firstChild;r;){var s=r.nextSibling,h=r.nodeName;r[Cl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}if(a===0){e.removeChild(i),za(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:l=n.charCodeAt(0)-48;else l=0;n=i}while(n);za(t)}function ic(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ic(n),ou(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function t0(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function n0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wt(e.nextSibling),e===null))return null;return e}function uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function l0(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var rc=null;function ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function rd(e,t,n){switch(t=Bi(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function xa(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ou(e)}var xt=new Map,cd=new Set;function qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kt=q.d;q.d={f:a0,r:i0,D:u0,C:r0,L:c0,m:s0,X:f0,S:o0,M:d0};function a0(){var e=kt.f(),t=Ai();return e||t}function i0(e){var t=kn(e);t!==null&&t.tag===5&&t.type==="form"?zo(t):kt.r(e)}var Tl=typeof document>"u"?null:document;function sd(e,t,n){var l=Tl;if(l&&typeof t=="string"&&t){var a=dt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),cd.has(a)||(cd.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),Ge(t,"link",e),Ue(t),l.head.appendChild(t)))}}function u0(e){kt.D(e),sd("dns-prefetch",e,null)}function r0(e,t){kt.C(e,t),sd("preconnect",e,t)}function c0(e,t,n){kt.L(e,t,n);var l=Tl;if(l&&e&&t){var a='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+dt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+dt(n.imageSizes)+'"]')):a+='[href="'+dt(e)+'"]';var i=a;switch(t){case"style":i=zl(e);break;case"script":i=Ml(e)}xt.has(i)||(e=M({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),xt.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(ba(i))||t==="script"&&l.querySelector(Sa(i))||(t=l.createElement("link"),Ge(t,"link",e),Ue(t),l.head.appendChild(t)))}}function s0(e,t){kt.m(e,t);var n=Tl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+dt(l)+'"][href="'+dt(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ml(e)}if(!xt.has(i)&&(e=M({rel:"modulepreload",href:e},t),xt.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sa(i)))return}l=n.createElement("link"),Ge(l,"link",e),Ue(l),n.head.appendChild(l)}}}function o0(e,t,n){kt.S(e,t,n);var l=Tl;if(l&&e){var a=Kn(l).hoistableStyles,i=zl(e);t=t||"default";var r=a.get(i);if(!r){var s={loading:0,preload:null};if(r=l.querySelector(ba(i)))s.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},n),(n=xt.get(i))&&cc(e,n);var h=r=l.createElement("link");Ue(h),Ge(h,"link",e),h._p=new Promise(function(N,T){h.onload=N,h.onerror=T}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Li(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:s},a.set(i,r)}}}function f0(e,t){kt.X(e,t);var n=Tl;if(n&&e){var l=Kn(n).hoistableScripts,a=Ml(e),i=l.get(a);i||(i=n.querySelector(Sa(a)),i||(e=M({src:e,async:!0},t),(t=xt.get(a))&&sc(e,t),i=n.createElement("script"),Ue(i),Ge(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function d0(e,t){kt.M(e,t);var n=Tl;if(n&&e){var l=Kn(n).hoistableScripts,a=Ml(e),i=l.get(a);i||(i=n.querySelector(Sa(a)),i||(e=M({src:e,async:!0,type:"module"},t),(t=xt.get(a))&&sc(e,t),i=n.createElement("script"),Ue(i),Ge(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function od(e,t,n,l){var a=(a=I.current)?qi(a):null;if(!a)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=zl(n.href),n=Kn(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zl(n.href);var i=Kn(a).hoistableStyles,r=i.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=a.querySelector(ba(e)))&&!i._p&&(r.instance=i,r.state.loading=5),xt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xt.set(e,n),i||h0(a,e,n,r.state))),t&&l===null)throw Error(o(528,""));return r}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ml(n),n=Kn(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function zl(e){return'href="'+dt(e)+'"'}function ba(e){return'link[rel="stylesheet"]['+e+"]"}function fd(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function h0(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ge(t,"link",n),Ue(t),e.head.appendChild(t))}function Ml(e){return'[src="'+dt(e)+'"]'}function Sa(e){return"script[async]"+e}function dd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+dt(n.href)+'"]');if(l)return t.instance=l,Ue(l),l;var a=M({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ue(l),Ge(l,"style",a),Li(l,n.precedence,e),t.instance=l;case"stylesheet":a=zl(n.href);var i=e.querySelector(ba(a));if(i)return t.state.loading|=4,t.instance=i,Ue(i),i;l=fd(n),(a=xt.get(a))&&cc(l,a),i=(e.ownerDocument||e).createElement("link"),Ue(i);var r=i;return r._p=new Promise(function(s,h){r.onload=s,r.onerror=h}),Ge(i,"link",l),t.state.loading|=4,Li(i,n.precedence,e),t.instance=i;case"script":return i=Ml(n.src),(a=e.querySelector(Sa(i)))?(t.instance=a,Ue(a),a):(l=n,(a=xt.get(i))&&(l=M({},n),sc(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ue(a),Ge(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Li(l,n.precedence,e));return t.instance}function Li(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,r=0;r<l.length;r++){var s=l[r];if(s.dataset.precedence===t)i=s;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function cc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yi=null;function hd(e,t,n){if(Yi===null){var l=new Map,a=Yi=new Map;a.set(n,l)}else a=Yi,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Cl]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var s=l.get(r);s?s.push(i):l.set(r,[i])}}return l}function md(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function m0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Na=null;function p0(){}function g0(e,t,n){if(Na===null)throw Error(o(475));var l=Na;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=zl(n.href),i=e.querySelector(ba(a));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Gi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,Ue(i);return}i=e.ownerDocument||e,n=fd(n),(a=xt.get(a))&&cc(n,a),i=i.createElement("link"),Ue(i);var r=i;r._p=new Promise(function(s,h){r.onload=s,r.onerror=h}),Ge(i,"link",n),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Gi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function v0(){if(Na===null)throw Error(o(475));var e=Na;return e.stylesheets&&e.count===0&&oc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Gi(){if(this.count--,this.count===0){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xi=null;function oc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xi=new Map,t.forEach(y0,e),Xi=null,Gi.call(e))}function y0(e,t){if(!(t.state.loading&4)){var n=Xi.get(e);if(n)var l=n.get(null);else{n=new Map,Xi.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var r=a[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),l=r)}l&&n.set(null,l)}a=t.instance,r=a.getAttribute("data-precedence"),i=n.get(r)||l,i===l&&n.set(null,a),n.set(r,a),this.count++,l=Gi.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var wa={$$typeof:P,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function x0(e,t,n,l,a,i,r,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.hiddenUpdates=uu(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function gd(e,t,n,l,a,i,r,s,h,N,T,O){return e=new x0(e,t,n,r,s,h,N,O),t=1,i===!0&&(t|=24),i=at(3,null,null,t),e.current=i,i.stateNode=e,t=Vu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},$u(i),e}function vd(e){return e?(e=il,e):il}function yd(e,t,n,l,a,i){a=vd(a),l.context===null?l.context=a:l.pendingContext=a,l=ln(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=an(e,l,t),n!==null&&(st(n,e,t),Pl(n,e,t))}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fc(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function bd(e){if(e.tag===13){var t=al(e,67108864);t!==null&&st(t,e,67108864),fc(e,67108864)}}var Qi=!0;function b0(e,t,n,l){var a=z.T;z.T=null;var i=q.p;try{q.p=2,dc(e,t,n,l)}finally{q.p=i,z.T=a}}function S0(e,t,n,l){var a=z.T;z.T=null;var i=q.p;try{q.p=8,dc(e,t,n,l)}finally{q.p=i,z.T=a}}function dc(e,t,n,l){if(Qi){var a=hc(l);if(a===null)Pr(e,t,l,Zi,n),Nd(e,l);else if(w0(a,e,t,n,l))l.stopPropagation();else if(Nd(e,l),t&4&&-1<N0.indexOf(e)){for(;a!==null;){var i=kn(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=En(i.pendingLanes);if(r!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;r;){var h=1<<31-nt(r);s.entanglements[1]|=h,r&=~h}At(i),(oe&6)===0&&(zi=jt()+500,ga(0))}}break;case 13:s=al(i,2),s!==null&&st(s,i,2),Ai(),fc(i,2)}if(i=hc(l),i===null&&Pr(e,t,l,Zi,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Pr(e,t,l,null,n)}}function hc(e){return e=yu(e),mc(e)}var Zi=null;function mc(e){if(Zi=null,e=Vn(e),e!==null){var t=y(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=E(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function Sd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rh()){case Dc:return 2;case Cc:return 8;case Ha:case ch:return 32;case Uc:return 268435456;default:return 32}default:return 32}}var pc=!1,yn=null,xn=null,bn=null,ja=new Map,Ea=new Map,Sn=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nd(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ja.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(t.pointerId)}}function Ta(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=kn(t),t!==null&&bd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function w0(e,t,n,l,a){switch(t){case"focusin":return yn=Ta(yn,e,t,n,l,a),!0;case"dragenter":return xn=Ta(xn,e,t,n,l,a),!0;case"mouseover":return bn=Ta(bn,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return ja.set(i,Ta(ja.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Ea.set(i,Ta(Ea.get(i)||null,e,t,n,l,a)),!0}return!1}function wd(e){var t=Vn(e.target);if(t!==null){var n=y(t);if(n!==null){if(t=n.tag,t===13){if(t=E(n),t!==null){e.blockedOn=t,gh(e.priority,function(){if(n.tag===13){var l=ct();l=ru(l);var a=al(n,l);a!==null&&st(a,n,l),fc(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);vu=l,n.target.dispatchEvent(l),vu=null}else return t=kn(n),t!==null&&bd(t),e.blockedOn=n,!1;t.shift()}return!0}function jd(e,t,n){Vi(e)&&n.delete(t)}function j0(){pc=!1,yn!==null&&Vi(yn)&&(yn=null),xn!==null&&Vi(xn)&&(xn=null),bn!==null&&Vi(bn)&&(bn=null),ja.forEach(jd),Ea.forEach(jd)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,pc||(pc=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,j0)))}var Ki=null;function Ed(e){Ki!==e&&(Ki=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(mc(l||n)===null)continue;break}var i=kn(n);i!==null&&(e.splice(t,3),t-=3,mr(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function za(e){function t(h){return ki(h,e)}yn!==null&&ki(yn,e),xn!==null&&ki(xn,e),bn!==null&&ki(bn,e),ja.forEach(t),Ea.forEach(t);for(var n=0;n<Sn.length;n++){var l=Sn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)wd(n),n.blockedOn===null&&Sn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],r=a[Je]||null;if(typeof i=="function")r||Ed(n);else if(r){var s=null;if(i&&i.hasAttribute("formAction")){if(a=i,r=i[Je]||null)s=r.formAction;else if(mc(a)!==null)continue}else s=r.action;typeof s=="function"?n[l+1]=s:(n.splice(l,3),l-=3),Ed(n)}}}function gc(e){this._internalRoot=e}Ji.prototype.render=gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=ct();yd(n,l,e,t,null,null)},Ji.prototype.unmount=gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yd(e.current,2,null,e,null,null),Ai(),t[Zn]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sn.length&&t!==0&&t<Sn[n].priority;n++);Sn.splice(n,0,e),n===0&&wd(e)}};var Td=f.version;if(Td!=="19.1.1")throw Error(o(527,Td,"19.1.1"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=S(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var E0={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Ol=$i.inject(E0),tt=$i}catch{}}return Aa.createRoot=function(e,t){if(!m(e))throw Error(o(299));var n=!1,l="",a=Go,i=Xo,r=Qo,s=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(s=t.unstable_transitionCallbacks)),t=gd(e,1,!1,null,null,n,l,a,i,r,s,null),e[Zn]=t.current,Ir(e),new gc(t)},Aa.hydrateRoot=function(e,t,n){if(!m(e))throw Error(o(299));var l=!1,a="",i=Go,r=Xo,s=Qo,h=null,N=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(h=n.unstable_transitionCallbacks),n.formState!==void 0&&(N=n.formState)),t=gd(e,1,!0,t,n??null,l,a,i,r,s,h,N),t.context=vd(null),n=t.current,l=ct(),l=ru(l),a=ln(l),a.callback=null,an(n,a,l),n=l,t.current.lanes=n,Dl(t,n),At(t),e[Zn]=t.current,Ir(e),new Ji(t)},Aa.version="19.1.1",Aa}var Hd;function U0(){if(Hd)return xc.exports;Hd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),xc.exports=C0(),xc.exports}var H0=U0();const B0=`@font-face {
  font-display: swap;
  font-family: MaisonNeue;
  font-style: normal;
  font-weight: 500;
  src: url(fonts/MaisonNeue-Medium.d7e095.woff2) format("woff2"), url(fonts/MaisonNeue-Medium.b386b6.woff) format("woff")
}

@font-face {
  font-display: swap;
  font-family: MaisonNeue;
  font-style: normal;
  font-weight: 700;
  src: url(fonts/MaisonNeue-Bold.e772f0.woff2) format("woff2"), url(fonts/MaisonNeue-Bold.10c7bb.woff) format("woff")
}

:root {
  --color-black: #000;
  --color-white: #fff;
  --color-black-rgb: 0 0 0;
  --color-grid: 255 0 0;
  --color-blue: 0 0 255;
  --color-primary: #fff;
  --bs-primary-rgb:#fff;
  --color-primary-rgb: 255 255 255;
  --color-secondary: #000;
  --color-secondary-rgb: 0 0 0;
  --delay: 0.017s;
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in: cubic-bezier(0.12, 0, 0.39, 0);
  --ease-in-out: cubic-bezier(0.86, 0, 0.07, 1);
  --ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --size: 375;
  --vh: calc(var(--wh, 1vh) * 100);
  --padding-container: 1rem;
  --h-header: 4.5rem;
  --h-available: calc(var(--vh) - var(--h-header) - 3rem);
  --spacing-header: calc(var(--h-header) + 2rem);
  --spacing-sticky: calc(var(--h-header) + 3rem);
  --image-width: 100%;
  --image-height: 100%;
  --cursor-x: 0;
  --cursor-y: 0;
  --header-height: 4.5rem;
  --border-width: 1px;
  --gap-grid: 1rem;
  --grid-cols: 24;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;

}

@media (min-width: 768px) {
  :root {
    --size: 768;
    --padding-container: 2rem;
    --h-available: calc(100vh - var(--h-header) - 5rem);
    --spacing-header: calc(var(--h-header) + 2rem);
    --spacing-sticky: calc(var(--h-header) + 3rem);
  }
}

@media (min-width: 1024px) {
  :root {
    --size: 1024;
  }
}

@media (min-width: 1200px) and (hover: hover) {
  :root {
    --size: 1440;
  }
}

html {
  font-size: calc((100vw / var(--size)) * 10);
  line-height: 1.3;
}

body:not(.data) {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  background-color: var(--color-primary);
  font-family: MaisonNeue, sans-serif;
  font-size: 1.2rem;
  line-height: 133%;
  margin: 0;
  overflow-x: hidden;
  padding: 0;
  font-family: MaisonNeue;
}

body:not(.data).dark,
body:not(.data).dark-force {
  --color-primary: var(--color-black);
  --color-secondary: var(--color-white);
  --color-primary-rgb: 0 0 0;
  --color-secondary-rgb: 255 255 255;
}

.bg-primary {
  background-color: var(--color-primary);
}

.pt-container {
  padding-top: var(--padding-container);
}

.px-container {
  padding-left: var(--padding-container);
  padding-right: var(--padding-container);
}

.mb-10 {
  margin-bottom: 1rem;
}

.z-header {
  z-index: 10;
}

.top-0 {
  top: 0;
}

.left-0 {
  left: 0;
}

.sticky {
  position: sticky;
}

html::-webkit-scrollbar {
  width: 5px
}

html::-webkit-scrollbar-track {
  background-color: #fff;
  border-left: 1px solid var(--color-black)
}

html ::-webkit-scrollbar-thumb {
  background-color: var(--color-black);
  border: 1px solid var(--color-black)
}

html.dark ::-webkit-scrollbar-track {
  background-color: var(--color-black);
  border-left: 1px solid #fff
}

html.dark ::-webkit-scrollbar-thumb {
  background-color: #fff;
  border: 1px solid #fff
}

.no-scrollbar::-webkit-scrollbar {
  -webkit-appearance: none;
  appearance: none;
  display: none;
  height: 0;
  width: 0
}



body {
  font-size: 1.2rem;
  line-height: 133%;
}

.header-bg.transparent {
  background-color: var(--color-primary);
}

.header-bg.transparent,
.header.transparent {
  background-color: var(--color-primary);
  position: fixed;
  z-index: 1;
}

header {
  width: 100%;

}

.custom-header {
  height: 5.5rem;
  z-index: 0;

}

.transparent-bg {
  background-color: transparent;
}

.top-header {
  top: var(--spacing-header);
}

.header-menu {
  border-width: var(--border-width);
  border-color: var(--color-secondary);
  border-style: solid;
  position: relative;
  width: 100%;
  height: var(--header-height);
  /* Define this variable somewhere if using h-header */
  transition: all 0.3s ease-in-out;
  /* Simulating transition-mode */
  column-gap: 1rem;
  grid-template-columns: repeat(24, minmax(0, 1fr));
  display: grid;

}

.header-element {
  display: flex;
  flex: 1 1 0%;
  /* background-color: var(--color-primary); */

  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  /* pl-20 = 5rem */
  padding-right: 2rem;
  /* pr-20 = 5rem */
}

.svg-wrapper {
  color: var(--color-secondary);
  /* text-secondary */
  display: block;
  /* block */
  width: 8.5rem;
  /* w-[8.5rem] */
  padding-bottom: 0.6rem;
  /* pb-[0.6rem] */
  margin-bottom: -0.6rem;
  /* -mb-[0.6rem] */
  transition: all 0.3s ease-in-out;
  /* transition-mode (assumed smooth) */
}

.svg-wrapper svg {
  height: 100%;
  width: 100%;
}

svg {
  height: 100%;
  width: 100%;

}

.pt-container {
  padding-top: 2rem;
}

.px-container {
  padding-left: 2rem;
  padding-right: 2rem;
}

.header-switcher {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: auto;
  /* padding: 0 2.5rem; px-10 in Tailwind = 2.5rem */
  position: relative;
}

.switch-dot {
  width: 1.2rem;
  height: 1.2rem;
  /* border: 0.1rem solid var(--color-secondary); */
  border-radius: 50%;
  transition: all 0.3s ease;
}

.switch-dot.light {
  background-color: #ffffff;
  border: 0.1rem solid var(--color-secondary);
}

.switch-dot.dark {
  background-color: #000000;
  margin-left: -0.4rem;
}

.header-languages {
  padding-top: 0.2rem;
}

.langswitcher {
  display: flex;
  gap: 0.45rem;
  /* gap-x-5 = 1.25rem */
  text-transform: uppercase;

  transition: all 0.3s ease;
  /* transition-mode */
}

.lang-link {
  font-size: 1.2rem;
  /* body-12 */
  line-height: 133%;
  font-weight: bold;
  opacity: 0.3;
  text-decoration: none;
  transition: opacity 0.3s ease;
  color: var(--color-secondary);
}

.lang-link:hover {
  opacity: 1;

}

.lang-link.active {
  opacity: 1;
  color: var(--color-secondary);
}

.header-toggler {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5rem;
  /* px-20 */
  padding-right: 5rem;
  padding-top: .4rem;
  background-color: transparent;
  border-left: 1px solid var(--color-secondary);
  transition: background-color 0.3s ease;
  grid-column-end: 25;

}

.toggler-label {
  position: relative;
  font-size: 1.2rem;
  /* body-12 */
  line-height: 133%;
  font-weight: bold;
  user-select: none;
  text-transform: uppercase;
  color: var(--color-secondary);
  transition: color 0.3s ease;
}

.label-menu,
.label-close {
  display: block;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.label-close {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
}

.header-toggler.a .label-menu {
  opacity: 0;
}

.header-toggler.a .label-close {
  opacity: 1;
}

.header-item-col {
  border-color: var(--color-secondary);
  background-color: var(--color-primary);
  border-width: 1px;
  grid-column: span 6 / span 6;
  border-style: solid;
}

.header-item-cell {
  color: var(--color-secondary);
  border-style: solid;
  border-width: 0;
  border-bottom-width: 1px;
  border-top-width: 1px;
  height: 8.8rem;
  margin-top: -1px;
  text-decoration: inherit;
  padding-left: 2rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  padding-right: 11.8rem;
}

.header-item {
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 4.8rem;
  line-height: 1;
  text-transform: uppercase;
  height: 8.8rem;
  color: var(--color-secondary);
  font-weight: 700;

}

.link .word {
  overflow: hidden;
}

a {
  text-decoration: inherit !important;
}`,q0=`@media (min-width: 768px) {

  .custom-header {
    height: 6.5rem;
  }

  .header-menu {
    /* display: flex; */
    /* columns: repeat(24, minmax(0, 1fr)); */
    /* column-gap: var(--gap-grid);       md:gap-x-grid */
  }

  .header-element {
    grid-column-start: 1;
    /* md:col-start-1 */
    grid-column-end: 22;
    /* md:col-end-22 */
    grid-template-columns: repeat(24, minmax(0, 1fr));
    padding-right: 1.6rem;
    /* md:pr-16 = 4rem */
  }

  .header-switcher {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .header-languages {
    padding-top: 0.4rem;
  }

  .header-toggler {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0.4rem;
    grid-column-start: 22;
  }
}

/* Large screens (≥1024px) */
@media (min-width: 1024px) {
  .header-element {
    grid-column-end: 23;
    /* lg:col-end-23 */
  }

  .header-toggler {
    grid-column-start: 23;
  }
}

@media (min-width: 1280px) {
  .header-toggler:hover {
    background-color: var(--color-secondary);
  }

  .header-toggler:hover .toggler-label {
    color: var(--color-primary);
  }

  .label-close {
    transform: translate(-50%, -45%);
  }
}

@media (max-width:480px) {
  .header {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width:480px) {
  .header-element {
    grid-column-end: 20;
    grid-column-start: 1;
  }

  .header-toggler {
    padding-left: 2rem;
    padding-right: 2rem;
    grid-column-start: 20;
  }

  .px-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}`;function L0(){const[c,f]=R.useState(!1),[d,o]=R.useState(!1);R.useEffect(()=>{const _=localStorage.getItem("theme")==="dark";f(_),document.documentElement.classList.toggle("dark",_),document.body.classList.toggle("dark",_)},[]);const m=()=>{o(E=>!E)},y=()=>{const E=!c;f(E),document.documentElement.classList.toggle("dark",E),document.body.classList.toggle("dark",E),localStorage.setItem("theme",E?"dark":"light")};return u.jsxs(u.Fragment,{children:[u.jsx("style",{dangerouslySetInnerHTML:{__html:q0}}),u.jsx("div",{className:"header-bg position-fixed top-0 left-0 w-100 custom-header z-1"}),u.jsxs("header",{className:"header transparent pt-container px-container ",children:[u.jsxs("div",{className:"header-menu ",children:[u.jsxs("div",{className:"header-element",children:[u.jsx("a",{"aria-label":"Home",className:"svg-wrapper",href:"/",children:u.jsxs("svg",{fill:"none",height:"15",viewBox:"0 0 85 15",width:"85",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M23.069 15C22.0026 15 21.0015 14.8157 20.0951 14.4534C19.181 14.0885 18.3796 13.5636 17.7114 12.8954C17.0444 12.2284 16.5169 11.4206 16.1431 10.495C15.7731 9.57712 15.585 8.55296 15.585 7.44944C15.585 5.98234 15.9063 4.67654 16.54 3.56534C17.175 2.44517 18.0724 1.56056 19.2041 0.938386C20.3434 0.309812 21.5993 0.00512695 23.0421 0.00512695C24.4849 0.00512695 25.7906 0.318774 26.9108 0.937106C27.9273 1.50039 28.7568 2.27747 29.379 3.24913H29.3995L29.5838 3.57046C30.2252 4.68935 30.5517 6.00026 30.5517 7.46736C30.5517 8.55808 30.3635 9.57712 29.9935 10.495C29.6197 11.4206 29.0923 12.2284 28.4253 12.8954C27.7545 13.5662 26.9518 14.0911 26.0403 14.4534C25.1301 14.8157 24.1302 14.9987 23.0677 14.9987L23.069 15ZM23.0434 1.28532C21.8221 1.28532 20.7685 1.5388 19.8224 2.05855C18.9007 2.56551 18.1709 3.28498 17.6537 4.19775C17.1302 5.11437 16.8664 6.20765 16.8664 7.44816C16.8664 8.38654 17.0226 9.25067 17.3311 10.0149C17.6397 10.7805 18.0724 11.4449 18.6177 11.989C19.1631 12.5344 19.8198 12.9632 20.5713 13.2641C21.3253 13.5662 22.1664 13.7185 23.0702 13.7185C23.9741 13.7185 24.8011 13.57 25.5692 13.2628C26.3283 12.9607 26.9671 12.5433 27.5227 11.989C28.0681 11.4436 28.5008 10.7792 28.8093 10.0149C29.1179 9.25067 29.274 8.39294 29.274 7.46608C29.274 6.29471 29.0475 5.28976 28.584 4.40258L28.465 4.20543C27.9414 3.28882 27.2117 2.56551 26.2938 2.05599C25.3656 1.54392 24.2723 1.28404 23.0446 1.28404L23.0434 1.28532Z",fill:"currentColor"}),u.jsx("path",{d:"M33.3912 15C32.3248 15 31.3237 14.8157 30.4173 14.4534C29.5033 14.0885 28.7019 13.5636 28.0336 12.8954C27.3666 12.2284 26.8392 11.4206 26.4654 10.495C26.0954 9.57712 25.9072 8.55296 25.9072 7.44944C25.9072 5.98234 26.2286 4.67526 26.8635 3.56534C27.4985 2.44517 28.3959 1.56184 29.5276 0.938386C30.6657 0.309812 31.9216 0.00512695 33.3656 0.00512695C34.8097 0.00512695 36.118 0.318774 37.2382 0.937106C38.2547 1.50039 39.083 2.27747 39.7064 3.24913H39.7243L39.9087 3.57046C40.5501 4.68935 40.8765 6.00026 40.8765 7.46736C40.8765 8.55936 40.6883 9.57712 40.3183 10.495C39.9445 11.4206 39.4171 12.2284 38.7501 12.8954C38.0793 13.5662 37.2766 14.0911 36.3651 14.4534C35.4549 14.8157 34.4551 14.9987 33.3925 14.9987L33.3912 15ZM33.3656 1.28532C32.1443 1.28532 31.0907 1.5388 30.1447 2.05855C29.2229 2.56551 28.4932 3.28626 27.976 4.19775C27.4524 5.11437 27.1874 6.20765 27.1874 7.44816C27.1874 8.38654 27.3436 9.25067 27.6521 10.0149C27.9607 10.7805 28.3934 11.4449 28.9387 11.989C29.4841 12.5344 30.1408 12.9632 30.8923 13.2641C31.6463 13.5662 32.4874 13.7185 33.3912 13.7185C34.295 13.7185 35.122 13.57 35.8902 13.2628C36.6493 12.9607 37.2881 12.5433 37.8437 11.989C38.3891 11.4436 38.8218 10.7792 39.1303 10.0149C39.4388 9.25067 39.595 8.39294 39.595 7.46608C39.595 6.28574 39.3659 5.27311 38.8935 4.38082L38.7898 4.20543C38.2662 3.28882 37.5365 2.56551 36.6186 2.05599C35.6904 1.54392 34.5959 1.28404 33.3656 1.28404V1.28532Z",fill:"currentColor"}),u.jsx("path",{d:"M43.2127 14.9949C42.1502 14.9949 41.1542 14.8131 40.2504 14.4534C40.1633 14.4226 40.0903 14.3868 40.0315 14.3586C40.011 14.3484 39.9918 14.3394 39.9713 14.3305L39.5962 14.1602V0.793718L39.9828 0.627294C40.9481 0.211232 42.0273 0 43.191 0C44.6376 0 45.9395 0.313647 47.0597 0.931979C48.0762 1.49526 48.9057 2.27234 49.5279 3.244H49.5458L49.7302 3.56533C50.3716 4.68422 50.698 5.99513 50.698 7.46223C50.698 8.55296 50.5098 9.57199 50.1398 10.4899C49.766 11.4155 49.2386 12.2233 48.5716 12.8902C47.9046 13.5572 47.0981 14.0859 46.1866 14.4482C45.2777 14.8105 44.2766 14.9936 43.214 14.9936L43.2127 14.9949ZM40.8751 13.3217C41.5869 13.5828 42.3729 13.7147 43.2127 13.7147C44.1255 13.7147 44.9436 13.5662 45.7117 13.2602C46.4708 12.9581 47.1096 12.5408 47.6652 11.9864C48.2106 11.4411 48.6433 10.7766 48.9518 10.0124C49.2604 9.2481 49.4165 8.39037 49.4165 7.46351C49.4165 6.28318 49.1874 5.27183 48.715 4.37825L48.61 4.20159C48.0877 3.28497 47.3567 2.56166 46.4388 2.05215C45.5107 1.54007 44.4174 1.28019 43.1897 1.28019C42.3563 1.28019 41.5805 1.40565 40.8751 1.65145V13.3217Z",fill:"currentColor"}),u.jsx("path",{d:"M0 0.599121H3.23376L7.09866 11.1658H7.13835L11.0224 0.599121H14.2562V14.4021H11.3975V5.88375H11.3579L8.53631 14.4021H5.69941L2.89835 5.88375H2.85867V14.4021H0V0.599121Z",fill:"currentColor"}),u.jsx("path",{d:"M51.6902 0.599121H60.5825V3.28112H54.6078V6.0809H60.0499V8.64384H54.6078V11.7201H60.6017V14.4021H51.689V0.599121H51.6902Z",fill:"currentColor"}),u.jsx("path",{d:"M73.182 14.4009H70.0468L67.4442 9.55022H65.6698V14.4009H62.751V0.599121H68.371C71.2899 0.599121 73.0834 2.29537 73.0834 5.05547C73.0834 7.06665 72.0785 8.56575 70.3822 9.21609V9.23529L73.182 14.4009ZM68.0164 6.8887C69.4169 6.8887 70.1658 6.23836 70.1658 5.03498C70.1658 3.8316 69.4361 3.26064 68.0164 3.26064H65.6698V6.8887H68.0164Z",fill:"currentColor"}),u.jsx("path",{d:"M74.0486 9.84595L76.9073 9.2353C77.2619 11.2862 78.0902 12.0748 79.9247 12.0748C81.2856 12.0748 82.0537 11.5819 82.0537 10.7139C82.0537 9.76786 81.3829 9.2545 79.0964 8.48511C75.8819 7.40078 74.6798 6.23709 74.6798 4.20671C74.6798 1.8998 76.5924 0.302124 79.3525 0.302124C82.1126 0.302124 84.1634 1.91901 84.5974 4.36417L81.758 4.97482C81.3829 3.57429 80.6147 2.92396 79.3525 2.92396C78.2682 2.92396 77.5577 3.41683 77.5577 4.18622C77.5577 4.89545 78.1491 5.28975 80.2 5.98105C83.6309 7.16395 84.9712 8.48511 84.9712 10.7139C84.9712 13.1002 82.9204 14.6966 79.8838 14.6966C76.5911 14.6966 74.5402 13.0003 74.0474 9.84595H74.0486Z",fill:"currentColor"})]})}),u.jsxs("div",{className:"header-switcher",onClick:y,children:[u.jsx("div",{className:`switch-dot light ${c?"border border-white":"border border-dark"}`}),u.jsx("div",{className:`switch-dot dark ${c?"border border-white":"border border-dark"}`})]}),u.jsx("div",{className:"header-languages",children:u.jsxs("div",{className:"langswitcher",children:[u.jsx("a",{className:"lang-link active",lang:"fr-FR",hrefLang:"fr-FR",href:"#","data-taxi-ignore":"",children:"fr"}),u.jsx("a",{className:"lang-link",lang:"en-GB",hrefLang:"en-GB",href:"#","data-taxi-ignore":"",children:"en"})]})})]}),u.jsx("div",{className:"header-toggler",children:u.jsx("div",{className:"toggler-label",onClick:m,children:u.jsx("span",{className:"label-menu",children:d?"Close":"Menu"})})})]}),u.jsxs("div",{className:"header-menu-wrapper position-fixed top-header pt-3 left-0 align-items-start w-100 grid-w uppercase pointer-events-none overflow-hidden",style:{visibility:`${d?"visible":"hidden"}`,opacity:`${d?"1":"0"}`},children:[u.jsxs("div",{className:"header-item-col  d-flex flex-column justify-between pointer-events-auto transition-mode",children:[u.jsxs("div",{className:"d-flex flex-column",children:[u.jsx("a",{href:"#",className:" link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})}),u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})}),u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})})]}),u.jsx("a",{href:"#",className:"link header-item -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{className:"word",children:"WORKS"})})})]}),u.jsxs("div",{className:"header-item-col  d-flex flex-column justify-between pointer-events-auto transition-mode",children:[u.jsxs("div",{className:"d-flex flex-column",children:[u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})}),u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})}),u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})})]}),u.jsx("a",{href:"#",className:"link header-item -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{className:"word",children:"About"})})})]}),u.jsxs("div",{className:"header-item-col  d-flex flex-column justify-between pointer-events-auto transition-mode",children:[u.jsxs("div",{className:"d-flex flex-column",children:[u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})}),u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})}),u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})})]}),u.jsx("a",{href:"#",className:"link header-item -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{className:"word",children:"News"})})})]}),u.jsxs("div",{className:"header-item-col  d-flex flex-column justify-between pointer-events-auto transition-mode",children:[u.jsxs("div",{className:"d-flex flex-column",children:[u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})}),u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})}),u.jsx("a",{href:"#",className:"link header-item-cell -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{children:"MOTION MOTION TRAILER"})})})]}),u.jsx("a",{href:"#",className:"link header-item -mt-px hidden d-md-flex align-items-md-end  transition-mode",children:u.jsx("span",{className:"words chars splitting",children:u.jsx("span",{className:"word",children:"Contact"})})})]})]})]})]})}const Y0=`.grid-w {
    -moz-column-gap: 1rem;
    column-gap: 1rem;
    display: grid;
    grid-template-columns: repeat(24, minmax(0, 1fr));
    padding-left: var(--padding-container);
    padding-right: var(--padding-container);
}

.grid {
    display: grid;
}

.sidebar {
    position: sticky;
    height: auto;

}

.w-full {
    width: 100%;
}

.grid-cols-24 {
    grid-template-columns: repeat(24, minmax(0, 1fr));
}

.sidebar-content {
    height: auto;
    border: 1px solid var(--color-secondary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
}

.content {
    border: 1px solid var(--color-secondary);
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}

.content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.main-content {
    grid-column-start: 7;
    grid-column-end: 25;
    padding-bottom: 0rem;
}

.self-start {
    align-self: flex-start;
}

.gap-10,
.gap-grid {
    gap: 1rem;
}

.flex-col {
    flex-direction: column;
}

.flex {
    display: flex;
}

.card-work-w {
    /* padding-top: 63.5%; */

}

.col-span-12 {
    grid-column: span 12 / span 12;
}

.row-span-2 {
    grid-row: span 2 / span 2;
}

.col-span-full {
    grid-column: 1 / -1;
}

.relative {
    position: relative;
}

.card-work-w-1 {
    /* grid-column-start: 1;
    grid-column-end: 7; */
    grid-column: 1 / 17;
    grid-row: span 2 / span 2;
}

.card-work-w-2 {
    grid-column: span 8 / span 8;

}

.card-work-w-3 {

    grid-column: span 16 / span 16;
}

.sidebar-content-1 span {
    font-size: 1.4rem;
    line-height: 150%;
    opacity: .2;
}

.sidebar-content-1 {
    gap: .2rem;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    color: var(--color-secondary);
}

.sidebar-content-1 span:hover {
    opacity: 1 !important;
}

.sidebar-content-1 span.active {
    opacity: 1 !important;
}

.sidebar-content-2 {
    font-size: 4.8rem;
    font-weight: 700;
    padding-bottom: .5rem;
    text-transform: uppercase;
    color: var(--color-secondary);
}

.content-img {

    pointer-events: none;
    height: 100%;
    left: 0;
    position: relative;
    top: 0;
    width: 100%;
}

.content:hover .inner-content {
    visibility: visible !important;
    bottom: 0px;
    opacity: 1;
}

.min-h-available {
    min-height: var(--h-available);
}

.inner-content {
    bottom: -100px;
    opacity: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2.2rem;
    padding-bottom: 1rem;
    transition-duration: .3s;
    background-color: var(--color-primary);
    border: 0.1rem solid var(--color-secondary);
    width: 100%;
    transition-timing-function: cubic-bezier(0, 0, .2, 1);
    color: var(--color-secondary);
}

.inner-content .title {
    font-size: 2.4rem;
    line-height: 1;
    text-transform: uppercase;
    padding-right: 5px;

}

.works-archives {
    -webkit-text-stroke: 1px var(--color-secondary);
    line-height: normal;
    text-transform: uppercase;
    /* min-height: var(--h-available); */
    width: 100%;
    padding-top: 7.5rem;
    border-top-width: 1px;
    border-color: var(--color-secondary);
    margin-top: 1rem;
}

.text-transparent {
    color: #0000;
}

.works-archives .text-full {
    margin-left: -1.3rem;
}

@media (min-width: 1200px) {
    .sidebar {

        top: 90px;
        /* adjust this for your desired offset */
        height: var(--h-available);
        /* optional: to limit height */
    }

    .sidebar-content {
        height: 100%;
    }

    .sidebar {
        grid-column-start: 1;
        grid-column-end: 7;
    }

    .main-content {
        grid-column-start: 7;
        grid-column-end: 25;
    }
}

@media (max-width: 1200px) {
    .sidebar {
        grid-column: 1 / -1;
    }

    .sidebar-content-1 {
        flex-direction: row;
        gap: 1rem;
    }

    .main-content {
        grid-column-start: 1;
        margin-top: 1rem;
        grid-column-end: 25;
    }

    .works-archives .text-full span {
        font-size: 234.837px !important;
        letter-spacing: -14.1754px !important;
    }
}

@media (max-width:768px) {
    .works-archives .text-full span {
        font-size: 178.837px !important;
        letter-spacing: -12.1754px !important;
    }

    .main-content .grid {
        display: flex;
        flex-direction: column;
    }

    .content .inner-content {
        visibility: visible !important;
        bottom: 0px;
        opacity: 1;
        border-top-width: 1px;
    }

    .sidebar {

        top: 70px;
    }
}

@media (max-width:480px) {
    .works-archives .text-full span {
        font-size: 100px !important;
        letter-spacing: -8.1754px !important;
    }

    /* .header-element {
        grid-column-end: 24;
        grid-column-start: 1;
    } */
    .header-toggler {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .px-container {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .sidebar-content-1 span {
        font-size: 1rem;
    }
}`;function Kt(){return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Y0}),u.jsx("div",{style:{width:"100vw",height:"7.5rem"},children:" "}),u.jsxs("div",{class:"",children:[u.jsxs("div",{class:"grid-w w-full",children:[u.jsx("div",{className:"col-span-full d-xl-none sidebar-content-2 d-flex align-items-center",style:{borderWidth:1,borderBottomWidth:"0",borderColor:"#000",borderStyle:"solid",padding:"2rem",paddingTop:"4rem",height:80},children:u.jsx("span",{children:"Work"})}),u.jsx("div",{class:"sidebar",children:u.jsxs("div",{class:"sidebar-content",children:[u.jsxs("div",{className:"sidebar-content-1",children:[u.jsx("span",{className:"active",children:"ALLs"}),u.jsx("span",{children:"Original music"}),u.jsx("span",{children:"Sound Design"}),u.jsx("span",{children:"Sound Production"})]}),u.jsx("div",{className:"d-xl-flex d-none sidebar-content-2",children:u.jsx("span",{children:"Works"})})]})}),u.jsx("div",{class:"main-content",children:u.jsxs("div",{className:"grid grid-cols-24 gap-10",children:[u.jsx("div",{className:"card-work-w-1 h-0  ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png",alt:"w-100 h-100 "})}),u.jsx("div",{className:"inner-content position-absolute ",children:u.jsxs("div",{children:[u.jsx("span",{className:"title",children:"Motion Motion"}),u.jsx("span",{children:"Motion  Trailer"})]})})]})}),u.jsx("div",{className:"card-work-w-2 h-0 ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-00.47.38-768x431.png",alt:"w-100 h-100"})}),u.jsx("div",{className:"inner-content position-absolute ",children:u.jsxs("div",{children:[u.jsx("span",{className:"title",children:"Motion Motion"}),u.jsx("span",{children:"Motion  Trailer"})]})})]})}),u.jsx("div",{className:"card-work-w-2 h-0 ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/03/Diner-vue-haut-foret-1-768x429.jpg",alt:"w-100 h-100"})}),u.jsx("div",{className:"inner-content position-absolute ",children:u.jsxs("div",{children:[u.jsx("span",{className:"title",children:"Motion "}),u.jsx("span",{children:"Motion  Trailer"})]})})]})}),u.jsxs("div",{className:"grid card-work-w-2 gap-10",children:[u.jsx("div",{className:"card-work-w-2 h-0 ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/02/Capture-decran-2024-05-02-a-16.15-scaled-e1714660268550-768x422.jpg",alt:"w-100 h-100"})}),u.jsx("div",{className:"inner-content position-absolute ",children:u.jsxs("div",{children:[u.jsx("span",{className:"title",children:"Motion "}),u.jsx("span",{children:"Motion Trailer"})]})})]})}),u.jsx("div",{className:"card-work-w-2 h-0 ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/02/Capture-decran-2024-03-18-a-14.21-2-768x451.jpg",alt:"w-100 h-100"})}),u.jsx("div",{className:"inner-content position-absolute ",children:u.jsxs("div",{children:[u.jsx("span",{className:"title",children:"Motion"}),u.jsx("span",{children:"Motion Trailer"})]})})]})})]}),u.jsx("div",{className:"card-work-w-3 h-0 ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/02/cartier-sound-design-1.jpg",alt:"w-100 h-100"})}),u.jsx("div",{className:"inner-content position-absolute ",children:u.jsxs("div",{children:[u.jsx("span",{className:"title",children:"Motion"}),u.jsx("span",{children:"Motion  Trailer"})]})})]})}),u.jsx("div",{className:"card-work-w-1 h-0  ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png",alt:"w-100 h-100 "})}),u.jsx("div",{className:"inner-content position-absolute ",children:u.jsxs("div",{children:[u.jsx("span",{className:"title",children:"Motion "}),u.jsx("span",{children:" Motion Trailer"})]})})]})}),u.jsx("div",{className:"card-work-w-2 h-0 ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-00.47.38-768x431.png",alt:"w-100 h-100"})}),u.jsx("div",{className:"inner-content position-absolute ",children:u.jsxs("div",{children:[u.jsx("span",{className:"title",children:"Motion"}),u.jsx("span",{children:"Motion Trailer"})]})})]})}),u.jsx("div",{className:"card-work-w-2 h-0 ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/03/Diner-vue-haut-foret-1-768x429.jpg",alt:"w-100 h-100"})}),u.jsx("div",{className:"inner-content position-absolute ",children:u.jsxs("div",{children:[u.jsx("span",{className:"title",children:"Motion "}),u.jsx("span",{children:"Motion  Trailer"})]})})]})})]})})]}),u.jsx("div",{className:"w-100 ",children:u.jsx("h2",{className:"works-archives text-center text-transparent ",children:u.jsx("div",{className:"text-full ",children:u.jsx("span",{className:"text-full-el",style:{fontSize:445.363,letterSpacing:-31.1754},children:"Archives"})})})})]})]})}const G0=`html {
    -webkit-text-size-adjust: 100%;
    font-feature-settings: normal;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-variation-settings: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    tab-size: 4;
}
:root{
    --bs-body-font-weight: 100;
}
*, :after, :before {
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
}
.bg-primary{
    background-color: var(--color-primary)!important;
}
.w-full {
    width: 100%;
}
.py-5 {
    padding-bottom: .5rem;
    padding-top: .5rem;
}
.grid-w {
    -moz-column-gap: 1rem;
    column-gap: 1rem;
    display: grid;
    grid-template-columns: repeat(24, minmax(0, 1fr));
    padding-left: var(--padding-container);
    padding-right: var(--padding-container);
}
.relative {
    position: relative;
}
.col-span-full {
    grid-column: 1 / -1;
}
.pointer-events-auto {
    pointer-events: auto;
}
.mb-10 {
    margin-bottom: 1rem;
}
.border-secondarys {
    border-color: var(--color-secondary);
}
.border-px {
    border-width: 1px;
}
.h-full {
    height: 100%;
}

.translate-x-0, .translate-y-0 {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
    --tw-translate-y: 0;
}
.translate-x-0 {
    --tw-translate-x: 0;
}
.py-20 {
    padding-bottom: 2rem;
    padding-top: 2rem;
}

.items-end {
    align-items: flex-end;
}
.flex {
    display: flex;
}
.flex-col {
    flex-direction: column;
}
.flex-col-reverse {
    flex-direction: column-reverse;
}
.uppercase {
    text-transform: uppercase;
}
.pt-10 {
    padding-top: 1rem;
}
.justify-between {
    justify-content: space-between;
}
.border-b-px, .border-y-px {
    border-bottom-width: 1px;
}
.block {
    display: block;
}
.border-secondary-rgb\\/15 {
    border-color: rgba(var(--color-secondary-rgb) / .15);
}
.heading-32, .heading-48 {
    line-height: 1;
    text-transform: uppercase;
}
.heading-48 {
    font-size: 4.8rem;
}
.text-secondary {
    color: var(--color-secondary)!important;
}
.font-bold {
    font-weight: 700;
}

.h-\\[8\\.8rem\\] {
    height: 8.8rem;
}
.heading-20 {
    font-size: 2rem;
}

.heading-20, .heading-24 {
    line-height: 1;
    text-transform: uppercase;
}
.\\!leading-\\[2\\.6rem\\] {
    line-height: 2.6rem !important;
}
blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
    margin: 0;
}
h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
}

.wysiwyg *+div, .wysiwyg *+h3, .wysiwyg *+h4, .wysiwyg *+p {
    margin-top: 1rem;
}
.mt-10 {
    margin-top: 1rem;
}
.pt-\\[110\\%\\] {
    padding-top: 110%;
}
.h-0 {
    height: 0;
}
.absolute-full {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
.object-cover {
    object-fit: cover;
}
img, video {
    height: auto;
    max-width: 100%;
}
.image .lazy.loaded {
    opacity: 1;
    transition-duration: .3s;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
}
.order-first {
    order: -9999;
}
.order-first {
    order: 0 !important;
}
.group:first-child .group-first\\:border-t-px {
    border-top-width: 1px;
}

.border-secondary-rgb\\/15 {
    border-color: rgba(var(--color-secondary-rgb) / .15);
}
.border-b-px, .border-y-px {
    border-bottom-width: 1px;
}
.body-14 {
    font-size: 1.4rem;
    line-height: 150%;
    font-weight: 100!important;
}
.pt-\\[1\\.4rem\\] {
    padding-top: 1.4rem;
}
.pb-\\[1\\.2rem\\] {
    padding-bottom: 1.2rem;
}
.px-20 {
    padding-left: 2rem;
    padding-right: 2rem;
}
.p-container {
    padding: var(--padding-container);
}
.text-stroke {
    -webkit-text-stroke: 1px var(--color-secondary);
    color: #0000;
}
.leading-\\[1\\] {
    line-height: 1;
}
.gap-y-10, .gap-y-grid {
    row-gap: 1rem;
}
.pt-\\[3rem\\] {
    padding-top: 3rem;
}
.link .word {
    overflow: hidden;
}
.word {
    display: inline-flex;
}
.pb-5 {
    padding-bottom: .5rem;
}
a>span, p>span {
    -webkit-text-decoration: none!important;
    text-decoration: none !important;
}
.link .word .char {
    position: relative;
    transition-delay: calc(var(--delay) * var(--char-index));
    transition-duration: .4s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-timing-function: cubic-bezier(0,0,.2,1);
}
.char {
    display: inline-block;
}
.link .word .char:before {
    content: attr(data-char);
    left: 0;
    position: absolute;
    top: -100%;
}
a {
    color: inherit;
    text-decoration: inherit;
}
@media (min-width: 768px) {
    .md\\:mb-0 {
        margin-bottom: 0;
    }
    .md\\:col-span-12 {
        grid-column: span 12 / span 12;
    }
    .md\\:pb-\\[0\\.6rem\\] {
        padding-bottom: .6rem;
    }
    .md\\:py-10 {
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
    .md\\:pt-0 {
        padding-top: 0;
    }
    .md\\:h-full {
        height: 100%;
    }
    .md\\:col-end-25 {
        grid-column-end: 25;
    }
    .md\\:col-start-13 {
        grid-column-start: 13;
    }
    .md\\:order-last {
        order: 9999;
    }
    .md\\:heading-20 {
        font-size: 2rem;
    }
    .md\\:heading-20, .md\\:heading-24 {
        line-height: 1;
        text-transform: uppercase;
    }
    .md\\:pt-\\[6rem\\] {
        padding-top: 6rem;
    }
    .md\\:pb-\\[1\\.5rem\\] {
        padding-bottom: 1.5rem;
    }
}

@media (min-width: 1024px) {
    .lg\\:h-available {
        height: var(--h-available);
    }
    .lg\\:mb-0 {
        margin-bottom: 0;
    }
    .lg\\:top-sticky {
        top: var(--spacing-sticky);
    }
    .lg\\:sticky {
        position: sticky;
    }
    
    .lg\\:col-start-1 {
        grid-column-start: 1;
    }
    .lg\\:col-start-7 {
        grid-column-start: 7;
    }
    .lg\\:col-start-13 {
        grid-column-start: 13;
    }

    .lg\\:col-end-7 {
        grid-column-end: 7;
    }
    .lg\\:col-end-13 {
        grid-column-end: 13;
    }
    .lg\\:col-end-25 {
        grid-column-end: 25;
    }
    
    .lg\\:-mt-\\[var\\(--h-available\\)\\] {
        margin-top: calc(var(--h-available) * -1);
    }
    .anchor.a {
        background-color: var(--color-secondary)!important;
        color: var(--color-primary)!important;
    }
    .lg\\:flex-col {
        flex-direction: column;
    }
        .lg\\:border-b-0 {
        border-bottom-width: 0;
    }
    .lg\\:pb-\\[1\\.6rem\\] {
        padding-bottom: 1.6rem;
    }
    .lg\\:items-center {
        align-items: center;
    }
        .lg\\:flex-row {
        flex-direction: row;
    }
    .lg\\:w-\\[75\\%\\]{
        width: 75%;
    }
    .lg\\:mt-0 {
        margin-top: 0;
    }   
}

@media (min-width: 1200px){
    .xl\\:hover\\:bg-secondary:hover {
        background-color: var(--color-secondary);
    }

    .xl\\:hover\\:text-primary:hover {
        color: var(--color-primary)!important;
    }

    .group:hover .xl\\:group-hover\\:text-primary {
        color: var(--color-primary)!important;
    }
    .group:hover .xl\\:group-hover\\:border-primary-rgb\\/15 {
        border-color: rgba(var(--color-primary-rgb) / .15);
    }

    .xl\\:w-\\[43\\%\\] {
        width: 43%;
    }

    .xl\\:sticky {
        position: sticky;
    }

    .xl\\:bottom-\\[2rem\\] {
        bottom: 2rem;
    }

    .xl\\:h-available {
        height: var(--h-available);
    }

    .xl\\:transition-none {
        transition-property: none;
    }

    .xl\\:border-0 {
        border-width: 0;
    }

    .xl\\:border-b-px {
        border-bottom-width: 1px;
    }

    .xl\\:border-secondarys {
        border-color: var(--color-secondary);
    }

    .xl\\:border-t-px {
        border-top-width: 1px;
    }

    .xl\\:border-x-px {
        border-left-width: 1px;
        border-right-width: 1px;
    }

    .xl\\:min-h-available {
        min-height: var(--h-available);
    }

    .xl\\:top-sticky {
        top: var(--spacing-sticky);
    }
    .xl\\:min-h-\\[500px\\] {
        min-height: 500px;
    }
        .xl\\:-ml-\\[0\\.5rem\\] {
        margin-left: -.5rem;
    }
        .xl\\:-mt-\\[2rem\\] {
        margin-top: -2rem;
    }
}`;function X0(){const c=R.useRef(null),[f,d]=R.useState(0);return R.useEffect(()=>{c.current&&d(c.current.offsetHeight)},[]),u.jsxs(u.Fragment,{children:[u.jsx("style",{dangerouslySetInnerHTML:{__html:G0}}),u.jsx("div",{style:{width:"100vw",height:"7.5rem"},children:" "}),u.jsx("div",{className:"sticky-footer-top flex items-end",style:{height:f*2.2},children:u.jsxs("div",{className:"xl:sticky xl:bottom-[2rem] w-full",ref:c,children:[u.jsx("div",{className:"relative lg:sticky lg:top-sticky grid-w w-full lg:h-available mb-10 lg:mb-0 pointer-events-none z-1",children:u.jsx("div",{className:"main-column col-span-full lg:col-start-7 lg:col-end-13 pointer-events-auto",children:u.jsx("div",{className:"box-parent relative w-full border-px border-secondarys xl:border-0 transition-mode xl:transition-none overflow-hidden h-full",children:u.jsx("div",{className:"box  box-menu  w-full h-full xl:border-b-px xl:border-secondarys transition-mode overflow-hidden translate-x-0 translate-y-0",style:{transform:"translate(0px, 0px)"},children:u.jsx("div",{className:"box-inner xl:border-t-px xl:border-x-px xl:border-secondarys transition-mode w-full h-full translate-x-0 translate-y-0",style:{transform:"translate(0px, 0px)"},children:u.jsxs("div",{className:"flex flex-col-reverse lg:flex-col justify-between h-full",children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsx("div",{"data-target":"about",className:"anchor relative w-full px-container uppercase text-secondary bg-primary transition-mode cursor-pointer z-4 a",children:u.jsx("span",{className:"block w-full border-b-px border-secondary-rgb/15 pt-10 pb-[0.8rem] md:pb-[0.6rem] transition-mode",children:"About"})}),u.jsx("div",{"data-target":"about",className:"anchor relative w-full px-container uppercase text-secondary bg-primary transition-mode cursor-pointer z-4",children:u.jsx("span",{className:"block w-full border-b-px border-secondary-rgb/15 pt-10 pb-[0.8rem] md:pb-[0.6rem] transition-mode",children:"About"})}),u.jsx("div",{"data-target":"about",className:"anchor relative w-full px-container uppercase text-secondary bg-primary transition-mode cursor-pointer z-4",children:u.jsx("span",{className:"block w-full border-b-px border-secondary-rgb/15 pt-10 pb-[0.8rem] md:pb-[0.6rem] transition-mode",children:"About"})}),u.jsx("div",{"data-target":"about",className:"anchor relative w-full px-container uppercase text-secondary bg-primary transition-mode cursor-pointer z-4",children:u.jsx("span",{className:"block w-full border-b-px border-secondary-rgb/15 pt-10 pb-[0.8rem] md:pb-[0.6rem] transition-mode",children:"About"})})]}),u.jsx("div",{className:"flex items-end px-container py-2 md:py-10 h-[8.8rem] border-secondarys border-b-px lg:border-b-0 text-secondary heading-48 font-bold transition-mode",children:"About"})]})})})})})}),u.jsxs("div",{"data-anchor":"about",className:"relative grid-w w-full xl:h-available lg:-mt-[var(--h-available)]",children:[u.jsx("div",{className:"col-span-full md:col-span-12 lg:col-start-1 lg:col-end-7 mb-10 md:mb-0 z-1",children:u.jsx("div",{className:"box-parent relative w-full border-px border-secondarys xl:border-0 transition-mode xl:transition-none overflow-hidden h-full",children:u.jsx("div",{className:"box w-full h-full xl:border-b-px xl:border-secondarys transition-mode overflow-hidden translate-x-0 translate-y-0",children:u.jsxs("div",{className:"box-inner xl:border-t-px xl:border-x-px xl:border-secondarys transition-mode w-full h-full translate-x-0 translate-y-0 px-container py-20",children:[u.jsx("h1",{className:"heading-20 !leading-[2.6rem] mb-10 text-secondary transition-mode",children:"We are composers and sound designers"}),u.jsxs("div",{className:"wysiwyg text-secondary transition-mode",children:[u.jsx("p",{children:"And if we had to summarize in a few words what we do, it would be to link sound to non-sound, to offer know-how and experience, rather than imposing a universe."}),u.jsx("p",{children:"Images, emotions, messages, we use sound and music as raw material to adorn, enrich, complete."}),u.jsx("p",{children:"We always start by listening, always, to be sure to understand in depth why we are being addressed. And then we propose, we refine. It’s not as fast as AI, but it’s certainly more embodied."}),u.jsx("p",{children:"Mooders is a musical story that goes back to middle school, a professional activity that has existed for around ten years. Lots of France, a little international. Lots of films, a little live. Orders, personal projects, stereo, but also multichannel. Around thirty musical instruments, two studios, four children (not together), lots of partners, because we don’t know how to do EVERYTHING ourselves, but we know how to surround ourselves well."}),u.jsx("p",{children:"And above all, we love our job, because the variety of subjects, media, people we talk to, and music covered makes any routine impossible."}),u.jsx("p",{children:" "})]})]})})})}),u.jsx("div",{className:"relative col-span-full md:col-span-12 lg:col-start-13 lg:col-end-25 z-1",children:u.jsx("div",{className:"box-parent relative w-full border-px border-secondarys xl:border-0 transition-mode xl:transition-none overflow-hidden h-full",children:u.jsx("div",{className:"box w-full h-full xl:border-b-px xl:border-secondarys transition-mode overflow-hidden translate-x-0 translate-y-0",children:u.jsxs("div",{className:"box-inner xl:border-t-px xl:border-x-px xl:border-secondarys transition-mode w-full h-full translate-x-0 translate-y-0 ",children:[u.jsx("div",{className:"box-blur absolute-full z-2 pointer-events-none",style:{backdropFilter:"blur(0px)"}}),u.jsx("div",{className:"w-full h-0 pt-[110%] md:h-full md:pt-0",children:u.jsx("div",{className:"absolute-full",children:u.jsx("div",{className:"image  w-full h-full ",children:u.jsx("figure",{className:"w-full h-full",children:u.jsx("img",{className:"  w-full h-full    object-cover ",width:"150",height:"150",alt:"two men on a rock stairs outside. one is seated the other is standing on his feet.",src:"https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-480x589.jpg",srcset:`
                                                                https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-480x589.jpg 480w,
                                                                https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-768x943.jpg 768w,
                                                                https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-1200x1473.jpg 1200w,
                                                                https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-1600x1965.jpg 1600w,
                                                                https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-1920x2358.jpg 1920w,`,sizes:"(max-width: 1023px) 100vw, 50vw"})})})})})]})})})})]}),u.jsxs("div",{"data-anchor":"service",className:"about-services relative grid-w w-full xl:min-h-available mt-10",children:[u.jsx("div",{className:"relative xl:sticky xl:top-sticky col-span-full md:col-span-12 lg:col-start-1 lg:col-end-7 xl:h-available border-secondary border-px z-1",children:u.jsx("div",{className:"w-full h-0 pt-[110%] md:h-full md:pt-0",children:u.jsx("div",{className:"absolute-full",children:u.jsx("div",{className:"image  w-full h-full ",children:u.jsx("figure",{className:"w-full h-full",children:u.jsx("img",{className:"lazy opacity-0s w-full h-full object-cover entered loaded",width:"150",height:"150",alt:"","data-src":"https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-480x320.jpeg","data-srcset":`
                                            https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-480x320.jpeg 480w,
                                            https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-768x512.jpeg 768w,
                                            https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-1200x800.jpeg 1200w,
                                            https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29.jpeg 1600w,
                                            https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29.jpeg 1920w,`,"data-sizes":"(max-width: 1023px) 100vw, 25vw","data-ll-status":"loaded",sizes:"(max-width: 1023px) 100vw, 25vw",srcset:`
                                                https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-480x320.jpeg 480w,
                                                https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-768x512.jpeg 768w,
                                                https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-1200x800.jpeg 1200w,
                                                https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29.jpeg 1600w,
                                                https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29.jpeg 1920w,`,src:"https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-480x320.jpeg"})})})})})}),u.jsx("div",{className:"order-first md:order-last mb-10 md:mb-0 col-span-full md:col-start-13 md:col-end-25 z-1",children:u.jsxs("div",{className:"border-px border-secondary py-20 h-full",children:[u.jsx("a",{href:"https://mooders.net/en/aboutus/original-music/",className:"group block w-full px-container text-secondary transition-mode xl:hover:bg-secondary xl:hover:text-primary",children:u.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-20 lg:pb-[1.6rem] group-first:border-t-px border-b-px border-secondary-rgb/15",children:[u.jsxs("div",{className:"w-full lg:w-[75%] xl:w-[43%]",children:[u.jsx("div",{className:"heading-20 uppercase ",children:"Original Music"}),u.jsx("div",{className:"body-14 mt-10",children:"Create emotions, enhance a story, give a tone"})]}),u.jsx("div",{className:"body-12 uppercase mt-10 lg:mt-0 px-20 pt-[1.4rem] pb-[1.2rem] md:pb-10 border-px border-secondary-rgb/15 text-secondary transition-mode xl:group-hover:text-primary xl:group-hover:border-primary-rgb/15",children:"Discover"})]})}),u.jsx("a",{href:"https://mooders.net/en/aboutus/sound-design/",className:"group block w-full px-container text-secondary transition-mode xl:hover:bg-secondary xl:hover:text-primary",children:u.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-20 lg:pb-[1.6rem] group-first:border-t-px border-b-px border-secondary-rgb/15",children:[u.jsxs("div",{className:"w-full lg:w-[75%] xl:w-[43%]",children:[u.jsx("div",{className:"heading-20 uppercase ",children:"Sound design"}),u.jsx("div",{className:"body-14 mt-10",children:"Create sound matter, textures, atmospheres and soundscapes"})]}),u.jsx("div",{className:"body-12 uppercase mt-10 lg:mt-0 px-20 pt-[1.4rem] pb-[1.2rem] md:pb-10 border-px border-secondary-rgb/15 text-secondary transition-mode xl:group-hover:text-primary xl:group-hover:border-primary-rgb/15",children:"Discover"})]})}),u.jsx("a",{href:"https://mooders.net/en/aboutus/sound-production/",className:"group block w-full px-container text-secondary transition-mode xl:hover:bg-secondary xl:hover:text-primary",children:u.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-20 lg:pb-[1.6rem] group-first:border-t-px border-b-px border-secondary-rgb/15",children:[u.jsxs("div",{className:"w-full lg:w-[75%] xl:w-[43%]",children:[u.jsx("div",{className:"heading-20 uppercase ",children:"Sound Production"}),u.jsx("div",{className:"body-14 mt-10",children:"Answer a brief, supervise a soundtrack"})]}),u.jsx("div",{className:"body-12 uppercase mt-10 lg:mt-0 px-20 pt-[1.4rem] pb-[1.2rem] md:pb-10 border-px border-secondary-rgb/15 text-secondary transition-mode xl:group-hover:text-primary xl:group-hover:border-primary-rgb/15",children:"Discover"})]})}),u.jsx("a",{href:"https://mooders.net/en/aboutus/post-production/",className:"group block w-full px-container text-secondary transition-mode xl:hover:bg-secondary xl:hover:text-primary",children:u.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-20 lg:pb-[1.6rem] group-first:border-t-px border-b-px border-secondary-rgb/15",children:[u.jsxs("div",{className:"w-full lg:w-[75%] xl:w-[43%]",children:[u.jsx("div",{className:"heading-20 uppercase ",children:"Post Production"}),u.jsx("div",{className:"body-14 mt-10",children:"Cast and record a voice-over, mix to broadcast standards"})]}),u.jsx("div",{className:"body-12 uppercase mt-10 lg:mt-0 px-20 pt-[1.4rem] pb-[1.2rem] md:pb-10 border-px border-secondary-rgb/15 text-secondary transition-mode xl:group-hover:text-primary xl:group-hover:border-primary-rgb/15",children:"Discover"})]})}),u.jsx("a",{href:"https://mooders.net/en/aboutus/technical-support/",className:"group block w-full px-container text-secondary transition-mode xl:hover:bg-secondary xl:hover:text-primary",children:u.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-20 lg:pb-[1.6rem] group-first:border-t-px border-b-px border-secondary-rgb/15",children:[u.jsxs("div",{className:"w-full lg:w-[75%] xl:w-[43%]",children:[u.jsx("div",{className:"heading-20 uppercase ",children:"Technical Support"}),u.jsx("div",{className:"body-14 mt-10",children:"Hardware recommendations, set up sound diffusion systems"})]}),u.jsx("div",{className:"body-12 uppercase mt-10 lg:mt-0 px-20 pt-[1.4rem] pb-[1.2rem] md:pb-10 border-px border-secondary-rgb/15 text-secondary transition-mode xl:group-hover:text-primary xl:group-hover:border-primary-rgb/15",children:"Discover"})]})})]})})]})]})}),u.jsx("div",{className:"sticky-footer-bottom relative w-full px-container bg-primary transition-mode z-0",style:{marginTop:-f/1.93},children:u.jsxs("section",{className:"xl:min-h-[500px] xl:h-available mt-10 p-container bg-primary border-px border-secondary transition-mode",children:[u.jsx("div",{className:"text-full text-stroke leading-[1] uppercase xl:-ml-[0.5rem]",children:u.jsx("span",{className:"text-full-el",style:{fontSize:"208.248px",letterSpacing:"-14.5774px"},children:"Contactez-nous"})}),u.jsxs("div",{className:"flex flex-col gap-y-10 xl:-mt-[2rem]",children:[u.jsx("div",{className:"w-full body-14 md:heading-20 uppercase px-container pb-5 md:pb-[1.5rem] pt-[3rem] md:pt-[6rem] border-px border-secondary text-secondary transition-mode",children:u.jsx("a",{className:"link",href:"mailto:hello@mooders.net",children:u.jsx("span",{className:"words chars splitting","data-splitting":"chars",style:{"--char-total":"17","--word-total":"1"},children:u.jsxs("span",{className:"word","data-word":"hello@mooders.net",style:{"--word-index":"0"},children:[u.jsx("span",{className:"char","data-char":"h",style:{"--char-index":"0"},children:"h"}),u.jsx("span",{className:"char","data-char":"e",style:{"--char-index":"1"},children:"e"}),u.jsx("span",{className:"char","data-char":"l",style:{"--char-index":"2"},children:"l"}),u.jsx("span",{className:"char","data-char":"l",style:{"--char-index":"3"},children:"l"}),u.jsx("span",{className:"char","data-char":"o",style:{"--char-index":"4"},children:"o"}),u.jsx("span",{className:"char","data-char":"@",style:{"--char-index":"5"},children:"@"}),u.jsx("span",{className:"char","data-char":"m",style:{"--char-index":"6"},children:"m"}),u.jsx("span",{className:"char","data-char":"o",style:{"--char-index":"7"},children:"o"}),u.jsx("span",{className:"char","data-char":"o",style:{"--char-index":"8"},children:"o"}),u.jsx("span",{className:"char","data-char":"d",style:{"--char-index":"9"},children:"d"}),u.jsx("span",{className:"char","data-char":"e",style:{"--char-index":"10"},children:"e"}),u.jsx("span",{className:"char","data-char":"r",style:{"--char-index":"11"},children:"r"}),u.jsx("span",{className:"char","data-char":"s",style:{"--char-index":"12"},children:"s"}),u.jsx("span",{className:"char","data-char":".",style:{"--char-index":"13"},children:"."}),u.jsx("span",{className:"char","data-char":"n",style:{"--char-index":"14"},children:"n"}),u.jsx("span",{className:"char","data-char":"e",style:{"--char-index":"15"},children:"e"}),u.jsx("span",{className:"char","data-char":"t",style:{"--char-index":"16"},children:"t"})]})})})}),u.jsx("div",{className:"w-full body-14 md:heading-20 uppercase px-container pb-5 md:pb-[1.5rem] pt-[3rem] md:pt-[6rem] border-px border-secondary text-secondary transition-mode",children:u.jsx("a",{className:"link",href:"tel:+33 6 75 99 05 93",children:u.jsxs("span",{className:"words chars splitting","data-splitting":"chars",style:{"--char-total":"12","--word-total":"6"},children:[u.jsxs("span",{className:"word","data-word":"+33",style:{"--word-index":"0"},children:[u.jsx("span",{className:"char","data-char":"+",style:{"--char-index":"0"},children:"+"}),u.jsx("span",{className:"char","data-char":"3",style:{"--char-index":"1"},children:"3"}),u.jsx("span",{className:"char","data-char":"3",style:{"--char-index":"2"},children:"3"})]}),u.jsx("span",{className:"whitespace",children:" "}),u.jsx("span",{className:"word","data-word":"6",style:{"--word-index":"1"},children:u.jsx("span",{className:"char","data-char":"6",style:{"--char-index":"3"},children:"6"})}),u.jsx("span",{className:"whitespace",children:" "}),u.jsxs("span",{className:"word","data-word":"75",style:{"--word-index":"2"},children:[u.jsx("span",{className:"char","data-char":"7",style:{"--char-index":"4"},children:"7"}),u.jsx("span",{className:"char","data-char":"5",style:{"--char-index":"5"},children:"5"})]}),u.jsx("span",{className:"whitespace",children:" "}),u.jsxs("span",{className:"word","data-word":"99",style:{"--word-index":"3"},children:[u.jsx("span",{className:"char","data-char":"9",style:{"--char-index":"6"},children:"9"}),u.jsx("span",{className:"char","data-char":"9",style:{"--char-index":"7"},children:"9"})]}),u.jsx("span",{className:"whitespace",children:" "}),u.jsxs("span",{className:"word","data-word":"05",style:{"--word-index":"4"},children:[u.jsx("span",{className:"char","data-char":"0",style:{"--char-index":"8"},children:"0"}),u.jsx("span",{className:"char","data-char":"5",style:{"--char-index":"9"},children:"5"})]}),u.jsx("span",{className:"whitespace",children:" "}),u.jsxs("span",{className:"word","data-word":"93",style:{"--word-index":"5"},children:[u.jsx("span",{className:"char","data-char":"9",style:{"--char-index":"10"},children:"9"}),u.jsx("span",{className:"char","data-char":"3",style:{"--char-index":"11"},children:"3"})]})]})})}),u.jsxs("div",{className:"w-full flex flex-wrap body-14 md:heading-20 uppercase px-container pb-5 md:pb-[1.5rem] pt-[3rem] md:pt-[6rem] border-px border-secondary text-secondary transition-mode",children:[u.jsxs("div",{className:"flex",children:[u.jsx("a",{className:"link inline",href:"https://twitter.com/Mooders_music",rel:"noopener",target:"_blank",children:u.jsx("span",{className:"words chars splitting","data-splitting":"chars",style:{"--char-total":"7","--word-total":"1"},children:u.jsxs("span",{className:"word","data-word":"Twitter",style:{"--word-index":"0"},children:[u.jsx("span",{className:"char","data-char":"T",style:{"--char-index":"0"},children:"T"}),u.jsx("span",{className:"char","data-char":"w",style:{"--char-index":"1"},children:"w"}),u.jsx("span",{className:"char","data-char":"i",style:{"--char-index":"2"},children:"i"}),u.jsx("span",{className:"char","data-char":"t",style:{"--char-index":"3"},children:"t"}),u.jsx("span",{className:"char","data-char":"t",style:{"--char-index":"4"},children:"t"}),u.jsx("span",{className:"char","data-char":"e",style:{"--char-index":"5"},children:"e"}),u.jsx("span",{className:"char","data-char":"r",style:{"--char-index":"6"},children:"r"})]})})}),u.jsx("span",{children:", "})]}),u.jsxs("div",{className:"flex",children:[u.jsx("a",{className:"link inline",href:"https://www.linkedin.com/in/mooders/",rel:"noopener",target:"_blank",children:u.jsx("span",{className:"words chars splitting","data-splitting":"chars",style:{"--char-total":"8","--word-total":"1"},children:u.jsxs("span",{className:"word","data-word":"Linkedin",style:{"--word-index":"0"},children:[u.jsx("span",{className:"char","data-char":"L",style:{"--char-index":"0"},children:"L"}),u.jsx("span",{className:"char","data-char":"i",style:{"--char-index":"1"},children:"i"}),u.jsx("span",{className:"char","data-char":"n",style:{"--char-index":"2"},children:"n"}),u.jsx("span",{className:"char","data-char":"k",style:{"--char-index":"3"},children:"k"}),u.jsx("span",{className:"char","data-char":"e",style:{"--char-index":"4"},children:"e"}),u.jsx("span",{className:"char","data-char":"d",style:{"--char-index":"5"},children:"d"}),u.jsx("span",{className:"char","data-char":"i",style:{"--char-index":"6"},children:"i"}),u.jsx("span",{className:"char","data-char":"n",style:{"--char-index":"7"},children:"n"})]})})}),u.jsx("span",{children:", "})]}),u.jsx("div",{className:"flex",children:u.jsx("a",{className:"link inline",href:"https://www.instagram.com/mooders_sound_design/",rel:"noopener",target:"_blank",children:u.jsx("span",{className:"words chars splitting","data-splitting":"chars",style:{"--char-total":"9","--word-total":"1"},children:u.jsxs("span",{className:"word","data-word":"Instagram",style:{"--word-index":"0"},children:[u.jsx("span",{className:"char","data-char":"I",style:{"--char-index":"0"},children:"I"}),u.jsx("span",{className:"char","data-char":"n",style:{"--char-index":"1"},children:"n"}),u.jsx("span",{className:"char","data-char":"s",style:{"--char-index":"2"},children:"s"}),u.jsx("span",{className:"char","data-char":"t",style:{"--char-index":"3"},children:"t"}),u.jsx("span",{className:"char","data-char":"a",style:{"--char-index":"4"},children:"a"}),u.jsx("span",{className:"char","data-char":"g",style:{"--char-index":"5"},children:"g"}),u.jsx("span",{className:"char","data-char":"r",style:{"--char-index":"6"},children:"r"}),u.jsx("span",{className:"char","data-char":"a",style:{"--char-index":"7"},children:"a"}),u.jsx("span",{className:"char","data-char":"m",style:{"--char-index":"8"},children:"m"})]})})})})]})]})]})})]})}const Q0=`.grid-w {
    -moz-column-gap: 1rem;
    column-gap: 1rem;
    display: grid;
    grid-template-columns: repeat(24, minmax(0, 1fr));
    padding-left: var(--padding-container);
    padding-right: var(--padding-container);
}

.grid{
    display: grid;
}
.sidebar {
    height: auto;
}
.w-full {
    width: 100%;
}
.grid-cols-24 {
    grid-template-columns: repeat(24, minmax(0, 1fr));
}
.sidebar-content {
    height: auto;
    border: 1px solid var(--color-secondary);
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

}
.sliderbar-img {
    position: relative;
    /* width: 100%; */
    border: 0px solid var(--color-secondary);
    border-bottom-width: 1px;
    /* height: 0; */
    padding-top: 63.26%;
}
.sliderbar-img .img-container{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}
.sliderbar-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.sidebar-content h1{
    font-size: 3.2rem;
    line-height: 1;
    text-transform: uppercase;
    color: var(--color-secondary);
    border: 0 solid var(--color-secondary);
    border-bottom-width: 1px;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-weight: 200!important;
    font-family: 'MaisonNeue';
}
.content{
    border: 1px solid var(--color-secondary);
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    position: relative;
}
.border-top-width{
    border: 1px solid var(--color-secondary);
    border-top-width: 0px!important;
}
.border-left-width{
    border: 1px solid var(--color-secondary);
    border-left-width: 0px;
}
.border-right-width{
    border: 1px solid var(--color-secondary);
    border-right-width: 0px;
}
.border-bottom-width{
    border: 1px solid var(--color-secondary);
    border-bottom-width: 0px;
}
.content img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.main-content{
    grid-column-start: 7;
    grid-column-end: 25;
    padding-bottom: 0rem;
}
.self-start {
    align-self: flex-start;
}
.gap-10, .gap-grid {
    gap: 1rem;
}
.flex-col {
    flex-direction: column;
}
.flex {
    display: flex;
}
.card-work-w{
    /* padding-top: 63.5%; */
 
}
.col-span-12{
    grid-column: span 12 / span 12;
}
.row-span-2 {
    grid-row: span 2 / span 2;
}
.col-span-full {
    grid-column: 1 / -1;
}
.relative {
    position: relative;
}
.card-work-w-1{
    /* grid-column-start: 1;
    grid-column-end: 7; */
    grid-column: 1 / 17;
    grid-row: span 2 / span 2;
}
.card-work-w-2{
    grid-column: span 8 / span 8;
    
}
.card-work-w-3{
   grid-column: span 16 / span 16;
}
.content-img{

    pointer-events: none;
    height: 0;
    left: 0;
    position: relative;
    top: 0;
    width: 100%;
    padding-top: 54%;
    border-color: var(--color-secondary)!important;
    /* flex: 1 1 0%; */
}
.inner-content-grid{
    grid-template-columns: repeat(18, minmax(0, 1fr));
    margin-top: 0;
    padding-top: 2rem;
    margin-bottom: 12rem;
    color: var(--color-secondary);
    column-gap: 1rem;
    display: grid;
    text-transform: uppercase;
}
.inner-content-grid .box-1{
    grid-column: span 7 / span 7;
    padding-left: var(--padding-container);
    padding-right: 0;
    font-size: 2rem;
    line-height: 150%;
}
.inner-content-grid .box-1 .fw-light{
    font-weight: 300;
    
}
.inner-content-grid .box-2{
    grid-column-start: 10;
    grid-column-end: 17;
    padding-right: 0;
    font-size: 1.4rem;
    line-height: 150%;
}
.main-content-img{}
.content:hover .inner-content{
    visibility: visible!important;
    bottom: 0px;
    opacity: 1;
}
.min-h-available {
    min-height: var(--h-available);
    
}
.inner-content{
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2.2rem;
    padding-bottom: 1rem;
    transition-duration: .3s;
    background-color: var(--color-primary);
    border: 0 solid var(--color-secondary);
    border-top-width: 1px;
    width: 100%;
    transition-timing-function: cubic-bezier(0,0,.2,1);
    color: var(--color-secondary);
}
.inner-content-grid{
    border: 0 solid var(--color-secondary);
}
.inner-content .title{
    font-size: 2.4rem;
    line-height: 1;
    text-transform: uppercase;
    padding-right: 5px;
    
}
.inner-content .title-2{
   font-size: 4.8rem;
    line-height: 1;
    text-transform: uppercase;
    
}
.footers{
    position: sticky;
    height: var(--h-available);
    top:100px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
   
}
.inner-footer{
    border: 1px solid var(--color-secondary);
    height: 100%;
    padding-top: 4rem;
    padding-left: 2rem;
    padding-bottom: 1rem;
}
.works-archives {
    -webkit-text-stroke: 1px var(--color-secondary);
    line-height: normal;
    text-transform: uppercase;
    width: 100%;

}
.email{
    
    color: var(--color-secondary);
    width: 100%;
    padding-right: var(--padding-container);
    
}
.email-1{
    font-size: 2rem;
    line-height: 1;
    padding-top: 6rem;
    padding-left: var(--padding-container);
    padding-bottom: 1.5rem;
    text-transform: uppercase;
    border-color: var(--color-secondary);
    border-width: 1px;
    border-style: solid;
    text-align: left;
}

.text-transparent {
    color: #0000;
}
.works-archives .text-full{
    margin-left: -6rem;
}
.heading-20 {
    font-size: 2rem;
    color: var(--color-secondary);
}
.border-bottom{
    border-width: 0px;
    border-style: solid;
    border-color: rgba(var(--color-secondary-rgb) / .15);
    border-bottom-width: 1px;
}
.heading-20, .heading-24 {
    line-height: 1;
    text-transform: uppercase;
}
.heading-10{
    color: rgba(var(--color-secondary-rgb) / .5);
    font-size: 1rem;
    line-height: 1.5;
    text-transform: uppercase;
    font-weight: 500;
}
.sidebar-content-2 {
    font-size: 4.8rem;
    font-weight: 700;
    padding-bottom: .5rem;
    text-transform: uppercase;
    color: var(--color-secondary);
    padding: 2rem;;
}
@media (min-width: 1200px){
    .sidebar {
        position: sticky;
        top: 90px; /* adjust this for your desired offset */
        height: var(--h-available); /* optional: to limit height */
    }
    .sidebar-content{
        height: 100%;
    }
    .sidebar {
        grid-column-start: 1;
        grid-column-end: 7;
    }
    .main-content{
        grid-column-start: 7;
        grid-column-end: 25;
    }
}
@media (max-width:1200px) {
    .grid-w{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
@media (max-width:768px){
    .inner-content .title-2{
        font-size: 3.5rem;
    }
    .inner-content .title{
        font-size: 2rem;
    }
    .inner-content-grid .box-1{
        font-size: 1.4rem;
    }
    .inner-content-grid .box-2 {
        grid-column-start: 10;
        grid-column-end: 17;
        padding-right: 0;
        font-size: 1.4rem;
        line-height: 150%;
    }
    .works-archives .text-full{
        margin-left: -20px;
    }
    .text-full-el{
        font-size: 110px!important;
        letter-spacing: 5px!important;
    }
    
}

@media (max-width:480px){
    
    .works-archives .text-full{
        margin-left: -20px;
    }
    .text-full-el{
        font-size: 50px!important;
        letter-spacing: 5px!important;
    }
    
}
@media (max-width:375px){
    
    .works-archives .text-full{
        margin-left: -20px;
    }
    .text-full-el{
        font-size: 45px!important;
        letter-spacing: 5px!important;
    }
    
}
@media (max-width:320px){
    
    .works-archives .text-full{
        margin-left: -20px;
    }
    .text-full-el{
        font-size: 40px!important;
        letter-spacing: 5px!important;
    }
    
}`;function Z0(){return u.jsxs(u.Fragment,{children:[u.jsx("style",{dangerouslySetInnerHTML:{__html:Q0}}),u.jsx("div",{style:{width:"100vw",height:"7.5rem"},children:" "}),u.jsx("div",{className:" position-relative",children:u.jsxs("div",{className:"grid-w w-full",children:[u.jsx("div",{className:"sidebar",children:u.jsxs("div",{className:"sidebar-content",children:[u.jsx("div",{className:"sliderbar-img",children:u.jsx("div",{className:"img-container",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png",alt:""})})}),u.jsx("h1",{className:"heading-32  transition-mode",children:"MOTION MOTION TRAILER"}),u.jsxs("div",{className:"px-container pt-2 pb-3",children:[u.jsx("h4",{className:"heading-20  transition-mode pt-2 pb-1 border-bottom w-100",children:"MOTION MOTION"}),u.jsx("h4",{className:"heading-10 border-bottom  transition-mode pt-2 pb-1 border-bottom w-100",children:"Services"}),u.jsx("h4",{className:"heading-20  transition-mode pt-2 pb-1 border-bottom w-100",children:"SOUND DESIGN / MUSIC"}),u.jsx("h4",{className:"heading-10 border-bottom  transition-mode pt-2 pb-1 border-bottom w-100",children:"Areas of activity"}),u.jsx("h4",{className:"heading-20  transition-mode pt-2 pb-1 border-bottom w-100",children:"ART / EVENT"}),u.jsx("h4",{className:"heading-10 border-bottom  transition-mode pt-2 pb-1 border-bottom w-100",children:"CREDITS"}),u.jsx("h4",{className:"heading-20  transition-mode pt-2 pb-1 border-bottom w-100",children:"DA & ANIMATION: NŌBL"})]}),u.jsx("div",{className:"sidebar-content-2",children:u.jsx("span",{children:"Work"})})]})}),u.jsxs("div",{className:"main-content",children:[u.jsxs("div",{className:"grid col-span-full mb-3",children:[u.jsx("div",{className:"card-work-w-1 h-0  ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("div",{className:"main-content-img position-absolute top-0 left-0 w-100 h-100 d-flex",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png",alt:"w-100 h-100 "})})}),u.jsx("div",{className:"inner-content border-bottom-width",children:u.jsx("div",{children:u.jsx("span",{className:"title",children:"Motion Motion Trailer"})})}),u.jsx("div",{className:"inner-content border-bottom-width",children:u.jsx("div",{children:u.jsx("span",{className:"title-2",children:"Motion Motion"})})})]})}),u.jsx("div",{className:"card-work-w-1 h-0 ",children:u.jsxs("div",{className:"content border-top-width",children:[u.jsxs("div",{className:"inner-content-grid border-top-width",children:[u.jsxs("div",{className:"box-1",children:[u.jsxs("strong",{children:[" ",u.jsx("span",{children:"Original music and sound design for a key Motion Design event:"})]}),u.jsx("span",{className:"fw-light",children:"The Motion Motion Festival"})]}),u.jsx("div",{className:"box-2",children:"Every year in Nantes, the Motion Motion festival takes place. Organized and supported by a collective of motion designers from Nantes, including and  , Motion Motion is one of the most important events for motion design. Through conferences, exhibitions, meetings, and concerts, it brings together the best of French and international motion design over three days, and attracts a very diverse audience, made up of students, professionals, and curious people from all walks of life."})]}),u.jsx("div",{className:"content-img border-top",children:u.jsx("div",{className:"main-content-img position-absolute top-0 left-0 w-100 h-100 d-flex",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png",alt:"w-100 h-100 "})})})]})})]}),u.jsx("div",{className:"card-work-w-1 h-0  ",children:u.jsxs("div",{className:"content",children:[u.jsx("div",{className:"content-img",children:u.jsx("div",{className:"main-content-img position-absolute top-0 left-0 w-100 h-100 d-flex",children:u.jsx("img",{src:"https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png",alt:"w-100 h-100 "})})}),u.jsx("div",{className:"inner-content border-bottom-width",children:u.jsx("div",{children:u.jsx("span",{className:"title",children:"Motion Motion Trailer"})})})]})})]})]})}),u.jsx("div",{className:"w-100 footers px-container",children:u.jsxs("div",{className:"inner-footer",children:[u.jsx("h2",{className:"works-archives text-center text-transparent ",children:u.jsx("div",{className:"text-full ",children:u.jsx("span",{className:"text-full-el",style:{fontSize:350.363,letterSpacing:-31.1754},children:"Contact us"})})}),u.jsxs("div",{className:"d-flex flex-column gap-3",children:[u.jsx("div",{className:"email",children:u.jsx("div",{className:"email-1",children:u.jsx("span",{className:"",children:"Hello@mooders.net"})})}),u.jsx("div",{className:"email",children:u.jsx("div",{className:"email-1",children:u.jsx("span",{className:"",children:"Hello@mooders.net"})})}),u.jsx("div",{className:"email",children:u.jsx("div",{className:"email-1",children:u.jsx("span",{className:"",children:"Hello@mooders.net"})})})]})]})})]})}/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bd="popstate";function V0(c={}){function f(o,m){let{pathname:y,search:E,hash:_}=o.location;return Ec("",{pathname:y,search:E,hash:_},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function d(o,m){return typeof m=="string"?m:Oa(m)}return K0(f,d,null,c)}function Ne(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function Rt(c,f){if(!c){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function k0(){return Math.random().toString(36).substring(2,10)}function qd(c,f){return{usr:c.state,key:c.key,idx:f}}function Ec(c,f,d=null,o){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof f=="string"?Al(f):f,state:d,key:f&&f.key||o||k0()}}function Oa({pathname:c="/",search:f="",hash:d=""}){return f&&f!=="?"&&(c+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function Al(c){let f={};if(c){let d=c.indexOf("#");d>=0&&(f.hash=c.substring(d),c=c.substring(0,d));let o=c.indexOf("?");o>=0&&(f.search=c.substring(o),c=c.substring(0,o)),c&&(f.pathname=c)}return f}function K0(c,f,d,o={}){let{window:m=document.defaultView,v5Compat:y=!1}=o,E=m.history,_="POP",S=null,p=M();p==null&&(p=0,E.replaceState({...E.state,idx:p},""));function M(){return(E.state||{idx:null}).idx}function C(){_="POP";let X=M(),H=X==null?null:X-p;p=X,S&&S({action:_,location:Z.location,delta:H})}function U(X,H){_="PUSH";let ue=Ec(Z.location,X,H);p=M()+1;let P=qd(ue,p),be=Z.createHref(ue);try{E.pushState(P,"",be)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;m.location.assign(be)}y&&S&&S({action:_,location:Z.location,delta:1})}function W(X,H){_="REPLACE";let ue=Ec(Z.location,X,H);p=M();let P=qd(ue,p),be=Z.createHref(ue);E.replaceState(P,"",be),y&&S&&S({action:_,location:Z.location,delta:0})}function Q(X){return J0(X)}let Z={get action(){return _},get location(){return c(m,E)},listen(X){if(S)throw new Error("A history only accepts one active listener");return m.addEventListener(Bd,C),S=X,()=>{m.removeEventListener(Bd,C),S=null}},createHref(X){return f(m,X)},createURL:Q,encodeLocation(X){let H=Q(X);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:U,replace:W,go(X){return E.go(X)}};return Z}function J0(c,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(d,"No window.location.(origin|href) available to create URL");let o=typeof c=="string"?c:Oa(c);return o=o.replace(/ $/,"%20"),!f&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function Xd(c,f,d="/"){return $0(c,f,d,!1)}function $0(c,f,d,o){let m=typeof f=="string"?Al(f):f,y=$t(m.pathname||"/",d);if(y==null)return null;let E=Qd(c);W0(E);let _=null;for(let S=0;_==null&&S<E.length;++S){let p=r1(y);_=i1(E[S],p,o)}return _}function Qd(c,f=[],d=[],o=""){let m=(y,E,_)=>{let S={relativePath:_===void 0?y.path||"":_,caseSensitive:y.caseSensitive===!0,childrenIndex:E,route:y};S.relativePath.startsWith("/")&&(Ne(S.relativePath.startsWith(o),`Absolute route path "${S.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(o.length));let p=Jt([o,S.relativePath]),M=d.concat(S);y.children&&y.children.length>0&&(Ne(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Qd(y.children,f,M,p)),!(y.path==null&&!y.index)&&f.push({path:p,score:l1(p,y.index),routesMeta:M})};return c.forEach((y,E)=>{if(y.path===""||!y.path?.includes("?"))m(y,E);else for(let _ of Zd(y.path))m(y,E,_)}),f}function Zd(c){let f=c.split("/");if(f.length===0)return[];let[d,...o]=f,m=d.endsWith("?"),y=d.replace(/\?$/,"");if(o.length===0)return m?[y,""]:[y];let E=Zd(o.join("/")),_=[];return _.push(...E.map(S=>S===""?y:[y,S].join("/"))),m&&_.push(...E),_.map(S=>c.startsWith("/")&&S===""?"/":S)}function W0(c){c.sort((f,d)=>f.score!==d.score?d.score-f.score:a1(f.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var F0=/^:[\w-]+$/,I0=3,P0=2,e1=1,t1=10,n1=-2,Ld=c=>c==="*";function l1(c,f){let d=c.split("/"),o=d.length;return d.some(Ld)&&(o+=n1),f&&(o+=P0),d.filter(m=>!Ld(m)).reduce((m,y)=>m+(F0.test(y)?I0:y===""?e1:t1),o)}function a1(c,f){return c.length===f.length&&c.slice(0,-1).every((o,m)=>o===f[m])?c[c.length-1]-f[f.length-1]:0}function i1(c,f,d=!1){let{routesMeta:o}=c,m={},y="/",E=[];for(let _=0;_<o.length;++_){let S=o[_],p=_===o.length-1,M=y==="/"?f:f.slice(y.length)||"/",C=Pi({path:S.relativePath,caseSensitive:S.caseSensitive,end:p},M),U=S.route;if(!C&&p&&d&&!o[o.length-1].route.index&&(C=Pi({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},M)),!C)return null;Object.assign(m,C.params),E.push({params:m,pathname:Jt([y,C.pathname]),pathnameBase:f1(Jt([y,C.pathnameBase])),route:U}),C.pathnameBase!=="/"&&(y=Jt([y,C.pathnameBase]))}return E}function Pi(c,f){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[d,o]=u1(c.path,c.caseSensitive,c.end),m=f.match(d);if(!m)return null;let y=m[0],E=y.replace(/(.)\/+$/,"$1"),_=m.slice(1);return{params:o.reduce((p,{paramName:M,isOptional:C},U)=>{if(M==="*"){let Q=_[U]||"";E=y.slice(0,y.length-Q.length).replace(/(.)\/+$/,"$1")}const W=_[U];return C&&!W?p[M]=void 0:p[M]=(W||"").replace(/%2F/g,"/"),p},{}),pathname:y,pathnameBase:E,pattern:c}}function u1(c,f=!1,d=!0){Rt(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let o=[],m="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(E,_,S)=>(o.push({paramName:_,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)"));return c.endsWith("*")?(o.push({paramName:"*"}),m+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":c!==""&&c!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),o]}function r1(c){try{return c.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Rt(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),c}}function $t(c,f){if(f==="/")return c;if(!c.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,o=c.charAt(d);return o&&o!=="/"?null:c.slice(d)||"/"}function c1(c,f="/"){let{pathname:d,search:o="",hash:m=""}=typeof c=="string"?Al(c):c;return{pathname:d?d.startsWith("/")?d:s1(d,f):f,search:d1(o),hash:h1(m)}}function s1(c,f){let d=f.replace(/\/+$/,"").split("/");return c.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function wc(c,f,d,o){return`Cannot include a '${c}' character in a manually specified \`to.${f}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function o1(c){return c.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function Vd(c){let f=o1(c);return f.map((d,o)=>o===f.length-1?d.pathname:d.pathnameBase)}function kd(c,f,d,o=!1){let m;typeof c=="string"?m=Al(c):(m={...c},Ne(!m.pathname||!m.pathname.includes("?"),wc("?","pathname","search",m)),Ne(!m.pathname||!m.pathname.includes("#"),wc("#","pathname","hash",m)),Ne(!m.search||!m.search.includes("#"),wc("#","search","hash",m)));let y=c===""||m.pathname==="",E=y?"/":m.pathname,_;if(E==null)_=d;else{let C=f.length-1;if(!o&&E.startsWith("..")){let U=E.split("/");for(;U[0]==="..";)U.shift(),C-=1;m.pathname=U.join("/")}_=C>=0?f[C]:"/"}let S=c1(m,_),p=E&&E!=="/"&&E.endsWith("/"),M=(y||E===".")&&d.endsWith("/");return!S.pathname.endsWith("/")&&(p||M)&&(S.pathname+="/"),S}var Jt=c=>c.join("/").replace(/\/\/+/g,"/"),f1=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),d1=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,h1=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c;function m1(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}var Kd=["POST","PUT","PATCH","DELETE"];new Set(Kd);var p1=["GET",...Kd];new Set(p1);var Rl=R.createContext(null);Rl.displayName="DataRouter";var eu=R.createContext(null);eu.displayName="DataRouterState";R.createContext(!1);var Jd=R.createContext({isTransitioning:!1});Jd.displayName="ViewTransition";var g1=R.createContext(new Map);g1.displayName="Fetchers";var v1=R.createContext(null);v1.displayName="Await";var Ot=R.createContext(null);Ot.displayName="Navigation";var _a=R.createContext(null);_a.displayName="Location";var Wt=R.createContext({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var Mc=R.createContext(null);Mc.displayName="RouteError";function y1(c,{relative:f}={}){Ne(Da(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=R.useContext(Ot),{hash:m,pathname:y,search:E}=Ca(c,{relative:f}),_=y;return d!=="/"&&(_=y==="/"?d:Jt([d,y])),o.createHref({pathname:_,search:E,hash:m})}function Da(){return R.useContext(_a)!=null}function Qn(){return Ne(Da(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(_a).location}var $d="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wd(c){R.useContext(Ot).static||R.useLayoutEffect(c)}function x1(){let{isDataRoute:c}=R.useContext(Wt);return c?_1():b1()}function b1(){Ne(Da(),"useNavigate() may be used only in the context of a <Router> component.");let c=R.useContext(Rl),{basename:f,navigator:d}=R.useContext(Ot),{matches:o}=R.useContext(Wt),{pathname:m}=Qn(),y=JSON.stringify(Vd(o)),E=R.useRef(!1);return Wd(()=>{E.current=!0}),R.useCallback((S,p={})=>{if(Rt(E.current,$d),!E.current)return;if(typeof S=="number"){d.go(S);return}let M=kd(S,JSON.parse(y),m,p.relative==="path");c==null&&f!=="/"&&(M.pathname=M.pathname==="/"?f:Jt([f,M.pathname])),(p.replace?d.replace:d.push)(M,p.state,p)},[f,d,y,m,c])}R.createContext(null);function Ca(c,{relative:f}={}){let{matches:d}=R.useContext(Wt),{pathname:o}=Qn(),m=JSON.stringify(Vd(d));return R.useMemo(()=>kd(c,JSON.parse(m),o,f==="path"),[c,m,o,f])}function S1(c,f){return Fd(c,f)}function Fd(c,f,d,o){Ne(Da(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=R.useContext(Ot),{matches:y}=R.useContext(Wt),E=y[y.length-1],_=E?E.params:{},S=E?E.pathname:"/",p=E?E.pathnameBase:"/",M=E&&E.route;{let H=M&&M.path||"";Id(S,!M||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let C=Qn(),U;if(f){let H=typeof f=="string"?Al(f):f;Ne(p==="/"||H.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${H.pathname}" was given in the \`location\` prop.`),U=H}else U=C;let W=U.pathname||"/",Q=W;if(p!=="/"){let H=p.replace(/^\//,"").split("/");Q="/"+W.replace(/^\//,"").split("/").slice(H.length).join("/")}let Z=Xd(c,{pathname:Q});Rt(M||Z!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Rt(Z==null||Z[Z.length-1].route.element!==void 0||Z[Z.length-1].route.Component!==void 0||Z[Z.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=T1(Z&&Z.map(H=>Object.assign({},H,{params:Object.assign({},_,H.params),pathname:Jt([p,m.encodeLocation?m.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?p:Jt([p,m.encodeLocation?m.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),y,d,o);return f&&X?R.createElement(_a.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},X):X}function N1(){let c=O1(),f=m1(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),d=c instanceof Error?c.stack:null,o="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:o},y={padding:"2px 4px",backgroundColor:o},E=null;return console.error("Error handled by React Router default ErrorBoundary:",c),E=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:y},"ErrorBoundary")," or"," ",R.createElement("code",{style:y},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},f),d?R.createElement("pre",{style:m},d):null,E)}var w1=R.createElement(N1,null),j1=class extends R.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,f){return f.location!==c.location||f.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:f.error,location:f.location,revalidation:c.revalidation||f.revalidation}}componentDidCatch(c,f){console.error("React Router caught the following error during render",c,f)}render(){return this.state.error!==void 0?R.createElement(Wt.Provider,{value:this.props.routeContext},R.createElement(Mc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function E1({routeContext:c,match:f,children:d}){let o=R.useContext(Rl);return o&&o.static&&o.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=f.route.id),R.createElement(Wt.Provider,{value:c},d)}function T1(c,f=[],d=null,o=null){if(c==null){if(!d)return null;if(d.errors)c=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)c=d.matches;else return null}let m=c,y=d?.errors;if(y!=null){let S=m.findIndex(p=>p.route.id&&y?.[p.route.id]!==void 0);Ne(S>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),m=m.slice(0,Math.min(m.length,S+1))}let E=!1,_=-1;if(d)for(let S=0;S<m.length;S++){let p=m[S];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(_=S),p.route.id){let{loaderData:M,errors:C}=d,U=p.route.loader&&!M.hasOwnProperty(p.route.id)&&(!C||C[p.route.id]===void 0);if(p.route.lazy||U){E=!0,_>=0?m=m.slice(0,_+1):m=[m[0]];break}}}return m.reduceRight((S,p,M)=>{let C,U=!1,W=null,Q=null;d&&(C=y&&p.route.id?y[p.route.id]:void 0,W=p.route.errorElement||w1,E&&(_<0&&M===0?(Id("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,Q=null):_===M&&(U=!0,Q=p.route.hydrateFallbackElement||null)));let Z=f.concat(m.slice(0,M+1)),X=()=>{let H;return C?H=W:U?H=Q:p.route.Component?H=R.createElement(p.route.Component,null):p.route.element?H=p.route.element:H=S,R.createElement(E1,{match:p,routeContext:{outlet:S,matches:Z,isDataRoute:d!=null},children:H})};return d&&(p.route.ErrorBoundary||p.route.errorElement||M===0)?R.createElement(j1,{location:d.location,revalidation:d.revalidation,component:W,error:C,children:X(),routeContext:{outlet:null,matches:Z,isDataRoute:!0}}):X()},null)}function Ac(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function z1(c){let f=R.useContext(Rl);return Ne(f,Ac(c)),f}function M1(c){let f=R.useContext(eu);return Ne(f,Ac(c)),f}function A1(c){let f=R.useContext(Wt);return Ne(f,Ac(c)),f}function Rc(c){let f=A1(c),d=f.matches[f.matches.length-1];return Ne(d.route.id,`${c} can only be used on routes that contain a unique "id"`),d.route.id}function R1(){return Rc("useRouteId")}function O1(){let c=R.useContext(Mc),f=M1("useRouteError"),d=Rc("useRouteError");return c!==void 0?c:f.errors?.[d]}function _1(){let{router:c}=z1("useNavigate"),f=Rc("useNavigate"),d=R.useRef(!1);return Wd(()=>{d.current=!0}),R.useCallback(async(m,y={})=>{Rt(d.current,$d),d.current&&(typeof m=="number"?c.navigate(m):await c.navigate(m,{fromRouteId:f,...y}))},[c,f])}var Yd={};function Id(c,f,d){!f&&!Yd[c]&&(Yd[c]=!0,Rt(!1,d))}R.memo(D1);function D1({routes:c,future:f,state:d}){return Fd(c,void 0,d,f)}function bt(c){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function C1({basename:c="/",children:f=null,location:d,navigationType:o="POP",navigator:m,static:y=!1}){Ne(!Da(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=c.replace(/^\/*/,"/"),_=R.useMemo(()=>({basename:E,navigator:m,static:y,future:{}}),[E,m,y]);typeof d=="string"&&(d=Al(d));let{pathname:S="/",search:p="",hash:M="",state:C=null,key:U="default"}=d,W=R.useMemo(()=>{let Q=$t(S,E);return Q==null?null:{location:{pathname:Q,search:p,hash:M,state:C,key:U},navigationType:o}},[E,S,p,M,C,U,o]);return Rt(W!=null,`<Router basename="${E}"> is not able to match the URL "${S}${p}${M}" because it does not start with the basename, so the <Router> won't render anything.`),W==null?null:R.createElement(Ot.Provider,{value:_},R.createElement(_a.Provider,{children:f,value:W}))}function U1({children:c,location:f}){return S1(Tc(c),f)}function Tc(c,f=[]){let d=[];return R.Children.forEach(c,(o,m)=>{if(!R.isValidElement(o))return;let y=[...f,m];if(o.type===R.Fragment){d.push.apply(d,Tc(o.props.children,y));return}Ne(o.type===bt,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!o.props.index||!o.props.children,"An index route cannot have child routes.");let E={id:o.props.id||y.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(E.children=Tc(o.props.children,y)),d.push(E)}),d}var Fi="get",Ii="application/x-www-form-urlencoded";function tu(c){return c!=null&&typeof c.tagName=="string"}function H1(c){return tu(c)&&c.tagName.toLowerCase()==="button"}function B1(c){return tu(c)&&c.tagName.toLowerCase()==="form"}function q1(c){return tu(c)&&c.tagName.toLowerCase()==="input"}function L1(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function Y1(c,f){return c.button===0&&(!f||f==="_self")&&!L1(c)}var Wi=null;function G1(){if(Wi===null)try{new FormData(document.createElement("form"),0),Wi=!1}catch{Wi=!0}return Wi}var X1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jc(c){return c!=null&&!X1.has(c)?(Rt(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ii}"`),null):c}function Q1(c,f){let d,o,m,y,E;if(B1(c)){let _=c.getAttribute("action");o=_?$t(_,f):null,d=c.getAttribute("method")||Fi,m=jc(c.getAttribute("enctype"))||Ii,y=new FormData(c)}else if(H1(c)||q1(c)&&(c.type==="submit"||c.type==="image")){let _=c.form;if(_==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=c.getAttribute("formaction")||_.getAttribute("action");if(o=S?$t(S,f):null,d=c.getAttribute("formmethod")||_.getAttribute("method")||Fi,m=jc(c.getAttribute("formenctype"))||jc(_.getAttribute("enctype"))||Ii,y=new FormData(_,c),!G1()){let{name:p,type:M,value:C}=c;if(M==="image"){let U=p?`${p}.`:"";y.append(`${U}x`,"0"),y.append(`${U}y`,"0")}else p&&y.append(p,C)}}else{if(tu(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Fi,o=null,m=Ii,E=c}return y&&m==="text/plain"&&(E=y,y=void 0),{action:o,method:d.toLowerCase(),encType:m,formData:y,body:E}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Oc(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function Z1(c,f,d){let o=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return o.pathname==="/"?o.pathname=`_root.${d}`:f&&$t(o.pathname,f)==="/"?o.pathname=`${f.replace(/\/$/,"")}/_root.${d}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${d}`,o}async function V1(c,f){if(c.id in f)return f[c.id];try{let d=await import(c.module);return f[c.id]=d,d}catch(d){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function k1(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function K1(c,f,d){let o=await Promise.all(c.map(async m=>{let y=f.routes[m.route.id];if(y){let E=await V1(y,d);return E.links?E.links():[]}return[]}));return F1(o.flat(1).filter(k1).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Gd(c,f,d,o,m,y){let E=(S,p)=>d[p]?S.route.id!==d[p].route.id:!0,_=(S,p)=>d[p].pathname!==S.pathname||d[p].route.path?.endsWith("*")&&d[p].params["*"]!==S.params["*"];return y==="assets"?f.filter((S,p)=>E(S,p)||_(S,p)):y==="data"?f.filter((S,p)=>{let M=o.routes[S.route.id];if(!M||!M.hasLoader)return!1;if(E(S,p)||_(S,p))return!0;if(S.route.shouldRevalidate){let C=S.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function J1(c,f,{includeHydrateFallback:d}={}){return $1(c.map(o=>{let m=f.routes[o.route.id];if(!m)return[];let y=[m.module];return m.clientActionModule&&(y=y.concat(m.clientActionModule)),m.clientLoaderModule&&(y=y.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(y=y.concat(m.hydrateFallbackModule)),m.imports&&(y=y.concat(m.imports)),y}).flat(1))}function $1(c){return[...new Set(c)]}function W1(c){let f={},d=Object.keys(c).sort();for(let o of d)f[o]=c[o];return f}function F1(c,f){let d=new Set;return new Set(f),c.reduce((o,m)=>{let y=JSON.stringify(W1(m));return d.has(y)||(d.add(y),o.push({key:y,link:m})),o},[])}function Pd(){let c=R.useContext(Rl);return Oc(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function I1(){let c=R.useContext(eu);return Oc(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var _c=R.createContext(void 0);_c.displayName="FrameworkContext";function eh(){let c=R.useContext(_c);return Oc(c,"You must render this element inside a <HydratedRouter> element"),c}function P1(c,f){let d=R.useContext(_c),[o,m]=R.useState(!1),[y,E]=R.useState(!1),{onFocus:_,onBlur:S,onMouseEnter:p,onMouseLeave:M,onTouchStart:C}=f,U=R.useRef(null);R.useEffect(()=>{if(c==="render"&&E(!0),c==="viewport"){let Z=H=>{H.forEach(ue=>{E(ue.isIntersecting)})},X=new IntersectionObserver(Z,{threshold:.5});return U.current&&X.observe(U.current),()=>{X.disconnect()}}},[c]),R.useEffect(()=>{if(o){let Z=setTimeout(()=>{E(!0)},100);return()=>{clearTimeout(Z)}}},[o]);let W=()=>{m(!0)},Q=()=>{m(!1),E(!1)};return d?c!=="intent"?[y,U,{}]:[y,U,{onFocus:Ra(_,W),onBlur:Ra(S,Q),onMouseEnter:Ra(p,W),onMouseLeave:Ra(M,Q),onTouchStart:Ra(C,W)}]:[!1,U,{}]}function Ra(c,f){return d=>{c&&c(d),d.defaultPrevented||f(d)}}function ep({page:c,...f}){let{router:d}=Pd(),o=R.useMemo(()=>Xd(d.routes,c,d.basename),[d.routes,c,d.basename]);return o?R.createElement(np,{page:c,matches:o,...f}):null}function tp(c){let{manifest:f,routeModules:d}=eh(),[o,m]=R.useState([]);return R.useEffect(()=>{let y=!1;return K1(c,f,d).then(E=>{y||m(E)}),()=>{y=!0}},[c,f,d]),o}function np({page:c,matches:f,...d}){let o=Qn(),{manifest:m,routeModules:y}=eh(),{basename:E}=Pd(),{loaderData:_,matches:S}=I1(),p=R.useMemo(()=>Gd(c,f,S,m,o,"data"),[c,f,S,m,o]),M=R.useMemo(()=>Gd(c,f,S,m,o,"assets"),[c,f,S,m,o]),C=R.useMemo(()=>{if(c===o.pathname+o.search+o.hash)return[];let Q=new Set,Z=!1;if(f.forEach(H=>{let ue=m.routes[H.route.id];!ue||!ue.hasLoader||(!p.some(P=>P.route.id===H.route.id)&&H.route.id in _&&y[H.route.id]?.shouldRevalidate||ue.hasClientLoader?Z=!0:Q.add(H.route.id))}),Q.size===0)return[];let X=Z1(c,E,"data");return Z&&Q.size>0&&X.searchParams.set("_routes",f.filter(H=>Q.has(H.route.id)).map(H=>H.route.id).join(",")),[X.pathname+X.search]},[E,_,o,m,p,f,c,y]),U=R.useMemo(()=>J1(M,m),[M,m]),W=tp(M);return R.createElement(R.Fragment,null,C.map(Q=>R.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...d})),U.map(Q=>R.createElement("link",{key:Q,rel:"modulepreload",href:Q,...d})),W.map(({key:Q,link:Z})=>R.createElement("link",{key:Q,nonce:d.nonce,...Z})))}function lp(...c){return f=>{c.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var th=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{th&&(window.__reactRouterVersion="7.8.0")}catch{}function ap({basename:c,children:f,window:d}){let o=R.useRef();o.current==null&&(o.current=V0({window:d,v5Compat:!0}));let m=o.current,[y,E]=R.useState({action:m.action,location:m.location}),_=R.useCallback(S=>{R.startTransition(()=>E(S))},[E]);return R.useLayoutEffect(()=>m.listen(_),[m,_]),R.createElement(C1,{basename:c,children:f,location:y.location,navigationType:y.action,navigator:m})}var nh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lh=R.forwardRef(function({onClick:f,discover:d="render",prefetch:o="none",relative:m,reloadDocument:y,replace:E,state:_,target:S,to:p,preventScrollReset:M,viewTransition:C,...U},W){let{basename:Q}=R.useContext(Ot),Z=typeof p=="string"&&nh.test(p),X,H=!1;if(typeof p=="string"&&Z&&(X=p,th))try{let we=new URL(window.location.href),Pe=p.startsWith("//")?new URL(we.protocol+p):new URL(p),ot=$t(Pe.pathname,Q);Pe.origin===we.origin&&ot!=null?p=ot+Pe.search+Pe.hash:H=!0}catch{Rt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ue=y1(p,{relative:m}),[P,be,F]=P1(o,U),De=cp(p,{replace:E,state:_,target:S,preventScrollReset:M,relative:m,viewTransition:C});function Re(we){f&&f(we),we.defaultPrevented||De(we)}let Ce=R.createElement("a",{...U,...F,href:X||ue,onClick:H||y?f:Re,ref:lp(W,be),target:S,"data-discover":!Z&&d==="render"?"true":void 0});return P&&!Z?R.createElement(R.Fragment,null,Ce,R.createElement(ep,{page:ue})):Ce});lh.displayName="Link";var ip=R.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:o="",end:m=!1,style:y,to:E,viewTransition:_,children:S,...p},M){let C=Ca(E,{relative:p.relative}),U=Qn(),W=R.useContext(eu),{navigator:Q,basename:Z}=R.useContext(Ot),X=W!=null&&hp(C)&&_===!0,H=Q.encodeLocation?Q.encodeLocation(C).pathname:C.pathname,ue=U.pathname,P=W&&W.navigation&&W.navigation.location?W.navigation.location.pathname:null;d||(ue=ue.toLowerCase(),P=P?P.toLowerCase():null,H=H.toLowerCase()),P&&Z&&(P=$t(P,Z)||P);const be=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let F=ue===H||!m&&ue.startsWith(H)&&ue.charAt(be)==="/",De=P!=null&&(P===H||!m&&P.startsWith(H)&&P.charAt(H.length)==="/"),Re={isActive:F,isPending:De,isTransitioning:X},Ce=F?f:void 0,we;typeof o=="function"?we=o(Re):we=[o,F?"active":null,De?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof y=="function"?y(Re):y;return R.createElement(lh,{...p,"aria-current":Ce,className:we,ref:M,style:Pe,to:E,viewTransition:_},typeof S=="function"?S(Re):S)});ip.displayName="NavLink";var up=R.forwardRef(({discover:c="render",fetcherKey:f,navigate:d,reloadDocument:o,replace:m,state:y,method:E=Fi,action:_,onSubmit:S,relative:p,preventScrollReset:M,viewTransition:C,...U},W)=>{let Q=fp(),Z=dp(_,{relative:p}),X=E.toLowerCase()==="get"?"get":"post",H=typeof _=="string"&&nh.test(_),ue=P=>{if(S&&S(P),P.defaultPrevented)return;P.preventDefault();let be=P.nativeEvent.submitter,F=be?.getAttribute("formmethod")||E;Q(be||P.currentTarget,{fetcherKey:f,method:F,navigate:d,replace:m,state:y,relative:p,preventScrollReset:M,viewTransition:C})};return R.createElement("form",{ref:W,method:X,action:Z,onSubmit:o?S:ue,...U,"data-discover":!H&&c==="render"?"true":void 0})});up.displayName="Form";function rp(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ah(c){let f=R.useContext(Rl);return Ne(f,rp(c)),f}function cp(c,{target:f,replace:d,state:o,preventScrollReset:m,relative:y,viewTransition:E}={}){let _=x1(),S=Qn(),p=Ca(c,{relative:y});return R.useCallback(M=>{if(Y1(M,f)){M.preventDefault();let C=d!==void 0?d:Oa(S)===Oa(p);_(c,{replace:C,state:o,preventScrollReset:m,relative:y,viewTransition:E})}},[S,_,p,d,o,f,c,m,y,E])}var sp=0,op=()=>`__${String(++sp)}__`;function fp(){let{router:c}=ah("useSubmit"),{basename:f}=R.useContext(Ot),d=R1();return R.useCallback(async(o,m={})=>{let{action:y,method:E,encType:_,formData:S,body:p}=Q1(o,f);if(m.navigate===!1){let M=m.fetcherKey||op();await c.fetch(M,d,m.action||y,{preventScrollReset:m.preventScrollReset,formData:S,body:p,formMethod:m.method||E,formEncType:m.encType||_,flushSync:m.flushSync})}else await c.navigate(m.action||y,{preventScrollReset:m.preventScrollReset,formData:S,body:p,formMethod:m.method||E,formEncType:m.encType||_,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[c,f,d])}function dp(c,{relative:f}={}){let{basename:d}=R.useContext(Ot),o=R.useContext(Wt);Ne(o,"useFormAction must be used inside a RouteContext");let[m]=o.matches.slice(-1),y={...Ca(c||".",{relative:f})},E=Qn();if(c==null){y.search=E.search;let _=new URLSearchParams(y.search),S=_.getAll("index");if(S.some(M=>M==="")){_.delete("index"),S.filter(C=>C).forEach(C=>_.append("index",C));let M=_.toString();y.search=M?`?${M}`:""}}return(!c||c===".")&&m.route.index&&(y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(y.pathname=y.pathname==="/"?d:Jt([d,y.pathname])),Oa(y)}function hp(c,{relative:f}={}){let d=R.useContext(Jd);Ne(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=ah("useViewTransitionState"),m=Ca(c,{relative:f});if(!d.isTransitioning)return!1;let y=$t(d.currentLocation.pathname,o)||d.currentLocation.pathname,E=$t(d.nextLocation.pathname,o)||d.nextLocation.pathname;return Pi(m.pathname,E)!=null||Pi(m.pathname,y)!=null}function mp(){return u.jsxs(ap,{children:[u.jsx("style",{children:B0}),u.jsx(L0,{}),u.jsxs(U1,{children:[u.jsx(bt,{path:"/",element:u.jsx(Kt,{})}),u.jsx(bt,{path:"/work",element:u.jsx(Kt,{})}),u.jsx(bt,{path:"/aboutus",element:u.jsx(X0,{})}),u.jsx(bt,{path:"/work",element:u.jsx(Kt,{})}),u.jsx(bt,{path:"/work",element:u.jsx(Kt,{})}),u.jsx(bt,{path:"/work",element:u.jsx(Kt,{})}),u.jsx(bt,{path:"/work",element:u.jsx(Kt,{})}),u.jsx(bt,{path:"/work",element:u.jsx(Kt,{})}),u.jsx(bt,{path:"/work",element:u.jsx(Kt,{})}),u.jsx(bt,{path:"/work",element:u.jsx(Kt,{})}),u.jsx(bt,{path:"/work/motionmotion",element:u.jsx(Z0,{})})]})]})}H0.createRoot(document.getElementById("root")).render(u.jsx(R.StrictMode,{children:u.jsx(mp,{})}));
