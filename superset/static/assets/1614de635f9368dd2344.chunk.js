"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8464],{8464:(t,e,l)=>{l.r(e),l.d(e,{default:()=>v});var a=l(5872),n=l.n(a),u=l(78580),s=l.n(u),i=l(55786),r=l(10581),o=l(61988),h=l(67294),c=l(4715),d=l(74448),g=l(11965);function v(t){var e;const{data:l,formData:a,height:u,width:v,setDataMask:m,setFocusedFilter:p,unsetFocusedFilter:f,setFilterActive:b,filterState:w,inputRef:S}=t,{defaultValue:Z,multiSelect:F}=a,[k,C]=(0,h.useState)(null!=Z?Z:[]),x=t=>{const e=(0,i.Z)(t);C(e);const l={};e.length&&(l.interactive_groupby=e),m({filterState:{value:e.length?e:null},extraFormData:l})};(0,h.useEffect)((()=>{x(w.value)}),[JSON.stringify(w.value),F]),(0,h.useEffect)((()=>{x(null!=Z?Z:null)}),[JSON.stringify(Z),F]);const y=(0,i.Z)(a.groupby).map(r.Z),D=null!=(e=y[0])&&e.length?y[0]:null,_=D?l.filter((t=>s()(D).call(D,t.column_name))):l,A=l?_:[],K=0===A.length?(0,o.t)("No columns"):(0,o.tn)("%s option","%s options",A.length,A.length),M={};w.validateMessage&&(M.extra=(0,g.tZ)(d.Am,{status:w.validateStatus},w.validateMessage));const N=A.map((t=>{const{column_name:e,verbose_name:l}=t;return{label:null!=l?l:e,value:e}}));return(0,g.tZ)(d.un,{height:u,width:v},(0,g.tZ)(d.jp,n()({validateStatus:w.validateStatus},M),(0,g.tZ)(c.Ph,{allowClear:!0,value:k,placeholder:K,mode:F?"multiple":void 0,onChange:x,onBlur:f,onFocus:p,ref:S,options:N,onDropdownVisibleChange:b})))}},74448:(t,e,l)=>{l.d(e,{un:()=>u,jp:()=>s,Am:()=>i});var a=l(51995),n=l(4591);const u=a.iK.div`
  min-height: ${t=>{let{height:e}=t;return e}}px;
  width: ${t=>{let{width:e}=t;return e}}px;
`,s=(0,a.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,i=a.iK.div`
  color: ${t=>{var e;let{theme:l,status:a="error"}=t;return null==(e=l.colors[a])?void 0:e.base}};
`}}]);
//# sourceMappingURL=1614de635f9368dd2344.chunk.js.map