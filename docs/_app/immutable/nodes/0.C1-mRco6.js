import"../chunks/disclose-version.Bg9kRutz.js";import{h as G,d as H,c as i,b as o,a as J,t as K,s as u,r as l}from"../chunks/render.hdjRonS-.js";import{k as w,p as N,f as Q,t as v,d as R,b as U,g as $,s as V}from"../chunks/runtime.C6KgFPKo.js";import{i as W}from"../chunks/proxy.B4j6j5tJ.js";import{s as X,a as Y,b as Z}from"../chunks/store.DmU47Ps_.js";import{l as ee,i as te}from"../chunks/localization.DezqItbl.js";function re(e,r,t,a){G&&H(),r===void 0||r(e,t)}let M=!1;function ae(){M||(M=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function ne(e,r,t,a=t){e.addEventListener(r,t);const n=e.__on_r;n?e.__on_r=()=>{n(),a()}:e.__on_r=a,ae()}function z(e,r,t){if(e.multiple)return oe(e,r);for(var a of e.options){var n=_(a);if(W(n,r)){a.selected=!0;return}}(!t||r!==void 0)&&(e.selectedIndex=-1)}function ie(e,r){w(()=>{var t=new MutationObserver(()=>{var a=e.__value;z(e,a)});return t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function le(e,r,t){var a=!0;ne(e,"change",()=>{var n;if(e.multiple)n=[].map.call(e.querySelectorAll(":checked"),_);else{var s=e.querySelector(":checked");n=s&&_(s)}t(n)}),w(()=>{var n=r();if(z(e,n,a),a&&n===void 0){var s=e.querySelector(":checked");s!==null&&(n=_(s),t(n))}e.__value=n,a=!1}),ie(e)}function oe(e,r){for(var t of e.options)t.selected=~r.indexOf(_(t))}function _(e){return"__value"in e?e.__value:e.value}function se(e){var t;var r=(t=e.$$slots)==null?void 0:t.default;return r===!0?e.children:r}const ue=!1,ve=!0,he=Object.freeze(Object.defineProperty({__proto__:null,prerender:ve,ssr:ue},Symbol.toStringTag,{value:"Module"}));var _e=K('<main class="container-fluid"><nav><ul><li><strong> </strong></li></ul> <ul><li><a href="/"> </a></li> <li><a href="#about"> </a></li> <li><a href="#projects"> </a></li> <li><a href="#contact-me"> </a></li> <li><select><option>Español</option><option>English</option></select></li></ul></nav> <article><!></article></main>');function be(e,r){N(r,!0);const t=X(),a=()=>Y(te,"$i18n",t);let n=V("es");Q(()=>{Z(ee,$(n))});var s=_e(),f=i(s),c=i(f),x=i(c),y=i(x),A=i(y);v(()=>u(A,a().t("page.title"))),l(y),l(x),l(c);var k=o(o(c,!0)),d=i(k),S=i(d),B=i(S);v(()=>u(B,a().t("page.home.nav"))),l(S),l(d);var p=o(o(d,!0)),j=i(p),F=i(j);v(()=>u(F,a().t("page.about.nav"))),l(j),l(p);var g=o(o(p,!0)),E=i(g),I=i(E);v(()=>u(I,a().t("page.projects.nav"))),l(E),l(g);var m=o(o(g,!0)),O=i(m),T=i(O);v(()=>u(T,a().t("page.contact.nav"))),l(O),l(m);var q=o(o(m,!0)),h=i(q),b=i(h);b.value=(b.__value="es")==null?"":"es";var L=o(b);L.value=(L.__value="en")==null?"":"en",l(h),l(q),l(k),l(f);var P=o(o(f,!0)),C=i(P);re(C,se(r),{}),l(P),l(s),le(h,()=>$(n),D=>U(n,D)),J(e,s),R()}export{be as component,he as universal};
