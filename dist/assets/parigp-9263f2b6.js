import{g as f}from"../index.js";function g(r,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in r)){const i=Object.getOwnPropertyDescriptor(t,o);i&&Object.defineProperty(r,o,i.get?i:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var p,a;function s(){if(a)return p;a=1,p=r,r.displayName="parigp",r.aliases=[];function r(n){n.languages.parigp={comment:/\/\*[\s\S]*?\*\/|\\\\.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"/,greedy:!0},keyword:function(){var e=["breakpoint","break","dbg_down","dbg_err","dbg_up","dbg_x","forcomposite","fordiv","forell","forpart","forprime","forstep","forsubgroup","forvec","for","iferr","if","local","my","next","return","until","while"];return e=e.map(function(t){return t.split("").join(" *")}).join("|"),RegExp("\\b(?:"+e+")\\b")}(),function:/\b\w(?:[\w ]*\w)?(?= *\()/,number:{pattern:/((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,lookbehind:!0},operator:/\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,punctuation:/[\[\]{}().,:;|]/}}return p}var u=s();const d=f(u),l=g({__proto__:null,default:d},[u]);export{l as p};
