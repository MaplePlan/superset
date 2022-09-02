(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5010],{13433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(67294),o=n(45697),a=n.n(o),l=n(61988),i=n(58593),s=n(14114),d=n(10222),c=n(11965);const u={copyNode:a().node,getText:a().func,onCopyEnd:a().func,shouldShowText:a().bool,text:a().string,wrapped:a().bool,tooltipText:a().string,addDangerToast:a().func.isRequired,addSuccessToast:a().func.isRequired,hideTooltip:a().bool},g={copyNode:(0,c.tZ)("span",null,"Copy"),onCopyEnd:()=>{},shouldShowText:!0,wrapped:!0,tooltipText:(0,l.t)("Copy to clipboard"),hideTooltip:!1};var p={name:"8irbms",styles:"display:inline-flex;align-items:center"};class m extends r.Component{constructor(e){super(e),this.copyToClipboard=this.copyToClipboard.bind(this),this.onClick=this.onClick.bind(this)}onClick(){this.props.getText?this.props.getText((e=>{this.copyToClipboard(Promise.resolve(e))})):this.copyToClipboard(Promise.resolve(this.props.text))}getDecoratedCopyNode(){return r.cloneElement(this.props.copyNode,{style:{cursor:"pointer"},onClick:this.onClick})}copyToClipboard(e){(0,d.Z)((()=>e)).then((()=>{this.props.addSuccessToast((0,l.t)("Copied to clipboard!"))})).catch((()=>{this.props.addDangerToast((0,l.t)("Sorry, your browser does not support copying. Use Ctrl / Cmd + C!"))})).finally((()=>{this.props.onCopyEnd()}))}renderTooltip(e){return(0,c.tZ)(r.Fragment,null,this.props.hideTooltip?this.getDecoratedCopyNode():(0,c.tZ)(i.u,{id:"copy-to-clipboard-tooltip",placement:"topRight",style:{cursor:e},title:this.props.tooltipText,trigger:["hover"],arrowPointAtCenter:!0},this.getDecoratedCopyNode()))}renderNotWrapped(){return this.renderTooltip("pointer")}renderLink(){return(0,c.tZ)("span",{css:p},this.props.shouldShowText&&this.props.text&&(0,c.tZ)("span",{className:"m-r-5"},this.props.text),this.renderTooltip())}render(){const{wrapped:e}=this.props;return e?this.renderLink():this.renderNotWrapped()}}const h=(0,s.ZP)(m);m.propTypes=u,m.defaultProps=g},54076:(e,t,n)=>{"use strict";n.d(t,{li:()=>d,Tb:()=>c,jy:()=>u,G9:()=>p,lo:()=>m,Mv:()=>h,cD:()=>v,EI:()=>b,fV:()=>_,G6:()=>f,Rw:()=>R});var r=n(78580),o=n.n(r),a=n(51115),l=n(42846),i=n(31069),s=n(55786);const d="<NULL>",c="TRUE",u="FALSE",g=(0,a.bt)(l.Z.DATABASE_DATETIME);function p(e){return i.Z.post({endpoint:"/kv/store/",postPayload:{data:e}}).then((e=>`${window.location.origin+window.location.pathname}?id=${e.json.id}`))}function m(e){return null===e?d:""===e?"<empty string>":!0===e?"<true>":!1===e?"<false>":"string"!=typeof e&&e.toString?e.toString():e}function h(e,t){let n="";for(let r=0;r<e.length;r+=1){const o={};for(let n=0;n<t.length;n+=1){const a=t[n].name||t[n];a in e[r]?o[n]=e[r][a]:o[n]=e[r][parseFloat(a)]}n+=`${Object.values(o).join("\t")}\n`}return n}function v(e,t){return e&&0!==e.length&&0!==(0,s.Z)(t).length?e.map((e=>({...e,...t.reduce(((t,n)=>(null!==e[n]&&void 0!==e[n]&&(t[n]=g(e[n])),t)),{})}))):e}const b=()=>{},_=()=>{const{appVersion:e}=navigator;return o()(e).call(e,"Win")?"Windows":o()(e).call(e,"Mac")?"MacOS":o()(e).call(e,"X11")?"UNIX":o()(e).call(e,"Linux")?"Linux":"Unknown OS"},f=()=>{const{userAgent:e}=navigator;return e&&/^((?!chrome|android).)*safari/i.test(e)},R=e=>null==e},55786:(e,t,n)=>{"use strict";function r(e){return null==e?[]:Array.isArray(e)?e:[e]}n.d(t,{Z:()=>r})},35932:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(5872),o=n.n(r),a=n(11965),l=n(21804),i=n.n(l),s=n(67294),d=n(84967),c=n(94184),u=n.n(c),g=n(4715),p=n(51995),m=n(58593);function h(e){const{tooltip:t,placement:n,disabled:r=!1,buttonSize:l,buttonStyle:c,className:h,cta:v,children:b,href:_,showMarginRight:f=!0,...R}=e,E=(0,p.Fg)(),{colors:y,transitionTiming:C,borderRadius:O,typography:N}=E,{primary:S,grayscale:x,success:T,warning:Z,error:w}=y;let A=32,I=18;"xsmall"===l?(A=22,I=5):"small"===l&&(A=30,I=10);let k=S.light4,D=(0,d.CD)(.1,S.base,S.light4),$=(0,d.CD)(.25,S.base,S.light4),U=x.light2,P=S.dark1,L=P,M=0,F="none",z="transparent",K="transparent",G="transparent";"primary"===c?(k=S.base,D=S.dark1,$=(0,d.CD)(.2,x.dark2,S.dark1),P=x.light5,L=P):"tertiary"===c||"dashed"===c?(k=x.light5,D=x.light5,$=x.light5,U=x.light5,M=1,F="dashed"===c?"dashed":"solid",z=S.dark1,K=S.light1,G=x.light2):"danger"===c?(k=w.base,D=(0,d.CD)(.1,x.light5,w.base),$=(0,d.CD)(.2,x.dark2,w.base),P=x.light5,L=P):"warning"===c?(k=Z.base,D=(0,d.CD)(.1,x.dark2,Z.base),$=(0,d.CD)(.2,x.dark2,Z.base),P=x.light5,L=P):"success"===c?(k=T.base,D=(0,d.CD)(.1,x.light5,T.base),$=(0,d.CD)(.2,x.dark2,T.base),P=x.light5,L=P):"link"===c&&(k="transparent",D="transparent",$="transparent",L=S.base);const B=b;let W=[];W=B&&B.type===s.Fragment?s.Children.toArray(B.props.children):s.Children.toArray(b);const H=f&&W.length>1?2*E.gridUnit:0,q=(0,a.tZ)(g.C0,o()({href:r?void 0:_,disabled:r,className:u()(h,"superset-button",{cta:!!v}),css:(0,a.iv)({display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:1.5715,fontSize:N.sizes.s,fontWeight:N.weights.bold,height:A,textTransform:"uppercase",padding:`0px ${I}px`,transition:`all ${C}s`,minWidth:v?36*E.gridUnit:void 0,minHeight:v?8*E.gridUnit:void 0,boxShadow:"none",borderWidth:M,borderStyle:F,borderColor:z,borderRadius:O,color:P,backgroundColor:k,"&:hover":{color:L,backgroundColor:D,borderColor:K},"&:active":{color:P,backgroundColor:$},"&:focus":{color:P,backgroundColor:k,borderColor:z},"&[disabled], &[disabled]:hover":{color:x.base,backgroundColor:"link"===c?"transparent":U,borderColor:"link"===c?"transparent":G,pointerEvents:"none"},marginLeft:0,"& + .superset-button":{marginLeft:2*E.gridUnit},"& > :first-of-type":{marginRight:H}},"","")},R),b);return t?(0,a.tZ)(m.u,{placement:n,id:`${i()(t)}-tooltip`,title:t},r?(0,a.tZ)("span",{css:(0,a.iv)({cursor:"not-allowed","& > .superset-button":{marginLeft:2*E.gridUnit}},"","")},q):q):q}},91178:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(78580),o=n.n(r),a=n(67294),l=n(51995),i=n(61988),s=n(54076),d=n(74069),c=n(35932),u=n(70163),g=n(13433),p=n(11965);const m=l.iK.div`
  align-items: center;
  background-color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].light2}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
  border: 1px solid ${e=>{let{level:t,theme:n}=e;return n.colors[t].base}};
  color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].dark2}};
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  width: 100%;

  .top-row {
    display: flex;
    justify-content: space-between;
  }

  .error-body {
    padding-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    padding-left: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
  }

  .icon {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .link {
    color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].dark2}};
    text-decoration: underline;
  }
`,h=(0,l.iK)(d.Z)`
  color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].dark2}};
  overflow-wrap: break-word;

  .ant-modal-header {
    background-color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].light2}};
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  }

  .icon {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .header {
    display: flex;
    align-items: center;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
  }
`,v=l.iK.div`
  align-items: center;
  display: flex;
`;function b(e){var t;let{body:n,copyText:r,level:d="error",source:b="dashboard",subtitle:_,title:f}=e;const R=(0,l.Fg)(),[E,y]=(0,a.useState)(!1),[C,O]=(0,a.useState)(!1),N=o()(t=["explore","sqllab"]).call(t,b),S=R.colors[d].base;return(0,p.tZ)(m,{level:d,role:"alert"},(0,p.tZ)("div",{className:"top-row"},(0,p.tZ)(v,null,"error"===d?(0,p.tZ)(u.Z.ErrorSolid,{className:"icon",iconColor:S}):(0,p.tZ)(u.Z.WarningSolid,{className:"icon",iconColor:S}),(0,p.tZ)("strong",null,f)),!N&&(0,p.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>y(!0)},(0,i.t)("See more"))),N?(0,p.tZ)("div",{className:"error-body"},(0,p.tZ)("p",null,_),n&&(0,p.tZ)(a.Fragment,null,!C&&(0,p.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>O(!0)},(0,i.t)("See more")),C&&(0,p.tZ)(a.Fragment,null,(0,p.tZ)("br",null),n,(0,p.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>O(!1)},(0,i.t)("See less"))))):(0,p.tZ)(h,{level:d,show:E,onHide:()=>y(!1),title:(0,p.tZ)("div",{className:"header"},"error"===d?(0,p.tZ)(u.Z.ErrorSolid,{className:"icon",iconColor:S}):(0,p.tZ)(u.Z.WarningSolid,{className:"icon",iconColor:S}),(0,p.tZ)("div",{className:"title"},f)),footer:(0,p.tZ)(a.Fragment,null,r&&(0,p.tZ)(g.Z,{text:r,shouldShowText:!1,wrapped:!1,copyNode:(0,p.tZ)(c.Z,{onClick:s.EI},(0,i.t)("Copy message"))}),(0,p.tZ)(c.Z,{cta:!0,buttonStyle:"primary",onClick:()=>y(!1)},(0,i.t)("Close")))},(0,p.tZ)(a.Fragment,null,(0,p.tZ)("p",null,_),(0,p.tZ)("br",null),n)))}},92869:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(90537),o=n(1875);class a extends r.Z{constructor(){super({name:"ErrorMessageComponent",overwritePolicy:r.r.ALLOW})}}const l=(0,o.Z)(a)},67663:(e,t,n)=>{"use strict";n.d(t,{C:()=>r});const r={FRONTEND_CSRF_ERROR:"FRONTEND_CSRF_ERROR",FRONTEND_NETWORK_ERROR:"FRONTEND_NETWORK_ERROR",FRONTEND_TIMEOUT_ERROR:"FRONTEND_TIMEOUT_ERROR",GENERIC_DB_ENGINE_ERROR:"GENERIC_DB_ENGINE_ERROR",COLUMN_DOES_NOT_EXIST_ERROR:"COLUMN_DOES_NOT_EXIST_ERROR",TABLE_DOES_NOT_EXIST_ERROR:"TABLE_DOES_NOT_EXIST_ERROR",SCHEMA_DOES_NOT_EXIST_ERROR:"SCHEMA_DOES_NOT_EXIST_ERROR",CONNECTION_INVALID_USERNAME_ERROR:"CONNECTION_INVALID_USERNAME_ERROR",CONNECTION_INVALID_PASSWORD_ERROR:"CONNECTION_INVALID_PASSWORD_ERROR",CONNECTION_INVALID_HOSTNAME_ERROR:"CONNECTION_INVALID_HOSTNAME_ERROR",CONNECTION_PORT_CLOSED_ERROR:"CONNECTION_PORT_CLOSED_ERROR",CONNECTION_INVALID_PORT_ERROR:"CONNECTION_INVALID_PORT_ERROR",CONNECTION_HOST_DOWN_ERROR:"CONNECTION_HOST_DOWN_ERROR",CONNECTION_ACCESS_DENIED_ERROR:"CONNECTION_ACCESS_DENIED_ERROR",CONNECTION_UNKNOWN_DATABASE_ERROR:"CONNECTION_UNKNOWN_DATABASE_ERROR",CONNECTION_DATABASE_PERMISSIONS_ERROR:"CONNECTION_DATABASE_PERMISSIONS_ERROR",CONNECTION_MISSING_PARAMETERS_ERRORS:"CONNECTION_MISSING_PARAMETERS_ERRORS",OBJECT_DOES_NOT_EXIST_ERROR:"OBJECT_DOES_NOT_EXIST_ERROR",SYNTAX_ERROR:"SYNTAX_ERROR",VIZ_GET_DF_ERROR:"VIZ_GET_DF_ERROR",UNKNOWN_DATASOURCE_TYPE_ERROR:"UNKNOWN_DATASOURCE_TYPE_ERROR",FAILED_FETCHING_DATASOURCE_INFO_ERROR:"FAILED_FETCHING_DATASOURCE_INFO_ERROR",TABLE_SECURITY_ACCESS_ERROR:"TABLE_SECURITY_ACCESS_ERROR",DATASOURCE_SECURITY_ACCESS_ERROR:"DATASOURCE_SECURITY_ACCESS_ERROR",DATABASE_SECURITY_ACCESS_ERROR:"DATABASE_SECURITY_ACCESS_ERROR",QUERY_SECURITY_ACCESS_ERROR:"QUERY_SECURITY_ACCESS_ERROR",MISSING_OWNERSHIP_ERROR:"MISSING_OWNERSHIP_ERROR",BACKEND_TIMEOUT_ERROR:"BACKEND_TIMEOUT_ERROR",DATABASE_NOT_FOUND_ERROR:"DATABASE_NOT_FOUND_ERROR",MISSING_TEMPLATE_PARAMS_ERROR:"MISSING_TEMPLATE_PARAMS_ERROR",INVALID_TEMPLATE_PARAMS_ERROR:"INVALID_TEMPLATE_PARAMS_ERROR",RESULTS_BACKEND_NOT_CONFIGURED_ERROR:"RESULTS_BACKEND_NOT_CONFIGURED_ERROR",DML_NOT_ALLOWED_ERROR:"DML_NOT_ALLOWED_ERROR",INVALID_CTAS_QUERY_ERROR:"INVALID_CTAS_QUERY_ERROR",INVALID_CVAS_QUERY_ERROR:"INVALID_CVAS_QUERY_ERROR",SQLLAB_TIMEOUT_ERROR:"SQLLAB_TIMEOUT_ERROR",RESULTS_BACKEND_ERROR:"RESULTS_BACKEND_ERROR",ASYNC_WORKERS_ERROR:"ASYNC_WORKERS_ERROR",GENERIC_COMMAND_ERROR:"GENERIC_COMMAND_ERROR",GENERIC_BACKEND_ERROR:"GENERIC_BACKEND_ERROR",INVALID_PAYLOAD_FORMAT_ERROR:"INVALID_PAYLOAD_FORMAT_ERROR",INVALID_PAYLOAD_SCHEMA_ERROR:"INVALID_PAYLOAD_SCHEMA_ERROR"}},70163:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var r=n(5872),o=n.n(r),a=n(18029),l=n.n(a),i=n(67294),s=n(78580),d=n.n(s),c=n(62816),u=n(16165),g=n(51995);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const m=function(e){return i.createElement("svg",p({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e))};var h=n(11965);const v=(0,g.iK)((e=>{let{iconColor:t,iconSize:n,viewBox:r,...a}=e;return(0,h.tZ)(u.Z,o()({viewBox:r||"0 0 24 24"},a))}))`
  ${e=>{let{iconColor:t}=e;return t&&`color: ${t};`}};
  font-size: ${e=>{let{iconSize:t,theme:n}=e;return t?`${n.typography.sizes[t]||n.typography.sizes.m}px`:"24px"}};
`,b=e=>{const{fileName:t,...r}=e,[,a]=(0,i.useState)(!1),l=(0,i.useRef)(),s=t.replace("_","-");return(0,i.useEffect)((()=>{let e=!1;return async function(){l.current=(await n(35782)(`./${t}.svg`)).default,e||a(!0)}(),()=>{e=!0}}),[t,l]),(0,h.tZ)(v,o()({component:l.current||m,"aria-label":s},r))},_=Object.keys(c).filter((e=>!d()(e).call(e,"TwoTone"))).map((e=>({[e]:t=>(0,h.tZ)(v,o()({component:c[e]},t))}))).reduce(((e,t)=>({...e,...t}))),f={};["alert","alert_solid","alert_solid_small","area-chart-tile","bar-chart-tile","big-number-chart-tile","binoculars","bolt","bolt_small","bolt_small_run","calendar","cancel","cancel_solid","cancel-x","card_view","cards","cards_locked","caret_down","caret_left","caret_right","caret_up","certified","check","checkbox-half","checkbox-off","checkbox-on","circle_check","circle_check_solid","circle","clock","close","code","cog","collapse","color_palette","current-rendered-tile","components","copy","cursor_target","database","dataset_physical","dataset_virtual_greyscale","dataset_virtual","download","drag","edit_alt","edit","email","error","error_solid","error_solid_small","exclamation","expand","eye","eye_slash","favorite-selected","favorite_small_selected","favorite-unselected","field_abc","field_boolean","field_date","field_derived","field_num","field_struct","file","filter","filter_small","folder","full","function_x","gear","grid","image","import","info","info-solid","info_solid_small","join","keyboard","layers","lightbulb","line-chart-tile","link","list","list_view","location","lock_locked","lock_unlocked","map","message","minus","minus_solid","more_horiz","more_vert","move","nav_charts","nav_dashboard","nav_data","nav_explore","nav_home","nav_lab","note","offline","paperclip","pie-chart-tile","placeholder","plus","plus_large","plus_small","plus_solid","queued","refresh","running","save","sql","search","server","share","slack","sort_asc","sort_desc","sort","table","table-chart-tile","tag","trash","triangle_change","triangle_down","triangle_up","up-level","user","warning","warning_solid","x-large","x-small","tags","ballot","category","undo","redo"].forEach((e=>{const t=l()(e).replace(/ /g,"");f[t]=t=>(0,h.tZ)(b,o()({fileName:e},t))}));const R={..._,...f}},37921:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(5872),o=n.n(r),a=n(11965),l=(n(67294),n(4715)),i=n(51995);function s(e){const t=(0,i.Fg)(),{colors:n,transitionTiming:r}=t,{type:s="default",onClick:d,children:c,...u}=e,{alert:g,primary:p,secondary:m,grayscale:h,success:v,warning:b,error:_,info:f}=n;let R=h.light3,E=d?p.light2:h.light3,y=d?h.light2:"transparent",C=d?p.light1:"transparent",O=h.dark1;if("default"!==s){let e;O=h.light4,"alert"===s?(O=h.dark1,e=g):e="success"===s?v:"warning"===s?b:"danger"===s?_:"info"===s?f:"secondary"===s?m:p,R=e.base,E=d?e.dark1:e.base,y=d?e.dark1:"transparent",C=d?e.dark2:"transparent"}return(0,a.tZ)(l.Vp,o()({onClick:d},u,{css:(0,a.iv)({transition:`background-color ${r}s`,whiteSpace:"nowrap",cursor:d?"pointer":"default",overflow:"hidden",textOverflow:"ellipsis",backgroundColor:R,borderColor:y,borderRadius:21,padding:"0.35em 0.8em",lineHeight:1,color:O,maxWidth:"100%","&:hover":{backgroundColor:E,borderColor:C,opacity:1}},"","")}),c)}},38703:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s}),n(67294);var r=n(51995),o=n(94184),a=n.n(o),l=n(11965);const i=r.iK.img`
  z-index: 99;
  width: 50px;
  position: relative;
  margin: 10px;
  &.inline {
    margin: 0px;
    width: 30px;
  }
  &.inline-centered {
    margin: 0 auto;
    width: 30px;
    display: block;
  }
  &.floating {
    padding: 0;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function s(e){let{position:t="floating",image:n="/static/assets/images/loading.gif",className:r}=e;return(0,l.tZ)(i,{className:a()("loading",t,r),alt:"Loading...",src:n,role:"status","aria-live":"polite","aria-label":"Loading"})}},72570:(e,t,n)=>{"use strict";n.d(t,{h:()=>l,fz:()=>i,K7:()=>s,RS:()=>d,bM:()=>c,ws:()=>u,Dz:()=>g,Gb:()=>p,s2:()=>m});var r=n(14670),o=n.n(r),a=n(1927);const l="ADD_TOAST";function i(e){let{toastType:t,text:n,duration:r=8e3,noDuplicate:a=!1}=e;return{type:l,payload:{id:(i=t,`${i}-${o().generate()}`),toastType:t,text:n,duration:r,noDuplicate:a}};var i}const s="REMOVE_TOAST";function d(e){return{type:s,payload:{id:e}}}function c(e,t){return i({text:e,toastType:a.p.INFO,duration:4e3,...t})}function u(e,t){return i({text:e,toastType:a.p.SUCCESS,duration:4e3,...t})}function g(e,t){return i({text:e,toastType:a.p.WARNING,duration:6e3,...t})}function p(e,t){return i({text:e,toastType:a.p.DANGER,duration:8e3,...t})}const m={addInfoToast:c,addSuccessToast:u,addWarningToast:g,addDangerToast:p}},1927:(e,t,n)=>{"use strict";var r;n.d(t,{p:()=>r}),function(e){e.INFO="INFO_TOAST",e.SUCCESS="SUCCESS_TOAST",e.WARNING="WARNING_TOAST",e.DANGER="DANGER_TOAST"}(r||(r={}))},14114:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s,e1:()=>d});var r=n(67294),o=n(14890),a=n(37703),l=n(72570);const i={addInfoToast:l.bM,addSuccessToast:l.ws,addWarningToast:l.Dz,addDangerToast:l.Gb};function s(e){return(0,a.$j)(null,(e=>(0,o.DE)(i,e)))(e)}function d(){const e=(0,a.I0)();return(0,r.useMemo)((()=>(0,o.DE)(i,e)),[e])}},74069:(e,t,n)=>{"use strict";n.d(t,{o:()=>E,Z:()=>C});var r=n(5872),o=n.n(r),a=n(14293),l=n.n(a),i=n(67294),s=n(51995),d=n(61988),c=n(11965),u=n(4715),g=n(35932),p=n(29119),m=n(61193),h=n.n(m);const v=65,b=109,_="380px",f="100vh",R="100vw",E=(0,s.iK)((e=>(0,c.tZ)(u.xT,o()({},e,{maskTransitionName:""}))))`
  ${e=>{let{theme:t,responsive:n,maxWidth:r}=e;return n&&(0,c.iv)("max-width:",null!=r?r:"900px",";padding-left:",3*t.gridUnit,"px;padding-right:",3*t.gridUnit,"px;padding-bottom:0;top:0;","")}}

  .ant-modal-content {
    display: flex;
    flex-direction: column;
    max-height: ${e=>{let{theme:t}=e;return`calc(100vh - ${8*t.gridUnit}px)`}};
    margin-bottom: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    margin-top: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  }

  .ant-modal-header {
    flex: 0 0 auto;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}};
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px
      ${e=>{let{theme:t}=e;return t.borderRadius}}px 0 0;
    padding-left: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    padding-right: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;

    .ant-modal-title h4 {
      display: flex;
      margin: 0;
      align-items: center;
    }
  }

  .ant-modal-close-x {
    display: flex;
    align-items: center;

    .close {
      flex: 1 1 auto;
      margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
      color: ${e=>{let{theme:t}=e;return t.colors.secondary.dark1}};
      font-size: 32px;
      font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.light}};
    }
  }

  .ant-modal-body {
    flex: 0 1 auto;
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    overflow: auto;
    ${e=>{let{resizable:t,height:n}=e;return!t&&n&&`height: ${n};`}}
  }
  .ant-modal-footer {
    flex: 0 0 1;
    border-top: ${e=>{let{theme:t}=e;return t.gridUnit/4}}px solid
      ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;

    .btn {
      font-size: 12px;
      text-transform: uppercase;
    }

    .btn + .btn {
      margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }
  }

  // styling for Tabs component
  // Aaron note 20-11-19: this seems to be exclusively here for the Edit Database modal.
  // TODO: remove this as it is a special case.
  .ant-tabs-top {
    margin-top: -${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  }

  &.no-content-padding .ant-modal-body {
    padding: 0;
  }

  ${e=>{let{draggable:t,theme:n}=e;return t&&`\n    .ant-modal-header {\n      padding: 0;\n      .draggable-trigger {\n          cursor: move;\n          padding: ${4*n.gridUnit}px;\n          width: 100%;\n        }\n    }\n  `}};

  ${e=>{let{resizable:t,hideFooter:n}=e;return t&&`\n    .resizable {\n      pointer-events: all;\n\n      .resizable-wrapper {\n        height: 100%;\n      }\n\n      .ant-modal-content {\n        height: 100%;\n\n        .ant-modal-body {\n          /* 100% - header height - footer height */\n          height: ${n?"calc(100% - 55px);":`calc(100% - 55px - ${v}px);`}\n        }\n      }\n    }\n  `}}
`,y=e=>{let{children:t,disablePrimaryButton:n=!1,primaryButtonLoading:r=!1,onHide:a,onHandledPrimaryAction:s,primaryButtonName:u=(0,d.t)("OK"),primaryButtonType:m="primary",show:y,name:C,title:O,width:N,maxWidth:S,responsive:x=!1,centered:T,footer:Z,hideFooter:w,wrapProps:A,draggable:I=!1,resizable:k=!1,resizableConfig:D={maxHeight:f,maxWidth:R,minHeight:w?b:b+v,minWidth:_,enable:{bottom:!0,bottomLeft:!1,bottomRight:!0,left:!1,top:!1,topLeft:!1,topRight:!1,right:!0}},draggableConfig:$,destroyOnClose:U,...P}=e;const L=(0,i.useRef)(null),[M,F]=(0,i.useState)(),[z,K]=(0,i.useState)(!0);let G;i.isValidElement(Z)&&(G=i.cloneElement(Z,{closeModal:a}));const B=l()(G)?[(0,c.tZ)(g.Z,{key:"back",onClick:a,cta:!0},(0,d.t)("Cancel")),(0,c.tZ)(g.Z,{key:"submit",buttonStyle:m,disabled:n,loading:r,onClick:s,cta:!0},u)]:G,W=N||(x?"100vw":"600px"),H=!(k||I);return(0,c.tZ)(E,o()({centered:!!T,onOk:s,onCancel:a,width:W,maxWidth:S,responsive:x,visible:y,title:(0,c.tZ)((()=>I?(0,c.tZ)("div",{className:"draggable-trigger",onMouseOver:()=>z&&K(!1),onMouseOut:()=>!z&&K(!0)},O):(0,c.tZ)(i.Fragment,null,O)),null),closeIcon:(0,c.tZ)("span",{className:"close","aria-hidden":"true"},"×"),footer:w?null:B,hideFooter:w,wrapProps:{"data-test":`${C||O}-modal`,...A},modalRender:e=>k||I?(0,c.tZ)(h(),o()({disabled:!I||z,bounds:M,onStart:(e,t)=>((e,t)=>{var n,r,o;const{clientWidth:a,clientHeight:l}=null==(n=window)||null==(r=n.document)?void 0:r.documentElement,i=null==L||null==(o=L.current)?void 0:o.getBoundingClientRect();i&&F({left:-(null==i?void 0:i.left)+(null==t?void 0:t.x),right:a-((null==i?void 0:i.right)-(null==t?void 0:t.x)),top:-(null==i?void 0:i.top)+(null==t?void 0:t.y),bottom:l-((null==i?void 0:i.bottom)-(null==t?void 0:t.y))})})(0,t)},$),k?(0,c.tZ)(p.e,o()({className:"resizable"},D),(0,c.tZ)("div",{className:"resizable-wrapper",ref:L},e)):(0,c.tZ)("div",{ref:L},e)):e,mask:H,draggable:I,resizable:k,destroyOnClose:U},P),t)};y.displayName="Modal";const C=Object.assign(y,{error:u.xT.error,warning:u.xT.warning,confirm:u.xT.confirm,useModal:u.xT.useModal})},64158:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u}),n(67294);var r=n(51995),o=n(94184),a=n.n(o),l=n(11965);const i=r.iK.ul`
  display: inline-block;
  margin: 16px 0;
  padding: 0;

  li {
    display: inline;
    margin: 0 4px;

    span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
      border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;

      &:hover,
      &:focus {
        z-index: 2;
        color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
        background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light3}};
      }
    }

    &.disabled {
      span {
        background-color: transparent;
        cursor: default;

        &:focus {
          outline: none;
        }
      }
    }
    &.active {
      span {
        z-index: 3;
        color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
        cursor: default;
        background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};

        &:focus {
          outline: none;
        }
      }
    }
  }
