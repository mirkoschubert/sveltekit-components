import{S as P,i as D,s as O,k as h,w as x,O as R,d as c,m as _,x as M,g as y,y as C,q as B,o as E,B as k,e as q,t as g,c as b,a as w,h as v,b as V,H as i}from"../chunks/vendor-6428261d.js";import{C as j}from"../chunks/Content-d577e4e9.js";import{S as A}from"../chunks/Section-085170f0.js";import{B as H}from"../chunks/Button-74b64f58.js";function F(l){let e;return{c(){e=g("Learn More")},l(t){e=v(t,"Learn More")},m(t,n){y(t,e,n)},d(t){t&&c(e)}}}function J(l){let e;return{c(){e=g("Get Started")},l(t){e=v(t,"Get Started")},m(t,n){y(t,e,n)},d(t){t&&c(e)}}}function N(l){let e,t,n,s,o,$,L,f,I,K,u,z,m,S;return u=new H({props:{size:"lg",type:"ghost",href:"/docs/overview/introduction",$$slots:{default:[F]},$$scope:{ctx:l}}}),m=new H({props:{size:"lg",href:"/docs/overview/getting-started",$$slots:{default:[J]},$$scope:{ctx:l}}}),{c(){e=q("div"),t=q("h1"),n=g("SvelteKit Components"),s=h(),o=q("p"),$=g("By Mirko Schubert"),L=h(),f=q("p"),I=g("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vel ipsam hic sunt eos accusantium quam, expedita ullam dignissimos quo veniam quae error id dicta quaerat deleniti aut impedit? Inventore."),K=h(),x(u.$$.fragment),z=h(),x(m.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var a=w(e);t=b(a,"H1",{});var d=w(t);n=v(d,"SvelteKit Components"),d.forEach(c),s=_(a),o=b(a,"P",{});var p=w(o);$=v(p,"By Mirko Schubert"),p.forEach(c),L=_(a),f=b(a,"P",{});var G=w(f);I=v(G,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vel ipsam hic sunt eos accusantium quam, expedita ullam dignissimos quo veniam quae error id dicta quaerat deleniti aut impedit? Inventore."),G.forEach(c),K=_(a),M(u.$$.fragment,a),z=_(a),M(m.$$.fragment,a),a.forEach(c),this.h()},h(){V(e,"class","heading")},m(r,a){y(r,e,a),i(e,t),i(t,n),i(e,s),i(e,o),i(o,$),i(e,L),i(e,f),i(f,I),i(e,K),C(u,e,null),i(e,z),C(m,e,null),S=!0},p(r,a){const d={};a&1&&(d.$$scope={dirty:a,ctx:r}),u.$set(d);const p={};a&1&&(p.$$scope={dirty:a,ctx:r}),m.$set(p)},i(r){S||(B(u.$$.fragment,r),B(m.$$.fragment,r),S=!0)},o(r){E(u.$$.fragment,r),E(m.$$.fragment,r),S=!1},d(r){r&&c(e),k(u),k(m)}}}function Q(l){let e,t;return e=new A({props:{centered:!0,$$slots:{default:[N]},$$scope:{ctx:l}}}),{c(){x(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,s){C(e,n,s),t=!0},p(n,s){const o={};s&1&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function T(l){let e,t,n;return t=new j({props:{$$slots:{default:[Q]},$$scope:{ctx:l}}}),{c(){e=h(),x(t.$$.fragment),this.h()},l(s){R('[data-svelte="svelte-1h8ladl"]',document.head).forEach(c),e=_(s),M(t.$$.fragment,s),this.h()},h(){document.title="SvelteKit Components by Mirko Schubert"},m(s,o){y(s,e,o),C(t,s,o),n=!0},p(s,[o]){const $={};o&1&&($.$$scope={dirty:o,ctx:s}),t.$set($)},i(s){n||(B(t.$$.fragment,s),n=!0)},o(s){E(t.$$.fragment,s),n=!1},d(s){s&&c(e),k(t,s)}}}class Z extends P{constructor(e){super();D(this,e,null,T,O,{})}}export{Z as default};