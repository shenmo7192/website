(self["webpackChunkspark_store"]=self["webpackChunkspark_store"]||[]).push([[758],{758:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>re});a(7098);var o=a(3673),l=a(8880),i=a(2323),n=a(5090),s=a.n(n);const r={key:0,class:"toolbox"},c={key:1,class:"dragArea"},u={key:0},v=(0,o._)("img",{src:s()},null,-1),d=(0,o.Uk)(" Spark Store "),p=(0,o._)("img",{src:s()},null,-1),m=(0,o._)("span",null,"Spark Web Store",-1),h={class:"menu"},f={key:2},b=(0,o.Uk)(" © 2021 星火应用商店 ");function g(e,t,a,n,s,g){const _=(0,o.up)("q-btn"),w=(0,o.up)("q-avatar"),k=(0,o.up)("q-toolbar-title"),C=(0,o.up)("router-link"),y=(0,o.up)("q-space"),W=(0,o.up)("q-route-tab"),q=(0,o.up)("q-tabs"),x=(0,o.up)("q-toolbar"),T=(0,o.up)("j-tab"),S=(0,o.up)("j-tabs"),$=(0,o.up)("q-tab"),A=(0,o.up)("navigation"),M=(0,o.up)("router-view"),B=(0,o.up)("q-page-container"),P=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(P,{view:"lhr lpR fFf"},{default:(0,o.w5)((()=>["electron"===e.mode?((0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(_,{color:"white",padding:"xs",icon:"minimize",onClick:e.min},null,8,["onClick"]),(0,o.Wm)(_,{color:"white",padding:"xs","icon-right":"settings_ethernet",onClick:e.max},null,8,["onClick"]),(0,o.Wm)(_,{color:"white",padding:"xs",icon:"close",onClick:e.close},null,8,["onClick"])])):(0,o.kq)("",!0),"electron"===e.mode?((0,o.wg)(),(0,o.iD)("div",c)):(0,o.kq)("",!0),(0,o.Wm)(l.uT,{appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"},{default:(0,o.w5)((()=>[e.$route.path.match("store")?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("header",u,[(0,o.Wm)(x,{style:{height:"60px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{to:"/",style:{"text-decoration":"unset",color:"black"}},{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[v])),_:1}),d])),_:1})])),_:1}),(0,o.Wm)(y),(0,o.Wm)(q,{shrink:"",class:"text-black","active-color":"primary","indicator-color":"primary","narrow-indicator":""},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{to:"/",label:"首页",ripple:!1}),(0,o.Wm)(W,{to:"/download",label:"下载",ripple:!1}),(0,o.Wm)(W,{to:"/store",label:"商店",ripple:!1}),(0,o.Wm)(W,{to:"/forum",label:"社区",ripple:!1}),(0,o.Wm)(W,{to:"/about",label:"关于",ripple:!1})])),_:1})])),_:1})]))])),_:1}),(0,o.Wm)(l.uT,{appear:"","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft",style:{display:"none"}},{default:(0,o.w5)((()=>[e.$route.path.match("store")?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,i.C_)({storeNav:!0,active:e.hActive&&e.nActive&&e.lsA,nActive:e.nActive,seMenu:!e.hActive,isSorts:e.isSorts})},[(0,o._)("nav",null,[(0,o.Wm)(C,{to:"/",style:{"text-decoration":"unset",color:"black",width:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{class:"logo"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{size:"36px"},{default:(0,o.w5)((()=>[p])),_:1}),m])),_:1})])),_:1}),(0,o.Wm)(S,{modelValue:e.tabs,"onUpdate:modelValue":t[4]||(t[4]=t=>e.tabs=t),vertical:"",shrink:"",ref:"tabs1"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{name:"recommend",onClick:t[0]||(t[0]=(0,l.iM)((t=>e.to("/store")),["prevent"])),id:"recommend",icon:"recommend",label:"推荐",ripple:!1}),(0,o.Wm)(T,{name:"rank",onClick:t[1]||(t[1]=(0,l.iM)((t=>e.to("/store/rank")),["prevent"])),id:"rank",icon:"format_list_numbered",label:"排行",ripple:!1}),(0,o.Wm)(T,{name:"sorts",onClick:t[2]||(t[2]=(0,l.iM)((t=>e.to("/store/sorts/games")),["prevent"])),id:"sorts",icon:"queue",label:"分类",ripple:!1}),(0,o.Wm)(y),(0,o.Wm)(T,{name:"home",onClick:t[3]||(t[3]=(0,l.iM)((t=>e.to("/")),["prevent"])),id:"home",icon:"home",label:"首页",ripple:!1})])),_:1},8,["modelValue"]),(0,o._)("span",{onClick:t[5]||(t[5]=t=>e.nActive=!e.nActive)})]),(0,o._)("div",h,[(0,o.Wm)(q,{modelValue:e.sort,"onUpdate:modelValue":t[18]||(t[18]=t=>e.sort=t),vertical:"",shrink:""},{default:(0,o.w5)((()=>[(0,o.Wm)($,{name:"games",onClick:t[6]||(t[6]=t=>e.to("/store/sorts/games")),id:"games",icon:"sports_esports",label:"游戏",ripple:!1}),(0,o.Wm)($,{name:"network",onClick:t[7]||(t[7]=t=>e.to("/store/sorts/network")),id:"network",icon:"travel_explore",label:"网络",ripple:!1}),(0,o.Wm)($,{name:"chat",onClick:t[8]||(t[8]=t=>e.to("/store/sorts/chat")),id:"chat",icon:"question_answer",label:"社交",ripple:!1}),(0,o.Wm)($,{name:"music",onClick:t[9]||(t[9]=t=>e.to("/store/sorts/music")),id:"music",icon:"library_music",label:"音乐",ripple:!1}),(0,o.Wm)($,{name:"video",onClick:t[10]||(t[10]=t=>e.to("/store/sorts/video")),id:"video",icon:"smart_display",label:"视频",ripple:!1}),(0,o.Wm)($,{name:"image_graphics",onClick:t[11]||(t[11]=t=>e.to("/store/sorts/image_graphics")),id:"image",icon:"sports_esports",label:"图形",ripple:!1}),(0,o.Wm)($,{name:"office",onClick:t[12]||(t[12]=t=>e.to("/store/sorts/office")),id:"office",icon:"business_center",label:"办公",ripple:!1}),(0,o.Wm)($,{name:"reading",onClick:t[13]||(t[13]=t=>e.to("/store/sorts/reading")),id:"reading",icon:"auto_stories",label:"阅读",ripple:!1}),(0,o.Wm)($,{name:"development",onClick:t[14]||(t[14]=t=>e.to("/store/sorts/development")),id:"development",icon:"developer_board",label:"开发",ripple:!1}),(0,o.Wm)($,{name:"tools",onClick:t[15]||(t[15]=t=>e.to("/store/sorts/tools")),id:"tools",icon:"handyman",label:"工具",ripple:!1}),(0,o.Wm)($,{name:"themes",onClick:t[16]||(t[16]=t=>e.to("/store/sorts/themes")),id:"themes",icon:"extension",label:"美化",ripple:!1}),(0,o.Wm)($,{name:"others",onClick:t[17]||(t[17]=t=>e.to("/store/sorts/others")),id:"others",icon:"pending",label:"其他",ripple:!1})])),_:1},8,["modelValue"])])],2)):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(A),(0,o.Wm)(B,{style:{overflow:"hidden"}},{default:(0,o.w5)((()=>[(0,o.Wm)(M)])),_:1}),e.$route.path.match("store")?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("footer",f,[(0,o.Wm)(x,{style:{height:"10vmin","justify-content":"center"}},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{to:"/",style:{"text-decoration":"unset",color:"black"}},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{style:{color:"rgb(206,206,206)","font-size":"2.4vmin"}},{default:(0,o.w5)((()=>[b])),_:1})])),_:1})])),_:1})]))])),_:1})}var _=a(1959),w=a(4554),k=a(5151),C=a(416),y=a(4955),W=a(4716),q=a(7657),x=a(2547);function T(e,t,a){const o=!0===a?["left","right"]:["top","bottom"];return`absolute-${!0===t?o[0]:o[1]}${e?` text-${e}`:""}`}const S=["left","center","right","justify"],$=(0,o.aZ)({name:"JTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>S.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":Function},setup(e,{slots:t,emit:a}){const l=(0,o.FN)(),{proxy:{$q:i}}=l,{registerTick:n,prepareTick:s}=(0,C.Z)(),{registerTimeout:r}=(0,y.Z)(),c=(0,_.iH)(null),u=(0,_.iH)(null),v=(0,_.iH)(e.modelValue),d=(0,_.iH)(!1),p=(0,_.iH)(!0),m=(0,_.iH)(!1),h=(0,_.iH)(!1),f=(0,_.Fl)((()=>!0===i.platform.is.desktop||!0===e.mobileArrows)),b=[];let g,S,$,A=!1,M=!0===f.value?j:W.ZT;const B=(0,_.Fl)((()=>({activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:T(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps}))),P=(0,_.Fl)((()=>{const t=!0===d.value?"left":!0===h.value?"justify":e.align;return`q-tabs__content--align-${t}`})),I=(0,_.Fl)((()=>`q-tabs row no-wrap items-center q-tabs--${!0===d.value?"":"not-"}scrollable q-tabs--`+(!0===e.vertical?"vertical":"horizontal")+" q-tabs__arrows--"+(!0===f.value&&!0===e.outsideArrows?"outside":"inside")+(!0===e.dense?" q-tabs--dense":"")+(!0===e.shrink?" col-shrink":"")+(!0===e.stretch?" self-stretch":""))),Z=(0,_.Fl)((()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar "+P.value+(void 0!==e.contentClass?` ${e.contentClass}`:"")+(!0===i.platform.is.mobile?" scroll":""))),H=(0,_.Fl)((()=>!0===e.vertical?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}));function R({name:t,setCurrent:o,skipEmit:l,fromRoute:i}){v.value!==t&&(!0!==l&&a("update:modelValue",t),!0!==o&&void 0!==e["onUpdate:modelValue"]||(F(v.value,t),v.value=t)),void 0!==i&&(A=i)}function L(){n((()=>{!0!==l.isDeactivated&&!0!==l.isUnmounted&&Q({width:c.value.offsetWidth,height:c.value.offsetHeight})})),s()}function Q(t){if(void 0===H.value||null===u.value)return;const a=t[H.value.container],l=Math.min(u.value[H.value.scroll],Array.prototype.reduce.call(u.value.children,((e,t)=>e+t[H.value.content]),0)),i=a>0&&l>a;d.value!==i&&(d.value=i),!0===i&&(0,o.Y3)(M);const n=a<parseInt(e.breakpoint,10);h.value!==n&&(h.value=n)}function F(t,a){const l=void 0!==t&&null!==t&&""!==t?b.find((e=>e.name.value===t)):null,i=void 0!==a&&null!==a&&""!==a?b.find((e=>e.name.value===a)):null;if(l&&i){const e=l.tabIndicatorRef.value,t=i.tabIndicatorRef.value;clearTimeout(g),e.style.transition="none",e.style.transform="",t.style.transition="none",t.style.transform="";const a=e.getBoundingClientRect(),n=t.getBoundingClientRect();window.nActive&&!window.isSorts?t.style.transform=`translate3d(0,${a.top-n.top}px,0) scale3d(1,${n.height?a.height/n.height:1},1)`:(t.style.transform=`translate3d(9px,${a.top-n.top+17}px,0) scale3d(1,${n.height?a.height/n.height:1},1)`,window.isSorts=!1),(0,o.Y3)((()=>{g=setTimeout((()=>{t.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",t.style.transform="",setTimeout((()=>{t.style.transition=""}),250)}),70)}))}if(i&&!0===d.value){const{left:t,width:a,top:o,height:l}=u.value.getBoundingClientRect(),n=i.rootRef.value.getBoundingClientRect();let s=!0===e.vertical?n.top-o:n.left-t;if(s<0)return u.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.floor(s),void M();s+=!0===e.vertical?n.height-l:n.width-a,s>0&&(u.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.ceil(s),M())}}function j(){const t=u.value;if(null!==t){const a=t.getBoundingClientRect(),o=!0===e.vertical?t.scrollTop:t.scrollLeft;p.value=o>0,m.value=!0===e.vertical?Math.ceil(o+a.height)<t.scrollHeight:Math.ceil(o+a.width)<t.scrollWidth}}function V(e){N(),Y(e),S=setInterval((()=>{Y(e)&&N()}),5)}function D(){V(0)}function z(){V(9999)}function N(){clearInterval(S)}function Y(t){const a=u.value;let o=!0===e.vertical?a.scrollTop:a.scrollLeft,l=!1;const i=t<o?-1:1;return o+=5*i,o<0?(l=!0,o=0):(-1===i&&o<=t||1===i&&o>=t)&&(l=!0,o=t),a[!0===e.vertical?"scrollTop":"scrollLeft"]=o,M(),l}function J(){return b.filter((e=>void 0!==e.routerProps&&!0===e.routerProps.hasLink.value))}function U(){let e="",t=null,a=A;J().forEach((o=>{void 0!==o.routerProps&&!0===o.routerProps[!0===o.routerProps.exact.value?"linkIsExactActive":"linkIsActive"].value&&o.routerProps.linkRoute.value.href.length>e.length?(e=o.routerProps.linkRoute.value.href,t=o.name.value):v.value===o.name.value&&(a=!0)})),!0!==a&&null===t||R({name:t,setCurrent:!0,fromRoute:!0})}function E(){r(U)}function K(e){b.push(e);const t=J();t.length>0&&(void 0===$&&($=(0,o.YP)((()=>l.proxy.$route),E)),E())}function O(e){if(b.splice(b.indexOf(e),1),void 0!==$){const e=J();0===e.length&&($(),$=void 0),E()}}return(0,o.YP)((()=>e.modelValue),(e=>{R({name:e,setCurrent:!0,skipEmit:!0})})),(0,o.YP)((()=>e.outsideArrows),(()=>{(0,o.Y3)(L())})),(0,o.YP)(f,(e=>{M=!0===e?j:W.ZT,(0,o.Y3)(L())})),(0,o.JJ)(x.Nd,{currentModel:v,tabProps:B,registerTab:K,unregisterTab:O,verifyRouteModel:E,updateModel:R,recalculateScroll:L}),(0,o.Jd)((()=>{clearTimeout(g),void 0!==$&&$()})),(0,o.dl)(L),()=>{const a=[(0,o.h)(k.Z,{onResize:Q}),(0,o.h)("div",{ref:u,class:Z.value,onScroll:M},(0,q.KR)(t.default))];return!0===f.value&&a.push((0,o.h)(w.Z,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(!0===p.value?"":" q-tabs__arrow--faded"),name:e.leftIcon||i.iconSet.tabs[!0===e.vertical?"up":"left"],onMousedown:D,onTouchstartPassive:D,onMouseup:N,onMouseleave:N,onTouchend:N}),(0,o.h)(w.Z,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(!0===m.value?"":" q-tabs__arrow--faded"),name:e.rightIcon||i.iconSet.tabs[!0===e.vertical?"down":"right"],onMousedown:z,onTouchstartPassive:z,onMouseup:N,onMouseleave:N,onTouchend:N})),(0,o.h)("div",{ref:c,class:I.value,role:"tablist"},a)}}});var A=a(6489),M=a(1436);let B=0;const P=["click","keyup"],I={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>"t_"+B++},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Z(e,t,a,l){const i=(0,o.f3)(x.Nd,(()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")})),n=(0,_.iH)(null),s=(0,_.iH)(null),r=(0,_.iH)(null),c=(0,_.Fl)((()=>i.currentModel.value===e.name)),u=(0,_.Fl)((()=>`q-tab relative-position self-stretch flex flex-center text-center q-tab--${!0===c.value?"":"in"}active`+(!0===c.value?(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):"")+(e.icon&&e.label&&!1===i.tabProps.value.inlineLabel?" q-tab--full":"")+(!0===e.noCaps||!0===i.tabProps.value.noCaps?" q-tab--no-caps":"")+(!0===e.disable?" disabled":" q-focusable q-hoverable cursor-pointer")+(void 0!==l&&""!==l.linkClass.value?` ${l.linkClass.value}`:""))),v=(0,_.Fl)((()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(!0===i.tabProps.value.inlineLabel?"row no-wrap q-tab__content--inline":"column")+(void 0!==e.contentClass?` ${e.contentClass}`:""))),d=(0,_.Fl)((()=>!0===e.disable||!0===c.value?-1:e.tabindex||0));function p(t,o){if(!0!==o&&null!==n.value&&n.value.focus(),!0!==e.disable)if(void 0!==l)if(!0===l.hasLink.value){const e=()=>{t.__qNavigate=!0,l.navigateToLink(t)};a("click",t,e),!0!==t.defaultPrevented&&e()}else a("click",t);else a("click",t)}function m(e){!0===(0,M.So)(e,13)&&p(e,!0),a("keyup",e)}function h(){const a=i.tabProps.value.narrowIndicator,l=[],s=(0,o.h)("div",{ref:r,class:["q-tab__indicator",i.tabProps.value.indicatorClass]});void 0!==e.icon&&l.push((0,o.h)(w.Z,{class:"q-tab__icon",name:e.icon})),void 0!==e.label&&l.push((0,o.h)("div",{class:"q-tab__label"},e.label)),!1!==e.alert&&l.push(void 0!==e.alertIcon?(0,o.h)(w.Z,{class:"q-tab__alert-icon",color:!0!==e.alert?e.alert:void 0,name:e.alertIcon}):(0,o.h)("div",{class:"q-tab__alert"+(!0!==e.alert?` text-${e.alert}`:"")})),!0===a&&l.push(s);const c=[(0,o.h)("div",{class:"q-focus-helper",tabindex:-1,ref:n}),(0,o.h)("div",{class:v.value},(0,q.vs)(t.default,l))];return!1===a&&c.push(s),c}const f={name:(0,_.Fl)((()=>e.name)),rootRef:s,tabIndicatorRef:r,routerProps:l};function b(t,a){const o={ref:s,class:u.value,tabindex:d.value,role:"tab","aria-selected":c.value,"aria-disabled":!0===e.disable?"true":void 0,onClick:p,onKeyup:m,...a};return(0,q.Jl)(t,o,h(),"main",!1!==e.ripple&&!1===e.disable,(()=>[[A.Z,e.ripple]]))}return(0,o.Jd)((()=>{i.unregisterTab(f),i.recalculateScroll()})),(0,o.bv)((()=>{i.registerTab(f),i.recalculateScroll()})),{renderTab:b,$tabs:i}}const H=(0,o.aZ)({name:"JTab",props:I,emits:P,setup(e,{slots:t,emit:a}){const{renderTab:o}=Z(e,t,a);return()=>o("div")}});a(71);var R=a(9582);(0,o.dD)("data-v-73cba0d5");const L={class:"navBtnGroup"},Q=(0,o._)("span",{class:"indicator"},null,-1),F={class:"label"},j={class:"navBtn"},V=(0,o._)("span",{class:"indicator"},null,-1),D=(0,o._)("span",{class:"label"},"首页",-1),z={class:"navBtnGroup"},N=(0,o._)("span",{class:"indicator"},null,-1),Y={class:"label"};(0,o.Cn)();const J={setup(e){const t=(0,R.yj)(),a=(0,_.iH)({home:!0,navigation:!0,hoverP:!1,hoverS:!1,primary:!(t.path.match("sorts")||t.path.match("application")),secondary:t.path.match("sorts")||t.path.match("application"),active:!0}),l=(0,_.iH)([{id:1,name:"recommend",path:"/store",label:"推荐",icon:"recommend",active:!0,el:null},{id:2,name:"rank",path:"/store/rank",label:"排行",icon:"format_list_numbered",active:!1,el:null},{id:3,name:"sorts",path:"/store/sorts/games",label:"分类",icon:"queue",active:!1,el:null}]),n=(0,_.iH)([{id:1,name:"games",path:"/store/sorts/games",label:"游戏",icon:"sports_esports",active:!0,el:null},{id:2,name:"network",path:"/store/sorts/network",label:"网络",icon:"travel_explore",active:!1,el:null},{id:3,name:"chat",path:"/store/sorts/chat",label:"社交",icon:"question_answer",active:!1,el:null},{id:4,name:"music",path:"/store/sorts/music",label:"音乐",icon:"library_music",active:!1,el:null},{id:5,name:"video",path:"/store/sorts/video",label:"视频",icon:"smart_display",active:!1,el:null},{id:6,name:"image_graphics",path:"/store/sorts/image_graphics",label:"图形",icon:"image",active:!1,el:null},{id:7,name:"office",path:"/store/sorts/office",label:"办公",icon:"business_center",active:!1,el:null},{id:8,name:"reading",path:"/store/sorts/reading",label:"阅读",icon:"auto_stories",active:!1,el:null},{id:9,name:"development",path:"/store/sorts/development",label:"开发",icon:"developer_board",active:!1,el:null},{id:10,name:"tools",path:"/store/sorts/tools",label:"工具",icon:"handyman",active:!1,el:null},{id:11,name:"themes",path:"/store/sorts/themes",label:"美化",icon:"extension",active:!1,el:null},{id:12,name:"others",path:"/store/sorts/others",label:"其他",icon:"pending",active:!1,el:null}]),s=(0,_.iH)(l.value[0]),r=(0,_.iH)(l.value[0]);function c(e){if(e.match("store"))if(e.match("sorts")){for(const a of l.value)if("sorts"===a.name)for(const e of n.value)if(e.path===t.path)return[a,e]}else if(e.match("application")){for(const t of l.value)if("sorts"===t.name)return[t,r]}else for(const a of l.value)if(a.path===t.path)return[a,n.value[0]];for(const t of l.value)if("recommend"===t.name)return[t,n.value[0]]}return(0,o.YP)((()=>t.path),(async e=>{s.value.active=!1,r.value.active=!1;const o=c(e);s.value=o[0],r.value=o[1],s.value.active=!0,r.value.active=!0,a.value.home=!t.path.match("store"),a.value.primary=!s.value.name.match("sorts"),a.value.secondary=s.value.name.match("sorts");for(const t of l.value)t.el.style=`--j-offset:${52*(s.value.id-t.id)}px`;for(const t of n.value)console.log(t),t.el.$el.style=`--j-offset:${52*(r.value.id-t.id)}px`})),(0,o.bv)((()=>{s.value.active=!1,r.value.active=!1;const e=c(t.path);s.value=e[0],r.value=e[1],s.value.active=!0,r.value.active=!0,a.value.home=!t.path.match("store");for(const t of l.value)t.el.style=`--j-offset:${52*(s.value.id-t.id)}px`;for(const t of n.value)t.el.$el.style=`--j-offset:${52*(r.value.id-t.id)}px`})),(e,t)=>{const s=(0,o.up)("router-link"),r=(0,o.up)("q-icon"),c=(0,o.up)("q-space");return(0,o.wg)(),(0,o.iD)("span",{class:(0,i.C_)(a.value)},[(0,o._)("nav",{class:"primary",onMouseenter:t[1]||(t[1]=e=>a.value.hoverP=!0),onMouseleave:t[2]||(t[2]=e=>a.value.hoverP=!1)},[(0,o.Wm)(s,{to:"/",class:"logo"}),(0,o._)("div",L,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.value,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.name,class:(0,i.C_)(["navBtn",{active:e.active}]),ref:t=>{e.el=t}},[Q,(0,o.Wm)(r,{name:e.icon,size:"24px"},null,8,["name"]),(0,o._)("span",F,(0,i.zw)(e.label),1),(0,o.Wm)(s,{to:e.path,class:"cover"},null,8,["to"])],2)))),128)),(0,o.Wm)(c),(0,o._)("div",j,[V,(0,o.Wm)(r,{name:"home",size:"24px"}),D,(0,o.Wm)(s,{to:"/",class:"cover"})])]),(0,o._)("span",{class:"activeCtrl",onClick:t[0]||(t[0]=e=>a.value.active=!a.value.active)})],32),(0,o._)("nav",{class:"secondary",onMouseenter:t[3]||(t[3]=e=>a.value.hoverS=!0),onMouseleave:t[4]||(t[4]=e=>a.value.hoverS=!1)},[(0,o._)("div",z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.value,(e=>((0,o.wg)(),(0,o.j4)(s,{to:e.path,class:(0,i.C_)(["navBtn",{active:e.active}]),ref:t=>{e.el=t},key:e.name},{default:(0,o.w5)((()=>[N,(0,o.Wm)(r,{name:e.icon,size:"24px"},null,8,["name"]),(0,o._)("span",Y,(0,i.zw)(e.label),1)])),_:2},1032,["to","class"])))),128))])],32)],2)}}};var U=a(2025),E=a(7518),K=a.n(E);J.__scopeId="data-v-73cba0d5";const O=J;K()(J,"components",{QIcon:w.Z,QSpace:U.Z});const G=(0,o.aZ)({name:"MainLayout",components:{JTabs:$,JTab:H,Navigation:O},methods:{to:function(e){this.$route.path!==e&&this.$router.push(e)},seMenu:function(){this.hActive=!1},frMenu:function(){this.hActive=!0},min:function(){electron.min()},max:function(){electron.max()},close:function(){electron.close()}},data(){return{hActive:!0,nActive:!0,part:"index",animateTimer:void 0,animateTimer1:void 0,tabs:"",sort:"",path:{"/":"home","/store":"recommend","/store/rank":"rank"},isSorts:!1,lsA:!0,mode:"spa"}},created(){window.Vue=this,this.$route.path.match("store")&&(this.$route.path.match("sorts")?(this.tabs="sorts",this.sort=this.$route.params.sort,this.hActive=!1,this.isSorts=!0):this.$route.path.match("application")?(this.tabs="sorts",this.sort="application",this.hActive=!1,this.isSorts=!0):(this.tabs=this.path[this.$route.path],this.hActive=!0)),this.$watch((()=>this.nActive),((e,t)=>{window.nActive=e})),this.$watch((()=>this.$route.path),((e,t)=>{e.match("store")&&(e.match("sorts")?(this.seMenu(),this.sort=this.$route.params.sort,t.match("sorts")?this.tabs="sorts":(window.isSorts=!0,this.nActive?setTimeout((()=>{this.tabs="sorts",this.isSorts=!0}),900):this.tabs="sorts")):t.match("sorts")?(window.isSorts=!0,this.nActive?setTimeout((()=>{this.tabs=this.path[e],setTimeout((()=>{this.isSorts=!1,this.lsA=!1,this.frMenu(),setTimeout((()=>{this.lsA=!0}),400)}),150)}),100):(this.tabs=this.path[e],this.frMenu())):(this.tabs=this.path[e],this.frMenu()))})),window.nActive=!0}});var X=a(9214),ee=a(4607),te=a(9570),ae=a(3747),oe=a(5096),le=a(7547),ie=a(2770),ne=a(8408),se=a(2652);G.render=g;const re=G;K()(G,"components",{QLayout:X.Z,QBtn:ee.Z,QToolbar:te.Z,QToolbarTitle:ae.Z,QAvatar:oe.Z,QSpace:U.Z,QTabs:le.Z,QRouteTab:ie.Z,QTab:ne.Z,QPageContainer:se.Z})},5090:(e,t,a)=>{e.exports=a.p+"img/favicon-128x128.f83efe89.png"}}]);