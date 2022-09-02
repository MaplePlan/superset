(()=>{var e,t,a,n,r,i,l,d,o={43063:(e,t,a)=>{var n=a(34963),r=a(80760),i=a(67206),l=a(1469),d=a(94885);e.exports=function(e,t){return(l(e)?n:r)(e,d(i(t,3)))}},19259:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(67294),r=a(17198),i=a(11965);function l(e){let{title:t,description:a,onConfirm:l,children:d}=e;const[o,s]=(0,n.useState)(!1),[c,u]=(0,n.useState)([]),b=()=>{s(!1),u([])};return(0,i.tZ)(n.Fragment,null,d&&d((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),s(!0),u(t)})),(0,i.tZ)(r.Z,{description:a,onConfirm:()=>{l(...c),b()},onHide:b,open:o,title:t}))}},21742:(e,t,a)=>{"use strict";a.d(t,{Z:()=>x});var n=a(11965),r=a(67294),i=a(51995),l=a(4715),d=a(58593),o=a(4144),s=a(79789);const c=i.iK.div`
  width: 64px;
  display: flex;
  justify-content: flex-end;
`,u=(0,i.iK)(l.Ak)`
  ${e=>{let{theme:t}=e;return`\n    border: 1px solid ${t.colors.grayscale.light2};\n    border-radius: ${t.gridUnit}px;\n    overflow: hidden;\n\n    .ant-card-body {\n      padding: ${4*t.gridUnit}px\n        ${2*t.gridUnit}px;\n    }\n    .ant-card-meta-detail > div:not(:last-child) {\n      margin-bottom: 0;\n    }\n    .gradient-container {\n      position: relative;\n      height: 100%;\n    }\n    &:hover {\n      box-shadow: 8px 8px 28px 0px ${t.colors.grayscale.light1};\n      transition: box-shadow ${t.transitionTiming}s ease-in-out;\n\n      .cover-footer {\n        transform: translateY(0);\n      }\n    }\n  `}}
`,b=i.iK.div`
  height: 264px;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  overflow: hidden;

  .cover-footer {
    transform: translateY(${e=>{let{theme:t}=e;return 9*t.gridUnit}}px);
    transition: ${e=>{let{theme:t}=e;return t.transitionTiming}}s ease-out;
  }
`,f=i.iK.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .card-actions {
    margin-left: auto;
    align-self: flex-end;
    padding-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    span[role='img'] {
      display: flex;
      align-items: center;
    }
  }

  .titleRow {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  }
`,h=i.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  & a {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}} !important;
  }
`,m=i.iK.span`
  position: absolute;
  right: -1px;
  bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,p=i.iK.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  top: -${e=>{let{theme:t}=e;return 9*t.gridUnit}}px;
  padding: 0 8px;
`,g=i.iK.div`
  flex: 1;
  overflow: hidden;
`,v=i.iK.div`
  align-self: flex-end;
  margin-left: auto;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`,Z=(0,i.iK)(l.Od)`
  h3 {
    margin: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
  }

  ul {
    margin-bottom: 0;
  }
`,y={rows:1,width:150},_=e=>{let{to:t,children:a}=e;return(0,n.tZ)("a",{href:t},a)};function w(e){let{title:t,subtitle:a,url:c,linkComponent:w,titleRight:x,imgURL:C,imgFallbackURL:S,description:k,coverLeft:E,coverRight:$,actions:I,avatar:T,loading:N,imgPosition:D="top",cover:U,certifiedBy:R,certificationDetails:A}=e;const F=c&&w?w:_,P=(0,i.Fg)();return(0,n.tZ)(u,{cover:U||(0,n.tZ)(b,null,(0,n.tZ)(F,{to:c},(0,n.tZ)("div",{className:"gradient-container"},(0,n.tZ)(o.Z,{src:C||"",fallback:S||"",isLoading:N,position:D}))),(0,n.tZ)(p,{className:"cover-footer"},!N&&E&&(0,n.tZ)(g,null,E),!N&&$&&(0,n.tZ)(v,null,$)))},N&&(0,n.tZ)(l.Ak.Meta,{title:(0,n.tZ)(r.Fragment,null,(0,n.tZ)(f,null,(0,n.tZ)(l.Od.Input,{active:!0,size:"small",css:(0,n.iv)({width:Math.trunc(62.5*P.gridUnit)},"","")}),(0,n.tZ)("div",{className:"card-actions"},(0,n.tZ)(l.Od.Button,{active:!0,shape:"circle"})," ",(0,n.tZ)(l.Od.Button,{active:!0,css:(0,n.iv)({width:10*P.gridUnit},"","")})))),description:(0,n.tZ)(Z,{round:!0,active:!0,title:!1,paragraph:y})}),!N&&(0,n.tZ)(l.Ak.Meta,{title:(0,n.tZ)(f,null,a||null,(0,n.tZ)("div",{className:"titleRow"},(0,n.tZ)(d.u,{title:t},(0,n.tZ)(h,null,(0,n.tZ)(F,{to:c},R&&(0,n.tZ)(r.Fragment,null,(0,n.tZ)(s.Z,{certifiedBy:R,details:A})," "),t))),x&&(0,n.tZ)(m,null,x),(0,n.tZ)("div",{className:"card-actions"},I))),description:k,avatar:T||null}))}w.Actions=c;const x=w},83673:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var n=a(67294),r=a(74069),i=a(9875),l=a(35932),d=a(4715),o=a(15926),s=a.n(o),c=a(51995),u=a(61988),b=a(31069),f=a(98286),h=a(14114),m=a(11965);const p=d.qz.Item,g=(0,c.iK)(d.qz.Item)`
  margin-bottom: 0;
`,v=c.iK.span`
  margin-bottom: 0;
`,Z=(0,h.ZP)((function(e){let{slice:t,onHide:a,onSave:o,show:c,addSuccessToast:h}=e;const[Z,y]=(0,n.useState)(!1),[_]=d.qz.useForm(),[w,x]=(0,n.useState)(t.slice_name||""),[C,S]=(0,n.useState)(null);function k(e){let{error:t,statusText:a,message:n}=e,i=t||a||(0,u.t)("An error has occurred");"Forbidden"===n&&(i=(0,u.t)("You do not have permission to edit this chart")),r.Z.error({title:"Error",content:i,okButtonProps:{danger:!0,className:"btn-danger"}})}const E=(0,n.useCallback)((async function(){try{var e;const a=(await b.Z.get({endpoint:`/api/v1/chart/${t.slice_id}`})).json.result;S(null==a||null==(e=a.owners)?void 0:e.map((e=>({value:e.id,label:`${e.first_name} ${e.last_name}`}))))}catch(e){k(await(0,f.O)(e))}}),[t.slice_id]),$=(0,n.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const n=s().encode({filter:e,page:t,page_size:a});return b.Z.get({endpoint:`/api/v1/chart/related/owners?q=${n}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),I=(0,u.t)("Owners");return(0,n.useEffect)((()=>{E()}),[E]),(0,n.useEffect)((()=>{x(t.slice_name||"")}),[t.slice_name]),(0,m.tZ)(r.Z,{show:c,onHide:a,title:"Edit Chart Properties",footer:(0,m.tZ)(n.Fragment,null,(0,m.tZ)(l.Z,{htmlType:"button",buttonSize:"small",onClick:a,cta:!0},(0,u.t)("Cancel")),(0,m.tZ)(l.Z,{htmlType:"submit",buttonSize:"small",buttonStyle:"primary",onClick:_.submit,disabled:Z||!w||t.is_managed_externally,tooltip:t.is_managed_externally?(0,u.t)("This chart is managed externally, and can't be edited in Superset"):"",cta:!0},(0,u.t)("Save"))),responsive:!0,wrapProps:{"data-test":"properties-edit-modal"}},(0,m.tZ)(d.qz,{form:_,onFinish:async e=>{y(!0);const{certified_by:n,certification_details:r,description:i,cache_timeout:l}=e,d={slice_name:w||null,description:i||null,cache_timeout:l||null,certified_by:n||null,certification_details:n&&r?r:null};C&&(d.owners=C.map((e=>e.value)));try{const e=await b.Z.put({endpoint:`/api/v1/chart/${t.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}),n={...d,...e.json.result,id:t.slice_id};o(n),h((0,u.t)("Chart properties updated")),a()}catch(e){k(await(0,f.O)(e))}y(!1)},layout:"vertical",initialValues:{name:t.slice_name||"",description:t.description||"",cache_timeout:null!=t.cache_timeout?t.cache_timeout:"",certified_by:t.certified_by||"",certification_details:t.certified_by&&t.certification_details?t.certification_details:""}},(0,m.tZ)(d.X2,{gutter:16},(0,m.tZ)(d.JX,{xs:24,md:12},(0,m.tZ)("h3",null,(0,u.t)("Basic information")),(0,m.tZ)(p,{label:(0,u.t)("Name"),required:!0},(0,m.tZ)(i.II,{"aria-label":(0,u.t)("Name"),name:"name",type:"text",value:w,onChange:e=>{var t;return x(null!=(t=e.target.value)?t:"")}})),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Description"),name:"description"},(0,m.tZ)(i.Kx,{rows:3,style:{maxWidth:"100%"}})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("The description can be displayed as widget headers in the dashboard view. Supports markdown."))),(0,m.tZ)("h3",null,(0,u.t)("Certification")),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Certified by"),name:"certified_by"},(0,m.tZ)(i.II,{"aria-label":(0,u.t)("Certified by")})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Person or group that has certified this chart."))),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Certification details"),name:"certification_details"},(0,m.tZ)(i.II,{"aria-label":(0,u.t)("Certification details")})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Any additional detail to show in the certification tooltip.")))),(0,m.tZ)(d.JX,{xs:24,md:12},(0,m.tZ)("h3",null,(0,u.t)("Configuration")),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Cache timeout"),name:"cache_timeout"},(0,m.tZ)(i.II,{"aria-label":"Cache timeout"})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Duration (in seconds) of the caching timeout for this chart. Note this defaults to the dataset's timeout if undefined."))),(0,m.tZ)("h3",{style:{marginTop:"1em"}},(0,u.t)("Access")),(0,m.tZ)(p,{label:I},(0,m.tZ)(d.qb,{ariaLabel:I,mode:"multiple",name:"owners",value:C||[],onChange:S,options:$,disabled:!C,allowClear:!0}),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("A list of users who can alter the chart. Searchable by name or username.")))))))}))},32228:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(89816),r=a(15926),i=a.n(r),l=a(14670),d=a.n(l);function o(e,t,a,r){void 0===r&&(r=200);const l=d().generate(),o=`/api/v1/${e}/export/?q=${i().encode(t)}&token=${l}`,s=document.createElement("iframe");s.style.display="none",s.src=o,document.body.appendChild(s);const c=window.setInterval((()=>{"done"===(0,n.Z)()[l]&&(window.clearInterval(c),document.body.removeChild(s),a())}),r)}},34024:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(67294),r=a(51995),i=a(61988),l=a(5977),d=a(73727),o=a(91877),s=a(93185),c=a(19259),u=a(70163),b=a(21742),f=a(37921),h=a(4715),m=a(83862),p=a(36674),g=a(34581),v=a(40768),Z=a(11965);function y(e){let{chart:t,hasPerm:a,openChartEditModal:y,bulkSelectEnabled:_,addDangerToast:w,addSuccessToast:x,refreshData:C,loading:S,showThumbnails:k,saveFavoriteStatus:E,favoriteStatus:$,chartFilter:I,userId:T,handleBulkChartExport:N}=e;const D=(0,l.k6)(),U=a("can_write"),R=a("can_write"),A=a("can_export")&&(0,o.cr)(s.T.VERSIONED_EXPORT),F=(0,r.Fg)(),P=(0,Z.tZ)(m.v,null,R&&(0,Z.tZ)(m.v.Item,null,(0,Z.tZ)(c.Z,{title:(0,i.t)("Please confirm"),description:(0,Z.tZ)(n.Fragment,null,(0,i.t)("Are you sure you want to delete")," ",(0,Z.tZ)("b",null,t.slice_name),"?"),onConfirm:()=>(0,v.Gm)(t,x,w,C,I,T)},(e=>(0,Z.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,Z.tZ)(u.Z.Trash,{iconSize:"l"})," ",(0,i.t)("Delete"))))),A&&(0,Z.tZ)(m.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,onClick:()=>N([t])},(0,Z.tZ)(u.Z.Share,{iconSize:"l"})," ",(0,i.t)("Export"))),U&&(0,Z.tZ)(m.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,onClick:()=>y(t)},(0,Z.tZ)(u.Z.EditAlt,{iconSize:"l"})," ",(0,i.t)("Edit"))));return(0,Z.tZ)(v.ZB,{onClick:()=>{!_&&t.url&&D.push(t.url)}},(0,Z.tZ)(b.Z,{loading:S,title:t.slice_name,certifiedBy:t.certified_by,certificationDetails:t.certification_details,cover:(0,o.cr)(s.T.THUMBNAILS)&&k?null:(0,Z.tZ)(n.Fragment,null),url:_?void 0:t.url,imgURL:t.thumbnail_url||"",imgFallbackURL:"/static/assets/images/chart-card-fallback.svg",description:(0,i.t)("Modified %s",t.changed_on_delta_humanized),coverLeft:(0,Z.tZ)(g.Z,{users:t.owners||[]}),coverRight:(0,Z.tZ)(f.Z,{type:"secondary"},t.datasource_name_text),linkComponent:d.rU,actions:(0,Z.tZ)(b.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},T&&(0,Z.tZ)(p.Z,{itemId:t.id,saveFaveStar:E,isStarred:$}),(0,Z.tZ)(h.Gj,{overlay:P},(0,Z.tZ)(u.Z.MoreVert,{iconColor:F.colors.grayscale.base})))}))}},99415:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(67294),r=a(5977),i=a(73727),l=a(51995),d=a(61988),o=a(40768),s=a(91877),c=a(93185),u=a(4715),b=a(83862),f=a(19259),h=a(21742),m=a(70163),p=a(37921),g=a(34581),v=a(36674),Z=a(11965);const y=function(e){let{dashboard:t,hasPerm:a,bulkSelectEnabled:y,dashboardFilter:_,refreshData:w,userId:x,addDangerToast:C,addSuccessToast:S,openDashboardEditModal:k,favoriteStatus:E,saveFavoriteStatus:$,showThumbnails:I,handleBulkDashboardExport:T}=e;const N=(0,r.k6)(),D=a("can_write"),U=a("can_write"),R=a("can_export"),A=(0,l.Fg)(),F=(0,Z.tZ)(b.v,null,D&&k&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:()=>k&&k(t)},(0,Z.tZ)(m.Z.EditAlt,{iconSize:"l"})," ",(0,d.t)("Edit"))),R&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)("div",{role:"button",tabIndex:0,onClick:()=>T([t]),className:"action-button"},(0,Z.tZ)(m.Z.Share,{iconSize:"l"})," ",(0,d.t)("Export"))),U&&(0,Z.tZ)(b.v.Item,null,(0,Z.tZ)(f.Z,{title:(0,d.t)("Please confirm"),description:(0,Z.tZ)(n.Fragment,null,(0,d.t)("Are you sure you want to delete")," ",(0,Z.tZ)("b",null,t.dashboard_title),"?"),onConfirm:()=>(0,o.Iu)(t,w,S,C,_,x)},(e=>(0,Z.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,Z.tZ)(m.Z.Trash,{iconSize:"l"})," ",(0,d.t)("Delete"))))));return(0,Z.tZ)(o.ZB,{onClick:()=>{y||N.push(t.url)}},(0,Z.tZ)(h.Z,{loading:t.loading||!1,title:t.dashboard_title,certifiedBy:t.certified_by,certificationDetails:t.certification_details,titleRight:(0,Z.tZ)(p.Z,null,t.published?(0,d.t)("published"):(0,d.t)("draft")),cover:(0,s.cr)(c.T.THUMBNAILS)&&I?null:(0,Z.tZ)(n.Fragment,null),url:y?void 0:t.url,linkComponent:i.rU,imgURL:t.thumbnail_url,imgFallbackURL:"/static/assets/images/dashboard-card-fallback.svg",description:(0,d.t)("Modified %s",t.changed_on_delta_humanized),coverLeft:(0,Z.tZ)(g.Z,{users:t.owners||[]}),actions:(0,Z.tZ)(h.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},x&&(0,Z.tZ)(v.Z,{itemId:t.id,saveFaveStar:$,isStarred:E}),(0,Z.tZ)(u.Gj,{overlay:F},(0,Z.tZ)(m.Z.MoreVert,{iconColor:A.colors.grayscale.base})))}))}},12:(e,t,a)=>{"use strict";var n,r;a.d(t,{s:()=>n,J:()=>r}),function(e){e.FAVORITE="Favorite",e.MINE="Mine",e.EXAMPLES="Examples"}(n||(n={})),function(e){e.id="id",e.changed_on="changed_on",e.database="database",e.database_name="database.database_name",e.schema="schema",e.sql="sql",e.executed_sql="exceuted_sql",e.sql_tables="sql_tables",e.status="status",e.tab_name="tab_name",e.user="user",e.user_first_name="user.first_name",e.start_time="start_time",e.end_time="end_time",e.rows="rows",e.tmp_table_name="tmp_table_name",e.tracking_url="tracking_url"}(r||(r={}))},20755:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var n=a(23279),r=a.n(n),i=a(67294),l=a(5977),d=a(73727),o=a(51995),s=a(11965),c=a(61988),u=a(94184),b=a.n(u),f=a(58593),h=a(4715),m=a(83862),p=a(35932),g=a(70163);const v=o.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  .header {
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
    margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    text-align: left;
    font-size: 18px;
    padding: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    display: inline-block;
    line-height: ${e=>{let{theme:t}=e;return 9*t.gridUnit}}px;
  }
  .nav-right {
    display: flex;
    align-items: center;
    padding: ${e=>{let{theme:t}=e;return 3.5*t.gridUnit}}px 0;
    margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    float: right;
    position: absolute;
    right: 0;
    ul.ant-menu-root {
      padding: 0px;
    }
    li[role='menuitem'] {
      border: 0;
      border-bottom: none;
      &:hover {
        border-bottom: transparent;
      }
    }
  }
  .nav-right-collapse {
    display: flex;
    align-items: center;
    padding: 14px 0;
    margin-right: 0;
    float: left;
    padding-left: 10px;
  }
  .menu {
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    .ant-menu-horizontal {
      line-height: inherit;
      .ant-menu-item {
        border-bottom: none;
        &:hover {
          border-bottom: none;
          text-decoration: none;
        }
      }
    }
    .ant-menu {
      padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px 0px;
    }
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0 ${e=>{let{theme:t}=e;return t.gridUnit+1}}px;
  }

  .menu .ant-menu-item {
    li,
    div {
      a,
      div {
        font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
        color: ${e=>{let{theme:t}=e;return t.colors.secondary.dark1}};

        a {
          margin: 0;
          padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px
            ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
          line-height: ${e=>{let{theme:t}=e;return 5*t.gridUnit}}px;

          &:hover {
            text-decoration: none;
          }
        }
      }

      &.no-router a {
        padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px
          ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
      }

      &.active a {
        background: ${e=>{let{theme:t}=e;return t.colors.secondary.light4}};
        border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
      }
    }

    li.active > a,
    li.active > div,
    div.active > div,
    li > a:hover,
    li > a:focus,
    li > div:hover,
    div > div:hover,
    div > a:hover {
      background: ${e=>{let{theme:t}=e;return t.colors.secondary.light4}};
      border-bottom: none;
      border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
      margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
      text-decoration: none;
    }
  }

  .btn-link {
    padding: 10px 0;
  }
  .ant-menu-horizontal {
    border: none;
  }
  @media (max-width: 767px) {
    .header,
    .nav-right {
      position: relative;
      margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }
  }
  .ant-menu-submenu {
    span[role='img'] {
      position: absolute;
      right: ${e=>{let{theme:t}=e;return-t.gridUnit-2}}px;
      top: ${e=>{let{theme:t}=e;return t.gridUnit+1}}px !important;
    }
  }
  .dropdown-menu-links > div.ant-menu-submenu-title,
  .ant-menu-submenu-open.ant-menu-submenu-active > div.ant-menu-submenu-title {
    color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
  }
