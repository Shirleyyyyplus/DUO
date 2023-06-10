import{Q as g}from"./QItemLabel.d797dbce.js";import{Q as le,a as N,b as D}from"./QList.961a0366.js";import{_ as ie,az as ue,J as de,aP as ce,r as V,c as s,w as F,o as re,M as w,V as T,f as t,R as n,aR as me,F as U,S as d,U as u,X,W as ge,aS as pe,Y,$ as H,O as fe,m as I,aT as be,aB as ve,aU as he,Q as _e,aV as ye,aA as Ce}from"./index.c1f9df61.js";import{Q as Se,a as ke,b as Qe}from"./QBar.f570072f.js";import{Q as $e}from"./QSelect.9912b287.js";import{C as De}from"./ClosePopup.f2a4bb7c.js";import{u as Ve}from"./use-quasar.03141881.js";import{a as M}from"./index.2885cb15.js";import{u as we}from"./vue-i18n.runtime.esm-bundler.76c89422.js";import"./selection.a9e35a2a.js";import"./QMenu.83f168f9.js";import"./rtl.b51694b1.js";import"./format.a33550d6.js";const Be=ue({name:"BinStock",data(){return{}},setup(){const e=de();ce();const l=Ve(),p=V(0),m=V({}),v=V(!1),B=V([]),{t:o}=we(),h=s({get:()=>e.state.fabchange.fab1}),A=s({get:()=>e.state.fabchange.fab2}),K=s({get:()=>e.state.fabchange.fab3}),Z=s({get:()=>e.state.fabchange.fab4}),E=s({get:()=>e.state.screenchange.screenscroll}),L=s({get:()=>e.state.loginauth.authin}),x=s({get:()=>e.state.loginauth.login_name}),_=s({get:()=>e.state.loginauth.operator}),y=s({get:()=>e.state.settings.openid}),C=s({get:()=>e.state.langchange.lang}),f=s({get:()=>e.state.settings.server}),j=s({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),ee=s({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),ae=s({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),te=s({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),ne=s({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),S=s({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),k=s({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),P=s({get:()=>e.state.scanchanged.bar_scanned}),r=s({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),Q=s({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),G=s({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function J(a){if(a!==null){var i=f.value.split(":"),c=a.split(":");return i[0]!==c[0]?i[0]+":"+c[1]:c}else return null}function $(a){S.value=[],r.value=f.value+"stock/bin/?goods_code=",R(a)}function R(a){M.get(r.value+a,{headers:{"Content-Type":'application/json, charset="utf-8"',token:y.value,language:C.value,operator:_.value}}).then(i=>{if(i.data.detail)l.notify({type:"negative",message:o("notice.mobile_scan.notice1")});else{var c=[];S.value.forEach(b=>{c.push(b)}),i.data.results.forEach(b=>{c.push(b)}),S.value=c,G.value=J(i.data.previous),Q.value=J(i.data.next)}}).catch(i=>{l.notify({type:"negative",message:o("notice.mobile_scan.notice3")})})}function oe(a){m.value=JSON.parse(JSON.stringify(a)),Object.assign(m.value,{move_qty:"",move_to_bin:""}),v.value=!0}function z(){v.value=!1}function se(){m.value.move_to_bin===""?l.notify({type:"negative",message:"Please Enter the Bin Name"}):(r.value=f.value+"stock/bin/",M.post(r.value+m.value.id+"/",m.value,{headers:{"Content-Type":"application/json",token:y.value,language:C.value,operator:_.value}}).then(a=>{z(),$(""),a.data.detail||l.notify({message:"Success Move To Bin"})}).catch(a=>{l.notify({message:a.detail})}))}return F(P,(a,i)=>{k.value==="GOODS"&&$("")}),F(E,(a,i)=>{a===1?Q.value!==null&&(r.value=Q.value,p.value=1):p.value=0}),F(p,(a,i)=>{a===1&&(L.value==="0"?l.notify({type:"negative",message:o("notice.mobile_userlogin.notice9")}):R(""))}),re(()=>{k.value==="GOODS"?$(j.value):(k.value="GOODS",$(""))}),{t:o,fab1:h,fab2:A,fab3:K,fab4:Z,screenscroll:E,authin:L,login_name:x,openid:y,operator:_,lang:C,requestauth:p,baseurl:f,apiurl:r,apiurlnext:Q,apiurlprevious:G,scandata:j,datadetail:ee,tablelist:S,asndata:ae,dndata:te,bindata:ne,scanmode:k,bar_scanned:P,submitdata:m,dialogForm:v,dataSubmit:oe,cancelDataSubmit:z,submitData:se,options:B,moveerror:o("notice.mobile_asn.notice11"),filterFn(a,i,c){if(a.length<2){c();return}i(()=>{const b=a.toLowerCase();r.value=f.value+"binset/?bin_name__icontains=",M.get(r.value+a,{headers:{"Content-Type":'application/json, charset="utf-8"',token:y.value,language:C.value,operator:_.value}}).then(O=>{if(!O.data.detail){var W=[];O.data.results.forEach(q=>{W.push(q.bin_name)}),B.value=W.filter(q=>q.toLowerCase().indexOf(b)>-1)}}).catch(O=>{l.notify({type:"negative",message:o("notice.mobile_scan.notice3")})})})}}}}),Oe={style:{float:"right",padding:"15px 15px 15px 0"}};function qe(e,l,p,m,v,B){return w(),T(U,null,[t(le,{bordered:"",padding:""},{default:n(()=>[t(N,null,{default:n(()=>[t(D,null,{default:n(()=>[t(g,{overline:""},{default:n(()=>[d(u(e.$t("notice.mobile_asn.notice6")),1)]),_:1}),t(g,{caption:""},{default:n(()=>[d(u(e.$t("notice.mobile_asn.notice7")),1)]),_:1})]),_:1})]),_:1}),t(X,{spaced:""}),(w(!0),T(U,null,ge(e.tablelist,(o,h)=>(w(),T(U,{key:h},[t(N,null,{default:n(()=>[t(D,{onClick:A=>e.dataSubmit(o)},{default:n(()=>[t(g,null,{default:n(()=>[d(u(o.goods_code),1)]),_:2},1024),t(g,{caption:"",lines:"2"},{default:n(()=>[d(u(e.$t("notice.mobile_asn.notice3"))+u(o.goods_desc),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(D,{side:"",top:""},{default:n(()=>[t(g,{caption:""},{default:n(()=>[d(u(e.$t("notice.mobile_asn.notice9"))+u(o.bin_name),1)]),_:2},1024),t(g,{caption:""},{default:n(()=>[d(u(e.$t("notice.mobile_asn.notice10"))+u(o.goods_qty),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),H(t(X,{spaced:"",inset:"item"},null,512),[[Ce,h+1!==e.tablelist.length]])],64))),128))]),_:1}),t(me,{modelValue:e.dialogForm,"onUpdate:modelValue":l[4]||(l[4]=o=>e.dialogForm=o)},{default:n(()=>[t(pe,{class:"shadow-24"},{default:n(()=>[t(Se,{class:"bg-light-blue-10 text-white rounded-borders",style:{height:"50px"}},{default:n(()=>[Y("div",null,u(e.submitdata.goods_code),1),t(ke),H((w(),fe(I,{dense:"",flat:"",icon:"close"},{default:n(()=>[t(Qe,null,{default:n(()=>[d(u(e.$t("index.close")),1)]),_:1})]),_:1})),[[De]])]),_:1}),t(be,{class:"scroll"},{default:n(()=>[t(ve,{dense:"",outlined:"",square:"",debounce:"500",modelValue:e.submitdata.move_qty,"onUpdate:modelValue":l[2]||(l[2]=o=>e.submitdata.move_qty=o),modelModifiers:{number:!0},type:"number",label:e.$t("stock.view_stocklist.goods_qty"),style:{"margin-bottom":"5px"},onClick:l[3]||(l[3]=o=>e.submitdata.move_qty=""),rules:[o=>o&&o>0||e.moveerror]},{before:n(()=>[t($e,{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",modelValue:e.submitdata.move_to_bin,"onUpdate:modelValue":l[1]||(l[1]=o=>e.submitdata.move_to_bin=o),label:e.$t("warehouse.view_binset.bin_name"),options:e.options,onFilter:e.filterFn,style:{width:"150px"}},he({"no-option":n(()=>[t(N,null,{default:n(()=>[t(D,{class:"text-grey"},{default:n(()=>[d(" No results ")]),_:1})]),_:1})]),_:2},[e.submitdata.move_to_bin?{name:"append",fn:n(()=>[t(_e,{name:"cancel",onClick:l[0]||(l[0]=ye(o=>e.submitdata.move_to_bin="",["stop"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","label","options","onFilter"])]),_:1},8,["modelValue","label","rules"])]),_:1}),Y("div",Oe,[t(I,{color:"white","text-color":"black",style:{"margin-right":"25px"},onClick:e.cancelDataSubmit},{default:n(()=>[d(u(e.$t("cancel")),1)]),_:1},8,["onClick"]),t(I,{color:"primary",onClick:e.submitData},{default:n(()=>[d(u(e.$t("submit")),1)]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"])],64)}var Re=ie(Be,[["render",qe]]);export{Re as default};