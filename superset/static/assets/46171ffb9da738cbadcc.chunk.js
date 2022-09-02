"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1722],{74435:(e,t,r)=>{r.d(t,{Z:()=>de});var a=r(37703),n=r(14890),i=r(52256),o=r(97381),s=r(5872),l=r.n(s),d=r(45697),c=r.n(d),u=r(67294),p=r(61988),h=r(51995),m=r(68492),g=r(55786),b=r(91877),f=r(93185),y=r(9531),v=r(38703),Z=r(94301),S=r(57902),x=r(3741),C=r(27600),w=r(23525),k=r(42190),T=r(18446),D=r.n(T),$=r(42933),R=r.n($),I=r(16355),_=r(88274),M=r(11965),F=r(83862),E=r(4715);const U=h.iK.span`
  ${e=>{let{theme:t}=e;return`\n    font-weight: ${t.typography.weights.bold};\n    color: ${t.colors.primary.base};\n  `}}
`,q=(e,t)=>{let{id:r,onSelection:a,onClose:n}=e;const[i,o]=(0,u.useState)({filters:[],clientX:0,clientY:0}),s=(0,M.tZ)(F.v,null,i.filters.map(((e,t)=>(0,M.tZ)(F.v.Item,{key:t,onClick:()=>a([e])},`${(0,p.t)("Drill to detail by")} `,(0,M.tZ)(U,null,e.formattedVal)))),0===i.filters.length&&(0,M.tZ)(F.v.Item,{key:"none",onClick:()=>a([])},(0,p.t)("Drill to detail")),i.filters.length>1&&(0,M.tZ)(F.v.Item,{key:"all",onClick:()=>a(i.filters)},`${(0,p.t)("Drill to detail by")} `,(0,M.tZ)(U,null,(0,p.t)("all")))),l=(0,u.useCallback)(((e,t,a)=>{var n;const i=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),s=32*(e.length+1)+32;o({filters:e,clientX:t,clientY:i-a<s?i-s:a}),null==(n=document.getElementById(`hidden-span-${r}`))||n.click()}),[r]);return(0,u.useImperativeHandle)(t,(()=>({open:l})),[l]),(0,M.tZ)(E.Gj,{overlay:s,trigger:["click"],onVisibleChange:e=>!e&&n()},(0,M.tZ)("span",{id:`hidden-span-${r}`,css:(0,M.iv)({visibility:"hidden",position:"fixed",top:i.clientY,left:i.clientX,width:1,height:1},"","")}))},z=(0,u.forwardRef)(q);var N=r(5977),O=r(49378),A=r(37936),P=r(74069),j=r(35932);const V=e=>{let{chartId:t,initialFilters:r,formData:n}=e;const[i,o]=(0,u.useState)(!1),s=(0,u.useCallback)((()=>o(!0)),[]),l=(0,u.useCallback)((()=>o(!1)),[]),d=(0,N.k6)(),c=(0,h.Fg)(),m=(0,u.useContext)(A.DashboardPageIdContext),{slice_name:g}=(0,a.v9)((e=>e.sliceEntities.slices[t])),b=(0,u.useMemo)((()=>`/explore/?dashboard_page_id=${m}&slice_id=${t}`),[t,m]),f=(0,u.useCallback)((()=>{d.push(b)}),[b,d]);return(0,u.useEffect)((()=>{r&&s()}),[r,s]),(0,M.tZ)(P.Z,{css:M.iv`
        .ant-modal-body {
          display: flex;
          flex-direction: column;
        }
      `,show:i,onHide:l,title:(0,p.t)("Drill to detail: %s",g),footer:(0,M.tZ)(u.Fragment,null,(0,M.tZ)(j.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:f},(0,p.t)("Edit chart")),(0,M.tZ)(j.Z,{buttonStyle:"primary",buttonSize:"small",onClick:l},(0,p.t)("Close"))),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*c.gridUnit,minWidth:128*c.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0},(0,M.tZ)(O.Z,{formData:n,initialFilters:r}))},B={annotationData:c().object,actions:c().object,chartId:c().number.isRequired,datasource:c().object,initialValues:c().object,formData:c().object.isRequired,latestQueryFormData:c().object,labelColors:c().object,sharedLabelColors:c().object,height:c().number,width:c().number,setControlValue:c().func,vizType:c().string.isRequired,triggerRender:c().bool,chartAlert:c().string,chartStatus:c().string,queriesResponse:c().arrayOf(c().object),triggerQuery:c().bool,chartIsStale:c().bool,addFilter:c().func,setDataMask:c().func,onFilterMenuOpen:c().func,onFilterMenuClose:c().func,ownState:c().object,postTransformProps:c().func,source:c().oneOf(["dashboard","explore"])},H={},K=[I.cg.INTERACTIVE_CHART],L={addFilter:()=>H,onFilterMenuOpen:()=>H,onFilterMenuClose:()=>H,initialValues:H,setControlValue(){},triggerRender:!1};class Q extends u.Component{constructor(e){super(e),this.state={inContextMenu:!1,drillDetailFilters:null},this.hasQueryResponseChange=!1,this.contextMenuRef=u.createRef(),this.handleAddFilter=this.handleAddFilter.bind(this),this.handleRenderSuccess=this.handleRenderSuccess.bind(this),this.handleRenderFailure=this.handleRenderFailure.bind(this),this.handleSetControlValue=this.handleSetControlValue.bind(this),this.handleOnContextMenu=this.handleOnContextMenu.bind(this),this.handleContextMenuSelected=this.handleContextMenuSelected.bind(this),this.handleContextMenuClosed=this.handleContextMenuClosed.bind(this);const t="dashboard"===e.source&&(0,f.c)(f.T.DRILL_TO_DETAIL);this.hooks={onAddFilter:this.handleAddFilter,onContextMenu:t?this.handleOnContextMenu:void 0,onError:this.handleRenderFailure,setControlValue:this.handleSetControlValue,onFilterMenuOpen:this.props.onFilterMenuOpen,onFilterMenuClose:this.props.onFilterMenuClose,setDataMask:e=>{var t;null==(t=this.props.actions)||t.updateDataMask(this.props.chartId,e)}}}shouldComponentUpdate(e,t){var r,a;return!(!(e.queriesResponse&&["success","rendered"].indexOf(e.chartStatus)>-1)||null!=(r=e.queriesResponse)&&null!=(a=r[0])&&a.error)&&(!D()(this.state,t)||(this.hasQueryResponseChange=e.queriesResponse!==this.props.queriesResponse,this.hasQueryResponseChange||!D()(e.datasource,this.props.datasource)||e.annotationData!==this.props.annotationData||e.ownState!==this.props.ownState||e.filterState!==this.props.filterState||e.height!==this.props.height||e.width!==this.props.width||e.triggerRender||e.labelColors!==this.props.labelColors||e.sharedLabelColors!==this.props.sharedLabelColors||e.formData.color_scheme!==this.props.formData.color_scheme||e.formData.stack!==this.props.formData.stack||e.cacheBusterProp!==this.props.cacheBusterProp))}handleAddFilter(e,t,r,a){void 0===r&&(r=!0),void 0===a&&(a=!0),this.props.addFilter(e,t,r,a)}handleRenderSuccess(){const{actions:e,chartStatus:t,chartId:r,vizType:a}=this.props;["loading","rendered"].indexOf(t)<0&&e.chartRenderingSucceeded(r),this.hasQueryResponseChange&&e.logEvent(x.aD,{slice_id:r,viz_type:a,start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleRenderFailure(e,t){const{actions:r,chartId:a}=this.props;m.Z.warn(e),r.chartRenderingFailed(e.toString(),a,t?t.componentStack:null),this.hasQueryResponseChange&&r.logEvent(x.aD,{slice_id:a,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleSetControlValue(){const{setControlValue:e}=this.props;e&&e(...arguments)}handleOnContextMenu(e,t,r){this.contextMenuRef.current.open(e,t,r),this.setState({inContextMenu:!0})}handleContextMenuSelected(e){this.setState({inContextMenu:!1,drillDetailFilters:e})}handleContextMenuClosed(){this.setState({inContextMenu:!1})}render(){const{chartAlert:e,chartStatus:t,chartId:r}=this.props;if("loading"===t||e||null===t)return null;this.renderStartTime=x.Yd.getTimestamp();const{width:a,height:n,datasource:i,annotationData:o,initialValues:s,ownState:l,filterState:d,chartIsStale:c,formData:h,latestQueryFormData:m,queriesResponse:g,postTransformProps:b}=this.props,f=c&&m?m:h,y=f.viz_type||this.props.vizType,v=R()(y),S="table"===y?`superset-chart-${v}`:v;let C;const w=(0,p.t)("No results were returned for this query"),k="explore"===this.props.source?(0,p.t)("Make sure that the controls are configured properly and the datasource contains data for the selected time range"):void 0,T="chart.svg";return C=a>300&&n>220?(0,M.tZ)(Z.XJ,{title:w,description:k,image:T}):(0,M.tZ)(Z.Tc,{title:w,image:T}),(0,M.tZ)("div",null,"dashboard"===this.props.source&&(0,M.tZ)(u.Fragment,null,(0,M.tZ)(z,{ref:this.contextMenuRef,id:r,onSelection:this.handleContextMenuSelected,onClose:this.handleContextMenuClosed}),(0,M.tZ)(V,{chartId:r,initialFilters:this.state.drillDetailFilters,formData:f})),(0,M.tZ)(_.Z,{disableErrorBoundary:!0,key:`${r}`,id:`chart-id-${r}`,className:S,chartType:y,width:a,height:n,annotationData:o,datasource:i,initialValues:s,formData:f,ownState:l,filterState:d,hooks:this.hooks,behaviors:K,queriesData:g,onRenderSuccess:this.handleRenderSuccess,onRenderFailure:this.handleRenderFailure,noResults:C,postTransformProps:b,inContextMenu:this.state.inContextMenu}))}}Q.propTypes=B,Q.defaultProps=L;const W=Q;var J=r(54804),G=r(72875);const Y=e=>{let{chartId:t,error:r,...a}=e;const{result:n}=(0,J.hb)(t),i=r&&{...r,extra:{...r.extra,owners:n}};return(0,M.tZ)(G.Z,l()({},a,{error:i}))};var X=r(75701);const ee={annotationData:c().object,actions:c().object,chartId:c().number.isRequired,datasource:c().object,dashboardId:c().number,initialValues:c().object,formData:c().object.isRequired,labelColors:c().object,sharedLabelColors:c().object,width:c().number,height:c().number,setControlValue:c().func,timeout:c().number,vizType:c().string.isRequired,triggerRender:c().bool,force:c().bool,isFiltersInitialized:c().bool,isDeactivatedViz:c().bool,chartAlert:c().string,chartStatus:c().string,chartStackTrace:c().string,queriesResponse:c().arrayOf(c().object),triggerQuery:c().bool,chartIsStale:c().bool,errorMessage:c().node,addFilter:c().func,onQuery:c().func,onFilterMenuOpen:c().func,onFilterMenuClose:c().func,ownState:c().object,postTransformProps:c().func,datasetsStatus:c().oneOf(["loading","error","complete"])},te={},re=(0,p.t)("The dataset associated with this chart no longer exists"),ae={addFilter:()=>te,onFilterMenuOpen:()=>te,onFilterMenuClose:()=>te,initialValues:te,setControlValue(){},triggerRender:!1,dashboardId:null,chartStackTrace:null,isDeactivatedViz:!1,force:!1},ne=h.iK.div`
  min-height: ${e=>e.height}px;
  position: relative;

  .chart-tooltip {
    opacity: 0.75;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  }

  .slice_container {
    height: ${e=>e.height}px;

    .pivot_table tbody tr {
      font-feature-settings: 'tnum' 1;
    }
  }
