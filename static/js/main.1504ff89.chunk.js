(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{73:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(20),r=n.n(o),a=n(15),l=n(4),s=n(18),d=n(7);const h="https://api.coinpaprika.com/v1";function p(){return fetch(`${h}/coins`).then(e=>e.json().catch(()=>b))}const b=[{id:"btc-bitcoin",name:"Bitcoin",symbol:"BTC",rank:1,is_new:!1,is_active:!0,type:"coin"},{id:"eth-ethereum",name:"Ethereum",symbol:"ETH",rank:2,is_new:!1,is_active:!0,type:"coin"}],u={id:"btc-bitcoin",name:"Bitcoin",symbol:"BTC",rank:1,is_new:!1,is_active:!0,type:"coin",description:"Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.",message:"<string>",open_source:!0,hardware_wallet:!0,started_at:"2009-01-03T00:00:00Z",development_status:"Working product",proof_type:"Proof of work",org_structure:"Decentralized",hash_algorithm:"SHA256",first_data_at:"2018-10-03T11:48:19Z",last_data_at:"2019-05-03T11:00:00"},x={id:"btc-bitcoin",name:"Bitcoin",symbol:"BTC",rank:1,circulating_supply:17007062,total_supply:17007062,max_supply:21e6,beta_value:.735327,first_data_at:"2010-11-14T07:20:41Z",last_updated:"2018-11-14T07:20:41Z",quotes:{USD:{price:5162.15941296,volume_24h:7304207651.1585,volume_24h_change_24h:-2.5,market_cap:91094433242,market_cap_change_24h:1.6,percent_change_15m:0,percent_change_30m:0,percent_change_1h:0,percent_change_6h:0,percent_change_12h:-.09,percent_change_24h:1.59,percent_change_7d:.28,percent_change_30d:27.39,percent_change_1y:-37.99,ath_price:20089,ath_date:"2017-12-17T12:19:00Z",percent_from_price_ath:-74.3}}};var j=n(28),g=n(1);const m=l.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,f=l.c.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,v=l.c.ul``,_=l.c.li`
  background-color: ${e=>e.theme.bgSubColor};
  color: ${e=>e.theme.textColor};
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
      color: ${e=>e.theme.textSubColor};
    }
  }
`,O=l.c.h1`
  font-size: 48px;
  color: ${e=>e.theme.accentColor};
`,y=l.c.span`
  text-align: center;
  display: block;
`,k=l.c.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;var w=function(){const{isLoading:e,data:t}=Object(a.useQuery)("allCoins",p);return Object(g.jsxs)(m,{children:[Object(g.jsx)(j.a,{children:Object(g.jsx)("title",{children:"\ucf54\uc778"})}),Object(g.jsx)(f,{children:Object(g.jsx)(O,{children:"\ucf54\uc778"})}),e?Object(g.jsx)(y,{children:"Loading..."}):Object(g.jsx)(v,{children:null===t||void 0===t?void 0:t.slice(0,100).map(e=>Object(g.jsx)(_,{children:Object(g.jsxs)(s.b,{to:{pathname:`/${e.id}`,state:{name:e.name}},children:[Object(g.jsx)(k,{src:`https://cryptoicon-api.pages.dev/api/icon/${e.symbol.toLowerCase()}`}),e.name," \u2192"]})},e.id))})]})},C=n(49),S=n.n(C),$=n(12);const q=Object($.b)({key:"isDark",default:!1});var D=function(e){let{coinId:t}=e;const n=Object($.c)(q),{isLoading:c,data:i}=Object(a.useQuery)(["ohlcv",t],()=>function(e){return Math.floor(Date.now()/1e3),fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${e}`).then(e=>e.json())}(t),{});return Object(g.jsx)("div",{children:c?"Loading chart...":Object(g.jsx)(S.a,{type:"candlestick",series:[{data:null===i||void 0===i?void 0:i.map(e=>({x:new Date(e.time_close),y:[e.open,e.high,e.low,e.close]}))}],options:{theme:{mode:n?"dark":"light"},chart:{type:"candlestick",height:350,width:500,toolbar:{show:!1},background:"transparent"},title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}}})})};const T=l.c.div`
  background: ${e=>e.theme.bgSubColor};
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`,z=l.c.h3`
  font-size: 14px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
`,I=l.c.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,L=l.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`,U=l.c.span`
  font-size: 13px;
  color: ${e=>e.theme.textColor};
`,B=l.c.span`
  font-size: 13px;
  font-weight: 600;

  color: ${e=>{let{positive:t}=e;return t?"#ef4444":"#2255ff"}};
`;var Q=e=>{const{percent_change_1h:t,percent_change_1y:n,percent_change_6h:c,percent_change_7d:i,percent_change_12h:o,percent_change_15m:r,percent_change_24h:a,percent_change_30d:l,percent_change_30m:s}=e,d=[{label:"15m",value:r},{label:"30m",value:s},{label:"1h",value:t},{label:"6h",value:c},{label:"12h",value:o},{label:"24h",value:a},{label:"7d",value:i},{label:"30d",value:l},{label:"1y",value:n}];return Object(g.jsxs)(T,{children:[Object(g.jsx)(z,{children:"Performance"}),Object(g.jsx)(I,{children:d.map(e=>Object(g.jsxs)(L,{children:[Object(g.jsx)(U,{children:e.label}),Object(g.jsx)(B,{positive:e.value>=0,children:`${e.value.toFixed(2)}%`})]},e.label))})]})};const M=l.c.h1`
  font-size: 48px;
  color: ${e=>e.theme.accentColor};
`,P=l.c.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`,Z=l.c.div`
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
`,A=l.c.p`
  margin: 20px 0px;
`,H=l.c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`,E=l.c.span`
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
`,F=l.c.span`
  text-align: center;
  display: block;
`,J=l.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,R=l.c.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,W=l.c.button`
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
`;var X=function(){var e,t,n,c,i,o,r,l,p,b;const{coinId:m}=Object(d.g)(),{state:f}=Object(d.f)(),v=Object(d.h)("/:coinId/price"),_=Object(d.h)("/:coinId/chart"),{isLoading:O,data:y}=Object(a.useQuery)(["info",m],()=>function(e){return fetch(`${h}/coins/${e}`).then(e=>e.json()).catch(()=>u)}(m)),{isLoading:k,data:w}=Object(a.useQuery)(["tickers",m],()=>function(e){return fetch(`${h}/tickers/${e}`).then(e=>e.json()).catch(()=>x)}(m),{}),C=O||k;return Object(g.jsxs)(J,{children:[Object(g.jsx)(j.a,{children:Object(g.jsx)("title",{children:null!==f&&void 0!==f&&f.name?f.name:C?"Loading...":null===y||void 0===y?void 0:y.name})}),Object(g.jsx)(W,{children:Object(g.jsx)(s.b,{to:"/",children:"\u2190"})}),Object(g.jsx)(R,{children:Object(g.jsx)(M,{children:null!==f&&void 0!==f&&f.name?f.name:C?"Loading...":null===y||void 0===y?void 0:y.name})}),C?Object(g.jsx)(F,{children:"Loading..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(P,{children:[Object(g.jsxs)(Z,{children:[Object(g.jsx)("span",{children:"Rank:"}),Object(g.jsx)("span",{children:null===y||void 0===y?void 0:y.rank})]}),Object(g.jsxs)(Z,{children:[Object(g.jsx)("span",{children:"Symbol:"}),Object(g.jsxs)("span",{children:["$",null===y||void 0===y?void 0:y.symbol]})]}),Object(g.jsxs)(Z,{children:[Object(g.jsx)("span",{children:"Price:"}),Object(g.jsx)("span",{children:null===w||void 0===w||null===(e=w.quotes)||void 0===e?void 0:e.USD.price.toFixed(2)})]})]}),Object(g.jsx)(A,{children:null===y||void 0===y?void 0:y.description}),Object(g.jsxs)(P,{children:[Object(g.jsxs)(Z,{children:[Object(g.jsx)("span",{children:"Total Suply:"}),Object(g.jsx)("span",{children:null===w||void 0===w?void 0:w.total_supply})]}),Object(g.jsxs)(Z,{children:[Object(g.jsx)("span",{children:"Max Supply:"}),Object(g.jsx)("span",{children:null===w||void 0===w?void 0:w.max_supply})]})]}),Object(g.jsxs)(H,{children:[Object(g.jsx)(E,{isActive:null!==_,children:Object(g.jsx)(s.b,{to:`/${m}/chart`,children:"Chart"})}),Object(g.jsx)(E,{isActive:null!==v,children:Object(g.jsx)(s.b,{to:`/${m}/price`,children:"Price"})})]}),Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{path:"/:coinId/price",children:Object(g.jsx)(Q,{percent_change_1h:null!==(t=null===w||void 0===w?void 0:w.quotes.USD.percent_change_1h)&&void 0!==t?t:0,percent_change_1y:null!==(n=null===w||void 0===w?void 0:w.quotes.USD.percent_change_1y)&&void 0!==n?n:0,percent_change_6h:null!==(c=null===w||void 0===w?void 0:w.quotes.USD.percent_change_6h)&&void 0!==c?c:0,percent_change_7d:null!==(i=null===w||void 0===w?void 0:w.quotes.USD.percent_change_7d)&&void 0!==i?i:0,percent_change_12h:null!==(o=null===w||void 0===w?void 0:w.quotes.USD.percent_change_12h)&&void 0!==o?o:0,percent_change_15m:null!==(r=null===w||void 0===w?void 0:w.quotes.USD.percent_change_15m)&&void 0!==r?r:0,percent_change_24h:null!==(l=null===w||void 0===w?void 0:w.quotes.USD.percent_change_24h)&&void 0!==l?l:0,percent_change_30d:null!==(p=null===w||void 0===w?void 0:w.quotes.USD.percent_change_30d)&&void 0!==p?p:0,percent_change_30m:null!==(b=null===w||void 0===w?void 0:w.quotes.USD.percent_change_30m)&&void 0!==b?b:0})}),Object(g.jsx)(d.a,{path:"/:coinId/chart",children:Object(g.jsx)(D,{coinId:m})})]})]})]})};var G=()=>Object(g.jsx)(s.a,{children:Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{path:"/",exact:!0,children:Object(g.jsx)(w,{})}),Object(g.jsx)(d.a,{path:"/:coinId",children:Object(g.jsx)(X,{})})]})}),K=n(50);const N={bgColor:"#12121a",bgSubColor:"#1a1a24",textColor:"#f1f1f5",textSubColor:"#a1a1aa",accentColor:"#9c88ff",gradient:"linear-gradient(90deg, #7a6cf0 0%, #5b4bd6  50%, #3f369c 100%)"},V={bgColor:"#f4f5fb",bgSubColor:"#ffffff",textColor:"#1a1a1a",textSubColor:"#666666",accentColor:"#9c88ff",gradient:"linear-gradient(135deg, #e889d6 0%, #9c88ff 50%, #7b6cf6 100%)"},Y=l.c.div`
    padding: 0px 20px;
    width: 100vw;
    height: 5vh;
    min-height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background: ${e=>e.theme.gradient};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`,ee=l.c.label`
  position: absolute;
  display: inline-block;
  width: 48px;
  height: 24px;
`,te=l.c.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #ddd;
  }

  &:checked + span:before {
    transform: translateX(24px);
  }
`,ne=l.c.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #ddd;
  border-radius: 999px;
  transition: 0.2s;

  &:before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    left: 3px;
    top: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.2s;
  }
`;function ce(e){let{checked:t,onToggle:n}=e;return Object(g.jsxs)(ee,{children:[Object(g.jsx)(te,{type:"checkbox",checked:t,onChange:n}),Object(g.jsx)(ne,{})]})}var ie=()=>{const e=Object($.d)(q),t=Object($.c)(q);return Object(g.jsx)(Y,{children:Object(g.jsx)(ce,{checked:t,onToggle:()=>e(e=>!e)})})};const oe=l.b`
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
`;var re=function(){const e=Object($.c)(q);return Object(g.jsxs)(l.a,{theme:e?N:V,children:[Object(g.jsx)(oe,{}),Object(g.jsx)(ie,{}),Object(g.jsx)(G,{}),Object(g.jsx)(K.ReactQueryDevtools,{initialIsOpen:!0})]})};const ae=new a.QueryClient;r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)($.a,{children:Object(g.jsx)(a.QueryClientProvider,{client:ae,children:Object(g.jsx)(re,{})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.1504ff89.chunk.js.map