"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2112],{28005:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(38550),o=i(36610),s=i(75304),r=i(53478);class a{constructor(t={}){const{attributes:e={}}=t;this.typedArrayManager=o.Z,this.indexStarts=null,this.vertexStarts=null,this.vertexCount=0,this.instanceCount=0,this.attributes={},this._attributeDefs=e,this.opts=t,this.updateGeometry(t),Object.seal(this)}updateGeometry(t){Object.assign(this.opts,t);const{data:e,buffers:i={},getGeometry:n,geometryBuffer:o,positionFormat:r,dataChanged:a,normalize:c=!0}=this.opts;if(this.data=e,this.getGeometry=n,this.positionSize=o&&o.size||("XY"===r?2:3),this.buffers=i,this.normalize=c,o&&((0,s.Z)(e.startIndices),this.getGeometry=this.getGeometryFromBuffer(o),c||(i.positions=o)),this.geometryBuffer=i.positions,Array.isArray(a))for(const t of a)this._rebuildGeometry(t);else this._rebuildGeometry()}updatePartialGeometry({startRow:t,endRow:e}){this._rebuildGeometry({startRow:t,endRow:e})}normalizeGeometry(t){return t}updateGeometryAttributes(t,e,i){throw new Error("Not implemented")}getGeometrySize(t){throw new Error("Not implemented")}getGeometryFromBuffer(t){const e=t.value||t;return(0,s.Z)(ArrayBuffer.isView(e)),(0,n.jr)(e,{size:this.positionSize,offset:t.offset,stride:t.stride,startIndices:this.data.startIndices})}_allocate(t,e){const{attributes:i,buffers:n,_attributeDefs:o,typedArrayManager:s}=this;for(const r in o)if(r in n)s.release(i[r]),i[r]=null;else{const n=o[r];n.copy=e,i[r]=s.allocate(i[r],t,n)}}_forEachGeometry(t,e,i){const{data:o,getGeometry:s}=this,{iterable:r,objectInfo:a}=(0,n.jB)(o,e,i);for(const e of r)a.index++,t(s(e,a),a.index)}_rebuildGeometry(t){if(!this.data||!this.getGeometry)return;let{indexStarts:e,vertexStarts:i,instanceCount:n}=this;const{data:o,geometryBuffer:s}=this,{startRow:a=0,endRow:c=1/0}=t||{},l={};if(t||(e=[0],i=[0]),this.normalize||!s)this._forEachGeometry(((t,e)=>{t=this.normalizeGeometry(t),l[e]=t,i[e+1]=i[e]+this.getGeometrySize(t)}),a,c),n=i[i.length-1];else if(s.buffer instanceof r.Z){const t=s.stride||4*this.positionSize;i=o.startIndices,n=i[o.length]||s.buffer.byteLength/t}else{const t=s.value||s,e=s.stride/t.BYTES_PER_ELEMENT||this.positionSize;i=o.startIndices,n=i[o.length]||t.length/e}this._allocate(n,Boolean(t)),this.indexStarts=e,this.vertexStarts=i,this.instanceCount=n;const d={};this._forEachGeometry(((t,o)=>{t=l[o]||t,d.vertexStart=i[o],d.indexStart=e[o];const s=o<i.length-1?i[o+1]:n;d.geometrySize=s-i[o],d.geometryIndex=o,this.updateGeometryAttributes(t,d)}),a,c),this.vertexCount=e[e.length-1]}}},62112:(t,e,i)=>{i.d(e,{Z:()=>g});var n=i(95772),o=i(93844),s=i(51331),r=i(80744),a=i(281),c=i(53982),l=i(28005),d=i(1738);class p extends l.Z{constructor(t){super({...t,attributes:{positions:{size:3,padding:18,initialize:!0,type:t.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}getGeometryFromBuffer(t){return this.normalize?super.getGeometryFromBuffer(t):()=>null}normalizeGeometry(t){return this.normalize?function(t,e,i,n){let o=t;if(Array.isArray(t[0])){const i=t.length*e;o=new Array(i);for(let i=0;i<t.length;i++)for(let n=0;n<e;n++)o[i*e+n]=t[i][n]||0}return i?(0,d.dj)(o,{size:e,gridResolution:i}):n?(0,d.ct)(o,{size:e}):o}(t,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):t}get(t){return this.attributes[t]}getGeometrySize(t){if(Array.isArray(t[0])){let e=0;for(const i of t)e+=this.getGeometrySize(i);return e}const e=this.getPathLength(t);return e<2?0:this.isClosed(t)?e<3?0:e+2:e}updateGeometryAttributes(t,e){if(0!==e.geometrySize)if(t&&Array.isArray(t[0]))for(const i of t){const t=this.getGeometrySize(i);e.geometrySize=t,this.updateGeometryAttributes(i,e),e.vertexStart+=t}else this._updateSegmentTypes(t,e),this._updatePositions(t,e)}_updateSegmentTypes(t,e){const{segmentTypes:i}=this.attributes,n=this.isClosed(t),{vertexStart:o,geometrySize:s}=e;i.fill(0,o,o+s),n?(i[o]=4,i[o+s-2]=4):(i[o]+=1,i[o+s-2]+=2),i[o+s-1]=4}_updatePositions(t,e){const{positions:i}=this.attributes;if(!i)return;const{vertexStart:n,geometrySize:o}=e,s=new Array(3);for(let e=n,r=0;r<o;e++,r++)this.getPointOnPath(t,r,s),i[3*e]=s[0],i[3*e+1]=s[1],i[3*e+2]=s[2]}getPathLength(t){return t.length/this.positionSize}getPointOnPath(t,e,i=[]){const{positionSize:n}=this;e*n>=t.length&&(e+=1-t.length/n);const o=e*n;return i[0]=t[o],i[1]=t[o+1],i[2]=3===n&&t[o+2]||0,i}isClosed(t){if(!this.normalize)return this.opts.loop;const{positionSize:e}=this,i=t.length-e;return t[0]===t[i]&&t[1]===t[i+1]&&(2===e||t[2]===t[i+2])}}const h=[0,0,0,255],f={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:t=>t.path},getColor:{type:"accessor",value:h},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},u={enter:(t,e)=>e.length?e.subarray(e.length-t.length):t};class g extends n.Z{getShaders(){return super.getShaders({vs:"#define SHADER_NAME path-layer-vertex-shader\n\nattribute vec2 positions;\n\nattribute float instanceTypes;\nattribute vec3 instanceStartPositions;\nattribute vec3 instanceEndPositions;\nattribute vec3 instanceLeftPositions;\nattribute vec3 instanceRightPositions;\nattribute vec3 instanceLeftPositions64Low;\nattribute vec3 instanceStartPositions64Low;\nattribute vec3 instanceEndPositions64Low;\nattribute vec3 instanceRightPositions64Low;\nattribute float instanceStrokeWidths;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\n\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nuniform float jointType;\nuniform float capType;\nuniform float miterLimit;\nuniform bool billboard;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\nvarying float vJointType;\n\nconst float EPSILON = 0.001;\nconst vec3 ZERO_OFFSET = vec3(0.0);\n\nfloat flipIfTrue(bool flag) {\n  return -(float(flag) * 2. - 1.);\n}\nvec3 lineJoin(\n  vec3 prevPoint, vec3 currPoint, vec3 nextPoint,\n  vec2 width\n) {\n  bool isEnd = positions.x > 0.0;\n  float sideOfPath = positions.y;\n  float isJoint = float(sideOfPath == 0.0);\n\n  vec3 deltaA3 = (currPoint - prevPoint);\n  vec3 deltaB3 = (nextPoint - currPoint);\n\n  mat3 rotationMatrix;\n  bool needsRotation = !billboard && project_needs_rotation(currPoint, rotationMatrix);\n  if (needsRotation) {\n    deltaA3 = deltaA3 * rotationMatrix;\n    deltaB3 = deltaB3 * rotationMatrix;\n  }\n  vec2 deltaA = deltaA3.xy / width;\n  vec2 deltaB = deltaB3.xy / width;\n\n  float lenA = length(deltaA);\n  float lenB = length(deltaB);\n\n  vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);\n  vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);\n\n  vec2 perpA = vec2(-dirA.y, dirA.x);\n  vec2 perpB = vec2(-dirB.y, dirB.x);\n  vec2 tangent = dirA + dirB;\n  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;\n  vec2 miterVec = vec2(-tangent.y, tangent.x);\n  vec2 dir = isEnd ? dirA : dirB;\n  vec2 perp = isEnd ? perpA : perpB;\n  float L = isEnd ? lenA : lenB;\n  float sinHalfA = abs(dot(miterVec, perp));\n  float cosHalfA = abs(dot(dirA, miterVec));\n  float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);\n  float cornerPosition = sideOfPath * turnDirection;\n\n  float miterSize = 1.0 / max(sinHalfA, EPSILON);\n  miterSize = mix(\n    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),\n    miterSize,\n    step(0.0, cornerPosition)\n  );\n\n  vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))\n    * (sideOfPath + isJoint * turnDirection);\n  bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));\n  bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));\n  bool isCap = isStartCap || isEndCap;\n  if (isCap) {\n    offsetVec = mix(perp * sideOfPath, dir * capType * 4.0 * flipIfTrue(isStartCap), isJoint);\n    vJointType = capType;\n  } else {\n    vJointType = jointType;\n  }\n  vPathLength = L;\n  vCornerOffset = offsetVec;\n  vMiterLength = dot(vCornerOffset, miterVec * turnDirection);\n  vMiterLength = isCap ? isJoint : vMiterLength;\n\n  vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);\n  vPathPosition = vec2(\n    dot(offsetFromStartOfPath, perp),\n    dot(offsetFromStartOfPath, dir)\n  );\n  geometry.uv = vPathPosition;\n\n  float isValid = step(instanceTypes, 3.5);\n  vec3 offset = vec3(offsetVec * width * isValid, 0.0);\n\n  if (needsRotation) {\n    offset = rotationMatrix * offset;\n  }\n  return currPoint + offset;\n}\nvoid clipLine(inout vec4 position, vec4 refPosition) {\n  if (position.w < EPSILON) {\n    float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);\n    position = refPosition + (position - refPosition) * r;\n  }\n}\n\nvoid main() {\n  geometry.worldPosition = instanceStartPositions;\n  geometry.worldPositionAlt = instanceEndPositions;\n  geometry.pickingColor = instancePickingColors;\n\n  vec2 widthPixels = vec2(clamp(project_size_to_pixel(instanceStrokeWidths * widthScale),\n    widthMinPixels, widthMaxPixels) / 2.0);\n  vec3 width;\n\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);\n\n  float isEnd = positions.x;\n\n  vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);\n  vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);\n\n  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);\n  vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);\n\n  vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);\n  vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);\n\n  if (billboard) {\n    vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);\n    vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);\n    vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);\n\n    clipLine(prevPositionScreen, currPositionScreen);\n    clipLine(nextPositionScreen, currPositionScreen);\n    clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));\n\n    width = vec3(widthPixels, 0.0);\n    DECKGL_FILTER_SIZE(width, geometry);\n\n    vec3 pos = lineJoin(\n      prevPositionScreen.xyz / prevPositionScreen.w,\n      currPositionScreen.xyz / currPositionScreen.w,\n      nextPositionScreen.xyz / nextPositionScreen.w,\n      project_pixel_size_to_clipspace(width.xy)\n    );\n\n    gl_Position = vec4(pos * currPositionScreen.w, currPositionScreen.w);\n  } else {\n    prevPosition = project_position(prevPosition, prevPosition64Low);\n    currPosition = project_position(currPosition, currPosition64Low);\n    nextPosition = project_position(nextPosition, nextPosition64Low);\n\n    width = vec3(project_pixel_size(widthPixels), 0.0);\n    DECKGL_FILTER_SIZE(width, geometry);\n\n    vec4 pos = vec4(\n      lineJoin(prevPosition, currPosition, nextPosition, width.xy),\n      1.0);\n    geometry.position = pos;\n    gl_Position = project_common_position_to_clipspace(pos);\n  }\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n",fs:"#define SHADER_NAME path-layer-fragment-shader\n\nprecision highp float;\n\nuniform float miterLimit;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\nvarying float vJointType;\n\nvoid main(void) {\n  geometry.uv = vPathPosition;\n\n  if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {\n    if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {\n      discard;\n    }\n    if (vJointType < 0.5 && vMiterLength > miterLimit + 1.0) {\n      discard;\n    }\n  }\n  gl_FragColor = vColor;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:[o.Z,s.Z]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({positions:{size:3,vertexOffset:1,type:5130,fp64:this.use64bitPositions(),transition:u,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:5121,update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:u,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,accessor:"getColor",transition:u,defaultValue:h},instancePickingColors:{size:3,type:5121,accessor:(t,{index:e,target:i})=>this.encodePickingColor(t&&t.__source?t.__source.index:e,i)}}),this.setState({pathTesselator:new p({fp64:this.use64bitPositions()})}),this.props.getDashArray&&!this.props.extensions.length&&r.Z.removed("getDashArray","PathStyleExtension")()}updateState({oldProps:t,props:e,changeFlags:i}){super.updateState({props:e,oldProps:t,changeFlags:i});const n=this.getAttributeManager();if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPath)){const{pathTesselator:t}=this.state,o=e.data.attributes||{};t.updateGeometry({data:e.data,geometryBuffer:o.getPath,buffers:o,normalize:!e._pathType,loop:"loop"===e._pathType,getGeometry:e.getPath,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:i.dataChanged}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),i.dataChanged||n.invalidateAll()}if(i.extensionsChanged){var o;const{gl:t}=this.context;null===(o=this.state.model)||void 0===o||o.delete(),this.state.model=this._getModel(t),n.invalidateAll()}}getPickingInfo(t){const e=super.getPickingInfo(t),{index:i}=e,{data:n}=this.props;return n[0]&&n[0].__source&&(e.object=n.find((t=>t.__source.index===i))),e}disablePickingIndex(t){const{data:e}=this.props;if(e[0]&&e[0].__source)for(let i=0;i<e.length;i++)e[i].__source.index===t&&this._disablePickingIndex(i);else this._disablePickingIndex(t)}draw({uniforms:t}){const{viewport:e}=this.context,{jointRounded:i,capRounded:n,billboard:o,miterLimit:s,widthUnits:r,widthScale:a,widthMinPixels:c,widthMaxPixels:l}=this.props,d="pixels"===r?e.metersPerPixel:1;this.state.model.setUniforms(t).setUniforms({jointType:Number(i),capType:Number(n),billboard:o,widthScale:a*d,miterLimit:s,widthMinPixels:c,widthMaxPixels:l}).draw()}_getModel(t){return new a.Z(t,{...this.getShaders(),id:this.props.id,geometry:new c.Z({drawMode:4,attributes:{indices:new Uint16Array([0,1,2,1,4,2,1,3,4,3,5,4]),positions:{value:new Float32Array([0,0,0,-1,0,1,1,-1,1,1,1,0]),size:2}}}),isInstanced:!0})}calculatePositions(t){const{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("positions")}calculateSegmentTypes(t){const{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("segmentTypes")}}g.layerName="PathLayer",g.defaultProps=f}}]);
//# sourceMappingURL=f4ec9c40d836590df1d3.chunk.js.map