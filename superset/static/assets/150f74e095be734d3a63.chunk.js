"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9396],{99396:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(78918),o=n(77380),a=n(53478),r=n(80744),s=n(15614),l=n(4516),g=n(95772),c=n(93844),u=n(95644),d=n(51331),f=n(75126),v=n(281),m=n(53982),p=n(74538);const h=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),y=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),S=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),x=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),P={POSITION:{size:3,value:new Float32Array(y)},NORMAL:{size:3,value:new Float32Array(S)},TEXCOORD_0:{size:2,value:new Float32Array(x)}};class b extends m.Z{constructor(e={}){const{id:t=(0,p.hQ)("cube-geometry")}=e;super({...e,id:t,indices:{size:1,value:new Uint16Array(h)},attributes:{...P,...e.attributes}})}}var C=n(41083);const A={colorDomain:null,colorRange:l.K,elevationDomain:null,elevationRange:[0,1e3],elevationScale:{type:"number",min:0,value:1},gridSize:{type:"array",min:0,value:[1,1]},gridOrigin:{type:"array",min:0,value:[0,0]},gridOffset:{type:"array",min:0,value:[0,0]},cellSize:{type:"number",min:0,max:1e3,value:1e3},offset:{type:"array",min:0,value:[1,1]},coverage:{type:"number",min:0,max:1,value:1},extruded:!0,material:!0};class D extends g.Z{getShaders(){return super.getShaders({vs:"#version 300 es\n#define SHADER_NAME gpu-grid-cell-layer-vertex-shader\n#define RANGE_COUNT 6\n\nin vec3 positions;\nin vec3 normals;\n\nin vec4 colors;\nin vec4 elevations;\nin vec3 instancePickingColors;\nuniform vec2 offset;\nuniform bool extruded;\nuniform float cellSize;\nuniform float coverage;\nuniform float opacity;\nuniform float elevationScale;\n\nuniform ivec2 gridSize;\nuniform vec2 gridOrigin;\nuniform vec2 gridOriginLow;\nuniform vec2 gridOffset;\nuniform vec2 gridOffsetLow;\nuniform vec4 colorRange[RANGE_COUNT];\nuniform vec2 elevationRange;\nuniform vec2 colorDomain;\nuniform bool colorDomainValid;\nuniform vec2 elevationDomain;\nuniform bool elevationDomainValid;\n\nlayout(std140) uniform;\nuniform ColorData\n{\n  vec4 maxMinCount;\n} colorData;\nuniform ElevationData\n{\n  vec4 maxMinCount;\n} elevationData;\n\n#define EPSILON 0.00001\nout vec4 vColor;\n\nvec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {\n  vec4 outColor = vec4(0., 0., 0., 0.);\n  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {\n    float domainRange = domain.y - domain.x;\n    if (domainRange <= 0.) {\n      outColor = colorRange[0];\n    } else {\n      float rangeCount = float(RANGE_COUNT);\n      float rangeStep = domainRange / rangeCount;\n      float idx = floor((value - domain.x) / rangeStep);\n      idx = clamp(idx, 0., rangeCount - 1.);\n      int intIdx = int(idx);\n      outColor = colorRange[intIdx];\n    }\n  }\n  return outColor;\n}\n\nfloat linearScale(vec2 domain, vec2 range, float value) {\n  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {\n    return ((value - domain.x) / (domain.y - domain.x)) * (range.y - range.x) + range.x;\n  }\n  return -1.;\n}\n\nvoid main(void) {\n\n  vec2 clrDomain = colorDomainValid ? colorDomain : vec2(colorData.maxMinCount.a, colorData.maxMinCount.r);\n  vec4 color = quantizeScale(clrDomain, colorRange, colors.r);\n\n  float elevation = 0.0;\n\n  if (extruded) {\n    vec2 elvDomain = elevationDomainValid ? elevationDomain : vec2(elevationData.maxMinCount.a, elevationData.maxMinCount.r);\n    elevation = linearScale(elvDomain, elevationRange, elevations.r);\n    elevation = elevation  * (positions.z + 1.0) / 2.0 * elevationScale;\n  }\n  float shouldRender = float(color.r > 0.0 && elevations.r >= 0.0);\n  float dotRadius = cellSize / 2. * coverage * shouldRender;\n\n  int yIndex = (gl_InstanceID / gridSize[0]);\n  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);\n\n  vec2 instancePositionXFP64 = mul_fp64(vec2(gridOffset[0], gridOffsetLow[0]), vec2(float(xIndex), 0.));\n  instancePositionXFP64 = sum_fp64(instancePositionXFP64, vec2(gridOrigin[0], gridOriginLow[0]));\n  vec2 instancePositionYFP64 = mul_fp64(vec2(gridOffset[1], gridOffsetLow[1]), vec2(float(yIndex), 0.));\n  instancePositionYFP64 = sum_fp64(instancePositionYFP64, vec2(gridOrigin[1], gridOriginLow[1]));\n\n  vec3 centroidPosition = vec3(instancePositionXFP64[0], instancePositionYFP64[0], elevation);\n  vec3 centroidPosition64Low = vec3(instancePositionXFP64[1], instancePositionYFP64[1], 0.0);\n  vec3 pos = vec3(project_size(positions.xy + offset) * dotRadius, 0.);\n  picking_setPickingColor(instancePickingColors);\n\n  vec4 position_commonspace;\n  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, position_commonspace);\n\n  vec3 normals_commonspace = project_normal(normals);\n\n   if (extruded) {\n    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, position_commonspace.xyz, normals_commonspace);\n    vColor = vec4(lightColor, color.a * opacity) / 255.;\n  } else {\n    vColor = vec4(color.rgb, color.a * opacity) / 255.;\n  }\n}\n",fs:"#version 300 es\n#define SHADER_NAME gpu-grid-cell-layer-fragment-shader\n\nprecision highp float;\n\nin vec4 vColor;\n\nout vec4 fragColor;\n\nvoid main(void) {\n  fragColor = vColor;\n  fragColor = picking_filterColor(fragColor);\n}\n",modules:[c.Z,u.N,d.Z,C.n2]})}initializeState(){const{gl:e}=this.context;this.getAttributeManager().addInstanced({colors:{size:4,noAlloc:!0},elevations:{size:4,noAlloc:!0}});const t=this._getModel(e);this._setupUniformBuffer(t),this.setState({model:t})}_getModel(e){return new v.Z(e,{...this.getShaders(),id:this.props.id,geometry:new b,isInstanced:!0})}draw({uniforms:e}){const{cellSize:t,offset:n,extruded:i,elevationScale:o,coverage:a,gridSize:r,gridOrigin:s,gridOffset:g,elevationRange:c,colorMaxMinBuffer:u,elevationMaxMinBuffer:d}=this.props,v=[(0,f.Ks)(s[0]),(0,f.Ks)(s[1])],m=[(0,f.Ks)(g[0]),(0,f.Ks)(g[1])],p=this.getDomainUniforms(),h=(0,l.P)(this.props.colorRange);this.bindUniformBuffers(u,d),this.state.model.setUniforms(e).setUniforms(p).setUniforms({cellSize:t,offset:n,extruded:i,elevationScale:o,coverage:a,gridSize:r,gridOrigin:s,gridOriginLow:v,gridOffset:g,gridOffsetLow:m,colorRange:h,elevationRange:c}).draw(),this.unbindUniformBuffers(u,d)}bindUniformBuffers(e,t){e.bind({target:35345,index:0}),t.bind({target:35345,index:1})}unbindUniformBuffers(e,t){e.unbind({target:35345,index:0}),t.unbind({target:35345,index:1})}getDomainUniforms(){const{colorDomain:e,elevationDomain:t}=this.props,n={};return null!==e?(n.colorDomainValid=!0,n.colorDomain=e):n.colorDomainValid=!1,null!==t?(n.elevationDomainValid=!0,n.elevationDomain=t):n.elevationDomainValid=!1,n}_setupUniformBuffer(e){const t=this.context.gl,n=e.program.handle,i=t.getUniformBlockIndex(n,"ColorData"),o=t.getUniformBlockIndex(n,"ElevationData");t.uniformBlockBinding(n,i,0),t.uniformBlockBinding(n,o,1)}}D.layerName="GPUGridCellLayer",D.defaultProps=A;var w=n(19936),O=n(13208),z=n(70050);const M={colorDomain:null,colorRange:l.K,getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",elevationDomain:null,elevationRange:[0,1e3],getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationScale:{type:"number",min:0,value:1},cellSize:{type:"number",min:1,max:1e3,value:1e3},coverage:{type:"number",min:0,max:1,value:1},getPosition:{type:"accessor",value:e=>e.position},extruded:!1,material:!0},U={data:{props:["cellSize","colorAggregation","elevationAggregation"]}},R="positions";class _ extends O.Z{initializeState(){const{gl:e}=this.context,t=o.Z.isSupported(e);t||r.Z.error("GPUGridLayer is not supported on this browser, use GridLayer instead")(),super.initializeState({dimensions:U}),this.setState({gpuAggregation:!0,projectPoints:!1,isSupported:t,weights:{color:{needMin:!0,needMax:!0,combineMaxMin:!0,maxMinBuffer:new a.Z(e,{byteLength:16,accessor:{size:4,type:5126,divisor:1}})},elevation:{needMin:!0,needMax:!0,combineMaxMin:!0,maxMinBuffer:new a.Z(e,{byteLength:16,accessor:{size:4,type:5126,divisor:1}})}},positionAttributeName:"positions"}),this.getAttributeManager().add({[R]:{size:3,accessor:"getPosition",type:5130,fp64:this.use64bitPositions()},color:{size:3,accessor:"getColorWeight"},elevation:{size:3,accessor:"getElevationWeight"}})}updateState(e){if(!1===this.state.isSupported)return;super.updateState(e);const{aggregationDirty:t}=this.state;t&&this.setState({gridHash:null})}getHashKeyForIndex(e){const{numRow:t,numCol:n,boundingBox:i,gridOffset:o}=this.state,a=[n,t],r=[i.xMin,i.yMin],s=[o.xOffset,o.yOffset],l=Math.floor(e/a[0]),g=e-l*a[0],c=Math.floor((l*s[1]+r[1]+90+s[1]/2)/s[1]),u=Math.floor((g*s[0]+r[0]+180+s[0]/2)/s[0]);return"".concat(c,"-").concat(u)}getPositionForIndex(e){const{numRow:t,numCol:n,boundingBox:i,gridOffset:o}=this.state,a=[n,t],r=[i.xMin,i.yMin],s=[o.xOffset,o.yOffset],l=Math.floor(e/a[0]);return[(e-l*a[0])*s[0]+r[0],l*s[1]+r[1]]}getPickingInfo({info:e,mode:t}){const{index:n}=e;let i=null;if(n>=0){const{gpuGridAggregator:e}=this.state,a=this.getPositionForIndex(n),r=o.Z.getAggregationData({pixelIndex:n,...e.getData("color")}),s=o.Z.getAggregationData({pixelIndex:n,...e.getData("elevation")});if(i={colorValue:r.cellWeight,elevationValue:s.cellWeight,count:r.cellCount||s.cellCount,position:a,totalCount:r.totalCount||s.totalCount},"hover"!==t){const{props:e}=this;let{gridHash:t}=this.state;if(!t){const{gridOffset:n,translation:i,boundingBox:o}=this.state,{viewport:a}=this.context,r=this.getAttributes();t=(0,w.h)(e,{gridOffset:n,attributes:r,viewport:a,translation:i,boundingBox:o}).gridHash,this.setState({gridHash:t})}const o=t[this.getHashKeyForIndex(n)];Object.assign(i,o)}}return e.picked=Boolean(i),e.object=i,e}renderLayers(){if(!this.state.isSupported)return null;const{elevationScale:e,extruded:t,cellSize:n,coverage:i,material:o,elevationRange:a,colorDomain:r,elevationDomain:s}=this.props,{weights:g,numRow:c,numCol:u,gridOrigin:d,gridOffset:f}=this.state,{color:v,elevation:m}=g,p=(0,l.P)(this.props.colorRange);return new(this.getSubLayerClass("gpu-grid-cell",D))({gridSize:[u,c],gridOrigin:d,gridOffset:[f.xOffset,f.yOffset],colorRange:p,elevationRange:a,colorDomain:r,elevationDomain:s,cellSize:n,coverage:i,material:o,elevationScale:e,extruded:t},this.getSubLayerProps({id:"gpu-grid-cell"}),{data:{attributes:{colors:v.aggregationBuffer,elevations:m.aggregationBuffer}},colorMaxMinBuffer:v.maxMinBuffer,elevationMaxMinBuffer:m.maxMinBuffer,numInstances:u*c})}finalizeState(){const{color:e,elevation:t}=this.state.weights;[e,t].forEach((e=>{const{aggregationBuffer:t,maxMinBuffer:n}=e;n.delete(),null==t||t.delete()})),super.finalizeState()}updateAggregationState(e){const{props:t,oldProps:n}=e,{cellSize:i,coordinateSystem:o}=t,{viewport:a}=this.context,r=n.cellSize!==i,{dimensions:s}=this.state,l=this.isAttributeChanged(R),g=l||this.isAttributeChanged();let{boundingBox:c}=this.state;if(l&&(c=(0,z.A5)(this.getAttributes(),this.getNumInstances()),this.setState({boundingBox:c})),l||r){const{gridOffset:e,translation:t,width:n,height:r,numCol:s,numRow:l}=(0,z.PQ)(c,i,a,o);this.allocateResources(l,s),this.setState({gridOffset:e,translation:t,gridOrigin:[-1*t[0],-1*t[1]],width:n,height:r,numCol:s,numRow:l})}const u=g||this.isAggregationDirty(e,{dimension:s.data,compareAll:!0});u&&this._updateAccessors(e),this.setState({aggregationDataDirty:u})}_updateAccessors(e){const{colorAggregation:t,elevationAggregation:n}=e.props,{color:i,elevation:o}=this.state.weights;i.operation=s.KM[t],o.operation=s.KM[n]}}_.layerName="GPUGridLayer",_.defaultProps=M;var L=n(15103);class I extends L.Z{getGeometry(e){return new b}draw({uniforms:e}){const{elevationScale:t,extruded:n,offset:i,coverage:o,cellSize:a,angle:r}=this.props;this.state.model.setUniforms(e).setUniforms({radius:a/2,angle:r,offset:i,extruded:n,coverage:o,elevationScale:t,edgeDistance:1,isWireframe:!1}).draw()}}I.layerName="GridCellLayer",I.defaultProps={cellSize:{type:"number",min:0,value:1e3},offset:{type:"array",min:0,value:[1,1]}};var B=n(73728),E=n(63295);function G(){}const N={colorDomain:null,colorRange:l.K,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",lowerPercentile:{type:"number",min:0,max:100,value:0},upperPercentile:{type:"number",min:0,max:100,value:100},colorScaleType:"quantize",onSetColorDomain:G,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationLowerPercentile:{type:"number",min:0,max:100,value:0},elevationUpperPercentile:{type:"number",min:0,max:100,value:100},elevationScale:{type:"number",min:0,value:1},elevationScaleType:"linear",onSetElevationDomain:G,gridAggregator:w.h,cellSize:{type:"number",min:0,max:1e3,value:1e3},coverage:{type:"number",min:0,max:1,value:1},getPosition:{type:"accessor",value:e=>e.position},extruded:!1,material:!0,_filterData:{type:"function",value:null,optional:!0}};class F extends E.Z{initializeState(){const e=new B.Z({getAggregator:e=>e.gridAggregator,getCellSize:e=>e.cellSize});this.state={cpuAggregator:e,aggregatorState:e.state},this.getAttributeManager().add({positions:{size:3,accessor:"getPosition"}})}updateState(e){super.updateState(e),this.setState({aggregatorState:this.state.cpuAggregator.updateState(e,{viewport:this.context.viewport,attributes:this.getAttributes(),numInstances:this.getNumInstances(e.props)})})}getPickingInfo({info:e}){return this.state.cpuAggregator.getPickingInfo({info:e})}_onGetSublayerColor(e){return this.state.cpuAggregator.getAccessor("fillColor")(e)}_onGetSublayerElevation(e){return this.state.cpuAggregator.getAccessor("elevation")(e)}_getSublayerUpdateTriggers(){return this.state.cpuAggregator.getUpdateTriggers(this.props)}renderLayers(){const{elevationScale:e,extruded:t,cellSize:n,coverage:i,material:o,transitions:a}=this.props,{cpuAggregator:r}=this.state,s=this.getSubLayerClass("grid-cell",I),l=this._getSublayerUpdateTriggers();return new s({cellSize:n,coverage:i,material:o,elevationScale:e,extruded:t,getFillColor:this._onGetSublayerColor.bind(this),getElevation:this._onGetSublayerElevation.bind(this),transitions:a&&{getFillColor:a.getColorValue||a.getColorWeight,getElevation:a.getElevationValue||a.getElevationWeight}},this.getSubLayerProps({id:"grid-cell",updateTriggers:l}),{data:r.state.layerData.data})}}F.layerName="CPUGridLayer",F.defaultProps=N;const Z={..._.defaultProps,...F.defaultProps,gpuAggregation:!1};class k extends i.Z{initializeState(){this.state={useGPUAggregation:!0}}updateState({oldProps:e,props:t,changeFlags:n}){const i={};i.useGPUAggregation=this.canUseGPUAggregation(t),this.setState(i)}renderLayers(){const{data:e,updateTriggers:t}=this.props,n=this.state.useGPUAggregation?"GPU":"CPU";return new(this.state.useGPUAggregation?this.getSubLayerClass("GPU",_):this.getSubLayerClass("CPU",F))(this.props,this.getSubLayerProps({id:n,updateTriggers:t}),{data:e})}canUseGPUAggregation(e){const{gpuAggregation:t,lowerPercentile:n,upperPercentile:i,getColorValue:a,getElevationValue:r,colorScaleType:s}=e;return!!t&&!!o.Z.isSupported(this.context.gl)&&0===n&&100===i&&null===a&&null===r&&"quantile"!==s&&"ordinal"!==s}}k.layerName="GridLayer",k.defaultProps=Z}}]);
//# sourceMappingURL=150f74e095be734d3a63.chunk.js.map