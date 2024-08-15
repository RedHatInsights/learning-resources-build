(self.webpackChunklearningResources=self.webpackChunklearningResources||[]).push([[186,681,527],{9947:(e,t,a)=>{"use strict";a.d(t,{u:()=>s});var n,i=a(65353),r=a(32747),l=a(38296),o=a(51203);!function(e){e.xs="xs",e.sm="sm",e.lg="lg",e.xl="xl",e.full="full"}(n||(n={}));const s=e=>{var{children:t,className:a,variant:s=n.full,isFullHeight:c}=e,m=(0,i.__rest)(e,["children","className","variant","isFullHeight"]);return r.createElement("div",Object.assign({className:(0,l.i)(o.Z.emptyState,"xs"===s&&o.Z.modifiers.xs,"sm"===s&&o.Z.modifiers.sm,"lg"===s&&o.Z.modifiers.lg,"xl"===s&&o.Z.modifiers.xl,c&&o.Z.modifiers.fullHeight,a)},m),r.createElement("div",{className:(0,l.i)(o.Z.emptyStateContent)},t))};s.displayName="EmptyState"},13342:(e,t,a)=>{"use strict";a.d(t,{u:()=>g});var n,i=a(65353),r=a(32747),l=a(86478),o=a(38296),s=a(66641),c=a(95673),m=a(1774),u=a(46481),d=a(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(n||(n={}));let p=1;const g=e=>{var{content:t,position:a="top",trigger:n="mouseenter focus",isVisible:g=!1,isContentLeftAligned:f=!1,enableFlip:h=!0,className:E="",entryDelay:v=300,exitDelay:k=300,appendTo:b=(()=>document.body),zIndex:y=9999,minWidth:S,maxWidth:N=u.Z.value,distance:x=15,aria:w="describedby",flipBehavior:C=["top","right","bottom","left","top","right","bottom"],id:T="pf-tooltip-"+p++,children:D,animationDuration:$=300,triggerRef:F,"aria-live":_=(F?"polite":"off"),onTooltipHidden:P=(()=>{})}=e,Z=(0,i.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const I=n.includes("mouseenter"),H=n.includes("focus"),Q=n.includes("click"),q="manual"===n,[A,L]=r.useState(!1),R=r.createRef();r.useEffect((()=>{g?B():z()}),[g]);const B=()=>{L(!0)},z=()=>{L(!1)},O={top:l.Z.modifiers.top,bottom:l.Z.modifiers.bottom,left:l.Z.modifiers.left,right:l.Z.modifiers.right,"top-start":l.Z.modifiers.topLeft,"top-end":l.Z.modifiers.topRight,"bottom-start":l.Z.modifiers.bottomLeft,"bottom-end":l.Z.modifiers.bottomRight,"left-start":l.Z.modifiers.leftTop,"left-end":l.Z.modifiers.leftBottom,"right-start":l.Z.modifiers.rightTop,"right-end":l.Z.modifiers.rightBottom},J=N!==u.Z.value,U=r.createElement("div",Object.assign({"aria-live":_,className:(0,o.i)(l.Z.tooltip,E),role:"tooltip",id:T,style:{maxWidth:J?N:null},ref:R},Z),r.createElement(c.C,null),r.createElement(s._,{isLeftAligned:f},t));return r.createElement(d.r,{trigger:"none"!==w&&A?"describedby"===w&&D&&D.props&&!D.props["aria-describedby"]?r.cloneElement(D,{"aria-describedby":T}):"labelledby"===w&&D.props&&!D.props["aria-labelledby"]?r.cloneElement(D,{"aria-labelledby":T}):D:D,triggerRef:F,popper:U,popperRef:R,minWidth:void 0!==S?S:"revert",appendTo:b,isVisible:A,positionModifiers:O,distance:x,placement:a,onMouseEnter:I&&B,onMouseLeave:I&&z,onPopperMouseEnter:I&&B,onPopperMouseLeave:I&&z,onFocus:H&&B,onBlur:H&&z,onDocumentClick:Q&&((e,t)=>{A?z():e.target===t&&B()}),onDocumentKeyDown:q?null:e=>{q||e.key===m.yu.Escape&&A&&z()},onTriggerEnter:q?null:e=>{e.key===m.yu.Enter&&(A?z():B())},enableFlip:h,zIndex:y,flipBehavior:C,animationDuration:$,entryDelay:v,exitDelay:k,onHidden:P})};g.displayName="Tooltip"},24396:(e,t,a)=>{"use strict";a.d(t,{FS:()=>r});var n=a(32747),i=a(80164);class r extends n.Component{constructor(){super(...arguments),this.keyHandler=e=>{const{isEventFromContainer:t}=this.props;if(t?!t(e):!this._isEventFromContainer(e))return;const{isActiveElement:a,getFocusableElement:n,noVerticalArrowHandling:i,noHorizontalArrowHandling:r,noEnterHandling:l,noSpaceHandling:o,updateTabIndex:s,validSiblingTags:c,additionalKeyHandler:m,createNavigableElements:u,onlyTraverseSiblings:d}=this.props;m&&m(e);const p=u();if(!p)return void console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");const g=e.key;l||"Enter"===g&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),o||" "===g&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),((e,t,a=(e=>document.activeElement.contains(e)),n=(e=>e),i=["A","BUTTON","INPUT"],r=!1,l=!1,o=!0,s=!0)=>{const c=document.activeElement,m=e.key;let u=null;if(!r&&["ArrowUp","ArrowDown"].includes(m)){e.preventDefault(),e.stopImmediatePropagation();let i=-1;t.forEach(((e,r)=>{if(a(e)){let e=0;for(;!u&&e<t.length&&-1*e<t.length;)"ArrowUp"===m?e--:e++,i=r+e,i>=t.length&&(i=0),i<0&&(i=t.length-1),u=n(t[i])}}))}if(!l&&["ArrowLeft","ArrowRight"].includes(m)){e.preventDefault(),e.stopImmediatePropagation();let n=-1;t.forEach(((r,l)=>{if(a(r)){const a=t[l].querySelectorAll(i.join(","));if(!a.length||s){let e=c;for(;e;)if(e="ArrowLeft"===m?e.previousElementSibling:e.nextElementSibling,e&&i.includes(e.tagName)){u=e;break}}else a.forEach(((t,i)=>{e.target===t&&(n=i+("ArrowLeft"===m?-1:1),n>=a.length&&(n=0),n<0&&(n=a.length-1),u=a[n])}))}}))}u&&(o&&(c.tabIndex=-1,u.tabIndex=0),u.focus())})(e,p,a,n,c,i,r,s,d)},this._isEventFromContainer=e=>{const{containerRef:t}=this.props;return t.current&&t.current.contains(e.target)}}componentDidMount(){i.Nq&&window.addEventListener("keydown",this.keyHandler)}componentWillUnmount(){i.Nq&&window.removeEventListener("keydown",this.keyHandler)}render(){return null}}r.displayName="KeyboardHandler",r.defaultProps={containerRef:null,createNavigableElements:()=>null,isActiveElement:e=>document.activeElement===e,getFocusableElement:e=>e,validSiblingTags:["BUTTON","A"],onlyTraverseSiblings:!0,updateTabIndex:!0,noHorizontalArrowHandling:!1,noVerticalArrowHandling:!1,noEnterHandling:!1,noSpaceHandling:!1}},80164:(e,t,a)=>{"use strict";a.d(t,{Ds:()=>l,I_:()=>v,Ki:()=>r,Nq:()=>f,_6:()=>s,fZ:()=>g,fi:()=>E,iu:()=>d,j9:()=>k,kC:()=>i,tJ:()=>o,wt:()=>m,x8:()=>c,xb:()=>u}),a(10056);var n=a(1774);function i(e){return e[0].toUpperCase()+e.substring(1)}function r(e="pf"){return`${e}-${(new Date).getTime()+Math.random().toString(36).slice(2)}`}function l(e,t){let a;return(...n)=>{clearTimeout(a),a=setTimeout((()=>e.apply(this,n)),t)}}function o(e,t){return e.replace(/\${(.*?)}/g,((e,a)=>t[a]||""))}function s(e,t,a){return a||(a=`${t}s`),`${e||0} ${1===e?t:a}`}const c=(e,t)=>Object.entries(e||{}).reduce(((e,[a,n])=>"default"===a?Object.assign(Object.assign({},e),{[t]:n}):Object.assign(Object.assign({},e),{[`${t}-on-${a}`]:n})),{}),m=(e,t,a="",n,i)=>{if(!e)return"";if(n&&!i){if(n in e)return t.modifiers[g(`${a}${e[n]}`)];const i=["2xl","xl","lg","md","sm","default"];for(let r=i.indexOf(n);r<i.length;r++)if(i[r]in e)return t.modifiers[g(`${a}${e[i[r]]}`)];return""}return Object.entries(e||{}).map((([e,t])=>`${a}${t}${"default"!==e?`-on-${e}`:""}${i&&"default"!==e?"-height":""}`)).map(g).map((e=>e.replace(/-?(\dxl)/gi,((e,t)=>`_${t}`)))).map((e=>t.modifiers[e])).filter(Boolean).join(" ")},u=e=>null===e?null:e>=n.pr["2xl"]?"2xl":e>=n.pr.xl?"xl":e>=n.pr.lg?"lg":e>=n.pr.md?"md":e>=n.pr.sm?"sm":"default",d=e=>null===e?null:e>=n.H_["2xl"]?"2xl":e>=n.H_.xl?"xl":e>=n.H_.lg?"lg":e>=n.H_.md?"md":e>=n.H_.sm?"sm":"default",p=e=>e.toUpperCase().replace("-","").replace("_",""),g=e=>e.replace(/([-_][a-z])/gi,p),f=!("undefined"==typeof window||!window.document||!window.document.createElement),h=(e,t)=>{const a=getComputedStyle(t),n=document.createElement("canvas").getContext("2d");return n.font=a.font||(()=>{let e="";const t={"50%":"ultra-condensed","62.5%":"extra-condensed","75%":"condensed","87.5%":"semi-condensed","100%":"normal","112.5%":"semi-expanded","125%":"expanded","150%":"extra-expanded","200%":"ultra-expanded"};let n;return n=a.fontStretch in t?t[a.fontStretch]:"normal",e=a.fontStyle+" "+a.fontVariant+" "+a.fontWeight+" "+n+" "+a.fontSize+"/"+a.lineHeight+" "+a.fontFamily,e})(),n.measureText(e).width},E=(e,t)=>{const a=(e=>{const t=getComputedStyle(e);let a=e.clientWidth,n=e.clientHeight;return n-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),a-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),{height:n,width:a}})(e).width;let n=t;if(h(t,e)>a){for(;h(`...${n}`,e)>a;)n=n.substring(1);e.value?e.value=`...${n}`:e.innerText=`...${n}`}else e.value?e.value=t:e.innerText=t},v=e=>{e.forEach((e=>{e.current&&clearTimeout(e.current)}))},k=(e,t="ltr")=>{if(!e)return t;const a=getComputedStyle(e).getPropertyValue("direction");return["ltr","rtl"].includes(a)?a:t}},20745:(e,t,a)=>{"use strict";var n=a(10056);t.s=n.createRoot,n.hydrateRoot},74281:(e,t,a)=>{"use strict";a.r(t);var n=a(32747),i=a.n(n),r=a(20745),l=a(55140),o=a(8114),s=a(15627),c=a(9947),m=a(78057),u=a(74277),d=a(32045),p=a(68907),g=a(92884),f=a(7544),h=a(90660),E=a(83826),v=a(49739),k=a(38779);const b=()=>{const{getBundleData:e}=(0,l.Z)(),{bundleTitle:t}=e();return i().createElement(v.K,{className:"lr-c-catalog__header"},i().createElement(E.v,null,i().createElement(k.D,{className:"lr-c-catalog__header-bundle",headingLevel:"h2",size:"lg"},t)),i().createElement(E.v,null,i().createElement(k.D,{headingLevel:"h1",size:"2xl"},"Learning Resources")))};var y=a(86487),S=a(86050),N=a(65881);const x=({onSearchInputChange:e,quickStartsCount:t})=>i().createElement(y.a,{className:"pf-v5-u-pt-sm pf-v5-u-pb-sm lr-c-catalog__filter"},i().createElement(S.Z,{className:"pfext-quick-start-catalog-filter__input"},i().createElement(N.M,{placeholder:"Filter by keywords...",onChange:(t,a)=>e(a)})),i().createElement(S.Z,{className:"pf-v5-u-mr-md"},i().createElement(o.QuickStartCatalogFilterCountWrapper,{quickStartsCount:t})));var w=a(78711),C=a(47173),T=a(35373),D=a(28191),$=a(92298),F=a(44429),_=a(45023),P=a(79851),Z=a(34512),I=a(68774),H=a(68340),Q=a(93174),q=a(64227),A=a(33864),L=a(37582);const R=()=>i().createElement(m.J,{className:"lr-c-bookmark__icon"},i().createElement(L.ZP,null)),B=()=>i().createElement(m.J,{className:"lr-c-bookmark__icon"},i().createElement(A.ZP,null)),z=({quickStart:e,bookmarks:t,isActive:a,status:n})=>i().createElement("div",{className:"lr-c-quickstart_tile"},i().createElement(o.QuickStartTile,{action:null!==t?{"aria-label":t.isFavorite?`Remove quickstart ${e.spec.displayName} from bookmarks.`:`Bookmark quickstart ${e.spec.displayName}.`,icon:t.isFavorite?B:R,onClick:e=>{e.preventDefault(),e.stopPropagation(),t.setFavorite(!t.isFavorite)}}:void 0,quickStart:{...e,spec:{...e.spec,icon:null}},isActive:a,status:n})),O=({children:e,sectionTitle:t,sectionCount:a,isExpandable:r=!0,rightTitle:l,sectionName:o})=>{const[s,c]=(0,n.useState)(!!a);return r?i().createElement(T.L,{isExpanded:s,isIndented:!0,onToggle:()=>c((e=>!e)),className:"lr-c-catalog-section",id:o,toggleContent:i().createElement(P.P,null,i().createElement(Z.J,{isFilled:!0},i().createElement(k.D,{headingLevel:"h3",size:"lg"},t,i().createElement(w.C,{isRead:!a,className:"pf-u-ml-sm"},a))),i().createElement(Z.J,null,l))},e):i().createElement("div",{className:"lr-c-catalog-section",id:o},i().createElement(P.P,null,i().createElement(Z.J,{isFilled:!0},i().createElement(k.D,{headingLevel:"h3",size:"lg"},t,i().createElement(w.C,{className:"pf-u-ml-sm"},a))),i().createElement(Z.J,null,l)),e?i().createElement("div",{className:"lr-c-catalog-section__static"},e):null)},J=({sectionTitle:e,sectionDescription:t,sectionCount:a,sectionQuickStarts:n,isExpandable:r=!0,activeQuickStartID:l,allQuickStartStates:s,rightTitle:c,emptyBody:m,toggleFavorite:u,sectionName:d})=>{const p=(0,q.useFlag)("platform.learning-resources.bookmarks");return 0===a&&r?i().createElement(D.k,{alignItems:{default:"alignItemsCenter"},id:d,className:"lr-c-catalog-section"},i().createElement($.B,{className:"pf-v5-u-mr-sm"},i().createElement(C.zx,{className:"pf-c-expandable-section__toggle pf-v5-u-pl-0 pf-v5-u-pr-0",variant:"plain",isDisabled:!0,icon:i().createElement(Q.ZP,null)})),i().createElement($.B,null,i().createElement(Z.J,{isFilled:!0},i().createElement(k.D,{headingLevel:"h3",size:"lg"},e,i().createElement(w.C,{isRead:!1,className:"pf-u-ml-sm"},a))),i().createElement(Z.J,null,c))):i().createElement(O,{sectionName:d,sectionCount:a,sectionTitle:e,isExpandable:r,rightTitle:c},t&&i().createElement(I.D,{className:"pf-u-mb-md"},i().createElement(H.x,null,t)),a?i().createElement(F.r,{hasGutter:!0},n.map((e=>i().createElement(_.L,{key:e.metadata.name},i().createElement(z,{quickStart:e,bookmarks:p?{isFavorite:e.metadata.favorite,setFavorite:t=>u(e.metadata.name,t)}:null,isActive:e.metadata.name===l,status:(0,o.getQuickStartStatus)(s||{},e.metadata.name)}))))):m)};var U=a(37208),j=a(44364);const M=({defaultActive:e,linkItems:t})=>{const a=n.useRef(null),[i,r]=n.useState(e),l=n.useCallback((e=>{document.location.href=`${document.location.pathname}#${e}`,r(e)}),[r]);return n.useEffect((()=>{"IntersectionObserver"in window&&(()=>{const e=Array.from(document.querySelectorAll(".lr-c-catalog-section"))||[],t=new IntersectionObserver((e=>{const t=e.find((e=>e.isIntersecting));t&&r(t?.target?.id)}),{threshold:.5});Array.from(e).forEach((e=>{t.observe(e)}))})()}),[]),n.createElement("div",{ref:a},n.createElement(U.P,{isVertical:!0,label:"Jump to section"},t.map((({id:e,label:t})=>n.createElement(j.d,{key:e,onClick:()=>l(e),isActive:i===e},t)))))};var W=a(5527),V=a.n(W);const K="/api/quickstarts/v1",G="/quickstarts",Y="/favorites",X=(e,t)=>e.spec.displayName.localeCompare(t.spec.displayName),ee=({bundle:e})=>{const t=(0,l.Z)(),{activeQuickStartID:a,allQuickStartStates:r,setFilter:v,loading:k}=i().useContext(o.QuickStartContext),y=(0,q.useFlag)("platform.learning-resources.bookmarks"),[S,N]=(0,n.useState)(window.innerHeight),w=e||"settings",{contentReady:C,documentation:T,learningPaths:D,other:$,quickStarts:F,bookmarks:_,toggleFavorite:P}=(e=>{const t=(0,l.Z)(),{quickStarts:a}=t,[i,r]=(0,n.useState)(!1),[s,c]=(0,n.useState)([]),{allQuickStartStates:m,allQuickStarts:u=[],filter:d}=(0,n.useContext)(o.QuickStartContext),p=(0,n.useMemo)((()=>(0,o.filterQuickStarts)(u||[],d?.keyword||"",d?.status?.statusFilters,m||{}).sort(X).reduce(((e,t)=>{const a=function(e,t){return!!t.find((t=>t.quickstartName===e.metadata.name))}(t,s),n={...t,metadata:{...t.metadata,favorite:a}};return a&&e.bookmarks.push(n),t.metadata.externalDocumentation?e.documentation.push(n):t.metadata.otherResource?e.other.push(n):t.metadata.learningPath?e.learningPaths.push(n):e.quickStarts.push(n),e}),{documentation:[],quickStarts:[],other:[],learningPaths:[],bookmarks:[]})),[u,d,s]);async function g(e,a){const n=[...s],i=s.filter((t=>t.quickstartName!==e));a&&i.push({favorite:a,quickstartName:e}),c(i);const r=await t.auth.getUser();if(!r)throw new Error("User not logged in");const l=r.identity.internal?.account_id;try{await V().post(`${K}/${Y}?account=${l}`,{quickstartName:e,favorite:a})}catch(e){console.error("Failed to update favorites",e),c(n)}}return(0,n.useEffect)((()=>{!async function(){const n=await t.auth.getUser();if(!n)throw new Error("User not logged in");const i=n.identity.internal?.account_id,l=e?`${K}/${G}?bundle=${e}`:`${K}/${G}?account=${i}`,o=[V().get(l).then((({data:t})=>{e?a.set(`${e}`,t.data.map((({content:e})=>e))):a.set(`${i}`,t.data.map((({content:e})=>e)))})),i?V().get(`${K}/${Y}?account=${i}`).then((({data:e})=>e.data)):Promise.resolve([])],[,s]=await Promise.allSettled(o);"fulfilled"===s.status&&s.value&&c(s.value),r(!0)}()}),[e]),(0,n.useMemo)((()=>({...p,contentReady:i,toggleFavorite:g})),[p,i,g])})(w),[Z,I]=(0,n.useState)({count:_.length,perPage:20,page:1}),H=F.length+T.length+D.length+$.length;return t.updateDocumentTitle("Learning Resources"),(0,n.useEffect)((()=>{t.hideGlobalFilter(!0)}),[]),i().useLayoutEffect((()=>{function e(){N(window.innerHeight-(document.querySelector("header")?.getBoundingClientRect()?.height||0))}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),!C||k?i().createElement(o.LoadingBox,null):i().createElement(u.C,{id:"learning-resources-wrapper",style:{height:`${S}px`}},i().createElement(d.NP,{className:"pf-u-p-lg lr-c-catalog__header"},i().createElement(E.v,{className:"pf-u-mb-md"},i().createElement(b,null)),i().createElement(E.v,null,i().createElement(x,{quickStartsCount:H,onSearchInputChange:e=>{v("keyword",e)}}))),i().createElement(d.NP,{className:"pf-u-background-color-200 pf-m-fill"},i().createElement("div",{className:"pf-v5-u-h-100"},i().createElement(g.Y,{id:"content-wrapper",isPanelRight:!0,hasGutter:!0},i().createElement(f.T,{id:"quick-starts",className:"pf-u-background-color-200"},y&&i().createElement(i().Fragment,null,i().createElement(J,{sectionName:"bookmarks",toggleFavorite:P,sectionCount:_.length,emptyBody:i().createElement(c.u,{className:"lr-c-empty_bookmarks"},"No bookmarked resources yet. Click the"," ",i().createElement(m.J,{className:"lr-c-bookmark__icon"},i().createElement(L.ZP,null)),"icon to pin it to your bookmarks here."),sectionTitle:i().createElement("span",null,i().createElement(m.J,{className:"lr-c-bookmark__icon pf-v5-u-ml-sm pf-v5-u-pr-md"},i().createElement(A.ZP,null)),"Bookmarks"),rightTitle:i().createElement(p.t,{itemCount:_.length,perPage:Z.perPage,page:Z.page,onSetPage:(e,t)=>{I((e=>({...e,page:t})))},widgetId:"pagination-options-menu-top",onPerPageSelect:(e,t)=>I((e=>({...e,perPage:t}))),isCompact:!0}),isExpandable:!1,sectionQuickStarts:_.slice((Z.page-1)*Z.perPage,Z.page*(Z.perPage-1)+1),activeQuickStartID:a,allQuickStartStates:r}),i().createElement(s.i,{className:"pf-u-mt-lg pf-u-mb-lg"})),i().createElement(J,{sectionName:"documentation",toggleFavorite:P,sectionCount:T.length,sectionTitle:"Documentation",sectionDescription:"Technical information for using the service",sectionQuickStarts:T,activeQuickStartID:a,allQuickStartStates:r}),i().createElement(s.i,{className:"pf-u-mt-lg pf-u-mb-lg"}),i().createElement(J,{sectionName:"quick-starts",toggleFavorite:P,sectionCount:F.length,sectionTitle:"Quick starts",sectionDescription:"Step-by-step instructions and tasks",sectionQuickStarts:F,activeQuickStartID:a,allQuickStartStates:r}),i().createElement(s.i,{className:"pf-u-mt-lg pf-u-mb-lg"}),i().createElement(J,{sectionName:"learning-paths",toggleFavorite:P,sectionCount:D.length,sectionTitle:"Learning paths",sectionDescription:"Collections of learning materials contributing to a common use case",sectionQuickStarts:D,activeQuickStartID:a,allQuickStartStates:r}),i().createElement(s.i,{className:"pf-u-mt-lg pf-u-mb-lg"}),i().createElement(J,{sectionName:"other-content-types",toggleFavorite:P,sectionCount:$.length,sectionTitle:"Other content types",sectionDescription:"Tutorials, videos, e-books, and more to help you build your skills",sectionQuickStarts:$,activeQuickStartID:a,allQuickStartStates:r})),i().createElement(h.p,{variant:"sticky",className:"pf-u-background-color-200 pf-u-pl-lg pf-u-pl-0-on-lg"},i().createElement(M,{defaultActive:"bookmarks",linkItems:[{id:"bookmarks",label:`Bookmarks (${_.length})`},{id:"documentation",label:`Documentation (${T.length})`},{id:"quick-starts",label:`Quick starts (${F.length})`},{id:"learning-paths",label:`Learning paths (${D.length})`},{id:"other-content-types",label:`Other content types (${$.length})`}]}))))))},te=e=>i().createElement(ee,{...e}),ae=document.getElementById("root");ae&&(0,r.s)(ae).render(i().createElement((function(){return(0,n.useEffect)((()=>{ae?.setAttribute("data-ouia-safe","true")})),i().createElement(te,{bundle:"settings"})}),null))},45467:()=>{},11452:()=>{},58392:()=>{},34946:()=>{},32857:()=>{},10108:()=>{},28992:()=>{},30187:()=>{},81320:()=>{},88361:()=>{},90479:()=>{},78752:()=>{},44839:()=>{},74282:()=>{},67274:()=>{},8572:()=>{},98379:()=>{},92084:()=>{},46928:()=>{},1508:()=>{},43919:()=>{},66822:()=>{},22143:()=>{},314:()=>{},49854:()=>{},38299:()=>{},51934:()=>{},74181:()=>{},16166:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/186.009c753d1f898e92e966b07abab24e25.js.map