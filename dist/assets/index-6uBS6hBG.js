var oe=Object.defineProperty;var le=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var I=(e,t,n)=>(le(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function v(){}function te(e){return e()}function V(){return Object.create(null)}function F(e){e.forEach(te)}function ne(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let q;function re(e,t){return e===t?!0:(q||(q=document.createElement("a")),q.href=t,e===q.href)}function ae(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function k(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function $(){return L(" ")}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}let J;function S(e){J=e}const b=[],G=[];let z=[];const H=[],ce=Promise.resolve();let N=!1;function ue(){N||(N=!0,ce.then(ie))}function D(e){z.push(e)}const A=new Set;let y=0;function ie(){if(y!==0)return;const e=J;do{try{for(;y<b.length;){const t=b[y];y++,S(t),fe(t.$$)}}catch(t){throw b.length=0,y=0,t}for(S(null),b.length=0,y=0;G.length;)G.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];A.has(n)||(A.add(n),n())}z.length=0}while(b.length);for(;H.length;)H.pop()();N=!1,A.clear(),S(e)}function fe(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}function de(e){const t=[],n=[];z.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),z=t}const j=new Set;let me;function B(e,t){e&&e.i&&(j.delete(e),e.i(t))}function Q(e,t,n,i){if(e&&e.o){if(j.has(e))return;j.add(e),me.c.push(()=>{j.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function E(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Y(e){e&&e.c()}function M(e,t,n){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),D(()=>{const l=e.$$.on_mount.map(te).filter(ne);e.$$.on_destroy?e.$$.on_destroy.push(...l):F(l),e.$$.on_mount=[]}),o.forEach(D)}function R(e,t){const n=e.$$;n.fragment!==null&&(de(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){e.$$.dirty[0]===-1&&(b.push(e),ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,i,o,l,s=null,m=[-1]){const _=J;S(e);const u=e.$$={fragment:null,ctx:[],props:l,update:v,not_equal:o,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:V(),dirty:m,skip_bound:!1,root:t.target||_.$$.root};s&&s(u.root);let h=!1;if(u.ctx=n?n(e,t.props||{},(c,x,...g)=>{const a=g.length?g[0]:x;return u.ctx&&o(u.ctx[c],u.ctx[c]=a)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](a),h&&ge(e,c)),x}):[],u.update(),h=!0,F(u.before_update),u.fragment=i?i(u.ctx):!1,t.target){if(t.hydrate){const c=se(t.target);u.fragment&&u.fragment.l(c),c.forEach(C)}else u.fragment&&u.fragment.c();t.intro&&B(e.$$.fragment),M(e,t.target,t.anchor),ie()}S(_)}class U{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){R(this,1),this.$destroy=v}$on(t,n){if(!ne(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!ae(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pe);const he="/assets/instagram-y5Zd3PKq.webp",_e="/assets/gmail-6VUlIIdJ.webp",ve="/assets/consulta-wRDodwGF.jpeg",xe="/assets/facebook-poCYdx3c.png",$e="/assets/pegaso-onzynSIu.jpg";function Z(e,t,n){const i=e.slice();return i[2]=t[n].src,i[3]=t[n].alt,i[4]=t[n].url,i}function W(e,t,n){const i=e.slice();return i[7]=t[n].title,i[8]=t[n].p,i}function X(e){let t,n,i,o;return{c(){t=p("div"),n=p("p"),n.textContent=`${e[7]}`,i=$(),o=p("p"),o.textContent=`${e[8]}`,d(n,"class","text-2xl font-[600] text-start my-2"),d(t,"class","sm:w-5/6 text-center bg-[#e2e2e2] my-5 px-1 rounded-xl text-pretty")},m(l,s){O(l,t,s),f(t,n),f(t,i),f(t,o)},p:v,d(l){l&&C(t)}}}function ee(e){let t,n,i,o,l;return{c(){t=p("div"),n=p("a"),i=p("img"),l=$(),re(i.src,o=e[2])||d(i,"src",o),d(i,"alt",e[3]),d(i,"class","w-1/4 my-5 object-contain"),d(n,"href",e[4]),d(n,"target","_blank"),d(n,"class","flex justify-center"),d(t,"class","flex justify-center bg-[#e2e2e2] rounded-xl w-full min-h-full")},m(s,m){O(s,t,m),f(t,n),f(n,i),f(t,l)},p:v,d(s){s&&C(t)}}}function we(e){let t,n,i,o,l,s,m,_,u,h=E(e[0]),c=[];for(let a=0;a<h.length;a+=1)c[a]=X(W(e,h,a));let x=E(e[1]),g=[];for(let a=0;a<x.length;a+=1)g[a]=ee(Z(e,x,a));return{c(){t=p("main"),n=p("div"),i=p("p"),i.textContent="Consulta Provinciale Degli Studenti Firenze",o=$(),l=p("div"),l.innerHTML=`<img src="${$e}" alt="foto palazzo pegaso" class="rounded-3xl sm:w-5/6"/>`,s=$(),m=p("div");for(let a=0;a<c.length;a+=1)c[a].c();_=$(),u=p("div");for(let a=0;a<g.length;a+=1)g[a].c();d(i,"class","md:text-5xl sm:text-4xl text-3xl font-bold text-center pt-5"),d(l,"class","flex justify-center my-5 mx-2 max-w-5/6"),d(u,"class","grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4 sm:w-5/6 my-5"),d(m,"class","grid grid-cols-1 place-items-center mx-2 sm:mx-0"),d(n,"class","min-h-screen xl:w-2/3 lg:w-3/4 sm:w-5/6 mx-auto sm:my-2 bg-[#fffbff] sm:rounded-3xl")},m(a,w){O(a,t,w),f(t,n),f(n,i),f(n,o),f(n,l),f(n,s),f(n,m);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(m,null);f(m,_),f(m,u);for(let r=0;r<g.length;r+=1)g[r]&&g[r].m(u,null)},p(a,[w]){if(w&1){h=E(a[0]);let r;for(r=0;r<h.length;r+=1){const P=W(a,h,r);c[r]?c[r].p(P,w):(c[r]=X(P),c[r].c(),c[r].m(m,_))}for(;r<c.length;r+=1)c[r].d(1);c.length=h.length}if(w&2){x=E(a[1]);let r;for(r=0;r<x.length;r+=1){const P=Z(a,x,r);g[r]?g[r].p(P,w):(g[r]=ee(P),g[r].c(),g[r].m(u,null))}for(;r<g.length;r+=1)g[r].d(1);g.length=x.length}},i:v,o:v,d(a){a&&C(t),k(c,a),k(g,a)}}}function ye(e){return[[{title:"Rappresentanza Studenti",p:"La Consulta Provinciale degli Studenti di Firenze è un organismo rappresentativo che svolge un ruolo fondamentale nell'ambito della partecipazione studentesca e nella promozione degli interessi degli studenti a livello locale. Fondata con l'obiettivo di favorire il coinvolgimento attivo degli studenti nelle decisioni che riguardano il mondo scolastico e universitario, la Consulta funge da ponte tra gli studenti e le istituzioni educative."},{title:"Partecipazione Attiva",p:"Composta da rappresentanti eletti dagli studenti stessi, la Consulta Provinciale di Firenze si impegna a rappresentare in modo efficace le varie esigenze e opinioni degli studenti, contribuendo così a creare un dialogo costruttivo con le istituzioni scolastiche, universitarie e locali. Attraverso la partecipazione attiva, la Consulta cerca di affrontare le problematiche quotidiane che gli studenti possono incontrare nel loro percorso educativo, promuovendo al contempo iniziative e progetti che possano migliorare la qualità dell'istruzione e della vita studentesca."},{title:"Iniziative Studentesche",p:"Oltre a svolgere un ruolo di advocacy, la Consulta Provinciale degli Studenti di Firenze organizza anche eventi, incontri e campagne informative, al fine di sensibilizzare la comunità studentesca su questioni rilevanti e incoraggiare la partecipazione attiva. In questo modo, la Consulta diventa un punto di riferimento per gli studenti che desiderano essere coinvolti nella costruzione di un ambiente educativo più inclusivo, equo e partecipativo."}],[{src:he,alt:"instagram logo",url:"https://www.instagram.com/cps_firenze/"},{src:_e,alt:"gmail logo",url:"mailto:consultadifirenze@gmail.com"},{src:ve,alt:"website consulta",url:"https://cms.csa.fi.it/Consulta/tabid/259/Default.aspx"},{src:xe,alt:"facebook logo",url:"https://www.facebook.com/cpsfi/?locale=it_IT"}]]}class be extends U{constructor(t){super(),K(this,t,ye,we,T,{})}}function ze(e){let t,n,i,o,l,s,m,_,u;return{c(){t=p("main"),n=p("div"),i=p("div"),o=p("p"),l=L(e[1]),s=$(),m=p("a"),m.textContent="csm.csa.fi.it",_=L(" ."),d(m,"class","underline"),d(m,"href","https://cms.csa.fi.it/Consulta/tabid/259/Default.aspx"),d(o,"class",u=e[0]+" text-center text-xs"),d(i,"class","max-w-5/6"),d(n,"class","xl:w-2/3 lg:w-3/4 sm:w-5/6 mx-auto sm:my-2")},m(h,c){O(h,t,c),f(t,n),f(n,i),f(i,o),f(o,l),f(o,s),f(o,m),f(o,_)},p(h,[c]){c&1&&u!==(u=h[0]+" text-center text-xs")&&d(o,"class",u)},i:v,o:v,d(h){h&&C(t)}}}function Ce(e,t,n){let i="Questo sito non è in alcun modo affiliato, sostenuto o approvato ufficialmente dalla Consulta Provinciale degli Studenti di Firenze o da qualsiasi ente o istituzione correlata. Si tratta di un progetto indipendente creato con l'obiettivo di fornire informazioni e risorse utili agli studenti e ai membri della comunità interessati alle attività della Consulta. Ci impegniamo a fornire informazioni accurate e aggiornate, ma sottolineiamo che il contenuto di questo sito non rappresenta necessariamente le opinioni ufficiali della Consulta Provinciale degli Studenti di Firenze. Per informazioni ufficiali, comunicati stampa e aggiornamenti, si prega di consultare direttamente la fonte ufficiale ",{color:o}=t;return console.log(o),e.$$set=l=>{"color"in l&&n(0,o=l.color)},[o,i]}class Pe extends U{constructor(t){super(),K(this,t,Ce,ze,T,{color:0})}}function Se(e){let t,n,i,o,l;return n=new be({}),o=new Pe({props:{color:"text-[#D3D3D3]"}}),{c(){t=p("main"),Y(n.$$.fragment),i=$(),Y(o.$$.fragment)},m(s,m){O(s,t,m),M(n,t,null),f(t,i),M(o,t,null),l=!0},p:v,i(s){l||(B(n.$$.fragment,s),B(o.$$.fragment,s),l=!0)},o(s){Q(n.$$.fragment,s),Q(o.$$.fragment,s),l=!1},d(s){s&&C(t),R(n),R(o)}}}class Oe extends U{constructor(t){super(),K(this,t,null,Se,T,{})}}new Oe({target:document.getElementById("app")});