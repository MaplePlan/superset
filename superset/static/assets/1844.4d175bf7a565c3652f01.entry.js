/*! For license information please see 1844.4d175bf7a565c3652f01.entry.js.LICENSE.txt */
"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1844],{95573:e=>{var t=/["'&<>]/;e.exports=function(e){var r,n=""+e,a=t.exec(n);if(!a)return n;var o="",i=0,s=0;for(i=a.index;i<n.length;i++){switch(n.charCodeAt(i)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}s!==i&&(o+=n.substring(s,i)),s=i+1,o+=r}return s!==i?o+n.substring(s,i):o}},13423:(e,t,r)=>{r.d(t,{ZP:()=>L});var n,a,o,i=r(45697),s=r.n(i),c=r(67294),l=r(95573),p=r.n(l),u=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.attributes,r=void 0===t?{}:t,n=e.children,a=void 0===n?null:n,o=e.selfClose,i=void 0!==o&&o,s=e.tagName;return i?c.createElement(s,r):c.createElement(s,r,a)},n}(c.PureComponent);n=u,a="propTypes",o={attributes:s().any,children:s().node,selfClose:s().bool,tagName:s().string.isRequired},a in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o;var d=function(){function e(){}var t=e.prototype;return t.attribute=function(e,t){return t},t.node=function(e){function t(t,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){return t})),e}(),f=/(url|image|image-set)\(/i,h=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.attribute=function(e,t){return"style"===e&&Object.keys(t).forEach((function(e){String(t[e]).match(f)&&delete t[e]})),t},n}(d);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}var m={a:{content:9,self:!1,type:105},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:9,void:!0},body:{content:127},button:{content:8,type:105},caption:{content:1,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:97},dd:{content:1,parent:["dl"]},dl:{children:["dt","dd"],type:1},dt:{content:1,invalid:["footer","header"],parent:["dl"]},figcaption:{content:1,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:1,void:!0},img:{void:!0},li:{content:1,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:1},picture:{children:["source","img"],type:25},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:8,parent:["ruby","rtc"]},rtc:{content:8,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:8,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:1},tbody:{parent:["table"],children:["tr"]},td:{content:1,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:1,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:1},video:{children:["track","source"]},wbr:{type:9,void:!0}};function b(e){return function(t){m[t]=y({},e,{},m[t])}}["address","main","div","figure","p","pre"].forEach(b({content:1,type:65})),["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(b({content:8,type:73})),["p","pre"].forEach(b({content:8,type:65})),["s","small","span","del","ins"].forEach(b({content:8,type:9})),["article","aside","footer","header","nav","section","blockquote"].forEach(b({content:1,type:67})),["h1","h2","h3","h4","h5","h6"].forEach(b({content:8,type:69})),["audio","canvas","iframe","img","video"].forEach(b({type:89}));var v=Object.freeze(m),g=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],k=Object.keys(v).filter((function(e){return"canvas"!==e&&"iframe"!==e})),C=Object.freeze({alt:1,cite:1,class:1,colspan:3,controls:4,datetime:1,default:4,disabled:4,dir:1,height:1,href:1,id:1,kind:1,label:1,lang:1,loop:4,media:1,muted:4,poster:1,role:1,rowspan:3,scope:1,sizes:1,span:3,start:3,style:5,src:1,srclang:1,srcset:1,target:1,title:1,type:1,width:1}),w=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet"});function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=/^<(!doctype|(html|head|body)(\s|>))/i,E=/^(aria\x2D|data\x2D|[0-9A-Z_a-z\u017F\u212A]+:)/i,T=function(){function e(e,t,r,n){void 0===t&&(t={}),void 0===r&&(r=[]),void 0===n&&(n=[]),A(this,"allowed",void 0),A(this,"banned",void 0),A(this,"blocked",void 0),A(this,"doc",void 0),A(this,"content",[]),A(this,"props",void 0),A(this,"matchers",void 0),A(this,"filters",void 0),A(this,"keyIndex",void 0),this.props=t,this.matchers=r,this.filters=[].concat(n,[new h]),this.keyIndex=-1,this.doc=this.createDocument(e||""),this.allowed=new Set(t.allowList||k),this.banned=new Set(g),this.blocked=new Set(t.blockList)}var t=e.prototype;return t.applyAttributeFilters=function(e,t){return this.filters.reduce((function(t,r){return null!==t&&"function"==typeof r.attribute?r.attribute(e,t):t}),t)},t.applyNodeFilters=function(e,t){return this.filters.reduce((function(t,r){return null!==t&&"function"==typeof r.node?r.node(e,t):t}),t)},t.applyMatchers=function(e,t){var r=this,n=[],a=this.props,o=e,i=null;if(this.matchers.forEach((function(e){var s=e.asTag().toLowerCase(),c=r.getTagConfig(s);if(!a[e.inverseName]&&r.isTagAllowed(s)&&r.canRenderChild(t,c))for(;i=e.match(o);){var l=i,p=l.match,u=O(l,["match"]);o=o.replace(p,"#{{"+n.length+"}}#"),r.keyIndex+=1;var d=e.createElement(p,N({},a,{},u,{key:r.keyIndex}));d&&n.push(d)}})),0===n.length)return o;for(var s=[],c=0;i=o.match(/#\{\{(\d+)\}\}#/);){var l=i[1],p=i.index,u=void 0===p?0:p;c!==u&&s.push(o.slice(c,u)),s.push(n[parseInt(l,10)]),c=u+i[0].length,o=o.replace("#{{"+l+"}}#","%{{"+l+"}}%")}return c<o.length&&s.push(o.slice(c)),s},t.canRenderChild=function(e,t){return!(!e.tagName||!t.tagName)&&!e.void&&(e.children.length>0?e.children.includes(t.tagName):!(e.invalid.length>0&&e.invalid.includes(t.tagName))&&(t.parent.length>0?t.parent.includes(e.tagName):!(!e.self&&e.tagName===t.tagName)&&Boolean(e&&e.content&t.type)))},t.convertLineBreaks=function(e){var t=this.props,r=t.noHtml,n=t.disableLineBreaks;if(r||n||e.match(/<((?:\/[a-z ]+)|(?:[a-z ]+\/))>/gi))return e;var a=e.replace(/\r\n/g,"\n");return(a=a.replace(/\n{3,}/g,"\n\n\n")).replace(/\n/g,"<br/>")},t.createDocument=function(e){var t=document.implementation.createHTMLDocument("Interweave");return e.match(x)||(t.body.innerHTML=this.convertLineBreaks(this.props.escapeHtml?p()(e):e)),t},t.extractAttributes=function(e){var t=this,r=this.props.allowAttributes,n={},a=0;return 1===e.nodeType&&e.attributes?(Array.from(e.attributes).forEach((function(o){var i=o.name,s=o.value,c=i.toLowerCase(),l=C[c]||C[i];if(t.isSafe(e)&&(c.match(E)||(r||l&&2!==l)&&!c.match(/^on/)&&!s.replace(/(\s|\0|&#x0(9|A|D);)/,"").match(/(javascript|vbscript|livescript|xss):/i))){var p="style"===c?t.extractStyleAttribute(e):s;4===l?p=!0:3===l?p=parseFloat(String(p)):5!==l&&(p=String(p)),n[w[c]||c]=t.applyAttributeFilters(c,p),a+=1}})),0===a?null:n):null},t.extractStyleAttribute=function(e){var t={},r=function(e,t){return t.toUpperCase()};return Array.from(e.style).forEach((function(n){var a=e.style[n];t[n.replace(/-([a-z])/g,r)]=a})),t},t.getTagConfig=function(e){var t={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return v[e]?N({},t,{},v[e],{tagName:e}):t},t.isSafe=function(e){if("undefined"!=typeof HTMLAnchorElement&&e instanceof HTMLAnchorElement){var t=e.getAttribute("href");if(t&&"#"===t.charAt(0))return!0;var r=e.protocol.toLowerCase();return":"===r||"http:"===r||"https:"===r||"mailto:"===r}return!0},t.isTagAllowed=function(e){return!this.banned.has(e)&&!this.blocked.has(e)&&(this.props.allowElements||this.allowed.has(e))},t.parse=function(){return this.parseNode(this.doc.body,this.getTagConfig("body"))},t.parseNode=function(e,t){var r=this,n=this.props,a=n.noHtml,o=n.noHtmlExceptMatchers,i=n.allowElements,s=n.transform,l=[],p="";return Array.from(e.childNodes).forEach((function(e){if(1===e.nodeType){var n=e.nodeName.toLowerCase(),d=r.getTagConfig(n);p&&(l.push(p),p="");var f,h=r.applyNodeFilters(n,e);if(!h)return;if(s){r.keyIndex+=1;var y=r.keyIndex;f=r.parseNode(h,d);var m=s(h,f,d);if(null===m)return;if(void 0!==m)return void l.push(c.cloneElement(m,{key:y}));r.keyIndex=y-1}if(r.banned.has(n))return;if(a||o&&"br"!==n||!r.isTagAllowed(n)||!i&&!r.canRenderChild(t,d))l=l.concat(r.parseNode(h,d.tagName?d:t));else{r.keyIndex+=1;var b=r.extractAttributes(h),v={tagName:n};b&&(v.attributes=b),d.void&&(v.selfClose=d.void),l.push(c.createElement(u,N({},v,{key:r.keyIndex}),f||r.parseNode(h,d)))}}else if(3===e.nodeType){var g=a&&!o?e.textContent:r.applyMatchers(e.textContent||"",t);Array.isArray(g)?l=l.concat(g):p+=g}})),p&&l.push(p),l},e}();function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.getContent=function(){var e=this.props,t=e.content,r=(e.emptyContent,e.parsedContent),n=(e.tagName,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["content","emptyContent","parsedContent","tagName"]));if(r)return r;var a=new T(t||"",n).parse();return a.length>0?a:null},a.render=function(){var e=this.getContent()||this.props.emptyContent,t=this.props.tagName||"div";return"fragment"===t?c.createElement(c.Fragment,null,e):c.createElement(u,{tagName:t},e)},n}(c.PureComponent);function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}P(j,"propTypes",{content:s().oneOfType([s().string,s().oneOf([null])]),emptyContent:s().node,parsedContent:s().node,tagName:s().oneOfType([s().oneOf(["fragment"]),s().string])}),P(j,"defaultProps",{content:"",emptyContent:null,parsedContent:null,tagName:"div"});var S=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.parseMarkup=function(){var e=this,t=this.props,r=t.content,n=t.disableFilters,a=t.disableMatchers,o=t.emptyContent,i=t.filters,s=t.matchers,c=t.onAfterParse,l=t.onBeforeParse,p=(t.tagName,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["content","disableFilters","disableMatchers","emptyContent","filters","matchers","onAfterParse","onBeforeParse","tagName"])),u=a?[]:s,d=n?[]:i,f=l?[l]:[],h=c?[c]:[];u.forEach((function(e){e.onBeforeParse&&f.push(e.onBeforeParse.bind(e)),e.onAfterParse&&h.push(e.onAfterParse.bind(e))}));var y=f.reduce((function(t,r){return r(t,e.props)}),r||""),m=new T(y,p,u,d),b=h.reduce((function(t,r){return r(t,e.props)}),m.parse());return 0===b.length?o:b},a.render=function(){var e=this.props,t=e.emptyContent,r=e.tagName;return c.createElement(j,{emptyContent:t,tagName:r,parsedContent:this.parseMarkup()})},n}(c.PureComponent);_(S,"propTypes",{disableFilters:s().bool,disableMatchers:s().bool,filters:s().arrayOf(s().any),matchers:s().arrayOf(s().any),onAfterParse:s().oneOfType([s().any,s().oneOf([null])]),onBeforeParse:s().oneOfType([s().any,s().oneOf([null])])}),_(S,"defaultProps",{content:"",disableFilters:!1,disableMatchers:!1,emptyContent:null,filters:[],matchers:[],onAfterParse:null,onBeforeParse:null,tagName:"span"});const L=S},53894:(e,t,r)=>{function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(a){return"function"==typeof a?a(r,n,e):t(a)}}}}r.d(t,{Z:()=>o});var a=n();a.withExtraArgument=n;const o=a}}]);
//# sourceMappingURL=1844.4d175bf7a565c3652f01.entry.js.map