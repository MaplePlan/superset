"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7936],{81788:(e,t,o)=>{o.d(t,{TZ:()=>s,u7:()=>i,B8:()=>l,mf:()=>d});var a=o(31069),r=o(68492);const n=(e,t,o)=>{let a=`api/v1/dashboard/${e}/filter_state`;return t&&(a=a.concat(`/${t}`)),o&&(a=a.concat(`?tab_id=${o}`)),a},s=(e,t,o,s)=>a.Z.put({endpoint:n(e,o,s),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(r.Z.error(e),null))),i=(e,t,o)=>a.Z.post({endpoint:n(e,void 0,o),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(r.Z.error(e),null))),l=(e,t)=>a.Z.get({endpoint:n(e,t)}).then((e=>{let{json:t}=e;return JSON.parse(t.value)})).catch((e=>(r.Z.error(e),null))),d=e=>a.Z.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((e=>{let{json:t}=e;return t})).catch((e=>(r.Z.error(e),null)))},37936:(e,t,o)=>{o.r(t),o.d(t,{DashboardPage:()=>V,DashboardPageIdContext:()=>z,MigrationContext:()=>$,default:()=>H});var a=o(78580),r=o.n(a),n=o(67294),s=o(51995),i=o(93185),l=o(61988),d=o(28062),c=o(78161),u=o(78718),f=o.n(u),p=o(37703),h=o(11965),m=o(14114),v=o(38703),b=o(74069),_=o(35932);const E=(0,s.iK)(b.Z)`
  .modal-content {
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .modal-header {
    flex: 0 1 auto;
  }

  .modal-body {
    flex: 1 1 auto;
    overflow: auto;
  }

  .modal-footer {
    flex: 0 1 auto;
  }

  .ant-modal-body {
    overflow: auto;
  }
`,x=e=>{let{onClickReview:t,onClickSnooze:o,onHide:a,show:r,hideFooter:s=!1}=e;return(0,h.tZ)(E,{show:r,onHide:a,title:(0,l.t)("Ready to review filters in this dashboard?"),hideFooter:s,footer:(0,h.tZ)(n.Fragment,null,(0,h.tZ)(_.Z,{buttonSize:"small",onClick:o},(0,l.t)("Remind me in 24 hours")),(0,h.tZ)(_.Z,{buttonSize:"small",onClick:a},(0,l.t)("Cancel")),(0,h.tZ)(_.Z,{buttonSize:"small",buttonStyle:"primary",onClick:t},(0,l.t)("Start Review"))),responsive:!0},(0,h.tZ)("div",null,(0,l.t)("filter_box will be deprecated in a future version of Superset. Please replace filter_box by dashboard filter components.")))};var S=o(54804),Z=o(63389),g=o(50810),w=o(14505),y=o(1959),D=o(72570),O=o(61337),C=o(69856),R=o(27600),k=o(23525),N=o(53002),T=o(52794),I=o(31758),F=o(81788);const j=e=>h.iv`
  .filter-card-popover {
    width: 240px;
    padding: 0;
    border-radius: 4px;

    .ant-popover-inner {
      box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    }
    .ant-popover-inner-content {
      padding: ${4*e.gridUnit}px;
    }

    .ant-popover-arrow {
      display: none;
    }
  }

  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`;var L=o(14670),P=o.n(L),Q=o(43399);const $=n.createContext(C.Qi.NOOP),z=n.createContext("");(0,y.Z)();const B=n.lazy((()=>Promise.all([o.e(1216),o.e(789),o.e(4282),o.e(7167),o.e(2639),o.e(876),o.e(2671),o.e(1407),o.e(5010),o.e(7311),o.e(2867),o.e(8274),o.e(1722),o.e(4717),o.e(452)]).then(o.bind(o,69011)))),M=document.title,A=()=>{const e=(0,O.rV)(O.dR.dashboard__explore_context,{});return Object.fromEntries(Object.entries(e).filter((e=>{let[,t]=e;return!t.isRedundant})))},K=(e,t)=>{const o=A();(0,O.LS)(O.dR.dashboard__explore_context,{...o,[e]:t})},V=e=>{let{idOrSlug:t}=e;const o=(0,p.I0)(),a=(0,s.Fg)(),u=(0,p.v9)((e=>e.user)),b=(()=>{const e=(0,n.useMemo)((()=>P().generate()),[]),t=(0,p.v9)((t=>{var o,a,r;let{dashboardInfo:n,dashboardState:s,nativeFilters:i,dataMask:l}=t;return{labelColors:(null==(o=n.metadata)?void 0:o.label_colors)||{},sharedLabelColors:(null==(a=n.metadata)?void 0:a.shared_label_colors)||{},colorScheme:null==s?void 0:s.colorScheme,chartConfiguration:(null==(r=n.metadata)?void 0:r.chart_configuration)||{},nativeFilters:Object.entries(i.filters).reduce(((e,t)=>{let[o,a]=t;return{...e,[o]:f()(a,["chartsInScope"])}}),{}),dataMask:l,dashboardId:n.id,filterBoxFilters:(0,Q.De)(),dashboardPageId:e}}));return(0,n.useEffect)((()=>(K(e,t),()=>{K(e,{...t,isRedundant:!0})})),[t,e]),e})(),{addDangerToast:_}=(0,m.e1)(),{result:E,error:y}=(0,S.QU)(t),{result:L,error:V}=(0,S.Es)(t),{result:H,error:Y,status:J}=(0,S.JL)(t),U=(0,n.useRef)(!1),q=y||V,G=Boolean(E&&L),W=(0,k.eY)(R.KD.migrationState),X=(0,i.c)(i.T.ENABLE_FILTER_BOX_MIGRATION),{dashboard_title:ee,css:te,metadata:oe,id:ae=0}=E||{},[re,ne]=(0,n.useState)(W||C.Qi.NOOP);if((0,n.useEffect)((()=>{const e=()=>{const e=A();(0,O.LS)(O.dR.dashboard__explore_context,{...e,[b]:{...e[b],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[b]),(0,n.useEffect)((()=>{o((0,I.sL)(J))}),[o,J]),(0,n.useEffect)((()=>{const e=L&&L.some((e=>{var t;return"filter_box"===(null==(t=e.form_data)?void 0:t.viz_type)}));if(E&&(0,N.M)(E,u)){if(null!=oe&&oe.native_filter_configuration)return void ne(X?C.Qi.CONVERTED:C.Qi.NOOP);if(e)if(X){var t;if(W&&r()(t=Object.values(C.Qi)).call(t,W))return void ne(W);const e=(0,O.rV)(O.dR.filter_box_transition_snoozed_at,{});if(Date.now()-(e[ae]||0)<C.Yd)return void ne(C.Qi.SNOOZED);ne(C.Qi.UNDECIDED)}else(0,i.c)(i.T.DASHBOARD_NATIVE_FILTERS)&&o((0,D.Dz)((0,l.t)("filter_box will be deprecated in a future version of Superset. Please replace filter_box by dashboard filter components.")))}}),[G]),(0,n.useEffect)((()=>{ae&&async function(){const e=(0,k.eY)(R.KD.permalinkKey),t=(0,k.eY)(R.KD.nativeFiltersKey),a=(0,k.eY)(R.KD.nativeFilters);let r,n=t||{};if(e){const t=await(0,F.mf)(e);t&&({dataMask:n,activeTabs:r}=t.state)}else t&&(n=await(0,F.B8)(ae,t));a&&(n=a),G&&(U.current||(U.current=!0,(0,i.c)(i.T.DASHBOARD_NATIVE_FILTERS_SET)&&o((0,T.pi)(ae))),o((0,Z.Y)({dashboard:E,charts:L,activeTabs:r,filterboxMigrationState:re,dataMask:n})))}()}),[G,re]),(0,n.useEffect)((()=>(ee&&(document.title=ee),()=>{document.title=M})),[ee]),(0,n.useEffect)((()=>"string"==typeof te?(0,w.Z)(te):()=>{}),[te]),(0,n.useEffect)((()=>()=>{d.getNamespace(null==oe?void 0:oe.color_namespace).resetColors(),(0,c.Z)().clear()}),[null==oe?void 0:oe.color_namespace]),(0,n.useEffect)((()=>{Y?_((0,l.t)("Error loading chart datasources. Filters may not work correctly.")):o((0,g.Fy)(H))}),[_,H,Y,o]),q)throw q;return G?(0,h.tZ)(n.Fragment,null,(0,h.tZ)(h.xB,{styles:j(a)}),(0,h.tZ)(x,{show:re===C.Qi.UNDECIDED,hideFooter:!X,onHide:()=>{ne(C.Qi.SNOOZED)},onClickReview:()=>{ne(C.Qi.REVIEWING)},onClickSnooze:()=>{const e=(0,O.rV)(O.dR.filter_box_transition_snoozed_at,{});(0,O.LS)(O.dR.filter_box_transition_snoozed_at,{...e,[ae]:Date.now()}),ne(C.Qi.SNOOZED)}}),(0,h.tZ)($.Provider,{value:re},(0,h.tZ)(z.Provider,{value:b},(0,h.tZ)(B,null)))):(0,h.tZ)(v.Z,null)},H=V},14505:(e,t,o)=>{function a(e){const t="CssEditor-css",o=document.head||document.getElementsByTagName("head")[0],a=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className="CssEditor-css",t.type="text/css",t}();return"styleSheet"in a?a.styleSheet.cssText=e:a.innerHTML=e,o.appendChild(a),function(){a.remove()}}o.d(t,{Z:()=>a})},54804:(e,t,o)=>{o.d(t,{hb:()=>i,QU:()=>l,Es:()=>d,JL:()=>c});var a=o(42190),r=o(15926);function n(e){let{owners:t}=e;return t?t.map((e=>`${e.first_name} ${e.last_name}`)):null}const s=o.n(r)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function i(e){return(0,a.l6)((0,a.s_)(`/api/v1/chart/${e}?q=${s}`),n)}const l=e=>(0,a.l6)((0,a.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json)}))),d=e=>(0,a.s_)(`/api/v1/dashboard/${e}/charts`),c=e=>(0,a.s_)(`/api/v1/dashboard/${e}/datasets`)}}]);
//# sourceMappingURL=071f7752c57cd3c8d679.chunk.js.map