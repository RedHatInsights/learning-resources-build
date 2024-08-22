"use strict";(self.webpackChunklearningResources=self.webpackChunklearningResources||[]).push([[543,574],{9947:(e,t,n)=>{n.d(t,{u:()=>s});var i,o=n(5353),r=n(4065),a=n(8296),l=n(1203);!function(e){e.xs="xs",e.sm="sm",e.lg="lg",e.xl="xl",e.full="full"}(i||(i={}));const s=e=>{var{children:t,className:n,variant:s=i.full,isFullHeight:d}=e,c=(0,o.__rest)(e,["children","className","variant","isFullHeight"]);return r.createElement("div",Object.assign({className:(0,a.i)(l.Z.emptyState,"xs"===s&&l.Z.modifiers.xs,"sm"===s&&l.Z.modifiers.sm,"lg"===s&&l.Z.modifiers.lg,"xl"===s&&l.Z.modifiers.xl,d&&l.Z.modifiers.fullHeight,n)},c),r.createElement("div",{className:(0,a.i)(l.Z.emptyStateContent)},t))};s.displayName="EmptyState"},8340:(e,t,n)=>{n.d(t,{x:()=>d});var i,o=n(5353),r=n(4065),a=n(8296),l=n(2873),s=n(2472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(i||(i={}));const d=e=>{var{children:t=null,className:n="",component:c=i.p,isVisitedLink:p=!1,ouiaId:m,ouiaSafe:u=!0}=e,f=(0,o.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const g=c,h=(0,s.S$)(d.displayName,m,u);return r.createElement(g,Object.assign({},h,f,{"data-pf-content":!0,className:(0,a.i)(p&&c===i.a&&l.Z.modifiers.visited,n)}),t)};d.displayName="Text"},3342:(e,t,n)=>{n.d(t,{u:()=>f});var i,o=n(5353),r=n(4065),a=n(6478),l=n(8296),s=n(6641),d=n(5673),c=n(344),p=n(6481),m=n(9121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(i||(i={}));let u=1;const f=e=>{var{content:t,position:n="top",trigger:i="mouseenter focus",isVisible:f=!1,isContentLeftAligned:g=!1,enableFlip:h=!0,className:b="",entryDelay:y=300,exitDelay:v=300,appendTo:x=(()=>document.body),zIndex:E=9999,minWidth:w,maxWidth:S=p.Z.value,distance:H=15,aria:T="describedby",flipBehavior:N=["top","right","bottom","left","top","right","bottom"],id:O="pf-tooltip-"+u++,children:Z,animationDuration:k=300,triggerRef:$,"aria-live":_=($?"polite":"off"),onTooltipHidden:D=(()=>{})}=e,A=(0,o.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const j=i.includes("mouseenter"),F=i.includes("focus"),C=i.includes("click"),I="manual"===i,[L,R]=r.useState(!1),P=r.createRef();r.useEffect((()=>{f?B():V()}),[f]);const B=()=>{R(!0)},V=()=>{R(!1)},W={top:a.Z.modifiers.top,bottom:a.Z.modifiers.bottom,left:a.Z.modifiers.left,right:a.Z.modifiers.right,"top-start":a.Z.modifiers.topLeft,"top-end":a.Z.modifiers.topRight,"bottom-start":a.Z.modifiers.bottomLeft,"bottom-end":a.Z.modifiers.bottomRight,"left-start":a.Z.modifiers.leftTop,"left-end":a.Z.modifiers.leftBottom,"right-start":a.Z.modifiers.rightTop,"right-end":a.Z.modifiers.rightBottom},z=S!==p.Z.value,M=r.createElement("div",Object.assign({"aria-live":_,className:(0,l.i)(a.Z.tooltip,b),role:"tooltip",id:O,style:{maxWidth:z?S:null},ref:P},A),r.createElement(d.C,null),r.createElement(s._,{isLeftAligned:g},t));return r.createElement(m.r,{trigger:"none"!==T&&L?"describedby"===T&&Z&&Z.props&&!Z.props["aria-describedby"]?r.cloneElement(Z,{"aria-describedby":O}):"labelledby"===T&&Z.props&&!Z.props["aria-labelledby"]?r.cloneElement(Z,{"aria-labelledby":O}):Z:Z,triggerRef:$,popper:M,popperRef:P,minWidth:void 0!==w?w:"revert",appendTo:x,isVisible:L,positionModifiers:W,distance:H,placement:n,onMouseEnter:j&&B,onMouseLeave:j&&V,onPopperMouseEnter:j&&B,onPopperMouseLeave:j&&V,onFocus:F&&B,onBlur:F&&V,onDocumentClick:C&&((e,t)=>{L?V():e.target===t&&B()}),onDocumentKeyDown:I?null:e=>{I||e.key===c.yu.Escape&&L&&V()},onTriggerEnter:I?null:e=>{e.key===c.yu.Enter&&(L?V():B())},enableFlip:h,zIndex:E,flipBehavior:N,animationDuration:k,entryDelay:y,exitDelay:v,onHidden:D})};f.displayName="Tooltip"},4396:(e,t,n)=>{n.d(t,{FS:()=>r});var i=n(4065),o=n(164);class r extends i.Component{constructor(){super(...arguments),this.keyHandler=e=>{const{isEventFromContainer:t}=this.props;if(t?!t(e):!this._isEventFromContainer(e))return;const{isActiveElement:n,getFocusableElement:i,noVerticalArrowHandling:o,noHorizontalArrowHandling:r,noEnterHandling:a,noSpaceHandling:l,updateTabIndex:s,validSiblingTags:d,additionalKeyHandler:c,createNavigableElements:p,onlyTraverseSiblings:m}=this.props;c&&c(e);const u=p();if(!u)return void console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");const f=e.key;a||"Enter"===f&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),l||" "===f&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),((e,t,n=(e=>document.activeElement.contains(e)),i=(e=>e),o=["A","BUTTON","INPUT"],r=!1,a=!1,l=!0,s=!0)=>{const d=document.activeElement,c=e.key;let p=null;if(!r&&["ArrowUp","ArrowDown"].includes(c)){e.preventDefault(),e.stopImmediatePropagation();let o=-1;t.forEach(((e,r)=>{if(n(e)){let e=0;for(;!p&&e<t.length&&-1*e<t.length;)"ArrowUp"===c?e--:e++,o=r+e,o>=t.length&&(o=0),o<0&&(o=t.length-1),p=i(t[o])}}))}if(!a&&["ArrowLeft","ArrowRight"].includes(c)){e.preventDefault(),e.stopImmediatePropagation();let i=-1;t.forEach(((r,a)=>{if(n(r)){const n=t[a].querySelectorAll(o.join(","));if(!n.length||s){let e=d;for(;e;)if(e="ArrowLeft"===c?e.previousElementSibling:e.nextElementSibling,e&&o.includes(e.tagName)){p=e;break}}else n.forEach(((t,o)=>{e.target===t&&(i=o+("ArrowLeft"===c?-1:1),i>=n.length&&(i=0),i<0&&(i=n.length-1),p=n[i])}))}}))}p&&(l&&(d.tabIndex=-1,p.tabIndex=0),p.focus())})(e,u,n,i,d,o,r,s,m)},this._isEventFromContainer=e=>{const{containerRef:t}=this.props;return t.current&&t.current.contains(e.target)}}componentDidMount(){o.Nq&&window.addEventListener("keydown",this.keyHandler)}componentWillUnmount(){o.Nq&&window.removeEventListener("keydown",this.keyHandler)}render(){return null}}r.displayName="KeyboardHandler",r.defaultProps={containerRef:null,createNavigableElements:()=>null,isActiveElement:e=>document.activeElement===e,getFocusableElement:e=>e,validSiblingTags:["BUTTON","A"],onlyTraverseSiblings:!0,updateTabIndex:!0,noHorizontalArrowHandling:!1,noVerticalArrowHandling:!1,noEnterHandling:!1,noSpaceHandling:!1}},164:(e,t,n)=>{n.d(t,{Ds:()=>r,I_:()=>b,Ki:()=>o,Nq:()=>f,_6:()=>l,fi:()=>h,iu:()=>p,j9:()=>y,tJ:()=>a,wt:()=>d,x8:()=>s,xb:()=>c}),n(9834);var i=n(344);function o(e="pf"){return`${e}-${(new Date).getTime()+Math.random().toString(36).slice(2)}`}function r(e,t){let n;return(...i)=>{clearTimeout(n),n=setTimeout((()=>e.apply(this,i)),t)}}function a(e,t){return e.replace(/\${(.*?)}/g,((e,n)=>t[n]||""))}function l(e,t,n){return n||(n=`${t}s`),`${e||0} ${1===e?t:n}`}const s=(e,t)=>Object.entries(e||{}).reduce(((e,[n,i])=>"default"===n?Object.assign(Object.assign({},e),{[t]:i}):Object.assign(Object.assign({},e),{[`${t}-on-${n}`]:i})),{}),d=(e,t,n="",i,o)=>{if(!e)return"";if(i&&!o){if(i in e)return t.modifiers[u(`${n}${e[i]}`)];const o=["2xl","xl","lg","md","sm","default"];for(let r=o.indexOf(i);r<o.length;r++)if(o[r]in e)return t.modifiers[u(`${n}${e[o[r]]}`)];return""}return Object.entries(e||{}).map((([e,t])=>`${n}${t}${"default"!==e?`-on-${e}`:""}${o&&"default"!==e?"-height":""}`)).map(u).map((e=>e.replace(/-?(\dxl)/gi,((e,t)=>`_${t}`)))).map((e=>t.modifiers[e])).filter(Boolean).join(" ")},c=e=>null===e?null:e>=i.pr["2xl"]?"2xl":e>=i.pr.xl?"xl":e>=i.pr.lg?"lg":e>=i.pr.md?"md":e>=i.pr.sm?"sm":"default",p=e=>null===e?null:e>=i.H_["2xl"]?"2xl":e>=i.H_.xl?"xl":e>=i.H_.lg?"lg":e>=i.H_.md?"md":e>=i.H_.sm?"sm":"default",m=e=>e.toUpperCase().replace("-","").replace("_",""),u=e=>e.replace(/([-_][a-z])/gi,m),f=!("undefined"==typeof window||!window.document||!window.document.createElement),g=(e,t)=>{const n=getComputedStyle(t),i=document.createElement("canvas").getContext("2d");return i.font=n.font||(()=>{let e="";const t={"50%":"ultra-condensed","62.5%":"extra-condensed","75%":"condensed","87.5%":"semi-condensed","100%":"normal","112.5%":"semi-expanded","125%":"expanded","150%":"extra-expanded","200%":"ultra-expanded"};let i;return i=n.fontStretch in t?t[n.fontStretch]:"normal",e=n.fontStyle+" "+n.fontVariant+" "+n.fontWeight+" "+i+" "+n.fontSize+"/"+n.lineHeight+" "+n.fontFamily,e})(),i.measureText(e).width},h=(e,t)=>{const n=(e=>{const t=getComputedStyle(e);let n=e.clientWidth,i=e.clientHeight;return i-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),{height:i,width:n}})(e).width;let i=t;if(g(t,e)>n){for(;g(`...${i}`,e)>n;)i=i.substring(1);e.value?e.value=`...${i}`:e.innerText=`...${i}`}else e.value?e.value=t:e.innerText=t},b=e=>{e.forEach((e=>{e.current&&clearTimeout(e.current)}))},y=(e,t="ltr")=>{if(!e)return t;const n=getComputedStyle(e).getPropertyValue("direction");return["ltr","rtl"].includes(n)?n:t}},745:(e,t,n)=>{var i=n(9834);t.s=i.createRoot,i.hydrateRoot},5353:(e,t,n)=>{function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}n.d(t,{__rest:()=>i}),Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);
//# sourceMappingURL=../sourcemaps/543.87584f683f2f5add3618d12588d07177.js.map