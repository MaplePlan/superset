"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5094],{25094:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var o=n(78580),a=n.n(o),i=n(67294),l=n(45697),s=n.n(l),r=n(24198),h=n(35932),u=n(51995),d=n(61988),p=n(11064),c=n(60524),m=n(95826),y=n(31069),v=n(81545),g=n(68135),b=n(82199),T=n(79684),Z=n(79069),w=n(10945),C=n(83734),f=n(82342),S=n(94301),A=n(11965);const L="",E={name:s().string,annotationType:s().string,sourceType:s().string,color:s().string,opacity:s().string,style:s().string,width:s().number,showMarkers:s().bool,hideLine:s().bool,value:s().oneOfType([s().string,s().number]),overrides:s().object,show:s().bool,showLabel:s().bool,titleColumn:s().string,descriptionColumns:s().arrayOf(s().string),timeColumn:s().string,intervalEndColumn:s().string,vizType:s().string,error:s().string,colorScheme:s().string,addAnnotationLayer:s().func,removeAnnotationLayer:s().func,close:s().func},k={name:"",annotationType:w.qy,sourceType:"",color:L,opacity:"",style:"solid",width:1,showMarkers:!1,hideLine:!1,overrides:{},colorScheme:"d3Category10",show:!0,showLabel:!1,titleColumn:"",descriptionColumns:[],timeColumn:"",intervalEndColumn:"",addAnnotationLayer:()=>{},removeAnnotationLayer:()=>{},close:()=>{}},O=u.iK.div`
  && > div:first-child {
    padding-left: 0;
    padding-right: 0;
  }
