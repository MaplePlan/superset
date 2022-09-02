(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9541],{90233:(e,t,a)=>{"use strict";a.d(t,{Lu:()=>l,tL:()=>s});var r=a(87462),o=a(76826),n=a.n(o),s={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};l.rankings=s;var i=function(e,t){return String(e.rankedValue).localeCompare(String(t.rankedValue))};function l(e,t,a){void 0===a&&(a={});var o=a,n=o.keys,l=o.threshold,d=void 0===l?s.MATCHES:l,h=o.baseSort,m=void 0===h?i:h,g=o.sorter,v=void 0===g?function(e){return e.sort((function(e,t){return function(e,t,a){var r=e.rank,o=e.keyIndex,n=t.rank,s=t.keyIndex;return r===n?o===s?a(e,t):o<s?-1:1:r>n?-1:1}(e,t,m)}))}:g,f=e.reduce((function(e,o,i){var l=function(e,t,a,r){return t?function(e,t){for(var a=[],r=0,o=t.length;r<o;r++)for(var n=t[r],s=p(n),i=u(e,n),l=0,c=i.length;l<c;l++)a.push({itemValue:i[l],attributes:s});return a}(e,t).reduce((function(e,t,o){var n=e.rank,i=e.rankedValue,l=e.keyIndex,d=e.keyThreshold,u=t.itemValue,h=t.attributes,p=c(u,a,r),m=i,g=h.minRanking,v=h.maxRanking,f=h.threshold;return p<g&&p>=s.MATCHES?p=g:p>v&&(p=v),p>n&&(n=p,l=o,d=f,m=u),{rankedValue:m,rank:n,keyIndex:l,keyThreshold:d}}),{rankedValue:e,rank:s.NO_MATCH,keyIndex:-1,keyThreshold:r.threshold}):{rankedValue:e,rank:c(e,a,r),keyIndex:-1,keyThreshold:r.threshold}}(o,n,t,a),h=l.rank,m=l.keyThreshold;return h>=(void 0===m?d:m)&&e.push((0,r.Z)({},l,{item:o,index:i})),e}),[]);return v(f).map((function(e){return e.item}))}function c(e,t,a){return e=d(e,a),(t=d(t,a)).length>e.length?s.NO_MATCH:e===t?s.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?s.EQUAL:e.startsWith(t)?s.STARTS_WITH:e.includes(" "+t)?s.WORD_STARTS_WITH:e.includes(t)?s.CONTAINS:1===t.length?s.NO_MATCH:(r=e,o="",r.split(" ").forEach((function(e){e.split("-").forEach((function(e){o+=e.substr(0,1)}))})),o).includes(t)?s.ACRONYM:function(e,t){var a=0,r=0;function o(e,t,r){for(var o=r,n=t.length;o<n;o++)if(t[o]===e)return a+=1,o+1;return-1}var n,i,l=o(t[0],e,0);if(l<0)return s.NO_MATCH;r=l;for(var c=1,d=t.length;c<d;c++)if(!((r=o(t[c],e,r))>-1))return s.NO_MATCH;return n=1/(r-l),i=a/t.length,s.MATCHES+i*n}(e,t);var r,o}function d(e,t){return e=""+e,t.keepDiacritics||(e=n()(e)),e}function u(e,t){var a;if("object"==typeof t&&(t=t.key),"function"==typeof t)a=t(e);else if(null==e)a=null;else if(Object.hasOwnProperty.call(e,t))a=e[t];else{if(t.includes("."))return function(e,t){for(var a=e.split("."),r=[t],o=0,n=a.length;o<n;o++){for(var s=a[o],i=[],l=0,c=r.length;l<c;l++){var d=r[l];if(null!=d)if(Object.hasOwnProperty.call(d,s)){var u=d[s];null!=u&&i.push(u)}else"*"===s&&(i=i.concat(d))}r=i}if(Array.isArray(r[0])){var h=[];return h.concat.apply(h,r)}return r}(t,e);a=null}return null==a?[]:Array.isArray(a)?a:[String(a)]}var h={maxRanking:1/0,minRanking:-1/0};function p(e){return"string"==typeof e?h:(0,r.Z)({},h,e)}},76826:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},a=Object.keys(t).join("|"),r=new RegExp(a,"g"),o=new RegExp(a,""),n=function(e){return e.replace(r,(function(e){return t[e]}))};e.exports=n,e.exports.has=function(e){return!!e.match(o)},e.exports.remove=n},53880:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ya});var r=a(67294),o=a(37703),n=a(5977),s=a(37731),i=a(22102),l=a(61988),c=a(38703),d=a(72570),u=a(23525),h=a(27600),p=a(98286),m=a(91914),g=a(43399);const v={form_data:{name:"form_data",parser:e=>{const t=JSON.parse(e);if(t.datasource){const[e,a]=t.datasource.split("__");t.dataset_id=e,t.dataset_type=a,delete t.datasource}return t}},slice_id:{name:"slice_id"},dataset_id:{name:"dataset_id"},dataset_type:{name:"dataset_type"},datasource:{name:"datasource",parser:e=>{const[t,a]=e.split("__");return{dataset_id:t,dataset_type:a}}},form_data_key:{name:"form_data_key"},permalink_key:{name:"permalink_key"},viz_type:{name:"viz_type"},dashboard_id:{name:"dashboard_id"}},f={p:"permalink_key",table:"dataset_id"},b=e=>{const t=new URLSearchParams(e);return Object.keys(v).reduce(((e,a)=>{const r=t.get(a);if(null===r)return e;let o;try{var n,s,i;o=null!=(n=null==(s=(i=v[a]).parser)?void 0:s.call(i,r))?n:r}catch{o=r}return"object"==typeof o?{...e,...o}:{...e,[v[a].name]:o}}),{})};var y=a(76445),S=a(5872),w=a.n(S),_=a(78718),x=a.n(_),Z=a(23279),C=a.n(Z),k=a(78580),T=a.n(k),N=a(45697),D=a.n(N),I=a(14890),$=a(51995),E=a(11965),O=a(68492),R=a(29119),A=a(28615),U=a(14278),M=a(58593),z=a(60812),j=a(33626),q=a(70163),F=a(61337),L=a(99543),Q=a(97381),P=a(3741),K=a(94184),H=a.n(K),B=a(52256),V=a(50810),W=a(2275),Y=a(1510),J=a(40219),G=a(99068),X=a(12515),ee=a(10331),te=a(651),ae=a(19485),re=a(6954),oe=a(14114),ne=a(40323),se=a(11064),ie=a(46078),le=a(55786),ce=a(31069),de=a(99612),ue=a(74435),he=a(29487),pe=a(47710),me=a(79217),ge=a(95345),ve=a(89555),fe=a(37921),be=a(30381),ye=a.n(be);const Se=e=>{let{cachedTimestamp:t}=e;const a=t?(0,E.tZ)("span",null,(0,l.t)("Loaded data cached"),(0,E.tZ)("b",null," ",ye().utc(t).fromNow())):(0,l.t)("Loaded from cache");return(0,E.tZ)("span",null,a,". ",(0,l.t)("Click to force-refresh"))},we=e=>{let{className:t,onClick:a,cachedTimestamp:o}=e;const[n,s]=(0,r.useState)(!1),i=n?"primary":"default";return(0,E.tZ)(M.u,{title:(0,E.tZ)(Se,{cachedTimestamp:o}),id:"cache-desc-tooltip"},(0,E.tZ)(fe.Z,{className:`${t}`,type:i,onClick:a,onMouseOver:()=>s(!0),onMouseOut:()=>s(!1)},(0,l.t)("Cached")," ",(0,E.tZ)("i",{className:"fa fa-refresh"})))};var _e=a(44814);const xe=(0,$.iK)(fe.Z)`
  text-align: left;
`;function Ze(e){let{endTime:t,isRunning:a,startTime:o,status:n="success"}=e;const[s,i]=(0,r.useState)("00:00:00.00"),l=(0,r.useRef)();return(0,r.useEffect)((()=>{const e=()=>{l.current&&(clearInterval(l.current),l.current=void 0)};return a&&(l.current=setInterval((()=>{if(o){const r=t||(0,_e.zO)();o<r&&i((0,_e.zQ)(o,r)),a||e()}}),30)),e}),[t,a,o]),(0,E.tZ)(xe,{type:n,role:"timer"},s)}var Ce;!function(e){e.failed="danger",e.loading="warning",e.success="success"}(Ce||(Ce={}));const ke=(0,r.forwardRef)(((e,t)=>{let{queriesResponse:a,chartStatus:r,chartUpdateStartTime:o,chartUpdateEndTime:n,refreshCachedQuery:s,rowLimit:i}=e;const l="loading"===r,c=null==a?void 0:a[0];return(0,E.tZ)("div",{ref:t},(0,E.tZ)("div",{css:e=>E.iv`
            display: flex;
            justify-content: flex-end;
            padding-bottom: ${4*e.gridUnit}px;
            & .ant-tag:last-of-type {
              margin: 0;
            }
          `},!l&&c&&(0,E.tZ)(ve.Z,{rowcount:Number(c.rowcount)||0,limit:Number(i)||0}),!l&&(null==c?void 0:c.is_cached)&&(0,E.tZ)(we,{onClick:s,cachedTimestamp:c.cached_dttm}),(0,E.tZ)(Ze,{startTime:o,endTime:n,isRunning:l,status:Ce[r]})))}));var Te=a(35932);const Ne=$.iK.div`
  ${e=>{let{theme:t}=e;return E.iv`
    margin: ${4*t.gridUnit}px;
    padding: ${4*t.gridUnit}px;

    border: 1px solid ${t.colors.info.base};
    background-color: ${t.colors.info.light2};
    border-radius: 2px;

    color: ${t.colors.info.dark2};
    font-size: ${t.typography.sizes.m}px;

    p {
      margin-bottom: ${t.gridUnit}px;
    }

    & a,
    & span[role='button'] {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: ${t.colors.info.dark1};
      }
    }

    &.alert-type-warning {
      border-color: ${t.colors.alert.base};
      background-color: ${t.colors.alert.light2};

      p {
        color: ${t.colors.alert.dark2};
      }

      & a:hover,
      & span[role='button']:hover {
        color: ${t.colors.alert.dark1};
      }
    }
  `}}
`,De=$.iK.div`
  display: flex;
  justify-content: flex-end;
  button {
    line-height: 1;
  }
`,Ie=$.iK.p`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`,$e={warning:"warning",danger:"danger"},Ee=(0,r.forwardRef)(((e,t)=>{let{title:a,bodyText:r,primaryButtonAction:o,secondaryButtonAction:n,primaryButtonText:s,secondaryButtonText:i,type:l="info",className:c=""}=e;return(0,E.tZ)(Ne,{className:`alert-type-${l} ${c}`,ref:t},(0,E.tZ)(Ie,null,a),(0,E.tZ)("p",null,r),s&&o&&(0,E.tZ)(De,null,n&&i&&(0,E.tZ)(Te.Z,{buttonStyle:"link",buttonSize:"small",onClick:n},i),(0,E.tZ)(Te.Z,{buttonStyle:l in $e?$e[l]:"primary",buttonSize:"small",onClick:o},s)))}));var Oe=a(75701);const Re={actions:D().object.isRequired,onQuery:D().func,can_overwrite:D().bool.isRequired,can_download:D().bool.isRequired,datasource:D().object,dashboardId:D().number,column_formats:D().object,containerId:D().string.isRequired,isStarred:D().bool.isRequired,slice:D().object,sliceName:D().string,table_name:D().string,vizType:D().string.isRequired,form_data:D().object,ownState:D().object,standalone:D().bool,force:D().bool,timeout:D().number,chartIsStale:D().bool,chart:W.$6,errorMessage:D().node,triggerRender:D().bool},Ae=1.25,Ue=[100,0],Me=[300,65],ze=$.iK.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  overflow: auto;
  box-shadow: none;
  height: 100%;

  & > div {
    height: 100%;
  }

  .gutter {
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    width: ${e=>{let{theme:t}=e;return 9*t.gridUnit}}px;
    margin: ${e=>{let{theme:t}=e;return t.gridUnit*Ae}}px auto;
  }

  .gutter.gutter-vertical {
    cursor: row-resize;
  }

  .ant-collapse {
    .ant-tabs {
      height: 100%;
      .ant-tabs-nav {
        padding-left: ${e=>{let{theme:t}=e;return 5*t.gridUnit}}px;
        margin: 0;
      }
      .ant-tabs-content-holder {
        overflow: hidden;
        .ant-tabs-content {
          height: 100%;
        }
      }
    }
  }
