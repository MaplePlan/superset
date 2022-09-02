"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7633],{95413:(e,t,r)=>{r.d(t,{Y:()=>s});var a=r(61988);const s={name:(0,a.t)("Data"),tabs:[{name:"Databases",label:(0,a.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,a.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,a.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,a.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},31673:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(5872),s=r.n(a),l=(r(67294),r(51995)),n=r(61988),o=r(33743),i=r(49889),u=r(53459),c=r(22489),d=r(120),g=r(42110),p=r(70163),h=r(10222),m=r(11965);g.Z.registerLanguage("sql",o.Z),g.Z.registerLanguage("markdown",u.Z),g.Z.registerLanguage("html",i.Z),g.Z.registerLanguage("json",c.Z);const b=l.iK.div`
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
`;function y(e){let{addDangerToast:t,addSuccessToast:r,children:a,...l}=e;return(0,m.tZ)(b,null,(0,m.tZ)(p.Z.Copy,{tabIndex:0,role:"button",onClick:e=>{var s;e.preventDefault(),e.currentTarget.blur(),s=a,(0,h.Z)((()=>Promise.resolve(s))).then((()=>{r&&r((0,n.t)("SQL Copied!"))})).catch((()=>{t&&t((0,n.t)("Sorry, your browser does not support copying."))}))}}),(0,m.tZ)(g.Z,s()({style:d.Z},l),a))}},14025:(e,t,r)=>{r.d(t,{C:()=>s});var a=r(67294);function s(e){let{queries:t,fetchData:r,currentQueryId:s}=e;const l=t.findIndex((e=>e.id===s)),[n,o]=(0,a.useState)(l),[i,u]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!1);function g(){u(0===n),d(n===t.length-1)}function p(e){const a=n+(e?-1:1);a>=0&&a<t.length&&(r(t[a].id),o(a),g())}return(0,a.useEffect)((()=>{g()})),{handleKeyPress:function(e){n>=0&&n<t.length&&("ArrowDown"===e.key||"k"===e.key?(e.preventDefault(),p(!1)):"ArrowUp"!==e.key&&"j"!==e.key||(e.preventDefault(),p(!0)))},handleDataChange:p,disablePrevious:i,disableNext:c}}},82842:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var a=r(67294),s=r(51995),l=r(61988),n=r(31069),o=r(30381),i=r.n(o),u=r(40768),c=r(14114),d=r(34858),g=r(20755),p=r(76697),h=r(95413),m=r(18782),b=r(58593),y=r(42110),Z=r(33743),v=r(120),f=r(27600),x=r(12),q=r(70163),w=r(74069),S=r(94184),C=r.n(S),$=r(35932),k=r(31673),D=r(14025),z=r(11965);const H=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.secondary.light2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,L=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
  padding: 4px 0 24px 0;
`,T=s.iK.div`
  margin: 0 0 ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px 0;
`,_=s.iK.div`
  display: inline;
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  margin-right: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  color: ${e=>{let{theme:t}=e;return t.colors.secondary.dark1}};

  &.active,
  &:focus,
  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.secondary.light4}};
    border-bottom: none;
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  &:hover:not(.active) {
    background: ${e=>{let{theme:t}=e;return t.colors.secondary.light5}};
  }
`,K=(0,s.iK)(w.Z)`
  .ant-modal-body {
    padding: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
  }

  pre {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.xs}}px;
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
    line-height: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
    height: 375px;
    border: none;
  }
`,J=(0,c.ZP)((function(e){let{onHide:t,openInSqlLab:r,queries:s,query:n,fetchData:o,show:i,addDangerToast:u,addSuccessToast:c}=e;const{handleKeyPress:d,handleDataChange:g,disablePrevious:p,disableNext:h}=(0,D.C)({queries:s,currentQueryId:n.id,fetchData:o}),[m,b]=(0,a.useState)("user"),{id:y,sql:Z,executed_sql:v}=n;return(0,z.tZ)("div",{role:"none",onKeyUp:d},(0,z.tZ)(K,{onHide:t,show:i,title:(0,l.t)("Query preview"),footer:(0,z.tZ)(a.Fragment,null,(0,z.tZ)($.Z,{key:"previous-query",disabled:p,onClick:()=>g(!0)},(0,l.t)("Previous")),(0,z.tZ)($.Z,{key:"next-query",disabled:h,onClick:()=>g(!1)},(0,l.t)("Next")),(0,z.tZ)($.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>r(y)},(0,l.t)("Open in SQL Lab")))},(0,z.tZ)(H,null,(0,l.t)("Tab name")),(0,z.tZ)(L,null,n.tab_name),(0,z.tZ)(T,null,(0,z.tZ)(_,{role:"button",className:C()({active:"user"===m}),onClick:()=>b("user")},(0,l.t)("User query")),(0,z.tZ)(_,{role:"button",className:C()({active:"executed"===m}),onClick:()=>b("executed")},(0,l.t)("Executed query"))),(0,z.tZ)(k.Z,{addDangerToast:u,addSuccessToast:c,language:"sql"},("user"===m?Z:v)||"")))})),Q=(0,s.iK)(m.Z)`
  table .table-cell {
    vertical-align: top;
  }
`;y.Z.registerLanguage("sql",Z.Z);const U=(0,s.iK)(y.Z)`
  height: ${e=>{let{theme:t}=e;return 26*t.gridUnit}}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,I=s.iK.div`
  .count {
    margin-left: 5px;
    color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
    text-decoration: underline;
    cursor: pointer;
  }