`;function s(e){let{children:t}=e;return(0,l.tZ)(i,{role:"navigation"},t)}s.Next=function(e){let{disabled:t,onClick:n}=e;return(0,l.tZ)("li",{className:a()({disabled:t})},(0,l.tZ)("span",{role:"button",tabIndex:t?-1:0,onClick:e=>{e.preventDefault(),t||n(e)}},"»"))},s.Prev=function(e){let{disabled:t,onClick:n}=e;return(0,l.tZ)("li",{className:a()({disabled:t})},(0,l.tZ)("span",{role:"button",tabIndex:t?-1:0,onClick:e=>{e.preventDefault(),t||n(e)}},"«"))},s.Item=function(e){let{active:t,children:n,onClick:r}=e;return(0,l.tZ)("li",{className:a()({active:t})},(0,l.tZ)("span",{role:"button",tabIndex:t?-1:0,onClick:e=>{e.preventDefault(),t||r(e)}},n))},s.Ellipsis=function(e){let{disabled:t,onClick:n}=e;return(0,l.tZ)("li",{className:a()({disabled:t})},(0,l.tZ)("span",{role:"button",tabIndex:t?-1:0,onClick:e=>{e.preventDefault(),t||n(e)}},"…"))};const d=s;var c=n(52630);const u=(0,c.YM)({WrapperComponent:d,itemTypeToComponent:{[c.iB.PAGE]:e=>{let{value:t,isActive:n,onClick:r}=e;return(0,l.tZ)(d.Item,{active:n,onClick:r},t)},[c.iB.ELLIPSIS]:e=>{let{isActive:t,onClick:n}=e;return(0,l.tZ)(d.Ellipsis,{disabled:t,onClick:n})},[c.iB.PREVIOUS_PAGE_LINK]:e=>{let{isActive:t,onClick:n}=e;return(0,l.tZ)(d.Prev,{disabled:t,onClick:n})},[c.iB.NEXT_PAGE_LINK]:e=>{let{isActive:t,onClick:n}=e;return(0,l.tZ)(d.Next,{disabled:t,onClick:n})},[c.iB.FIRST_PAGE_LINK]:()=>null,[c.iB.LAST_PAGE_LINK]:()=>null}})},84101:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>F});var r=n(5872),o=n.n(r),a=n(18446),l=n.n(a),i=n(78580),s=n.n(i),d=n(67294),c=n(51995),u=n(61988),g=n(55786),p=n(64749),m=n(76570),h=n(57254),v=n(11382),b=n(23279),_=n.n(b),f=n(70163),R=n(98286),E=n(27600),y=n(17641),C=n(55083),O=n(11965);const{Option:N}=p.Z,S=c.iK.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,x=(0,c.iK)(p.Z)`
  ${e=>{let{theme:t}=e;return`\n    && .ant-select-selector {\n      border-radius: ${t.gridUnit}px;\n    }\n    // Open the dropdown when clicking on the suffix\n    // This is fixed in version 4.16\n    .ant-select-arrow .anticon:not(.ant-select-suffix) {\n      pointer-events: none;\n    }\n  `}}
