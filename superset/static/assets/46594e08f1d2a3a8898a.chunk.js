"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4502],{95413:(e,a,t)=>{t.d(a,{Y:()=>s});var l=t(61988);const s={name:(0,l.t)("Data"),tabs:[{name:"Databases",label:(0,l.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,l.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,l.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,l.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},30075:(e,a,t)=>{t.r(a),t.d(a,{default:()=>H});var l=t(51995),s=t(61988),o=t(31069),n=t(67294),r=t(15926),i=t.n(r),d=t(37703),u=t(35755),c=t(38703),b=t(91877),p=t(93185),m=t(34858),h=t(40768),_=t(14114),Z=t(20755),v=t(17198),w=t(23525),f=t(27600),S=t(58593),g=t(70163),y=t(53002),C=t(18782),E=t(95413),D=t(32228),x=t(6238),N=t(11965);const k=(0,l.iK)(g.Z.Check)`
  color: ${e=>{let{theme:a}=e;return a.colors.grayscale.dark1}};
`,A=(0,l.iK)(g.Z.CancelX)`
  color: ${e=>{let{theme:a}=e;return a.colors.grayscale.dark1}};
`,q=l.iK.div`
  color: ${e=>{let{theme:a}=e;return a.colors.grayscale.base}};

  .action-button {
    display: inline-block;
    height: 100%;
  }
