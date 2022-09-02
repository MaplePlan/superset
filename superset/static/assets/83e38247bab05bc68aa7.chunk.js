"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8774],{27989:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(67294),l=a(51995),o=a(61988),n=a(35932),i=a(74069),s=a(4715),d=a(34858),u=a(60972),c=a(11965);const h=l.iK.div`
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
`,p=e=>{let{resourceName:t,resourceLabel:a,passwordsNeededMessage:l,confirmOverwriteMessage:p,onModelImport:b,show:g,onHide:y,passwordFields:f=[],setPasswordFields:Z=(()=>{})}=e;const[_,w]=(0,r.useState)(!0),[v,S]=(0,r.useState)({}),[x,C]=(0,r.useState)(!1),[T,E]=(0,r.useState)(!1),[I,D]=(0,r.useState)([]),[k,$]=(0,r.useState)(!1),[N,H]=(0,r.useState)(),F=()=>{D([]),Z([]),S({}),C(!1),E(!1),$(!1),H("")},{state:{alreadyExists:A,passwordsNeeded:M},importResource:z}=(0,d.PW)(t,a,(e=>{H(e)}));(0,r.useEffect)((()=>{Z(M),M.length>0&&$(!1)}),[M,Z]),(0,r.useEffect)((()=>{C(A.length>0),A.length>0&&$(!1)}),[A,C]);return _&&g&&w(!1),(0,c.tZ)(i.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===I.length||x&&!T||k,onHandledPrimaryAction:()=>{var e;(null==(e=I[0])?void 0:e.originFileObj)instanceof File&&($(!0),z(I[0].originFileObj,v,T).then((e=>{e&&(F(),b())})))},onHide:()=>{w(!0),y(),F()},primaryButtonName:x?(0,o.t)("Overwrite"):(0,o.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:g,title:(0,c.tZ)("h4",null,(0,o.t)("Import %s",a))},(0,c.tZ)(m,null,(0,c.tZ)(s.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:I,onChange:e=>{D([{...e.file,status:"done"}])},onRemove:e=>(D(I.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:k},(0,c.tZ)(n.Z,{loading:k},"Select file"))),N&&(0,c.tZ)(u.Z,{errorMessage:N,showDbInstallInstructions:f.length>0}),0===f.length?null:(0,c.tZ)(r.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(h,null,l),f.map((e=>(0,c.tZ)(m,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:v[e],onChange:t=>S({...v,[e]:t.target.value})}))))),x?(0,c.tZ)(r.Fragment,null,(0,c.tZ)(m,null,(0,c.tZ)("div",{className:"confirm-overwrite"},p),(0,c.tZ)("div",{className:"control-label"},(0,o.t)('Type "%s" to confirm',(0,o.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(r.toUpperCase()===(0,o.t)("OVERWRITE"))}}))):null)}},23767:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var r,l=a(61988),o=a(51995),n=a(31069),i=a(67294),s=a(73727),d=a(15926),u=a.n(d),c=a(91877),h=a(93185),m=a(40768),p=a(34858),b=a(19259),g=a(32228),y=a(38703),f=a(20755),Z=a(18782),_=a(61337),w=a(14114),v=a(34581),S=a(70163),x=a(36674),C=a(20818),T=a(58593),E=a(27989),I=a(79789),D=a(99415);!function(e){e.PUBLISHED="published",e.DRAFT="draft"}(r||(r={}));var k=a(11965);const $=(0,l.t)('The passwords for the databases below are needed in order to import them together with the dashboards. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),N=(0,l.t)("You are importing one or more dashboards that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),H=o.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,F=(0,w.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:{userId:o}}=e,{state:{loading:d,resourceCount:w,resourceCollection:F,bulkSelectEnabled:A},setResourceCollection:M,hasPerm:z,fetchData:O,toggleBulkSelect:P,refreshData:U}=(0,p.Yi)("dashboard",(0,l.t)("dashboard"),t),B=(0,i.useMemo)((()=>F.map((e=>e.id))),[F]),[R,L]=(0,p.NE)("dashboard",B,t),[j,V]=(0,i.useState)(null),[q,W]=(0,i.useState)(!1),[Y,K]=(0,i.useState)([]),[X,G]=(0,i.useState)(!1),J=(0,_.OH)(null==o?void 0:o.toString(),null),Q=z("can_write"),ee=z("can_write"),te=z("can_write"),ae=z("can_export")&&(0,c.cr)(h.T.VERSIONED_EXPORT),re=[{id:"changed_on_delta_humanized",desc:!0}];function le(e){V(e)}function oe(e){return n.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((e=>{let{json:t={}}=e;M(F.map((e=>{var a;if(e.id===(null==t||null==(a=t.result)?void 0:a.id)){const{changed_by_name:a,changed_by_url:r,changed_by:l,dashboard_title:o="",slug:n="",json_metadata:i="",changed_on_delta_humanized:s,url:d="",certified_by:u="",certification_details:c=""}=t.result;return{...e,changed_by_name:a,changed_by_url:r,changed_by:l,dashboard_title:o,slug:n,json_metadata:i,changed_on_delta_humanized:s,url:d,certified_by:u,certification_details:c}}return e})))}),(0,m.v$)((e=>t((0,l.t)("An error occurred while fetching dashboards: %s",e)))))}const ne=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,g.Z)("dashboard",t,(()=>{G(!1)})),G(!0)},ie=(0,i.useMemo)((()=>[{Cell:e=>{let{row:{original:{id:t}}}=e;return o&&(0,k.tZ)(x.Z,{itemId:t,saveFaveStar:R,isStarred:L[t]})},Header:"",id:"id",disableSortBy:!0,size:"xs",hidden:!o},{Cell:e=>{let{row:{original:{url:t,dashboard_title:a,certified_by:r,certification_details:l}}}=e;return(0,k.tZ)(s.rU,{to:t},r&&(0,k.tZ)(i.Fragment,null,(0,k.tZ)(I.Z,{certifiedBy:r,details:l})," "),a)},Header:(0,l.t)("Title"),accessor:"dashboard_title"},{Cell:e=>{let{row:{original:{changed_by_name:t,changed_by_url:a}}}=e;return(0,k.tZ)("a",{href:a},t)},Header:(0,l.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:e=>{let{row:{original:{status:t}}}=e;return t===r.PUBLISHED?(0,l.t)("Published"):(0,l.t)("Draft")},Header:(0,l.t)("Status"),accessor:"published",size:"xl"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return(0,k.tZ)("span",{className:"no-wrap"},t)},Header:(0,l.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:{created_by:t}}}=e;return t?`${t.first_name} ${t.last_name}`:""},Header:(0,l.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{owners:t=[]}}}=e;return(0,k.tZ)(v.Z,{users:t})},Header:(0,l.t)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:r}}=e;return(0,k.tZ)(H,{className:"actions"},te&&(0,k.tZ)(b.Z,{title:(0,l.t)("Please confirm"),description:(0,k.tZ)(i.Fragment,null,(0,l.t)("Are you sure you want to delete")," ",(0,k.tZ)("b",null,r.dashboard_title),"?"),onConfirm:()=>(0,m.Iu)(r,U,a,t)},(e=>(0,k.tZ)(T.u,{id:"delete-action-tooltip",title:(0,l.t)("Delete"),placement:"bottom"},(0,k.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,k.tZ)(S.Z.Trash,null))))),ae&&(0,k.tZ)(T.u,{id:"export-action-tooltip",title:(0,l.t)("Export"),placement:"bottom"},(0,k.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ne([r])},(0,k.tZ)(S.Z.Share,null))),ee&&(0,k.tZ)(T.u,{id:"edit-action-tooltip",title:(0,l.t)("Edit"),placement:"bottom"},(0,k.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>le(r)},(0,k.tZ)(S.Z.EditAlt,null))))},Header:(0,l.t)("Actions"),id:"actions",hidden:!ee&&!te&&!ae,disableSortBy:!0}]),[o,ee,te,ae,R,L,U,a,t]),se=(0,i.useMemo)((()=>({Header:(0,l.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:Z.p.dashboardIsFav,unfilteredLabel:(0,l.t)("Any"),selects:[{label:(0,l.t)("Yes"),value:!0},{label:(0,l.t)("No"),value:!1}]})),[]),de=(0,i.useMemo)((()=>[{Header:(0,l.t)("Owner"),id:"owners",input:"select",operator:Z.p.relationManyMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,m.tm)("dashboard","owners",(0,m.v$)((e=>t((0,l.t)("An error occurred while fetching dashboard owner values: %s",e)))),e.user),paginate:!0},{Header:(0,l.t)("Created by"),id:"created_by",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,m.tm)("dashboard","created_by",(0,m.v$)((e=>t((0,l.t)("An error occurred while fetching dashboard created by values: %s",e)))),e.user),paginate:!0},{Header:(0,l.t)("Status"),id:"published",input:"select",operator:Z.p.equals,unfilteredLabel:(0,l.t)("Any"),selects:[{label:(0,l.t)("Published"),value:!0},{label:(0,l.t)("Draft"),value:!1}]},...o?[se]:[],{Header:(0,l.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:Z.p.dashboardIsCertified,unfilteredLabel:(0,l.t)("Any"),selects:[{label:(0,l.t)("Yes"),value:!0},{label:(0,l.t)("No"),value:!1}]},{Header:(0,l.t)("Search"),id:"dashboard_title",input:"search",operator:Z.p.titleOrSlug}]),[t,se,e.user]),ue=[{desc:!1,id:"dashboard_title",label:(0,l.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,l.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,l.t)("Least recently modified"),value:"least_recently_modified"}],ce=(0,i.useCallback)((e=>(0,k.tZ)(D.Z,{dashboard:e,hasPerm:z,bulkSelectEnabled:A,refreshData:U,showThumbnails:J?J.thumbnails:(0,c.cr)(h.T.THUMBNAILS),userId:o,loading:d,addDangerToast:t,addSuccessToast:a,openDashboardEditModal:le,saveFavoriteStatus:R,favoriteStatus:L[e.id],handleBulkDashboardExport:ne})),[t,a,A,L,z,d,o,U,R,J]),he=[];return(te||ae)&&he.push({name:(0,l.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:P}),Q&&(he.push({name:(0,k.tZ)(i.Fragment,null,(0,k.tZ)("i",{className:"fa fa-plus"})," ",(0,l.t)("Dashboard")),buttonStyle:"primary",onClick:()=>{window.location.assign("/dashboard/new")}}),(0,c.cr)(h.T.VERSIONED_EXPORT)&&he.push({name:(0,k.tZ)(T.u,{id:"import-tooltip",title:(0,l.t)("Import dashboards"),placement:"bottomRight"},(0,k.tZ)(S.Z.Import,null)),buttonStyle:"link",onClick:()=>{W(!0)}})),(0,k.tZ)(i.Fragment,null,(0,k.tZ)(f.Z,{name:(0,l.t)("Dashboards"),buttons:he}),(0,k.tZ)(b.Z,{title:(0,l.t)("Please confirm"),description:(0,l.t)("Are you sure you want to delete the selected dashboards?"),onConfirm:function(e){return n.Z.delete({endpoint:`/api/v1/dashboard/?q=${u().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;U(),a(t.message)}),(0,m.v$)((e=>t((0,l.t)("There was an issue deleting the selected dashboards: ",e)))))}},(e=>{const t=[];return te&&t.push({key:"delete",name:(0,l.t)("Delete"),type:"danger",onSelect:e}),ae&&t.push({key:"export",name:(0,l.t)("Export"),type:"primary",onSelect:ne}),(0,k.tZ)(i.Fragment,null,j&&(0,k.tZ)(C.Z,{dashboardId:j.id,show:!0,onHide:()=>V(null),onSubmit:oe}),(0,k.tZ)(Z.Z,{bulkActions:t,bulkSelectEnabled:A,cardSortSelectOptions:ue,className:"dashboard-list-view",columns:ie,count:w,data:F,disableBulkSelect:P,fetchData:O,filters:de,initialSort:re,loading:d,pageSize:25,showThumbnails:J?J.thumbnails:(0,c.cr)(h.T.THUMBNAILS),renderCard:ce,defaultViewMode:(0,c.cr)(h.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"}))})),(0,k.tZ)(E.Z,{resourceName:"dashboard",resourceLabel:(0,l.t)("dashboard"),passwordsNeededMessage:$,confirmOverwriteMessage:N,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{W(!1),U(),a((0,l.t)("Dashboard imported"))},show:q,onHide:()=>{W(!1)},passwordFields:Y,setPasswordFields:K}),X&&(0,k.tZ)(y.Z,null))}))}}]);
//# sourceMappingURL=83e38247bab05bc68aa7.chunk.js.map