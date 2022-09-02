"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3036,6871,1261],{81221:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var o=r(18446),a=r.n(o),i=r(67294),n=r(45697),s=r.n(n),l=r(31069),u=r(84502),c=r(78580),d=r.n(c),p=r(54998),g=r.n(p);function h(e,t,r,o){if(void 0===r&&(r=!0),void 0===o&&(o={}),!e.datasource)return null;const a=new(g())("/"),i=function(e,t){var r;void 0===t&&(t="base");let o="/explore/";return d()(r=["json","csv","query","results","samples"]).call(r,t)&&(o="/superset/explore_json/"),o}(0,t),n=a.search(!0);Object.keys(o).forEach((e=>{n[e]=o[e]})),n.form_data=function(e){const t=new Set;return JSON.stringify(e,((e,r)=>{if("object"==typeof r&&null!==r){if(t.has(r))try{return JSON.parse(JSON.stringify(r))}catch(e){return}t.add(r)}return r}))}(e),"standalone"===t&&(n.standalone="true");const s=a.directory(i).search(n).toString();return!r&&s.length>8e3?h({datasource:e.datasource,viz_type:e.viz_type},t,!1,{URL_IS_TOO_LONG_TO_SHARE:null}):s}var f=r(94828),v=r(31221),m=r(14228),y=r(33452),_=r(54448),b=r(3251),x=r(21382),C=r(10357);const S={deck_grid:f.getLayer,deck_screengrid:v.getLayer,deck_path:m.getLayer,deck_hex:y.getLayer,deck_scatter:_.getLayer,deck_geojson:b.getLayer,deck_arc:x.getLayer,deck_polygon:C.getLayer};var k=r(11965);const j={formData:s().object.isRequired,payload:s().object.isRequired,setControlValue:s().func.isRequired,viewport:s().object.isRequired,onAddFilter:s().func,onSelect:s().func},w={onAddFilter(){},onSelect(){}};class Z extends i.PureComponent{constructor(e){super(e),this.containerRef=i.createRef(),this.setTooltip=e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)},this.state={subSlicesLayers:{}},this.onViewportChange=this.onViewportChange.bind(this)}componentDidMount(){const{formData:e,payload:t}=this.props;this.loadLayers(e,t)}UNSAFE_componentWillReceiveProps(e){const{formData:t,payload:r}=e;!a()(this.props.formData.deck_slices,e.formData.deck_slices)&&this.loadLayers(t,r)}onViewportChange(e){this.setState({viewport:e})}loadLayers(e,t,r){this.setState({subSlicesLayers:{},viewport:r}),t.data.slices.forEach((t=>{const r=[...t.form_data.filters||[],...e.filters||[],...e.extra_filters||[]],o={...t,form_data:{...t.form_data,filters:r}};l.Z.get({endpoint:h(o.form_data,"json")}).then((e=>{let{json:t}=e;const r=S[o.form_data.viz_type](o.form_data,t,this.props.onAddFilter,this.setTooltip,[],this.props.onSelect);this.setState({subSlicesLayers:{...this.state.subSlicesLayers,[o.slice_id]:r}})})).catch((()=>{}))}))}render(){const{payload:e,formData:t,setControlValue:r,height:o,width:a}=this.props,{subSlicesLayers:i}=this.state,n=Object.values(i);return(0,k.tZ)(u.F,{ref:this.containerRef,mapboxApiAccessToken:e.data.mapboxApiKey,viewport:this.state.viewport||this.props.viewport,layers:n,mapStyle:t.mapbox_style,setControlValue:r,onViewportChange:this.onViewportChange,height:o,width:a})}}Z.propTypes=j,Z.defaultProps=w;const L=Z},3251:(e,t,r)=>{r.r(t),r.d(t,{getLayer:()=>S,default:()=>Z});var o=r(67294),a=r(45697),i=r.n(a),n=r(21497),s=r(29319),l=r.n(s),u=r(84502),c=r(64106),d=r(21207),p=r(52154),g=r(1740),h=r(40461),f=r(11965);const v={fillColor:"fillColor",color:"fillColor",fill:"fillColor","fill-color":"fillColor",strokeColor:"strokeColor","stroke-color":"strokeColor","stroke-width":"strokeWidth"},m=(e,t)=>{const r={};return Object.keys(e).forEach((t=>{t in v?r[v[t]]=e[t]:r[t]=e[t]})),"string"==typeof e.fillColor&&(r.fillColor=(0,c.hexToRGB)(e.fillColor)),"string"==typeof e.strokeColor&&(r.strokeColor=(0,c.hexToRGB)(e.strokeColor)),{...r,...t}};let y;const _=(e,t,r)=>{if(e&&e.features&&e.features.forEach((o=>{_(o,t,e.extraProps||r)})),e&&e.geometry){const o={...e,properties:m(e.properties,t)};o.extraProps||(o.extraProps=r),y.push(o)}};function b(e){return e.object.extraProps&&(0,f.tZ)("div",{className:"deckgl-tooltip"},Object.keys(e.object.extraProps).map(((t,r)=>(0,f.tZ)(g.Z,{key:`prop-${r}`,label:`${t}: `,value:`${e.object.extraProps[t]}`}))))}const x=e=>{var t;return null==e||null==(t=e.properties)?void 0:t.fillColor},C=e=>{var t;return null==e||null==(t=e.properties)?void 0:t.strokeColor};function S(e,t,r,o){const a=e,i=a.fill_color_picker,s=a.stroke_color_picker,l=[i.r,i.g,i.b,255*i.a],u=[s.r,s.g,s.b,255*s.a],c={};let g;return l[3]>0&&(c.fillColor=l),u[3]>0&&(c.strokeColor=u),y=[],_(t.data,c),a.js_data_mutator&&(g=(0,d.Z)(a.js_data_mutator),y=g(y)),new n.Z({id:`geojson-layer-${a.slice_id}`,filled:a.filled,data:y,stroked:a.stroked,extruded:a.extruded,pointRadiusScale:a.point_radius_scale,getFillColor:x,getLineWidth:a.line_width||1,getLineColor:C,...(0,p.N)(a,o,b)})}const k={formData:i().object.isRequired,payload:i().object.isRequired,setControlValue:i().func.isRequired,viewport:i().object.isRequired,onAddFilter:i().func},j={onAddFilter(){}};class w extends o.Component{constructor(){super(...arguments),this.containerRef=o.createRef(),this.setTooltip=e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)}}render(){const{formData:e,payload:t,setControlValue:r,onAddFilter:o,height:a,width:i}=this.props;let{viewport:n}=this.props;if(e.autozoom){var s,c;const e=(null==t||null==(s=t.data)||null==(c=s.features)||null==c.reduce?void 0:c.reduce(((e,t)=>{const r=l()(t);return r?[...e,[r[0],r[1]],[r[2],r[3]]]:e}),[]))||[];e.length&&(n=(0,h.Z)(n,{width:i,height:a,points:e}))}const d=S(e,t,0,this.setTooltip);return(0,f.tZ)(u.F,{ref:this.containerRef,mapboxApiAccessToken:t.data.mapboxApiKey,viewport:n,layers:[d],mapStyle:e.mapbox_style,setControlValue:r,height:a,width:i})}}w.propTypes=k,w.defaultProps=j;const Z=w},94828:(e,t,r)=>{r.r(t),r.d(t,{getLayer:()=>g,default:()=>h});var o=r(99396),a=(r(67294),r(61988)),i=r(28062),n=r(52154),s=r(21207),l=r(64106),u=r(26331),c=r(1740),d=r(11965);function p(e){return(0,d.tZ)("div",{className:"deckgl-tooltip"},(0,d.tZ)(c.Z,{label:`${(0,a.t)("Longitude and Latitude")}: `,value:`${e.coordinate[0]}, ${e.coordinate[1]}`}),(0,d.tZ)(c.Z,{label:`${(0,a.t)("Height")}: `,value:`${e.object.elevationValue}`}))}function g(e,t,r,a){const u=e,c=i.getScale(u.color_scheme).range().map((e=>(0,l.hexToRGB)(e)));let d=t.data.features;u.js_data_mutator&&(d=(0,s.Z)(u.js_data_mutator)(d));const g=(0,n.Z)(u.js_agg_function,(e=>e.weight));return new o.Z({id:`grid-layer-${u.slice_id}`,data:d,pickable:!0,cellSize:u.grid_size,extruded:u.extruded,colorRange:c,outline:!1,getElevationValue:g,getColorValue:g,...(0,n.N)(u,a,p)})}const h=(0,u.G)(g,(function(e){return e.map((e=>e.position))}))},33452:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w,getLayer:()=>j});var o=r(80744),a=r(15103),i=r(4516),n=Math.PI/3,s=[0,n,2*n,3*n,4*n,5*n];function l(e){return e[0]}function u(e){return e[1]}var c=r(38550),d=r(73728),p=r(63295);function g(){}const h={colorDomain:null,colorRange:i.K,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",lowerPercentile:{type:"number",value:0,min:0,max:100},upperPercentile:{type:"number",value:100,min:0,max:100},colorScaleType:"quantize",onSetColorDomain:g,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationLowerPercentile:{type:"number",value:0,min:0,max:100},elevationUpperPercentile:{type:"number",value:100,min:0,max:100},elevationScale:{type:"number",min:0,value:1},elevationScaleType:"linear",onSetElevationDomain:g,radius:{type:"number",value:1e3,min:1},coverage:{type:"number",min:0,max:1,value:1},extruded:!1,hexagonAggregator:function(e,t){const{data:r,radius:a}=e,{viewport:i,attributes:d}=t,p=r.length?function(e,t){const{attributes:r}=t,o=r.positions.value,{size:a}=r.positions.getAccessor();let i,n=1/0,s=1/0,l=-1/0,u=-1/0;for(i=0;i<a*e.length;i+=a){const e=o[i],t=o[i+1];Number.isFinite(e)&&Number.isFinite(t)&&(n=Math.min(e,n),l=Math.max(e,l),s=Math.min(t,s),u=Math.max(t,u))}return[n,s,l,u].every(Number.isFinite)?[(n+l)/2,(s+u)/2]:null}(r,t):null,g=function(e,t,r){const{unitsPerMeter:o}=t.getDistanceScales(r);return e*o[0]}(a,i,p),h=[],{iterable:f,objectInfo:v}=(0,c.jB)(r),m=d.positions.value,{size:y}=d.positions.getAccessor();for(const e of f){v.index++;const t=v.index*y,r=[m[t],m[t+1]];Number.isFinite(r[0])&&Number.isFinite(r[1])?h.push({screenCoord:i.projectFlat(r),source:e,index:v.index}):o.Z.warn("HexagonLayer: invalid position")()}const _=function(){var e,t,r,o=0,a=0,i=1,c=1,d=l,p=u;function g(e){var o,a={},i=[],n=e.length;for(o=0;o<n;++o)if(!isNaN(l=+d.call(null,s=e[o],o,e))&&!isNaN(u=+p.call(null,s,o,e))){var s,l,u,c=Math.round(u/=r),g=Math.round(l=l/t-(1&c)/2),h=u-c;if(3*Math.abs(h)>1){var f=l-g,v=g+(l<g?-1:1)/2,m=c+(u<c?-1:1),y=l-v,_=u-m;f*f+h*h>y*y+_*_&&(g=v+(1&c?1:-1)/2,c=m)}var b=g+"-"+c,x=a[b];x?x.push(s):(i.push(x=a[b]=[s]),x.x=(g+(1&c)/2)*t,x.y=c*r)}return i}function h(e){var t=0,r=0;return s.map((function(o){var a=Math.sin(o)*e,i=-Math.cos(o)*e,n=a-t,s=i-r;return t=a,r=i,[n,s]}))}return g.hexagon=function(t){return"m"+h(null==t?e:+t).join("l")+"z"},g.centers=function(){for(var n=[],s=Math.round(a/r),l=Math.round(o/t),u=s*r;u<c+e;u+=r,++s)for(var d=l*t+(1&s)*t/2;d<i+t/2;d+=t)n.push([d,u]);return n},g.mesh=function(){var t=h(e).slice(0,4).join("l");return g.centers().map((function(e){return"M"+e+"m"+t})).join("")},g.x=function(e){return arguments.length?(d=e,g):d},g.y=function(e){return arguments.length?(p=e,g):p},g.radius=function(o){return arguments.length?(t=2*(e=+o)*Math.sin(n),r=1.5*e,g):e},g.size=function(e){return arguments.length?(o=a=0,i=+e[0],c=+e[1],g):[i-o,c-a]},g.extent=function(e){return arguments.length?(o=+e[0][0],a=+e[0][1],i=+e[1][0],c=+e[1][1],g):[[o,a],[i,c]]},g.radius(1)}().radius(g).x((e=>e.screenCoord[0])).y((e=>e.screenCoord[1]));return{hexagons:_(h).map(((e,t)=>({position:i.unprojectFlat([e.x,e.y]),points:e,index:t}))),radiusCommon:g}},getPosition:{type:"accessor",value:e=>e.position},material:!0,_filterData:{type:"function",value:null,optional:!0}};class f extends p.Z{shouldUpdateState({changeFlags:e}){return e.somethingChanged}initializeState(){const e=new d.Z({getAggregator:e=>e.hexagonAggregator,getCellSize:e=>e.radius});this.state={cpuAggregator:e,aggregatorState:e.state,hexagonVertices:null},this.getAttributeManager().add({positions:{size:3,accessor:"getPosition"}})}updateState(e){super.updateState(e);const{cpuAggregator:t,hexagonVertices:r}=this.state;e.changeFlags.propsOrDataChanged&&this.setState({aggregatorState:t.updateState(e,{viewport:this.context.viewport,attributes:this.getAttributes()})});const{hexagonVertices:o}=t.state.layerData||{};if(o&&r!==o){const e=this.convertLatLngToMeterOffset(o);e&&this.setState({hexagonVertices:o,vertices:e})}else this.updateRadiusAngle()}updateRadiusAngle(e){const{viewport:t}=this.context,{unitsPerMeter:r}=t.getDistanceScales(),{cpuAggregator:o}=this.state;if(o.state.layerData&&o.state.layerData.radiusCommon){const{radiusCommon:e}=o.state.layerData,t=e/r[0];this.setState({angle:90,radius:t})}}convertLatLngToMeterOffset(e){const{viewport:t}=this.context;if(Array.isArray(e)&&6===e.length){const r=e[0],o=e[3],a=[(r[0]+o[0])/2,(r[1]+o[1])/2],i=t.projectFlat(a),{metersPerUnit:n}=t.getDistanceScales(a);return e.map((e=>{const r=t.projectFlat(e);return[(r[0]-i[0])*n[0],(r[1]-i[1])*n[1]]}))}return o.Z.error("HexagonLayer: hexagonVertices needs to be an array of 6 points")(),null}getPickingInfo({info:e}){return this.state.cpuAggregator.getPickingInfo({info:e})}_onGetSublayerColor(e){return this.state.cpuAggregator.getAccessor("fillColor")(e)}_onGetSublayerElevation(e){return this.state.cpuAggregator.getAccessor("elevation")(e)}_getSublayerUpdateTriggers(){return this.state.cpuAggregator.getUpdateTriggers(this.props)}renderLayers(){const{elevationScale:e,extruded:t,coverage:r,material:o,transitions:i}=this.props,{angle:n,radius:s,cpuAggregator:l,vertices:u}=this.state,c=this.getSubLayerClass("hexagon-cell",a.Z),d=this._getSublayerUpdateTriggers();return new c({...u&&u.length?{vertices:u,radius:1}:{radius:s,angle:n},diskResolution:6,elevationScale:e,extruded:t,coverage:r,material:o,getFillColor:this._onGetSublayerColor.bind(this),getElevation:this._onGetSublayerElevation.bind(this),transitions:i&&{getFillColor:i.getColorValue||i.getColorWeight,getElevation:i.getElevationValue||i.getElevationWeight}},this.getSubLayerProps({id:"hexagon-cell",updateTriggers:d}),{data:l.state.layerData.data})}}f.layerName="HexagonLayer",f.defaultProps=h,r(67294);var v=r(61988),m=r(28062),y=r(52154),_=r(21207),b=r(64106),x=r(26331),C=r(1740),S=r(11965);function k(e){return(0,S.tZ)("div",{className:"deckgl-tooltip"},(0,S.tZ)(C.Z,{label:`${(0,v.t)("Centroid (Longitude and Latitude)")}: `,value:`(${e.coordinate[0]}, ${e.coordinate[1]})`}),(0,S.tZ)(C.Z,{label:`${(0,v.t)("Height")}: `,value:`${e.object.elevationValue}`}))}function j(e,t,r,o){const a=e,i=m.getScale(a.color_scheme).range().map((e=>(0,b.hexToRGB)(e)));let n=t.data.features;a.js_data_mutator&&(n=(0,_.Z)(a.js_data_mutator)(n));const s=(0,y.Z)(a.js_agg_function,(e=>e.weight));return new f({id:`hex-layer-${a.slice_id}`,data:n,pickable:!0,radius:a.grid_size,extruded:a.extruded,colorRange:i,outline:!1,getElevationValue:s,getColorValue:s,...(0,y.N)(a,o,k)})}const w=(0,x.G)(j,(function(e){return e.map((e=>e.position))}))},14228:(e,t,r)=>{r.r(t),r.d(t,{getLayer:()=>c,default:()=>d});var o=r(62112),a=(r(67294),r(52154)),i=r(21207),n=r(26331),s=r(1740),l=r(11965);function u(e){return e.object.extraProps&&(0,l.tZ)("div",{className:"deckgl-tooltip"},Object.keys(e.object.extraProps).map(((t,r)=>(0,l.tZ)(s.Z,{key:`prop-${r}`,label:`${t}: `,value:`${e.object.extraProps[t]}`}))))}function c(e,t,r,n){const s=e,l=s.color_picker,c=[l.r,l.g,l.b,255*l.a];let d=t.data.features.map((e=>({...e,path:e.path,width:s.line_width,color:c})));return s.js_data_mutator&&(d=(0,i.Z)(s.js_data_mutator)(d)),new o.Z({id:`path-layer-${s.slice_id}`,getColor:e=>e.color,getPath:e=>e.path,getWidth:e=>e.width,data:d,rounded:!0,widthScale:1,...(0,a.N)(s,n,u)})}const d=(0,n.G)(c,(function(e){let t=[];return e.forEach((e=>{t=t.concat(e.path)})),t}))},54448:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g,getLayer:()=>p});var o=r(28569),a=(r(67294),r(56652)),i=r(61988),n=r(52154),s=r(26331),l=r(1740);const u=1609.34;var c=r(11965);function d(e,t){return r=>{var o;const n=(null==t?void 0:t[e.point_radius_fixed.value])||(0,a.Z)(null==(o=e.point_radius_fixed)?void 0:o.value);return(0,c.tZ)("div",{className:"deckgl-tooltip"},(0,c.tZ)(l.Z,{label:`${(0,i.t)("Longitude and Latitude")}: `,value:`${r.object.position[0]}, ${r.object.position[1]}`}),r.object.cat_color&&(0,c.tZ)(l.Z,{label:`${(0,i.t)("Category")}: `,value:`${r.object.cat_color}`}),r.object.metric&&(0,c.tZ)(l.Z,{label:`${n}: `,value:`${r.object.metric}`}))}}function p(e,t,r,a,i){const s=e,l=t.data.features.map((e=>{let t=(r=s.point_unit,o=e.radius,("square_m"===r?Math.sqrt(o/Math.PI):"radius_m"===r?o:"radius_km"===r?1e3*o:"radius_miles"===r?o*u:"square_km"===r?1e3*Math.sqrt(o/Math.PI):"square_miles"===r?Math.sqrt(o/Math.PI)*u:null)||10);var r,o;if(s.multiplier&&(t*=s.multiplier),e.color)return{...e,radius:t};const a=s.color_picker||{r:0,g:0,b:0,a:1},i=[a.r,a.g,a.b,255*a.a];return{...e,radius:t,color:i}}));return new o.Z({id:`scatter-layer-${s.slice_id}`,data:l,fp64:!0,getFillColor:e=>e.color,getRadius:e=>e.radius,radiusMinPixels:s.min_radius||null,radiusMaxPixels:s.max_radius||null,stroked:!1,...(0,n.N)(s,a,d(s,null==i?void 0:i.verboseMap))})}const g=(0,s.B)(p,(function(e){return e.map((e=>e.position))}))}}]);
//# sourceMappingURL=06ba46bd6ed67e3cfa8d.chunk.js.map