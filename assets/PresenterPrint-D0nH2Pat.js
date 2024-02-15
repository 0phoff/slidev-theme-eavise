import{d as _,u as d,a as p,c as m,b as h,r as u,o as a,e as n,f as e,t as o,g as r,F as v,h as f,n as g,i as x,j as y,k as b,l as k,m as N,_ as w}from"./index-DBCaengf.js";import{N as P}from"./NoteDisplay-CwqcC0cE.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=e("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>u.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(a(),n("div",{id:"page-root",style:g(r(x))},[e("div",V,[e("div",L,[e("h1",S,o(r(m).title),1),e("div",T,o(new Date().toLocaleString()),1)]),(a(!0),n(v,null,f(i.value,(t,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",D,[e("div",H,o(t==null?void 0:t.no)+"/"+o(r(y)),1),b(" "+o(t==null?void 0:t.title)+" ",1),j])]),k(P,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/runner/work/slidev-theme-eavise/slidev-theme-eavise/node_modules/.pnpm/@slidev+client@0.47.5_postcss@8.4.35_typescript@5.3.3_vite@5.1.1/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
