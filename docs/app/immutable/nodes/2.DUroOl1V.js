import{n as Ae,E as me,h as P,s as $,a as Re,H as qe,r as se,b as ee,c as U,o as ze,p as Z,q as ne,u as re,v as Ie,w as Ne,x as De,y as Oe,z as He,g as pe,k as A,i as c,j as a,t as q,l as o,m as E}from"../chunks/disclose-version.Di3Z6jJ7.js";import{b as Ke,f as Me,r as ge,a as xe,p as Le,J as Je,K as Pe,k as ce,g as ve,n as Ye,s as ue,M as Be,N as Ve,O as Ue,i as Fe,S as Qe,c as Ze,w as G,y as W,x as k,j as L,q as B,P as de}from"../chunks/runtime.CuurN9K-.js";import{s as ke,a as ye,i as Ge}from"../chunks/store.Cb5PmqSe.js";import{s as J,i as be}from"../chunks/localization.svelte.CsYBr1Pp.js";import{i as F}from"../chunks/if.DLc23xmF.js";import{v as We}from"../chunks/environment.D6L2nK2c.js";let ae=null;function fe(u,e){return e}function Xe(u,e,n,l){for(var m=[],d=e.length,r=0;r<d;r++)Be(e[r].e,m,!0);var g=d>0&&m.length===0&&n!==null;if(g){var p=n.parentNode;Ie(p),p.append(n),l.clear(),M(u,e[0].prev,e[d-1].next)}Ve(m,()=>{for(var v=0;v<d;v++){var t=e[v];g||(l.delete(t.k),M(u,t.prev,t.next)),Ue(t.e,!g)}})}function he(u,e,n,l,m,d=null){var r=u,g={flags:e,items:new Map,first:null},p=(e&me)!==0;if(p){var v=u;r=P?$(v.firstChild):v.appendChild(Ae())}P&&Re();var t=null;Ke(()=>{var s=n(),x=Me(s)?s:s==null?[]:Array.from(s),f=x.length,h=g.flags;h&re&&!Fe(x)&&!(Qe in x)&&!(Ze in x)&&(h^=re,h&De&&!(h&Z)&&(h^=Z));let y=!1;if(P){var T=r.data===qe;T!==(f===0)&&(r=se(),$(r),ee(!1),y=!0)}if(P){for(var C=null,b,i=0;i<f;i++){if(U.nodeType===8&&U.data===ze){r=U,y=!0,ee(!1);break}var _=x[i],R=l(_,i);b=we(U,g,C,null,_,R,i,m,h),g.items.set(R,b),C=b}f>0&&$(se())}P||$e(x,g,r,m,h,l),d!==null&&(f===0?t?ge(t):t=xe(()=>d(r)):t!==null&&Le(t,()=>{t=null})),y&&ee(!0)}),P&&(r=U)}function $e(u,e,n,l,m,d){var K,S,D,V;var r=(m&Ne)!==0,g=(m&(Z|ne))!==0,p=u.length,v=e.items,t=e.first,s=t,x=new Set,f=null,h=new Set,y=[],T=[],C,b,i,_;if(r)for(_=0;_<p;_+=1)C=u[_],b=d(C,_),i=v.get(b),i!==void 0&&((K=i.a)==null||K.measure(),h.add(i));for(_=0;_<p;_+=1){if(C=u[_],b=d(C,_),i=v.get(b),i===void 0){var R=s?s.e.nodes.start:n;f=we(R,e,f,f===null?e.first:f.next,C,b,_,l,m),v.set(b,f),y=[],T=[],s=f.next;continue}if(g&&ea(i,C,_,m),i.e.f&Je&&(ge(i.e),r&&((S=i.a)==null||S.unfix(),h.delete(i))),i!==s){if(x.has(i)){if(y.length<T.length){var N=T[0],j;f=N.prev;var O=y[0],H=y[y.length-1];for(j=0;j<y.length;j+=1)_e(y[j],N,n);for(j=0;j<T.length;j+=1)x.delete(T[j]);M(e,O.prev,H.next),M(e,f,O),M(e,H,N),s=N,f=H,_-=1,y=[],T=[]}else x.delete(i),_e(i,s,n),M(e,i.prev,i.next),M(e,i,f===null?e.first:f.next),M(e,f,i),f=i;continue}for(y=[],T=[];s!==null&&s.k!==b;)x.add(s),T.push(s),s=s.next;if(s===null)continue;i=s}y.push(i),f=i,s=i.next}const z=Array.from(x);for(;s!==null;)z.push(s),s=s.next;var w=z.length;if(w>0){var I=m&me&&p===0?n:null;if(r){for(_=0;_<w;_+=1)(D=z[_].a)==null||D.measure();for(_=0;_<w;_+=1)(V=z[_].a)==null||V.fix()}Xe(e,z,I,v)}r&&Pe(()=>{var Y;for(i of h)(Y=i.a)==null||Y.apply()}),ce.first=e.first&&e.first.e,ce.last=f&&f.e}function ea(u,e,n,l){l&Z&&ve(u.v,e),l&ne?ve(u.i,n):u.i=n}function we(u,e,n,l,m,d,r,g,p){var v=ae;try{var t=(p&Z)!==0,s=(p&re)===0,x=t?s?Ye(m):ue(m):m,f=p&ne?ue(r):r,h={i:f,v:x,k:d,a:null,e:null,prev:n,next:l};return ae=h,h.e=xe(()=>g(u,x,f),P),h.e.prev=n&&n.e,h.e.next=l&&l.e,n===null?e.first=h:(n.next=h,n.e.next=h.e),l!==null&&(l.prev=h,l.e.prev=h.e),h}finally{ae=v}}function _e(u,e,n){for(var l=u.next?u.next.e.nodes.start:n,m=e?e.e.nodes.start:n,d=u.e.nodes.start;d!==l;){var r=d.nextSibling;m.before(d),d=r}}function M(u,e,n){e===null?u.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}const aa=!1,ya=Object.freeze(Object.defineProperty({__proto__:null,ssr:aa},Symbol.toStringTag,{value:"Module"}));var ta=q("<span> </span>"),ra=q("<i></i>"),na=q("<i></i>"),la=q('<span tabindex="0" role="link"><!> <!></span>'),ia=q("<i></i>"),oa=q("<i></i>"),sa=q("<span> </span>"),ca=q('<div tabindex="0" role="link"><!> <!></div>');function va(u,e){G(e,!0);const n=e.link?()=>{e.link&&window.open(e.link)}:()=>{};var l=He(),m=pe(l);F(m,()=>e.inline,d=>{var r=la();r.__keydown=n,r.__click=n;var g=c(r);F(g,()=>e.label,v=>{var t=ta(),s=c(t);o(t),k(()=>E(s,e.label)),A(v,t)});var p=a(a(g,!0));F(p,()=>e.iconClasses,v=>{var t=ra();k(()=>J(t,`${`${e.iconClasses} ${e.size}`??""} svelte-vxmkg3`)),A(v,t)},v=>{var t=na();k(()=>J(t,`${`fa-solid fa-code ${e.size}`??""} svelte-vxmkg3`)),A(v,t)}),o(r),k(()=>J(r,`${`${e.link?"t-cursor-pointer":""}`??""} svelte-vxmkg3`)),A(d,r)},d=>{var r=ca();r.__keydown=n,r.__click=n;var g=c(r);F(g,()=>e.iconClasses,v=>{var t=ia();k(()=>J(t,`${`t-text-center ${e.iconClasses} ${e.size}`??""} svelte-vxmkg3`)),A(v,t)},v=>{var t=oa();k(()=>J(t,`${`t-text-center fa-solid fa-code ${e.size}`??""} svelte-vxmkg3`)),A(v,t)});var p=a(a(g,!0));F(p,()=>e.label,v=>{var t=sa();J(t,"t-text-center svelte-vxmkg3");var s=c(t);o(t),k(()=>E(s,e.label)),A(v,t)}),o(r),k(()=>J(r,`${`t-flex t-flex-col t-justify-center t-w-full t-h-full ${e.link?"t-cursor-pointer":""}`??""} svelte-vxmkg3`)),A(d,r)}),A(u,l),W()}Oe(["keydown","click"]);function te(u,e){G(e,!0);let n={aspnet:{label:"ASP.NET",link:"https://dotnet.microsoft.com/es-es/learn/aspnet/what-is-aspnet"},dotnet:{label:".NET",link:"https://dotnet.microsoft.com/es-es/"},react:{label:"ReactJS",icon:"icon-reactjs",link:"https://react.dev/"},javascript:{label:"Javascript",icon:"icon-javascript-alt",link:"https://www.javascript.com/"},nodejs:{label:"NodeJS",icon:"icon-nodejs",link:"https://nodejs.org/en"},reactNative:{icon:"icon-reactjs",label:"React Native",link:"https://reactnative.dev/"},csharp:{icon:"icon-csharp",link:"https://dotnet.microsoft.com/es-es/languages/csharp"},jquery:{label:"JQuery",icon:"icon-jquery",link:"https://jquery.com/"},git:{label:"GIT",icon:"icon-git",link:"https://git-scm.com/"},azure:{label:"AZURE",icon:"icon-azure",link:"https://azure.microsoft.com/es-mx"},angular:{label:"Angular",icon:"icon-angular",link:"https://angular.dev/"},bootstrap:{label:"Bootstrap",icon:"icon-bootstrap",link:"https://getbootstrap.com/"},php:{label:"PHP",icon:"icon-php",link:"https://www.php.net/"},cpp:{icon:"icon-cplusplus",link:"https://cplusplus.com/"},python:{label:"Python",icon:"icon-python",link:"https://www.python.org/"},java:{label:"Java",icon:"icon-java-bold",link:"https://www.java.com/es/"},mssql:{label:"Sql server",icon:"icon-mssql",link:"https://www.microsoft.com/en-us/sql-server"},mysql:{label:"MySql",icon:"icon-mysql",link:"https://www.mysql.com/"},excel:{label:"Excel",icon:"fas fa-file-excel",link:"https://www.microsoft.com/en-us/microsoft-365/excel"},visualbasic:{label:"Visual Basic 6"},oracleScm:{label:"Oracle SCM",link:"https://www.oracle.com/mx/scm/"}},l=B(()=>n[e.name]);var m=B(()=>e.inline??!1);va(u,{get iconClasses(){return L(l).icon},get label(){return L(l).label},get size(){return e.size},get link(){return L(l).link},get inline(){return L(m)}}),W()}var ua=q("<li> </li>"),da=q("<div><!></div>"),fa=q('<article class="t-grid t-grid-flow-row"><header><h3 class="t-text-wrap"> <!></h3> <h4> </h4></header> <p> </p> <ul></ul> <footer class="t-flex t-flex-col t-justify-end"><div class="grid"><div><!></div> <!></div></footer></article>');function Q(u,e){G(e,!0);const n=ke(),l=()=>ye(be,"$i18n",n);let m=Array.from({length:e.remarksCount},(w,I)=>I+1);const d=w=>l().t(`components.project.${w}`),r=w=>l().t(`page.experience.${e.translationKey}.${w}`),g=w=>w.charAt(0).toUpperCase()+w.slice(1);var p=fa(),v=c(p),t=c(v),s=c(t);const x=B(()=>g(d(`roles.${e.role}`))),f=B(()=>l().t("words.in")),h=B(()=>r("name")),y=B(()=>d(`roles.${e.secondaryRole}`));k(()=>E(s,`${L(x)} ${L(f)} ${L(h)}, ${L(y)} `));var T=a(s);te(T,{get name(){return e.mainTechnology},size:"medium",inline:!0}),o(t);var C=a(a(t,!0)),b=c(C);k(()=>E(b,r("duration"))),o(C),o(v);var i=a(a(v,!0)),_=c(i);k(()=>E(_,r("description"))),o(i);var R=a(a(i,!0));he(R,73,()=>m,fe,(w,I,K)=>{var S=ua(),D=c(S);k(()=>E(D,l().t(`page.experience.${e.translationKey}.remark.${de(I)}`))),o(S),A(w,S)}),o(R);var N=a(a(R,!0)),j=c(N),O=c(j),H=c(O);te(H,{get name(){return e.mainTechnology},size:"medium"}),o(O);var z=a(a(O,!0));he(z,65,()=>e.usedTechnologies,fe,(w,I,K)=>{var S=da(),D=c(S);te(D,{get name(){return de(I)},size:"medium"}),o(S),A(w,S)}),o(j),o(N),o(p),A(u,p),W()}var ha=q('<header><h1> </h1></header> <p> </p> <h2 id="about"> </h2> <p> </p> <article><header><h2 id="experience"> </h2></header> <div class="grid"><!> <!></div> <div class="grid"><!> <!></div> <!></article> <footer id="contact-me" class="t-flex t-flex-col t-content-center"><h4> </h4> <ul class="t-inline"><li>Email: <a href="mailto:jkf16m@gmail.com">jkf16m@gmail.com</a></li> <li><a href="https://www.facebook.com/DanyxLive/">Facebook</a></li> <li><a href="https://www.linkedin.com/in/jos%C3%A9-daniel-flores-morales-25305a18a/">Linkedin</a></li></ul> <p class="t-text-center"><small> <a href="https://github.com/jkf16m/jkf16m.github.io"> </a></small> <br> <small> </small> <br> <small> </small></p></footer>',1);function ba(u,e){G(e,!1);const n=ke(),l=()=>ye(be,"$i18n",n);Ge();var m=ha(),d=pe(m),r=c(d),g=c(r);k(()=>E(g,l().t("page.home.greetings"))),o(r),o(d);var p=a(a(d,!0)),v=c(p);k(()=>E(v,l().t("page.home.welcome"))),o(p);var t=a(a(p,!0)),s=c(t);k(()=>E(s,l().t("page.about.whoAmI"))),o(t);var x=a(a(t,!0)),f=c(x);k(()=>E(f,l().t("page.about.introduction"))),o(x);var h=a(a(x,!0)),y=c(h),T=c(y),C=c(T);k(()=>E(C,l().t("page.experience.nav"))),o(T),o(y);var b=a(a(y,!0)),i=c(b);Q(i,{remarksCount:4,translationKey:"pictale",role:"leadDeveloper",secondaryRole:"developer",mainTechnology:"reactNative",usedTechnologies:["javascript","csharp","nodejs"],$$legacy:!0});var _=a(a(i,!0));Q(_,{remarksCount:3,translationKey:"ingeniosys",secondaryRole:"developer",role:"fullstack",mainTechnology:"dotnet",usedTechnologies:["javascript","csharp","aspnet","jquery"],$$legacy:!0}),o(b);var R=a(a(b,!0)),N=c(R);Q(N,{remarksCount:3,translationKey:"simpatTech",secondaryRole:"developer",role:"maintainer",mainTechnology:"csharp",usedTechnologies:["azure","mssql","javascript","nodejs"],$$legacy:!0});var j=a(a(N,!0));Q(j,{remarksCount:4,translationKey:"ravisa",secondaryRole:"developer",role:"technicalSupport",mainTechnology:"aspnet",usedTechnologies:["csharp","mssql","react","javascript","python"],$$legacy:!0}),o(R);var O=a(a(R,!0));Q(O,{remarksCount:3,translationKey:"haloCreativeAndDesign",secondaryRole:"helper",role:"engineer",mainTechnology:"oracleScm",usedTechnologies:["mssql","python","excel","visualbasic"],$$legacy:!0}),o(h);var H=a(a(h,!0)),z=c(H),w=c(z);k(()=>E(w,l().t("page.contact.nav"))),o(z);var I=a(a(z,!0)),K=c(I);a(c(K)),o(K);var S=a(a(K,!0));c(S),o(S);var D=a(a(S,!0));c(D),o(D),o(I);var V=a(a(I,!0)),Y=c(V),le=c(Y);k(()=>E(le,`${l().t("page.home.portfolioSourceCode")??""} `));var ie=a(le),Te=c(ie);k(()=>E(Te,l().t("page.home.here"))),o(ie),o(Y);var Ee=a(a(Y,!0)),X=a(a(Ee,!0)),Ce=c(X);k(()=>E(Ce,l().t("page.footer.madeWith"))),o(X);var Se=a(a(X,!0)),oe=a(a(Se,!0)),je=c(oe);je.nodeValue=`v${We}`,o(oe),o(V),o(H),A(u,m),W()}export{ba as component,ya as universal};