`;var je={name:"1wbll7q",styles:"text-decoration:underline"};const qe=e=>{var t;let{chart:a,slice:o,vizType:n,ownState:s,triggerRender:i,force:c,datasource:d,errorMessage:u,form_data:h,onQuery:p,actions:m,timeout:g,standalone:v,chartIsStale:f,chartAlert:b}=e;const y=(0,$.Fg)(),S=y.gridUnit*Ae,w=y.gridUnit*Ae,{width:_,height:x,ref:Z}=(0,de.NB)({refreshMode:"debounce",refreshRate:300}),[C,k]=(0,r.useState)((0,F.rV)(F.dR.chart_split_sizes,Ue)),[N,D]=(0,r.useState)(!1),I=(0,se.Z)(),{useLegacyApi:O}=null!=(t=I.get(n))?t:{},R=O&&d.type!==ie.i9.Table,A=!b&&f&&!R&&"failed"!==a.chartStatus&&(0,le.Z)(a.queriesResponse).length>0,U=(0,r.useCallback)((async function(){if(o&&null===o.query_context){const e=(0,X.u)({formData:o.form_data,force:c,resultFormat:"json",resultType:"full",setDataMask:null,ownState:null});await ce.Z.put({endpoint:`/api/v1/chart/${o.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({query_context:JSON.stringify(e),query_context_generation:!0})})}}),[o]);(0,r.useEffect)((()=>{U()}),[U]),(0,r.useEffect)((()=>{(0,F.LS)(F.dR.chart_split_sizes,C)}),[C]);const M=(0,r.useCallback)((e=>{k(e)}),[]),z=(0,r.useCallback)((()=>{m.setForceQuery(!0),m.postChartFormData(h,!0,g,a.id,void 0,s),m.updateQueryFormData(h,a.id)}),[m,a.id,h,s,g]),j=(0,r.useCallback)((e=>{let t;t=e?[60,40]:Ue,k(t)}),[]),q=(0,r.useCallback)((()=>(0,E.tZ)("div",{css:E.iv`
          min-height: 0;
          flex: 1;
          overflow: auto;
        `,ref:Z},_&&x&&(0,E.tZ)(ue.Z,{width:Math.floor(_),height:x,ownState:s,annotationData:a.annotationData,chartAlert:a.chartAlert,chartStackTrace:a.chartStackTrace,chartId:a.id,chartStatus:a.chartStatus,triggerRender:i,force:c,datasource:d,errorMessage:u,formData:h,latestQueryFormData:a.latestQueryFormData,onQuery:p,queriesResponse:a.queriesResponse,chartIsStale:f,setControlValue:m.setControlValue,timeout:g,triggerQuery:a.triggerQuery,vizType:n}))),[m.setControlValue,a.annotationData,a.chartAlert,a.chartStackTrace,a.chartStatus,a.id,a.latestQueryFormData,a.queriesResponse,a.triggerQuery,f,x,Z,_,d,u,c,h,p,s,g,i,n]),L=(0,r.useMemo)((()=>(0,E.tZ)("div",{className:"panel-body",css:E.iv`
          display: flex;
          flex-direction: column;
        `},R&&(0,E.tZ)(he.Z,{message:(0,l.t)("Chart type requires a dataset"),type:"error",css:e=>E.iv`
              margin: 0 0 ${4*e.gridUnit}px 0;
            `,description:(0,E.tZ)(r.Fragment,null,(0,l.t)("This chart type is not supported when using an unsaved query as a chart source. "),(0,E.tZ)("span",{role:"button",tabIndex:0,onClick:()=>D(!0),css:je},(0,l.t)("Create a dataset")),(0,l.t)(" to visualize your data."))}),A&&(0,E.tZ)(Ee,{title:u?(0,l.t)("Required control values have been removed"):(0,l.t)("Your chart is not up to date"),bodyText:u?(0,Oe.J)(!1):(0,E.tZ)("span",null,(0,l.t)('You updated the values in the control panel, but the chart was not updated automatically. Run the query by clicking on the "Update chart" button or')," ",(0,E.tZ)("span",{role:"button",tabIndex:0,onClick:p},(0,l.t)("click here")),"."),type:"warning",css:e=>E.iv`
              margin: 0 0 ${4*e.gridUnit}px 0;
            `}),(0,E.tZ)(ke,{queriesResponse:a.queriesResponse,chartStatus:a.chartStatus,chartUpdateStartTime:a.chartUpdateStartTime,chartUpdateEndTime:a.chartUpdateEndTime,refreshCachedQuery:z,rowLimit:null==h?void 0:h.row_limit}),q())),[A,u,p,a.queriesResponse,a.chartStatus,a.chartUpdateStartTime,a.chartUpdateEndTime,z,null==h?void 0:h.row_limit,q]),Q=(0,r.useMemo)((()=>q()),[q]),[P,K]=(0,r.useState)(a.latestQueryFormData);(0,r.useEffect)((()=>{i||K(a.latestQueryFormData)}),[a.latestQueryFormData]);const H=(0,r.useCallback)(((e,t,a)=>({[e]:`calc(${t}% - ${a+S}px)`})),[S]);if(v){const e="background-transparent",t=document.body.className.split(" ");return T()(t).call(t,e)||(document.body.className+=` ${e}`),Q}return(0,E.tZ)(ze,{className:"panel panel-default chart-container"},"filter_box"===n?L:(0,E.tZ)(ne.Z,{sizes:C,minSize:Me,direction:"vertical",gutterSize:w,onDragEnd:M,elementStyle:H,expandToMin:!0},L,(0,E.tZ)(ge.c9,{ownState:s,queryFormData:P,datasource:d,queryForce:c,onCollapseChange:j,chartStatus:a.chartStatus,errorMessage:u,actions:m})),N&&(0,E.tZ)(pe.W,{visible:N,onHide:()=>D(!1),buttonTextOnSave:(0,l.t)("Save"),buttonTextOnOverwrite:(0,l.t)("Overwrite"),datasource:(0,me.z)(d),openWindow:!1,formData:h}))};qe.propTypes=Re;const Fe=qe;var Le=a(21804),Qe=a.n(Le),Pe=a(37687),Ke=a(85481),He=a(43700),Be=a(71262),Ve=a(49484),We=a(61357),Ye=a(37116);const Je=e=>{let{loading:t,onQuery:a,onStop:r,errorMessage:o,isNewChart:n,canStopQuery:s,chartIsStale:i}=e;return t?(0,E.tZ)(Te.Z,{onClick:r,buttonStyle:"warning",disabled:!s},(0,E.tZ)("i",{className:"fa fa-stop-circle-o"})," ",(0,l.t)("Stop")):(0,E.tZ)(Te.Z,{onClick:a,buttonStyle:i?"primary":"secondary",disabled:!!o},n?(0,l.t)("Create chart"):(0,l.t)("Update chart"))},Ge=E.iv`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,Xe=e=>E.iv`
  display: flex;
  position: sticky;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  padding: ${4*e.gridUnit}px;
  z-index: 999;
  background: linear-gradient(
    ${(0,Ve.rgba)(e.colors.grayscale.light5,0)},
    ${e.colors.grayscale.light5} ${e.opacity.mediumLight}
  );

  & > button {
    min-width: 156px;
  }
