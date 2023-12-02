(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Oo(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const nt={},nr=[],on=()=>{},Nu=()=>!1,Fu=/^on[^a-z]/,cs=n=>Fu.test(n),Bo=n=>n.startsWith("onUpdate:"),Et=Object.assign,zo=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ou=Object.prototype.hasOwnProperty,je=(n,e)=>Ou.call(n,e),He=Array.isArray,ir=n=>fs(n)==="[object Map]",Bu=n=>fs(n)==="[object Set]",Xe=n=>typeof n=="function",_t=n=>typeof n=="string",us=n=>typeof n=="symbol",at=n=>n!==null&&typeof n=="object",dc=n=>(at(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),zu=Object.prototype.toString,fs=n=>zu.call(n),Hu=n=>fs(n).slice(8,-1),Gu=n=>fs(n)==="[object Object]",Ho=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Kr=Oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Vu=/-(\w)/g,Di=hs(n=>n.replace(Vu,(e,t)=>t?t.toUpperCase():"")),Wu=/\B([A-Z])/g,Gi=hs(n=>n.replace(Wu,"-$1").toLowerCase()),pc=hs(n=>n.charAt(0).toUpperCase()+n.slice(1)),ws=hs(n=>n?`on${pc(n)}`:""),Ii=(n,e)=>!Object.is(n,e),Cs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Qr=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},ku=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ga;const po=()=>ga||(ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Go(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=_t(i)?Ku(i):Go(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(n)||at(n))return n}const Xu=/;(?![^(]*\))/g,qu=/:([^]+)/,Yu=/\/\*[^]*?\*\//g;function Ku(n){const e={};return n.replace(Yu,"").split(Xu).forEach(t=>{if(t){const i=t.split(qu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Vo(n){let e="";if(_t(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=Vo(n[t]);i&&(e+=i+" ")}else if(at(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ju="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$u=Oo(ju);function mc(n){return!!n||n===""}let qt;class Zu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=qt;try{return qt=this,e()}finally{qt=t}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ju(n,e=qt){e&&e.active&&e.effects.push(n)}function Qu(){return qt}const Wo=n=>{const e=new Set(n);return e.w=0,e.n=0,e},_c=n=>(n.w&On)>0,gc=n=>(n.n&On)>0,ef=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=On},tf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];_c(r)&&!gc(r)?r.delete(n):e[t++]=r,r.w&=~On,r.n&=~On}e.length=t}},mo=new WeakMap;let Qi=0,On=1;const _o=30;let jt;const Qn=Symbol(""),go=Symbol("");class ko{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ju(this,i)}run(){if(!this.active)return this.fn();let e=jt,t=Un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jt,jt=this,Un=!0,On=1<<++Qi,Qi<=_o?ef(this):va(this),this.fn()}finally{Qi<=_o&&tf(this),On=1<<--Qi,jt=this.parent,Un=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jt===this?this.deferStop=!0:this.active&&(va(this),this.onStop&&this.onStop(),this.active=!1)}}function va(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Un=!0;const vc=[];function Vi(){vc.push(Un),Un=!1}function Wi(){const n=vc.pop();Un=n===void 0?!0:n}function Dt(n,e,t){if(Un&&jt){let i=mo.get(n);i||mo.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Wo()),xc(r)}}function xc(n,e){let t=!1;Qi<=_o?gc(n)||(n.n|=On,t=!_c(n)):t=!n.has(jt),t&&(n.add(jt),jt.deps.push(n))}function xn(n,e,t,i,r,s){const a=mo.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&He(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!us(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":He(n)?Ho(t)&&o.push(a.get("length")):(o.push(a.get(Qn)),ir(n)&&o.push(a.get(go)));break;case"delete":He(n)||(o.push(a.get(Qn)),ir(n)&&o.push(a.get(go)));break;case"set":ir(n)&&o.push(a.get(Qn));break}if(o.length===1)o[0]&&vo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);vo(Wo(l))}}function vo(n,e){const t=He(n)?n:[...n];for(const i of t)i.computed&&xa(i);for(const i of t)i.computed||xa(i)}function xa(n,e){(n!==jt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const nf=Oo("__proto__,__v_isRef,__isVue"),Mc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(us)),Ma=rf();function rf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=$e(this);for(let s=0,a=this.length;s<a;s++)Dt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Vi();const i=$e(this)[e].apply(this,t);return Wi(),i}}),n}function sf(n){const e=$e(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class Sc{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw"&&i===(r?s?vf:bc:s?yc:Tc).get(e))return e;const a=He(e);if(!r){if(a&&je(Ma,t))return Reflect.get(Ma,t,i);if(t==="hasOwnProperty")return sf}const o=Reflect.get(e,t,i);return(us(t)?Mc.has(t):nf(t))||(r||Dt(e,"get",t),s)?o:wt(o)?a&&Ho(t)?o:o.value:at(o)?r?Ac(o):Yo(o):o}}class Ec extends Sc{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(or(s)&&wt(s)&&!wt(i))return!1;if(!this._shallow&&(!xo(i)&&!or(i)&&(s=$e(s),i=$e(i)),!He(e)&&wt(s)&&!wt(i)))return s.value=i,!0;const a=He(e)&&Ho(t)?Number(t)<e.length:je(e,t),o=Reflect.set(e,t,i,r);return e===$e(r)&&(a?Ii(i,s)&&xn(e,"set",t,i):xn(e,"add",t,i)),o}deleteProperty(e,t){const i=je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&xn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!us(t)||!Mc.has(t))&&Dt(e,"has",t),i}ownKeys(e){return Dt(e,"iterate",He(e)?"length":Qn),Reflect.ownKeys(e)}}class of extends Sc{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const af=new Ec,lf=new of,cf=new Ec(!0),Xo=n=>n,ds=n=>Reflect.getPrototypeOf(n);function xr(n,e,t=!1,i=!1){n=n.__v_raw;const r=$e(n),s=$e(e);t||(Ii(e,s)&&Dt(r,"get",e),Dt(r,"get",s));const{has:a}=ds(r),o=i?Xo:t?$o:jo;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Mr(n,e=!1){const t=this.__v_raw,i=$e(t),r=$e(n);return e||(Ii(n,r)&&Dt(i,"has",n),Dt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Sr(n,e=!1){return n=n.__v_raw,!e&&Dt($e(n),"iterate",Qn),Reflect.get(n,"size",n)}function Sa(n){n=$e(n);const e=$e(this);return ds(e).has.call(e,n)||(e.add(n),xn(e,"add",n,n)),this}function Ea(n,e){e=$e(e);const t=$e(this),{has:i,get:r}=ds(t);let s=i.call(t,n);s||(n=$e(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Ii(e,a)&&xn(t,"set",n,e):xn(t,"add",n,e),this}function Ta(n){const e=$e(this),{has:t,get:i}=ds(e);let r=t.call(e,n);r||(n=$e(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&xn(e,"delete",n,void 0),s}function ya(){const n=$e(this),e=n.size!==0,t=n.clear();return e&&xn(n,"clear",void 0,void 0),t}function Er(n,e){return function(i,r){const s=this,a=s.__v_raw,o=$e(a),l=e?Xo:n?$o:jo;return!n&&Dt(o,"iterate",Qn),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Tr(n,e,t){return function(...i){const r=this.__v_raw,s=$e(r),a=ir(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Xo:e?$o:jo;return!e&&Dt(s,"iterate",l?go:Qn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function En(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function uf(){const n={get(s){return xr(this,s)},get size(){return Sr(this)},has:Mr,add:Sa,set:Ea,delete:Ta,clear:ya,forEach:Er(!1,!1)},e={get(s){return xr(this,s,!1,!0)},get size(){return Sr(this)},has:Mr,add:Sa,set:Ea,delete:Ta,clear:ya,forEach:Er(!1,!0)},t={get(s){return xr(this,s,!0)},get size(){return Sr(this,!0)},has(s){return Mr.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Er(!0,!1)},i={get(s){return xr(this,s,!0,!0)},get size(){return Sr(this,!0)},has(s){return Mr.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Tr(s,!1,!1),t[s]=Tr(s,!0,!1),e[s]=Tr(s,!1,!0),i[s]=Tr(s,!0,!0)}),[n,t,e,i]}const[ff,hf,df,pf]=uf();function qo(n,e){const t=e?n?pf:df:n?hf:ff;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(je(t,r)&&r in i?t:i,r,s)}const mf={get:qo(!1,!1)},_f={get:qo(!1,!0)},gf={get:qo(!0,!1)},Tc=new WeakMap,yc=new WeakMap,bc=new WeakMap,vf=new WeakMap;function xf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mf(n){return n.__v_skip||!Object.isExtensible(n)?0:xf(Hu(n))}function Yo(n){return or(n)?n:Ko(n,!1,af,mf,Tc)}function Sf(n){return Ko(n,!1,cf,_f,yc)}function Ac(n){return Ko(n,!0,lf,gf,bc)}function Ko(n,e,t,i,r){if(!at(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Mf(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Ci(n){return or(n)?Ci(n.__v_raw):!!(n&&n.__v_isReactive)}function or(n){return!!(n&&n.__v_isReadonly)}function xo(n){return!!(n&&n.__v_isShallow)}function Rc(n){return Ci(n)||or(n)}function $e(n){const e=n&&n.__v_raw;return e?$e(e):n}function wc(n){return Qr(n,"__v_skip",!0),n}const jo=n=>at(n)?Yo(n):n,$o=n=>at(n)?Ac(n):n;function Ef(n){Un&&jt&&(n=$e(n),xc(n.dep||(n.dep=Wo())))}function Tf(n,e){n=$e(n);const t=n.dep;t&&vo(t)}function wt(n){return!!(n&&n.__v_isRef===!0)}function yf(n){return wt(n)?n.value:n}const bf={get:(n,e,t)=>yf(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return wt(r)&&!wt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Cc(n){return Ci(n)?n:new Proxy(n,bf)}class Af{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ko(e,()=>{this._dirty||(this._dirty=!0,Tf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=$e(this);return Ef(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Rf(n,e,t=!1){let i,r;const s=Xe(n);return s?(i=n,r=on):(i=n.get,r=n.set),new Af(i,r,s||!r,t)}function Dn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ps(s,e,t)}return r}function Jt(n,e,t,i){if(Xe(n)){const s=Dn(n,e,t,i);return s&&dc(s)&&s.catch(a=>{ps(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Jt(n[s],e,t,i));return r}function ps(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Dn(l,null,10,[n,a,o]);return}}wf(n,t,r,i)}function wf(n,e,t,i=!0){console.error(n)}let ar=!1,Mo=!1;const Mt=[];let rn=0;const Pi=[];let mn=null,jn=0;const Pc=Promise.resolve();let Zo=null;function Cf(n){const e=Zo||Pc;return n?e.then(this?n.bind(this):n):e}function Pf(n){let e=rn+1,t=Mt.length;for(;e<t;){const i=e+t>>>1,r=Mt[i],s=lr(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function Jo(n){(!Mt.length||!Mt.includes(n,ar&&n.allowRecurse?rn+1:rn))&&(n.id==null?Mt.push(n):Mt.splice(Pf(n.id),0,n),Lc())}function Lc(){!ar&&!Mo&&(Mo=!0,Zo=Pc.then(Dc))}function Lf(n){const e=Mt.indexOf(n);e>rn&&Mt.splice(e,1)}function Uf(n){He(n)?Pi.push(...n):(!mn||!mn.includes(n,n.allowRecurse?jn+1:jn))&&Pi.push(n),Lc()}function ba(n,e=ar?rn+1:0){for(;e<Mt.length;e++){const t=Mt[e];t&&t.pre&&(Mt.splice(e,1),e--,t())}}function Uc(n){if(Pi.length){const e=[...new Set(Pi)];if(Pi.length=0,mn){mn.push(...e);return}for(mn=e,mn.sort((t,i)=>lr(t)-lr(i)),jn=0;jn<mn.length;jn++)mn[jn]();mn=null,jn=0}}const lr=n=>n.id==null?1/0:n.id,Df=(n,e)=>{const t=lr(n)-lr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Dc(n){Mo=!1,ar=!0,Mt.sort(Df);try{for(rn=0;rn<Mt.length;rn++){const e=Mt[rn];e&&e.active!==!1&&Dn(e,null,14)}}finally{rn=0,Mt.length=0,Uc(),ar=!1,Zo=null,(Mt.length||Pi.length)&&Dc()}}function If(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:d}=i[u]||nt;d&&(r=t.map(m=>_t(m)?m.trim():m)),h&&(r=t.map(ku))}let o,l=i[o=ws(e)]||i[o=ws(Di(e))];!l&&s&&(l=i[o=ws(Gi(e))]),l&&Jt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Jt(c,n,6,r)}}function Ic(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Xe(n)){const l=c=>{const u=Ic(c,e,!0);u&&(o=!0,Et(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(at(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>a[l]=null):Et(a,s),at(n)&&i.set(n,a),a)}function ms(n,e){return!n||!cs(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,Gi(e))||je(n,e))}let sn=null,Nc=null;function es(n){const e=sn;return sn=n,Nc=n&&n.type.__scopeId||null,e}function Nf(n,e=sn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Na(-1);const s=es(e);let a;try{a=n(...r)}finally{es(s),i._d&&Na(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ps(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:m,ctx:x,inheritAttrs:v}=n;let p,f;const y=es(n);try{if(t.shapeFlag&4){const b=r||i,R=b;p=tn(u.call(R,b,h,s,m,d,x)),f=l}else{const b=e;p=tn(b.length>1?b(s,{attrs:l,slots:o,emit:c}):b(s,null)),f=e.props?l:Ff(l)}}catch(b){ps(b,n,1),p=ei(cr)}let E=p;if(f&&v!==!1){const b=Object.keys(f),{shapeFlag:R}=E;b.length&&R&7&&(a&&b.some(Bo)&&(f=Of(f,a)),E=Ni(E,f))}return t.dirs&&(E=Ni(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),p=E,es(y),p}const Ff=n=>{let e;for(const t in n)(t==="class"||t==="style"||cs(t))&&((e||(e={}))[t]=n[t]);return e},Of=(n,e)=>{const t={};for(const i in n)(!Bo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Bf(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Aa(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(a[d]!==i[d]&&!ms(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Aa(i,a,c):!0:!!a;return!1}function Aa(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ms(t,s))return!0}return!1}function zf({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Hf=Symbol.for("v-ndc"),Gf=n=>n.__isSuspense;function Vf(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):Uf(n)}const yr={};function Ls(n,e,t){return Fc(n,e,t)}function Fc(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=nt){var o;const l=Qu()===((o=St)==null?void 0:o.scope)?St:null;let c,u=!1,h=!1;if(wt(n)?(c=()=>n.value,u=xo(n)):Ci(n)?(c=()=>n,i=!0):He(n)?(h=!0,u=n.some(b=>Ci(b)||xo(b)),c=()=>n.map(b=>{if(wt(b))return b.value;if(Ci(b))return Ai(b);if(Xe(b))return Dn(b,l,2)})):Xe(n)?e?c=()=>Dn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Jt(n,l,3,[m])}:c=on,e&&i){const b=c;c=()=>Ai(b())}let d,m=b=>{d=y.onStop=()=>{Dn(b,l,4),d=y.onStop=void 0}},x;if(ur)if(m=on,e?t&&Jt(e,l,3,[c(),h?[]:void 0,m]):c(),r==="sync"){const b=Oh();x=b.__watcherHandles||(b.__watcherHandles=[])}else return on;let v=h?new Array(n.length).fill(yr):yr;const p=()=>{if(y.active)if(e){const b=y.run();(i||u||(h?b.some((R,L)=>Ii(R,v[L])):Ii(b,v)))&&(d&&d(),Jt(e,l,3,[b,v===yr?void 0:h&&v[0]===yr?[]:v,m]),v=b)}else y.run()};p.allowRecurse=!!e;let f;r==="sync"?f=p:r==="post"?f=()=>Pt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),f=()=>Jo(p));const y=new ko(c,f);e?t?p():v=y.run():r==="post"?Pt(y.run.bind(y),l&&l.suspense):y.run();const E=()=>{y.stop(),l&&l.scope&&zo(l.scope.effects,y)};return x&&x.push(E),E}function Wf(n,e,t){const i=this.proxy,r=_t(n)?n.includes(".")?Oc(i,n):()=>i[n]:n.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,t=e);const a=St;Fi(this);const o=Fc(r,s.bind(i),t);return a?Fi(a):ti(),o}function Oc(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ai(n,e){if(!at(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),wt(n))Ai(n.value,e);else if(He(n))for(let t=0;t<n.length;t++)Ai(n[t],e);else if(Bu(n)||ir(n))n.forEach(t=>{Ai(t,e)});else if(Gu(n))for(const t in n)Ai(n[t],e);return n}function Gn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Vi(),Jt(l,t,8,[n.el,o,n,e]),Wi())}}const jr=n=>!!n.type.__asyncLoader,Bc=n=>n.type.__isKeepAlive;function kf(n,e){zc(n,"a",e)}function Xf(n,e){zc(n,"da",e)}function zc(n,e,t=St){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(_s(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Bc(r.parent.vnode)&&qf(i,e,t,r),r=r.parent}}function qf(n,e,t,i){const r=_s(e,n,i,!0);Hc(()=>{zo(i[e],r)},t)}function _s(n,e,t=St,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Vi(),Fi(t);const o=Jt(e,t,n,a);return ti(),Wi(),o});return i?r.unshift(s):r.push(s),s}}const Sn=n=>(e,t=St)=>(!ur||n==="sp")&&_s(n,(...i)=>e(...i),t),Yf=Sn("bm"),Kf=Sn("m"),jf=Sn("bu"),$f=Sn("u"),Zf=Sn("bum"),Hc=Sn("um"),Jf=Sn("sp"),Qf=Sn("rtg"),eh=Sn("rtc");function th(n,e=St){_s("ec",n,e)}const So=n=>n?$c(n)?ra(n)||n.proxy:So(n.parent):null,rr=Et(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>So(n.parent),$root:n=>So(n.root),$emit:n=>n.emit,$options:n=>Qo(n),$forceUpdate:n=>n.f||(n.f=()=>Jo(n.update)),$nextTick:n=>n.n||(n.n=Cf.bind(n.proxy)),$watch:n=>Wf.bind(n)}),Us=(n,e)=>n!==nt&&!n.__isScriptSetup&&je(n,e),nh={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Us(i,e))return a[e]=1,i[e];if(r!==nt&&je(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&je(c,e))return a[e]=3,s[e];if(t!==nt&&je(t,e))return a[e]=4,t[e];Eo&&(a[e]=0)}}const u=rr[e];let h,d;if(u)return e==="$attrs"&&Dt(n,"get",e),u(n);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==nt&&je(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,je(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Us(r,e)?(r[e]=t,!0):i!==nt&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==nt&&je(n,a)||Us(e,a)||(o=s[0])&&je(o,a)||je(i,a)||je(rr,a)||je(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ra(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Eo=!0;function ih(n){const e=Qo(n),t=n.proxy,i=n.ctx;Eo=!1,e.beforeCreate&&wa(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:x,activated:v,deactivated:p,beforeDestroy:f,beforeUnmount:y,destroyed:E,unmounted:b,render:R,renderTracked:L,renderTriggered:I,errorCaptured:Y,serverPrefetch:S,expose:A,inheritAttrs:K,components:se,directives:ue,filters:D}=e;if(c&&rh(c,i,null),a)for(const G in a){const te=a[G];Xe(te)&&(i[G]=te.bind(t))}if(r){const G=r.call(t,t);at(G)&&(n.data=Yo(G))}if(Eo=!0,s)for(const G in s){const te=s[G],Q=Xe(te)?te.bind(t,t):Xe(te.get)?te.get.bind(t,t):on,ae=!Xe(te)&&Xe(te.set)?te.set.bind(t):on,le=Nh({get:Q,set:ae});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>le.value,set:ge=>le.value=ge})}if(o)for(const G in o)Gc(o[G],i,t,G);if(l){const G=Xe(l)?l.call(t):l;Reflect.ownKeys(G).forEach(te=>{uh(te,G[te])})}u&&wa(u,n,"c");function Z(G,te){He(te)?te.forEach(Q=>G(Q.bind(t))):te&&G(te.bind(t))}if(Z(Yf,h),Z(Kf,d),Z(jf,m),Z($f,x),Z(kf,v),Z(Xf,p),Z(th,Y),Z(eh,L),Z(Qf,I),Z(Zf,y),Z(Hc,b),Z(Jf,S),He(A))if(A.length){const G=n.exposed||(n.exposed={});A.forEach(te=>{Object.defineProperty(G,te,{get:()=>t[te],set:Q=>t[te]=Q})})}else n.exposed||(n.exposed={});R&&n.render===on&&(n.render=R),K!=null&&(n.inheritAttrs=K),se&&(n.components=se),ue&&(n.directives=ue)}function rh(n,e,t=on){He(n)&&(n=To(n));for(const i in n){const r=n[i];let s;at(r)?"default"in r?s=$r(r.from||i,r.default,!0):s=$r(r.from||i):s=$r(r),wt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function wa(n,e,t){Jt(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Gc(n,e,t,i){const r=i.includes(".")?Oc(t,i):()=>t[i];if(_t(n)){const s=e[n];Xe(s)&&Ls(r,s)}else if(Xe(n))Ls(r,n.bind(t));else if(at(n))if(He(n))n.forEach(s=>Gc(s,e,t,i));else{const s=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(s)&&Ls(r,s,n)}}function Qo(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ts(l,c,a,!0)),ts(l,e,a)),at(e)&&s.set(e,l),l}function ts(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ts(n,s,t,!0),r&&r.forEach(a=>ts(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=sh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const sh={data:Ca,props:Pa,emits:Pa,methods:er,computed:er,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:er,directives:er,watch:ah,provide:Ca,inject:oh};function Ca(n,e){return e?n?function(){return Et(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function oh(n,e){return er(To(n),To(e))}function To(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function er(n,e){return n?Et(Object.create(null),n,e):e}function Pa(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:Et(Object.create(null),Ra(n),Ra(e??{})):e}function ah(n,e){if(!n)return e;if(!e)return n;const t=Et(Object.create(null),n);for(const i in e)t[i]=bt(n[i],e[i]);return t}function Vc(){return{app:null,config:{isNativeTag:Nu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lh=0;function ch(n,e){return function(i,r=null){Xe(i)||(i=Et({},i)),r!=null&&!at(r)&&(r=null);const s=Vc(),a=new WeakSet;let o=!1;const l=s.app={_uid:lh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Bh,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Xe(c.install)?(a.add(c),c.install(l,...u)):Xe(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!o){const d=ei(i,r);return d.appContext=s,u&&e?e(d,c):n(d,c,h),o=!0,l._container=c,c.__vue_app__=l,ra(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ns=l;try{return c()}finally{ns=null}}};return l}}let ns=null;function uh(n,e){if(St){let t=St.provides;const i=St.parent&&St.parent.provides;i===t&&(t=St.provides=Object.create(i)),t[n]=e}}function $r(n,e,t=!1){const i=St||sn;if(i||ns){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ns._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}function fh(n,e,t,i=!1){const r={},s={};Qr(s,vs,1),n.propsDefaults=Object.create(null),Wc(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Sf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function hh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=$e(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ms(n.emitsOptions,d))continue;const m=e[d];if(l)if(je(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=Di(d);r[x]=yo(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Wc(n,e,r,s)&&(c=!0);let u;for(const h in o)(!e||!je(e,h)&&((u=Gi(h))===h||!je(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=yo(l,o,h,void 0,n,!0)):delete r[h]);if(s!==o)for(const h in s)(!e||!je(e,h))&&(delete s[h],c=!0)}c&&xn(n,"set","$attrs")}function Wc(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Kr(l))continue;const c=e[l];let u;r&&je(r,u=Di(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ms(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=$e(t),c=o||nt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=yo(r,l,h,c[h],n,!je(c,h))}}return a}function yo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Xe(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Fi(r),i=c[t]=l.call(null,e),ti())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Gi(t))&&(i=!0))}return i}function kc(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Xe(n)){const u=h=>{l=!0;const[d,m]=kc(h,e,!0);Et(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return at(n)&&i.set(n,nr),nr;if(He(s))for(let u=0;u<s.length;u++){const h=Di(s[u]);La(h)&&(a[h]=nt)}else if(s)for(const u in s){const h=Di(u);if(La(h)){const d=s[u],m=a[h]=He(d)||Xe(d)?{type:d}:Et({},d);if(m){const x=Ia(Boolean,m.type),v=Ia(String,m.type);m[0]=x>-1,m[1]=v<0||x<v,(x>-1||je(m,"default"))&&o.push(h)}}}const c=[a,o];return at(n)&&i.set(n,c),c}function La(n){return n[0]!=="$"}function Ua(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Da(n,e){return Ua(n)===Ua(e)}function Ia(n,e){return He(e)?e.findIndex(t=>Da(t,n)):Xe(e)&&Da(e,n)?0:-1}const Xc=n=>n[0]==="_"||n==="$stable",ea=n=>He(n)?n.map(tn):[tn(n)],dh=(n,e,t)=>{if(e._n)return e;const i=Nf((...r)=>ea(e(...r)),t);return i._c=!1,i},qc=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Xc(r))continue;const s=n[r];if(Xe(s))e[r]=dh(r,s,i);else if(s!=null){const a=ea(s);e[r]=()=>a}}},Yc=(n,e)=>{const t=ea(e);n.slots.default=()=>t},ph=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=$e(e),Qr(e,"_",t)):qc(e,n.slots={})}else n.slots={},e&&Yc(n,e);Qr(n.slots,vs,1)},mh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(Et(r,e),!t&&o===1&&delete r._):(s=!e.$stable,qc(e,r)),a=e}else e&&(Yc(n,e),a={default:1});if(s)for(const o in r)!Xc(o)&&a[o]==null&&delete r[o]};function bo(n,e,t,i,r=!1){if(He(n)){n.forEach((d,m)=>bo(d,e&&(He(e)?e[m]:e),t,i,r));return}if(jr(i)&&!r)return;const s=i.shapeFlag&4?ra(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===nt?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(_t(c)?(u[c]=null,je(h,c)&&(h[c]=null)):wt(c)&&(c.value=null)),Xe(l))Dn(l,o,12,[a,u]);else{const d=_t(l),m=wt(l);if(d||m){const x=()=>{if(n.f){const v=d?je(h,l)?h[l]:u[l]:l.value;r?He(v)&&zo(v,s):He(v)?v.includes(s)||v.push(s):d?(u[l]=[s],je(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,je(h,l)&&(h[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,Pt(x,t)):x()}}}const Pt=Vf;function _h(n){return gh(n)}function gh(n,e){const t=po();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=on,insertStaticContent:x}=n,v=(g,w,U,z=null,F=null,ie=null,ne=!1,W=null,re=!!w.dynamicChildren)=>{if(g===w)return;g&&!Yi(g,w)&&(z=ye(g),ge(g,F,ie,!0),g=null),w.patchFlag===-2&&(re=!1,w.dynamicChildren=null);const{type:ee,ref:ve,shapeFlag:M}=w;switch(ee){case gs:p(g,w,U,z);break;case cr:f(g,w,U,z);break;case Ds:g==null&&y(w,U,z,ne);break;case _n:se(g,w,U,z,F,ie,ne,W,re);break;default:M&1?R(g,w,U,z,F,ie,ne,W,re):M&6?ue(g,w,U,z,F,ie,ne,W,re):(M&64||M&128)&&ee.process(g,w,U,z,F,ie,ne,W,re,we)}ve!=null&&F&&bo(ve,g&&g.ref,ie,w||g,!w)},p=(g,w,U,z)=>{if(g==null)i(w.el=o(w.children),U,z);else{const F=w.el=g.el;w.children!==g.children&&c(F,w.children)}},f=(g,w,U,z)=>{g==null?i(w.el=l(w.children||""),U,z):w.el=g.el},y=(g,w,U,z)=>{[g.el,g.anchor]=x(g.children,w,U,z,g.el,g.anchor)},E=({el:g,anchor:w},U,z)=>{let F;for(;g&&g!==w;)F=d(g),i(g,U,z),g=F;i(w,U,z)},b=({el:g,anchor:w})=>{let U;for(;g&&g!==w;)U=d(g),r(g),g=U;r(w)},R=(g,w,U,z,F,ie,ne,W,re)=>{ne=ne||w.type==="svg",g==null?L(w,U,z,F,ie,ne,W,re):S(g,w,F,ie,ne,W,re)},L=(g,w,U,z,F,ie,ne,W)=>{let re,ee;const{type:ve,props:M,shapeFlag:_,transition:P,dirs:q}=g;if(re=g.el=a(g.type,ie,M&&M.is,M),_&8?u(re,g.children):_&16&&Y(g.children,re,null,z,F,ie&&ve!=="foreignObject",ne,W),q&&Gn(g,null,z,"created"),I(re,g,g.scopeId,ne,z),M){for(const J in M)J!=="value"&&!Kr(J)&&s(re,J,null,M[J],ie,g.children,z,F,Ee);"value"in M&&s(re,"value",null,M.value),(ee=M.onVnodeBeforeMount)&&en(ee,z,g)}q&&Gn(g,null,z,"beforeMount");const j=vh(F,P);j&&P.beforeEnter(re),i(re,w,U),((ee=M&&M.onVnodeMounted)||j||q)&&Pt(()=>{ee&&en(ee,z,g),j&&P.enter(re),q&&Gn(g,null,z,"mounted")},F)},I=(g,w,U,z,F)=>{if(U&&m(g,U),z)for(let ie=0;ie<z.length;ie++)m(g,z[ie]);if(F){let ie=F.subTree;if(w===ie){const ne=F.vnode;I(g,ne,ne.scopeId,ne.slotScopeIds,F.parent)}}},Y=(g,w,U,z,F,ie,ne,W,re=0)=>{for(let ee=re;ee<g.length;ee++){const ve=g[ee]=W?wn(g[ee]):tn(g[ee]);v(null,ve,w,U,z,F,ie,ne,W)}},S=(g,w,U,z,F,ie,ne)=>{const W=w.el=g.el;let{patchFlag:re,dynamicChildren:ee,dirs:ve}=w;re|=g.patchFlag&16;const M=g.props||nt,_=w.props||nt;let P;U&&Vn(U,!1),(P=_.onVnodeBeforeUpdate)&&en(P,U,w,g),ve&&Gn(w,g,U,"beforeUpdate"),U&&Vn(U,!0);const q=F&&w.type!=="foreignObject";if(ee?A(g.dynamicChildren,ee,W,U,z,q,ie):ne||te(g,w,W,null,U,z,q,ie,!1),re>0){if(re&16)K(W,w,M,_,U,z,F);else if(re&2&&M.class!==_.class&&s(W,"class",null,_.class,F),re&4&&s(W,"style",M.style,_.style,F),re&8){const j=w.dynamicProps;for(let J=0;J<j.length;J++){const me=j[J],ce=M[me],_e=_[me];(_e!==ce||me==="value")&&s(W,me,ce,_e,F,g.children,U,z,Ee)}}re&1&&g.children!==w.children&&u(W,w.children)}else!ne&&ee==null&&K(W,w,M,_,U,z,F);((P=_.onVnodeUpdated)||ve)&&Pt(()=>{P&&en(P,U,w,g),ve&&Gn(w,g,U,"updated")},z)},A=(g,w,U,z,F,ie,ne)=>{for(let W=0;W<w.length;W++){const re=g[W],ee=w[W],ve=re.el&&(re.type===_n||!Yi(re,ee)||re.shapeFlag&70)?h(re.el):U;v(re,ee,ve,null,z,F,ie,ne,!0)}},K=(g,w,U,z,F,ie,ne)=>{if(U!==z){if(U!==nt)for(const W in U)!Kr(W)&&!(W in z)&&s(g,W,U[W],null,ne,w.children,F,ie,Ee);for(const W in z){if(Kr(W))continue;const re=z[W],ee=U[W];re!==ee&&W!=="value"&&s(g,W,ee,re,ne,w.children,F,ie,Ee)}"value"in z&&s(g,"value",U.value,z.value)}},se=(g,w,U,z,F,ie,ne,W,re)=>{const ee=w.el=g?g.el:o(""),ve=w.anchor=g?g.anchor:o("");let{patchFlag:M,dynamicChildren:_,slotScopeIds:P}=w;P&&(W=W?W.concat(P):P),g==null?(i(ee,U,z),i(ve,U,z),Y(w.children,U,ve,F,ie,ne,W,re)):M>0&&M&64&&_&&g.dynamicChildren?(A(g.dynamicChildren,_,U,F,ie,ne,W),(w.key!=null||F&&w===F.subTree)&&Kc(g,w,!0)):te(g,w,U,ve,F,ie,ne,W,re)},ue=(g,w,U,z,F,ie,ne,W,re)=>{w.slotScopeIds=W,g==null?w.shapeFlag&512?F.ctx.activate(w,U,z,ne,re):D(w,U,z,F,ie,ne,re):k(g,w,re)},D=(g,w,U,z,F,ie,ne)=>{const W=g.component=Ch(g,z,F);if(Bc(g)&&(W.ctx.renderer=we),Ph(W),W.asyncDep){if(F&&F.registerDep(W,Z),!g.el){const re=W.subTree=ei(cr);f(null,re,w,U)}return}Z(W,g,w,U,F,ie,ne)},k=(g,w,U)=>{const z=w.component=g.component;if(Bf(g,w,U))if(z.asyncDep&&!z.asyncResolved){G(z,w,U);return}else z.next=w,Lf(z.update),z.update();else w.el=g.el,z.vnode=w},Z=(g,w,U,z,F,ie,ne)=>{const W=()=>{if(g.isMounted){let{next:ve,bu:M,u:_,parent:P,vnode:q}=g,j=ve,J;Vn(g,!1),ve?(ve.el=q.el,G(g,ve,ne)):ve=q,M&&Cs(M),(J=ve.props&&ve.props.onVnodeBeforeUpdate)&&en(J,P,ve,q),Vn(g,!0);const me=Ps(g),ce=g.subTree;g.subTree=me,v(ce,me,h(ce.el),ye(ce),g,F,ie),ve.el=me.el,j===null&&zf(g,me.el),_&&Pt(_,F),(J=ve.props&&ve.props.onVnodeUpdated)&&Pt(()=>en(J,P,ve,q),F)}else{let ve;const{el:M,props:_}=w,{bm:P,m:q,parent:j}=g,J=jr(w);if(Vn(g,!1),P&&Cs(P),!J&&(ve=_&&_.onVnodeBeforeMount)&&en(ve,j,w),Vn(g,!0),M&&Fe){const me=()=>{g.subTree=Ps(g),Fe(M,g.subTree,g,F,null)};J?w.type.__asyncLoader().then(()=>!g.isUnmounted&&me()):me()}else{const me=g.subTree=Ps(g);v(null,me,U,z,g,F,ie),w.el=me.el}if(q&&Pt(q,F),!J&&(ve=_&&_.onVnodeMounted)){const me=w;Pt(()=>en(ve,j,me),F)}(w.shapeFlag&256||j&&jr(j.vnode)&&j.vnode.shapeFlag&256)&&g.a&&Pt(g.a,F),g.isMounted=!0,w=U=z=null}},re=g.effect=new ko(W,()=>Jo(ee),g.scope),ee=g.update=()=>re.run();ee.id=g.uid,Vn(g,!0),ee()},G=(g,w,U)=>{w.component=g;const z=g.vnode.props;g.vnode=w,g.next=null,hh(g,w.props,z,U),mh(g,w.children,U),Vi(),ba(),Wi()},te=(g,w,U,z,F,ie,ne,W,re=!1)=>{const ee=g&&g.children,ve=g?g.shapeFlag:0,M=w.children,{patchFlag:_,shapeFlag:P}=w;if(_>0){if(_&128){ae(ee,M,U,z,F,ie,ne,W,re);return}else if(_&256){Q(ee,M,U,z,F,ie,ne,W,re);return}}P&8?(ve&16&&Ee(ee,F,ie),M!==ee&&u(U,M)):ve&16?P&16?ae(ee,M,U,z,F,ie,ne,W,re):Ee(ee,F,ie,!0):(ve&8&&u(U,""),P&16&&Y(M,U,z,F,ie,ne,W,re))},Q=(g,w,U,z,F,ie,ne,W,re)=>{g=g||nr,w=w||nr;const ee=g.length,ve=w.length,M=Math.min(ee,ve);let _;for(_=0;_<M;_++){const P=w[_]=re?wn(w[_]):tn(w[_]);v(g[_],P,U,null,F,ie,ne,W,re)}ee>ve?Ee(g,F,ie,!0,!1,M):Y(w,U,z,F,ie,ne,W,re,M)},ae=(g,w,U,z,F,ie,ne,W,re)=>{let ee=0;const ve=w.length;let M=g.length-1,_=ve-1;for(;ee<=M&&ee<=_;){const P=g[ee],q=w[ee]=re?wn(w[ee]):tn(w[ee]);if(Yi(P,q))v(P,q,U,null,F,ie,ne,W,re);else break;ee++}for(;ee<=M&&ee<=_;){const P=g[M],q=w[_]=re?wn(w[_]):tn(w[_]);if(Yi(P,q))v(P,q,U,null,F,ie,ne,W,re);else break;M--,_--}if(ee>M){if(ee<=_){const P=_+1,q=P<ve?w[P].el:z;for(;ee<=_;)v(null,w[ee]=re?wn(w[ee]):tn(w[ee]),U,q,F,ie,ne,W,re),ee++}}else if(ee>_)for(;ee<=M;)ge(g[ee],F,ie,!0),ee++;else{const P=ee,q=ee,j=new Map;for(ee=q;ee<=_;ee++){const Oe=w[ee]=re?wn(w[ee]):tn(w[ee]);Oe.key!=null&&j.set(Oe.key,ee)}let J,me=0;const ce=_-q+1;let _e=!1,Pe=0;const qe=new Array(ce);for(ee=0;ee<ce;ee++)qe[ee]=0;for(ee=P;ee<=M;ee++){const Oe=g[ee];if(me>=ce){ge(Oe,F,ie,!0);continue}let Ae;if(Oe.key!=null)Ae=j.get(Oe.key);else for(J=q;J<=_;J++)if(qe[J-q]===0&&Yi(Oe,w[J])){Ae=J;break}Ae===void 0?ge(Oe,F,ie,!0):(qe[Ae-q]=ee+1,Ae>=Pe?Pe=Ae:_e=!0,v(Oe,w[Ae],U,null,F,ie,ne,W,re),me++)}const fe=_e?xh(qe):nr;for(J=fe.length-1,ee=ce-1;ee>=0;ee--){const Oe=q+ee,Ae=w[Oe],Le=Oe+1<ve?w[Oe+1].el:z;qe[ee]===0?v(null,Ae,U,Le,F,ie,ne,W,re):_e&&(J<0||ee!==fe[J]?le(Ae,U,Le,2):J--)}}},le=(g,w,U,z,F=null)=>{const{el:ie,type:ne,transition:W,children:re,shapeFlag:ee}=g;if(ee&6){le(g.component.subTree,w,U,z);return}if(ee&128){g.suspense.move(w,U,z);return}if(ee&64){ne.move(g,w,U,we);return}if(ne===_n){i(ie,w,U);for(let M=0;M<re.length;M++)le(re[M],w,U,z);i(g.anchor,w,U);return}if(ne===Ds){E(g,w,U);return}if(z!==2&&ee&1&&W)if(z===0)W.beforeEnter(ie),i(ie,w,U),Pt(()=>W.enter(ie),F);else{const{leave:M,delayLeave:_,afterLeave:P}=W,q=()=>i(ie,w,U),j=()=>{M(ie,()=>{q(),P&&P()})};_?_(ie,q,j):j()}else i(ie,w,U)},ge=(g,w,U,z=!1,F=!1)=>{const{type:ie,props:ne,ref:W,children:re,dynamicChildren:ee,shapeFlag:ve,patchFlag:M,dirs:_}=g;if(W!=null&&bo(W,null,U,g,!0),ve&256){w.ctx.deactivate(g);return}const P=ve&1&&_,q=!jr(g);let j;if(q&&(j=ne&&ne.onVnodeBeforeUnmount)&&en(j,w,g),ve&6)xe(g.component,U,z);else{if(ve&128){g.suspense.unmount(U,z);return}P&&Gn(g,null,w,"beforeUnmount"),ve&64?g.type.remove(g,w,U,F,we,z):ee&&(ie!==_n||M>0&&M&64)?Ee(ee,w,U,!1,!0):(ie===_n&&M&384||!F&&ve&16)&&Ee(re,w,U),z&&X(g)}(q&&(j=ne&&ne.onVnodeUnmounted)||P)&&Pt(()=>{j&&en(j,w,g),P&&Gn(g,null,w,"unmounted")},U)},X=g=>{const{type:w,el:U,anchor:z,transition:F}=g;if(w===_n){oe(U,z);return}if(w===Ds){b(g);return}const ie=()=>{r(U),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(g.shapeFlag&1&&F&&!F.persisted){const{leave:ne,delayLeave:W}=F,re=()=>ne(U,ie);W?W(g.el,ie,re):re()}else ie()},oe=(g,w)=>{let U;for(;g!==w;)U=d(g),r(g),g=U;r(w)},xe=(g,w,U)=>{const{bum:z,scope:F,update:ie,subTree:ne,um:W}=g;z&&Cs(z),F.stop(),ie&&(ie.active=!1,ge(ne,g,w,U)),W&&Pt(W,w),Pt(()=>{g.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ee=(g,w,U,z=!1,F=!1,ie=0)=>{for(let ne=ie;ne<g.length;ne++)ge(g[ne],w,U,z,F)},ye=g=>g.shapeFlag&6?ye(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),Ne=(g,w,U)=>{g==null?w._vnode&&ge(w._vnode,null,null,!0):v(w._vnode||null,g,w,null,null,null,U),ba(),Uc(),w._vnode=g},we={p:v,um:ge,m:le,r:X,mt:D,mc:Y,pc:te,pbc:A,n:ye,o:n};let Ce,Fe;return e&&([Ce,Fe]=e(we)),{render:Ne,hydrate:Ce,createApp:ch(Ne,Ce)}}function Vn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function vh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Kc(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=wn(r[s]),o.el=a.el),t||Kc(a,o)),o.type===gs&&(o.el=a.el)}}function xh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Mh=n=>n.__isTeleport,_n=Symbol.for("v-fgt"),gs=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),Ds=Symbol.for("v-stc");let Ri=null,ta=1;function Na(n){ta+=n}function Sh(n){return n?n.__v_isVNode===!0:!1}function Yi(n,e){return n.type===e.type&&n.key===e.key}const vs="__vInternal",jc=({key:n})=>n??null,Zr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||wt(n)||Xe(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function Eh(n,e=null,t=null,i=0,r=null,s=n===_n?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jc(e),ref:e&&Zr(e),scopeId:Nc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return o?(na(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),ta>0&&!a&&Ri&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ri.push(l),l}const ei=Th;function Th(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Hf)&&(n=cr),Sh(n)){const o=Ni(n,e,!0);return t&&na(o,t),ta>0&&!s&&Ri&&(o.shapeFlag&6?Ri[Ri.indexOf(n)]=o:Ri.push(o)),o.patchFlag|=-2,o}if(Ih(n)&&(n=n.__vccOpts),e){e=yh(e);let{class:o,style:l}=e;o&&!_t(o)&&(e.class=Vo(o)),at(l)&&(Rc(l)&&!He(l)&&(l=Et({},l)),e.style=Go(l))}const a=_t(n)?1:Gf(n)?128:Mh(n)?64:at(n)?4:Xe(n)?2:0;return Eh(n,e,t,i,r,a,s,!0)}function yh(n){return n?Rc(n)||vs in n?Et({},n):n:null}function Ni(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Ah(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&jc(o),ref:e&&e.ref?t&&r?He(r)?r.concat(Zr(e)):[r,Zr(e)]:Zr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_n?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ni(n.ssContent),ssFallback:n.ssFallback&&Ni(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function bh(n=" ",e=0){return ei(gs,null,n,e)}function tn(n){return n==null||typeof n=="boolean"?ei(cr):He(n)?ei(_n,null,n.slice()):typeof n=="object"?wn(n):ei(gs,null,String(n))}function wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ni(n)}function na(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),na(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(vs in e)?e._ctx=sn:r===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),i&64?(t=16,e=[bh(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ah(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Vo([e.class,i.class]));else if(r==="style")e.style=Go([e.style,i.style]);else if(cs(r)){const s=e[r],a=i[r];a&&s!==a&&!(He(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function en(n,e,t,i=null){Jt(n,e,7,[t,i])}const Rh=Vc();let wh=0;function Ch(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Rh,s={uid:wh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kc(i,r),emitsOptions:Ic(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=If.bind(null,s),n.ce&&n.ce(s),s}let St=null,ia,ci,Fa="__VUE_INSTANCE_SETTERS__";(ci=po()[Fa])||(ci=po()[Fa]=[]),ci.push(n=>St=n),ia=n=>{ci.length>1?ci.forEach(e=>e(n)):ci[0](n)};const Fi=n=>{ia(n),n.scope.on()},ti=()=>{St&&St.scope.off(),ia(null)};function $c(n){return n.vnode.shapeFlag&4}let ur=!1;function Ph(n,e=!1){ur=e;const{props:t,children:i}=n.vnode,r=$c(n);fh(n,t,r,e),ph(n,i);const s=r?Lh(n,e):void 0;return ur=!1,s}function Lh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=wc(new Proxy(n.ctx,nh));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Dh(n):null;Fi(n),Vi();const s=Dn(i,n,0,[n.props,r]);if(Wi(),ti(),dc(s)){if(s.then(ti,ti),e)return s.then(a=>{Oa(n,a,e)}).catch(a=>{ps(a,n,0)});n.asyncDep=s}else Oa(n,s,e)}else Zc(n,e)}function Oa(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:at(e)&&(n.setupState=Cc(e)),Zc(n,t)}let Ba;function Zc(n,e,t){const i=n.type;if(!n.render){if(!e&&Ba&&!i.render){const r=i.template||Qo(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Et(Et({isCustomElement:s,delimiters:o},a),l);i.render=Ba(r,c)}}n.render=i.render||on}{Fi(n),Vi();try{ih(n)}finally{Wi(),ti()}}}function Uh(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Dt(n,"get","$attrs"),e[t]}}))}function Dh(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Uh(n)},slots:n.slots,emit:n.emit,expose:e}}function ra(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Cc(wc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in rr)return rr[t](n)},has(e,t){return t in e||t in rr}}))}function Ih(n){return Xe(n)&&"__vccOpts"in n}const Nh=(n,e)=>Rf(n,e,ur),Fh=Symbol.for("v-scx"),Oh=()=>$r(Fh),Bh="3.3.9",zh="http://www.w3.org/2000/svg",$n=typeof document<"u"?document:null,za=$n&&$n.createElement("template"),Hh={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?$n.createElementNS(zh,n):$n.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>$n.createTextNode(n),createComment:n=>$n.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>$n.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{za.innerHTML=i?`<svg>${n}</svg>`:n;const o=za.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gh=Symbol("_vtc");function Vh(n,e,t){const i=n[Gh];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Wh=Symbol("_vod");function kh(n,e,t){const i=n.style,r=_t(t);if(t&&!r){if(e&&!_t(e))for(const s in e)t[s]==null&&Ao(i,s,"");for(const s in t)Ao(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),Wh in n&&(i.display=s)}}const Ha=/\s*!important$/;function Ao(n,e,t){if(He(t))t.forEach(i=>Ao(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Xh(n,e);Ha.test(t)?n.setProperty(Gi(i),t.replace(Ha,""),"important"):n[i]=t}}const Ga=["Webkit","Moz","ms"],Is={};function Xh(n,e){const t=Is[e];if(t)return t;let i=Di(e);if(i!=="filter"&&i in n)return Is[e]=i;i=pc(i);for(let r=0;r<Ga.length;r++){const s=Ga[r]+i;if(s in n)return Is[e]=s}return e}const Va="http://www.w3.org/1999/xlink";function qh(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Va,e.slice(6,e.length)):n.setAttributeNS(Va,e,t);else{const s=$u(e);t==null||s&&!mc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Yh(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=mc(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Kh(n,e,t,i){n.addEventListener(e,t,i)}function jh(n,e,t,i){n.removeEventListener(e,t,i)}const Wa=Symbol("_vei");function $h(n,e,t,i,r=null){const s=n[Wa]||(n[Wa]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Zh(e);if(i){const c=s[e]=ed(i,r);Kh(n,o,c,l)}else a&&(jh(n,o,a,l),s[e]=void 0)}}const ka=/(?:Once|Passive|Capture)$/;function Zh(n){let e;if(ka.test(n)){e={};let i;for(;i=n.match(ka);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Gi(n.slice(2)),e]}let Ns=0;const Jh=Promise.resolve(),Qh=()=>Ns||(Jh.then(()=>Ns=0),Ns=Date.now());function ed(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Jt(td(i,t.value),e,5,[i])};return t.value=n,t.attached=Qh(),t}function td(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xa=/^on[a-z]/,nd=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Vh(n,i,r):e==="style"?kh(n,t,i):cs(e)?Bo(e)||$h(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):id(n,e,i,r))?Yh(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),qh(n,e,i,r))};function id(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Xa.test(e)&&Xe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Xa.test(e)&&_t(t)?!1:e in n}const rd=Et({patchProp:nd},Hh);let qa;function sd(){return qa||(qa=_h(rd))}const vx=(...n)=>{const e=sd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=od(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function od(n){return _t(n)?document.querySelector(n):n}const ad=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},ld={};function cd(n,e){return null}const xx=ad(ld,[["render",cd]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="159",ud=0,Ya=1,fd=2,Jc=1,hd=2,pn=3,Bn=0,Ut=1,gn=2,In=0,Li=1,Ka=2,ja=3,$a=4,dd=5,Zn=100,pd=101,md=102,Za=103,Ja=104,_d=200,gd=201,vd=202,xd=203,Ro=204,wo=205,Md=206,Sd=207,Ed=208,Td=209,yd=210,bd=211,Ad=212,Rd=213,wd=214,Cd=0,Pd=1,Ld=2,is=3,Ud=4,Dd=5,Id=6,Nd=7,Qc=0,Fd=1,Od=2,Nn=0,Bd=1,zd=2,Hd=3,Gd=4,Vd=5,eu=300,Oi=301,Bi=302,Co=303,Po=304,xs=306,Lo=1e3,$t=1001,Uo=1002,Rt=1003,Qa=1004,Fs=1005,Gt=1006,Wd=1007,fr=1008,Fn=1009,kd=1010,Xd=1011,oa=1012,tu=1013,Cn=1014,Pn=1015,hr=1016,nu=1017,iu=1018,ni=1020,qd=1021,Zt=1023,Yd=1024,Kd=1025,ii=1026,zi=1027,jd=1028,ru=1029,$d=1030,su=1031,ou=1033,Os=33776,Bs=33777,zs=33778,Hs=33779,el=35840,tl=35841,nl=35842,il=35843,au=36196,rl=37492,sl=37496,ol=37808,al=37809,ll=37810,cl=37811,ul=37812,fl=37813,hl=37814,dl=37815,pl=37816,ml=37817,_l=37818,gl=37819,vl=37820,xl=37821,Gs=36492,Ml=36494,Sl=36495,Zd=36283,El=36284,Tl=36285,yl=36286,lu=3e3,ri=3001,Jd=3200,Qd=3201,ep=0,tp=1,Vt="",dt="srgb",Mn="srgb-linear",aa="display-p3",Ms="display-p3-linear",rs="linear",tt="srgb",ss="rec709",os="p3",ui=7680,bl=519,np=512,ip=513,rp=514,cu=515,sp=516,op=517,ap=518,lp=519,Al=35044,Rl="300 es",Do=1035,vn=2e3,as=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vs=Math.PI/180,Io=180/Math.PI;function dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function cp(n,e){return(n%e+e)%e}function Ws(n,e,t){return(1-t)*n+t*e}function wl(n){return(n&n-1)===0&&n!==0}function No(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],f=r[6],y=r[1],E=r[4],b=r[7],R=r[2],L=r[5],I=r[8];return s[0]=a*v+o*y+l*R,s[3]=a*p+o*E+l*L,s[6]=a*f+o*b+l*I,s[1]=c*v+u*y+h*R,s[4]=c*p+u*E+h*L,s[7]=c*f+u*b+h*I,s[2]=d*v+m*y+x*R,s[5]=d*p+m*E+x*L,s[8]=d*f+m*b+x*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ks.makeScale(e,t)),this}rotate(e){return this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ks=new ke;function uu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function up(){const n=ls("canvas");return n.style.display="block",n}const Cl={};function sr(n){n in Cl||(Cl[n]=!0,console.warn(n))}const Pl=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[Mn]:{transfer:rs,primaries:ss,toReference:n=>n,fromReference:n=>n},[dt]:{transfer:tt,primaries:ss,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ms]:{transfer:rs,primaries:os,toReference:n=>n.applyMatrix3(Ll),fromReference:n=>n.applyMatrix3(Pl)},[aa]:{transfer:tt,primaries:os,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ll),fromReference:n=>n.applyMatrix3(Pl).convertLinearToSRGB()}},fp=new Set([Mn,Ms]),Ze={enabled:!0,_workingColorSpace:Mn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=br[e].toReference,r=br[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return br[n].primaries},getTransfer:function(n){return n===Vt?rs:br[n].transfer}};function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fi;class fu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=ls("canvas")),fi.width=e.width,fi.height=e.height;const i=fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ui(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hp=0;class hu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=dr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qs(r[a].image)):s.push(qs(r[a]))}else s=qs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dp=0;class Ot extends ki{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=$t,r=$t,s=Gt,a=fr,o=Zt,l=Fn,c=Ot.DEFAULT_ANISOTROPY,u=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=dr(),this.name="",this.source=new hu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ri?dt:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?ri:lu}set encoding(e){sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ri?dt:Vt}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=eu;Ot.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(m+1)/2,R=(f+1)/2,L=(u+d)/4,I=(h+v)/4,Y=(x+p)/4;return E>b&&E>R?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=L/i,s=I/i):b>R?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=L/r,s=Y/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=I/s,r=Y/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-x)*(p-x)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pp extends ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ri?dt:Vt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends pp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class du extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mp extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(h!==v||l!==d||c!==m||u!==x){let p=1-o;const f=l*d+c*m+u*x+h*v,y=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const R=Math.sqrt(E),L=Math.atan2(R,f*y);p=Math.sin(p*L)/R,o=Math.sin(o*L)/R}const b=o*y;if(l=l*p+d*b,c=c*p+m*b,u=u*p+x*b,h=h*p+v*b,p===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*m-c*d,e[t+1]=l*x+u*d+c*h-o*m,e[t+2]=c*x+u*m+o*d-l*h,e[t+3]=u*x-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h-d*m*x;break;case"YXZ":this._x=d*u*h+c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h+d*m*x;break;case"ZXY":this._x=d*u*h-c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h-d*m*x;break;case"ZYX":this._x=d*u*h-c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h+d*m*x;break;case"YZX":this._x=d*u*h+c*m*x,this._y=c*m*h+d*u*x,this._z=c*u*x-d*m*h,this._w=c*u*h-d*m*x;break;case"XZY":this._x=d*u*h-c*m*x,this._y=c*m*h-d*u*x,this._z=c*u*x+d*m*h,this._w=c*u*h+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new H,Ul=new pr;class mr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ar.copy(i.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),Rr.subVectors(this.max,ji),hi.subVectors(e.a,ji),di.subVectors(e.b,ji),pi.subVectors(e.c,ji),Tn.subVectors(di,hi),yn.subVectors(pi,di),Wn.subVectors(hi,pi);let t=[0,-Tn.z,Tn.y,0,-yn.z,yn.y,0,-Wn.z,Wn.y,Tn.z,0,-Tn.x,yn.z,0,-yn.x,Wn.z,0,-Wn.x,-Tn.y,Tn.x,0,-yn.y,yn.x,0,-Wn.y,Wn.x,0];return!Ks(t,hi,di,pi,Rr)||(t=[1,0,0,0,1,0,0,0,1],!Ks(t,hi,di,pi,Rr))?!1:(wr.crossVectors(Tn,yn),t=[wr.x,wr.y,wr.z],Ks(t,hi,di,pi,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new H,new H,new H,new H,new H,new H,new H,new H],Wt=new H,Ar=new mr,hi=new H,di=new H,pi=new H,Tn=new H,yn=new H,Wn=new H,ji=new H,Rr=new H,wr=new H,kn=new H;function Ks(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){kn.fromArray(n,s);const o=r.x*Math.abs(kn.x)+r.y*Math.abs(kn.y)+r.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),u=i.dot(kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _p=new mr,$i=new H,js=new H;class la{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_p.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($i,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(js.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(js)),this.expandByPoint($i.copy(e.center).sub(js))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new H,$s=new H,Cr=new H,bn=new H,Zs=new H,Pr=new H,Js=new H;class gp{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$s.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),bn.copy(this.origin).sub($s);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),o=bn.dot(this.direction),l=-bn.dot(Cr),c=bn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,x;if(u>0)if(h=a*l-o,d=a*o-l,x=s*u,h>=0)if(d>=-x)if(d<=x){const v=1/u;h*=v,d*=v,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($s).addScaledVector(Cr,d),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),r=un.dot(un)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,r,s){Zs.subVectors(t,e),Pr.subVectors(i,e),Js.crossVectors(Zs,Pr);let a=this.direction.dot(Js),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,e);const l=o*this.direction.dot(Pr.crossVectors(bn,Pr));if(l<0)return null;const c=o*this.direction.dot(Zs.cross(bn));if(c<0||l+c>a)return null;const u=-o*bn.dot(Js);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,l,c,u,h,d,m,x,v,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,m,x,v,p)}set(e,t,i,r,s,a,o,l,c,u,h,d,m,x,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=x,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,x=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,x=c*u,v=c*h;t[0]=d+v*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,x=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,x=o*u,v=o*h;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=x*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+x,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,xp)}lookAt(e,t,i){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),An.crossVectors(i,Nt),An.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),An.crossVectors(i,Nt)),An.normalize(),Lr.crossVectors(Nt,An),r[0]=An.x,r[4]=Lr.x,r[8]=Nt.x,r[1]=An.y,r[5]=Lr.y,r[9]=Nt.y,r[2]=An.z,r[6]=Lr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],f=i[14],y=i[3],E=i[7],b=i[11],R=i[15],L=r[0],I=r[4],Y=r[8],S=r[12],A=r[1],K=r[5],se=r[9],ue=r[13],D=r[2],k=r[6],Z=r[10],G=r[14],te=r[3],Q=r[7],ae=r[11],le=r[15];return s[0]=a*L+o*A+l*D+c*te,s[4]=a*I+o*K+l*k+c*Q,s[8]=a*Y+o*se+l*Z+c*ae,s[12]=a*S+o*ue+l*G+c*le,s[1]=u*L+h*A+d*D+m*te,s[5]=u*I+h*K+d*k+m*Q,s[9]=u*Y+h*se+d*Z+m*ae,s[13]=u*S+h*ue+d*G+m*le,s[2]=x*L+v*A+p*D+f*te,s[6]=x*I+v*K+p*k+f*Q,s[10]=x*Y+v*se+p*Z+f*ae,s[14]=x*S+v*ue+p*G+f*le,s[3]=y*L+E*A+b*D+R*te,s[7]=y*I+E*K+b*k+R*Q,s[11]=y*Y+E*se+b*Z+R*ae,s[15]=y*S+E*ue+b*G+R*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],f=e[15];return x*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],f=e[15],y=h*p*c-v*d*c+v*l*m-o*p*m-h*l*f+o*d*f,E=x*d*c-u*p*c-x*l*m+a*p*m+u*l*f-a*d*f,b=u*v*c-x*h*c+x*o*m-a*v*m-u*o*f+a*h*f,R=x*h*l-u*v*l-x*o*d+a*v*d+u*o*p-a*h*p,L=t*y+i*E+r*b+s*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=y*I,e[1]=(v*d*s-h*p*s-v*r*m+i*p*m+h*r*f-i*d*f)*I,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*f+i*l*f)*I,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*m-i*l*m)*I,e[4]=E*I,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*f+t*d*f)*I,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*f-t*l*f)*I,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*I,e[8]=b*I,e[9]=(x*h*s-u*v*s-x*i*m+t*v*m+u*i*f-t*h*f)*I,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*f+t*o*f)*I,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*m-t*o*m)*I,e[12]=R*I,e[13]=(u*v*r-x*h*r+x*i*d-t*v*d-u*i*p+t*h*p)*I,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*p-t*o*p)*I,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,x=s*h,v=a*u,p=a*h,f=o*h,y=l*c,E=l*u,b=l*h,R=i.x,L=i.y,I=i.z;return r[0]=(1-(v+f))*R,r[1]=(m+b)*R,r[2]=(x-E)*R,r[3]=0,r[4]=(m-b)*L,r[5]=(1-(d+f))*L,r[6]=(p+y)*L,r[7]=0,r[8]=(x+E)*I,r[9]=(p-y)*I,r[10]=(1-(d+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const a=mi.set(r[4],r[5],r[6]).length(),o=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/s,u=1/a,h=1/o;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=vn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(o===vn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===as)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=vn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,m=(i+r)*u;let x,v;if(o===vn)x=(a+s)*h,v=-2*h;else if(o===as)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mi=new H,kt=new mt,vp=new H(0,0,0),xp=new H(1,1,1),An=new H,Lr=new H,Nt=new H,Dl=new mt,Il=new pr;class Ss{constructor(e=0,t=0,i=0,r=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Il.setFromEuler(this),this.setFromQuaternion(Il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mp=0;const Nl=new H,_i=new pr,fn=new mt,Ur=new H,Zi=new H,Sp=new H,Ep=new pr,Fl=new H(1,0,0),Ol=new H(0,1,0),Bl=new H(0,0,1),Tp={type:"added"},yp={type:"removed"};class Bt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new H,t=new Ss,i=new pr,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new ke}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Ol,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return Nl.copy(e).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Ol,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ur.copy(e):Ur.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Zi,Ur,this.up):fn.lookAt(Ur,Zi,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),_i.setFromRotationMatrix(fn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,Sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new H(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new H,hn=new H,Qs=new H,dn=new H,gi=new H,vi=new H,zl=new H,eo=new H,to=new H,no=new H;let Dr=!1;class Yt{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xt.subVectors(r,t),hn.subVectors(i,t),Qs.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(hn),l=Xt.dot(Qs),c=hn.dot(hn),u=hn.dot(Qs),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,i,r,s,a,o,l){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,dn),l.setScalar(0),l.addScaledVector(s,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),hn.subVectors(e,t),Xt.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Xt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;gi.subVectors(r,i),vi.subVectors(s,i),eo.subVectors(e,i);const l=gi.dot(eo),c=vi.dot(eo);if(l<=0&&c<=0)return t.copy(i);to.subVectors(e,r);const u=gi.dot(to),h=vi.dot(to);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(gi,a);no.subVectors(e,s);const m=gi.dot(no),x=vi.dot(no);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(vi,o);const p=u*x-m*h;if(p<=0&&h-u>=0&&m-x>=0)return zl.subVectors(s,r),o=(h-u)/(h-u+(m-x)),t.copy(r).addScaledVector(zl,o);const f=1/(p+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(gi,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function io(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=cp(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=io(a,s,e+1/3),this.g=io(a,s,e),this.b=io(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=mu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Ze.fromWorkingColorSpace(xt.copy(this),e),Math.round(Lt(xt.r*255,0,255))*65536+Math.round(Lt(xt.g*255,0,255))*256+Math.round(Lt(xt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,r=xt.g,s=xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=dt){Ze.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,r=xt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Ir);const i=Ws(Rn.h,Ir.h,t),r=Ws(Rn.s,Ir.s,t),s=Ws(Rn.l,Ir.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Je;Je.NAMES=mu;let bp=0;class Es extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Li,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=wo,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ro&&(i.blendSrc=this.blendSrc),this.blendDst!==wo&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _u extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new H,Nr=new Qe;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}}class gu extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vu extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class si extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ap=0;const Ht=new mt,ro=new Bt,xi=new H,Ft=new mr,Ji=new mr,ht=new H;class li extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uu(e)?vu:gu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Ft.min,Ji.min),Ft.expandByPoint(ht),ht.addVectors(Ft.max,Ji.max),Ft.expandByPoint(ht)):(Ft.expandByPoint(Ji.min),Ft.expandByPoint(Ji.max))}Ft.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ht.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(e,c),ht.add(xi)),r=Math.max(r,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new H,u[A]=new H;const h=new H,d=new H,m=new H,x=new Qe,v=new Qe,p=new Qe,f=new H,y=new H;function E(A,K,se){h.fromArray(r,A*3),d.fromArray(r,K*3),m.fromArray(r,se*3),x.fromArray(a,A*2),v.fromArray(a,K*2),p.fromArray(a,se*2),d.sub(h),m.sub(h),v.sub(x),p.sub(x);const ue=1/(v.x*p.y-p.x*v.y);isFinite(ue)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ue),y.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(ue),c[A].add(f),c[K].add(f),c[se].add(f),u[A].add(y),u[K].add(y),u[se].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let A=0,K=b.length;A<K;++A){const se=b[A],ue=se.start,D=se.count;for(let k=ue,Z=ue+D;k<Z;k+=3)E(i[k+0],i[k+1],i[k+2])}const R=new H,L=new H,I=new H,Y=new H;function S(A){I.fromArray(s,A*3),Y.copy(I);const K=c[A];R.copy(K),R.sub(I.multiplyScalar(I.dot(K))).normalize(),L.crossVectors(Y,K);const ue=L.dot(u[A])<0?-1:1;l[A*4]=R.x,l[A*4+1]=R.y,l[A*4+2]=R.z,l[A*4+3]=ue}for(let A=0,K=b.length;A<K;++A){const se=b[A],ue=se.start,D=se.count;for(let k=ue,Z=ue+D;k<Z;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let f=0;f<u;f++)d[x++]=c[m++]}return new an(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new mt,Xn=new gp,Fr=new la,Gl=new H,Mi=new H,Si=new H,Ei=new H,so=new H,Or=new H,Br=new Qe,zr=new Qe,Hr=new Qe,Vl=new H,Wl=new H,kl=new H,Gr=new H,Vr=new H;class Ln extends Bt{constructor(e=new li,t=new _u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Or.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(so.fromBufferAttribute(h,e),a?Or.addScaledVector(so,u):Or.addScaledVector(so.sub(t),u))}t.add(Or)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(s),Xn.copy(e.ray).recast(e.near),!(Fr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Fr,Gl)===null||Xn.origin.distanceToSquared(Gl)>(e.far-e.near)**2))&&(Hl.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(Hl),!(i.boundingBox!==null&&Xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],f=a[p.materialIndex],y=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,R=E;b<R;b+=3){const L=o.getX(b),I=o.getX(b+1),Y=o.getX(b+2);r=Wr(this,f,e,i,c,u,h,L,I,Y),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,f=v;p<f;p+=3){const y=o.getX(p),E=o.getX(p+1),b=o.getX(p+2);r=Wr(this,a,e,i,c,u,h,y,E,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],f=a[p.materialIndex],y=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,R=E;b<R;b+=3){const L=b,I=b+1,Y=b+2;r=Wr(this,f,e,i,c,u,h,L,I,Y),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,f=v;p<f;p+=3){const y=p,E=p+1,b=p+2;r=Wr(this,a,e,i,c,u,h,y,E,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Rp(n,e,t,i,r,s,a,o){let l;if(e.side===Ut?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Bn,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:n}}function Wr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Mi),n.getVertexPosition(l,Si),n.getVertexPosition(c,Ei);const u=Rp(n,e,t,i,Mi,Si,Ei,Gr);if(u){r&&(Br.fromBufferAttribute(r,o),zr.fromBufferAttribute(r,l),Hr.fromBufferAttribute(r,c),u.uv=Yt.getInterpolation(Gr,Mi,Si,Ei,Br,zr,Hr,new Qe)),s&&(Br.fromBufferAttribute(s,o),zr.fromBufferAttribute(s,l),Hr.fromBufferAttribute(s,c),u.uv1=Yt.getInterpolation(Gr,Mi,Si,Ei,Br,zr,Hr,new Qe),u.uv2=u.uv1),a&&(Vl.fromBufferAttribute(a,o),Wl.fromBufferAttribute(a,l),kl.fromBufferAttribute(a,c),u.normal=Yt.getInterpolation(Gr,Mi,Si,Ei,Vl,Wl,kl,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};Yt.getNormal(Mi,Si,Ei,h.normal),u.face=h}return u}class _r extends li{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(h,2));function x(v,p,f,y,E,b,R,L,I,Y,S){const A=b/I,K=R/Y,se=b/2,ue=R/2,D=L/2,k=I+1,Z=Y+1;let G=0,te=0;const Q=new H;for(let ae=0;ae<Z;ae++){const le=ae*K-ue;for(let ge=0;ge<k;ge++){const X=ge*A-se;Q[v]=X*y,Q[p]=le*E,Q[f]=D,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[p]=0,Q[f]=L>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(ge/I),h.push(1-ae/Y),G+=1}}for(let ae=0;ae<Y;ae++)for(let le=0;le<I;le++){const ge=d+le+k*ae,X=d+le+k*(ae+1),oe=d+(le+1)+k*(ae+1),xe=d+(le+1)+k*ae;l.push(ge,X,xe),l.push(X,oe,xe),te+=6}o.addGroup(m,te,S),m+=te,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=Hi(n[t]);for(const r in i)e[r]=i[r]}return e}function wp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xu(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const Cp={clone:Hi,merge:At};var Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mu extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Mu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,yi=1;class Up extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(Ti,yi,e,t);r.layers=this.layers,this.add(r);const s=new Kt(Ti,yi,e,t);s.layers=this.layers,this.add(s);const a=new Kt(Ti,yi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Ti,yi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Ti,yi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Ti,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===as)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Su extends Ot{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dp extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ri?dt:Vt),this.texture=new Su(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _r(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:In});s.uniforms.tEquirect.value=t;const a=new Ln(r,s),o=t.minFilter;return t.minFilter===fr&&(t.minFilter=Gt),new Up(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const oo=new H,Ip=new H,Np=new ke;class Yn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=oo.subVectors(i,t).cross(Ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(oo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Np.getNormalMatrix(e),r=this.coplanarPoint(oo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new la,kr=new H;class Eu{constructor(e=new Yn,t=new Yn,i=new Yn,r=new Yn,s=new Yn,a=new Yn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],f=r[12],y=r[13],E=r[14],b=r[15];if(i[0].setComponents(l-s,d-c,p-m,b-f).normalize(),i[1].setComponents(l+s,d+c,p+m,b+f).normalize(),i[2].setComponents(l+a,d+u,p+x,b+y).normalize(),i[3].setComponents(l-a,d-u,p-x,b-y).normalize(),i[4].setComponents(l-o,d-h,p-v,b-E).normalize(),t===vn)i[5].setComponents(l+o,d+h,p+v,b+E).normalize();else if(t===as)i[5].setComponents(o,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(kr.x=r.normal.x>0?e.max.x:e.min.x,kr.y=r.normal.y>0?e.max.y:e.min.y,kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Fp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,m=h.byteLength,x=n.createBuffer();n.bindBuffer(u,x),n.bufferData(u,h,d),c.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const d=u.array,m=u._updateRange,x=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&x.length===0&&n.bufferSubData(h,0,d),x.length!==0){for(let v=0,p=x.length;v<p;v++){const f=x[v];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class ca extends li{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,m=[],x=[],v=[],p=[];for(let f=0;f<u;f++){const y=f*d-a;for(let E=0;E<c;E++){const b=E*h-s;x.push(b,-y,0),v.push(0,0,1),p.push(E/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const E=y+c*f,b=y+c*(f+1),R=y+1+c*(f+1),L=y+1+c*f;m.push(E,b,L),m.push(b,R,L)}this.setIndex(m),this.setAttribute("position",new si(x,3)),this.setAttribute("normal",new si(v,3)),this.setAttribute("uv",new si(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.widthSegments,e.heightSegments)}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$p=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,om=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ym=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$m=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,h_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,k_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ig=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ag=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Op,alphahash_pars_fragment:Bp,alphamap_fragment:zp,alphamap_pars_fragment:Hp,alphatest_fragment:Gp,alphatest_pars_fragment:Vp,aomap_fragment:Wp,aomap_pars_fragment:kp,batching_pars_vertex:Xp,batching_vertex:qp,begin_vertex:Yp,beginnormal_vertex:Kp,bsdfs:jp,iridescence_fragment:$p,bumpmap_pars_fragment:Zp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:Qp,clipping_planes_pars_vertex:em,clipping_planes_vertex:tm,color_fragment:nm,color_pars_fragment:im,color_pars_vertex:rm,color_vertex:sm,common:om,cube_uv_reflection_fragment:am,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:um,emissivemap_fragment:fm,emissivemap_pars_fragment:hm,colorspace_fragment:dm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:_m,envmap_pars_fragment:gm,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Pm,envmap_vertex:xm,fog_vertex:Mm,fog_pars_vertex:Sm,fog_fragment:Em,fog_pars_fragment:Tm,gradientmap_pars_fragment:ym,lightmap_fragment:bm,lightmap_pars_fragment:Am,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:wm,lights_pars_begin:Cm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Um,lights_phong_fragment:Dm,lights_phong_pars_fragment:Im,lights_physical_fragment:Nm,lights_physical_pars_fragment:Fm,lights_fragment_begin:Om,lights_fragment_maps:Bm,lights_fragment_end:zm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Wm,map_fragment:km,map_pars_fragment:Xm,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:Km,metalnessmap_pars_fragment:jm,morphcolor_vertex:$m,morphnormal_vertex:Zm,morphtarget_pars_vertex:Jm,morphtarget_vertex:Qm,normal_fragment_begin:e_,normal_fragment_maps:t_,normal_pars_fragment:n_,normal_pars_vertex:i_,normal_vertex:r_,normalmap_pars_fragment:s_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:c_,opaque_fragment:u_,packing:f_,premultiplied_alpha_fragment:h_,project_vertex:d_,dithering_fragment:p_,dithering_pars_fragment:m_,roughnessmap_fragment:__,roughnessmap_pars_fragment:g_,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:x_,shadowmap_vertex:M_,shadowmask_pars_fragment:S_,skinbase_vertex:E_,skinning_pars_vertex:T_,skinning_vertex:y_,skinnormal_vertex:b_,specularmap_fragment:A_,specularmap_pars_fragment:R_,tonemapping_fragment:w_,tonemapping_pars_fragment:C_,transmission_fragment:P_,transmission_pars_fragment:L_,uv_pars_fragment:U_,uv_pars_vertex:D_,uv_vertex:I_,worldpos_vertex:N_,background_vert:F_,background_frag:O_,backgroundCube_vert:B_,backgroundCube_frag:z_,cube_vert:H_,cube_frag:G_,depth_vert:V_,depth_frag:W_,distanceRGBA_vert:k_,distanceRGBA_frag:X_,equirect_vert:q_,equirect_frag:Y_,linedashed_vert:K_,linedashed_frag:j_,meshbasic_vert:$_,meshbasic_frag:Z_,meshlambert_vert:J_,meshlambert_frag:Q_,meshmatcap_vert:eg,meshmatcap_frag:tg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:rg,meshphong_frag:sg,meshphysical_vert:og,meshphysical_frag:ag,meshtoon_vert:lg,meshtoon_frag:cg,points_vert:ug,points_frag:fg,shadow_vert:hg,shadow_frag:dg,sprite_vert:pg,sprite_frag:mg},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},nn={basic:{uniforms:At([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:At([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:At([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:At([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:At([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:At([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:At([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:At([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:At([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:At([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:At([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:At([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:At([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};nn.physical={uniforms:At([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Xr={r:0,b:0,g:0};function _g(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function x(p,f){let y=!1,E=f.isScene===!0?f.background:null;E&&E.isTexture&&(E=(f.backgroundBlurriness>0?t:e).get(E)),E===null?v(o,l):E&&E.isColor&&(v(E,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===xs)?(u===void 0&&(u=new Ln(new _r(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Hi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(E.colorSpace)!==tt,(h!==E||d!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ln(new ca(2,2),new ai({name:"BackgroundMaterial",uniforms:Hi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,f){p.getRGB(Xr,xu(n)),i.buffers.color.setClear(Xr.r,Xr.g,Xr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:x}}function gg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(D,k,Z,G,te){let Q=!1;if(a){const ae=v(G,Z,k);c!==ae&&(c=ae,m(c.object)),Q=f(D,G,Z,te),Q&&y(D,G,Z,te)}else{const ae=k.wireframe===!0;(c.geometry!==G.id||c.program!==Z.id||c.wireframe!==ae)&&(c.geometry=G.id,c.program=Z.id,c.wireframe=ae,Q=!0)}te!==null&&t.update(te,n.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,Y(D,k,Z,G),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function x(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function v(D,k,Z){const G=Z.wireframe===!0;let te=o[D.id];te===void 0&&(te={},o[D.id]=te);let Q=te[k.id];Q===void 0&&(Q={},te[k.id]=Q);let ae=Q[G];return ae===void 0&&(ae=p(d()),Q[G]=ae),ae}function p(D){const k=[],Z=[],G=[];for(let te=0;te<r;te++)k[te]=0,Z[te]=0,G[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:G,object:D,attributes:{},index:null}}function f(D,k,Z,G){const te=c.attributes,Q=k.attributes;let ae=0;const le=Z.getAttributes();for(const ge in le)if(le[ge].location>=0){const oe=te[ge];let xe=Q[ge];if(xe===void 0&&(ge==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),ge==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),oe===void 0||oe.attribute!==xe||xe&&oe.data!==xe.data)return!0;ae++}return c.attributesNum!==ae||c.index!==G}function y(D,k,Z,G){const te={},Q=k.attributes;let ae=0;const le=Z.getAttributes();for(const ge in le)if(le[ge].location>=0){let oe=Q[ge];oe===void 0&&(ge==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),ge==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor));const xe={};xe.attribute=oe,oe&&oe.data&&(xe.data=oe.data),te[ge]=xe,ae++}c.attributes=te,c.attributesNum=ae,c.index=G}function E(){const D=c.newAttributes;for(let k=0,Z=D.length;k<Z;k++)D[k]=0}function b(D){R(D,0)}function R(D,k){const Z=c.newAttributes,G=c.enabledAttributes,te=c.attributeDivisors;Z[D]=1,G[D]===0&&(n.enableVertexAttribArray(D),G[D]=1),te[D]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),te[D]=k)}function L(){const D=c.newAttributes,k=c.enabledAttributes;for(let Z=0,G=k.length;Z<G;Z++)k[Z]!==D[Z]&&(n.disableVertexAttribArray(Z),k[Z]=0)}function I(D,k,Z,G,te,Q,ae){ae===!0?n.vertexAttribIPointer(D,k,Z,te,Q):n.vertexAttribPointer(D,k,Z,G,te,Q)}function Y(D,k,Z,G){if(i.isWebGL2===!1&&(D.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const te=G.attributes,Q=Z.getAttributes(),ae=k.defaultAttributeValues;for(const le in Q){const ge=Q[le];if(ge.location>=0){let X=te[le];if(X===void 0&&(le==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),le==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const oe=X.normalized,xe=X.itemSize,Ee=t.get(X);if(Ee===void 0)continue;const ye=Ee.buffer,Ne=Ee.type,we=Ee.bytesPerElement,Ce=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||X.gpuType===tu);if(X.isInterleavedBufferAttribute){const Fe=X.data,g=Fe.stride,w=X.offset;if(Fe.isInstancedInterleavedBuffer){for(let U=0;U<ge.locationSize;U++)R(ge.location+U,Fe.meshPerAttribute);D.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let U=0;U<ge.locationSize;U++)b(ge.location+U);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let U=0;U<ge.locationSize;U++)I(ge.location+U,xe/ge.locationSize,Ne,oe,g*we,(w+xe/ge.locationSize*U)*we,Ce)}else{if(X.isInstancedBufferAttribute){for(let Fe=0;Fe<ge.locationSize;Fe++)R(ge.location+Fe,X.meshPerAttribute);D.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Fe=0;Fe<ge.locationSize;Fe++)b(ge.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Fe=0;Fe<ge.locationSize;Fe++)I(ge.location+Fe,xe/ge.locationSize,Ne,oe,xe*we,xe/ge.locationSize*Fe*we,Ce)}}else if(ae!==void 0){const oe=ae[le];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(ge.location,oe);break;case 3:n.vertexAttrib3fv(ge.location,oe);break;case 4:n.vertexAttrib4fv(ge.location,oe);break;default:n.vertexAttrib1fv(ge.location,oe)}}}}L()}function S(){se();for(const D in o){const k=o[D];for(const Z in k){const G=k[Z];for(const te in G)x(G[te].object),delete G[te];delete k[Z]}delete o[D]}}function A(D){if(o[D.id]===void 0)return;const k=o[D.id];for(const Z in k){const G=k[Z];for(const te in G)x(G[te].object),delete G[te];delete k[Z]}delete o[D.id]}function K(D){for(const k in o){const Z=o[k];if(Z[D.id]===void 0)continue;const G=Z[D.id];for(const te in G)x(G[te].object),delete G[te];delete Z[D.id]}}function se(){ue(),u=!0,c!==l&&(c=l,m(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:se,resetDefaultState:ue,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:K,initAttributes:E,enableAttribute:b,disableUnusedAttributes:L}}function vg(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let m,x;if(r)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<d;x++)this.render(u[x],h[x]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,d);let x=0;for(let v=0;v<d;v++)x+=h[v];t.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function xg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,b=a||e.has("OES_texture_float"),R=E&&b,L=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:E,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:L}}function Mg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Yn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,E=y*4;let b=f.clippingState||null;l.value=b,b=u(x,d,E,m);for(let R=0;R!==E;++R)b[R]=t[R];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,x){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const f=m+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,b=m;E!==v;++E,b+=4)a.copy(h[E]).applyMatrix4(y,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Sg(n){let e=new WeakMap;function t(a,o){return o===Co?a.mapping=Oi:o===Po&&(a.mapping=Bi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Co||o===Po)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dp(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Eg extends Mu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,Xl=[.125,.215,.35,.446,.526,.582],Jn=20,ao=new Eg,ql=new Je;let lo=null,co=0,uo=0;const Kn=(1+Math.sqrt(5))/2,bi=1/Kn,Yl=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Kn,bi),new H(0,Kn,-bi),new H(bi,0,Kn),new H(-bi,0,Kn),new H(Kn,bi,0),new H(-Kn,bi,0)];class Kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo,co,uo),e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:hr,format:Zt,colorSpace:Mn,depthBuffer:!1},r=jl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(s)),this._blurMaterial=yg(s,e,t)}return r}_compileMaterial(e){const t=new Ln(this._lodPlanes[0],e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,i,r){const o=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ql),u.toneMapping=Nn,u.autoClear=!1;const m=new _u({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),x=new Ln(new _r,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(ql),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const E=this._cubeSize;qr(r,y*E,f>2?E:0,E,E),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Oi||e.mapping===Bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ln(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ao)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yl[(r-1)%Yl.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ln(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),v=s/x,p=isFinite(s)?1+Math.floor(u*v):Jn;p>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);const f=[];let y=0;for(let I=0;I<Jn;++I){const Y=I/v,S=Math.exp(-Y*Y/2);f.push(S),I===0?y+=S:I<p&&(y+=2*S)}for(let I=0;I<f.length;I++)f[I]=f[I]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-i;const b=this._sizeLods[r],R=3*b*(r>E-wi?r-E+wi:0),L=4*(this._cubeSize-b);qr(t,R,L,3*b,2*b),l.setRenderTarget(t),l.render(h,ao)}}function Tg(n){const e=[],t=[],i=[];let r=n;const s=n-wi+1+Xl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-wi?l=Xl[a-n+wi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,v=3,p=2,f=1,y=new Float32Array(v*x*m),E=new Float32Array(p*x*m),b=new Float32Array(f*x*m);for(let L=0;L<m;L++){const I=L%3*2/3-1,Y=L>2?0:-1,S=[I,Y,0,I+2/3,Y,0,I+2/3,Y+1,0,I,Y,0,I+2/3,Y+1,0,I,Y+1,0];y.set(S,v*x*L),E.set(d,p*x*L);const A=[L,L,L,L,L,L];b.set(A,f*x*L)}const R=new li;R.setAttribute("position",new an(y,v)),R.setAttribute("uv",new an(E,p)),R.setAttribute("faceIndex",new an(b,f)),e.push(R),r>wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function jl(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yg(n,e,t){const i=new Float32Array(Jn),r=new H(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function $l(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Zl(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Co||l===Po,u=l===Oi||l===Bi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Kl(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Kl(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ag(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Rg(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const v=m[x];for(let p=0,f=v.length;p<f;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,x=h.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let E=0,b=y.length;E<b;E+=3){const R=y[E+0],L=y[E+1],I=y[E+2];d.push(R,L,L,I,I,R)}}else if(x!==void 0){const y=x.array;v=x.version;for(let E=0,b=y.length/3-1;E<b;E+=3){const R=E+0,L=E+1,I=E+2;d.push(R,L,L,I,I,R)}}else return;const p=new(uu(d)?vu:gu)(d,1);p.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function wg(n,e,t,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,x){n.drawElements(s,x,o,m*l),t.update(x,s,1)}function h(m,x,v){if(v===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,x,o,m*l,v),t.update(x,s,v)}function d(m,x,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<v;f++)this.render(m[f]/l,x[f]);else{p.multiDrawElementsWEBGL(s,x,0,o,m,0,v);let f=0;for(let y=0;y<v;y++)f+=x[y];t.update(f,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Cg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Pg(n,e){return n[0]-e[0]}function Lg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ug(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new pt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==x){let D=function(){se.dispose(),s.delete(u),u.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let Y=0;y===!0&&(Y=1),E===!0&&(Y=2),b===!0&&(Y=3);let S=u.attributes.position.count*Y,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const K=new Float32Array(S*A*4*x),se=new du(K,S,A,x);se.type=Pn,se.needsUpdate=!0;const ue=Y*4;for(let k=0;k<x;k++){const Z=R[k],G=L[k],te=I[k],Q=S*A*4*k;for(let ae=0;ae<Z.count;ae++){const le=ae*ue;y===!0&&(a.fromBufferAttribute(Z,ae),K[Q+le+0]=a.x,K[Q+le+1]=a.y,K[Q+le+2]=a.z,K[Q+le+3]=0),E===!0&&(a.fromBufferAttribute(G,ae),K[Q+le+4]=a.x,K[Q+le+5]=a.y,K[Q+le+6]=a.z,K[Q+le+7]=0),b===!0&&(a.fromBufferAttribute(te,ae),K[Q+le+8]=a.x,K[Q+le+9]=a.y,K[Q+le+10]=a.z,K[Q+le+11]=te.itemSize===4?a.w:1)}}v={count:x,texture:se,size:new Qe(S,A)},s.set(u,v),u.addEventListener("dispose",D)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const f=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let x=i[u.id];if(x===void 0||x.length!==m){x=[];for(let E=0;E<m;E++)x[E]=[E,0];i[u.id]=x}for(let E=0;E<m;E++){const b=x[E];b[0]=E,b[1]=d[E]}x.sort(Lg);for(let E=0;E<8;E++)E<m&&x[E][1]?(o[E][0]=x[E][0],o[E][1]=x[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Pg);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let f=0;for(let E=0;E<8;E++){const b=o[E],R=b[0],L=b[1];R!==Number.MAX_SAFE_INTEGER&&L?(v&&u.getAttribute("morphTarget"+E)!==v[R]&&u.setAttribute("morphTarget"+E,v[R]),p&&u.getAttribute("morphNormal"+E)!==p[R]&&u.setAttribute("morphNormal"+E,p[R]),r[E]=L,f+=L):(v&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),p&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Dg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class yu extends Ot{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ii,u!==ii&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ii&&(i=Cn),i===void 0&&u===zi&&(i=ni),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bu=new Ot,Au=new yu(1,1);Au.compareFunction=cu;const Ru=new du,wu=new mp,Cu=new Su,Jl=[],Ql=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function Xi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jl[r];if(s===void 0&&(s=new Float32Array(r),Jl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ts(n,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2fv(this.addr,e),ct(t,e)}}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;n.uniform3fv(this.addr,e),ct(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4fv(this.addr,e),ct(t,e)}}function Bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;nc.set(i),n.uniformMatrix2fv(this.addr,!1,nc),ct(t,i)}}function zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;tc.set(i),n.uniformMatrix3fv(this.addr,!1,tc),ct(t,i)}}function Hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;ec.set(i),n.uniformMatrix4fv(this.addr,!1,ec),ct(t,i)}}function Gg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2iv(this.addr,e),ct(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3iv(this.addr,e),ct(t,e)}}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4iv(this.addr,e),ct(t,e)}}function Xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2uiv(this.addr,e),ct(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3uiv(this.addr,e),ct(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4uiv(this.addr,e),ct(t,e)}}function jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Au:bu;t.setTexture2D(e||s,r)}function $g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wu,r)}function Zg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cu,r)}function Jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ru,r)}function Qg(n){switch(n){case 5126:return Ig;case 35664:return Ng;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return zg;case 35676:return Hg;case 5124:case 35670:return Gg;case 35667:case 35671:return Vg;case 35668:case 35672:return Wg;case 35669:case 35673:return kg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function ev(n,e){n.uniform1fv(this.addr,e)}function tv(n,e){const t=Xi(e,this.size,2);n.uniform2fv(this.addr,t)}function nv(n,e){const t=Xi(e,this.size,3);n.uniform3fv(this.addr,t)}function iv(n,e){const t=Xi(e,this.size,4);n.uniform4fv(this.addr,t)}function rv(n,e){const t=Xi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sv(n,e){const t=Xi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ov(n,e){const t=Xi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function av(n,e){n.uniform1iv(this.addr,e)}function lv(n,e){n.uniform2iv(this.addr,e)}function cv(n,e){n.uniform3iv(this.addr,e)}function uv(n,e){n.uniform4iv(this.addr,e)}function fv(n,e){n.uniform1uiv(this.addr,e)}function hv(n,e){n.uniform2uiv(this.addr,e)}function dv(n,e){n.uniform3uiv(this.addr,e)}function pv(n,e){n.uniform4uiv(this.addr,e)}function mv(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||bu,s[a])}function _v(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wu,s[a])}function gv(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cu,s[a])}function vv(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ru,s[a])}function xv(n){switch(n){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return rv;case 35675:return sv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return uv;case 5125:return fv;case 36294:return hv;case 36295:return dv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return vv}}class Mv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qg(t.type)}}class Sv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}}class Ev{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function ic(n,e){n.seq.push(e),n.map[e.id]=e}function Tv(n,e,t){const i=n.name,r=i.length;for(fo.lastIndex=0;;){const s=fo.exec(i),a=fo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ic(t,c===void 0?new Mv(o,n,e):new Sv(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Ev(o),ic(t,h)),t=h}}}class Jr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Tv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function rc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yv=37297;let bv=0;function Av(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Rv(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===os&&t===ss?i="LinearDisplayP3ToLinearSRGB":e===ss&&t===os&&(i="LinearSRGBToLinearDisplayP3"),n){case Mn:case Ms:return[i,"LinearTransferOETF"];case dt:case aa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function sc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Av(n.getShaderSource(e),a)}else return r}function wv(n,e){const t=Rv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cv(n,e){let t;switch(e){case Bd:t="Linear";break;case zd:t="Reinhard";break;case Hd:t="OptimizedCineon";break;case Gd:t="ACESFilmic";break;case Vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function Lv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Uv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function tr(n){return n!==""}function oc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ac(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(n){return n.replace(Dv,Nv)}const Iv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nv(n,e){let t=Ge[e];if(t===void 0){const i=Iv.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(n){return n.replace(Fv,Ov)}function Ov(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function zv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Oi:case Bi:e="ENVMAP_TYPE_CUBE";break;case xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qc:e="ENVMAP_BLENDING_MULTIPLY";break;case Fd:e="ENVMAP_BLENDING_MIX";break;case Od:e="ENVMAP_BLENDING_ADD";break}return e}function Vv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Wv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Bv(t),c=zv(t),u=Hv(t),h=Gv(t),d=Vv(t),m=t.isWebGL2?"":Pv(t),x=Lv(s),v=r.createProgram();let p,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(tr).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(tr).join(`
`),f.length>0&&(f+=`
`)):(p=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),f=[m,cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,wv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=Fo(a),a=oc(a,t),a=ac(a,t),o=Fo(o),o=oc(o,t),o=ac(o,t),a=lc(a),o=lc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=y+p+a,b=y+f+o,R=rc(r,r.VERTEX_SHADER,E),L=rc(r,r.FRAGMENT_SHADER,b);r.attachShader(v,R),r.attachShader(v,L),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(K){if(n.debug.checkShaderErrors){const se=r.getProgramInfoLog(v).trim(),ue=r.getShaderInfoLog(R).trim(),D=r.getShaderInfoLog(L).trim();let k=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,R,L);else{const G=sc(r,R,"vertex"),te=sc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+G+`
`+te)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ue===""||D==="")&&(Z=!1);Z&&(K.diagnostics={runnable:k,programLog:se,vertexShader:{log:ue,prefix:p},fragmentShader:{log:D,prefix:f}})}r.deleteShader(R),r.deleteShader(L),Y=new Jr(r,v),S=Uv(r,v)}let Y;this.getUniforms=function(){return Y===void 0&&I(this),Y};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(v,yv)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=L,this}let kv=0;class Xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qv(e),t.set(e,i)),i}}class qv{constructor(e){this.id=kv++,this.code=e,this.usedTimes=0}}function Yv(n,e,t,i,r,s,a){const o=new pu,l=new Xv,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,A,K,se,ue){const D=se.fog,k=ue.geometry,Z=S.isMeshStandardMaterial?se.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),te=G&&G.mapping===xs?G.image.height:null,Q=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,le=ae!==void 0?ae.length:0;let ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let X,oe,xe,Ee;if(Q){const Tt=nn[Q];X=Tt.vertexShader,oe=Tt.fragmentShader}else X=S.vertexShader,oe=S.fragmentShader,l.update(S),xe=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const ye=n.getRenderTarget(),Ne=ue.isInstancedMesh===!0,we=ue.isBatchedMesh===!0,Ce=!!S.map,Fe=!!S.matcap,g=!!G,w=!!S.aoMap,U=!!S.lightMap,z=!!S.bumpMap,F=!!S.normalMap,ie=!!S.displacementMap,ne=!!S.emissiveMap,W=!!S.metalnessMap,re=!!S.roughnessMap,ee=S.anisotropy>0,ve=S.clearcoat>0,M=S.iridescence>0,_=S.sheen>0,P=S.transmission>0,q=ee&&!!S.anisotropyMap,j=ve&&!!S.clearcoatMap,J=ve&&!!S.clearcoatNormalMap,me=ve&&!!S.clearcoatRoughnessMap,ce=M&&!!S.iridescenceMap,_e=M&&!!S.iridescenceThicknessMap,Pe=_&&!!S.sheenColorMap,qe=_&&!!S.sheenRoughnessMap,fe=!!S.specularMap,Oe=!!S.specularColorMap,Ae=!!S.specularIntensityMap,Le=P&&!!S.transmissionMap,Re=P&&!!S.thicknessMap,Te=!!S.gradientMap,Ye=!!S.alphaMap,C=S.alphaTest>0,Me=!!S.alphaHash,he=!!S.extensions,$=!!k.attributes.uv1,de=!!k.attributes.uv2,De=!!k.attributes.uv3;let Ke=Nn;return S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ke=n.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:X,fragmentShader:oe,defines:S.defines,customVertexShaderID:xe,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:we,instancing:Ne,instancingColor:Ne&&ue.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Mn,map:Ce,matcap:Fe,envMap:g,envMapMode:g&&G.mapping,envMapCubeUVHeight:te,aoMap:w,lightMap:U,bumpMap:z,normalMap:F,displacementMap:d&&ie,emissiveMap:ne,normalMapObjectSpace:F&&S.normalMapType===tp,normalMapTangentSpace:F&&S.normalMapType===ep,metalnessMap:W,roughnessMap:re,anisotropy:ee,anisotropyMap:q,clearcoat:ve,clearcoatMap:j,clearcoatNormalMap:J,clearcoatRoughnessMap:me,iridescence:M,iridescenceMap:ce,iridescenceThicknessMap:_e,sheen:_,sheenColorMap:Pe,sheenRoughnessMap:qe,specularMap:fe,specularColorMap:Oe,specularIntensityMap:Ae,transmission:P,transmissionMap:Le,thicknessMap:Re,gradientMap:Te,opaque:S.transparent===!1&&S.blending===Li,alphaMap:Ye,alphaTest:C,alphaHash:Me,combine:S.combine,mapUv:Ce&&v(S.map.channel),aoMapUv:w&&v(S.aoMap.channel),lightMapUv:U&&v(S.lightMap.channel),bumpMapUv:z&&v(S.bumpMap.channel),normalMapUv:F&&v(S.normalMap.channel),displacementMapUv:ie&&v(S.displacementMap.channel),emissiveMapUv:ne&&v(S.emissiveMap.channel),metalnessMapUv:W&&v(S.metalnessMap.channel),roughnessMapUv:re&&v(S.roughnessMap.channel),anisotropyMapUv:q&&v(S.anisotropyMap.channel),clearcoatMapUv:j&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:J&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:qe&&v(S.sheenRoughnessMap.channel),specularMapUv:fe&&v(S.specularMap.channel),specularColorMapUv:Oe&&v(S.specularColorMap.channel),specularIntensityMapUv:Ae&&v(S.specularIntensityMap.channel),transmissionMapUv:Le&&v(S.transmissionMap.channel),thicknessMapUv:Re&&v(S.thicknessMap.channel),alphaMapUv:Ye&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(F||ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:$,vertexUv2s:de,vertexUv3s:De,pointsUvs:ue.isPoints===!0&&!!k.attributes.uv&&(Ce||Ye),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ue.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===Ut,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const K in S.defines)A.push(K),A.push(S.defines[K]);return S.isRawShaderMaterial===!1&&(y(A,S),E(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function y(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function E(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function b(S){const A=x[S.type];let K;if(A){const se=nn[A];K=Cp.clone(se.uniforms)}else K=S.uniforms;return K}function R(S,A){let K;for(let se=0,ue=c.length;se<ue;se++){const D=c[se];if(D.cacheKey===A){K=D,++K.usedTimes;break}}return K===void 0&&(K=new Wv(n,A,S,s),c.push(K)),K}function L(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function I(S){l.remove(S)}function Y(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:R,releaseProgram:L,releaseShaderCache:I,programs:c,dispose:Y}}function Kv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function jv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function uc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,m,x,v,p){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:x,renderOrder:h.renderOrder,z:v,group:p},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=v,f.group=p),e++,f}function o(h,d,m,x,v,p){const f=a(h,d,m,x,v,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,x,v,p){const f=a(h,d,m,x,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||jv),i.length>1&&i.sort(d||uc),r.length>1&&r.sort(d||uc)}function u(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function $v(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new fc,n.set(i,[a])):r>=s.length?(a=new fc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Je};break;case"SpotLight":t={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function Jv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Qv=0;function ex(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tx(n,e){const t=new Zv,i=Jv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,a=new mt,o=new mt;function l(u,h){let d=0,m=0,x=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let v=0,p=0,f=0,y=0,E=0,b=0,R=0,L=0,I=0,Y=0,S=0;u.sort(ex);const A=h===!0?Math.PI:1;for(let se=0,ue=u.length;se<ue;se++){const D=u[se],k=D.color,Z=D.intensity,G=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=k.r*Z*A,m+=k.g*Z*A,x+=k.b*Z*A;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(D.sh.coefficients[Q],Z);S++}else if(D.isDirectionalLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const ae=D.shadow,le=i.get(D);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,r.directionalShadow[v]=le,r.directionalShadowMap[v]=te,r.directionalShadowMatrix[v]=D.shadow.matrix,b++}r.directional[v]=Q,v++}else if(D.isSpotLight){const Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(k).multiplyScalar(Z*A),Q.distance=G,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,r.spot[f]=Q;const ae=D.shadow;if(D.map&&(r.spotLightMap[I]=D.map,I++,ae.updateMatrices(D),D.castShadow&&Y++),r.spotLightMatrix[f]=ae.matrix,D.castShadow){const le=i.get(D);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,r.spotShadow[f]=le,r.spotShadowMap[f]=te,L++}f++}else if(D.isRectAreaLight){const Q=t.get(D);Q.color.copy(k).multiplyScalar(Z),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),r.rectArea[y]=Q,y++}else if(D.isPointLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*A),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const ae=D.shadow,le=i.get(D);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,le.shadowCameraNear=ae.camera.near,le.shadowCameraFar=ae.camera.far,r.pointShadow[p]=le,r.pointShadowMap[p]=te,r.pointShadowMatrix[p]=D.shadow.matrix,R++}r.point[p]=Q,p++}else if(D.isHemisphereLight){const Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(Z*A),Q.groundColor.copy(D.groundColor).multiplyScalar(Z*A),r.hemi[E]=Q,E++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==v||K.pointLength!==p||K.spotLength!==f||K.rectAreaLength!==y||K.hemiLength!==E||K.numDirectionalShadows!==b||K.numPointShadows!==R||K.numSpotShadows!==L||K.numSpotMaps!==I||K.numLightProbes!==S)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=y,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=L+I-Y,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=Y,r.numLightProbes=S,K.directionalLength=v,K.pointLength=p,K.spotLength=f,K.rectAreaLength=y,K.hemiLength=E,K.numDirectionalShadows=b,K.numPointShadows=R,K.numSpotShadows=L,K.numSpotMaps=I,K.numLightProbes=S,r.version=Qv++)}function c(u,h){let d=0,m=0,x=0,v=0,p=0;const f=h.matrixWorldInverse;for(let y=0,E=u.length;y<E;y++){const b=u[y];if(b.isDirectionalLight){const R=r.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),d++}else if(b.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),x++}else if(b.isRectAreaLight){const R=r.rectArea[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function hc(n,e){const t=new tx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function nx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new hc(n,e),t.set(s,[l])):a>=o.length?(l=new hc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ix extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rx extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ax(n,e,t){let i=new Eu;const r=new Qe,s=new Qe,a=new pt,o=new ix({depthPacking:Qd}),l=new rx,c={},u=t.maxTextureSize,h={[Bn]:Ut,[Ut]:Bn,[gn]:gn},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:sx,fragmentShader:ox}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new li;x.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ln(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let f=this.type;this.render=function(R,L,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const Y=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),K=n.state;K.setBlending(In),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const se=f!==pn&&this.type===pn,ue=f===pn&&this.type!==pn;for(let D=0,k=R.length;D<k;D++){const Z=R[D],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const te=G.getFrameExtents();if(r.multiply(te),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,G.mapSize.y=s.y)),G.map===null||se===!0||ue===!0){const ae=this.type!==pn?{minFilter:Rt,magFilter:Rt}:{};G.map!==null&&G.map.dispose(),G.map=new oi(r.x,r.y,ae),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const Q=G.getViewportCount();for(let ae=0;ae<Q;ae++){const le=G.getViewport(ae);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),K.viewport(a),G.updateMatrices(Z,ae),i=G.getFrustum(),b(L,I,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===pn&&y(G,I),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(Y,S,A)};function y(R,L){const I=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new oi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,I,d,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,I,m,v,null)}function E(R,L,I,Y){let S=null;const A=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)S=A;else if(S=I.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const K=S.uuid,se=L.uuid;let ue=c[K];ue===void 0&&(ue={},c[K]=ue);let D=ue[se];D===void 0&&(D=S.clone(),ue[se]=D),S=D}if(S.visible=L.visible,S.wireframe=L.wireframe,Y===pn?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:h[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=n.properties.get(S);K.light=I}return S}function b(R,L,I,Y,S){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===pn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const se=e.update(R),ue=R.material;if(Array.isArray(ue)){const D=se.groups;for(let k=0,Z=D.length;k<Z;k++){const G=D[k],te=ue[G.materialIndex];if(te&&te.visible){const Q=E(R,te,Y,S);R.onBeforeShadow(n,R,L,I,se,Q,G),n.renderBufferDirect(I,null,se,Q,R,G),R.onAfterShadow(n,R,L,I,se,Q,G)}}}else if(ue.visible){const D=E(R,ue,Y,S);R.onBeforeShadow(n,R,L,I,se,D,null),n.renderBufferDirect(I,null,se,D,R,null),R.onAfterShadow(n,R,L,I,se,D,null)}}const K=R.children;for(let se=0,ue=K.length;se<ue;se++)b(K[se],L,I,Y,S)}}function lx(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const Me=new pt;let he=null;const $=new pt(0,0,0,0);return{setMask:function(de){he!==de&&!C&&(n.colorMask(de,de,de,de),he=de)},setLocked:function(de){C=de},setClear:function(de,De,Ke,ut,Tt){Tt===!0&&(de*=ut,De*=ut,Ke*=ut),Me.set(de,De,Ke,ut),$.equals(Me)===!1&&(n.clearColor(de,De,Ke,ut),$.copy(Me))},reset:function(){C=!1,he=null,$.set(-1,0,0,0)}}}function s(){let C=!1,Me=null,he=null,$=null;return{setTest:function(de){de?we(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(de){Me!==de&&!C&&(n.depthMask(de),Me=de)},setFunc:function(de){if(he!==de){switch(de){case Cd:n.depthFunc(n.NEVER);break;case Pd:n.depthFunc(n.ALWAYS);break;case Ld:n.depthFunc(n.LESS);break;case is:n.depthFunc(n.LEQUAL);break;case Ud:n.depthFunc(n.EQUAL);break;case Dd:n.depthFunc(n.GEQUAL);break;case Id:n.depthFunc(n.GREATER);break;case Nd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=de}},setLocked:function(de){C=de},setClear:function(de){$!==de&&(n.clearDepth(de),$=de)},reset:function(){C=!1,Me=null,he=null,$=null}}}function a(){let C=!1,Me=null,he=null,$=null,de=null,De=null,Ke=null,ut=null,Tt=null;return{setTest:function(et){C||(et?we(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(et){Me!==et&&!C&&(n.stencilMask(et),Me=et)},setFunc:function(et,yt,Qt){(he!==et||$!==yt||de!==Qt)&&(n.stencilFunc(et,yt,Qt),he=et,$=yt,de=Qt)},setOp:function(et,yt,Qt){(De!==et||Ke!==yt||ut!==Qt)&&(n.stencilOp(et,yt,Qt),De=et,Ke=yt,ut=Qt)},setLocked:function(et){C=et},setClear:function(et){Tt!==et&&(n.clearStencil(et),Tt=et)},reset:function(){C=!1,Me=null,he=null,$=null,de=null,De=null,Ke=null,ut=null,Tt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,f=!1,y=null,E=null,b=null,R=null,L=null,I=null,Y=null,S=new Je(0,0,0),A=0,K=!1,se=null,ue=null,D=null,k=null,Z=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,Q=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ae)[1]),te=Q>=1):ae.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),te=Q>=2);let le=null,ge={};const X=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),xe=new pt().fromArray(X),Ee=new pt().fromArray(oe);function ye(C,Me,he,$){const de=new Uint8Array(4),De=n.createTexture();n.bindTexture(C,De),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<he;Ke++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Me+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return De}const Ne={};Ne[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(n.DEPTH_TEST),l.setFunc(is),ne(!1),W(Ya),we(n.CULL_FACE),F(In);function we(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function Ce(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function Fe(C,Me){return m[C]!==Me?(n.bindFramebuffer(C,Me),m[C]=Me,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Me),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function g(C,Me){let he=v,$=!1;if(C)if(he=x.get(Me),he===void 0&&(he=[],x.set(Me,he)),C.isWebGLMultipleRenderTargets){const de=C.texture;if(he.length!==de.length||he[0]!==n.COLOR_ATTACHMENT0){for(let De=0,Ke=de.length;De<Ke;De++)he[De]=n.COLOR_ATTACHMENT0+De;he.length=de.length,$=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,$=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,$=!0);$&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function w(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const U={[Zn]:n.FUNC_ADD,[pd]:n.FUNC_SUBTRACT,[md]:n.FUNC_REVERSE_SUBTRACT};if(i)U[Za]=n.MIN,U[Ja]=n.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(U[Za]=C.MIN_EXT,U[Ja]=C.MAX_EXT)}const z={[_d]:n.ZERO,[gd]:n.ONE,[vd]:n.SRC_COLOR,[Ro]:n.SRC_ALPHA,[yd]:n.SRC_ALPHA_SATURATE,[Ed]:n.DST_COLOR,[Md]:n.DST_ALPHA,[xd]:n.ONE_MINUS_SRC_COLOR,[wo]:n.ONE_MINUS_SRC_ALPHA,[Td]:n.ONE_MINUS_DST_COLOR,[Sd]:n.ONE_MINUS_DST_ALPHA,[bd]:n.CONSTANT_COLOR,[Ad]:n.ONE_MINUS_CONSTANT_COLOR,[Rd]:n.CONSTANT_ALPHA,[wd]:n.ONE_MINUS_CONSTANT_ALPHA};function F(C,Me,he,$,de,De,Ke,ut,Tt,et){if(C===In){f===!0&&(Ce(n.BLEND),f=!1);return}if(f===!1&&(we(n.BLEND),f=!0),C!==dd){if(C!==y||et!==K){if((E!==Zn||L!==Zn)&&(n.blendEquation(n.FUNC_ADD),E=Zn,L=Zn),et)switch(C){case Li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ka:n.blendFunc(n.ONE,n.ONE);break;case ja:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $a:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ka:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ja:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $a:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,R=null,I=null,Y=null,S.set(0,0,0),A=0,y=C,K=et}return}de=de||Me,De=De||he,Ke=Ke||$,(Me!==E||de!==L)&&(n.blendEquationSeparate(U[Me],U[de]),E=Me,L=de),(he!==b||$!==R||De!==I||Ke!==Y)&&(n.blendFuncSeparate(z[he],z[$],z[De],z[Ke]),b=he,R=$,I=De,Y=Ke),(ut.equals(S)===!1||Tt!==A)&&(n.blendColor(ut.r,ut.g,ut.b,Tt),S.copy(ut),A=Tt),y=C,K=!1}function ie(C,Me){C.side===gn?Ce(n.CULL_FACE):we(n.CULL_FACE);let he=C.side===Ut;Me&&(he=!he),ne(he),C.blending===Li&&C.transparent===!1?F(In):F(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const $=C.stencilWrite;c.setTest($),$&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ee(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?we(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(C){se!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),se=C)}function W(C){C!==ud?(we(n.CULL_FACE),C!==ue&&(C===Ya?n.cullFace(n.BACK):C===fd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),ue=C}function re(C){C!==D&&(te&&n.lineWidth(C),D=C)}function ee(C,Me,he){C?(we(n.POLYGON_OFFSET_FILL),(k!==Me||Z!==he)&&(n.polygonOffset(Me,he),k=Me,Z=he)):Ce(n.POLYGON_OFFSET_FILL)}function ve(C){C?we(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function M(C){C===void 0&&(C=n.TEXTURE0+G-1),le!==C&&(n.activeTexture(C),le=C)}function _(C,Me,he){he===void 0&&(le===null?he=n.TEXTURE0+G-1:he=le);let $=ge[he];$===void 0&&($={type:void 0,texture:void 0},ge[he]=$),($.type!==C||$.texture!==Me)&&(le!==he&&(n.activeTexture(he),le=he),n.bindTexture(C,Me||Ne[C]),$.type=C,$.texture=Me)}function P(){const C=ge[le];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qe(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(C){xe.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),xe.copy(C))}function Le(C){Ee.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Ee.copy(C))}function Re(C,Me){let he=h.get(Me);he===void 0&&(he=new WeakMap,h.set(Me,he));let $=he.get(C);$===void 0&&($=n.getUniformBlockIndex(Me,C.name),he.set(C,$))}function Te(C,Me){const $=h.get(Me).get(C);u.get(Me)!==$&&(n.uniformBlockBinding(Me,$,C.__bindingPointIndex),u.set(Me,$))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},le=null,ge={},m={},x=new WeakMap,v=[],p=null,f=!1,y=null,E=null,b=null,R=null,L=null,I=null,Y=null,S=new Je(0,0,0),A=0,K=!1,se=null,ue=null,D=null,k=null,Z=null,xe.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:we,disable:Ce,bindFramebuffer:Fe,drawBuffers:g,useProgram:w,setBlending:F,setMaterial:ie,setFlipSided:ne,setCullFace:W,setLineWidth:re,setPolygonOffset:ee,setScissorTest:ve,activeTexture:M,bindTexture:_,unbindTexture:P,compressedTexImage2D:q,compressedTexImage3D:j,texImage2D:fe,texImage3D:Oe,updateUBOMapping:Re,uniformBlockBinding:Te,texStorage2D:Pe,texStorage3D:qe,texSubImage2D:J,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:_e,scissor:Ae,viewport:Le,reset:Ye}}function cx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,_){return f?new OffscreenCanvas(M,_):ls("canvas")}function E(M,_,P,q){let j=1;if((M.width>q||M.height>q)&&(j=q/Math.max(M.width,M.height)),j<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const J=_?No:Math.floor,me=J(j*M.width),ce=J(j*M.height);v===void 0&&(v=y(me,ce));const _e=P?y(me,ce):v;return _e.width=me,_e.height=ce,_e.getContext("2d").drawImage(M,0,0,me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+me+"x"+ce+")."),_e}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function b(M){return wl(M.width)&&wl(M.height)}function R(M){return o?!1:M.wrapS!==$t||M.wrapT!==$t||M.minFilter!==Rt&&M.minFilter!==Gt}function L(M,_){return M.generateMipmaps&&_&&M.minFilter!==Rt&&M.minFilter!==Gt}function I(M){n.generateMipmap(M)}function Y(M,_,P,q,j=!1){if(o===!1)return _;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let J=_;if(_===n.RED&&(P===n.FLOAT&&(J=n.R32F),P===n.HALF_FLOAT&&(J=n.R16F),P===n.UNSIGNED_BYTE&&(J=n.R8)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(J=n.R8UI),P===n.UNSIGNED_SHORT&&(J=n.R16UI),P===n.UNSIGNED_INT&&(J=n.R32UI),P===n.BYTE&&(J=n.R8I),P===n.SHORT&&(J=n.R16I),P===n.INT&&(J=n.R32I)),_===n.RG&&(P===n.FLOAT&&(J=n.RG32F),P===n.HALF_FLOAT&&(J=n.RG16F),P===n.UNSIGNED_BYTE&&(J=n.RG8)),_===n.RGBA){const me=j?rs:Ze.getTransfer(q);P===n.FLOAT&&(J=n.RGBA32F),P===n.HALF_FLOAT&&(J=n.RGBA16F),P===n.UNSIGNED_BYTE&&(J=me===tt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(M,_,P){return L(M,P)===!0||M.isFramebufferTexture&&M.minFilter!==Rt&&M.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function A(M){return M===Rt||M===Qa||M===Fs?n.NEAREST:n.LINEAR}function K(M){const _=M.target;_.removeEventListener("dispose",K),ue(_),_.isVideoTexture&&x.delete(_)}function se(M){const _=M.target;_.removeEventListener("dispose",se),k(_)}function ue(M){const _=i.get(M);if(_.__webglInit===void 0)return;const P=M.source,q=p.get(P);if(q){const j=q[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&D(M),Object.keys(q).length===0&&p.delete(P)}i.remove(M)}function D(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const P=M.source,q=p.get(P);delete q[_.__cacheKey],a.memory.textures--}function k(M){const _=M.texture,P=i.get(M),q=i.get(_);if(q.__webglTexture!==void 0&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(P.__webglFramebuffer[j]))for(let J=0;J<P.__webglFramebuffer[j].length;J++)n.deleteFramebuffer(P.__webglFramebuffer[j][J]);else n.deleteFramebuffer(P.__webglFramebuffer[j]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[j])}else{if(Array.isArray(P.__webglFramebuffer))for(let j=0;j<P.__webglFramebuffer.length;j++)n.deleteFramebuffer(P.__webglFramebuffer[j]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let j=0;j<P.__webglColorRenderbuffer.length;j++)P.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[j]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let j=0,J=_.length;j<J;j++){const me=i.get(_[j]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(_[j])}i.remove(_),i.remove(M)}let Z=0;function G(){Z=0}function te(){const M=Z;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),Z+=1,M}function Q(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function ae(M,_){const P=i.get(M);if(M.isVideoTexture&&ee(M),M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){const q=M.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(P,M,_);return}}t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function le(M,_){const P=i.get(M);if(M.version>0&&P.__version!==M.version){we(P,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function ge(M,_){const P=i.get(M);if(M.version>0&&P.__version!==M.version){we(P,M,_);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function X(M,_){const P=i.get(M);if(M.version>0&&P.__version!==M.version){Ce(P,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}const oe={[Lo]:n.REPEAT,[$t]:n.CLAMP_TO_EDGE,[Uo]:n.MIRRORED_REPEAT},xe={[Rt]:n.NEAREST,[Qa]:n.NEAREST_MIPMAP_NEAREST,[Fs]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Wd]:n.LINEAR_MIPMAP_NEAREST,[fr]:n.LINEAR_MIPMAP_LINEAR},Ee={[np]:n.NEVER,[lp]:n.ALWAYS,[ip]:n.LESS,[cu]:n.LEQUAL,[rp]:n.EQUAL,[ap]:n.GEQUAL,[sp]:n.GREATER,[op]:n.NOTEQUAL};function ye(M,_,P){if(P?(n.texParameteri(M,n.TEXTURE_WRAP_S,oe[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,oe[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,oe[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,xe[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,xe[_.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==$t||_.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,A(_.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==Rt&&_.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Rt||_.minFilter!==Fs&&_.minFilter!==fr||_.type===Pn&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===hr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(M,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Ne(M,_){let P=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",K));const q=_.source;let j=p.get(q);j===void 0&&(j={},p.set(q,j));const J=Q(_);if(J!==M.__cacheKey){j[J]===void 0&&(j[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),j[J].usedTimes++;const me=j[M.__cacheKey];me!==void 0&&(j[M.__cacheKey].usedTimes--,me.usedTimes===0&&D(_)),M.__cacheKey=J,M.__webglTexture=j[J].texture}return P}function we(M,_,P){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const j=Ne(M,_),J=_.source;t.bindTexture(q,M.__webglTexture,n.TEXTURE0+P);const me=i.get(J);if(J.version!==me.__version||j===!0){t.activeTexture(n.TEXTURE0+P);const ce=Ze.getPrimaries(Ze.workingColorSpace),_e=_.colorSpace===Vt?null:Ze.getPrimaries(_.colorSpace),Pe=_.colorSpace===Vt||ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const qe=R(_)&&b(_.image)===!1;let fe=E(_.image,qe,!1,u);fe=ve(_,fe);const Oe=b(fe)||o,Ae=s.convert(_.format,_.colorSpace);let Le=s.convert(_.type),Re=Y(_.internalFormat,Ae,Le,_.colorSpace,_.isVideoTexture);ye(q,_,Oe);let Te;const Ye=_.mipmaps,C=o&&_.isVideoTexture!==!0&&Re!==au,Me=me.__version===void 0||j===!0,he=S(_,fe,Oe);if(_.isDepthTexture)Re=n.DEPTH_COMPONENT,o?_.type===Pn?Re=n.DEPTH_COMPONENT32F:_.type===Cn?Re=n.DEPTH_COMPONENT24:_.type===ni?Re=n.DEPTH24_STENCIL8:Re=n.DEPTH_COMPONENT16:_.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ii&&Re===n.DEPTH_COMPONENT&&_.type!==oa&&_.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Cn,Le=s.convert(_.type)),_.format===zi&&Re===n.DEPTH_COMPONENT&&(Re=n.DEPTH_STENCIL,_.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=ni,Le=s.convert(_.type))),Me&&(C?t.texStorage2D(n.TEXTURE_2D,1,Re,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Re,fe.width,fe.height,0,Ae,Le,null));else if(_.isDataTexture)if(Ye.length>0&&Oe){C&&Me&&t.texStorage2D(n.TEXTURE_2D,he,Re,Ye[0].width,Ye[0].height);for(let $=0,de=Ye.length;$<de;$++)Te=Ye[$],C?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Ae,Le,Te.data):t.texImage2D(n.TEXTURE_2D,$,Re,Te.width,Te.height,0,Ae,Le,Te.data);_.generateMipmaps=!1}else C?(Me&&t.texStorage2D(n.TEXTURE_2D,he,Re,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Ae,Le,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Re,fe.width,fe.height,0,Ae,Le,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){C&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Re,Ye[0].width,Ye[0].height,fe.depth);for(let $=0,de=Ye.length;$<de;$++)Te=Ye[$],_.format!==Zt?Ae!==null?C?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,fe.depth,Ae,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Re,Te.width,Te.height,fe.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,fe.depth,Ae,Le,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Re,Te.width,Te.height,fe.depth,0,Ae,Le,Te.data)}else{C&&Me&&t.texStorage2D(n.TEXTURE_2D,he,Re,Ye[0].width,Ye[0].height);for(let $=0,de=Ye.length;$<de;$++)Te=Ye[$],_.format!==Zt?Ae!==null?C?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Re,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Ae,Le,Te.data):t.texImage2D(n.TEXTURE_2D,$,Re,Te.width,Te.height,0,Ae,Le,Te.data)}else if(_.isDataArrayTexture)C?(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Re,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ae,Le,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,fe.width,fe.height,fe.depth,0,Ae,Le,fe.data);else if(_.isData3DTexture)C?(Me&&t.texStorage3D(n.TEXTURE_3D,he,Re,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ae,Le,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Re,fe.width,fe.height,fe.depth,0,Ae,Le,fe.data);else if(_.isFramebufferTexture){if(Me)if(C)t.texStorage2D(n.TEXTURE_2D,he,Re,fe.width,fe.height);else{let $=fe.width,de=fe.height;for(let De=0;De<he;De++)t.texImage2D(n.TEXTURE_2D,De,Re,$,de,0,Ae,Le,null),$>>=1,de>>=1}}else if(Ye.length>0&&Oe){C&&Me&&t.texStorage2D(n.TEXTURE_2D,he,Re,Ye[0].width,Ye[0].height);for(let $=0,de=Ye.length;$<de;$++)Te=Ye[$],C?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ae,Le,Te):t.texImage2D(n.TEXTURE_2D,$,Re,Ae,Le,Te);_.generateMipmaps=!1}else C?(Me&&t.texStorage2D(n.TEXTURE_2D,he,Re,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Le,fe)):t.texImage2D(n.TEXTURE_2D,0,Re,Ae,Le,fe);L(_,Oe)&&I(q),me.__version=J.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ce(M,_,P){if(_.image.length!==6)return;const q=Ne(M,_),j=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+P);const J=i.get(j);if(j.version!==J.__version||q===!0){t.activeTexture(n.TEXTURE0+P);const me=Ze.getPrimaries(Ze.workingColorSpace),ce=_.colorSpace===Vt?null:Ze.getPrimaries(_.colorSpace),_e=_.colorSpace===Vt||me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Pe=_.isCompressedTexture||_.image[0].isCompressedTexture,qe=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!Pe&&!qe?fe[$]=E(_.image[$],!1,!0,c):fe[$]=qe?_.image[$].image:_.image[$],fe[$]=ve(_,fe[$]);const Oe=fe[0],Ae=b(Oe)||o,Le=s.convert(_.format,_.colorSpace),Re=s.convert(_.type),Te=Y(_.internalFormat,Le,Re,_.colorSpace),Ye=o&&_.isVideoTexture!==!0,C=J.__version===void 0||q===!0;let Me=S(_,Oe,Ae);ye(n.TEXTURE_CUBE_MAP,_,Ae);let he;if(Pe){Ye&&C&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Te,Oe.width,Oe.height);for(let $=0;$<6;$++){he=fe[$].mipmaps;for(let de=0;de<he.length;de++){const De=he[de];_.format!==Zt?Le!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,De.width,De.height,Le,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,Te,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,De.width,De.height,Le,Re,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,Te,De.width,De.height,0,Le,Re,De.data)}}}else{he=_.mipmaps,Ye&&C&&(he.length>0&&Me++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Te,fe[0].width,fe[0].height));for(let $=0;$<6;$++)if(qe){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,Le,Re,fe[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Te,fe[$].width,fe[$].height,0,Le,Re,fe[$].data);for(let de=0;de<he.length;de++){const Ke=he[de].image[$].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,Ke.width,Ke.height,Le,Re,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,Te,Ke.width,Ke.height,0,Le,Re,Ke.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Le,Re,fe[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Te,Le,Re,fe[$]);for(let de=0;de<he.length;de++){const De=he[de];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,Le,Re,De.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,Te,Le,Re,De.image[$])}}}L(_,Ae)&&I(n.TEXTURE_CUBE_MAP),J.__version=j.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Fe(M,_,P,q,j,J){const me=s.convert(P.format,P.colorSpace),ce=s.convert(P.type),_e=Y(P.internalFormat,me,ce,P.colorSpace);if(!i.get(_).__hasExternalTextures){const qe=Math.max(1,_.width>>J),fe=Math.max(1,_.height>>J);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,J,_e,qe,fe,_.depth,0,me,ce,null):t.texImage2D(j,J,_e,qe,fe,0,me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),re(_)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,j,i.get(P).__webglTexture,0,W(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,j,i.get(P).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(M,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let q=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(P||re(_)){const j=_.depthTexture;j&&j.isDepthTexture&&(j.type===Pn?q=n.DEPTH_COMPONENT32F:j.type===Cn&&(q=n.DEPTH_COMPONENT24));const J=W(_);re(_)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,q,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,q,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){const q=W(_);P&&re(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,_.width,_.height):re(_)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let j=0;j<q.length;j++){const J=q[j],me=s.convert(J.format,J.colorSpace),ce=s.convert(J.type),_e=Y(J.internalFormat,me,ce,J.colorSpace),Pe=W(_);P&&re(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,_e,_.width,_.height):re(_)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,_e,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,_e,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function w(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ae(_.depthTexture,0);const q=i.get(_.depthTexture).__webglTexture,j=W(_);if(_.depthTexture.format===ii)re(_)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(_.depthTexture.format===zi)re(_)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function U(M){const _=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");w(_.__webglFramebuffer,M)}else if(P){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]=n.createRenderbuffer(),g(_.__webglDepthbuffer[q],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),g(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function z(M,_,P){const q=i.get(M);_!==void 0&&Fe(q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&U(M)}function F(M){const _=M.texture,P=i.get(M),q=i.get(_);M.addEventListener("dispose",se),M.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,a.memory.textures++);const j=M.isWebGLCubeRenderTarget===!0,J=M.isWebGLMultipleRenderTargets===!0,me=b(M)||o;if(j){P.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[ce]=[];for(let _e=0;_e<_.mipmaps.length;_e++)P.__webglFramebuffer[ce][_e]=n.createFramebuffer()}else P.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)P.__webglFramebuffer[ce]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(J)if(r.drawBuffers){const ce=M.texture;for(let _e=0,Pe=ce.length;_e<Pe;_e++){const qe=i.get(ce[_e]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&re(M)===!1){const ce=J?_:[_];P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let _e=0;_e<ce.length;_e++){const Pe=ce[_e];P.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[_e]);const qe=s.convert(Pe.format,Pe.colorSpace),fe=s.convert(Pe.type),Oe=Y(Pe.internalFormat,qe,fe,Pe.colorSpace,M.isXRRenderTarget===!0),Ae=W(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Oe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,P.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),g(P.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),ye(n.TEXTURE_CUBE_MAP,_,me);for(let ce=0;ce<6;ce++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Fe(P.__webglFramebuffer[ce][_e],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else Fe(P.__webglFramebuffer[ce],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);L(_,me)&&I(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const ce=M.texture;for(let _e=0,Pe=ce.length;_e<Pe;_e++){const qe=ce[_e],fe=i.get(qe);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),ye(n.TEXTURE_2D,qe,me),Fe(P.__webglFramebuffer,M,qe,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),L(qe,me)&&I(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ce=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,q.__webglTexture),ye(ce,_,me),o&&_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Fe(P.__webglFramebuffer[_e],M,_,n.COLOR_ATTACHMENT0,ce,_e);else Fe(P.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,ce,0);L(_,me)&&I(ce),t.unbindTexture()}M.depthBuffer&&U(M)}function ie(M){const _=b(M)||o,P=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let q=0,j=P.length;q<j;q++){const J=P[q];if(L(J,_)){const me=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(J).__webglTexture;t.bindTexture(me,ce),I(me),t.unbindTexture()}}}function ne(M){if(o&&M.samples>0&&re(M)===!1){const _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],P=M.width,q=M.height;let j=n.COLOR_BUFFER_BIT;const J=[],me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(M),_e=M.isWebGLMultipleRenderTargets===!0;if(_e)for(let Pe=0;Pe<_.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Pe=0;Pe<_.length;Pe++){J.push(n.COLOR_ATTACHMENT0+Pe),M.depthBuffer&&J.push(me);const qe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(qe===!1&&(M.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Pe]),qe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),_e){const fe=i.get(_[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,P,q,0,0,P,q,j,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Pe=0;Pe<_.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Pe]);const qe=i.get(_[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function W(M){return Math.min(h,M.samples)}function re(M){const _=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ee(M){const _=a.render.frame;x.get(M)!==_&&(x.set(M,_),M.update())}function ve(M,_){const P=M.colorSpace,q=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Do||P!==Mn&&P!==Vt&&(Ze.getTransfer(P)===tt?o===!1?e.has("EXT_sRGB")===!0&&q===Zt?(M.format=Do,M.minFilter=Gt,M.generateMipmaps=!1):_=fu.sRGBToLinear(_):(q!==Zt||j!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}this.allocateTextureUnit=te,this.resetTextureUnits=G,this.setTexture2D=ae,this.setTexture2DArray=le,this.setTexture3D=ge,this.setTextureCube=X,this.rebindTextures=z,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=re}function ux(n,e,t){const i=t.isWebGL2;function r(s,a=Vt){let o;const l=Ze.getTransfer(a);if(s===Fn)return n.UNSIGNED_BYTE;if(s===nu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===iu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===kd)return n.BYTE;if(s===Xd)return n.SHORT;if(s===oa)return n.UNSIGNED_SHORT;if(s===tu)return n.INT;if(s===Cn)return n.UNSIGNED_INT;if(s===Pn)return n.FLOAT;if(s===hr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qd)return n.ALPHA;if(s===Zt)return n.RGBA;if(s===Yd)return n.LUMINANCE;if(s===Kd)return n.LUMINANCE_ALPHA;if(s===ii)return n.DEPTH_COMPONENT;if(s===zi)return n.DEPTH_STENCIL;if(s===Do)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===jd)return n.RED;if(s===ru)return n.RED_INTEGER;if(s===$d)return n.RG;if(s===su)return n.RG_INTEGER;if(s===ou)return n.RGBA_INTEGER;if(s===Os||s===Bs||s===zs||s===Hs)if(l===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Os)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Os)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===el||s===tl||s===nl||s===il)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===el)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===il)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===au)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rl||s===sl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===rl)return l===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===sl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ol||s===al||s===ll||s===cl||s===ul||s===fl||s===hl||s===dl||s===pl||s===ml||s===_l||s===gl||s===vl||s===xl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ol)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===al)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ll)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ul)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ml)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_l)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gs||s===Ml||s===Sl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Gs)return l===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ml)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zd||s===El||s===Tl||s===yl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Gs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===El)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ni?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class fx extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yr extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hx={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class dx extends ki{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,x=null;const v=t.getContextAttributes();let p=null,f=null;const y=[],E=[],b=new Qe;let R=null;const L=new Kt;L.layers.enable(1),L.viewport=new pt;const I=new Kt;I.layers.enable(2),I.viewport=new pt;const Y=[L,I],S=new fx;S.layers.enable(1),S.layers.enable(2);let A=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=y[X];return oe===void 0&&(oe=new ho,y[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=y[X];return oe===void 0&&(oe=new ho,y[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=y[X];return oe===void 0&&(oe=new ho,y[X]=oe),oe.getHandSpace()};function se(X){const oe=E.indexOf(X.inputSource);if(oe===-1)return;const xe=y[oe];xe!==void 0&&(xe.update(X.inputSource,X.frame,c||a),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function ue(){r.removeEventListener("select",se),r.removeEventListener("selectstart",se),r.removeEventListener("selectend",se),r.removeEventListener("squeeze",se),r.removeEventListener("squeezestart",se),r.removeEventListener("squeezeend",se),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",D);for(let X=0;X<y.length;X++){const oe=E[X];oe!==null&&(E[X]=null,y[X].disconnect(oe))}A=null,K=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,f=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",se),r.addEventListener("selectstart",se),r.addEventListener("selectend",se),r.addEventListener("squeeze",se),r.addEventListener("squeezestart",se),r.addEventListener("squeezeend",se),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new oi(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let oe=null,xe=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?zi:ii,xe=v.stencil?ni:Cn);const ye={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new oi(d.textureWidth,d.textureHeight,{format:Zt,type:Fn,depthTexture:new yu(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ne=e.properties.get(f);Ne.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(X){for(let oe=0;oe<X.removed.length;oe++){const xe=X.removed[oe],Ee=E.indexOf(xe);Ee>=0&&(E[Ee]=null,y[Ee].disconnect(xe))}for(let oe=0;oe<X.added.length;oe++){const xe=X.added[oe];let Ee=E.indexOf(xe);if(Ee===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=E.length){E.push(xe),Ee=Ne;break}else if(E[Ne]===null){E[Ne]=xe,Ee=Ne;break}if(Ee===-1)break}const ye=y[Ee];ye&&ye.connect(xe)}}const k=new H,Z=new H;function G(X,oe,xe){k.setFromMatrixPosition(oe.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);const Ee=k.distanceTo(Z),ye=oe.projectionMatrix.elements,Ne=xe.projectionMatrix.elements,we=ye[14]/(ye[10]-1),Ce=ye[14]/(ye[10]+1),Fe=(ye[9]+1)/ye[5],g=(ye[9]-1)/ye[5],w=(ye[8]-1)/ye[0],U=(Ne[8]+1)/Ne[0],z=we*w,F=we*U,ie=Ee/(-w+U),ne=ie*-w;oe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(ie),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const W=we+ie,re=Ce+ie,ee=z-ne,ve=F+(Ee-ne),M=Fe*Ce/re*W,_=g*Ce/re*W;X.projectionMatrix.makePerspective(ee,ve,M,_,W,re),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function te(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;S.near=I.near=L.near=X.near,S.far=I.far=L.far=X.far,(A!==S.near||K!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,K=S.far);const oe=X.parent,xe=S.cameras;te(S,oe);for(let Ee=0;Ee<xe.length;Ee++)te(xe[Ee],oe);xe.length===2?G(S,L,I):S.projectionMatrix.copy(L.projectionMatrix),Q(X,S,oe)};function Q(X,oe,xe){xe===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Io*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let ae=null;function le(X,oe){if(u=oe.getViewerPose(c||a),x=oe,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Ee=!1;xe.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let ye=0;ye<xe.length;ye++){const Ne=xe[ye];let we=null;if(m!==null)we=m.getViewport(Ne);else{const Fe=h.getViewSubImage(d,Ne);we=Fe.viewport,ye===0&&(e.setRenderTargetTextures(f,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(f))}let Ce=Y[ye];Ce===void 0&&(Ce=new Kt,Ce.layers.enable(ye),Ce.viewport=new pt,Y[ye]=Ce),Ce.matrix.fromArray(Ne.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ne.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(we.x,we.y,we.width,we.height),ye===0&&(S.matrix.copy(Ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push(Ce)}}for(let xe=0;xe<y.length;xe++){const Ee=E[xe],ye=y[xe];Ee!==null&&ye!==void 0&&ye.update(Ee,oe,c||a)}ae&&ae(X,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),x=null}const ge=new Tu;ge.setAnimationLoop(le),this.setAnimationLoop=function(X){ae=X},this.dispose=function(){}}}function px(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,xu(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,y,E,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(s(p,f),x(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,E):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ut&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ut&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*E,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=E*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const y=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,E){const b=E.program;i.uniformBlockBinding(y,b)}function c(y,E){let b=r[y.id];b===void 0&&(x(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",p));const R=E.program;i.updateUBOMapping(y,R);const L=e.render.frame;s[y.id]!==L&&(d(y),s[y.id]=L)}function u(y){const E=h();y.__bindingPointIndex=E;const b=n.createBuffer(),R=y.__size,L=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=r[y.id],b=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let L=0,I=b.length;L<I;L++){const Y=b[L];if(m(Y,L,R)===!0){const S=Y.__offset,A=Array.isArray(Y.value)?Y.value:[Y.value];let K=0;for(let se=0;se<A.length;se++){const ue=A[se],D=v(ue);typeof ue=="number"?(Y.__data[0]=ue,n.bufferSubData(n.UNIFORM_BUFFER,S+K,Y.__data)):ue.isMatrix3?(Y.__data[0]=ue.elements[0],Y.__data[1]=ue.elements[1],Y.__data[2]=ue.elements[2],Y.__data[3]=ue.elements[0],Y.__data[4]=ue.elements[3],Y.__data[5]=ue.elements[4],Y.__data[6]=ue.elements[5],Y.__data[7]=ue.elements[0],Y.__data[8]=ue.elements[6],Y.__data[9]=ue.elements[7],Y.__data[10]=ue.elements[8],Y.__data[11]=ue.elements[0]):(ue.toArray(Y.__data,K),K+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,Y.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,E,b){const R=y.value;if(b[E]===void 0){if(typeof R=="number")b[E]=R;else{const L=Array.isArray(R)?R:[R],I=[];for(let Y=0;Y<L.length;Y++)I.push(L[Y].clone());b[E]=I}return!0}else if(typeof R=="number"){if(b[E]!==R)return b[E]=R,!0}else{const L=Array.isArray(b[E])?b[E]:[b[E]],I=Array.isArray(R)?R:[R];for(let Y=0;Y<L.length;Y++){const S=L[Y];if(S.equals(I[Y])===!1)return S.copy(I[Y]),!0}}return!1}function x(y){const E=y.uniforms;let b=0;const R=16;let L=0;for(let I=0,Y=E.length;I<Y;I++){const S=E[I],A={boundary:0,storage:0},K=Array.isArray(S.value)?S.value:[S.value];for(let se=0,ue=K.length;se<ue;se++){const D=K[se],k=v(D);A.boundary+=k.boundary,A.storage+=k.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,I>0){L=b%R;const se=R-L;L!==0&&se-A.boundary<0&&(b+=R-L,S.__offset=b)}b+=A.storage}return L=b%R,L>0&&(b+=R-L),y.__size=b,y.__cache={},this}function v(y){const E={boundary:0,storage:0};return typeof y=="number"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function p(y){const E=y.target;E.removeEventListener("dispose",p);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class _x{constructor(e={}){const{canvas:t=up(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;const E=this;let b=!1,R=0,L=0,I=null,Y=-1,S=null;const A=new pt,K=new pt;let se=null;const ue=new Je(0);let D=0,k=t.width,Z=t.height,G=1,te=null,Q=null;const ae=new pt(0,0,k,Z),le=new pt(0,0,k,Z);let ge=!1;const X=new Eu;let oe=!1,xe=!1,Ee=null;const ye=new mt,Ne=new Qe,we=new H,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return I===null?G:1}let g=i;function w(T,N){for(let B=0;B<T.length;B++){const V=T[B],O=t.getContext(V,N);if(O!==null)return O}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sa}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",Me,!1),g===null){const N=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&N.shift(),g=w(N,T),g===null)throw w(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let U,z,F,ie,ne,W,re,ee,ve,M,_,P,q,j,J,me,ce,_e,Pe,qe,fe,Oe,Ae,Le;function Re(){U=new Ag(g),z=new xg(g,U,e),U.init(z),Oe=new ux(g,U,z),F=new lx(g,U,z),ie=new Cg(g),ne=new Kv,W=new cx(g,U,F,ne,z,Oe,ie),re=new Sg(E),ee=new bg(E),ve=new Fp(g,z),Ae=new gg(g,U,ve,z),M=new Rg(g,ve,ie,Ae),_=new Dg(g,M,ve,ie),Pe=new Ug(g,z,W),me=new Mg(ne),P=new Yv(E,re,ee,U,z,Ae,me),q=new px(E,ne),j=new $v,J=new nx(U,z),_e=new _g(E,re,ee,F,_,d,l),ce=new ax(E,_,z),Le=new mx(g,ie,z,F),qe=new vg(g,U,ie,z),fe=new wg(g,U,ie,z),ie.programs=P.programs,E.capabilities=z,E.extensions=U,E.properties=ne,E.renderLists=j,E.shadowMap=ce,E.state=F,E.info=ie}Re();const Te=new dx(E,g);this.xr=Te,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const T=U.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=U.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(k,Z,!1))},this.getSize=function(T){return T.set(k,Z)},this.setSize=function(T,N,B=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,Z=N,t.width=Math.floor(T*G),t.height=Math.floor(N*G),B===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(k*G,Z*G).floor()},this.setDrawingBufferSize=function(T,N,B){k=T,Z=N,G=B,t.width=Math.floor(T*B),t.height=Math.floor(N*B),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,N,B,V){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,N,B,V),F.viewport(A.copy(ae).multiplyScalar(G).floor())},this.getScissor=function(T){return T.copy(le)},this.setScissor=function(T,N,B,V){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,N,B,V),F.scissor(K.copy(le).multiplyScalar(G).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(T){F.setScissorTest(ge=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(T=!0,N=!0,B=!0){let V=0;if(T){let O=!1;if(I!==null){const Se=I.texture.format;O=Se===ou||Se===su||Se===ru}if(O){const Se=I.texture.type,be=Se===Fn||Se===Cn||Se===oa||Se===ni||Se===nu||Se===iu,Ue=_e.getClearColor(),Ie=_e.getClearAlpha(),Ve=Ue.r,Be=Ue.g,ze=Ue.b;be?(m[0]=Ve,m[1]=Be,m[2]=ze,m[3]=Ie,g.clearBufferuiv(g.COLOR,0,m)):(x[0]=Ve,x[1]=Be,x[2]=ze,x[3]=Ie,g.clearBufferiv(g.COLOR,0,x))}else V|=g.COLOR_BUFFER_BIT}N&&(V|=g.DEPTH_BUFFER_BIT),B&&(V|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),j.dispose(),J.dispose(),ne.dispose(),re.dispose(),ee.dispose(),_.dispose(),Ae.dispose(),Le.dispose(),P.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Tt),Te.removeEventListener("sessionend",et),Ee&&(Ee.dispose(),Ee=null),yt.stop()};function Ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=ie.autoReset,N=ce.enabled,B=ce.autoUpdate,V=ce.needsUpdate,O=ce.type;Re(),ie.autoReset=T,ce.enabled=N,ce.autoUpdate=B,ce.needsUpdate=V,ce.type=O}function Me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){const N=T.target;N.removeEventListener("dispose",he),$(N)}function $(T){de(T),ne.remove(T)}function de(T){const N=ne.get(T).programs;N!==void 0&&(N.forEach(function(B){P.releaseProgram(B)}),T.isShaderMaterial&&P.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,B,V,O,Se){N===null&&(N=Ce);const be=O.isMesh&&O.matrixWorld.determinant()<0,Ue=Lu(T,N,B,V,O);F.setMaterial(V,be);let Ie=B.index,Ve=1;if(V.wireframe===!0){if(Ie=M.getWireframeAttribute(B),Ie===void 0)return;Ve=2}const Be=B.drawRange,ze=B.attributes.position;let st=Be.start*Ve,It=(Be.start+Be.count)*Ve;Se!==null&&(st=Math.max(st,Se.start*Ve),It=Math.min(It,(Se.start+Se.count)*Ve)),Ie!==null?(st=Math.max(st,0),It=Math.min(It,Ie.count)):ze!=null&&(st=Math.max(st,0),It=Math.min(It,ze.count));const ft=It-st;if(ft<0||ft===1/0)return;Ae.setup(O,V,Ue,B,Ie);let ln,it=qe;if(Ie!==null&&(ln=ve.get(Ie),it=fe,it.setIndex(ln)),O.isMesh)V.wireframe===!0?(F.setLineWidth(V.wireframeLinewidth*Fe()),it.setMode(g.LINES)):it.setMode(g.TRIANGLES);else if(O.isLine){let We=V.linewidth;We===void 0&&(We=1),F.setLineWidth(We*Fe()),O.isLineSegments?it.setMode(g.LINES):O.isLineLoop?it.setMode(g.LINE_LOOP):it.setMode(g.LINE_STRIP)}else O.isPoints?it.setMode(g.POINTS):O.isSprite&&it.setMode(g.TRIANGLES);if(O.isBatchedMesh)it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)it.renderInstances(st,ft,O.count);else if(B.isInstancedBufferGeometry){const We=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ys=Math.min(B.instanceCount,We);it.renderInstances(st,ft,ys)}else it.render(st,ft)};function De(T,N,B){T.transparent===!0&&T.side===gn&&T.forceSinglePass===!1?(T.side=Ut,T.needsUpdate=!0,vr(T,N,B),T.side=Bn,T.needsUpdate=!0,vr(T,N,B),T.side=gn):vr(T,N,B)}this.compile=function(T,N,B=null){B===null&&(B=T),p=J.get(B),p.init(),y.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==B&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(E._useLegacyLights);const V=new Set;return T.traverse(function(O){const Se=O.material;if(Se)if(Array.isArray(Se))for(let be=0;be<Se.length;be++){const Ue=Se[be];De(Ue,B,O),V.add(Ue)}else De(Se,B,O),V.add(Se)}),y.pop(),p=null,V},this.compileAsync=function(T,N,B=null){const V=this.compile(T,N,B);return new Promise(O=>{function Se(){if(V.forEach(function(be){ne.get(be).currentProgram.isReady()&&V.delete(be)}),V.size===0){O(T);return}setTimeout(Se,10)}U.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ke=null;function ut(T){Ke&&Ke(T)}function Tt(){yt.stop()}function et(){yt.start()}const yt=new Tu;yt.setAnimationLoop(ut),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(T){Ke=T,Te.setAnimationLoop(T),T===null?yt.stop():yt.start()},Te.addEventListener("sessionstart",Tt),Te.addEventListener("sessionend",et),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(N),N=Te.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,N,I),p=J.get(T,y.length),p.init(),y.push(p),ye.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(ye),xe=this.localClippingEnabled,oe=me.init(this.clippingPlanes,xe),v=j.get(T,f.length),v.init(),f.push(v),Qt(T,N,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(te,Q),this.info.render.frame++,oe===!0&&me.beginShadows();const B=p.state.shadowsArray;if(ce.render(B,T,N),oe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(v,T),p.setupLights(E._useLegacyLights),N.isArrayCamera){const V=N.cameras;for(let O=0,Se=V.length;O<Se;O++){const be=V[O];fa(v,T,be,be.viewport)}}else fa(v,T,N);I!==null&&(W.updateMultisampleRenderTarget(I),W.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(E,T,N),Ae.resetDefaultState(),Y=-1,S=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Qt(T,N,B,V){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){V&&we.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);const be=_.update(T),Ue=T.material;Ue.visible&&v.push(T,be,Ue,B,we.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const be=_.update(T),Ue=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),we.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),we.copy(be.boundingSphere.center)),we.applyMatrix4(T.matrixWorld).applyMatrix4(ye)),Array.isArray(Ue)){const Ie=be.groups;for(let Ve=0,Be=Ie.length;Ve<Be;Ve++){const ze=Ie[Ve],st=Ue[ze.materialIndex];st&&st.visible&&v.push(T,be,st,B,we.z,ze)}}else Ue.visible&&v.push(T,be,Ue,B,we.z,null)}}const Se=T.children;for(let be=0,Ue=Se.length;be<Ue;be++)Qt(Se[be],N,B,V)}function fa(T,N,B,V){const O=T.opaque,Se=T.transmissive,be=T.transparent;p.setupLightsView(B),oe===!0&&me.setGlobalState(E.clippingPlanes,B),Se.length>0&&Pu(O,Se,N,B),V&&F.viewport(A.copy(V)),O.length>0&&gr(O,N,B),Se.length>0&&gr(Se,N,B),be.length>0&&gr(be,N,B),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Pu(T,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const Se=z.isWebGL2;Ee===null&&(Ee=new oi(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")?hr:Fn,minFilter:fr,samples:Se?4:0})),E.getDrawingBufferSize(Ne),Se?Ee.setSize(Ne.x,Ne.y):Ee.setSize(No(Ne.x),No(Ne.y));const be=E.getRenderTarget();E.setRenderTarget(Ee),E.getClearColor(ue),D=E.getClearAlpha(),D<1&&E.setClearColor(16777215,.5),E.clear();const Ue=E.toneMapping;E.toneMapping=Nn,gr(T,B,V),W.updateMultisampleRenderTarget(Ee),W.updateRenderTargetMipmap(Ee);let Ie=!1;for(let Ve=0,Be=N.length;Ve<Be;Ve++){const ze=N[Ve],st=ze.object,It=ze.geometry,ft=ze.material,ln=ze.group;if(ft.side===gn&&st.layers.test(V.layers)){const it=ft.side;ft.side=Ut,ft.needsUpdate=!0,ha(st,B,V,It,ft,ln),ft.side=it,ft.needsUpdate=!0,Ie=!0}}Ie===!0&&(W.updateMultisampleRenderTarget(Ee),W.updateRenderTargetMipmap(Ee)),E.setRenderTarget(be),E.setClearColor(ue,D),E.toneMapping=Ue}function gr(T,N,B){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,Se=T.length;O<Se;O++){const be=T[O],Ue=be.object,Ie=be.geometry,Ve=V===null?be.material:V,Be=be.group;Ue.layers.test(B.layers)&&ha(Ue,N,B,Ie,Ve,Be)}}function ha(T,N,B,V,O,Se){T.onBeforeRender(E,N,B,V,O,Se),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(E,N,B,V,T,Se),O.transparent===!0&&O.side===gn&&O.forceSinglePass===!1?(O.side=Ut,O.needsUpdate=!0,E.renderBufferDirect(B,N,V,O,T,Se),O.side=Bn,O.needsUpdate=!0,E.renderBufferDirect(B,N,V,O,T,Se),O.side=gn):E.renderBufferDirect(B,N,V,O,T,Se),T.onAfterRender(E,N,B,V,O,Se)}function vr(T,N,B){N.isScene!==!0&&(N=Ce);const V=ne.get(T),O=p.state.lights,Se=p.state.shadowsArray,be=O.state.version,Ue=P.getParameters(T,O.state,Se,N,B),Ie=P.getProgramCacheKey(Ue);let Ve=V.programs;V.environment=T.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(T.isMeshStandardMaterial?ee:re).get(T.envMap||V.environment),Ve===void 0&&(T.addEventListener("dispose",he),Ve=new Map,V.programs=Ve);let Be=Ve.get(Ie);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===be)return pa(T,Ue),Be}else Ue.uniforms=P.getUniforms(T),T.onBuild(B,Ue,E),T.onBeforeCompile(Ue,E),Be=P.acquireProgram(Ue,Ie),Ve.set(Ie,Be),V.uniforms=Ue.uniforms;const ze=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=me.uniform),pa(T,Ue),V.needsLights=Du(T),V.lightsStateVersion=be,V.needsLights&&(ze.ambientLightColor.value=O.state.ambient,ze.lightProbe.value=O.state.probe,ze.directionalLights.value=O.state.directional,ze.directionalLightShadows.value=O.state.directionalShadow,ze.spotLights.value=O.state.spot,ze.spotLightShadows.value=O.state.spotShadow,ze.rectAreaLights.value=O.state.rectArea,ze.ltc_1.value=O.state.rectAreaLTC1,ze.ltc_2.value=O.state.rectAreaLTC2,ze.pointLights.value=O.state.point,ze.pointLightShadows.value=O.state.pointShadow,ze.hemisphereLights.value=O.state.hemi,ze.directionalShadowMap.value=O.state.directionalShadowMap,ze.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ze.spotShadowMap.value=O.state.spotShadowMap,ze.spotLightMatrix.value=O.state.spotLightMatrix,ze.spotLightMap.value=O.state.spotLightMap,ze.pointShadowMap.value=O.state.pointShadowMap,ze.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function da(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Jr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function pa(T,N){const B=ne.get(T);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Lu(T,N,B,V,O){N.isScene!==!0&&(N=Ce),W.resetTextureUnits();const Se=N.fog,be=V.isMeshStandardMaterial?N.environment:null,Ue=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Mn,Ie=(V.isMeshStandardMaterial?ee:re).get(V.envMap||be),Ve=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Be=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ze=!!B.morphAttributes.position,st=!!B.morphAttributes.normal,It=!!B.morphAttributes.color;let ft=Nn;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ft=E.toneMapping);const ln=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=ln!==void 0?ln.length:0,We=ne.get(V),ys=p.state.lights;if(oe===!0&&(xe===!0||T!==S)){const zt=T===S&&V.id===Y;me.setState(V,T,zt)}let rt=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ys.state.version||We.outputColorSpace!==Ue||O.isBatchedMesh&&We.batching===!1||!O.isBatchedMesh&&We.batching===!0||O.isInstancedMesh&&We.instancing===!1||!O.isInstancedMesh&&We.instancing===!0||O.isSkinnedMesh&&We.skinning===!1||!O.isSkinnedMesh&&We.skinning===!0||O.isInstancedMesh&&We.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&We.instancingColor===!1&&O.instanceColor!==null||We.envMap!==Ie||V.fog===!0&&We.fog!==Se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==me.numPlanes||We.numIntersection!==me.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Be||We.morphTargets!==ze||We.morphNormals!==st||We.morphColors!==It||We.toneMapping!==ft||z.isWebGL2===!0&&We.morphTargetsCount!==it)&&(rt=!0):(rt=!0,We.__version=V.version);let zn=We.currentProgram;rt===!0&&(zn=vr(V,N,O));let ma=!1,qi=!1,bs=!1;const gt=zn.getUniforms(),Hn=We.uniforms;if(F.useProgram(zn.program)&&(ma=!0,qi=!0,bs=!0),V.id!==Y&&(Y=V.id,qi=!0),ma||S!==T){gt.setValue(g,"projectionMatrix",T.projectionMatrix),gt.setValue(g,"viewMatrix",T.matrixWorldInverse);const zt=gt.map.cameraPosition;zt!==void 0&&zt.setValue(g,we.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&gt.setValue(g,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(g,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,qi=!0,bs=!0)}if(O.isSkinnedMesh){gt.setOptional(g,O,"bindMatrix"),gt.setOptional(g,O,"bindMatrixInverse");const zt=O.skeleton;zt&&(z.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),gt.setValue(g,"boneTexture",zt.boneTexture,W)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(gt.setOptional(g,O,"batchingTexture"),gt.setValue(g,"batchingTexture",O._matricesTexture,W));const As=B.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&z.isWebGL2===!0)&&Pe.update(O,B,zn),(qi||We.receiveShadow!==O.receiveShadow)&&(We.receiveShadow=O.receiveShadow,gt.setValue(g,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Hn.envMap.value=Ie,Hn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),qi&&(gt.setValue(g,"toneMappingExposure",E.toneMappingExposure),We.needsLights&&Uu(Hn,bs),Se&&V.fog===!0&&q.refreshFogUniforms(Hn,Se),q.refreshMaterialUniforms(Hn,V,G,Z,Ee),Jr.upload(g,da(We),Hn,W)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Jr.upload(g,da(We),Hn,W),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(g,"center",O.center),gt.setValue(g,"modelViewMatrix",O.modelViewMatrix),gt.setValue(g,"normalMatrix",O.normalMatrix),gt.setValue(g,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const zt=V.uniformsGroups;for(let Rs=0,Iu=zt.length;Rs<Iu;Rs++)if(z.isWebGL2){const _a=zt[Rs];Le.update(_a,zn),Le.bind(_a,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function Uu(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Du(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,N,B){ne.get(T.texture).__webglTexture=N,ne.get(T.depthTexture).__webglTexture=B;const V=ne.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const B=ne.get(T);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,B=0){I=T,R=N,L=B;let V=!0,O=null,Se=!1,be=!1;if(T){const Ie=ne.get(T);Ie.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(g.FRAMEBUFFER,null),V=!1):Ie.__webglFramebuffer===void 0?W.setupRenderTarget(T):Ie.__hasExternalTextures&&W.rebindTextures(T,ne.get(T.texture).__webglTexture,ne.get(T.depthTexture).__webglTexture);const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);const Be=ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?O=Be[N][B]:O=Be[N],Se=!0):z.isWebGL2&&T.samples>0&&W.useMultisampledRTT(T)===!1?O=ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[B]:O=Be,A.copy(T.viewport),K.copy(T.scissor),se=T.scissorTest}else A.copy(ae).multiplyScalar(G).floor(),K.copy(le).multiplyScalar(G).floor(),se=ge;if(F.bindFramebuffer(g.FRAMEBUFFER,O)&&z.drawBuffers&&V&&F.drawBuffers(T,O),F.viewport(A),F.scissor(K),F.setScissorTest(se),Se){const Ie=ne.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,B)}else if(be){const Ie=ne.get(T.texture),Ve=N||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ie.__webglTexture,B||0,Ve)}Y=-1},this.readRenderTargetPixels=function(T,N,B,V,O,Se,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){F.bindFramebuffer(g.FRAMEBUFFER,Ue);try{const Ie=T.texture,Ve=Ie.format,Be=Ie.type;if(Ve!==Zt&&Oe.convert(Ve)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Be===hr&&(U.has("EXT_color_buffer_half_float")||z.isWebGL2&&U.has("EXT_color_buffer_float"));if(Be!==Fn&&Oe.convert(Be)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Pn&&(z.isWebGL2||U.has("OES_texture_float")||U.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-V&&B>=0&&B<=T.height-O&&g.readPixels(N,B,V,O,Oe.convert(Ve),Oe.convert(Be),Se)}finally{const Ie=I!==null?ne.get(I).__webglFramebuffer:null;F.bindFramebuffer(g.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(T,N,B=0){const V=Math.pow(2,-B),O=Math.floor(N.image.width*V),Se=Math.floor(N.image.height*V);W.setTexture2D(N,0),g.copyTexSubImage2D(g.TEXTURE_2D,B,0,0,T.x,T.y,O,Se),F.unbindTexture()},this.copyTextureToTexture=function(T,N,B,V=0){const O=N.image.width,Se=N.image.height,be=Oe.convert(B.format),Ue=Oe.convert(B.type);W.setTexture2D(B,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,V,T.x,T.y,O,Se,be,Ue,N.image.data):N.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,V,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,be,N.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,V,T.x,T.y,be,Ue,N.image),V===0&&B.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(T,N,B,V,O=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=T.max.x-T.min.x+1,be=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Ie=Oe.convert(V.format),Ve=Oe.convert(V.type);let Be;if(V.isData3DTexture)W.setTexture3D(V,0),Be=g.TEXTURE_3D;else if(V.isDataArrayTexture)W.setTexture2DArray(V,0),Be=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,V.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,V.unpackAlignment);const ze=g.getParameter(g.UNPACK_ROW_LENGTH),st=g.getParameter(g.UNPACK_IMAGE_HEIGHT),It=g.getParameter(g.UNPACK_SKIP_PIXELS),ft=g.getParameter(g.UNPACK_SKIP_ROWS),ln=g.getParameter(g.UNPACK_SKIP_IMAGES),it=B.isCompressedTexture?B.mipmaps[0]:B.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,it.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,it.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,T.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,T.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,T.min.z),B.isDataTexture||B.isData3DTexture?g.texSubImage3D(Be,O,N.x,N.y,N.z,Se,be,Ue,Ie,Ve,it.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(Be,O,N.x,N.y,N.z,Se,be,Ue,Ie,it.data)):g.texSubImage3D(Be,O,N.x,N.y,N.z,Se,be,Ue,Ie,Ve,it),g.pixelStorei(g.UNPACK_ROW_LENGTH,ze),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(g.UNPACK_SKIP_PIXELS,It),g.pixelStorei(g.UNPACK_SKIP_ROWS,ft),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ln),O===0&&V.generateMipmaps&&g.generateMipmap(Be),F.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),F.unbindTexture()},this.resetState=function(){R=0,L=0,I=null,F.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===aa?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Ms?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?ri:lu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ri?dt:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gx extends _x{}gx.prototype.isWebGL1Renderer=!0;class Mx extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);export{xx as A,_r as B,_u as M,Kt as P,Mx as S,_x as W,Ln as a,vx as c};
