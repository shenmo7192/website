var I=Object.defineProperty,P=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(e,s,i)=>s in e?I(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,d=(e,s)=>{for(var i in s||(s={}))U.call(s,i)&&h(e,i,s[i]);if(w)for(var i of w(s))x.call(s,i)&&h(e,i,s[i]);return e},g=(e,s)=>P(e,K(s));import{u as j,b as N,Q,R as M,a as B}from"./QBtn.ebcab7ba.js";import{u as V,a as X}from"./use-dark.2e0e715a.js";import{c as Y,e as k,f as T}from"./dom.bb41fcd4.js";import{c as r,h as c,g as z,N as S,_ as O,q as W,y as J,v as n,t as A,d as l,U as a,B as L,C as Z}from"./index.d94441d0.js";import{u as G,Q as _}from"./use-meta.b84a7f6d.js";import{F as $}from"./FooterView.2b76593a.js";const AA={xs:8,sm:10,md:14,lg:20,xl:24};var eA=Y({name:"QChip",props:g(d(d({},V),j),{dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}}),emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:s,emit:i}){const{proxy:{$q:u}}=z(),C=X(e,u),m=N(e,AA),R=r(()=>e.selected===!0||e.icon!==void 0),y=r(()=>e.selected===!0?e.iconSelected||u.iconSet.chip.selected:e.icon),q=r(()=>e.iconRemove||u.iconSet.chip.remove),v=r(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),b=r(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(v.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(C.value===!0?" q-chip--dark q-dark":"")}),p=r(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function F(t){t.keyCode===13&&E(t)}function E(t){e.disable||(i("update:selected",!e.selected),i("click",t))}function f(t){(t.keyCode===void 0||t.keyCode===13)&&(S(t),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function D(){const t=[];v.value===!0&&t.push(c("div",{class:"q-focus-helper"})),R.value===!0&&t.push(c(Q,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const H=e.label!==void 0?[c("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(c("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},T(s.default,H))),e.iconRight&&t.push(c(Q,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(c(Q,g(d({class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:q.value},p.value),{onClick:f,onKeyup:f}))),t}return()=>{if(e.modelValue===!1)return;const t={class:b.value,style:m.value};return v.value===!0&&Object.assign(t,p.value,{onClick:E,onKeyup:F}),k("div",t,D(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[M,e.ripple]])}}}),tA="/assets/index-appToolBar.d848f290.avif",sA="data:image/webp;base64,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",iA="/assets/index-appToolBar.471d7673.png",oA="/assets/index-play.0d3bbe68.avif",aA="/assets/index-play.9d80e6e0.webp",rA="/assets/index-play.653c1bb6.png",cA="/assets/favicon-32x32.c225fd8e.png",nA="/assets/index-main.407a0561.avif",lA="/assets/index-main.bd957106.webp",dA="/assets/index-main.11f58fc5.png",BA="data:image/avif;base64,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",uA="data:image/webp;base64,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",vA="data:image/png;base64,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",gA="/assets/index-community.f7d78d78.avif",QA="/assets/index-community.7a145703.webp",pA="/assets/index-community.182227f5.png",EA="/assets/index-radar.092025d0.avif",fA="/assets/index-radar.f806a084.webp",wA="/assets/index-radar.ee138558.png",hA="/assets/index-application.44980d89.avif",CA="/assets/index-application.5bb82b8e.webp",mA="/assets/index-application.9e49ed12.png",RA="/assets/index-thunder.3b4e2164.avif",yA="/assets/index-thunder.2ea9ec7c.webp",qA="/assets/index-thunder.57aaccaf.png",bA="/assets/index-downloadSpeed.f490b4cb.avif",FA="/assets/index-downloadSpeed.95f08057.webp",DA="/assets/index-downloadSpeed.cec144df.png",HA="/assets/index-player.8c939062.avif",IA="/assets/index-player.cd496e53.webp",PA="/assets/index-player.9abbff83.png",KA="/assets/index-dingtalk.09d715b7.avif",UA="/assets/index-dingtalk.673434d9.webp",xA="/assets/index-dingtalk.58c54dff.png",jA="data:image/avif;base64,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",NA="data:image/webp;base64,UklGRrYDAABXRUJQVlA4WAoAAAAQAAAARwAARwAAQUxQSO8BAAABkK1tkyFJMVjbtm3b9lasbfvIuALryLZt27Ztq2JRyD+yLyAiJoA0d/5QhSLjR5H9SSLBZBERt6d9CX79J3I7qW3zxL+XZRL0WrRNSQLJR5suBxOxJ5OE3WzN1lCyzZLEYnChHXNNSEcrPhiRIhYkFrM/LfhsSNwobQldU3JPW2kxX1fZJoAoE2TviPFJVQqIDNdUF/NB02iMZFQ0HXRF0UqQxNFzAOXouY46q+caSvSchvVXcxi2R8022DM102CiZqC+6NS1OWjt1NFedXFRwaLLNOPwretnIaLMuDoBEpZsxcYbZSTcFK/YHIx2YQc8KjsMPwI75xGX8eNhdz2oBa6Ti3rrVRHH31CvvOIrWIna60UtcYya6pNBwQlQcx9S0BcU41cZx18x5B9PwWTIrwDUHMdfENeDZFbQH7EwCDXDMSJXoAwKDgEoeFNcux/GLoZIhONRxnqEoOI43mUqNgw1xfEjMzcodDwFncwUDEcZcNzRxGcyWQ3HfC9cHCNURwE/CHORDDdRwNtClDdFTRTwtEC3yHxtBTwkSHYA5VXAba/6nCBoqhY45lkebjSGqJoCHv9dRJYRPFlrHLddJxKFI8qNY+7Rj3QWQjUrSHorOgAnhnQnKeEYaZwpDlkYlbZEg9Z+TtNKOeNThAcAVlA4IKABAAAQCwCdASpIAEgAPpE+mUglo6KhLNM8yLASCWYAzfoBXx5n/pN6SkEvThkdsBztHo+/1++HbyyEGe/B3p17gfNHj4RPxJaJSUnA3JAdtKrJnvQvIFv7vugr9uPLW3KVbfoAAP78XNOv+UHD/uuaP0G+Zzt608sV8w5Bt2xv8zYudklG1nZ9SCa0YSy+W7tuAfefhGV/+xrMKBKlM5uWm/ZcB20+/SqJXKv5UCMjqAT2YwxA/LHRH/ZuWQ4UXTe1iwYBno6KviCCGhYOUdXD4Nl+9yCM39/uSisB1oBi0q9uND9+2rpTzZOvmiiqLhuJ4fh2kQZBw+a2Y+sl7thWE2HpPxmUPLj+HiPmX5129K8bjvy/aiK82AtHtBGP/LLa2n9v++VsrOD/ZdrSUfRpIvauJh9pHk54SANXhIZ6TQDeAi5X1/2TtKfx1JdGZmFGB9SPPanP9S4Gj/hEBpaZF3kOEAZRcKBkuFuMTmlRdYEuvNLi4F4Fd9UwZT+MQGVWlleIu/4WWNhbTofGfvg/0ChSnPN5DfvpYfdLY//QNgoAAA==",MA="data:image/png;base64,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",VA="data:image/avif;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgCAYAAAAi7kmXAAABfWlDQ1BpY20AACiRfZE9SMNQFIVPU7UiFQcriDgErE4WRKU4ahWKUCHUCq06mLz0D5o0JCkujoJrwcGfxaqDi7OuDq6CIPgD4ubmpOgiJd6XFFrE+uDyPs5753DffYBQKzHN6pgANN02k/GYmM6sioFXdGGAagRRmVnGnCQl0HZ93cPH97sIz2p/78/Vq2YtBvhE4llmmDbxBnF00zY47xOHWEFWic+Jx01qkPiR64rHb5zzLgs8M2SmkvPEIWIx38JKC7OCqRFPE4dVTad8Ie2xynmLs1aqsEaf/IXBrL6yzHWqYcSxiCVIEKGggiJKsBGhXSfFQpLOY238Q65fIpdCriIYORZQhgbZ9YP/we/ZWrmpSS8pGAM6XxznYxQI7AL1quN8HztO/QTwPwNXetNfrgEzn6RXm1r4COjbBi6um5qyB1zuAINPhmzKruSnEnI54P2MvikD9N8CPWve3BrnOH0AUjSrxA1wcAiM5Sl7vc27u1vn9u+dxvx+AJ1EcrgRuJ0bAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABcSAAAXEgFnn9JSAAABk0lEQVQ4y+2VP2uTURSHn3PfJNWUorsdurgoOHVzEMeCCHXoN9Cx4F6JhTo7+i0KgjRDQUcX26UGChnUlAhNibWm0Tfvn/NzkDdWxebN3jNdDr+H554z3GucqRdvtTCKuVer+EatEq4AJBknacYTC/Gr1TuXPxRZKw6NLc3PX2UTWDT73QeQkPCdT4ejB8+W6wdj8PkbLczO8DIYtzin3NkbJtx/fNc+BoB6NV8CbjKpjBv1KksAAcmcaC4Y0SQuGJHDHJKFxlMMqE60FfMatQZYKAv8Y78A/1+VMqHuV9Efit2OOBmR7t2OdC54NBC7B07nGH6kJYzfYvH+s/OuM8VVcxfNlnM4mGLG/lBstZzj71NsNcnF9n45aGwcxLC97/QG5aCx8XU750tJ0xhcX0fdvmdpPiU4XfwCLAuaFEjLAnLPxkazcCopmwj9ypyCKQB4FjWB1mSftTzJmnDm07m+Mbx2KcxsYlq0v95bIcfZiVVZbq9Z94/ltNdmu1kerSi3hy71ir5LPXd7lCTZSgEB/ATGv7Ys+g42VAAAB8RlWElmSUkqAAgAAAAKAAABBAABAAAADgAAAAEBBAABAAAAIAAAAAIBAwADAAAAhgAAABIBAwABAAAAAQAAABoBBQABAAAAjAAAABsBBQABAAAAlAAAACgBAwABAAAAAwAAADEBAgANAAAAnAAAADIBAgAUAAAAqgAAAGmHBAABAAAAvgAAANAAAAAIAAgACACJCwAAMgAAAIkLAAAyAAAAR0lNUCAyLjEwLjI0AAAyMDIxOjA2OjIxIDE0OjM2OjE0AAEAAaADAAEAAAABAAAAAAAAAAgAAAEEAAEAAABwAAAAAQEEAAEAAAAAAQAAAgEDAAMAAAA2AQAAAwEDAAEAAAAGAAAABgEDAAEAAAAGAAAAFQEDAAEAAAADAAAAAQIEAAEAAAA8AQAAAgIEAAEAAACIBgAAAAAAAAgACAAIAP/Y/+AAEEpGSUYAAQEAAAEAAQAA/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBAABwAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+f6KKKACvr+s6tKvapYb2F9b3PLqVva20tYr1JUlLW7ZnYKKKKkZFTKsUlUmKxBXyNX1/WRXPVw3t7a2sa063sr6XufK9FFFeMemFfXFfI9fX1ejgHbm+X6nHi1sLTqbTq7zjCiiikMKKKKACiiigAptOptMCCvkevr6vkGuDMH8Pz/Q68Itz6zq1XIV19evXp8ltTwMuyf+zeb3+bmt0ttfzfckooormPUCiiigAooooAKKKKACiiigCOqtW626JVOTofP55gvrXs/eta/S+9jzSuvrkK6+u7F9D6ev0JKKKK4TAKKKKACiiigAooooAKKKKAGVt1iVt1lW6Hm4/wCz8/0PNK6+uQrr69PF9D2a/QkooorhMAooooAKKKKACiiigAooooAZW3WJW3WVboebj/s/P9DzSuvrkK6+vTxfQ9mv0JKKKK4TAKKKKACiiigAooooAKKKKAGVt1iVt1lW6Hm4/wCz8/0PNK6+uQrr69PF9D2a/QkooorhMAooooAKKKo1UY3E3YvVm1hVmV3U8Lvqcs6/kdJXPVXortp0eTqcsqnN0EryOvXK8jr3cq+38v1OrA/a+R7jXX1yFdfXyeL6HpV+hJRRRXCYBVapq4muihS9pfUxq1OS2hp1z1FFevTp8l9Tz5z5gooorQgKKKKAEryOvXK8jr18q+38v1O7A/a+R7jXX1yFdfXyeL6HpV+hJVKrNcVWVClz31OGrU5baDKqUUV7CVjzm7hRRRVCCiiigAooooASvI69cryOvXyr7fy/U7sD9r5HuNdPXMUyvmqlPntqdmMqcnKMqjT6ZXXFWPHbuFFFFWSFFFFABRRRQAUUUUAJXkdeuV5HXr5V9v5fqd2B+18gr1qvJa9aozX7Hz/QeN+z8x9FFFeQcAUUUUAFFFFABRRRQAUUUUAJXkdeuV5HXr5V9v5fqd2B+18gr1qvJa9aozX7Hz/QeN+z8x9FFFeQcAUUUUAFFFFABRRRQAUUUUAJXkdeuV5HXr5V9v5fqd2B+18gr1qvJa9aozX7Hz/QeN+z8x9FFFeQcAUUUUAFFFFABRRRQAUUUUAJXkdeuV5HXr5V9v5fqd2B+18gr1qvCK94rw6edf2nf3OXl873v8l2Nsxp8nLr3/QdRRRWp5YUUUUAFFFFABRRRQAUUUUAJXkdet15JXr5V9v5fqd2C+18jCr3mvBq93r4jIV/E+X6nVm32Pn+g6lpKWvoDxwooooAKKKKACiiigApKWkoASvB69zrwyvns+/5d/P9D2Mq+38v1Ciiivnj2D3Spa8Gr3avssvx31vm921rdb738j5rFYT6tbW9x9LTKWvQOQdRRRQAUlJRQAU2o68Nrz8dmH1Pl92979bbW8n3OvC4P6zf3rWCiiivjT6U/9kVquFTAAAAAElFTkSuQmCC",XA="data:image/webp;base64,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",YA="/assets/index-spinner.26702f0a.png",kA="/assets/index-decorating.8cd62269.avif",TA="/assets/index-decorating.acef274b.webp",zA="/assets/index-decorating.9914c091.png";const o=e=>(L("data-v-00731377"),e=e(),Z(),e),SA=tA,OA=sA,WA=oA,JA=aA,LA=nA,ZA=lA,GA=BA,_A=uA,$A=gA,Ae=QA,ee=EA,te=fA,se=hA,ie=CA,oe=RA,ae=yA,re=bA,ce=FA,ne=HA,le=IA,de=KA,Be=UA,ue=jA,ve=NA,ge=VA,Qe=XA,pe=kA,Ee=TA,fe={class:"row indexBackground"},we={class:"row P1st"},he={class:"app_name"},Ce=a(" Spark Store "),me=a(" 3.0.3-13 "),Re=o(()=>A("h2",null,"Debian \u7CFB\u53D1\u884C\u7248\u7684\u4E13\u5C5E\u5E94\u7528\u5546\u5E97",-1)),ye={class:"row window"},qe={class:"row"},be=o(()=>A("div",{class:"row",style:{"flex-direction":"column","flex-wrap":"nowrap"}},[A("p",null,"\u6781\u901F\u4E0B\u8F7D"),A("p",null,"\u4E00\u952E\u5B89\u88C5"),A("p",null,"\u4EAB\u4F60\u6240\u60F3"),A("p",null,"\u4E88\u4F60\u6240\u6C42"),A("p",null,"\u660E\u6697\u968F\u6027"),A("p",null,"\u7CBE\u5F69\u4E0D\u540C"),A("p",null,"\u5168\u65B0\u8BBE\u8BA1"),A("p",null,"\u4E3A\u4F60\u800C\u6765")],-1)),Fe={class:"row"},De=o(()=>A("picture",null,[A("source",{type:"image/avif",srcset:SA}),A("source",{type:"image/webp",srcset:OA}),A("img",{style:{width:"100%"},src:iA,alt:""})],-1)),He=o(()=>A("picture",{style:{width:"80%"}},[A("source",{type:"image/avif",srcset:WA}),A("source",{type:"image/webp",srcset:JA}),A("img",{style:{width:"100%"},src:rA,alt:""})],-1)),Ie={class:"row",style:{"flex-direction":"column"}},Pe=o(()=>A("img",{style:{width:"3vmin",height:"3vmin","margin-right":"6px",filter:"brightness(100) grayscale(1)"},src:cA,alt:""},null,-1)),Ke=a(" \u4E0B\u8F7D\u6700\u65B0\u7248\u672C "),Ue=a(" \u67E5\u770B\u66F4\u65B0\u65E5\u5FD7 "),xe=o(()=>A("picture",null,[A("source",{type:"image/avif",srcset:LA}),A("source",{type:"image/webp",srcset:ZA}),A("img",{style:{width:"46vw"},src:dA,alt:""})],-1)),je=o(()=>A("div",{class:"row",style:{"padding-bottom":"10vmin"}},[A("div",{class:"row P2nd"},[A("picture",null,[A("source",{type:"image/avif",srcset:GA}),A("source",{type:"image/webp",srcset:_A}),A("img",{style:{width:"14vmin"},src:vA,alt:""})]),A("h2",null,"\u661F\u661F\u4E4B\u706B\uFF0C\u53EF\u4EE5\u71CE\u539F\u3002"),A("p",null,"\u4ECE\u8FC7\u53BB\u5230\u672A\u6765\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u56FD\u4EA7\u5316\u66FF\u4EE3\u6E10\u6210\u8D8B\u52BF\uFF1B"),A("p",null,"\u5B8C\u5584 Linux \u53D1\u884C\u7248\u751F\u6001\u5DF2\u8FEB\u5728\u7709\u776B\u3002"),A("p",null,"\u5982\u4F55\u624D\u80FD\u6EE1\u8DB3\u7528\u6237\u7684\u4F7F\u7528\u9700\u6C42\uFF0C\u8BA9\u6D77\u91CF\u5E94\u7528\u89E6\u624B\u53EF\u53CA\uFF1F"),A("p",null,"\u800C\u8FD9\uFF0C\u4FBF\u662F\u661F\u706B\u5F00\u53D1\u8005\u8054\u76DF\u77E2\u5FD7\u4E0D\u6E1D\u6240\u8FFD\u6C42\u7684\u4EF7\u503C\u3002"),A("p",null,"\u661F\u706B\u5546\u5E97\u2014\u2014\u4ECE\u793E\u533A\u4E2D\u6765\uFF0C\u5230\u793E\u533A\u4E2D\u53BB\u3002")]),A("picture",null,[A("source",{type:"image/avif",srcset:$A}),A("source",{type:"image/webp",srcset:Ae}),A("img",{style:{width:"46vw"},src:pA,alt:""})])],-1)),Ne=o(()=>A("div",{class:"row"},[A("div",{class:"row features"},[A("picture",null,[A("source",{type:"image/avif",srcset:ee}),A("source",{type:"image/webp",srcset:te}),A("img",{style:{width:"36vmin"},src:wA,alt:""})]),A("h2",null,"\u591A\uFF0C\u4E3A\u4F60\u800C\u6765"),A("p",null,"\u6D77\u91CF\u5E94\u7528\uFF0C\u6D89\u53CA\u65B9\u65B9\u9762\u9762\uFF0C"),A("p",null,"\u5BFB\u627E\u5E94\u7528\u4ECE\u672A\u5982\u6B64\u8F7B\u677E")]),A("picture",null,[A("source",{type:"image/avif",srcset:se}),A("source",{type:"image/webp",srcset:ie}),A("img",{style:{width:"54vw"},src:mA,alt:""})])],-1)),Me=o(()=>A("div",{class:"row",style:{"flex-direction":"row-reverse"}},[A("div",{class:"row features"},[A("picture",null,[A("source",{type:"image/avif",srcset:oe}),A("source",{type:"image/webp",srcset:ae}),A("img",{style:{width:"36vmin"},src:qA,alt:""})]),A("h2",null,"\u5FEB\uFF0C\u4E3E\u91CD\u82E5\u8F7B"),A("p",null,"\u6781\u901F\u4E0B\u8F7D\uFF0C\u4E00\u952E\u5B89\u88C5\u4F53\u9A8C\uFF0C"),A("p",null,"\u4E0B\u8F7D\u5E94\u7528\u4ECE\u672A\u5982\u6B64\u7B80\u5355")]),A("picture",null,[A("source",{type:"image/avif",srcset:re}),A("source",{type:"image/webp",srcset:ce}),A("img",{style:{width:"54vw"},src:DA,alt:""})])],-1)),Ve=o(()=>A("div",{class:"row"},[A("div",{class:"row features"},[A("picture",null,[A("source",{type:"image/avif",srcset:ne}),A("source",{type:"image/webp",srcset:le}),A("img",{style:{width:"36vmin"},src:PA,alt:""})]),A("h2",null,"\u597D\uFF0C\u7CBE\u76CA\u6C42\u7CBE"),A("p",null,"\u793E\u533A\u7ECF\u8425\u7EF4\u62A4\uFF0C\u7CBE\u6311\u7EC6\u9009\uFF0C"),A("p",null,"\u4F7F\u7528\u5E94\u7528\u4ECE\u672A\u5982\u6B64\u8212\u5FC3")]),A("picture",null,[A("source",{type:"image/avif",srcset:de}),A("source",{type:"image/webp",srcset:Be}),A("img",{style:{width:"54vw"},src:xA,alt:""})])],-1)),Xe={class:"row",style:{"padding-bottom":"10vmin"}},Ye={class:"row P6th"},ke=o(()=>A("h2",null,[A("picture",null,[A("source",{type:"image/avif",srcset:ue}),A("source",{type:"image/webp",srcset:ve}),A("img",{style:{width:"6vmin"},src:MA,alt:""})]),a(" \u8BF7\u5C3D\u60C5\u4F53\u9A8C\u5427 ")],-1)),Te=o(()=>A("p",null,"The best way to predict future is to invent it !",-1)),ze={class:"row"},Se=a(" \u524D\u5F80\u4E0B\u8F7D\u6700\u65B0\u7248\u672C "),Oe={class:"row"},We=o(()=>A("picture",null,[A("source",{type:"image/avif",srcset:ge}),A("source",{type:"image/webp",srcset:Qe}),A("img",{style:{width:"8px","margin-right":"1vmin"},src:YA,alt:""})],-1)),Je=a(" \u52A0\u5165\u6211\u4EEC\u4E00\u540C\u6784\u5EFA Spark Store > "),Le=o(()=>A("picture",null,[A("source",{type:"image/avif",srcset:pe}),A("source",{type:"image/webp",srcset:Ee}),A("img",{style:{width:"46vw"},src:zA,alt:""})],-1)),Ze={setup(e){return G({title:"\u9996\u9875",titleTemplate:s=>`${s} - \u661F\u706B\u5E94\u7528\u5546\u5E97`}),(s,i)=>(W(),J(_,{class:"flex flex-center mainPage"},{default:n(()=>[A("div",fe,[A("div",we,[A("h1",he,[Ce,l(eA,{size:"2vmin",icon:"get_app"},{default:n(()=>[me]),_:1})]),Re,A("div",ye,[A("div",qe,[be,A("div",Fe,[De,He,A("div",Ie,[l(B,{size:"2vmin",padding:"1vmin 2.4vmin",color:"primary",style:{"margin-bottom":"2vmin"},to:"/download"},{default:n(()=>[Pe,Ke]),_:1}),l(B,{size:"2vmin",padding:"1vmin 2.4vmin",color:"white","text-color":"primary",to:"/download"},{default:n(()=>[Ue]),_:1})])])])])]),xe]),je,Ne,Me,Ve,A("div",Xe,[A("div",Ye,[ke,Te,A("div",ze,[l(B,{color:"black",style:{"margin-bottom":"2vmin"},to:"/download"},{default:n(()=>[Se]),_:1})]),A("div",Oe,[l(B,{flat:"",padding:"xs 0",ripple:!1},{default:n(()=>[We,Je]),_:1})])]),Le]),l($)]),_:1}))}};var it=O(Ze,[["__scopeId","data-v-00731377"]]);export{it as default};