`,T=(0,c.iK)(f.Z.StopOutlined)`
  vertical-align: 0;
`,Z=(0,c.iK)(f.Z.CheckOutlined)`
  vertical-align: 0;
`,w=c.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    width: 100%;\n    padding: ${2*t.gridUnit}px;\n    color: ${t.colors.error.base};\n    & svg {\n      margin-right: ${2*t.gridUnit}px;\n    }\n  `}}
`,A=c.iK.div`
  overflow: hidden;
  text-overflow: ellipsis;
`,I=(0,c.iK)(v.Z)`
  margin-top: ${e=>{let{theme:t}=e;return-t.gridUnit}}px;
`,k=c.iK.div`
  ${e=>{let{theme:t}=e;return`\n    margin-left: ${3*t.gridUnit}px;\n    line-height: ${8*t.gridUnit}px;\n    color: ${t.colors.grayscale.light1};\n  `}}
`,D=[",","\n","\t",";"],$=100,U=[],P=e=>{let{error:t}=e;return(0,O.tZ)(w,null,(0,O.tZ)(f.Z.ErrorSolid,null)," ",(0,O.tZ)(A,null,t))},L=(e,t,n)=>{let r,o;return"string"==typeof e.label&&"string"==typeof t.label?(r=e.label,o=t.label):"string"==typeof e.value&&"string"==typeof t.value&&(r=e.value,o=t.value),"string"==typeof r&&"string"==typeof o?n?(0,y.T)(r,o,n):r.localeCompare(o):e.value-t.value},M=(e,t,n)=>`${e};${t};${n}`,F=(0,d.forwardRef)(((e,t)=>{let{allowClear:n,allowNewOptions:r=!1,ariaLabel:a,fetchOnlyOnSearch:i,filterOption:c=!0,header:p=null,invertSelection:v=!1,lazyLoading:b=!0,loading:f,mode:y="single",name:w,notFoundContent:A,onError:F,onChange:z,onClear:K,onDropdownVisibleChange:G,optionFilterProps:B=["label","value"],options:W,pageSize:H=$,placeholder:q=(0,u.t)("Select ..."),showSearch:V=!0,sortComparator:Y=L,tokenSeparators:j,value:X,getPopupContainer:Q,...J}=e;const ee="single"===y,[te,ne]=(0,d.useState)(X),[re,oe]=(0,d.useState)(""),[ae,le]=(0,d.useState)(f),[ie,se]=(0,d.useState)(""),[de,ce]=(0,d.useState)(!1),[ue,ge]=(0,d.useState)(0),[pe,me]=(0,d.useState)(0),[he,ve]=(0,d.useState)(!b),[be,_e]=(0,d.useState)(!1),fe=(0,d.useRef)(new Map),Re=ee?void 0:r?"tags":"multiple",Ee=!i||re,ye=(0,d.useCallback)(((e,t)=>te&&void 0!==e.value&&void 0!==t.value?Number((0,C.Gq)(t.value,te))-Number((0,C.Gq)(e.value,te)):0),[te]),Ce=(0,d.useCallback)(((e,t)=>ye(e,t)||Y(e,t,re)),[re,Y,ye]),Oe=(0,d.useCallback)(((e,t)=>ye(e,t)||Y(e,t,"")),[Y,ye]),Ne=(0,d.useMemo)((()=>W&&Array.isArray(W)?W.slice():U),[W]),Se=(0,d.useMemo)((()=>Ne.slice().sort(Oe)),[Ne,Oe]),[xe,Te]=(0,d.useState)(Se),Ze=(0,d.useMemo)((()=>{const e=(0,g.Z)(te).filter((e=>!(0,C.Gq)((0,C.NA)(e),xe))).map((e=>(0,C.nq)(e)?e:{value:e,label:String(e)}));return e.length>0?e.concat(xe):xe}),[xe,te]),we=Ze.some((e=>!(null==e||!e.customLabel))),Ae=(0,d.useCallback)((e=>(0,R.O)(e).then((e=>{const{error:t}=e;se(t),F&&F(t)}))),[F]),Ie=(0,d.useCallback)((e=>{let t=[];if(e&&Array.isArray(e)&&e.length){const n=new Set(e.map((e=>e.value)));Te((r=>(t=r.filter((e=>!n.has(e.value))).concat(e).sort(Oe),t)))}return t}),[Oe]),ke=(0,d.useMemo)((()=>(e,t)=>{if(ge(t),be)return void le(!1);const n=M(e,t,H),r=fe.current.get(n);if(void 0!==r)return me(r),void le(!1);le(!0),W(e,t,H).then((e=>{let{data:t,totalCount:r}=e;const o=Ie(t);fe.current.set(n,r),me(r),!i&&""===X&&o.length>=r&&_e(!0)})).catch(Ae).finally((()=>{le(!1)}))}),[be,i,Ie,Ae,W,H,X]),De=(0,d.useMemo)((()=>_()(ke,E.M$)),[ke]);(0,d.useEffect)((()=>{fe.current.clear(),_e(!1),Te(Ne)}),[Ne]),(0,d.useEffect)((()=>{ne(X)}),[X]),(0,d.useEffect)((()=>()=>{De.cancel()}),[De]),(0,d.useEffect)((()=>{he&&Ee&&(re?De(re,0):ke("",0))}),[he,ke,Ee,re,De]),(0,d.useEffect)((()=>{void 0!==f&&f!==ae&&le(f)}),[ae,f]);const $e=()=>fe.current.clear();return(0,d.useImperativeHandle)(t,(()=>({...t.current,clearCache:$e})),[t]),(0,O.tZ)(S,null,p,(0,O.tZ)(x,o()({allowClear:!ae&&n,"aria-label":a||w,dropdownRender:e=>{var t,n;return de||null==(t=e.ref)||null==(n=t.current)||n.scrollTo({top:0}),ae&&0===Ze.length?(0,O.tZ)(k,null,(0,u.t)("Loading...")):ie?(0,O.tZ)(P,{error:ie}):e},filterOption:(e,t)=>{if("function"==typeof c)return c(e,t);if(c){const n=e.trim().toLowerCase();if(B&&B.length)return B.some((e=>{const r=null!=t&&t[e]?String(t[e]).trim().toLowerCase():"";return s()(r).call(r,n)}))}return!1},filterSort:Ce,getPopupContainer:Q||(e=>e.parentNode),labelInValue:!0,maxTagCount:4,mode:Re,notFoundContent:ae?(0,u.t)("Loading..."):A,onDeselect:e=>{Array.isArray(te)&&((0,C.nq)(e)?ne(te.filter((t=>t.value!==e.value))):ne(te.filter((t=>t!==e)))),oe("")},onDropdownVisibleChange:e=>{if(ce(e),he!==e&&ve(e),!e&&ae&&setTimeout((()=>{le(!1)}),250),e&&!re&&xe.length>1){const e=xe.slice().sort(Oe);l()(e,xe)||Te(e)}G&&G(e)},onPopupScroll:e=>{const t=e.currentTarget,n=t.scrollTop>.7*(t.scrollHeight-t.offsetHeight);!ae&&ue*H+H<pe&&n&&ke(re,ue+1)},onSearch:V?e=>{const t=e.trim();if(r&&ee){const e=t&&!(0,C.Gq)(t,Ze,!0)&&{label:t,value:t,isNewOption:!0},n=Ze.filter((e=>!e.isNewOption||(0,C.Gq)(e.value,te))),r=e?[e,...n]:n;Te(r)}be||!he||fe.current.has(M(t,0,H))||le(!(i&&!t)),oe(e)}:void 0,onSelect:e=>{ne(ee?e:t=>{const n=(0,g.Z)(t),r=(0,C.NA)(e);if(!(0,C.Gq)(r,n)){const t=[...n,e];return(0,C.nq)(e),t}return t}),oe("")},onClear:()=>{ne(void 0),K&&K()},onChange:z,options:we?void 0:Ze,placeholder:q,showSearch:V,showArrow:!0,tokenSeparators:j||D,value:te,suffixIcon:ae?(0,O.tZ)(I,{size:"small"}):V&&de?(0,O.tZ)(m.Z,null):(0,O.tZ)(h.Z,null),menuItemSelectedIcon:v?(0,O.tZ)(T,{iconSize:"m"}):(0,O.tZ)(Z,{iconSize:"m"}),ref:t},J),we&&Ze.map((e=>{const t="object"==typeof e,n=t?(null==e?void 0:e.label)||e.value:e,r=t?e.value:e,{customLabel:a,...l}=e;return(0,O.tZ)(N,o()({},l,{key:r,label:n,value:r}),t&&a?a:n)}))))}))},81315:(e,t,n)=>{"use strict";n.d(t,{mj:()=>A,ZP:()=>I});var r=n(5872),o=n.n(r),a=n(18446),l=n.n(a),i=n(78580),s=n.n(i),d=n(67294),c=n(51995),u=n(61988),g=n(55786),p=n(64749),m=n(76570),h=n(57254),v=n(11382),b=n(70163),_=n(17641),f=n(55083),R=n(11965);const{Option:E}=p.Z,y=c.iK.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,C=(0,c.iK)(p.Z)`
  ${e=>{let{theme:t}=e;return`\n    && .ant-select-selector {\n      border-radius: ${t.gridUnit}px;\n    }\n    // Open the dropdown when clicking on the suffix\n    // This is fixed in version 4.16\n    .ant-select-arrow .anticon:not(.ant-select-suffix) {\n      pointer-events: none;\n    }\n  `}}
