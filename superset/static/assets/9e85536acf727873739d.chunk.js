"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5656],{73995:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(67294),n=a(51995),s=a(31069),r=a(61988),i=a(15926),o=a.n(i),d=a(4715),c=a(37921),u=a(49238),m=a(40277),p=a(14114),h=a(11965);const b=n.iK.div`
  ${e=>{let{theme:t}=e;return`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${t.gridUnit}px;\n      margin-top: ${5*t.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .select {\n      width: calc(100% - 30px - ${t.gridUnit}px);\n      flex: 1;\n    }\n\n    & > div {\n      margin-bottom: ${4*t.gridUnit}px;\n    }\n  `}}
`,g=n.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${e=>{let{theme:t}=e;return t.gridUnit-2}}px;

  .backend {
    overflow: visible;
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Z=e=>{let{backend:t,databaseName:a}=e;return(0,h.tZ)(g,null,(0,h.tZ)(c.Z,{className:"backend"},t),(0,h.tZ)("span",{className:"name",title:a},a))};function f(e){let{db:t,formMode:a=!1,emptyState:n,getDbList:i,handleError:c,isDatabaseSelectEnabled:g=!0,onDbChange:f,onEmptyResults:v,onSchemaChange:y,onSchemasLoad:w,readOnly:S=!1,schema:x,sqlLabMode:C=!1}=e;const[_,k]=(0,l.useState)(!1),[$,D]=(0,l.useState)([]),[E,N]=(0,l.useState)(t?{label:(0,h.tZ)(Z,{backend:t.backend,databaseName:t.database_name}),value:t.id,...t}:void 0),[T,H]=(0,l.useState)(x?{label:x,value:x}:void 0),[L,R]=(0,l.useState)(0),{addSuccessToast:I}=(0,p.e1)(),M=(0,l.useMemo)((()=>async(e,t,l)=>{const n=`/api/v1/database/?q=${o().encode({order_columns:"database_name",order_direction:"asc",page:t,page_size:l,...a||!C?{filters:[{col:"database_name",opr:"ct",value:e}]}:{filters:[{col:"database_name",opr:"ct",value:e},{col:"expose_in_sqllab",opr:"eq",value:!0}]}})}`;return s.Z.get({endpoint:n}).then((t=>{let{json:a}=t;const{result:l}=a;i&&i(l),0===l.length&&v&&v(e);const n=l.map((e=>({label:(0,h.tZ)(Z,{backend:e.backend,databaseName:e.database_name}),value:e.id,id:e.id,database_name:e.database_name,backend:e.backend,allow_multi_schema_metadata_fetch:e.allow_multi_schema_metadata_fetch})));return{data:n,totalCount:n.length}}))}),[a,i,C]);function P(e,t){return(0,h.tZ)("div",{className:"section"},(0,h.tZ)("span",{className:"select"},e),(0,h.tZ)("span",{className:"refresh"},t))}return(0,l.useEffect)((()=>{if(E){k(!0);const e=o().encode({force:L>0}),t=`/api/v1/database/${E.value}/schemas/?q=${e}`;s.Z.get({endpoint:t}).then((e=>{let{json:t}=e;const a=t.result.map((e=>({value:e,label:e,title:e})));w&&w(a),D(a),k(!1),L>0&&I("List refreshed")})).catch((()=>{k(!1),c((0,r.t)("There was an error loading the schemas"))}))}}),[E,w,L]),(0,h.tZ)(b,null,P((0,h.tZ)(d.qb,{ariaLabel:(0,r.t)("Select database or type database name"),optionFilterProps:["database_name","value"],header:(0,h.tZ)(u.lX,null,(0,r.t)("Database")),lazyLoading:!1,notFoundContent:n,onChange:function(e,t){N(t),H(void 0),f&&f(t),y&&y(void 0)},value:E,placeholder:(0,r.t)("Select database or type database name"),disabled:!g||S,options:M}),null),function(){const e=!a&&!S&&(0,h.tZ)(m.Z,{onClick:()=>R(L+1),tooltipContent:(0,r.t)("Force refresh schema list")});return P((0,h.tZ)(d.Ph,{ariaLabel:(0,r.t)("Select schema or type schema name"),disabled:!E||S,header:(0,h.tZ)(u.lX,null,(0,r.t)("Schema")),labelInValue:!0,loading:_,name:"select-schema",placeholder:(0,r.t)("Select schema or type schema name"),onChange:e=>function(e){H(e),y&&y(e.value)}(e),options:$,showSearch:!0,value:T}),e)}())}},27989:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(67294),n=a(51995),s=a(61988),r=a(35932),i=a(74069),o=a(4715),d=a(34858),c=a(60972),u=a(11965);const m=n.iK.div`
  display: block;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,p=n.iK.div`
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
`,h=e=>{let{resourceName:t,resourceLabel:a,passwordsNeededMessage:n,confirmOverwriteMessage:h,onModelImport:b,show:g,onHide:Z,passwordFields:f=[],setPasswordFields:v=(()=>{})}=e;const[y,w]=(0,l.useState)(!0),[S,x]=(0,l.useState)({}),[C,_]=(0,l.useState)(!1),[k,$]=(0,l.useState)(!1),[D,E]=(0,l.useState)([]),[N,T]=(0,l.useState)(!1),[H,L]=(0,l.useState)(),R=()=>{E([]),v([]),x({}),_(!1),$(!1),T(!1),L("")},{state:{alreadyExists:I,passwordsNeeded:M},importResource:P}=(0,d.PW)(t,a,(e=>{L(e)}));(0,l.useEffect)((()=>{v(M),M.length>0&&T(!1)}),[M,v]),(0,l.useEffect)((()=>{_(I.length>0),I.length>0&&T(!1)}),[I,_]);return y&&g&&w(!1),(0,u.tZ)(i.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===D.length||C&&!k||N,onHandledPrimaryAction:()=>{var e;(null==(e=D[0])?void 0:e.originFileObj)instanceof File&&(T(!0),P(D[0].originFileObj,S,k).then((e=>{e&&(R(),b())})))},onHide:()=>{w(!0),Z(),R()},primaryButtonName:C?(0,s.t)("Overwrite"):(0,s.t)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:g,title:(0,u.tZ)("h4",null,(0,s.t)("Import %s",a))},(0,u.tZ)(p,null,(0,u.tZ)(o.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:D,onChange:e=>{E([{...e.file,status:"done"}])},onRemove:e=>(E(D.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:N},(0,u.tZ)(r.Z,{loading:N},"Select file"))),H&&(0,u.tZ)(c.Z,{errorMessage:H,showDbInstallInstructions:f.length>0}),0===f.length?null:(0,u.tZ)(l.Fragment,null,(0,u.tZ)("h5",null,"Database passwords"),(0,u.tZ)(m,null,n),f.map((e=>(0,u.tZ)(p,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},e,(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:S[e],onChange:t=>x({...S,[e]:t.target.value})}))))),C?(0,u.tZ)(l.Fragment,null,(0,u.tZ)(p,null,(0,u.tZ)("div",{className:"confirm-overwrite"},h),(0,u.tZ)("div",{className:"control-label"},(0,s.t)('Type "%s" to confirm',(0,s.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const l=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";$(l.toUpperCase()===(0,s.t)("OVERWRITE"))}}))):null)}},40277:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(58593),s=a(70163),r=a(11965);const i=e=>{let{onClick:t,tooltipContent:a}=e;const i=(0,l.forwardRef)(((e,t)=>(0,r.tZ)(s.Z.Refresh,e)));return(0,r.tZ)(n.u,{title:a},(0,r.tZ)(i,{role:"button",onClick:t,css:e=>({cursor:"pointer",color:e.colors.grayscale.base,"&:hover":{color:e.colors.primary.base}})}))}},17982:(e,t,a)=>{a.d(t,{P:()=>C,Z:()=>_});var l=a(5872),n=a.n(l),s=a(78580),r=a.n(s),i=a(67294),o=a(51995),d=a(31069),c=a(61988),u=a(4715),m=a(49238),p=a(70163),h=a(73995),b=a(40277),g=a(79789),Z=a(86057),f=a(14114),v=a(11965);const y=o.iK.div`
  ${e=>{let{theme:t}=e;return`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${t.gridUnit}px;\n      margin-top: ${5*t.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .divider {\n      border-bottom: 1px solid ${t.colors.secondary.light5};\n      margin: 15px 0;\n    }\n\n    .table-length {\n      color: ${t.colors.grayscale.light1};\n    }\n\n    .select {\n      flex: 1;\n    }\n  `}}
`,w=o.iK.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,S=e=>{let{table:t}=e;const{label:a,type:l,extra:n}=t;return(0,v.tZ)(w,{title:a},"view"===l?(0,v.tZ)(p.Z.Eye,{iconSize:"m"}):(0,v.tZ)(p.Z.Table,{iconSize:"m"}),(null==n?void 0:n.certification)&&(0,v.tZ)(g.Z,{certifiedBy:n.certification.certified_by,details:n.certification.details,size:"l"}),(null==n?void 0:n.warning_markdown)&&(0,v.tZ)(Z.Z,{warningMarkdown:n.warning_markdown,size:"l"}),a)},x=e=>{let{database:t,emptyState:a,formMode:l=!1,getDbList:n,handleError:s,isDatabaseSelectEnabled:o=!0,onDbChange:p,onSchemaChange:g,onSchemasLoad:Z,onTablesLoad:w,readOnly:x=!1,onEmptyResults:C,schema:_,sqlLabMode:k=!0,tableSelectMode:$="single",tableValue:D,onTableSelectChange:E}=e;const[N,T]=(0,i.useState)(t),[H,L]=(0,i.useState)(_),[R,I]=(0,i.useState)([]),[M,P]=(0,i.useState)(void 0),[A,U]=(0,i.useState)(0),[z,q]=(0,i.useState)(0),[B,O]=(0,i.useState)(!1),{addSuccessToast:F}=(0,f.e1)();(0,i.useEffect)((()=>{void 0===t&&(T(void 0),L(void 0),P(void 0))}),[t,$]),(0,i.useEffect)((()=>{T(t)}),[t]),(0,i.useEffect)((()=>{P("single"===$?R.find((e=>e.value===D)):(null==R?void 0:R.filter((e=>e&&(null==D?void 0:r()(D).call(D,e.value)))))||[])}),[R,D,$]),(0,i.useEffect)((()=>{if(N&&H){O(!0);const e=encodeURIComponent(H),t=A!==z,a=encodeURI(`/superset/tables/${N.id}/${e}/undefined/${t}/`);z!==A&&q(A),d.Z.get({endpoint:a}).then((e=>{let{json:a}=e;const l=a.options.map((e=>({value:e.value,label:(0,v.tZ)(S,{table:e}),text:e.label})));null==w||w(a.options),I(l),O(!1),t&&F("List updated")})).catch((()=>{O(!1),s((0,c.t)("There was an error loading the tables"))}))}}),[N,H,w,I,A]);const V=e=>{H?null==E||E(Array.isArray(e)?e.map((e=>null==e?void 0:e.value)):null==e?void 0:e.value,H):P(e)},j=(0,i.useMemo)((()=>(e,t)=>{var a;const l=e.trim().toLowerCase(),{text:n}=t;return r()(a=n.toLowerCase()).call(a,l)}),[]);return(0,v.tZ)(y,null,(0,v.tZ)(h.Z,{key:null==N?void 0:N.id,db:N,emptyState:a,formMode:l,getDbList:n,handleError:s,onDbChange:x?void 0:e=>{T(e),p&&p(e)},onEmptyResults:C,onSchemaChange:x?void 0:e=>{L(e),g&&g(e),V(void 0)},onSchemasLoad:Z,schema:H,sqlLabMode:k,isDatabaseSelectEnabled:o&&!x,readOnly:x}),k&&!l&&(0,v.tZ)("div",{className:"divider"}),function(){const e=H&&!l&&x||!H&&!(null!=t&&t.allow_multi_schema_metadata_fetch),a=k?(0,v.tZ)(m.lX,null,(0,c.t)("See table schema")):(0,v.tZ)(m.lX,null,(0,c.t)("Table"));return n=(0,v.tZ)(u.Ph,{ariaLabel:(0,c.t)("Select table or type table name"),disabled:e,filterOption:j,header:a,labelInValue:!0,loading:B,name:"select-table",onChange:e=>V(e),options:R,placeholder:(0,c.t)("Select table or type table name"),showSearch:!0,mode:$,value:M,allowClear:"multiple"===$}),s=!l&&!x&&(0,v.tZ)(b.Z,{onClick:()=>U(A+1),tooltipContent:(0,c.t)("Force refresh table list")}),(0,v.tZ)("div",{className:"section"},(0,v.tZ)("span",{className:"select"},n),(0,v.tZ)("span",{className:"refresh"},s));var n,s}())},C=e=>(0,v.tZ)(x,n()({tableSelectMode:"multiple"},e)),_=x},95413:(e,t,a)=>{a.d(t,{Y:()=>n});var l=a(61988);const n={name:(0,l.t)("Data"),tabs:[{name:"Databases",label:(0,l.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,l.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,l.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,l.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},76430:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var l=a(78580),n=a.n(l),s=a(51995),r=a(61988),i=a(31069),o=a(67294),d=a(15926),c=a.n(d),u=a(5977),m=a(40768),p=a(61337),h=a(34858),b=a(19259),g=a(77775),Z=a(17198),f=a(32228),v=a(18782),y=a(38703),w=a(20755),S=a(95413),x=a(14114),C=a(58593),_=a(70163),k=a(34581),$=a(79789),D=a(8272),E=a(27989),N=a(91877),T=a(93185),H=a(86057),L=a(53002),R=a(85931),I=a(74069),M=a(17982),P=a(11965);const A=s.iK.div`
  padding-bottom: 340px;
  width: 65%;
`,U=(0,x.ZP)((e=>{let{addDangerToast:t,onDatasetAdd:a,onHide:l,show:n}=e;const[s,i]=(0,o.useState)(),[d,c]=(0,o.useState)(""),[u,m]=(0,o.useState)(""),[b,g]=(0,o.useState)(!0),{createResource:Z,state:{loading:f}}=(0,h.LE)("dataset",(0,r.t)("dataset"),t);(0,o.useEffect)((()=>{g(void 0===s||""===u)}),[u,s]),(0,o.useEffect)((()=>{const e=(0,p.rV)(p.dR.db,null);e&&i(e)}),[]);const v=()=>{(0,p.LS)(p.dR.db,null),c(""),m(""),i(void 0),g(!0),l()};return(0,P.tZ)(I.Z,{disablePrimaryButton:b,primaryButtonLoading:f,onHandledPrimaryAction:()=>{if(void 0===s)return;const e={database:s.id,...d?{schema:d}:{},table_name:u};Z(e).then((e=>{e&&(a&&a({id:e.id,...e}),window.location.href=`/chart/add?dataset=${u}`,v())}))},onHide:v,primaryButtonName:(0,r.t)("Add Dataset and Create Chart"),show:n,title:(0,r.t)("Add dataset")},(0,P.tZ)(A,null,(0,P.tZ)(M.Z,{clearable:!1,formMode:!0,database:s,schema:d,tableValue:u,onDbChange:e=>{i(e)},onSchemaChange:e=>{c(e)},onTableSelectChange:e=>{m(e)},handleError:t})))}));var z=a(52389),q=a(49238),B=a(9875);const O=e=>{let{dataset:t,onHide:a,onDuplicate:l}=e;const[n,s]=(0,o.useState)(!1),[i,d]=(0,o.useState)(!1),[c,u]=(0,o.useState)(""),m=()=>{l(c)};return(0,o.useEffect)((()=>{u(""),s(null!==t)}),[t]),(0,P.tZ)(I.Z,{show:n,onHide:a,title:(0,r.t)("Duplicate dataset"),disablePrimaryButton:i,onHandledPrimaryAction:m,primaryButtonName:(0,r.t)("Duplicate")},(0,P.tZ)(q.lX,{htmlFor:"duplicate"},(0,r.t)("New dataset name")),(0,P.tZ)(B.II,{type:"text",id:"duplicate",autoComplete:"off",value:c,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";u(a),d(""===a)},onPressEnter:m}))},F=s.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,V=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};

  .disabled {
    svg,
    i {
      &:hover {
        path {
          fill: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
        }
      }
    }
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    .ant-menu-item:hover {
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
      cursor: default;
    }
    &::after {
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    }
  }
`,j=(0,x.ZP)((e=>{let{addDangerToast:t,addSuccessToast:a,user:l}=e;const{state:{loading:s,resourceCount:d,resourceCollection:x,bulkSelectEnabled:I},hasPerm:M,fetchData:A,toggleBulkSelect:q,refreshData:B}=(0,h.Yi)("dataset",(0,r.t)("dataset"),t),[j,K]=(0,o.useState)(!1),[X,Y]=(0,o.useState)(null),[W,J]=(0,o.useState)(null),[Q,G]=(0,o.useState)(null),[ee,te]=(0,o.useState)(!1),[ae,le]=(0,o.useState)([]),[ne,se]=(0,o.useState)(!1),re=M("can_write"),ie=M("can_write"),oe=M("can_write"),de=M("can_duplicate"),ce=M("can_export")&&(0,N.cr)(T.T.VERSIONED_EXPORT),ue=z.dY;(0,o.useEffect)((()=>{const e=(0,p.rV)(p.dR.db,null);!s&&e&&K(!0)}),[s]);const me=(0,o.useCallback)((e=>{let{id:a}=e;i.Z.get({endpoint:`/api/v1/dataset/${a}`}).then((e=>{let{json:t={}}=e;const a=t.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));t.result.columns=[...a],J(t.result)})).catch((()=>{t((0,r.t)("An error occurred while fetching dataset related data"))}))}),[t]),pe=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,f.Z)("dataset",t,(()=>{se(!1)})),se(!0)},he=(0,o.useMemo)((()=>[{Cell:e=>{let{row:{original:{kind:t}}}=e;return"physical"===t?(0,P.tZ)(C.u,{id:"physical-dataset-tooltip",title:(0,r.t)("Physical dataset")},(0,P.tZ)(_.Z.DatasetPhysical,null)):(0,P.tZ)(C.u,{id:"virtual-dataset-tooltip",title:(0,r.t)("Virtual dataset")},(0,P.tZ)(_.Z.DatasetVirtual,null))},accessor:"kind_icon",disableSortBy:!0,size:"xs",id:"id"},{Cell:e=>{let{row:{original:{extra:t,table_name:a,description:l,explore_url:n}}}=e;const s=(0,P.tZ)(R.m,{to:n},a);try{const e=JSON.parse(t);return(0,P.tZ)(F,null,(null==e?void 0:e.certification)&&(0,P.tZ)($.Z,{certifiedBy:e.certification.certified_by,details:e.certification.details,size:"l"}),(null==e?void 0:e.warning_markdown)&&(0,P.tZ)(H.Z,{warningMarkdown:e.warning_markdown,size:"l"}),s,l&&(0,P.tZ)(D.Z,{tooltip:l,viewBox:"0 -1 24 24"}))}catch{return s}},Header:(0,r.t)("Name"),accessor:"table_name"},{Cell:e=>{var t;let{row:{original:{kind:a}}}=e;return(null==(t=a[0])?void 0:t.toUpperCase())+a.slice(1)},Header:(0,r.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,r.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,r.t)("Schema"),accessor:"schema",size:"lg"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return(0,P.tZ)("span",{className:"no-wrap"},t)},Header:(0,r.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:{changed_by_name:t}}}=e;return t},Header:(0,r.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:e=>{let{row:{original:{owners:t=[]}}}=e;return(0,P.tZ)(k.Z,{users:t})},Header:(0,r.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:e=>{var t;let{row:{original:a}}=e;const s=n()(t=a.owners.map((e=>e.id))).call(t,l.userId)||(0,L.i)(l);return re||ie||ce||de?(0,P.tZ)(V,{className:"actions"},ie&&(0,P.tZ)(C.u,{id:"delete-action-tooltip",title:(0,r.t)("Delete"),placement:"bottom"},(0,P.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return e=a,i.Z.get({endpoint:`/api/v1/dataset/${e.id}/related_objects`}).then((t=>{let{json:a={}}=t;Y({...e,chart_count:a.charts.count,dashboard_count:a.dashboards.count})})).catch((0,m.v$)((e=>(0,r.t)("An error occurred while fetching dataset related data: %s",e))));var e}},(0,P.tZ)(_.Z.Trash,null))),ce&&(0,P.tZ)(C.u,{id:"export-action-tooltip",title:(0,r.t)("Export"),placement:"bottom"},(0,P.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>pe([a])},(0,P.tZ)(_.Z.Share,null))),re&&(0,P.tZ)(C.u,{id:"edit-action-tooltip",title:s?(0,r.t)("Edit"):(0,r.t)("You must be a dataset owner in order to edit. Please reach out to a dataset owner to request modifications or edit access."),placement:"bottomRight"},(0,P.tZ)("span",{role:"button",tabIndex:0,className:s?"action-button":"disabled",onClick:s?()=>me(a):void 0},(0,P.tZ)(_.Z.EditAlt,null))),de&&"virtual"===a.kind&&(0,P.tZ)(C.u,{id:"duplicate-action-tooltop",title:(0,r.t)("Duplicate"),placement:"bottom"},(0,P.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{G(a)}},(0,P.tZ)(_.Z.Copy,null)))):null},Header:(0,r.t)("Actions"),id:"actions",hidden:!re&&!ie&&!de,disableSortBy:!0}]),[re,ie,ce,me,de]),be=(0,o.useMemo)((()=>[{Header:(0,r.t)("Owner"),id:"owners",input:"select",operator:v.p.relationManyMany,unfilteredLabel:"All",fetchSelects:(0,m.tm)("dataset","owners",(0,m.v$)((e=>(0,r.t)("An error occurred while fetching dataset owner values: %s",e))),l),paginate:!0},{Header:(0,r.t)("Database"),id:"database",input:"select",operator:v.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,m.tm)("dataset","database",(0,m.v$)((e=>(0,r.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,r.t)("Schema"),id:"schema",input:"select",operator:v.p.equals,unfilteredLabel:"All",fetchSelects:(0,m.wk)("dataset","schema",(0,m.v$)((e=>(0,r.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,r.t)("Type"),id:"sql",input:"select",operator:v.p.datasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:"Virtual",value:!1},{label:"Physical",value:!0}]},{Header:(0,r.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:v.p.datasetIsCertified,unfilteredLabel:(0,r.t)("Any"),selects:[{label:(0,r.t)("Yes"),value:!0},{label:(0,r.t)("No"),value:!1}]},{Header:(0,r.t)("Search"),id:"table_name",input:"search",operator:v.p.contains}]),[]),ge={activeChild:"Datasets",...S.Y},Ze=[];(ie||ce)&&Ze.push({name:(0,r.t)("Bulk select"),onClick:q,buttonStyle:"secondary"});const fe=(0,u.TH)(),ve=(0,u.k6)();(0,o.useEffect)((()=>{const e="#create"===fe.hash&&oe;K(e)}),[oe,fe.hash]);const ye=(0,o.useCallback)((()=>{ve.replace(`${fe.pathname}${fe.search}#create`)}),[ve,fe.pathname,fe.search]),we=(0,o.useCallback)((()=>{ve.replace(`${fe.pathname}${fe.search}`)}),[ve,fe.pathname,fe.search]);return oe&&(Ze.push({name:(0,P.tZ)(o.Fragment,null,(0,P.tZ)("i",{className:"fa fa-plus"})," ",(0,r.t)("Dataset")," "),onClick:ye,buttonStyle:"primary"}),(0,N.cr)(T.T.VERSIONED_EXPORT)&&Ze.push({name:(0,P.tZ)(C.u,{id:"import-tooltip",title:(0,r.t)("Import datasets"),placement:"bottomRight"},(0,P.tZ)(_.Z.Import,null)),buttonStyle:"link",onClick:()=>{te(!0)}})),ge.buttons=Ze,(0,P.tZ)(o.Fragment,null,(0,P.tZ)(w.Z,ge),(0,P.tZ)(U,{show:j,onHide:we,onDatasetAdd:B}),X&&(0,P.tZ)(Z.Z,{description:(0,r.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",X.table_name,X.chart_count,X.dashboard_count),onConfirm:()=>{X&&(e=>{let{id:l,table_name:n}=e;i.Z.delete({endpoint:`/api/v1/dataset/${l}`}).then((()=>{B(),Y(null),a((0,r.t)("Deleted: %s",n))}),(0,m.v$)((e=>t((0,r.t)("There was an issue deleting %s: %s",n,e)))))})(X)},onHide:()=>{Y(null)},open:!0,title:(0,r.t)("Delete Dataset?")}),W&&(0,P.tZ)(g.W,{datasource:W,onDatasourceSave:B,onHide:()=>{J(null)},show:!0}),(0,P.tZ)(O,{dataset:Q,onHide:()=>{G(null)},onDuplicate:e=>{null===Q&&t((0,r.t)("There was an issue duplicating the dataset.")),i.Z.post({endpoint:"/api/v1/dataset/duplicate",postPayload:{base_model_id:null==Q?void 0:Q.id,table_name:e}}).then((()=>{G(null),B()}),(0,m.v$)((e=>t((0,r.t)("There was an issue duplicating the selected datasets: %s",e)))))}}),(0,P.tZ)(b.Z,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected datasets?"),onConfirm:e=>{i.Z.delete({endpoint:`/api/v1/dataset/?q=${c().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;B(),a(t.message)}),(0,m.v$)((e=>t((0,r.t)("There was an issue deleting the selected datasets: %s",e)))))}},(e=>{const t=[];return ie&&t.push({key:"delete",name:(0,r.t)("Delete"),onSelect:e,type:"danger"}),ce&&t.push({key:"export",name:(0,r.t)("Export"),type:"primary",onSelect:pe}),(0,P.tZ)(v.Z,{className:"dataset-list-view",columns:he,data:x,count:d,pageSize:z.IV,fetchData:A,filters:be,loading:s,initialSort:ue,bulkActions:t,bulkSelectEnabled:I,disableBulkSelect:q,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,r.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,r.t)("%s Selected (Physical)",e.length,a):(0,r.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,r.t)("0 Selected")}})})),(0,P.tZ)(E.Z,{resourceName:"dataset",resourceLabel:(0,r.t)("dataset"),passwordsNeededMessage:z.iX,confirmOverwriteMessage:z.mI,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{te(!1),B(),a((0,r.t)("Dataset imported"))},show:ee,onHide:()=>{te(!1)},passwordFields:ae,setPasswordFields:le}),ne&&(0,P.tZ)(y.Z,null))}))}}]);
//# sourceMappingURL=9e85536acf727873739d.chunk.js.map