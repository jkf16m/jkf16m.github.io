import{e as ve,h as H,d as V,g as fe,H as ce,i as ee,j as G,k as P,l as de,E as z,m as X,n as Q,o as _e,p as he,q as pe,u as me,f as ne,c as f,s as t,a as U,t as Z,r as u,b as A}from"../chunks/disclose-version.De4jwRJo.js";import{A as ge,c as xe,B as ie,C as oe,D as be,I as Ee,E as Te,h as ae,e as re,q as Ae,s as te,F as ye,G as Le,H as Se,i as je,S as we,a as Ce,x as S,J as ke,w as Ie,y as De,f as I,K as D}from"../chunks/runtime.BqZhLa2S.js";import{i as He}from"../chunks/lifecycle.Ck1i7vVB.js";import{s as Ne,a as Oe}from"../chunks/store.Csu3CsvC.js";import{i as Re}from"../chunks/localization.svelte.3rGc2q7z.js";let J=null;function Me(v,e){return e}function Ye(v,e,r,a){for(var _=[],c=e.length,s=0;s<c;s++)ye(e[s].e,_,!0);var E=c>0&&_.length===0&&r!==null;if(E){var h=r.parentNode;_e(h),h.append(r),a.clear(),w(v,e[0].prev,e[c-1].next)}Le(_,()=>{for(var p=0;p<c;p++){var m=e[p];E||(a.delete(m.k),w(v,m.prev,m.next)),Se(m.e,!E)}})}function qe(v,e,r,a,_,c=null){var s=v,E={flags:e,items:new Map,first:null};{var h=v;s=H?V(h.firstChild):h.appendChild(ve())}H&&fe();var p=null;ge(()=>{var m=r(),i=xe(m)?m:m==null?[]:Array.from(m),g=i.length,n=E.flags;n&Q&&!je(i)&&!(we in i)&&!(Ce in i)&&(n^=Q,n&pe&&!(n&z)&&(n^=z));let d=!1;if(H){var x=s.data===ce;x!==(g===0)&&(s=ee(),V(s),G(!1),d=!0)}if(H){for(var T=null,y,b=0;b<g;b++){if(P.nodeType===8&&P.data===de){s=P,d=!0,G(!1);break}var l=i[b],o=a(l,b);y=se(P,E,T,null,l,o,b,_,n),E.items.set(o,y),T=y}g>0&&V(ee())}H||Be(i,E,s,_,n,a),c!==null&&(g===0?p?ie(p):p=oe(()=>c(s)):p!==null&&be(p,()=>{p=null})),d&&G(!0)}),H&&(s=P)}function Be(v,e,r,a,_,c){var O,R,M,B;var s=(_&he)!==0,E=(_&(z|X))!==0,h=v.length,p=e.items,m=e.first,i=m,g=new Set,n=null,d=new Set,x=[],T=[],y,b,l,o;if(s)for(o=0;o<h;o+=1)y=v[o],b=c(y,o),l=p.get(b),l!==void 0&&((O=l.a)==null||O.measure(),d.add(l));for(o=0;o<h;o+=1){if(y=v[o],b=c(y,o),l=p.get(b),l===void 0){var Y=i?i.e.nodes.start:r;n=se(Y,e,n,n===null?e.first:n.next,y,b,o,a,_),p.set(b,n),x=[],T=[],i=n.next;continue}if(E&&Fe(l,y,o,_),l.e.f&Ee&&(ie(l.e),s&&((R=l.a)==null||R.unfix(),d.delete(l))),l!==i){if(g.has(l)){if(x.length<T.length){var C=T[0],L;n=C.prev;var N=x[0],q=x[x.length-1];for(L=0;L<x.length;L+=1)le(x[L],C,r);for(L=0;L<T.length;L+=1)g.delete(T[L]);w(e,N.prev,q.next),w(e,n,N),w(e,q,C),i=C,n=q,o-=1,x=[],T=[]}else g.delete(l),le(l,i,r),w(e,l.prev,l.next),w(e,l,n===null?e.first:n.next),w(e,n,l),n=l;continue}for(x=[],T=[];i!==null&&i.k!==b;)g.add(i),T.push(i),i=i.next;if(i===null)continue;l=i}x.push(l),n=l,i=l.next}const j=Array.from(g);for(;i!==null;)j.push(i),i=i.next;var k=j.length;if(k>0){var K=_&me&&h===0?r:null;if(s){for(o=0;o<k;o+=1)(M=j[o].a)==null||M.measure();for(o=0;o<k;o+=1)(B=j[o].a)==null||B.fix()}Ye(e,j,K,p)}s&&Te(()=>{var F;for(l of d)(F=l.a)==null||F.apply()}),ae.first=e.first&&e.first.e,ae.last=n&&n.e}function Fe(v,e,r,a){a&z&&re(v.v,e),a&X?re(v.i,r):v.i=r}function se(v,e,r,a,_,c,s,E,h){var p=J;try{var m=(h&z)!==0,i=(h&Q)===0,g=m?i?Ae(_):te(_):_,n=h&X?te(s):s,d={i:n,v:g,k:c,a:null,e:null,prev:r,next:a};return J=d,d.e=oe(()=>E(v,g,n),H),d.e.prev=r&&r.e,d.e.next=a&&a.e,r===null?e.first=d:(r.next=d,r.e.next=d.e),a!==null&&(a.prev=d,a.e.prev=d.e),d}finally{J=p}}function le(v,e,r){for(var a=v.next?v.next.e.nodes.start:r,_=e?e.e.nodes.start:r,c=v.e.nodes.start;c!==a;){var s=c.nextSibling;_.before(c),c=s}}function w(v,e,r){e===null?v.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}const Pe=!1,We=Object.freeze(Object.defineProperty({__proto__:null,ssr:Pe},Symbol.toStringTag,{value:"Module"}));var ze=Z("<li> </li>"),Ke=Z("<h3> </h3> <p> </p> <details><summary> </summary> <p> </p> <ul><li> </li> <li> </li> <li> <ul></ul></li></ul></details>",1);function Ve(v,e){var r=Ke(),a=ne(r),_=f(a);u(a);var c=t(t(a,!0)),s=f(c);u(c);var E=t(t(c,!0)),h=f(E),p=f(h);u(h);var m=t(t(h,!0)),i=f(m);u(m);var g=t(t(m,!0)),n=f(g),d=f(n);u(n);var x=t(t(n,!0)),T=f(x);u(x);var y=t(t(x,!0)),b=f(y),l=t(b);qe(l,73,()=>e.usedTechnologies,Me,(o,Y,C)=>{var L=ze(),N=f(L);u(L),S(()=>A(N,ke(Y))),U(o,L)}),u(l),u(y),u(g),u(E),S(()=>{A(_,e.name),A(s,e.duration),A(p,e.projectDetailsLabel),A(i,e.description),A(d,`${e.dateLabel??""}: ${e.date??""}`),A(T,`${e.roleLabel??""}: ${e.role??""}`),A(b,`${e.usedTechnologiesLabel??""} `)}),U(v,r)}var Ge=Z('<header><h1> </h1></header> <p> </p> <h2 id="about"> </h2> <p> </p> <article><header><h2 id="projects"> </h2></header> <!></article> <footer id="contact-me"><h4> </h4> <ul><li>Email: <a href="mailto:jkf16m@gmail.com">jkf16m@gmail.com</a></li> <li><a href="https://www.facebook.com/DanyxLive/">Facebook</a></li> <li><a href="https://www.linkedin.com/in/jos%C3%A9-daniel-flores-morales-25305a18a/">Linkedin</a></li></ul> <small> <a href="https://github.com/jkf16m/jkf16m.github.io"> </a></small></footer>',1);function $e(v,e){Ie(e,!1);const r=Ne(),a=()=>Oe(Re,"$i18n",r);He();var _=Ge(),c=ne(_),s=f(c),E=f(s);S(()=>A(E,a().t("page.home.greetings"))),u(s),u(c);var h=t(t(c,!0)),p=f(h);S(()=>A(p,a().t("page.home.welcome"))),u(h);var m=t(t(h,!0)),i=f(m);S(()=>A(i,a().t("page.about.whoAmI"))),u(m);var g=t(t(m,!0)),n=f(g);S(()=>A(n,a().t("page.about.introduction"))),u(g);var d=t(t(g,!0)),x=f(d),T=f(x),y=f(T);S(()=>A(y,a().t("page.projects.nav"))),u(T),u(x);var b=t(t(x,!0)),l=D(()=>a().t("components.project.details")),o=D(()=>a().t("page.projects.pictale.duration")),Y=D(()=>a().t("components.project.date")),C=D(()=>a().t("page.projects.pictale.description")),L=D(()=>a().t("components.project.role")),N=D(()=>a().t("components.project.roles.architect")),q=D(()=>a().t("components.project.usedTechnologies"));Ve(b,{get projectDetailsLabel(){return I(l)},get duration(){return I(o)},get dateLabel(){return I(Y)},date:"2023-07 2024-10",name:"Pictale",get description(){return I(C)},get roleLabel(){return I(L)},get role(){return I(N)},get usedTechnologiesLabel(){return I(q)},usedTechnologies:["javascript","nodejs","csharp","react-native"],$$legacy:!0}),u(d);var j=t(t(d,!0)),k=f(j),K=f(k);S(()=>A(K,a().t("page.contact.nav"))),u(k);var O=t(t(k,!0)),R=f(O);t(f(R)),u(R);var M=t(t(R,!0));f(M),u(M);var B=t(t(M,!0));f(B),u(B),u(O);var F=t(t(O,!0)),W=f(F);S(()=>A(W,`${a().t("page.home.portfolioSourceCode")??""} `));var $=t(W),ue=f($);S(()=>A(ue,a().t("page.home.here"))),u($),u(F),u(j),U(v,_),De()}export{$e as component,We as universal};