`,Z=e=>s.iv`
  color: ${e.colors.grayscale.base};
  backgroundColor: ${e.colors.grayscale.light2}};

  .ant-menu-item:hover {
    color: ${e.colors.grayscale.base};
    cursor: default;
  }
`,{SubMenu:y}=m.$,_=e=>{var t,a,n;const[o,u]=(0,i.useState)("horizontal"),[_,w]=(0,i.useState)("nav-right");let x=!0;try{(0,l.k6)()}catch(e){x=!1}return(0,i.useEffect)((()=>{function t(){window.innerWidth<=767?u("inline"):u("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?w("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&w("nav-right-collapse")}t();const a=r()(t,10);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),[e.buttons]),(0,s.tZ)(v,null,(0,s.tZ)(h.X2,{className:"menu",role:"navigation"},e.name&&(0,s.tZ)("div",{className:"header"},e.name),(0,s.tZ)(m.v,{mode:o,style:{backgroundColor:"transparent"}},null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||x)&&t.usesRouter?(0,s.tZ)(m.v.Item,{key:t.label},(0,s.tZ)("div",{role:"tab",className:t.name===e.activeChild?"active":""},(0,s.tZ)("div",null,(0,s.tZ)(d.rU,{to:t.url||""},t.label)))):(0,s.tZ)(m.v.Item,{key:t.label},(0,s.tZ)("div",{className:b()("no-router",{active:t.name===e.activeChild}),role:"tab"},(0,s.tZ)("a",{href:t.url,onClick:t.onClick},t.label)))))),(0,s.tZ)("div",{className:_},(0,s.tZ)(m.v,{mode:"horizontal",triggerSubMenuAction:"click"},null==(a=e.dropDownLinks)?void 0:a.map(((e,t)=>{var a;return(0,s.tZ)(y,{key:t,title:e.label,icon:(0,s.tZ)(g.Z.TriangleDown,null),popupOffset:[10,20],className:"dropdown-menu-links"},null==(a=e.childs)?void 0:a.map((e=>"object"==typeof e?e.disable?(0,s.tZ)(m.$.Item,{key:e.label,css:Z},(0,s.tZ)(f.u,{placement:"top",title:(0,c.t)("Enable 'Allow data upload' in any database's settings")},e.label)):(0,s.tZ)(m.$.Item,{key:e.label},(0,s.tZ)("a",{href:e.url},e.label)):null)))}))),null==(n=e.buttons)?void 0:n.map(((e,t)=>(0,s.tZ)(p.Z,{key:t,buttonStyle:e.buttonStyle,onClick:e.onClick},e.name))))),e.children)}},58708:(e,t,a)=>{"use strict";var n,r=a(67294),i=a(90731),l=a(5872),d=a.n(l),o=a(73727),s=a(5977),c=a(31405),u=a(57902),b=a(38703),f=a(77230),h=a(35260),m=a(5667),p=a(38552),g=a(1959),v=a(43063),Z=a.n(v),y=a(75049),_=a(51995),w=a(61988),x=a(43700),C=a(61337),S=a(21742),k=a(14114),E=a(40768),$=a(91877),I=a(93185),T=a(4715),N=a(78580),D=a.n(N),U=a(30381),R=a.n(U),A=a(20755),F=a(70163),P=a(35932);!function(e){e.Charts="CHARTS",e.Dashboards="DASHBOARDS",e.Recents="RECENTS",e.SavedQueries="SAVED_QUERIES"}(n||(n={}));var L=a(11965);const z={[n.Charts]:(0,w.t)("charts"),[n.Dashboards]:(0,w.t)("dashboards"),[n.Recents]:(0,w.t)("recents"),[n.SavedQueries]:(0,w.t)("saved queries")},M=_.iK.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,q=_.iK.div`
  Button {
    svg {
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    }
  }
