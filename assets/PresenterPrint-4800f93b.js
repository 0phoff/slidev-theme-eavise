import{d,i as _,a as p,u as h,b as u,c as m,e as v,f as n,g as e,t as o,h as a,F as f,r as g,n as x,j as y,o as i,k as b,l as k,m as N,p as w,q as P,_ as S}from"./index-94405986.js";import{N as V}from"./NoteDisplay-466154bb.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=e("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),h(`
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
`),u({title:`Notes - ${m.title}`});const r=v(()=>y.slice(0,-1).map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(i(),n("div",{id:"page-root",style:x(a(P))},[e("div",j,[e("div",L,[e("h1",T,o(a(m).title),1),e("div",B,o(new Date().toLocaleString()),1)]),(i(!0),n(f,null,g(a(r),(t,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",C,[e("div",D,[e("div",H,o(t==null?void 0:t.no)+"/"+o(a(b)),1),k(" "+o(t==null?void 0:t.title)+" ",1),z])]),N(V,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(i(),n("hr",F)):w("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/home/runner/work/slidev-theme-eavise/slidev-theme-eavise/node_modules/.pnpm/@slidev+client@0.40.14_postcss@8.4.23_react-dom@16.14.0_react@16.14.0_vite@4.3.2/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