`;function L(e){let{value:a}=e;return a?(0,N.tZ)(k,null):(0,N.tZ)(A,null)}const H=(0,_.ZP)((function(e){let{addDangerToast:a,addSuccessToast:t}=e;const{state:{loading:l,resourceCount:r,resourceCollection:_},hasPerm:k,fetchData:A,refreshData:H}=(0,m.Yi)("database",(0,s.t)("database"),a),T=(0,d.v9)((e=>e.user)),z=(0,w.eY)(f.KD.showDatabaseModal),[O,U]=(0,u.Kx)({databaseAdded:u.dJ}),[$,I]=(0,n.useState)(z||!1),[Q,R]=(0,n.useState)(null),[X,M]=(0,n.useState)(null),[V,Y]=(0,n.useState)(!1),K=(0,y.i)(T),j=V||K,[B,P]=(0,n.useState)(!1),{roles:F}=T,{CSV_EXTENSIONS:J,COLUMNAR_EXTENSIONS:W,EXCEL_EXTENSIONS:G,ALLOWED_EXTENSIONS:ee}=(0,d.v9)((e=>e.common.conf));function ae(e){let{database:a=null,modalOpen:t=!1}=void 0===e?{}:e;M(a),I(t)}(0,n.useEffect)((()=>{null!=O&&O.databaseAdded&&(U({databaseAdded:void 0}),H())}),[O,U,H]);const te=k("can_write"),le=k("can_write"),se=k("can_write"),oe=k("can_export")&&(0,b.cr)(p.T.VERSIONED_EXPORT),{canUploadCSV:ne,canUploadColumnar:re,canUploadExcel:ie}=(0,h.Mc)(F,J,W,G,ee),de=K&&!V,ue=[{label:(0,s.t)("Upload file to database"),childs:[{label:(0,s.t)("Upload CSV"),name:"Upload CSV file",url:"/csvtodatabaseview/form",perm:ne&&j,disable:de},{label:(0,s.t)("Upload columnar file"),name:"Upload columnar file",url:"/columnartodatabaseview/form",perm:re&&j,disable:de},{label:(0,s.t)("Upload Excel file"),name:"Upload Excel file",url:"/exceltodatabaseview/form",perm:ie&&j,disable:de}]}];(0,n.useEffect)((()=>{o.Z.get({endpoint:`/api/v1/database/?q=${i().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((e=>{let{json:a}=e;Y(a.count>=1)}))}),[$]);const ce={activeChild:"Databases",dropDownLinks:ue.reduce(((e,a)=>(a.childs=a.childs.filter((e=>e.perm)),a.childs.length?(e.push(a),e):e)),[]),...E.Y};te&&(ce.buttons=[{"data-test":"btn-create-database",name:(0,N.tZ)(n.Fragment,null,(0,N.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Database")," "),buttonStyle:"primary",onClick:()=>{ae({modalOpen:!0})}}]);const be=(0,n.useMemo)((()=>[{accessor:"database_name",Header:(0,s.t)("Database")},{accessor:"backend",Header:(0,s.t)("Backend"),size:"lg",disableSortBy:!0},{accessor:"allow_run_async",Header:(0,N.tZ)(S.u,{id:"allow-run-async-header-tooltip",title:(0,s.t)("Asynchronous query execution"),placement:"top"},(0,N.tZ)("span",null,(0,s.t)("AQE"))),Cell:e=>{let{row:{original:{allow_run_async:a}}}=e;return(0,N.tZ)(L,{value:a})},size:"sm"},{accessor:"allow_dml",Header:(0,N.tZ)(S.u,{id:"allow-dml-header-tooltip",title:(0,s.t)("Allow data manipulation language"),placement:"top"},(0,N.tZ)("span",null,(0,s.t)("DML"))),Cell:e=>{let{row:{original:{allow_dml:a}}}=e;return(0,N.tZ)(L,{value:a})},size:"sm"},{accessor:"allow_file_upload",Header:(0,s.t)("CSV upload"),Cell:e=>{let{row:{original:{allow_file_upload:a}}}=e;return(0,N.tZ)(L,{value:a})},size:"md"},{accessor:"expose_in_sqllab",Header:(0,s.t)("Expose in SQL Lab"),Cell:e=>{let{row:{original:{expose_in_sqllab:a}}}=e;return(0,N.tZ)(L,{value:a})},size:"md"},{accessor:"created_by",disableSortBy:!0,Header:(0,s.t)("Created by"),Cell:e=>{let{row:{original:{created_by:a}}}=e;return a?`${a.first_name} ${a.last_name}`:""},size:"xl"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:a}}}=e;return a},Header:(0,s.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:a}}=e;return le||se||oe?(0,N.tZ)(q,{className:"actions"},se&&(0,N.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return e=a,o.Z.get({endpoint:`/api/v1/database/${e.id}/related_objects/`}).then((a=>{let{json:t={}}=a;R({...e,chart_count:t.charts.count,dashboard_count:t.dashboards.count,sqllab_tab_count:t.sqllab_tab_states.count})})).catch((0,h.v$)((e=>(0,s.t)("An error occurred while fetching database related data: %s",e))));var e}},(0,N.tZ)(S.u,{id:"delete-action-tooltip",title:(0,s.t)("Delete database"),placement:"bottom"},(0,N.tZ)(g.Z.Trash,null))),oe&&(0,N.tZ)(S.u,{id:"export-action-tooltip",title:(0,s.t)("Export"),placement:"bottom"},(0,N.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{var e;void 0!==(e=a).id&&((0,D.Z)("database",[e.id],(()=>{P(!1)})),P(!0))}},(0,N.tZ)(g.Z.Share,null))),le&&(0,N.tZ)(S.u,{id:"edit-action-tooltip",title:(0,s.t)("Edit"),placement:"bottom"},(0,N.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ae({database:a,modalOpen:!0})},(0,N.tZ)(g.Z.EditAlt,null)))):null},Header:(0,s.t)("Actions"),id:"actions",hidden:!le&&!se,disableSortBy:!0}]),[se,le,oe]),pe=(0,n.useMemo)((()=>[{Header:(0,s.t)("Expose in SQL Lab"),id:"expose_in_sqllab",input:"select",operator:C.p.equals,unfilteredLabel:"All",selects:[{label:"Yes",value:!0},{label:"No",value:!1}]},{Header:(0,N.tZ)(S.u,{id:"allow-run-async-filter-header-tooltip",title:(0,s.t)("Asynchronous query execution"),placement:"top"},(0,N.tZ)("span",null,(0,s.t)("AQE"))),id:"allow_run_async",input:"select",operator:C.p.equals,unfilteredLabel:"All",selects:[{label:"Yes",value:!0},{label:"No",value:!1}]},{Header:(0,s.t)("Search"),id:"database_name",input:"search",operator:C.p.contains}]),[]);return(0,N.tZ)(n.Fragment,null,(0,N.tZ)(Z.Z,ce),(0,N.tZ)(x.Z,{databaseId:null==X?void 0:X.id,show:$,onHide:ae,onDatabaseAdd:()=>{H()}}),Q&&(0,N.tZ)(v.Z,{description:(0,s.t)("The database %s is linked to %s charts that appear on %s dashboards and users have %s SQL Lab tabs using this database open. Are you sure you want to continue? Deleting the database will break those objects.",Q.database_name,Q.chart_count,Q.dashboard_count,Q.sqllab_tab_count),onConfirm:()=>{Q&&function(e){let{id:l,database_name:n}=e;o.Z.delete({endpoint:`/api/v1/database/${l}`}).then((()=>{H(),t((0,s.t)("Deleted: %s",n)),R(null)}),(0,h.v$)((e=>a((0,s.t)("There was an issue deleting %s: %s",n,e)))))}(Q)},onHide:()=>R(null),open:!0,title:(0,s.t)("Delete Database?")}),(0,N.tZ)(C.Z,{className:"database-list-view",columns:be,count:r,data:_,fetchData:A,filters:pe,initialSort:[{id:"changed_on_delta_humanized",desc:!0}],loading:l,pageSize:25}),B&&(0,N.tZ)(c.Z,null))}))}}]);
//# sourceMappingURL=46594e08f1d2a3a8898a.chunk.js.map