`,et=$.iK.div`
  position: relative;
  height: 100%;
  width: 100%;

  // Resizable add overflow-y: auto as a style to this div
  // To override it, we need to use !important
  overflow: visible !important;
  #controlSections {
    height: 100%;
    overflow: visible;
  }
  .nav-tabs {
    flex: 0 0 1;
  }
  .tab-content {
    overflow: auto;
    flex: 1 1 100%;
  }
  .Select__menu {
    max-width: 100%;
  }
  .type-label {
    margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    width: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;
    display: inline-block;
    text-align: center;
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
  }
`,tt=(0,$.iK)(Be.ZP)`
  ${e=>{let{theme:t,fullWidth:a}=e;return E.iv`
    height: 100%;
    overflow: visible;
    .ant-tabs-nav {
      margin-bottom: 0;
    }
    .ant-tabs-nav-list {
      width: ${a?"100%":"50%"};
    }
    .ant-tabs-tabpane {
      height: 100%;
    }
    .ant-tabs-content-holder {
      padding-top: ${4*t.gridUnit}px;
    }

    .ant-collapse-ghost > .ant-collapse-item {
      &:not(:last-child) {
        border-bottom: 1px solid ${t.colors.grayscale.light3};
      }

      & > .ant-collapse-header {
        font-size: ${t.typography.sizes.s}px;
      }

      & > .ant-collapse-content > .ant-collapse-content-box {
        padding-bottom: 0;
        font-size: ${t.typography.sizes.s}px;
      }
    }
  `}}
`,at=(e,t)=>e.reduce(((e,a)=>!a.expanded&&a.label||(e=>!!e.label&&(Ke.sections.legacyRegularTime.label===e.label||Ke.sections.legacyTimeseriesTime.label===e.label))(a)&&!(e=>{var t;return null==e||null==(t=e.columns)?void 0:t.some((e=>e.is_dttm))})(t)?e:[...e,String(a.label)]),[]);function rt(e,t){const a=(0,r.useRef)(e()),o=(0,r.useRef)(t);return o.current!==t&&(a.current=e(),o.current=t),a}const ot=e=>{var t,a;const{colors:o}=(0,$.Fg)(),n=(0,r.useContext)(U.Zn),s=(0,z.D)(e.exploreState),i=(0,z.D)(e.exploreState.datasource),[d,u]=(0,r.useState)(!1),h=(0,r.useRef)(null);(0,r.useEffect)((()=>{var t,a,r;!i||(null==(t=e.exploreState.datasource)?void 0:t.id)===i.id&&(null==(a=e.exploreState.datasource)?void 0:a.type)===i.type||(u(!0),null==(r=h.current)||r.scrollTo(0,0))}),[null==(t=e.exploreState.datasource)?void 0:t.id,null==(a=e.exploreState.datasource)?void 0:a.type,i]);const{expandedQuerySections:p,expandedCustomizeSections:m,querySections:g,customizeSections:v}=(0,r.useMemo)((()=>function(e,t,a){const r=[],o=[];return(0,ee.Bq)(e,a).forEach((e=>{"data"===e.tabOverride||e.controlSetRows.some((e=>e.some((e=>e&&"object"==typeof e&&"config"in e&&e.config&&(!e.config.renderTrigger||"data"===e.config.tabOverride)))))?r.push(e):o.push(e)})),{expandedQuerySections:at(r,t),expandedCustomizeSections:at(o,t),querySections:r,customizeSections:o}}(e.form_data.viz_type,e.exploreState.datasource,e.datasource_type)),[e.exploreState.datasource,e.form_data.viz_type,e.datasource_type]),f=(0,r.useCallback)((()=>{(0,le.Z)(e.exploreState.controlsTransferred).forEach((t=>e.actions.setControlValue(t,e.controls[t].default)))}),[e.actions,e.exploreState.controlsTransferred,e.controls]),b=(0,r.useCallback)((()=>{f(),u(!1)}),[f]),y=(0,r.useCallback)((()=>{u(!1)}),[]),S=t=>{let{name:a,config:r}=t;const{controls:o,chart:n,exploreState:i}=e;return Boolean(null==r.shouldMapStateToProps?void 0:r.shouldMapStateToProps(s||i,i,o[a],n))},_=rt((()=>({})),e.form_data.viz_type),x=t=>{const{controls:a}=e,{label:n,description:s}=t,i=String(n),l=t.controlSetRows.some((e=>e.some((e=>{const t="string"==typeof e?e:e&&"name"in e?e.name:null;return t&&t in a&&a[t].validationErrors&&a[t].validationErrors.length>0}))));l||(_.current[i]=!0);const c=_.current[i]?o.error.base:o.alert.base;return(0,E.tZ)(He.Z.Panel,{css:e=>E.iv`
          margin-bottom: 0;
          box-shadow: none;

          &:last-child {
            padding-bottom: ${16*e.gridUnit}px;
            border-bottom: 0;
          }

          .panel-body {
            margin-left: ${4*e.gridUnit}px;
            padding-bottom: 0;
          }

          span.label {
            display: inline-block;
          }
          ${!t.label&&"\n            .ant-collapse-header {\n              display: none;\n            }\n          "}
        `,header:(0,E.tZ)((()=>(0,E.tZ)("span",null,(0,E.tZ)("span",{css:e=>E.iv`
            font-size: ${e.typography.sizes.m}px;
            line-height: 1.3;
          `},n)," ",s&&(0,E.tZ)(M.u,{id:i,title:s},(0,E.tZ)(q.Z.InfoCircleOutlined,{css:Ge})),l&&(0,E.tZ)(M.u,{id:`${Qe()("validation-errors")}-tooltip`,title:"This section contains validation errors"},(0,E.tZ)(q.Z.InfoCircleOutlined,{css:E.iv`
                ${Ge}
                color: ${c};
              `})))),null),key:i},t.controlSetRows.map(((t,a)=>{const o=t.map((t=>t?r.isValidElement(t)?t:t.name&&t.config&&"datasource"!==t.name?(t=>{let{name:a,config:r}=t;const{controls:o,chart:n,exploreState:s}=e,{visibility:i}=r,l={...r,...o[a],...S({name:a,config:r})?null==r||null==r.mapStateToProps?void 0:r.mapStateToProps(s,o[a],n):void 0,name:a},{validationErrors:c,label:d,description:u,...h}=l,p=i?i.call(r,e,l):void 0,m="function"==typeof d?d(s,o[a],n):d,g="function"==typeof u?u(s,o[a],n):u;return(0,E.tZ)(Ye.Z,w()({key:`control-${a}`,name:a,label:m,description:g,validationErrors:c,actions:e.actions,isVisible:p},h))})(t):null:null)).filter((e=>null!==e));return 0===o.length?null:(0,E.tZ)(We.Z,{key:`controlsetrow-${a}`,controls:o})})))},Z=(0,le.Z)(e.exploreState.controlsTransferred).length>0,C=(0,r.useCallback)((()=>Z?(0,E.tZ)(Ee,{title:(0,l.t)("Keep control settings?"),bodyText:(0,l.t)("You've changed datasets. Any controls with data (columns, metrics) that match this new dataset have been retained."),primaryButtonAction:y,secondaryButtonAction:b,primaryButtonText:(0,l.t)("Continue"),secondaryButtonText:(0,l.t)("Clear form"),type:"info"}):(0,E.tZ)(Ee,{title:(0,l.t)("No form settings were maintained"),bodyText:(0,l.t)("We were unable to carry over any controls when switching to this new dataset."),primaryButtonAction:y,primaryButtonText:(0,l.t)("Continue"),type:"warning"})),[b,y,Z]),k=rt((()=>!1),e.form_data.viz_type),T=(0,r.useMemo)((()=>{e.errorMessage||(k.current=!0);const t=k.current?o.error.base:o.alert.base;return(0,E.tZ)(r.Fragment,null,(0,E.tZ)("span",null,(0,l.t)("Data")),e.errorMessage&&(0,E.tZ)("span",{css:e=>E.iv`
              margin-left: ${2*e.gridUnit}px;
            `}," ",(0,E.tZ)(M.u,{id:"query-error-tooltip",placement:"right",title:e.errorMessage},(0,E.tZ)(q.Z.ExclamationCircleOutlined,{css:E.iv`
                  ${Ge}
                  color: ${t};
                `}))))}),[o.error.base,o.alert.base,k,e.errorMessage]);if(!(0,Pe.Z)().has(e.form_data.viz_type)&&n.loading)return(0,E.tZ)(c.Z,null);const N=v.length>0;return(0,E.tZ)(et,{ref:h},(0,E.tZ)(tt,{id:"controlSections",fullWidth:N,allowOverflow:!1},(0,E.tZ)(Be.ZP.TabPane,{key:"query",tab:T},(0,E.tZ)(He.Z,{defaultActiveKey:p,expandIconPosition:"right",ghost:!0},d&&(0,E.tZ)(C,null),g.map(x))),N&&(0,E.tZ)(Be.ZP.TabPane,{key:"display",tab:(0,l.t)("Customize")},(0,E.tZ)(He.Z,{defaultActiveKey:m,expandIconPosition:"right",ghost:!0},v.map(x)))),(0,E.tZ)("div",{css:Xe},(0,E.tZ)(Je,{onQuery:e.onQuery,onStop:e.onStop,errorMessage:e.errorMessage,loading:"loading"===e.chart.chartStatus,isNewChart:!e.chart.queriesResponse,canStopQuery:e.canStopQuery,chartIsStale:e.chartIsStale})))};var nt=a(9875),st=a(49238),it=a(30724),lt=a.n(it),ct=a(74069),dt=a(87183),ut=a(4715),ht=a(9882);const pt="save_chart_recent_dashboard",mt=(0,l.t)("**Select** a dashboard OR **create** a new one"),gt=(0,$.iK)(ct.Z)`
  .ant-modal-body {
    overflow: visible;
  }
  i {
    position: absolute;
    top: -${e=>{let{theme:t}=e;return 5.25*t.gridUnit}}px;
    left: ${e=>{let{theme:t}=e;return 26.75*t.gridUnit}}px;
  }
