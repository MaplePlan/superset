"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1262],{39991:e=>{e.exports=function(){function e(e,t,r,s,a){return e<t||r<t?e>r?r+1:e+1:s===a?t:t+1}return function(t,r){if(t===r)return 0;if(t.length>r.length){var s=t;t=r,r=s}for(var a=t.length,n=r.length;a>0&&t.charCodeAt(a-1)===r.charCodeAt(n-1);)a--,n--;for(var o=0;o<a&&t.charCodeAt(o)===r.charCodeAt(o);)o++;if(n-=o,0==(a-=o)||n<3)return n;var i,l,u,c,g,d,h,R,_,E,C,m,p=0,O=[];for(i=0;i<a;i++)O.push(i+1),O.push(t.charCodeAt(o+i));for(var b=O.length-1;p<n-3;)for(_=r.charCodeAt(o+(l=p)),E=r.charCodeAt(o+(u=p+1)),C=r.charCodeAt(o+(c=p+2)),m=r.charCodeAt(o+(g=p+3)),d=p+=4,i=0;i<b;i+=2)l=e(h=O[i],l,u,_,R=O[i+1]),u=e(l,u,c,E,R),c=e(u,c,g,C,R),d=e(c,g,d,m,R),O[i]=d,g=c,c=u,u=l,l=h;for(;p<n;)for(_=r.charCodeAt(o+(l=p)),d=++p,i=0;i<b;i+=2)h=O[i],O[i]=d=e(h,l,d,_,O[i+1]),l=h;return d}}()},31405:(e,t,r)=>{r.d(t,{n:()=>a}),r(67294);var s=r(11965);const a=()=>(0,s.tZ)(s.xB,{styles:e=>s.iv`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      strong,
      th {
        font-weight: ${e.typography.weights.bold};
      }
    `})},50948:(e,t,r)=>{r.d(t,{Z:()=>h});var s=r(51995),a=r(11965),n=r(94184),o=r.n(n),i=r(13423),l=r(67294),u=r(70163),c=r(1927);const g=s.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,d=e=>a.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function h(e){let{toast:t,onCloseToast:r}=e;const s=(0,l.useRef)(),[n,h]=(0,l.useState)(!1),R=()=>{h(!0)},_=(0,l.useCallback)((()=>{s.current&&clearTimeout(s.current),h((()=>(setTimeout((()=>{r(t.id)}),150),!1)))}),[r,t.id]);(0,l.useEffect)((()=>(setTimeout(R),t.duration>0&&(s.current=setTimeout(_,t.duration)),()=>{s.current&&clearTimeout(s.current)})),[_,t.duration]);let E="toast--success",C=(0,a.tZ)(u.Z.CircleCheckSolid,{css:e=>d(e)});return t.toastType===c.p.WARNING?(C=(0,a.tZ)(u.Z.WarningSolid,{css:d}),E="toast--warning"):t.toastType===c.p.DANGER?(C=(0,a.tZ)(u.Z.ErrorSolid,{css:d}),E="toast--danger"):t.toastType===c.p.INFO&&(C=(0,a.tZ)(u.Z.InfoSolid,{css:d}),E="toast--info"),(0,a.tZ)(g,{className:o()("alert","toast",n&&"toast--visible",E),role:"alert"},C,(0,a.tZ)(i.ZP,{content:t.text}),(0,a.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:_,"aria-label":"Close"}))}},5667:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(14890),a=r(37703),n=r(37355),o=r(72570);const i=(0,a.$j)((e=>{let{messageToasts:t}=e;return{toasts:t}}),(e=>(0,s.DE)({removeToast:o.RS},e)))(n.Z)},37355:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(67294),a=r(51995),n=r(50948),o=r(11965);const i=a.iK.div`
  max-width: 600px;
  position: fixed;
  ${e=>{let{position:t}=e;return"bottom"===t?"bottom":"top"}}: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${e=>{let{theme:t}=e;return t.zIndex.max}};
  word-break: break-word;

  .toast {
    background: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}};
    box-shadow: 0 2px 4px 0
      fade(
        ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}},
        ${e=>{let{theme:t}=e;return t.opacity.mediumLight}}
      );
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${e=>{let{theme:t}=e;return t.transitionTiming}}s,
      opacity ${e=>{let{theme:t}=e;return t.transitionTiming}}s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
    }
  }

  .toast > button {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`;function l(e){let{toasts:t,removeToast:r,position:a="bottom"}=e;return(0,o.tZ)(s.Fragment,null,t.length>0&&(0,o.tZ)(i,{id:"toast-presenter",position:a},t.map((e=>(0,o.tZ)(n.Z,{key:e.id,toast:e,onCloseToast:r})))))}},38552:(e,t,r)=>{r.d(t,{Z:()=>N});var s=r(19755),a=r.n(s),n=r(31069),o=r(98286),i=r(92869),l=r(67663),u=r(78580),c=r.n(u),g=r(67294),d=r(61988),h=r(11965);function R(e){let{code:t,message:r}=e;return(0,h.tZ)(g.Fragment,null,r," ",(0,h.tZ)("a",{href:`https://superset.apache.org/docs/miscellaneous/issue-codes#issue-${t}`,rel:"noopener noreferrer",target:"_blank"},(0,h.tZ)("i",{className:"fa fa-external-link"})))}var _=r(91178);const E=function(e){var t;let{error:r,source:s}=e;const{extra:a,level:n}=r,o=c()(t=["dashboard","explore"]).call(t,s),i=o?(0,d.tn)("We’re having trouble loading this visualization. Queries are set to timeout after %s second.","We’re having trouble loading this visualization. Queries are set to timeout after %s seconds.",a.timeout,a.timeout):(0,d.tn)("We’re having trouble loading these results. Queries are set to timeout after %s second.","We’re having trouble loading these results. Queries are set to timeout after %s seconds.",a.timeout,a.timeout),l=(0,h.tZ)(g.Fragment,null,(0,h.tZ)("p",null,(0,d.t)("This may be triggered by:"),(0,h.tZ)("br",null),a.issue_codes.map((e=>(0,h.tZ)(R,e))).reduce(((e,t)=>[e,(0,h.tZ)("br",null),t]))),o&&a.owners&&(0,h.tZ)(g.Fragment,null,(0,h.tZ)("br",null),(0,h.tZ)("p",null,(0,d.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",a.owners.length)),(0,h.tZ)("p",null,(0,d.tn)("Chart Owner: %s","Chart Owners: %s",a.owners.length,a.owners.join(", "))))),u=(0,d.t)("%(subtitle)s\nThis may be triggered by:\n %(issue)s",{subtitle:i,issue:a.issue_codes.map((e=>e.message)).join("\n")});return(0,h.tZ)(_.Z,{title:(0,d.t)("Timeout error"),subtitle:i,level:n,source:s,copyText:u,body:l})};var C=r(5872),m=r.n(C);const p=function(e){var t;let{error:r,source:s="dashboard",subtitle:a}=e;const{extra:n,level:o,message:i}=r,l=c()(t=["dashboard","explore"]).call(t,s),u=n&&(0,h.tZ)(g.Fragment,null,(0,h.tZ)("p",null,(0,d.t)("This may be triggered by:"),(0,h.tZ)("br",null),n.issue_codes.map((e=>(0,h.tZ)(R,m()({},e,{key:e.code})))).reduce(((e,t)=>[e,(0,h.tZ)("br",null),t]))),l&&n.owners&&(0,h.tZ)(g.Fragment,null,(0,h.tZ)("br",null),(0,h.tZ)("p",null,(0,d.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",n.owners.length)),(0,h.tZ)("p",null,(0,d.tn)("Chart Owner: %s","Chart Owners: %s",n.owners.length,n.owners.join(", "))))),E=n&&n.issue_codes?(0,d.t)("%(message)s\nThis may be triggered by: \n%(issues)s",{message:i,issues:n.issue_codes.map((e=>e.message)).join("\n")}):i;return(0,h.tZ)(_.Z,{title:(0,d.t)("%s Error",n&&n.engine_name||(0,d.t)("DB engine")),subtitle:a,level:o,source:s,copyText:E,body:u})};var O=r(39991),b=r.n(O);const T=function(e){let{error:t,source:r="sqllab",subtitle:s}=e;const{extra:a={issue_codes:[]},level:n,message:o}=t,i=(0,d.tn)("This was triggered by:","This may be triggered by:",a.issue_codes.length),l=((e,t)=>{const r={};return e.forEach((e=>{t.forEach((t=>{b()(e,t)<=2&&(r[e]||(r[e]=[]),r[e].push(`"${t}"`))}))})),r})(a.undefined_parameters||[],Object.keys(a.template_parameters||{})),u=(0,h.tZ)(g.Fragment,null,(0,h.tZ)("p",null,Object.keys(l).length>0&&(0,h.tZ)(g.Fragment,null,(0,h.tZ)("p",null,(0,d.t)("Did you mean:")),(0,h.tZ)("ul",null,Object.entries(l).map((e=>{let[t,r]=e;return(0,h.tZ)("li",null,(0,d.tn)('%(suggestion)s instead of "%(undefinedParameter)s?"','%(firstSuggestions)s or %(lastSuggestion)s instead of "%(undefinedParameter)s"?',r.length,{suggestion:r.join(", "),firstSuggestions:r.slice(0,-1).join(", "),lastSuggestion:r[r.length-1],undefinedParameter:t}))}))),(0,h.tZ)("br",null)),i,(0,h.tZ)("br",null),a.issue_codes.length>0&&a.issue_codes.map((e=>(0,h.tZ)(R,e))).reduce(((e,t)=>[e,(0,h.tZ)("br",null),t])))),c=`${o}\n${i}\n${a.issue_codes.map((e=>e.message)).join("\n")}`;return(0,h.tZ)(_.Z,{title:(0,d.t)("Parameter error"),subtitle:s,level:n,source:r,copyText:c,body:u})},f=function(e){let{error:t,source:r="dashboard",subtitle:s}=e;const{level:a,message:n}=t;return(0,h.tZ)(_.Z,{title:(0,d.t)("Missing dataset"),subtitle:s,level:a,source:r,copyText:n,body:null})};function N(){a()(document).ready((function(){a()(":checkbox[data-checkbox-api-prefix]").change((function(){const e=a()(this);var t,r;t=e.data("checkbox-api-prefix"),r=`#${e.attr("id")}`,n.Z.get({endpoint:t+a()(r)[0].checked}).then((()=>{})).catch((e=>(0,o.O)(e).then((e=>{e&&e.message&&function(e){const t=e.severity||"info";a()('<div class="alert"> <button type="button" class="close" data-dismiss="alert">×</button> </div>').addClass(`alert-${t}`).append(e.message||"").appendTo(a()("#alert-container"))}(e)}))))})),a()("#language-picker a").click((function(e){e.preventDefault(),n.Z.get({url:e.currentTarget.href,parseMethod:null}).then((()=>{window.location.reload()}))}))})),window.$=a(),window.jQuery=a(),r(57915),function(){const e=(0,i.Z)();e.registerValue(l.C.FRONTEND_TIMEOUT_ERROR,E),e.registerValue(l.C.BACKEND_TIMEOUT_ERROR,E),e.registerValue(l.C.DATABASE_NOT_FOUND_ERROR,p),e.registerValue(l.C.GENERIC_DB_ENGINE_ERROR,p),e.registerValue(l.C.GENERIC_BACKEND_ERROR,p),e.registerValue(l.C.COLUMN_DOES_NOT_EXIST_ERROR,p),e.registerValue(l.C.TABLE_DOES_NOT_EXIST_ERROR,p),e.registerValue(l.C.MISSING_TEMPLATE_PARAMS_ERROR,T),e.registerValue(l.C.INVALID_TEMPLATE_PARAMS_ERROR,T),e.registerValue(l.C.RESULTS_BACKEND_NOT_CONFIGURED_ERROR,p),e.registerValue(l.C.DML_NOT_ALLOWED_ERROR,p),e.registerValue(l.C.INVALID_CTAS_QUERY_ERROR,p),e.registerValue(l.C.INVALID_CVAS_QUERY_ERROR,p),e.registerValue(l.C.QUERY_SECURITY_ACCESS_ERROR,p),e.registerValue(l.C.CONNECTION_INVALID_HOSTNAME_ERROR,p),e.registerValue(l.C.RESULTS_BACKEND_ERROR,p),e.registerValue(l.C.ASYNC_WORKERS_ERROR,p),e.registerValue(l.C.SQLLAB_TIMEOUT_ERROR,p),e.registerValue(l.C.CONNECTION_PORT_CLOSED_ERROR,p),e.registerValue(l.C.CONNECTION_HOST_DOWN_ERROR,p),e.registerValue(l.C.CONNECTION_INVALID_USERNAME_ERROR,p),e.registerValue(l.C.CONNECTION_INVALID_PASSWORD_ERROR,p),e.registerValue(l.C.CONNECTION_ACCESS_DENIED_ERROR,p),e.registerValue(l.C.CONNECTION_UNKNOWN_DATABASE_ERROR,p),e.registerValue(l.C.SCHEMA_DOES_NOT_EXIST_ERROR,p),e.registerValue(l.C.OBJECT_DOES_NOT_EXIST_ERROR,p),e.registerValue(l.C.SYNTAX_ERROR,p),e.registerValue(l.C.CONNECTION_DATABASE_PERMISSIONS_ERROR,p),e.registerValue(l.C.FAILED_FETCHING_DATASOURCE_INFO_ERROR,f)}()}}}]);
//# sourceMappingURL=1262.93e742da784be08f2d33.entry.js.map