`;function O(e){let{tableName:t,tab:a}=e;const r={[n.Charts]:"/chart/add",[n.Dashboards]:"/dashboard/new",[n.SavedQueries]:"/superset/sqllab?new=true"},i={[n.Charts]:"/chart/list",[n.Dashboards]:"/dashboard/list/",[n.SavedQueries]:"/savedqueryview/list/"},l={[n.Charts]:"empty-charts.svg",[n.Dashboards]:"empty-dashboard.svg",[n.Recents]:"union.svg",[n.SavedQueries]:"empty-queries.svg"},d=(0,L.tZ)("span",null,(0,w.t)("No %(tableName)s yet",{tableName:z[t]})),o=(0,L.tZ)("span",{className:"no-recents"},"Viewed"===a?(0,w.t)("Recently viewed charts, dashboards, and saved queries will appear here"):"Created"===a?(0,w.t)("Recently created charts, dashboards, and saved queries will appear here"):"Examples"===a?(0,w.t)("Example %(tableName)s will appear here",{tableName:t.toLowerCase()}):"Edited"===a?(0,w.t)("Recently edited charts, dashboards, and saved queries will appear here"):null);return"Mine"===a||"RECENTS"===t||"Examples"===a?(0,L.tZ)(M,null,(0,L.tZ)(T.HY,{image:`/static/assets/images/${l[t]}`,description:"RECENTS"===t||"Examples"===a?o:d},"RECENTS"!==t&&(0,L.tZ)(q,null,(0,L.tZ)(P.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=r[t]}},(0,L.tZ)("i",{className:"fa fa-plus"}),"SAVED_QUERIES"===t?(0,w.t)("SQL query"):t.split("").slice(0,t.length-1).join(""))))):(0,L.tZ)(M,null,(0,L.tZ)(T.HY,{image:"/static/assets/images/star-circle.svg",description:(0,L.tZ)("span",{className:"no-favorites"},(0,w.t)("You don't have any favorites yet!"))},(0,L.tZ)(P.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=i[t]}},(0,w.t)("See all %(tableName)s",{tableName:"SAVED_QUERIES"===t?(0,w.t)("SQL Lab queries"):z[t]}))))}var V;!function(e){e.EDITED="Edited",e.CREATED="Created",e.VIEWED="Viewed",e.EXAMPLE="Examples"}(V||(V={}));const j=_.iK.div`
  .recentCards {
    max-height: none;
    grid-gap: ${e=>{let{theme:t}=e;return 4*t.gridUnit+"px"}};
  }
