"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9502],{9433:(e,t,a)=>{a.d(t,{CronPicker:()=>u});var l=a(5872),n=a.n(l),r=(a(67294),a(85631)),o=a(61988),i=a(51995),s=a(61247),c=a(11965);const d={everyText:(0,o.t)("every"),emptyMonths:(0,o.t)("every month"),emptyMonthDays:(0,o.t)("every day of the month"),emptyMonthDaysShort:(0,o.t)("day of the month"),emptyWeekDays:(0,o.t)("every day of the week"),emptyWeekDaysShort:(0,o.t)("day of the week"),emptyHours:(0,o.t)("every hour"),emptyMinutes:(0,o.t)("every minute"),emptyMinutesForHourPeriod:(0,o.t)("every"),yearOption:(0,o.t)("year"),monthOption:(0,o.t)("month"),weekOption:(0,o.t)("week"),dayOption:(0,o.t)("day"),hourOption:(0,o.t)("hour"),minuteOption:(0,o.t)("minute"),rebootOption:(0,o.t)("reboot"),prefixPeriod:(0,o.t)("Every"),prefixMonths:(0,o.t)("in"),prefixMonthDays:(0,o.t)("on"),prefixWeekDays:(0,o.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,o.t)("and"),prefixHours:(0,o.t)("at"),prefixMinutes:(0,o.t)(":"),prefixMinutesForHourPeriod:(0,o.t)("at"),suffixMinutesForHourPeriod:(0,o.t)("minute(s)"),errorInvalidCron:(0,o.t)("Invalid cron expression"),clearButtonText:(0,o.t)("Clear"),weekDays:[(0,o.t)("Sunday"),(0,o.t)("Monday"),(0,o.t)("Tuesday"),(0,o.t)("Wednesday"),(0,o.t)("Thursday"),(0,o.t)("Friday"),(0,o.t)("Saturday")],months:[(0,o.t)("January"),(0,o.t)("February"),(0,o.t)("March"),(0,o.t)("April"),(0,o.t)("May"),(0,o.t)("June"),(0,o.t)("July"),(0,o.t)("August"),(0,o.t)("September"),(0,o.t)("October"),(0,o.t)("November"),(0,o.t)("December")],altWeekDays:[(0,o.t)("SUN"),(0,o.t)("MON"),(0,o.t)("TUE"),(0,o.t)("WED"),(0,o.t)("THU"),(0,o.t)("FRI"),(0,o.t)("SAT")],altMonths:[(0,o.t)("JAN"),(0,o.t)("FEB"),(0,o.t)("MAR"),(0,o.t)("APR"),(0,o.t)("MAY"),(0,o.t)("JUN"),(0,o.t)("JUL"),(0,o.t)("AUG"),(0,o.t)("SEP"),(0,o.t)("OCT"),(0,o.t)("NOV"),(0,o.t)("DEC")]},u=(0,i.iK)((e=>(0,c.tZ)(r.ZP,{getPopupContainer:e=>e.parentElement},(0,c.tZ)(s.Z,n()({locale:d},e)))))`
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
`},29848:(e,t,a)=>{a.d(t,{Z:()=>c}),a(67294);var l=a(51995),n=a(58593),r=a(70163),o=a(11965);const i=l.iK.span`
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
`,s=l.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`;function c(e){let{actions:t}=e;return(0,o.tZ)(i,{className:"actions"},t.map(((e,t)=>{const a=r.Z[e.icon];return e.tooltip?(0,o.tZ)(n.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,o.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,o.tZ)(a,null))):(0,o.tZ)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,o.tZ)(a,null))})))}},12441:(e,t,a)=>{a.d(t,{r:()=>i}),a(67294);var l=a(51995),n=a(40987),r=a(11965);const o=(0,l.iK)(n.Z)`
  .ant-switch-checked {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  }
`,i=e=>(0,r.tZ)(o,e)},98978:(e,t,a)=>{a.d(t,{Z:()=>x});var l=a(11965),n=a(67294),r=a(80008),o=a.n(r),i=a(61988),s=a(4715);const c="GMT Standard Time",d="400px",u={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[c,c],"060":["GMT Standard Time - London","British Summer Time"]},p=o()(),m=o()([2021,1]),h=o()([2021,7]),v=e=>m.tz(e).utcOffset().toString()+h.tz(e).utcOffset().toString(),g=e=>{var t,a;const l=v(e);return(p.tz(e).isDST()?null==(t=u[l])?void 0:t[1]:null==(a=u[l])?void 0:a[0])||e},b=o().tz.countries().map((e=>o().tz.zonesForCountry(e,!0))).flat(),Z=[];b.forEach((e=>{Z.find((t=>v(t.name)===v(e.name)))||Z.push(e)}));const f=Z.map((e=>({label:`GMT ${o().tz(p,e.name).format("Z")} (${g(e.name)})`,value:e.name,offsets:v(e.name),timezoneName:e.name}))),y=(e,t)=>o().tz(p,e.timezoneName).utcOffset()-o().tz(p,t.timezoneName).utcOffset();function x(e){let{onTimezoneChange:t,timezone:a,minWidth:r=d}=e;const c=(0,n.useMemo)((()=>(e=>{var t;return(null==(t=f.find((t=>t.offsets===v(e))))?void 0:t.value)||"Africa/Abidjan"})(a||o().tz.guess())),[a]);return(0,n.useEffect)((()=>{a!==c&&t(c)}),[c,t,a]),(0,l.tZ)(s.Ph,{ariaLabel:(0,i.t)("Timezone selector"),css:(0,l.iv)({minWidth:r},"",""),onChange:e=>t(e),value:c,options:f,sortComparator:y})}f.sort(y)},63082:(e,t,a)=>{a.r(t),a.d(t,{default:()=>fe});var l=a(67294),n=a(5977),r=a(61988),o=a(22102),i=a(51995),s=a(31069),c=a(30381),d=a.n(c),u=a(29848),p=a(34581),m=a(58593),h=a(18782),v=a(20755),g=a(12441),b=a(27600),Z=a(14114),f=a(46714),y=a(11965),x=a(70163),_=a(28745);const S=e=>y.iv`
  color: ${e.colors.grayscale.light1};
  margin-right: ${2*e.gridUnit}px;
`;function k(e){let{type:t}=e;const a={icon:null,label:""};switch(t){case _.u.Email:a.icon=(0,y.tZ)(x.Z.Email,{css:S}),a.label=_.u.Email;break;case _.u.Slack:a.icon=(0,y.tZ)(x.Z.Slack,{css:S}),a.label=_.u.Slack;break;default:a.icon=null,a.label=""}return a.icon?(0,y.tZ)(m.u,{title:a.label,placement:"bottom"},a.icon):null}var N=a(19259),C=a(17198);d().updateLocale("en",{calendar:{lastDay:"[Yesterday at] LTS",sameDay:"[Today at] LTS",nextDay:"[Tomorrow at] LTS",lastWeek:"[last] dddd [at] LTS",nextWeek:"dddd [at] LTS",sameElse:"L"}});const w=i.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,T=(0,i.iK)(x.Z.Refresh)`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  width: auto;
  height: ${e=>{let{theme:t}=e;return 5*t.gridUnit}}px;
  position: relative;
  top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  cursor: pointer;
`,$=e=>{let{updatedAt:t,update:a}=e;const[n,o]=(0,l.useState)(d()(t));return(0,l.useEffect)((()=>{o((()=>d()(t)));const e=setInterval((()=>{o((()=>d()(t)))}),6e4);return()=>clearInterval(e)}),[t]),(0,y.tZ)(w,null,(0,r.t)("Last Updated %s",n.isValid()?n.calendar():"--"),a&&(0,y.tZ)(T,{onClick:a}))};var E=a(34858),A=a(40768),z=a(78580),D=a.n(z),M=a(15926),R=a.n(M),j=a(74069),L=a(98978),U=a(87183),q=a(81315),P=a(91877),O=a(93185),H=a(4715),W=a(42878),G=a(1483),F=a(9882),I=a(9875),K=a(9433);const B=e=>{let{value:t,onChange:a}=e;const n=(0,i.Fg)(),o=(0,l.useRef)(null),[s,c]=(0,l.useState)("picker"),d=(0,l.useCallback)((e=>c(e.target.value)),[]),u=(0,l.useCallback)((e=>{var t;a(e),null==(t=o.current)||t.setValue(e)}),[o,a]),p=(0,l.useCallback)((e=>{a(e.target.value)}),[a]),m=(0,l.useCallback)((()=>{var e;a((null==(e=o.current)?void 0:e.input.value)||"")}),[a]),[h,v]=(0,l.useState)();return(0,y.tZ)(l.Fragment,null,(0,y.tZ)(U.Y.Group,{onChange:d,value:s},(0,y.tZ)("div",{className:"inline-container add-margin"},(0,y.tZ)(U.Y,{value:"picker"}),(0,y.tZ)(K.CronPicker,{clearButton:!1,value:t,setValue:u,disabled:"picker"!==s,displayError:"picker"===s,onError:v})),(0,y.tZ)("div",{className:"inline-container add-margin"},(0,y.tZ)(U.Y,{value:"input"}),(0,y.tZ)("span",{className:"input-label"},"CRON Schedule"),(0,y.tZ)(ce,{className:"styled-input"},(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(I.II,{type:"text",name:"crontab",ref:o,style:h?{borderColor:n.colors.error.base}:{},placeholder:(0,r.t)("CRON expression"),disabled:"input"!==s,onBlur:p,onPressEnter:m}))))))},V=i.iK.div`
  margin-bottom: 10px;

  .input-container {
    textarea {
      height: auto;
    }
  }

  .inline-container {
    margin-bottom: 10px;

    .input-container {
      margin-left: 10px;
    }

    > div {
      margin: 0;
    }

    .delete-button {
      margin-left: 10px;
      padding-top: 3px;
    }
  }
`,Y=e=>{let{setting:t=null,index:a,onUpdate:n,onRemove:o}=e;const{method:s,recipients:c,options:d}=t||{},[u,p]=(0,l.useState)(c||""),m=(0,i.Fg)();return t?(c&&u!==c&&p(c),(0,y.tZ)(V,null,(0,y.tZ)("div",{className:"inline-container"},(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(H.Ph,{ariaLabel:(0,r.t)("Delivery method"),onChange:e=>{if(p(""),n){const l={...t,method:e,recipients:""};n(a,l)}},placeholder:(0,r.t)("Select Delivery Method"),options:(d||[]).map((e=>({label:e,value:e}))),value:s}))),void 0!==s&&o?(0,y.tZ)("span",{role:"button",tabIndex:0,className:"delete-button",onClick:()=>o(a)},(0,y.tZ)(x.Z.Trash,{iconColor:m.colors.grayscale.base})):null),void 0!==s?(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},(0,r.t)(s)),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("textarea",{name:"recipients",value:u,onChange:e=>{const{target:l}=e;if(p(l.value),n){const e={...t,recipients:l.value};n(a,e)}}})),(0,y.tZ)("div",{className:"helper"},(0,r.t)('Recipients are separated by "," or ";"'))):null)):null},J=["pivot_table","pivot_table_v2","table","paired_ttest"],Q=["Email"],X="PNG",ee=[{label:(0,r.t)("< (Smaller than)"),value:"<"},{label:(0,r.t)("> (Larger than)"),value:">"},{label:(0,r.t)("<= (Smaller or equal)"),value:"<="},{label:(0,r.t)(">= (Larger or equal)"),value:">="},{label:(0,r.t)("== (Is equal)"),value:"=="},{label:(0,r.t)("!= (Is not equal)"),value:"!="},{label:(0,r.t)("Not null"),value:"not null"}],te=[{label:(0,r.t)("None"),value:0},{label:(0,r.t)("30 days"),value:30},{label:(0,r.t)("60 days"),value:60},{label:(0,r.t)("90 days"),value:90}],ae="0 * * * *",le={active:!0,creation_method:"alerts_reports",crontab:ae,log_retention:90,working_timeout:3600,name:"",owners:[],recipients:[],sql:"",validator_config_json:{},validator_type:"",force_screenshot:!1,grace_period:void 0},ne=(0,i.iK)(j.Z)`
  max-width: 1200px;
  width: 100%;

  .ant-modal-body {
    overflow: initial;
  }
`,re=e=>y.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,oe=i.iK.div`
  display: flex;
  flex-direction: column;

  .header-section {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    width: 100%;
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  }

  .column-section {
    display: flex;
    flex: 1 1 auto;

    .column {
      flex: 1 1 auto;
      min-width: calc(33.33% - ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px);
      padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;

      .async-select {
        margin: 10px 0 20px;
      }

      &.condition {
        border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
      }

      &.message {
        border-left: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
      }
    }
  }

  .inline-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    &.wrap {
      flex-wrap: wrap;
    }

    > div {
      flex: 1 1 auto;
    }

    &.add-margin {
      margin-bottom: 5px;
    }

    .styled-input {
      margin: 0 0 0 10px;

      input {
        flex: 0 0 auto;
      }
    }
  }
`,ie=i.iK.div`
  display: flex;
  align-items: center;
  margin: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px auto
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px auto;

  h4 {
    margin: 0;
  }

  .required {
    margin-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  }
`,se=i.iK.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .switch-label {
    margin-left: 10px;
  }
