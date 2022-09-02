"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1948],{81948:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var n=a(5872),l=a.n(n),s=a(55786),i=a(61988),r=a(67294),u=a(4715),o=a(74448),d=a(11965);function h(t){const{data:e,formData:a,height:n,width:h,setDataMask:v,setFocusedFilter:c,unsetFocusedFilter:g,setFilterActive:f,filterState:p,inputRef:m}=t,{defaultValue:w}=a,[S,b]=(0,r.useState)(null!=w?w:[]),F=(0,r.useMemo)((()=>e.reduce(((t,e)=>{let{duration:a,name:n}=e;return{...t,[a]:n}}),{})),[JSON.stringify(e)]),M=t=>{const e=(0,s.Z)(t),[a]=e,n=a?F[a]:void 0,l={};a&&(l.time_grain_sqla=a),b(e),v({extraFormData:l,filterState:{label:n,value:e.length?e:null}})};(0,r.useEffect)((()=>{M(null!=w?w:[])}),[JSON.stringify(w)]),(0,r.useEffect)((()=>{var t;M(null!=(t=p.value)?t:[])}),[JSON.stringify(p.value)]);const Z=0===(e||[]).length?(0,i.t)("No data"):(0,i.tn)("%s option","%s options",e.length,e.length),k={};p.validateMessage&&(k.extra=(0,d.tZ)(o.Am,{status:p.validateStatus},p.validateMessage));const C=(e||[]).map((t=>{const{name:e,duration:a}=t;return{label:e,value:a}}));return(0,d.tZ)(o.un,{height:n,width:h},(0,d.tZ)(o.jp,l()({validateStatus:p.validateStatus},k),(0,d.tZ)(u.Ph,{allowClear:!0,value:S,placeholder:Z,onChange:M,onMouseEnter:c,onMouseLeave:g,ref:m,options:C,onDropdownVisibleChange:f})))}},74448:(t,e,a)=>{a.d(e,{un:()=>s,jp:()=>i,Am:()=>r});var n=a(51995),l=a(4591);const s=n.iK.div`
  min-height: ${t=>{let{height:e}=t;return e}}px;
  width: ${t=>{let{width:e}=t;return e}}px;
`,i=(0,n.iK)(l.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,r=n.iK.div`
  color: ${t=>{var e;let{theme:a,status:n="error"}=t;return null==(e=a.colors[n])?void 0:e.base}};
`}}]);
//# sourceMappingURL=624fa71d795e4ee3af1a.chunk.js.map