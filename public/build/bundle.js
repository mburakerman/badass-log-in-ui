var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function c(t){return document.createTextNode(t)}function p(){return c(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){return""===t?void 0:+t}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}function g(t,e){(null!=e||t.value)&&(t.value=e)}function v(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let $;function y(t){$=t}const b=[],x=[],_=[],w=[],q=Promise.resolve();let k=!1;function z(t){_.push(t)}let C=!1;const A=new Set;function E(){if(!C){C=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];y(e),L(e.$$)}for(b.length=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];A.has(e)||(A.add(e),e())}_.length=0}while(b.length);for(;w.length;)w.pop()();k=!1,C=!1,A.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const N=new Set;function O(t,e){t&&t.i&&(N.delete(t),t.i(e))}function P(t,n,l){const{fragment:a,on_mount:s,on_destroy:i,after_update:u}=t.$$;a&&a.m(n,l),z(()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(z)}function I(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(b.push(t),k||(k=!0,q.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,r,l,a,s,i,u=[-1]){const c=$;y(e);const p=r.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:n(),dirty:u};let d=!1;f.ctx=l?l(e,p,(t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),d&&M(e,t)),n}):[],f.update(),d=!0,o(f.before_update),f.fragment=!!a&&a(f.ctx),r.target&&(r.hydrate?f.fragment&&f.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):f.fragment&&f.fragment.c(),r.intro&&O(e.$$.fragment),P(e,r.target,r.anchor),E()),y(c)}class j{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function G(e){let n;return{c(){n=u("footer"),n.innerHTML='<p>\n    Made with 🖤\n    <a href="https://svelte.dev/" target="_blank" class="svelte-1lqkgev">Svelte.</a></p> \n  <p><small>\n      Inspired from\n      <a href="https://www.reddit.com/r/badUIbattles/comments/f35qs1/login_screen_with_alphabet_sliders/" target="_blank" class="svelte-1lqkgev">\n        here.\n      </a></small></p>',d(n,"class","svelte-1lqkgev")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&i(n)}}}class S extends j{constructor(t){super(),R(this,t,null,G,l,{})}}function T(t){let e;return{c(){e=u("p"),e.textContent="🛑 Ooops, try again.",v(e,"margin-top","15px"),v(e,"color","#ff3e00")},m(t,n){s(t,e,n)},d(t){t&&i(e)}}}function H(t){let e;return{c(){e=u("p"),e.innerHTML='<img width="50" src="https://i.hizliresim.com/AGZJov.png" alt="Peter Griffin Chicken">\n      You succesfully logged in.\n    ',v(e,"display","flex"),v(e,"align-items","center"),v(e,"margin-top","15px"),v(e,"color","#00CC32")},m(t,n){s(t,e,n)},d(t){t&&i(e)}}}function B(t){let e,n,r,l,h,$,y,b,x,_,w,q,k,z,C,A,E,L,M,R,j,G,B,J,U,Y,Z,D,F,K,Q,V,W,X,tt,et,nt,ot,rt,lt,at,st=t[6]&&T(),it=t[7]&&H();const ut=new S({});return{c(){var o;e=u("h1"),e.textContent="Log In",n=p(),r=u("form"),l=u("div"),h=u("label"),h.textContent="Name",$=p(),y=u("input"),b=p(),x=u("div"),_=u("input"),w=p(),q=u("output"),k=c(t[4]),z=p(),C=u("button"),C.textContent="Add",A=p(),E=u("div"),L=u("label"),L.textContent="Password",M=p(),R=u("input"),j=p(),G=u("div"),B=u("input"),J=p(),U=u("output"),Y=c(t[5]),Z=p(),D=u("button"),D.textContent="Add",F=p(),K=u("br"),Q=p(),V=u("hr"),W=p(),X=u("button"),X.textContent="LOG IN",tt=p(),et=u("p"),et.textContent="ℹ️",nt=p(),st&&st.c(),ot=p(),it&&it.c(),rt=p(),(o=ut.$$.fragment)&&o.c(),d(y,"type","text"),y.readOnly=!0,d(y,"class","svelte-p0hq7z"),d(_,"type","range"),d(_,"id","nameRange"),d(_,"step","1"),d(_,"max","25"),d(_,"class","svelte-p0hq7z"),d(q,"for","nameRange"),d(q,"class","svelte-p0hq7z"),d(C,"type","button"),d(x,"class","range-holder svelte-p0hq7z"),d(l,"class","input-holder svelte-p0hq7z"),d(R,"type","password"),R.readOnly=!0,d(R,"class","svelte-p0hq7z"),d(B,"type","range"),d(B,"id","passwordRange"),d(B,"step","1"),d(B,"max","25"),d(B,"class","svelte-p0hq7z"),d(U,"for","passwordRange"),d(U,"class","svelte-p0hq7z"),d(D,"type","button"),d(G,"class","range-holder svelte-p0hq7z"),d(E,"class","input-holder svelte-p0hq7z"),d(X,"type","button"),v(et,"margin-top","10px"),v(et,"font-size","13px"),d(et,"class","simptip-position-top simptip-movable"),d(et,"data-tooltip","Name: peter Password: ck"),d(r,"class","svelte-p0hq7z")},m(o,i){s(o,e,i),s(o,n,i),s(o,r,i),a(r,l),a(l,h),a(l,$),a(l,y),g(y,t[0]),a(l,b),a(l,x),a(x,_),g(_,t[2]),a(x,w),a(x,q),a(q,k),a(x,z),a(x,C),a(r,A),a(r,E),a(E,L),a(E,M),a(E,R),g(R,t[1]),a(E,j),a(E,G),a(G,B),g(B,t[3]),a(G,J),a(G,U),a(U,Y),a(G,Z),a(G,D),a(r,F),a(r,K),a(r,Q),a(r,V),a(r,W),a(r,X),a(r,tt),a(r,et),a(r,nt),st&&st.m(r,null),a(r,ot),it&&it.m(r,null),s(o,rt,i),P(ut,o,i),lt=!0,at=[f(y,"input",t[12]),f(_,"change",t[13]),f(_,"input",t[13]),f(_,"input",t[8]),f(C,"click",t[14]),f(R,"input",t[15]),f(B,"change",t[16]),f(B,"input",t[16]),f(B,"input",t[9]),f(D,"click",t[17]),f(X,"click",t[10])]},p(t,[e]){1&e&&y.value!==t[0]&&g(y,t[0]),4&e&&g(_,t[2]),(!lt||16&e)&&m(k,t[4]),2&e&&R.value!==t[1]&&g(R,t[1]),8&e&&g(B,t[3]),(!lt||32&e)&&m(Y,t[5]),t[6]?st||(st=T(),st.c(),st.m(r,ot)):st&&(st.d(1),st=null),t[7]?it||(it=H(),it.c(),it.m(r,null)):it&&(it.d(1),it=null)},i(t){lt||(O(ut.$$.fragment,t),lt=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),(void 0).c.push(()=>{N.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}(ut.$$.fragment,t),lt=!1},d(t){t&&i(e),t&&i(n),t&&i(r),st&&st.d(),it&&it.d(),t&&i(rt),I(ut,t),o(at)}}}function J(t,e,n){let o="",r="",l="abcdefghijklmnopqrstuvwxyz".split("");var a=0,s=0,i="a",u="a",c=!1,p=!1;return[o,r,a,s,i,u,c,p,function(){var t=this.value;n(4,i=l[t])},function(){var t=this.value;n(5,u=l[t])},function(){if(o.length<1||r.length<1)alert("Please fill out the form.");else{if("peter"==o&&"ck"==r)return n(6,c=!1),n(7,p=!0),void t();t(),n(6,c=!0),n(7,p=!1)}function t(){n(0,o=""),n(1,r=""),n(2,a=0),n(3,s=0),n(4,i="a"),n(5,u="a")}},l,function(){o=this.value,n(0,o)},function(){a=h(this.value),n(2,a)},()=>n(0,o+=i),function(){r=this.value,n(1,r)},function(){s=h(this.value),n(3,s)},()=>n(1,r+=u)]}return new class extends j{constructor(t){super(),R(this,t,J,B,l,{})}}({target:document.body,props:{name1:"world"}})}();
//# sourceMappingURL=bundle.js.map