`,O=(0,c.iK)(b.Z.StopOutlined)`
  vertical-align: 0;
`,N=(0,c.iK)(b.Z.CheckOutlined)`
  vertical-align: 0;
`,S=(0,c.iK)(v.Z)`
  margin-top: ${e=>{let{theme:t}=e;return-t.gridUnit}}px;
`,x=c.iK.div`
  ${e=>{let{theme:t}=e;return`\n    margin-left: ${3*t.gridUnit}px;\n    line-height: ${8*t.gridUnit}px;\n    color: ${t.colors.grayscale.light1};\n  `}}
`,T=[",","\n","\t",";"],Z=[],w=(e,t,n)=>{let r,o;return"string"==typeof e.label&&"string"==typeof t.label?(r=e.label,o=t.label):"string"==typeof e.value&&"string"==typeof t.value&&(r=e.value,o=t.value),"string"==typeof r&&"string"==typeof o?n?(0,_.T)(r,o,n):r.localeCompare(o):e.value-t.value},A=e=>(t,n)=>"string"==typeof t[e]&&"string"==typeof n[e]?t[e].localeCompare(n[e]):t[e]-n[e],I=(0,d.forwardRef)(((e,t)=>{let{allowClear:n,allowNewOptions:r=!1,ariaLabel:a,filterOption:i=!0,header:c=null,invertSelection:p=!1,labelInValue:v=!1,loading:b,mode:_="single",name:A,notFoundContent:I,onChange:k,onClear:D,onDropdownVisibleChange:$,optionFilterProps:U=["label","value"],options:P,placeholder:L=(0,u.t)("Select ..."),showSearch:M=!0,sortComparator:F=w,tokenSeparators:z,value:K,getPopupContainer:G,...B}=e;const W="single"===_,H=!!r||M,[q,V]=(0,d.useState)(K),[Y,j]=(0,d.useState)(""),[X,Q]=(0,d.useState)(b),[J,ee]=(0,d.useState)(!1),te=W?void 0:r?"tags":"multiple",ne=(0,d.useCallback)(((e,t)=>q&&void 0!==e.value&&void 0!==t.value?Number((0,f.Gq)(t.value,q))-Number((0,f.Gq)(e.value,q)):0),[q]),re=(0,d.useCallback)(((e,t)=>ne(e,t)||F(e,t,Y)),[Y,F,ne]),oe=(0,d.useMemo)((()=>P&&Array.isArray(P)?P.slice():Z),[P]),ae=(0,d.useMemo)((()=>oe.slice().sort(ne)),[oe,ne]),[le,ie]=(0,d.useState)(ae),se=(0,d.useMemo)((()=>{const e=(0,g.Z)(q).filter((e=>!(0,f.Gq)((0,f.NA)(e),le))).map((e=>(0,f.nq)(e)?e:{value:e,label:String(e)}));return e.length>0?e.concat(le):le}),[le,q]),de=se.some((e=>!(null==e||!e.customLabel)));return(0,d.useEffect)((()=>{ie(oe)}),[oe]),(0,d.useEffect)((()=>{V(K)}),[K]),(0,d.useEffect)((()=>{void 0!==b&&b!==X&&Q(b)}),[X,b]),(0,R.tZ)(y,null,c,(0,R.tZ)(C,o()({allowClear:!X&&n,"aria-label":a||A,dropdownRender:e=>{var t,n;return J||null==(t=e.ref)||null==(n=t.current)||n.scrollTo({top:0}),X&&0===se.length?(0,R.tZ)(x,null,(0,u.t)("Loading...")):e},filterOption:(e,t)=>{if("function"==typeof i)return i(e,t);if(i){const n=e.trim().toLowerCase();if(U&&U.length)return U.some((e=>{const r=null!=t&&t[e]?String(t[e]).trim().toLowerCase():"";return s()(r).call(r,n)}))}return!1},filterSort:re,getPopupContainer:G||(e=>e.parentNode),labelInValue:v,maxTagCount:4,mode:te,notFoundContent:X?(0,u.t)("Loading..."):I,onDeselect:e=>{Array.isArray(q)&&((0,f.nq)(e)?V(q.filter((t=>t.value!==e.value))):V(q.filter((t=>t!==e)))),j("")},onDropdownVisibleChange:e=>{ee(e),e&&!Y&&le.length>1&&(l()(ae,le)||ie(ae)),$&&$(e)},onPopupScroll:void 0,onSearch:H?e=>{const t=e.trim();if(r&&W){const e=t&&!(0,f.Gq)(t,se,!0)&&{label:t,value:t,isNewOption:!0},n=se.filter((e=>!e.isNewOption||(0,f.Gq)(e.value,q))),r=e?[e,...n]:n;ie(r)}j(e)}:void 0,onSelect:e=>{V(W?e:t=>{const n=(0,g.Z)(t),r=(0,f.NA)(e);if(!(0,f.Gq)(r,n)){const t=[...n,e];return(0,f.nq)(e),t}return t}),j("")},onClear:()=>{V(void 0),D&&D()},onChange:k,options:de?void 0:se,placeholder:L,showSearch:H,showArrow:!0,tokenSeparators:z||T,value:q,suffixIcon:X?(0,R.tZ)(S,{size:"small"}):H&&J?(0,R.tZ)(m.Z,null):(0,R.tZ)(h.Z,null),menuItemSelectedIcon:p?(0,R.tZ)(O,{iconSize:"m"}):(0,R.tZ)(N,{iconSize:"m"}),ref:t},B),de&&se.map((e=>{const t="object"==typeof e,n=t?(null==e?void 0:e.label)||e.value:e,r=t?e.value:e,{customLabel:a,...l}=e;return(0,R.tZ)(E,o()({},l,{key:r,label:n,value:r}),t&&a?a:n)}))))}))},55083:(e,t,n)=>{"use strict";n.d(t,{dG:()=>a,nq:()=>l,NA:()=>i,Gq:()=>s});var r=n(55786);function o(e){return null!==e&&"object"==typeof e&&!1===Array.isArray(e)}function a(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n="value"),null==e||""===e)return[];const r=Array.isArray((t[0]||{}).options)?t.flatMap((e=>e.options||[])):t;return(Array.isArray(e)?e:[e]).map((t=>{const o=(e||{}).hasOwnProperty(n)?t[n]:t;return r.find((e=>e===o||e[n]===o))||t}))}function l(e){return o(e)&&"value"in e&&"label"in e}function i(e){return l(e)?e.value:e}function s(e,t,n){return void 0===n&&(n=!1),void 0!==(0,r.Z)(t).find((t=>t===e||o(t)&&("value"in t&&t.value===e||n&&"label"in t&&t.label===e)))}},97754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(5872),o=n.n(r),a=n(78580),l=n.n(a),i=n(67294),s=n(94184),d=n.n(s),c=n(51995),u=n(70163),g=n(11965);const p=c.iK.table`
  ${e=>{let{theme:t}=e;return`\n    background-color: ${t.colors.grayscale.light5};\n    border-collapse: separate;\n    border-radius: ${t.borderRadius}px;\n\n    thead > tr > th {\n      border: 0;\n    }\n\n    tbody {\n      tr:first-of-type > td {\n        border-top: 0;\n      }\n    }\n    th {\n      background: ${t.colors.grayscale.light5};\n      position: sticky;\n      top: 0;\n\n      &:first-of-type {\n        padding-left: ${4*t.gridUnit}px;\n      }\n\n      &.xs {\n        min-width: 25px;\n      }\n      &.sm {\n        min-width: 50px;\n      }\n      &.md {\n        min-width: 75px;\n      }\n      &.lg {\n        min-width: 100px;\n      }\n      &.xl {\n        min-width: 150px;\n      }\n      &.xxl {\n        min-width: 200px;\n      }\n\n      span {\n        white-space: nowrap;\n        display: flex;\n        align-items: center;\n        line-height: 2;\n      }\n\n      svg {\n        display: inline-block;\n        position: relative;\n      }\n    }\n\n    td {\n      &.xs {\n        width: 25px;\n      }\n      &.sm {\n        width: 50px;\n      }\n      &.md {\n        width: 75px;\n      }\n      &.lg {\n        width: 100px;\n      }\n      &.xl {\n        width: 150px;\n      }\n      &.xxl {\n        width: 200px;\n      }\n    }\n\n    .table-cell-loader {\n      position: relative;\n\n      .loading-bar {\n        background-color: ${t.colors.secondary.light4};\n        border-radius: 7px;\n\n        span {\n          visibility: hidden;\n        }\n      }\n\n      .empty-loading-bar {\n        display: inline-block;\n        width: 100%;\n        height: 1.2em;\n      }\n    }\n\n    .actions {\n      white-space: nowrap;\n      min-width: 100px;\n\n      svg,\n      i {\n        margin-right: 8px;\n\n        &:hover {\n          path {\n            fill: ${t.colors.primary.base};\n          }\n        }\n      }\n    }\n\n    .table-row {\n      .actions {\n        opacity: 0;\n        font-size: ${t.typography.sizes.xl}px;\n        display: flex;\n      }\n\n      &:hover {\n        background-color: ${t.colors.secondary.light5};\n\n        .actions {\n          opacity: 1;\n          transition: opacity ease-in ${t.transitionTiming}s;\n        }\n      }\n    }\n\n    .table-row-selected {\n      background-color: ${t.colors.secondary.light4};\n\n      &:hover {\n        background-color: ${t.colors.secondary.light4};\n      }\n    }\n\n    .table-cell {\n      font-feature-settings: 'tnum' 1;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 320px;\n      line-height: 1;\n      vertical-align: middle;\n      &:first-of-type {\n        padding-left: ${4*t.gridUnit}px;\n      }\n      &__wrap {\n        white-space: normal;\n      }\n      &__nowrap {\n        white-space: nowrap;\n      }\n    }\n\n    @keyframes loading-shimmer {\n      40% {\n        background-position: 100% 0;\n      }\n\n      100% {\n        background-position: 100% 0;\n      }\n    }\n  `}}
