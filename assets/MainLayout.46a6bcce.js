var ie=Object.defineProperty;var U=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var X=(e,t,o)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,J=(e,t)=>{for(var o in t||(t={}))ue.call(t,o)&&X(e,o,t[o]);if(U)for(var o of U(t))ce.call(t,o)&&X(e,o,t[o]);return e};import{c as F,h as ve,a as de}from"./dom.1473ee30.js";import{b as fe,g as H,Q as he,a as Y}from"./QResizeObserver.e74f43d1.js";import{r as d,c as y,o as te,f as pe,h as w,g as V,a as me,p as ae,l as oe,j as ge,k as _e,m as Q,w as le,b as be,_ as ne,u as ye,n as se,q as S,s as j,t as h,d as p,v as P,F as N,x as A,y as W,z as E,A as M,B as xe,C as $e,D as Z}from"./index.5fa0193d.js";import{Q as I,a as O}from"./QBtn.277cb78e.js";const D=XMLHttpRequest,re=D.prototype.open,we=["top","right","bottom","left"];let R=[],L=0;function Se({p:e,pos:t,active:o,horiz:n,reverse:c,dir:i}){let s=1,f=1;return n===!0?(c===!0&&(s=-1),t==="bottom"&&(f=-1),{transform:`translate3d(${s*(e-100)}%,${o?0:f*-200}%,0)`}):(c===!0&&(f=-1),t==="right"&&(s=-1),{transform:`translate3d(${o?0:i*s*-200}%,${f*(e-100)}%,0)`})}function ke(e,t){return typeof t!="number"&&(e<25?t=Math.random()*3+3:e<65?t=Math.random()*3:e<85?t=Math.random()*2:e<99?t=.6:t=0),fe(e+t,0,100)}function ze(e){L++,R.push(e),!(L>1)&&(D.prototype.open=function(t,o){const n=[],c=()=>{R.forEach(s=>{(s.hijackFilter.value===null||s.hijackFilter.value(o)===!0)&&(s.start(),n.push(s.stop))})},i=()=>{n.forEach(s=>{s()})};this.addEventListener("loadstart",c,{once:!0}),this.addEventListener("loadend",i,{once:!0}),re.apply(this,arguments)})}function Be(e){R=R.filter(t=>t.start!==e),L=Math.max(0,L-1),L===0&&(D.prototype.open=re)}var je=F({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:e=>we.includes(e)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(e,{emit:t}){const{proxy:o}=V(),n=d(0),c=d(!1),i=d(!0);let s=0,f,m;const g=y(()=>`q-loading-bar q-loading-bar--${e.position}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?"":" no-transition")),C=y(()=>e.position==="top"||e.position==="bottom"),k=y(()=>C.value===!0?"height":"width"),$=y(()=>{const l=c.value,a=Se({p:n.value,pos:e.position,active:l,horiz:C.value,reverse:o.$q.lang.rtl===!0&&["top","bottom"].includes(e.position)?e.reverse===!1:e.reverse,dir:o.$q.lang.rtl===!0?-1:1});return a[k.value]=e.size,a.opacity=l?1:0,a}),x=y(()=>c.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":n.value}:{"aria-hidden":"true"});function _(l=300){const a=m;return m=Math.max(0,l)||0,s++,s>1?(a===0&&l>0?u():a>0&&l<=0&&clearTimeout(f),s):(clearTimeout(f),t("start"),n.value=0,f=setTimeout(()=>{i.value=!0,l>0&&u()},c.value===!0?500:1),c.value!==!0&&(c.value=!0,i.value=!1),s)}function z(l){return s>0&&(n.value=ke(n.value,l)),s}function r(){if(s=Math.max(0,s-1),s>0)return s;clearTimeout(f),t("stop");const l=()=>{i.value=!0,n.value=100,f=setTimeout(()=>{c.value=!1},1e3)};return n.value===0?f=setTimeout(l,1):l(),s}function u(){n.value<100&&(f=setTimeout(()=>{z(),u()},m))}let v;return te(()=>{e.skipHijack!==!0&&(v=!0,ze({start:_,stop:r,hijackFilter:y(()=>e.hijackFilter||null)}))}),pe(()=>{clearTimeout(f),v===!0&&Be(_)}),Object.assign(o,{start:_,stop:r,increment:z}),()=>w("div",J({class:g.value,style:$.value},x.value))}}),Ce=F({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:o}}=V(),n=me(oe,()=>{console.error("QPageContainer needs to be child of QLayout")});ae(ge,!0);const c=y(()=>{const i={};return n.header.space===!0&&(i.paddingTop=`${n.header.size}px`),n.right.space===!0&&(i[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(i.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(i[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),i});return()=>w("div",{class:"q-page-container",style:c.value},ve(t.default))}}),Te=F({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:o}){const{proxy:{$q:n}}=V(),c=d(null),i=d(n.screen.height),s=d(e.container===!0?0:n.screen.width),f=d({position:0,direction:"down",inflectionPoint:0}),m=d(0),g=d(_e.value===!0?0:H()),C=y(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=y(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),$=y(()=>g.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${g.value}px`}:null),x=y(()=>g.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${g.value}px`,width:`calc(100% + ${g.value}px)`}:null);function _(a){if(e.container===!0||document.qScrollPrevented!==!0){const b={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};f.value=b,e.onScroll!==void 0&&o("scroll",b)}}function z(a){const{height:b,width:B}=a;let q=!1;i.value!==b&&(q=!0,i.value=b,e.onScrollHeight!==void 0&&o("scroll-height",b),u()),s.value!==B&&(q=!0,s.value=B),q===!0&&e.onResize!==void 0&&o("resize",a)}function r({height:a}){m.value!==a&&(m.value=a,u())}function u(){if(e.container===!0){const a=i.value>m.value?H():0;g.value!==a&&(g.value=a)}}let v;const l={instances:{},view:y(()=>e.view),isContainer:y(()=>e.container),rootRef:c,height:i,containerHeight:m,scrollbarWidth:g,totalWidth:y(()=>s.value+g.value),rows:y(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:f,animate(){v!==void 0?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),v=void 0},155)},update(a,b,B){l[a][b]=B}};if(ae(oe,l),H()>0){let B=function(){a=null,b.classList.remove("hide-scrollbar")},q=function(){if(a===null){if(b.scrollHeight>n.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(B,300)},G=function(K){a!==null&&K==="remove"&&(clearTimeout(a),B()),window[`${K}EventListener`]("resize",q)},a=null;const b=document.body;le(()=>e.container!==!0?"add":"remove",G),e.container!==!0&&G("add"),be(()=>{G("remove")})}return()=>{const a=de(t.default,[w(he,{onScroll:_}),w(Y,{onResize:z})]),b=w("div",{class:C.value,style:k.value,ref:e.container===!0?void 0:c},a);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:c},[w(Y,{onResize:r}),w("div",{class:"absolute-full",style:$.value},[w("div",{class:"scroll",style:x.value},[b])])]):b}}});const qe=w("div",{class:"q-space"});var ee=F({name:"QSpace",setup(){return()=>qe}});const T=e=>(xe("data-v-1d72bc8b"),e=e(),$e(),e),Pe=T(()=>h("h1",null,"Spark Store",-1)),Le={class:"navBtnGroup"},Qe=T(()=>h("span",{class:"indicator"},null,-1)),Me={class:"label"},Re={class:"navBtnGroup"},Fe=T(()=>h("span",{class:"indicator"},null,-1)),Ge={class:"label"},He={class:"navBtn"},Ne=T(()=>h("span",{class:"indicator"},null,-1)),Ae=T(()=>h("span",{class:"label"},"\u9996\u9875",-1)),Ee={class:"navBtnGroup"},Ie=T(()=>h("span",{class:"indicator"},null,-1)),Oe={class:"label"},We={setup(e){const t=ye(),o=d({home:!t.path.match("store"),navigation:!0,hoverP:!1,hoverS:!1,primary:!(t.path.match("sort")||t.path.match("application")),secondary:t.path.match("sort")||t.path.match("application"),active:!0}),n=d([{id:1,name:"home",path:"/",label:"\u9996\u9875",active:!0,el:null},{id:2,name:"download",path:"/download",label:"\u4E0B\u8F7D",active:!1,el:null},{id:3,name:"store",path:"/store",label:"\u5546\u5E97",active:!1,el:null},{id:4,name:"forum",path:"/forum",label:"\u793E\u533A",active:!1,el:null},{id:5,name:"about",path:"/about",label:"\u5173\u4E8E",active:!1,el:null}]),c=d([{id:1,name:"recommend",path:"/store",label:"\u63A8\u8350",icon:"recommend",active:!0,el:null},{id:2,name:"rank",path:"/store/rank",label:"\u6392\u884C",icon:"format_list_numbered",active:!1,el:null},{id:3,name:"sort",path:"/store/sort/games",label:"\u5206\u7C7B",icon:"queue",active:!1,el:null}]),i=d([{id:1,name:"games",path:"/store/sort/games",label:"\u6E38\u620F",icon:"sports_esports",active:!0,el:null},{id:2,name:"network",path:"/store/sort/network",label:"\u7F51\u7EDC",icon:"travel_explore",active:!1,el:null},{id:3,name:"chat",path:"/store/sort/chat",label:"\u793E\u4EA4",icon:"question_answer",active:!1,el:null},{id:4,name:"music",path:"/store/sort/music",label:"\u97F3\u4E50",icon:"library_music",active:!1,el:null},{id:5,name:"video",path:"/store/sort/video",label:"\u89C6\u9891",icon:"smart_display",active:!1,el:null},{id:6,name:"image_graphics",path:"/store/sort/image_graphics",label:"\u56FE\u5F62",icon:"image",active:!1,el:null},{id:7,name:"office",path:"/store/sort/office",label:"\u529E\u516C",icon:"business_center",active:!1,el:null},{id:8,name:"reading",path:"/store/sort/reading",label:"\u9605\u8BFB",icon:"auto_stories",active:!1,el:null},{id:9,name:"development",path:"/store/sort/development",label:"\u5F00\u53D1",icon:"developer_board",active:!1,el:null},{id:10,name:"tools",path:"/store/sort/tools",label:"\u5DE5\u5177",icon:"handyman",active:!1,el:null},{id:11,name:"themes",path:"/store/sort/themes",label:"\u7F8E\u5316",icon:"extension",active:!1,el:null},{id:12,name:"others",path:"/store/sort/others",label:"\u5176\u4ED6",icon:"pending",active:!1,el:null}]),s=d({}),f=d({});for(const r of n.value)s.value[r.name]=r,f.value[r.path]=r;const m=d({}),g=d({});for(const r of c.value)m.value[r.name]=r,g.value[r.path]=r;const C=d({}),k=d({});for(const r of i.value)C.value[r.name]=r,k.value[r.path]=r;const $=d(n.value[0]),x=d(c.value[0]),_=d(c.value[0]);function z(r){return r.match("store")?r.match("sort")?k.value.hasOwnProperty(r)?[s.value.store,m.value.sort,k.value[r]]:[s.value.store,m.value.sort,i.value[0]]:r.match("application")?[s.value.store,m.value.sort,_.value]:g.value.hasOwnProperty(r)?[s.value.store,g.value[r],i.value[0]]:[s.value.store,c.value[0],i.value[0]]:f.value.hasOwnProperty(r)?[f.value[r],m.value.recommend,i.value[0]]:[n.value[0],m.value.recommend,i.value[0]]}return le(()=>t.path,async r=>{$.value.active=!1,x.value.active=!1,_.value.active=!1;const u=z(r);$.value=u[0],x.value=u[1],_.value=u[2],$.value.active=!0,x.value.active=!0,_.value.active=!0,o.value.home=!t.path.match("store"),o.value.primary=!x.value.name.match("sort"),o.value.secondary=x.value.name.match("sort");for(const v of n.value)v.el.$el.style=`--j-offset:${($.value.id-v.id)*78}px`;for(const v of c.value)v.el.style=`--j-offset:${(x.value.id-v.id)*52}px`;for(const v of i.value)v.el.$el.style=`--j-offset:${(_.value.id-v.id)*52}px`}),te(()=>{$.value.active=!1,x.value.active=!1,_.value.active=!1;const r=z(t.path);$.value=r[0],x.value=r[1],_.value=r[2],$.value.active=!0,x.value.active=!0,_.value.active=!0,o.value.home=!t.path.match("store");for(const u of n.value)u.el.$el.style=`--j-offset:${($.value.id-u.id)*78}px`;for(const u of c.value)u.el.style=`--j-offset:${(x.value.id-u.id)*52}px`;for(const u of i.value)u.el.$el.style=`--j-offset:${(_.value.id-u.id)*52}px`}),(r,u)=>{const v=se("router-link");return S(),j("span",{class:M(o.value)},[h("header",null,[p(v,{to:"/",class:"logo"},{default:P(()=>[Pe]),_:1}),p(ee),h("div",Le,[(S(!0),j(N,null,A(n.value,l=>(S(),W(v,{to:l.path,class:M(["navBtn",{active:l.active}]),ref_for:!0,ref:a=>{l.el=a},key:l.name},{default:P(()=>[Qe,h("span",Me,E(l.label),1)]),_:2},1032,["to","class"]))),128))])]),h("nav",{class:"primary",onMouseenter:u[1]||(u[1]=l=>o.value.hoverP=!0),onMouseleave:u[2]||(u[2]=l=>o.value.hoverP=!1)},[p(v,{to:"/",class:"logo"}),h("div",Re,[(S(!0),j(N,null,A(c.value,l=>(S(),j("div",{key:l.name,class:M(["navBtn",{active:l.active}]),ref_for:!0,ref:a=>{l.el=a}},[Fe,p(I,{name:l.icon,size:"24px"},null,8,["name"]),h("span",Ge,E(l.label),1),p(v,{to:l.path,class:"cover"},null,8,["to"])],2))),128)),p(ee),h("div",He,[Ne,p(I,{name:"home",size:"24px"}),Ae,p(v,{to:"/",class:"cover"})])]),h("span",{class:"activeCtrl",onClick:u[0]||(u[0]=l=>o.value.active=!o.value.active)})],32),h("nav",{class:"secondary",onMouseenter:u[3]||(u[3]=l=>o.value.hoverS=!0),onMouseleave:u[4]||(u[4]=l=>o.value.hoverS=!1)},[h("div",Ee,[(S(!0),j(N,null,A(i.value,l=>(S(),W(v,{to:l.path,class:M(["navBtn",{active:l.active}]),ref_for:!0,ref:a=>{l.el=a},key:l.name},{default:P(()=>[Ie,p(I,{name:l.icon,size:"24px"},null,8,["name"]),h("span",Oe,E(l.label),1)]),_:2},1032,["to","class"]))),128))])],32)],2)}}};var Ve=ne(We,[["__scopeId","data-v-1d72bc8b"]]);const De={key:0,class:"toolbox"},Ke={key:1,class:"dragArea"},Ue={setup(e){function t(){electron.min()}function o(){electron.max()}function n(){electron.close()}return(c,i)=>{const s=se("router-view");return S(),W(Te,{view:"lhr lpR fFf"},{default:P(()=>[p(je,{ref:"bar",position:"top",color:"primary"},null,512),c.$q.platform.is.electron?(S(),j("div",De,[p(O,{color:"white",padding:"xs",icon:"minimize",onClick:t}),p(O,{color:"white",padding:"xs","icon-right":"settings_ethernet",onClick:o}),p(O,{color:"white",padding:"xs",icon:"close",onClick:n})])):Z("",!0),c.$q.platform.is.electron?(S(),j("div",Ke)):Z("",!0),p(Ve),p(Ce,{style:{overflow:"hidden"}},{default:P(()=>[p(s)]),_:1})]),_:1})}}};var tt=ne(Ue,[["__scopeId","data-v-19a9f36b"]]);export{tt as default};