`,_=()=>(0,A.tZ)(O,null,(0,A.tZ)(S.Tc,{title:(0,d.t)("No annotation layers"),description:(0,A.tZ)("span",null,(0,d.t)("Add an annotation layer")," ",(0,A.tZ)("a",{href:"/annotationlayermodelview/list",target:"_blank",rel:"noopener noreferrer"},(0,d.t)("here")),"."),image:"empty.svg"}));var x={name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"};class V extends i.PureComponent{constructor(e){super(e);const{name:t,annotationType:n,sourceType:o,color:i,opacity:l,style:s,width:r,showMarkers:h,hideLine:u,value:d,overrides:c,show:m,showLabel:y,titleColumn:v,descriptionColumns:g,timeColumn:b,intervalEndColumn:T,vizType:Z}=e;("since"in c||"until"in c)&&(c.time_range=null,delete c.since,delete c.until);const w=(0,p.Z)().get(Z),C=(null==w?void 0:w.supportedAnnotationTypes)||[],f=a()(C).call(C,n)?n:C[0];this.state={name:t,annotationType:f,sourceType:o,value:d,overrides:c,show:m,showLabel:y,titleColumn:v,descriptionColumns:g,timeColumn:b,intervalEndColumn:T,color:i||L,opacity:l,style:s,width:r,showMarkers:h,hideLine:u,isNew:!t,isLoadingOptions:!0,valueOptions:[]},this.submitAnnotation=this.submitAnnotation.bind(this),this.deleteAnnotation=this.deleteAnnotation.bind(this),this.applyAnnotation=this.applyAnnotation.bind(this),this.fetchOptions=this.fetchOptions.bind(this),this.handleAnnotationType=this.handleAnnotationType.bind(this),this.handleAnnotationSourceType=this.handleAnnotationSourceType.bind(this),this.handleValue=this.handleValue.bind(this),this.isValidForm=this.isValidForm.bind(this)}componentDidMount(){const{annotationType:e,sourceType:t,isLoadingOptions:n}=this.state;this.fetchOptions(e,t,n)}componentDidUpdate(e,t){t.sourceType!==this.state.sourceType&&this.fetchOptions(this.state.annotationType,this.state.sourceType,!0)}getSupportedSourceTypes(e){var t;const n=(0,p.Z)().entries().filter((t=>{let{value:n}=t;return n.canBeAnnotationType(e)})).map((e=>{let{key:t,value:n}=e;return{value:t,label:n.name}}));return null!=(t=w.J_[e])&&t.supportNativeSource&&n.unshift(w.dS.NATIVE),n}isValidFormulaAnnotation(e,t){return t!==w.DT.FORMULA||(0,c.$)(e)}isValidForm(){const{name:e,annotationType:t,sourceType:n,value:o,timeColumn:a,intervalEndColumn:i}=this.state,l=[(0,m.Z)(e),(0,m.Z)(t),(0,m.Z)(o)];return n!==w.S4.NATIVE&&(t===w.DT.EVENT&&l.push((0,m.Z)(a)),t===w.DT.INTERVAL&&(l.push((0,m.Z)(a)),l.push((0,m.Z)(i)))),l.push(!this.isValidFormulaAnnotation(o,t)),!l.filter((e=>e)).length}handleAnnotationType(e){this.setState({annotationType:e,sourceType:null,value:null})}handleAnnotationSourceType(e){const{sourceType:t}=this.state;t!==e&&this.setState({sourceType:e,value:null,isLoadingOptions:!0})}handleValue(e){this.setState({value:e,descriptionColumns:[],intervalEndColumn:null,timeColumn:null,titleColumn:null,overrides:{time_range:null}})}fetchOptions(e,t,n){n&&(t===w.S4.NATIVE?y.Z.get({endpoint:"/annotationlayermodelview/api/read?"}).then((e=>{let{json:t}=e;const n=t?t.result.map((e=>({value:e.id,label:e.name}))):[];this.setState({isLoadingOptions:!1,valueOptions:n})})):(0,w.m7)(t)?y.Z.get({endpoint:"/superset/user_slices"}).then((t=>{let{json:n}=t;const o=(0,p.Z)();this.setState({isLoadingOptions:!1,valueOptions:n.filter((t=>{const n=o.get(t.viz_type);return n&&n.canBeAnnotationType(e)})).map((e=>({value:e.id,label:e.title,slice:e})))})})):this.setState({isLoadingOptions:!1,valueOptions:[]}))}deleteAnnotation(){this.props.removeAnnotationLayer(),this.props.close()}applyAnnotation(){if(this.isValidForm()){const e={};["name","annotationType","sourceType","color","opacity","style","width","showMarkers","hideLine","value","overrides","show","showLabel","titleColumn","descriptionColumns","timeColumn","intervalEndColumn"].forEach((t=>{null!==this.state[t]&&(e[t]=this.state[t])})),e.color===L&&(e.color=null),this.props.addAnnotationLayer(e),this.setState({isNew:!1})}}submitAnnotation(){this.applyAnnotation(),this.props.close()}renderOption(e){return(0,A.tZ)("span",{css:x,title:e.label},e.label)}renderValueConfiguration(){const{annotationType:e,sourceType:t,value:n,valueOptions:o,isLoadingOptions:a}=this.state;let i="",l="";return(0,w.m7)(t)?t===w.S4.NATIVE?(i="Annotation layer",l="Select the Annotation Layer you would like to use."):(i=(0,d.t)("Chart"),l=(0,d.t)("Use another existing chart as a source for annotations and overlays.\n          Your chart must be one of these visualization types: [%s]",this.getSupportedSourceTypes(e).map((e=>e.label)).join(", "))):e===w.DT.FORMULA&&(i="Formula",l="Expects a formula with depending time parameter 'x'\n        in milliseconds since epoch. mathjs is used to evaluate the formulas.\n        Example: '2x+5'"),(0,w.m7)(t)?(0,A.tZ)(b.Z,{ariaLabel:(0,d.t)("Annotation layer value"),name:"annotation-layer-value",showHeader:!0,hovered:!0,description:l,label:i,placeholder:"",options:o,isLoading:a,value:n,onChange:this.handleValue,validationErrors:n?[]:["Mandatory"],optionRenderer:this.renderOption,notFoundContent:(0,A.tZ)(_,null)}):e===w.DT.FORMULA?(0,A.tZ)(T.Z,{name:"annotation-layer-value",hovered:!0,showHeader:!0,description:l,label:i,placeholder:"",value:n,onChange:this.handleValue,validationErrors:this.isValidFormulaAnnotation(n,e)?[]:["Bad formula."]}):""}renderSliceConfiguration(){const{annotationType:e,sourceType:t,value:n,valueOptions:o,overrides:a,titleColumn:i,timeColumn:l,intervalEndColumn:s,descriptionColumns:r}=this.state,{slice:h}=o.find((e=>e.value===n))||{};if(t!==w.S4.NATIVE&&h){const t=(h.data.groupby||[]).concat(h.data.all_columns||[]).map((e=>({value:e,label:e}))),n=h.data.include_time?[{value:"__timestamp",label:"__timestamp"}].concat(t):t;return(0,A.tZ)("div",{style:{marginRight:"2rem"}},(0,A.tZ)(C.Z,{isSelected:!0,title:(0,d.t)("Annotation Slice Configuration"),info:(0,d.t)("This section allows you to configure how to use the slice\n               to generate annotations.")},(e===w.DT.EVENT||e===w.DT.INTERVAL)&&(0,A.tZ)(b.Z,{ariaLabel:(0,d.t)("Annotation layer time column"),hovered:!0,name:"annotation-layer-time-column",label:e===w.DT.INTERVAL?(0,d.t)("Interval start column"):(0,d.t)("Event time column"),description:(0,d.t)("This column must contain date/time information."),validationErrors:l?[]:["Mandatory"],clearable:!1,options:n,value:l,onChange:e=>this.setState({timeColumn:e})}),e===w.DT.INTERVAL&&(0,A.tZ)(b.Z,{ariaLabel:(0,d.t)("Annotation layer interval end"),hovered:!0,name:"annotation-layer-intervalEnd",label:(0,d.t)("Interval End column"),description:(0,d.t)("This column must contain date/time information."),validationErrors:s?[]:["Mandatory"],options:t,value:s,onChange:e=>this.setState({intervalEndColumn:e})}),(0,A.tZ)(b.Z,{ariaLabel:(0,d.t)("Annotation layer title column"),hovered:!0,name:"annotation-layer-title",label:(0,d.t)("Title Column"),description:(0,d.t)("Pick a title for you annotation."),options:[{value:"",label:"None"}].concat(t),value:i,onChange:e=>this.setState({titleColumn:e})}),e!==w.DT.TIME_SERIES&&(0,A.tZ)(b.Z,{ariaLabel:(0,d.t)("Annotation layer description columns"),hovered:!0,name:"annotation-layer-title",label:(0,d.t)("Description Columns"),description:(0,d.t)("Pick one or more columns that should be shown in the annotation. If you don't select a column all of them will be shown."),multi:!0,options:t,value:r,onChange:e=>this.setState({descriptionColumns:e})}),(0,A.tZ)("div",{style:{marginTop:"1rem"}},(0,A.tZ)(Z.Z,{hovered:!0,name:"annotation-override-time_range",label:"Override time range",description:'This controls whether the "time_range" field from the current\n                  view should be passed down to the chart containing the annotation data.',value:"time_range"in a,onChange:e=>{delete a.time_range,e?this.setState({overrides:{...a,time_range:null}}):this.setState({overrides:{...a}})}}),(0,A.tZ)(Z.Z,{hovered:!0,name:"annotation-override-timegrain",label:"Override time grain",description:"This controls whether the time grain field from the current\n                  view should be passed down to the chart containing the annotation data.",value:"time_grain_sqla"in a,onChange:e=>{delete a.time_grain_sqla,delete a.granularity,e?this.setState({overrides:{...a,time_grain_sqla:null,granularity:null}}):this.setState({overrides:{...a}})}}),(0,A.tZ)(T.Z,{hovered:!0,name:"annotation-layer-timeshift",label:"Time Shift",description:"Time delta in natural language\n                  (example:  24 hours, 7 days, 56 weeks, 365 days)",placeholder:"",value:a.time_shift,onChange:e=>this.setState({overrides:{...a,time_shift:e}})}))))}return""}renderDisplayConfiguration(){const{color:e,opacity:t,style:n,width:o,showMarkers:a,hideLine:i,annotationType:l}=this.state,s=(0,v.Z)().get(this.props.colorScheme).colors.concat();return e&&e!==L&&!s.find((t=>t.toLowerCase()===e.toLowerCase()))&&s.push(e),(0,A.tZ)(C.Z,{isSelected:!0,title:(0,d.t)("Display configuration"),info:(0,d.t)("Configure your how you overlay is displayed here.")},(0,A.tZ)(b.Z,{ariaLabel:(0,d.t)("Annotation layer stroke"),name:"annotation-layer-stroke",label:(0,d.t)("Style"),options:[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"longDashed",label:"Long dashed"},{value:"dotted",label:"Dotted"}],value:n,clearable:!1,onChange:e=>this.setState({style:e})}),(0,A.tZ)(b.Z,{ariaLabel:(0,d.t)("Annotation layer opacity"),name:"annotation-layer-opacity",label:(0,d.t)("Opacity"),options:[{value:"",label:"Solid"},{value:"opacityLow",label:"0.2"},{value:"opacityMedium",label:"0.5"},{value:"opacityHigh",label:"0.8"}],value:t,onChange:e=>this.setState({opacity:e})}),(0,A.tZ)("div",null,(0,A.tZ)(f.Z,{label:(0,d.t)("Color")}),(0,A.tZ)("div",{style:{display:"flex",flexDirection:"column"}},(0,A.tZ)(r.Ie,{color:e,colors:s,onChangeComplete:e=>this.setState({color:e.hex})}),(0,A.tZ)(h.Z,{style:{marginTop:"0.5rem",marginBottom:"0.5rem"},buttonStyle:e===L?"success":"default",buttonSize:"xsmall",onClick:()=>this.setState({color:L})},"Automatic Color"))),(0,A.tZ)(T.Z,{name:"annotation-layer-stroke-width",label:(0,d.t)("Line width"),isInt:!0,value:o,onChange:e=>this.setState({width:e})}),l===w.DT.TIME_SERIES&&(0,A.tZ)(Z.Z,{hovered:!0,name:"annotation-layer-show-markers",label:"Show Markers",description:"Shows or hides markers for the time series",value:a,onChange:e=>this.setState({showMarkers:e})}),l===w.DT.TIME_SERIES&&(0,A.tZ)(Z.Z,{hovered:!0,name:"annotation-layer-hide-line",label:"Hide Line",description:"Hides the Line for the time series",value:i,onChange:e=>this.setState({hideLine:e})}))}render(){const{isNew:e,name:t,annotationType:n,sourceType:o,show:a,showLabel:l}=this.state,s=this.isValidForm(),r=(0,p.Z)().get(this.props.vizType),u=r?r.supportedAnnotationTypes.map((e=>w.J_[e])):[],c=this.getSupportedSourceTypes(n);return(0,A.tZ)(i.Fragment,null,this.props.error&&(0,A.tZ)("span",{style:{color:this.props.theme.colors.error.base}},"ERROR: ",this.props.error),(0,A.tZ)("div",{style:{display:"flex",flexDirection:"row"}},(0,A.tZ)("div",{style:{marginRight:"2rem"}},(0,A.tZ)(C.Z,{isSelected:!0,title:(0,d.t)("Layer configuration"),info:(0,d.t)("Configure the basics of your Annotation Layer.")},(0,A.tZ)(T.Z,{name:"annotation-layer-name",label:(0,d.t)("Name"),placeholder:"",value:t,onChange:e=>this.setState({name:e}),validationErrors:t?[]:[(0,d.t)("Mandatory")]}),(0,A.tZ)(Z.Z,{name:"annotation-layer-hide",label:(0,d.t)("Hide layer"),value:!a,onChange:e=>this.setState({show:!e})}),(0,A.tZ)(Z.Z,{name:"annotation-label-show",label:(0,d.t)("Show label"),value:l,hovered:!0,description:(0,d.t)("Whether to always show the annotation label"),onChange:e=>this.setState({showLabel:e})}),(0,A.tZ)(b.Z,{ariaLabel:(0,d.t)("Annotation layer type"),hovered:!0,description:(0,d.t)("Choose the annotation layer type"),label:(0,d.t)("Annotation layer type"),name:"annotation-layer-type",clearable:!1,options:u,value:n,onChange:this.handleAnnotationType}),c.length>0&&(0,A.tZ)(b.Z,{ariaLabel:(0,d.t)("Annotation source type"),hovered:!0,description:(0,d.t)("Choose the source of your annotations"),label:(0,d.t)("Annotation source"),name:"annotation-source-type",options:c,notFoundContent:(0,A.tZ)(_,null),value:o,onChange:this.handleAnnotationSourceType,validationErrors:o?[]:[(0,d.t)("Mandatory")]}),this.renderValueConfiguration())),this.renderSliceConfiguration(),this.renderDisplayConfiguration()),(0,A.tZ)("div",{style:{display:"flex",justifyContent:"space-between"}},e?(0,A.tZ)(h.Z,{buttonSize:"small",onClick:()=>this.props.close()},(0,d.t)("Cancel")):(0,A.tZ)(h.Z,{buttonSize:"small",onClick:this.deleteAnnotation},(0,d.t)("Remove")),(0,A.tZ)("div",null,(0,A.tZ)(h.Z,{buttonSize:"small",disabled:!s,onClick:this.applyAnnotation},(0,d.t)("Apply")),(0,A.tZ)(h.Z,{buttonSize:"small",buttonStyle:"primary",disabled:!s,onClick:this.submitAnnotation},(0,d.t)("OK")))))}}V.propTypes=E,V.defaultProps=k;const N=(0,g.b)(V)},60524:(e,t,n)=>{n.d(t,{f:()=>s,$:()=>r});var o=n(22087),a=n.n(o);const i=[[new RegExp(/==/g),"Eq"],[new RegExp(/>=/g),"Gte"],[new RegExp(/<=/g),"Lte"],[new RegExp(/>/g),"Gt"],[new RegExp(/</g),"Lt"]],l=[{type:3,token:"x",show:"x",value:"x"},{type:2,token:"&",show:"&",value:(e,t)=>e&t},{type:2,token:"|",show:"|",value:(e,t)=>e|t},{type:2,token:"and",show:"and",value:(e,t)=>e&&t},{type:2,token:"xor",show:"xor",value:(e,t)=>e^t},{type:2,token:"or",show:"or",value:(e,t)=>Number(e||t)},{type:2,token:"Eq",show:"Eq",value:(e,t)=>Number(e===t)},{type:2,token:"Lt",show:"Lt",value:(e,t)=>Number(e<t)},{type:2,token:"Lte",show:"Lte",value:(e,t)=>Number(e<=t)},{type:2,token:"Gt",show:"Gt",value:(e,t)=>Number(e>t)},{type:2,token:"Gte",show:"Gte",value:(e,t)=>Number(e>=t)}];function s(e,t){var n;let o=e;i.forEach((e=>{let[t,n]=e;o=o.replace(t,n)}));const s=String(o).split("=");return o=null!=(n=s[1])?n:s[0],Number(a().eval(o,l,{x:t}))}function r(e){try{s(e,0)}catch(e){return!1}return!0}}}]);
//# sourceMappingURL=bddfd11866b5aae70ae5.chunk.js.map