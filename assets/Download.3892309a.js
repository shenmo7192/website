var P=Object.defineProperty,I=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var B=(e,t,s)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,S=(e,t)=>{for(var s in t||(t={}))L.call(t,s)&&B(e,s,t[s]);if(z)for(var s of z(t))N.call(t,s)&&B(e,s,t[s]);return e},p=(e,t)=>I(e,O(t));import{u as E,b as V,Q as U,g as j,a as C}from"./QBtn.277cb78e.js";import{c as b,f as F,i as K,h as Q}from"./dom.1473ee30.js";import{c as r,h as a,a as W,X as A,g as X,p as Y,_ as G,r as J,q,y as R,v as u,t as i,d as m,s as w,x as k,F as $,z as Z,Y as ee,A as te,B as ae,C as se,U as D}from"./index.5fa0193d.js";import{u as ie,a as ne}from"./use-dark.7d812f63.js";import{Q as le}from"./QScrollArea.e44be714.js";import{u as oe,Q as re}from"./use-meta.8c4dafe5.js";import{F as de}from"./FooterView.70b5bd9f.js";import"./QResizeObserver.e74f43d1.js";var T=b({name:"QAvatar",props:p(S({},E),{fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean}),setup(e,{slots:t}){const s=V(e),_=r(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),v=r(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const l=e.icon!==void 0?[a(U,{name:e.icon})]:void 0;return a("div",{class:_.value,style:s.value},[a("div",{class:"q-avatar__content row flex-center overflow-hidden",style:v.value},F(t.default,l))])}}}),ce=b({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:t}){const s=W(A,()=>{console.error("QTimelineEntry needs to be child of QTimeline")}),_=r(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),v=r(()=>`q-timeline__dot text-${e.color||s.color}`),l=r(()=>s.layout==="comfortable"&&s.side==="left");return()=>{const n=K(t.default,[]);if(e.body!==void 0&&n.unshift(e.body),e.heading===!0){const g=[a("div"),a("div"),a(e.tag,{class:"q-timeline__heading-title"},n)];return a("div",{class:"q-timeline__heading"},l.value===!0?g.reverse():g)}let o;e.icon!==void 0?o=[a(U,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(o=[a("img",{class:"q-timeline__dot-img",src:e.avatar})]);const y=[a("div",{class:"q-timeline__subtitle"},[a("span",{},Q(t.subtitle,[e.subtitle]))]),a("div",{class:v.value},o),a("div",{class:"q-timeline__content"},[a("h6",{class:"q-timeline__title"},Q(t.title,[e.title]))].concat(n))];return a("li",{class:_.value},l.value===!0?y.reverse():y)}}}),ue=b({name:"QTimeline",props:p(S({},ie),{color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}}),setup(e,{slots:t}){const s=X(),_=ne(e,s.proxy.$q);Y(A,e);const v=r(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(_.value===!0?" q-timeline--dark":""));return()=>a("ul",{class:v.value},Q(t.default))}}),H=b({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(e,{slots:t}){const s=r(()=>e.sent===!0?"sent":"received"),_=r(()=>`q-message-text-content q-message-text-content--${s.value}`+(e.textColor!==void 0?` text-${e.textColor}`:"")),v=r(()=>`q-message-text q-message-text--${s.value}`+(e.bgColor!==void 0?` text-${e.bgColor}`:"")),l=r(()=>"q-message-container row items-end no-wrap"+(e.sent===!0?" reverse":"")),n=r(()=>e.size!==void 0?`col-${e.size}`:""),o=r(()=>({msg:e.textHtml===!0?"innerHTML":"textContent",stamp:e.stampHtml===!0?"innerHTML":"textContent",name:e.nameHtml===!0?"innerHTML":"textContent",label:e.labelHtml===!0?"innerHTML":"textContent"}));function y(c){return t.stamp!==void 0?[c,a("div",{class:"q-message-stamp"},t.stamp())]:e.stamp?[c,a("div",{class:"q-message-stamp",[o.value.stamp]:e.stamp})]:[c]}function g(c,h){const x=h===!0?c.length>1?f=>f:f=>a("div",[f]):f=>a("div",{[o.value.msg]:f});return c.map((f,M)=>a("div",{key:M,class:v.value},[a("div",{class:_.value},y(x(f)))]))}return()=>{const c=[];t.avatar!==void 0?c.push(t.avatar()):e.avatar!==void 0&&c.push(a("img",{class:`q-message-avatar q-message-avatar--${s.value}`,src:e.avatar,"aria-hidden":"true"}));const h=[];t.name!==void 0?h.push(a("div",{class:`q-message-name q-message-name--${s.value}`},t.name())):e.name!==void 0&&h.push(a("div",{class:`q-message-name q-message-name--${s.value}`,[o.value.name]:e.name})),t.default!==void 0?h.push(g(j(t.default()),!0)):e.text!==void 0&&h.push(g(e.text)),c.push(a("div",{class:n.value},h));const x=[];return t.label!==void 0?x.push(a("div",{class:"q-message-label"},t.label())):e.label!==void 0&&x.push(a("div",{class:"q-message-label",[o.value.label]:e.label})),x.push(a("div",{class:l.value},c)),a("div",{class:`q-message q-message-${s.value}`},x)}}}),me="/assets/favicon-96x96.a9a0cf56.png",ve="/assets/download-debian.e986f5b1.png";const d=e=>(ae("data-v-b4ac8434"),e=e(),se(),e),_e=d(()=>i("h1",null,"\u4E0B\u8F7D",-1)),ge=d(()=>i("h2",null,"DOWNLOADS",-1)),he={class:"row",style:{width:"76vw"}},fe={class:"row",style:{"flex-grow":"1",padding:"4vmin"}},ye={class:"row downCard"},xe=d(()=>i("img",{src:me,alt:""},null,-1)),qe={class:"row",style:{"flex-direction":"column","align-items":"flex-start","margin-left":"2vmin"}},we=d(()=>i("h3",null,"\u8F6F\u4EF6\u672C\u4F53",-1)),be={class:"row"},Se=D(" \u70B9\u51FB\u4E0B\u8F7D "),pe=d(()=>i("span",null,"\u6700\u65B0\u7248\u672C 3.0.3-13",-1)),Ce={class:"row",style:{"flex-grow":"1",padding:"4vmin"}},ke={class:"row downCard"},$e=d(()=>i("img",{src:ve,alt:""},null,-1)),Qe={class:"row",style:{"flex-direction":"column","align-items":"flex-start","margin-left":"2vmin"}},De=d(()=>i("h3",null,"\u4F9D\u8D56\u5305(Ubuntu 20.04/Debian 11)",-1)),ze={class:"row"},Be=D(" \u70B9\u51FB\u4E0B\u8F7D "),Te=d(()=>i("span",null,"\u6700\u65B0\u7248\u672C 5.4.20",-1)),He={style:{"padding-inline-start":"0"}},Ue=d(()=>i("div",{class:"logoPanel"},null,-1)),Ae={class:"contentPanel"},Me=d(()=>i("h3",null,"\u5B89\u88C5\u8BF4\u660E Q&A",-1)),Pe=d(()=>i("div",{class:"avatar"},"Q",-1)),Ie=d(()=>i("div",{class:"avatar"},"A",-1)),Oe=D(" \u5F00\u59CB\u4E0B\u8F7D "),Le={setup(e){oe({title:"\u4E0B\u8F7D",titleTemplate:v=>`${v} - \u661F\u706B\u5E94\u7528\u5546\u5E97`});const t=J(!1),s=[{question:["\u5728\u54EA\u8FDB\u4EA4\u6D41\u7FA4\uFF1F"],answer:["872690351"]},{question:["\u5982\u4F55\u5F00\u542F\u591A\u7EBF\u7A0B\u4E0B\u8F7D\uFF1F"],answer:["\u53F3\u4E0A\u89D2\u83DC\u5355--->\u8BBE\u7F6E--->\u6E90\u5217\u8868\u65C1\u8FB9\u7684\u5237\u65B0\u6309\u94AE\uFF0C\u7136\u540E\u91CD\u542F\u5E94\u7528"]},{question:["\u53BB\u54EA\u53CD\u9988\uFF1F"],answer:["\u5E94\u7528\u8BE6\u60C5\u9875\u9762\u6709\u6309\u94AE"]},{question:["\u5728\u54EA\u91CC\u6295\u7A3F\uFF1F"],answer:["\u53F3\u4E0A\u89D2\u83DC\u5355--->\u6295\u9012\u5E94\u7528"]},{question:["\u6211\u4E0D\u662Fdeepin/UOS\u7528\u6237\uFF0C\u53EF\u4EE5\u4F7F\u7528\u661F\u706B\u5E94\u7528\u5546\u5E97\u5417\uFF1F"],answer:["\u53EF\u4EE5\u3002\u5BF9\u4E8EUbunutu 22.04\uFF1A\u76F4\u63A5\u5B89\u88C5\uFF1B\u5BF9\u4E8EUbuntu 20.04/Debian10/Debian 11\uFF0C\u5148\u5B89\u88C5\u4F9D\u8D56\u5305"]},{question:["wine\u5E94\u7528\u4E0D\u80FD\u542F\u52A8"],answer:["\u5E26\u4E0A\u4F60\u7684\u53D1\u884C\u7248\u540D\u79F0&\u7248\u672C\u53BB\u5E94\u7528\u53CD\u9988/\u50AC\u66F4"]},{question:["\u661F\u706B\u5546\u5E97\u4F1A\u5F71\u54CD\u7CFB\u7EDF\u6B63\u5E38\u66F4\u65B0\u5417\uFF1F"],answer:["\u661F\u706B\u5546\u5E97\u7684\u6E90\u4F18\u5148\u7EA7\u88AB\u8C03\u7684\u4F4E\u4E8E\u7CFB\u7EDF\u9ED8\u8BA4\uFF0C\u4E0D\u4F1A\u5F71\u54CD"]},{question:["\u6709\u4E9B\u5E94\u7528\u5DF2\u7ECF\u8FC7\u65F6\u6216\u8005\u5931\u6548\u4E86\uFF0C\u6211\u60F3\u8BA9\u4ED6\u4E0B\u67B6"],answer:["\u524D\u5F80<a href='https://gitee.com/deepin-community-store/software_-issue'>https://gitee.com/deepin-community-store/software_-issue</a>"]},{question:["\u63D0\u793A\u6709\u66F4\u65B0\u4E4B\u540E\u5728\u83DC\u5355\u91CC\u7684Auto Upgrade\u64CD\u4F5C\u5374\u63D0\u793A\u66F4\u65B0\u4E860\u4E2A\u8F6F\u4EF6\u5305"],answer:["\u8FD9\u4E2A\u8F6F\u4EF6\u5305\u6240\u9700\u8981\u7684\u4F9D\u8D56\u9AD8\u4E8E\u4F60\u7684\u7CFB\u7EDF\u4F9D\u8D56\u3002\u8FD9\u53EF\u80FD\u662F\u4E3A\u4E86\u5176\u4ED6\u53D1\u884C\u7248\u7F16\u8BD1\u7684\u8F6F\u4EF6\u5305\uFF0C\u4E0D\u80FD\u5B89\u88C5\u662F\u6B63\u5E38\u7684\u3002\u5982\u679C\u89C9\u5F97\u70E6\u3002\u3002\u3002\u53EF\u4EE5\u5728\u8BBE\u7F6E\u4E2D\u63091\u5173\u95ED\u66F4\u65B0\u63D0\u9192\u670D\u52A1"]}],_=[{version:"3.1.1",time:"2022-05-13 22:28  ",details:["\u4FEE\u590D\u4E86\u514D\u5BC6\u5B89\u88C5\u5931\u8D25\u7684\u95EE\u9898 #I5775W:\u514D\u5BC6\u5B89\u88C5\u5931\u8D25","\u5378\u8F7D\u65F6\u4F1A\u6E05\u7406\u81EA\u52A8\u5B89\u88C5\u7684policy\u3002\u76EE\u524D\u7684\u7B56\u7565\u662F\u6BCF\u6B21\u66F4\u65B0\u90FD\u6E05\u7406"]},{version:"3.1.0",time:"2022-05-09 18:41 ",details:["Debian 11\u7CFB\u7EDF\u9700\u8981\u5148\u5B89\u4F9D\u8D56\u5305","\u6DFB\u52A0\u514D\u5BC6\u7801\u5B89\u88C5\u529F\u80FD"]},{version:"3.0.3-13",time:"2022-04-24 16:20 ",details:["\u66F4\u65B0ssinstall\u811A\u672C. \u73B0\u5728\u652F\u6301\u4F7F\u7528apt-fast\u6765\u52A0\u901F\u4E0B\u8F7D","ssinstall\uFF08\u661F\u706B\u5185\u7F6E\u5B89\u88C5\u5668\u5B89\u88C5\uFF09\u73B0\u5728\u4F1A\u5728\u5B89\u88C5\u524D\u4E34\u65F6\u63D0\u5347\u661F\u706B\u6E90\u7684\u4F18\u5148\u7EA7\u4EE5\u6B63\u786E\u5B89\u88C5\u4F9D\u8D56","\u6539\u53D8\u5173\u4E8E\u7A97\u53E3\u7684\u98CE\u683C","\u66F4\u6539\u4E86\u4F9D\u8D56\u4EE5\u9632\u6B62\u4E0D\u652F\u6301\u5904\u7406Provides\u7684deb\u5B89\u88C5\u5668\u9519\u8BEF\u5730\u8BA4\u4E3A\u4F9D\u8D56\u4E0D\u6EE1\u8DB3","\u66F4\u65B0\u4E86\u6587\u6848\uFF1A\u73B0\u5728Ubuntu\u7684tag\u6CE8\u91CA\u6539\u4E3A\u9002\u914D22.04"]},{version:"3.0.3-12",time:"2022-04-22 17:07",details:["\u91CD\u65B0\u4F7F\u7528 DApplication::loadDXcbPlugin(); \u5728ubuntu\u4E0B\u6B63\u5E38\u663E\u793A\u6807\u9898\u680F","\u73B0\u5728\u53EF\u4EE5\u5728debian 11\u4E0A\u514D\u4F9D\u8D56\u8FD0\u884C","\u73B0\u5728\u53EF\u4EE5\u5728ubuntu 22.04\u4E0A\u514D\u4F9D\u8D56\u8FD0\u884C"]},{version:"3.0.3-11",time:"2022-04-11 11:43",details:["\u63D0\u4F9B\u4E86\u81EA\u52A8\u66F4\u65B0\u670D\u52A1\u3002"]},{version:"3.0.3-10",time:"2022-04-07 15:30",details:["\u8FD9\u4E1C\u897F\u8FD8\u8981\u624B\u5199\u8FC7\u6765\u7684\uFF1F\u5C31\u4E0D\u80FD\u76F4\u63A5\u8BA9\u7528\u6237\u8DF3\u8F6C\u5230gitee\u53BB\u770B\u53D1\u884C\u65E5\u5FD7\u5417","\u592A\u53CD\u4EBA\u7C7B\u4E86","\u56FE\u5462\uFF1F\u6211\u60F3\u653E\u4E2A\u56FE\u554A\uFF01\u548B\u653E\u56FE\u561E\uFF1F","\u652F\u6301html\u6807\u7B7E\u5417\uFF1F","\u6211\u5728\u8FD9\u5199\u4E00\u4E2A\u6807\u7B7E\u76F4\u63A5\u6307\u541130310\u7248\u672C\u7684\u53D1\u884C\u65E5\u5FD7\u5E94\u8BE5\u6CA1\u4EBA\u53D1\u73B0\u5427","<a href='https://gitee.com/deepin-community-store/spark-store/releases/3.0.3-10'>https://gitee.com/deepin-community-store/spark-store/releases/3.0.3-10</a>","(\uFF61\uFF65\u2200\uFF65)\uFF89\uFF9E\u591A\u7701\u4E8B\uFF01\u5565\uFF1Fjwyh\u8BF4\u8FD9\u6837\u4E0D\u7F8E\u89C2\uFF1F\u54FC\uFF0C\u53C8\u4E0D\u662F\u4E0D\u80FD\u7528\uFF01\u4EE5\u540E\u6211\u8FD8\u8981\u8FB6","","\u641E\u4E8B\u60C5\u7684shenmo\u5DF2\u7ECF\u88AB\u62D6\u8D70\u4E86","","\u6B63\u5F0F\u7684\u66F4\u65B0\u65E5\u5FD7 by jwyh\uFF1A","\u5927\u5E45\u5EA6\u4F18\u5316\u4E86\u975Edeepin/UOS\u7CFB\u7EDF\u4E0B\u7684\u663E\u793A\u6548\u679C\uFF1B","\u4FEE\u6539\u4E86control\u6587\u4EF6\uFF0C\u9632\u6B62\u5728\u7F16\u8BD1\u65F6\u8BEF\u4F7F\u7528\u4E86dtk2\u7684kit\uFF1B","spark-dstore-patch\u73B0\u5728\u4F1A\u5728\u7F16\u8BD1\u65F6\u4E00\u5E76\u7F16\u8BD1\uFF0C\u8DE8\u5E73\u53F0\u5DF2\u53EF\u4EE5\u5B9E\u73B0\uFF1B","spark-dstore-patch\u73B0\u5728\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684\u4ED3\u5E93 https://gitee.com/deepin-community-store/spark-dstore-patch\u3002"]},{version:"3.0.3-9",time:"2022-02-26 19:43",details:["\u66F4\u6539\u5305\u6784\u5EFA\u65B9\u5F0F\uFF0C\u73B0\u5728\u652F\u6301dpkg-build-package\uFF1B","\u66F4\u6539key\u7684\u5B89\u88C5\u65B9\u6CD5\uFF1B","\u8868\u660E\u6211\u4EEC\u8FD8\u6D3B\u7740\u3002"]},{version:"3.0.3-8",time:"2022-01-14 00:39",details:["\u4E0D\u518D\u4E0E\u6700\u65B0\u7248\u672C\u7684spark-dstore-patch\u51B2\u7A81\uFF1B","\u73B0\u5728\u9ED8\u8BA4\u4E0D\u4F1A\u663E\u793A\u5DF2\u96C6\u6210dstore patch\u7684\u4FE1\u606F\u4E86\uFF0C\u4EC5\u5728\u540C\u65F6\u5B89\u88C5\u4E86patch\u540E\u663E\u793A\uFF1B","\u5B89\u88C5\u65F6\u4F1A\u540C\u65F6\u52A0\u5165\u65B0\u7684\u5BC6\u94A5\uFF0C\u65E7\u7684\u5C06\u4F1A\u5728\u4E0D\u4E45\u540E\u5E9F\u9664\uFF0C\u6240\u4EE5\u8BF7\u5C3D\u5FEB\u66F4\u65B0\u52303.0.3-8+\u7248\u672C\uFF1B","\u8FD9\u56DE\u8BB0\u4F4F\u4FEE\u6539\u5173\u4E8E\u754C\u9762\u7684\u7248\u672C\u53F7\u4E86\u3002"]},{version:"3.0.3-7",time:"2021-12-13 20:15",details:["\u66F4\u6539\u7248\u672C\u53F7&\u50AC\u66F4\u5730\u5740\u3002"]},{version:"3.0.3-6",time:"2021-12-11 17:54",details:["\u73B0\u5728\u5728\u975EUOS/deepin\u4E0A\u5B89\u88C5\u661F\u706B\u5E94\u7528\u5546\u5E97\u5C31\u53EF\u4EE5\u6B63\u786E\u5904\u7406UOS\u5305\u5566\uFF01"]},{version:"3.0.3-5",time:"2021-10-26 20:43",details:["\u5728UOS\u4E0A\u91CD\u7F16\u8BD1\u4EE5\u9002\u914D\u3002"]},{version:"3.0.3-4",time:"2021-10-24 23:48",details:["\u6DFB\u52A0\u4E86\u4E34\u65F6\u50AC\u66F4\u529F\u80FD\uFF0C\u51CF\u8F7B\u7EF4\u62A4\u8005\u8D1F\u62C5\uFF0C\u653E\u5F03\u7EF4\u62A4\u65E0\u4EBA\u4F7F\u7528\u7684\u5E94\u7528\u3002"]},{version:"3.0.3\u2014LTS",time:"2021-07-06 10:20",details:["\u652F\u6301\u5E94\u7528\u8BE6\u60C5\u9875\u663E\u793A\u5347\u7EA7/\u91CD\u65B0\u5B89\u88C5\uFF1B","\u4FEE\u590D\u5E94\u7528\u8BE6\u60C5\u9875\u7ECF\u5E38\u52A0\u8F7D\u5931\u8D25\u7684\u95EE\u9898\uFF1B","\u4FEE\u590D\u5E94\u7528\u8BE6\u60C5\u9875\u5199\u5728\u5931\u8D25\u7684\u95EE\u9898\uFF1B","\u4FEE\u590D\u4E0B\u8F7D\u5217\u8868\u548C\u901A\u77E5\u680F\u4E0D\u663E\u793A\u5E94\u7528\u7F29\u7565\u56FE\u7684\u95EE\u9898\uFF1B","\u652F\u6301\u52A8\u6001\u83B7\u53D6\u4E0B\u8F7D\u955C\u50CF\u6E90\u5217\u8868\uFF1B","\u5C1D\u8BD5\u5F00\u542F Hidpi \u652F\u6301\uFF1B","DTK \u754C\u9762\u7248\u672C\u540E\u7EED\u968F\u7F18\u7EF4\u62A4\u66F4\u65B0\u3002"]},{version:"3.0.2",time:"2021-06-13 14:41",details:["\u4FEE\u6B63 3.0.1 \u7248\u672C\u4E2D\u975E DDE \u73AF\u5883\u4E0B\u6807\u9898\u680F\u663E\u793A\u5F02\u5E38\u7684\u95EE\u9898\uFF1B","\u5B89\u88C5\u65F6\u53D1\u9001\u90AE\u4EF6\u7EDF\u8BA1\u5B89\u88C5\u6570\u91CF\u3002"]},{version:"3.0.1",time:"2021-04-17 15:54",details:["\u5408\u5E76 multiple \u5206\u652F\uFF0C\u652F\u6301\u591A\u7EBF\u7A0B\u4E0B\u8F7D\u8F6F\u4EF6\u5305\uFF08\u7531 @\u67AF\u53F6\u868A \u5927\u4F6C\u5B9E\u73B0\uFF09\uFF1B","\u4FEE\u6539\u8FD4\u56DE\u56FE\u6807\u6309\u94AE\u4EE5\u53CA\u8FD4\u56DE\u6309\u94AE\u903B\u8F91\uFF1B","\u4FEE\u6539\u9ED8\u8BA4\u6E90\u670D\u52A1\u5668\u5217\u8868\uFF1B","\u4FEE\u590D\u542F\u52A8\u65F6\u9996\u9875\u989C\u8272\u4E3B\u9898\u4E0D\u8DDF\u968F\u7CFB\u7EDF\u4E3B\u9898\u989C\u8272\u7684\u95EE\u9898\uFF1B","\u4FEE\u6B63\u8BBE\u7F6E\u754C\u9762\u6E90\u670D\u52A1\u5668\u9009\u62E9\u4E0B\u62C9\u6846\u4E2D\u201C\u5F00\u53D1\u8005\u6A21\u5F0F\u201D\u63D0\u793A\u6587\u5B57\u53EF\u88AB\u9009\u4E2D\u7684\u95EE\u9898\u3002","\u8BE5\u7248\u672C\u7531 UOS \u4E2A\u4EBA\u7248 + Qt 5.11.3 \u7F16\u8BD1\uFF0C\u5982\u679C\u5B58\u5728\u8FD0\u884C\u95EE\u9898\u8BF7\u53CA\u65F6\u53CD\u9988......"]},{version:"3.0",time:"2020-12-17 00:24",details:["\u652F\u6301\u5E94\u7528\u641C\u7D22\u529F\u80FD\uFF0C\u9650\u5236\u524D\u4E00\u6B21\u641C\u7D22\u5B8C\u6210\u540E\u624D\u80FD\u8FDB\u884C\u7B2C\u4E8C\u6B21\u641C\u7D22\uFF08\u6253\u5F00\u5206\u4EAB\u94FE\u63A5\u4E0D\u53D7\u5F71\u54CD\uFF09\uFF1B","\u4FEE\u590D\u591A\u5C4F\u5E55\u4E0B\u622A\u56FE\u9884\u89C8\u504F\u79FB\u7684\u95EE\u9898\uFF0C\u56FA\u5B9A\u5728\u4E3B\u5C4F\u5E55\u4E0B\u663E\u793A\uFF1B","\u4FEE\u590D\u8FD4\u56DE\u5217\u8868\u4E4B\u540E\u4E0D\u80FD\u8BB0\u4F4F\u4E0A\u6B21\u6D4F\u89C8\u4F4D\u7F6E\u7684\u95EE\u9898\uFF1B","\u66F4\u65B0\u6E90\u670D\u52A1\u5668\u4F18\u5148\u7EA7\uFF1B","\u8C03\u6574\u5B89\u88C5\u5E94\u7528\u65B9\u5F0F\u7684\u987A\u5E8F\u4E3A\uFF1A \u661F\u706B\u5185\u7F6E\u5B89\u88C5\u5668 \uFF0C \u6DF1\u5EA6\u8F6F\u4EF6\u5305\u5B89\u88C5\u5668 \uFF0C gdebi \uFF1B","\u4FEE\u6539\u6253\u5305\u65B9\u5F0F\uFF0C\u652F\u6301\u4ECE\u542F\u52A8\u5668\u53F3\u952E\u5378\u8F7D\u5546\u5E97\u3002","\u7531\u4E8E\u6253\u5305\u65B9\u5F0F\u4FEE\u6539\uFF0C\u5B89\u88C5\u8FC73.0~alpha\u7248\u672C\u7684\u7528\u6237\u9700\u8981\u5148\u5378\u8F7D\u5546\u5E97\u518D\u91CD\u65B0\u5B89\u88C5\uFF0C\u6216\u8005\u91CD\u590D\u5B89\u88C5\u4E24\u6B21\u624D\u80FD\u6B63\u786E\u8986\u76D6\u6587\u4EF6\u4F4D\u7F6E\u3002"]},{version:"3.0~alpha2",time:"2020-12-15 00:36",details:["\u4FEE\u590D\u4E86\u641C\u7D22\u529F\u80FD\u7ECF\u5E38\u8BF7\u6C42\u9519\u8BEF\u7684\u95EE\u9898\uFF1B","\u4FEE\u590D\u4E86\u641C\u7D22\u4E4B\u540E\u70B9\u51FB\u8FD4\u56DE\u5217\u8868\u6309\u94AE\u9875\u9762\u663E\u793A\u903B\u8F91\u9519\u8BEF\u7684\u95EE\u9898\uFF1B","\u4FEE\u590D\u4E86\u8FD4\u56DE\u5217\u8868\u4E4B\u540E\u4E0D\u80FD\u8BB0\u4F4F\u4E0A\u6B21\u6D4F\u89C8\u4F4D\u7F6E\u7684\u95EE\u9898\uFF1B","\u66F4\u65B0\u4E86\u6E90\u670D\u52A1\u5668\u4F18\u5148\u7EA7\uFF1B","\u8C03\u6574\u4E86\u5B89\u88C5\u9009\u9879\u7684\u987A\u5E8F\uFF1B","\u91CD\u65B0\u6253\u5305\uFF0C\u4FEE\u590D\u4E0A\u4E2A\u7248\u672C\u4E2D\u65E0\u6CD5\u4F7F\u7528 dpkg \u5B89\u88C5\u7684\u95EE\u9898\u3002"]},{version:"3.0~alpha1",time:"2020-12-06 12:33",details:["\u5C1D\u8BD5\u4FEE\u590D\u591A\u5C4F\u5E55\u4E0B\u622A\u56FE\u9884\u89C8\u504F\u79FB\u7684\u95EE\u9898\uFF0C\u56FA\u5B9A\u5728\u4E3B\u5C4F\u5E55\u4E0B\u663E\u793A\u3002\uFF08\u5F85\u6D4B\u8BD5\uFF09"]},{version:"3.0~alpha0",time:"2021-04-17 15:54",details:["\u7531\u5927\u4F6C AdamSmith \u5B8C\u6210\u4E86\u641C\u7D22\u529F\u80FD\uFF0C\u652F\u6301\u591A\u7EBF\u7A0B\u4E0B\u8F7D\u641C\u7D22\u7ED3\u679C\u5217\u8868\u7684\u8F6F\u4EF6\u56FE\u6807\uFF1B","\u7531\u4E8E\u591A\u7EBF\u7A0B\u4E0B\u8F7D\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u5728 \u524D\u4E00\u6B21\u641C\u7D22\u5B8C\u6210\u4E4B\u524D \u65E0\u6CD5\u8FDB\u884C\u4E0B\u4E00\u6B21\u641C\u7D22\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\uFF1B","\u6253\u5F00 spk\u5206\u4EAB\u94FE\u63A5 \u4E0D\u53D7\u5F71\u54CD\u3002"]}];return(v,l)=>(q(),R(re,{class:"flex flex-start downPage varImageBg downBackground"},{default:u(()=>[_e,ge,i("div",he,[i("div",fe,[i("div",ye,[m(T,{size:"48px"},{default:u(()=>[xe]),_:1}),i("div",qe,[we,i("div",be,[m(C,{color:"primary","text-color":"white",onClick:l[0]||(l[0]=n=>t.value=!0),style:{padding:"0 3vmin"},dense:"",rounded:"",unelevated:""},{default:u(()=>[Se]),_:1}),pe])])])]),i("div",Ce,[i("div",ke,[m(T,{size:"48px"},{default:u(()=>[$e]),_:1}),i("div",Qe,[De,i("div",ze,[m(C,{color:"primary","text-color":"white",to:"/download_dependencies_latest",style:{padding:"0 3vmin"},dense:"",rounded:"",unelevated:""},{default:u(()=>[Be]),_:1}),Te])])])]),m(ue,{color:"primary",layout:"comfortable"},{default:u(()=>[(q(),w($,null,k(_,(n,o)=>m(ce,{key:o,title:n.version,subtitle:n.time},{default:u(()=>[i("div",null,[i("ul",He,[(q(!0),w($,null,k(n.details,(y,g)=>(q(),w("li",{key:g},Z(y),1))),128))])])]),_:2},1032,["title","subtitle"])),64))]),_:1})]),i("div",{class:te(["tipsContainer",{active:t.value}]),onClick:l[2]||(l[2]=n=>t.value=!1)},[i("div",{class:"tipsPanel",onClick:l[1]||(l[1]=ee(()=>{},["stop"]))},[Ue,i("div",Ae,[Me,m(le,{class:"qaCard"},{default:u(()=>[(q(),w($,null,k(s,(n,o)=>i("div",{class:"qaSection",key:o},[m(H,{text:n.question,"text-html":"","text-color":"white","bg-color":"primary"},{avatar:u(()=>[Pe]),_:2},1032,["text"]),m(H,{text:n.answer,"text-html":"",sent:""},{avatar:u(()=>[Ie]),_:2},1032,["text"])])),64))]),_:1}),m(C,{color:"primary","text-color":"white",to:"/download_latest"},{default:u(()=>[Oe]),_:1})])])],2),m(de)]),_:1}))}};var Ge=G(Le,[["__scopeId","data-v-b4ac8434"]]);export{Ge as default};
