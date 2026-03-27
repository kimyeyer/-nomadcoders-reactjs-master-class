(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(26),r=n.n(i),l=n(14),a=n(1);const s=Object(c.createContext)({isDark:!0,toggleTheme:()=>{}});function d(){return Object(c.useContext)(s)}function h(e){let{children:t}=e;const[n,o]=Object(c.useState)(!0);return Object(a.jsx)(s.Provider,{value:{isDark:n,toggleTheme:()=>o(e=>!e)},children:t})}var p=n(4),b=n(17),x=n(7);const j="https://api.coinpaprika.com/v1";function u(){return fetch(`${j}/coins`).then(e=>e.json())}var g=n(27);const m=p.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,f=p.c.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,v=p.c.ul``,O=p.c.li`
  background-color: ${e=>e.theme.textColor};
  color: ${e=>e.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${e=>e.theme.accentColor};
    }
  }
`,y=p.c.h1`
  font-size: 48px;
  color: ${e=>e.theme.accentColor};
`,_=p.c.span`
  text-align: center;
  display: block;
`,k=p.c.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;var w=function(){const{isLoading:e,data:t}=Object(l.useQuery)("allCoins",u);return Object(a.jsxs)(m,{children:[Object(a.jsx)(g.a,{children:Object(a.jsx)("title",{children:"\ucf54\uc778"})}),Object(a.jsx)(f,{children:Object(a.jsx)(y,{children:"\ucf54\uc778"})}),e?Object(a.jsx)(_,{children:"Loading..."}):Object(a.jsx)(v,{children:null===t||void 0===t?void 0:t.slice(0,100).map(e=>Object(a.jsx)(O,{children:Object(a.jsxs)(b.b,{to:{pathname:`/${e.id}`,state:{name:e.name}},children:[Object(a.jsx)(k,{src:`https://cryptoicon-api.pages.dev/api/icon/${e.symbol.toLowerCase()}`}),e.name," \u2192"]})},e.id))})]})},C=n(47),$=n.n(C);var S=function(e){let{coinId:t}=e;const n=d(),{isLoading:c,data:o}=Object(l.useQuery)(["ohlcv",t],()=>function(e){return Math.floor(Date.now()/1e3),fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${e}`).then(e=>e.json())}(t),{});return Object(a.jsx)("div",{children:c?"Loading chart...":Object(a.jsx)($.a,{type:"candlestick",series:[{data:null===o||void 0===o?void 0:o.map(e=>({x:new Date(e.time_close),y:[e.open,e.high,e.low,e.close]}))}],options:{theme:{mode:n.isDark?"dark":"light"},chart:{type:"candlestick",height:350,width:500,toolbar:{show:!1},background:"transparent"},title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}}})})};const q=p.c.div`
  background: ${e=>e.theme.subBgColor};
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`,D=p.c.h3`
  font-size: 14px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
`,L=p.c.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,I=p.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,z=p.c.span`
  font-size: 13px;
  color: ${e=>e.theme.textColor};
`,U=p.c.span`
  font-size: 13px;
  font-weight: 600;

  color: ${e=>{let{positive:t}=e;return t?"#ef4444":"#2255ff"}};
`;var T=e=>{const{percent_change_1h:t,percent_change_1y:n,percent_change_6h:c,percent_change_7d:o,percent_change_12h:i,percent_change_15m:r,percent_change_24h:l,percent_change_30d:s,percent_change_30m:d}=e,h=[{label:"15m",value:r},{label:"30m",value:d},{label:"1h",value:t},{label:"6h",value:c},{label:"12h",value:i},{label:"24h",value:l},{label:"7d",value:o},{label:"30d",value:s},{label:"1y",value:n}];return Object(a.jsxs)(q,{children:[Object(a.jsx)(D,{children:"Performance"}),Object(a.jsx)(L,{children:h.map(e=>Object(a.jsxs)(I,{children:[Object(a.jsx)(z,{children:e.label}),Object(a.jsx)(U,{positive:e.value>=0,children:`${e.value.toFixed(2)}%`})]},e.label))})]})};const Q=p.c.h1`
  font-size: 48px;
  color: ${e=>e.theme.accentColor};
`,M=p.c.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`,P=p.c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    span:first-child {
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`,B=p.c.p`
  margin: 20px 0px;
`,A=p.c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`,F=p.c.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${e=>e.isActive?e.theme.accentColor:e.theme.textColor};
   a {
    padding: 7px 0px;
    display: block;
  }
`,H=p.c.span`
  text-align: center;
  display: block;
`,J=p.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,R=p.c.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,E=p.c.button`
    position: absolute;
    left: 10px;
    top: 10px;  
    width: 30px;
    height: 30px;
    font-size: 20px;
    border-radius: 15px;
    border: none;
    background-color: #747d8c;
    color: #a4b0be;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #a4b0be;
        color: #747d8c;
    }
`;var X=function(){var e,t,n,c,o,i,r,s,d;const{coinId:h}=Object(x.g)(),{state:p}=Object(x.f)(),u=Object(x.h)("/:coinId/price"),m=Object(x.h)("/:coinId/chart"),{isLoading:f,data:v}=Object(l.useQuery)(["info",h],()=>function(e){return fetch(`${j}/coins/${e}`).then(e=>e.json())}(h)),{isLoading:O,data:y}=Object(l.useQuery)(["tickers",h],()=>function(e){return fetch(`${j}/tickers/${e}`).then(e=>e.json())}(h),{}),_=f||O;return Object(a.jsxs)(J,{children:[Object(a.jsx)(g.a,{children:Object(a.jsx)("title",{children:null!==p&&void 0!==p&&p.name?p.name:_?"Loading...":null===v||void 0===v?void 0:v.name})}),Object(a.jsx)(E,{children:Object(a.jsx)(b.b,{to:"/",children:"\u2190"})}),Object(a.jsx)(R,{children:Object(a.jsx)(Q,{children:null!==p&&void 0!==p&&p.name?p.name:_?"Loading...":null===v||void 0===v?void 0:v.name})}),_?Object(a.jsx)(H,{children:"Loading..."}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(M,{children:[Object(a.jsxs)(P,{children:[Object(a.jsx)("span",{children:"Rank:"}),Object(a.jsx)("span",{children:null===v||void 0===v?void 0:v.rank})]}),Object(a.jsxs)(P,{children:[Object(a.jsx)("span",{children:"Symbol:"}),Object(a.jsxs)("span",{children:["$",null===v||void 0===v?void 0:v.symbol]})]}),Object(a.jsxs)(P,{children:[Object(a.jsx)("span",{children:"Price:"}),Object(a.jsx)("span",{children:null===y||void 0===y?void 0:y.quotes.USD.price.toFixed(2)})]})]}),Object(a.jsx)(B,{children:null===v||void 0===v?void 0:v.description}),Object(a.jsxs)(M,{children:[Object(a.jsxs)(P,{children:[Object(a.jsx)("span",{children:"Total Suply:"}),Object(a.jsx)("span",{children:null===y||void 0===y?void 0:y.total_supply})]}),Object(a.jsxs)(P,{children:[Object(a.jsx)("span",{children:"Max Supply:"}),Object(a.jsx)("span",{children:null===y||void 0===y?void 0:y.max_supply})]})]}),Object(a.jsxs)(A,{children:[Object(a.jsx)(F,{isActive:null!==m,children:Object(a.jsx)(b.b,{to:`/${h}/chart`,children:"Chart"})}),Object(a.jsx)(F,{isActive:null!==u,children:Object(a.jsx)(b.b,{to:`/${h}/price`,children:"Price"})})]}),Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{path:"/:coinId/price",children:Object(a.jsx)(T,{percent_change_1h:null!==(e=null===y||void 0===y?void 0:y.quotes.USD.percent_change_1h)&&void 0!==e?e:0,percent_change_1y:null!==(t=null===y||void 0===y?void 0:y.quotes.USD.percent_change_1y)&&void 0!==t?t:0,percent_change_6h:null!==(n=null===y||void 0===y?void 0:y.quotes.USD.percent_change_6h)&&void 0!==n?n:0,percent_change_7d:null!==(c=null===y||void 0===y?void 0:y.quotes.USD.percent_change_7d)&&void 0!==c?c:0,percent_change_12h:null!==(o=null===y||void 0===y?void 0:y.quotes.USD.percent_change_12h)&&void 0!==o?o:0,percent_change_15m:null!==(i=null===y||void 0===y?void 0:y.quotes.USD.percent_change_15m)&&void 0!==i?i:0,percent_change_24h:null!==(r=null===y||void 0===y?void 0:y.quotes.USD.percent_change_24h)&&void 0!==r?r:0,percent_change_30d:null!==(s=null===y||void 0===y?void 0:y.quotes.USD.percent_change_30d)&&void 0!==s?s:0,percent_change_30m:null!==(d=null===y||void 0===y?void 0:y.quotes.USD.percent_change_30m)&&void 0!==d?d:0})}),Object(a.jsx)(x.a,{path:"/:coinId/chart",children:Object(a.jsx)(S,{coinId:h})})]})]})]})};var G=()=>Object(a.jsx)(b.a,{children:Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{path:"/:coinId",children:Object(a.jsx)(X,{})}),Object(a.jsx)(x.a,{path:"/",children:Object(a.jsx)(w,{})})]})}),K=n(48);const N={bgColor:"#2f3640",subBgColor:"#111b28",textColor:"#f5f6fa",accentColor:"#9c88ff"},V={bgColor:"#f5f6fa",subBgColor:"#e3e3e3",textColor:"#2f3640",accentColor:"#9c88ff"},W=p.b`
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
`,Y=p.c.label`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: inline-block;
  width: 60px;
  height: 30px;
`,Z=p.c.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #4f46e5;
  }

  &:checked + span:before {
    transform: translateX(30px);
  }
`,ee=p.c.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #ccc;
  border-radius: 999px;
  transition: 0.2s;

  &:before {
    content: "";
    position: absolute;
    height: 24px;
    width: 24px;
    left: 3px;
    top: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.2s;
  }
`;function te(e){let{checked:t,onToggle:n}=e;return Object(a.jsxs)(Y,{children:[Object(a.jsx)(Z,{type:"checkbox",checked:t,onChange:n}),Object(a.jsx)(ee,{})]})}var ne=function(){const{isDark:e,toggleTheme:t}=d();return Object(a.jsxs)(p.a,{theme:e?N:V,children:[Object(a.jsx)(W,{}),Object(a.jsx)(G,{}),Object(a.jsx)(K.ReactQueryDevtools,{initialIsOpen:!0}),Object(a.jsx)(te,{checked:e,onToggle:t})]})};const ce=new l.QueryClient;r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(l.QueryClientProvider,{client:ce,children:Object(a.jsx)(h,{children:Object(a.jsx)(ne,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f07ae008.chunk.js.map