function ad(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function od(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cs={exports:{}},gl={},Is={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),sd=Symbol.for("react.portal"),ud=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),fd=Symbol.for("react.provider"),md=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),gd=Symbol.for("react.memo"),vd=Symbol.for("react.lazy"),oo=Symbol.iterator;function yd(e){return e===null||typeof e!="object"?null:(e=oo&&e[oo]||e["@@iterator"],typeof e=="function"?e:null)}var Es={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zs=Object.assign,Ps={};function pn(e,t,n){this.props=e,this.context=t,this.refs=Ps,this.updater=n||Es}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ls(){}Ls.prototype=pn.prototype;function sa(e,t,n){this.props=e,this.context=t,this.refs=Ps,this.updater=n||Es}var ua=sa.prototype=new Ls;ua.constructor=sa;zs(ua,pn.prototype);ua.isPureReactComponent=!0;var so=Array.isArray,Ts=Object.prototype.hasOwnProperty,ca={current:null},Ms={key:!0,ref:!0,__self:!0,__source:!0};function Rs(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ts.call(t,r)&&!Ms.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:ar,type:e,key:i,ref:o,props:l,_owner:ca.current}}function xd(e,t){return{$$typeof:ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function da(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uo=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wd(""+e.key):t.toString(36)}function Tr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ar:case sd:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Dl(o,0):r,so(l)?(n="",e!=null&&(n=e.replace(uo,"$&/")+"/"),Tr(l,t,n,"",function(c){return c})):l!=null&&(da(l)&&(l=xd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(uo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",so(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+Dl(i,u);o+=Tr(i,t,n,s,l)}else if(s=yd(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+Dl(i,u++),o+=Tr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pr(e,t,n){if(e==null)return e;var r=[],l=0;return Tr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function kd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Mr={transition:null},Nd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:ca};function _s(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=pn;T.Fragment=ud;T.Profiler=dd;T.PureComponent=sa;T.StrictMode=cd;T.Suspense=hd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nd;T.act=_s;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zs({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ca.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)Ts.call(t,s)&&!Ms.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:ar,type:e.type,key:l,ref:i,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:md,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fd,_context:e},e.Consumer=e};T.createElement=Rs;T.createFactory=function(e){var t=Rs.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:pd,render:e}};T.isValidElement=da;T.lazy=function(e){return{$$typeof:vd,_payload:{_status:-1,_result:e},_init:kd}};T.memo=function(e,t){return{$$typeof:gd,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};T.unstable_act=_s;T.useCallback=function(e,t){return de.current.useCallback(e,t)};T.useContext=function(e){return de.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return de.current.useDeferredValue(e)};T.useEffect=function(e,t){return de.current.useEffect(e,t)};T.useId=function(){return de.current.useId()};T.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return de.current.useMemo(e,t)};T.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};T.useRef=function(e){return de.current.useRef(e)};T.useState=function(e){return de.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return de.current.useTransition()};T.version="18.3.1";Is.exports=T;var N=Is.exports;const As=od(N),jd=ad({__proto__:null,default:As},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd=N,bd=Symbol.for("react.element"),Cd=Symbol.for("react.fragment"),Id=Object.prototype.hasOwnProperty,Ed=Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zd={key:!0,ref:!0,__self:!0,__source:!0};function Ds(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Id.call(t,r)&&!zd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:bd,type:e,key:i,ref:o,props:l,_owner:Ed.current}}gl.Fragment=Cd;gl.jsx=Ds;gl.jsxs=Ds;Cs.exports=gl;var a=Cs.exports,ci={},Fs={exports:{}},Ne={},Bs={exports:{}},Os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var L=C.length;C.push(P);e:for(;0<L;){var $=L-1>>>1,Y=C[$];if(0<l(Y,P))C[$]=P,C[L]=Y,L=$;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],L=C.pop();if(L!==P){C[0]=L;e:for(var $=0,Y=C.length,fr=Y>>>1;$<fr;){var Nt=2*($+1)-1,Al=C[Nt],jt=Nt+1,mr=C[jt];if(0>l(Al,L))jt<Y&&0>l(mr,Al)?(C[$]=mr,C[jt]=L,$=jt):(C[$]=Al,C[Nt]=L,$=Nt);else if(jt<Y&&0>l(mr,L))C[$]=mr,C[jt]=L,$=jt;else break e}}return P}function l(C,P){var L=C.sortIndex-P.sortIndex;return L!==0?L:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],c=[],h=1,m=null,g=3,y=!1,x=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=C)r(c),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(c)}}function v(C){if(w=!1,p(C),!x)if(n(s)!==null)x=!0,Rl(j);else{var P=n(c);P!==null&&_l(v,P.startTime-C)}}function j(C,P){x=!1,w&&(w=!1,f(z),z=-1),y=!0;var L=g;try{for(p(P),m=n(s);m!==null&&(!(m.expirationTime>P)||C&&!Pe());){var $=m.callback;if(typeof $=="function"){m.callback=null,g=m.priorityLevel;var Y=$(m.expirationTime<=P);P=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===n(s)&&r(s),p(P)}else r(s);m=n(s)}if(m!==null)var fr=!0;else{var Nt=n(c);Nt!==null&&_l(v,Nt.startTime-P),fr=!1}return fr}finally{m=null,g=L,y=!1}}var I=!1,E=null,z=-1,V=5,M=-1;function Pe(){return!(e.unstable_now()-M<V)}function yn(){if(E!==null){var C=e.unstable_now();M=C;var P=!0;try{P=E(!0,C)}finally{P?xn():(I=!1,E=null)}}else I=!1}var xn;if(typeof d=="function")xn=function(){d(yn)};else if(typeof MessageChannel<"u"){var ao=new MessageChannel,id=ao.port2;ao.port1.onmessage=yn,xn=function(){id.postMessage(null)}}else xn=function(){S(yn,0)};function Rl(C){E=C,I||(I=!0,xn())}function _l(C,P){z=S(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Rl(j))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var L=g;g=P;try{return C()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=g;g=C;try{return P()}finally{g=L}},e.unstable_scheduleCallback=function(C,P,L){var $=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?$+L:$):L=$,C){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=L+Y,C={id:h++,callback:P,priorityLevel:C,startTime:L,expirationTime:Y,sortIndex:-1},L>$?(C.sortIndex=L,t(c,C),n(s)===null&&C===n(c)&&(w?(f(z),z=-1):w=!0,_l(v,L-$))):(C.sortIndex=Y,t(s,C),x||y||(x=!0,Rl(j))),C},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(C){var P=g;return function(){var L=g;g=P;try{return C.apply(this,arguments)}finally{g=L}}}})(Os);Bs.exports=Os;var Pd=Bs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=N,ke=Pd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Us=new Set,Un={};function At(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Un[e]=t,e=0;e<t.length;e++)Us.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),di=Object.prototype.hasOwnProperty,Td=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,co={},fo={};function Md(e){return di.call(fo,e)?!0:di.call(co,e)?!1:Td.test(e)?fo[e]=!0:(co[e]=!0,!1)}function Rd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _d(e,t,n,r){if(t===null||typeof t>"u"||Rd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var fa=/[\-:]([a-z])/g;function ma(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fa,ma);le[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fa,ma);le[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fa,ma);le[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function pa(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_d(t,n,l,r)&&(n=null),r||l===null?Md(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),ha=Symbol.for("react.strict_mode"),fi=Symbol.for("react.profiler"),Hs=Symbol.for("react.provider"),Ws=Symbol.for("react.context"),ga=Symbol.for("react.forward_ref"),mi=Symbol.for("react.suspense"),pi=Symbol.for("react.suspense_list"),va=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Gs=Symbol.for("react.offscreen"),mo=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=mo&&e[mo]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Fl;function En(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Bl=!1;function Ol(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?En(e):""}function Ad(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function hi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Ht:return"Portal";case fi:return"Profiler";case ha:return"StrictMode";case mi:return"Suspense";case pi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ws:return(e.displayName||"Context")+".Consumer";case Hs:return(e._context.displayName||"Context")+".Provider";case ga:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case va:return t=e.displayName||null,t!==null?t:hi(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return hi(e(t))}catch{}}return null}function Dd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hi(t);case 8:return t===ha?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fd(e){var t=Vs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Fd(e))}function $s(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gi(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function po(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zs(e,t){t=t.checked,t!=null&&pa(e,"checked",t,!1)}function vi(e,t){Zs(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yi(e,t.type,n):t.hasOwnProperty("defaultValue")&&yi(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ho(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yi(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function go(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(zn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function Qs(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bd=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){Bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function Ks(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function Xs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ks(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Od=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ki(e,t){if(t){if(Od[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ni(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Si=null,tn=null,nn=null;function yo(e){if(e=ur(e)){if(typeof Si!="function")throw Error(k(280));var t=e.stateNode;t&&(t=kl(t),Si(e.stateNode,e.type,t))}}function Ys(e){tn?nn?nn.push(e):nn=[e]:tn=e}function eu(){if(tn){var e=tn,t=nn;if(nn=tn=null,yo(e),t)for(e=0;e<t.length;e++)yo(t[e])}}function tu(e,t){return e(t)}function nu(){}var Ul=!1;function ru(e,t,n){if(Ul)return e(t,n);Ul=!0;try{return tu(e,t,n)}finally{Ul=!1,(tn!==null||nn!==null)&&(nu(),eu())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var bi=!1;if(Qe)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){bi=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{bi=!1}function Ud(e,t,n,r,l,i,o,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Mn=!1,Vr=null,$r=!1,Ci=null,Hd={onError:function(e){Mn=!0,Vr=e}};function Wd(e,t,n,r,l,i,o,u,s){Mn=!1,Vr=null,Ud.apply(Hd,arguments)}function Gd(e,t,n,r,l,i,o,u,s){if(Wd.apply(this,arguments),Mn){if(Mn){var c=Vr;Mn=!1,Vr=null}else throw Error(k(198));$r||($r=!0,Ci=c)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xo(e){if(Dt(e)!==e)throw Error(k(188))}function Vd(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return xo(l),e;if(i===r)return xo(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function iu(e){return e=Vd(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=au(e);if(t!==null)return t;e=e.sibling}return null}var ou=ke.unstable_scheduleCallback,wo=ke.unstable_cancelCallback,$d=ke.unstable_shouldYield,Zd=ke.unstable_requestPaint,Q=ke.unstable_now,Qd=ke.unstable_getCurrentPriorityLevel,xa=ke.unstable_ImmediatePriority,su=ke.unstable_UserBlockingPriority,Zr=ke.unstable_NormalPriority,qd=ke.unstable_LowPriority,uu=ke.unstable_IdlePriority,vl=null,Ue=null;function Jd(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:Yd,Kd=Math.log,Xd=Math.LN2;function Yd(e){return e>>>=0,e===0?32:31-(Kd(e)/Xd|0)|0}var yr=64,xr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=Pn(u):(i&=o,i!==0&&(r=Pn(i)))}else o=n&~l,o!==0?r=Pn(o):i!==0&&(r=Pn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_e(t),l=1<<n,r|=e[n],t&=~l;return r}function ef(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-_e(i),u=1<<o,s=l[o];s===-1?(!(u&n)||u&r)&&(l[o]=ef(u,t)):s<=t&&(e.expiredLanes|=u),i&=~u}}function Ii(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cu(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_e(t),e[t]=n}function nf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-_e(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_e(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var _=0;function du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fu,ka,mu,pu,hu,Ei=!1,wr=[],st=null,ut=null,ct=null,Gn=new Map,Vn=new Map,rt=[],rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ko(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Nn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ur(t),t!==null&&ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function lf(e,t,n,r,l){switch(t){case"focusin":return st=Nn(st,e,t,n,r,l),!0;case"dragenter":return ut=Nn(ut,e,t,n,r,l),!0;case"mouseover":return ct=Nn(ct,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Gn.set(i,Nn(Gn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Vn.set(i,Nn(Vn.get(i)||null,e,t,n,r,l)),!0}return!1}function gu(e){var t=Ct(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=lu(n),t!==null){e.blockedOn=t,hu(e.priority,function(){mu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ji=r,n.target.dispatchEvent(r),ji=null}else return t=ur(n),t!==null&&ka(t),e.blockedOn=n,!1;t.shift()}return!0}function No(e,t,n){Rr(e)&&n.delete(t)}function af(){Ei=!1,st!==null&&Rr(st)&&(st=null),ut!==null&&Rr(ut)&&(ut=null),ct!==null&&Rr(ct)&&(ct=null),Gn.forEach(No),Vn.forEach(No)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ei||(Ei=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,af)))}function $n(e){function t(l){return jn(l,e)}if(0<wr.length){jn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&jn(st,e),ut!==null&&jn(ut,e),ct!==null&&jn(ct,e),Gn.forEach(t),Vn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)gu(n),n.blockedOn===null&&rt.shift()}var rn=Xe.ReactCurrentBatchConfig,qr=!0;function of(e,t,n,r){var l=_,i=rn.transition;rn.transition=null;try{_=1,Na(e,t,n,r)}finally{_=l,rn.transition=i}}function sf(e,t,n,r){var l=_,i=rn.transition;rn.transition=null;try{_=4,Na(e,t,n,r)}finally{_=l,rn.transition=i}}function Na(e,t,n,r){if(qr){var l=zi(e,t,n,r);if(l===null)Xl(e,t,r,Jr,n),ko(e,r);else if(lf(l,e,t,n,r))r.stopPropagation();else if(ko(e,r),t&4&&-1<rf.indexOf(e)){for(;l!==null;){var i=ur(l);if(i!==null&&fu(i),i=zi(e,t,n,r),i===null&&Xl(e,t,r,Jr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var Jr=null;function zi(e,t,n,r){if(Jr=null,e=ya(r),e=Ct(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function vu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qd()){case xa:return 1;case su:return 4;case Zr:case qd:return 16;case uu:return 536870912;default:return 16}default:return 16}}var it=null,ja=null,_r=null;function yu(){if(_r)return _r;var e,t=ja,n=t.length,r,l="value"in it?it.value:it.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return _r=l.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function jo(){return!1}function je(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?kr:jo,this.isPropagationStopped=jo,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=je(hn),sr=W({},hn,{view:0,detail:0}),uf=je(sr),Wl,Gl,Sn,yl=W({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Wl=e.screenX-Sn.screenX,Gl=e.screenY-Sn.screenY):Gl=Wl=0,Sn=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Gl}}),So=je(yl),cf=W({},yl,{dataTransfer:0}),df=je(cf),ff=W({},sr,{relatedTarget:0}),Vl=je(ff),mf=W({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=je(mf),hf=W({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=je(hf),vf=W({},hn,{data:0}),bo=je(vf),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wf[e])?!!t[e]:!1}function ba(){return kf}var Nf=W({},sr,{key:function(e){if(e.key){var t=yf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jf=je(Nf),Sf=W({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Co=je(Sf),bf=W({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),Cf=je(bf),If=W({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ef=je(If),zf=W({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pf=je(zf),Lf=[9,13,27,32],Ca=Qe&&"CompositionEvent"in window,Rn=null;Qe&&"documentMode"in document&&(Rn=document.documentMode);var Tf=Qe&&"TextEvent"in window&&!Rn,xu=Qe&&(!Ca||Rn&&8<Rn&&11>=Rn),Io=" ",Eo=!1;function wu(e,t){switch(e){case"keyup":return Lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Mf(e,t){switch(e){case"compositionend":return ku(t);case"keypress":return t.which!==32?null:(Eo=!0,Io);case"textInput":return e=t.data,e===Io&&Eo?null:e;default:return null}}function Rf(e,t){if(Gt)return e==="compositionend"||!Ca&&wu(e,t)?(e=yu(),_r=ja=it=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xu&&t.locale!=="ko"?null:t.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_f[e.type]:t==="textarea"}function Nu(e,t,n,r){Ys(r),t=Kr(t,"onChange"),0<t.length&&(n=new Sa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,Zn=null;function Af(e){Mu(e,0)}function xl(e){var t=Zt(e);if($s(t))return e}function Df(e,t){if(e==="change")return t}var ju=!1;if(Qe){var $l;if(Qe){var Zl="oninput"in document;if(!Zl){var Po=document.createElement("div");Po.setAttribute("oninput","return;"),Zl=typeof Po.oninput=="function"}$l=Zl}else $l=!1;ju=$l&&(!document.documentMode||9<document.documentMode)}function Lo(){_n&&(_n.detachEvent("onpropertychange",Su),Zn=_n=null)}function Su(e){if(e.propertyName==="value"&&xl(Zn)){var t=[];Nu(t,Zn,e,ya(e)),ru(Af,t)}}function Ff(e,t,n){e==="focusin"?(Lo(),_n=t,Zn=n,_n.attachEvent("onpropertychange",Su)):e==="focusout"&&Lo()}function Bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(Zn)}function Of(e,t){if(e==="click")return xl(t)}function Uf(e,t){if(e==="input"||e==="change")return xl(t)}function Hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Hf;function Qn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!di.call(t,l)||!De(e[l],t[l]))return!1}return!0}function To(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mo(e,t){var n=To(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=To(n)}}function bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cu(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wf(e){var t=Cu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bu(n.ownerDocument.documentElement,n)){if(r!==null&&Ia(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Mo(n,i);var o=Mo(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gf=Qe&&"documentMode"in document&&11>=document.documentMode,Vt=null,Pi=null,An=null,Li=!1;function Ro(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Li||Vt==null||Vt!==Gr(r)||(r=Vt,"selectionStart"in r&&Ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&Qn(An,r)||(An=r,r=Kr(Pi,"onSelect"),0<r.length&&(t=new Sa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Ql={},Iu={};Qe&&(Iu=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function wl(e){if(Ql[e])return Ql[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Iu)return Ql[e]=t[n];return e}var Eu=wl("animationend"),zu=wl("animationiteration"),Pu=wl("animationstart"),Lu=wl("transitionend"),Tu=new Map,_o="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){Tu.set(e,t),At(t,[e])}for(var ql=0;ql<_o.length;ql++){var Jl=_o[ql],Vf=Jl.toLowerCase(),$f=Jl[0].toUpperCase()+Jl.slice(1);xt(Vf,"on"+$f)}xt(Eu,"onAnimationEnd");xt(zu,"onAnimationIteration");xt(Pu,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(Lu,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Ao(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gd(r,t,void 0,e),e.currentTarget=null}function Mu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break e;Ao(l,u,c),i=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,c=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break e;Ao(l,u,c),i=s}}}if($r)throw e=Ci,$r=!1,Ci=null,e}function F(e,t){var n=t[Ai];n===void 0&&(n=t[Ai]=new Set);var r=e+"__bubble";n.has(r)||(Ru(t,e,2,!1),n.add(r))}function Kl(e,t,n){var r=0;t&&(r|=4),Ru(n,e,r,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[jr]){e[jr]=!0,Us.forEach(function(n){n!=="selectionchange"&&(Zf.has(n)||Kl(n,!1,e),Kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,Kl("selectionchange",!1,t))}}function Ru(e,t,n,r){switch(vu(t)){case 1:var l=of;break;case 4:l=sf;break;default:l=Na}n=l.bind(null,t,n,e),l=void 0,!bi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=Ct(u),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}u=u.parentNode}}r=r.return}ru(function(){var c=i,h=ya(n),m=[];e:{var g=Tu.get(e);if(g!==void 0){var y=Sa,x=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":y=jf;break;case"focusin":x="focus",y=Vl;break;case"focusout":x="blur",y=Vl;break;case"beforeblur":case"afterblur":y=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=So;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Cf;break;case Eu:case zu:case Pu:y=pf;break;case Lu:y=Ef;break;case"scroll":y=uf;break;case"wheel":y=Pf;break;case"copy":case"cut":case"paste":y=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Co}var w=(t&4)!==0,S=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Wn(d,f),v!=null&&w.push(Jn(d,v,p)))),S)break;d=d.return}0<w.length&&(g=new y(g,x,null,n,h),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==ji&&(x=n.relatedTarget||n.fromElement)&&(Ct(x)||x[qe]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?Ct(x):null,x!==null&&(S=Dt(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(w=So,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Co,v="onPointerLeave",f="onPointerEnter",d="pointer"),S=y==null?g:Zt(y),p=x==null?g:Zt(x),g=new w(v,d+"leave",y,n,h),g.target=S,g.relatedTarget=p,v=null,Ct(h)===c&&(w=new w(f,d+"enter",x,n,h),w.target=p,w.relatedTarget=S,v=w),S=v,y&&x)t:{for(w=y,f=x,d=0,p=w;p;p=Ut(p))d++;for(p=0,v=f;v;v=Ut(v))p++;for(;0<d-p;)w=Ut(w),d--;for(;0<p-d;)f=Ut(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Ut(w),f=Ut(f)}w=null}else w=null;y!==null&&Do(m,g,y,w,!1),x!==null&&S!==null&&Do(m,S,x,w,!0)}}e:{if(g=c?Zt(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var j=Df;else if(zo(g))if(ju)j=Uf;else{j=Bf;var I=Ff}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Of);if(j&&(j=j(e,c))){Nu(m,j,n,h);break e}I&&I(e,g,c),e==="focusout"&&(I=g._wrapperState)&&I.controlled&&g.type==="number"&&yi(g,"number",g.value)}switch(I=c?Zt(c):window,e){case"focusin":(zo(I)||I.contentEditable==="true")&&(Vt=I,Pi=c,An=null);break;case"focusout":An=Pi=Vt=null;break;case"mousedown":Li=!0;break;case"contextmenu":case"mouseup":case"dragend":Li=!1,Ro(m,n,h);break;case"selectionchange":if(Gf)break;case"keydown":case"keyup":Ro(m,n,h)}var E;if(Ca)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Gt?wu(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(xu&&n.locale!=="ko"&&(Gt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Gt&&(E=yu()):(it=h,ja="value"in it?it.value:it.textContent,Gt=!0)),I=Kr(c,z),0<I.length&&(z=new bo(z,e,null,n,h),m.push({event:z,listeners:I}),E?z.data=E:(E=ku(n),E!==null&&(z.data=E)))),(E=Tf?Mf(e,n):Rf(e,n))&&(c=Kr(c,"onBeforeInput"),0<c.length&&(h=new bo("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=E))}Mu(m,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Wn(e,n),i!=null&&r.unshift(Jn(e,i,l)),i=Wn(e,t),i!=null&&r.push(Jn(e,i,l))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Do(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=Wn(n,i),s!=null&&o.unshift(Jn(n,s,u))):l||(s=Wn(n,i),s!=null&&o.push(Jn(n,s,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qf=/\r\n?/g,qf=/\u0000|\uFFFD/g;function Fo(e){return(typeof e=="string"?e:""+e).replace(Qf,`
`).replace(qf,"")}function Sr(e,t,n){if(t=Fo(t),Fo(e)!==t&&n)throw Error(k(425))}function Xr(){}var Ti=null,Mi=null;function Ri(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,Jf=typeof clearTimeout=="function"?clearTimeout:void 0,Bo=typeof Promise=="function"?Promise:void 0,Kf=typeof queueMicrotask=="function"?queueMicrotask:typeof Bo<"u"?function(e){return Bo.resolve(null).then(e).catch(Xf)}:_i;function Xf(e){setTimeout(function(){throw e})}function Yl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);$n(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),Oe="__reactFiber$"+gn,Kn="__reactProps$"+gn,qe="__reactContainer$"+gn,Ai="__reactEvents$"+gn,Yf="__reactListeners$"+gn,em="__reactHandles$"+gn;function Ct(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oo(e);e!==null;){if(n=e[Oe])return n;e=Oo(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[Oe]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function kl(e){return e[Kn]||null}var Di=[],Qt=-1;function wt(e){return{current:e}}function B(e){0>Qt||(e.current=Di[Qt],Di[Qt]=null,Qt--)}function D(e,t){Qt++,Di[Qt]=e.current,e.current=t}var yt={},se=wt(yt),he=wt(!1),Lt=yt;function sn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function Yr(){B(he),B(se)}function Uo(e,t,n){if(se.current!==yt)throw Error(k(168));D(se,t),D(he,n)}function _u(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Dd(e)||"Unknown",l));return W({},n,r)}function el(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Lt=se.current,D(se,e),D(he,he.current),!0}function Ho(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=_u(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,B(he),B(se),D(se,e)):B(he),D(he,n)}var Ge=null,Nl=!1,ei=!1;function Au(e){Ge===null?Ge=[e]:Ge.push(e)}function tm(e){Nl=!0,Au(e)}function kt(){if(!ei&&Ge!==null){ei=!0;var e=0,t=_;try{var n=Ge;for(_=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,Nl=!1}catch(l){throw Ge!==null&&(Ge=Ge.slice(e+1)),ou(xa,kt),l}finally{_=t,ei=!1}}return null}var qt=[],Jt=0,tl=null,nl=0,Se=[],be=0,Tt=null,Ve=1,$e="";function St(e,t){qt[Jt++]=nl,qt[Jt++]=tl,tl=e,nl=t}function Du(e,t,n){Se[be++]=Ve,Se[be++]=$e,Se[be++]=Tt,Tt=e;var r=Ve;e=$e;var l=32-_e(r)-1;r&=~(1<<l),n+=1;var i=32-_e(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ve=1<<32-_e(t)+l|n<<l|r,$e=i+e}else Ve=1<<i|n<<l|r,$e=e}function Ea(e){e.return!==null&&(St(e,1),Du(e,1,0))}function za(e){for(;e===tl;)tl=qt[--Jt],qt[Jt]=null,nl=qt[--Jt],qt[Jt]=null;for(;e===Tt;)Tt=Se[--be],Se[be]=null,$e=Se[--be],Se[be]=null,Ve=Se[--be],Se[be]=null}var we=null,xe=null,O=!1,Re=null;function Fu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,xe=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Ve,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,xe=null,!0):!1;default:return!1}}function Fi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(O){var t=xe;if(t){var n=t;if(!Wo(e,t)){if(Fi(e))throw Error(k(418));t=dt(n.nextSibling);var r=we;t&&Wo(e,t)?Fu(r,n):(e.flags=e.flags&-4097|2,O=!1,we=e)}}else{if(Fi(e))throw Error(k(418));e.flags=e.flags&-4097|2,O=!1,we=e}}}function Go(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function br(e){if(e!==we)return!1;if(!O)return Go(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ri(e.type,e.memoizedProps)),t&&(t=xe)){if(Fi(e))throw Bu(),Error(k(418));for(;t;)Fu(e,t),t=dt(t.nextSibling)}if(Go(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=we?dt(e.stateNode.nextSibling):null;return!0}function Bu(){for(var e=xe;e;)e=dt(e.nextSibling)}function un(){xe=we=null,O=!1}function Pa(e){Re===null?Re=[e]:Re.push(e)}var nm=Xe.ReactCurrentBatchConfig;function bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vo(e){var t=e._init;return t(e._payload)}function Ou(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=ht(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,d,p,v){return d===null||d.tag!==6?(d=oi(p,f.mode,v),d.return=f,d):(d=l(d,p),d.return=f,d)}function s(f,d,p,v){var j=p.type;return j===Wt?h(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&Vo(j)===d.type)?(v=l(d,p.props),v.ref=bn(f,d,p),v.return=f,v):(v=Wr(p.type,p.key,p.props,null,f.mode,v),v.ref=bn(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=si(p,f.mode,v),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function h(f,d,p,v,j){return d===null||d.tag!==7?(d=Pt(p,f.mode,v,j),d.return=f,d):(d=l(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=oi(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hr:return p=Wr(d.type,d.key,d.props,null,f.mode,p),p.ref=bn(f,null,d),p.return=f,p;case Ht:return d=si(d,f.mode,p),d.return=f,d;case tt:var v=d._init;return m(f,v(d._payload),p)}if(zn(d)||wn(d))return d=Pt(d,f.mode,p,null),d.return=f,d;Cr(f,d)}return null}function g(f,d,p,v){var j=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:u(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===j?s(f,d,p,v):null;case Ht:return p.key===j?c(f,d,p,v):null;case tt:return j=p._init,g(f,d,j(p._payload),v)}if(zn(p)||wn(p))return j!==null?null:h(f,d,p,v,null);Cr(f,p)}return null}function y(f,d,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,u(d,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hr:return f=f.get(v.key===null?p:v.key)||null,s(d,f,v,j);case Ht:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,j);case tt:var I=v._init;return y(f,d,p,I(v._payload),j)}if(zn(v)||wn(v))return f=f.get(p)||null,h(d,f,v,j,null);Cr(d,v)}return null}function x(f,d,p,v){for(var j=null,I=null,E=d,z=d=0,V=null;E!==null&&z<p.length;z++){E.index>z?(V=E,E=null):V=E.sibling;var M=g(f,E,p[z],v);if(M===null){E===null&&(E=V);break}e&&E&&M.alternate===null&&t(f,E),d=i(M,d,z),I===null?j=M:I.sibling=M,I=M,E=V}if(z===p.length)return n(f,E),O&&St(f,z),j;if(E===null){for(;z<p.length;z++)E=m(f,p[z],v),E!==null&&(d=i(E,d,z),I===null?j=E:I.sibling=E,I=E);return O&&St(f,z),j}for(E=r(f,E);z<p.length;z++)V=y(E,f,z,p[z],v),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?z:V.key),d=i(V,d,z),I===null?j=V:I.sibling=V,I=V);return e&&E.forEach(function(Pe){return t(f,Pe)}),O&&St(f,z),j}function w(f,d,p,v){var j=wn(p);if(typeof j!="function")throw Error(k(150));if(p=j.call(p),p==null)throw Error(k(151));for(var I=j=null,E=d,z=d=0,V=null,M=p.next();E!==null&&!M.done;z++,M=p.next()){E.index>z?(V=E,E=null):V=E.sibling;var Pe=g(f,E,M.value,v);if(Pe===null){E===null&&(E=V);break}e&&E&&Pe.alternate===null&&t(f,E),d=i(Pe,d,z),I===null?j=Pe:I.sibling=Pe,I=Pe,E=V}if(M.done)return n(f,E),O&&St(f,z),j;if(E===null){for(;!M.done;z++,M=p.next())M=m(f,M.value,v),M!==null&&(d=i(M,d,z),I===null?j=M:I.sibling=M,I=M);return O&&St(f,z),j}for(E=r(f,E);!M.done;z++,M=p.next())M=y(E,f,z,M.value,v),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?z:M.key),d=i(M,d,z),I===null?j=M:I.sibling=M,I=M);return e&&E.forEach(function(yn){return t(f,yn)}),O&&St(f,z),j}function S(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var j=p.key,I=d;I!==null;){if(I.key===j){if(j=p.type,j===Wt){if(I.tag===7){n(f,I.sibling),d=l(I,p.props.children),d.return=f,f=d;break e}}else if(I.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tt&&Vo(j)===I.type){n(f,I.sibling),d=l(I,p.props),d.ref=bn(f,I,p),d.return=f,f=d;break e}n(f,I);break}else t(f,I);I=I.sibling}p.type===Wt?(d=Pt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Wr(p.type,p.key,p.props,null,f.mode,v),v.ref=bn(f,d,p),v.return=f,f=v)}return o(f);case Ht:e:{for(I=p.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=si(p,f.mode,v),d.return=f,f=d}return o(f);case tt:return I=p._init,S(f,d,I(p._payload),v)}if(zn(p))return x(f,d,p,v);if(wn(p))return w(f,d,p,v);Cr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=oi(p,f.mode,v),d.return=f,f=d),o(f)):n(f,d)}return S}var cn=Ou(!0),Uu=Ou(!1),rl=wt(null),ll=null,Kt=null,La=null;function Ta(){La=Kt=ll=null}function Ma(e){var t=rl.current;B(rl),e._currentValue=t}function Oi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){ll=e,La=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(La!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(ll===null)throw Error(k(308));Kt=e,ll.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var It=null;function Ra(e){It===null?It=[e]:It.push(e)}function Hu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ra(t)):(n.next=l.next,l.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function _a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Je(e,n)}return l=r.interleaved,l===null?(t.next=t,Ra(r)):(t.next=l.next,l.next=t),r.interleaved=t,Je(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}function $o(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function il(e,t,n,r){var l=e.updateQueue;nt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=s))}if(i!==null){var m=l.baseState;o=0,h=c=s=null,u=i;do{var g=u.lane,y=u.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,w=u;switch(g=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(y,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(y,m,g):x,g==null)break e;m=W({},m,g);break e;case 2:nt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[u]:g.push(u))}else y={eventTime:y,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=y,s=m):h=h.next=y,o|=g;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;g=u,u=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(h===null&&(s=m),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Rt|=o,e.lanes=o,e.memoizedState=m}}function Zo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var cr={},He=wt(cr),Xn=wt(cr),Yn=wt(cr);function Et(e){if(e===cr)throw Error(k(174));return e}function Aa(e,t){switch(D(Yn,t),D(Xn,e),D(He,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wi(t,e)}B(He),D(He,t)}function dn(){B(He),B(Xn),B(Yn)}function Gu(e){Et(Yn.current);var t=Et(He.current),n=wi(t,e.type);t!==n&&(D(Xn,e),D(He,n))}function Da(e){Xn.current===e&&(B(He),B(Xn))}var U=wt(0);function al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ti=[];function Fa(){for(var e=0;e<ti.length;e++)ti[e]._workInProgressVersionPrimary=null;ti.length=0}var Fr=Xe.ReactCurrentDispatcher,ni=Xe.ReactCurrentBatchConfig,Mt=0,H=null,K=null,ee=null,ol=!1,Dn=!1,er=0,rm=0;function ie(){throw Error(k(321))}function Ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Oa(e,t,n,r,l,i){if(Mt=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?om:sm,e=n(r,l),Dn){i=0;do{if(Dn=!1,er=0,25<=i)throw Error(k(301));i+=1,ee=K=null,t.updateQueue=null,Fr.current=um,e=n(r,l)}while(Dn)}if(Fr.current=sl,t=K!==null&&K.next!==null,Mt=0,ee=K=H=null,ol=!1,t)throw Error(k(300));return e}function Ua(){var e=er!==0;return er=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function ze(){if(K===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,K=e;else{if(e===null)throw Error(k(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function tr(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,s=null,c=i;do{var h=c.lane;if((Mt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=m,o=r):s=s.next=m,H.lanes|=h,Rt|=h}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=u,De(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,Rt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function li(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);De(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Vu(){}function $u(e,t){var n=H,r=ze(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,Ha(qu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,nr(9,Qu.bind(null,n,r,l,t),void 0,null),te===null)throw Error(k(349));Mt&30||Zu(n,t,l)}return l}function Zu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qu(e,t,n,r){t.value=n,t.getSnapshot=r,Ju(t)&&Ku(e)}function qu(e,t,n){return n(function(){Ju(t)&&Ku(e)})}function Ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Ku(e){var t=Je(e,1);t!==null&&Ae(t,e,1,-1)}function Qo(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=am.bind(null,H,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xu(){return ze().memoizedState}function Br(e,t,n,r){var l=Be();H.flags|=e,l.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function jl(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&Ba(r,o.deps)){l.memoizedState=nr(t,n,i,r);return}}H.flags|=e,l.memoizedState=nr(1|t,n,i,r)}function qo(e,t){return Br(8390656,8,e,t)}function Ha(e,t){return jl(2048,8,e,t)}function Yu(e,t){return jl(4,2,e,t)}function ec(e,t){return jl(4,4,e,t)}function tc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nc(e,t,n){return n=n!=null?n.concat([e]):null,jl(4,4,tc.bind(null,t,e),n)}function Wa(){}function rc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ic(e,t,n){return Mt&21?(De(n,t)||(n=cu(),H.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function lm(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var r=ni.transition;ni.transition={};try{e(!1),t()}finally{_=n,ni.transition=r}}function ac(){return ze().memoizedState}function im(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oc(e))sc(t,n);else if(n=Hu(e,t,n,r),n!==null){var l=ce();Ae(n,e,r,l),uc(n,t,r)}}function am(e,t,n){var r=pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oc(e))sc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,De(u,o)){var s=t.interleaved;s===null?(l.next=l,Ra(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Hu(e,t,l,r),n!==null&&(l=ce(),Ae(n,e,r,l),uc(n,t,r))}}function oc(e){var t=e.alternate;return e===H||t!==null&&t===H}function sc(e,t){Dn=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}var sl={readContext:Ee,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},om={readContext:Ee,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:qo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,tc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=im.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:Qo,useDebugValue:Wa,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Qo(!1),t=e[0];return e=lm.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Be();if(O){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),te===null)throw Error(k(349));Mt&30||Zu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,qo(qu.bind(null,r,i,e),[e]),r.flags|=2048,nr(9,Qu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Be(),t=te.identifierPrefix;if(O){var n=$e,r=Ve;n=(r&~(1<<32-_e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sm={readContext:Ee,useCallback:rc,useContext:Ee,useEffect:Ha,useImperativeHandle:nc,useInsertionEffect:Yu,useLayoutEffect:ec,useMemo:lc,useReducer:ri,useRef:Xu,useState:function(){return ri(tr)},useDebugValue:Wa,useDeferredValue:function(e){var t=ze();return ic(t,K.memoizedState,e)},useTransition:function(){var e=ri(tr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Vu,useSyncExternalStore:$u,useId:ac,unstable_isNewReconciler:!1},um={readContext:Ee,useCallback:rc,useContext:Ee,useEffect:Ha,useImperativeHandle:nc,useInsertionEffect:Yu,useLayoutEffect:ec,useMemo:lc,useReducer:li,useRef:Xu,useState:function(){return li(tr)},useDebugValue:Wa,useDeferredValue:function(e){var t=ze();return K===null?t.memoizedState=e:ic(t,K.memoizedState,e)},useTransition:function(){var e=li(tr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Vu,useSyncExternalStore:$u,useId:ac,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ui(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sl={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=pt(e),i=Ze(r,l);i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,l),t!==null&&(Ae(t,e,l,r),Dr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=pt(e),i=Ze(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,l),t!==null&&(Ae(t,e,l,r),Dr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=pt(e),l=Ze(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(Ae(t,e,r,n),Dr(t,e,r))}};function Jo(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,r)||!Qn(l,i):!0}function cc(e,t,n){var r=!1,l=yt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=ge(t)?Lt:se.current,r=t.contextTypes,i=(r=r!=null)?sn(e,l):yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ko(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function Hi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},_a(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=ge(t)?Lt:se.current,l.context=sn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ui(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Sl.enqueueReplaceState(l,l.state,null),il(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=Ad(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ii(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function dc(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cl||(cl=!0,Yi=r),Wi(e,t)},n}function fc(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Wi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wi(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Xo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Sm.bind(null,e,t,n),t.then(e,e))}function Yo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function es(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var dm=Xe.ReactCurrentOwner,pe=!1;function ue(e,t,n,r){t.child=e===null?Uu(t,null,n,r):cn(t,e.child,n,r)}function ts(e,t,n,r,l){n=n.render;var i=t.ref;return ln(t,l),r=Oa(e,t,n,r,i,l),n=Ua(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(O&&n&&Ea(t),t.flags|=1,ue(e,t,r,l),t.child)}function ns(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ka(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,mc(e,t,i,r,l)):(e=Wr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(o,r)&&e.ref===t.ref)return Ke(e,t,l)}return t.flags|=1,e=ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function mc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Qn(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ke(e,t,l)}return Gi(e,t,n,r,l)}function pc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Yt,ye),ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Yt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(Yt,ye),ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(Yt,ye),ye|=r;return ue(e,t,l,n),t.child}function hc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gi(e,t,n,r,l){var i=ge(n)?Lt:se.current;return i=sn(t,i),ln(t,l),n=Oa(e,t,n,r,i,l),r=Ua(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(O&&r&&Ea(t),t.flags|=1,ue(e,t,n,l),t.child)}function rs(e,t,n,r,l){if(ge(n)){var i=!0;el(t)}else i=!1;if(ln(t,l),t.stateNode===null)Or(e,t),cc(t,n,r),Hi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=ge(n)?Lt:se.current,c=sn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==c)&&Ko(t,o,r,c),nt=!1;var g=t.memoizedState;o.state=g,il(t,r,o,l),s=t.memoizedState,u!==r||g!==s||he.current||nt?(typeof h=="function"&&(Ui(t,n,h,r),s=t.memoizedState),(u=nt||Jo(t,n,u,r,g,s,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Wu(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Te(t.type,u),o.props=c,m=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ee(s):(s=ge(n)?Lt:se.current,s=sn(t,s));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||g!==s)&&Ko(t,o,r,s),nt=!1,g=t.memoizedState,o.state=g,il(t,r,o,l);var x=t.memoizedState;u!==m||g!==x||he.current||nt?(typeof y=="function"&&(Ui(t,n,y,r),x=t.memoizedState),(c=nt||Jo(t,n,c,r,g,x,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Vi(e,t,n,r,i,l)}function Vi(e,t,n,r,l,i){hc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ho(t,n,!1),Ke(e,t,i);r=t.stateNode,dm.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cn(t,e.child,null,i),t.child=cn(t,null,u,i)):ue(e,t,u,i),t.memoizedState=r.state,l&&Ho(t,n,!0),t.child}function gc(e){var t=e.stateNode;t.pendingContext?Uo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Uo(e,t.context,!1),Aa(e,t.containerInfo)}function ls(e,t,n,r,l){return un(),Pa(l),t.flags|=256,ue(e,t,n,r),t.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function vc(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(U,l&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Il(o,r,0,null),e=Pt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Zi(n),t.memoizedState=$i,e):Ga(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return fm(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ht(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=ht(u,i):(i=Pt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Zi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=$i,r}return i=e.child,e=i.sibling,r=ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ga(e,t){return t=Il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ir(e,t,n,r){return r!==null&&Pa(r),cn(t,e.child,null,n),e=Ga(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fm(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ii(Error(k(422))),Ir(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Il({mode:"visible",children:r.children},l,0,null),i=Pt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cn(t,e.child,null,o),t.child.memoizedState=Zi(o),t.memoizedState=$i,i);if(!(t.mode&1))return Ir(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(k(419)),r=ii(i,r,void 0),Ir(e,t,o,r)}if(u=(o&e.childLanes)!==0,pe||u){if(r=te,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Je(e,l),Ae(r,e,l,-1))}return Ja(),r=ii(Error(k(421))),Ir(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=bm.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,xe=dt(l.nextSibling),we=t,O=!0,Re=null,e!==null&&(Se[be++]=Ve,Se[be++]=$e,Se[be++]=Tt,Ve=e.id,$e=e.overflow,Tt=t),t=Ga(t,r.children),t.flags|=4096,t)}function is(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oi(e.return,t,n)}function ai(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function yc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ue(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&is(e,n,t);else if(e.tag===19)is(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&al(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ai(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&al(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ai(t,!0,n,null,i);break;case"together":ai(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Or(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mm(e,t,n){switch(t.tag){case 3:gc(t),un();break;case 5:Gu(t);break;case 1:ge(t.type)&&el(t);break;case 4:Aa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(rl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?vc(e,t,n):(D(U,U.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);D(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,pc(e,t,n)}return Ke(e,t,n)}var xc,Qi,wc,kc;xc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qi=function(){};wc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et(He.current);var i=null;switch(n){case"input":l=gi(e,l),r=gi(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=xi(e,l),r=xi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}ki(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Un.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Un.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&F("scroll",e),i||u===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};kc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pm(e,t,n){var r=t.pendingProps;switch(za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ge(t.type)&&Yr(),ae(t),null;case 3:return r=t.stateNode,dn(),B(he),B(se),Fa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(na(Re),Re=null))),Qi(e,t),ae(t),null;case 5:Da(t);var l=Et(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)wc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ae(t),null}if(e=Et(He.current),br(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Oe]=t,r[Kn]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<Ln.length;l++)F(Ln[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":po(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":go(r,i),F("invalid",r)}ki(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,u,e),l=["children",""+u]):Un.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":gr(r),ho(r,i,!0);break;case"textarea":gr(r),vo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Oe]=t,e[Kn]=r,xc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ni(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<Ln.length;l++)F(Ln[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":po(e,r),l=gi(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),F("invalid",e);break;case"textarea":go(e,r),l=xi(e,r),F("invalid",e);break;default:l=r}ki(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?Xs(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Js(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hn(e,s):typeof s=="number"&&Hn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Un.hasOwnProperty(i)?s!=null&&i==="onScroll"&&F("scroll",e):s!=null&&pa(e,i,s,o))}switch(n){case"input":gr(e),ho(e,r,!1);break;case"textarea":gr(e),vo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?en(e,!!r.multiple,i,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)kc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Et(Yn.current),Et(He.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(i=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return ae(t),null;case 13:if(B(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&xe!==null&&t.mode&1&&!(t.flags&128))Bu(),un(),t.flags|=98560,i=!1;else if(i=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Oe]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),i=!1}else Re!==null&&(na(Re),Re=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):Ja())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return dn(),Qi(e,t),e===null&&qn(t.stateNode.containerInfo),ae(t),null;case 10:return Ma(t.type._context),ae(t),null;case 17:return ge(t.type)&&Yr(),ae(t),null;case 19:if(B(U),i=t.memoizedState,i===null)return ae(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Cn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=al(e),o!==null){for(t.flags|=128,Cn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>mn&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304)}else{if(!r)if(e=al(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!O)return ae(t),null}else 2*Q()-i.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=U.current,D(U,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function hm(e,t){switch(za(t),t.tag){case 1:return ge(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),B(he),B(se),Fa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Da(t),null;case 13:if(B(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(U),null;case 4:return dn(),null;case 10:return Ma(t.type._context),null;case 22:case 23:return qa(),null;case 24:return null;default:return null}}var Er=!1,oe=!1,gm=typeof WeakSet=="function"?WeakSet:Set,b=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function qi(e,t,n){try{n()}catch(r){G(e,t,r)}}var as=!1;function vm(e,t){if(Ti=qr,e=Cu(),Ia(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,s=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var y;m!==n||l!==0&&m.nodeType!==3||(u=o+l),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===n&&++c===l&&(u=o),g===i&&++h===r&&(s=o),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mi={focusedElem:e,selectionRange:n},qr=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,S=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Te(t.type,w),S);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){G(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return x=as,as=!1,x}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&qi(t,n,i)}l=l.next}while(l!==r)}}function bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nc(e){var t=e.alternate;t!==null&&(e.alternate=null,Nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Kn],delete t[Ai],delete t[Yf],delete t[em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jc(e){return e.tag===5||e.tag===3||e.tag===4}function os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function Xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}var ne=null,Me=!1;function Ye(e,t,n){for(n=n.child;n!==null;)Sc(e,t,n),n=n.sibling}function Sc(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:oe||Xt(n,t);case 6:var r=ne,l=Me;ne=null,Ye(e,t,n),ne=r,Me=l,ne!==null&&(Me?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Me?(e=ne,n=n.stateNode,e.nodeType===8?Yl(e.parentNode,n):e.nodeType===1&&Yl(e,n),$n(e)):Yl(ne,n.stateNode));break;case 4:r=ne,l=Me,ne=n.stateNode.containerInfo,Me=!0,Ye(e,t,n),ne=r,Me=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&qi(n,t,o),l=l.next}while(l!==r)}Ye(e,t,n);break;case 1:if(!oe&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){G(n,t,u)}Ye(e,t,n);break;case 21:Ye(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Ye(e,t,n),oe=r):Ye(e,t,n);break;default:Ye(e,t,n)}}function ss(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gm),t.forEach(function(r){var l=Cm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ne=u.stateNode,Me=!1;break e;case 3:ne=u.stateNode.containerInfo,Me=!0;break e;case 4:ne=u.stateNode.containerInfo,Me=!0;break e}u=u.return}if(ne===null)throw Error(k(160));Sc(i,o,l),ne=null,Me=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){G(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bc(t,e),t=t.sibling}function bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Fe(e),r&4){try{Fn(3,e,e.return),bl(3,e)}catch(w){G(e,e.return,w)}try{Fn(5,e,e.return)}catch(w){G(e,e.return,w)}}break;case 1:Le(t,e),Fe(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Le(t,e),Fe(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var l=e.stateNode;try{Hn(l,"")}catch(w){G(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Zs(l,i),Ni(u,o);var c=Ni(u,i);for(o=0;o<s.length;o+=2){var h=s[o],m=s[o+1];h==="style"?Xs(l,m):h==="dangerouslySetInnerHTML"?Js(l,m):h==="children"?Hn(l,m):pa(l,h,m,c)}switch(u){case"input":vi(l,i);break;case"textarea":Qs(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?en(l,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?en(l,!!i.multiple,i.defaultValue,!0):en(l,!!i.multiple,i.multiple?[]:"",!1))}l[Kn]=i}catch(w){G(e,e.return,w)}}break;case 6:if(Le(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){G(e,e.return,w)}}break;case 3:if(Le(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(w){G(e,e.return,w)}break;case 4:Le(t,e),Fe(e);break;case 13:Le(t,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Za=Q())),r&4&&ss(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||h,Le(t,e),oe=c):Le(t,e),Fe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(b=e,h=e.child;h!==null;){for(m=b=h;b!==null;){switch(g=b,y=g.child,g.tag){case 0:case 11:case 14:case 15:Fn(4,g,g.return);break;case 1:Xt(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){G(r,n,w)}}break;case 5:Xt(g,g.return);break;case 22:if(g.memoizedState!==null){cs(m);continue}}y!==null?(y.return=g,b=y):cs(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Ks("display",o))}catch(w){G(e,e.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){G(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),Fe(e),r&4&&ss(e);break;case 21:break;default:Le(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hn(l,""),r.flags&=-33);var i=os(e);Xi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=os(e);Ki(e,u,o);break;default:throw Error(k(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ym(e,t,n){b=e,Cc(e)}function Cc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var l=b,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Er;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||oe;u=Er;var c=oe;if(Er=o,(oe=s)&&!c)for(b=l;b!==null;)o=b,s=o.child,o.tag===22&&o.memoizedState!==null?ds(l):s!==null?(s.return=o,b=s):ds(l);for(;i!==null;)b=i,Cc(i),i=i.sibling;b=l,Er=u,oe=c}us(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,b=i):us(e)}}function us(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||bl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zo(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zo(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&$n(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&Ji(t)}catch(g){G(t,t.return,g)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function cs(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function ds(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bl(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){G(t,l,s)}}var i=t.return;try{Ji(t)}catch(s){G(t,i,s)}break;case 5:var o=t.return;try{Ji(t)}catch(s){G(t,o,s)}}}catch(s){G(t,t.return,s)}if(t===e){b=null;break}var u=t.sibling;if(u!==null){u.return=t.return,b=u;break}b=t.return}}var xm=Math.ceil,ul=Xe.ReactCurrentDispatcher,Va=Xe.ReactCurrentOwner,Ie=Xe.ReactCurrentBatchConfig,R=0,te=null,q=null,re=0,ye=0,Yt=wt(0),X=0,rr=null,Rt=0,Cl=0,$a=0,Bn=null,me=null,Za=0,mn=1/0,We=null,cl=!1,Yi=null,mt=null,zr=!1,at=null,dl=0,On=0,ea=null,Ur=-1,Hr=0;function ce(){return R&6?Q():Ur!==-1?Ur:Ur=Q()}function pt(e){return e.mode&1?R&2&&re!==0?re&-re:nm.transition!==null?(Hr===0&&(Hr=cu()),Hr):(e=_,e!==0||(e=window.event,e=e===void 0?16:vu(e.type)),e):1}function Ae(e,t,n,r){if(50<On)throw On=0,ea=null,Error(k(185));or(e,n,r),(!(R&2)||e!==te)&&(e===te&&(!(R&2)&&(Cl|=n),X===4&&lt(e,re)),ve(e,r),n===1&&R===0&&!(t.mode&1)&&(mn=Q()+500,Nl&&kt()))}function ve(e,t){var n=e.callbackNode;tf(e,t);var r=Qr(e,e===te?re:0);if(r===0)n!==null&&wo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wo(n),t===1)e.tag===0?tm(fs.bind(null,e)):Au(fs.bind(null,e)),Kf(function(){!(R&6)&&kt()}),n=null;else{switch(du(r)){case 1:n=xa;break;case 4:n=su;break;case 16:n=Zr;break;case 536870912:n=uu;break;default:n=Zr}n=Rc(n,Ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ic(e,t){if(Ur=-1,Hr=0,R&6)throw Error(k(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Qr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fl(e,r);else{t=r;var l=R;R|=2;var i=zc();(te!==e||re!==t)&&(We=null,mn=Q()+500,zt(e,t));do try{Nm();break}catch(u){Ec(e,u)}while(!0);Ta(),ul.current=i,R=l,q!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(l=Ii(e),l!==0&&(r=l,t=ta(e,l))),t===1)throw n=rr,zt(e,0),lt(e,r),ve(e,Q()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!wm(l)&&(t=fl(e,r),t===2&&(i=Ii(e),i!==0&&(r=i,t=ta(e,i))),t===1))throw n=rr,zt(e,0),lt(e,r),ve(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:bt(e,me,We);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=Za+500-Q(),10<t)){if(Qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_i(bt.bind(null,e,me,We),t);break}bt(e,me,We);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-_e(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xm(r/1960))-r,10<r){e.timeoutHandle=_i(bt.bind(null,e,me,We),r);break}bt(e,me,We);break;case 5:bt(e,me,We);break;default:throw Error(k(329))}}}return ve(e,Q()),e.callbackNode===n?Ic.bind(null,e):null}function ta(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(zt(e,t).flags|=256),e=fl(e,t),e!==2&&(t=me,me=n,t!==null&&na(t)),e}function na(e){me===null?me=e:me.push.apply(me,e)}function wm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~$a,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_e(t),r=1<<n;e[n]=-1,t&=~r}}function fs(e){if(R&6)throw Error(k(327));an();var t=Qr(e,0);if(!(t&1))return ve(e,Q()),null;var n=fl(e,t);if(e.tag!==0&&n===2){var r=Ii(e);r!==0&&(t=r,n=ta(e,r))}if(n===1)throw n=rr,zt(e,0),lt(e,t),ve(e,Q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,me,We),ve(e,Q()),null}function Qa(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(mn=Q()+500,Nl&&kt())}}function _t(e){at!==null&&at.tag===0&&!(R&6)&&an();var t=R;R|=1;var n=Ie.transition,r=_;try{if(Ie.transition=null,_=1,e)return e()}finally{_=r,Ie.transition=n,R=t,!(R&6)&&kt()}}function qa(){ye=Yt.current,B(Yt)}function zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jf(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(za(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:dn(),B(he),B(se),Fa();break;case 5:Da(r);break;case 4:dn();break;case 13:B(U);break;case 19:B(U);break;case 10:Ma(r.type._context);break;case 22:case 23:qa()}n=n.return}if(te=e,q=e=ht(e.current,null),re=ye=t,X=0,rr=null,$a=Cl=Rt=0,me=Bn=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}It=null}return e}function Ec(e,t){do{var n=q;try{if(Ta(),Fr.current=sl,ol){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(Mt=0,ee=K=H=null,Dn=!1,er=0,Va.current=null,n===null||n.return===null){X=1,rr=t,q=null;break}e:{var i=e,o=n.return,u=n,s=t;if(t=re,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Yo(o);if(y!==null){y.flags&=-257,es(y,o,u,i,t),y.mode&1&&Xo(i,c,t),t=y,s=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if(!(t&1)){Xo(i,c,t),Ja();break e}s=Error(k(426))}}else if(O&&u.mode&1){var S=Yo(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),es(S,o,u,i,t),Pa(fn(s,u));break e}}i=s=fn(s,u),X!==4&&(X=2),Bn===null?Bn=[i]:Bn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=dc(i,s,t);$o(i,f);break e;case 1:u=s;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(mt===null||!mt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=fc(i,u,t);$o(i,v);break e}}i=i.return}while(i!==null)}Lc(n)}catch(j){t=j,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function zc(){var e=ul.current;return ul.current=sl,e===null?sl:e}function Ja(){(X===0||X===3||X===2)&&(X=4),te===null||!(Rt&268435455)&&!(Cl&268435455)||lt(te,re)}function fl(e,t){var n=R;R|=2;var r=zc();(te!==e||re!==t)&&(We=null,zt(e,t));do try{km();break}catch(l){Ec(e,l)}while(!0);if(Ta(),R=n,ul.current=r,q!==null)throw Error(k(261));return te=null,re=0,X}function km(){for(;q!==null;)Pc(q)}function Nm(){for(;q!==null&&!$d();)Pc(q)}function Pc(e){var t=Mc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Lc(e):q=t,Va.current=null}function Lc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hm(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,q=null;return}}else if(n=pm(n,t,ye),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function bt(e,t,n){var r=_,l=Ie.transition;try{Ie.transition=null,_=1,jm(e,t,n,r)}finally{Ie.transition=l,_=r}return null}function jm(e,t,n,r){do an();while(at!==null);if(R&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(nf(e,i),e===te&&(q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,Rc(Zr,function(){return an(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ie.transition,Ie.transition=null;var o=_;_=1;var u=R;R|=4,Va.current=null,vm(e,n),bc(n,e),Wf(Mi),qr=!!Ti,Mi=Ti=null,e.current=n,ym(n),Zd(),R=u,_=o,Ie.transition=i}else e.current=n;if(zr&&(zr=!1,at=e,dl=l),i=e.pendingLanes,i===0&&(mt=null),Jd(n.stateNode),ve(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(cl)throw cl=!1,e=Yi,Yi=null,e;return dl&1&&e.tag!==0&&an(),i=e.pendingLanes,i&1?e===ea?On++:(On=0,ea=e):On=0,kt(),null}function an(){if(at!==null){var e=du(dl),t=Ie.transition,n=_;try{if(Ie.transition=null,_=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,dl=0,R&6)throw Error(k(331));var l=R;for(R|=4,b=e.current;b!==null;){var i=b,o=i.child;if(b.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(b=c;b!==null;){var h=b;switch(h.tag){case 0:case 11:case 15:Fn(8,h,i)}var m=h.child;if(m!==null)m.return=h,b=m;else for(;b!==null;){h=b;var g=h.sibling,y=h.return;if(Nc(h),h===c){b=null;break}if(g!==null){g.return=y,b=g;break}b=y}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}b=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,b=o;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,b=f;break e}b=i.return}}var d=e.current;for(b=d;b!==null;){o=b;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,b=p;else e:for(o=d;b!==null;){if(u=b,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:bl(9,u)}}catch(j){G(u,u.return,j)}if(u===o){b=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,b=v;break e}b=u.return}}if(R=l,kt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(vl,e)}catch{}r=!0}return r}finally{_=n,Ie.transition=t}}return!1}function ms(e,t,n){t=fn(n,t),t=dc(e,t,1),e=ft(e,t,1),t=ce(),e!==null&&(or(e,1,t),ve(e,t))}function G(e,t,n){if(e.tag===3)ms(e,e,n);else for(;t!==null;){if(t.tag===3){ms(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=fn(n,e),e=fc(t,e,1),t=ft(t,e,1),e=ce(),t!==null&&(or(t,1,e),ve(t,e));break}}t=t.return}}function Sm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Q()-Za?zt(e,0):$a|=n),ve(e,t)}function Tc(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=ce();e=Je(e,t),e!==null&&(or(e,t,n),ve(e,n))}function bm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tc(e,n)}function Cm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Tc(e,n)}var Mc;Mc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,mm(e,t,n);pe=!!(e.flags&131072)}else pe=!1,O&&t.flags&1048576&&Du(t,nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Or(e,t),e=t.pendingProps;var l=sn(t,se.current);ln(t,n),l=Oa(null,t,r,e,l,n);var i=Ua();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,el(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,_a(t),l.updater=Sl,t.stateNode=l,l._reactInternals=t,Hi(t,r,e,n),t=Vi(null,t,r,!0,i,n)):(t.tag=0,O&&i&&Ea(t),ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Or(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Em(r),e=Te(r,e),l){case 0:t=Gi(null,t,r,e,n);break e;case 1:t=rs(null,t,r,e,n);break e;case 11:t=ts(null,t,r,e,n);break e;case 14:t=ns(null,t,r,Te(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Gi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),rs(e,t,r,l,n);case 3:e:{if(gc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Wu(e,t),il(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=fn(Error(k(423)),t),t=ls(e,t,r,n,l);break e}else if(r!==l){l=fn(Error(k(424)),t),t=ls(e,t,r,n,l);break e}else for(xe=dt(t.stateNode.containerInfo.firstChild),we=t,O=!0,Re=null,n=Uu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===l){t=Ke(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return Gu(t),e===null&&Bi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ri(r,l)?o=null:i!==null&&Ri(r,i)&&(t.flags|=32),hc(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&Bi(t),null;case 13:return vc(e,t,n);case 4:return Aa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),ts(e,t,r,l,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D(rl,r._currentValue),r._currentValue=o,i!==null)if(De(i.value,o)){if(i.children===l.children&&!he.current){t=Ke(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ze(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Oi(i.return,n,t),u.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Oi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,ln(t,n),l=Ee(l),r=r(l),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),ns(e,t,r,l,n);case 15:return mc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Or(e,t),t.tag=1,ge(r)?(e=!0,el(t)):e=!1,ln(t,n),cc(t,r,l),Hi(t,r,l,n),Vi(null,t,r,!0,e,n);case 19:return yc(e,t,n);case 22:return pc(e,t,n)}throw Error(k(156,t.tag))};function Rc(e,t){return ou(e,t)}function Im(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Im(e,t,n,r)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Em(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ga)return 11;if(e===va)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Ka(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return Pt(n.children,l,i,t);case ha:o=8,l|=8;break;case fi:return e=Ce(12,n,t,l|2),e.elementType=fi,e.lanes=i,e;case mi:return e=Ce(13,n,t,l),e.elementType=mi,e.lanes=i,e;case pi:return e=Ce(19,n,t,l),e.elementType=pi,e.lanes=i,e;case Gs:return Il(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hs:o=10;break e;case Ws:o=9;break e;case ga:o=11;break e;case va:o=14;break e;case tt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Pt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function Il(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=Gs,e.lanes=n,e.stateNode={isHidden:!1},e}function oi(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function si(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hl(0),this.expirationTimes=Hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Xa(e,t,n,r,l,i,o,u,s){return e=new zm(e,t,n,u,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_a(i),e}function Pm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _c(e){if(!e)return yt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return _u(e,n,t)}return t}function Ac(e,t,n,r,l,i,o,u,s){return e=Xa(n,r,!0,e,l,i,o,u,s),e.context=_c(null),n=e.current,r=ce(),l=pt(n),i=Ze(r,l),i.callback=t??null,ft(n,i,l),e.current.lanes=l,or(e,l,r),ve(e,r),e}function El(e,t,n,r){var l=t.current,i=ce(),o=pt(l);return n=_c(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,o),e!==null&&(Ae(e,l,o,i),Dr(e,l,o)),o}function ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ps(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ya(e,t){ps(e,t),(e=e.alternate)&&ps(e,t)}function Lm(){return null}var Dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function eo(e){this._internalRoot=e}zl.prototype.render=eo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));El(e,t,null,null)};zl.prototype.unmount=eo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){El(null,e,null,null)}),t[qe]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&gu(e)}};function to(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hs(){}function Tm(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=ml(o);i.call(c)}}var o=Ac(t,r,e,0,null,!1,!1,"",hs);return e._reactRootContainer=o,e[qe]=o.current,qn(e.nodeType===8?e.parentNode:e),_t(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=ml(s);u.call(c)}}var s=Xa(e,0,!1,null,null,!1,!1,"",hs);return e._reactRootContainer=s,e[qe]=s.current,qn(e.nodeType===8?e.parentNode:e),_t(function(){El(t,s,n,r)}),s}function Ll(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var s=ml(o);u.call(s)}}El(t,o,e,l)}else o=Tm(n,t,e,l,r);return ml(o)}fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(wa(t,n|1),ve(t,Q()),!(R&6)&&(mn=Q()+500,kt()))}break;case 13:_t(function(){var r=Je(e,1);if(r!==null){var l=ce();Ae(r,e,1,l)}}),Ya(e,1)}};ka=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ce();Ae(t,e,134217728,n)}Ya(e,134217728)}};mu=function(e){if(e.tag===13){var t=pt(e),n=Je(e,t);if(n!==null){var r=ce();Ae(n,e,t,r)}Ya(e,t)}};pu=function(){return _};hu=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};Si=function(e,t,n){switch(t){case"input":if(vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=kl(r);if(!l)throw Error(k(90));$s(r),vi(r,l)}}}break;case"textarea":Qs(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};tu=Qa;nu=_t;var Mm={usingClientEntryPoint:!1,Events:[ur,Zt,kl,Ys,eu,Qa]},In={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rm={bundleType:In.bundleType,version:In.version,rendererPackageName:In.rendererPackageName,rendererConfig:In.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iu(e),e===null?null:e.stateNode},findFiberByHostInstance:In.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{vl=Pr.inject(Rm),Ue=Pr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mm;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!to(t))throw Error(k(200));return Pm(e,t,null,n)};Ne.createRoot=function(e,t){if(!to(e))throw Error(k(299));var n=!1,r="",l=Dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Xa(e,1,!1,null,null,n,!1,r,l),e[qe]=t.current,qn(e.nodeType===8?e.parentNode:e),new eo(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=iu(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return _t(e)};Ne.hydrate=function(e,t,n){if(!Pl(t))throw Error(k(200));return Ll(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!to(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Dc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ac(t,null,e,1,n??null,l,!1,i,o),e[qe]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new zl(t)};Ne.render=function(e,t,n){if(!Pl(t))throw Error(k(200));return Ll(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(k(40));return e._reactRootContainer?(_t(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};Ne.unstable_batchedUpdates=Qa;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ll(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc)}catch(e){console.error(e)}}Fc(),Fs.exports=Ne;var _m=Fs.exports,gs=_m;ci.createRoot=gs.createRoot,ci.hydrateRoot=gs.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr.apply(null,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const vs="popstate";function Am(e){e===void 0&&(e={});function t(l,i){let{pathname:o="/",search:u="",hash:s=""}=Ft(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ra("",{pathname:o,search:u,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(l,i){let o=l.document.querySelector("base"),u="";if(o&&o.getAttribute("href")){let s=l.location.href,c=s.indexOf("#");u=c===-1?s:s.slice(0,c)}return u+"#"+(typeof i=="string"?i:pl(i))}function r(l,i){Tl(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Fm(t,n,r,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Dm(){return Math.random().toString(36).substr(2,8)}function ys(e,t){return{usr:e.state,key:e.key,idx:t}}function ra(e,t,n,r){return n===void 0&&(n=null),lr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ft(t):t,{state:n,key:t&&t.key||r||Dm()})}function pl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ft(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fm(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,u=ot.Pop,s=null,c=h();c==null&&(c=0,o.replaceState(lr({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){u=ot.Pop;let S=h(),f=S==null?null:S-c;c=S,s&&s({action:u,location:w.location,delta:f})}function g(S,f){u=ot.Push;let d=ra(w.location,S,f);n&&n(d,S),c=h()+1;let p=ys(d,c),v=w.createHref(d);try{o.pushState(p,"",v)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;l.location.assign(v)}i&&s&&s({action:u,location:w.location,delta:1})}function y(S,f){u=ot.Replace;let d=ra(w.location,S,f);n&&n(d,S),c=h();let p=ys(d,c),v=w.createHref(d);o.replaceState(p,"",v),i&&s&&s({action:u,location:w.location,delta:0})}function x(S){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof S=="string"?S:pl(S);return d=d.replace(/ $/,"%20"),J(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return u},get location(){return e(l,o)},listen(S){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(vs,m),s=S,()=>{l.removeEventListener(vs,m),s=null}},createHref(S){return t(l,S)},createURL:x,encodeLocation(S){let f=x(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(S){return o.go(S)}};return w}var xs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xs||(xs={}));function Bm(e,t,n){return n===void 0&&(n="/"),Om(e,t,n)}function Om(e,t,n,r){let l=typeof t=="string"?Ft(t):t,i=no(l.pathname||"/",n);if(i==null)return null;let o=Bc(e);Um(o);let u=null,s=Ym(i);for(let c=0;u==null&&c<o.length;++c)u=Jm(o[c],s);return u}function Bc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,u)=>{let s={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(J(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=gt([r,s.relativePath]),h=n.concat(s);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Bc(i.children,t,h,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Qm(c,i.index),routesMeta:h})};return e.forEach((i,o)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))l(i,o);else for(let s of Oc(i.path))l(i,o,s)}),t}function Oc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Oc(r.join("/")),u=[];return u.push(...o.map(s=>s===""?i:[i,s].join("/"))),l&&u.push(...o),u.map(s=>e.startsWith("/")&&s===""?"/":s)}function Um(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hm=/^:[\w-]+$/,Wm=3,Gm=2,Vm=1,$m=10,Zm=-2,ws=e=>e==="*";function Qm(e,t){let n=e.split("/"),r=n.length;return n.some(ws)&&(r+=Zm),t&&(r+=Gm),n.filter(l=>!ws(l)).reduce((l,i)=>l+(Hm.test(i)?Wm:i===""?Vm:$m),r)}function qm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Jm(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let u=0;u<r.length;++u){let s=r[u],c=u===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",m=Km({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},h),g=s.route;if(!m)return null;Object.assign(l,m.params),o.push({params:l,pathname:gt([i,m.pathname]),pathnameBase:lp(gt([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=gt([i,m.pathnameBase]))}return o}function Km(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Xm(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let w=u[m]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=u[m];return y&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Xm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,s)=>(r.push({paramName:u,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Ym(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function no(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ep=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tp=e=>ep.test(e);function np(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Ft(e):e,i;if(n)if(tp(n))i=n;else{if(n.includes("//")){let o=n;n=Wc(n),Tl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=ks(n.substring(1),"/"):i=ks(n,t)}else i=t;return{pathname:i,search:ip(r),hash:ap(l)}}function ks(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ui(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Uc(e,t){let n=rp(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Ft(e):(l=lr({},e),J(!l.pathname||!l.pathname.includes("?"),ui("?","pathname","search",l)),J(!l.pathname||!l.pathname.includes("#"),ui("#","pathname","hash",l)),J(!l.search||!l.search.includes("#"),ui("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,u;if(o==null)u=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;l.pathname=g.join("/")}u=m>=0?t[m]:"/"}let s=np(l,u),c=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const Wc=e=>e.replace(/\/\/+/g,"/"),gt=e=>Wc(e.join("/")),lp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ip=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ap=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function op(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gc=["post","put","patch","delete"];new Set(Gc);const sp=["get",...Gc];new Set(sp);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(null,arguments)}const ro=N.createContext(null),up=N.createContext(null),Bt=N.createContext(null),Ml=N.createContext(null),Ot=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Vc=N.createContext(null);function cp(e,t){let{relative:n}=t===void 0?{}:t;dr()||J(!1);let{basename:r,navigator:l}=N.useContext(Bt),{hash:i,pathname:o,search:u}=Zc(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:gt([r,o])),l.createHref({pathname:s,search:u,hash:i})}function dr(){return N.useContext(Ml)!=null}function vn(){return dr()||J(!1),N.useContext(Ml).location}function $c(e){N.useContext(Bt).static||N.useLayoutEffect(e)}function dp(){let{isDataRoute:e}=N.useContext(Ot);return e?Sp():fp()}function fp(){dr()||J(!1);let e=N.useContext(ro),{basename:t,future:n,navigator:r}=N.useContext(Bt),{matches:l}=N.useContext(Ot),{pathname:i}=vn(),o=JSON.stringify(Uc(l,n.v7_relativeSplatPath)),u=N.useRef(!1);return $c(()=>{u.current=!0}),N.useCallback(function(c,h){if(h===void 0&&(h={}),!u.current)return;if(typeof c=="number"){r.go(c);return}let m=Hc(c,JSON.parse(o),i,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:gt([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,o,i,e])}function Zc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(Bt),{matches:l}=N.useContext(Ot),{pathname:i}=vn(),o=JSON.stringify(Uc(l,r.v7_relativeSplatPath));return N.useMemo(()=>Hc(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function mp(e,t){return pp(e,t)}function pp(e,t,n,r){dr()||J(!1);let{navigator:l}=N.useContext(Bt),{matches:i}=N.useContext(Ot),o=i[i.length-1],u=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=vn(),h;if(t){var m;let S=typeof t=="string"?Ft(t):t;s==="/"||(m=S.pathname)!=null&&m.startsWith(s)||J(!1),h=S}else h=c;let g=h.pathname||"/",y=g;if(s!=="/"){let S=s.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=Bm(e,{pathname:y}),w=xp(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},u,S.params),pathname:gt([s,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:gt([s,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&w?N.createElement(Ml.Provider,{value:{location:ir({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ot.Pop}},w):w}function hp(){let e=jp(),t=op(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:l},n):null,null)}const gp=N.createElement(hp,null);class vp extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(Ot.Provider,{value:this.props.routeContext},N.createElement(Vc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yp(e){let{routeContext:t,match:n,children:r}=e,l=N.useContext(ro);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Ot.Provider,{value:t},r)}function xp(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,u=(l=n)==null?void 0:l.errors;if(u!=null){let h=o.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);h>=0||J(!1),o=o.slice(0,Math.min(o.length,h+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:y}=n,x=m.route.loader&&g[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,g)=>{let y,x=!1,w=null,S=null;n&&(y=u&&m.route.id?u[m.route.id]:void 0,w=m.route.errorElement||gp,s&&(c<0&&g===0?(bp("route-fallback"),x=!0,S=null):c===g&&(x=!0,S=m.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),d=()=>{let p;return y?p=w:x?p=S:m.route.Component?p=N.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,N.createElement(yp,{match:m,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?N.createElement(vp,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Qc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qc||{}),qc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qc||{});function wp(e){let t=N.useContext(ro);return t||J(!1),t}function kp(e){let t=N.useContext(up);return t||J(!1),t}function Np(e){let t=N.useContext(Ot);return t||J(!1),t}function Jc(e){let t=Np(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function jp(){var e;let t=N.useContext(Vc),n=kp(),r=Jc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Sp(){let{router:e}=wp(Qc.UseNavigateStable),t=Jc(qc.UseNavigateStable),n=N.useRef(!1);return $c(()=>{n.current=!0}),N.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,ir({fromRouteId:t},i)))},[e,t])}const Ns={};function bp(e,t,n){Ns[e]||(Ns[e]=!0)}function Cp(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function et(e){J(!1)}function Ip(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ot.Pop,navigator:i,static:o=!1,future:u}=e;dr()&&J(!1);let s=t.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:s,navigator:i,static:o,future:ir({v7_relativeSplatPath:!1},u)}),[s,u,i,o]);typeof r=="string"&&(r=Ft(r));let{pathname:h="/",search:m="",hash:g="",state:y=null,key:x="default"}=r,w=N.useMemo(()=>{let S=no(h,s);return S==null?null:{location:{pathname:S,search:m,hash:g,state:y,key:x},navigationType:l}},[s,h,m,g,y,x,l]);return w==null?null:N.createElement(Bt.Provider,{value:c},N.createElement(Ml.Provider,{children:n,value:w}))}function Ep(e){let{children:t,location:n}=e;return mp(la(t),n)}new Promise(()=>{});function la(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,l)=>{if(!N.isValidElement(r))return;let i=[...t,l];if(r.type===N.Fragment){n.push.apply(n,la(r.props.children,i));return}r.type!==et&&J(!1),!r.props.index||!r.props.children||J(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=la(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ia.apply(null,arguments)}function zp(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Pp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lp(e,t){return e.button===0&&(!t||t==="_self")&&!Pp(e)}const Tp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Mp="6";try{window.__reactRouterVersion=Mp}catch{}const Rp="startTransition",js=jd[Rp];function _p(e){let{basename:t,children:n,future:r,window:l}=e,i=N.useRef();i.current==null&&(i.current=Am({window:l,v5Compat:!0}));let o=i.current,[u,s]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=N.useCallback(m=>{c&&js?js(()=>s(m)):s(m)},[s,c]);return N.useLayoutEffect(()=>o.listen(h),[o,h]),N.useEffect(()=>Cp(r),[r]),N.createElement(Ip,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:o,future:r})}const Ap=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z=N.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:u,target:s,to:c,preventScrollReset:h,viewTransition:m}=t,g=zp(t,Tp),{basename:y}=N.useContext(Bt),x,w=!1;if(typeof c=="string"&&Dp.test(c)&&(x=c,Ap))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=no(v.pathname,y);v.origin===p.origin&&j!=null?c=j+v.search+v.hash:w=!0}catch{}let S=cp(c,{relative:l}),f=Fp(c,{replace:o,state:u,target:s,preventScrollReset:h,relative:l,viewTransition:m});function d(p){r&&r(p),p.defaultPrevented||f(p)}return N.createElement("a",ia({},g,{href:x||S,onClick:w||i?r:d,ref:n,target:s}))});var Ss;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ss||(Ss={}));var bs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bs||(bs={}));function Fp(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:u}=t===void 0?{}:t,s=dp(),c=vn(),h=Zc(e,{relative:o});return N.useCallback(m=>{if(Lp(m,n)){m.preventDefault();let g=r!==void 0?r:pl(c)===pl(h);s(e,{replace:g,state:l,preventScrollReset:i,relative:o,viewTransition:u})}},[c,s,h,r,l,n,e,i,o,u])}/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(e,t)=>{const n=N.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:u="",children:s,...c},h)=>N.createElement("svg",{ref:h,...Bp,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Op(e)}`,u].join(" "),...c},[...t.map(([m,g])=>N.createElement(m,g)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=A("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=A("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=A("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=A("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=A("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=A("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=A("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=A("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=A("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=A("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=A("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=A("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=A("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=A("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=A("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=A("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=A("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=A("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=A("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=A("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=A("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=A("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=A("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=A("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=A("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=A("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=A("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=A("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),nd="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgMzIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICA8IS0tIERlZmluaXRpb24gb2YgZ3JhZGllbnRzIGlmIG5lZWRlZCAtLT4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ29sZEdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGRUFCNSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNDOUE4NEMiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzlCN0UzMCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgoKICA8IS0tIEdyb3VwIGZvciBMb2dvIEljb24gLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAwLCA3NSkiIGlkPSJsb2dvLWljb24iPgogICAgPCEtLSBHbG9iZSBsaW5lcyAoaW5zaWRlIHRoZSBwb2QpIC0tPgogICAgPCEtLSBDbGlwIHBhdGggdG8ga2VlcCBnbG9iZSBpbnNpZGUgdGhlIHBvZCBzaGFwZSAtLT4KICAgIDxjbGlwUGF0aCBpZD0icG9kQ2xpcCI+CiAgICAgIDxwYXRoIGQ9Ik0gLTkwLC01IEMgLTQ1LC01NSA0NSwtNTUgOTAsLTUgQyA1MCw0NSAtNTAsNDUgLTkwLC01IFoiIC8+CiAgICA8L2NsaXBQYXRoPgoKICAgIDwhLS0gR2xvYmUgR3JpZCBMaW5lcyAoQ2xpcHBlZCkgLS0+CiAgICA8ZyBjbGlwLXBhdGg9InVybCgjcG9kQ2xpcCkiPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iLTUiIHI9IjQ1IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjZ29sZEdyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjMiIC8+CiAgICAgIDwhLS0gTGF0aXR1ZGUgbGluZXMgLS0+CiAgICAgIDxsaW5lIHgxPSItOTAiIHkxPSItMTUiIHgyPSI5MCIgeTI9Ii0xNSIgc3Ryb2tlPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMC43NSIgb3BhY2l0eT0iMC40IiAvPgogICAgICA8bGluZSB4MT0iLTkwIiB5MT0iNSIgeDI9IjkwIiB5Mj0iNSIgc3Ryb2tlPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMC43NSIgb3BhY2l0eT0iMC40IiAvPgogICAgICA8bGluZSB4MT0iLTkwIiB5MT0iLTMwIiB4Mj0iOTAiIHkyPSItMzAiIHN0cm9rZT0idXJsKCNnb2xkR3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjAuNzUiIG9wYWNpdHk9IjAuNCIgLz4KICAgICAgPGxpbmUgeDE9Ii05MCIgeTE9IjIwIiB4Mj0iOTAiIHkyPSIyMCIgc3Ryb2tlPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMC43NSIgb3BhY2l0eT0iMC40IiAvPgogICAgICA8IS0tIExvbmdpdHVkZSBjdXJ2ZXMgLS0+CiAgICAgIDxwYXRoIGQ9Ik0gMCwtNTAgUSAtMjUsLTUgMCw0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMC43NSIgb3BhY2l0eT0iMC40IiAvPgogICAgICA8cGF0aCBkPSJNIDAsLTUwIFEgMjUsLTUgMCw0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMC43NSIgb3BhY2l0eT0iMC40IiAvPgogICAgICA8cGF0aCBkPSJNIDAsLTUwIFEgLTUwLC01IDAsNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNnb2xkR3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjAuNzUiIG9wYWNpdHk9IjAuNCIgLz4KICAgICAgPHBhdGggZD0iTSAwLC01MCBRIDUwLC01IDAsNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNnb2xkR3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjAuNzUiIG9wYWNpdHk9IjAuNCIgLz4KICAgICAgPGxpbmUgeDE9IjAiIHkxPSItNTAiIHgyPSIwIiB5Mj0iNDAiIHN0cm9rZT0idXJsKCNnb2xkR3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjAuNzUiIG9wYWNpdHk9IjAuNCIgLz4KICAgIDwvZz4KCiAgICA8IS0tIENhcmRhbW9tIFBvZCBPdXRlciBTaGVsbCAmIEZvbGRzIC0tPgogICAgPCEtLSBQb2ludGVkIHRpcHMgb2YgY2FyZGFtb20gcG9kIC0tPgogICAgPHBhdGggZD0iTSAtOTAsLTUgQyAtNDUsLTU1IDQ1LC01NSA5MCwtNSBDIDUwLDQ1IC01MCw0NSAtOTAsLTUgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgogICAgCiAgICA8IS0tIFJpYnMvRm9sZHMgb2YgdGhlIHBvZCAtLT4KICAgIDxwYXRoIGQ9Ik0gLTkwLC01IEMgLTQwLC0yNSA0MCwtMjUgOTAsLTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNnb2xkR3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iMiAxIiAvPgogICAgPHBhdGggZD0iTSAtOTAsLTUgQyAtNDAsMTUgNDAsMTUgOTAsLTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNnb2xkR3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iMiAxIiAvPgogICAgCiAgICA8IS0tIExpdHRsZSBkZXRhaWxzIGF0IHRoZSB0aXBzIG9mIHRoZSBwb2QgLS0+CiAgICA8cGF0aCBkPSJNIC05MCwtNSBMIC0xMDUsLTggTSAtOTAsLTUgTCAtMTAwLC0yIE0gLTkwLC01IEwgLTEwMywyIiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjZ29sZEdyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHBhdGggZD0iTSA5MCwtNSBMIDEwNSwtMiBNIDkwLC01IEwgMTAwLC04IE0gOTAsLTUgTCAxMDMsMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMiIgLz4KICA8L2c+CgogIDwhLS0gV29yZG1hcmsgIkNhcmRhcHVyZSIgLS0+CiAgPHRleHQgeD0iNDAwIiB5PSIyMTAiIGZvbnQtZmFtaWx5PSInQ29ybW9yYW50IEdhcmFtb25kJywgR2FyYW1vbmQsIHNlcmlmIiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ1cmwoI2dvbGRHcmFkaWVudCkiIGxldHRlci1zcGFjaW5nPSIyIj5DYXJkYXB1cmU8L3RleHQ+CiAgCiAgPCEtLSAiU3BpY2VzIiBTdWJ0aXRsZSAtLT4KICA8bGluZSB4MT0iMjgwIiB5MT0iMjQ1IiB4Mj0iMzUwIiB5Mj0iMjQ1IiBzdHJva2U9InVybCgjZ29sZEdyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNiIgLz4KICA8dGV4dCB4PSI0MDAiIHk9IjI1MCIgZm9udC1mYW1pbHk9IidNb250c2VycmF0JywgJ0ludGVyJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjYwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0idXJsKCNnb2xkR3JhZGllbnQpIiBsZXR0ZXItc3BhY2luZz0iMTAiPlNQSUNFUzwvdGV4dD4KICA8bGluZSB4MT0iNDUwIiB5MT0iMjQ1IiB4Mj0iNTIwIiB5Mj0iMjQ1IiBzdHJva2U9InVybCgjZ29sZEdyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNiIgLz4KCiAgPCEtLSAiRlJPTSBJRFVLS0ksIEtFUkFMQSIgT3JpZ2luIC0tPgogIDx0ZXh0IHg9IjQwMCIgeT0iMjg1IiBmb250LWZhbWlseT0iJ01vbnRzZXJyYXQnLCAnSW50ZXInLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ1cmwoI2dvbGRHcmFkaWVudCkiIGxldHRlci1zcGFjaW5nPSI2IiBvcGFjaXR5PSIwLjgiPkZST00gSURVS0tJLCBLRVJBTEE8L3RleHQ+Cjwvc3ZnPgo=";function ih(){const[e,t]=N.useState(!1),[n,r]=N.useState(!1),l=vn();N.useEffect(()=>{const o=()=>{window.scrollY>20?r(!0):r(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),N.useEffect(()=>{t(!1),window.scrollTo(0,0)},[l]);const i=[{name:"Home",path:"/"},{name:"About Us",path:"/about"},{name:"Products",path:"/products"},{name:"Our Story",path:"/story"},{name:"Export",path:"/export"},{name:"Blog",path:"/blog"},{name:"Contact",path:"/contact"}];return a.jsxs(a.Fragment,{children:[a.jsx("header",{className:`header ${n?"scrolled":""}`,children:a.jsxs("div",{className:"container header-container",children:[a.jsx(Z,{to:"/",className:"logo-link",children:a.jsx("img",{src:nd,alt:"Cardapure Logo",className:"header-logo"})}),a.jsx("nav",{className:"desktop-nav",children:i.map(o=>a.jsx(Z,{to:o.path,className:`nav-link ${l.pathname===o.path?"active":""}`,children:o.name},o.name))}),a.jsx("div",{className:"header-cta",children:a.jsxs(Z,{to:"/export",className:"btn btn-secondary btn-header-cta",children:["Export Enquiry ",a.jsx(aa,{size:14,style:{marginLeft:"4px"}})]})}),a.jsx("button",{className:"mobile-menu-btn",onClick:()=>t(!e),"aria-label":"Toggle menu",children:e?a.jsx(lh,{size:24}):a.jsx(Kp,{size:24})})]})}),a.jsx("div",{className:`mobile-nav-drawer ${e?"open":""}`,children:a.jsxs("div",{className:"mobile-nav-content",children:[a.jsxs("nav",{className:"mobile-links",children:[i.map(o=>a.jsx(Z,{to:o.path,className:`mobile-link ${l.pathname===o.path?"active":""}`,children:o.name},o.name)),a.jsxs(Z,{to:"/export",className:"btn btn-primary mobile-cta",children:["Export Enquiry ",a.jsx(aa,{size:14,style:{marginLeft:"4px"}})]})]}),a.jsxs("div",{className:"mobile-drawer-footer",children:[a.jsx("p",{className:"footer-copyright",children:"Cardapure Spices © 2026"}),a.jsx("p",{className:"footer-location",children:"Idukki, Kerala, India"})]})]})}),a.jsx("style",{children:`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 1.5rem 0;
          border-bottom: 1px solid transparent;
        }

        .header.scrolled {
          padding: 0.75rem 0;
          background: rgba(13, 13, 13, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(201, 168, 76, 0.1);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-link {
          display: flex;
          align-items: center;
          height: 50px;
        }

        .header-logo {
          height: 100%;
          width: auto;
          object-fit: contain;
          transition: all 0.4s ease;
        }

        .header.scrolled .header-logo {
          height: 42px;
        }

        .desktop-nav {
          display: flex;
          gap: 2.25rem;
        }

        .nav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(250, 247, 240, 0.7);
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--matte-gold);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--matte-gold);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .btn-header-cta {
          padding: 0.6rem 1.25rem;
          font-size: 0.7rem;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--cream-white);
          cursor: pointer;
        }

        /* Mobile nav drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: var(--warm-black);
          z-index: 999;
          transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          padding-top: 8rem;
          border-left: 1px solid rgba(201, 168, 76, 0.15);
        }

        .mobile-nav-drawer.open {
          right: 0;
        }

        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          padding: 2rem;
          max-width: 500px;
          margin-left: auto;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.25rem;
          color: rgba(250, 247, 240, 0.8);
          border-bottom: 1px solid rgba(250, 247, 240, 0.05);
          padding-bottom: 0.5rem;
        }

        .mobile-link.active, .mobile-link:hover {
          color: var(--matte-gold);
          padding-left: 0.5rem;
        }

        .mobile-cta {
          margin-top: 1rem;
          width: 100%;
        }

        .mobile-drawer-footer {
          border-top: 1px solid rgba(201, 168, 76, 0.1);
          padding-top: 2rem;
          margin-bottom: 4rem;
        }

        .mobile-drawer-footer p {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-bottom: 0.5rem;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .desktop-nav, .header-cta {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `})]})}function ah(){const e=t=>{t.preventDefault(),alert("Thank you for subscribing to Cardapure updates.")};return a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"container footer-top",children:[a.jsxs("div",{className:"footer-brand-col",children:[a.jsx(Z,{to:"/",className:"footer-logo-link",children:a.jsx("img",{src:nd,alt:"Cardapure Logo",className:"footer-logo"})}),a.jsx("p",{className:"footer-brand-desc",children:`"The World's Finest. From Where It Begins."`}),a.jsx("p",{className:"footer-origin-text",children:"Sourced directly from our family farm and fellow spice growers in the misty mountains of Idukki, Kerala. No middlemen, no compromise."})]}),a.jsxs("div",{className:"footer-links-col",children:[a.jsx("h4",{className:"footer-col-title",children:"Navigation"}),a.jsxs("ul",{className:"footer-links-list",children:[a.jsx("li",{children:a.jsx(Z,{to:"/",children:"Home"})}),a.jsx("li",{children:a.jsx(Z,{to:"/about",children:"About Us"})}),a.jsx("li",{children:a.jsx(Z,{to:"/products",children:"Our Products"})}),a.jsx("li",{children:a.jsx(Z,{to:"/story",children:"Our Story"})}),a.jsx("li",{children:a.jsx(Z,{to:"/export",children:"B2B Export"})}),a.jsx("li",{children:a.jsx(Z,{to:"/blog",children:"Spice Journal"})}),a.jsx("li",{children:a.jsx(Z,{to:"/contact",children:"Contact"})})]})]}),a.jsxs("div",{className:"footer-contact-col",children:[a.jsx("h4",{className:"footer-col-title",children:"Origin & Contact"}),a.jsxs("ul",{className:"footer-contact-list",children:[a.jsxs("li",{children:[a.jsx(ed,{size:16,className:"contact-icon"}),a.jsx("span",{children:"Idukki Hills, Kerala, 685602, India"})]}),a.jsxs("li",{children:[a.jsx(Yc,{size:16,className:"contact-icon"}),a.jsx("a",{href:"mailto:info@cardapure.com",children:"info@cardapure.com"})]}),a.jsxs("li",{children:[a.jsx(td,{size:16,className:"contact-icon"}),a.jsx("a",{href:"https://wa.me/919400000000",target:"_blank",rel:"noreferrer",children:"+91 94000 00000 (WhatsApp)"})]})]}),a.jsxs("div",{className:"footer-marketplaces",children:[a.jsx("h5",{className:"marketplace-title",children:"Shop Online"}),a.jsxs("div",{className:"marketplace-links",children:[a.jsxs("a",{href:"https://amazon.in",target:"_blank",rel:"noreferrer",className:"marketplace-link",children:["Amazon India ",a.jsx(hl,{size:12})]}),a.jsxs("a",{href:"https://flipkart.com",target:"_blank",rel:"noreferrer",className:"marketplace-link",children:["Flipkart ",a.jsx(hl,{size:12})]})]})]})]}),a.jsxs("div",{className:"footer-newsletter-col",children:[a.jsx("h4",{className:"footer-col-title",children:"Newsletter"}),a.jsx("p",{className:"newsletter-desc",children:"Subscribe to receive origin stories, spice guides, and exclusive offers."}),a.jsxs("form",{className:"newsletter-form",onSubmit:e,children:[a.jsx("input",{type:"email",placeholder:"Your email address",className:"newsletter-input",required:!0}),a.jsx("button",{type:"submit",className:"newsletter-submit-btn","aria-label":"Subscribe",children:a.jsx(eh,{size:16})})]})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsxs("div",{className:"container footer-bottom-container",children:[a.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," Cardapure Spices. All Rights Reserved."]}),a.jsxs("div",{className:"footer-bottom-links",children:[a.jsx("a",{href:"#privacy",children:"Privacy Policy"}),a.jsx("span",{className:"bullet-sep",children:"•"}),a.jsx("a",{href:"#terms",children:"Terms of Export"})]})]})}),a.jsx("style",{children:`
        .footer {
          background-color: var(--warm-black);
          border-top: 1px solid rgba(201, 168, 76, 0.1);
          color: var(--text-primary);
          padding: 6rem 0 2rem 0;
          font-family: 'Inter', sans-serif;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .footer-logo-link {
          display: inline-block;
          height: 50px;
          margin-bottom: 1.5rem;
        }

        .footer-logo {
          height: 100%;
          width: auto;
        }

        .footer-brand-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: var(--font-lg);
          color: var(--matte-gold);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .footer-origin-text {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
        }

        .footer-col-title {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--matte-gold);
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 24px;
          height: 1px;
          background-color: var(--matte-gold);
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links-list a {
          font-size: var(--font-sm);
          color: var(--text-muted);
        }

        .footer-links-list a:hover {
          color: var(--matte-gold);
          padding-left: 4px;
        }

        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.5;
        }

        .contact-icon {
          color: var(--matte-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-contact-list a:hover {
          color: var(--matte-gold);
        }

        .footer-marketplaces {
          border-top: 1px solid rgba(250, 247, 240, 0.05);
          padding-top: 1.5rem;
        }

        .marketplace-title {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .marketplace-links {
          display: flex;
          gap: 1rem;
        }

        .marketplace-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          border: 1px solid rgba(250, 247, 240, 0.1);
          padding: 0.4rem 0.8rem;
          transition: all 0.3s ease;
        }

        .marketplace-link:hover {
          border-color: var(--matte-gold);
          color: var(--matte-gold);
        }

        .newsletter-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .newsletter-form {
          display: flex;
          border-bottom: 1px solid rgba(201, 168, 76, 0.3);
          padding-bottom: 0.5rem;
          transition: border-color 0.3s ease;
        }

        .newsletter-form:focus-within {
          border-color: var(--matte-gold);
        }

        .newsletter-input {
          background: transparent;
          border: none;
          color: var(--cream-white);
          flex-grow: 1;
          font-size: var(--font-sm);
          outline: none;
          padding: 0.5rem 0;
        }

        .newsletter-input::placeholder {
          color: rgba(250, 247, 240, 0.3);
        }

        .newsletter-submit-btn {
          background: transparent;
          border: none;
          color: var(--matte-gold);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .newsletter-submit-btn:hover {
          transform: translateX(4px);
        }

        .footer-bottom {
          margin-top: 5rem;
          border-top: 1px solid rgba(250, 247, 240, 0.05);
          padding-top: 2rem;
        }

        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: var(--text-dim);
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .footer-bottom-container {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }

        .footer-bottom-links a {
          color: var(--text-dim);
        }

        .footer-bottom-links a:hover {
          color: var(--matte-gold);
        }

        .bullet-sep {
          margin: 0 0.75rem;
        }
      `})]})}const oh=""+new URL("cardamom_3d-DXFCr1-W.png",import.meta.url).href;function sh(){const e=N.useRef(null),t=N.useRef([]),n=[{id:"right-hero-focal",flipped:!1,style:{top:"38%",right:"16%",width:"240px",height:"240px",zIndex:16,filter:"drop-shadow(0 20px 30px rgba(0,0,0,0.55))",opacity:.98},speed:.28,rotSpeed:.05,baseRotation:-28},{id:"right-mid-lower",flipped:!0,style:{top:"64%",right:"26%",width:"170px",height:"170px",zIndex:15,filter:"drop-shadow(0 15px 25px rgba(0,0,0,0.5))",opacity:.95},speed:.35,rotSpeed:-.07,baseRotation:65},{id:"right-foreground-bokeh",flipped:!1,style:{top:"20%",right:"-4%",width:"350px",height:"350px",zIndex:25,filter:"blur(7.5px) drop-shadow(0 30px 45px rgba(0,0,0,0.7))",opacity:.88},speed:-.75,rotSpeed:.09,baseRotation:35},{id:"right-lower-bokeh",flipped:!0,style:{top:"76%",right:"4%",width:"260px",height:"260px",zIndex:24,filter:"blur(5px) drop-shadow(0 25px 35px rgba(0,0,0,0.6))",opacity:.82},speed:-.5,rotSpeed:-.06,baseRotation:-50},{id:"right-upper-depth",flipped:!0,style:{top:"10%",right:"28%",width:"120px",height:"120px",zIndex:4,filter:"blur(2px) drop-shadow(0 8px 15px rgba(0,0,0,0.4))",opacity:.65},speed:.12,rotSpeed:-.03,baseRotation:-80},{id:"center-depth-mist",flipped:!1,style:{top:"48%",right:"42%",width:"95px",height:"95px",zIndex:3,filter:"blur(2.5px) drop-shadow(0 6px 12px rgba(0,0,0,0.35))",opacity:.55},speed:.08,rotSpeed:.04,baseRotation:15},{id:"top-center-drift",flipped:!0,style:{top:"4%",left:"46%",width:"105px",height:"105px",zIndex:3,filter:"blur(3px) drop-shadow(0 8px 14px rgba(0,0,0,0.35))",opacity:.5},speed:.15,rotSpeed:-.02,baseRotation:40},{id:"top-left-corner-bokeh",flipped:!1,style:{top:"-6%",left:"-4%",width:"320px",height:"320px",zIndex:25,filter:"blur(8px) drop-shadow(0 30px 40px rgba(0,0,0,0.65))",opacity:.8},speed:-.7,rotSpeed:.08,baseRotation:20},{id:"bottom-left-corner",flipped:!0,style:{top:"84%",left:"5%",width:"180px",height:"180px",zIndex:15,filter:"drop-shadow(0 15px 25px rgba(0,0,0,0.5))",opacity:.92},speed:.22,rotSpeed:-.05,baseRotation:120}];return N.useEffect(()=>{let r=!1;const l=()=>{r||(window.requestAnimationFrame(()=>{const i=window.scrollY;t.current.forEach((o,u)=>{if(!o)return;const s=n[u],c=i*s.speed,h=s.baseRotation+i*s.rotSpeed,m=s.flipped?-1:1;o.style.transform=`translate3d(0, ${c}px, 0) rotate(${h}deg) scaleX(${m})`}),r=!1}),r=!0)};return window.addEventListener("scroll",l,{passive:!0}),l(),()=>window.removeEventListener("scroll",l)},[]),a.jsxs("div",{className:"parallax-cardamom-container",ref:e,children:[n.map((r,l)=>a.jsx("div",{ref:i=>t.current[l]=i,className:"parallax-pod",style:{position:"absolute",pointerEvents:"none",transition:"transform 0.1s cubic-bezier(0.1, 0.8, 0.2, 1)",willChange:"transform",...r.style},children:a.jsx("img",{src:oh,alt:"Floating Cardamom Pod",className:"pod-img",style:{width:"100%",height:"100%",objectFit:"contain",userSelect:"none",pointerEvents:"none"}})},r.id)),a.jsx("style",{children:`
        .parallax-cardamom-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 12;
          pointer-events: none;
          overflow: hidden;
        }

        .parallax-pod {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pod-img {
          display: block;
        }
      `})]})}const uh=""+new URL("hero_plantation-3Iw_s3q6.png",import.meta.url).href,oa=""+new URL("product_whole-BQ30DCS7.png",import.meta.url).href,rd=""+new URL("product_powder-BSff-aJb.png",import.meta.url).href,ld=""+new URL("product_gift-D5krg-_T.png",import.meta.url).href;function ch(){const[e,t]=N.useState(0),n=[{quote:"Finding single-origin Idukki cardamom of this grading has been nearly impossible in Dubai. The aroma of Cardapure is intense and instantly takes me back home. Truly premium quality.",author:"Farhaan Al-Mansoori",role:"Specialty Food Importer, Dubai",stars:5},{quote:"We use Cardapure's whole pods in our artisanal pastry kitchen. The grading is impeccable—every pod is plump, bright green, and bursting with oils. Our customers notice the difference.",author:"Chef Anjali Nair",role:"Executive Pastry Chef, Mumbai",stars:5},{quote:"The rigid gift box is absolutely gorgeous. I ordered 50 boxes for corporate gifting during Diwali, and the feedback was phenomenal. It's a luxury product at an honest price.",author:"Vikram R. Shah",role:"Managing Director, Tech Solutions",stars:5}],r=()=>{t(i=>i===0?n.length-1:i-1)},l=()=>{t(i=>i===n.length-1?0:i+1)};return N.useEffect(()=>{const i=setInterval(()=>{l()},8e3);return()=>clearInterval(i)},[]),N.useEffect(()=>{const i=document.querySelectorAll(".reveal"),o=()=>{for(let u=0;u<i.length;u++){const s=window.innerHeight;i[u].getBoundingClientRect().top<s-150&&i[u].classList.add("active")}};return window.addEventListener("scroll",o),o(),()=>window.removeEventListener("scroll",o)},[]),a.jsxs("div",{className:"home-page",children:[a.jsxs("section",{className:"hero-section",style:{backgroundImage:`url(${uh})`},children:[a.jsx("div",{className:"hero-overlay"}),a.jsx(sh,{}),a.jsx("div",{className:"container hero-container",children:a.jsxs("div",{className:"hero-content animate-fade-in-up",children:[a.jsx("span",{className:"hero-subtitle",children:"Single-Origin Premium Spices"}),a.jsxs("h1",{className:"hero-title text-gradient-gold",children:["The World's Finest.",a.jsx("br",{}),"From Where It Begins."]}),a.jsx("p",{className:"hero-desc",children:"Directly from the high-altitude, mist-covered hills of Idukki, Kerala. Farm-to-kitchen cardamom of matchless grade, aroma, and purity."}),a.jsxs("div",{className:"hero-ctas",children:[a.jsx(Z,{to:"/products",className:"btn btn-primary pulse-gold",children:"Shop Collection"}),a.jsxs(Z,{to:"/export",className:"btn btn-secondary",children:["Export Enquiry ",a.jsx(lo,{size:14,style:{marginLeft:"6px"}})]})]})]})}),a.jsxs("div",{className:"hero-scroll-indicator",children:[a.jsx("span",{className:"scroll-text",children:"Discover Cardapure"}),a.jsx("div",{className:"scroll-line"})]})]}),a.jsx("section",{className:"section intro-section luxury-bg-gradient",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"intro-grid",children:[a.jsxs("div",{className:"intro-text-block reveal",children:[a.jsx("span",{className:"section-pretitle",children:"The Cardapure Promise"}),a.jsx("h2",{className:"section-title",children:"Generations of Green, Delivered Pure."}),a.jsx("p",{className:"intro-p-large",children:"We believe that premium quality shouldn't be a gatekept luxury. In the hills of Idukki, nature perfects every cardamom pod. We simply ensure it reaches you untouched, unsullied, and fresh."}),a.jsx("p",{className:"font-script intro-script",children:'"From our farm to your kitchen — nothing in between."'}),a.jsx(Z,{to:"/about",className:"btn btn-secondary intro-btn",children:"Our Sourcing Story"})]}),a.jsxs("div",{className:"intro-info-card glass-card reveal",children:[a.jsx("h3",{className:"card-title text-gold",children:"Why Idukki?"}),a.jsx("p",{className:"card-text",children:"Idukki is to cardamom what Champagne is to sparkling wine. Nestled 1,200 meters above sea level in the Western Ghats, the cool climate, rich forest soil, and persistent mountain mist provide the perfect cradle for cardamom containing the world's highest concentration of natural essential oils."}),a.jsxs("ul",{className:"card-features",children:[a.jsx("li",{children:a.jsx("span",{children:"✦ High Essential Oil Content"})}),a.jsx("li",{children:a.jsx("span",{children:"✦ Deep, Vibrant Green Pods"})}),a.jsx("li",{children:a.jsx("span",{children:"✦ Hand-selected 8mm+ Jumbo Grade"})})]})]})]})})}),a.jsx("section",{className:"section products-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header reveal",children:[a.jsx("span",{className:"section-pretitle",children:"Our Collection"}),a.jsx("h2",{className:"section-title text-center",children:"Pure Cardamom Variants"}),a.jsx("div",{className:"section-divider"})]}),a.jsxs("div",{className:"products-grid",children:[a.jsxs("div",{className:"product-card glass-card reveal",children:[a.jsx("div",{className:"product-img-wrapper",children:a.jsx("img",{src:oa,alt:"Whole Green Cardamom",className:"product-img"})}),a.jsxs("div",{className:"product-info",children:[a.jsx("span",{className:"product-tag",children:"Best Seller"}),a.jsx("h3",{className:"product-name",children:"Whole Green Cardamom"}),a.jsx("p",{className:"product-desc",children:"Meticulously sorted, jumbo-sized 8mm pods with high oil concentration and intense fresh aroma."}),a.jsx("div",{className:"product-meta",children:a.jsx("span",{className:"product-specs",children:"Sizes: 50g, 100g, 250g, 1kg"})}),a.jsx(Z,{to:"/products",className:"btn btn-secondary product-btn",children:"View Packaging"})]})]}),a.jsxs("div",{className:"product-card glass-card reveal",children:[a.jsx("div",{className:"product-img-wrapper",children:a.jsx("img",{src:rd,alt:"Cardamom Powder",className:"product-img"})}),a.jsxs("div",{className:"product-info",children:[a.jsx("span",{className:"product-tag",children:"100% Pure"}),a.jsx("h3",{className:"product-name",children:"Fresh Ground Cardamom"}),a.jsx("p",{className:"product-desc",children:"Freshly milled from seed-rich pods. Cold-processed to preserve the volatile oils and aromatic profile."}),a.jsx("div",{className:"product-meta",children:a.jsx("span",{className:"product-specs",children:"Sizes: 50g, 100g, 250g"})}),a.jsx(Z,{to:"/products",className:"btn btn-secondary product-btn",children:"View Details"})]})]}),a.jsxs("div",{className:"product-card glass-card reveal",children:[a.jsx("div",{className:"product-img-wrapper",children:a.jsx("img",{src:ld,alt:"Luxury Gift Box",className:"product-img"})}),a.jsxs("div",{className:"product-info",children:[a.jsx("span",{className:"product-tag",children:"Gifting"}),a.jsx("h3",{className:"product-name",children:"The Heritage Rigid Gift Box"}),a.jsx("p",{className:"product-desc",children:"A beautiful matte-finish gold foil rigid box, containing premium assortments. Perfect for celebrations and corporate gifting."}),a.jsx("div",{className:"product-meta",children:a.jsx("span",{className:"product-specs",children:"Custom Engraving Available"})}),a.jsx(Z,{to:"/products",className:"btn btn-secondary product-btn",children:"Explore Gifting"})]})]})]})]})}),a.jsx("section",{className:"section pillars-section luxury-bg-gradient",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header reveal",children:[a.jsx("span",{className:"section-pretitle",children:"The Four Pillars"}),a.jsx("h2",{className:"section-title",children:"Built on Trust, Not Promises"}),a.jsx("div",{className:"section-divider"})]}),a.jsxs("div",{className:"pillars-grid",children:[a.jsxs("div",{className:"pillar-item reveal",children:[a.jsx("div",{className:"pillar-icon-wrapper",children:a.jsx(Jp,{size:24,className:"pillar-icon"})}),a.jsx("h3",{className:"pillar-title",children:"Idukki Origin"}),a.jsx("p",{className:"pillar-desc",children:"Not a commodity, but a single-origin geographical promise. Every single pod is tracked back to its estate."})]}),a.jsxs("div",{className:"pillar-item reveal",children:[a.jsx("div",{className:"pillar-icon-wrapper",children:a.jsx(io,{size:24,className:"pillar-icon"})}),a.jsx("h3",{className:"pillar-title",children:"Absolute Purity"}),a.jsx("p",{className:"pillar-desc",children:"No chemical colouring, artificial aroma enhancers, or moisture inflating. Certified organic and lab tested."})]}),a.jsxs("div",{className:"pillar-item reveal",children:[a.jsx("div",{className:"pillar-icon-wrapper",children:a.jsx(Kc,{size:24,className:"pillar-icon"})}),a.jsx("h3",{className:"pillar-title",children:"Generational Craft"}),a.jsx("p",{className:"pillar-desc",children:"Our sorting, washing, and temperature-sensitive drying is a legacy skill passed down through the family."})]}),a.jsxs("div",{className:"pillar-item reveal",children:[a.jsx("div",{className:"pillar-icon-wrapper",children:a.jsx(rh,{size:24,className:"pillar-icon"})}),a.jsx("h3",{className:"pillar-title",children:"Direct Sourcing"}),a.jsx("p",{className:"pillar-desc",children:"From our own plantations and closely knitted fellow growers. Eliminating middlemen keeps pricing fair."})]})]})]})}),a.jsx("section",{className:"section testimonials-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header reveal",children:[a.jsx("span",{className:"section-pretitle",children:"Client Trust"}),a.jsx("h2",{className:"section-title text-center",children:"What Connoisseurs Say"}),a.jsx("div",{className:"section-divider"})]}),a.jsxs("div",{className:"testimonial-slider-container glass-card reveal",children:[a.jsx("div",{className:"testimonial-slider",children:n.map((i,o)=>a.jsxs("div",{className:`testimonial-slide ${o===e?"active":""}`,children:[a.jsx("div",{className:"star-rating",children:[...Array(i.stars)].map((u,s)=>a.jsx(th,{size:16,fill:"var(--matte-gold)",color:"var(--matte-gold)"},s))}),a.jsxs("p",{className:"testimonial-quote",children:['"',i.quote,'"']}),a.jsxs("div",{className:"testimonial-author",children:[a.jsx("span",{className:"author-name",children:i.author}),a.jsx("span",{className:"author-role",children:i.role})]})]},o))}),a.jsxs("div",{className:"slider-controls",children:[a.jsx("button",{onClick:r,className:"slider-btn","aria-label":"Previous review",children:a.jsx(Hp,{size:20})}),a.jsx("div",{className:"slider-dots",children:n.map((i,o)=>a.jsx("button",{onClick:()=>t(o),className:`slider-dot ${o===e?"active":""}`,"aria-label":`Go to slide ${o+1}`},o))}),a.jsx("button",{onClick:l,className:"slider-btn","aria-label":"Next review",children:a.jsx(Wp,{size:20})})]})]})]})}),a.jsxs("section",{className:"export-cta-banner",children:[a.jsx("div",{className:"banner-overlay"}),a.jsxs("div",{className:"container banner-container reveal",children:[a.jsx("span",{className:"banner-subtitle",children:"B2B & Global Trade"}),a.jsx("h2",{className:"banner-title font-brand",children:"Supplying to Dubai, Bahrain & Europe"}),a.jsx("p",{className:"banner-desc",children:"We are fully certified for international exports. We offer customized bulk packaging, laboratory-verified quality sheets, and direct-from-origin logistics support."}),a.jsxs("div",{className:"banner-ctas",children:[a.jsx(Z,{to:"/export",className:"btn btn-primary",children:"Send Export Enquiry"}),a.jsx("a",{href:"https://wa.me/919400000000",target:"_blank",rel:"noreferrer",className:"btn btn-secondary",children:"WhatsApp Wholesale"})]})]})]}),a.jsx("style",{children:`
        /* Hero Section */
        .hero-section {
          height: 100vh;
          width: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          display: flex;
          align-items: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, 
            rgba(13, 13, 13, 0.6) 0%, 
            rgba(13, 13, 13, 0.8) 60%, 
            rgba(13, 13, 13, 1) 100%);
        }

        .hero-container {
          position: relative;
          z-index: 20;
        }

        .hero-content {
          max-width: 700px;
        }

        .hero-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--matte-gold);
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: var(--font-6xl);
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--font-4xl);
          }
        }

        .hero-desc {
          font-size: var(--font-lg);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .hero-desc {
            font-size: var(--font-base);
          }
        }

        .hero-ctas {
          display: flex;
          gap: 1.5rem;
        }

        @media (max-width: 480px) {
          .hero-ctas {
            flex-direction: column;
            gap: 1rem;
          }
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.6;
        }

        .scroll-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--text-muted);
        }

        .scroll-line {
          height: 50px;
          width: 1px;
          background: linear-gradient(180deg, var(--matte-gold) 0%, rgba(201, 168, 76, 0) 100%);
        }

        /* Intro Section */
        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .section-pretitle {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--matte-gold);
          display: block;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: var(--font-4xl);
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .intro-p-large {
          font-size: var(--font-lg);
          color: var(--text-muted);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }

        .intro-script {
          margin-bottom: 2.5rem;
        }

        .intro-info-card {
          padding: 3rem;
          border-left: 2px solid var(--matte-gold);
        }

        @media (max-width: 480px) {
          .intro-info-card {
            padding: 1.75rem;
          }
        }

        .card-title {
          font-size: var(--font-2xl);
          margin-bottom: 1.5rem;
        }

        .card-text {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .card-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .card-features li {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }

        .product-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .product-img-wrapper {
          aspect-ratio: 4/3;
          width: 100%;
          overflow: hidden;
          position: relative;
          background-color: #121212;
          border-bottom: 1px solid rgba(201, 168, 76, 0.1);
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product-card:hover .product-img {
          transform: scale(1.05);
        }

        .product-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .product-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--matte-gold);
          margin-bottom: 0.75rem;
        }

        .product-name {
          font-size: var(--font-xl);
          margin-bottom: 1rem;
        }

        .product-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .product-meta {
          border-top: 1px solid rgba(250, 247, 240, 0.05);
          padding-top: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .product-specs {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.05em;
        }

        .product-btn {
          width: 100%;
        }

        /* Pillars Section */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 500px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-item {
          text-align: center;
          padding: 1.5rem;
        }

        .pillar-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(201, 168, 76, 0.05);
          border: 1px solid var(--border-color);
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .pillar-item:hover .pillar-icon-wrapper {
          background: var(--matte-gold);
          border-color: var(--matte-gold);
          transform: rotate(45deg);
        }

        .pillar-item:hover .pillar-icon {
          color: var(--warm-black);
          transform: rotate(-45deg);
        }

        .pillar-icon {
          color: var(--matte-gold);
          transition: all 0.3s ease;
        }

        .pillar-title {
          font-size: var(--font-lg);
          margin-bottom: 1rem;
        }

        .pillar-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Testimonials Section */
        .testimonial-slider-container {
          max-width: 800px;
          margin: 4rem auto 0 auto;
          padding: 4rem 3rem;
          position: relative;
          text-align: center;
        }

        @media (max-width: 600px) {
          .testimonial-slider-container {
            padding: 3rem 1.5rem;
          }
        }

        .testimonial-slider {
          min-height: 250px;
          position: relative;
        }

        .testimonial-slide {
          opacity: 0;
          transform: scale(0.98);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .testimonial-slide.active {
          opacity: 1;
          transform: scale(1);
          position: relative;
          pointer-events: auto;
        }

        .star-rating {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 2rem;
        }

        .testimonial-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: var(--font-2xl);
          color: var(--cream-white);
          line-height: 1.5;
          margin-bottom: 2rem;
          font-style: italic;
        }

        @media (max-width: 600px) {
          .testimonial-quote {
            font-size: var(--font-lg);
          }
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--matte-gold);
        }

        .author-role {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-family: 'Montserrat', sans-serif;
        }

        .slider-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 3rem;
          border-top: 1px solid rgba(250, 247, 240, 0.05);
          padding-top: 2rem;
        }

        .slider-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .slider-btn:hover {
          color: var(--matte-gold);
        }

        .slider-dots {
          display: flex;
          gap: 0.5rem;
        }

        .slider-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(250, 247, 240, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dot.active {
          background: var(--matte-gold);
          transform: scale(1.3);
        }

        /* Export CTA Banner */
        .export-cta-banner {
          position: relative;
          padding: 8rem 0;
          text-align: center;
          background-color: var(--deep-green);
          overflow: hidden;
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(13, 13, 13, 0.2) 0%, rgba(13, 13, 13, 0.8) 100%);
        }

        .banner-container {
          position: relative;
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
        }

        .banner-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--matte-gold);
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .banner-title {
          font-size: var(--font-5xl);
          margin-bottom: 2rem;
          color: var(--cream-white);
        }

        @media (max-width: 768px) {
          .banner-title {
            font-size: var(--font-3xl);
          }
        }

        .banner-desc {
          font-size: var(--font-lg);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .banner-ctas {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        @media (max-width: 480px) {
          .banner-ctas {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          .banner-ctas .btn {
            width: 100%;
            max-width: 280px;
          }
        }

        /* Section Layout Utilities */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-divider {
          width: 40px;
          height: 1px;
          background: var(--matte-gold);
          margin: 1.5rem auto 0 auto;
        }
      `})]})}const dh=""+new URL("founder_story-DXji8g4o.png",import.meta.url).href;function fh(){N.useEffect(()=>{const t=document.querySelectorAll(".reveal"),n=()=>{for(let r=0;r<t.length;r++){const l=window.innerHeight;t[r].getBoundingClientRect().top<l-150&&t[r].classList.add("active")}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[]);const e=[{name:"Organic India Certified",code:"NPOP/NAB/001"},{name:"FSSAI License",code:"Reg No: 11324007000214"},{name:"Spices Board India Registration",code:"CRE-2026-F890"},{name:"ISO 22000:2018 (Food Safety)",code:"FSMS-90812"},{name:"APEDA Export Certification",code:"AP-ID-99214"}];return a.jsxs("div",{className:"about-page",children:[a.jsxs("section",{className:"about-banner",children:[a.jsx("div",{className:"banner-overlay"}),a.jsxs("div",{className:"container banner-content animate-fade-in-up",children:[a.jsx("span",{className:"banner-pretitle",children:"The Origin Story"}),a.jsx("h1",{className:"banner-title text-gradient-gold",children:"Rooted in Idukki"}),a.jsx("p",{className:"banner-subtitle",children:"How a life spent in cardamom fields inspired a mission to change the global spice landscape."})]})]}),a.jsx("section",{className:"section founder-section luxury-bg-gradient",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"founder-grid",children:[a.jsxs("div",{className:"founder-img-block reveal",children:[a.jsx("div",{className:"image-frame-gold",children:a.jsx("img",{src:dh,alt:"Cardapure Founder in Sourcing estate",className:"founder-img"})}),a.jsxs("div",{className:"founder-badge",children:[a.jsx("span",{className:"badge-title",children:"Directly Sourced"}),a.jsx("span",{className:"badge-subtitle",children:"Since Generations"})]})]}),a.jsxs("div",{className:"founder-text-block reveal",children:[a.jsx("span",{className:"section-pretitle",children:"The Founder's Legacy"}),a.jsx("h2",{className:"section-title",children:'"Low quality is everywhere. We want to change that."'}),a.jsx("p",{className:"founder-p",children:"Growing up in Idukki, the world's premier cardamom region, the founder of Cardapure did not learn the spice trade from spreadsheets, but from the soil. As a boy, he watched the morning mist roll over the plantations, helped in the harvests, and learned the intricate, generational secrets of sorting, drying, and curing pods."}),a.jsx("p",{className:"founder-p",children:"However, looking at the wider market, he saw a troubling trend: the cardamom reaching kitchens globally was dry, grey, low in essential oils, and heavily diluted by middlemen. The real, potent, oil-rich green cardamom of Idukki never made it out of the local auctions intact."}),a.jsx("p",{className:"founder-p",children:"Cardapure was founded as a direct challenge to this status quo. By leveraging close personal relationships with fellow farmers and cultivating our own estate, we bypassed the auctions and middlemen entirely. We promised to bring the authentic, full-aroma cardamom of Idukki directly to premium households and B2B buyers worldwide."})]})]})})}),a.jsx("section",{className:"section geography-section",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"geography-grid",children:[a.jsxs("div",{className:"geography-text reveal",children:[a.jsx("span",{className:"section-pretitle",children:"Terroir & Science"}),a.jsx("h2",{className:"section-title",children:"The Altitude Advantage"}),a.jsx("p",{className:"geo-p",children:"Cardapure cardamom is grown exclusively in the misty highlands of Idukki, situated 900m to 1,400m above sea level in the Western Ghats. This high altitude ensures a cool, humid microclimate where temperatures range between 15°C and 25°C year-round."}),a.jsx("p",{className:"geo-p",children:"These unique environmental pressures slow the ripening of the cardamom pods, giving them time to concentrate dense, aromatic essential oils (up to 8% content, compared to the market average of 3-4%)."}),a.jsxs("div",{className:"geo-stats-grid",children:[a.jsxs("div",{className:"geo-stat-card glass-card",children:[a.jsx("span",{className:"stat-num text-gold",children:"1,200m"}),a.jsx("span",{className:"stat-label",children:"Average Elevation"})]}),a.jsxs("div",{className:"geo-stat-card glass-card",children:[a.jsx("span",{className:"stat-num text-gold",children:"8.5%"}),a.jsx("span",{className:"stat-label",children:"Essential Oil Content"})]}),a.jsxs("div",{className:"geo-stat-card glass-card",children:[a.jsx("span",{className:"stat-num text-gold",children:"100%"}),a.jsx("span",{className:"stat-label",children:"Traceability to Farm"})]})]})]}),a.jsx("div",{className:"geography-visual reveal",children:a.jsxs("div",{className:"glass-card map-visual-card",children:[a.jsx("h3",{className:"visual-card-title text-gold",children:"Plantation Origin"}),a.jsx("p",{className:"visual-card-desc",children:"Our estate and fellow farming communities lie clustered around the high rainfall forests of Nedumkandam, Vandanmedu, and Munnar."}),a.jsxs("div",{className:"mock-map",children:[a.jsx("div",{className:"map-point pulse-gold",children:a.jsx("span",{className:"map-point-label",children:"Cardapure Farm"})}),a.jsx("div",{className:"map-contour-line line-1"}),a.jsx("div",{className:"map-contour-line line-2"}),a.jsx("div",{className:"map-contour-line line-3"})]})]})})]})})}),a.jsx("section",{className:"section certifications-section luxury-bg-gradient",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header reveal",children:[a.jsx("span",{className:"section-pretitle",children:"Quality Verification"}),a.jsx("h2",{className:"section-title",children:"Laboratory Tested & Certified"}),a.jsx("p",{className:"section-subtitle-large",children:"We back our purity claims with world-recognized credentials."}),a.jsx("div",{className:"section-divider"})]}),a.jsx("div",{className:"certs-grid",children:e.map((t,n)=>a.jsxs("div",{className:"cert-card glass-card reveal",children:[a.jsxs("div",{className:"cert-header",children:[a.jsx(io,{className:"cert-icon",size:24}),a.jsx("span",{className:"cert-verify",children:"Verified"})]}),a.jsx("h3",{className:"cert-name",children:t.name}),a.jsx("span",{className:"cert-code",children:t.code}),a.jsxs("a",{href:"#download-cert",className:"cert-download-link",onClick:r=>{r.preventDefault(),alert(`Downloading PDF certificate for ${t.name}`)},children:["Download PDF ",a.jsx(Zp,{size:14,style:{marginLeft:"4px"}})]})]},n))})]})}),a.jsx("style",{children:`
        /* Banner */
        .about-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .about-banner .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 30%, rgba(201, 168, 76, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .banner-content {
          position: relative;
          z-index: 10;
          max-width: 860px;
        }

        .banner-pretitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .banner-pretitle::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--matte-gold);
        }

        .banner-title {
          font-family: 'Cormorant Garamond', Garamond, serif;
          font-size: clamp(3.2rem, 5.5vw, 4.8rem);
          line-height: 1.12;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }

        .banner-subtitle {
          font-size: clamp(1.1rem, 1.6vw, 1.3rem);
          color: var(--text-muted);
          line-height: 1.75;
          font-weight: 300;
          max-width: 760px;
        }

        /* Founder Section */
        .founder-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .founder-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .founder-img-block {
          position: relative;
        }

        .image-frame-gold {
          border: 1px solid var(--border-color);
          padding: 1rem;
          background: rgba(13, 13, 13, 0.5);
          position: relative;
        }

        .image-frame-gold::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 1px solid rgba(201, 168, 76, 0.05);
          pointer-events: none;
        }

        .founder-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4/5;
          object-fit: cover;
          display: block;
        }

        .founder-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--matte-gold);
          color: var(--warm-black);
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 480px) {
          .founder-badge {
            padding: 1rem;
            bottom: -10px;
            right: -10px;
          }
        }

        .badge-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .badge-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
        }

        .founder-text-block .section-title {
          font-size: var(--font-3xl);
          line-height: 1.3;
          margin-bottom: 2.5rem;
        }

        .founder-p {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        /* Sourcing / Geography */
        .geography-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .geography-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .geo-p {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .geo-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 480px) {
          .geo-stats-grid {
            grid-template-columns: 1fr;
          }
        }

        .geo-stat-card {
          padding: 1.5rem;
          text-align: center;
        }

        .stat-num {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: var(--font-3xl);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Map Visual Card */
        .map-visual-card {
          padding: 2.5rem;
          height: 400px;
          display: flex;
          flex-direction: column;
        }

        .visual-card-title {
          font-size: var(--font-xl);
          margin-bottom: 1rem;
        }

        .visual-card-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .mock-map {
          flex-grow: 1;
          background: rgba(13, 13, 13, 0.4);
          border: 1px solid rgba(201, 168, 76, 0.1);
          position: relative;
          overflow: hidden;
          background-image: radial-gradient(rgba(201, 168, 76, 0.05) 1px, transparent 0);
          background-size: 20px 20px;
        }

        .map-point {
          position: absolute;
          top: 45%;
          left: 55%;
          width: 12px;
          height: 12px;
          background-color: var(--matte-gold);
          border-radius: 50%;
        }

        .map-point-label {
          position: absolute;
          top: -24px;
          left: -40px;
          width: 100px;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--matte-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .map-contour-line {
          position: absolute;
          border: 1px solid rgba(201, 168, 76, 0.05);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .map-contour-line.line-1 {
          width: 250px;
          height: 180px;
          top: 50%;
          left: 50%;
        }

        .map-contour-line.line-2 {
          width: 380px;
          height: 280px;
          top: 48%;
          left: 52%;
        }

        .map-contour-line.line-3 {
          width: 550px;
          height: 400px;
          top: 53%;
          left: 47%;
        }

        /* Certs Grid */
        .section-subtitle-large {
          font-size: var(--font-lg);
          color: var(--text-muted);
          font-weight: 300;
          margin-top: 1rem;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 1100px) {
          .certs-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
        }

        .cert-card {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .cert-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .cert-icon {
          color: var(--matte-gold);
        }

        .cert-verify {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #2e7d32;
          background: rgba(46, 125, 50, 0.1);
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
        }

        .cert-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          line-height: 1.4;
          margin-bottom: 0.75rem;
          color: var(--cream-white);
        }

        .cert-code {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-bottom: 1.5rem;
          font-family: monospace;
          flex-grow: 1;
        }

        .cert-download-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          margin-top: auto;
        }

        .cert-download-link:hover {
          color: var(--cream-white);
        }
      `})]})}function mh(){const[e,t]=N.useState("all"),[n,r]=N.useState({whole:{size:"250g",price:"₹450"},powder:{size:"100g",price:"₹220"}});N.useEffect(()=>{const s=document.querySelectorAll(".reveal"),c=()=>{for(let h=0;h<s.length;h++){const m=window.innerHeight;s[h].getBoundingClientRect().top<m-150&&s[h].classList.add("active")}};return window.addEventListener("scroll",c),c(),()=>window.removeEventListener("scroll",c)},[]);const l=(s,c,h)=>{r(m=>({...m,[s]:{size:c,price:h}}))},i=[{id:"all",name:"All Products"},{id:"whole",name:"Whole Pods"},{id:"powder",name:"Powder"},{id:"gifting",name:"Gifting Packs"},{id:"bulk",name:"Bulk / Export"}],o=[{id:"whole-pods",category:"whole",image:oa,name:"Whole Green Cardamom (Jumbo 8mm+)",tag:"Best Seller",desc:"Selected hand-picked green pods containing rich natural volatile oils. Intact pod skin locks in full aroma and flavour.",grades:"8mm+ Bold Grading, Moisture < 12%",sizes:[{label:"50g",price:"₹120"},{label:"100g",price:"₹210"},{label:"250g",price:"₹450"},{label:"1kg",price:"₹1,750"}],type:"retail",amazonLink:"https://amazon.in",flipkartLink:"https://flipkart.com"},{id:"powder",category:"powder",image:rd,name:"Fresh Ground Cardamom Powder",tag:"100% Pure",desc:"Cold-processed grinding ensures that delicate volatile flavor compounds are preserved. No fillers, coloring, or starch added.",grades:"Fine Mesh, Pure Decorticated Seeds",sizes:[{label:"50g",price:"₹130"},{label:"100g",price:"₹220"},{label:"250g",price:"₹490"}],type:"retail",amazonLink:"https://amazon.in",flipkartLink:"https://flipkart.com"},{id:"gifting",category:"gifting",image:ld,name:"The Heritage Luxury Gift Box",tag:"Festive & Corporate",desc:"A premium rigid cardboard box containing a selection of our finest whole pods and premium ground cardamom. Perfect for gifting.",grades:"Matte Black / Gold Foil Finish",customizable:!0,price:"₹1,200",type:"gifting",amazonLink:"https://amazon.in",flipkartLink:"https://flipkart.com"},{id:"bulk-sacks",category:"bulk",image:oa,name:"Bulk Cardamom Export Sacks",tag:"B2B Wholesale",desc:"High-grade cardamom packed in jute bags or customized food-grade vacuum pouches. Ideal for international importers and distributors.",grades:"Export Quality (AGB/AGEB Graded)",moq:"Minimum Order: 100 kg",type:"bulk"}],u=e==="all"?o:o.filter(s=>s.category===e);return a.jsxs("div",{className:"products-page",children:[a.jsxs("section",{className:"products-banner",children:[a.jsx("div",{className:"banner-overlay"}),a.jsxs("div",{className:"container banner-content animate-fade-in-up",children:[a.jsx("span",{className:"banner-pretitle",children:"Premium Collection"}),a.jsx("h1",{className:"banner-title text-gradient-gold",children:"Choose Your Grade"}),a.jsx("p",{className:"banner-subtitle",children:"Grown in the highlands of Kerala, sorted by size and color, and packaged to preserve pure volatile oil content."})]})]}),a.jsx("section",{className:"section catalog-section luxury-bg-gradient",children:a.jsxs("div",{className:"container",children:[a.jsx("div",{className:"tabs-container reveal",children:i.map(s=>a.jsx("button",{onClick:()=>t(s.id),className:`tab-btn ${e===s.id?"active":""}`,children:s.name},s.id))}),a.jsx("div",{className:"catalog-grid",children:u.map(s=>{const c=s.type==="retail",h=s.type==="gifting",m=n[s.id==="whole-pods"?"whole":"powder"];return a.jsxs("div",{className:"catalog-item glass-card reveal",children:[a.jsxs("div",{className:"item-img-wrapper",children:[a.jsx("img",{src:s.image,alt:s.name,className:"item-img"}),a.jsx("span",{className:"item-tag",children:s.tag})]}),a.jsxs("div",{className:"item-details",children:[a.jsx("h3",{className:"item-name",children:s.name}),a.jsx("p",{className:"item-desc",children:s.desc}),a.jsxs("div",{className:"item-specs-box",children:[a.jsx("span",{className:"specs-title",children:"Specifications:"}),a.jsx("span",{className:"specs-value",children:s.grades}),s.moq&&a.jsx("span",{className:"specs-moq text-gold",style:{display:"block",marginTop:"0.25rem"},children:s.moq})]}),c&&a.jsxs("div",{className:"size-selector-block",children:[a.jsx("span",{className:"selector-title",children:"Select Pack Weight:"}),a.jsx("div",{className:"size-btns",children:s.sizes.map(g=>a.jsx("button",{onClick:()=>l(s.id==="whole-pods"?"whole":"powder",g.label,g.price),className:`size-btn ${m.size===g.label?"active":""}`,children:g.label},g.label))})]}),a.jsxs("div",{className:"item-price-row",children:[a.jsx("span",{className:"price-label",children:"Estimated Pricing:"}),a.jsx("span",{className:"price-value text-gold",children:c?m.price:h?s.price:"Custom Quote"})]}),s.type!=="bulk"?a.jsxs("div",{className:"purchase-buttons",children:[a.jsxs("a",{href:s.amazonLink,target:"_blank",rel:"noreferrer",className:"btn btn-primary buy-btn",children:["Buy on Amazon ",a.jsx(hl,{size:14,style:{marginLeft:"6px"}})]}),a.jsxs("a",{href:s.flipkartLink,target:"_blank",rel:"noreferrer",className:"btn btn-secondary buy-btn",children:["Buy on Flipkart ",a.jsx(hl,{size:14,style:{marginLeft:"6px"}})]})]}):a.jsx("div",{className:"purchase-buttons",children:a.jsx(Z,{to:"/export",className:"btn btn-primary buy-btn",style:{width:"100%"},children:"Request Export Inquiry"})})]})]},s.id)})}),a.jsxs("div",{className:"guarantees-bar glass-card reveal",children:[a.jsxs("div",{className:"guarantee-item",children:[a.jsx(Lr,{size:18,className:"g-icon"}),a.jsx("span",{children:"Organic Certified (NPOP Standards)"})]}),a.jsxs("div",{className:"guarantee-item",children:[a.jsx(Lr,{size:18,className:"g-icon"}),a.jsx("span",{children:"Lab Verified Pure (No Colouring)"})]}),a.jsxs("div",{className:"guarantee-item",children:[a.jsx(Lr,{size:18,className:"g-icon"}),a.jsx("span",{children:"Moisture Lock Heat-Sealed Pouches"})]}),a.jsxs("div",{className:"guarantee-item",children:[a.jsx(Lr,{size:18,className:"g-icon"}),a.jsx("span",{children:"Generational Farm Traceability"})]})]})]})}),a.jsx("style",{children:`
        /* Banner */
        .products-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .products-banner .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 30%, rgba(201, 168, 76, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .banner-content {
          position: relative;
          z-index: 10;
          max-width: 860px;
        }

        .banner-pretitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .banner-pretitle::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--matte-gold);
        }

        .banner-title {
          font-family: 'Cormorant Garamond', Garamond, serif;
          font-size: clamp(3.2rem, 5.5vw, 4.8rem);
          line-height: 1.12;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }

        .banner-subtitle {
          font-size: clamp(1.1rem, 1.6vw, 1.3rem);
          color: var(--text-muted);
          line-height: 1.75;
          font-weight: 300;
          max-width: 760px;
        }

        /* Tabs */
        .tabs-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .tab-btn {
          background: transparent;
          border: 1px solid rgba(201, 168, 76, 0.15);
          color: rgba(250, 247, 240, 0.7);
          padding: 0.75rem 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn:hover, .tab-btn.active {
          border-color: var(--matte-gold);
          color: var(--matte-gold);
          background: rgba(201, 168, 76, 0.05);
        }

        /* Catalog Grid */
        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          margin-bottom: 6rem;
        }

        @media (max-width: 900px) {
          .catalog-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .catalog-item {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .item-img-wrapper {
          aspect-ratio: 16/10;
          overflow: hidden;
          position: relative;
          background-color: #121212;
          border-bottom: 1px solid rgba(201, 168, 76, 0.1);
        }

        .item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-tag {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: var(--matte-gold);
          color: var(--warm-black);
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.3rem 0.75rem;
        }

        .item-details {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .item-name {
          font-size: var(--font-2xl);
          margin-bottom: 1rem;
        }

        .item-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .item-specs-box {
          background: rgba(27, 67, 50, 0.15);
          border: 1px solid rgba(201, 168, 76, 0.1);
          padding: 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.8rem;
        }

        .specs-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: var(--text-muted);
          margin-right: 0.5rem;
        }

        .specs-value {
          color: var(--cream-white);
        }

        /* Size Selectors */
        .size-selector-block {
          margin-bottom: 1.5rem;
        }

        .selector-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: block;
        }

        .size-btns {
          display: flex;
          gap: 0.5rem;
        }

        .size-btn {
          background: transparent;
          border: 1px solid rgba(250, 247, 240, 0.1);
          color: var(--text-muted);
          width: 50px;
          height: 35px;
          font-size: 0.75rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .size-btn:hover, .size-btn.active {
          border-color: var(--matte-gold);
          color: var(--matte-gold);
          background: rgba(201, 168, 76, 0.05);
        }

        .item-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(250, 247, 240, 0.05);
          padding-top: 1.5rem;
          margin-bottom: 2rem;
        }

        .price-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: var(--text-dim);
          font-weight: 500;
        }

        .price-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: var(--font-3xl);
        }

        .purchase-buttons {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .buy-btn {
          flex: 1;
          font-size: 0.65rem;
          padding: 0.75rem 1rem;
        }

        /* Guarantees Bar */
        .guarantees-bar {
          display: flex;
          justify-content: space-around;
          padding: 2.5rem;
          margin-top: 4rem;
          flex-wrap: wrap;
          gap: 2rem;
          border-left: 2px solid var(--matte-gold);
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .g-icon {
          color: var(--matte-gold);
        }
      `})]})}const ph=""+new URL("farm_life-sk6ky6jD.png",import.meta.url).href;function hh(){N.useEffect(()=>{const t=document.querySelectorAll(".reveal"),n=()=>{for(let r=0;r<t.length;r++){const l=window.innerHeight;t[r].getBoundingClientRect().top<l-150&&t[r].classList.add("active")}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[]);const e=[{number:"01",title:"Misty Germination",subtitle:"The Altitude Sleep",desc:"Our cardamom plants germinate under the high canopy of native forest trees in Idukki. They spend their first years in partial shade, surrounded by evergreen flora, developing deep roots in loose, organic forest mulch rich in natural nitrogen.",icon:a.jsx(Xc,{size:20})},{number:"02",title:"The Hand Harvest",subtitle:"Plucking the Mature Pods",desc:"Cardamom does not ripen all at once. Harvesting is a labor of pure love and patience. Our farmers walk the estate rows every 15-20 days, carefully touching and selecting only the fully plump, mature pods. Unripe pods are left untouched to mature for the next cycle.",icon:a.jsx(nh,{size:20})},{number:"03",title:"Tradition Curing",subtitle:"Slow Flue Drying",desc:"Within 24 hours of harvest, the pods are washed and dried. We use traditional heat-flue rooms where dry hot air circulates gently over the pods for 18 to 24 hours. We never use artificial dye, sulphur fumes, or chemicals to color the pods; their deep green is the natural result of high chlorophyll preserved by exact heat curation.",icon:a.jsx(qp,{size:20})},{number:"04",title:"Strict Grading",subtitle:"Sorting by Diameter",desc:"Cured cardamom is mechanically sieved to separate pods by diameter. Cardapure selections are strictly 8mm or larger—known in international trade as Bold or Super Bold. Any pods showing cracks, discolouration, or lower density are separated and set aside for secondary processing (like our ground powder).",icon:a.jsx(Kc,{size:20})}];return a.jsxs("div",{className:"story-page",children:[a.jsxs("section",{className:"story-banner",children:[a.jsx("div",{className:"banner-overlay"}),a.jsxs("div",{className:"container banner-content animate-fade-in-up",children:[a.jsx("span",{className:"banner-pretitle",children:"The Journey"}),a.jsx("h1",{className:"banner-title text-gradient-gold",children:"Farm to Kitchen"}),a.jsx("p",{className:"banner-subtitle",children:"How we grow, harvest, dry, and grade our cardamom to ensure that every pod is a work of natural art."})]})]}),a.jsx("section",{className:"section story-intro-section luxury-bg-gradient",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"story-intro-grid",children:[a.jsxs("div",{className:"story-intro-text reveal",children:[a.jsx("span",{className:"section-pretitle",children:"The Philosophy"}),a.jsx("h2",{className:"section-title",children:"An Unhurried Journey"}),a.jsx("p",{className:"story-intro-p",children:"We believe that modern food systems have traded flavor for speed. Industrial farming pushes crops to grow faster, inflating them with fertilizers and sacrificing natural essential oils."}),a.jsx("p",{className:"story-intro-p",children:"At Cardapure, we let the Idukki hills dictate the pace. Cardamom is a delicate perennial plant that demands shaded shelter, constant humidity, and soft highland wind. Curing is done slowly over hours, ensuring the volatile oils remain sealed inside."})]}),a.jsx("div",{className:"story-intro-image reveal",children:a.jsx("div",{className:"image-frame-gold",children:a.jsx("img",{src:ph,alt:"Harvesting green cardamom",className:"story-intro-img"})})})]})})}),a.jsx("section",{className:"section story-timeline-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header reveal",children:[a.jsx("span",{className:"section-pretitle",children:"Chronology of Quality"}),a.jsx("h2",{className:"section-title",children:"Curing the Perfect Pod"}),a.jsx("div",{className:"section-divider"})]}),a.jsx("div",{className:"timeline-steps",children:e.map((t,n)=>a.jsxs("div",{className:`timeline-step-row reveal ${n%2===0?"row-normal":"row-reverse"}`,children:[a.jsxs("div",{className:"timeline-number-col",children:[a.jsx("span",{className:"step-num-large text-gold",children:t.number}),a.jsx("div",{className:"step-decor-line"})]}),a.jsxs("div",{className:"timeline-content-card glass-card",children:[a.jsxs("div",{className:"step-header",children:[a.jsx("div",{className:"step-icon-wrapper",children:t.icon}),a.jsxs("div",{className:"step-titles",children:[a.jsx("h3",{className:"step-title",children:t.title}),a.jsx("span",{className:"step-subtitle text-gold",children:t.subtitle})]})]}),a.jsx("p",{className:"step-desc",children:t.desc})]})]},n))})]})}),a.jsx("style",{children:`
        /* Banner */
        .story-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .story-banner .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 30%, rgba(201, 168, 76, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .banner-content {
          position: relative;
          z-index: 10;
          max-width: 860px;
        }

        .banner-pretitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .banner-pretitle::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--matte-gold);
        }

        .banner-title {
          font-family: 'Cormorant Garamond', Garamond, serif;
          font-size: clamp(3.2rem, 5.5vw, 4.8rem);
          line-height: 1.12;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }

        .banner-subtitle {
          font-size: clamp(1.1rem, 1.6vw, 1.3rem);
          color: var(--text-muted);
          line-height: 1.75;
          font-weight: 300;
          max-width: 760px;
        }

        /* Intro Grid */
        .story-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .story-intro-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .story-intro-p {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .story-intro-img {
          width: 100%;
          height: auto;
          aspect-ratio: 16/10;
          object-fit: cover;
          display: block;
        }

        /* Timeline */
        .timeline-steps {
          position: relative;
          max-width: 900px;
          margin: 5rem auto 0 auto;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .timeline-step-row {
          display: flex;
          align-items: flex-start;
          gap: 4rem;
        }

        .timeline-step-row.row-reverse {
          flex-direction: row-reverse;
        }

        @media (max-width: 768px) {
          .timeline-step-row, .timeline-step-row.row-reverse {
            flex-direction: column;
            gap: 2rem;
          }
        }

        .timeline-number-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .timeline-number-col {
            flex-direction: row;
            width: 100%;
            gap: 1.5rem;
          }
        }

        .step-num-large {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          line-height: 1;
        }

        .step-decor-line {
          width: 1px;
          height: 120px;
          background: linear-gradient(180deg, var(--matte-gold) 0%, rgba(201, 168, 76, 0.05) 100%);
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .step-decor-line {
            width: 100%;
            height: 1px;
            margin-top: 0;
            background: linear-gradient(90deg, var(--matte-gold) 0%, rgba(201, 168, 76, 0.05) 100%);
          }
        }

        .timeline-content-card {
          padding: 2.5rem;
          flex-grow: 1;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .step-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(201, 168, 76, 0.05);
          border: 1px solid var(--border-color);
          color: var(--matte-gold);
        }

        .step-titles {
          display: flex;
          flex-direction: column;
        }

        .step-title {
          font-size: var(--font-xl);
        }

        .step-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .step-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.7;
          font-weight: 300;
        }
      `})]})}function gh(){const[e,t]=N.useState({companyName:"",contactName:"",email:"",phone:"",country:"",grade:"Jumbo 8mm+ (Bold)",quantity:"",message:""}),[n,r]=N.useState(!1);N.useEffect(()=>{const o=document.querySelectorAll(".reveal"),u=()=>{for(let s=0;s<o.length;s++){const c=window.innerHeight;o[s].getBoundingClientRect().top<c-150&&o[s].classList.add("active")}};return window.addEventListener("scroll",u),u(),()=>window.removeEventListener("scroll",u)},[]);const l=o=>{const{name:u,value:s}=o.target;t(c=>({...c,[u]:s}))},i=o=>{o.preventDefault(),console.log("Form data submitted:",e),r(!0)};return a.jsxs("div",{className:"export-page",children:[a.jsxs("section",{className:"export-banner",children:[a.jsx("div",{className:"banner-overlay"}),a.jsxs("div",{className:"container banner-content animate-fade-in-up",children:[a.jsx("span",{className:"banner-pretitle",children:"B2B Trade & Global Sourcing"}),a.jsx("h1",{className:"banner-title text-gradient-gold",children:"Global Spice Export"}),a.jsx("p",{className:"banner-subtitle",children:"Reliable, high-volume supply chains supplying premium Idukki cardamom directly to importers in Dubai, Bahrain, Europe, and beyond."})]})]}),a.jsx("section",{className:"section b2b-features-section luxury-bg-gradient",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header reveal",children:[a.jsx("span",{className:"section-pretitle",children:"Direct Importer Sourcing"}),a.jsx("h2",{className:"section-title",children:"The Cardapure B2B Advantage"}),a.jsx("div",{className:"section-divider"})]}),a.jsxs("div",{className:"b2b-features-grid",children:[a.jsxs("div",{className:"b2b-feature-card glass-card reveal",children:[a.jsx(Qp,{className:"b2b-icon",size:24}),a.jsx("h3",{className:"b2b-title",children:"Compliant Logistics"}),a.jsx("p",{className:"b2b-desc",children:"We handle complete export clearance, customs documentation, and phytosanitary certificates for GCC and European ports."})]}),a.jsxs("div",{className:"b2b-feature-card glass-card reveal",children:[a.jsx(io,{className:"b2b-icon",size:24}),a.jsx("h3",{className:"b2b-title",children:"Custom Packaging"}),a.jsx("p",{className:"b2b-desc",children:"Importers can specify bulk packaging formats: 20kg double-layered jute bags, 10kg vacuum packs, or custom-labelled retail boxes."})]}),a.jsxs("div",{className:"b2b-feature-card glass-card reveal",children:[a.jsx($p,{className:"b2b-icon",size:24}),a.jsx("h3",{className:"b2b-title",children:"Lab Batch Reports"}),a.jsx("p",{className:"b2b-desc",children:"Every consignment includes accredited laboratory reports confirming moisture levels, pesticide clearances, and essential oil contents."})]})]})]})}),a.jsx("section",{className:"section moq-section",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"moq-grid",children:[a.jsxs("div",{className:"moq-info-text reveal",children:[a.jsx("span",{className:"section-pretitle",children:"Specifications & Shipping"}),a.jsx("h2",{className:"section-title",children:"Supply Tiers & MOQ"}),a.jsx("p",{className:"moq-p",children:"We accommodate both specialty boutique spice houses and high-volume grocery chains. By maintaining our own warehouse and sourcing network, we offer year-round price stability."}),a.jsx("div",{className:"moq-table-wrapper glass-card",children:a.jsxs("table",{className:"moq-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Shipment Tier"}),a.jsx("th",{children:"Quantity (KG)"}),a.jsx("th",{children:"Packaging Option"})]})}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"LCL Air Freight"}),a.jsx("td",{children:"100 kg – 500 kg"}),a.jsx("td",{children:"Vacuum Sealed Pouches in Cartons"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"LCL Sea Cargo"}),a.jsx("td",{children:"500 kg – 5,000 kg"}),a.jsx("td",{children:"High-density Jute Sacks / PP Sacks"})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"FCL Sea Cargo (20ft)"}),a.jsx("td",{children:"5,000 kg +"}),a.jsx("td",{children:"Customized Palletized Containers"})]})]})]})}),a.jsxs("div",{className:"catalog-download-card glass-card",children:[a.jsxs("div",{className:"download-text-block",children:[a.jsx("h3",{className:"download-title text-gold",children:"Download Export Catalog"}),a.jsx("p",{className:"download-desc",children:"Includes detailed grade dimensions, chemical profiles, moisture specifications, and pricing metrics."})]}),a.jsxs("button",{onClick:()=>alert("Downloading Cardapure Export Catalog PDF..."),className:"btn btn-secondary download-btn",children:["Download PDF ",a.jsx(Vp,{size:14,style:{marginLeft:"6px"}})]})]})]}),a.jsxs("div",{className:"b2b-form-card glass-card reveal",children:[a.jsx("h3",{className:"form-title text-gold",children:"Export Sourcing Inquiry"}),a.jsx("p",{className:"form-subtitle-form",children:"Complete the form below to receive an export quotation sheets within 24 hours."}),n?a.jsxs("div",{className:"form-success-message",children:[a.jsx("h4",{className:"success-title text-gold",children:"Inquiry Submitted"}),a.jsx("p",{className:"success-desc",children:"Thank you for contacting Cardapure Spices. Our export manager will email you a catalog sheet and quotation matching your volume request."}),a.jsx("p",{className:"success-cta-msg",children:"Need immediate quotes? Connect directly on WhatsApp:"}),a.jsxs("a",{href:"https://wa.me/919400000000?text=Hello%20Cardapure,%20I'm%20interested%20in%20an%20export%20inquiry.",target:"_blank",rel:"noreferrer",className:"btn btn-primary whatsapp-btn",children:["WhatsApp Export Desk ",a.jsx(aa,{size:14})]})]}):a.jsxs("form",{onSubmit:i,className:"b2b-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"companyName",children:"Company Name"}),a.jsx("input",{type:"text",id:"companyName",name:"companyName",value:e.companyName,onChange:l,placeholder:"e.g. Al-Taj Food Importers",required:!0})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"contactName",children:"Contact Person"}),a.jsx("input",{type:"text",id:"contactName",name:"contactName",value:e.contactName,onChange:l,placeholder:"Your full name",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Work Email"}),a.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:l,placeholder:"email@company.com",required:!0})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"phone",children:"Phone / WhatsApp"}),a.jsx("input",{type:"text",id:"phone",name:"phone",value:e.phone,onChange:l,placeholder:"+971 50 000 0000",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"country",children:"Target Country"}),a.jsx("input",{type:"text",id:"country",name:"country",value:e.country,onChange:l,placeholder:"e.g. Dubai, UAE",required:!0})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"grade",children:"Required Grade"}),a.jsxs("select",{id:"grade",name:"grade",value:e.grade,onChange:l,children:[a.jsx("option",{children:"Jumbo 8mm+ (Bold)"}),a.jsx("option",{children:"Medium 7.5mm (Medium Bold)"}),a.jsx("option",{children:"Ground Cardamom Powder"}),a.jsx("option",{children:"Mixed Assortment / Gift Boxes"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"quantity",children:"Target Quantity"}),a.jsx("input",{type:"text",id:"quantity",name:"quantity",value:e.quantity,onChange:l,placeholder:"e.g. 500 kg / 5 Tons",required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:"Message & Specifications"}),a.jsx("textarea",{id:"message",name:"message",rows:"4",value:e.message,onChange:l,placeholder:"Specify your certifications, packaging requests, or ports of delivery...",required:!0})]}),a.jsx("button",{type:"submit",className:"btn btn-primary submit-btn",children:"Submit Inquiry Sheet"})]})]})]})})}),a.jsx("style",{children:`
        /* Banner */
        .export-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .export-banner .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 30%, rgba(201, 168, 76, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .banner-content {
          position: relative;
          z-index: 10;
          max-width: 860px;
        }

        .banner-pretitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .banner-pretitle::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--matte-gold);
        }

        .banner-title {
          font-family: 'Cormorant Garamond', Garamond, serif;
          font-size: clamp(3.2rem, 5.5vw, 4.8rem);
          line-height: 1.12;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }

        .banner-subtitle {
          font-size: clamp(1.1rem, 1.6vw, 1.3rem);
          color: var(--text-muted);
          line-height: 1.75;
          font-weight: 300;
          max-width: 760px;
        }

        /* Features */
        .b2b-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 900px) {
          .b2b-features-grid {
            grid-template-columns: 1fr;
          }
        }

        .b2b-feature-card {
          padding: 3rem 2rem;
          text-align: center;
        }

        .b2b-icon {
          color: var(--matte-gold);
          margin-bottom: 1.5rem;
        }

        .b2b-title {
          font-size: var(--font-xl);
          margin-bottom: 1rem;
        }

        .b2b-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* MOQ Grid */
        .moq-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: flex-start;
        }

        @media (max-width: 1024px) {
          .moq-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .moq-p {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .moq-table-wrapper {
          overflow-x: auto;
          margin-bottom: 2.5rem;
        }

        .moq-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.85rem;
        }

        .moq-table th {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--matte-gold);
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(201, 168, 76, 0.2);
        }

        .moq-table td {
          padding: 1.25rem 1.5rem;
          color: var(--text-muted);
          border-bottom: 1px solid rgba(250, 247, 240, 0.05);
        }

        .moq-table tr:last-child td {
          border-bottom: none;
        }

        .catalog-download-card {
          padding: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          border-left: 2px solid var(--matte-gold);
        }

        @media (max-width: 600px) {
          .catalog-download-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .catalog-download-card .download-btn {
            width: 100%;
          }
        }

        .download-title {
          font-size: var(--font-xl);
          margin-bottom: 0.5rem;
        }

        .download-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* B2B Form Card */
        .b2b-form-card {
          padding: 3rem;
          background: rgba(13, 13, 13, 0.95);
        }

        @media (max-width: 480px) {
          .b2b-form-card {
            padding: 1.75rem;
          }
        }

        .form-title {
          font-size: var(--font-2xl);
          margin-bottom: 0.75rem;
        }

        .form-subtitle-form {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 2.5rem;
        }

        .b2b-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .b2b-form label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .b2b-form input, .b2b-form select, .b2b-form textarea {
          background: rgba(250, 247, 240, 0.02);
          border: 1px solid rgba(250, 247, 240, 0.1);
          color: var(--cream-white);
          padding: 0.85rem 1rem;
          font-size: 0.85rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .b2b-form input:focus, .b2b-form select:focus, .b2b-form textarea:focus {
          border-color: var(--matte-gold);
          background: rgba(27, 67, 50, 0.1);
        }

        .b2b-form select {
          cursor: pointer;
        }

        .b2b-form select option {
          background: var(--warm-black);
          color: var(--cream-white);
        }

        .submit-btn {
          margin-top: 1rem;
          width: 100%;
        }

        /* Success Message */
        .form-success-message {
          text-align: center;
          padding: 2rem 0;
        }

        .success-title {
          font-size: var(--font-2xl);
          margin-bottom: 1rem;
        }

        .success-desc {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .success-cta-msg {
          font-family: 'Montserrat', sans-serif;
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .whatsapp-btn {
          width: 100%;
          gap: 0.5rem;
        }
      `})]})}function vh(){const[e,t]=N.useState({name:"",email:"",phone:"",inquiryType:"Retail Sourcing",message:""}),[n,r]=N.useState(!1);N.useEffect(()=>{const o=document.querySelectorAll(".reveal"),u=()=>{for(let s=0;s<o.length;s++){const c=window.innerHeight;o[s].getBoundingClientRect().top<c-150&&o[s].classList.add("active")}};return window.addEventListener("scroll",u),u(),()=>window.removeEventListener("scroll",u)},[]);const l=o=>{const{name:u,value:s}=o.target;t(c=>({...c,[u]:s}))},i=o=>{o.preventDefault(),console.log("General contact submitted:",e),r(!0)};return a.jsxs("div",{className:"contact-page",children:[a.jsxs("section",{className:"contact-banner",children:[a.jsx("div",{className:"banner-overlay"}),a.jsxs("div",{className:"container banner-content animate-fade-in-up",children:[a.jsx("span",{className:"banner-pretitle",children:"Connect With Us"}),a.jsx("h1",{className:"banner-title text-gradient-gold",children:"Contact Cardapure"}),a.jsx("p",{className:"banner-subtitle",children:"Whether you are an home cook, an artisanal baker, or a bulk distributor, we would love to hear from you."})]})]}),a.jsx("section",{className:"section contact-section-grid luxury-bg-gradient",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"contact-grid",children:[a.jsxs("div",{className:"contact-info-block reveal",children:[a.jsx("span",{className:"section-pretitle",children:"Get In Touch"}),a.jsx("h2",{className:"section-title",children:"We welcome your inquiry"}),a.jsx("p",{className:"contact-desc-text",children:"For wholesale quotes, export compliance documents, or retail partnership requests, choose your preferred method of contact below."}),a.jsxs("div",{className:"info-detail-cards",children:[a.jsxs("div",{className:"info-detail-card glass-card",children:[a.jsx(ed,{className:"info-icon",size:20}),a.jsxs("div",{className:"info-text",children:[a.jsx("span",{className:"info-label",children:"Our Farm Land"}),a.jsx("span",{className:"info-value",children:"Nedumkandam, Idukki District, Kerala, 685553, India"})]})]}),a.jsxs("div",{className:"info-detail-card glass-card",children:[a.jsx(Yc,{className:"info-icon",size:20}),a.jsxs("div",{className:"info-text",children:[a.jsx("span",{className:"info-label",children:"Email Sourcing Desk"}),a.jsx("a",{href:"mailto:info@cardapure.com",className:"info-value info-link",children:"info@cardapure.com"})]})]}),a.jsxs("div",{className:"info-detail-card glass-card",children:[a.jsx(td,{className:"info-icon",size:20}),a.jsxs("div",{className:"info-text",children:[a.jsx("span",{className:"info-label",children:"Direct & WhatsApp Support"}),a.jsx("a",{href:"https://wa.me/919400000000",target:"_blank",rel:"noreferrer",className:"info-value info-link",children:"+91 94000 00000"})]})]})]}),a.jsxs("div",{className:"whatsapp-quick-connect glass-card",children:[a.jsxs("div",{className:"wa-text-block",children:[a.jsx("h3",{className:"wa-title text-gold",children:"Chat Directly"}),a.jsx("p",{className:"wa-desc",children:"Connect with our sourcing manager directly via WhatsApp for rapid answers."})]}),a.jsxs("a",{href:"https://wa.me/919400000000?text=Hi%20Cardapure,%20I'm%20visiting%20your%20website%20and...",target:"_blank",rel:"noreferrer",className:"btn btn-primary wa-btn",children:["Start Chat ",a.jsx(Xp,{size:14,style:{marginLeft:"6px"}})]})]})]}),a.jsxs("div",{className:"contact-form-block glass-card reveal",children:[a.jsx("h3",{className:"form-title text-gold",children:"Send A Message"}),a.jsx("p",{className:"form-subtitle-form",children:"For general feedback, retail requests, or recipe questions."}),n?a.jsxs("div",{className:"form-success-message",children:[a.jsx("h4",{className:"success-title text-gold",children:"Message Sent"}),a.jsx("p",{className:"success-desc",children:"Thank you for reaching out. We appreciate your interest in Cardapure and will get back to you within 24 hours."})]}):a.jsxs("form",{onSubmit:i,className:"contact-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Full Name"}),a.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:l,placeholder:"Your name",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:l,placeholder:"email@domain.com",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"phone",children:"Phone Number"}),a.jsx("input",{type:"text",id:"phone",name:"phone",value:e.phone,onChange:l,placeholder:"Your phone number",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"inquiryType",children:"Inquiry Type"}),a.jsxs("select",{id:"inquiryType",name:"inquiryType",value:e.inquiryType,onChange:l,children:[a.jsx("option",{children:"General Sourcing"}),a.jsx("option",{children:"Retail / Home Kitchen"}),a.jsx("option",{children:"Festive Gifting Packs"}),a.jsx("option",{children:"Other / Feedback"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"message",children:"Your Message"}),a.jsx("textarea",{id:"message",name:"message",rows:"5",value:e.message,onChange:l,placeholder:"Write your message here...",required:!0})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary submit-btn",children:["Send Message ",a.jsx(lo,{size:14,style:{marginLeft:"6px"}})]})]})]})]}),a.jsxs("div",{className:"map-wrapper glass-card reveal",children:[a.jsxs("div",{className:"map-header",children:[a.jsx("h3",{className:"map-title text-gold",children:"Location & Plantation Coordinate"}),a.jsx("p",{className:"map-subtitle-map",children:"Nedumkandam Hills, Idukki District, Kerala, India"})]}),a.jsxs("div",{className:"google-map-iframe-mock",children:[a.jsxs("div",{className:"map-overlay-coordinates",children:[a.jsx("span",{className:"coord-label font-brand",children:"9.8213° N, 77.1689° E"}),a.jsx("span",{className:"coord-elevation",children:"Elevation: 1,180m AMSL"})]}),a.jsx("div",{className:"mock-grid-lines"})]})]})]})}),a.jsx("style",{children:`
        /* Banner */
        .contact-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .contact-banner .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 30%, rgba(201, 168, 76, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .banner-content {
          position: relative;
          z-index: 10;
          max-width: 860px;
        }

        .banner-pretitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .banner-pretitle::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--matte-gold);
        }

        .banner-title {
          font-family: 'Cormorant Garamond', Garamond, serif;
          font-size: clamp(3.2rem, 5.5vw, 4.8rem);
          line-height: 1.12;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }

        .banner-subtitle {
          font-size: clamp(1.1rem, 1.6vw, 1.3rem);
          color: var(--text-muted);
          line-height: 1.75;
          font-weight: 300;
          max-width: 760px;
        }

        /* Grid Layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: flex-start;
          margin-bottom: 6rem;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .contact-desc-text {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

        .info-detail-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .info-detail-card {
          padding: 1.5rem;
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }

        .info-icon {
          color: var(--matte-gold);
          flex-shrink: 0;
        }

        .info-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-dim);
        }

        .info-value {
          font-size: 0.85rem;
          color: var(--cream-white);
          line-height: 1.4;
        }

        .info-link:hover {
          color: var(--matte-gold);
        }

        /* WhatsApp Connect Box */
        .whatsapp-quick-connect {
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-left: 2px solid var(--matte-gold);
          gap: 2rem;
        }

        @media (max-width: 600px) {
          .whatsapp-quick-connect {
            flex-direction: column;
            align-items: flex-start;
          }
          .whatsapp-quick-connect .wa-btn {
            width: 100%;
          }
        }

        .wa-title {
          font-size: var(--font-xl);
          margin-bottom: 0.5rem;
        }

        .wa-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* General Form */
        .contact-form-block {
          padding: 3rem;
          background: rgba(13, 13, 13, 0.95);
        }

        @media (max-width: 480px) {
          .contact-form-block {
            padding: 1.75rem;
          }
        }

        .form-title {
          font-size: var(--font-2xl);
          margin-bottom: 0.5rem;
        }

        .form-subtitle-form {
          font-size: var(--font-sm);
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-form label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .contact-form input, .contact-form select, .contact-form textarea {
          background: rgba(250, 247, 240, 0.02);
          border: 1px solid rgba(250, 247, 240, 0.1);
          color: var(--cream-white);
          padding: 0.85rem 1rem;
          font-size: 0.85rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus {
          border-color: var(--matte-gold);
          background: rgba(27, 67, 50, 0.1);
        }

        .contact-form select {
          cursor: pointer;
        }

        .contact-form select option {
          background: var(--warm-black);
          color: var(--cream-white);
        }

        .submit-btn {
          width: 100%;
        }

        /* Map Card */
        .map-wrapper {
          padding: 2.5rem;
          margin-top: 4rem;
        }

        .map-title {
          font-size: var(--font-xl);
          margin-bottom: 0.5rem;
        }

        .map-subtitle-map {
          font-size: var(--font-sm);
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .google-map-iframe-mock {
          height: 350px;
          background: #0f1a14;
          border: 1px solid rgba(201, 168, 76, 0.1);
          position: relative;
          overflow: hidden;
        }

        .mock-grid-lines {
          width: 100%;
          height: 100%;
          opacity: 0.07;
          background-image: 
            linear-gradient(rgba(201, 168, 76, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.5) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .map-overlay-coordinates {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          background: var(--warm-black);
          border: 1px solid var(--border-color);
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 10;
        }

        .coord-label {
          font-size: 1.5rem;
          color: var(--matte-gold);
        }

        .coord-elevation {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        /* Success Message */
        .form-success-message {
          text-align: center;
          padding: 3rem 0;
        }

        .success-title {
          font-size: var(--font-2xl);
          margin-bottom: 1rem;
        }

        .success-desc {
          font-size: var(--font-base);
          color: var(--text-muted);
          line-height: 1.7;
        }
      `})]})}function yh(){const[e,t]=N.useState("all"),[n,r]=N.useState("");N.useEffect(()=>{const u=document.querySelectorAll(".reveal"),s=()=>{for(let c=0;c<u.length;c++){const h=window.innerHeight;u[c].getBoundingClientRect().top<h-150&&u[c].classList.add("active")}};return window.addEventListener("scroll",s),s(),()=>window.removeEventListener("scroll",s)},[]);const l=[{id:"all",name:"All Articles"},{id:"guides",name:"Spice Guides"},{id:"recipes",name:"Recipes"},{id:"origin",name:"Origin Stories"}],o=[{id:"identify-idukki",category:"guides",title:"How to Identify Real Idukki Cardamom",desc:"With counterfeits flooding the market, learn the scientific visual indicators, oil checks, and color parameters that define true Idukki origin.",readTime:"5 min read",date:"June 18, 2026"},{id:"grades-explained",category:"guides",title:"Cardamom Grades Explained: 7mm to 8mm Bold",desc:"Understand what bold grading metrics mean for culinary yields. Why the physical pod diameter affects the volatile essential oil volume.",readTime:"4 min read",date:"May 24, 2026"},{id:"chai-the-right-way",category:"recipes",title:"Traditional Cardamom Chai — The Right Way",desc:"Ditch the artificial syrups. Discover the authentic recipe for home-brewed ginger-cardamom black tea, using crushed, oil-rich whole pods.",readTime:"6 min read",date:"May 02, 2026"},{id:"why-idukki-best",category:"origin",title:"Why Idukki Produces the World's Best Cardamom",desc:"An in-depth look at the Western Ghats geology, the heavy monsoon cycles, and the unique forest loam soil that cradles our plantations.",readTime:"8 min read",date:"April 14, 2026"},{id:"proper-storage",category:"guides",title:"How to Store Cardamom Properly to Lock in Aromatic Oils",desc:"Volatile essential oils evaporate easily under high temperatures. Learn how heat-sealed pouches and jar storage preserve freshness.",readTime:"3 min read",date:"March 29, 2026"},{id:"day-on-spice-farm",category:"origin",title:"A Day in the Life of a Kerala Spice Farmer",desc:"Harvesting, flue drying, and sieve sorting. Follow our farmers through a full daylight cycle in Nedumkandam hills.",readTime:"7 min read",date:"March 08, 2026"}].filter(u=>{const s=e==="all"||u.category===e,c=u.title.toLowerCase().includes(n.toLowerCase())||u.desc.toLowerCase().includes(n.toLowerCase());return s&&c});return a.jsxs("div",{className:"blog-page",children:[a.jsxs("section",{className:"blog-banner",children:[a.jsx("div",{className:"banner-overlay"}),a.jsxs("div",{className:"container banner-content animate-fade-in-up",children:[a.jsx("span",{className:"banner-pretitle",children:"The Spice Journal"}),a.jsx("h1",{className:"banner-title text-gradient-gold",children:"Cardamom Chronicle"}),a.jsx("p",{className:"banner-subtitle",children:"Exploring the culinary arts, agricultural sciences, and rich history behind the world's most luxurious aromatic pod."})]})]}),a.jsx("section",{className:"section blog-section-grid luxury-bg-gradient",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"blog-controls-bar reveal",children:[a.jsxs("div",{className:"search-wrapper",children:[a.jsx(Yp,{className:"search-icon",size:16}),a.jsx("input",{type:"text",placeholder:"Search articles...",value:n,onChange:u=>r(u.target.value),className:"search-input"})]}),a.jsx("div",{className:"blog-tabs",children:l.map(u=>a.jsx("button",{onClick:()=>t(u.id),className:`blog-tab-btn ${e===u.id?"active":""}`,children:u.name},u.id))})]}),o.length>0?a.jsx("div",{className:"blog-grid",children:o.map(u=>a.jsxs("article",{className:"blog-card glass-card reveal",children:[a.jsxs("div",{className:"blog-card-meta",children:[a.jsxs("span",{className:"blog-date",children:[a.jsx(Xc,{size:12,style:{marginRight:"4px"}}),u.date]}),a.jsxs("span",{className:"blog-read-time",children:[a.jsx(Gp,{size:12,style:{marginRight:"4px"}}),u.readTime]})]}),a.jsx("h3",{className:"blog-post-title",children:u.title}),a.jsx("p",{className:"blog-post-desc",children:u.desc}),a.jsxs("a",{href:"#read-more",onClick:s=>{s.preventDefault(),alert(`Full reading page for "${u.title}" is a stub in this version.`)},className:"blog-read-link",children:["Read Article ",a.jsx(lo,{size:14,style:{marginLeft:"6px"}})]})]},u.id))}):a.jsxs("div",{className:"no-articles-message glass-card reveal",children:[a.jsx(Up,{size:48,className:"no-articles-icon"}),a.jsx("h3",{className:"no-articles-title",children:"No Articles Found"}),a.jsx("p",{className:"no-articles-desc",children:"Try modifying your search query or switching categories."})]})]})}),a.jsx("style",{children:`
        /* Banner */
        .blog-banner {
          min-height: 48vh;
          width: 100%;
          background: radial-gradient(ellipse at 50% 20%, rgba(27, 67, 50, 0.4) 0%, rgba(13, 13, 13, 0.98) 75%), #0D0D0D;
          position: relative;
          display: flex;
          align-items: center;
          padding: 10rem 0 5rem 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.12);
        }

        .blog-banner .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 30%, rgba(201, 168, 76, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .banner-content {
          position: relative;
          z-index: 10;
          max-width: 860px;
        }

        .banner-pretitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .banner-pretitle::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--matte-gold);
        }

        .banner-title {
          font-family: 'Cormorant Garamond', Garamond, serif;
          font-size: clamp(3.2rem, 5.5vw, 4.8rem);
          line-height: 1.12;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }

        .banner-subtitle {
          font-size: clamp(1.1rem, 1.6vw, 1.3rem);
          color: var(--text-muted);
          line-height: 1.75;
          font-weight: 300;
          max-width: 760px;
        }

        /* Controls */
        .blog-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .blog-controls-bar {
            flex-direction: column;
            align-items: stretch;
          }
        }

        .search-wrapper {
          display: flex;
          align-items: center;
          background: rgba(250, 247, 240, 0.02);
          border: 1px solid rgba(250, 247, 240, 0.1);
          padding: 0.75rem 1.25rem;
          width: 320px;
          transition: all 0.3s ease;
        }

        @media (max-width: 900px) {
          .search-wrapper {
            width: 100%;
          }
        }

        .search-wrapper:focus-within {
          border-color: var(--matte-gold);
          background: rgba(27, 67, 50, 0.1);
        }

        .search-icon {
          color: var(--text-dim);
          margin-right: 0.75rem;
        }

        .search-input {
          background: transparent;
          border: none;
          color: var(--cream-white);
          outline: none;
          font-size: 0.85rem;
          width: 100%;
        }

        .search-input::placeholder {
          color: rgba(250, 247, 240, 0.3);
        }

        .blog-tabs {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .blog-tab-btn {
          background: transparent;
          border: 1px solid rgba(201, 168, 76, 0.15);
          color: rgba(250, 247, 240, 0.7);
          padding: 0.6rem 1.25rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .blog-tab-btn:hover, .blog-tab-btn.active {
          border-color: var(--matte-gold);
          color: var(--matte-gold);
          background: rgba(201, 168, 76, 0.05);
        }

        /* Grid */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }

        .blog-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .blog-card-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          color: var(--text-dim);
        }

        .blog-date, .blog-read-time {
          display: inline-flex;
          align-items: center;
        }

        .blog-post-title {
          font-size: var(--font-xl);
          margin-bottom: 1.25rem;
          line-height: 1.4;
          color: var(--cream-white);
        }

        .blog-post-desc {
          font-size: var(--font-sm);
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .blog-read-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--matte-gold);
          display: inline-flex;
          align-items: center;
          margin-top: auto;
          transition: transform 0.3s ease;
        }

        .blog-read-link:hover {
          color: var(--cream-white);
        }

        /* No articles message */
        .no-articles-message {
          padding: 5rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .no-articles-icon {
          color: var(--border-color);
          margin-bottom: 1.5rem;
        }

        .no-articles-title {
          font-size: var(--font-2xl);
          margin-bottom: 0.75rem;
        }

        .no-articles-desc {
          font-size: var(--font-base);
          color: var(--text-muted);
        }
      `})]})}function xh(){const{pathname:e}=vn();return N.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),null}function wh(){return a.jsxs(a.Fragment,{children:[a.jsx(xh,{}),a.jsx(ih,{}),a.jsx("main",{style:{minHeight:"80vh",paddingBottom:"0"},children:a.jsxs(Ep,{children:[a.jsx(et,{path:"/",element:a.jsx(ch,{})}),a.jsx(et,{path:"/about",element:a.jsx(fh,{})}),a.jsx(et,{path:"/products",element:a.jsx(mh,{})}),a.jsx(et,{path:"/story",element:a.jsx(hh,{})}),a.jsx(et,{path:"/export",element:a.jsx(gh,{})}),a.jsx(et,{path:"/blog",element:a.jsx(yh,{})}),a.jsx(et,{path:"/contact",element:a.jsx(vh,{})})]})}),a.jsx(ah,{})]})}ci.createRoot(document.getElementById("root")).render(a.jsx(As.StrictMode,{children:a.jsx(_p,{children:a.jsx(wh,{})})}));
