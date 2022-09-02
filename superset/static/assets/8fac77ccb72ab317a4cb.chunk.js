"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4787],{29848:(e,t,n)=>{n.d(t,{Z:()=>c}),n(67294);var a=n(51995),l=n(58593),o=n(70163),r=n(11965);const i=a.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
      }
    }
  }
`,s=a.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`;function c(e){let{actions:t}=e;return(0,r.tZ)(i,{className:"actions"},t.map(((e,t)=>{const n=o.Z[e.icon];return e.tooltip?(0,r.tZ)(l.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,r.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,r.tZ)(n,null))):(0,r.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,r.tZ)(n,null))})))}},28999:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(67294),l=n(15926),o=n.n(l),r=n(61988),i=n(31069),s=n(73727),c=n(5977),d=n(30381),u=n.n(d),m=n(34858),p=n(40768),h=n(14114),g=n(20755),y=n(29848),b=n(18782),Z=n(17198),f=n(19259),w=n(51995),x=n(70163),v=n(74069),C=n(11965);const S=w.iK.div`
  margin: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px auto
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px auto;
`,$=w.iK.div`
  margin-bottom: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;

  .control-label {
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .required {
    margin-left: ${e=>{let{theme:t}=e;return t.gridUnit/2}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  }

  textarea,
  input[type='text'] {
    padding: ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    width: 50%;
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    width: 100%;
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }
`,k=(0,h.ZP)((e=>{let{addDangerToast:t,addSuccessToast:n,onLayerAdd:l,onHide:o,show:i,layer:s=null}=e;const[c,d]=(0,a.useState)(!0),[u,h]=(0,a.useState)(),[g,y]=(0,a.useState)(!0),b=null!==s,{state:{loading:Z,resource:f},fetchResource:w,createResource:k,updateResource:D}=(0,m.LE)("annotation_layer",(0,r.t)("annotation_layer"),t),_=()=>{h({name:"",descr:""})},A=()=>{y(!0),_(),o()},H=e=>{const{target:t}=e,n={...u,name:u?u.name:"",descr:u?u.descr:""};n[t.name]=t.value,h(n)};return(0,a.useEffect)((()=>{if(b&&(!u||!u.id||s&&s.id!==u.id||g&&i)){if(i&&s&&null!==s.id&&!Z){const e=s.id||0;w(e)}}else!b&&(!u||u.id||g&&i)&&_()}),[s,i]),(0,a.useEffect)((()=>{f&&h(f)}),[f]),(0,a.useEffect)((()=>{var e;u&&null!=(e=u.name)&&e.length?d(!1):d(!0)}),[u?u.name:"",u?u.descr:""]),g&&i&&y(!1),(0,C.tZ)(v.Z,{disablePrimaryButton:c,onHandledPrimaryAction:()=>{if(b){if(u&&u.id){const e=u.id;delete u.id,delete u.created_by,D(e,u).then((e=>{e&&(A(),n((0,r.t)("Annotation template updated")))}))}}else u&&k(u).then((e=>{e&&(l&&l(e),A(),n((0,r.t)("Annotation template created")))}))},onHide:A,primaryButtonName:b?(0,r.t)("Save"):(0,r.t)("Add"),show:i,width:"55%",title:(0,C.tZ)("h4",null,b?(0,C.tZ)(x.Z.EditAlt,{css:p.xL}):(0,C.tZ)(x.Z.PlusLarge,{css:p.xL}),b?(0,r.t)("Edit annotation layer properties"):(0,r.t)("Add annotation layer"))},(0,C.tZ)(S,null,(0,C.tZ)("h4",null,(0,r.t)("Basic information"))),(0,C.tZ)($,null,(0,C.tZ)("div",{className:"control-label"},(0,r.t)("Annotation layer name"),(0,C.tZ)("span",{className:"required"},"*")),(0,C.tZ)("input",{name:"name",onChange:H,type:"text",value:null==u?void 0:u.name})),(0,C.tZ)($,null,(0,C.tZ)("div",{className:"control-label"},(0,r.t)("description")),(0,C.tZ)("textarea",{name:"descr",value:null==u?void 0:u.descr,placeholder:(0,r.t)("Description (this can be seen in the list)"),onChange:H})))})),D="MMM DD, YYYY",_=(0,h.ZP)((function(e){let{addDangerToast:t,addSuccessToast:n,user:l}=e;const{state:{loading:d,resourceCount:h,resourceCollection:w,bulkSelectEnabled:x},hasPerm:v,fetchData:S,refreshData:$,toggleBulkSelect:_}=(0,m.Yi)("annotation_layer",(0,r.t)("Annotation layers"),t),[A,H]=(0,a.useState)(!1),[T,M]=(0,a.useState)(null),[N,U]=(0,a.useState)(null),E=v("can_write"),L=v("can_write"),B=v("can_write");function P(e){M(e),H(!0)}const Y=[{id:"name",desc:!0}],z=(0,a.useMemo)((()=>[{accessor:"name",Header:(0,r.t)("Name"),Cell:e=>{let{row:{original:{id:t,name:n}}}=e,a=!0;try{(0,c.k6)()}catch(e){a=!1}return a?(0,C.tZ)(s.rU,{to:`/annotationmodelview/${t}/annotation`},n):(0,C.tZ)("a",{href:`/annotationmodelview/${t}/annotation`},n)}},{accessor:"descr",Header:(0,r.t)("Description")},{Cell:e=>{let{row:{original:{changed_on:t}}}=e;const n=new Date(t),a=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return u()(a).format(D)},Header:(0,r.t)("Last modified"),accessor:"changed_on",size:"xl"},{Cell:e=>{let{row:{original:{created_on:t}}}=e;const n=new Date(t),a=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return u()(a).format(D)},Header:(0,r.t)("Created on"),accessor:"created_on",size:"xl"},{accessor:"created_by",disableSortBy:!0,Header:(0,r.t)("Created by"),Cell:e=>{let{row:{original:{created_by:t}}}=e;return t?`${t.first_name} ${t.last_name}`:""},size:"xl"},{Cell:e=>{let{row:{original:t}}=e;const n=[L?{label:"edit-action",tooltip:(0,r.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>P(t)}:null,B?{label:"delete-action",tooltip:(0,r.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>U(t)}:null].filter((e=>!!e));return(0,C.tZ)(y.Z,{actions:n})},Header:(0,r.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!L&&!B,size:"xl"}]),[B,E]),F=[];E&&F.push({name:(0,C.tZ)(a.Fragment,null,(0,C.tZ)("i",{className:"fa fa-plus"})," ",(0,r.t)("Annotation layer")),buttonStyle:"primary",onClick:()=>{P(null)}}),B&&F.push({name:(0,r.t)("Bulk select"),onClick:_,buttonStyle:"secondary"});const K=(0,a.useMemo)((()=>[{Header:(0,r.t)("Created by"),id:"created_by",input:"select",operator:b.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,p.tm)("annotation_layer","created_by",(0,p.v$)((e=>(0,r.t)("An error occurred while fetching dataset datasource values: %s",e))),l),paginate:!0},{Header:(0,r.t)("Search"),id:"name",input:"search",operator:b.p.contains}]),[]),q={title:(0,r.t)("No annotation layers yet"),image:"filter-results.svg",buttonAction:()=>P(null),buttonText:(0,C.tZ)(a.Fragment,null,(0,C.tZ)("i",{className:"fa fa-plus"})," ",(0,r.t)("Annotation layer"))};return(0,C.tZ)(a.Fragment,null,(0,C.tZ)(g.Z,{name:(0,r.t)("Annotation layers"),buttons:F}),(0,C.tZ)(k,{addDangerToast:t,layer:T,onLayerAdd:e=>{window.location.href=`/annotationmodelview/${e}/annotation`},onHide:()=>{$(),H(!1)},show:A}),N&&(0,C.tZ)(Z.Z,{description:(0,r.t)("This action will permanently delete the layer."),onConfirm:()=>{N&&(e=>{let{id:a,name:l}=e;i.Z.delete({endpoint:`/api/v1/annotation_layer/${a}`}).then((()=>{$(),U(null),n((0,r.t)("Deleted: %s",l))}),(0,p.v$)((e=>t((0,r.t)("There was an issue deleting %s: %s",l,e)))))})(N)},onHide:()=>U(null),open:!0,title:(0,r.t)("Delete Layer?")}),(0,C.tZ)(f.Z,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected layers?"),onConfirm:e=>{i.Z.delete({endpoint:`/api/v1/annotation_layer/?q=${o().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;$(),n(t.message)}),(0,p.v$)((e=>t((0,r.t)("There was an issue deleting the selected layers: %s",e)))))}},(e=>{const t=B?[{key:"delete",name:(0,r.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,C.tZ)(b.Z,{className:"annotation-layers-list-view",columns:z,count:h,data:w,fetchData:S,filters:K,initialSort:Y,loading:d,pageSize:25,bulkActions:t,bulkSelectEnabled:x,disableBulkSelect:_,emptyState:q})})))}))}}]);
//# sourceMappingURL=8fac77ccb72ab317a4cb.chunk.js.map