const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.3a9rkwAF.js","../chunks/disclose-version.Bg9kRutz.js","../chunks/render.hdjRonS-.js","../chunks/runtime.C6KgFPKo.js","../chunks/equality.oiFhdgmf.js","../chunks/proxy.B4j6j5tJ.js","../chunks/store.DmU47Ps_.js","../chunks/index.BWieoatv.js","../chunks/localization.DFkL-nf5.js","../assets/0.D-bjT6D_.css","../nodes/1.B7wt6iwD.js","../chunks/lifecycle.G--XA8tp.js","../chunks/entry.CsOvFKnb.js","../nodes/2.DWULpom_.js","../nodes/3.SJ8pDufA.js","../nodes/4._TG0tnbR.js"])))=>i.map(i=>d[i]);
var H=t=>{throw TypeError(t)};var M=(t,e,n)=>e.has(t)||H("Cannot "+n);var v=(t,e,n)=>(M(t,e,"read from private field"),n?n.call(t):e.get(t)),p=(t,e,n)=>e.has(t)?H("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),q=(t,e,n,a)=>(M(t,e,"write to private field"),a?a.call(t,n):e.set(t,n),n);import{r as $,v as G,q as j,w as z,E as ae,k as ie,x as oe,u as F,y as ue,a as ce,z as le,L as fe,g as E,b as k,A as W,B as de,m as ee,h as D,f as te,p as _e,e as ve,d as me,C as he,s as C,t as ge}from"../chunks/runtime.C6KgFPKo.js";import{g as Ee,h as ye,d as Re}from"../chunks/equality.oiFhdgmf.js";import{h as x,d as re,H as be,e as Pe,g as Se,i as Z,j as ne,P as Ae,k as we,l as Te,m as Le,n as ke,o as xe,u as Ie,f as I,b as J,a as w,t as se,p as B,c as Oe,q as pe,s as qe,r as De}from"../chunks/render.hdjRonS-.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as K}from"../chunks/proxy.B4j6j5tJ.js";function Ce(t){throw new Error("lifecycle_outside_component")}function V(t,e,n,a=null,i=!1){x&&re();var r=t,s=null,u=null,c=null,f=i?ae:0;$(()=>{if(c===(c=!!e()))return;let y=!1;if(x){const m=r.data===be;c===m&&(r=Pe(),Se(r),Z(!1),y=!0)}c?(s?G(s):s=j(()=>n(r)),u&&z(u,()=>{u=null})):(u?G(u):a&&(u=j(()=>a(r))),s&&z(s,()=>{s=null})),y&&Z(!0)},f),x&&(r=ne)}function U(t,e,n){x&&re();var a=t,i,r;$(()=>{i!==(i=e())&&(r&&(z(r),r=null),i&&(r=j(()=>n(a,i))))}),x&&(a=ne)}function Q(t,e){var a;var n=t&&((a=t[ce])==null?void 0:a.t);return t===e||n===e}function N(t={},e,n,a){return ie(()=>{var i,r;return oe(()=>{i=r,r=[],F(()=>{t!==n(...r)&&(e(t,...r),i&&Q(n(...i),t)&&e(null,...i))})}),()=>{ue(()=>{r&&Q(n(...r),t)&&e(null,...r)})}}),t}function Y(t,e,n,a){var T;var i=(n&we)!==0,r=(n&Te)!==0,s=(n&Le)!==0,u=t[e],c=(T=Ee(t,e))==null?void 0:T.set,f=a,y=!0,m=()=>(s&&y&&(y=!1,f=F(a)),f);u===void 0&&a!==void 0&&(c&&r&&le(),u=m(),c&&c(u));var o;if(r)o=()=>{var l=t[e];return l===void 0?m():(y=!0,l)};else{var _=(i?W:de)(()=>t[e]);_.f|=fe,o=()=>{var l=E(_);return l!==void 0&&(f=void 0),l===void 0?f:l}}if(!(n&Ae))return o;if(c){var h=t.$$legacy;return function(l,P){return arguments.length>0?((!r||!P||h)&&c(P?o():l),l):o()}}var R=!1,d=ee(u),A=W(()=>{var l=o(),P=E(d);return R?(R=!1,P):d.v=l});return i||(A.equals=ye),function(l,P){var O=E(A);if(arguments.length>0){const S=P?E(A):l;return A.equals(S)||(R=!0,k(d,S),E(A)),l}return O}}function Be(t){return class extends Ve{constructor(e){super({component:t,...e})}}}var b,g;class Ve{constructor(e){p(this,b);p(this,g);var n=new Map,a=(r,s)=>{var u=ee(s);return n.set(r,u),u};const i=new Proxy({...e.props||{},$$events:{}},{get(r,s){return E(n.get(s)??a(s,Reflect.get(r,s)))},has(r,s){return E(n.get(s)??a(s,Reflect.get(r,s))),Reflect.has(r,s)},set(r,s,u){return k(n.get(s)??a(s,u),u),Reflect.set(r,s,u)}});q(this,g,(e.hydrate?ke:xe)(e.component,{target:e.target,props:i,context:e.context,intro:e.intro??!1,recover:e.recover})),q(this,b,i.$$events);for(const r of Object.keys(v(this,g)))r==="$set"||r==="$destroy"||r==="$on"||Re(this,r,{get(){return v(this,g)[r]},set(s){v(this,g)[r]=s},enumerable:!0});v(this,g).$set=r=>{Object.assign(i,r)},v(this,g).$destroy=()=>{Ie(v(this,g))}}$set(e){v(this,g).$set(e)}$on(e,n){v(this,b)[e]=v(this,b)[e]||[];const a=(...i)=>n.call(this,...i);return v(this,b)[e].push(a),()=>{v(this,b)[e]=v(this,b)[e].filter(i=>i!==a)}}$destroy(){v(this,g).$destroy()}}b=new WeakMap,g=new WeakMap;function Ue(t){D===null&&Ce(),D.l!==null?Ne(D).m.push(t):te(()=>{const e=F(t);if(typeof e=="function")return e})}function Ne(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const Ye="modulepreload",je=function(t,e){return new URL(t,e).href},X={},L=function(e,n,a){let i=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(n.map(c=>{if(c=je(c,a),c in X)return;X[c]=!0;const f=c.endsWith(".css"),y=f?'[rel="stylesheet"]':"";if(!!a)for(let _=r.length-1;_>=0;_--){const h=r[_];if(h.href===c&&(!f||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${y}`))return;const o=document.createElement("link");if(o.rel=f?"stylesheet":Ye,f||(o.as="script",o.crossOrigin=""),o.href=c,u&&o.setAttribute("nonce",u),document.head.appendChild(o),f)return new Promise((_,h)=>{o.addEventListener("load",_),o.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}return i.then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})},Qe={};var ze=se('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Fe=se("<!> <!>",1);function He(t,e){_e(e,!0);let n=Y(e,"components",15,()=>K([])),a=Y(e,"data_0",3,null),i=Y(e,"data_1",3,null);ve(()=>e.stores.page.set(e.page)),te(()=>{e.stores,e.page,e.constructors,n(),e.form,a(),i(),e.stores.page.notify()});let r=C(!1),s=C(!1),u=C(null);Ue(()=>{const m=e.stores.page.subscribe(()=>{E(r)&&(k(s,!0),he().then(()=>{k(u,K(document.title||"untitled page"))}))});return k(r,!0),m});var c=Fe(),f=I(c);V(f,()=>e.constructors[1],m=>{var o=B(),_=I(o);U(_,()=>e.constructors[0],(h,R)=>{N(R(h,{get data(){return a()},children:(d,A)=>{var T=B(),l=I(T);U(l,()=>e.constructors[1],(P,O)=>{N(O(P,{get data(){return i()},get form(){return e.form}}),S=>n()[1]=S,()=>{var S;return(S=n())==null?void 0:S[1]})}),w(d,T)},$$slots:{default:!0}}),d=>n()[0]=d,()=>{var d;return(d=n())==null?void 0:d[0]})}),w(m,o)},m=>{var o=B(),_=I(o);U(_,()=>e.constructors[0],(h,R)=>{N(R(h,{get data(){return a()},get form(){return e.form}}),d=>n()[0]=d,()=>{var d;return(d=n())==null?void 0:d[0]})}),w(m,o)});var y=J(J(f,!0));V(y,()=>E(r),m=>{var o=ze(),_=Oe(o);V(_,()=>E(s),h=>{var R=pe();ge(()=>qe(R,E(u))),w(h,R)}),De(o),w(m,o)}),w(t,c),me()}const Xe=Be(He),$e=[()=>L(()=>import("../nodes/0.3a9rkwAF.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),()=>L(()=>import("../nodes/1.B7wt6iwD.js"),__vite__mapDeps([10,1,2,3,4,11,6,7,12]),import.meta.url),()=>L(()=>import("../nodes/2.DWULpom_.js"),__vite__mapDeps([13,1,2,3,4,11,6,7,8]),import.meta.url),()=>L(()=>import("../nodes/3.SJ8pDufA.js"),__vite__mapDeps([14,1,2,3,4,11,6,7,8]),import.meta.url),()=>L(()=>import("../nodes/4._TG0tnbR.js"),__vite__mapDeps([15,1,8,7,4]),import.meta.url)],et=[],tt={"/":[2],"/about":[3],"/contact-me":[4]},rt={handleError:({error:t})=>{console.error(t)},reroute:()=>{}};export{tt as dictionary,rt as hooks,Qe as matchers,$e as nodes,Xe as root,et as server_loads};