`;class vt extends r.Component{constructor(e){var t;super(e),this.handleDatasetNameChange=e=>{this.setState({datasetName:e.target.value})},this.renderSaveChartModal=()=>{var e;const t=this.state.saveToDashboardId||this.state.newDashboardName;return(0,E.tZ)(st.l0,{layout:"vertical"},(this.state.alert||this.props.alert)&&(0,E.tZ)(he.Z,{type:"warning",message:(0,E.tZ)(r.Fragment,null,this.state.alert?this.state.alert:this.props.alert,(0,E.tZ)("i",{role:"button","aria-label":"Remove alert",tabIndex:0,className:"fa fa-close pull-right",onClick:this.removeAlert.bind(this),style:{cursor:"pointer"}}))}),(0,E.tZ)(st.xJ,null,(0,E.tZ)(dt.Y,{id:"overwrite-radio",disabled:!this.canOverwriteSlice(),checked:"overwrite"===this.state.action,onChange:()=>this.changeAction("overwrite")},(0,l.t)("Save (Overwrite)")),(0,E.tZ)(dt.Y,{id:"saveas-radio",checked:"saveas"===this.state.action,onChange:()=>this.changeAction("saveas")},(0,l.t)("Save as..."))),(0,E.tZ)("hr",null),(0,E.tZ)(st.xJ,{label:(0,l.t)("Chart name"),required:!0},(0,E.tZ)(nt.II,{name:"new_slice_name",type:"text",placeholder:"Name",value:this.state.newSliceName,onChange:this.onSliceNameChange})),"query"===(null==(e=this.props.datasource)?void 0:e.type)&&(0,E.tZ)(st.xJ,{label:(0,l.t)("Dataset Name"),required:!0},(0,E.tZ)(ht.V,{tooltip:(0,l.t)("A reusable dataset will be saved with your chart."),placement:"right"}),(0,E.tZ)(nt.II,{name:"dataset_name",type:"text",placeholder:"Dataset Name",value:this.state.datasetName,onChange:this.handleDatasetNameChange})),(0,E.tZ)(st.xJ,{label:(0,l.t)("Add to dashboard")},(0,E.tZ)(ut.Ph,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,l.t)("Select a dashboard"),options:this.props.dashboards,onChange:this.onDashboardSelectChange,value:t||void 0,placeholder:(0,E.tZ)(lt(),{source:mt,renderers:{paragraph:"span"}})})))},this.renderFooter=()=>{var e,t;return(0,E.tZ)("div",null,(0,E.tZ)(Te.Z,{id:"btn_cancel",buttonSize:"small",onClick:this.props.onHide},(0,l.t)("Cancel")),(0,E.tZ)(Te.Z,{id:"btn_modal_save_goto_dash",buttonSize:"small",disabled:!this.state.newSliceName||!this.state.saveToDashboardId&&!this.state.newDashboardName||(null==(e=this.props.datasource)?void 0:e.type)!==ie.i9.Table&&!this.state.datasetName,onClick:()=>this.saveOrOverwrite(!0)},this.isNewDashboard()?(0,l.t)("Save & go to new dashboard"):(0,l.t)("Save & go to dashboard")),(0,E.tZ)(Te.Z,{id:"btn_modal_save",buttonSize:"small",buttonStyle:"primary",onClick:()=>this.saveOrOverwrite(!1),disabled:this.state.isLoading||!this.state.newSliceName||(null==(t=this.props.datasource)?void 0:t.type)!==ie.i9.Table&&!this.state.datasetName},!this.canOverwriteSlice()&&this.props.slice?(0,l.t)("Save as new chart"):this.isNewDashboard()?(0,l.t)("Save to new dashboard"):(0,l.t)("Save")))},this.state={saveToDashboardId:null,newSliceName:e.sliceName,datasetName:null==(t=e.datasource)?void 0:t.name,alert:null,action:this.canOverwriteSlice()?"overwrite":"saveas",isLoading:!1},this.onDashboardSelectChange=this.onDashboardSelectChange.bind(this),this.onSliceNameChange=this.onSliceNameChange.bind(this),this.changeAction=this.changeAction.bind(this),this.saveOrOverwrite=this.saveOrOverwrite.bind(this),this.isNewDashboard=this.isNewDashboard.bind(this)}isNewDashboard(){return!(this.state.saveToDashboardId||!this.state.newDashboardName)}canOverwriteSlice(){var e,t,a;return(null==(e=this.props.slice)||null==(t=e.owners)?void 0:T()(t).call(t,this.props.userId))&&!(null!=(a=this.props.slice)&&a.is_managed_externally)}componentDidMount(){this.props.actions.fetchDashboards(this.props.userId).then((()=>{const e=this.props.dashboards.map((e=>e.value)),t=sessionStorage.getItem(pt);let a=t&&parseInt(t,10);this.props.dashboardId&&(a=this.props.dashboardId),null!==a&&-1!==e.indexOf(a)&&this.setState({saveToDashboardId:a})}))}onSliceNameChange(e){this.setState({newSliceName:e.target.value})}onDashboardSelectChange(e){const t=e?String(e):void 0,a=e&&"number"==typeof e?e:null;this.setState({saveToDashboardId:a,newDashboardName:t})}changeAction(e){this.setState({action:e})}async saveOrOverwrite(e){var t;this.setState({alert:null,isLoading:!0}),this.props.actions.removeSaveModalAlert();let a=Promise.resolve();if((null==(t=this.props.datasource)?void 0:t.type)===ie.i9.Query){var r;const{schema:e,sql:t,database:a}=this.props.datasource,{templateParams:o}=this.props.datasource,n=(null==(r=this.props.datasource)?void 0:r.columns)||[];try{await this.props.actions.saveDataset({schema:e,sql:t,database:a,templateParams:o,datasourceName:this.state.datasetName,columns:n})}catch{return void this.setState({isLoading:!1})}}let o=null;if(this.state.newDashboardName||this.state.saveToDashboardId){let e=this.state.saveToDashboardId||null;this.state.saveToDashboardId||(a=a.then((()=>this.props.actions.createDashboard(this.state.newDashboardName))).then((t=>{e=t.id}))),a=a.then((()=>this.props.actions.getDashboard(e))).then((e=>{o=e.result;const t=new Set(this.props.sliceDashboards);t.add(o.id);const{url_params:a,...r}=this.props.form_data||{};this.props.actions.setFormData({...r,dashboards:Array.from(t)})}))}a="overwrite"===this.state.action?a.then((()=>this.props.actions.updateSlice(this.props.slice,this.state.newSliceName,o?{title:o.dashboard_title,new:!this.state.saveToDashboardId}:null))):a.then((()=>this.props.actions.createSlice(this.state.newSliceName,o?{title:o.dashboard_title,new:!this.state.saveToDashboardId}:null))),a.then((t=>{if(o?sessionStorage.setItem(pt,`${o.id}`):sessionStorage.removeItem(pt),e&&o)return void this.props.history.push(o.url);const a=new URLSearchParams(window.location.search);a.set("save_action",this.state.action),a.delete("form_data_key"),"saveas"===this.state.action&&a.set("slice_id",t.id.toString()),this.props.history.replace(`/explore/?${a.toString()}`)})),this.setState({isLoading:!1}),this.props.onHide()}removeAlert(){this.props.alert&&this.props.actions.removeSaveModalAlert(),this.setState({alert:null})}render(){return(0,E.tZ)(gt,{show:!0,onHide:this.props.onHide,title:(0,l.t)("Save chart"),footer:this.renderFooter()},this.state.isLoading?(0,E.tZ)(c.Z,{position:"normal"}):this.renderSaveChartModal())}}const ft=(0,n.EN)((0,o.$j)((function(e){let{explore:t,saveModal:a,user:r}=e;return{datasource:t.datasource,slice:t.slice,userId:null==r?void 0:r.userId,dashboards:a.dashboards,alert:a.saveModalAlert}}),(()=>({})))(vt));var bt=a(1469),yt=a.n(bt),St=a(90233),wt=a(91877),_t=a(93185),xt=a(27034),Zt=a(42753),Ct=a(99963);const kt=$.iK.div`
  ${e=>{let{theme:t}=e;return E.iv`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${6*t.gridUnit}px;
    padding: 0 ${t.gridUnit}px;

    // hack to make the drag preview image corners rounded
    transform: translate(0, 0);
    background-color: inherit;
    border-radius: 4px;

    > div {
      min-width: 0;
      margin-right: ${2*t.gridUnit}px;
    }
  `}}
