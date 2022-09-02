"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9483],{89483:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(51995),o=a(67294),l=a(73375),i=a(69856),n=a(74448),s=a(11965);const u=(0,r.iK)(n.un)`
  overflow-x: auto;
`,d=r.iK.div`
  padding: 2px;
  & > span,
  & > span:hover {
    border: 2px solid transparent;
    display: inline-block;
    border: ${e=>{var t;let{theme:a,validateStatus:r}=e;return r&&`2px solid ${null==(t=a.colors[r])?void 0:t.base}`}};
  }
  &:focus {
    & > span {
      border: 2px solid
        ${e=>{var t;let{theme:a,validateStatus:r}=e;return r?null==(t=a.colors[r])?void 0:t.base:a.colors.primary.base}};
      outline: 0;
      box-shadow: 0 0 0 2px
        ${e=>{let{validateStatus:t}=e;return t?"rgba(224, 67, 85, 12%)":"rgba(32, 167, 201, 0.2)"}};
    }
  }
`;function v(e){var t;const{setDataMask:a,setFocusedFilter:r,unsetFocusedFilter:n,setFilterActive:v,width:p,height:h,filterState:c,inputRef:b}=e,m=(0,o.useCallback)((e=>{const t=e&&e!==i.vM;a({extraFormData:t?{time_range:e}:{},filterState:{value:t?e:void 0}})}),[a]);return(0,o.useEffect)((()=>{m(c.value)}),[c.value]),null!=(t=e.formData)&&t.inView?(0,s.tZ)(u,{width:p,height:h},(0,s.tZ)(d,{tabIndex:-1,ref:b,validateStatus:c.validateStatus,onFocus:r,onBlur:n,onMouseEnter:r,onMouseLeave:n},(0,s.tZ)(l.Z,{value:c.value||i.vM,name:"time_range",onChange:m,type:c.validateStatus,onOpenPopover:()=>v(!0),onClosePopover:()=>v(!1)}))):null}},74448:(e,t,a)=>{a.d(t,{un:()=>l,jp:()=>i,Am:()=>n});var r=a(51995),o=a(4591);const l=r.iK.div`
  min-height: ${e=>{let{height:t}=e;return t}}px;
  width: ${e=>{let{width:t}=e;return t}}px;
`,i=(0,r.iK)(o.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,n=r.iK.div`
  color: ${e=>{var t;let{theme:a,status:r="error"}=e;return null==(t=a.colors[r])?void 0:t.base}};
`}}]);
//# sourceMappingURL=6410a6bfa0a6986e6940.chunk.js.map