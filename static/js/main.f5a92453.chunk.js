(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(26),r=n.n(i),a=n(14),l=n(1);const s=Object(c.createContext)({isDark:!0,toggleTheme:()=>{}});function d(){return Object(c.useContext)(s)}function h(e){let{children:t}=e;const[n,o]=Object(c.useState)(!0);return Object(l.jsx)(s.Provider,{value:{isDark:n,toggleTheme:()=>o(e=>!e)},children:t})}var p=n(4),b=n(17),u=n(7);const x="https://api.coinpaprika.com/v1";function j(){return fetch(`${x}/coins`).then(e=>e.json().catch(()=>g))}const g=[{id:"btc-bitcoin",name:"Bitcoin",symbol:"BTC",rank:1,is_new:!1,is_active:!0,type:"coin"},{id:"eth-ethereum",name:"Ethereum",symbol:"ETH",rank:2,is_new:!1,is_active:!0,type:"coin"}],m={id:"btc-bitcoin",name:"Bitcoin",symbol:"BTC",rank:1,is_new:!1,is_active:!0,type:"coin",description:"Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.",message:"<string>",open_source:!0,hardware_wallet:!0,started_at:"2009-01-03T00:00:00Z",development_status:"Working product",proof_type:"Proof of work",org_structure:"Decentralized",hash_algorithm:"SHA256",first_data_at:"2018-10-03T11:48:19Z",last_data_at:"2019-05-03T11:00:00"},v={id:"btc-bitcoin",name:"Bitcoin",symbol:"BTC",rank:1,circulating_supply:17007062,total_supply:17007062,max_supply:21e6,beta_value:.735327,first_data_at:"2010-11-14T07:20:41Z",last_updated:"2018-11-14T07:20:41Z",quotes:{USD:{price:5162.15941296,volume_24h:7304207651.1585,volume_24h_change_24h:-2.5,market_cap:91094433242,market_cap_change_24h:1.6,percent_change_15m:0,percent_change_30m:0,percent_change_1h:0,percent_change_6h:0,percent_change_12h:-.09,percent_change_24h:1.59,percent_change_7d:.28,percent_change_30d:27.39,percent_change_1y:-37.99,ath_price:20089,ath_date:"2017-12-17T12:19:00Z",percent_from_price_ath:-74.3}}};var _=n(27);const f=p.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,O=p.c.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,y=p.c.ul``,k=p.c.li`
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
`,w=p.c.h1`
  font-size: 48px;
  color: ${e=>e.theme.accentColor};
`,C=p.c.span`
  text-align: center;
  display: block;
`,$=p.c.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;var S=function(){const{isLoading:e,data:t}=Object(a.useQuery)("allCoins",j);return Object(l.jsxs)(f,{children:[Object(l.jsx)(_.a,{children:Object(l.jsx)("title",{children:"\ucf54\uc778"})}),Object(l.jsx)(O,{children:Object(l.jsx)(w,{children:"\ucf54\uc778"})}),e?Object(l.jsx)(C,{children:"Loading..."}):Object(l.jsx)(y,{children:null===t||void 0===t?void 0:t.slice(0,100).map(e=>Object(l.jsx)(k,{children:Object(l.jsxs)(b.b,{to:{pathname:`/${e.id}`,state:{name:e.name}},children:[Object(l.jsx)($,{src:`https://cryptoicon-api.pages.dev/api/icon/${e.symbol.toLowerCase()}`}),e.name," \u2192"]})},e.id))})]})},q=n(47),D=n.n(q);var T=function(e){let{coinId:t}=e;const n=d(),{isLoading:c,data:o}=Object(a.useQuery)(["ohlcv",t],()=>function(e){return Math.floor(Date.now()/1e3),fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${e}`).then(e=>e.json())}(t),{});return Object(l.jsx)("div",{children:c?"Loading chart...":Object(l.jsx)(D.a,{type:"candlestick",series:[{data:null===o||void 0===o?void 0:o.map(e=>({x:new Date(e.time_close),y:[e.open,e.high,e.low,e.close]}))}],options:{theme:{mode:n.isDark?"dark":"light"},chart:{type:"candlestick",height:350,width:500,toolbar:{show:!1},background:"transparent"},title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}}})})};const z=p.c.div`
  background: ${e=>e.theme.subBgColor};
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`,I=p.c.h3`
  font-size: 14px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
`,L=p.c.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,B=p.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,U=p.c.span`
  font-size: 13px;
  color: ${e=>e.theme.textColor};
`,Q=p.c.span`
  font-size: 13px;
  font-weight: 600;

  color: ${e=>{let{positive:t}=e;return t?"#ef4444":"#2255ff"}};
`;var P=e=>{const{percent_change_1h:t,percent_change_1y:n,percent_change_6h:c,percent_change_7d:o,percent_change_12h:i,percent_change_15m:r,percent_change_24h:a,percent_change_30d:s,percent_change_30m:d}=e,h=[{label:"15m",value:r},{label:"30m",value:d},{label:"1h",value:t},{label:"6h",value:c},{label:"12h",value:i},{label:"24h",value:a},{label:"7d",value:o},{label:"30d",value:s},{label:"1y",value:n}];return Object(l.jsxs)(z,{children:[Object(l.jsx)(I,{children:"Performance"}),Object(l.jsx)(L,{children:h.map(e=>Object(l.jsxs)(B,{children:[Object(l.jsx)(U,{children:e.label}),Object(l.jsx)(Q,{positive:e.value>=0,children:`${e.value.toFixed(2)}%`})]},e.label))})]})};const M=p.c.h1`
  font-size: 48px;
  color: ${e=>e.theme.accentColor};
`,Z=p.c.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`,A=p.c.div`
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
`,H=p.c.p`
  margin: 20px 0px;
`,E=p.c.div`
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
`,J=p.c.span`
  text-align: center;
  display: block;
`,R=p.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,W=p.c.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,X=p.c.button`
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
`;var G=function(){var e,t,n,c,o,i,r,s,d,h;const{coinId:p}=Object(u.g)(),{state:j}=Object(u.f)(),g=Object(u.h)("/:coinId/price"),f=Object(u.h)("/:coinId/chart"),{isLoading:O,data:y}=Object(a.useQuery)(["info",p],()=>function(e){return fetch(`${x}/coins/${e}`).then(e=>e.json()).catch(()=>m)}(p)),{isLoading:k,data:w}=Object(a.useQuery)(["tickers",p],()=>function(e){return fetch(`${x}/tickers/${e}`).then(e=>e.json()).catch(()=>v)}(p),{});console.log(w);const C=O||k;return Object(l.jsxs)(R,{children:[Object(l.jsx)(_.a,{children:Object(l.jsx)("title",{children:null!==j&&void 0!==j&&j.name?j.name:C?"Loading...":null===y||void 0===y?void 0:y.name})}),Object(l.jsx)(X,{children:Object(l.jsx)(b.b,{to:"/",children:"\u2190"})}),Object(l.jsx)(W,{children:Object(l.jsx)(M,{children:null!==j&&void 0!==j&&j.name?j.name:C?"Loading...":null===y||void 0===y?void 0:y.name})}),C?Object(l.jsx)(J,{children:"Loading..."}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(Z,{children:[Object(l.jsxs)(A,{children:[Object(l.jsx)("span",{children:"Rank:"}),Object(l.jsx)("span",{children:null===y||void 0===y?void 0:y.rank})]}),Object(l.jsxs)(A,{children:[Object(l.jsx)("span",{children:"Symbol:"}),Object(l.jsxs)("span",{children:["$",null===y||void 0===y?void 0:y.symbol]})]}),Object(l.jsxs)(A,{children:[Object(l.jsx)("span",{children:"Price:"}),Object(l.jsx)("span",{children:null===w||void 0===w||null===(e=w.quotes)||void 0===e?void 0:e.USD.price.toFixed(2)})]})]}),Object(l.jsx)(H,{children:null===y||void 0===y?void 0:y.description}),Object(l.jsxs)(Z,{children:[Object(l.jsxs)(A,{children:[Object(l.jsx)("span",{children:"Total Suply:"}),Object(l.jsx)("span",{children:null===w||void 0===w?void 0:w.total_supply})]}),Object(l.jsxs)(A,{children:[Object(l.jsx)("span",{children:"Max Supply:"}),Object(l.jsx)("span",{children:null===w||void 0===w?void 0:w.max_supply})]})]}),Object(l.jsxs)(E,{children:[Object(l.jsx)(F,{isActive:null!==f,children:Object(l.jsx)(b.b,{to:`/${p}/chart`,children:"Chart"})}),Object(l.jsx)(F,{isActive:null!==g,children:Object(l.jsx)(b.b,{to:`/${p}/price`,children:"Price"})})]}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/:coinId/price",children:Object(l.jsx)(P,{percent_change_1h:null!==(t=null===w||void 0===w?void 0:w.quotes.USD.percent_change_1h)&&void 0!==t?t:0,percent_change_1y:null!==(n=null===w||void 0===w?void 0:w.quotes.USD.percent_change_1y)&&void 0!==n?n:0,percent_change_6h:null!==(c=null===w||void 0===w?void 0:w.quotes.USD.percent_change_6h)&&void 0!==c?c:0,percent_change_7d:null!==(o=null===w||void 0===w?void 0:w.quotes.USD.percent_change_7d)&&void 0!==o?o:0,percent_change_12h:null!==(i=null===w||void 0===w?void 0:w.quotes.USD.percent_change_12h)&&void 0!==i?i:0,percent_change_15m:null!==(r=null===w||void 0===w?void 0:w.quotes.USD.percent_change_15m)&&void 0!==r?r:0,percent_change_24h:null!==(s=null===w||void 0===w?void 0:w.quotes.USD.percent_change_24h)&&void 0!==s?s:0,percent_change_30d:null!==(d=null===w||void 0===w?void 0:w.quotes.USD.percent_change_30d)&&void 0!==d?d:0,percent_change_30m:null!==(h=null===w||void 0===w?void 0:w.quotes.USD.percent_change_30m)&&void 0!==h?h:0})}),Object(l.jsx)(u.a,{path:"/:coinId/chart",children:Object(l.jsx)(T,{coinId:p})})]})]})]})};var K=()=>Object(l.jsx)(b.a,{basename:"https://kimyeyer.github.io/-nomadcoders-reactjs-master-class",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/:coinId",children:Object(l.jsx)(G,{})}),Object(l.jsx)(u.a,{path:"/",children:Object(l.jsx)(S,{})})]})}),N=n(48);const V={bgColor:"#2f3640",subBgColor:"#111b28",textColor:"#f5f6fa",accentColor:"#9c88ff"},Y={bgColor:"#f5f6fa",subBgColor:"#e3e3e3",textColor:"#2f3640",accentColor:"#9c88ff"},ee=p.b`
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
`,te=p.c.label`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: inline-block;
  width: 60px;
  height: 30px;
`,ne=p.c.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #4f46e5;
  }

  &:checked + span:before {
    transform: translateX(30px);
  }
`,ce=p.c.span`
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
`;function oe(e){let{checked:t,onToggle:n}=e;return Object(l.jsxs)(te,{children:[Object(l.jsx)(ne,{type:"checkbox",checked:t,onChange:n}),Object(l.jsx)(ce,{})]})}var ie=function(){const{isDark:e,toggleTheme:t}=d();return Object(l.jsxs)(p.a,{theme:e?V:Y,children:[Object(l.jsx)(ee,{}),Object(l.jsx)(K,{}),Object(l.jsx)(N.ReactQueryDevtools,{initialIsOpen:!0}),Object(l.jsx)(oe,{checked:e,onToggle:t})]})};const re=new a.QueryClient;r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(a.QueryClientProvider,{client:re,children:Object(l.jsx)(h,{children:Object(l.jsx)(ie,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f5a92453.chunk.js.map