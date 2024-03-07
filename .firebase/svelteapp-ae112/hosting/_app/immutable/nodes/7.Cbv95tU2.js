import{k as V,q as W,l as X,m as Y,n as Z,i as ee}from"../chunks/firebase.oGd3CV5t.js";import{H as te}from"../chunks/control.CYgJF_JY.js";import{s as se,e as k,a as x,t as P,l as ae,c as w,f as d,g as y,b as R,d as A,o as f,p as D,h,i as O,j as G,I as ne,J as oe}from"../chunks/scheduler.B0JEHspW.js";import{S as le,i as re,t as I,e as ie,b as z,c as ce,a as ue,m as me,d as _e,g as fe}from"../chunks/index.jKw0lUt7.js";import{e as J,U as he,g as pe,a as de}from"../chunks/UserLink.Byu73r2z.js";function N(i,n){throw new te(i,n)}new TextEncoder;const ge=async({params:i})=>{var m,l;const n=V(ee,"users"),o=W(n,Y("username","==",i.username),X(1)),c=await Z(o),u=(m=c.docs[0])==null?void 0:m.exists(),s=(l=c.docs[0])==null?void 0:l.data();if(!u)throw N(404,"that user does not exist!");if(!s.published)throw N(403,`The profile of @${s.username} is not public!`);return{username:s.username,photoURL:s.photoURL,bio:s.bio,links:s.links??[]}},Ue=Object.freeze(Object.defineProperty({__proto__:null,load:ge},Symbol.toStringTag,{value:"Module"}));function F(i,n,o){const c=i.slice();return c[1]=n[o],c}function K(i){let n,o,c,u;const s=[i[1]];let m={};for(let l=0;l<s.length;l+=1)m=oe(m,s[l]);return o=new he({props:m}),{c(){n=k("li"),ce(o.$$.fragment),c=x()},l(l){n=w(l,"LI",{});var _=R(n);ue(o.$$.fragment,_),c=y(_),_.forEach(d)},m(l,_){O(l,n,_),me(o,n,null),h(n,c),u=!0},p(l,_){const L=_&1?pe(s,[de(l[1])]):{};o.$set(L)},i(l){u||(I(o.$$.fragment,l),u=!0)},o(l){z(o.$$.fragment,l),u=!1},d(l){l&&d(n),_e(o)}}}function be(i){let n,o,c,u,s,m,l,_=i[0].username+"",L,M,p,q,S,$,U=(i[0].bio??"no bio yet...")+"",j,T,b,g;document.title=n="@"+i[0].username+" Links";let v=J(i[0].links),a=[];for(let e=0;e<v.length;e+=1)a[e]=K(F(i,v,e));const Q=e=>z(a[e],1,1,()=>{a[e]=null});return{c(){o=k("meta"),u=x(),s=k("main"),m=k("h1"),l=P("@"),L=P(_),M=x(),p=k("img"),S=x(),$=k("p"),j=P(U),T=x(),b=k("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){const r=ae("svelte-1ui6vuc",document.head);o=w(r,"META",{name:!0,content:!0}),r.forEach(d),u=y(e),s=w(e,"MAIN",{class:!0});var t=R(s);m=w(t,"H1",{class:!0});var E=R(m);l=A(E,"@"),L=A(E,_),E.forEach(d),M=y(t),p=w(t,"IMG",{src:!0,alt:!0,width:!0,class:!0}),S=y(t),$=w(t,"P",{class:!0});var B=R($);j=A(B,U),B.forEach(d),T=y(t),b=w(t,"UL",{class:!0});var C=R(b);for(let H=0;H<a.length;H+=1)a[H].l(C);C.forEach(d),t.forEach(d),this.h()},h(){f(o,"name","description"),f(o,"content",c=i[0].bio),f(m,"class","text-7xl text-purple-400"),D(p.src,q=i[0].photoURL??"/user.png")||f(p,"src",q),f(p,"alt","photoURL"),f(p,"width","256"),f(p,"class","mx-auto"),f($,"class","text-xl my-8"),f(b,"class","list-none"),f(s,"class","prose text-center mx-auto mt-8")},m(e,r){h(document.head,o),O(e,u,r),O(e,s,r),h(s,m),h(m,l),h(m,L),h(s,M),h(s,p),h(s,S),h(s,$),h($,j),h(s,T),h(s,b);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(b,null);g=!0},p(e,[r]){if((!g||r&1)&&n!==(n="@"+e[0].username+" Links")&&(document.title=n),(!g||r&1&&c!==(c=e[0].bio))&&f(o,"content",c),(!g||r&1)&&_!==(_=e[0].username+"")&&G(L,_),(!g||r&1&&!D(p.src,q=e[0].photoURL??"/user.png"))&&f(p,"src",q),(!g||r&1)&&U!==(U=(e[0].bio??"no bio yet...")+"")&&G(j,U),r&1){v=J(e[0].links);let t;for(t=0;t<v.length;t+=1){const E=F(e,v,t);a[t]?(a[t].p(E,r),I(a[t],1)):(a[t]=K(E),a[t].c(),I(a[t],1),a[t].m(b,null))}for(fe(),t=v.length;t<a.length;t+=1)Q(t);ie()}},i(e){if(!g){for(let r=0;r<v.length;r+=1)I(a[r]);g=!0}},o(e){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)z(a[r]);g=!1},d(e){e&&(d(u),d(s)),d(o),ne(a,e)}}}function ve(i,n,o){let{data:c}=n;return i.$$set=u=>{"data"in u&&o(0,c=u.data)},[c]}class xe extends le{constructor(n){super(),re(this,n,ve,be,se,{data:0})}}export{xe as component,Ue as universal};