`;p.displayName="table";const m=i.memo((e=>{let{getTableProps:t,getTableBodyProps:n,prepareRow:r,headerGroups:a,columns:i,rows:s,loading:c,highlightRowId:m,columnsForWrapText:h}=e;return(0,g.tZ)(p,o()({},t(),{className:"table table-hover"}),(0,g.tZ)("thead",null,a.map((e=>(0,g.tZ)("tr",e.getHeaderGroupProps(),e.headers.map((e=>{let t=(0,g.tZ)(u.Z.Sort,null);return e.isSorted&&e.isSortedDesc?t=(0,g.tZ)(u.Z.SortDesc,null):e.isSorted&&!e.isSortedDesc&&(t=(0,g.tZ)(u.Z.SortAsc,null)),e.hidden?null:(0,g.tZ)("th",o()({},e.getHeaderProps(e.canSort?e.getSortByToggleProps():{}),{className:d()({[e.size||""]:e.size})}),(0,g.tZ)("span",null,e.render("Header"),e.canSort&&t))})))))),(0,g.tZ)("tbody",n(),c&&0===s.length&&[...new Array(12)].map(((e,t)=>(0,g.tZ)("tr",{key:t},i.map(((e,t)=>e.hidden?null:(0,g.tZ)("td",{key:t,className:d()("table-cell",{"table-cell-loader":c})},(0,g.tZ)("span",{className:"loading-bar empty-loading-bar",role:"progressbar","aria-label":"loading"}))))))),s.length>0&&s.map((e=>{r(e);const t=e.original.id;return(0,g.tZ)("tr",o()({},e.getRowProps(),{className:d()("table-row",{"table-row-selected":e.isSelected||void 0!==t&&t===m})}),e.cells.map((e=>{if(e.column.hidden)return null;const t=e.column.cellProps||{},n=h&&l()(h).call(h,e.column.Header);return(0,g.tZ)("td",o()({className:d()("table-cell table-cell__"+(n?"wrap":"nowrap"),{"table-cell-loader":c,[e.column.size||""]:e.column.size})},e.getCellProps(),t),(0,g.tZ)("span",{className:d()({"loading-bar":c}),role:c?"progressbar":void 0},(0,g.tZ)("span",null,e.render("Cell"))))})))}))))}))},46977:(e,t,n)=>{"use strict";n.d(t,{u:()=>r,Z:()=>_});var r,o=n(67294),a=n(18446),l=n.n(a),i=n(51995),s=n(61988),d=n(79521),c=n(4715),u=n(64158),g=n(97754),p=n(11965);!function(e){e.Default="Default",e.Small="Small"}(r||(r={}));const m=i.iK.div`
  margin: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px 0;
