import{g as i}from"../index.js";import{r as f}from"./json-dc1e3358.js";function c(t,r){for(var e=0;e<r.length;e++){const n=r[e];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in t)){const s=Object.getOwnPropertyDescriptor(n,o);s&&Object.defineProperty(t,o,s.get?s:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,u;function g(){if(u)return a;u=1;var t=f();a=r,r.displayName="jsonp",r.aliases=[];function r(e){e.register(t),e.languages.jsonp=e.languages.extend("json",{punctuation:/[{}[\]();,.]/}),e.languages.insertBefore("jsonp","punctuation",{function:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/})}return a}var p=g();const j=i(p),F=c({__proto__:null,default:j},[p]);export{F as j};
