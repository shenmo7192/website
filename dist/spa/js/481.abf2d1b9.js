(self["webpackChunkspark_store"]=self["webpackChunkspark_store"]||[]).push([[481],{6481:(A,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>N});var e=i(3673),a=i(2323),l=i(3933),d=i.n(l),s=i(6544),g=i.n(s);const o=(0,e._)("h1",null,"下载",-1),r=(0,e._)("h2",null,"DOWNLOADS",-1),m={class:"row",style:{width:"76vw"}},B={class:"row",style:{"flex-grow":"1",padding:"4vmin"}},n={class:"row downCard"},u=(0,e._)("img",{src:d()},null,-1),w={class:"row",style:{"flex-direction":"column","align-items":"flex-start","margin-left":"2vmin"}},v=(0,e._)("h3",null,"软件本体",-1),b={class:"row"},R=(0,e.Uk)(" 点击下载 "),c=(0,e._)("span",null,"最新版本 3.0.3-7",-1),H={class:"row",style:{"flex-grow":"1",padding:"4vmin"}},F={class:"row downCard"},p=(0,e._)("img",{src:g()},null,-1),f={class:"row",style:{"flex-direction":"column","align-items":"flex-start","margin-left":"2vmin"}},E=(0,e._)("h3",null,"依赖包",-1),V={class:"row"},x=(0,e.Uk)(" 点击下载 "),C=(0,e._)("span",null,"最新版本 3.0.2",-1),Z={style:{"padding-inline-start":"0"}};function z(A,t,i,l,d,s){const g=(0,e.up)("q-avatar"),z=(0,e.up)("q-btn"),I=(0,e.up)("q-timeline-entry"),L=(0,e.up)("q-timeline"),h=(0,e.up)("q-page");return(0,e.wg)(),(0,e.j4)(h,{class:"flex flex-start downPage varImageBg downBackground"},{default:(0,e.w5)((()=>[o,r,(0,e._)("div",m,[(0,e._)("div",B,[(0,e._)("div",n,[(0,e.Wm)(g,{size:"48px"},{default:(0,e.w5)((()=>[u])),_:1}),(0,e._)("div",w,[v,(0,e._)("div",b,[(0,e.Wm)(z,{color:"primary","text-color":"white",to:"/download_latest",style:{padding:"0 3vmin"},dense:"",rounded:"",unelevated:""},{default:(0,e.w5)((()=>[R])),_:1}),c])])])]),(0,e._)("div",H,[(0,e._)("div",F,[(0,e.Wm)(g,{size:"48px"},{default:(0,e.w5)((()=>[p])),_:1}),(0,e._)("div",f,[E,(0,e._)("div",V,[(0,e.Wm)(z,{color:"primary","text-color":"white",to:"/download",style:{padding:"0 3vmin"},dense:"",rounded:"",unelevated:""},{default:(0,e.w5)((()=>[x])),_:1}),C])])])]),(0,e.Wm)(L,{color:"primary",layout:"comfortable"},{default:(0,e.w5)((()=>[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(A.updateHistory,((A,t)=>((0,e.wg)(),(0,e.j4)(I,{key:t,title:A.version,subtitle:A.time},{default:(0,e.w5)((()=>[(0,e._)("div",null,[(0,e._)("ul",Z,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(A.details,((A,t)=>((0,e.wg)(),(0,e.iD)("li",{key:t},(0,a.zw)(A),1)))),128))])])])),_:2},1032,["title","subtitle"])))),128))])),_:1})])])),_:1})}var I=i(7849);const L={name:"PageIndex",data:()=>({updateHistory:[{version:"3.0.3-8",time:"2022-01-14 00:39",details:["不再与最新版本的spark-dstore-patch冲突；","现在默认不会显示已集成dstore patch的信息了，仅在同时安装了patch后显示；","安装时会同时加入新的密钥，旧的将会在不久后废除，所以请尽快更新到3.0.3-8+版本；","这回记住修改关于界面的版本号了。"]},{version:"3.0.3-7",time:"2021-12-13 20:15",details:["更改版本号&催更地址。"]},{version:"3.0.3-6",time:"2021-12-11 17:54",details:["现在在非UOS/deepin上安装星火应用商店就可以正确处理UOS包啦！"]},{version:"3.0.3-5",time:"2021-10-26 20:43",details:["在UOS上重编译以适配。"]},{version:"3.0.3-4",time:"2021-10-24 23:48",details:["添加了临时催更功能，减轻维护者负担，放弃维护无人使用的应用。"]},{version:"3.0.3—LTS",time:"2021-07-06 10:20",details:["支持应用详情页显示升级/重新安装；","修复应用详情页经常加载失败的问题；","修复应用详情页写在失败的问题；","修复下载列表和通知栏不显示应用缩略图的问题；","支持动态获取下载镜像源列表；","尝试开启 Hidpi 支持；","DTK 界面版本后续随缘维护更新。"]},{version:"3.0.2",time:"2021-06-13 14:41",details:["修正 3.0.1 版本中非 DDE 环境下标题栏显示异常的问题；","安装时发送邮件统计安装数量。"]},{version:"3.0.1",time:"2021-04-17 15:54",details:["合并 multiple 分支，支持多线程下载软件包（由 @枯叶蚊 大佬实现）；","修改返回图标按钮以及返回按钮逻辑；","修改默认源服务器列表；","修复启动时首页颜色主题不跟随系统主题颜色的问题；","修正设置界面源服务器选择下拉框中“开发者模式”提示文字可被选中的问题。","该版本由 UOS 个人版 + Qt 5.11.3 编译，如果存在运行问题请及时反馈......"]},{version:"3.0",time:"2020-12-17 00:24",details:["支持应用搜索功能，限制前一次搜索完成后才能进行第二次搜索（打开分享链接不受影响）；","修复多屏幕下截图预览偏移的问题，固定在主屏幕下显示；","修复返回列表之后不能记住上次浏览位置的问题；","更新源服务器优先级；","调整安装应用方式的顺序为： 星火内置安装器 ， 深度软件包安装器 ， gdebi ；","修改打包方式，支持从启动器右键卸载商店。","由于打包方式修改，安装过3.0~alpha版本的用户需要先卸载商店再重新安装，或者重复安装两次才能正确覆盖文件位置。"]},{version:"3.0~alpha2",time:"2020-12-15 00:36",details:["修复了搜索功能经常请求错误的问题；","修复了搜索之后点击返回列表按钮页面显示逻辑错误的问题；","修复了返回列表之后不能记住上次浏览位置的问题；","更新了源服务器优先级；","调整了安装选项的顺序；","重新打包，修复上个版本中无法使用 dpkg 安装的问题。"]},{version:"3.0~alpha1",time:"2020-12-06 12:33",details:["尝试修复多屏幕下截图预览偏移的问题，固定在主屏幕下显示。（待测试）"]},{version:"3.0~alpha0",time:"2021-04-17 15:54",details:["由大佬 AdamSmith 完成了搜索功能，支持多线程下载搜索结果列表的软件图标；","由于多线程下载的问题，所以在 前一次搜索完成之前 无法进行下一次搜索，请耐心等待；","打开 spk分享链接 不受影响。"]}]}),setup(){(0,I.Z)({title:"下载",titleTemplate:A=>`${A} - 星火应用商店`})}};var h=i(4379),W=i(5096),T=i(4607),y=i(1432),O=i(3424),D=i(7518),U=i.n(D);L.render=z;const N=L;U()(L,"components",{QPage:h.Z,QAvatar:W.Z,QBtn:T.Z,QTimeline:y.Z,QTimelineEntry:O.Z})},3933:A=>{A.exports="data:image/png;base64,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"},6544:A=>{A.exports="data:image/png;base64,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"}}]);