`,ce=i.iK.div`
  flex: 1;
  margin: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  margin-top: 0;

  .helper {
    display: block;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    padding: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
    text-align: left;
  }

  .required {
    margin-left: ${e=>{let{theme:t}=e;return t.gridUnit/2}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  }

  .input-container {
    display: flex;
    align-items: center;

    > div {
      width: 100%;
    }

    label {
      display: flex;
      margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }

    i {
      margin: 0 ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  input[disabled] {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  }

  textarea {
    height: 300px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${e=>{let{theme:t}=e;return t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    border-style: none;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;

    &[name='description'] {
      flex: 1 1 auto;
    }
  }

  .input-label {
    margin-left: 10px;
  }
`,de=(0,i.iK)(U.Y)`
  display: block;
  line-height: ${e=>{let{theme:t}=e;return 7*t.gridUnit}}px;
`,ue=(0,i.iK)(U.Y.Group)`
  margin-left: ${e=>{let{theme:t}=e;return 5.5*t.gridUnit}}px;
`,pe=(0,i.iK)(H.r4)`
  margin-left: ${e=>{let{theme:t}=e;return 5.5*t.gridUnit}}px;
`,me=i.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
  cursor: pointer;

  i {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  &.disabled {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
    cursor: default;
  }
`,he=e=>{let{status:t="active",onClick:a}=e;return"hidden"===t?null:(0,y.tZ)(me,{className:t,onClick:()=>{"disabled"!==t&&a()}},(0,y.tZ)("i",{className:"fa fa-plus"})," ","active"===t?(0,r.t)("Add notification method"):(0,r.t)("Add delivery method"))},ve=(0,Z.ZP)((e=>{var t,a,n,o,i,c,d;let{addDangerToast:u,onAdd:p,onHide:m,show:h,alert:v=null,isReport:b=!1,addSuccessToast:Z}=e;const f=(0,G.c)(),_=(null==f?void 0:f.ALERT_REPORTS_NOTIFICATION_METHODS)||Q,[S,k]=(0,l.useState)(!0),[N,C]=(0,l.useState)(),[w,T]=(0,l.useState)(!0),[$,A]=(0,l.useState)("dashboard"),[z,M]=(0,l.useState)(X),[j,I]=(0,l.useState)(!1),[K,V]=(0,l.useState)(!1),[me,ve]=(0,l.useState)([]),[ge,be]=(0,l.useState)([]),[Ze,fe]=(0,l.useState)([]),[ye,xe]=(0,l.useState)(""),_e=null!==v,Se="chart"===$&&((0,P.cr)(O.T.ALERTS_ATTACH_REPORTS)||b),[ke,Ne]=(0,l.useState)("active"),[Ce,we]=(0,l.useState)([]),Te=(e,t)=>{const a=Ce.slice();a[e]=t,we(a),void 0!==t.method&&"hidden"!==ke&&Ne("active")},$e=e=>{const t=Ce.slice();t.splice(e,1),we(t),Ne("active")},{state:{loading:Ee,resource:Ae,error:ze},fetchResource:De,createResource:Me,updateResource:Re,clearError:je}=(0,E.LE)("report",(0,r.t)("report"),u),Le=()=>{je(),T(!0),m(),we([]),C({...le}),Ne("active")},Ue=(0,l.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const l=R().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/created_by?q=${l}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),qe=(0,l.useCallback)((e=>{const t=e||(null==N?void 0:N.database);if(!t||t.label)return null;let a;return me.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[null==N?void 0:N.database,me]),Pe=(e,t)=>{C((a=>({...a,[e]:t})))},Oe=(0,l.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const l=R().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/database?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return ve(t),{data:t,totalCount:e.json.count}}))}),[]),He=N&&N.database&&!N.database.label;(0,l.useEffect)((()=>{He&&Pe("database",qe())}),[He,qe]);const We=(0,l.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const l=R().encode_uri({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/dashboard?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return be(t),{data:t,totalCount:e.json.count}}))}),[]),Ge=e=>{const t=e||(null==N?void 0:N.dashboard);if(!t||t.label)return null;let a;return ge.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a},Fe=(0,l.useCallback)((e=>{const t=e||(null==N?void 0:N.chart);if(!t||t.label)return null;let a;return Ze.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[Ze,null==N?void 0:N.chart]),Ie=N&&N.chart&&!N.chart.label;(0,l.useEffect)((()=>{Ie&&Pe("chart",Fe())}),[Fe,Ie]);const Ke=(0,l.useMemo)((()=>function(e,t,a){void 0===e&&(e="");const l=R().encode_uri({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/chart?q=${l}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return fe(t),{data:t,totalCount:e.json.count}}))}),[]),Be=e=>{const{target:t}=e;Pe(t.name,t.value)},Ve=e=>{const{target:t}=e,a=+t.value;Pe(t.name,0===a?null:a?Math.max(a,1):a)};(0,l.useEffect)((()=>{if(_e&&(null==N||!N.id||(null==v?void 0:v.id)!==N.id||w&&h)){if(v&&null!==v.id&&!Ee&&!ze){const e=v.id||0;De(e)}}else!_e&&(!N||N.id||w&&h)&&(C({...le}),we([]),Ne("active"))}),[v]),(0,l.useEffect)((()=>{if(Ae){const e=(Ae.recipients||[]).map((e=>{const t="string"==typeof e.recipient_config_json?JSON.parse(e.recipient_config_json):{};return{method:e.type,recipients:t.target||e.recipient_config_json,options:_}}));we(e),Ne(e.length===_.length?"hidden":"active"),A(Ae.chart?"chart":"dashboard"),M(Ae.chart&&Ae.report_format||X);const t="string"==typeof Ae.validator_config_json?JSON.parse(Ae.validator_config_json):Ae.validator_config_json;V("not null"===Ae.validator_type),Ae.chart&&xe(Ae.chart.viz_type),I(Ae.force_screenshot),C({...Ae,chart:Ae.chart?Fe(Ae.chart)||{value:Ae.chart.id,label:Ae.chart.slice_name}:void 0,dashboard:Ae.dashboard?Ge(Ae.dashboard)||{value:Ae.dashboard.id,label:Ae.dashboard.dashboard_title}:void 0,database:Ae.database?qe(Ae.database)||{value:Ae.database.id,label:Ae.database.database_name}:void 0,owners:((null==v?void 0:v.owners)||[]).map((e=>({value:e.value||e.id,label:e.label||`${e.first_name} ${e.last_name}`}))),validator_config_json:"not null"===Ae.validator_type?{op:"not null"}:t})}}),[Ae]);const Ye=N||{};return(0,l.useEffect)((()=>{var e,t,a,l,n,r;N&&null!=(e=N.name)&&e.length&&null!=(t=N.owners)&&t.length&&null!=(a=N.crontab)&&a.length&&void 0!==N.working_timeout&&("dashboard"===$&&N.dashboard||"chart"===$&&N.chart)&&(()=>{if(!Ce.length)return!1;let e=!1;return Ce.forEach((t=>{var a;t.method&&null!=(a=t.recipients)&&a.length&&(e=!0)})),e})()&&(b||N.database&&null!=(l=N.sql)&&l.length&&(K||null!=(n=N.validator_config_json)&&n.op)&&(K||void 0!==(null==(r=N.validator_config_json)?void 0:r.threshold)))?k(!1):k(!0)}),[Ye.name,Ye.owners,Ye.database,Ye.sql,Ye.validator_config_json,Ye.crontab,Ye.working_timeout,Ye.dashboard,Ye.chart,$,Ce,K]),w&&h&&T(!1),(0,y.tZ)(ne,{className:"no-content-padding",responsive:!0,disablePrimaryButton:S,onHandledPrimaryAction:()=>{var e,t,a;const l=[];Ce.forEach((e=>{e.method&&e.recipients.length&&l.push({recipient_config_json:{target:e.recipients},type:e.method})}));const n="chart"===$&&!b,o={...N,type:b?"Report":"Alert",force_screenshot:n||j,validator_type:K?"not null":"operator",validator_config_json:K?{}:null==N?void 0:N.validator_config_json,chart:"chart"===$?null==N||null==(e=N.chart)?void 0:e.value:null,dashboard:"dashboard"===$?null==N||null==(t=N.dashboard)?void 0:t.value:null,database:null==N||null==(a=N.database)?void 0:a.value,owners:((null==N?void 0:N.owners)||[]).map((e=>e.value||e.id)),recipients:l,report_format:"dashboard"===$?X:z||X};if(o.recipients&&!o.recipients.length&&delete o.recipients,o.context_markdown="string",_e){if(N&&N.id){const e=N.id;delete o.id,delete o.created_by,delete o.last_eval_dttm,delete o.last_state,delete o.last_value,delete o.last_value_row_json,Re(e,o).then((e=>{e&&(Z((0,r.t)("%s updated",o.type)),p&&p(),Le())}))}}else N&&Me(o).then((e=>{e&&(Z((0,r.t)("%s updated",o.type)),p&&p(e),Le())}))},onHide:Le,primaryButtonName:_e?(0,r.t)("Save"):(0,r.t)("Add"),show:h,width:"100%",maxWidth:"1450px",title:(0,y.tZ)("h4",null,_e?(0,y.tZ)(x.Z.EditAlt,{css:re}):(0,y.tZ)(x.Z.PlusLarge,{css:re}),_e&&b?(0,r.t)("Edit Report"):_e?(0,r.t)("Edit Alert"):b?(0,r.t)("Add Report"):(0,r.t)("Add Alert"))},(0,y.tZ)(oe,null,(0,y.tZ)("div",{className:"header-section"},(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},b?(0,r.t)("Report name"):(0,r.t)("Alert name"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("input",{type:"text",name:"name",value:N?N.name:"",placeholder:b?(0,r.t)("Report name"):(0,r.t)("Alert name"),onChange:Be}))),(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},(0,r.t)("Owners"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(H.qb,{ariaLabel:(0,r.t)("Owners"),allowClear:!0,name:"owners",mode:"multiple",value:(null==N?void 0:N.owners)||[],options:Ue,onChange:e=>{Pe("owners",e||[])}}))),(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},(0,r.t)("Description")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("input",{type:"text",name:"description",value:N&&N.description||"",placeholder:(0,r.t)("Description"),onChange:Be}))),(0,y.tZ)(se,null,(0,y.tZ)(g.r,{onChange:e=>{Pe("active",e)},checked:!N||N.active}),(0,y.tZ)("div",{className:"switch-label"},"Active"))),(0,y.tZ)("div",{className:"column-section"},!b&&(0,y.tZ)("div",{className:"column condition"},(0,y.tZ)(ie,null,(0,y.tZ)("h4",null,(0,r.t)("Alert condition"))),(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},(0,r.t)("Database"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(H.qb,{ariaLabel:(0,r.t)("Database"),name:"source",value:null!=N&&null!=(t=N.database)&&t.label&&null!=N&&null!=(a=N.database)&&a.value?{value:N.database.value,label:N.database.label}:void 0,options:Oe,onChange:e=>{Pe("database",e||[])}}))),(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},(0,r.t)("SQL Query"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)(W.Z,{name:"sql",language:"sql",offerEditInModal:!1,minLines:15,maxLines:15,onChange:e=>{Pe("sql",e||"")},readOnly:!1,initialValue:null==Ae?void 0:Ae.sql,key:null==N?void 0:N.id})),(0,y.tZ)("div",{className:"inline-container wrap"},(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},(0,r.t)("Trigger Alert If..."),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(H.Ph,{ariaLabel:(0,r.t)("Condition"),onChange:e=>{var t;V("not null"===e);const a={op:e,threshold:N?null==(t=N.validator_config_json)?void 0:t.threshold:void 0};Pe("validator_config_json",a)},placeholder:"Condition",value:(null==N||null==(n=N.validator_config_json)?void 0:n.op)||void 0,options:ee}))),(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},(0,r.t)("Value")," ",(0,y.tZ)(F.V,{tooltip:(0,r.t)("Threshold value should be double precision number")}),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("input",{type:"number",name:"threshold",disabled:K,value:N&&N.validator_config_json&&void 0!==N.validator_config_json.threshold?N.validator_config_json.threshold:"",placeholder:(0,r.t)("Value"),onChange:e=>{var t;const{target:a}=e,l={op:N?null==(t=N.validator_config_json)?void 0:t.op:void 0,threshold:a.value};Pe("validator_config_json",l)}}))))),(0,y.tZ)("div",{className:"column schedule"},(0,y.tZ)(ie,null,(0,y.tZ)("h4",null,b?(0,r.t)("Report schedule"):(0,r.t)("Alert condition schedule")),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)(B,{value:(null==N?void 0:N.crontab)||ae,onChange:e=>Pe("crontab",e)}),(0,y.tZ)("div",{className:"control-label"},(0,r.t)("Timezone")),(0,y.tZ)("div",{className:"input-container",css:e=>(e=>y.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e)},(0,y.tZ)(L.Z,{onTimezoneChange:e=>{Pe("timezone",e)},timezone:null==N?void 0:N.timezone,minWidth:"100%"})),(0,y.tZ)(ie,null,(0,y.tZ)("h4",null,(0,r.t)("Schedule settings"))),(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},(0,r.t)("Log retention"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)(H.Ph,{ariaLabel:(0,r.t)("Log retention"),placeholder:(0,r.t)("Log retention"),onChange:e=>{Pe("log_retention",e)},value:"number"==typeof(null==N?void 0:N.log_retention)?null==N?void 0:N.log_retention:90,options:te,sortComparator:(0,q.mj)("value")}))),(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},(0,r.t)("Working timeout"),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("input",{type:"number",min:"1",name:"working_timeout",value:(null==N?void 0:N.working_timeout)||"",placeholder:(0,r.t)("Time in seconds"),onChange:Ve}),(0,y.tZ)("span",{className:"input-label"},"seconds"))),!b&&(0,y.tZ)(ce,null,(0,y.tZ)("div",{className:"control-label"},(0,r.t)("Grace period")),(0,y.tZ)("div",{className:"input-container"},(0,y.tZ)("input",{type:"number",min:"1",name:"grace_period",value:(null==N?void 0:N.grace_period)||"",placeholder:(0,r.t)("Time in seconds"),onChange:Ve}),(0,y.tZ)("span",{className:"input-label"},"seconds")))),(0,y.tZ)("div",{className:"column message"},(0,y.tZ)(ie,null,(0,y.tZ)("h4",null,(0,r.t)("Message content")),(0,y.tZ)("span",{className:"required"},"*")),(0,y.tZ)(U.Y.Group,{onChange:e=>{const{target:t}=e;I(!1),setTimeout((()=>A(t.value)),200)},value:$},(0,y.tZ)(de,{value:"dashboard"},(0,r.t)("Dashboard")),(0,y.tZ)(de,{value:"chart"},(0,r.t)("Chart"))),(0,y.tZ)(H.qb,{ariaLabel:(0,r.t)("Chart"),css:(0,y.iv)({display:"chart"===$?"inline":"none"},"",""),name:"chart",value:null!=N&&null!=(o=N.chart)&&o.label&&null!=N&&null!=(i=N.chart)&&i.value?{value:N.chart.value,label:N.chart.label}:void 0,options:Ke,onChange:e=>{(e=>{s.Z.get({endpoint:`/api/v1/chart/${e.value}`}).then((e=>xe(e.json.result.viz_type)))})(e),Pe("chart",e||void 0),Pe("dashboard",null)}}),(0,y.tZ)(H.qb,{ariaLabel:(0,r.t)("Dashboard"),css:(0,y.iv)({display:"dashboard"===$?"inline":"none"},"",""),name:"dashboard",value:null!=N&&null!=(c=N.dashboard)&&c.label&&null!=N&&null!=(d=N.dashboard)&&d.value?{value:N.dashboard.value,label:N.dashboard.label}:void 0,options:We,onChange:e=>{Pe("dashboard",e||void 0),Pe("chart",null)}}),Se&&(0,y.tZ)(l.Fragment,null,(0,y.tZ)("div",{className:"inline-container"},(0,y.tZ)(ue,{onChange:e=>{const{target:t}=e;M(t.value)},value:z},(0,y.tZ)(de,{value:"PNG"},(0,r.t)("Send as PNG")),(0,y.tZ)(de,{value:"CSV"},(0,r.t)("Send as CSV")),D()(J).call(J,ye)&&(0,y.tZ)(de,{value:"TEXT"},(0,r.t)("Send as text"))))),(b||"dashboard"===$)&&(0,y.tZ)("div",{className:"inline-container"},(0,y.tZ)(pe,{className:"checkbox",checked:j,onChange:e=>{I(e.target.checked)}},"Ignore cache when generating screenshot")),(0,y.tZ)(ie,null,(0,y.tZ)("h4",null,(0,r.t)("Notification method")),(0,y.tZ)("span",{className:"required"},"*")),Ce.map(((e,t)=>(0,y.tZ)(Y,{setting:e,index:t,key:`NotificationMethod-${t}`,onUpdate:Te,onRemove:$e}))),(0,y.tZ)(he,{status:ke,onClick:()=>{const e=Ce.slice();e.push({recipients:"",options:_}),we(e),Ne(e.length===_.length?"hidden":"disabled")}})))))})),ge={[_.Z.Success]:(0,r.t)("Success"),[_.Z.Working]:(0,r.t)("Working"),[_.Z.Error]:(0,r.t)("Error"),[_.Z.Noop]:(0,r.t)("Not triggered"),[_.Z.Grace]:(0,r.t)("On Grace")},be=(0,o.Z)({requestType:"rison",method:"DELETE",endpoint:"/api/v1/report/"}),Ze=i.iK.div`
  width: 100%;
  padding: 0 ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px
    ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
`,fe=(0,Z.ZP)((function(e){let{addDangerToast:t,isReportEnabled:a=!1,user:o,addSuccessToast:i}=e;const c=a?(0,r.t)("report"):(0,r.t)("alert"),Z=a?(0,r.t)("reports"):(0,r.t)("alerts"),x=a?"Reports":"Alerts",S=(0,l.useMemo)((()=>[{id:"type",operator:h.p.equals,value:a?"Report":"Alert"}]),[a]),{state:{loading:w,resourceCount:T,resourceCollection:z,bulkSelectEnabled:D,lastFetched:M},hasPerm:R,fetchData:j,setResourceCollection:L,refreshData:U,toggleBulkSelect:q}=(0,E.Yi)("report",(0,r.t)("reports"),t,!0,void 0,S),{updateResource:P}=(0,E.LE)("report",(0,r.t)("reports"),t),[O,H]=(0,l.useState)(!1),[W,G]=(0,l.useState)(null),[F,I]=(0,l.useState)(null);function K(e){G(e),H(!0)}const B=R("can_write"),V=R("can_write"),Y=R("can_write");(0,l.useEffect)((()=>{D&&V&&q()}),[a]);const J=[{id:"name",desc:!0}],Q=(0,l.useCallback)(((e,t)=>{if(e&&e.id){const a=e.id,l=[...z];L(l.map((a=>(null==a?void 0:a.id)===e.id?{...a,active:t}:a))),P(a,{active:t},!1,!1).then().catch((()=>L(l)))}}),[z,L,P]),X=(0,l.useMemo)((()=>[{Cell:e=>{let{row:{original:{last_state:t}}}=e;return(0,y.tZ)(f.Z,{state:t,isReportEnabled:a})},accessor:"last_state",size:"xs",disableSortBy:!0},{Cell:e=>{let{row:{original:{last_eval_dttm:t}}}=e;return t?d().utc(t).local().format(b.v2):""},accessor:"last_eval_dttm",Header:(0,r.t)("Last run"),size:"lg"},{accessor:"name",Header:(0,r.t)("Name"),size:"xl"},{Header:(0,r.t)("Schedule"),accessor:"crontab_humanized",size:"xl",Cell:e=>{let{row:{original:{crontab_humanized:t="",timezone:a}}}=e;return(0,y.tZ)(m.u,{title:`${t} (${a})`,placement:"topLeft"},(0,y.tZ)("span",null,`${t} (${a})`))}},{Cell:e=>{let{row:{original:{recipients:t}}}=e;return t.map((e=>(0,y.tZ)(k,{key:e.id,type:e.type})))},accessor:"recipients",Header:(0,r.t)("Notification method"),disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{created_by:t}}}=e;return t?`${t.first_name} ${t.last_name}`:""},Header:(0,r.t)("Created by"),id:"created_by",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{owners:t=[]}}}=e;return(0,y.tZ)(p.Z,{users:t})},Header:(0,r.t)("Owners"),id:"owners",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return(0,y.tZ)("span",{className:"no-wrap"},t)},Header:(0,r.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:t}}=e;return(0,y.tZ)(g.r,{checked:t.active,onClick:e=>Q(t,e),size:"small"})},Header:(0,r.t)("Active"),accessor:"active",id:"active",size:"xl"},{Cell:e=>{let{row:{original:t}}=e;const a=(0,n.k6)(),l=[B?{label:"execution-log-action",tooltip:(0,r.t)("Execution log"),placement:"bottom",icon:"Note",onClick:()=>a.push(`/${t.type.toLowerCase()}/${t.id}/log`)}:null,B?{label:"edit-action",tooltip:(0,r.t)("Edit"),placement:"bottom",icon:"Edit",onClick:()=>K(t)}:null,V?{label:"delete-action",tooltip:(0,r.t)("Delete"),placement:"bottom",icon:"Trash",onClick:()=>I(t)}:null].filter((e=>null!==e));return(0,y.tZ)(u.Z,{actions:l})},Header:(0,r.t)("Actions"),id:"actions",hidden:!B&&!V,disableSortBy:!0,size:"xl"}]),[V,B,a,Q]),ee=[];Y&&ee.push({name:(0,y.tZ)(l.Fragment,null,(0,y.tZ)("i",{className:"fa fa-plus"})," ",c),buttonStyle:"primary",onClick:()=>{K(null)}}),V&&ee.push({name:(0,r.t)("Bulk select"),onClick:q,buttonStyle:"secondary","data-test":"bulk-select-toggle"});const te={title:(0,r.t)("No %s yet",Z),image:"filter-results.svg",buttonAction:()=>K(null),buttonText:Y?(0,y.tZ)(l.Fragment,null,(0,y.tZ)("i",{className:"fa fa-plus"})," ",c," "):null},ae=(0,l.useMemo)((()=>[{Header:(0,r.t)("Owner"),id:"owners",input:"select",operator:h.p.relationManyMany,unfilteredLabel:"All",fetchSelects:(0,A.tm)("report","owners",(0,A.v$)((e=>(0,r.t)("An error occurred while fetching owners values: %s",e))),o),paginate:!0},{Header:(0,r.t)("Created by"),id:"created_by",input:"select",operator:h.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,A.tm)("report","created_by",(0,A.v$)((e=>(0,r.t)("An error occurred while fetching created by values: %s",e))),o),paginate:!0},{Header:(0,r.t)("Status"),id:"last_state",input:"select",operator:h.p.equals,unfilteredLabel:"Any",selects:[{label:ge[_.Z.Success],value:_.Z.Success},{label:ge[_.Z.Working],value:_.Z.Working},{label:ge[_.Z.Error],value:_.Z.Error},{label:ge[_.Z.Noop],value:_.Z.Noop},{label:ge[_.Z.Grace],value:_.Z.Grace}]},{Header:(0,r.t)("Search"),id:"name",input:"search",operator:h.p.contains}]),[]);return(0,y.tZ)(l.Fragment,null,(0,y.tZ)(v.Z,{activeChild:x,name:(0,r.t)("Alerts & reports"),tabs:[{name:"Alerts",label:(0,r.t)("Alerts"),url:"/alert/list/",usesRouter:!0,"data-test":"alert-list"},{name:"Reports",label:(0,r.t)("Reports"),url:"/report/list/",usesRouter:!0,"data-test":"report-list"}],buttons:ee},(0,y.tZ)(Ze,null,(0,y.tZ)($,{updatedAt:M,update:()=>U()}))),(0,y.tZ)(ve,{alert:W,addDangerToast:t,layer:W,onHide:()=>{H(!1),G(null),U()},show:O,isReport:a,key:(null==W?void 0:W.id)||`${(new Date).getTime()}`}),F&&(0,y.tZ)(C.Z,{description:(0,r.t)("This action will permanently delete %s.",F.name),onConfirm:()=>{F&&(e=>{let{id:a,name:l}=e;s.Z.delete({endpoint:`/api/v1/report/${a}`}).then((()=>{U(),I(null),i((0,r.t)("Deleted: %s",l))}),(0,A.v$)((e=>t((0,r.t)("There was an issue deleting %s: %s",l,e)))))})(F)},onHide:()=>I(null),open:!0,title:(0,r.t)("Delete %s?",c)}),(0,y.tZ)(N.Z,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected %s?",Z),onConfirm:async e=>{try{const{message:t}=await be(e.map((e=>{let{id:t}=e;return t})));U(),i(t)}catch(e){(0,A.v$)((e=>t((0,r.t)("There was an issue deleting the selected %s: %s",Z,e))))(e)}}},(e=>{const t=V?[{key:"delete",name:(0,r.t)("Delete"),onSelect:e,type:"danger"}]:[];return(0,y.tZ)(h.Z,{className:"alerts-list-view",columns:X,count:T,data:z,emptyState:te,fetchData:j,filters:ae,initialSort:J,loading:w,bulkActions:t,bulkSelectEnabled:D,disableBulkSelect:q,pageSize:25})})))}))},46714:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(51995),n=a(61988),r=(a(67294),a(58593)),o=a(70163),i=a(28745),s=a(11965);function c(e,t,a){switch(e){case i.Z.Working:return a.colors.primary.base;case i.Z.Error:return a.colors.error.base;case i.Z.Success:return t?a.colors.success.base:a.colors.alert.base;case i.Z.Noop:return a.colors.success.base;case i.Z.Grace:return a.colors.alert.base;default:return a.colors.grayscale.base}}function d(e){let{state:t,isReportEnabled:a=!1}=e;const d=(0,l.Fg)(),u={icon:o.Z.Check,label:"",status:""};switch(t){case i.Z.Success:u.icon=a?o.Z.Check:o.Z.AlertSolidSmall,u.label=a?(0,n.t)("Report sent"):(0,n.t)("Alert triggered, notification sent"),u.status=i.Z.Success;break;case i.Z.Working:u.icon=o.Z.Running,u.label=a?(0,n.t)("Report sending"):(0,n.t)("Alert running"),u.status=i.Z.Working;break;case i.Z.Error:u.icon=o.Z.XSmall,u.label=a?(0,n.t)("Report failed"):(0,n.t)("Alert failed"),u.status=i.Z.Error;break;case i.Z.Noop:u.icon=o.Z.Check,u.label=(0,n.t)("Nothing triggered"),u.status=i.Z.Noop;break;case i.Z.Grace:u.icon=o.Z.AlertSolidSmall,u.label=(0,n.t)("Alert Triggered, In Grace Period"),u.status=i.Z.Grace;break;default:u.icon=o.Z.Check,u.label=(0,n.t)("Nothing triggered"),u.status=i.Z.Noop}const p=u.icon;return(0,s.tZ)(r.u,{title:u.label,placement:"bottomLeft"},(0,s.tZ)(p,{iconColor:c(u.status,a,d)}))}},28745:(e,t,a)=>{var l,n;a.d(t,{Z:()=>l,u:()=>n}),function(e){e.Success="Success",e.Working="Working",e.Error="Error",e.Noop="Not triggered",e.Grace="On Grace"}(l||(l={})),function(e){e.Email="Email",e.Slack="Slack"}(n||(n={}))}}]);
//# sourceMappingURL=7d9d55f1c2c9dd7af5ca.chunk.js.map