(self.webpackChunklearningResources=self.webpackChunklearningResources||[]).push([[576],{9947:(e,t,a)=>{"use strict";a.d(t,{I:()=>n,u:()=>c});var n,s=a(5353),r=a(2747),l=a(8296),i=a(1203);!function(e){e.xs="xs",e.sm="sm",e.lg="lg",e.xl="xl",e.full="full"}(n||(n={}));const c=e=>{var{children:t,className:a,variant:c=n.full,isFullHeight:o}=e,m=(0,s.__rest)(e,["children","className","variant","isFullHeight"]);return r.createElement("div",Object.assign({className:(0,l.i)(i.Z.emptyState,"xs"===c&&i.Z.modifiers.xs,"sm"===c&&i.Z.modifiers.sm,"lg"===c&&i.Z.modifiers.lg,"xl"===c&&i.Z.modifiers.xl,o&&i.Z.modifiers.fullHeight,a)},m),r.createElement("div",{className:(0,l.i)(i.Z.emptyStateContent)},t))};c.displayName="EmptyState"},5106:(e,t,a)=>{"use strict";a.d(t,{B:()=>i});var n=a(5353),s=a(2747),r=a(8296),l=a(1203);const i=e=>{var{children:t,className:a}=e,i=(0,n.__rest)(e,["children","className"]);return s.createElement("div",Object.assign({className:(0,r.i)(l.Z.emptyStateBody,a)},i),t)};i.displayName="EmptyStateBody"},315:(e,t,a)=>{"use strict";a.d(t,{O:()=>i});var n=a(5353),s=a(2747),r=a(8296),l=a(1203);const i=e=>{var{children:t,className:a}=e,i=(0,n.__rest)(e,["children","className"]);return s.createElement("div",Object.assign({className:(0,r.i)(l.Z.emptyStateFooter,a)},i),t)};i.displayName="EmptyStateFooter"},7880:(e,t,a)=>{"use strict";a.d(t,{t:()=>i});var n=a(5353),s=a(2747),r=a(8296),l=a(1203);const i=e=>{var{children:t,className:a,titleClassName:i,titleText:c,headingLevel:o="h1",icon:m}=e,u=(0,n.__rest)(e,["children","className","titleClassName","titleText","headingLevel","icon"]);return s.createElement("div",Object.assign({className:(0,r.i)("pf-v5-c-empty-state__header",a)},u),m,(c||t)&&s.createElement("div",{className:(0,r.i)("pf-v5-c-empty-state__title")},c&&s.createElement(o,{className:(0,r.i)(l.Z.emptyStateTitleText,i)},c),t))};i.displayName="EmptyStateHeader"},2371:(e,t,a)=>{"use strict";a.d(t,{_:()=>x});var n=a(5353),s=a(2747);a(2014);const r="pf-v5-c-label__content",l="pf-m-compact",i="pf-m-blue",c="pf-m-green",o="pf-m-orange",m="pf-m-red",u="pf-m-purple",d="pf-m-cyan",p="pf-m-gold",f="pf-m-outline",v="pf-m-overflow",h="pf-m-editable-active";a(4620);const g="pf-m-editable";var E=a(6796),b=a(5824),y=a(8296),k=a(4307),N=a(6551);const _={blue:i,cyan:d,green:c,orange:o,purple:u,red:m,gold:p,grey:""},x=e=>{var{children:t,className:a="",color:i="grey",variant:c="filled",isCompact:o=!1,isEditable:m=!1,editableProps:u,textMaxWidth:d,tooltipPosition:p,icon:x,onClose:C,onClick:w,onEditCancel:S,onEditComplete:O,closeBtn:P,closeBtnAriaLabel:Z,closeBtnProps:L,href:j,isOverflowLabel:B,render:R}=e,$=(0,n.__rest)(e,["children","className","color","variant","isCompact","isEditable","editableProps","textMaxWidth","tooltipPosition","icon","onClose","onClick","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[q,A]=(0,s.useState)(!1),[I,T]=(0,s.useState)(t),F=s.useRef(),H=s.useRef();s.useEffect((()=>(document.addEventListener("mousedown",V),document.addEventListener("keydown",D),()=>{document.removeEventListener("mousedown",V),document.removeEventListener("keydown",D)}))),s.useEffect((()=>{w&&j?console.warn("Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop."):w&&m&&console.warn("Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the isEditable or onClick prop.")}),[w,j,m]);const V=e=>{q&&H&&H.current&&!H.current.contains(e.target)&&(H.current.value&&O&&O(e,H.current.value),A(!1))},D=e=>{var a,n;const s=e.key;if((q||F&&F.current&&F.current.contains(e.target))&&(!q||H&&H.current&&H.current.contains(e.target))&&(!q||"Enter"!==s&&"Tab"!==s||(e.preventDefault(),e.stopImmediatePropagation(),H.current.value&&O&&O(e,H.current.value),A(!1),null===(a=null==F?void 0:F.current)||void 0===a||a.focus()),q&&"Escape"===s&&(e.preventDefault(),e.stopImmediatePropagation(),H.current.value&&(H.current.value=t,S&&S(e,t)),A(!1),null===(n=null==F?void 0:F.current)||void 0===n||n.focus()),!q&&"Enter"===s)){e.preventDefault(),e.stopImmediatePropagation(),A(!0);const t=e.target,a=document.createRange(),n=window.getSelection();a.selectNodeContents(t),a.collapse(!1),n.removeAllRanges(),n.addRange(a)}},M=B?"button":"span",U=s.createElement(E.zx,Object.assign({type:"button",variant:"plain",onClick:C,"aria-label":Z||`Close ${t}`},L),s.createElement(k.ZP,null)),Q=s.createElement("span",{className:(0,y.i)("pf-v5-c-label__actions")},P||U),W=s.createRef(),z=s.useRef(),[K,G]=s.useState(!1);(0,N.L)((()=>{const e=m?F:W;q||G(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[q]);const J=s.createElement(s.Fragment,null,x&&s.createElement("span",{className:(0,y.i)("pf-v5-c-label__icon")},x),s.createElement("span",Object.assign({ref:W,className:(0,y.i)("pf-v5-c-label__text")},d&&{style:{"--pf-v5-c-label__text--MaxWidth":d}}),t));s.useEffect((()=>{q&&H&&H.current&&H.current.focus()}),[H,q]);let X="span";j?X="a":(m||w&&!B)&&(X="button");const Y={type:"button",onClick:w},ee="button"===X,te=Object.assign(Object.assign(Object.assign(Object.assign({className:(0,y.i)(r)},K&&{tabIndex:0}),j&&{href:j}),ee&&Y),m&&Object.assign({ref:F,onClick:e=>{A(!0),e.stopPropagation()}},u));let ae=s.createElement(X,Object.assign({},te),J);return R?ae=s.createElement(s.Fragment,null,K&&s.createElement(b.u,{triggerRef:z,content:t,position:p}),R({className:r,content:J,componentRef:z})):K&&(ae=s.createElement(b.u,{content:t,position:p},ae)),s.createElement(M,Object.assign({},$,{className:(0,y.i)("pf-v5-c-label",_[i],"outline"===c&&f,B&&v,o&&l,m&&g,q&&h,a),onClick:B?w:void 0}),!q&&ae,!q&&C&&Q,q&&s.createElement("input",Object.assign({className:(0,y.i)(r),type:"text",id:"editable-input",ref:H,value:I,onChange:()=>{T(H.current.value)}},u)))};x.displayName="Label"},8774:(e,t,a)=>{"use strict";a.d(t,{D:()=>i});var n=a(5353),s=a(2747),r=a(2873),l=a(8296);const i=e=>{var{children:t,className:a="",isVisited:i=!1}=e,c=(0,n.__rest)(e,["children","className","isVisited"]);return s.createElement("div",Object.assign({},c,{className:(0,l.i)(r.Z.content,i&&r.Z.modifiers.visited,a)}),t)};i.displayName="TextContent"},5183:(e,t,a)=>{"use strict";t.I=void 0;const n=a(5353),s=n.__importStar(a(2747));let r=0;t.I=function({name:e,xOffset:t=0,yOffset:a=0,width:l,height:i,svgPath:c}){var o;return(o=class extends s.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{title:r,className:o}=e,m=n.__rest(e,["title","className"]),u=o?`pf-v5-svg ${o}`:"pf-v5-svg",d=Boolean(r),p=[t,a,l,i].join(" ");return s.createElement("svg",Object.assign({className:u,viewBox:p,fill:"currentColor","aria-labelledby":d?this.id:null,"aria-hidden":!d||null,role:"img",width:"1em",height:"1em"},m),d&&s.createElement("title",{id:this.id},r),s.createElement("path",{d:c}))}}).displayName=e,o}},470:(e,t,a)=>{"use strict";t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=a(5183).I(t.mq),t.ZP=t.LA},6042:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(7234);const n={bullseye:"pf-v5-l-bullseye"}},5140:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(5771),s=function(){return s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},s.apply(this,arguments)};const r=function(e){var t,a=(0,n.useScalprum)(),r=(null===(t=a.api)||void 0===t?void 0:t.chrome)||{};return r=s(s({},r),{initialized:a.initialized}),"function"==typeof e?e(r):r}},947:(e,t,a)=>{"use strict";a.r(t),a.d(t,{API_BASE:()=>Z,FAVORITES:()=>j,QUICKSTARTS:()=>L,default:()=>R});var n=a(2747),s=a.n(n),r=a(8774),l=a(8340),i=a(5140),c=a(3098),o=a(5979),m=a(2371),u=a(6796),d=a(9947),p=a(7880),f=a(5106),v=a(315),h=a(9739),g=a(3826);const E=a.p+"fonts/Bookmarks_empty-state.svg",b=()=>s().createElement(d.u,{variant:d.I.lg,className:"pf-v5-u-py-md"},s().createElement(p.t,{titleText:"No bookmarked learning resources",icon:s().createElement("img",{src:E}),headingLevel:"h4"}),s().createElement(f.B,null,s().createElement(h.K,null,s().createElement(g.v,null,"Add documentation, quickstarts, learning paths, and more to your bookmarks for easy access in the future."))),s().createElement(v.O,{className:"pf-v5-u-mt-sm"},s().createElement(u.zx,{variant:"secondary",component:"a",href:"settings/learning-resources#documentation"},"View all learning resources")));var y=a(8148),k=a(5353),N=a(8296),_=a(6042);const x=e=>{var{children:t=null,className:a="",component:s="div"}=e,r=(0,k.__rest)(e,["children","className","component"]);const l=s;return n.createElement(l,Object.assign({className:(0,N.i)(_.Z.bullseye,a)},r),t)};x.displayName="Bullseye";var C=a(8191),w=a(2298),S=a(8057),O=a(7619),P=a(470);const Z="/api/quickstarts/v1",L="/quickstarts",j="/favorites",B=({pathname:e,title:t})=>{const{updateDocumentTitle:a}=(0,i.Z)();return s().createElement(c.Link,{onClick:()=>a(t),to:e},t)},R=()=>{const{bookmarks:e,contentReady:t}=(0,y.ZP)("settings");return s().createElement("div",null,t?0===e.length?s().createElement(b,null):s().createElement(o.r,{className:"widget-learning-resources pf-v5-u-p-md",hasGutter:!0},e.map((({spec:e,metadata:t},a)=>{return s().createElement("div",{key:a},s().createElement(r.D,null,t.externalDocumentation?s().createElement("a",{href:e.link?.href,target:"_blank",rel:"noreferrer"},e.displayName,s().createElement(S.J,{className:"pf-v5-u-ml-sm",isInline:!0},s().createElement(P.ZP,null))):s().createElement(B,{title:e.displayName,pathname:e.link?.href||""})),s().createElement(C.k,{direction:{default:"row"}},s().createElement(w.B,{className:"pf-v5-u-mr-sm"},e.type&&s().createElement(m._,{color:e.type.color},e.type.text)),s().createElement(w.B,null,s().createElement(r.D,null,s().createElement(l.x,{component:l.q.small},e.link?.href?(n=e.link?.href,new URL(n).host):"")))));var n}))):s().createElement(x,null,s().createElement(O.$,null)))}},8148:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>d});var n=a(2747),s=a(5527),r=a.n(s),l=a(520),i=a(5140);const c="/api/quickstarts/v1",o="/quickstarts",m="/favorites",u=(e,t)=>e.spec.displayName.localeCompare(t.spec.displayName),d=e=>{const t=(0,i.Z)(),{quickStarts:a}=t,[s,d]=(0,n.useState)(!1),[p,f]=(0,n.useState)([]),{allQuickStartStates:v,allQuickStarts:h=[],filter:g}=(0,n.useContext)(l.QuickStartContext),E=(0,n.useMemo)((()=>(0,l.filterQuickStarts)(h||[],g?.keyword||"",g?.status?.statusFilters,v||{}).sort(u).reduce(((e,t)=>{const a=function(e,t){return!!t.find((t=>t.quickstartName===e.metadata.name))}(t,p),n={...t,metadata:{...t.metadata,favorite:a}};return a&&e.bookmarks.push(n),t.metadata.externalDocumentation?e.documentation.push(n):t.metadata.otherResource?e.other.push(n):t.metadata.learningPath?e.learningPaths.push(n):e.quickStarts.push(n),e}),{documentation:[],quickStarts:[],other:[],learningPaths:[],bookmarks:[]})),[h,g,p]);async function b(e,a){const n=[...p],s=p.filter((t=>t.quickstartName!==e));a&&s.push({favorite:a,quickstartName:e}),f(s);const l=await t.auth.getUser();if(!l)throw new Error("User not logged in");const i=l.identity.internal?.account_id;try{await r().post(`${c}/${m}?account=${i}`,{quickstartName:e,favorite:a})}catch(e){console.error("Failed to update favorites",e),f(n)}}return(0,n.useEffect)((()=>{!async function(){const n=await t.auth.getUser();if(!n)throw new Error("User not logged in");const s=n.identity.internal?.account_id,l=e?`${c}/${o}?bundle=${e}`:`${c}/${o}?account=${s}`,i=[r().get(l).then((({data:t})=>{e?a.set(`${e}`,t.data.map((({content:e})=>e))):a.set(`${s}`,t.data.map((({content:e})=>e)))})),s?r().get(`${c}/${m}?account=${s}`).then((({data:e})=>e.data)):Promise.resolve([])],[,u]=await Promise.allSettled(i);"fulfilled"===u.status&&u.value&&f(u.value),d(!0)}()}),[e]),(0,n.useMemo)((()=>({...E,contentReady:s,toggleFavorite:b})),[E,s,b])}},5467:()=>{},1452:()=>{},4946:()=>{},108:()=>{},1320:()=>{},4839:()=>{},4620:()=>{},2014:()=>{},6822:()=>{},9854:()=>{},7234:()=>{},8299:()=>{},1934:()=>{},3519:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./BookmarkedLearningResourcesWidget.aaf741cb6c0226a3920f1722e20a8150.js.map