`,ie=h.iK.div`
  font-family: ${e=>{let{theme:t}=e;return t.typography.families.monospace}};
  word-break: break-word;
  overflow-x: auto;
  white-space: pre-wrap;
`;class oe extends u.PureComponent{constructor(e){super(e),this.handleRenderContainerFailure=this.handleRenderContainerFailure.bind(this)}componentDidMount(){this.props.triggerQuery&&"UNDECIDED"!==this.props.filterboxMigrationState&&this.runQuery()}componentDidUpdate(){if(this.props.triggerQuery&&"UNDECIDED"!==this.props.filterboxMigrationState){if(this.props.isDeactivatedViz&&this.props.queriesResponse)return;this.runQuery()}}runQuery(){this.props.chartId>0&&(0,b.cr)(f.T.CLIENT_CACHE)?this.props.actions.getSavedChart(this.props.formData,this.props.force||(0,w.eY)(C.KD.force),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState):this.props.actions.postChartFormData(this.props.formData,this.props.force||(0,w.eY)(C.KD.force),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState)}handleRenderContainerFailure(e,t){const{actions:r,chartId:a}=this.props;m.Z.warn(e),r.chartRenderingFailed(e.toString(),a,t?t.componentStack:null),r.logEvent(x.aD,{slice_id:a,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}renderErrorMessage(e){var t;const{chartId:r,chartAlert:a,chartStackTrace:n,datasource:i,dashboardId:o,height:s,datasetsStatus:l}=this.props,d=null==e||null==(t=e.errors)?void 0:t[0],c=a||(null==e?void 0:e.message);return void 0!==a&&a!==re&&i===y.tw&&l!==k.ni.ERROR?(0,M.tZ)(ne,{key:r,"data-ui-anchor":"chart",className:"chart-container",height:s},(0,M.tZ)(v.Z,null)):(0,M.tZ)(Y,{key:r,chartId:r,error:d,subtitle:(0,M.tZ)(ie,null,c),copyText:c,link:e?e.link:null,source:o?"dashboard":"explore",stackTrace:n})}render(){const{height:e,chartAlert:t,chartStatus:r,errorMessage:a,chartIsStale:n,queriesResponse:i=[],isDeactivatedViz:o=!1,width:s}=this.props,d="loading"===r;return this.renderContainerStartTime=x.Yd.getTimestamp(),"failed"===r?i.map((e=>this.renderErrorMessage(e))):a&&0===(0,g.Z)(i).length?(0,M.tZ)(Z.XJ,{title:(0,p.t)("Add required control values to preview chart"),description:(0,X.J)(!0),image:"chart.svg"}):d||t||a||!n||0!==(0,g.Z)(i).length?(0,M.tZ)(S.Z,{onError:this.handleRenderContainerFailure,showMessage:!1},(0,M.tZ)(ne,{"data-ui-anchor":"chart",className:"chart-container",height:e,width:s},(0,M.tZ)("div",{className:"slice_container"},(0,M.tZ)(W,l()({},this.props,{source:this.props.dashboardId?"dashboard":"explore"}))),d&&!o&&(0,M.tZ)(v.Z,null))):(0,M.tZ)(Z.XJ,{title:(0,p.t)("Your chart is ready to go!"),description:(0,M.tZ)("span",null,(0,p.t)('Click on "Create chart" button in the control panel on the left to preview a visualization or')," ",(0,M.tZ)("span",{role:"button",tabIndex:0,onClick:this.props.onQuery},(0,p.t)("click here")),"."),image:"chart.svg"})}}oe.propTypes=ee,oe.defaultProps=ae;const se=oe;var le=r(74599);const de=(0,a.$j)(null,(function(e){return{actions:(0,n.DE)({...i,updateDataMask:le.eG,logEvent:o.logEvent},e)}}))(se)},2275:(e,t,r)=>{r.d(t,{cP:()=>l,$6:()=>d,Rw:()=>c,Er:()=>u,DZ:()=>p,$X:()=>h,ck:()=>f});var a=r(45697),n=r.n(a),i=r(81255),o=r(713),s=r(79271);const l=n().shape({id:n().string.isRequired,type:n().oneOf(Object.values(i.ZP)).isRequired,parents:n().arrayOf(n().string),children:n().arrayOf(n().string),meta:n().shape({width:n().number,height:n().number,headerSize:n().oneOf(s.Z.map((e=>e.value))),background:n().oneOf(o.Z.map((e=>e.value))),chartId:n().number})}),d=n().shape({id:n().number.isRequired,chartAlert:n().string,chartStatus:n().string,chartUpdateEndTime:n().number,chartUpdateStartTime:n().number,latestQueryFormData:n().object,queryController:n().shape({abort:n().func}),queriesResponse:n().arrayOf(n().object),triggerQuery:n().bool,lastRendered:n().number}),c=n().shape({slice_id:n().number.isRequired,slice_url:n().string.isRequired,slice_name:n().string.isRequired,datasource:n().string,datasource_name:n().string,datasource_link:n().string,changed_on:n().number.isRequired,modified:n().string.isRequired,viz_type:n().string.isRequired,description:n().string,description_markeddown:n().string,owners:n().arrayOf(n().string)}),u=n().shape({chartId:n().number.isRequired,componentId:n().string.isRequired,filterName:n().string.isRequired,datasourceId:n().string.isRequired,directPathToFilter:n().arrayOf(n().string).isRequired,isDateFilter:n().bool.isRequired,isInstantFilter:n().bool.isRequired,columns:n().object,labels:n().object,scopes:n().object}),p=n().shape({sliceIds:n().arrayOf(n().number).isRequired,expandedSlices:n().object,editMode:n().bool,isPublished:n().bool.isRequired,colorNamespace:n().string,colorScheme:n().string,updatedColorScheme:n().bool,hasUnsavedChanges:n().bool}),h=n().shape({id:n().number.isRequired,metadata:n().object,slug:n().string,dash_edit_perm:n().bool.isRequired,dash_save_perm:n().bool.isRequired,common:n().object,userId:n().string.isRequired}),m=n().shape({value:n().oneOfType([n().number,n().string]).isRequired,label:n().string.isRequired}),g={value:n().oneOfType([n().number,n().string]).isRequired,label:n().string.isRequired,children:n().arrayOf(n().oneOfType([n().shape((b=()=>g,()=>b().apply(void 0,arguments))),m]))};var b;const f=n().oneOfType([n().shape(g),m])},94413:(e,t,r)=>{r.d(t,{ZN:()=>P,gT:()=>j});var a=r(78580),n=r.n(a),i=r(67294),o=r(37703),s=r(86504),l=r(53587),d=r(51995),c=r(11965),u=r(61988),p=r(83862),h=r(1304),m=r(35932),g=r(14114),b=r(12515),f=r(56727),y=r(23525),v=r(10222),Z=r(97634),S=r(91877),x=r(93185),C=r(15423),w=r(9875),k=r(13433),T=r(27600),D=r(50909);const $=(0,d.iK)(D.qi)`
  && {
    margin: 0 0 ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,R=e=>{let{formData:t,addDangerToast:r}=e;const[a,n]=(0,i.useState)("400"),[o,s]=(0,i.useState)("600"),[l,d]=(0,i.useState)(""),[p,h]=(0,i.useState)(""),m=(0,i.useCallback)((e=>{const{value:t,name:r}=e.currentTarget;"width"===r&&s(t),"height"===r&&n(t)}),[]),g=(0,i.useCallback)((()=>{d(""),(0,y.YE)(t).then((e=>{d(e),h("")})).catch((()=>{h((0,u.t)("Error")),r((0,u.t)("Sorry, something went wrong. Try again later."))}))}),[r,t]);(0,i.useEffect)((()=>{g()}),[]);const b=(0,i.useMemo)((()=>{if(!l)return"";const e=`${l}?${T.KD.standalone.name}=1&height=${a}`;return`<iframe\n  width="${o}"\n  height="${a}"\n  seamless\n  frameBorder="0"\n  scrolling="no"\n  src="${e}"\n>\n</iframe>`}),[a,l,o]),f=p||b||(0,u.t)("Generating link, please wait..");return(0,c.tZ)("div",{id:"embed-code-popover"},(0,c.tZ)("div",{css:c.iv`
          display: flex;
          flex-direction: column;
        `},(0,c.tZ)(k.Z,{shouldShowText:!1,text:b,copyNode:(0,c.tZ)($,{buttonSize:"xsmall"},(0,c.tZ)("i",{className:"fa fa-clipboard"}))}),(0,c.tZ)(w.Kx,{name:"embedCode",disabled:!b,value:f,rows:"4",readOnly:!0,css:e=>c.iv`
            resize: vertical;
            padding: ${2*e.gridUnit}px;
            font-size: ${e.typography.sizes.s}px;
            border-radius: 4px;
            background-color: ${e.colors.secondary.light5};
          `})),(0,c.tZ)("div",{css:e=>c.iv`
          display: flex;
          margin-top: ${4*e.gridUnit}px;
          & > div {
            margin-right: ${2*e.gridUnit}px;
          }
          & > div:last-of-type {
            margin-right: 0;
            margin-left: ${2*e.gridUnit}px;
          }
        `},(0,c.tZ)("div",null,(0,c.tZ)("label",{htmlFor:"embed-height"},(0,u.t)("Chart height")),(0,c.tZ)(w.II,{type:"text",defaultValue:a,name:"height",onChange:m})),(0,c.tZ)("div",null,(0,c.tZ)("label",{htmlFor:"embed-width"},(0,u.t)("Chart width")),(0,c.tZ)(w.II,{type:"text",defaultValue:o,name:"width",onChange:m,id:"embed-width"}))))},I="edit_properties",_="export_to_csv",M="export_to_csv_pivoted",F="export_to_json",E="download_as_image",U="copy_permalink",q="embed_code",z="share_by_email",N="view_query",O="run_in_sql_lab",A=["pivot_table","pivot_table_v2"],P=d.iK.div`
  ${e=>{let{theme:t}=e;return c.iv`
    display: flex;
    align-items: center;

    & svg {
      width: ${3*t.gridUnit}px;
      height: ${3*t.gridUnit}px;
    }

    & span[role='checkbox'] {
      display: inline-flex;
      margin-right: ${t.gridUnit}px;
    }
  `}}
`,j=((0,d.iK)(m.Z)`
  ${e=>{let{theme:t}=e;return c.iv`
    width: ${8*t.gridUnit}px;
    height: ${8*t.gridUnit}px;
    padding: 0;
    border: 1px solid ${t.colors.primary.dark2};

    &.ant-btn > span.anticon {
      line-height: 0;
      transition: inherit;
    }

    &:hover:not(:focus) > span.anticon {
      color: ${t.colors.primary.light1};
    }
  `}}
`,(e,t,r,a,m,w)=>{const k=(0,d.Fg)(),{addDangerToast:T,addSuccessToast:D}=(0,g.e1)(),[$,P]=(0,i.useState)(null),[j,V]=(0,i.useState)(!1),[B,H]=(0,i.useState)([]),K=(0,o.v9)((e=>{var t;return null==(t=e.charts)?void 0:t[(0,b.Jp)(e.explore)]})),{datasource:L}=e,Q=(0,i.useCallback)((async()=>{try{const t=(0,u.t)("Superset Chart"),r=await(0,y.YE)(e),a=encodeURIComponent((0,u.t)("%s%s","Check out this chart: ",r));window.location.href=`mailto:?Subject=${t}%20&Body=${a}`}catch(e){T((0,u.t)("Sorry, something went wrong. Try again later."))}}),[T,e]),W=(0,i.useCallback)((()=>t?(0,b.pe)({formData:e,ownState:w,resultType:"full",resultFormat:"csv"}):null),[t,e]),J=(0,i.useCallback)((()=>t?(0,b.pe)({formData:e,resultType:"post_processed",resultFormat:"csv"}):null),[t,e]),G=(0,i.useCallback)((()=>(0,b.pe)({formData:e,resultType:"results",resultFormat:"json"})),[e]),Y=(0,i.useCallback)((async()=>{try{if(!e)throw new Error;await(0,v.Z)((()=>(0,y.YE)(e))),D((0,u.t)("Copied to clipboard!"))}catch(e){T((0,u.t)("Sorry, something went wrong. Try again later."))}}),[T,D,e]),X=(0,i.useCallback)((t=>{var n;let{key:i,domEvent:o}=t;switch(i){case I:m(),V(!1);break;case _:W(),V(!1),H([]);break;case M:J(),V(!1),H([]);break;case F:G(),V(!1),H([]);break;case E:(0,f.Z)(".panel-body .chart-container",null!=(n=null==r?void 0:r.slice_name)?n:(0,u.t)("New chart"),!0)(o),V(!1),H([]);break;case U:Y(),V(!1),H([]);break;case q:V(!1),H([]);break;case z:Q(),V(!1),H([]);break;case N:V(!1);break;case O:a(e),V(!1)}}),[Y,W,J,G,e,a,m,Q,null==r?void 0:r.slice_name]);return[(0,i.useMemo)((()=>(0,c.tZ)(p.v,{onClick:X,selectable:!1,openKeys:B,onOpenChange:H},r&&(0,c.tZ)(i.Fragment,null,(0,c.tZ)(p.v.Item,{key:I},(0,u.t)("Edit chart properties")),(0,c.tZ)(p.v.Divider,null)),(0,c.tZ)(p.v.SubMenu,{title:(0,u.t)("Download"),key:"download_submenu"},n()(A).call(A,e.viz_type)?(0,c.tZ)(i.Fragment,null,(0,c.tZ)(p.v.Item,{key:_,icon:(0,c.tZ)(s.Z,null),disabled:!t},(0,u.t)("Export to original .CSV")),(0,c.tZ)(p.v.Item,{key:M,icon:(0,c.tZ)(s.Z,null),disabled:!t},(0,u.t)("Export to pivoted .CSV"))):(0,c.tZ)(p.v.Item,{key:_,icon:(0,c.tZ)(s.Z,null),disabled:!t},(0,u.t)("Export to .CSV")),(0,c.tZ)(p.v.Item,{key:F,icon:(0,c.tZ)(s.Z,null)},(0,u.t)("Export to .JSON")),(0,c.tZ)(p.v.Item,{key:E,icon:(0,c.tZ)(l.Z,null)},(0,u.t)("Download as image"))),(0,c.tZ)(p.v.SubMenu,{title:(0,u.t)("Share"),key:"share_submenu"},(0,c.tZ)(p.v.Item,{key:U},(0,u.t)("Copy permalink to clipboard")),(0,c.tZ)(p.v.Item,{key:z},(0,u.t)("Share chart by email")),(0,S.cr)(x.T.EMBEDDABLE_CHARTS)?(0,c.tZ)(p.v.Item,{key:q},(0,c.tZ)(h.Z,{triggerNode:(0,c.tZ)("span",null,(0,u.t)("Embed code")),modalTitle:(0,u.t)("Embed code"),modalBody:(0,c.tZ)(R,{formData:e,addDangerToast:T}),maxWidth:100*k.gridUnit+"px",destroyOnClose:!0,responsive:!0})):null),(0,c.tZ)(p.v.Divider,null),$?(0,c.tZ)(i.Fragment,null,(0,c.tZ)(p.v.SubMenu,{title:(0,u.t)("Manage email report")},(0,c.tZ)(Z.Z,{chart:K,setShowReportSubMenu:P,showReportSubMenu:$,setIsDropdownVisible:V,isDropdownVisible:j,useTextMenu:!0})),(0,c.tZ)(p.v.Divider,null)):(0,c.tZ)(p.v,null,(0,c.tZ)(Z.Z,{chart:K,setShowReportSubMenu:P,setIsDropdownVisible:V,isDropdownVisible:j,useTextMenu:!0})),(0,c.tZ)(p.v.Item,{key:N},(0,c.tZ)(h.Z,{triggerNode:(0,c.tZ)("span",null,(0,u.t)("View query")),modalTitle:(0,u.t)("View query"),modalBody:(0,c.tZ)(C.Z,{latestQueryFormData:e}),draggable:!0,resizable:!0,responsive:!0})),L&&(0,c.tZ)(p.v.Item,{key:O},(0,u.t)("Run in SQL Lab")))),[T,t,K,X,j,e,B,$,r,k.gridUnit]),j,V]})},9433:(e,t,r)=>{r.d(t,{CronPicker:()=>u});var a=r(5872),n=r.n(a),i=(r(67294),r(85631)),o=r(61988),s=r(51995),l=r(61247),d=r(11965);const c={everyText:(0,o.t)("every"),emptyMonths:(0,o.t)("every month"),emptyMonthDays:(0,o.t)("every day of the month"),emptyMonthDaysShort:(0,o.t)("day of the month"),emptyWeekDays:(0,o.t)("every day of the week"),emptyWeekDaysShort:(0,o.t)("day of the week"),emptyHours:(0,o.t)("every hour"),emptyMinutes:(0,o.t)("every minute"),emptyMinutesForHourPeriod:(0,o.t)("every"),yearOption:(0,o.t)("year"),monthOption:(0,o.t)("month"),weekOption:(0,o.t)("week"),dayOption:(0,o.t)("day"),hourOption:(0,o.t)("hour"),minuteOption:(0,o.t)("minute"),rebootOption:(0,o.t)("reboot"),prefixPeriod:(0,o.t)("Every"),prefixMonths:(0,o.t)("in"),prefixMonthDays:(0,o.t)("on"),prefixWeekDays:(0,o.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,o.t)("and"),prefixHours:(0,o.t)("at"),prefixMinutes:(0,o.t)(":"),prefixMinutesForHourPeriod:(0,o.t)("at"),suffixMinutesForHourPeriod:(0,o.t)("minute(s)"),errorInvalidCron:(0,o.t)("Invalid cron expression"),clearButtonText:(0,o.t)("Clear"),weekDays:[(0,o.t)("Sunday"),(0,o.t)("Monday"),(0,o.t)("Tuesday"),(0,o.t)("Wednesday"),(0,o.t)("Thursday"),(0,o.t)("Friday"),(0,o.t)("Saturday")],months:[(0,o.t)("January"),(0,o.t)("February"),(0,o.t)("March"),(0,o.t)("April"),(0,o.t)("May"),(0,o.t)("June"),(0,o.t)("July"),(0,o.t)("August"),(0,o.t)("September"),(0,o.t)("October"),(0,o.t)("November"),(0,o.t)("December")],altWeekDays:[(0,o.t)("SUN"),(0,o.t)("MON"),(0,o.t)("TUE"),(0,o.t)("WED"),(0,o.t)("THU"),(0,o.t)("FRI"),(0,o.t)("SAT")],altMonths:[(0,o.t)("JAN"),(0,o.t)("FEB"),(0,o.t)("MAR"),(0,o.t)("APR"),(0,o.t)("MAY"),(0,o.t)("JUN"),(0,o.t)("JUL"),(0,o.t)("AUG"),(0,o.t)("SEP"),(0,o.t)("OCT"),(0,o.t)("NOV"),(0,o.t)("DEC")]},u=(0,s.iK)((e=>(0,d.tZ)(i.ZP,{getPopupContainer:e=>e.parentElement},(0,d.tZ)(l.Z,n()({locale:c},e)))))`
  .react-js-cron-field {
    margin-bottom: 0px;
  }
  .react-js-cron-select:not(.react-js-cron-custom-select) > div:first-of-type,
  .react-js-cron-custom-select {
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}} !important;
  }
  .react-js-cron-custom-select > div:first-of-type {
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`},88694:(e,t,r)=>{r.d(t,{L:()=>c,$:()=>u});var a=r(5872),n=r.n(a),i=(r(67294),r(4715)),o=r(51995),s=r(11965);const l=o.iK.div`
  width: ${e=>{let{theme:t}=e;return.75*t.gridUnit}}px;
  height: ${e=>{let{theme:t}=e;return.75*t.gridUnit}}px;
  border-radius: 50%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};

  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
  display: inline-flex;
  position: relative;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};

    &::before,
    &::after {
      background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: ' ';
    width: ${e=>{let{theme:t}=e;return.75*t.gridUnit}}px;
    height: ${e=>{let{theme:t}=e;return.75*t.gridUnit}}px;
    border-radius: 50%;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }

  &::before {
    top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }

  &::after {
    bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,d=o.iK.div`
  display: flex;
  align-items: center;
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  padding-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,c=e=>{let{overlay:t,...r}=e;return(0,s.tZ)(i.Gj,n()({overlay:t},r),(0,s.tZ)(d,null,(0,s.tZ)(l,null)))},u=e=>(0,s.tZ)(i.Gj,n()({overlayStyle:{zIndex:99,animationDuration:"0s"}},e))},52564:(e,t,r)=>{r.d(t,{u:()=>x});var a=r(5872),n=r.n(a),i=r(67294),o=r(11965),s=r(51995),l=r(61988),d=r(4715),c=r(58593),u=r(99612);const p=e=>o.iv`
  display: flex;
  font-size: ${e.typography.sizes.xl}px;
  font-weight: ${e.typography.weights.bold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .dynamic-title,
  & .dynamic-title-input {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .dynamic-title {
    cursor: default;
  }
  & .dynamic-title-input {
    border: none;
    padding: 0;
    outline: none;

    &::placeholder {
      color: ${e.colors.grayscale.light1};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
  }
`,h=e=>{let{title:t,placeholder:r,onSave:a,canEdit:n,label:s}=e;const[d,h]=(0,i.useState)(!1),[m,g]=(0,i.useState)(t||""),b=(0,i.useRef)(null),[f,y]=(0,i.useState)(!1),{width:v,ref:Z}=(0,u.NB)(),{width:S,ref:x}=(0,u.NB)({refreshMode:"debounce"});(0,i.useEffect)((()=>{g(t)}),[t]),(0,i.useEffect)((()=>{if(d&&null!=b&&b.current&&(b.current.focus(),b.current.setSelectionRange)){const{length:e}=b.current.value;b.current.setSelectionRange(e,e),b.current.scrollLeft=b.current.scrollWidth}}),[d]),(0,i.useLayoutEffect)((()=>{null!=Z&&Z.current&&(Z.current.innerHTML=(m||r).replace(/\s/g,"&nbsp;"))}),[m,r,Z]),(0,i.useEffect)((()=>{b.current&&b.current.scrollWidth>b.current.clientWidth?y(!0):y(!1)}),[v,S]);const C=(0,i.useCallback)((()=>{n&&!d&&h(!0)}),[n,d]),w=(0,i.useCallback)((()=>{if(!n)return;const e=m.trim();g(e),t!==e&&a(e),h(!1)}),[n,m,a,t]),k=(0,i.useCallback)((e=>{n&&d&&g(e.target.value)}),[n,d]),T=(0,i.useCallback)((e=>{var t;n&&"Enter"===e.key&&(e.preventDefault(),null==(t=b.current)||t.blur())}),[n]);return(0,o.tZ)("div",{css:p,ref:x},(0,o.tZ)(c.u,{id:"title-tooltip",title:f&&m&&!d?m:null},n?(0,o.tZ)("input",{className:"dynamic-title-input","aria-label":null!=s?s:(0,l.t)("Title"),ref:b,onChange:k,onBlur:w,onClick:C,onKeyPress:T,placeholder:r,value:m,css:o.iv`
              cursor: ${d?"text":"pointer"};

              ${v&&v>0&&o.iv`
                width: ${v+1}px;
              `}
            `}):(0,o.tZ)("span",{className:"dynamic-title","aria-label":null!=s?s:(0,l.t)("Title"),ref:b},m)),(0,o.tZ)("span",{ref:Z,className:"input-sizer","aria-hidden":!0,tabIndex:-1}))};var m=r(79789),g=r(36674),b=r(70163),f=r(35932);const y=e=>o.iv`
  width: ${8*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
  padding: 0;
  border: 1px solid ${e.colors.primary.dark2};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }

  &:hover:not(:focus) > span.anticon {
    color: ${e.colors.primary.light1};
  }
`,v=e=>o.iv`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${e.colors.grayscale.light5};
  height: ${16*e.gridUnit}px;
  padding: 0 ${4*e.gridUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: ${12*e.gridUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,Z=e=>o.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*e.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${e.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,S=e=>o.iv`
  margin-left: ${2*e.gridUnit}px;
`,x=e=>{let{editableTitleProps:t,showTitlePanelItems:r,certificatiedBadgeProps:a,showFaveStar:i,faveStarProps:c,titlePanelAdditionalItems:u,rightPanelAdditionalItems:p,additionalActionsMenu:x,menuDropdownProps:C}=e;const w=(0,s.Fg)();return(0,o.tZ)("div",{css:v,className:"header-with-actions"},(0,o.tZ)("div",{className:"title-panel"},(0,o.tZ)(h,t),r&&(0,o.tZ)("div",{css:Z},(null==a?void 0:a.certifiedBy)&&(0,o.tZ)(m.Z,a),i&&(0,o.tZ)(g.Z,c),u)),(0,o.tZ)("div",{className:"right-button-panel"},p,(0,o.tZ)("div",{css:S},(0,o.tZ)(d.Gj,n()({trigger:["click"],overlay:x},C),(0,o.tZ)(f.Z,{css:y,buttonStyle:"tertiary","aria-label":(0,l.t)("Menu actions trigger")},(0,o.tZ)(b.Z.MoreHoriz,{iconColor:w.colors.primary.dark2,iconSize:"l"}))))))}},97634:(e,t,r)=>{r.d(t,{x:()=>G,Z:()=>ee});var a,n,i=r(11965),o=r(67294),s=r(60812),l=r(37703),d=r(93185),c=r(51995),u=r(61988),p=r(70163),h=r(12441),m=r(83862),g=r(87253),b=r(54076),f=r(88694),y=r(17198),v=r(78580),Z=r.n(v),S=r(98286),x=r(61358),C=r(29487),w=r(98978),k=r(87858),T=r(14114);!function(e){e.DASHBOARDS="dashboards",e.CHARTS="charts"}(a||(a={})),function(e){e.TEXT="TEXT",e.PNG="PNG",e.CSV="CSV"}(n||(n={}));var D=r(34858),$=r(74069),R=r(35932),I=r(87183),_=r(9433);const M=(0,c.iK)($.Z)`
  .ant-modal-body {
    padding: 0;
  }
`,F=c.iK.div`
  padding: ${e=>{let{theme:t}=e;return`${3*t.gridUnit}px ${4*t.gridUnit}px ${2*t.gridUnit}px`}};
  label {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,E=c.iK.div`
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  padding: ${e=>{let{theme:t}=e;return`${4*t.gridUnit}px ${4*t.gridUnit}px ${6*t.gridUnit}px`}};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,U=c.iK.span`
  span {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,q=c.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;

  h4 {
    margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  }
`,z=(0,c.iK)(_.CronPicker)`
  margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  width: ${e=>{let{theme:t}=e;return 120*t.gridUnit}}px;
`,N=c.iK.p`
  color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
`,O=i.iv`
  margin-bottom: 0;
`,A=(0,c.iK)(R.Z)`
  width: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px;
`,P=c.iK.div`
  margin: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px 0
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
`,j=(0,c.iK)(I.Y)`
  display: block;
  line-height: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
`,V=(0,c.iK)(I.Y.Group)`
  margin-left: ${e=>{let{theme:t}=e;return.5*t.gridUnit}}px;
`,B=["pivot_table","pivot_table_v2","table","paired_ttest"],H={crontab:"0 12 * * 1"},K=(0,T.ZP)((function(e){var t;let{onHide:r,show:a=!1,dashboardId:s,chart:d,userId:c,userEmail:h,creationMethod:m,dashboardName:g,chartName:b}=e;const f=null==d||null==(t=d.sliceFormData)?void 0:t.viz_type,y=!!d,v=y&&f&&Z()(B).call(B,f),T=v?n.TEXT:n.PNG,$=g||b,R=(0,o.useMemo)((()=>({...H,name:$?(0,u.t)("Weekly Report for %s",$):(0,u.t)("Weekly Report")})),[$]),I=(0,o.useCallback)(((e,t)=>"reset"===t?R:{...e,...t}),[R]),[_,K]=(0,o.useReducer)(I,R),[L,Q]=(0,o.useState)(),W=(0,l.I0)(),J=(0,l.v9)((e=>{const t=s?G.DASHBOARDS:G.CHARTS;return(0,D._l)(e,t,s||(null==d?void 0:d.id))})),Y=J&&Object.keys(J).length;(0,o.useEffect)((()=>{K(Y?J:"reset")}),[Y,J]);const X=(0,i.tZ)(U,null,(0,i.tZ)(p.Z.Calendar,null),(0,i.tZ)("span",{className:"text"},Y?(0,u.t)("Edit email report"):(0,u.t)("Schedule a new email report"))),ee=(0,i.tZ)(o.Fragment,null,(0,i.tZ)(A,{key:"back",onClick:r},(0,u.t)("Cancel")),(0,i.tZ)(A,{key:"submit",buttonStyle:"primary",onClick:async()=>{const e={type:"Report",active:!0,force_screenshot:!1,creation_method:m,dashboard:s,chart:null==d?void 0:d.id,owners:[c],recipients:[{recipient_config_json:{target:h},type:"Email"}],name:_.name,description:_.description,crontab:_.crontab,report_format:_.report_format||T,timezone:_.timezone};K({isSubmitting:!0,error:void 0});try{Y?await W((0,x.Me)(_.id,e)):await W((0,x.cq)(e)),r()}catch(e){const{error:t}=await(0,S.O)(e);K({error:t})}K({isSubmitting:!1})},disabled:!_.name,loading:_.isSubmitting},Y?(0,u.t)("Save"):(0,u.t)("Add"))),te=(0,i.tZ)(o.Fragment,null,(0,i.tZ)(P,null,(0,i.tZ)("h4",null,(0,u.t)("Message content"))),(0,i.tZ)("div",{className:"inline-container"},(0,i.tZ)(V,{onChange:e=>{K({report_format:e.target.value})},value:_.report_format||T},v&&(0,i.tZ)(j,{value:n.TEXT},(0,u.t)("Text embedded in email")),(0,i.tZ)(j,{value:n.PNG},(0,u.t)("Image (PNG) embedded in email")),(0,i.tZ)(j,{value:n.CSV},(0,u.t)("Formatted CSV attached in email")))));return(0,i.tZ)(M,{show:a,onHide:r,title:X,footer:ee,width:"432",centered:!0},(0,i.tZ)(F,null,(0,i.tZ)(k.Z,{id:"name",name:"name",value:_.name||"",placeholder:R.name,required:!0,validationMethods:{onChange:e=>{let{target:t}=e;return K({name:t.value})}},label:"Report Name"}),(0,i.tZ)(k.Z,{id:"description",name:"description",value:(null==_?void 0:_.description)||"",validationMethods:{onChange:e=>{let{target:t}=e;K({description:t.value})}},label:(0,u.t)("Description"),placeholder:(0,u.t)("Include a description that will be sent with your report"),css:O})),(0,i.tZ)(E,null,(0,i.tZ)(q,null,(0,i.tZ)("h4",{css:e=>(e=>i.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e)},(0,u.t)("Schedule")),(0,i.tZ)("p",null,(0,u.t)("A screenshot of the dashboard will be sent to your email at"))),(0,i.tZ)(z,{clearButton:!1,value:_.crontab||"0 12 * * 1",setValue:e=>{K({crontab:e})},onError:Q}),(0,i.tZ)(N,null,L),(0,i.tZ)("div",{className:"control-label",css:e=>(e=>i.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`)(e)},(0,u.t)("Timezone")),(0,i.tZ)(w.Z,{timezone:_.timezone,onTimezoneChange:e=>{K({timezone:e})}}),y&&te),_.error&&(0,i.tZ)(C.Z,{type:"error",css:e=>(e=>i.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px;
  margin-top: 0;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.m}px;
    font-weight: bold;
  }
  .ant-alert-description {
    font-size: ${e.typography.sizes.m}px;
    line-height: ${4*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),message:Y?(0,u.t)("Failed to update report"):(0,u.t)("Failed to create report"),description:_.error}))}));var L=r(94413);const Q=e=>i.iv`
  color: ${e.colors.error.base};
`,W=e=>i.iv`
  & .ant-menu-item {
    padding: 5px 12px;
    margin-top: 0px;
    margin-bottom: 4px;
    :hover {
      color: ${e.colors.grayscale.dark1};
    }
  }
  :hover {
    background-color: ${e.colors.secondary.light5};
  }
`,J=e=>i.iv`
  &:hover {
    color: ${e.colors.grayscale.dark1};
    background-color: ${e.colors.secondary.light5};
  }
`;var G;!function(e){e.CHARTS="charts",e.DASHBOARDS="dashboards"}(G||(G={}));var Y={name:"1e1ncky",styles:"border:none"},X={name:"833hqy",styles:"width:200px"};function ee(e){let{dashboardId:t,chart:r,useTextMenu:a=!1,setShowReportSubMenu:n,setIsDropdownVisible:v,isDropdownVisible:Z}=e;const S=(0,l.I0)(),C=(0,l.v9)((e=>{const a=t?G.DASHBOARDS:G.CHARTS;return(0,D._l)(e,a,t||(null==r?void 0:r.id))})),w=(null==C?void 0:C.active)||!1,k=(0,l.v9)((e=>e.user)),T=()=>!!(0,d.c)(d.T.ALERT_REPORTS)&&(!(null==k||!k.userId)&&Object.keys(k.roles||[]).map((e=>k.roles[e].filter((e=>"menu_access"===e[0]&&"Manage"===e[1]))))[0].length>0),[$,R]=(0,o.useState)(null),I=(0,c.Fg)(),_=(0,s.D)(t),[M,F]=(0,o.useState)(!1),E=async(e,t)=>{null!=e&&e.id&&S((0,x.M)(e,t))},U=T()&&!!(t&&_!==t||null!=r&&r.id);(0,o.useEffect)((()=>{U&&S((0,x.Aw)({userId:k.userId,filterField:t?"dashboard_id":"chart_id",creationMethod:t?"dashboards":"charts",resourceId:t||(null==r?void 0:r.id)}))}),[]);const q=C&&n&&T();(0,o.useEffect)((()=>{q?n(!0):!C&&n&&n(!1)}),[C]);const z=()=>{v&&(v(!1),F(!0))};return(0,i.tZ)(o.Fragment,null,T()&&(0,i.tZ)(o.Fragment,null,(0,i.tZ)(K,{userId:k.userId,show:M,onHide:()=>F(!1),userEmail:k.email,dashboardId:t,chart:r,creationMethod:t?G.DASHBOARDS:G.CHARTS}),a?C?Z&&(0,i.tZ)(m.v,{selectable:!1,css:Y},(0,i.tZ)(m.v.Item,{css:J,onClick:()=>E(C,!w)},(0,i.tZ)(L.ZN,null,(0,i.tZ)(g.ZP,{checked:w,onChange:b.EI}),(0,u.t)("Email reports active"))),(0,i.tZ)(m.v.Item,{css:J,onClick:z},(0,u.t)("Edit email report")),(0,i.tZ)(m.v.Item,{css:J,onClick:()=>{v&&(v(!1),R(C))}},(0,u.t)("Delete email report"))):(0,i.tZ)(m.v,{selectable:!1,css:W},(0,i.tZ)(m.v.Item,{onClick:z},(0,u.t)("Set up an email report")),(0,i.tZ)(m.v.Divider,null)):C?(0,i.tZ)(o.Fragment,null,(0,i.tZ)(f.$,{overlay:(0,i.tZ)(m.v,{selectable:!1,css:X},(0,i.tZ)(m.v.Item,null,(0,u.t)("Email reports active"),(0,i.tZ)(h.r,{checked:w,onClick:e=>E(C,e),size:"small",css:(0,i.iv)({marginLeft:2*I.gridUnit},"","")})),(0,i.tZ)(m.v.Item,{onClick:()=>F(!0)},(0,u.t)("Edit email report")),(0,i.tZ)(m.v.Item,{onClick:()=>R(C),css:Q},(0,u.t)("Delete email report"))),trigger:["click"],getPopupContainer:e=>e.closest(".action-button")},(0,i.tZ)("span",{role:"button",className:"action-button action-schedule-report",tabIndex:0},(0,i.tZ)(p.Z.Calendar,null)))):(0,i.tZ)("span",{role:"button",title:(0,u.t)("Schedule email report"),tabIndex:0,className:"action-button action-schedule-report",onClick:()=>F(!0)},(0,i.tZ)(p.Z.Calendar,null)),$&&(0,i.tZ)(y.Z,{description:(0,u.t)("This action will permanently delete %s.",null==$?void 0:$.name),onConfirm:()=>{$&&(async e=>{await S((0,x.MZ)(e)),R(null)})($)},onHide:()=>R(null),open:!0,title:(0,u.t)("Delete Report?")})))}},12441:(e,t,r)=>{r.d(t,{r:()=>s}),r(67294);var a=r(51995),n=r(40987),i=r(11965);const o=(0,a.iK)(n.Z)`
  .ant-switch-checked {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  }
`,s=e=>(0,i.tZ)(o,e)},98978:(e,t,r)=>{r.d(t,{Z:()=>S});var a=r(11965),n=r(67294),i=r(80008),o=r.n(i),s=r(61988),l=r(4715);const d="GMT Standard Time",c="400px",u={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[d,d],"060":["GMT Standard Time - London","British Summer Time"]},p=o()(),h=o()([2021,1]),m=o()([2021,7]),g=e=>h.tz(e).utcOffset().toString()+m.tz(e).utcOffset().toString(),b=e=>{var t,r;const a=g(e);return(p.tz(e).isDST()?null==(t=u[a])?void 0:t[1]:null==(r=u[a])?void 0:r[0])||e},f=o().tz.countries().map((e=>o().tz.zonesForCountry(e,!0))).flat(),y=[];f.forEach((e=>{y.find((t=>g(t.name)===g(e.name)))||y.push(e)}));const v=y.map((e=>({label:`GMT ${o().tz(p,e.name).format("Z")} (${b(e.name)})`,value:e.name,offsets:g(e.name),timezoneName:e.name}))),Z=(e,t)=>o().tz(p,e.timezoneName).utcOffset()-o().tz(p,t.timezoneName).utcOffset();function S(e){let{onTimezoneChange:t,timezone:r,minWidth:i=c}=e;const d=(0,n.useMemo)((()=>(e=>{var t;return(null==(t=v.find((t=>t.offsets===g(e))))?void 0:t.value)||"Africa/Abidjan"})(r||o().tz.guess())),[r]);return(0,n.useEffect)((()=>{r!==d&&t(d)}),[d,t,r]),(0,a.tZ)(l.Ph,{ariaLabel:(0,s.t)("Timezone selector"),css:(0,a.iv)({minWidth:i},"",""),onChange:e=>t(e),value:d,options:v,sortComparator:Z})}v.sort(Z)},49378:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(67294),n=r(37703),i=r(51995),o=r(55786),s=r(11965),l=r(61988),d=r(38703),c=r(94301),u=r(76962),p=r(50909),h=r(52256),m=r(60331),g=r(72813),b=r(89555),f=r(70163);function y(e){let{filters:t,setFilters:r,totalCount:n,loading:o,onReload:d}=e;const c=(0,i.Fg)(),u=(0,a.useMemo)((()=>Object.assign({},...t.map((e=>({[(0,g.GA)(e.col)?e.col.label:e.col]:e}))))),[t]),p=(0,a.useCallback)((e=>{const t={...u};delete t[e],r([...Object.values(t)])}),[u,r]),h=(0,a.useMemo)((()=>Object.entries(u).map((e=>{let[t,{val:r,formattedVal:a}]=e;return{colName:t,val:null!=a?a:r}})).sort(((e,t)=>e.colName.localeCompare(t.colName)))),[u]);return(0,s.tZ)("div",{css:s.iv`
        display: flex;
        justify-content: space-between;
        padding: ${c.gridUnit/2}px 0;
      `},(0,s.tZ)("div",{css:s.iv`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -${4*c.gridUnit}px;
        `},h.map((e=>{let{colName:t,val:r}=e;return(0,s.tZ)(m.Z,{closable:!0,onClose:p.bind(null,t),key:t,css:s.iv`
              height: ${6*c.gridUnit}px;
              display: flex;
              align-items: center;
              padding: ${c.gridUnit/2}px ${2*c.gridUnit}px;
              margin-right: ${4*c.gridUnit}px;
              margin-bottom: ${4*c.gridUnit}px;
              line-height: 1.2;
            `},(0,s.tZ)("span",{css:s.iv`
                margin-right: ${c.gridUnit}px;
              `},t),(0,s.tZ)("strong",null,r))}))),(0,s.tZ)("div",{css:s.iv`
          display: flex;
          align-items: center;
          height: min-content;
        `},(0,s.tZ)(b.Z,{loading:o&&!n,rowcount:n}),(0,s.tZ)(f.Z.ReloadOutlined,{iconColor:c.colors.grayscale.light1,iconSize:"l","aria-label":(0,l.t)("Reload"),role:"button",onClick:d})))}var v=r(57557),Z=r.n(v),S=r(12727);function x(e){let{formData:t,initialFilters:r}=e;const m=(0,i.Fg)(),[g,b]=(0,a.useState)(0),f=(0,a.useRef)(g),[v,x]=(0,a.useState)(r||[]),[C,w]=(0,a.useState)(!1),[k,T]=(0,a.useState)(""),[D,$]=(0,a.useState)(new Map),R=(0,n.v9)((e=>e.common.conf.SAMPLES_ROW_LIMIT)),[I,_]=(0,a.useMemo)((()=>t.datasource.split("__")),[t.datasource]),M=(0,a.useMemo)((()=>{const e=D.get(g);return e?(f.current=g,e):D.get(f.current)}),[g,D]),F=(0,p._q)(null==M?void 0:M.colNames,null==M?void 0:M.colTypes,null==M?void 0:M.data,t.datasource),E=(0,a.useMemo)((()=>F.map((e=>({...e,disableSortBy:!0})))),[F]),U=(0,a.useCallback)((e=>{let{pageIndex:t}=e;b(t)}),[]),q=(0,a.useCallback)((()=>{T(""),$(new Map),b(0)}),[]);(0,a.useEffect)((()=>{T(""),$(new Map),b(0)}),[v]),(0,a.useEffect)((()=>{if(D.has(g)&&[...D.keys()].at(-1)!==g){const e=new Map(D);e.delete(g),$(e.set(g,D.get(g)))}}),[g,D]),(0,a.useEffect)((()=>{if(!k&&!C&&!D.has(g)){w(!0);const e=function(e,t){if(!e)return;const r=(0,S.Z)(e),a=Z()(r.extras,"having"),n=[...(0,o.Z)(r.filters),...(0,o.Z)(t).map((e=>Z()(e,"formattedVal")))];return{granularity:r.granularity,time_range:r.time_range,filters:n,extras:a}}(t,v),r=Math.ceil(R/50);(0,h.getDatasourceSamples)(_,I,!1,e,50,g+1).then((e=>{$(new Map([...[...D.entries()].slice(1-r),[g,{total:e.total_count,data:e.data,colNames:(0,o.Z)(e.colnames),colTypes:(0,o.Z)(e.coltypes)}]])),T("")})).catch((e=>{T(`${e.name}: ${e.message}`)})).finally((()=>{w(!1)}))}}),[R,I,_,v,t,C,g,k,D]);let z=null;if(k)z=(0,s.tZ)("pre",{css:s.iv`
          margin-top: ${4*m.gridUnit}px;
        `},k);else if(D.size)if(0===(null==M?void 0:M.total)){const e=(0,l.t)("No rows were returned for this dataset");z=(0,s.tZ)(c.x3,{image:"document.svg",title:e})}else z=(0,s.tZ)(u.Z,{columns:E,data:(null==M?void 0:M.data)||[],pageSize:50,totalCount:null==M?void 0:M.total,serverPagination:!0,initialPageIndex:g,onServerPagination:U,loading:C,noDataText:(0,l.t)("No results"),emptyWrapperType:u.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0,css:s.iv`
          overflow: auto;
          .table {
            margin-bottom: 0;
          }
        `});else z=(0,s.tZ)(d.Z,null);return(0,s.tZ)(a.Fragment,null,(0,s.tZ)(y,{filters:v,setFilters:x,totalCount:null==M?void 0:M.total,loading:C,onReload:q}),z)}},9531:(e,t,r)=>{r.d(t,{tw:()=>a,Ky:()=>n,gz:()=>i,I6:()=>o,aF:()=>s,UN:()=>l,a7:()=>d,XX:()=>c});const a={id:0,type:r(46078).i9.Table,uid:"_placeholder_",datasource_name:"",table_name:"",columns:[],column_types:[],metrics:[],column_format:{},verbose_map:{},main_dttm_col:"",description:""},n=53,i=32,o=260,s=550,l=80,d=46,c=374},87915:(e,t,r)=>{r.d(t,{U:()=>a,g:()=>n});const a=(e,t)=>Object.values(e).filter((e=>e[t])).reduce(((e,r)=>({...e,[r.id]:t?r[t]:r})),{}),n=e=>{let{chartConfiguration:t,nativeFilters:r,dataMask:a,allSliceIds:n}=e;const i={};return Object.values(a).forEach((e=>{var a,o,s,l,d,c;let{id:u,extraFormData:p}=e;const h=null!=(a=null!=(o=null!=(s=null==r||null==(l=r[u])?void 0:l.chartsInScope)?s:null==t||null==(d=t[u])||null==(c=d.crossFilters)?void 0:c.chartsInScope)?o:n)?a:[];i[u]={scope:h,values:p}})),i}},713:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(61988),n=r(80621);const i=[{value:n.HE,label:(0,a.t)("Transparent"),className:"background--transparent"},{value:n.b5,label:(0,a.t)("White"),className:"background--white"}]},91914:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(78580),n=r.n(a),i=r(1510),o=r(99543);function s(e){return Object.entries(e).map((e=>{let[t,r]=e;return{col:t,op:Array.isArray(r)?"IN":"==",val:r}})).filter((e=>null!==e.val))}var l=r(87915);const d={},c={};function u(e){let{chart:t,filters:r,nativeFilters:a,chartConfiguration:u,colorScheme:p,colorNamespace:h,sliceId:m,dataMask:g,extraControls:b,labelColors:f,sharedLabelColors:y,allSliceIds:v}=e;const Z=c[m];if(d[m]===r&&(0,o.JB)(null==Z?void 0:Z.color_scheme,p,{ignoreUndefined:!0})&&(0,o.JB)(null==Z?void 0:Z.color_namespace,h,{ignoreUndefined:!0})&&(0,o.JB)(null==Z?void 0:Z.label_colors,f,{ignoreUndefined:!0})&&(0,o.JB)(null==Z?void 0:Z.shared_label_colors,y,{ignoreUndefined:!0})&&Z&&(0,o.JB)(null==Z?void 0:Z.dataMask,g,{ignoreUndefined:!0})&&(0,o.JB)(null==Z?void 0:Z.extraControls,b,{ignoreUndefined:!0}))return Z;let S={};const x=(0,l.g)({chartConfiguration:u,dataMask:g,nativeFilters:a,allSliceIds:v}),C=Object.entries(x).filter((e=>{let[,{scope:r}]=e;return n()(r).call(r,t.id)})).map((e=>{let[t]=e;return t}));C.length&&(S={extra_form_data:(0,i.vk)(g,C)});const w={...t.form_data,label_colors:f,shared_label_colors:y,...p&&{color_scheme:p},extra_filters:s(r),...S,...b};return d[m]=r,c[m]={...w,dataMask:g,extraControls:b},w}},79271:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(61988),n=r(80621);const i=[{value:n.u_,label:(0,a.t)("Small"),className:"header-style-option header-small"},{value:n.OE,label:(0,a.t)("Medium"),className:"header-style-option header-medium"},{value:n.pQ,label:(0,a.t)("Large"),className:"header-style-option header-large"}]},95345:(e,t,r)=>{r.d(t,{c9:()=>z,Tg:()=>M});var a,n=r(67294),i=r(51995),o=r(61988),s=r(70163),l=r(71262),d=r(61337);!function(e){e.Results="results",e.Samples="samples"}(a||(a={}));var c=r(11064),u=r(55786),p=r(38703),h=r(94301),m=r(52256),g=r(98286),b=r(76962),f=r(50909),y=r(4788),v=r.n(y),Z=r(78580),S=r.n(Z),x=r(88889),C=r(11965),w=r(54076),k=r(61587);const T=i.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: ${2*t.gridUnit}px;\n\n    span {\n      flex-shrink: 0;\n    }\n  `}}
`,D=e=>{let{data:t,datasourceId:r,onInputChange:a,columnNames:i,columnTypes:o,isLoading:s}=e;const l=(0,k.W)(r),d=v()(i,o).filter((e=>{let[t,r]=e;return r===x.Z.TEMPORAL&&t&&!S()(l).call(l,t)})).map((e=>{let[t]=e;return t})),c=(0,n.useMemo)((()=>(0,w.cD)(t,d)),[t,d]);return(0,C.tZ)(T,null,(0,C.tZ)(f.HS,{onChangeHandler:a}),(0,C.tZ)("div",{css:C.iv`
          display: flex;
          align-items: center;
        `},(0,C.tZ)(f.uy,{data:t,loading:s}),(0,C.tZ)(f.m,{data:c,columns:i})))},$=e=>{let{data:t,colnames:r,coltypes:a,datasourceId:i,dataSize:s=50,isVisible:l}=e;const[d,c]=(0,n.useState)(""),u=(0,f._q)(r,a,t,i,l),p=(0,f.C4)(d,t);return(0,C.tZ)(n.Fragment,null,(0,C.tZ)(D,{data:p,columnNames:r,columnTypes:a,datasourceId:i,onInputChange:e=>c(e),isLoading:!1}),(0,C.tZ)(b.Z,{columns:u,data:p,pageSize:s,noDataText:(0,o.t)("No results"),emptyWrapperType:b.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))},R=i.iK.pre`
  margin-top: ${e=>{let{theme:t}=e;return 4*t.gridUnit+"px"}};
`,I=new WeakMap,_=e=>{var t;let{isRequest:r,queryFormData:a,queryForce:i,ownState:s,errorMessage:l,actions:d,isVisible:b,dataSize:f=50}=e;const y=(0,c.Z)().get((null==a?void 0:a.viz_type)||(null==a?void 0:a.vizType)),[v,Z]=(0,n.useState)([]),[S,x]=(0,n.useState)(!0),[w,k]=(0,n.useState)(""),T=null!=(t=null==y?void 0:y.queryObjectCount)?t:1;if((0,n.useEffect)((()=>{l||(r&&I.has(a)&&(Z((0,u.Z)(I.get(a))),k(""),i&&d&&d.setForceQuery(!1),x(!1)),r&&!I.has(a)&&(x(!0),(0,m.getChartDataRequest)({formData:a,force:i,resultFormat:"json",resultType:"results",ownState:s}).then((e=>{let{json:t}=e;Z((0,u.Z)(t.result)),k(""),I.set(a,t.result),i&&d&&d.setForceQuery(!1)})).catch((e=>{(0,g.O)(e).then((e=>{let{error:t,message:r}=e;k(t||r||(0,o.t)("Sorry, an error occurred"))}))})).finally((()=>{x(!1)}))))}),[a,r]),(0,n.useEffect)((()=>{l&&x(!1)}),[l]),S)return Array(T).fill((0,C.tZ)(p.Z,null));if(l){const e=(0,o.t)("Run a query to display results");return Array(T).fill((0,C.tZ)(h.x3,{image:"document.svg",title:e}))}if(w){const e=(0,C.tZ)(n.Fragment,null,(0,C.tZ)(D,{data:[],columnNames:[],columnTypes:[],datasourceId:a.datasource,onInputChange:()=>{},isLoading:!1}),(0,C.tZ)(R,null,w));return Array(T).fill(e)}if(0===v.length){const e=(0,o.t)("No results were returned for this query");return Array(T).fill((0,C.tZ)(h.x3,{image:"document.svg",title:e}))}return v.slice(0,T).map(((e,t)=>(0,C.tZ)($,{data:e.data,colnames:e.colnames,coltypes:e.coltypes,dataSize:f,datasourceId:a.datasource,key:t,isVisible:b})))},M=e=>{let{isRequest:t,queryFormData:r,queryForce:n,ownState:i,errorMessage:s,actions:d,isVisible:c,dataSize:u=50}=e;const p=_({errorMessage:s,queryFormData:r,queryForce:n,ownState:i,isRequest:t,actions:d,dataSize:u,isVisible:c});if(1===p.length)return p[0];const h=p.map(((e,t)=>0===t?(0,C.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results"),key:a.Results},e):(0,C.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results %s",t+1),key:`${a.Results} ${t+1}`},e)));return(0,C.tZ)(l.ZP,{fullWidth:!1}," ",h," ")},F=i.iK.pre`
  margin-top: ${e=>{let{theme:t}=e;return 4*t.gridUnit+"px"}};
`,E=new WeakSet,U=e=>{let{isRequest:t,datasource:r,queryForce:a,actions:i,dataSize:s=50,isVisible:l}=e;const[d,c]=(0,n.useState)(""),[g,y]=(0,n.useState)([]),[v,Z]=(0,n.useState)([]),[S,x]=(0,n.useState)([]),[w,k]=(0,n.useState)(!1),[T,$]=(0,n.useState)(""),R=(0,n.useMemo)((()=>`${r.id}__${r.type}`),[r]);(0,n.useEffect)((()=>{t&&a&&E.delete(r),t&&!E.has(r)&&(k(!0),(0,m.getDatasourceSamples)(r.type,r.id,a).then((e=>{y((0,u.Z)(e.data)),Z((0,u.Z)(e.colnames)),x((0,u.Z)(e.coltypes)),$(""),E.add(r),a&&i&&i.setForceQuery(!1)})).catch((e=>{y([]),Z([]),x([]),$(`${e.name}: ${e.message}`)})).finally((()=>{k(!1)})))}),[r,t,a]);const I=(0,f._q)(v,S,g,R,l),_=(0,f.C4)(d,g);if(w)return(0,C.tZ)(p.Z,null);if(T)return(0,C.tZ)(n.Fragment,null,(0,C.tZ)(D,{data:_,columnNames:v,columnTypes:S,datasourceId:R,onInputChange:e=>c(e),isLoading:w}),(0,C.tZ)(F,null,T));if(0===g.length){const e=(0,o.t)("No samples were returned for this dataset");return(0,C.tZ)(h.x3,{image:"document.svg",title:e})}return(0,C.tZ)(n.Fragment,null,(0,C.tZ)(D,{data:_,columnNames:v,columnTypes:S,datasourceId:R,onInputChange:e=>c(e),isLoading:w}),(0,C.tZ)(b.Z,{columns:I,data:_,pageSize:s,noDataText:(0,o.t)("No results"),emptyWrapperType:b.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))},q=i.iK.div`
  ${e=>{let{theme:t}=e;return`\n    position: relative;\n    background-color: ${t.colors.grayscale.light5};\n    z-index: 5;\n    overflow: hidden;\n\n    .ant-tabs {\n      height: 100%;\n    }\n\n    .ant-tabs-content-holder {\n      height: 100%;\n    }\n\n    .ant-tabs-content {\n      height: 100%;\n    }\n\n    .ant-tabs-tabpane {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n\n      .table-condensed {\n        height: 100%;\n        overflow: auto;\n        margin-bottom: ${4*t.gridUnit}px;\n\n        .table {\n          margin-bottom: ${2*t.gridUnit}px;\n        }\n      }\n\n      .pagination-container > ul[role='navigation'] {\n        margin-top: 0;\n      }\n    }\n  `}}
`,z=e=>{let{queryFormData:t,datasource:r,queryForce:c,onCollapseChange:u,chartStatus:p,ownState:h,errorMessage:m,actions:g}=e;const b=(0,i.Fg)(),[f,y]=(0,n.useState)(a.Results),[v,Z]=(0,n.useState)({results:!1,samples:!1}),[S,x]=(0,n.useState)((0,d.rV)(d.dR.is_datapanel_open,!1));(0,n.useEffect)((()=>{(0,d.LS)(d.dR.is_datapanel_open,S)}),[S]),(0,n.useEffect)((()=>{S||Z({results:!1,samples:!1}),S&&f.startsWith(a.Results)&&"rendered"===p&&Z({results:!0,samples:!1}),S&&f===a.Samples&&Z({results:!1,samples:!0})}),[S,f,p]);const w=(0,n.useCallback)((e=>{u(e),x(e)}),[u]),k=(0,n.useCallback)(((e,t)=>{S?e===f&&(t.preventDefault(),w(!1)):w(!0),y(e)}),[f,w,S]),D=(0,n.useMemo)((()=>{const e=S?(0,C.tZ)(s.Z.CaretUp,{iconColor:b.colors.grayscale.base,"aria-label":(0,o.t)("Collapse data panel")}):(0,C.tZ)(s.Z.CaretDown,{iconColor:b.colors.grayscale.base,"aria-label":(0,o.t)("Expand data panel")});return(0,C.tZ)(T,null,S?(0,C.tZ)("span",{role:"button",tabIndex:0,onClick:()=>w(!1)},e):(0,C.tZ)("span",{role:"button",tabIndex:0,onClick:()=>w(!0)},e))}),[w,S,b.colors.grayscale.base]),$=_({errorMessage:m,queryFormData:t,queryForce:c,ownState:h,isRequest:v.results,actions:g,isVisible:a.Results===f}).map(((e,t)=>0===t?(0,C.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results"),key:a.Results},e):t>0?(0,C.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Results %s",t+1),key:`${a.Results} ${t+1}`},e):null));return(0,C.tZ)(q,null,(0,C.tZ)(l.ZP,{fullWidth:!1,tabBarExtraContent:D,activeKey:S?f:"",onTabClick:k},$,(0,C.tZ)(l.ZP.TabPane,{tab:(0,o.t)("Samples"),key:a.Samples},(0,C.tZ)(U,{datasource:r,queryForce:c,isRequest:v.samples,actions:g,isVisible:a.Samples===f}))))}},15423:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(67294),n=r(51995),i=r(55786),o=r(61988),s=r(38703),l=r(98286),d=r(52256),c=r(85626),u=r(11965);const p=n.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,h=e=>{const[t,r]=(0,a.useState)([]),[n,h]=(0,a.useState)(!1),[m,g]=(0,a.useState)(null);return(0,a.useEffect)((()=>{h(!0),(0,d.getChartDataRequest)({formData:e.latestQueryFormData,resultFormat:"json",resultType:"query"}).then((e=>{let{json:t}=e;r((0,i.Z)(t.result)),h(!1),g(null)})).catch((e=>{(0,l.O)(e).then((t=>{let{error:r,message:a}=t;g(r||a||e.statusText||(0,o.t)("Sorry, An error occurred")),h(!1)}))}))}),[JSON.stringify(e.latestQueryFormData)]),n?(0,u.tZ)(s.Z,null):m?(0,u.tZ)("pre",null,m):(0,u.tZ)(p,null,t.map((e=>e.query?(0,u.tZ)(c.Z,{sql:e.query,language:e.language||void 0}):null)))}},28615:(e,t,r)=>{r.d(t,{S:()=>i});var a=r(67294),n=r(60812);function i(e,t){const r=(0,n.D)(e);(0,a.useEffect)((()=>{e!==r&&t(r,e)}),[e,r,t])}},6954:(e,t,r)=>{r.d(t,{z:()=>s});var a=r(67294),n=r(14670),i=r.n(n);const o=new(r(11133).g0)("tab_id_channel");function s(){const[e,t]=(0,a.useState)();return(0,a.useEffect)((()=>{if(!function(){try{return window.localStorage&&window.sessionStorage}catch(e){return!1}}())return void(e||t(i().generate()));const r=()=>{const e=window.localStorage.getItem("last_tab_id"),r=String(e?Number.parseInt(e,10)+1:1);window.sessionStorage.setItem("tab_id",r),window.localStorage.setItem("last_tab_id",r),t(r)},a=window.sessionStorage.getItem("tab_id");a?(o.postMessage({type:"REQUESTING_TAB_ID",tabId:a}),t(a)):r(),o.onmessage=t=>{if(t.tabId===e)if("REQUESTING_TAB_ID"===t.type){const e={type:"TAB_ID_DENIED",tabId:t.tabId};o.postMessage(e)}else"TAB_ID_DENIED"===t.type&&r()}}),[e]),e}},56727:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(78580),n=r.n(a),i=r(46926),o=r.n(i),s=r(21804),l=r.n(s),d=r(61988),c=r(72570);function u(e,t,r){return void 0===r&&(r=!1),a=>{const i=r?document.querySelector(e):a.currentTarget.closest(e);return i?o().toJpeg(i,{quality:.95,bgcolor:"#F5F5F5",filter:e=>{var t;return"string"!=typeof e.className||"mapboxgl-control-container"!==e.className&&!n()(t=e.className).call(t,"ant-dropdown")}}).then((e=>{const r=document.createElement("a");r.download=`${function(e,t){return void 0===t&&(t=new Date),`${l()(e)}-${t.toISOString().replace(/[: ]/g,"-")}`}(t)}.jpg`,r.href=e,r.click()})).catch((e=>{console.error("Creating image failed",e)})):(0,c.Dz)((0,d.t)("Image download failed, please refresh and try again."))}}},75701:(e,t,r)=>{r.d(t,{J:()=>n});var a=r(61988);const n=e=>(0,a.t)("Select values in highlighted field(s) in the control panel. Then run the query by clicking on the %s button.",e?'"Create chart"':'"Update chart"')}}]);
//# sourceMappingURL=46171ffb9da738cbadcc.chunk.js.map