`;function Tt(e){const{labelRef:t,showTooltip:a,type:r,value:o}=e,[{isDragging:n},s]=(0,xt.c)({item:{value:e.value,type:e.type},collect:e=>({isDragging:e.isDragging()})}),i={labelRef:t,showTooltip:!n&&a,showType:!0};return(0,E.tZ)(kt,{ref:s},r===Zt.g.Column?(0,E.tZ)(Ct.l,w()({column:o},i)):(0,E.tZ)(Ct.B,w()({metric:o},i)),(0,E.tZ)(q.Z.Drag,null))}const Nt=(0,wt.cr)(_t.T.ENABLE_EXPLORE_DRAG_AND_DROP),Dt=$.iK.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
`,It=$.iK.div`
  text-align: center;
  padding-top: 2px;
`,$t=$.iK.div`
  ${e=>{let{theme:t}=e;return E.iv`
    background-color: ${t.colors.grayscale.light5};
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    .ant-collapse {
      height: auto;
    }
    .field-selections {
      padding: 0 0 ${4*t.gridUnit}px;
      overflow: auto;
    }
    .field-length {
      margin-bottom: ${2*t.gridUnit}px;
      font-size: ${t.typography.sizes.s}px;
      color: ${t.colors.grayscale.light1};
    }
    .form-control.input-md {
      width: calc(100% - ${8*t.gridUnit}px);
      height: ${8*t.gridUnit}px;
      margin: ${2*t.gridUnit}px auto;
    }
    .type-label {
      font-size: ${t.typography.sizes.s}px;
      color: ${t.colors.grayscale.base};
    }
    .Control {
      padding-bottom: 0;
    }
  `}};
`,Et=$.iK.div`
  ${e=>{let{theme:t}=e;return E.iv`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${t.typography.sizes.s}px;
    background-color: ${t.colors.grayscale.light4};
    margin: ${2*t.gridUnit}px 0;
    border-radius: 4px;
    padding: 0 ${t.gridUnit}px;

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }

    ${Nt&&E.iv`
      padding: 0;
      cursor: pointer;
      &:hover {
        background-color: ${t.colors.grayscale.light3};
      }
    `}

    & > span {
      white-space: nowrap;
    }

    .option-label {
      display: inline;
    }

    .metric-option {
      & > svg {
        min-width: ${4*t.gridUnit}px;
      }
      & > .option-label {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `}}
`,Ot=$.iK.span`
  ${e=>{let{theme:t}=e;return`\n    font-size: ${t.typography.sizes.m}px;\n    line-height: 1.3;\n  `}}
`,Rt=$.iK.div`
  ${e=>{let{theme:t}=e;return E.iv`
    margin: 0 ${2.5*t.gridUnit}px;

    span {
      text-decoration: underline;
    }
  `}}
`,At=e=>{const t={labelRef:(0,r.useRef)(null)};return(0,E.tZ)(Et,{className:e.className},r.cloneElement(e.children,t))};function Ut(e){var t;let{datasource:a,formData:o,controls:{datasource:n},actions:s,shouldForceUpdate:i}=e;const{columns:c,metrics:d}=a,u=(0,r.useMemo)((()=>[...yt()(c)?c:[]].sort(((e,t)=>null==e||!e.is_dttm||null!=t&&t.is_dttm?null==t||!t.is_dttm||null!=e&&e.is_dttm?0:1:-1))),[c]),[p,m]=(0,r.useState)(!1),[g,v]=(0,r.useState)(""),[f,b]=(0,r.useState)({columns:u,metrics:d}),[y,S]=(0,r.useState)(!1),[_,x]=(0,r.useState)(!1),Z=(0,r.useMemo)((()=>C()((e=>{b(""!==e?{columns:(0,St.Lu)(u,e,{keys:[{key:"verbose_name",threshold:St.tL.CONTAINS},{key:"column_name",threshold:St.tL.CONTAINS},{key:e=>{var t,a;return[null!=(t=null==e?void 0:e.description)?t:"",null!=(a=null==e?void 0:e.expression)?a:""].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||""))},threshold:St.tL.CONTAINS,maxRanking:St.tL.CONTAINS}],keepDiacritics:!0}),metrics:(0,St.Lu)(d,e,{keys:[{key:"verbose_name",threshold:St.tL.CONTAINS},{key:"metric_name",threshold:St.tL.CONTAINS},{key:e=>{var t,a;return[null!=(t=null==e?void 0:e.description)?t:"",null!=(a=null==e?void 0:e.expression)?a:""].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||""))},threshold:St.tL.CONTAINS,maxRanking:St.tL.CONTAINS}],keepDiacritics:!0,baseSort:(e,t)=>{var a,r,o,n,s,i;return Number(null!=(a=null==t||null==(r=t.item)?void 0:r.is_certified)?a:0)-Number(null!=(o=null==e||null==(n=e.item)?void 0:n.is_certified)?o:0)||String(null!=(s=null==e?void 0:e.rankedValue)?s:"").localeCompare(null!=(i=null==t?void 0:t.rankedValue)?i:"")}})}:{columns:u,metrics:d})}),h.oP)),[u,d]);(0,r.useEffect)((()=>{b({columns:u,metrics:d}),v("")}),[u,a,d]);const k=(0,r.useMemo)((()=>{var e;return y?null==f?void 0:f.metrics:null==f||null==(e=f.metrics)||null==e.slice?void 0:e.slice(0,50)}),[null==f?void 0:f.metrics,y]),T=(0,r.useMemo)((()=>{var e;return(_?null==f?void 0:f.columns:null==f||null==(e=f.columns)||null==e.slice?void 0:e.slice(0,50)).sort(((e,t)=>{var a,r;return(null!=(a=null==t?void 0:t.is_certified)?a:0)-(null!=(r=null==e?void 0:e.is_certified)?r:0)}))}),[f.columns,_]),N={query:ie.i9.Query,saved_query:ie.i9.SavedQuery},D=a.type&&N[a.type],I=(0,r.useMemo)((()=>{var e;return(0,E.tZ)(r.Fragment,null,(0,E.tZ)(nt.II,{allowClear:!0,onChange:e=>{v(e.target.value),Z(e.target.value)},value:g,className:"form-control input-md",placeholder:(0,l.t)("Search Metrics & Columns")}),(0,E.tZ)("div",{className:"field-selections"},D&&"false"!==sessionStorage.getItem("showInfobox")&&(0,E.tZ)(Rt,null,(0,E.tZ)(he.Z,{closable:!0,onClose:()=>sessionStorage.setItem("showInfobox","false"),type:"info",message:"",description:(0,E.tZ)(r.Fragment,null,(0,E.tZ)("span",{role:"button",tabIndex:0,onClick:()=>m(!0),className:"add-dataset-alert-description"},(0,l.t)("Create a dataset")),(0,l.t)(" to edit or add columns and metrics."))})),(0,E.tZ)(He.Z,{defaultActiveKey:["metrics","column"],expandIconPosition:"right",ghost:!0},(null==d?void 0:d.length)&&(0,E.tZ)(He.Z.Panel,{header:(0,E.tZ)(Ot,null,(0,l.t)("Metrics")),key:"metrics"},(0,E.tZ)("div",{className:"field-length"},(0,l.t)("Showing %s of %s",null==k?void 0:k.length,null==f?void 0:f.metrics.length)),null==k||null==k.map?void 0:k.map((e=>(0,E.tZ)(At,{key:e.metric_name+String(i),className:"column"},Nt?(0,E.tZ)(Tt,{value:e,type:Zt.g.Metric}):(0,E.tZ)(Ct.B,{metric:e,showType:!0})))),(null==f||null==(e=f.metrics)?void 0:e.length)>50?(0,E.tZ)(It,null,(0,E.tZ)(Dt,{onClick:()=>S(!y)},y?(0,l.t)("Show less..."):(0,l.t)("Show all..."))):(0,E.tZ)(r.Fragment,null)),(0,E.tZ)(He.Z.Panel,{header:(0,E.tZ)(Ot,null,(0,l.t)("Columns")),key:"column"},(0,E.tZ)("div",{className:"field-length"},(0,l.t)("Showing %s of %s",T.length,f.columns.length)),T.map((e=>(0,E.tZ)(At,{key:e.column_name+String(i),className:"column"},Nt?(0,E.tZ)(Tt,{value:e,type:Zt.g.Column}):(0,E.tZ)(Ct.l,{column:e,showType:!0})))),f.columns.length>50?(0,E.tZ)(It,null,(0,E.tZ)(Dt,{onClick:()=>x(!_)},_?(0,l.t)("Show Less..."):(0,l.t)("Show all..."))):(0,E.tZ)(r.Fragment,null)))))}),[T,g,f.columns.length,null==f||null==(t=f.metrics)?void 0:t.length,k,Z,_,y,D,i]);return(0,E.tZ)($t,null,D&&p&&(0,E.tZ)(pe.W,{visible:p,onHide:()=>m(!1),buttonTextOnSave:(0,l.t)("Save"),buttonTextOnOverwrite:(0,l.t)("Overwrite"),datasource:(0,me.z)(a),openWindow:!1,formData:o}),(0,E.tZ)(Ye.Z,w()({},n,{name:"datasource",actions:s})),null!=a.id&&I)}var Mt=a(28062),zt=a(61358),jt=a(41609),qt=a.n(jt),Ft=a(18446),Lt=a.n(Ft),Qt=a(88306),Pt=a.n(Qt),Kt=a(38575),Ht=a(92252);const Bt=Pt()(((e,t)=>{const a={};return((null==t?void 0:t.controlPanelSections)||[]).filter(Kt.D_).forEach((e=>{e.controlSetRows.forEach((e=>{e.forEach((e=>{e&&("string"==typeof e?a[e]=Ht.ai[e]:e.name&&e.config&&(a[e.name]=e.config))}))}))})),a}));var Vt=a(9679),Wt=a(1304),Yt=a(76962);const Jt={origFormData:D().object.isRequired,currentFormData:D().object.isRequired},Gt=$.iK.span`
  ${e=>{let{theme:t}=e;return`\n    font-size: ${t.typography.sizes.s}px;\n    color: ${t.colors.grayscale.dark1};\n    background-color: ${t.colors.alert.base};\n\n    &: hover {\n      background-color: ${t.colors.alert.dark1};\n    }\n  `}}
`;function Xt(e){if(null==e||""===e)return null;if("object"==typeof e){if(Array.isArray(e)&&0===e.length)return null;const t=Object.keys(e);if(t&&0===t.length)return null}return e}class ea extends r.Component{constructor(e){super(e);const t=this.getDiffs(e),a=(e=>{const t=(0,Pe.Z)().get(e);return Bt(e,t)})(this.props.origFormData.viz_type),r=this.getRowsFromDiffs(t,a);this.state={rows:r,hasDiffs:!qt()(t),controlsMap:a}}UNSAFE_componentWillReceiveProps(e){if(Lt()(this.props,e))return;const t=this.getDiffs(e);this.setState((e=>({rows:this.getRowsFromDiffs(t,e.controlsMap),hasDiffs:!qt()(t)})))}getRowsFromDiffs(e,t){return Object.entries(e).map((e=>{let[a,r]=e;return{control:t[a]&&t[a].label||a,before:this.formatValue(r.before,a,t),after:this.formatValue(r.after,a,t)}}))}getDiffs(e){const t=(0,J.BR)(e.origFormData),a=(0,J.BR)(e.currentFormData),r=Object.keys(a),o={};return r.forEach((e=>{var r;(t[e]||a[e])&&(T()(r=["filters","having","having_filters","where"]).call(r,e)||this.isEqualish(t[e],a[e])||(o[e]={before:t[e],after:a[e]}))})),o}isEqualish(e,t){return Lt()(Xt(e),Xt(t))}formatValue(e,t,a){var r,o,n,s;if(void 0===e)return"N/A";if(null===e)return"null";if("AdhocFilterControl"===(null==(r=a[t])?void 0:r.type))return e.length?e.map((e=>{const t=e.comparator&&e.comparator.constructor===Array?`[${e.comparator.join(", ")}]`:e.comparator;return`${e.subject} ${e.operator} ${t}`})).join(", "):"[]";if("BoundsControl"===(null==(o=a[t])?void 0:o.type))return`Min: ${e[0]}, Max: ${e[1]}`;if("CollectionControl"===(null==(n=a[t])?void 0:n.type))return e.map((e=>(0,Vt.o)(e))).join(", ");if("MetricsControl"===(null==(s=a[t])?void 0:s.type)&&e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}if("boolean"==typeof e)return e?"true":"false";if(e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}return"string"==typeof e||"number"==typeof e?e:(0,Vt.o)(e)}renderModalBody(){return(0,E.tZ)(Yt.Z,{columns:[{accessor:"control",Header:"Control"},{accessor:"before",Header:"Before"},{accessor:"after",Header:"After"}],data:this.state.rows,pageSize:50,className:"table-condensed",columnsForWrapText:["Control","Before","After"]})}renderTriggerNode(){return(0,E.tZ)(M.u,{id:"difference-tooltip",title:(0,l.t)("Click to see difference")},(0,E.tZ)(Gt,{className:"label"},(0,l.t)("Altered")))}render(){return this.state.hasDiffs?(0,E.tZ)(Wt.Z,{triggerNode:this.renderTriggerNode(),modalTitle:(0,l.t)("Chart changes"),modalBody:this.renderModalBody(),responsive:!0}):null}}ea.propTypes=Jt;var ta=a(83673),aa=a(52564),ra=a(94413);const oa={actions:D().object.isRequired,canOverwrite:D().bool.isRequired,canDownload:D().bool.isRequired,dashboardId:D().number,isStarred:D().bool.isRequired,slice:D().object,sliceName:D().string,table_name:D().string,formData:D().object,ownState:D().object,timeout:D().number,chart:W.$6,saveDisabled:D().bool},na=e=>E.iv`
  color: ${e.colors.primary.dark2};
  & > span[role='img'] {
    margin-right: 0;
  }
`,sa=e=>{var t;let{dashboardId:a,slice:o,actions:n,formData:s,ownState:i,chart:c,user:d,canOverwrite:u,canDownload:h,isStarred:p,sliceUpdated:m,sliceName:g,onSaveChart:v,saveDisabled:f}=e;const{latestQueryFormData:b,sliceFormData:y}=c,[S,w]=(0,r.useState)(!1);(0,r.useEffect)((()=>{a&&(async()=>{await ce.Z.get({endpoint:`/api/v1/chart/${o.slice_id}`}).then((e=>{var t;const r=null==e||null==(t=e.json)?void 0:t.result;if(r&&r.dashboards&&r.dashboards.length){const{dashboards:e}=r,t=a&&e.length&&e.find((e=>e.id===a));if(t&&t.json_metadata){const e=JSON.parse(t.json_metadata),a={...e.shared_label_colors||{},...e.label_colors||{}},r=Mt.getNamespace();Object.keys(a).forEach((t=>{r.setColor(t,a[t],e.color_scheme)}))}}})).catch((()=>{}))})()}),[]);const[_,x,Z]=(0,ra.gT)(b,h,o,n.redirectSQLLab,(()=>{w(!0)}),i),C=null==o?void 0:o.slice_name;return(0,E.tZ)(r.Fragment,null,(0,E.tZ)(aa.u,{editableTitleProps:{title:g,canEdit:!o||u||T()(t=(null==o?void 0:o.owners)||[]).call(t,null==d?void 0:d.userId),onSave:n.updateChartTitle,placeholder:(0,l.t)("Add the name of the chart"),label:(0,l.t)("Chart title")},showTitlePanelItems:!!o,certificatiedBadgeProps:{certifiedBy:null==o?void 0:o.certified_by,details:null==o?void 0:o.certification_details},showFaveStar:!(null==d||!d.userId),faveStarProps:{itemId:null==o?void 0:o.slice_id,fetchFaveStar:n.fetchFaveStar,saveFaveStar:n.saveFaveStar,isStarred:p,showTooltip:!0},titlePanelAdditionalItems:y?(0,E.tZ)(ea,{className:"altered",origFormData:{...y,chartTitle:C},currentFormData:{...s,chartTitle:g}}):null,rightPanelAdditionalItems:(0,E.tZ)(M.u,{title:f?(0,l.t)("Add required control values to save chart"):null},(0,E.tZ)("div",null,(0,E.tZ)(Te.Z,{buttonStyle:"secondary",onClick:v,disabled:f,css:na},(0,E.tZ)(q.Z.SaveOutlined,{iconSize:"l"}),(0,l.t)("Save")))),additionalActionsMenu:_,menuDropdownProps:{visible:x,onVisibleChange:Z}}),S&&(0,E.tZ)(ta.Z,{show:S,onHide:()=>{w(!1)},onSave:m,slice:o}))};sa.propTypes=oa;const ia=(0,o.$j)(null,(function(e){return(0,I.DE)({sliceUpdated:te.sliceUpdated,toggleActive:zt.M,deleteActiveReport:zt.MZ},e)}))(sa),la={...Fe.propTypes,actions:D().object.isRequired,datasource_type:D().string.isRequired,dashboardId:D().number,isDatasourceMetaLoading:D().bool.isRequired,chart:W.$6.isRequired,slice:D().object,sliceName:D().string,controls:D().object.isRequired,forcedHeight:D().string,form_data:D().object.isRequired,standalone:D().bool.isRequired,force:D().bool,timeout:D().number,impressionId:D().string,vizType:D().string},ca=$.iK.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`,da=$.iK.div`
  ${e=>{let{theme:t}=e;return E.iv`
    background: ${t.colors.grayscale.light5};
    text-align: left;
    position: relative;
    width: 100%;
    max-height: 100%;
    min-height: 0;
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
    border-top: 1px solid ${t.colors.grayscale.light2};
    .explore-column {
      display: flex;
      flex-direction: column;
      padding: ${2*t.gridUnit}px 0;
      max-height: 100%;
    }
    .data-source-selection {
      background-color: ${t.colors.grayscale.light5};
      padding: ${2*t.gridUnit}px 0;
      border-right: 1px solid ${t.colors.grayscale.light2};
    }
    .main-explore-content {
      flex: 1;
      min-width: ${128*t.gridUnit}px;
      border-left: 1px solid ${t.colors.grayscale.light2};
      padding: 0 ${4*t.gridUnit}px;
      .panel {
        margin-bottom: 0;
      }
    }
    .controls-column {
      align-self: flex-start;
      padding: 0;
    }
    .title-container {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 0 ${2*t.gridUnit}px 0 ${4*t.gridUnit}px;
      justify-content: space-between;
      .horizontal-text {
        font-size: ${t.typography.sizes.m}px;
      }
    }
    .no-show {
      display: none;
    }
    .vertical-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
    .sidebar {
      height: 100%;
      background-color: ${t.colors.grayscale.light4};
      padding: ${2*t.gridUnit}px;
      width: ${8*t.gridUnit}px;
    }
    .collapse-icon > svg {
      color: ${t.colors.primary.base};
    }
  `}};
