import"../chunks/disclose-version.Bg9kRutz.js";import{h as H,d as J,c as n,b as l,a as K,t as Q,s as u,r as i}from"../chunks/render.Bbfqe5bR.js";import{k as U,E as V,l as W,n as X,o as N,p as Y,s as Z,f as ee,t as v,d as te,b as ae,g as A}from"../chunks/runtime.DuWuw8zs.js";import{i as re,p as ne}from"../chunks/proxy.DLNcGH0y.js";import{s as ie,a as F,b as oe}from"../chunks/store.DtPJbuny.js";import{l as L,i as se}from"../chunks/localization.svelte.uZldsRII.js";function le(e,r,...a){var o=e,t,s;U(()=>{t!==(t=r())&&(s&&(X(s),s=null),t&&(s=W(()=>t(o,...a))))},V),H&&(o=J)}let M=!1;function ue(){M||(M=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const a of e.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function ve(e,r,a,o=a){e.addEventListener(r,a);const t=e.__on_r;t?e.__on_r=()=>{t(),o()}:e.__on_r=o,ue()}function R(e,r,a){if(e.multiple)return ce(e,r);for(var o of e.options){var t=_(o);if(re(t,r)){o.selected=!0;return}}(!a||r!==void 0)&&(e.selectedIndex=-1)}function _e(e,r){N(()=>{var a=new MutationObserver(()=>{var o=e.__value;R(e,o)});return a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}})}function fe(e,r,a){var o=!0;ve(e,"change",()=>{var t;if(e.multiple)t=[].map.call(e.querySelectorAll(":checked"),_);else{var s=e.querySelector(":checked");t=s&&_(s)}a(t)}),N(()=>{var t=r();if(R(e,t,o),o&&t===void 0){var s=e.querySelector(":checked");s!==null&&(t=_(s),a(t))}e.__value=t,o=!1}),_e(e)}function ce(e,r){for(var a of e.options)a.selected=~r.indexOf(_(a))}function _(e){return"__value"in e?e.__value:e.value}const pe=!1,de=!0,Se=Object.freeze(Object.defineProperty({__proto__:null,prerender:de,ssr:pe},Symbol.toStringTag,{value:"Module"}));var ge=Q('<main class="container-fluid"><nav><ul><li><strong> </strong></li></ul> <ul><li><a href="/"> </a></li> <li><a href="#about"> </a></li> <li><a href="#projects"> </a></li> <li><a href="#contact-me"> </a></li> <li><select><option>Español</option><option>English</option></select></li></ul></nav> <article><!></article></main>');function ke(e,r){Y(r,!0);const a=ie(),o=()=>F(L,"$language",a),t=()=>F(se,"$i18n",a);let s=Z(ne(o()));ee(()=>{oe(L,A(s))});var f=ge(),c=n(f),p=n(c),x=n(p),E=n(x),w=n(E);v(()=>u(w,t().t("page.title"))),i(E),i(x),i(p);var S=l(l(p,!0)),d=n(S),k=n(d),z=n(k);v(()=>u(z,t().t("page.home.nav"))),i(k),i(d);var g=l(l(d,!0)),$=n(g),B=n($);v(()=>u(B,t().t("page.about.nav"))),i($),i(g);var m=l(l(g,!0)),j=n(m),C=n(j);v(()=>u(C,t().t("page.projects.nav"))),i(j),i(m);var h=l(l(m,!0)),O=n(h),I=n(O);v(()=>u(I,t().t("page.contact.nav"))),i(O),i(h);var P=l(l(h,!0)),b=n(P),y=n(b);y.value=(y.__value="es")==null?"":"es";var T=l(y);T.value=(T.__value="en")==null?"":"en",i(b),i(P),i(S),i(c);var q=l(l(c,!0)),D=n(q);le(D,()=>r.children),i(q),i(f),fe(b,()=>A(s),G=>ae(s,G)),K(e,f),te()}export{ke as component,Se as universal};
