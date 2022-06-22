import{d as x,g as V,c as O}from"./dom.5ee53a1e.js";import{w as Q,o as p,f as w,R as E,g as L,O as h,r as W,k as j,S,h as k}from"./index.faca7b04.js";function q(e,n,t){return t<=n?n:Math.min(t,Math.max(n,e))}const A=[null,document,document.body,document.scrollingElement,document.documentElement];function D(e,n){let t=V(n);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return A.includes(t)?window:t}function P(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function R(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function C(e,n,t=0){const o=arguments[3]===void 0?performance.now():arguments[3],i=P(e);if(t<=0){i!==n&&g(e,n);return}requestAnimationFrame(c=>{const r=c-o,a=i+(n-i)/Math.max(r,t)*r;g(e,a),a!==n&&C(e,n,t-r,c)})}function M(e,n,t=0){const o=arguments[3]===void 0?performance.now():arguments[3],i=R(e);if(t<=0){i!==n&&b(e,n);return}requestAnimationFrame(c=>{const r=c-o,a=i+(n-i)/Math.max(r,t)*r;b(e,a),a!==n&&M(e,n,t-r,c)})}function g(e,n){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n);return}e.scrollTop=n}function b(e,n){if(e===window){window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=n}function $(e,n,t){if(t){C(e,n,t);return}g(e,n)}function B(e,n,t){if(t){M(e,n,t);return}b(e,n)}let v;function I(){if(v!==void 0)return v;const e=document.createElement("p"),n=document.createElement("div");x(e,{width:"100%",height:"200px"}),x(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const t=e.offsetWidth;n.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=n.clientWidth),n.remove(),v=t-o,v}const{passive:T}=h,F=["both","horizontal","vertical"];var U=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>F.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,i,c;Q(()=>e.scrollTarget,()=>{l(),a()});function r(){o!==null&&o();const d=Math.max(0,P(i)),m=R(i),u={top:d-t.position.top,left:m-t.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const y=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";t.position={top:d,left:m},t.directionChanged=t.direction!==y,t.delta=u,t.directionChanged===!0&&(t.direction=y,t.inflectionPoint=t.position),n("scroll",{...t})}function a(){i=D(c,e.scrollTarget),i.addEventListener("scroll",s,T),s(!0)}function l(){i!==void 0&&(i.removeEventListener("scroll",s,T),i=void 0)}function s(d){if(d===!0||e.debounce===0||e.debounce==="0")r();else if(o===null){const[m,u]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];o=()=>{u(m),o=null}}}const f=L();return p(()=>{c=f.proxy.$el.parentNode,a()}),w(()=>{o!==null&&o(),l()}),Object.assign(f.proxy,{trigger:s,getPosition:()=>t}),E}});function N(){const e=W(!j.value);return e.value===!1&&p(()=>{e.value=!0}),e}const H=typeof ResizeObserver!="undefined",z=H===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var G=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let t=null,o,i={width:-1,height:-1};function c(l){l===!0||e.debounce===0||e.debounce==="0"?r():t===null&&(t=setTimeout(r,e.debounce))}function r(){if(clearTimeout(t),t=null,o){const{offsetWidth:l,offsetHeight:s}=o;(l!==i.width||s!==i.height)&&(i={width:l,height:s},n("resize",i))}}const a=L();if(Object.assign(a.proxy,{trigger:c}),H===!0){let l;return p(()=>{S(()=>{o=a.proxy.$el.parentNode,o&&(l=new ResizeObserver(c),l.observe(o),r())})}),w(()=>{clearTimeout(t),l!==void 0&&(l.disconnect!==void 0?l.disconnect():o&&l.unobserve(o))}),E}else{let f=function(){clearTimeout(t),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",c,h.passive),s=void 0)},d=function(){f(),o&&o.contentDocument&&(s=o.contentDocument.defaultView,s.addEventListener("resize",c,h.passive),r())};const l=N();let s;return p(()=>{S(()=>{o=a.proxy.$el,o&&d()})}),w(f),()=>{if(l.value===!0)return k("object",{style:z.style,tabindex:-1,type:"text/html",data:z.url,"aria-hidden":"true",onLoad:d})}}}});export{U as Q,G as a,q as b,B as c,I as g,$ as s};
