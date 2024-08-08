(self.webpackChunklearningResources=self.webpackChunklearningResources||[]).push([[576],{9947:(e,t,a)=>{"use strict";a.d(t,{I:()=>s,u:()=>c});var s,n=a(65353),l=a(32747),r=a(38296),i=a(51203);!function(e){e.xs="xs",e.sm="sm",e.lg="lg",e.xl="xl",e.full="full"}(s||(s={}));const c=e=>{var{children:t,className:a,variant:c=s.full,isFullHeight:o}=e,m=(0,n.__rest)(e,["children","className","variant","isFullHeight"]);return l.createElement("div",Object.assign({className:(0,r.i)(i.Z.emptyState,"xs"===c&&i.Z.modifiers.xs,"sm"===c&&i.Z.modifiers.sm,"lg"===c&&i.Z.modifiers.lg,"xl"===c&&i.Z.modifiers.xl,o&&i.Z.modifiers.fullHeight,a)},m),l.createElement("div",{className:(0,r.i)(i.Z.emptyStateContent)},t))};c.displayName="EmptyState"},75106:(e,t,a)=>{"use strict";a.d(t,{B:()=>i});var s=a(65353),n=a(32747),l=a(38296),r=a(51203);const i=e=>{var{children:t,className:a}=e,i=(0,s.__rest)(e,["children","className"]);return n.createElement("div",Object.assign({className:(0,l.i)(r.Z.emptyStateBody,a)},i),t)};i.displayName="EmptyStateBody"},80315:(e,t,a)=>{"use strict";a.d(t,{O:()=>i});var s=a(65353),n=a(32747),l=a(38296),r=a(51203);const i=e=>{var{children:t,className:a}=e,i=(0,s.__rest)(e,["children","className"]);return n.createElement("div",Object.assign({className:(0,l.i)(r.Z.emptyStateFooter,a)},i),t)};i.displayName="EmptyStateFooter"},67880:(e,t,a)=>{"use strict";a.d(t,{t:()=>i});var s=a(65353),n=a(32747),l=a(38296),r=a(51203);const i=e=>{var{children:t,className:a,titleClassName:i,titleText:c,headingLevel:o="h1",icon:m}=e,u=(0,s.__rest)(e,["children","className","titleClassName","titleText","headingLevel","icon"]);return n.createElement("div",Object.assign({className:(0,l.i)(`${r.Z.emptyState}__header`,a)},u),m,(c||t)&&n.createElement("div",{className:(0,l.i)(`${r.Z.emptyState}__title`)},c&&n.createElement(o,{className:(0,l.i)(r.Z.emptyStateTitleText,i)},c),t))};i.displayName="EmptyStateHeader"},45488:(e,t,a)=>{"use strict";a.d(t,{_:()=>O});var s=a(65353),n=a(32747);a(82014);const l="pf-v5-c-label__content",r="pf-m-compact",i="pf-m-blue",c="pf-m-green",o="pf-m-orange",m="pf-m-red",u="pf-m-purple",d="pf-m-cyan",p="pf-m-gold",f="pf-m-outline",v="pf-m-overflow",g="pf-m-editable-active",h="pf-m-disabled";a(24620);const b="pf-m-editable";var y=a(47173),E=a(13342),k=a(38296),N=a(24307),_=a(6551);const x="--pf-v5-c-label__text--MaxWidth",S={blue:i,cyan:d,green:c,orange:o,purple:u,red:m,gold:p,grey:""},O=e=>{var{children:t,className:a="",color:i="grey",variant:c="filled",isCompact:o=!1,isDisabled:m=!1,isEditable:u=!1,editableProps:d,textMaxWidth:p,tooltipPosition:O,icon:C,onClose:Z,onClick:j,onEditCancel:w,onEditComplete:P,closeBtn:$,closeBtnAriaLabel:L,closeBtnProps:B,href:I,isOverflowLabel:R,render:A}=e,T=(0,s.__rest)(e,["children","className","color","variant","isCompact","isDisabled","isEditable","editableProps","textMaxWidth","tooltipPosition","icon","onClose","onClick","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[q,F]=(0,n.useState)(!1),[D,H]=(0,n.useState)(t),V=n.useRef(),W=n.useRef();n.useEffect((()=>(document.addEventListener("mousedown",G),document.addEventListener("keydown",M),()=>{document.removeEventListener("mousedown",G),document.removeEventListener("keydown",M)}))),n.useEffect((()=>{j&&I?console.warn("Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop."):j&&u&&console.warn("Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the isEditable or onClick prop.")}),[j,I,u]);const G=e=>{q&&W&&W.current&&!W.current.contains(e.target)&&(W.current.value&&P&&P(e,W.current.value),F(!1))},M=e=>{var a,s;const n=e.key;if((q||V&&V.current&&V.current.contains(e.target))&&(!q||W&&W.current&&W.current.contains(e.target))&&(!q||"Enter"!==n&&"Tab"!==n||(e.preventDefault(),e.stopImmediatePropagation(),W.current.value&&P&&P(e,W.current.value),F(!1),null===(a=null==V?void 0:V.current)||void 0===a||a.focus()),q&&"Escape"===n&&(e.preventDefault(),e.stopImmediatePropagation(),W.current.value&&(W.current.value=t,w&&w(e,t)),F(!1),null===(s=null==V?void 0:V.current)||void 0===s||s.focus()),!q&&"Enter"===n)){e.preventDefault(),e.stopImmediatePropagation(),F(!0);const t=e.target,a=document.createRange(),s=window.getSelection();a.selectNodeContents(t),a.collapse(!1),s.removeAllRanges(),s.addRange(a)}},U=(I||j)&&m,Q=n.createElement(y.zx,Object.assign({type:"button",variant:"plain",onClick:Z,"aria-label":L||`Close ${t}`},U&&{isDisabled:!0},B),n.createElement(N.ZP,null)),z=n.createElement("span",{className:(0,k.i)("pf-v5-c-label__actions")},$||Q),K=n.createRef(),J=n.useRef(),[X,Y]=n.useState(!1);(0,_.L)((()=>{const e=u?V:K;q||Y(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[q]);const ee=n.createElement(n.Fragment,null,C&&n.createElement("span",{className:(0,k.i)("pf-v5-c-label__icon")},C),n.createElement("span",Object.assign({ref:K,className:(0,k.i)("pf-v5-c-label__text")},p&&{style:{[x]:p}}),t));n.useEffect((()=>{q&&W&&W.current&&W.current.focus()}),[W,q]);let te="span";I?te="a":(u||j&&!R)&&(te="button");const ae={type:"button",onClick:j},se="button"===te,ne=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({className:(0,k.i)(l)},X&&{tabIndex:0}),I&&{href:I}),I&&m&&{onClick:e=>e.preventDefault()}),se&&ae),u&&Object.assign({ref:V,onClick:e=>{F(!0),e.stopPropagation()}},d)),U&&se&&{disabled:!0}),U&&I&&{tabindex:-1,"aria-disabled":!0});let le=n.createElement(te,Object.assign({},ne),ee);A?le=n.createElement(n.Fragment,null,X&&n.createElement(E.u,{triggerRef:J,content:t,position:O}),A({className:l,content:ee,componentRef:J})):X&&(le=n.createElement(E.u,{content:t,position:O},le));const re=R?"button":"span";return n.createElement(re,Object.assign({},T,{className:(0,k.i)("pf-v5-c-label",U&&h,S[i],"outline"===c&&f,R&&v,o&&r,u&&b,q&&g,a),onClick:R?j:void 0}),!q&&le,!q&&Z&&z,q&&n.createElement("input",Object.assign({className:(0,k.i)(l),type:"text",id:"editable-input",ref:W,value:D,onChange:()=>{H(W.current.value)}},d)))};O.displayName="Label"},68774:(e,t,a)=>{"use strict";a.d(t,{D:()=>i});var s=a(65353),n=a(32747),l=a(62873),r=a(38296);const i=e=>{var{children:t,className:a="",isVisited:i=!1}=e,c=(0,s.__rest)(e,["children","className","isVisited"]);return n.createElement("div",Object.assign({},c,{className:(0,r.i)(l.Z.content,i&&l.Z.modifiers.visited,a)}),t)};i.displayName="TextContent"},52643:(e,t,a)=>{"use strict";a.d(t,{b:()=>i});var s=a(65353),n=a(32747),l=a(38296),r=a(66042);const i=e=>{var{children:t=null,className:a="",component:i="div"}=e,c=(0,s.__rest)(e,["children","className","component"]);const o=i;return n.createElement(o,Object.assign({className:(0,l.i)(r.Z.bullseye,a)},c),t)};i.displayName="Bullseye"},44429:(e,t,a)=>{"use strict";a.d(t,{r:()=>o});var s=a(65353),n=a(32747),l=a(38296);a(51934);const r="pf-m-gutter",i="--pf-v5-l-gallery--GridTemplateColumns--min",c="--pf-v5-l-gallery--GridTemplateColumns--max",o=e=>{var{children:t=null,className:a="",component:o="div",hasGutter:m=!1,minWidths:u,maxWidths:d}=e,p=(0,s.__rest)(e,["children","className","component","hasGutter","minWidths","maxWidths"]);const f={},v=o;u&&Object.entries(u||{}).map((([e,t])=>f[`${i}${"default"!==e?`-on-${e}`:""}`]=t));const g={};d&&Object.entries(d||{}).map((([e,t])=>g[`${c}${"default"!==e?`-on-${e}`:""}`]=t));const h=Object.assign(Object.assign({},f),g);return n.createElement(v,Object.assign({className:(0,l.i)("pf-v5-l-gallery",m&&r,a)},p,(u||d)&&{style:Object.assign(Object.assign({},h),p.style)}),t)};o.displayName="Gallery"},49739:(e,t,a)=>{"use strict";a.d(t,{K:()=>i});var s=a(65353),n=a(32747),l=a(73976),r=a(38296);const i=e=>{var{hasGutter:t=!1,className:a="",children:i=null,component:c="div"}=e,o=(0,s.__rest)(e,["hasGutter","className","children","component"]);const m=c;return n.createElement(m,Object.assign({},o,{className:(0,r.i)(l.Z.stack,t&&l.Z.modifiers.gutter,a)}),i)};i.displayName="Stack"},83826:(e,t,a)=>{"use strict";a.d(t,{v:()=>i});var s=a(65353),n=a(32747),l=a(73976),r=a(38296);const i=e=>{var{isFilled:t=!1,className:a="",children:i=null}=e,c=(0,s.__rest)(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},c,{className:(0,r.i)(l.Z.stackItem,t&&l.Z.modifiers.fill,a)}),i)};i.displayName="StackItem"},35183:(e,t,a)=>{"use strict";t.I=void 0;const s=a(65353),n=s.__importStar(a(32747));let l=0;t.I=function({name:e,xOffset:t=0,yOffset:a=0,width:r,height:i,svgPath:c}){var o;return(o=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{title:l,className:o}=e,m=s.__rest(e,["title","className"]),u=o?`pf-v5-svg ${o}`:"pf-v5-svg",d=Boolean(l),p=[t,a,r,i].join(" ");return n.createElement("svg",Object.assign({className:u,viewBox:p,fill:"currentColor","aria-labelledby":d?this.id:null,"aria-hidden":!d||null,role:"img",width:"1em",height:"1em"},m),d&&n.createElement("title",{id:this.id},l),n.createElement("path",{d:c}))}}).displayName=e,o}},50470:(e,t,a)=>{"use strict";t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=a(35183).I(t.mq),t.ZP=t.LA},51203:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s}),a(81320);const s={emptyState:"pf-v5-c-empty-state",emptyStateActions:"pf-v5-c-empty-state__actions",emptyStateBody:"pf-v5-c-empty-state__body",emptyStateContent:"pf-v5-c-empty-state__content",emptyStateFooter:"pf-v5-c-empty-state__footer",emptyStateIcon:"pf-v5-c-empty-state__icon",emptyStateTitleText:"pf-v5-c-empty-state__title-text",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height"}}},66042:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s}),a(87234);const s={bullseye:"pf-v5-l-bullseye"}},73976:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s}),a(53519);const s={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-v5-l-stack",stackItem:"pf-v5-l-stack__item"}},55140:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var s=a(65771),n=function(){return n=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};const l=function(e){var t,a=(0,s.useScalprum)(),l=(null===(t=a.api)||void 0===t?void 0:t.chrome)||{};return l=n(n({},l),{initialized:a.initialized}),"function"==typeof e?e(l):l}},85738:(e,t,a)=>{"use strict";a.r(t),a.d(t,{API_BASE:()=>C,FAVORITES:()=>j,QUICKSTARTS:()=>Z,default:()=>L});var s=a(32747),n=a.n(s),l=a(68774),r=a(68340),i=a(55140),c=a(23098),o=a(44429),m=a(45488),u=a(47173),d=a(9947),p=a(67880),f=a(75106),v=a(80315),g=a(49739),h=a(83826);const b=a.p+"fonts/Bookmarks_empty-state.svg",y=()=>n().createElement(d.u,{variant:d.I.lg,className:"pf-v5-u-py-md"},n().createElement(p.t,{titleText:"No bookmarked learning resources",icon:n().createElement("img",{src:b}),headingLevel:"h4"}),n().createElement(f.B,null,n().createElement(g.K,null,n().createElement(h.v,null,"Add documentation, quickstarts, learning paths, and more to your bookmarks for easy access in the future."))),n().createElement(v.O,{className:"pf-v5-u-mt-sm"},n().createElement(u.zx,{variant:"secondary",component:"a",href:"settings/learning-resources#documentation"},"View all learning resources")));var E=a(68148),k=a(52643),N=a(28191),_=a(92298),x=a(78057),S=a(58057),O=a(50470);const C="/api/quickstarts/v1",Z="/quickstarts",j="/favorites",w=({pathname:e,title:t})=>{const{updateDocumentTitle:a}=(0,i.Z)();return n().createElement(c.Link,{onClick:()=>a(t),to:e},t)},P=({bookmarks:e})=>n().createElement("div",null,0===e.length?n().createElement(y,null):n().createElement(o.r,{className:"widget-learning-resources pf-v5-u-p-md",hasGutter:!0},e.map((({spec:e,metadata:t},a)=>{return n().createElement("div",{key:a},n().createElement(l.D,null,t.externalDocumentation?n().createElement("a",{href:e.link?.href,target:"_blank",rel:"noreferrer"},e.displayName,n().createElement(x.J,{className:"pf-v5-u-ml-sm",isInline:!0},n().createElement(O.ZP,null))):n().createElement(w,{title:e.displayName,pathname:e.link?.href||""})),n().createElement(N.k,{direction:{default:"row"}},n().createElement(_.B,{className:"pf-v5-u-mr-sm"},e.type&&n().createElement(m._,{color:e.type.color},e.type.text)),n().createElement(_.B,null,n().createElement(l.D,null,n().createElement(r.x,{component:r.q.small},e.link?.href?(s=e.link?.href,new URL(s).host):"")))));var s})))),$=({onContentReady:e,bundle:t})=>{const{bookmarks:a,contentReady:n}=(0,E.ZP)(t);return(0,s.useEffect)((()=>{n&&e(a)}),[n]),null},L=()=>{const{getAvailableBundles:e}=(0,i.Z)(),[t,a]=(0,s.useState)([]);return n().createElement(s.Fragment,null,e().map((({id:e},t)=>n().createElement($,{bundle:e,key:t,onContentReady:e=>a((t=>[...t,e]))}))),t.length!==e().length?n().createElement(k.b,null,n().createElement(S.$,null)):n().createElement(P,{bookmarks:t.flat()}))}},68148:(e,t,a)=>{"use strict";a.d(t,{I_:()=>m,Sg:()=>c,ZP:()=>d,d5:()=>o});var s=a(32747),n=a(5527),l=a.n(n),r=a(8114),i=a(55140);const c="/api/quickstarts/v1",o="/quickstarts",m="/favorites",u=(e,t)=>e.spec.displayName.localeCompare(t.spec.displayName),d=e=>{const t=(0,i.Z)(),{quickStarts:a}=t,[n,d]=(0,s.useState)(!1),[p,f]=(0,s.useState)([]),{allQuickStartStates:v,allQuickStarts:g=[],filter:h}=(0,s.useContext)(r.QuickStartContext),b=(0,s.useMemo)((()=>(0,r.filterQuickStarts)(g||[],h?.keyword||"",h?.status?.statusFilters,v||{}).sort(u).reduce(((e,t)=>{const a=function(e,t){return!!t.find((t=>t.quickstartName===e.metadata.name))}(t,p),s={...t,metadata:{...t.metadata,favorite:a}};return a&&e.bookmarks.push(s),t.metadata.externalDocumentation?e.documentation.push(s):t.metadata.otherResource?e.other.push(s):t.metadata.learningPath?e.learningPaths.push(s):e.quickStarts.push(s),e}),{documentation:[],quickStarts:[],other:[],learningPaths:[],bookmarks:[]})),[g,h,p]);async function y(e,a){const s=[...p],n=p.filter((t=>t.quickstartName!==e));a&&n.push({favorite:a,quickstartName:e}),f(n);const r=await t.auth.getUser();if(!r)throw new Error("User not logged in");const i=r.identity.internal?.account_id;try{await l().post(`${c}/${m}?account=${i}`,{quickstartName:e,favorite:a})}catch(e){console.error("Failed to update favorites",e),f(s)}}return(0,s.useEffect)((()=>{!async function(){const s=await t.auth.getUser();if(!s)throw new Error("User not logged in");const n=s.identity.internal?.account_id,r=e?`${c}/${o}?bundle=${e}`:`${c}/${o}?account=${n}`,i=[l().get(r).then((({data:t})=>{e?a.set(`${e}`,t.data.map((({content:e})=>e))):a.set(`${n}`,t.data.map((({content:e})=>e)))})),n?l().get(`${c}/${m}?account=${n}`).then((({data:e})=>e.data)):Promise.resolve([])],[,u]=await Promise.allSettled(i);"fulfilled"===u.status&&u.value&&f(u.value),d(!0)}()}),[e]),(0,s.useMemo)((()=>({...b,contentReady:n,toggleFavorite:y})),[b,n,y])}},45467:()=>{},11452:()=>{},34946:()=>{},10108:()=>{},81320:()=>{},44839:()=>{},24620:()=>{},82014:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},38299:()=>{},51934:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./BookmarkedLearningResourcesWidget.fb3de5ce82ade261e96ebc077a3cafd0.js.map