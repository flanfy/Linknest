import{s as E,r as x,i as p,n as g,f as u,k as G,e as d,c as m,m as y,o as h,u as P,t as C,a as T,b as W,d as w,g as S,h as N,j as q}from"../chunks/scheduler.B0JEHspW.js";import{S as I,i as $}from"../chunks/index.jKw0lUt7.js";import{a as j,G as B,s as U,b as z,c as O}from"../chunks/firebase.oGd3CV5t.js";function A(c){let t,l="Sign in with Google",a,s;return{c(){t=d("button"),t.textContent=l,this.h()},l(e){t=m(e,"BUTTON",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-eubzr8"&&(t.textContent=l),this.h()},h(){h(t,"class","btn btn-primary")},m(e,n){p(e,t,n),a||(s=P(t,"click",c[1]),a=!0)},p:g,d(e){e&&u(t),a=!1,s()}}}function D(c){let t,l,a=c[0].displayName+"",s,e,n,_="You are logged in",f,r,v="Sign out",b,k;return{c(){t=d("h2"),l=C("Welcome, "),s=C(a),e=T(),n=d("p"),n.textContent=_,f=T(),r=d("button"),r.textContent=v,this.h()},l(i){t=m(i,"H2",{class:!0});var o=W(t);l=w(o,"Welcome, "),s=w(o,a),o.forEach(u),e=S(i),n=m(i,"P",{class:!0,"data-svelte-h":!0}),y(n)!=="svelte-1958qcl"&&(n.textContent=_),f=S(i),r=m(i,"BUTTON",{class:!0,"data-svelte-h":!0}),y(r)!=="svelte-11ll2qa"&&(r.textContent=v),this.h()},h(){h(t,"class","card-title"),h(n,"class","text-center text-success"),h(r,"class","btn btn-warning")},m(i,o){p(i,t,o),N(t,l),N(t,s),p(i,e,o),p(i,n,o),p(i,f,o),p(i,r,o),b||(k=P(r,"click",c[2]),b=!0)},p(i,o){o&1&&a!==(a=i[0].displayName+"")&&q(s,a)},d(i){i&&(u(t),u(e),u(n),u(f),u(r)),b=!1,k()}}}function H(c){let t;function l(e,n){return e[0]?D:A}let a=l(c),s=a(c);return{c(){s.c(),t=x()},l(e){s.l(e),t=x()},m(e,n){s.m(e,n),p(e,t,n)},p(e,[n]){a===(a=l(e))&&s?s.p(e,n):(s.d(1),s=a(e),s&&(s.c(),s.m(t.parentNode,t)))},i:g,o:g,d(e){e&&u(t),s.d(e)}}}function J(c,t,l){let a;G(c,j,n=>l(0,a=n));async function s(){const n=new B,f=await(await U(O,n)).user.getIdToken();await fetch("/api/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:f})})}async function e(){await fetch("/api/signin",{method:"DELETE"}),await z(O)}return[a,s,e]}class F extends I{constructor(t){super(),$(this,t,J,H,E,{})}}export{F as component};
