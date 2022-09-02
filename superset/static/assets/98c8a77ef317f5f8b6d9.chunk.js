"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4572],{24572:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var l=a(5872),n=a.n(l),s=a(55786),u=a(88889),r=a(61988),i=a(67294),o=a(4715),h=a(74448),d=a(11965);function c(t){const{data:e,formData:a,height:l,width:c,setDataMask:v,setFocusedFilter:g,unsetFocusedFilter:p,setFilterActive:f,filterState:m,inputRef:w}=t,{defaultValue:b}=a,[S,Z]=(0,i.useState)(null!=b?b:[]),F=t=>{const e=(0,s.Z)(t);Z(e);const a={};e.length&&(a.granularity_sqla=e[0]),v({extraFormData:a,filterState:{value:e.length?e:null}})};(0,i.useEffect)((()=>{F(null!=b?b:null)}),[JSON.stringify(b)]),(0,i.useEffect)((()=>{var t;F(null!=(t=m.value)?t:null)}),[JSON.stringify(m.value)]);const M=(e||[]).filter((t=>t.dtype===u.Z.TEMPORAL)),k=0===M.length?(0,r.t)("No time columns"):(0,r.tn)("%s option","%s options",M.length,M.length),C={};m.validateMessage&&(C.extra=(0,d.tZ)(h.Am,{status:m.validateStatus},m.validateMessage));const x=M.map((t=>{const{column_name:e,verbose_name:a}=t;return{label:null!=a?a:e,value:e}}));return(0,d.tZ)(h.un,{height:l,width:c},(0,d.tZ)(h.jp,n()({validateStatus:m.validateStatus},C),(0,d.tZ)(o.Ph,{allowClear:!0,value:S,placeholder:k,onChange:F,onMouseEnter:g,onMouseLeave:p,ref:w,options:x,onDropdownVisibleChange:f})))}},74448:(t,e,a)=>{a.d(e,{un:()=>s,jp:()=>u,Am:()=>r});var l=a(51995),n=a(4591);const s=l.iK.div`
  min-height: ${t=>{let{height:e}=t;return e}}px;
  width: ${t=>{let{width:e}=t;return e}}px;
`,u=(0,l.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,r=l.iK.div`
  color: ${t=>{var e;let{theme:a,status:l="error"}=t;return null==(e=a.colors[l])?void 0:e.base}};
`}}]);
//# sourceMappingURL=98c8a77ef317f5f8b6d9.chunk.js.map