`,h=i.iK.div`
  ${e=>{let{scrollTable:t,theme:n}=e;return t&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*n.gridUnit}px;\n    overflow: auto;\n  `}}

  .table-row {
    ${e=>{let{theme:t,small:n}=e;return!n&&`height: ${11*t.gridUnit-1}px;`}}

    .table-cell {
      ${e=>{let{theme:t,small:n}=e;return n&&`\n        padding-top: ${t.gridUnit+1}px;\n        padding-bottom: ${t.gridUnit+1}px;\n        line-height: 1.45;\n      `}}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${e=>{let{theme:t}=e;return`${t.gridUnit-2}px solid ${t.colors.grayscale.light2}`}};
    ${e=>{let{small:t}=e;return t&&"padding-bottom: 0;"}}
  }
`,v=i.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};

  ${e=>{let{isPaginationSticky:t}=e;return t&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "}};

  .row-count-container {
    margin-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  }
`,b=e=>{let{columns:t,data:n,pageSize:a,totalCount:i=n.length,initialPageIndex:b,initialSortBy:_=[],loading:f=!1,withPagination:R=!0,emptyWrapperType:E=r.Default,noDataText:y,showRowCount:C=!0,serverPagination:O=!1,columnsForWrapText:N,onServerPagination:S=(()=>{}),...x}=e;const T={pageSize:null!=a?a:10,pageIndex:null!=b?b:0,sortBy:_},{getTableProps:Z,getTableBodyProps:w,headerGroups:A,page:I,rows:k,prepareRow:D,pageCount:$,gotoPage:U,state:{pageIndex:P,pageSize:L,sortBy:M}}=(0,d.useTable)({columns:t,data:n,initialState:T,manualPagination:O,manualSortBy:O,pageCount:Math.ceil(i/T.pageSize)},d.useFilters,d.useSortBy,d.usePagination);(0,o.useEffect)((()=>{O&&P!==T.pageIndex&&S({pageIndex:P})}),[P]),(0,o.useEffect)((()=>{O&&!l()(M,T.sortBy)&&S({pageIndex:0,sortBy:M})}),[M]);const F=R?I:k;let z;switch(E){case r.Small:z=e=>{let{children:t}=e;return(0,p.tZ)(o.Fragment,null,t)};break;case r.Default:default:z=e=>{let{children:t}=e;return(0,p.tZ)(m,null,t)}}const K=!f&&0===F.length,G=$>1&&R;return(0,p.tZ)(o.Fragment,null,(0,p.tZ)(h,x,(0,p.tZ)(g.Z,{getTableProps:Z,getTableBodyProps:w,prepareRow:D,headerGroups:A,rows:F,columns:t,loading:f,columnsForWrapText:N}),K&&(0,p.tZ)(z,null,y?(0,p.tZ)(c.HY,{image:c.HY.PRESENTED_IMAGE_SIMPLE,description:y}):(0,p.tZ)(c.HY,{image:c.HY.PRESENTED_IMAGE_SIMPLE}))),G&&(0,p.tZ)(v,{className:"pagination-container",isPaginationSticky:x.isPaginationSticky},(0,p.tZ)(u.Z,{totalPages:$||0,currentPage:$?P+1:0,onChange:e=>U(e-1),hideFirstAndLastPageLinks:!0}),C&&(0,p.tZ)("div",{className:"row-count-container"},!f&&(0,s.t)("%s-%s of %s",L*P+(I.length&&1),L*P+I.length,i))))},_=o.memo(b)},76962:(e,t,n)=>{"use strict";n.d(t,{u:()=>r.u,Z:()=>r.Z});var r=n(46977)},71262:(e,t,n)=>{"use strict";n.d(t,{Xv:()=>m,cl:()=>v,ZP:()=>b});var r=n(5872),o=n.n(r),a=(n(67294),n(11965)),l=n(51995),i=n(1350),s=n(70163);const d=e=>{let{animated:t=!1,fullWidth:n=!0,allowOverflow:r=!0,...l}=e;return(0,a.tZ)(i.default,o()({animated:t},l,{css:e=>a.iv`
      overflow: ${r?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${r?"visible":"auto"};
      }
      .ant-tabs-tab {
        flex: 1 1 auto;
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: inherit;
        }
        &:hover {
          .anchor-link-container {
            cursor: pointer;
            .fa.fa-link {
              visibility: visible;
            }
          }
        }
        .short-link-trigger.btn {
          padding: 0 ${e.gridUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      ${n&&a.iv`
        .ant-tabs-nav-list {
          width: 100%;
        }
      `};

      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.typography.sizes.s}px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        .required {
          margin-left: ${e.gridUnit/2}px;
          color: ${e.colors.error.base};
        }
      }
      .ant-tabs-ink-bar {
        background: ${e.colors.secondary.base};
      }
    `}))},c=(0,l.iK)(i.default.TabPane)``,u=Object.assign(d,{TabPane:c}),g=(0,l.iK)(d)`
  ${e=>{let{theme:t,fullWidth:n}=e;return`\n    .ant-tabs-content-holder {\n      background: ${t.colors.grayscale.light5};\n    }\n\n    & > .ant-tabs-nav {\n      margin-bottom: 0;\n    }\n\n    .ant-tabs-tab-remove {\n      padding-top: 0;\n      padding-bottom: 0;\n      height: ${6*t.gridUnit}px;\n    }\n\n    ${n?a.iv`
            .ant-tabs-nav-list {
              width: 100%;
            }
          `:""}\n  `}}
`,p=(0,l.iK)(s.Z.CancelX)`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,m=Object.assign(g,{TabPane:c});m.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},m.TabPane.defaultProps={closeIcon:(0,a.tZ)(p,{role:"button",tabIndex:0})};const h=(0,l.iK)(m)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    padding: ${e=>{let{theme:t}=e;return`${3*t.gridUnit}px ${t.gridUnit}px`}};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,v=Object.assign(h,{TabPane:c}),b=u},58593:(e,t,n)=>{"use strict";n.d(t,{u:()=>d});var r=n(5872),o=n.n(r),a=n(67294),l=n(51995),i=n(11965),s=n(31097);const d=e=>{const t=(0,l.Fg)();return(0,i.tZ)(a.Fragment,null,(0,i.tZ)(i.xB,{styles:i.iv`
          .ant-tooltip-open {
            display: inline-block;
            &::after {
              content: '';
              display: block;
            }
          }
        `}),(0,i.tZ)(s.Z,o()({overlayStyle:{fontSize:t.typography.sizes.s,lineHeight:"1.6"},color:`${t.colors.grayscale.dark2}e6`},e)))}},4715:(e,t,n)=>{"use strict";n.d(t,{Ph:()=>r.ZP,qb:()=>o.ZP,qE:()=>a.C,JX:()=>l.Z,iz:()=>i.Z,HY:()=>s.Z,rj:()=>d.ZP,aV:()=>c.ZP,X2:()=>u.Z,Od:()=>g.Z,T:()=>p.Z,Rg:()=>m.Z,Vp:()=>h.Z,mp:()=>v.Z,ZT:()=>b.Z,gq:()=>_.Z,C0:()=>f.Z,Ak:()=>R.Z,r4:()=>E.Z,Ol:()=>y.Z,Gj:()=>C.Z,qz:()=>O.Z,oc:()=>N.Z,xT:()=>S.Z,IZ:()=>x.Z,rb:()=>T.Z,KU:()=>Z.Z,D6:()=>w.Z,_e:()=>A.Z});var r=n(81315),o=n(84101),a=n(51890),l=n(15746),i=n(27049),s=n(14277),d=n(75302),c=n(77799),u=n(71230),g=n(33860),p=n(19650),m=n(27220),h=n(60331),v=n(31183),b=n(59118),_=n(76310),f=n(71577),R=n(39144),E=n(9676),y=n(46445),C=n(16114),O=n(7646),N=n(4107),S=n(57016),x=n(8834),T=n(31955),Z=n(59314),w=n(88108),A=n(31097)},27600:(e,t,n)=>{"use strict";n.d(t,{v2:()=>r,n2:()=>o,Ly:()=>a,gz:()=>l,KD:()=>i,$O:()=>s,Rv:()=>d,oP:()=>c,M$:()=>u,Wq:()=>g});const r="YYYY-MM-DD HH:mm:ssZ",o="HH:mm:ss.SSS",a="True",l="False",i={migrationState:{name:"migration_state",type:"string"},standalone:{name:"standalone",type:"number"},uiConfig:{name:"uiConfig",type:"number"},preselectFilters:{name:"preselect_filters",type:"object"},nativeFilters:{name:"native_filters",type:"rison"},nativeFiltersKey:{name:"native_filters_key",type:"string"},filterSet:{name:"filter_set",type:"string"},showFilters:{name:"show_filters",type:"boolean"},expandFilters:{name:"expand_filters",type:"boolean"},formDataKey:{name:"form_data_key",type:"string"},sliceId:{name:"slice_id",type:"number"},datasourceId:{name:"datasource_id",type:"string"},datasetId:{name:"dataset_id",type:"string"},datasourceType:{name:"datasource_type",type:"string"},dashboardId:{name:"dashboard_id",type:"string"},force:{name:"force",type:"boolean"},permalinkKey:{name:"permalink_key",type:"string"},vizType:{name:"viz_type",type:"string"},showDatabaseModal:{name:"show_database_modal",type:"boolean"},saveAction:{name:"save_action",type:"string"},dashboardPageId:{name:"dashboard_page_id",type:"string"}},s=[i.formDataKey.name,i.sliceId.name,i.datasourceId.name,i.datasourceType.name,i.datasetId.name],d=[i.nativeFilters.name,i.nativeFiltersKey.name,i.permalinkKey.name,i.preselectFilters.name],c=250,u=500,g="N/A"},99543:(e,t,n)=>{"use strict";n.d(t,{SJ:()=>v,wK:()=>b,gf:()=>_,gP:()=>f,p1:()=>R,_0:()=>E,zd:()=>y,hU:()=>C,E8:()=>O,JB:()=>N});var r=n(45220),o=n.n(r),a=n(52353),l=n.n(a),i=n(14176),s=n.n(i),d=n(18446),c=n.n(d),u=n(14670),g=n.n(u),p=n(14890),m=n(64417),h=n.n(m);function v(e,t,n){const r={...e[t]},o={...n};return o.id||(o.id=g().generate()),r[o.id]=o,{...e,[t]:r}}function b(e,t,n,r){const o={...e[t]};return o[n.id]={...o[n.id],...r},{...e,[t]:o}}function _(e,t,n,r,o){void 0===o&&(o="id");const a=[];return e[t].forEach((e=>{n[o]===e[o]?a.push({...e,...r}):a.push(e)})),{...e,[t]:a}}function f(e,t,n,r){void 0===r&&(r="id");const o=[];return e[t].forEach((e=>{n[r]!==e[r]&&o.push(e)})),{...e,[t]:o}}function R(e,t){let n;return e.forEach((e=>{e.id===t&&(n=e)})),n}function E(e,t,n,r){void 0===r&&(r=!1);const o={...n};o.id||(o.id=g().generate());const a={};return a[t]=r?[o,...e[t]]:[...e[t],o],{...e,...a}}function y(e,t,n,r){void 0===r&&(r=!1);const o=[...n];o.forEach((e=>{e.id||(e.id=g().generate())}));const a={};return a[t]=r?[...o,...e[t]]:[...e[t],...o],{...e,...a}}function C(e,t,n){void 0===e&&(e=!0),void 0===t&&(t={}),void 0===n&&(n=!1);const{paths:r,config:o}=t,a=p.qC;return e?a(h()(r,o)):a()}function O(e,t){if(!e||!t)return!1;if(e.length!==t.length)return!1;const{length:n}=e;for(let r=0;r<n;r+=1)if(e[r]!==t[r])return!1;return!0}function N(e,t,n){void 0===n&&(n={ignoreUndefined:!1,ignoreNull:!1});let r=e,a=t;return n.ignoreUndefined&&(r=s()(r,l()),a=s()(a,l())),n.ignoreNull&&(r=s()(r,o()),a=s()(a,o())),c()(r,a)}},10222:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(54076);const o=e=>(async e=>{if((0,r.G6)())try{const t=new ClipboardItem({"text/plain":e()});await navigator.clipboard.write([t])}catch{const t=await e();await navigator.clipboard.writeText(t)}else{const t=await e();await navigator.clipboard.writeText(t)}})(e).catch((()=>e().then((e=>new Promise(((t,n)=>{const r=document.getSelection();if(r){r.removeAllRanges();const t=document.createRange(),o=document.createElement("span");o.textContent=e,o.style.position="fixed",o.style.top="0",o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",document.body.appendChild(o),t.selectNode(o),r.addRange(t);try{document.execCommand("copy")||n()}catch(e){n()}document.body.removeChild(o),r.removeRange?r.removeRange(t):r.removeAllRanges()}t()}))))))},66785:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={SESSION_TIMED_OUT:"Your session timed out, please refresh your page and try again."}},98286:(e,t,n)=>{"use strict";n.d(t,{M:()=>l,O:()=>i});var r=n(61988),o=n(67663),a=n(66785);function l(e){let t={...e};var n,o,l;(t.errors&&t.errors.length>0&&(t.error=t.description=t.errors[0].message,t.link=null==(n=t.errors[0])||null==(o=n.extra)?void 0:o.link),!t.error&&t.message)&&("object"==typeof t.message&&(t.error=(null==(l=Object.values(t.message)[0])?void 0:l[0])||(0,r.t)("Invalid input")),"string"==typeof t.message&&(t.error=t.message));return t.stack?t={...t,error:(0,r.t)("Unexpected error: ")+(t.description||(0,r.t)("(no description, click to see stack trace)")),stacktrace:t.stack}:t.responseText&&t.responseText.indexOf("CSRF")>=0&&(t={...t,error:(0,r.t)(a.Z.SESSION_TIMED_OUT)}),{...t,error:t.error}}function i(e){return new Promise((t=>{if("string"==typeof e)return void t({error:e});if(e instanceof TypeError&&"Failed to fetch"===e.message)return void t({error:(0,r.t)("Network error")});if("timeout"in e&&"statusText"in e&&"timeout"===e.statusText)return void t({...e,error:(0,r.t)("Request timed out"),errors:[{error_type:o.C.FRONTEND_TIMEOUT_ERROR,extra:{timeout:e.timeout/1e3,issue_codes:[{code:1e3,message:(0,r.t)("Issue 1000 - The dataset is too large to query.")},{code:1001,message:(0,r.t)("Issue 1001 - The database is under an unusual load.")}]},level:"error",message:"Request timed out"}]});const n=e instanceof Response?e:e.response;if(n&&!n.bodyUsed)return void n.clone().json().then((e=>{const r={...n,...e};t(l(r))})).catch((()=>{n.text().then((e=>{t({...n,error:e})}))}));let a=e.statusText||e.message;a||(console.error("non-standard error:",e),a=(0,r.t)("An error occurred")),t({...n,error:a})}))}},17641:(e,t,n)=>{"use strict";n.d(t,{T:()=>a});var r=n(78580),o=n.n(r);function a(e,t,n){const r=e.toLowerCase()||"",a=t.toLowerCase()||"",l=n.toLowerCase()||"";return n&&(Number(t===n)-Number(e===n)||Number(t.startsWith(n))-Number(e.startsWith(n))||Number(a===l)-Number(r===l)||Number(a.startsWith(l))-Number(r.startsWith(l))||Number(o()(t).call(t,n))-Number(o()(e).call(e,n))||Number(o()(a).call(a,l))-Number(o()(e).call(e,l)))||e.localeCompare(t)}},35782:(e,t,n)=>{var r={"./alert.svg":[57249,7249],"./alert_solid.svg":[52797,2797],"./alert_solid_small.svg":[71256,1256],"./area-chart-tile.svg":[37989,7989],"./ballot.svg":[87760,7760],"./bar-chart-tile.svg":[72122,3187],"./big-number-chart-tile.svg":[1402,1402],"./binoculars.svg":[38970,8970],"./bolt.svg":[4794,4794],"./bolt_small.svg":[49510,9510],"./bolt_small_run.svg":[36883,6883],"./calendar.svg":[65816,5816],"./cancel-x.svg":[77654,7654],"./cancel.svg":[14757,4757],"./cancel_solid.svg":[55777,5777],"./card_view.svg":[25838,5838],"./cards.svg":[81293,1293],"./cards_locked.svg":[69052,9052],"./caret_down.svg":[48820,7832],"./caret_left.svg":[80310,310],"./caret_right.svg":[64817,4817],"./caret_up.svg":[6011,9811],"./category.svg":[24851,4851],"./certified.svg":[88695,8695],"./check.svg":[83544,3544],"./checkbox-half.svg":[57405,7405],"./checkbox-off.svg":[75281,5281],"./checkbox-on.svg":[99013,9013],"./circle.svg":[60183,183],"./circle_check.svg":[93558,3558],"./circle_check_solid.svg":[70992,992],"./clock.svg":[50597,597],"./close.svg":[50999,999],"./code.svg":[16981,6981],"./cog.svg":[45962,5962],"./collapse.svg":[24266,4266],"./color_palette.svg":[65580,5580],"./components.svg":[80312,312],"./copy.svg":[23141,3141],"./cross-filter-badge.svg":[64625,4625],"./current-rendered-tile.svg":[82955,2955],"./cursor_target.svg":[96758,6758],"./database.svg":[15249,5249],"./dataset_physical.svg":[8312,8312],"./dataset_virtual.svg":[77156,5330],"./dataset_virtual_greyscale.svg":[84810,4810],"./default_db_image.svg":[51398,1398],"./download.svg":[112,112],"./drag.svg":[86507,6507],"./edit.svg":[93871,3871],"./edit_alt.svg":[86167,6167],"./email.svg":[50504,6668],"./error.svg":[67584,7584],"./error_solid.svg":[25641,5641],"./error_solid_small.svg":[92561,2983],"./error_solid_small_red.svg":[4273,4273],"./exclamation.svg":[35771,5771],"./expand.svg":[47922,7922],"./eye.svg":[11493,1493],"./eye_slash.svg":[45014,9109],"./favorite-selected.svg":[51568,1568],"./favorite-unselected.svg":[86682,6682],"./favorite_small_selected.svg":[1351,1351],"./field_abc.svg":[70215,215],"./field_boolean.svg":[87405,5507],"./field_date.svg":[65226,5226],"./field_derived.svg":[37404,4732],"./field_num.svg":[35201,5201],"./field_struct.svg":[91899,1899],"./file.svg":[20057,57],"./filter.svg":[19305,9305],"./filter_small.svg":[54474,4474],"./folder.svg":[86420,6420],"./full.svg":[23985,3985],"./function_x.svg":[44662,4662],"./gear.svg":[7610,7610],"./grid.svg":[68425,8425],"./image.svg":[92264,2264],"./import.svg":[42698,2698],"./info-solid.svg":[71605,1605],"./info.svg":[2713,2713],"./info_solid_small.svg":[33606,3606],"./join.svg":[85998,5998],"./keyboard.svg":[87850,7850],"./layers.svg":[85832,5832],"./lightbulb.svg":[54797,4797],"./line-chart-tile.svg":[88491,8491],"./link.svg":[99558,9558],"./list.svg":[45707,5707],"./list_view.svg":[38682,8682],"./location.svg":[61174,1174],"./lock_locked.svg":[55359,5359],"./lock_unlocked.svg":[6207,6207],"./map.svg":[18463,8463],"./message.svg":[64458,4458],"./minus.svg":[97183,7183],"./minus_solid.svg":[6371,6371],"./more_horiz.svg":[39325,9325],"./more_vert.svg":[91185,1185],"./move.svg":[74139,4139],"./nav_charts.svg":[75350,5350],"./nav_dashboard.svg":[66303,6303],"./nav_data.svg":[2267,2267],"./nav_explore.svg":[83749,3749],"./nav_home.svg":[44667,4667],"./nav_lab.svg":[43567,3567],"./note.svg":[46597,6126],"./offline.svg":[53265,3265],"./paperclip.svg":[22079,2079],"./pie-chart-tile.svg":[9873,9873],"./placeholder.svg":[18349,8349],"./plus.svg":[17460,7460],"./plus_large.svg":[66150,6150],"./plus_small.svg":[96447,6447],"./plus_solid.svg":[70600,600],"./queued.svg":[63240,3240],"./redo.svg":[99207,9207],"./refresh.svg":[25367,5367],"./running.svg":[5224,5224],"./save.svg":[36254,6254],"./search.svg":[30177,177],"./server.svg":[11075,1075],"./share.svg":[11263,1263],"./slack.svg":[42439,2439],"./sort.svg":[20336,336],"./sort_asc.svg":[79393,9393],"./sort_desc.svg":[32646,2646],"./sql.svg":[13325,3325],"./table-chart-tile.svg":[4421,4421],"./table.svg":[72403,2403],"./tag.svg":[30158,158],"./tags.svg":[90363,363],"./transparent.svg":[87803,7803],"./trash.svg":[62105,2105],"./triangle_change.svg":[98398,8398],"./triangle_down.svg":[40826,826],"./triangle_up.svg":[36819,6819],"./undo.svg":[39622,9622],"./up-level.svg":[65972,5972],"./user.svg":[99767,9767],"./warning.svg":[4758,4758],"./warning_solid.svg":[75224,5592],"./x-large.svg":[63955,3955],"./x-small.svg":[7716,7716]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=35782,e.exports=o}}]);
//# sourceMappingURL=5010.30d50f9f4b83e7d83f57.entry.js.map