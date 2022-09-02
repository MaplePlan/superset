"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7230],{53652:(e,t,a)=>{a.d(t,{Z:()=>n});const n=class{constructor(e){this.name="TypedRegistry",this.records=void 0,this.records=e}get(e){return this.records[e]}set(e,t){this.records[e]=t}}},75049:(e,t,a)=>{a.d(t,{I:()=>o,_:()=>i});var n=a(53652),r=a(1875);class l extends n.Z{constructor(){super(...arguments),this.name="ExtensionsRegistry"}}const o=(0,r.Z)(l,{}),i=o},85931:(e,t,a)=>{a.d(t,{m:()=>s});var n=a(5872),r=a.n(n),l=(a(67294),a(73727)),o=a(23525),i=a(11965);const s=e=>{let{to:t,component:a,replace:n,innerRef:s,children:d,...c}=e;return"string"==typeof t&&(0,o.TO)(t)?(0,i.tZ)("a",r()({href:(0,o.en)(t)},c),d):(0,i.tZ)(l.rU,r()({to:t,component:a,replace:n,innerRef:s},c),d)}},60972:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(61988),l=a(34858),o=a(29487),i=a(11965);const s=(0,l.z)(),d=s?s.support:"https://superset.apache.org/docs/databases/installing-database-drivers",c=e=>{let{errorMessage:t,showDbInstallInstructions:a}=e;return(0,i.tZ)(o.Z,{closable:!1,css:e=>(e=>i.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"error",showIcon:!0,message:t,description:a?(0,i.tZ)(n.Fragment,null,(0,i.tZ)("br",null),(0,r.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,i.tZ)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,r.t)("here")),"."):""})}},49576:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),r=a(51995),l=a(70163),o=a(11965);const i=r.iK.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`,s=(0,r.iK)(l.Z.CheckboxHalf)`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  cursor: pointer;
`,d=(0,r.iK)(l.Z.CheckboxOff)`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  cursor: pointer;
`,c=(0,r.iK)(l.Z.CheckboxOn)`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  cursor: pointer;
`,u=r.iK.input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`,p=r.iK.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`,h=(0,n.forwardRef)(((e,t)=>{let{indeterminate:a,id:r,checked:l,onChange:h,title:m="",labelText:g=""}=e;const b=(0,n.useRef)(),v=t||b;return(0,n.useEffect)((()=>{v.current.indeterminate=a}),[v,a]),(0,o.tZ)(n.Fragment,null,(0,o.tZ)(p,null,a&&(0,o.tZ)(s,null),!a&&l&&(0,o.tZ)(c,null),!a&&!l&&(0,o.tZ)(d,null),(0,o.tZ)(u,{name:r,id:r,type:"checkbox",ref:v,checked:l,onChange:h})),(0,o.tZ)(i,{title:m,htmlFor:r},g))}))},6238:(e,t,a)=>{a.d(t,{Z:()=>Be});var n=a(51995),r=a(61988),l=a(93185),o=a(67294),i=a(61337),s=a(71262),d=a(4715),c=a(29487),u=a(74069),p=a(35932),h=a(70163);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}const g={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},b=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function v(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}const y={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},f=Object.keys(y);class Z extends o.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas.parentNode.removeChild(this.canvas)}setState(e,t){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,t)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(g).forEach((t=>{e.style[t]=g[t]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);b.forEach((t=>{this.canvas.style[t]=e[t]}))}reflow(e){const t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${t}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const a=this.putEllipsis(this.calcIndexes()),n=a>-1,r={clamped:n,text:n?this.units.slice(0,a).join(""):e.text};this.setState(r,e.onReflow.bind(this,r))}calcIndexes(){const e=[0];let t=this.canvas.firstElementChild;if(!t)return e;let a=0,n=1,r=t.offsetTop;for(;(t=t.nextElementSibling)&&(t.offsetTop>r&&(n++,e.push(a),r=t.offsetTop),a++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const t=e[this.maxLine],a=this.units.slice(0,t),n=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(((e,t)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const r=this.canvas.lastElementChild;let l=v(r,2);for(;l&&(r.offsetTop>n||r.offsetHeight>l.offsetHeight||r.offsetTop>l.offsetTop);)this.canvas.removeChild(l),l=v(r,2),a.pop();return a.length}isClamped(){return this.clamped}render(){const{text:e,clamped:t}=this.state,a=this.props,{component:n,ellipsis:r,trimRight:l,className:i}=a,s=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(a,["component","ellipsis","trimRight","className"]);return o.createElement(n,m({className:`LinesEllipsis ${t?"LinesEllipsis--clamped":""} ${i}`,ref:e=>this.target=e},function(e,t){if(!e||"object"!=typeof e)return e;const a={};return Object.keys(e).forEach((n=>{t.indexOf(n)>-1||(a[n]=e[n])})),a}(s,f)),t&&l?e.replace(/[\s\uFEFF\xA0]+$/,""):e,o.createElement("wbr",null),t&&o.createElement("span",{className:"LinesEllipsis-ellipsis"},r))}}Z.defaultProps=y;const x=Z;var _=a(11965);const w=(0,n.iK)(p.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,C=n.iK.div`
  padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  height: ${e=>{let{theme:t}=e;return 18*t.gridUnit}}px;
  margin: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px 0;

  .default-db-icon {
    font-size: 36px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    margin-right: 0;
    span:first-of-type {
      margin-right: 0;
    }
  }

  &:first-of-type {
    margin-right: 0;
  }

  img {
    width: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
    height: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
    margin: 0;
    &:first-of-type {
      margin-right: 0;
    }
  }
  svg {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,$=n.iK.div`
  max-height: calc(1.5em * 2);
  white-space: break-spaces;

  &:first-of-type {
    margin-right: 0;
  }

  .LinesEllipsis {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,S=n.iK.div`
  padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px 0;
  border-radius: 0 0 ${e=>{let{theme:t}=e;return t.borderRadius}}px
    ${e=>{let{theme:t}=e;return t.borderRadius}}px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}};
  width: 100%;
  line-height: 1.5em;
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;

  &:first-of-type {
    margin-right: 0;
  }
`,k=(0,n.iK)((e=>{let{icon:t,altText:a,buttonText:n,...r}=e;return(0,_.tZ)(w,r,(0,_.tZ)(C,null,t&&(0,_.tZ)("img",{src:t,alt:a}),!t&&(0,_.tZ)(h.Z.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})),(0,_.tZ)(S,null,(0,_.tZ)($,null,(0,_.tZ)(x,{text:n,maxLine:"2",basedOn:"words",trimRight:!0}))))}))`
  text-transform: none;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  margin: 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    box-shadow: 4px 4px 20px ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  }
`;var N,E,U=a(8272),T=a(14114),A=a(87858),L=a(60972),O=a(34858),M=a(1483);!function(e){e.SQLALCHEMY_URI="sqlalchemy_form",e.DYNAMIC_FORM="dynamic_form"}(N||(N={})),function(e){e.GSheet="gsheets",e.Snowflake="snowflake"}(E||(E={}));var I=a(38703),D=a(94184),q=a.n(D),R=a(49576),F=a(43700),P=a(94670);const z=_.iv`
  margin-bottom: 0;
`,j=n.iK.header`
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  line-height: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;

  .helper-top {
    padding-bottom: 0;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    margin: 0;
  }

  .subheader-text {
    line-height: ${e=>{let{theme:t}=e;return 4.25*t.gridUnit}}px;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    margin: 0;
  }

  h4 {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
    margin: 0;
    padding: 0;
    line-height: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
  }

  .select-db {
    padding-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    }
  }
`,B=_.iv`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,Q=_.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,K=e=>_.iv`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,H=e=>_.iv`
  padding-left: ${2*e.gridUnit}px;
