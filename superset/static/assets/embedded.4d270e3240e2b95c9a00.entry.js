(()=>{"use strict";var e,a,t,d,c,r,f,o,b={68160:(e,a,t)=>{var d,c=t(67294),r=t(90731),f=t(73727),o=t(5977),b=t(68492),n=t(61988),s=t(22102);!function(e){e.GET="get",e.REPLY="reply",e.EMIT="emit",e.ERROR="error"}(d||(d={}));class i{constructor(e){let{port:a,name:t="switchboard",debug:c=!1}=e;this.port=void 0,this.name=void 0,this.methods={},this.incrementor=1,this.debugMode=void 0,this.port=a,this.name=t,this.debugMode=c,a.addEventListener("message",(async e=>{this.log("message received",e);const a=e.data;if(function(e){return e.switchboardAction===d.GET}(a))this.port.postMessage(await this.getMethodResult(a));else if(function(e){return e.switchboardAction===d.EMIT}(a)){const{method:e,args:t}=a,d=this.methods[e];d&&d(t)}}))}async getMethodResult(e){let{messageId:a,method:t,args:c}=e;const r=this.methods[t];if(null==r)return{switchboardAction:d.ERROR,messageId:a,error:`[${this.name}] Method "${t}" is not defined`};try{const e=await r(c);return{switchboardAction:d.REPLY,messageId:a,result:e}}catch(e){return this.logError(e),{switchboardAction:d.ERROR,messageId:a,error:`[${this.name}] Method "${t}" threw an error`}}}defineMethod(e,a){this.methods[e]=a}get(e,a){return void 0===a&&(a=void 0),new Promise(((t,c)=>{const r=this.getNewMessageId(),f=e=>{const a=e.data;if(a.messageId===r)if(this.port.removeEventListener("message",f),function(e){return e.switchboardAction===d.REPLY}(a))t(a.result);else{const e=function(e){return e.switchboardAction===d.ERROR}(a)?a.error:"Unexpected response message";c(new Error(e))}};this.port.addEventListener("message",f),this.port.start();const o={switchboardAction:d.GET,method:e,messageId:r,args:a};this.port.postMessage(o)}))}emit(e,a){void 0===a&&(a=void 0);const t={switchboardAction:d.EMIT,method:e,args:a};this.port.postMessage(t)}start(){this.port.start()}log(){if(this.debugMode){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];console.debug(`[${this.name}]`,...a)}}logError(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];console.error(`[${this.name}]`,...a)}getNewMessageId(){return`m_${this.name}_${this.incrementor++}`}}var l=t(35260),u=t(15501),h=t(68135),m=t(37703),p=t(35755),g=t(38626),y=t(57865),v=t(29454),w=t(14114),E=t(33626);const T={info:"addInfoToast",alert:"addDangerToast",danger:"addDangerToast",warning:"addWarningToast",success:"addSuccessToast"};function k(e){let{children:a,messages:t}=e;const d=(0,w.e1)();return(0,E.J)((()=>{t.forEach((e=>{const[a,t]=e,c=d[T[a]];c&&c(t)}))})),a}var O=t(29147),Z=t(14278),j=t(11965);const x={...l.b.common},A=e=>{let{children:a}=e;return(0,j.tZ)(h.a,{theme:l.r},(0,j.tZ)(m.zt,{store:v.h},(0,j.tZ)(g.W,{backend:y.PD},(0,j.tZ)(k,{messages:x.flash_messages},(0,j.tZ)(O.DG,null,(0,j.tZ)(Z.EM,null,(0,j.tZ)(p.Fz,{ReactRouterRoute:o.AW,stringifyOptions:{encode:!1}},a)))))))};var M=t(57902),R=t(38703),S=t(72570),_=t(14890),C=t(51995),$=t(94184),I=t.n($),N=t(13423),P=t(70163),L=t(1927);const D=C.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,G=e=>j.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function H(e){let{toast:a,onCloseToast:t}=e;const d=(0,c.useRef)(),[r,f]=(0,c.useState)(!1),o=()=>{f(!0)},b=(0,c.useCallback)((()=>{d.current&&clearTimeout(d.current),f((()=>(setTimeout((()=>{t(a.id)}),150),!1)))}),[t,a.id]);(0,c.useEffect)((()=>(setTimeout(o),a.duration>0&&(d.current=setTimeout(b,a.duration)),()=>{d.current&&clearTimeout(d.current)})),[b,a.duration]);let n="toast--success",s=(0,j.tZ)(P.Z.CircleCheckSolid,{css:e=>G(e)});return a.toastType===L.p.WARNING?(s=(0,j.tZ)(P.Z.WarningSolid,{css:G}),n="toast--warning"):a.toastType===L.p.DANGER?(s=(0,j.tZ)(P.Z.ErrorSolid,{css:G}),n="toast--danger"):a.toastType===L.p.INFO&&(s=(0,j.tZ)(P.Z.InfoSolid,{css:G}),n="toast--info"),(0,j.tZ)(D,{className:I()("alert","toast",r&&"toast--visible",n),role:"alert"},s,(0,j.tZ)(N.ZP,{content:a.text}),(0,j.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:b,"aria-label":"Close"}))}const W=C.iK.div`
  max-width: 600px;
  position: fixed;
  ${e=>{let{position:a}=e;return"bottom"===a?"bottom":"top"}}: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${e=>{let{theme:a}=e;return a.zIndex.max}};
  word-break: break-word;

  .toast {
    background: ${e=>{let{theme:a}=e;return a.colors.grayscale.dark1}};
    border-radius: ${e=>{let{theme:a}=e;return a.borderRadius}};
    box-shadow: 0 2px 4px 0
      fade(
        ${e=>{let{theme:a}=e;return a.colors.grayscale.dark2}},
        ${e=>{let{theme:a}=e;return a.opacity.mediumLight}}
      );
    color: ${e=>{let{theme:a}=e;return a.colors.grayscale.light5}};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${e=>{let{theme:a}=e;return a.transitionTiming}}s,
      opacity ${e=>{let{theme:a}=e;return a.transitionTiming}}s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
    }
  }

  .toast > button {
    color: ${e=>{let{theme:a}=e;return a.colors.grayscale.light5}};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`,z=(0,m.$j)((e=>{let{messageToasts:a}=e;return{toasts:a}}),(e=>(0,_.DE)({removeToast:S.RS},e)))((function(e){let{toasts:a,removeToast:t,position:d="bottom"}=e;return(0,j.tZ)(c.Fragment,null,a.length>0&&(0,j.tZ)(W,{id:"toast-presenter",position:d},a.map((e=>(0,j.tZ)(H,{key:e.id,toast:e,onCloseToast:t})))))})),F=(0,c.lazy)((()=>Promise.all([t.e(1216),t.e(504),t.e(2087),t.e(3807),t.e(5481),t.e(7936),t.e(9772),t.e(5296)]).then(t.bind(t,37936)))),K=()=>(0,j.tZ)(c.Suspense,{fallback:(0,j.tZ)(R.Z,null)},(0,j.tZ)(A,null,(0,j.tZ)(M.Z,null,(0,j.tZ)(F,{idOrSlug:l.b.embedded.dashboard_id})),(0,j.tZ)(z,{position:"top"}))),U=()=>(0,j.tZ)(f.VK,null,(0,j.tZ)(o.AW,{path:"/dashboard/:idOrSlug/embedded/",component:K}),(0,j.tZ)(o.AW,{path:"/embedded/:uuid/",component:K})),Y=document.getElementById("app");function B(e){Y.innerHTML=e}window.parent&&window.parent!==window||B("This page is intended to be embedded in an iframe, but it looks like that is not the case.");let q=!1;function J(){q||(q=!0,v.h.dispatch((0,S.Gb)((0,n.t)("This session has encountered an interruption, and some controls may not work as intended. If you are the developer of this app, please check that the guest token is being generated correctly."),{duration:-1,noDuplicate:!0})))}window.addEventListener("message",(function(e){var a;try{!function(e){if("object"!=typeof e.data||"__embedded_comms__"!==e.data.type)throw new Error("Message type does not match type used for embedded comms")}(e)}catch(e){return}const t=null==(a=e.ports)?void 0:a[0];if("port transfer"===e.data.handshake&&t){const e=new i({port:t,name:"superset",debug:false});let a=!1;e.defineMethod("guestToken",(e=>{let{guestToken:t}=e;!function(e){var a;(0,u.Z)({guestToken:e,guestTokenHeaderName:null==(a=l.b.config)?void 0:a.GUEST_TOKEN_HEADER_NAME,unauthorizedHandler:J})}(t),a||((0,s.Z)({method:"GET",endpoint:"/api/v1/me/roles/"})().then((e=>{let{result:a}=e;l.b.user=a,v.h.dispatch({type:v.Cy,user:a}),r.render((0,j.tZ)(U,null),Y)}),(e=>{b.Z.error(e),B("Something went wrong with embedded authentication. Check the dev console for details.")})),a=!0)})),e.defineMethod("getScrollSize",(()=>({width:document.body.scrollWidth,height:document.body.scrollHeight}))),e.start()}}))},33626:(e,a,t)=>{t.d(a,{J:()=>c});var d=t(67294);const c=e=>{(0,d.useEffect)(e,[])}}},n={};function s(e){var a=n[e];if(void 0!==a)return a.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,s),t.loaded=!0,t.exports}s.m=b,s.amdD=function(){throw new Error("define cannot be used indirect")},s.amdO={},e=[],s.O=(a,t,d,c)=>{if(!t){var r=1/0;for(n=0;n<e.length;n++){for(var[t,d,c]=e[n],f=!0,o=0;o<t.length;o++)(!1&c||r>=c)&&Object.keys(s.O).every((e=>s.O[e](t[o])))?t.splice(o--,1):(f=!1,c<r&&(r=c));if(f){e.splice(n--,1);var b=d();void 0!==b&&(a=b)}}return a}c=c||0;for(var n=e.length;n>0&&e[n-1][2]>c;n--)e[n]=e[n-1];e[n]=[t,d,c]},s.H={},s.G=e=>{Object.keys(s.H).map((a=>{s.H[a](e)}))},s.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return s.d(a,{a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var c=Object.create(null);s.r(c);var r={};a=a||[null,t({}),t([]),t(t)];for(var f=2&d&&e;"object"==typeof f&&!~a.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,s.d(c,r),c},s.d=(e,a)=>{for(var t in a)s.o(a,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((a,t)=>(s.f[t](e,a),a)),[])),s.u=e=>2087===e?"2087.0825bb3829ec3f360a17.entry.js":4593===e?"4593.77a9660d4edc1b6a83f7.entry.js":5481===e?"5481.de95921cd740a6d5f960.entry.js":9772===e?"9772.d26da48455d421b83eb8.entry.js":504===e?"thumbnail.69ab0ab0e2e7987ea46a.entry.js":3807===e?"3807.e4d99a0d4ba4a055e3b4.entry.js":5296===e?"DashboardPage.e858811eb54f7323d419.entry.js":2441===e?"2441.88b6789af1d53f852f83.entry.js":4717===e?"4717.711d1953d5b6722226ef.entry.js":{57:"b15391dfcaca820affff",112:"77a627910143352bf160",137:"2261143f2635359dbece",158:"ea8c0ae803c13870f999",177:"53449f7d4fbf2093f80f",183:"e91a549a1d45bd52bee6",215:"6bf417d42e7c3eb2eb60",310:"c0d49fb18f501f4002d7",312:"b7924777d3d61f7ecc6b",326:"cf2e1a5d2fd6f13c7669",336:"28e4d6eef540ffbed5dc",347:"eb5ca79a61e22b824e7f",349:"ddbeb4e9369b016e3138",357:"5d6175985515bbfb3517",363:"876560271baaff664c29",380:"930d1c818df9fcea5d70",440:"ac518f6c7471ecc8589d",444:"00f0dd2b88290340d8e8",452:"8fe1674bb3e34a1797b5",498:"e1ab44e0d4344e28d361",597:"df86307b8436cf709ca8",600:"62fba18f45c132f76e72",616:"aaf49880011e0ff408e0",704:"24cd1e2103e0ed8e1117",741:"f8e056d22124a7fd6234",775:"da66980cd68e741e2f7f",826:"44bda9270cd6cc080bd0",876:"5cd0b6656cc64d33cdab",895:"b79b090aab4afebaff73",954:"c21b808651cb72adfc93",992:"3ae483520252c7af1474",999:"6d77c7c22585ab7c3925",1020:"4a936f6d0c8a185f363f",1075:"efa291977901e34db1d6",1095:"add6f7abfbb52e690aec",1130:"b1445f36b9214aef0784",1161:"4a23ddb509db72596003",1174:"f3f427d1c5da6cc0a9ab",1185:"3a3f51ef79b8a4e637c1",1221:"af3bccbae08e2033624e",1256:"4b9a403d3909b6fc7131",1258:"d965f006bd20b8ca4361",1261:"60feda24c9afd7f51a05",1263:"89030a1b7c3c75aab09d",1293:"93ed124eb4cbbb225c1f",1351:"601d38f4e3d503f0c55f",1382:"89f3fcdba6d89f15bfb1",1398:"a42bcb757cd866d3556f",1402:"d92c9f10b7d941b95817",1407:"88781888fd2fcfbe7e93",1493:"291a7c0552ed87dd97db",1568:"3f356d7ce14a0d520777",1573:"5bb2b6ca160aac536eac",1605:"72dfbbf44d2d5ca75f9a",1722:"34f288ecadb0c2d36d20",1862:"b739e00121e7334f538f",1877:"fd06ef8380c102d47297",1899:"66f8c098c79f8a515c46",1948:"cbf98d2c8c1d75771d83",2079:"886a855bf9a3bb1169f1",2089:"236135bf62aa9ae755bb",2105:"2ad6d4273a9ca8e04733",2112:"f4ec9c40d836590df1d3",2229:"93b1089bea4e6a90c580",2264:"d725b56ab34ef248b377",2267:"4d141c70e6ed1ac3739c",2403:"90dbb71e89086ac6be08",2439:"8c96d1c879342fd0bb2e",2549:"0de196cd19e901bfa650",2646:"d1085f1bd92674cddfea",2671:"3ae3da3cbdc49b48cda5",2698:"dc9a895b6d3ac1e09f23",2713:"7b73470e53ddfc20125f",2797:"b51b44b92a7891b3ec06",2955:"d6d83ab2deb6855f5f2a",2983:"cd3f08637f1c55ba4f86",3036:"83d9b929b63d41396e1b",3126:"d61f154a9bf0b1b168e3",3141:"725bb7f6047b7ddde2e0",3187:"be5a4f585c3160fc2b17",3208:"d1d5631479c30d42e2a4",3232:"6c8e76be1cb6876d3994",3240:"553b87374088c8609024",3265:"5d2121762fba1bc98616",3325:"1dd78ea3814813497034",3496:"a83b057c3050149a88a7",3544:"03b0b648d5f229219e40",3558:"11883d5f0e05b438e601",3567:"612731e4ae71e6aff704",3588:"5e3abc41806668dbe7da",3606:"dc58e60dd52d7768da88",3711:"841df01be436ef141483",3745:"68fedf8ed91aee9ba791",3749:"f4129e4e2e6c56342720",3831:"33cb6bd10395ec8fcdf8",3871:"7f1071defd06ede0a34a",3955:"de2a1c2fd96c7bc78fa2",3985:"b3ba9da1f64e2de46121",4139:"df8b9f79f4568d12f1cd",4194:"48fec584e62a83201c80",4237:"abb54234426320c724e3",4266:"4782e8a2f187431b570e",4273:"dea2f245771d9d1afdbb",4421:"d87e42b6484e90eace22",4458:"e964ad0ca517aecb0b81",4474:"a3c0cd02dfdc4754ef63",4494:"ed5d7c50a0c8a8f88e68",4572:"98c8a77ef317f5f8b6d9",4579:"324ea06214e3e7cf9b5b",4625:"62ba81ac91dbe5d63dd8",4662:"32d03ce9bf20736a9942",4667:"201598ac5599e934b59b",4732:"89f0eda110a2d35f2d6d",4757:"c3f28f6c21f32ea37723",4758:"95d64f8deb6de7b966ab",4790:"bfb2d4d28afd76958583",4794:"9de81e2fb162fdf0a5e2",4797:"10a530219d278535d1ec",4810:"e5c0c47a80cb842ebbc7",4817:"701f3f87e9a79fb157d7",4832:"6d13aacaaf914e02ad77",4851:"d17e22e4f70d77d6860c",4972:"92b4f1a79172452ffe53",5051:"8c70601fef9b0294b3f4",5094:"bddfd11866b5aae70ae5",5123:"a386bd6a61705414f257",5181:"7368eab6e41467979929",5201:"9446190e3687b7ac6cbf",5215:"f0af271e1423bb58613f",5224:"fb7dd3bfa08171d4491b",5226:"32f9ad1249864c11ff8b",5249:"fcaa8226e539b2bdc0fc",5264:"023f97aa4a0780a4de34",5281:"995ee14969b6510c95cf",5330:"3a2d128628e1949aacc7",5335:"88b06a818cd0117f56b1",5350:"e7ba685fefef9bacc003",5359:"851c1d40a15075f13b7b",5367:"f90d3fec726e091e75ad",5378:"f130320b771f071849f9",5507:"63ef2867979bfa80eb80",5566:"7a479eaf3f1ba1628204",5580:"5c5ef24ef88f579c2fe3",5592:"7cb79b6f9771c9738ce2",5641:"e29435fec939cc931b0d",5707:"52da1ca91b9da0197b30",5771:"82886f5cb737d608e838",5777:"138df5040f9cbf459b4e",5802:"466d74e3e6955ef7209a",5816:"532adf5353085c00f861",5832:"1eaa7d7cc58531d339c3",5838:"57ab0f5f2bd7fe255f23",5962:"60defb0bb2dea8c6c70d",5972:"718a36d3b9d2e706a7bd",5998:"60c5a3ac3477b59f20d1",6061:"e3e81b8e8c58530a1e1d",6126:"2a62b45ae362def7b095",6150:"ec7b90a8f149dc5c30ee",6167:"fc8b0059603d2b904029",6207:"d2863860c4bc2a3fcf1c",6254:"e6a454f13352d902d39c",6303:"c9a737a9e618bdd096b6",6357:"dfd0c5aabf72132ba465",6371:"d75348758180a184b2b7",6377:"323e845597342cf9b240",6420:"7c459237aca026af48c9",6447:"1b63a922a8a588456838",6486:"59091cc686ab0175d690",6507:"2d1b06f3117c0be47e8a",6579:"fa75170caa0919f53d4a",6668:"cd01c46e5d0f483b314f",6682:"7bee19163e137b73d8b7",6693:"ab0b42dabfbe544e9cf0",6758:"1d67bff16a9af3b5e8ec",6819:"32c3e9492f9ab904eb0f",6871:"c7c924cf89dcb6670405",6883:"97f4a6f3ec354edd99bd",6968:"a1e6b31387ea0a474b42",6981:"180f845810b11715ef59",7003:"75af75ffb10928239f32",7183:"bbe568136db4b4fb0bf9",7245:"e5b27bb82a3435551e9d",7249:"b74eb359a2a6af0d5db7",7405:"58725c2bee7aac317f1e",7460:"6c0df1e72ac6875430bc",7521:"da26501296b1ea815869",7584:"6c4c8c8a23fd7f5a0416",7610:"6a13b581bc3adc56038d",7654:"b982e46a2c142556997d",7716:"2b50b821714fc0d6adcf",7760:"1793d0e13f58733ffc45",7803:"aadb1fe7211f9a0455dc",7832:"d44137abb19f4b4f1a8f",7850:"c1e9bb4a62a85fde144f",7922:"b17a011c4b3d57ecf826",7936:"91d5217be0372f0d151c",7974:"21310f1eee77b4760115",7984:"55ef55ff21b2796f6fb8",7989:"43866c9480a83a7333a5",8041:"108c8baedd99ed2b2154",8274:"b29aec5c39be728287ae",8312:"2e2791ccd90025906145",8349:"48f61923b381cc228a68",8398:"4cb6c9e475fbd397aa82",8425:"3c2d4c2aa6c7573a36ed",8463:"7526fce3acb65cd9fb35",8464:"84e7073e89250b421fe7",8491:"dfcb50851ad9a8292a67",8551:"b6a0c2cb92d849df1ad1",8623:"74a4300e4d5ece5b52d3",8650:"dfe9c91e8cb8c0917ef5",8656:"762d4c99ea31d0a7ce0e",8682:"02d9fe3d2d0f280661d1",8695:"3a08135f98c245cae58d",8701:"9d41897b6aa89bbe17fa",8750:"8932d659b9462359cd4f",8883:"3ea64ae0c92692819070",8924:"d230312d67b229d5bdc7",8970:"b81603ea1b891fa6a91a",9013:"54da9e37d2c0ec5d4543",9052:"519c579e7f894d85eb7e",9101:"3ee0e54fb55141f57a68",9109:"6a7633dc38e60df1f987",9207:"89a0e9fd5f0e6b061380",9305:"d91ccc2cedea7f9cc35c",9322:"660e22f98e5b1588c83f",9325:"be2e9c8ae67952912f47",9393:"532757085407a9bec387",9396:"150f74e095be734d3a63",9471:"c291b9044bec876ba6d8",9483:"6410a6bfa0a6986e6940",9510:"5972eb50d0dec41716a4",9558:"613279b218a55e9b79cc",9622:"5c95ce47343994695c1a",9767:"39e96cce5a322bae148b",9794:"815f7ca4e1c4b2abb4d1",9811:"4425f0ee28cd06534dd5",9857:"21151c26622dbe000474",9873:"161050859a2a9916fa97",9877:"6bd4788b0e019aeb2b56"}[e]+".chunk.js",s.miniCssF=e=>(452===e?"DashboardContainer":e)+"."+{137:"2261143f2635359dbece",380:"930d1c818df9fcea5d70",452:"8fe1674bb3e34a1797b5",1261:"60feda24c9afd7f51a05",1877:"fd06ef8380c102d47297",3036:"83d9b929b63d41396e1b",4194:"48fec584e62a83201c80",4237:"abb54234426320c724e3",4494:"ed5d7c50a0c8a8f88e68",5378:"f130320b771f071849f9",5566:"7a479eaf3f1ba1628204",6871:"c7c924cf89dcb6670405",8623:"74a4300e4d5ece5b52d3",8650:"dfe9c91e8cb8c0917ef5"}[e]+".chunk.css",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},c="superset:",s.l=(e,a,t,r)=>{if(d[e])d[e].push(a);else{var f,o;if(void 0!==t)for(var b=document.getElementsByTagName("script"),n=0;n<b.length;n++){var i=b[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==c+t){f=i;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.setAttribute("data-webpack",c+t),f.src=e),d[e]=[a];var l=(a,t)=>{f.onerror=f.onload=null,clearTimeout(u);var c=d[e];if(delete d[e],f.parentNode&&f.parentNode.removeChild(f),c&&c.forEach((e=>e(t))),a)return a(t)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.p="/static/assets/",r=e=>new Promise(((a,t)=>{var d=s.miniCssF(e),c=s.p+d;if(((e,a)=>{for(var t=document.getElementsByTagName("link"),d=0;d<t.length;d++){var c=(f=t[d]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(c===e||c===a))return f}var r=document.getElementsByTagName("style");for(d=0;d<r.length;d++){var f;if((c=(f=r[d]).getAttribute("data-href"))===e||c===a)return f}})(d,c))return a();((e,a,t,d)=>{var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onerror=c.onload=r=>{if(c.onerror=c.onload=null,"load"===r.type)t();else{var f=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||a,b=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");b.code="CSS_CHUNK_LOAD_FAILED",b.type=f,b.request=o,c.parentNode.removeChild(c),d(b)}},c.href=a,document.head.appendChild(c)})(e,c,a,t)})),f={8815:0},s.f.miniCss=(e,a)=>{f[e]?a.push(f[e]):0!==f[e]&&{137:1,380:1,452:1,1261:1,1877:1,3036:1,4194:1,4237:1,4494:1,5378:1,5566:1,6871:1,8623:1,8650:1}[e]&&a.push(f[e]=r(e).then((()=>{f[e]=0}),(a=>{throw delete f[e],a})))},(()=>{var e={8815:0};s.f.j=(a,t)=>{var d=s.o(e,a)?e[a]:void 0;if(0!==d)if(d)t.push(d[2]);else if(/^(126|687)1$/.test(a))e[a]=0;else{var c=new Promise(((t,c)=>d=e[a]=[t,c]));t.push(d[2]=c);var r=s.p+s.u(a),f=new Error;s.l(r,(t=>{if(s.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,d[1](f)}}),"chunk-"+a,a)}},s.H.j=a=>{if(!(s.o(e,a)&&void 0!==e[a]||/^(126|687)1$/.test(a))){e[a]=null;var t=document.createElement("link");t.charset="utf-8",s.nc&&t.setAttribute("nonce",s.nc),t.rel="preload",t.as="script",t.href=s.p+s.u(a),document.head.appendChild(t)}},s.O.j=a=>0===e[a];var a=(a,t)=>{var d,c,[r,f,o]=t,b=0;if(r.some((a=>0!==e[a]))){for(d in f)s.o(f,d)&&(s.m[d]=f[d]);if(o)var n=o(s)}for(a&&a(t);b<r.length;b++)c=r[b],s.o(e,c)&&e[c]&&e[c][0](),e[r[b]]=0;return s.O(n)},t=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),o={5296:[1216,789,4282,7167,2639,876,2671,1407,5010,7311,8864,8274,1722,4717,452]},s.f.preload=e=>{var a=o[e];Array.isArray(a)&&a.map(s.G)},s.O(void 0,[1216,7550,789,2102,4282,7167,2639,1844,5755,9602,5010,2452,7311,8864,9454],(()=>s(35260)));var i=s.O(void 0,[1216,7550,789,2102,4282,7167,2639,1844,5755,9602,5010,2452,7311,8864,9454],(()=>s(68160)));i=s.O(i)})();
//# sourceMappingURL=embedded.4d270e3240e2b95c9a00.entry.js.map