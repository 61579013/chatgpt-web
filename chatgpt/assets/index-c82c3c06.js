import{c as P,u as K,a as Q,_ as w,l as W,t as B,k as Y,m as X,n as Z}from"./index-64de634d.js";import{f as M,h as O,k as b,i as ee,J as te,K as se,L as ae,y as ne,M as oe,q as le,r as G,m as ie}from"./naive-ui@2.34.3_vue@3.2.47-b44668a5.js";import{d as L,j,f as S,E as C,K as R,H as e,k as l,b as s,L as a,F,N as J,G as D}from"./@vue_runtime-core@3.2.47-d9a89b1b.js";import{r as v,u as t,a as re}from"./@vue_reactivity@3.2.47-41cada1d.js";import{J as r,n as A}from"./@vue_shared@3.2.47-1870027e.js";import"./@vue_runtime-dom@3.2.47-1f3621cd.js";import"./@iconify_vue@4.1.0_vue@3.2.47-cce582b6.js";import"./pinia@2.0.33_hmuptsblhheur2tugfgucj7gc4-b06c6206.js";import"./vue-demi@0.13.11_vue@3.2.47-71ba0ef2.js";import"./crypto-js@4.1.1-5d2574b3.js";import"./@traptitech_markdown-it-katex@3.6.0-183244bb.js";import"./katex@0.16.4-d49885c5.js";import"./vue-router@4.1.6_vue@3.2.47-becc39a8.js";import"./axios@1.3.4-aba6f0e0.js";import"./@vueuse_core@9.13.0_vue@3.2.47-804c0f63.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-31ba0d1d.js";import"./vue-i18n@9.2.2_vue@3.2.47-f2ff64de.js";import"./@intlify_shared@9.2.2-6f62a0ce.js";import"./@intlify_core-base@9.2.2-e46b7bcb.js";import"./@intlify_message-compiler@9.2.2-e451351e.js";import"./@intlify_devtools-if@9.2.2-c61c979f.js";import"./vooks@0.2.12_vue@3.2.47-6d2a1cf4.js";import"./evtd@0.2.4-b614532e.js";import"./seemly@0.3.6-5600174a.js";import"./vdirs@0.1.8_vue@3.2.47-4519c5fd.js";import"./treemate@0.3.11-25c27bff.js";import"./vueuc@0.4.51_vue@3.2.47-56f5039e.js";import"./@css-render_vue3-ssr@0.15.12_vue@3.2.47-9765db09.js";import"./@juggle_resize-observer@3.4.0-41516555.js";import"./css-render@0.15.12-57b1a53f.js";import"./@emotion_hash@0.8.0-8a8e73f6.js";import"./lodash-es@4.17.21-cabc0acd.js";import"./date-fns@2.29.3-975a2d8f.js";import"./@css-render_plugin-bem@0.15.12_css-render@0.15.12-9dde7ffe.js";function ce(){const g=new Date,c=g.getDate(),u=g.getMonth()+1;return`${g.getFullYear()}-${u}-${c}`}const ue={class:"p-4 space-y-5 min-h-[200px]"},de={class:"space-y-6"},pe={class:"flex items-center"},me={class:"text-red-600"},fe={class:"text-red-600"},ve={class:"text-green-600"},_e={class:"text-green-600"},ge={class:"text-green-600"},he=e("div",{class:"flex items-center hidden"},[e("span",null,[l("🧑‍🤝‍🧑 邀请您的朋友注册您和他都可以获得 "),e("span",{class:"text-green-600"},"10"),l(" 次免费次数。您的邀请链接为（可直接点击复制）："),e("a",{href:"",class:"text-green-600"},"https://xxx.com/auth?type=register&invite=NjI2MA"),l(" （⚠ 若系统检测到您自己邀请自己，则不会发送奖励 ）")])],-1),ye={class:"flex items-center space-x-4"},xe=e("span",{class:"flex-shrink-0 w-[100px]"},"用户昵称",-1),ke={class:"w-[200px]"},be={class:"flex-shrink-0 w-[100px]"},we={class:"flex flex-wrap items-center gap-4"},Ce={class:"flex items-center space-x-4"},Ne=e("span",{class:"flex-shrink-0 w-[100px]"},"设置主题",-1),$e={class:"flex flex-wrap items-center gap-4"},Se={class:"flex items-center space-x-4"},Ie=e("span",{class:"flex-shrink-0 w-[100px]"},"设置语言",-1),Ue={class:"flex flex-wrap items-center gap-4"},ze=L({__name:"General",setup(g){const c=P(),u=K(),{isMobile:h}=Q(),p=M(),o=v({}),f=v(!1);async function _(){try{f.value=!0;const{data:n}=await W();o.value=n}finally{f.value=!1}}j(()=>{_()});const I=S(()=>c.theme),U=S(()=>u.userInfo),N=v(U.value.name??""),m=S({get(){return c.language},set(n){c.setLanguage(n)}}),y=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],x=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"}];function T(n){u.updateUserInfo(n),p.success(B("common.success"))}function E(){const n=ce(),d=localStorage.getItem("chatStorage")||"{}",i=JSON.stringify(JSON.parse(d),null,2),k=new Blob([i],{type:"application/json"}),z=URL.createObjectURL(k),$=document.createElement("a");$.href=z,$.download=`chat-store_${n}.json`,document.body.appendChild($),$.click(),document.body.removeChild($)}function V(n){const d=n.target;if(!d||!d.files)return;const i=d.files[0];if(!i)return;const k=new FileReader;k.onload=()=>{try{const z=JSON.parse(k.result);localStorage.setItem("chatStorage",JSON.stringify(z)),p.success(B("common.success")),location.reload()}catch{p.error(B("common.invalidFileFormat"))}},k.readAsText(i)}function q(){localStorage.removeItem("chatStorage"),location.reload()}function H(){const n=document.getElementById("fileInput");n&&n.click()}return(n,d)=>(C(),R("div",ue,[e("div",de,[e("div",pe,[e("span",null,[l("🌼 尊敬的 "),e("span",me,r(t(U).email),1),l(" 您好，您当前为 "),e("span",fe,r(o.value.level),1),l("，今日剩余可用对话次数为："),e("span",ve,r(o.value.freeRemainingTimes+o.value.cardRemainingTimes),1),l(" 次，其中包括免费次数 "),e("span",_e,r(o.value.freeRemainingTimes),1),l(" 次，次卡套餐 "),e("span",ge,r(o.value.cardRemainingTimes),1),l(" 次（💡 若在过程中出现无结果或异常，将不会扣除您的次数）")])]),he,e("div",ye,[xe,e("div",ke,[s(t(O),{value:N.value,"onUpdate:value":d[0]||(d[0]=i=>N.value=i),placeholder:""},null,8,["value"])]),s(t(b),{size:"tiny",text:"",type:"primary",onClick:d[1]||(d[1]=i=>T({name:N.value}))},{default:a(()=>[l(r(n.$t("common.save")),1)]),_:1})]),e("div",{class:A(["flex items-center space-x-4",t(h)&&"items-start"])},[e("span",be,r(n.$t("setting.chatHistory")),1),e("div",we,[s(t(b),{size:"small",onClick:E},{icon:a(()=>[s(t(w),{icon:"ri:download-2-fill"})]),default:a(()=>[l(" "+r(n.$t("common.export")),1)]),_:1}),e("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:V},null,32),s(t(b),{size:"small",onClick:H},{icon:a(()=>[s(t(w),{icon:"ri:upload-2-fill"})]),default:a(()=>[l(" "+r(n.$t("common.import")),1)]),_:1}),s(t(ee),{placement:"bottom",onPositiveClick:q},{trigger:a(()=>[s(t(b),{size:"small"},{icon:a(()=>[s(t(w),{icon:"ri:close-circle-line"})]),default:a(()=>[l(" "+r(n.$t("common.clear")),1)]),_:1})]),default:a(()=>[l(" "+r(n.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),e("div",Ce,[Ne,e("div",$e,[(C(),R(F,null,J(y,i=>s(t(b),{key:i.key,size:"small",type:i.key===t(I)?"primary":void 0,onClick:k=>t(c).setTheme(i.key)},{icon:a(()=>[s(t(w),{icon:i.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),e("div",Se,[Ie,e("div",Ue,[s(t(te),{style:{width:"140px"},value:t(m),options:x,onUpdateValue:d[2]||(d[2]=i=>t(c).setLanguage(i))},null,8,["value"])])])])]))}}),Te={class:"p-4 space-y-4"},Be={class:"items-center clear"},Re={class:"flex items-center space-x-4"},De={class:"flex-1"},Le=L({__name:"About",setup(g){const c=M(),u=v(""),h=S(()=>o.value||!u.value||u.value.trim()===""),p=v({website:"",register:""}),o=v(!1);async function f(){try{o.value=!0;const{data:m}=await Y();p.value=m}finally{o.value=!1}}const _=v(null),I=v();async function U(){try{o.value=!0;const{data:m}=await X();I.value=m}finally{o.value=!1}}const N=async()=>{await Z(u.value).then(m=>{var y;m.status==="Success"?(c.success(m.message),location.reload()):((y=_.value)==null||y.focus(),c.error(m.message))})};return j(()=>{U(),f()}),(m,y)=>(C(),D(t(oe),{show:o.value},{default:a(()=>[e("div",Te,[s(t(se),{"x-gap":"12",cols:2},{default:a(()=>[(C(!0),R(F,null,J(I.value,(x,T)=>(C(),D(t(ae),null,{default:a(()=>[s(t(ne),{class:A({"mt-2":T>1}),title:x.name,hoverable:"",size:"medium"},{default:a(()=>[e("div",null,r(x.price)+"元",1)]),_:2},1032,["class","title"])]),_:2},1024))),256))]),_:1}),e("div",Be,[e("span",null,"🌼 请联系客服QQ ："+r(p.value.website.qq)+" 购买卡密并在下面进行核销",1)]),e("div",Re,[e("div",De,[s(t(O),{ref_key:"cardNoRef",ref:_,value:u.value,"onUpdate:value":y[0]||(y[0]=x=>u.value=x),placeholder:"卡密"},null,8,["value"])]),s(t(b),{type:"success",disabled:t(h),onClick:N},{default:a(()=>[l(" 核销 ")]),_:1},8,["disabled"])])])]),_:1},8,["show"]))}}),Ge={class:"ml-2"},Me={class:"min-h-[100px]"},Oe=e("span",{class:"ml-2"},"套餐",-1),yt=L({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(g,{emit:c}){const u=g,h=v("General"),p=S({get(){return u.visible},set(o){c("update:visible",o)}});return(o,f)=>(C(),D(t(ie),{show:t(p),"onUpdate:show":f[1]||(f[1]=_=>re(p)?p.value=_:null),title:"个人中心","auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:a(()=>[e("div",null,[s(t(le),{value:h.value,"onUpdate:value":f[0]||(f[0]=_=>h.value=_),type:"line",animated:""},{default:a(()=>[s(t(G),{name:"General",tab:"General"},{tab:a(()=>[s(t(w),{class:"text-lg",icon:"ri:file-user-line"}),e("span",Ge,r(o.$t("setting.general")),1)]),default:a(()=>[e("div",Me,[s(ze)])]),_:1}),s(t(G),{name:"Config",tab:"Config"},{tab:a(()=>[s(t(w),{class:"text-lg",icon:"ri:list-settings-line"}),Oe]),default:a(()=>[s(Le)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{yt as default};