`,A=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
`,P=(0,c.ZP)((function(e){let{addDangerToast:t}=e;const{state:{loading:r,resourceCount:o,resourceCollection:c},fetchData:y}=(0,d.Yi)("query",(0,l.t)("Query history"),t,!1),[Z,w]=(0,a.useState)(),S=(0,s.Fg)(),C=(0,a.useCallback)((e=>{n.Z.get({endpoint:`/api/v1/query/${e}`}).then((e=>{let{json:t={}}=e;w({...t.result})}),(0,u.v$)((e=>t((0,l.t)("There was an issue previewing the selected query. %s",e)))))}),[t]),$={activeChild:"Query history",...h.Y},k=[{id:x.J.start_time,desc:!0}],D=(0,a.useMemo)((()=>[{Cell:e=>{let{row:{original:{status:t}}}=e;const r={name:null,label:""};return"success"===t?(r.name=(0,z.tZ)(q.Z.Check,{iconColor:S.colors.success.base}),r.label=(0,l.t)("Success")):"failed"===t||"stopped"===t?(r.name=(0,z.tZ)(q.Z.XSmall,{iconColor:"failed"===t?S.colors.error.base:S.colors.grayscale.base}),r.label=(0,l.t)("Failed")):"running"===t?(r.name=(0,z.tZ)(q.Z.Running,{iconColor:S.colors.primary.base}),r.label=(0,l.t)("Running")):"timed_out"===t?(r.name=(0,z.tZ)(q.Z.Offline,{iconColor:S.colors.grayscale.light1}),r.label=(0,l.t)("Offline")):"scheduled"!==t&&"pending"!==t||(r.name=(0,z.tZ)(q.Z.Queued,{iconColor:S.colors.grayscale.base}),r.label=(0,l.t)("Scheduled")),(0,z.tZ)(b.u,{title:r.label,placement:"bottom"},(0,z.tZ)("span",null,r.name))},accessor:x.J.status,size:"xs",disableSortBy:!0},{accessor:x.J.start_time,Header:(0,l.t)("Time"),size:"xl",Cell:e=>{let{row:{original:{start_time:t,end_time:r}}}=e;const s=i().utc(t).local().format(f.v2).split(" "),n=(0,z.tZ)(a.Fragment,null,s[0]," ",(0,z.tZ)("br",null),s[1]);return r?(0,z.tZ)(b.u,{title:(0,l.t)("Duration: %s",i()(i().utc(r-t)).format(f.n2)),placement:"bottom"},(0,z.tZ)("span",null,n)):n}},{accessor:x.J.tab_name,Header:(0,l.t)("Tab name"),size:"xl"},{accessor:x.J.database_name,Header:(0,l.t)("Database"),size:"xl"},{accessor:x.J.database,hidden:!0},{accessor:x.J.schema,Header:(0,l.t)("Schema"),size:"xl"},{Cell:e=>{let{row:{original:{sql_tables:t=[]}}}=e;const r=t.map((e=>e.table)),s=r.length>0?r.shift():"";return r.length?(0,z.tZ)(I,null,(0,z.tZ)("span",null,s),(0,z.tZ)(p.ZP,{placement:"right",title:(0,l.t)("TABLES"),trigger:"click",content:(0,z.tZ)(a.Fragment,null,r.map((e=>(0,z.tZ)(A,{key:e},e))))},(0,z.tZ)("span",{className:"count"},"(+",r.length,")"))):s},accessor:x.J.sql_tables,Header:(0,l.t)("Tables"),size:"xl",disableSortBy:!0},{accessor:x.J.user_first_name,Header:(0,l.t)("User"),size:"xl",Cell:e=>{let{row:{original:{user:t}}}=e;return t?`${t.first_name} ${t.last_name}`:""}},{accessor:x.J.user,hidden:!0},{accessor:x.J.rows,Header:(0,l.t)("Rows"),size:"md"},{accessor:x.J.sql,Header:(0,l.t)("SQL"),Cell:e=>{let{row:{original:t,id:r}}=e;return(0,z.tZ)("div",{tabIndex:0,role:"button",onClick:()=>w(t)},(0,z.tZ)(U,{language:"sql",style:v.Z},(0,u.IB)(t.sql,4)))}},{Header:(0,l.t)("Actions"),id:"actions",disableSortBy:!0,Cell:e=>{let{row:{original:{id:t}}}=e;return(0,z.tZ)(b.u,{title:(0,l.t)("Open query in SQL Lab"),placement:"bottom"},(0,z.tZ)("a",{href:`/superset/sqllab?queryId=${t}`},(0,z.tZ)(q.Z.Full,{iconColor:S.colors.grayscale.base})))}}]),[]),H=(0,a.useMemo)((()=>[{Header:(0,l.t)("Database"),id:"database",input:"select",operator:m.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,u.tm)("query","database",(0,u.v$)((e=>t((0,l.t)("An error occurred while fetching database values: %s",e))))),paginate:!0},{Header:(0,l.t)("State"),id:"status",input:"select",operator:m.p.equals,unfilteredLabel:"All",fetchSelects:(0,u.wk)("query","status",(0,u.v$)((e=>t((0,l.t)("An error occurred while fetching schema values: %s",e))))),paginate:!0},{Header:(0,l.t)("User"),id:"user",input:"select",operator:m.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,u.tm)("query","user",(0,u.v$)((e=>t((0,l.t)("An error occurred while fetching user values: %s",e))))),paginate:!0},{Header:(0,l.t)("Time range"),id:"start_time",input:"datetime_range",operator:m.p.between},{Header:(0,l.t)("Search by query text"),id:"sql",input:"search",operator:m.p.contains}]),[t]);return(0,z.tZ)(a.Fragment,null,(0,z.tZ)(g.Z,$),Z&&(0,z.tZ)(J,{onHide:()=>w(void 0),query:Z,queries:c,fetchData:C,openInSqlLab:e=>window.location.assign(`/superset/sqllab?queryId=${e}`),show:!0}),(0,z.tZ)(Q,{className:"query-history-list-view",columns:D,count:o,data:c,fetchData:y,filters:H,initialSort:k,loading:r,pageSize:25,highlightRowId:null==Z?void 0:Z.id}))}))}}]);
//# sourceMappingURL=ca8e3b275562feee86a6.chunk.js.map