`,V=e=>_.iv`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,G=e=>_.iv`
  .ant-select-dropdown {
    height: ${40*e.gridUnit}px;
  }

  .ant-modal-header {
    padding: ${4.5*e.gridUnit}px ${4*e.gridUnit}px
      ${4*e.gridUnit}px;
  }

  .ant-modal-close-x .close {
    color: ${e.colors.grayscale.dark1};
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.gridUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.gridUnit}px;
  }
`,J=e=>_.iv`
  border: 1px solid ${e.colors.info.base};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;

  .ant-alert-message {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
  }

  .ant-alert-description {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    line-height: ${5*e.gridUnit}px;

    a {
      text-decoration: underline;
    }

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`,Y=n.iK.div`
  ${e=>{let{theme:t}=e;return _.iv`
    margin: 0 ${4*t.gridUnit}px -${4*t.gridUnit}px;
  `}}
`,W=e=>_.iv`
  .required {
    margin-left: ${e.gridUnit/2}px;
    color: ${e.colors.error.base};
  }

  .helper {
    display: block;
    padding: ${e.gridUnit}px 0;
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    text-align: left;
  }
`,X=e=>_.iv`
  .form-group {
    margin-bottom: ${4*e.gridUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.gridUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.gridUnit}px;
      }
    }
  }
  .control-label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
  }
  .helper {
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    margin-top: ${1.5*e.gridUnit}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 480px;
  }
`,ee=e=>_.iv`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
    margin-bottom: 0;
  }
`,te=n.iK.div`
  ${e=>{let{theme:t}=e;return _.iv`
    margin-bottom: ${6*t.gridUnit}px;
    &.mb-0 {
      margin-bottom: 0;
    }
    &.mb-8 {
      margin-bottom: ${2*t.gridUnit}px;
    }

    .control-label {
      color: ${t.colors.grayscale.dark1};
      font-size: ${t.typography.sizes.s}px;
      margin-bottom: ${2*t.gridUnit}px;
    }

    &.extra-container {
      padding-top: ${2*t.gridUnit}px;
    }

    .input-container {
      display: flex;
      align-items: top;

      label {
        display: flex;
        margin-left: ${2*t.gridUnit}px;
        margin-top: ${.75*t.gridUnit}px;
        font-family: ${t.typography.families.sansSerif};
        font-size: ${t.typography.sizes.m}px;
      }

      i {
        margin: 0 ${t.gridUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    textarea {
      height: 160px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${t.colors.grayscale.light1};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${1.5*t.gridUnit}px ${2*t.gridUnit}px;
      border-style: none;
      border: 1px solid ${t.colors.grayscale.light2};
      border-radius: ${t.gridUnit}px;

      &[name='name'] {
        flex: 0 1 auto;
        width: 40%;
      }
    }
    &.expandable {
      height: 0;
      overflow: hidden;
      transition: height 0.25s;
      margin-left: ${8*t.gridUnit}px;
      margin-bottom: 0;
      padding: 0;
      .control-label {
        margin-bottom: 0;
      }
      &.open {
        height: ${108}px;
        padding-right: ${5*t.gridUnit}px;
      }
    }
  `}}
`,ae=(0,n.iK)(P.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,ne=n.iK.div`
  padding-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  .input-container {
    padding-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    padding-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;
    &.open {
      height: ${261}px;
      &.ctas-open {
        height: ${363}px;
      }
    }
  }
`,re=n.iK.div`
  padding: 0 ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  margin-top: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
`,le=e=>_.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,oe=e=>_.iv`
  font-size: ${3.5*e.gridUnit}px;
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,ie=n.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    margin: 0px;
  }
`,se=(n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
`,n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  text-transform: uppercase;
`),de=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`,ce=n.iK.div`
  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    text-transform: uppercase;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
    font-size: 11px;
    margin: 0 5px ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .label-paste {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px 0;
    display: flex;
    flex-direction: column;
}
  }
  .input-form {
    height: 100px;
    width: 100%;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    resize: vertical;
    padding: ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    &::placeholder {
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    }
  }

  .input-container {
    .input-upload {
      display: none !important;
    }
    .input-upload-current {
      display: flex;
      justify-content: space-between;
    }
    .input-upload-btn {
      width: ${e=>{let{theme:t}=e;return 32*t.gridUnit}}px
    }
  }`,ue=n.iK.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${e=>{let{theme:t}=e;return 2.5*t.gridUnit}}px;
  }

  .available {
    margin: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    .available-label {
      font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
      font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
      margin: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    text-transform: uppercase;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  }

  .control-label {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }
`,pe=(0,n.iK)(p.Z)`
  width: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px;
`,he=n.iK.div`
  position: sticky;
  top: 0;
  z-index: ${e=>{let{theme:t}=e;return t.zIndex.max}};
  background: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
`,me=n.iK.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
    margin: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px 0 16px;
  }

  .catalog-label {
    margin: 0 0 7px;
  }

  .catalog-name {
    display: flex;
    .catalog-name-input {
      width: 95%;
      margin-bottom: 0px;
    }
  }

  .catalog-name-url {
    margin: 4px 0;
    width: 95%;
  }

  .catalog-delete {
    align-self: center;
    background: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}};
    margin: 5px 5px 8px 5px;
  }

  .catalog-add-btn {
    width: 95%;
  }
