(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{53:function(e,t,r){"use strict";r.r(t);var o=r(0),c=r.n(o),n=r(12),a=r.n(n),i=r(19),l=r(16),s=r(5),d=r(31);let b=function(e){return e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE",e}({});const u=Object(s.b)({key:"categoryList",default:[b.TO_DO,b.DOING,b.DONE]}),j=Object(s.b)({key:"toDo",default:[]}),f=Object(s.b)({key:"category",default:b.TO_DO}),O=Object(s.c)({key:"toDoSelector",get:e=>{let{get:t}=e;const r=t(j),o=t(f);return r.filter(e=>e.category===o)}});var g=r(3);var h=()=>{const e=Object(s.f)(j),t=Object(s.e)(f),{register:r,handleSubmit:o,setValue:c}=Object(d.a)();return Object(g.jsxs)("form",{style:{display:"flex",flexDirection:"column"},onSubmit:o(r=>{let{toDo:o}=r;e(e=>[{text:o,category:t,id:Date.now()},...e]),c("toDo","")}),children:[Object(g.jsx)("input",{...r("toDo",{required:"Please write a To Do"}),placeholder:"Write a to do"}),Object(g.jsx)("button",{children:"Add"})]})};const p=e=>e.replace(/_/g," ");var m=e=>{let{text:t,category:r,id:o}=e;const c=Object(s.f)(j),n=Object(s.e)(u),a=e=>{const{currentTarget:{name:r}}=e;c(e=>{const c=e.findIndex(e=>e.id===o),n={text:t,id:o,category:r};return[...e.slice(0,c),n,...e.slice(c+1)]})};return Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{children:t}),n.filter(e=>e!==r).map(e=>Object(g.jsx)("button",{name:e,onClick:a,children:p(e)},e))]})};var y=function(){const e=Object(o.useRef)(!1),[t,r]=Object(s.d)(j),c=Object(s.e)(O),[n,a]=Object(s.d)(u),[i,l]=Object(s.d)(f),[d,b]=Object(o.useState)("");return Object(o.useEffect)(()=>{const t=localStorage.getItem("toDos"),o=localStorage.getItem("categories");if(t)try{r(JSON.parse(t))}catch(c){console.error(c)}if(o)try{const e=JSON.parse(o);Array.isArray(e)&&a(e)}catch(c){console.error(c)}e.current=!0},[a,r]),Object(o.useEffect)(()=>{if(e.current)try{localStorage.setItem("toDos",JSON.stringify(t)),localStorage.setItem("categories",JSON.stringify(n))}catch(r){console.error(r)}},[t,n]),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"To Dos"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"text",placeholder:"\uc0c8 \uce74\ud14c\uace0\ub9ac \uc774\ub984",value:d,onChange:e=>{b(e.currentTarget.value)}}),Object(g.jsx)("button",{type:"button",onClick:()=>{const e=d.trim();e&&(n.includes(e)||(a(t=>[...t,e]),l(e)),b(""))},children:"\uce74\ud14c\uace0\ub9ac \ucd94\uac00"})]}),Object(g.jsx)("select",{value:i,onChange:e=>{l(e.currentTarget.value)},children:n.map(e=>Object(g.jsx)("option",{value:e,children:e.replace(/_/g," ")},e))}),Object(g.jsx)(h,{}),null===c||void 0===c?void 0:c.map(e=>Object(g.jsx)(m,{...e},e.id))]})};const x=l.b`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans 3', sans-serif;
  background-color:${e=>e.theme.bgColor};
  color:${e=>e.theme.textColor};
  line-height:1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;var v=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(x,{}),Object(g.jsx)(y,{})]})};const D=new i.QueryClient;a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(s.a,{children:Object(g.jsx)(i.QueryClientProvider,{client:D,children:Object(g.jsx)(l.a,{theme:{bgColor:"#f4f5fb",bgSubColor:"#ffffff",textColor:"#1a1a1a",textSubColor:"#666666",accentColor:"#9c88ff",gradient:"linear-gradient(135deg, #e889d6 0%, #9c88ff 50%, #7b6cf6 100%)"},children:Object(g.jsx)(v,{})})})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d8cde95b.chunk.js.map