"use strict";(self["webpackChunkspark_store"]=self["webpackChunkspark_store"]||[]).push([[908],{8908:(t,e,a)=>{a.r(e),a.d(e,{default:()=>E});a(7098),a(5363);var s=a(3673),r=a(8880),o=a(2323);const l={class:"topBar"},i={class:"search"},n={class:"body relative-position"},p={class:"rank",key:"recommend"},d=(0,s._)("h5",null,"施工ing...",-1),c=[d],u={class:"rank",key:"rank"},h=(0,s._)("h5",null,"施工ing...",-1),m=[h],_={class:"sort appList",key:"sort"},g=["src"],w={class:"wrap"},k={class:"text"},v=(0,s._)("i",null,null,-1),f=(0,s._)("i",null,null,-1),y=(0,s._)("i",null,null,-1),S=(0,s._)("i",null,null,-1),$=(0,s._)("i",null,null,-1),q=(0,s._)("i",null,null,-1),I=(0,s._)("i",null,null,-1);function Z(t,e,a,d,h,Z){const Q=(0,s.up)("q-icon"),W=(0,s.up)("q-input"),x=(0,s.up)("q-avatar"),z=(0,s.up)("q-card-section"),L=(0,s.up)("q-card"),b=(0,s.up)("q-scroll-area"),A=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(A,{class:"flex storePage"},{default:(0,s.w5)((()=>[(0,s._)("div",l,[(0,s._)("div",i,[(0,s.Wm)(Q,{name:"search",size:"25px"}),(0,s.Wm)(W,{borderless:"",modelValue:t.searchStr,"onUpdate:modelValue":e[1]||(e[1]=e=>t.searchStr=e)},{append:(0,s.w5)((()=>[""!==t.searchStr?((0,s.wg)(),(0,s.j4)(Q,{key:0,name:"clear",class:"cursor-pointer",onClick:e[0]||(e[0]=e=>t.searchStr="")})):(0,s.kq)("",!0)])),_:1},8,["modelValue"])])]),(0,s.Wm)(b,{style:{width:"100%","margin-top":"52px"},"thumb-style":{"z-index":1,"border-radius":"100px"},visible:!1},{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(r.W3,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:(0,s.w5)((()=>["/store"===t.$route.path&&t.loaded?((0,s.wg)(),(0,s.iD)("div",p,c)):(0,s.kq)("",!0),t.$route.path.match("rank")&&t.loaded?((0,s.wg)(),(0,s.iD)("div",u,m)):(0,s.kq)("",!0),t.$route.path.match("sort")&&t.loaded?((0,s.wg)(),(0,s.iD)("div",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.appList,((e,a)=>((0,s.wg)(),(0,s.j4)(L,{id:"app_"+a,key:a,onClick:t=>Z.openApp(e.application_id,a)},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{horizontal:""},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{size:"64px",rounded:""},{default:(0,s.w5)((()=>[(0,s._)("img",{src:t.source+"/store/"+t.$route.params.sort+"/"+e.package.replace("+","%2B")+"/icon.png"},null,8,g)])),_:2},1024),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s._)("h6",null,(0,o.zw)(e.application_name_zh),1),(0,s._)("div",w,[(0,s._)("div",k,(0,o.zw)(e.more),1)])])),_:2},1024)])),_:2},1024)])),_:2},1032,["id","onClick"])))),128)),v,f,y,S,$,q,I])):(0,s.kq)("",!0)])),_:1})])])),_:1})])),_:1})}var Q=a(52),W=a.n(Q),x=a(7849);const z={name:"PageIndex",data:()=>({appList:[],source:"https://d.store.deepinos.org.cn",imgSource:"https://cdn.jsdelivr.net/gh/Jerrywang959/jsonpng",dataSource:"https://store.deepinos.org/api/",searchStr:"",loaded:!0,sortId:{}}),methods:{getSortId:function(){W().post(`${this.dataSource}type/get_type_list`).then((t=>{t.data.data.forEach((t=>{this.sortId[t.orig_name]=t.type_id})),this.getAppList(this.$route.params)}))},getAppList:function(t){t.hasOwnProperty("sort")&&W().post(`${this.dataSource}application/get_application_list`,{size:1e4,type_id:this.sortId[t.sort]}).then((t=>{setTimeout((()=>{this.appList=t.data.data.data,this.loaded=!0}),800)}))},openApp:function(t,e){console.log(t,e)}},created(){console.log("spa"),this.$watch((()=>this.$route.params),((t,e)=>{t.hasOwnProperty("sort")?this.loaded=!1:this.appList=[],setTimeout((()=>{this.getAppList(t)}),400)})),this.$route.params.hasOwnProperty("sort")&&(this.loaded=!1),this.getSortId(),this.$watch((()=>this.$route.path),((t,e)=>{t.match("store")&&(t.match("sorts")||(this.loaded=!1,setTimeout((()=>{this.loaded=!0}),1e3)))}))},setup(){(0,x.Z)({title:"WEB商店",titleTemplate:t=>`${t} - 星火应用商店`})}};var L=a(4379),b=a(4554),A=a(4553),C=a(1939),P=a(151),j=a(5589),D=a(5096),O=a(4027),T=a(6115),B=a(7518),V=a.n(B);z.render=Z;const E=z;V()(z,"components",{QPage:L.Z,QIcon:b.Z,QInput:A.Z,QScrollArea:C.Z,QCard:P.Z,QCardSection:j.Z,QAvatar:D.Z,QImg:O.Z,QField:T.Z})}}]);