`,ua=C()((async(e,t,a,r,o,n,s,i)=>{const l={...e},c=e.slice_id,d={};c?d[h.KD.sliceId.name]=c:(d[h.KD.datasourceId.name]=t,d[h.KD.datasourceType.name]=a);const p=(null==l?void 0:l.url_params)||{};Object.entries(p).forEach((e=>{let[t,a]=e;T()(h.$O).call(h.$O,t)||(d[t]=a)}));try{let p,m;if(r?(p=await(0,J.nv)(t,a,e,c,i),m="replaceState"):(p=(0,u.eY)(h.KD.formDataKey),await(0,J.LW)(t,a,p,e,c,i),m="pushState"),window.location.pathname.startsWith("/explore")){const e=(0,X.y8)(o?h.KD.standalone.name:null,{[h.KD.formDataKey.name]:p,...d},n);window.history[m](l,s,e)}}catch(e){O.Z.warn("Failed at altering browser history",e)}}),1e3);function ha(e){var t;const a=(0,U.gp)().dynamicPlugins[e.vizType],o=a&&a.mounting,n=(0,z.D)(o),s=(0,z.D)(e.controls),[i,c]=(0,r.useState)(e.controls),[d,p]=(0,r.useState)(!1),[m,g]=(0,r.useState)(!1),[v,f]=(0,r.useState)(-1),b=(0,re.z)(),y=(0,$.Fg)(),S={controls_width:320,datasource_width:300},_=(0,r.useCallback)((async function(t){let{isReplace:a=!1,title:r}=void 0===t?{}:t;const o=e.dashboardId?{...e.form_data,dashboardId:e.dashboardId}:e.form_data,{id:n,type:s}=e.datasource;ua(o,n,s,a,e.standalone,e.force,r,b)}),[e.dashboardId,e.form_data,e.datasource.id,e.datasource.type,e.standalone,e.force,b]),Z=(0,r.useCallback)((()=>{const t=window.history.state;t&&Object.keys(t).length&&(e.actions.setExploreControls(t),e.actions.postChartFormData(t,e.force,e.timeout,e.chart.id))}),[e.actions,e.chart.id,e.timeout]),C=(0,r.useCallback)((()=>{e.actions.setForceQuery(!1),e.actions.triggerQuery(!0,e.chart.id),_(),c(e.controls)}),[e.controls,_,e.actions,e.chart.id]),k=(0,r.useCallback)((t=>{if(t.ctrlKey||t.metaKey){const a="Enter"===t.key||13===t.keyCode,r="s"===t.key||83===t.keyCode;a?C():r&&e.slice&&e.actions.saveSlice(e.form_data,{action:"overwrite",slice_id:e.slice.slice_id,slice_name:e.slice.slice_name,add_to_dash:"noSave",goto_dash:!1}).then((e=>{let{data:t}=e;window.location=t.slice.slice_url}))}}),[C,e.actions,e.form_data,e.slice]);function N(){p(!d)}function D(){g(!m)}(0,j.J)((()=>{e.actions.logEvent(P.$b)})),(0,A.S)(b,((e,t)=>{t&&_({isReplace:!0})}));const I=(0,z.D)(Z);(0,r.useEffect)((()=>(I&&window.removeEventListener("popstate",I),window.addEventListener("popstate",Z),()=>{window.removeEventListener("popstate",Z)})),[Z,I]);const O=(0,z.D)(k);(0,r.useEffect)((()=>(O&&window.removeEventListener("keydown",O),document.addEventListener("keydown",k),()=>{document.removeEventListener("keydown",k)})),[k,O]),(0,r.useEffect)((()=>{n&&!o&&e.actions.dynamicPluginControlsReady()}),[o]),(0,r.useEffect)((()=>{Object.values(e.controls).some((e=>e.validationErrors&&e.validationErrors.length>0))||e.actions.triggerQuery(!0,e.chart.id)}),[]);const Q=(0,r.useCallback)((t=>{const a=t?{...e.chart.latestQueryFormData,...(0,ee.Hu)(x()(e.controls,t))}:(0,ee.Hu)(e.controls);e.actions.updateQueryFormData(a,e.chart.id),e.actions.renderTriggered((new Date).getTime(),e.chart.id),_()}),[_,e.actions,e.chart.id,e.chart.latestQueryFormData,e.controls]);(0,r.useEffect)((()=>{if(s&&e.chart.latestQueryFormData.viz_type===e.controls.viz_type.value){!e.controls.datasource||null!=s.datasource&&e.controls.datasource.value===s.datasource.value||(0,V.QR)(e.form_data.datasource,!0);const t=Object.keys(e.controls).filter((t=>void 0!==s[t]&&!(0,L.JB)(e.controls[t].value,s[t].value))).filter((t=>e.controls[t].renderTrigger));t.length>0&&Q(t)}}),[e.controls,e.ownState]);const K=(0,r.useMemo)((()=>!!i&&Object.keys(e.controls).filter((t=>void 0!==i[t]&&!(0,L.JB)(e.controls[t].value,i[t].value))).some((t=>!e.controls[t].renderTrigger&&!e.controls[t].dontRefreshOnChange))),[i,e.controls]),B=(0,u.eY)(h.KD.saveAction);(0,A.S)(B,(()=>{var e;T()(e=["saveas","overwrite"]).call(e,B)&&(C(),_({isReplace:!0}))})),(0,r.useEffect)((()=>{void 0!==e.ownState&&(C(),Q())}),[e.ownState]),K&&e.actions.logEvent(P.Ep);const W=(0,r.useMemo)((()=>{const t=Object.values(e.controls).filter((e=>e.validationErrors&&e.validationErrors.length>0));if(0===t.length)return null;const a=t.map((e=>e.validationErrors)),r=[...new Set(a.flat())].map((e=>[t.filter((t=>{var a;return null==(a=t.validationErrors)?void 0:T()(a).call(a,e)})).map((e=>e.label)),e])).map((e=>{let[t,a]=e;return(0,E.tZ)("div",{key:a},t.length>1?(0,l.t)("Controls labeled "):(0,l.t)("Control labeled "),(0,E.tZ)("strong",null,` ${t.join(", ")}`),(0,E.tZ)("span",null,": ",a))}));let o;return r.length>0&&(o=(0,E.tZ)("div",{style:{textAlign:"left"}},r)),o}),[e.controls]);function Y(){return(0,E.tZ)(Fe,w()({},e,{errorMessage:W,chartIsStale:K,onQuery:C}))}function J(e){return(0,F.rV)(e,S[e])}function G(e,t){const a=Number(J(e))+t.width;(0,F.LS)(e,a)}return e.standalone?Y():(0,E.tZ)(ca,null,(0,E.tZ)(ia,{actions:e.actions,canOverwrite:e.can_overwrite,canDownload:e.can_download,dashboardId:e.dashboardId,isStarred:e.isStarred,slice:e.slice,sliceName:e.sliceName,table_name:e.table_name,formData:e.form_data,chart:e.chart,ownState:e.ownState,user:e.user,reports:e.reports,onSaveChart:N,saveDisabled:W||"loading"===e.chart.chartStatus}),(0,E.tZ)(da,{id:"explore-container"},(0,E.tZ)(E.xB,{styles:E.iv`
            .navbar {
              margin-bottom: 0;
            }
            body {
              height: 100vh;
              max-height: 100vh;
              overflow: hidden;
            }
            #app-menu,
            #app {
              flex: 1 1 auto;
            }
            #app {
              flex-basis: 100%;
              overflow: hidden;
              height: 100%;
            }
            #app-menu {
              flex-shrink: 0;
            }
          `}),d&&(0,E.tZ)(ft,{addDangerToast:e.addDangerToast,onHide:N,actions:e.actions,form_data:e.form_data,sliceName:e.sliceName,dashboardId:e.dashboardId,sliceDashboards:null!=(t=e.exploreState.sliceDashboards)?t:[]}),(0,E.tZ)(R.e,{onResizeStop:(e,t,a,r)=>{f(null==r?void 0:r.width),G(F.dR.datasource_width,r)},defaultSize:{width:J(F.dR.datasource_width),height:"100%"},minWidth:S[F.dR.datasource_width],maxWidth:"33%",enable:{right:!0},className:m?"no-show":"explore-column data-source-selection"},(0,E.tZ)("div",{className:"title-container"},(0,E.tZ)("span",{className:"horizontal-text"},(0,l.t)("Chart Source")),(0,E.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:D},(0,E.tZ)(q.Z.Expand,{className:"collapse-icon",iconColor:y.colors.primary.base,iconSize:"l"}))),(0,E.tZ)(Ut,{formData:e.form_data,datasource:e.datasource,controls:e.controls,actions:e.actions,shouldForceUpdate:v,user:e.user})),m?(0,E.tZ)("div",{className:"sidebar",onClick:D,role:"button",tabIndex:0},(0,E.tZ)("span",{role:"button",tabIndex:0,className:"action-button"},(0,E.tZ)(M.u,{title:(0,l.t)("Open Datasource tab")},(0,E.tZ)(q.Z.Collapse,{className:"collapse-icon",iconColor:y.colors.primary.base,iconSize:"l"})))):null,(0,E.tZ)(R.e,{onResizeStop:(e,t,a,r)=>G(F.dR.controls_width,r),defaultSize:{width:J(F.dR.controls_width),height:"100%"},minWidth:S[F.dR.controls_width],maxWidth:"33%",enable:{right:!0},className:"col-sm-3 explore-column controls-column"},(0,E.tZ)(ot,{exploreState:e.exploreState,actions:e.actions,form_data:e.form_data,controls:e.controls,chart:e.chart,datasource_type:e.datasource_type,isDatasourceMetaLoading:e.isDatasourceMetaLoading,onQuery:C,onStop:function(){e.chart&&e.chart.queryController&&e.chart.queryController.abort()},canStopQuery:e.can_add||e.can_overwrite,errorMessage:W,chartIsStale:K})),(0,E.tZ)("div",{className:H()("main-explore-content",m?"col-sm-9":"col-sm-7")},Y())))}ha.propTypes=la;const pa=(0,o.$j)((function(e){var t,a,r,o,n,s,i,l;const{explore:c,charts:d,common:u,impressionId:h,dataMask:p,reports:m,user:g}=e,{controls:v,slice:f,datasource:b}=c,y=(0,ee.Hu)(v),S=null!=(t=null!=(a=y.slice_id)?a:null==f?void 0:f.slice_id)?t:0;y.extra_form_data=(0,Y.on)({...y.extra_form_data},{...null==(r=p[S])?void 0:r.ownState});const w=d[S];let _=Number(null==(o=c.form_data)?void 0:o.dashboardId);return Number.isNaN(_)&&(_=void 0),{isDatasourceMetaLoading:c.isDatasourceMetaLoading,datasource:b,datasource_type:b.type,datasourceId:b.datasource_id,dashboardId:_,controls:c.controls,can_add:!!c.can_add,can_download:!!c.can_download,can_overwrite:!!c.can_overwrite,column_formats:null!=(n=null==b?void 0:b.column_formats)?n:null,containerId:f?`slice-container-${f.slice_id}`:"slice-container",isStarred:c.isStarred,slice:f,sliceName:null!=(s=null!=(i=c.sliceName)?i:null==f?void 0:f.slice_name)?s:null,triggerRender:c.triggerRender,form_data:y,table_name:b.table_name,vizType:y.viz_type,standalone:!!c.standalone,force:!!c.force,chart:w,timeout:u.conf.SUPERSET_WEBSERVER_TIMEOUT,ownState:null==(l=p[S])?void 0:l.ownState,impressionId:h,user:g,exploreState:c,reports:m}}),(function(e){const t={...te,...G.yn,...ae,...B,...Q};return{actions:(0,I.DE)(t,e)}}))((0,oe.ZP)(ha));a(65634);(0,l.t)("Chart Options"),(0,l.t)("Use Area Proportions"),(0,l.t)("Check if the Rose Chart should use segment area instead of segment radius for proportioning"),(0,l.t)("Stacked Style"),(0,l.t)("Chart Options"),(0,l.t)("Chart Options"),(0,l.t)("Columns"),(0,l.t)("Columns to display"),ie.i9.Table;const ma={form_data:{datasource:"0__table",viz_type:"table"},dataset:{id:0,type:ie.i9.Table,columns:[],metrics:[],column_format:{},verbose_map:{},main_dttm_col:"",owners:[],datasource_name:"missing_datasource",name:"missing_datasource",description:null},slice:null};var ga=a(46306),va=a(5364),fa=a(69856);const ba=function(e,t){void 0===t&&(t="where");const a={clause:t.toUpperCase(),expressionType:"SIMPLE",operator:e.op,subject:e.col,comparator:"val"in e?e.val:void 0};return e.isExtra&&Object.assign(a,{isExtra:!0,filterOptionName:`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}),a};function ya(){const[e,t]=(0,r.useState)(!1),a=(0,r.useRef)(!1),v=(0,o.I0)(),S=(0,n.TH)();return(0,r.useEffect)((()=>{const e=function(e){return void 0===e&&(e=window.location),new URLSearchParams(Object.entries({...b(e.search),...(t=e.pathname,Object.keys(f).reduce(((e,a)=>{const r=new RegExp(`/(${a})/(\\w+)`),o=t.match(r);return o&&o[2]?{...e,[f[a]]:o[2]}:e}),{}))}).map((e=>e.join("="))).join("&"));var t}(S),r=!!(0,u.eY)(h.KD.saveAction),o=(()=>{const e=(0,u.eY)(h.KD.dashboardPageId),t=(0,u.eY)(h.KD.sliceId)||0;let a={};if(e){const{labelColors:r,sharedLabelColors:o,colorScheme:n,chartConfiguration:s,nativeFilters:i,filterBoxFilters:l,dataMask:c,dashboardId:d}=(0,F.rV)(F.dR.dashboard__explore_context,{})[e]||{};return a=(0,m.Z)({chart:{id:t},filters:(0,g._f)(t,l),nativeFilters:i,chartConfiguration:s,colorScheme:n,dataMask:c,labelColors:r,sharedLabelColors:o,sliceId:t,allSliceIds:[t],extraControls:{}}),Object.assign(a,{dashboardId:d}),a}return{}})();a.current&&!r||(async e=>{try{const t=await(0,i.Z)({method:"GET",endpoint:"api/v1/explore/"})(e);if((e=>{var t,a,r,o;return(null==e||null==(t=e.result)?void 0:t.form_data)&&(null==e||null==(a=e.result)?void 0:a.dataset)&&(0,s.Z)(null==e||null==(r=e.result)||null==(o=r.dataset)?void 0:o.id)})(t))return t;throw new Error((0,l.t)("Failed to load chart data."))}catch(e){const t=await(0,p.O)(e);throw new Error(t.message||t.error||(0,l.t)("Failed to load chart data."))}})(e).then((e=>{let{result:t}=e;const a=((e,t)=>{const a=((e,t)=>{const a={__time_range:"time_range",__time_col:"granularity_sqla",__time_grain:"time_grain_sqla",__granularity:"granularity"},r={},o={};return(0,le.Z)(t.extra_filters).forEach((e=>{if(a[e.col])e.val!==fa.vM&&(o[a[e.col]]=e.val,r[e.col]=e.val);else{const t=ba({...e,isExtra:!0});o.adhoc_filters=[...(0,le.Z)(o.adhoc_filters),t]}})),o.applied_time_extras=r,o})(0,t),r=((e,t)=>{const a={},r=t.extra_form_data||{};Object.entries(va.gn).forEach((e=>{let[t,o]=e;const n=r[t];(0,s.Z)(n)&&(a[o]=n)})),"time_grain_sqla"in r&&(a.time_grain_sqla=r.time_grain_sqla),"granularity_sqla"in r&&(a.granularity_sqla=r.granularity_sqla);const o=t.extras||{};va.fn.forEach((e=>{const t=r[e];(0,s.Z)(t)&&(o[e]=t)})),Object.keys(o).length&&(a.extras=o),a.adhoc_filters=(0,le.Z)(r.adhoc_filters).map((e=>({...e,isExtra:!0})));const n=(0,le.Z)(r.filters).map((e=>ba({...e,isExtra:!0})));return Object.keys(e).forEach((e=>{e.match(/adhoc_filter.*/)&&(a[e]=[...(0,le.Z)(a[e]),...n])})),a})(e,t),o=[...Object.keys(e),...Object.keys(a),...Object.keys(r)].filter((e=>e.match(/adhoc_filter.*/))).reduce(((t,o)=>{return{...t,[o]:(n=[...(0,le.Z)(e[o]),...(0,le.Z)(a[o]),...(0,le.Z)(r[o])],n.reduce(((e,t)=>{var a;return a=t,e.some((e=>(0,ga.jz)(e)&&(0,ga.jz)(a)&&e.clause===a.clause&&e.sqlExpression===a.sqlExpression||(0,ga.Ki)(e)&&(0,ga.Ki)(a)&&e.operator===a.operator&&e.subject===a.subject&&(!("comparator"in e)&&!("comparator"in a)||"comparator"in e&&"comparator"in a&&Lt()(e.comparator,a.comparator))))||e.push(t),e}),[]))};var n}),{});return{...e,...t,...a,...r,...o}})(t.form_data,o);v((0,y.u)({...t,form_data:a}))})).catch((e=>{v((0,y.u)(ma)),v((0,d.Gb)(e.message))})).finally((()=>{t(!0),a.current=!0}))}),[v,S]),e?(0,E.tZ)(pa,null):(0,E.tZ)(c.Z,null)}}}]);
//# sourceMappingURL=c6cc29820125c05aea30.chunk.js.map