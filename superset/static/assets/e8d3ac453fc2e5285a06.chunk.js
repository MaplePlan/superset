"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6693],{96693:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),l=n(63475),c=n(99381),a=n(11965);function u(e){const{height:t,width:n,echartOptions:u,setDataMask:s,labelMap:i,groupby:h,selectedValues:o,formData:d}=e,f=(0,r.useCallback)((e=>{if(!d.emitFilter)return;const t=e.map((e=>i[e]));s({extraFormData:{filters:0===e.length?[]:h.map(((e,n)=>{const r=t.map((e=>e[n]));return null==r?{col:e,op:"IS NULL"}:{col:e,op:"IN",val:r}}))},filterState:{value:t.length?t:null,selectedValues:e.length?e:null}})}),[h,i,s,o]),p=(0,c.C0)(e,f);return(0,a.tZ)(l.Z,{height:t,width:n,echartOptions:u,eventHandlers:p,selectedValues:o})}},63475:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(78580),l=n.n(r),c=n(67294),a=n(51995),u=n(29027),s=n(11965);const i=a.iK.div`
  height: ${e=>{let{height:t}=e;return t}};
  width: ${e=>{let{width:t}=e;return t}};
`;function h(e,t){let{width:n,height:r,echartOptions:a,eventHandlers:h,zrEventHandlers:o,selectedValues:d={}}=e;const f=(0,c.useRef)(null),p=(0,c.useRef)(),g=(0,c.useMemo)((()=>Object.keys(d)||[]),[d]),v=(0,c.useRef)([]);(0,c.useImperativeHandle)(t,(()=>({getEchartInstance:()=>p.current}))),(0,c.useEffect)((()=>{f.current&&(p.current||(p.current=(0,u.S1)(f.current)),Object.entries(h||{}).forEach((e=>{var t,n;let[r,l]=e;null==(t=p.current)||t.off(r),null==(n=p.current)||n.on(r,l)})),Object.entries(o||{}).forEach((e=>{var t,n;let[r,l]=e;null==(t=p.current)||t.getZr().off(r),null==(n=p.current)||n.getZr().on(r,l)})),p.current.setOption(a,!0))}),[a,h,o]),(0,c.useEffect)((()=>{p.current&&(p.current.dispatchAction({type:"downplay",dataIndex:v.current.filter((e=>!l()(g).call(g,e)))}),g.length&&p.current.dispatchAction({type:"highlight",dataIndex:g}),v.current=g)}),[g]);const b=(0,c.useCallback)((e=>{let{width:t,height:n}=e;p.current&&p.current.resize({width:t,height:n})}),[]);return(0,c.useEffect)((()=>{b({width:n,height:r})}),[]),(0,c.useLayoutEffect)((()=>{b({width:n,height:r})}),[n,r,b]),(0,s.tZ)(i,{ref:f,height:r,width:n})}const o=(0,c.forwardRef)(h)},99381:(e,t,n)=>{n.d(t,{C0:()=>u});var r=n(78580),l=n.n(r);const c=(e,t)=>n=>{let{name:r}=n;const c=Object.values(e);l()(c).call(c,r)?t(c.filter((e=>e!==r))):t([r])},a=(e,t,n)=>r=>{if(t){r.event.stop();const l=r.event.event,c=[];if(e.length>0){const t=n[r.name];e.forEach(((e,n)=>c.push({col:e,op:"==",val:t[n],formattedVal:String(t[n])})))}t(c,l.clientX,l.clientY)}},u=(e,t)=>{const{groupby:n,selectedValues:r,onContextMenu:l,labelMap:u}=e;return{click:c(r,t),contextmenu:a(n,l,u)}}}}]);
//# sourceMappingURL=e8d3ac453fc2e5285a06.chunk.js.map