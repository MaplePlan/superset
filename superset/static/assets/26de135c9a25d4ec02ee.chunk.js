"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6947],{62350:(e,t,l)=>{l.r(t),l.d(t,{datasetReducer:()=>K,default:()=>S});var a=l(67294),r=l(11965),o=l(51995),i=l(61988),n=l(94301);const s=(0,o.iK)(n.XJ)`
  p {
    width: ${e=>{let{theme:t}=e;return 115*t.gridUnit}}px;
  }
`;var u;!function(e){e[e.selectDatabase=0]="selectDatabase",e[e.selectSchema=1]="selectSchema",e[e.selectTable=2]="selectTable",e[e.changeDataset=3]="changeDataset"}(u||(u={}));const c=o.iK.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
`,d=o.iK.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
`,h=(0,o.iK)(d)`
  width: ${e=>{let{theme:t}=e;return 80*t.gridUnit}}px;
  height: auto;
`,g=(0,o.iK)(d)`
  height: auto;
  display: flex;
  flex: 1 0 auto;
  width: auto;
`,m=o.iK.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,b=(0,o.iK)(m)`
  flex: 1 0 auto;
`,p=(0,o.iK)(m)`
  flex: 1 0 auto;
  height: auto;
`,f=(0,o.iK)(m)`
  flex: 0 0 auto;
  height: ${e=>{let{theme:t}=e;return 16*t.gridUnit}}px;
`,x=o.iK.div`
  flex: 0 0 auto;
  height: ${e=>{let{theme:t}=e;return 16*t.gridUnit}}px;
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
`,y=o.iK.div`
  width: ${e=>{let{theme:t}=e;return 80*t.gridUnit}}px;
  height: 100%;
  border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
`,Z=o.iK.div`
  width: 100%;
`,v=o.iK.div`
  border-left: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  color: ${e=>{let{theme:t}=e;return t.colors.success.base}};
`,w=o.iK.div`
  height: ${e=>{let{theme:t}=e;return 16*t.gridUnit}}px;
  width: 100%;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  color: ${e=>{let{theme:t}=e;return t.colors.info.base}};
`;function $(e){let{header:t,leftPanel:l,datasetPanel:a,rightPanel:o,footer:i}=e;return(0,r.tZ)(c,null,t&&(0,r.tZ)(x,null,t),(0,r.tZ)(b,null,(0,r.tZ)(h,null,l&&(0,r.tZ)(y,null,l)),(0,r.tZ)(g,null,(0,r.tZ)(p,null,a&&(0,r.tZ)(Z,null,a),o&&(0,r.tZ)(v,null,o)),(0,r.tZ)(f,null,i&&(0,r.tZ)(w,null,i)))))}function K(e,t){const l={...e||{}};switch(t.type){case u.selectDatabase:return{...l,...t.payload,schema:null,table_name:null};case u.selectSchema:return{...l,...t.payload,table_name:null};case u.selectTable:return{...l,...t.payload};case u.changeDataset:return{...l,[t.payload.name]:t.payload.value};default:return null}}function S(){return(0,r.tZ)($,{header:(0,r.tZ)("div",null,"Header"),leftPanel:(0,r.tZ)(a.Fragment,null,(0,r.tZ)(n.x3,{image:"empty-table.svg",title:(0,i.t)("No database tables found"),description:(0,i.t)("Try selecting a different schema")})),datasetPanel:(0,r.tZ)(s,{image:"empty-dataset.svg",title:(0,i.t)("Select dataset source"),description:(0,r.tZ)(a.Fragment,null,(0,i.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),(0,r.tZ)("span",{role:"button",onClick:()=>{window.location.href="/superset/sqllab"},tabIndex:0},(0,i.t)("create dataset from SQL query")),(0,i.t)(" to open SQL Lab. From there you can save the query as a dataset."))}),footer:(0,r.tZ)("div",null,"Footer")})}}}]);
//# sourceMappingURL=26de135c9a25d4ec02ee.chunk.js.map