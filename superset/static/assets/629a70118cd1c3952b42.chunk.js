"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6579],{16579:(t,e,n)=>{n.r(e),n.d(e,{default:()=>w}),n(67294);var s=n(43323),a=n(51995),r=n(78580),l=n.n(r),i=n(15078),o=n.n(i),c=n(45697),p=n.n(c),h=n(28062),u=n(67190),d=n(45636),m=n(45511);function g(t,e,n){t.each((function(){const t=o().select(this),s=t.text().split(/\s+/);let a=[],r=0;const l=t.attr("x"),i=t.attr("y"),c=parseFloat(t.attr("dy"));let p=t.text(null).append("tspan").attr("x",l).attr("y",i).attr("dy",`${c}em`),h=!1;s.forEach((n=>{a.push(n),p.text(a.join(" ")),p.node().getComputedTextLength()>e&&(r+=1,a.pop(),p.text(a.join(" ")),a=[n],p=t.append("tspan").attr("x",l).attr("y",i).attr("dy",`${1*r+c}em`).text(n),h=!0)})),h||void 0===n||p.attr("y",n)}))}const y={data:p().arrayOf(p().array),width:p().number,height:p().number,colorScheme:p().string,linearColorScheme:p().string,numberFormat:p().string,metrics:p().arrayOf(p().oneOfType([p().string,p().object]))};function f(t){return"string"==typeof t||t instanceof String?t:t.label}function b(t,e){const n=o().select(t),{data:s,width:a,height:r,colorScheme:i,linearColorScheme:c,metrics:p,numberFormat:y,sliceId:b}=e,x=function(t){return t>500?"l":t>200&&t<=500?"m":"s"}(a),$="s"===x;n.attr("class",`superset-legacy-chart-sunburst ${x}`);const v=a,w=r,T=.085*w,N=v-5-5,k=w-10-10-T,C=Math.min(N,k)/2;let A,S,z,P,W,Z,R,I=!0;const M=h.getScale(i);let _;const j=o().layout.partition().size([2*Math.PI,C*C]).value((t=>t.m1)),E=o().svg.arc().startAngle((t=>t.x)).endAngle((t=>t.x+t.dx)).innerRadius((t=>Math.sqrt(t.y))).outerRadius((t=>Math.sqrt(t.y+t.dy))),O=(0,u.JB)(y||d.Z.SI_3_DIGIT),U=(0,u.JB)(d.Z.PERCENT_3_POINT);n.select("svg").remove();const D=n.append("svg:svg").attr("width",v).attr("height",w);function F(t,e){const n=[];return $?(n.push("0,0"),n.push(`${a},0`),n.push(`${a},0`),n.push(`${a},${S.height}`),n.push(`0,${S.height}`)):(n.push("0,0"),n.push(`${S.width},0`),n.push(`${S.width+S.tipTailWidth},${S.height/2}`),n.push(`${S.width},${S.height}`),n.push(`0,${S.height}`),e>0&&n.push(`${S.tipTailWidth},${S.height/2}`)),n.join(" ")}function L(t){const e=function(t){const e=[];let n=t;for(;n.parent;)e.unshift(n),n=n.parent;return e}(t),n=e[e.length-2]||null,s=(t.m1/z).toPrecision(3),r=n?(t.m1/n.m1).toPrecision(3):null,i=U(s),c=n?U(r):"",h=function(t){return t>500?["0","20","40","60"]:t>200&&t<=500?["0","15","30","45"]:["0","10","20","30"]}(a);let u=0;const d=Math.abs(t.m1-t.m2)<1e-5;R.selectAll("*").remove(),u+=1,R.append("text").attr("class","path-abs-percent").attr("y",h[u]).text(`${i} of total`),c&&(u+=1,R.append("text").attr("class","path-cond-percent").attr("y",h[u]).text(`${c} of parent`)),u+=1,R.append("text").attr("class","path-metrics").attr("y",h[u]).text(`${f(p[0])}: ${O(t.m1)}${d?"":`, ${f(p[1])}: ${O(t.m2)}`}`),u+=1,R.append("text").attr("class","path-ratio").attr("y",h[u]).text(d?"":`${f(p[1])}/${f(p[0])}: ${U(t.m2/t.m1)}`),Z.selectAll("path").style("stroke-width",null).style("stroke",null).style("opacity",.3),Z.selectAll("path").filter((t=>l()(e).call(e,t))).style("opacity",1).style("stroke","#aaa"),function(t,e){const n=$?a:S.width,s=P.selectAll("g").data(t,(t=>t.name+t.depth)),r=s.enter().append("svg:g");r.append("svg:polygon").attr("points",F).style("fill",(t=>I?M(t.name,b):_(t.m2/t.m1))),r.append("svg:text").attr("x",(n+S.tipTailWidth)/2).attr("y",S.height/4).attr("dy","0.35em").style("fill",(t=>o().hsl(I?M(t.name,b):_(t.m2/t.m1)).l<.5?"white":"black")).attr("class","step-label").text((t=>t.name.replace(/_/g," "))).call(g,n,S.height/2),s.attr("transform",((t,e)=>$?`translate(0, ${e*(S.height+S.spacing)})`:`translate(${e*(S.width+S.spacing)}, 0)`)),s.exit().remove(),P.select(".end-label").attr("x",(()=>$?(n+S.tipTailWidth)/2:(t.length+.5)*(S.width+S.spacing))).attr("y",(()=>$?(t.length+1)*S.height:S.height/2)).attr("dy","0.35em").text(e),P.style("visibility",null)}(e,i)}function q(){P.style("visibility","hidden"),R.selectAll("*").remove(),Z.selectAll("path").on("mouseenter",null),Z.selectAll("path").transition().duration(200).style("opacity",1).style("stroke",null).style("stroke-width",null).each("end",(function(){o().select(this).on("mouseenter",L)}))}var B;B=s[0],A=B.length-2+1,S={width:N/A,height:.8*T,spacing:3,tipTailWidth:10},P=D.append("svg:g").attr("class","breadcrumbs").attr("transform","translate(5,10)"),P.append("svg:text").attr("class","end-label"),function(t){const e=function(t){const e={name:"root",children:[]};return t.forEach((t=>{const n=Number(t[t.length-2]),s=Number(t[t.length-1]),a=t.slice(0,-2);if(Number.isNaN(n))return;let r=e;for(let t=0;t<a.length;t+=1){const e=r.children||[],l=a[t].toString();let i;t>=a.length-1||0===a[t+1]?0!==l&&(i={name:l,m1:n,m2:s},e.push(i)):(i=e.find((e=>e.name===l&&e.level===t)),i||(i={name:l,children:[],level:t},e.push(i)),r=i)}})),function t(e){if(e.children){let n,s=0,a=0;for(let r=0;r<e.children.length;r+=1)n=t(e.children[r]),s+=n[0],a+=n[1];e.m1=s,e.m2=a}return[e.m1,e.m2]}(e),e}(t);A=t[0].length-2,W=D.append("svg:g").attr("class","sunburst-vis").attr("transform",`translate(${5+N/2},${10+($?T*A:T)+k/2})`).on("mouseleave",q),Z=W.append("svg:g").attr("id","arcs"),R=W.append("svg:g").attr("class","center-label"),Z.append("svg:circle").attr("r",C).style("opacity",0);const n=j.nodes(e).filter((t=>t.dx>.005));if(p[0]!==p[1]&&p[1]){I=!1;const t=o().extent(n,(t=>t.m2/t.m1));_=(0,m.Z)().get(c).createLinearScale(t)}Z.selectAll("path").data(n).enter().append("svg:path").attr("display",(t=>t.depth?null:"none")).attr("d",E).attr("fill-rule","evenodd").style("fill",(t=>I?M(t.name,b):_(t.m2/t.m1))).style("opacity",1).on("mouseenter",L),z=e.value}(s)}b.displayName="Sunburst",b.propTypes=y;const x=b;var $=n(11965);const v=(0,s.Z)(x),w=(0,a.iK)((t=>{let{className:e,...n}=t;return(0,$.tZ)("div",{className:e},(0,$.tZ)(v,n))}))`
  ${t=>{let{theme:e}=t;return`\n    .superset-legacy-chart-sunburst text {\n      text-rendering: optimizeLegibility;\n    }\n    .superset-legacy-chart-sunburst path {\n      stroke: ${e.colors.grayscale.light2};\n      stroke-width: 0.5px;\n    }\n    .superset-legacy-chart-sunburst .center-label {\n      text-anchor: middle;\n      fill: ${e.colors.grayscale.dark1};\n      pointer-events: none;\n    }\n    .superset-legacy-chart-sunburst .path-abs-percent {\n      font-size: ${e.typography.sizes.m}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n    .superset-legacy-chart-sunburst .path-cond-percent {\n      font-size: ${e.typography.sizes.s}px;\n    }\n    .superset-legacy-chart-sunburst .path-metrics {\n      color: ${e.colors.grayscale.base};\n    }\n    .superset-legacy-chart-sunburst .path-ratio {\n      color: ${e.colors.grayscale.base};\n    }\n\n    .superset-legacy-chart-sunburst .breadcrumbs text {\n      font-weight: ${e.typography.weights.bold};\n      font-size: ${e.typography.sizes.m}px;\n      text-anchor: middle;\n      fill: ${e.colors.grayscale.dark1};\n    }\n  `}}
`},43323:(t,e,n)=>{n.d(e,{Z:()=>r});var s=n(67294),a=n(11965);function r(t,e){class n extends s.Component{constructor(t){super(t),this.container=void 0,this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=e&&e.componentWillUnmount&&e.componentWillUnmount.bind(this)()}setContainerRef(t){this.container=t}execute(){this.container&&t(this.container,this.props)}render(){const{id:t,className:e}=this.props;return(0,a.tZ)("div",{ref:this.setContainerRef,id:t,className:e})}}const r=n;return t.displayName&&(r.displayName=t.displayName),t.propTypes&&(r.propTypes={...r.propTypes,...t.propTypes}),t.defaultProps&&(r.defaultProps=t.defaultProps),n}}}]);
//# sourceMappingURL=629a70118cd1c3952b42.chunk.js.map