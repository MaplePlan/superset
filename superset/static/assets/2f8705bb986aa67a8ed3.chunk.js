(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[665],{45578:(e,t,a)=>{var r=a(67206),l=a(45652);e.exports=function(e,t){return e&&e.length?l(e,r(t,2)):[]}},27989:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var r=a(67294),l=a(51995),n=a(61988),i=a(35932),o=a(74069),s=a(4715),d=a(34858),u=a(60972),c=a(11965);const p=l.iK.div`
  display: block;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,m=l.iK.div`
  padding-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;

  & > div {
    margin: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }

    i {
      margin: 0 ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    border-style: none;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    }
  }
`,h=e=>{let{resourceName:t,resourceLabel:a,passwordsNeededMessage:l,confirmOverwriteMessage:h,onModelImport:g,show:b,onHide:y,passwordFields:f=[],setPasswordFields:v=(()=>{})}=e;const[Z,w]=(0,r.useState)(!0),[_,x]=(0,r.useState)({}),[S,C]=(0,r.useState)(!1),[E,T]=(0,r.useState)(!1),[k,$]=(0,r.useState)([]),[N,I]=(0,r.useState)(!1),[H,A]=(0,r.useState)(),F=()=>{$([]),v([]),x({}),C(!1),T(!1),I(!1),A("")},{state:{alreadyExists:M,passwordsNeeded:z},importResource:D}=(0,d.PW)(t,a,(e=>{A(e)}));(0,r.useEffect)((()=>{v(z),z.length>0&&I(!1)}),[z,v]),(0,r.useEffect)((()=>{C(M.length>0),M.length>0&&I(!1)}),[M,C]);return Z&&b&&w(!1),(0,c.tZ)(o.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===k.length||S&&!E||N,onHandledPrimaryAction:()=>{var e;(null==(e=k[0])?void 0:e.originFileObj)instanceof File&&(I(!0),D(k[0].originFileObj,_,E).then((e=>{e&&(F(),g())})))},onHide:()=>{w(!0),y(),F()},primaryButtonName:S?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:S?"danger":"primary",width:"750px",show:b,title:(0,c.tZ)("h4",null,(0,n.t)("Import %s",a))},(0,c.tZ)(m,null,(0,c.tZ)(s.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:k,onChange:e=>{$([{...e.file,status:"done"}])},onRemove:e=>($(k.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:N},(0,c.tZ)(i.Z,{loading:N},"Select file"))),H&&(0,c.tZ)(u.Z,{errorMessage:H,showDbInstallInstructions:f.length>0}),0===f.length?null:(0,c.tZ)(r.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(p,null,l),f.map((e=>(0,c.tZ)(m,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:_[e],onChange:t=>x({..._,[e]:t.target.value})}))))),S?(0,c.tZ)(r.Fragment,null,(0,c.tZ)(m,null,(0,c.tZ)("div",{className:"confirm-overwrite"},h),(0,c.tZ)("div",{className:"control-label"},(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";T(r.toUpperCase()===(0,n.t)("OVERWRITE"))}}))):null)}},13434:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>V});var r=a(45578),l=a.n(r),n=a(51995),i=a(61988),o=a(11064),s=a(31069),d=a(67294),u=a(15926),c=a.n(u),p=a(30381),m=a.n(p),h=a(91877),g=a(93185),b=a(40768),y=a(34858),f=a(32228),v=a(19259),Z=a(20755),w=a(36674),_=a(5977),x=a(73727),S=a(18782),C=a(38703),E=a(61337),T=a(14114),k=a(83673),$=a(27989),N=a(58593),I=a(70163),H=a(1510),A=a(1959),F=a(8272),M=a(79789),z=a(85931),D=a(34024),U=a(11965);const B=n.iK.div`
  align-items: center;
  display: flex;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2;
  }

  svg {
    margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,O=(0,i.t)('The passwords for the databases below are needed in order to import them together with the charts. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),L=(0,i.t)("You are importing one or more charts that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?");(0,A.Z)();const R=(0,o.Z)(),P=async function(e,t,a){var r;void 0===e&&(e="");const n=e?{filters:[{col:"table_name",opr:"sw",value:e}]}:{},i=c().encode({columns:["datasource_name","datasource_id"],keys:["none"],order_column:"table_name",order_direction:"asc",page:t,page_size:a,...n}),{json:o={}}=await s.Z.get({endpoint:`/api/v1/dataset/?q=${i}`}),d=null==o||null==(r=o.result)?void 0:r.map((e=>{let{table_name:t,id:a}=e;return{label:t,value:a}}));return{data:l()(d,"value"),totalCount:null==o?void 0:o.count}},q=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,V=(0,T.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:{userId:r}}=e,l=(0,_.k6)(),{state:{loading:n,resourceCount:o,resourceCollection:u,bulkSelectEnabled:p},setResourceCollection:T,hasPerm:A,fetchData:V,toggleBulkSelect:j,refreshData:W}=(0,y.Yi)("chart",(0,i.t)("chart"),t),K=(0,d.useMemo)((()=>u.map((e=>e.id))),[u]),[Y,X]=(0,y.NE)("chart",K,t),{sliceCurrentlyEditing:G,handleChartUpdated:J,openChartEditModal:Q,closeChartEditModal:ee}=(0,y.fF)(T,u),[te,ae]=(0,d.useState)(!1),[re,le]=(0,d.useState)([]),[ne,ie]=(0,d.useState)(!1),oe=(0,E.OH)(null==r?void 0:r.toString(),null),se=A("can_write"),de=A("can_write"),ue=A("can_write"),ce=A("can_export")&&(0,h.cr)(g.T.VERSIONED_EXPORT),pe=[{id:"changed_on_delta_humanized",desc:!0}],me=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,f.Z)("chart",t,(()=>{ie(!1)})),ie(!0)},he=(0,d.useMemo)((()=>[{Cell:e=>{let{row:{original:{id:t}}}=e;return r&&(0,U.tZ)(w.Z,{itemId:t,saveFaveStar:Y,isStarred:X[t]})},Header:"",id:"id",disableSortBy:!0,size:"xs",hidden:!r},{Cell:e=>{let{row:{original:{url:t,slice_name:a,certified_by:r,certification_details:l,description:n}}}=e;return(0,U.tZ)(B,null,(0,U.tZ)(x.rU,{to:t},r&&(0,U.tZ)(d.Fragment,null,(0,U.tZ)(M.Z,{certifiedBy:r,details:l})," "),a),n&&(0,U.tZ)(F.Z,{tooltip:n,viewBox:"0 -1 24 24"}))},Header:(0,i.t)("Chart"),accessor:"slice_name"},{Cell:e=>{var t;let{row:{original:{viz_type:a}}}=e;return(null==(t=R.get(a))?void 0:t.name)||a},Header:(0,i.t)("Visualization type"),accessor:"viz_type",size:"xxl"},{Cell:e=>{let{row:{original:{datasource_name_text:t,datasource_url:a}}}=e;return(0,U.tZ)(z.m,{to:a},t)},Header:(0,i.t)("Dataset"),accessor:"datasource_id",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{last_saved_by:t,changed_by_url:a}}}=e;return(0,U.tZ)("a",{href:a},null!=t&&t.first_name?`${null==t?void 0:t.first_name} ${null==t?void 0:t.last_name}`:null)},Header:(0,i.t)("Modified by"),accessor:"last_saved_by.first_name",size:"xl"},{Cell:e=>{let{row:{original:{last_saved_at:t}}}=e;return(0,U.tZ)("span",{className:"no-wrap"},t?m().utc(t).fromNow():null)},Header:(0,i.t)("Last modified"),accessor:"last_saved_at",size:"xl"},{accessor:"owners",hidden:!0,disableSortBy:!0},{Cell:e=>{let{row:{original:{created_by:t}}}=e;return t?`${t.first_name} ${t.last_name}`:""},Header:(0,i.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:r}}=e;return de||ue||ce?(0,U.tZ)(q,{className:"actions"},ue&&(0,U.tZ)(v.Z,{title:(0,i.t)("Please confirm"),description:(0,U.tZ)(d.Fragment,null,(0,i.t)("Are you sure you want to delete")," ",(0,U.tZ)("b",null,r.slice_name),"?"),onConfirm:()=>(0,b.Gm)(r,a,t,W)},(e=>(0,U.tZ)(N.u,{id:"delete-action-tooltip",title:(0,i.t)("Delete"),placement:"bottom"},(0,U.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,U.tZ)(I.Z.Trash,null))))),ce&&(0,U.tZ)(N.u,{id:"export-action-tooltip",title:(0,i.t)("Export"),placement:"bottom"},(0,U.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>me([r])},(0,U.tZ)(I.Z.Share,null))),de&&(0,U.tZ)(N.u,{id:"edit-action-tooltip",title:(0,i.t)("Edit"),placement:"bottom"},(0,U.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Q(r)},(0,U.tZ)(I.Z.EditAlt,null)))):null},Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!de&&!ue}]),[r,de,ue,ce,Y,X,W,a,t]),ge=(0,d.useMemo)((()=>({Header:(0,i.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:S.p.chartIsFav,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Yes"),value:!0},{label:(0,i.t)("No"),value:!1}]})),[]),be=(0,d.useMemo)((()=>[{Header:(0,i.t)("Owner"),id:"owners",input:"select",operator:S.p.relationManyMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,b.tm)("chart","owners",(0,b.v$)((e=>t((0,i.t)("An error occurred while fetching chart owners values: %s",e)))),e.user),paginate:!0},{Header:(0,i.t)("Created by"),id:"created_by",input:"select",operator:S.p.relationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,b.tm)("chart","created_by",(0,b.v$)((e=>t((0,i.t)("An error occurred while fetching chart created by values: %s",e)))),e.user),paginate:!0},{Header:(0,i.t)("Chart type"),id:"viz_type",input:"select",operator:S.p.equals,unfilteredLabel:(0,i.t)("All"),selects:R.keys().filter((e=>{var t;return(0,H.X3)((null==(t=R.get(e))?void 0:t.behaviors)||[])})).map((e=>{var t;return{label:(null==(t=R.get(e))?void 0:t.name)||e,value:e}})).sort(((e,t)=>e.label&&t.label?e.label>t.label?1:e.label<t.label?-1:0:0))},{Header:(0,i.t)("Dataset"),id:"datasource_id",input:"select",operator:S.p.equals,unfilteredLabel:(0,i.t)("All"),fetchSelects:P,paginate:!0},...r?[ge]:[],{Header:(0,i.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:S.p.chartIsCertified,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Yes"),value:!0},{label:(0,i.t)("No"),value:!1}]},{Header:(0,i.t)("Search"),id:"slice_name",input:"search",operator:S.p.chartAllText}]),[t,ge,e.user]),ye=[{desc:!1,id:"slice_name",label:(0,i.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,i.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,i.t)("Least recently modified"),value:"least_recently_modified"}],fe=(0,d.useCallback)((e=>(0,U.tZ)(D.Z,{chart:e,showThumbnails:oe?oe.thumbnails:(0,h.cr)(g.T.THUMBNAILS),hasPerm:A,openChartEditModal:Q,bulkSelectEnabled:p,addDangerToast:t,addSuccessToast:a,refreshData:W,userId:r,loading:n,favoriteStatus:X[e.id],saveFavoriteStatus:Y,handleBulkChartExport:me})),[t,a,p,X,A,n]),ve=[];return(ue||ce)&&ve.push({name:(0,i.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:j}),se&&(ve.push({name:(0,U.tZ)(d.Fragment,null,(0,U.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Chart")),buttonStyle:"primary",onClick:()=>{l.push("/chart/add")}}),(0,h.cr)(g.T.VERSIONED_EXPORT)&&ve.push({name:(0,U.tZ)(N.u,{id:"import-tooltip",title:(0,i.t)("Import charts"),placement:"bottomRight"},(0,U.tZ)(I.Z.Import,null)),buttonStyle:"link",onClick:()=>{ae(!0)}})),(0,U.tZ)(d.Fragment,null,(0,U.tZ)(Z.Z,{name:(0,i.t)("Charts"),buttons:ve}),G&&(0,U.tZ)(k.Z,{onHide:ee,onSave:J,show:!0,slice:G}),(0,U.tZ)(v.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected charts?"),onConfirm:function(e){s.Z.delete({endpoint:`/api/v1/chart/?q=${c().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;W(),a(t.message)}),(0,b.v$)((e=>t((0,i.t)("There was an issue deleting the selected charts: %s",e)))))}},(e=>{const t=[];return ue&&t.push({key:"delete",name:(0,i.t)("Delete"),type:"danger",onSelect:e}),ce&&t.push({key:"export",name:(0,i.t)("Export"),type:"primary",onSelect:me}),(0,U.tZ)(S.Z,{bulkActions:t,bulkSelectEnabled:p,cardSortSelectOptions:ye,className:"chart-list-view",columns:he,count:o,data:u,disableBulkSelect:j,fetchData:V,filters:be,initialSort:pe,loading:n,pageSize:25,renderCard:fe,showThumbnails:oe?oe.thumbnails:(0,h.cr)(g.T.THUMBNAILS),defaultViewMode:(0,h.cr)(g.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"})})),(0,U.tZ)($.Z,{resourceName:"chart",resourceLabel:(0,i.t)("chart"),passwordsNeededMessage:O,confirmOverwriteMessage:L,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{ae(!1),W(),a((0,i.t)("Chart imported"))},show:te,onHide:()=>{ae(!1)},passwordFields:re,setPasswordFields:le}),ne&&(0,U.tZ)(C.Z,null))}))}}]);
//# sourceMappingURL=2f8705bb986aa67a8ed3.chunk.js.map