`,ge=n.iK.div`
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`,be=e=>{var t,a,n,l,o,i,s,d,c,u,p,h;let{db:m,onInputChange:g,onTextChange:b,onEditorChange:v,onExtraInputChange:y,onExtraEditorChange:f}=e;const Z=!(null==m||!m.expose_in_sqllab),x=!!(null!=m&&m.allow_ctas||null!=m&&m.allow_cvas);return(0,_.tZ)(F.Z,{expandIconPosition:"right",accordion:!0,css:e=>(e=>_.iv`
  .ant-collapse-header {
    padding-top: ${3.5*e.gridUnit}px;
    padding-bottom: ${2.5*e.gridUnit}px;

    .anticon.ant-collapse-arrow {
      top: calc(50% - ${6}px);
    }
    .helper {
      color: ${e.colors.grayscale.base};
    }
  }
  h4 {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: ${e.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`)(e)},(0,_.tZ)(F.Z.Panel,{header:(0,_.tZ)("div",null,(0,_.tZ)("h4",null,"SQL Lab"),(0,_.tZ)("p",{className:"helper"},"Adjust how this database will interact with SQL Lab.")),key:"1"},(0,_.tZ)(te,{css:z},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==m||!m.expose_in_sqllab),onChange:g,labelText:(0,r.t)("Expose database in SQL Lab")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Allow this database to be queried in SQL Lab")})),(0,_.tZ)(ne,{className:q()("expandable",{open:Z,"ctas-open":x})},(0,_.tZ)(te,{css:z},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"allow_ctas",indeterminate:!1,checked:!(null==m||!m.allow_ctas),onChange:g,labelText:(0,r.t)("Allow CREATE TABLE AS")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Allow creation of new tables based on queries")}))),(0,_.tZ)(te,{css:z},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"allow_cvas",indeterminate:!1,checked:!(null==m||!m.allow_cvas),onChange:g,labelText:(0,r.t)("Allow CREATE VIEW AS")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Allow creation of new views based on queries")})),(0,_.tZ)(te,{className:q()("expandable",{open:x})},(0,_.tZ)("div",{className:"control-label"},(0,r.t)("CTAS & CVAS SCHEMA")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"text",name:"force_ctas_schema",value:(null==m?void 0:m.force_ctas_schema)||"",placeholder:(0,r.t)("Create or select schema..."),onChange:g})),(0,_.tZ)("div",{className:"helper"},(0,r.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")))),(0,_.tZ)(te,{css:z},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"allow_dml",indeterminate:!1,checked:!(null==m||!m.allow_dml),onChange:g,labelText:(0,r.t)("Allow DML")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),(0,_.tZ)(te,{css:z},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"allow_multi_schema_metadata_fetch",indeterminate:!1,checked:!(null==m||!m.allow_multi_schema_metadata_fetch),onChange:g,labelText:(0,r.t)("Allow Multi Schema Metadata Fetch")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.")}))),(0,_.tZ)(te,{css:z},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==m||null==(t=m.extra_json)||!t.cost_estimate_enabled),onChange:y,labelText:(0,r.t)("Enable query cost estimation")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("For Presto and Postgres, shows a button to compute cost before running a query.")}))),(0,_.tZ)(te,{css:z},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!(null==m||null==(a=m.extra_json)||!a.allows_virtual_table_explore),onChange:y,labelText:(0,r.t)("Allow this database to be explored")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("When enabled, users are able to visualize SQL Lab results in Explore.")}))),(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"disable_data_preview",indeterminate:!1,checked:!(null==m||null==(n=m.extra_json)||!n.disable_data_preview),onChange:y,labelText:(0,r.t)("Disable SQL Lab data preview queries")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")})))))),(0,_.tZ)(F.Z.Panel,{header:(0,_.tZ)("div",null,(0,_.tZ)("h4",null,"Performance"),(0,_.tZ)("p",{className:"helper"},"Adjust performance settings of this database.")),key:"2"},(0,_.tZ)(te,{className:"mb-8"},(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Chart cache timeout")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"number",name:"cache_timeout",value:(null==m?void 0:m.cache_timeout)||"",placeholder:(0,r.t)("Enter duration in seconds"),onChange:g})),(0,_.tZ)("div",{className:"helper"},(0,r.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined."))),(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Schema cache timeout")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"number",name:"schema_cache_timeout",value:(null==m||null==(l=m.extra_json)||null==(o=l.metadata_cache_timeout)?void 0:o.schema_cache_timeout)||"",placeholder:(0,r.t)("Enter duration in seconds"),onChange:y})),(0,_.tZ)("div",{className:"helper"},(0,r.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires."))),(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Table cache timeout")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"number",name:"table_cache_timeout",value:(null==m||null==(i=m.extra_json)||null==(s=i.metadata_cache_timeout)?void 0:s.table_cache_timeout)||"",placeholder:(0,r.t)("Enter duration in seconds"),onChange:y})),(0,_.tZ)("div",{className:"helper"},(0,r.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. "))),(0,_.tZ)(te,{css:(0,_.iv)({no_margin_bottom:z},"","")},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"allow_run_async",indeterminate:!1,checked:!(null==m||!m.allow_run_async),onChange:g,labelText:(0,r.t)("Asynchronous query execution")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}))),(0,_.tZ)(te,{css:(0,_.iv)({no_margin_bottom:z},"","")},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==m||null==(d=m.extra_json)||!d.cancel_query_on_windows_unload),onChange:y,labelText:(0,r.t)("Cancel query on window unload event")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})))),(0,_.tZ)(F.Z.Panel,{header:(0,_.tZ)("div",null,(0,_.tZ)("h4",null,"Security"),(0,_.tZ)("p",{className:"helper"},"Add extra connection information.")),key:"3"},(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Secure extra")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(ae,{name:"encrypted_extra",value:(null==m?void 0:m.encrypted_extra)||"",placeholder:(0,r.t)("Secure extra"),onChange:e=>v({json:e,name:"encrypted_extra"}),width:"100%",height:"160px"})),(0,_.tZ)("div",{className:"helper"},(0,_.tZ)("div",null,(0,r.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")))),(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Root certificate")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("textarea",{name:"server_cert",value:(null==m?void 0:m.server_cert)||"",placeholder:(0,r.t)("Enter CA_BUNDLE"),onChange:b})),(0,_.tZ)("div",{className:"helper"},(0,r.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines."))),(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Schemas allowed for CSV upload")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==m||null==(c=m.extra_json)?void 0:c.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:y})),(0,_.tZ)("div",{className:"helper"},(0,r.t)("A comma-separated list of schemas that CSVs are allowed to upload to."))),(0,_.tZ)(te,{css:(0,_.iv)({no_margin_bottom:z},"","")},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"impersonate_user",indeterminate:!1,checked:!(null==m||!m.impersonate_user),onChange:g,labelText:(0,r.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),(0,_.tZ)(te,{css:(0,_.iv)({...z},"","")},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(R.Z,{id:"allow_file_upload",indeterminate:!1,checked:!(null==m||!m.allow_file_upload),onChange:g,labelText:(0,r.t)("Allow data upload")}),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("If selected, please set the schemas allowed for data upload in Extra.")})))),(0,_.tZ)(F.Z.Panel,{header:(0,_.tZ)("div",null,(0,_.tZ)("h4",null,"Other"),(0,_.tZ)("p",{className:"helper"},"Additional settings.")),key:"4"},(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Metadata Parameters")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(ae,{name:"metadata_params",value:(null==m||null==(u=m.extra_json)?void 0:u.metadata_params)||"",placeholder:(0,r.t)("Metadata Parameters"),onChange:e=>f({json:e,name:"metadata_params"}),width:"100%",height:"160px"})),(0,_.tZ)("div",{className:"helper"},(0,_.tZ)("div",null,(0,r.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")))),(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Engine Parameters")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(ae,{name:"engine_params",value:(null==m||null==(p=m.extra_json)?void 0:p.engine_params)||"",placeholder:(0,r.t)("Engine Parameters"),onChange:e=>f({json:e,name:"engine_params"}),width:"100%",height:"160px"})),(0,_.tZ)("div",{className:"helper"},(0,_.tZ)("div",null,(0,r.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")))),(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Version")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"number",name:"version",value:(null==m||null==(h=m.extra_json)?void 0:h.version)||"",placeholder:(0,r.t)("Version number"),onChange:y})),(0,_.tZ)("div",{className:"helper"},(0,r.t)("Specify the database version. This should be used with Presto in order to enable query cost estimation.")))))};var ve=a(8911);const ye=e=>{let t,a,{db:n,onInputChange:l,testConnection:i,conf:s,testInProgress:d=!1}=e;var c,u;return ve.Z?(t=null==(c=ve.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:c.SQLALCHEMY_DOCS_URL,a=null==(u=ve.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:u.SQLALCHEMY_DISPLAY_TEXT):(t="https://docs.sqlalchemy.org/en/13/core/engines.html",a="SQLAlchemy docs"),(0,_.tZ)(o.Fragment,null,(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Display Name"),(0,_.tZ)("span",{className:"required"},"*")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"text",name:"database_name",value:(null==n?void 0:n.database_name)||"",placeholder:(0,r.t)("Name your database"),onChange:l})),(0,_.tZ)("div",{className:"helper"},(0,r.t)("Pick a name to help you identify this database."))),(0,_.tZ)(te,null,(0,_.tZ)("div",{className:"control-label"},(0,r.t)("SQLAlchemy URI"),(0,_.tZ)("span",{className:"required"},"*")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"text",name:"sqlalchemy_uri",value:(null==n?void 0:n.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(0,r.t)("dialect+driver://username:password@host:port/database"),onChange:l})),(0,_.tZ)("div",{className:"helper"},(0,r.t)("Refer to the")," ",(0,_.tZ)("a",{href:t||(null==s?void 0:s.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer"},a||(null==s?void 0:s.SQLALCHEMY_DISPLAY_TEXT)||"")," ",(0,r.t)("for more information on how to structure your URI."))),(0,_.tZ)(p.Z,{onClick:i,disabled:d,cta:!0,buttonStyle:"link",css:e=>(e=>_.iv`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},(0,r.t)("Test connection")))};var fe=a(78580),Ze=a.n(fe),xe=a(49238);const _e={account:{helpText:(0,r.t)("Copy the account name of that database you are trying to connect to."),placeholder:"e.g. world_population"},warehouse:{placeholder:"e.g. compute_wh",className:"form-group-w-50"},role:{placeholder:"e.g. AccountAdmin",className:"form-group-w-50"}},we=e=>{var t;let{required:a,changeMethods:n,getValidation:r,validationErrors:l,db:o,field:i}=e;return(0,_.tZ)(A.Z,{id:i,name:i,required:a,value:null==o||null==(t=o.parameters)?void 0:t[i],validationMethods:{onBlur:r},errorMessage:null==l?void 0:l[i],placeholder:_e[i].placeholder,helpText:_e[i].helpText,label:i,onChange:n.onParametersChange,className:_e[i].className||i})};var Ce,$e=a(2857),Se=a(93695);!function(e){e[e.jsonUpload=0]="jsonUpload",e[e.copyPaste=1]="copyPaste"}(Ce||(Ce={}));const ke={gsheets:"service_account_info",bigquery:"credentials_info"};var Ne={name:"s5xdrg",styles:"display:flex;align-items:center"};const Ee=e=>{var t,a,n;let{changeMethods:l,isEditMode:i,db:s,editNewDb:c}=e;const[u,p]=(0,o.useState)(Ce.jsonUpload.valueOf()),[h,m]=(0,o.useState)(null),[g,b]=(0,o.useState)(!0),v="gsheets"===(null==s?void 0:s.engine)?!i&&!g:!i,y=i&&"{}"!==(null==s?void 0:s.encrypted_extra),f=(null==s?void 0:s.engine)&&ke[s.engine],Z="object"==typeof(null==s||null==(t=s.parameters)?void 0:t[f])?JSON.stringify(null==s||null==(a=s.parameters)?void 0:a[f]):null==s||null==(n=s.parameters)?void 0:n[f];return(0,_.tZ)(ce,null,"gsheets"===(null==s?void 0:s.engine)&&(0,_.tZ)("div",{className:"catalog-type-select"},(0,_.tZ)($e.Z,{css:e=>(e=>_.iv`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0},(0,r.t)("Type of Google Sheets allowed")),(0,_.tZ)(d.IZ,{style:{width:"100%"},defaultValue:y?"false":"true",onChange:e=>b("true"===e)},(0,_.tZ)(d.IZ.Option,{value:"true",key:1},(0,r.t)("Publicly shared sheets only")),(0,_.tZ)(d.IZ.Option,{value:"false",key:2},(0,r.t)("Public and privately shared sheets")))),v&&(0,_.tZ)(o.Fragment,null,(0,_.tZ)($e.Z,{required:!0},(0,r.t)("How do you want to enter service account credentials?")),(0,_.tZ)(d.IZ,{defaultValue:u,style:{width:"100%"},onChange:e=>p(e)},(0,_.tZ)(d.IZ.Option,{value:Ce.jsonUpload},(0,r.t)("Upload JSON file")),(0,_.tZ)(d.IZ.Option,{value:Ce.copyPaste},(0,r.t)("Copy and Paste JSON credentials")))),u===Ce.copyPaste||i||c?(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)($e.Z,{required:!0},(0,r.t)("Service Account")),(0,_.tZ)("textarea",{className:"input-form",name:f,value:Z,onChange:l.onParametersChange,placeholder:"Paste content of service credentials JSON file here"}),(0,_.tZ)("span",{className:"label-paste"},(0,r.t)("Copy and paste the entire service account .json file here"))):v&&(0,_.tZ)("div",{className:"input-container",css:e=>K(e)},(0,_.tZ)("div",{css:Ne},(0,_.tZ)($e.Z,{required:!0},(0,r.t)("Upload Credentials")),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})),!h&&(0,_.tZ)(d.C0,{className:"input-upload-btn",onClick:()=>{var e,t;return null==(e=document)||null==(t=e.getElementById("selectedFile"))?void 0:t.click()}},(0,r.t)("Choose File")),h&&(0,_.tZ)("div",{className:"input-upload-current"},h,(0,_.tZ)(Se.Z,{onClick:()=>{m(null),l.onParametersChange({target:{name:f,value:""}})}})),(0,_.tZ)("input",{id:"selectedFile",className:"input-upload",type:"file",onChange:async e=>{var t,a;let n;e.target.files&&(n=e.target.files[0]),m(null==(t=n)?void 0:t.name),l.onParametersChange({target:{type:null,name:f,value:await(null==(a=n)?void 0:a.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})))};var Ue=a(54549);const Te=["host","port","database","username","password","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role"],Ae={host:e=>{var t;let{required:a,changeMethods:n,getValidation:l,validationErrors:o,db:i}=e;return(0,_.tZ)(A.Z,{id:"host",name:"host",value:null==i||null==(t=i.parameters)?void 0:t.host,required:a,hasTooltip:!0,tooltipText:(0,r.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:l},errorMessage:null==o?void 0:o.host,placeholder:(0,r.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,r.t)("Host"),onChange:n.onParametersChange})},port:e=>{var t;let{required:a,changeMethods:n,getValidation:l,validationErrors:i,db:s}=e;return(0,_.tZ)(o.Fragment,null,(0,_.tZ)(A.Z,{id:"port",name:"port",type:"number",required:a,value:null==s||null==(t=s.parameters)?void 0:t.port,validationMethods:{onBlur:l},errorMessage:null==i?void 0:i.port,placeholder:(0,r.t)("e.g. 5432"),className:"form-group-w-50",label:"Port",onChange:n.onParametersChange}))},database:e=>{var t;let{required:a,changeMethods:n,getValidation:l,validationErrors:o,placeholder:i,db:s}=e;return(0,_.tZ)(A.Z,{id:"database",name:"database",required:a,value:null==s||null==(t=s.parameters)?void 0:t.database,validationMethods:{onBlur:l},errorMessage:null==o?void 0:o.database,placeholder:null!=i?i:(0,r.t)("e.g. world_population"),label:(0,r.t)("Database name"),onChange:n.onParametersChange,helpText:(0,r.t)("Copy the name of the database you are trying to connect to.")})},username:e=>{var t;let{required:a,changeMethods:n,getValidation:l,validationErrors:o,db:i}=e;return(0,_.tZ)(A.Z,{id:"username",name:"username",required:a,value:null==i||null==(t=i.parameters)?void 0:t.username,validationMethods:{onBlur:l},errorMessage:null==o?void 0:o.username,placeholder:(0,r.t)("e.g. Analytics"),label:(0,r.t)("Username"),onChange:n.onParametersChange})},password:e=>{var t;let{required:a,changeMethods:n,getValidation:l,validationErrors:o,db:i,isEditMode:s}=e;return(0,_.tZ)(A.Z,{id:"password",name:"password",required:a,visibilityToggle:!s,value:null==i||null==(t=i.parameters)?void 0:t.password,validationMethods:{onBlur:l},errorMessage:null==o?void 0:o.password,placeholder:(0,r.t)("e.g. ********"),label:(0,r.t)("Password"),onChange:n.onParametersChange})},database_name:e=>{let{changeMethods:t,getValidation:a,validationErrors:n,db:l}=e;return(0,_.tZ)(o.Fragment,null,(0,_.tZ)(A.Z,{id:"database_name",name:"database_name",required:!0,value:null==l?void 0:l.database_name,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.database_name,placeholder:"",label:(0,r.t)("Display Name"),onChange:t.onChange,helpText:(0,r.t)("Pick a nickname for this database to display as in Superset.")}))},query:e=>{let{required:t,changeMethods:a,getValidation:n,validationErrors:l,db:o}=e;return(0,_.tZ)(A.Z,{id:"query_input",name:"query_input",required:t,value:(null==o?void 0:o.query_input)||"",validationMethods:{onBlur:n},errorMessage:null==l?void 0:l.query,placeholder:(0,r.t)("e.g. param1=value1&param2=value2"),label:(0,r.t)("Additional Parameters"),onChange:a.onQueryChange,helpText:(0,r.t)("Add additional custom parameters")})},encryption:e=>{var t;let{isEditMode:a,changeMethods:n,db:l,sslForced:o}=e;return(0,_.tZ)("div",{css:e=>K(e)},(0,_.tZ)(d.KU,{disabled:o&&!a,checked:(null==l||null==(t=l.parameters)?void 0:t.encryption)||o,onChange:e=>{n.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,_.tZ)("span",{css:H},"SSL"),(0,_.tZ)(U.Z,{tooltip:(0,r.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"}))},credentials_info:Ee,service_account_info:Ee,catalog:e=>{let{required:t,changeMethods:a,getValidation:n,validationErrors:l,db:i}=e;const s=(null==i?void 0:i.catalog)||[],d=l||{};return(0,_.tZ)(me,null,(0,_.tZ)("h4",{className:"gsheet-title"},(0,r.t)("Connect Google Sheets as tables to this database")),(0,_.tZ)("div",null,null==s?void 0:s.map(((e,l)=>{var i,c;return(0,_.tZ)(o.Fragment,null,(0,_.tZ)($e.Z,{className:"catalog-label",required:!0},(0,r.t)("Google Sheet Name and URL")),(0,_.tZ)("div",{className:"catalog-name"},(0,_.tZ)(A.Z,{className:"catalog-name-input",required:t,validationMethods:{onBlur:n},errorMessage:null==(i=d[l])?void 0:i.name,placeholder:(0,r.t)("Enter a name for this sheet"),onChange:e=>{a.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:e.name}),(null==s?void 0:s.length)>1&&(0,_.tZ)(Ue.Z,{className:"catalog-delete",onClick:()=>a.onRemoveTableCatalog(l)})),(0,_.tZ)(A.Z,{className:"catalog-name-url",required:t,validationMethods:{onBlur:n},errorMessage:null==(c=d[l])?void 0:c.url,placeholder:(0,r.t)("Paste the shareable Google Sheet URL here"),onChange:e=>a.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:e.value}))})),(0,_.tZ)(pe,{className:"catalog-add-btn",onClick:()=>{a.onAddTableCatalog()}},"+ ",(0,r.t)("Add sheet"))))},warehouse:we,role:we,account:we},Le=e=>{let{dbModel:{parameters:t},onParametersChange:a,onChange:n,onQueryChange:r,onParametersUploadFileChange:l,onAddTableCatalog:o,onRemoveTableCatalog:i,validationErrors:s,getValidation:d,db:c,isEditMode:u=!1,sslForced:p,editNewDb:h,getPlaceholder:m}=e;return(0,_.tZ)(xe.l0,null,(0,_.tZ)("div",{css:e=>[V,ee(e)]},t&&Te.filter((e=>{var a;return Ze()(a=Object.keys(t.properties)).call(a,e)||"database_name"===e})).map((e=>{var g;return Ae[e]({required:null==(g=t.required)?void 0:Ze()(g).call(g,e),changeMethods:{onParametersChange:a,onChange:n,onQueryChange:r,onParametersUploadFileChange:l,onAddTableCatalog:o,onRemoveTableCatalog:i},validationErrors:s,getValidation:d,db:c,key:e,field:e,isEditMode:u,sslForced:p,editNewDb:h,placeholder:m?m(e):void 0})}))))},Oe=(0,O.z)(),Me=Oe?Oe.support:"https://superset.apache.org/docs/databases/installing-database-drivers",Ie={postgresql:"https://superset.apache.org/docs/databases/postgres",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},De=e=>{let{isLoading:t,isEditMode:a,useSqlAlchemyForm:n,hasConnectedDb:r,db:l,dbName:i,dbModel:s,editNewDb:d,fileList:c}=e;const u=c&&(null==c?void 0:c.length)>0,p=(0,_.tZ)(j,null,(0,_.tZ)(se,null,null==l?void 0:l.backend),(0,_.tZ)(de,null,i)),h=(0,_.tZ)(j,null,(0,_.tZ)("p",{className:"helper-top"}," STEP 2 OF 2 "),(0,_.tZ)("h4",null,"Enter Primary Credentials"),(0,_.tZ)("p",{className:"helper-bottom"},"Need help? Learn how to connect your database"," ",(0,_.tZ)("a",{href:(null==Oe?void 0:Oe.default)||Me,target:"_blank",rel:"noopener noreferrer"},"here"),".")),m=(0,_.tZ)(he,null,(0,_.tZ)(j,null,(0,_.tZ)("p",{className:"helper-top"}," STEP 3 OF 3 "),(0,_.tZ)("h4",{className:"step-3-text"},"Database connected"),(0,_.tZ)("p",{className:"subheader-text"},"Create a dataset to begin visualizing your data as a chart or go to SQL Lab to query your data."))),g=(0,_.tZ)(he,null,(0,_.tZ)(j,null,(0,_.tZ)("p",{className:"helper-top"}," STEP 2 OF 3 "),(0,_.tZ)("h4",null,"Enter the required ",s.name," credentials"),(0,_.tZ)("p",{className:"helper-bottom"},"Need help? Learn more about"," ",(0,_.tZ)("a",{href:(b=null==l?void 0:l.engine,b?Oe?Oe[b]||Oe.default:Ie[b]?Ie[b]:`https://superset.apache.org/docs/databases/${b}`:null),target:"_blank",rel:"noopener noreferrer"},"connecting to ",s.name,"."))));var b;const v=(0,_.tZ)(j,null,(0,_.tZ)("div",{className:"select-db"},(0,_.tZ)("p",{className:"helper-top"}," STEP 1 OF 3 "),(0,_.tZ)("h4",null,"Select a database to connect"))),y=(0,_.tZ)(he,null,(0,_.tZ)(j,null,(0,_.tZ)("p",{className:"helper-top"}," STEP 2 OF 2 "),(0,_.tZ)("h4",null,"Enter the required ",s.name," credentials"),(0,_.tZ)("p",{className:"helper-bottom"},u?c[0].name:"")));return u?y:t?(0,_.tZ)(o.Fragment,null):a?p:n?h:r&&!d?m:l||d?g:v},qe={[E.GSheet]:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},Re=(0,n.iK)(s.ZP)`
  .ant-tabs-content {
    display: flex;
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`;var Fe;!function(e){e[e.configMethodChange=0]="configMethodChange",e[e.dbSelected=1]="dbSelected",e[e.editorChange=2]="editorChange",e[e.fetched=3]="fetched",e[e.inputChange=4]="inputChange",e[e.parametersChange=5]="parametersChange",e[e.reset=6]="reset",e[e.textChange=7]="textChange",e[e.extraInputChange=8]="extraInputChange",e[e.extraEditorChange=9]="extraEditorChange",e[e.addTableCatalogSheet=10]="addTableCatalogSheet",e[e.removeTableCatalogSheet=11]="removeTableCatalogSheet",e[e.queryChange=12]="queryChange"}(Fe||(Fe={}));const Pe=n.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  margin-left: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
`;function ze(e,t){var a,n,r,l;const o={...e||{}};let i,s={},d="",c={allows_virtual_table_explore:!0};switch(t.type){case Fe.extraEditorChange:return{...o,extra_json:{...o.extra_json,[t.payload.name]:t.payload.json}};case Fe.extraInputChange:var u;return"schema_cache_timeout"===t.payload.name||"table_cache_timeout"===t.payload.name?{...o,extra_json:{...o.extra_json,metadata_cache_timeout:{...null==(u=o.extra_json)?void 0:u.metadata_cache_timeout,[t.payload.name]:t.payload.value}}}:"schemas_allowed_for_file_upload"===t.payload.name?{...o,extra_json:{...o.extra_json,schemas_allowed_for_file_upload:(t.payload.value||"").split(",")}}:{...o,extra_json:{...o.extra_json,[t.payload.name]:"checkbox"===t.payload.type?t.payload.checked:t.payload.value}};case Fe.inputChange:return"checkbox"===t.payload.type?{...o,[t.payload.name]:t.payload.checked}:{...o,[t.payload.name]:t.payload.value};case Fe.parametersChange:if(void 0!==o.catalog&&null!=(a=t.payload.type)&&a.startsWith("catalog")){var p,h;const e=null==(p=t.payload.type)?void 0:p.split("-")[1];((null==o?void 0:o.catalog[e])||{})[t.payload.name]=t.payload.value;const a={};return null==(h=o.catalog)||h.map((e=>{a[e.name]=e.value})),{...o,parameters:{...o.parameters,catalog:a}}}return{...o,parameters:{...o.parameters,[t.payload.name]:t.payload.value}};case Fe.addTableCatalogSheet:return void 0!==o.catalog?{...o,catalog:[...o.catalog,{name:"",value:""}]}:{...o,catalog:[{name:"",value:""}]};case Fe.removeTableCatalogSheet:return null==(n=o.catalog)||n.splice(t.payload.indexToDelete,1),{...o};case Fe.editorChange:return{...o,[t.payload.name]:t.payload.json};case Fe.queryChange:return{...o,parameters:{...o.parameters,query:Object.fromEntries(new URLSearchParams(t.payload.value))},query_input:t.payload.value};case Fe.textChange:return{...o,[t.payload.name]:t.payload.value};case Fe.fetched:var m,g,b;if(t.payload.extra&&(i={...JSON.parse(t.payload.extra||"")},c={...c,...JSON.parse(t.payload.extra||""),metadata_params:JSON.stringify(null==(m=i)?void 0:m.metadata_params),engine_params:JSON.stringify(null==(g=i)?void 0:g.engine_params),schemas_allowed_for_file_upload:null==(b=i)?void 0:b.schemas_allowed_for_file_upload}),s=(null==(r=t.payload)||null==(l=r.parameters)?void 0:l.query)||{},d=Object.entries(s).map((e=>{let[t,a]=e;return`${t}=${a}`})).join("&"),t.payload.encrypted_extra&&t.payload.configuration_method===N.DYNAMIC_FORM){var v,y;const e=Object.entries((null==(v=i)||null==(y=v.engine_params)?void 0:y.catalog)||{}).map((e=>{let[t,a]=e;return{name:t,value:a}}));return{...t.payload,engine:t.payload.backend||o.engine,configuration_method:t.payload.configuration_method,extra_json:c,catalog:e,parameters:t.payload.parameters||o.parameters,query_input:d}}return{...t.payload,encrypted_extra:t.payload.encrypted_extra||"",engine:t.payload.backend||o.engine,configuration_method:t.payload.configuration_method,extra_json:c,parameters:t.payload.parameters||o.parameters,query_input:d};case Fe.dbSelected:case Fe.configMethodChange:return{...t.payload};case Fe.reset:default:return null}}const je=e=>JSON.stringify({...e,metadata_params:JSON.parse((null==e?void 0:e.metadata_params)||"{}"),engine_params:JSON.parse((null==e?void 0:e.engine_params)||"{}"),schemas_allowed_for_file_upload:((null==e?void 0:e.schemas_allowed_for_file_upload)||[]).filter((e=>""!==e))}),Be=(0,T.ZP)((e=>{var t;let{addDangerToast:a,addSuccessToast:n,onDatabaseAdd:h,onHide:m,show:g,databaseId:b,dbEngine:v}=e;const[y,f]=(0,o.useReducer)(ze,null),{state:{loading:Z,resource:x,error:w},fetchResource:C,createResource:$,updateResource:S,clearError:T}=(0,O.LE)("database",(0,r.t)("database"),a),[D,q]=(0,o.useState)("1"),[R,F]=(0,O.cb)(),[P,z,j]=(0,O.h1)(),[H,ee]=(0,o.useState)(!1),[te,ae]=(0,o.useState)(!1),[ne,se]=(0,o.useState)(""),[de,ce]=(0,o.useState)(!1),[me,ve]=(0,o.useState)(!1),[fe,Ze]=(0,o.useState)(!1),[xe,_e]=(0,o.useState)({}),[we,Ce]=(0,o.useState)(!1),[$e,Se]=(0,o.useState)([]),[ke,Ne]=(0,o.useState)(!1),[Ee,Ue]=(0,o.useState)(),[Te,Ae]=(0,o.useState)([]),Oe=(0,M.c)(),Ie=(0,O.rM)(),Be=(0,O.jb)(),Qe=!!b,Ke=(0,l.c)(l.T.FORCE_DATABASE_CONNECTIONS_SSL),He=Be||!(null==y||!y.engine||!qe[y.engine]),Ve=(null==y?void 0:y.configuration_method)===N.SQLALCHEMY_URI,Ge=Qe||Ve,Je=P||w,Ye=e=>e&&0===Object.keys(e).length,We=(null==R||null==(t=R.databases)?void 0:t.find((e=>e.engine===(Qe?null==y?void 0:y.backend:null==y?void 0:y.engine))))||{},Xe=()=>{f({type:Fe.reset}),ee(!1),j(null),T(),ce(!1),Se([]),Ne(!1),Ue(""),Ae([]),_e({}),Ce(!1),m()},{state:{alreadyExists:et,passwordsNeeded:tt,loading:at,failed:nt},importResource:rt}=(0,O.PW)("database",(0,r.t)("database"),(e=>{Ue(e)})),lt=(e,t)=>{f({type:e,payload:t})},ot=async()=>{var e;const{id:t,...a}=y||{},l=JSON.parse(JSON.stringify(a));if(l.configuration_method===N.DYNAMIC_FORM){const e=await z(l,!0);if(P&&!Ye(P)||e)return;const t=Qe?l.parameters_schema.properties:null==We?void 0:We.parameters.properties,a=JSON.parse(l.encrypted_extra||"{}");Object.keys(t||{}).forEach((e=>{var n,r,o,i;t[e]["x-encrypted-extra"]&&null!=(n=l.parameters)&&n[e]&&("object"==typeof(null==(r=l.parameters)?void 0:r[e])?(a[e]=null==(o=l.parameters)?void 0:o[e],l.parameters[e]=JSON.stringify(l.parameters[e])):a[e]=JSON.parse((null==(i=l.parameters)?void 0:i[e])||"{}"))})),l.encrypted_extra=JSON.stringify(a),l.engine===E.GSheet&&(l.impersonate_user=!0)}if(null!=l&&null!=(e=l.parameters)&&e.catalog&&(l.extra_json={engine_params:JSON.stringify({catalog:l.parameters.catalog})}),null!=l&&l.extra_json&&(l.extra=je(null==l?void 0:l.extra_json)),ve(!0),null!=y&&y.id)await S(y.id,l,l.configuration_method===N.DYNAMIC_FORM)&&(h&&h(),de||(Xe(),n((0,r.t)("Database settings updated"))));else if(y)await $(l,l.configuration_method===N.DYNAMIC_FORM)&&(ee(!0),h&&h(),Ge&&(Xe(),n((0,r.t)("Database connected"))));else{if(Ne(!0),!($e[0].originFileObj instanceof File))return;await rt($e[0].originFileObj,xe,we)&&(h&&h(),Xe(),n((0,r.t)("Database connected")))}ae(!0),ce(!1),ve(!1)},it=e=>{if("Other"===e)f({type:Fe.dbSelected,payload:{database_name:e,configuration_method:N.SQLALCHEMY_URI,engine:void 0}});else{const t=null==R?void 0:R.databases.filter((t=>t.name===e))[0],{engine:a,parameters:n}=t,r=void 0!==n;f({type:Fe.dbSelected,payload:{database_name:e,engine:a,configuration_method:r?N.DYNAMIC_FORM:N.SQLALCHEMY_URI}})}f({type:Fe.addTableCatalogSheet})},st=()=>{x&&C(x.id),ae(!1),ce(!0)},dt=()=>{de&&ee(!1),ke&&Ne(!1),nt&&(Ne(!1),Ue(""),Ae([]),_e({})),f({type:Fe.reset}),Se([])},ct=()=>y?!H||de?(0,_.tZ)(o.Fragment,null,(0,_.tZ)(pe,{key:"back",onClick:dt},(0,r.t)("Back")),(0,_.tZ)(pe,{key:"submit",buttonStyle:"primary",onClick:ot},(0,r.t)("Connect"))):(0,_.tZ)(o.Fragment,null,(0,_.tZ)(pe,{key:"back",onClick:st},(0,r.t)("Back")),(0,_.tZ)(pe,{key:"submit",buttonStyle:"primary",onClick:ot},(0,r.t)("Finish"))):ke?(0,_.tZ)(o.Fragment,null,(0,_.tZ)(pe,{key:"back",onClick:dt},(0,r.t)("Back")),(0,_.tZ)(pe,{key:"submit",buttonStyle:"primary",onClick:ot,disabled:!!(at||et.length&&!we||tt.length&&"{}"===JSON.stringify(xe))},(0,r.t)("Connect"))):[],ut=(0,o.useRef)(!0);(0,o.useEffect)((()=>{ut.current?ut.current=!1:at||et.length||tt.length||me||nt||(Xe(),n((0,r.t)("Database connected")))}),[et,tt,at,nt]),(0,o.useEffect)((()=>{g&&(q("1"),F(),ve(!0)),b&&g&&Qe&&b&&(Z||C(b).catch((e=>a((0,r.t)("Sorry there was an error fetching database information: %s",e.message)))))}),[g,b]),(0,o.useEffect)((()=>{x&&(f({type:Fe.fetched,payload:x}),se(x.database_name))}),[x]),(0,o.useEffect)((()=>{me&&ve(!1),R&&v&&it(v)}),[R]),(0,o.useEffect)((()=>{ke&&document.getElementsByClassName("ant-upload-list-item-name")[0].scrollIntoView()}),[ke]),(0,o.useEffect)((()=>{Ae([...tt])}),[tt]);const pt=()=>Ee?(0,_.tZ)(Y,null,(0,_.tZ)(L.Z,{errorMessage:Ee,showDbInstallInstructions:Te.length>0})):null,ht=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";Ce(n.toUpperCase()===(0,r.t)("OVERWRITE"))},mt=()=>{let e=[];return!1===Ye(w)?e="object"==typeof w?Object.values(w):[]:(null==y?void 0:y.engine)===E.Snowflake&&(e="GENERIC_DB_ENGINE_ERROR"===(null==P?void 0:P.error_type)?[null==P?void 0:P.description]:[]),e.length?(0,_.tZ)(c.Z,{type:"error",css:e=>(e=>_.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${8*e.gridUnit}px ${4*e.gridUnit}px;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
  }
  .ant-alert-description {
    font-size: ${e.typography.sizes.m}px;
    line-height: ${5*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),message:(0,r.t)("Database Creation Error"),description:(0,r.t)(e[0])}):(0,_.tZ)(o.Fragment,null)},gt=()=>{ve(!0),C(null==x?void 0:x.id).then((e=>{(0,i.LS)(i.dR.db,e)}))};return $e.length>0&&(et.length||Te.length)?(0,_.tZ)(u.Z,{css:e=>[Q,G(e),W(e),X(e)],name:"database",onHandledPrimaryAction:ot,onHide:Xe,primaryButtonName:(0,r.t)("Connect"),width:"500px",centered:!0,show:g,title:(0,_.tZ)("h4",null,(0,r.t)("Connect a database")),footer:ct()},(0,_.tZ)(De,{isLoading:me,isEditMode:Qe,useSqlAlchemyForm:Ve,hasConnectedDb:H,db:y,dbName:ne,dbModel:We,fileList:$e}),Te.length?Te.map((e=>(0,_.tZ)(o.Fragment,null,(0,_.tZ)(Y,null,(0,_.tZ)(c.Z,{closable:!1,css:e=>J(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,r.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in explore files and should be added manually after the import if they are needed.')})),(0,_.tZ)(A.Z,{id:"password_needed",name:"password_needed",required:!0,value:xe[e],onChange:t=>_e({...xe,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==P?void 0:P.password_needed,label:(0,r.t)("%s PASSWORD",e.slice(10)),css:V})))):null,et.length?(0,_.tZ)(o.Fragment,null,(0,_.tZ)(Y,null,(0,_.tZ)(c.Z,{closable:!1,css:e=>(e=>_.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"warning",showIcon:!0,message:"",description:(0,r.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})),(0,_.tZ)(A.Z,{id:"confirm_overwrite",name:"confirm_overwrite",required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==P?void 0:P.confirm_overwrite,label:(0,r.t)('TYPE "OVERWRITE" TO CONFIRM'),onChange:ht,css:V})):null,pt()):Ge?(0,_.tZ)(u.Z,{css:e=>[B,Q,G(e),W(e),X(e)],name:"database",onHandledPrimaryAction:ot,onHide:Xe,primaryButtonName:Qe?(0,r.t)("Save"):(0,r.t)("Connect"),width:"500px",centered:!0,show:g,title:(0,_.tZ)("h4",null,Qe?(0,r.t)("Edit database"):(0,r.t)("Connect a database")),footer:Qe?(e=>(0,_.tZ)(o.Fragment,null,(0,_.tZ)(pe,{key:"close",onClick:Xe},(0,r.t)("Close")),(0,_.tZ)(pe,{key:"submit",buttonStyle:"primary",onClick:ot,disabled:null==e?void 0:e.is_managed_externally,tooltip:null!=e&&e.is_managed_externally?(0,r.t)("This database is managed externally, and can't be edited in Superset"):""},(0,r.t)("Finish"))))(y):ct()},(0,_.tZ)(he,null,(0,_.tZ)(ie,null,(0,_.tZ)(De,{isLoading:me,isEditMode:Qe,useSqlAlchemyForm:Ve,hasConnectedDb:H,db:y,dbName:ne,dbModel:We}))),(0,_.tZ)(Re,{defaultActiveKey:"1",activeKey:D,onTabClick:e=>q(e),animated:{inkBar:!0,tabPane:!0}},(0,_.tZ)(s.ZP.TabPane,{tab:(0,_.tZ)("span",null,(0,r.t)("Basic")),key:"1"},Ve?(0,_.tZ)(re,null,(0,_.tZ)(ye,{db:y,onInputChange:e=>{let{target:t}=e;return lt(Fe.inputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},conf:Oe,testConnection:()=>{var e;if(null==y||!y.sqlalchemy_uri)return void a((0,r.t)("Please enter a SQLAlchemy URI to test"));const t={sqlalchemy_uri:(null==y?void 0:y.sqlalchemy_uri)||"",database_name:(null==y||null==(e=y.database_name)?void 0:e.trim())||void 0,impersonate_user:(null==y?void 0:y.impersonate_user)||void 0,extra:je(null==y?void 0:y.extra_json)||void 0,encrypted_extra:(null==y?void 0:y.encrypted_extra)||"",server_cert:(null==y?void 0:y.server_cert)||void 0};Ze(!0),(0,O.xx)(t,(e=>{Ze(!1),a(e)}),(e=>{Ze(!1),n(e)}))},testInProgress:fe}),(ft=(null==y?void 0:y.backend)||(null==y?void 0:y.engine),void 0!==(null==R||null==(Zt=R.databases)||null==(xt=Zt.find((e=>e.backend===ft||e.engine===ft)))?void 0:xt.parameters)&&!Qe&&(0,_.tZ)("div",{css:e=>K(e)},(0,_.tZ)(p.Z,{buttonStyle:"link",onClick:()=>f({type:Fe.configMethodChange,payload:{database_name:null==y?void 0:y.database_name,configuration_method:N.DYNAMIC_FORM,engine:null==y?void 0:y.engine}}),css:e=>(e=>_.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e)},(0,r.t)("Connect this database using the dynamic form instead")),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})))):(0,_.tZ)(Le,{isEditMode:!0,sslForced:Ke,dbModel:We,db:y,onParametersChange:e=>{let{target:t}=e;return lt(Fe.parametersChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onChange:e=>{let{target:t}=e;return lt(Fe.textChange,{name:t.name,value:t.value})},onQueryChange:e=>{let{target:t}=e;return lt(Fe.queryChange,{name:t.name,value:t.value})},onAddTableCatalog:()=>f({type:Fe.addTableCatalogSheet}),onRemoveTableCatalog:e=>f({type:Fe.removeTableCatalogSheet,payload:{indexToDelete:e}}),getValidation:()=>z(y),validationErrors:P}),!Qe&&(0,_.tZ)(Y,null,(0,_.tZ)(c.Z,{closable:!1,css:e=>J(e),message:"Additional fields may be required",showIcon:!0,description:(0,_.tZ)(o.Fragment,null,(0,r.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,_.tZ)("a",{href:Me,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,r.t)("here")),"."),type:"info"}))),(0,_.tZ)(s.ZP.TabPane,{tab:(0,_.tZ)("span",null,(0,r.t)("Advanced")),key:"2"},(0,_.tZ)(be,{db:y,onInputChange:e=>{let{target:t}=e;return lt(Fe.inputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onTextChange:e=>{let{target:t}=e;return lt(Fe.textChange,{name:t.name,value:t.value})},onEditorChange:e=>lt(Fe.editorChange,e),onExtraInputChange:e=>{let{target:t}=e;lt(Fe.extraInputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onExtraEditorChange:e=>{lt(Fe.extraEditorChange,e)}}),Je&&mt()))):(0,_.tZ)(u.Z,{css:e=>[Q,G(e),W(e),X(e)],name:"database",onHandledPrimaryAction:ot,onHide:Xe,primaryButtonName:H?(0,r.t)("Finish"):(0,r.t)("Connect"),width:"500px",centered:!0,show:g,title:(0,_.tZ)("h4",null,(0,r.t)("Connect a database")),footer:ct()},!me&&H?(0,_.tZ)(o.Fragment,null,(0,_.tZ)(De,{isLoading:me,isEditMode:Qe,useSqlAlchemyForm:Ve,hasConnectedDb:H,db:y,dbName:ne,dbModel:We,editNewDb:de}),te&&(0,_.tZ)(Pe,null,(0,_.tZ)(p.Z,{buttonStyle:"secondary",onClick:()=>{ve(!0),gt(),window.location.href="/tablemodelview/list#create"}},(0,r.t)("CREATE DATASET")),(0,_.tZ)(p.Z,{buttonStyle:"secondary",onClick:()=>{ve(!0),gt(),window.location.href="/superset/sqllab/?db=true"}},(0,r.t)("QUERY DATA IN SQL LAB"))),de?(0,_.tZ)(Le,{isEditMode:!0,sslForced:Ke,dbModel:We,db:y,onParametersChange:e=>{let{target:t}=e;return lt(Fe.parametersChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onChange:e=>{let{target:t}=e;return lt(Fe.textChange,{name:t.name,value:t.value})},onQueryChange:e=>{let{target:t}=e;return lt(Fe.queryChange,{name:t.name,value:t.value})},onAddTableCatalog:()=>f({type:Fe.addTableCatalogSheet}),onRemoveTableCatalog:e=>f({type:Fe.removeTableCatalogSheet,payload:{indexToDelete:e}}),getValidation:()=>z(y),validationErrors:P}):(0,_.tZ)(be,{db:y,onInputChange:e=>{let{target:t}=e;return lt(Fe.inputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onTextChange:e=>{let{target:t}=e;return lt(Fe.textChange,{name:t.name,value:t.value})},onEditorChange:e=>lt(Fe.editorChange,e),onExtraInputChange:e=>{let{target:t}=e;lt(Fe.extraInputChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onExtraEditorChange:e=>lt(Fe.extraEditorChange,e)})):(0,_.tZ)(o.Fragment,null,!me&&(y?(0,_.tZ)(o.Fragment,null,(0,_.tZ)(De,{isLoading:me,isEditMode:Qe,useSqlAlchemyForm:Ve,hasConnectedDb:H,db:y,dbName:ne,dbModel:We}),He&&(()=>{var e,t,a,n,r;const{hostname:l}=window.location;let o=(null==Be||null==(e=Be.REGIONAL_IPS)?void 0:e.default)||"";const i=(null==Be?void 0:Be.REGIONAL_IPS)||{};return Object.entries(i).forEach((e=>{let[t,a]=e;const n=new RegExp(t);l.match(n)&&(o=a)})),(null==y?void 0:y.engine)&&(0,_.tZ)(Y,null,(0,_.tZ)(c.Z,{closable:!1,css:e=>J(e),type:"info",showIcon:!0,message:(null==(t=qe[y.engine])?void 0:t.message)||(null==Be||null==(a=Be.DEFAULT)?void 0:a.message),description:(null==(n=qe[y.engine])?void 0:n.description)||(null==Be||null==(r=Be.DEFAULT)?void 0:r.description)+o}))})(),(0,_.tZ)(Le,{db:y,sslForced:Ke,dbModel:We,onAddTableCatalog:()=>{f({type:Fe.addTableCatalogSheet})},onQueryChange:e=>{let{target:t}=e;return lt(Fe.queryChange,{name:t.name,value:t.value})},onRemoveTableCatalog:e=>{f({type:Fe.removeTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:e=>{let{target:t}=e;return lt(Fe.parametersChange,{type:t.type,name:t.name,checked:t.checked,value:t.value})},onChange:e=>{let{target:t}=e;return lt(Fe.textChange,{name:t.name,value:t.value})},getValidation:()=>z(y),validationErrors:P,getPlaceholder:e=>{if("database"===e)return(null==y?void 0:y.engine)===E.Snowflake?(0,r.t)("e.g. xy12345.us-east-2.aws"):(0,r.t)("e.g. world_population")}}),(0,_.tZ)("div",{css:e=>K(e)},We.engine!==E.GSheet&&(0,_.tZ)(o.Fragment,null,(0,_.tZ)(p.Z,{buttonStyle:"link",onClick:()=>f({type:Fe.configMethodChange,payload:{engine:y.engine,configuration_method:N.SQLALCHEMY_URI,database_name:y.database_name}}),css:le},(0,r.t)("Connect this database with a SQLAlchemy URI string instead")),(0,_.tZ)(U.Z,{tooltip:(0,r.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"}))),Je&&mt()):(0,_.tZ)(ue,null,(0,_.tZ)(De,{isLoading:me,isEditMode:Qe,useSqlAlchemyForm:Ve,hasConnectedDb:H,db:y,dbName:ne,dbModel:We}),(0,_.tZ)("div",{className:"preferred"},null==R||null==(yt=R.databases)?void 0:yt.filter((e=>e.preferred)).map((e=>(0,_.tZ)(k,{className:"preferred-item",onClick:()=>it(e.name),buttonText:e.name,icon:null==Ie?void 0:Ie[e.engine],key:`${e.name}`})))),(0,_.tZ)("div",{className:"available"},(0,_.tZ)("h4",{className:"available-label"},(0,r.t)("Or choose from a list of other databases we support:")),(0,_.tZ)("div",{className:"control-label"},(0,r.t)("Supported databases")),(0,_.tZ)(d.IZ,{className:"available-select",onChange:it,placeholder:(0,r.t)("Choose a database..."),showSearch:!0},null==(bt=[...(null==R?void 0:R.databases)||[]])?void 0:bt.sort(((e,t)=>e.name.localeCompare(t.name))).map((e=>(0,_.tZ)(d.IZ.Option,{value:e.name,key:e.name},e.name))),(0,_.tZ)(d.IZ.Option,{value:"Other",key:"Other"},(0,r.t)("Other"))),(0,_.tZ)(c.Z,{showIcon:!0,closable:!1,css:e=>J(e),type:"info",message:(null==Be||null==(vt=Be.ADD_DATABASE)?void 0:vt.message)||(0,r.t)("Want to add a new database?"),description:null!=Be&&Be.ADD_DATABASE?(0,_.tZ)(o.Fragment,null,(0,r.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,_.tZ)("a",{href:null==Be?void 0:Be.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer"},null==Be?void 0:Be.ADD_DATABASE.contact_description_link)," ",null==Be?void 0:Be.ADD_DATABASE.description):(0,_.tZ)(o.Fragment,null,(0,r.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,_.tZ)("a",{href:Me,target:"_blank",rel:"noopener noreferrer"},(0,r.t)("here")),".")})),(0,_.tZ)(ge,null,(0,_.tZ)(d.gq,{name:"databaseFile",id:"databaseFile",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:async e=>{Ue(""),Ae([]),_e({}),Ne(!0),Se([{...e.file,status:"done"}]),e.file.originFileObj instanceof File&&await rt(e.file.originFileObj,xe,we)&&(null==h||h())},onRemove:e=>(Se($e.filter((t=>t.uid!==e.uid))),!1)},(0,_.tZ)(p.Z,{buttonStyle:"link",type:"link",css:oe},(0,r.t)("Import database from file")))),pt()))),me&&(0,_.tZ)(I.Z,null));var bt,vt,yt,ft,Zt,xt}))},1483:(e,t,a)=>{a.d(t,{c:()=>r});var n=a(37703);function r(){return(0,n.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},77230:(e,t,a)=>{a.d(t,{Z:()=>X});var n=a(5872),r=a.n(n),l=a(23279),o=a.n(l),i=a(67294),s=a(51995),d=a(11965),c=a(23525),u=a(4715),p=a(83862),h=a(58593),m=a(73727),g=a(85931),b=a(70163),v=a(29147),y=a(27600),f=a(15926),Z=a.n(f),x=a(37703),_=a(35755),w=a(75049),C=a(61988),$=a(31069),S=a(37921),k=a(12617),N=a(53002);const{SubMenu:E}=p.$,U=s.iK.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`,T=s.iK.i`
  margin-top: 2px;
`;function A(e){const{locale:t,languages:a,...n}=e;return(0,d.tZ)(E,r()({"aria-label":"Languages",title:(0,d.tZ)("div",{className:"f16"},(0,d.tZ)(T,{className:`flag ${a[t].flag}`})),icon:(0,d.tZ)(b.Z.TriangleDown,null)},n),Object.keys(a).map((e=>(0,d.tZ)(p.$.Item,{key:e,style:{whiteSpace:"normal",height:"auto"}},(0,d.tZ)(U,{className:"f16"},(0,d.tZ)("i",{className:`flag ${a[e].flag}`}),(0,d.tZ)("a",{href:a[e].url},a[e].name))))))}var L,O=a(6238),M=a(40768);!function(e){e.GOOGLE_SHEETS="gsheets",e.DB_CONNECTION="dbconnection"}(L||(L={}));const I=(0,w.I)(),D=e=>d.iv`
  padding: ${1.5*e.gridUnit}px ${4*e.gridUnit}px
    ${4*e.gridUnit}px ${7*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
  font-size: ${e.typography.sizes.xs}px;
  white-space: nowrap;
`,q=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
`,R=e=>d.iv`
  color: ${e.colors.grayscale.base};
  backgroundColor: ${e.colors.grayscale.light2}};
  .ant-menu-item:hover {
    color: ${e.colors.grayscale.base};
    cursor: default;
  }
`,F=s.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${e=>{let{align:t}=e;return t}};
  align-items: center;
  margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  .ant-menu-submenu-title > svg {
    top: ${e=>{let{theme:t}=e;return 5.25*t.gridUnit}}px;
  }
`,P=s.iK.a`
  padding-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  padding-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,z=e=>d.iv`
  color: ${e.colors.grayscale.light5};
`,{SubMenu:j}=p.$,B=e=>{let{align:t,settings:a,navbarRight:n,isFrontendRoute:r,environmentTag:l,setQuery:o}=e;const c=(0,x.v9)((e=>e.user)),u=(0,x.v9)((e=>{var t;return null==(t=e.dashboardInfo)?void 0:t.id})),g=c||{},{roles:v}=g,{CSV_EXTENSIONS:y,COLUMNAR_EXTENSIONS:f,EXCEL_EXTENSIONS:_,ALLOWED_EXTENSIONS:w,HAS_GSHEETS_INSTALLED:E}=(0,x.v9)((e=>e.common.conf)),[U,T]=(0,i.useState)(!1),[B,Q]=(0,i.useState)(""),K=(0,k.R)("can_sqllab","Superset",v),H=(0,k.R)("can_write","Dashboard",v),V=(0,k.R)("can_write","Chart",v),G=(0,k.R)("can_write","Database",v),{canUploadData:J,canUploadCSV:Y,canUploadColumnar:W,canUploadExcel:X}=(0,M.Mc)(v,y,f,_,w),ee=K||V||H,[te,ae]=(0,i.useState)(!1),ne=(0,N.i)(c),re=te||ne,le=[{label:(0,C.t)("Data"),icon:"fa-database",childs:[{label:(0,C.t)("Connect database"),name:L.DB_CONNECTION,perm:G},{label:(0,C.t)("Connect Google Sheet"),name:L.GOOGLE_SHEETS,perm:G&&E},{label:(0,C.t)("Upload CSV to database"),name:"Upload a CSV",url:"/csvtodatabaseview/form",perm:Y&&re},{label:(0,C.t)("Upload columnar file to database"),name:"Upload a Columnar file",url:"/columnartodatabaseview/form",perm:W&&re},{label:(0,C.t)("Upload Excel file to database"),name:"Upload Excel",url:"/exceltodatabaseview/form",perm:X&&re}]},{label:(0,C.t)("SQL query"),url:"/superset/sqllab?new=true",icon:"fa-fw fa-search",perm:"can_sqllab",view:"Superset"},{label:(0,C.t)("Chart"),url:Number.isInteger(u)?`/chart/add?dashboard_id=${u}`:"/chart/add",icon:"fa-fw fa-bar-chart",perm:"can_write",view:"Chart"},{label:(0,C.t)("Dashboard"),url:"/dashboard/new",icon:"fa-fw fa-dashboard",perm:"can_write",view:"Dashboard"}],oe=()=>{$.Z.get({endpoint:`/api/v1/database/?q=${Z().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((e=>{let{json:t}=e;ae(t.count>=1)}))};(0,i.useEffect)((()=>{J&&oe()}),[J]);const ie=e=>(0,d.tZ)(i.Fragment,null,(0,d.tZ)("i",{className:`fa ${e.icon}`}),e.label),se=ne&&!te,de=(0,C.t)("Enable 'Allow data upload' in any database's settings"),ce=I.get("navbar.right"),ue=(0,s.Fg)();return(0,d.tZ)(F,{align:t},G&&(0,d.tZ)(O.Z,{onHide:()=>{Q(""),T(!1)},show:U,dbEngine:B,onDatabaseAdd:()=>o({databaseAdded:!0})}),l&&l.text&&(0,d.tZ)(S.Z,{css:(0,d.iv)({borderRadius:125*ue.gridUnit+"px"},"",""),color:/^#(?:[0-9a-f]{3}){1,2}$/i.test(l.color)?l.color:l.color.split(".").reduce(((e,t)=>e[t]),ue.colors)},(0,d.tZ)("span",{css:z},l.text)),(0,d.tZ)(p.$,{selectable:!1,mode:"horizontal",onClick:e=>{e.key===L.DB_CONNECTION?T(!0):e.key===L.GOOGLE_SHEETS&&(T(!0),Q("Google Sheets"))},onOpenChange:e=>e.length&&J?oe():null},ce&&(0,d.tZ)(ce,null),!n.user_is_anonymous&&ee&&(0,d.tZ)(j,{title:(0,d.tZ)(q,{className:"fa fa-plus"}),icon:(0,d.tZ)(b.Z.TriangleDown,null)},null==le||null==le.map?void 0:le.map((e=>{var t;const a=null==(t=e.childs)?void 0:t.some((e=>"object"==typeof e&&!!e.perm));if(e.childs){var n;if(a)return(0,d.tZ)(j,{key:`sub2_${e.label}`,className:"data-menu",title:ie(e)},null==e||null==(n=e.childs)||null==n.map?void 0:n.map(((e,t)=>"string"!=typeof e&&e.name&&e.perm?(0,d.tZ)(i.Fragment,{key:e.name},2===t&&(0,d.tZ)(p.$.Divider,null),(e=>se&&e.url?(0,d.tZ)(p.$.Item,{key:e.name,css:R},(0,d.tZ)(h.u,{placement:"top",title:de},e.label)):(0,d.tZ)(p.$.Item,{key:e.name},e.url?(0,d.tZ)("a",{href:e.url}," ",e.label," "):e.label))(e)):null)));if(!e.url)return null}return(0,k.R)(e.perm,e.view,v)&&(0,d.tZ)(p.$.Item,{key:e.label},r(e.url)?(0,d.tZ)(m.rU,{to:e.url||""},(0,d.tZ)("i",{className:`fa ${e.icon}`})," ",e.label):(0,d.tZ)("a",{href:e.url},(0,d.tZ)("i",{className:`fa ${e.icon}`})," ",e.label))}))),(0,d.tZ)(j,{title:(0,C.t)("Settings"),icon:(0,d.tZ)(b.Z.TriangleDown,{iconSize:"xl"})},null==a||null==a.map?void 0:a.map(((e,t)=>{var n;return[(0,d.tZ)(p.$.ItemGroup,{key:`${e.label}`,title:e.label},null==e||null==(n=e.childs)||null==n.map?void 0:n.map((e=>"string"!=typeof e?(0,d.tZ)(p.$.Item,{key:`${e.label}`},r(e.url)?(0,d.tZ)(m.rU,{to:e.url||""},e.label):(0,d.tZ)("a",{href:e.url},e.label)):null))),t<a.length-1&&(0,d.tZ)(p.$.Divider,{key:`divider_${t}`})]})),!n.user_is_anonymous&&[(0,d.tZ)(p.$.Divider,{key:"user-divider"}),(0,d.tZ)(p.$.ItemGroup,{key:"user-section",title:(0,C.t)("User")},n.user_profile_url&&(0,d.tZ)(p.$.Item,{key:"profile"},(0,d.tZ)("a",{href:n.user_profile_url},(0,C.t)("Profile"))),n.user_info_url&&(0,d.tZ)(p.$.Item,{key:"info"},(0,d.tZ)("a",{href:n.user_info_url},(0,C.t)("Info"))),(0,d.tZ)(p.$.Item,{key:"logout"},(0,d.tZ)("a",{href:n.user_logout_url},(0,C.t)("Logout"))))],(n.version_string||n.version_sha)&&[(0,d.tZ)(p.$.Divider,{key:"version-info-divider"}),(0,d.tZ)(p.$.ItemGroup,{key:"about-section",title:(0,C.t)("About")},(0,d.tZ)("div",{className:"about-section"},n.show_watermark&&(0,d.tZ)("div",{css:D},(0,C.t)("Powered by Apache Superset")),n.version_string&&(0,d.tZ)("div",{css:D},"Version: ",n.version_string),n.version_sha&&(0,d.tZ)("div",{css:D},"SHA: ",n.version_sha),n.build_number&&(0,d.tZ)("div",{css:D},"Build: ",n.build_number)))]),n.show_language_picker&&(0,d.tZ)(A,{locale:n.locale,languages:n.languages})),n.documentation_url&&(0,d.tZ)(P,{href:n.documentation_url,target:"_blank",rel:"noreferrer",title:(0,C.t)("Documentation")},(0,d.tZ)("i",{className:"fa fa-question"})," "),n.bug_report_url&&(0,d.tZ)(P,{href:n.bug_report_url,target:"_blank",rel:"noreferrer",title:(0,C.t)("Report a bug")},(0,d.tZ)("i",{className:"fa fa-bug"})),n.user_is_anonymous&&(0,d.tZ)(P,{href:n.user_login_url},(0,d.tZ)("i",{className:"fa fa-fw fa-sign-in"}),(0,C.t)("Login")))},Q=e=>{const[,t]=(0,_.Kx)({databaseAdded:_.dJ});return(0,d.tZ)(B,r()({setQuery:t},e))};class K extends i.PureComponent{constructor(){super(...arguments),this.state={hasError:!1},this.noop=()=>{}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,d.tZ)(B,r()({setQuery:this.noop},this.props)):this.props.children}}const H=e=>(0,d.tZ)(K,e,(0,d.tZ)(Q,e)),V=s.iK.header`
  ${e=>{let{theme:t}=e;return`\n      background-color: ${t.colors.grayscale.light5};\n      margin-bottom: 2px;\n      &:nth-last-of-type(2) nav {\n        margin-bottom: 2px;\n      }\n      .caret {\n        display: none;\n      }\n      .navbar-brand {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        /* must be exactly the height of the Antd navbar */\n        min-height: 50px;\n        padding: ${t.gridUnit}px ${2*t.gridUnit}px ${t.gridUnit}px ${4*t.gridUnit}px;\n        max-width: ${37*t.gridUnit}px;\n        img {\n          height: 100%;\n          object-fit: contain;\n        }\n      }\n      .navbar-brand-text {\n        border-left: 1px solid ${t.colors.grayscale.light2};\n        border-right: 1px solid ${t.colors.grayscale.light2};\n        height: 100%;\n        color: ${t.colors.grayscale.dark1};\n        padding-left: ${4*t.gridUnit}px;\n        padding-right: ${4*t.gridUnit}px;\n        margin-right: ${6*t.gridUnit}px;\n        font-size: ${4*t.gridUnit}px;\n        float: left;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        span {\n          max-width: ${58*t.gridUnit}px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        @media (max-width: 1127px) {\n          display: none;\n        }\n      }\n      .main-nav .ant-menu-submenu-title > svg {\n        top: ${5.25*t.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .navbar-brand {\n          float: none;\n        }\n      }\n      .ant-menu-horizontal .ant-menu-item {\n        height: 100%;\n        line-height: inherit;\n      }\n      .ant-menu > .ant-menu-item > a {\n        padding: ${4*t.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .ant-menu-item {\n          padding: 0 ${6*t.gridUnit}px 0\n            ${3*t.gridUnit}px !important;\n        }\n        .ant-menu > .ant-menu-item > a {\n          padding: 0px;\n        }\n        .main-nav .ant-menu-submenu-title > svg:nth-of-type(1) {\n          display: none;\n        }\n        .ant-menu-item-active > a {\n          &:hover {\n            color: ${t.colors.primary.base} !important;\n            background-color: transparent !important;\n          }\n        }\n      }\n      .ant-menu-item a {\n        &:hover {\n          color: ${t.colors.grayscale.dark1};\n          background-color: ${t.colors.primary.light5};\n          border-bottom: none;\n          margin: 0;\n          &:after {\n            opacity: 1;\n            width: 100%;\n          }\n        }\n      }\n  `}}
`,G=e=>d.iv`
  .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light.ant-menu-submenu-placement-bottomLeft {
    border-radius: 0px;
  }
  .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light {
    border-radius: 0px;
  }
  .ant-menu-vertical > .ant-menu-submenu.data-menu > .ant-menu-submenu-title {
    height: 28px;
    i {
      padding-right: ${2*e.gridUnit}px;
      margin-left: ${1.75*e.gridUnit}px;
    }
  }
`,{SubMenu:J}=p.$,{useBreakpoint:Y}=u.rj;function W(e){let{data:{menu:t,brand:a,navbar_right:n,settings:r,environment_tag:l},isFrontendRoute:f=(()=>!1)}=e;const[Z,x]=(0,i.useState)("horizontal"),_=Y(),w=(0,v.fG)(),C=(0,s.Fg)();return(0,i.useEffect)((()=>{function e(){window.innerWidth<=767?x("inline"):x("horizontal")}e();const t=o()((()=>e()),10);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),(0,c.eY)(y.KD.standalone)||w.hideNav?(0,d.tZ)(i.Fragment,null):(0,d.tZ)(V,{className:"top",id:"main-menu",role:"navigation"},(0,d.tZ)(d.xB,{styles:G(C)}),(0,d.tZ)(u.X2,null,(0,d.tZ)(u.JX,{md:16,xs:24},(0,d.tZ)(h.u,{id:"brand-tooltip",placement:"bottomLeft",title:a.tooltip,arrowPointAtCenter:!0},f(window.location.pathname)?(0,d.tZ)(g.m,{className:"navbar-brand",to:a.path},(0,d.tZ)("img",{src:a.icon,alt:a.alt})):(0,d.tZ)("a",{className:"navbar-brand",href:a.path},(0,d.tZ)("img",{src:a.icon,alt:a.alt}))),a.text&&(0,d.tZ)("div",{className:"navbar-brand-text"},(0,d.tZ)("span",null,a.text)),(0,d.tZ)(p.$,{mode:Z,className:"main-nav"},t.map(((e,t)=>{var a;return(e=>{let{label:t,childs:a,url:n,index:r,isFrontendRoute:l}=e;return n&&l?(0,d.tZ)(p.$.Item,{key:t,role:"presentation"},(0,d.tZ)(m.rU,{role:"button",to:n},t)):n?(0,d.tZ)(p.$.Item,{key:t},(0,d.tZ)("a",{href:n},t)):(0,d.tZ)(J,{key:r,title:t,icon:"inline"===Z?(0,d.tZ)(i.Fragment,null):(0,d.tZ)(b.Z.TriangleDown,null)},null==a?void 0:a.map(((e,a)=>"string"==typeof e&&"-"===e&&"Data"!==t?(0,d.tZ)(p.$.Divider,{key:`$${a}`}):"string"!=typeof e?(0,d.tZ)(p.$.Item,{key:`${e.label}`},e.isFrontendRoute?(0,d.tZ)(m.rU,{to:e.url||""},e.label):(0,d.tZ)("a",{href:e.url},e.label)):null)))})({index:t,...e,isFrontendRoute:f(e.url),childs:null==(a=e.childs)?void 0:a.map((e=>"string"==typeof e?e:{...e,isFrontendRoute:f(e.url)}))})})))),(0,d.tZ)(u.JX,{md:8,xs:24},(0,d.tZ)(H,{align:_.md?"flex-end":"flex-start",settings:r,navbarRight:n,isFrontendRoute:f,environmentTag:l}))))}function X(e){let{data:t,...a}=e;const n={...t},l={Security:!0,Manage:!0},o=[],i=[];return n.menu.forEach((e=>{if(!e)return;const t=[],a={...e};e.childs&&(e.childs.forEach((e=>{("string"==typeof e||e.label)&&t.push(e)})),a.childs=t),l.hasOwnProperty(e.name)?i.push(a):o.push(a)})),n.menu=o,n.settings=i,(0,d.tZ)(W,r()({data:n},a))}}}]);
//# sourceMappingURL=7230.2da9fcb0a3cbae657f90.entry.js.map