`,B=(0,w.t)("[Untitled]"),K=(0,w.t)("Unknown"),H=e=>"dashboard_title"in e?e.dashboard_title||B:"slice_name"in e?e.slice_name||B:"label"in e?e.label||B:e.item_title||B,Q=e=>{if("sql"in e)return(0,L.tZ)(F.Z.Sql,null);const t="item_url"in e?e.item_url:e.url;return null!=t&&D()(t).call(t,"dashboard")?(0,L.tZ)(F.Z.NavDashboard,null):null!=t&&D()(t).call(t,"explore")?(0,L.tZ)(F.Z.NavCharts,null):null};function X(e){var t;let{activeChild:a,setActiveChild:i,activityData:l,user:d,loadedCount:s}=e;const[c,u]=(0,r.useState)(),[b,f]=(0,r.useState)(!1);(0,r.useEffect)((()=>{"Edited"===a&&(f(!0),f(!0),(0,E.Ld)(d.userId).then((e=>{u([...e.editedChart,...e.editedDash]),f(!1)})))}),[a]);const h=[{name:"Edited",label:(0,w.t)("Edited"),onClick:()=>{i("Edited"),(0,C.LS)(C.dR.homepage_activity_filter,V.EDITED)}},{name:"Created",label:(0,w.t)("Created"),onClick:()=>{i("Created"),(0,C.LS)(C.dR.homepage_activity_filter,V.CREATED)}}];return null!=l&&l.Viewed&&h.unshift({name:"Viewed",label:(0,w.t)("Viewed"),onClick:()=>{i("Viewed"),(0,C.LS)(C.dR.homepage_activity_filter,V.VIEWED)}}),b&&!c||s<3?(0,L.tZ)(_e,null):(0,L.tZ)(j,null,(0,L.tZ)(A.Z,{activeChild:a,tabs:h}),(null==(t=l[a])?void 0:t.length)>0||"Edited"===a&&c&&c.length>0?(0,L.tZ)(E._L,{className:"recentCards"},("Edited"!==a?l[a]:c).map((e=>{const t=(e=>"sql"in e?`/superset/sqllab?savedQueryId=${e.id}`:"url"in e?e.url:e.item_url)(e),a=(e=>{if("time"in e)return(0,w.t)("Viewed %s",R()(e.time).fromNow());let t;return"changed_on"in e&&(t=e.changed_on),"changed_on_utc"in e&&(t=e.changed_on_utc),(0,w.t)("Modified %s",null==t?K:R()(t).fromNow())})(e);return(0,L.tZ)(E.ZB,{key:t},(0,L.tZ)(o.rU,{to:t},(0,L.tZ)(S.Z,{cover:(0,L.tZ)(r.Fragment,null),url:t,title:H(e),description:a,avatar:Q(e),actions:null})))}))):(0,L.tZ)(O,{tableName:n.Recents,tab:a}))}var Y=a(63105),W=a.n(Y),G=a(34858),J=a(12),ee=a(83673),te=a(34024),ae=a(32228);const ne=(0,k.ZP)((function(e){let{user:t,addDangerToast:a,addSuccessToast:i,mine:l,showThumbnails:d,examples:o}=e;const c=(0,s.k6)(),f=(0,C.rV)(C.dR.homepage_chart_filter,J.s.EXAMPLES),h=W()(o,(e=>"viz_type"in e)),{state:{loading:m,resourceCollection:p,bulkSelectEnabled:g},setResourceCollection:v,hasPerm:Z,refreshData:y,fetchData:_}=(0,G.Yi)("chart",(0,w.t)("chart"),a,!0,"Mine"===f?l:h,[],!1),x=(0,r.useMemo)((()=>p.map((e=>e.id))),[p]),[S,k]=(0,G.NE)("chart",x,a),{sliceCurrentlyEditing:$,openChartEditModal:I,handleChartUpdated:T,closeChartEditModal:N}=(0,G.fF)(v,p),[D,U]=(0,r.useState)(f),[R,F]=(0,r.useState)(!1),[P,z]=(0,r.useState)(!1),M=e=>{const a=[];return"Mine"===e?a.push({id:"owners",operator:"rel_m_m",value:`${null==t?void 0:t.userId}`}):"Favorite"===e?a.push({id:"id",operator:"chart_is_favorite",value:!0}):"Examples"===e&&a.push({id:"created_by",operator:"rel_o_m",value:0}),a};(0,r.useEffect)((()=>{(P||"Favorite"===D)&&(e=>{_({pageIndex:0,pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:M(e)})})(D),z(!0)}),[D]);const q=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,ae.Z)("chart",t,(()=>{F(!1)})),F(!0)},V=[{name:"Favorite",label:(0,w.t)("Favorite"),onClick:()=>{U(J.s.FAVORITE),(0,C.LS)(C.dR.homepage_chart_filter,J.s.FAVORITE)}},{name:"Mine",label:(0,w.t)("Mine"),onClick:()=>{U(J.s.MINE),(0,C.LS)(C.dR.homepage_chart_filter,J.s.MINE)}}];return o&&V.push({name:"Examples",label:(0,w.t)("Examples"),onClick:()=>{U(J.s.EXAMPLES),(0,C.LS)(C.dR.homepage_chart_filter,J.s.EXAMPLES)}}),m?(0,L.tZ)(_e,{cover:d}):(0,L.tZ)(u.Z,null,$&&(0,L.tZ)(ee.Z,{onHide:N,onSave:T,show:!0,slice:$}),(0,L.tZ)(A.Z,{activeChild:D,tabs:V,buttons:[{name:(0,L.tZ)(r.Fragment,null,(0,L.tZ)("i",{className:"fa fa-plus"}),(0,w.t)("Chart")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/chart/add")}},{name:(0,w.t)("View All »"),buttonStyle:"link",onClick:()=>{const e="Favorite"===D?`/chart/list/?filters=(favorite:(label:${(0,w.t)("Yes")},value:!t))`:"/chart/list/";c.push(e)}}]}),null!=p&&p.length?(0,L.tZ)(E._L,{showThumbnails:d},p.map((e=>(0,L.tZ)(te.Z,{key:`${e.id}`,openChartEditModal:I,chartFilter:D,chart:e,userId:null==t?void 0:t.userId,hasPerm:Z,showThumbnails:d,bulkSelectEnabled:g,refreshData:y,addDangerToast:a,addSuccessToast:i,favoriteStatus:k[e.id],saveFavoriteStatus:S,handleBulkChartExport:q})))):(0,L.tZ)(O,{tableName:n.Charts,tab:D}),R&&(0,L.tZ)(b.Z,null))}));var re=a(31069),ie=a(42110),le=a(33743),de=a(120),oe=a(83862),se=a(17198);ie.Z.registerLanguage("sql",le.Z);const ce=_.iK.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .ant-card-cover {
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    & > div {
      height: 171px;
    }
  }
  .gradient-container > div {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${e=>{let{theme:t}=e;return t.colors.secondary.light3}};
    display: inline-block;
    width: 100%;
    height: 179px;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
`,ue=_.iK.div`
  svg {
    margin-left: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
  }
  .query-title {
    padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit+2}}px;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
  }
`,be=_.iK.div`
  pre {
    height: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px;
    border: none !important;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}} !important;
    overflow: hidden;
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px !important;
  }
`,fe=(0,k.ZP)((e=>{let{user:t,addDangerToast:a,addSuccessToast:i,mine:l,showThumbnails:d,featureFlag:o}=e;const{state:{loading:s,resourceCollection:c},hasPerm:u,fetchData:b,refreshData:f}=(0,G.Yi)("saved_query",(0,w.t)("query"),a,!0,l,[],!1),[h,m]=(0,r.useState)("Mine"),[p,g]=(0,r.useState)(!1),[v,Z]=(0,r.useState)({}),[y,x]=(0,r.useState)(!0),C=u("can_edit"),k=u("can_delete"),$=(0,_.Fg)(),I=e=>{const a=[];return"Mine"===e?a.push({id:"created_by",operator:"rel_o_m",value:`${null==t?void 0:t.userId}`}):a.push({id:"id",operator:"saved_query_is_fav",value:!0}),a};return s?(0,L.tZ)(_e,{cover:d}):(0,L.tZ)(r.Fragment,null,p&&(0,L.tZ)(se.Z,{description:(0,w.t)("This action will permanently delete the saved query."),onConfirm:()=>{p&&(e=>{let{id:n,label:r}=e;re.Z.delete({endpoint:`/api/v1/saved_query/${n}`}).then((()=>{const e={filters:[{id:"created_by",operator:"rel_o_m",value:`${null==t?void 0:t.userId}`}],pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],pageIndex:0};f(y?e:void 0),x(!1),g(!1),i((0,w.t)("Deleted: %s",r))}),(0,E.v$)((e=>a((0,w.t)("There was an issue deleting %s: %s",r,e)))))})(v)},onHide:()=>{g(!1)},open:!0,title:(0,w.t)("Delete Query?")}),(0,L.tZ)(A.Z,{activeChild:h,tabs:[{name:"Mine",label:(0,w.t)("Mine"),onClick:()=>b({pageIndex:0,pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:I("Mine")}).then((()=>m("Mine")))}],buttons:[{name:(0,L.tZ)(r.Fragment,null,(0,L.tZ)("i",{className:"fa fa-plus"}),(0,w.t)("SQL Query")),buttonStyle:"tertiary",onClick:()=>{window.location.href="/superset/sqllab?new=true"}},{name:(0,w.t)("View All »"),buttonStyle:"link",onClick:()=>{window.location.href="/savedqueryview/list"}}]}),c.length>0?(0,L.tZ)(E._L,{showThumbnails:d},c.map((e=>{var t,n,l;return(0,L.tZ)(ce,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${e.id}`},key:e.id},(0,L.tZ)(S.Z,{imgURL:"",url:`/superset/sqllab?savedQueryId=${e.id}`,title:e.label,imgFallbackURL:"/static/assets/images/empty-query.svg",description:(0,w.t)("Ran %s",e.changed_on_delta_humanized),cover:null!=e&&null!=(t=e.sql)&&t.length&&d&&o?(0,L.tZ)(be,null,(0,L.tZ)(ie.Z,{language:"sql",lineProps:{style:{color:$.colors.grayscale.dark2,wordBreak:"break-all",whiteSpace:"pre-wrap"}},style:de.Z,wrapLines:!0,lineNumberStyle:{display:"none"},showLineNumbers:!1},(0,E.IB)(e.sql,25))):!(d&&(null==e||null==(n=e.sql)||!n.length))&&(0,L.tZ)(r.Fragment,null),actions:(0,L.tZ)(ue,null,(0,L.tZ)(S.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,L.tZ)(T.Gj,{overlay:(l=e,(0,L.tZ)(oe.v,null,C&&(0,L.tZ)(oe.v.Item,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${l.id}`}},(0,w.t)("Edit")),(0,L.tZ)(oe.v.Item,{onClick:()=>{l.id&&(0,G.bR)(l.id,a,i)}},(0,w.t)("Share")),k&&(0,L.tZ)(oe.v.Item,{onClick:()=>{g(!0),Z(l)}},(0,w.t)("Delete"))))},(0,L.tZ)(F.Z.MoreVert,{iconColor:$.colors.grayscale.base}))))}))}))):(0,L.tZ)(O,{tableName:n.SavedQueries,tab:h}))}));var he=a(20818),me=a(99415);const pe=(0,k.ZP)((function(e){let{user:t,addDangerToast:a,addSuccessToast:i,mine:l,showThumbnails:d,examples:o}=e;const c=(0,s.k6)(),u=(0,C.rV)(C.dR.homepage_dashboard_filter,J.s.EXAMPLES),f=W()(o,(e=>!("viz_type"in e))),{state:{loading:h,resourceCollection:m},setResourceCollection:p,hasPerm:g,refreshData:v,fetchData:Z}=(0,G.Yi)("dashboard",(0,w.t)("dashboard"),a,!0,"Mine"===u?l:f,[],!1),y=(0,r.useMemo)((()=>m.map((e=>e.id))),[m]),[_,x]=(0,G.NE)("dashboard",y,a),[S,k]=(0,r.useState)(),[$,I]=(0,r.useState)(u),[T,N]=(0,r.useState)(!1),[D,U]=(0,r.useState)(!1),R=e=>{const a=[];return"Mine"===e?a.push({id:"owners",operator:"rel_m_m",value:`${null==t?void 0:t.userId}`}):"Favorite"===e?a.push({id:"id",operator:"dashboard_is_favorite",value:!0}):"Examples"===e&&a.push({id:"created_by",operator:"rel_o_m",value:0}),a};(0,r.useEffect)((()=>{(D||"Favorite"===$)&&(e=>{Z({pageIndex:0,pageSize:E.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:R(e)})})($),U(!0)}),[$]);const F=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,ae.Z)("dashboard",t,(()=>{N(!1)})),N(!0)},P=[{name:"Favorite",label:(0,w.t)("Favorite"),onClick:()=>{I(J.s.FAVORITE),(0,C.LS)(C.dR.homepage_dashboard_filter,J.s.FAVORITE)}},{name:"Mine",label:(0,w.t)("Mine"),onClick:()=>{I(J.s.MINE),(0,C.LS)(C.dR.homepage_dashboard_filter,J.s.MINE)}}];return o&&P.push({name:"Examples",label:(0,w.t)("Examples"),onClick:()=>{I(J.s.EXAMPLES),(0,C.LS)(C.dR.homepage_dashboard_filter,J.s.EXAMPLES)}}),h?(0,L.tZ)(_e,{cover:d}):(0,L.tZ)(r.Fragment,null,(0,L.tZ)(A.Z,{activeChild:$,tabs:P,buttons:[{name:(0,L.tZ)(r.Fragment,null,(0,L.tZ)("i",{className:"fa fa-plus"}),(0,w.t)("Dashboard")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/dashboard/new")}},{name:(0,w.t)("View All »"),buttonStyle:"link",onClick:()=>{const e="Favorite"===$?`/dashboard/list/?filters=(favorite:(label:${(0,w.t)("Yes")},value:!t))`:"/dashboard/list/";c.push(e)}}]}),S&&(0,L.tZ)(he.Z,{dashboardId:null==S?void 0:S.id,show:!0,onHide:()=>k(void 0),onSubmit:e=>re.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((e=>{let{json:t={}}=e;p(m.map((e=>e.id===t.id?t.result:e)))}),(0,E.v$)((e=>a((0,w.t)("An error occurred while fetching dashboards: %s",e)))))}),m.length>0&&(0,L.tZ)(E._L,{showThumbnails:d},m.map((e=>(0,L.tZ)(me.Z,{key:e.id,dashboard:e,hasPerm:g,bulkSelectEnabled:!1,showThumbnails:d,dashboardFilter:$,refreshData:v,addDangerToast:a,addSuccessToast:i,userId:null==t?void 0:t.userId,loading:h,openDashboardEditModal:e=>k(e),saveFavoriteStatus:_,favoriteStatus:x[e.id],handleBulkDashboardExport:F})))),0===m.length&&(0,L.tZ)(O,{tableName:n.Dashboards,tab:$}),T&&(0,L.tZ)(b.Z,null))})),ge=(0,y.I)(),ve=["2","3"],Ze=_.iK.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}};
  .ant-row.menu {
    margin-top: -15px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}};
    &:after {
      content: '';
      display: block;
      border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
      margin: 0px ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
      position: relative;
      width: 100%;
      ${E.mq[1]} {
        margin-top: 5px;
        margin: 0px 2px;
      }
    }
    .ant-menu.ant-menu-light.ant-menu-root.ant-menu-horizontal {
      padding-left: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
    }
    button {
      padding: 3px 21px;
    }
  }
  .ant-card-meta-description {
    margin-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
  .ant-card.ant-card-bordered {
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  }
  .ant-collapse-item .ant-collapse-content {
    margin-bottom: ${e=>{let{theme:t}=e;return-6*t.gridUnit}}px;
  }
  div.ant-collapse-item:last-child.ant-collapse-item-active
    .ant-collapse-header {
    padding-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  }
  div.ant-collapse-item:last-child .ant-collapse-header {
    padding-bottom: ${e=>{let{theme:t}=e;return 9*t.gridUnit}}px;
  }
  .loading-cards {
    margin-top: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
    .ant-card-cover > div {
      height: 168px;
    }
  }
`,ye=_.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    justify-content: space-between;\n    height: 50px;\n    background-color: ${t.colors.grayscale.light5};\n    .welcome-header {\n      font-size: ${t.typography.sizes.l}px;\n      padding: ${4*t.gridUnit}px ${2*t.gridUnit+2}px;\n      margin: 0 ${2*t.gridUnit}px;\n    }\n    .switch {\n      display: flex;\n      flex-direction: row;\n      margin: ${4*t.gridUnit}px;\n      span {\n        display: block;\n        margin: ${1*t.gridUnit}px;\n        line-height: 1;\n      }\n    }\n  `}}
`,_e=e=>{let{cover:t}=e;return(0,L.tZ)(E._L,{showThumbnails:t,className:"loading-cards"},[...new Array(E.iv)].map(((e,a)=>(0,L.tZ)(S.Z,{key:a,cover:!t&&(0,L.tZ)(r.Fragment,null),description:"",loading:!0}))))},we=(0,k.ZP)((function(e){let{user:t,addDangerToast:a}=e;const n=t.userId.toString(),i=`/superset/recent_activity/${t.userId}/?limit=6`,[l,d]=(0,r.useState)("Loading"),o=(0,C.OH)(n,null);let s=!1;(0,$.cr)(I.T.THUMBNAILS)&&(s=void 0===(null==o?void 0:o.thumbnails)||(null==o?void 0:o.thumbnails));const[c,u]=(0,r.useState)(s),[b,f]=(0,r.useState)(null),[h,m]=(0,r.useState)(null),[p,g]=(0,r.useState)(null),[v,y]=(0,r.useState)(null),[_,S]=(0,r.useState)(0),k=(0,C.rV)(C.dR.homepage_collapse_state,[]),[N,D]=(0,r.useState)(k),U=ge.get("welcome.message"),R=ge.get("welcome.banner"),A=ge.get("welcome.main.replacement");(0,r.useEffect)((()=>{const e=(0,C.rV)(C.dR.homepage_activity_filter,null);D(k.length>0?k:ve),(0,E.Hn)(t.userId,i,a).then((t=>{const a={};if(a.Examples=t.examples,t.viewed){const n=Z()(t.viewed,["item_url",null]).map((e=>e));a.Viewed=n,!e&&a.Viewed?d("Viewed"):e||a.Viewed?d(e||"Created"):d("Created")}else d(e||"Created");f((e=>({...e,...a})))})).catch((0,E.v$)((e=>{f((e=>({...e,Viewed:[]}))),a((0,w.t)("There was an issue fetching your recent activity: %s",e))})));const r=[{col:"created_by",opr:"rel_o_m",value:`${n}`}];(0,E.B1)(n,"dashboard").then((e=>{y(e),S((e=>e+1))})).catch((e=>{y([]),S((e=>e+1)),a((0,w.t)("There was an issue fetching your dashboards: %s",e))})),(0,E.B1)(n,"chart").then((e=>{m(e),S((e=>e+1))})).catch((e=>{m([]),S((e=>e+1)),a((0,w.t)("There was an issue fetching your chart: %s",e))})),(0,E.B1)(n,"saved_query",r).then((e=>{g(e),S((e=>e+1))})).catch((e=>{g([]),S((e=>e+1)),a((0,w.t)("There was an issues fetching your saved queries: %s",e))}))}),[]),(0,r.useEffect)((()=>{!k&&null!=p&&p.length&&D((e=>[...e,"4"])),f((e=>({...e,Created:[...(null==h?void 0:h.slice(0,3))||[],...(null==v?void 0:v.slice(0,3))||[],...(null==p?void 0:p.slice(0,3))||[]]})))}),[h,p,v]),(0,r.useEffect)((()=>{var e;!k&&null!=b&&null!=(e=b.Viewed)&&e.length&&D((e=>["1",...e]))}),[b]);const F=!(null!=b&&b.Examples||null!=b&&b.Viewed);return(0,L.tZ)(Ze,null,U&&(0,L.tZ)(U,null),R&&(0,L.tZ)(R,null),A&&(0,L.tZ)(A,null),(!R||!A)&&(0,L.tZ)(r.Fragment,null,(0,L.tZ)(ye,null,(0,L.tZ)("h1",{className:"welcome-header"},"Home"),(0,$.cr)(I.T.THUMBNAILS)?(0,L.tZ)("div",{className:"switch"},(0,L.tZ)(T.KU,{checked:c,onChange:()=>{u(!c),(0,C.I_)(n,{thumbnails:!c})}}),(0,L.tZ)("span",null,"Thumbnails")):null),(0,L.tZ)(x.Z,{activeKey:N,onChange:e=>{D(e),(0,C.LS)(C.dR.homepage_collapse_state,e)},ghost:!0,bigger:!0},(0,L.tZ)(x.Z.Panel,{header:(0,w.t)("Recents"),key:"1"},b&&(b.Viewed||b.Examples||b.Created)&&"Loading"!==l?(0,L.tZ)(X,{user:{userId:t.userId},activeChild:l,setActiveChild:d,activityData:b,loadedCount:_}):(0,L.tZ)(_e,null)),(0,L.tZ)(x.Z.Panel,{header:(0,w.t)("Dashboards"),key:"2"},!v||F?(0,L.tZ)(_e,{cover:c}):(0,L.tZ)(pe,{user:t,mine:v,showThumbnails:c,examples:null==b?void 0:b.Examples})),(0,L.tZ)(x.Z.Panel,{header:(0,w.t)("Charts"),key:"3"},!h||F?(0,L.tZ)(_e,{cover:c}):(0,L.tZ)(ne,{showThumbnails:c,user:t,mine:h,examples:null==b?void 0:b.Examples})),(0,L.tZ)(x.Z.Panel,{header:(0,w.t)("Saved queries"),key:"4"},p?(0,L.tZ)(fe,{showThumbnails:c,user:t,mine:p,featureFlag:(0,$.cr)(I.T.THUMBNAILS)}):(0,L.tZ)(_e,{cover:c})))))})),xe=(0,r.lazy)((()=>a.e(9916).then(a.bind(a,44745)))),Ce=(0,r.lazy)((()=>Promise.all([a.e(8782),a.e(4787)]).then(a.bind(a,28999)))),Se=(0,r.lazy)((()=>Promise.all([a.e(1216),a.e(876),a.e(8782),a.e(9502)]).then(a.bind(a,63082)))),ke=(0,r.lazy)((()=>Promise.all([a.e(8782),a.e(1611)]).then(a.bind(a,35276)))),Ee=(0,r.lazy)((()=>Promise.all([a.e(1216),a.e(8782),a.e(665)]).then(a.bind(a,13434)))),$e=(0,r.lazy)((()=>Promise.all([a.e(8782),a.e(9452)]).then(a.bind(a,69053)))),Ie=(0,r.lazy)((()=>Promise.all([a.e(8782),a.e(8774)]).then(a.bind(a,23767)))),Te=(0,r.lazy)((()=>Promise.all([a.e(1216),a.e(7936),a.e(468)]).then(a.bind(a,82343)))),Ne=(0,r.lazy)((()=>Promise.all([a.e(8782),a.e(4502)]).then(a.bind(a,30075)))),De=(0,r.lazy)((()=>Promise.all([a.e(8782),a.e(5656)]).then(a.bind(a,76430)))),Ue=(0,r.lazy)((()=>a.e(6947).then(a.bind(a,62350)))),Re=(0,r.lazy)((()=>Promise.all([a.e(8782),a.e(9137)]).then(a.bind(a,25163)))),Ae=(0,r.lazy)((()=>Promise.all([a.e(1216),a.e(876),a.e(2671),a.e(1407),a.e(323),a.e(7936),a.e(8274),a.e(1722),a.e(9541)]).then(a.bind(a,53880)))),Fe=(0,r.lazy)((()=>Promise.all([a.e(8782),a.e(7633)]).then(a.bind(a,82842)))),Pe=[{path:"/superset/welcome/",Component:we},{path:"/dashboard/list/",Component:Ie},{path:"/superset/dashboard/:idOrSlug/",Component:Te},{path:"/chart/add",Component:xe},{path:"/chart/list/",Component:Ee},{path:"/tablemodelview/list/",Component:De},{path:"/databaseview/list/",Component:Ne},{path:"/savedqueryview/list/",Component:(0,r.lazy)((()=>Promise.all([a.e(8782),a.e(9173)]).then(a.bind(a,49588))))},{path:"/csstemplatemodelview/list/",Component:$e},{path:"/annotationlayermodelview/list/",Component:Ce},{path:"/annotationmodelview/:annotationLayerId/annotation/",Component:ke},{path:"/superset/sqllab/history/",Component:Fe},{path:"/alert/list/",Component:Se},{path:"/report/list/",Component:Se,props:{isReportEnabled:!0}},{path:"/alert/:alertId/log/",Component:Re},{path:"/report/:alertId/log/",Component:Re,props:{isReportEnabled:!0}},{path:"/explore/",Component:Ae},{path:"/superset/explore/p",Component:Ae},{path:"/dataset/add/",Component:Ue},{path:"/dataset/:datasetId",Component:Ue}],Le=Pe.map((e=>e.path)).reduce(((e,t)=>({...e,[t]:!0})),{});function ze(e){if(e){const t=e.split(/[?#]/)[0];return!!Le[t]}return!1}var Me=a(3741),qe=a(68135),Oe=a(37703),Ve=a(35755),je=a(38626),Be=a(57865),Ke=a(29454),He=a(33626);const Qe={info:"addInfoToast",alert:"addDangerToast",danger:"addDangerToast",warning:"addWarningToast",success:"addSuccessToast"};function Xe(e){let{children:t,messages:a}=e;const n=(0,k.e1)();return(0,He.J)((()=>{a.forEach((e=>{const[t,a]=e,r=n[Qe[t]];r&&r(a)}))})),t}var Ye=a(29147),We=a(14278);const Ge={...h.b.common},Je=e=>{let{children:t}=e;return(0,L.tZ)(qe.a,{theme:h.r},(0,L.tZ)(Oe.zt,{store:Ke.h},(0,L.tZ)(je.W,{backend:Be.PD},(0,L.tZ)(Xe,{messages:Ge.flash_messages},(0,L.tZ)(Ye.DG,null,(0,L.tZ)(We.EM,null,(0,L.tZ)(Ve.Fz,{ReactRouterRoute:s.AW,stringifyOptions:{encode:!1}},t)))))))},et=()=>{const{pathname:e}=(0,s.TH)();return(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null};(0,p.Z)(),(0,g.Z)();const tt={...h.b.user},at={...h.b.common.menu_data};let nt;const rt=()=>{const e=(0,s.TH)();return(0,r.useEffect)((()=>{nt&&nt!==e.pathname&&Me.Yd.markTimeOrigin(),nt=e.pathname}),[e.pathname]),(0,L.tZ)(r.Fragment,null)};i.render((0,L.tZ)((()=>(0,L.tZ)(o.VK,null,(0,L.tZ)(et,null),(0,L.tZ)(rt,null),(0,L.tZ)(Je,null,(0,L.tZ)(c.n,null),(0,L.tZ)(f.Z,{data:at,isFrontendRoute:ze}),(0,L.tZ)(s.rs,null,Pe.map((e=>{let{path:t,Component:a,props:n={},Fallback:i=b.Z}=e;return(0,L.tZ)(s.AW,{path:t,key:t},(0,L.tZ)(r.Suspense,{fallback:(0,L.tZ)(i,null)},(0,L.tZ)(u.Z,null,(0,L.tZ)(a,d()({user:tt},n)))))}))),(0,L.tZ)(m.Z,null)))),null),document.getElementById("app"))}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return o[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=o,c.amdD=function(){throw new Error("define cannot be used indirect")},c.amdO={},e=[],c.O=(t,a,n,r)=>{if(!a){var i=1/0;for(s=0;s<e.length;s++){for(var[a,n,r]=e[s],l=!0,d=0;d<a.length;d++)(!1&r||i>=r)&&Object.keys(c.O).every((e=>c.O[e](a[d])))?a.splice(d--,1):(l=!1,r<i&&(i=r));if(l){e.splice(s--,1);var o=n();void 0!==o&&(t=o)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[a,n,r]},c.H={},c.G=e=>{Object.keys(c.H).map((t=>{c.H[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var i={};t=t||[null,a({}),a([]),a(a)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=a(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,c.d(r,i),r},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>4593===e?"4593.77a9660d4edc1b6a83f7.entry.js":2441===e?"2441.88b6789af1d53f852f83.entry.js":323===e?"323.45facbce2b296952250d.entry.js":{57:"b15391dfcaca820affff",112:"77a627910143352bf160",137:"2261143f2635359dbece",158:"ea8c0ae803c13870f999",177:"53449f7d4fbf2093f80f",183:"e91a549a1d45bd52bee6",215:"6bf417d42e7c3eb2eb60",310:"c0d49fb18f501f4002d7",312:"b7924777d3d61f7ecc6b",326:"cf2e1a5d2fd6f13c7669",336:"28e4d6eef540ffbed5dc",347:"eb5ca79a61e22b824e7f",349:"ddbeb4e9369b016e3138",357:"5d6175985515bbfb3517",363:"876560271baaff664c29",380:"930d1c818df9fcea5d70",440:"ac518f6c7471ecc8589d",444:"00f0dd2b88290340d8e8",452:"8fe1674bb3e34a1797b5",468:"3bbbfe48873d0d4d7f34",498:"e1ab44e0d4344e28d361",597:"df86307b8436cf709ca8",600:"62fba18f45c132f76e72",616:"aaf49880011e0ff408e0",665:"2f8705bb986aa67a8ed3",704:"24cd1e2103e0ed8e1117",741:"f8e056d22124a7fd6234",775:"da66980cd68e741e2f7f",826:"44bda9270cd6cc080bd0",876:"5cd0b6656cc64d33cdab",895:"b79b090aab4afebaff73",954:"c21b808651cb72adfc93",992:"3ae483520252c7af1474",999:"6d77c7c22585ab7c3925",1020:"4a936f6d0c8a185f363f",1075:"efa291977901e34db1d6",1095:"add6f7abfbb52e690aec",1130:"b1445f36b9214aef0784",1161:"4a23ddb509db72596003",1174:"f3f427d1c5da6cc0a9ab",1185:"3a3f51ef79b8a4e637c1",1221:"af3bccbae08e2033624e",1256:"4b9a403d3909b6fc7131",1258:"d965f006bd20b8ca4361",1261:"60feda24c9afd7f51a05",1263:"89030a1b7c3c75aab09d",1293:"93ed124eb4cbbb225c1f",1351:"601d38f4e3d503f0c55f",1382:"89f3fcdba6d89f15bfb1",1398:"a42bcb757cd866d3556f",1402:"d92c9f10b7d941b95817",1407:"88781888fd2fcfbe7e93",1493:"291a7c0552ed87dd97db",1568:"3f356d7ce14a0d520777",1573:"5bb2b6ca160aac536eac",1605:"72dfbbf44d2d5ca75f9a",1611:"49e446587298aed47fd3",1722:"34f288ecadb0c2d36d20",1862:"b739e00121e7334f538f",1877:"fd06ef8380c102d47297",1899:"66f8c098c79f8a515c46",1948:"cbf98d2c8c1d75771d83",2079:"886a855bf9a3bb1169f1",2089:"236135bf62aa9ae755bb",2105:"2ad6d4273a9ca8e04733",2112:"f4ec9c40d836590df1d3",2229:"93b1089bea4e6a90c580",2264:"d725b56ab34ef248b377",2267:"4d141c70e6ed1ac3739c",2403:"90dbb71e89086ac6be08",2439:"8c96d1c879342fd0bb2e",2549:"0de196cd19e901bfa650",2646:"d1085f1bd92674cddfea",2671:"3ae3da3cbdc49b48cda5",2698:"dc9a895b6d3ac1e09f23",2713:"7b73470e53ddfc20125f",2797:"b51b44b92a7891b3ec06",2955:"d6d83ab2deb6855f5f2a",2983:"cd3f08637f1c55ba4f86",3036:"83d9b929b63d41396e1b",3126:"d61f154a9bf0b1b168e3",3141:"725bb7f6047b7ddde2e0",3187:"be5a4f585c3160fc2b17",3208:"d1d5631479c30d42e2a4",3232:"6c8e76be1cb6876d3994",3240:"553b87374088c8609024",3265:"5d2121762fba1bc98616",3325:"1dd78ea3814813497034",3496:"a83b057c3050149a88a7",3544:"03b0b648d5f229219e40",3558:"11883d5f0e05b438e601",3567:"612731e4ae71e6aff704",3588:"5e3abc41806668dbe7da",3606:"dc58e60dd52d7768da88",3711:"841df01be436ef141483",3745:"68fedf8ed91aee9ba791",3749:"f4129e4e2e6c56342720",3831:"33cb6bd10395ec8fcdf8",3871:"7f1071defd06ede0a34a",3955:"de2a1c2fd96c7bc78fa2",3985:"b3ba9da1f64e2de46121",4139:"df8b9f79f4568d12f1cd",4194:"48fec584e62a83201c80",4237:"abb54234426320c724e3",4266:"4782e8a2f187431b570e",4273:"dea2f245771d9d1afdbb",4421:"d87e42b6484e90eace22",4458:"e964ad0ca517aecb0b81",4474:"a3c0cd02dfdc4754ef63",4494:"ed5d7c50a0c8a8f88e68",4502:"46594e08f1d2a3a8898a",4572:"98c8a77ef317f5f8b6d9",4579:"324ea06214e3e7cf9b5b",4625:"62ba81ac91dbe5d63dd8",4662:"32d03ce9bf20736a9942",4667:"201598ac5599e934b59b",4732:"89f0eda110a2d35f2d6d",4757:"c3f28f6c21f32ea37723",4758:"95d64f8deb6de7b966ab",4787:"8fac77ccb72ab317a4cb",4790:"bfb2d4d28afd76958583",4794:"9de81e2fb162fdf0a5e2",4797:"10a530219d278535d1ec",4810:"e5c0c47a80cb842ebbc7",4817:"701f3f87e9a79fb157d7",4832:"6d13aacaaf914e02ad77",4851:"d17e22e4f70d77d6860c",4972:"92b4f1a79172452ffe53",5051:"8c70601fef9b0294b3f4",5094:"bddfd11866b5aae70ae5",5123:"a386bd6a61705414f257",5181:"7368eab6e41467979929",5201:"9446190e3687b7ac6cbf",5215:"f0af271e1423bb58613f",5224:"fb7dd3bfa08171d4491b",5226:"32f9ad1249864c11ff8b",5249:"fcaa8226e539b2bdc0fc",5264:"023f97aa4a0780a4de34",5281:"995ee14969b6510c95cf",5330:"3a2d128628e1949aacc7",5335:"88b06a818cd0117f56b1",5350:"e7ba685fefef9bacc003",5359:"851c1d40a15075f13b7b",5367:"f90d3fec726e091e75ad",5378:"f130320b771f071849f9",5507:"63ef2867979bfa80eb80",5566:"7a479eaf3f1ba1628204",5580:"5c5ef24ef88f579c2fe3",5592:"7cb79b6f9771c9738ce2",5641:"e29435fec939cc931b0d",5656:"9e85536acf727873739d",5707:"52da1ca91b9da0197b30",5771:"82886f5cb737d608e838",5777:"138df5040f9cbf459b4e",5802:"466d74e3e6955ef7209a",5816:"532adf5353085c00f861",5832:"1eaa7d7cc58531d339c3",5838:"57ab0f5f2bd7fe255f23",5962:"60defb0bb2dea8c6c70d",5972:"718a36d3b9d2e706a7bd",5998:"60c5a3ac3477b59f20d1",6061:"e3e81b8e8c58530a1e1d",6126:"2a62b45ae362def7b095",6150:"ec7b90a8f149dc5c30ee",6167:"fc8b0059603d2b904029",6207:"d2863860c4bc2a3fcf1c",6254:"e6a454f13352d902d39c",6303:"c9a737a9e618bdd096b6",6357:"dfd0c5aabf72132ba465",6371:"d75348758180a184b2b7",6377:"323e845597342cf9b240",6420:"7c459237aca026af48c9",6447:"1b63a922a8a588456838",6486:"59091cc686ab0175d690",6507:"2d1b06f3117c0be47e8a",6579:"fa75170caa0919f53d4a",6668:"cd01c46e5d0f483b314f",6682:"7bee19163e137b73d8b7",6693:"ab0b42dabfbe544e9cf0",6758:"1d67bff16a9af3b5e8ec",6819:"32c3e9492f9ab904eb0f",6871:"c7c924cf89dcb6670405",6883:"97f4a6f3ec354edd99bd",6947:"26de135c9a25d4ec02ee",6968:"a1e6b31387ea0a474b42",6981:"180f845810b11715ef59",7003:"75af75ffb10928239f32",7183:"bbe568136db4b4fb0bf9",7245:"e5b27bb82a3435551e9d",7249:"b74eb359a2a6af0d5db7",7405:"58725c2bee7aac317f1e",7460:"6c0df1e72ac6875430bc",7521:"da26501296b1ea815869",7584:"6c4c8c8a23fd7f5a0416",7610:"6a13b581bc3adc56038d",7633:"ca8e3b275562feee86a6",7654:"b982e46a2c142556997d",7716:"2b50b821714fc0d6adcf",7760:"1793d0e13f58733ffc45",7803:"aadb1fe7211f9a0455dc",7832:"d44137abb19f4b4f1a8f",7850:"c1e9bb4a62a85fde144f",7922:"b17a011c4b3d57ecf826",7936:"91d5217be0372f0d151c",7974:"21310f1eee77b4760115",7984:"55ef55ff21b2796f6fb8",7989:"43866c9480a83a7333a5",8041:"108c8baedd99ed2b2154",8274:"b29aec5c39be728287ae",8312:"2e2791ccd90025906145",8349:"48f61923b381cc228a68",8398:"4cb6c9e475fbd397aa82",8425:"3c2d4c2aa6c7573a36ed",8463:"7526fce3acb65cd9fb35",8464:"84e7073e89250b421fe7",8491:"dfcb50851ad9a8292a67",8551:"b6a0c2cb92d849df1ad1",8623:"74a4300e4d5ece5b52d3",8650:"dfe9c91e8cb8c0917ef5",8656:"762d4c99ea31d0a7ce0e",8682:"02d9fe3d2d0f280661d1",8695:"3a08135f98c245cae58d",8701:"9d41897b6aa89bbe17fa",8750:"8932d659b9462359cd4f",8774:"83e38247bab05bc68aa7",8782:"568dec0eaeedfa2e09a0",8883:"3ea64ae0c92692819070",8924:"d230312d67b229d5bdc7",8970:"b81603ea1b891fa6a91a",9013:"54da9e37d2c0ec5d4543",9052:"519c579e7f894d85eb7e",9101:"3ee0e54fb55141f57a68",9109:"6a7633dc38e60df1f987",9137:"9067f8806f347dc52118",9173:"46068d9c3c8a2a417df0",9207:"89a0e9fd5f0e6b061380",9305:"d91ccc2cedea7f9cc35c",9322:"660e22f98e5b1588c83f",9325:"be2e9c8ae67952912f47",9393:"532757085407a9bec387",9396:"150f74e095be734d3a63",9452:"75bcb61c8508dca4809b",9471:"c291b9044bec876ba6d8",9483:"6410a6bfa0a6986e6940",9502:"7d9d55f1c2c9dd7af5ca",9510:"5972eb50d0dec41716a4",9541:"c6cc29820125c05aea30",9558:"613279b218a55e9b79cc",9622:"5c95ce47343994695c1a",9767:"39e96cce5a322bae148b",9794:"815f7ca4e1c4b2abb4d1",9811:"4425f0ee28cd06534dd5",9857:"21151c26622dbe000474",9873:"161050859a2a9916fa97",9877:"6bd4788b0e019aeb2b56",9916:"45b2ec7140595e3f82a0"}[e]+".chunk.js",c.miniCssF=e=>(({452:"DashboardContainer",9502:"AlertList",9541:"ExplorePage"}[e]||e)+"."+{137:"2261143f2635359dbece",380:"930d1c818df9fcea5d70",452:"8fe1674bb3e34a1797b5",1261:"60feda24c9afd7f51a05",1877:"fd06ef8380c102d47297",3036:"83d9b929b63d41396e1b",4194:"48fec584e62a83201c80",4237:"abb54234426320c724e3",4494:"ed5d7c50a0c8a8f88e68",5378:"f130320b771f071849f9",5566:"7a479eaf3f1ba1628204",6871:"c7c924cf89dcb6670405",8623:"74a4300e4d5ece5b52d3",8650:"dfe9c91e8cb8c0917ef5",9502:"7d9d55f1c2c9dd7af5ca",9541:"c6cc29820125c05aea30"}[e]+".chunk.css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},r="superset:",c.l=(e,t,a,i)=>{if(n[e])n[e].push(t);else{var l,d;if(void 0!==a)for(var o=document.getElementsByTagName("script"),s=0;s<o.length;s++){var u=o[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){l=u;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.setAttribute("data-webpack",r+a),l.src=e),n[e]=[t];var b=(t,a)=>{l.onerror=l.onload=null,clearTimeout(f);var r=n[e];if(delete n[e],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(a))),t)return t(a)},f=setTimeout(b.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=b.bind(null,l.onerror),l.onload=b.bind(null,l.onload),d&&document.head.appendChild(l)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/static/assets/",i=e=>new Promise(((t,a)=>{var n=c.miniCssF(e),r=c.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=(l=a[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(r===e||r===t))return l}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var l;if((r=(l=i[n]).getAttribute("data-href"))===e||r===t)return l}})(n,r))return t();((e,t,a,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=i=>{if(r.onerror=r.onload=null,"load"===i.type)a();else{var l=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.href||t,o=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");o.code="CSS_CHUNK_LOAD_FAILED",o.type=l,o.request=d,r.parentNode.removeChild(r),n(o)}},r.href=t,document.head.appendChild(r)})(e,r,t,a)})),l={7103:0},c.f.miniCss=(e,t)=>{l[e]?t.push(l[e]):0!==l[e]&&{137:1,380:1,452:1,1261:1,1877:1,3036:1,4194:1,4237:1,4494:1,5378:1,5566:1,6871:1,8623:1,8650:1,9502:1,9541:1}[e]&&t.push(l[e]=i(e).then((()=>{l[e]=0}),(t=>{throw delete l[e],t})))},(()=>{var e={7103:0};c.f.j=(t,a)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else if(/^(126|687)1$/.test(t))e[t]=0;else{var r=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=r);var i=c.p+c.u(t),l=new Error;c.l(i,(a=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}}),"chunk-"+t,t)}},c.H.j=t=>{if(!(c.o(e,t)&&void 0!==e[t]||/^(126|687)1$/.test(t))){e[t]=null;var a=document.createElement("link");a.charset="utf-8",c.nc&&a.setAttribute("nonce",c.nc),a.rel="preload",a.as="script",a.href=c.p+c.u(t),document.head.appendChild(a)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[i,l,d]=a,o=0;if(i.some((t=>0!==e[t]))){for(n in l)c.o(l,n)&&(c.m[n]=l[n]);if(d)var s=d(c)}for(t&&t(a);o<i.length;o++)r=i[o],c.o(e,r)&&e[r]&&e[r][0](),e[i[o]]=0;return c.O(s)},a=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),d={468:[1216,789,4282,7167,2639,876,2671,1407,5010,7311,8864,8274,1722,4717,452],9541:[1216,789,4282,7167,2639,876,2671,1407,5010,7311,8864,8274,1722,4717,452]},c.f.preload=e=>{var t=d[e];Array.isArray(t)&&t.map(c.G)},c.O(void 0,[1216,504,7550,789,2102,4282,7167,2639,1844,2087,5755,3807,9602,5010,2452,7311,8864,5481,9454,1262,9772,5296,7230,4717],(()=>c(35260)));var u=c.O(void 0,[1216,504,7550,789,2102,4282,7167,2639,1844,2087,5755,3807,9602,5010,2452,7311,8864,5481,9454,1262,9772,5296,7230,4717],(()=>c(58708)));u=c.O(u)})();
//# sourceMappingURL=spa.1013d99ece3319e06342.entry.js.map