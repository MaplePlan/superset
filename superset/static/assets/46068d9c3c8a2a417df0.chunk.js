"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9173],{27989:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(67294),n=a(51995),o=a(61988),l=a(35932),s=a(74069),i=a(4715),d=a(34858),u=a(60972),c=a(11965);const p=n.iK.div`
  display: block;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,m=n.iK.div`
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
`,h=e=>{let{resourceName:t,resourceLabel:a,passwordsNeededMessage:n,confirmOverwriteMessage:h,onModelImport:g,show:y,onHide:b,passwordFields:v=[],setPasswordFields:Z=(()=>{})}=e;const[w,f]=(0,r.useState)(!0),[x,S]=(0,r.useState)({}),[k,q]=(0,r.useState)(!1),[C,$]=(0,r.useState)(!1),[D,T]=(0,r.useState)([]),[_,N]=(0,r.useState)(!1),[I,E]=(0,r.useState)(),z=()=>{T([]),Z([]),S({}),q(!1),$(!1),N(!1),E("")},{state:{alreadyExists:P,passwordsNeeded:H},importResource:R}=(0,d.PW)(t,a,(e=>{E(e)}));(0,r.useEffect)((()=>{Z(H),H.length>0&&N(!1)}),[H,Z]),(0,r.useEffect)((()=>{q(P.length>0),P.length>0&&N(!1)}),[P,q]);return w&&y&&f(!1),(0,c.tZ)(s.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===D.length||k&&!C||_,onHandledPrimaryAction:()=>{var e;(null==(e=D[0])?void 0:e.originFileObj)instanceof File&&(N(!0),R(D[0].originFileObj,x,C).then((e=>{e&&(z(),g())})))},onHide:()=>{f(!0),b(),z()},primaryButtonName:k?(0,o.t)("Overwrite"):(0,o.t)("Import"),primaryButtonType:k?"danger":"primary",width:"750px",show:y,title:(0,c.tZ)("h4",null,(0,o.t)("Import %s",a))},(0,c.tZ)(m,null,(0,c.tZ)(i.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:D,onChange:e=>{T([{...e.file,status:"done"}])},onRemove:e=>(T(D.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:_},(0,c.tZ)(l.Z,{loading:_},"Select file"))),I&&(0,c.tZ)(u.Z,{errorMessage:I,showDbInstallInstructions:v.length>0}),0===v.length?null:(0,c.tZ)(r.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(p,null,n),v.map((e=>(0,c.tZ)(m,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:x[e],onChange:t=>S({...x,[e]:t.target.value})}))))),k?(0,c.tZ)(r.Fragment,null,(0,c.tZ)(m,null,(0,c.tZ)("div",{className:"confirm-overwrite"},h),(0,c.tZ)("div",{className:"control-label"},(0,o.t)('Type "%s" to confirm',(0,o.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";$(r.toUpperCase()===(0,o.t)("OVERWRITE"))}}))):null)}},29848:(e,t,a)=>{a.d(t,{Z:()=>d}),a(67294);var r=a(51995),n=a(58593),o=a(70163),l=a(11965);const s=r.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
      }
    }
  }
`,i=r.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`;function d(e){let{actions:t}=e;return(0,l.tZ)(s,{className:"actions"},t.map(((e,t)=>{const a=o.Z[e.icon];return e.tooltip?(0,l.tZ)(n.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,l.tZ)(i,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,l.tZ)(a,null))):(0,l.tZ)(i,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,l.tZ)(a,null))})))}},95413:(e,t,a)=>{a.d(t,{Y:()=>n});var r=a(61988);const n={name:(0,r.t)("Data"),tabs:[{name:"Databases",label:(0,r.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,r.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,r.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,r.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},31673:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(5872),n=a.n(r),o=(a(67294),a(51995)),l=a(61988),s=a(33743),i=a(49889),d=a(53459),u=a(22489),c=a(120),p=a(42110),m=a(70163),h=a(10222),g=a(11965);p.Z.registerLanguage("sql",s.Z),p.Z.registerLanguage("markdown",d.Z),p.Z.registerLanguage("html",i.Z),p.Z.registerLanguage("json",u.Z);const y=o.iK.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  }
`;function b(e){let{addDangerToast:t,addSuccessToast:a,children:r,...o}=e;return(0,g.tZ)(y,null,(0,g.tZ)(m.Z.Copy,{tabIndex:0,role:"button",onClick:e=>{var n;e.preventDefault(),e.currentTarget.blur(),n=r,(0,h.Z)((()=>Promise.resolve(n))).then((()=>{a&&a((0,l.t)("SQL Copied!"))})).catch((()=>{t&&t((0,l.t)("Sorry, your browser does not support copying."))}))}}),(0,g.tZ)(p.Z,n()({style:c.Z},o),r))}},14025:(e,t,a)=>{a.d(t,{C:()=>n});var r=a(67294);function n(e){let{queries:t,fetchData:a,currentQueryId:n}=e;const o=t.findIndex((e=>e.id===n)),[l,s]=(0,r.useState)(o),[i,d]=(0,r.useState)(!1),[u,c]=(0,r.useState)(!1);function p(){d(0===l),c(l===t.length-1)}function m(e){const r=l+(e?-1:1);r>=0&&r<t.length&&(a(t[r].id),s(r),p())}return(0,r.useEffect)((()=>{p()})),{handleKeyPress:function(e){l>=0&&l<t.length&&("ArrowDown"===e.key||"k"===e.key?(e.preventDefault(),m(!1)):"ArrowUp"!==e.key&&"j"!==e.key||(e.preventDefault(),m(!0)))},handleDataChange:m,disablePrevious:i,disableNext:u}}},49588:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var r=a(61988),n=a(51995),o=a(31069),l=a(67294),s=a(15926),i=a.n(s),d=a(30381),u=a.n(d),c=a(40768),p=a(76697),m=a(14114),h=a(34858),g=a(19259),y=a(32228),b=a(20755),v=a(18782),Z=a(38703),w=a(17198),f=a(29848),x=a(58593),S=a(95413),k=a(10222),q=a(91877),C=a(93185),$=a(27989),D=a(70163),T=a(74069),_=a(35932),N=a(31673),I=a(14025),E=a(11965);const z=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.secondary.light2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,P=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
  padding: 4px 0 16px 0;
`,H=(0,n.iK)(T.Z)`
  .ant-modal-content {
  }

  .ant-modal-body {
    padding: 24px;
  }

  pre {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.xs}}px;
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
    line-height: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
    height: 375px;
    border: none;
  }
`,R=(0,m.ZP)((e=>{let{fetchData:t,onHide:a,openInSqlLab:n,queries:o,savedQuery:s,show:i,addDangerToast:d,addSuccessToast:u}=e;const{handleKeyPress:c,handleDataChange:p,disablePrevious:m,disableNext:h}=(0,I.C)({queries:o,currentQueryId:s.id,fetchData:t});return(0,E.tZ)("div",{role:"none",onKeyUp:c},(0,E.tZ)(H,{onHide:a,show:i,title:(0,r.t)("Query preview"),footer:(0,E.tZ)(l.Fragment,null,(0,E.tZ)(_.Z,{key:"previous-saved-query",disabled:m,onClick:()=>p(!0)},(0,r.t)("Previous")),(0,E.tZ)(_.Z,{key:"next-saved-query",disabled:h,onClick:()=>p(!1)},(0,r.t)("Next")),(0,E.tZ)(_.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>n(s.id)},(0,r.t)("Open in SQL Lab")))},(0,E.tZ)(z,null,(0,r.t)("Query name")),(0,E.tZ)(P,null,s.label),(0,E.tZ)(N.Z,{language:"sql",addDangerToast:d,addSuccessToast:u},s.sql||"")))})),L=(0,r.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),F=(0,r.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),Q=n.iK.div`
  .count {
    margin-left: 5px;
    color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
    text-decoration: underline;
    cursor: pointer;
  }
`,U=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
`,M=(0,m.ZP)((function(e){let{addDangerToast:t,addSuccessToast:a}=e;const{state:{loading:n,resourceCount:s,resourceCollection:d,bulkSelectEnabled:m},hasPerm:T,fetchData:_,toggleBulkSelect:N,refreshData:I}=(0,h.Yi)("saved_query",(0,r.t)("Saved queries"),t),[z,P]=(0,l.useState)(null),[H,M]=(0,l.useState)(null),[O,K]=(0,l.useState)(!1),[A,B]=(0,l.useState)([]),[j,Y]=(0,l.useState)(!1),V=T("can_write"),W=T("can_write"),X=T("can_write"),G=T("can_export")&&(0,q.cr)(C.T.VERSIONED_EXPORT),J=(0,l.useCallback)((e=>{o.Z.get({endpoint:`/api/v1/saved_query/${e}`}).then((e=>{let{json:t={}}=e;M({...t.result})}),(0,c.v$)((e=>t((0,r.t)("There was an issue previewing the selected query %s",e)))))}),[t]),ee={activeChild:"Saved queries",...S.Y},te=[];X&&te.push({name:(0,r.t)("Bulk select"),onClick:N,buttonStyle:"secondary"}),te.push({name:(0,E.tZ)(l.Fragment,null,(0,E.tZ)("i",{className:"fa fa-plus"})," ",(0,r.t)("Query")),onClick:()=>{window.open(`${window.location.origin}/superset/sqllab?new=true`)},buttonStyle:"primary"}),V&&(0,q.cr)(C.T.VERSIONED_EXPORT)&&te.push({name:(0,E.tZ)(x.u,{id:"import-tooltip",title:(0,r.t)("Import queries"),placement:"bottomRight"},(0,E.tZ)(D.Z.Import,null)),buttonStyle:"link",onClick:()=>{K(!0)},"data-test":"import-button"}),ee.buttons=te;const ae=e=>{window.open(`${window.location.origin}/superset/sqllab?savedQueryId=${e}`)},re=(0,l.useCallback)((e=>{(0,k.Z)((()=>Promise.resolve(`${window.location.origin}/superset/sqllab?savedQueryId=${e}`))).then((()=>{a((0,r.t)("Link Copied!"))})).catch((()=>{t((0,r.t)("Sorry, your browser does not support copying."))}))}),[t,a]),ne=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,y.Z)("saved_query",t,(()=>{Y(!1)})),Y(!0)},oe=[{id:"changed_on_delta_humanized",desc:!0}],le=(0,l.useMemo)((()=>[{accessor:"label",Header:(0,r.t)("Name")},{accessor:"database.database_name",Header:(0,r.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,r.t)("Schema"),size:"xl"},{Cell:e=>{let{row:{original:{sql_tables:t=[]}}}=e;const a=t.map((e=>e.table)),n=(null==a?void 0:a.shift())||"";return a.length?(0,E.tZ)(Q,null,(0,E.tZ)("span",null,n),(0,E.tZ)(p.ZP,{placement:"right",title:(0,r.t)("TABLES"),trigger:"click",content:(0,E.tZ)(l.Fragment,null,a.map((e=>(0,E.tZ)(U,{key:e},e))))},(0,E.tZ)("span",{className:"count"},"(+",a.length,")"))):n},accessor:"sql_tables",Header:(0,r.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:e=>{let{row:{original:{created_on:t}}}=e;const a=new Date(t),r=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return u()(r).fromNow()},Header:(0,r.t)("Created on"),accessor:"created_on",size:"xl"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return t},Header:(0,r.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:t}}=e;const a=[{label:"preview-action",tooltip:(0,r.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{J(t.id)}},W&&{label:"edit-action",tooltip:(0,r.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:()=>ae(t.id)},{label:"copy-action",tooltip:(0,r.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>re(t.id)},G&&{label:"export-action",tooltip:(0,r.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>ne([t])},X&&{label:"delete-action",tooltip:(0,r.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>P(t)}].filter((e=>!!e));return(0,E.tZ)(f.Z,{actions:a})},Header:(0,r.t)("Actions"),id:"actions",disableSortBy:!0}]),[X,W,G,re,J]),se=(0,l.useMemo)((()=>[{Header:(0,r.t)("Database"),id:"database",input:"select",operator:v.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,c.tm)("saved_query","database",(0,c.v$)((e=>t((0,r.t)("An error occurred while fetching dataset datasource values: %s",e))))),paginate:!0},{Header:(0,r.t)("Schema"),id:"schema",input:"select",operator:v.p.equals,unfilteredLabel:"All",fetchSelects:(0,c.wk)("saved_query","schema",(0,c.v$)((e=>t((0,r.t)("An error occurred while fetching schema values: %s",e))))),paginate:!0},{Header:(0,r.t)("Search"),id:"label",input:"search",operator:v.p.allText}]),[t]);return(0,E.tZ)(l.Fragment,null,(0,E.tZ)(b.Z,ee),z&&(0,E.tZ)(w.Z,{description:(0,r.t)("This action will permanently delete the saved query."),onConfirm:()=>{z&&(e=>{let{id:n,label:l}=e;o.Z.delete({endpoint:`/api/v1/saved_query/${n}`}).then((()=>{I(),P(null),a((0,r.t)("Deleted: %s",l))}),(0,c.v$)((e=>t((0,r.t)("There was an issue deleting %s: %s",l,e)))))})(z)},onHide:()=>P(null),open:!0,title:(0,r.t)("Delete Query?")}),H&&(0,E.tZ)(R,{fetchData:J,onHide:()=>M(null),savedQuery:H,queries:d,openInSqlLab:ae,show:!0}),(0,E.tZ)(g.Z,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected queries?"),onConfirm:e=>{o.Z.delete({endpoint:`/api/v1/saved_query/?q=${i().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;I(),a(t.message)}),(0,c.v$)((e=>t((0,r.t)("There was an issue deleting the selected queries: %s",e)))))}},(e=>{const t=[];return X&&t.push({key:"delete",name:(0,r.t)("Delete"),onSelect:e,type:"danger"}),G&&t.push({key:"export",name:(0,r.t)("Export"),type:"primary",onSelect:ne}),(0,E.tZ)(v.Z,{className:"saved_query-list-view",columns:le,count:s,data:d,fetchData:_,filters:se,initialSort:oe,loading:n,pageSize:25,bulkActions:t,bulkSelectEnabled:m,disableBulkSelect:N,highlightRowId:null==H?void 0:H.id})})),(0,E.tZ)($.Z,{resourceName:"saved_query",resourceLabel:(0,r.t)("queries"),passwordsNeededMessage:L,confirmOverwriteMessage:F,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{K(!1),I(),a((0,r.t)("Query imported"))},show:O,onHide:()=>{K(!1)},passwordFields:A,setPasswordFields:B}),j&&(0,E.tZ)(Z.Z,null))}))}}]);
//# sourceMappingURL=46068d9c3c8a2a417df0.chunk.js.map