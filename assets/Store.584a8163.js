import{Q as m}from"./QScrollArea.d27debd2.js";import{u as h,Q as y}from"./use-meta.b84a7f6d.js";import{_ as w,r as o,w as l,o as g,q as x,y as b,v as n,a5 as S,u as O,n as P,d as c}from"./index.d94441d0.js";import{a as _}from"./index.2885cb15.js";import"./use-dark.2e0e715a.js";import"./QResizeObserver.b83da2f5.js";import"./dom.bb41fcd4.js";const Q={setup(B){const d=S(),s=O();h({title:"WEB\u5546\u5E97",titleTemplate:e=>`${e} - \u661F\u706B\u5E94\u7528\u5546\u5E97`});const p=o([]),i=o("https://store.deepinos.org/api/"),t=o(!0),r=o({});function f(){_.post(`${i.value}type/get_type_list`).then(e=>{e.data.data.forEach(a=>{r.value[a.orig_name]=a.type_id}),u(s.params)})}function u(e){e.hasOwnProperty("sort")&&(r.value.hasOwnProperty(e.sort)?_.post(`${i.value}application/get_application_list`,{size:1e4,type_id:r.value[e.sort]}).then(a=>{p.value=a.data.data.data,t.value=!0}):d.push("/Error404"))}return l(()=>s.params,async e=>{e.hasOwnProperty("sort")?t.value=!1:p.value=[],u(e)}),l(()=>s.path,async e=>{e.match("store")&&(e.match("sorts")||(t.value=!1,setTimeout(()=>{t.value=!0},500)))}),g(()=>{s.params.hasOwnProperty("sort")&&(t.value=!1),f()}),(e,a)=>{const v=P("router-view");return x(),b(y,{class:"flex storePage"},{default:n(()=>[c(m,{style:{width:"100%"},"thumb-style":{"z-index":2,"border-radius":"100px"},visible:!1},{default:n(()=>[c(v)]),_:1})]),_:1})}}};var L=w(Q,[["__scopeId","data-v-60bb3e56"]]);export{L as default};
