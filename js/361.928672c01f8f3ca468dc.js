"use strict";(self.webpackChunklearningResources=self.webpackChunklearningResources||[]).push([[361],{7208:(e,t,a)=>{a.d(t,{P:()=>u});var i=a(5353),n=a(2747),l=a(8296),s=a(1315),o=a(9566),r=a(4364),d=a(6749),p=a(164),m=a(6796),c=a(3174);const g="--pf-v5-c-jump-links__toggle--Display",f=(e,t)=>(n.Children.forEach(e,(e=>{if(p.Nq&&document.getElementById&&document.querySelector&&e.type===r.d){const a=e.props.node||e.props.href;"string"==typeof a?a.startsWith("#")?t.push(document.getElementById(a.substr(1))):t.push(document.querySelector(a)):a instanceof HTMLElement&&t.push(a)}[n.Fragment,d.U,r.d].includes(e.type)&&f(e.props.children,t)})),t),u=e=>{var{isCentered:t,isVertical:a,children:u,label:h,"aria-label":v=("string"==typeof h?h:null),scrollableSelector:b,activeIndex:w=0,offset:_=0,expandable:x,isExpanded:k=!1,alwaysShowLabel:P=!0,toggleAriaLabel:O="Toggle jump links",className:y}=e,L=(0,i.__rest)(e,["isCentered","isVertical","children","label","aria-label","scrollableSelector","activeIndex","offset","expandable","isExpanded","alwaysShowLabel","toggleAriaLabel","className"]);const N=Boolean(b),[S,E]=n.useState(N?f(u,[]):[]),[C,T]=n.useState(w),[I,Z]=n.useState(k),M=n.useRef(!1);n.useEffect((()=>Z(k)),[k]);const A=n.useRef();let j;const B=n.useCallback((()=>{if(!(p.Nq&&N&&j instanceof HTMLElement))return;if(M.current)return void(M.current=!1);const e=Math.ceil(j.scrollTop+_);window.requestAnimationFrame((()=>{let t=S;(t.every((e=>!(null==e?void 0:e.offsetTop)))||!t[0]||t.includes(null))&&(t=f(u,[]),E(t));const a=t.map(((e,t)=>({y:e?e.offsetTop:null,index:t}))).filter((({y:e})=>null!==e)).sort(((e,t)=>t.y-e.y));for(const{y:t,index:i}of a)if(e>=t)return T(i)}))}),[S,N,j,_]);n.useEffect((()=>{if(j=document.querySelector(b),j instanceof HTMLElement)return j.addEventListener("scroll",B),()=>j.removeEventListener("scroll",B)}),[b,B]),n.useEffect((()=>{B()}),[]);let D=0;const F=e=>N?n.Children.map(e,(t=>{if(t.type===r.d){const{onClick:a,isActive:i}=t.props,l=D++,r=S[l];return n.cloneElement(t,{onClick(t){let i;M.current=!0,r||(i=f(e,[]),E(i));const n=r||i[l];if(n){const e=document.querySelector(b);if(e instanceof HTMLElement){if((d=A.current)&&getComputedStyle(d).getPropertyValue(g).includes("block")){A.current&&A.current.classList.remove(s.Z.modifiers.expanded);let e=A.current&&A.current.parentElement;for(;e&&!e.classList.contains(o.Z.modifiers.sticky);)e=e.parentElement;Z(!1),e&&(_+=e.scrollHeight)}e.scrollTo(0,n.offsetTop-_)}n.focus(),window.history.pushState("","",t.currentTarget.href),t.preventDefault(),T(l)}var d;a&&a(t)},isActive:i||C===l,children:F(t.props.children)})}return t.type===n.Fragment?F(t.props.children):t.type===d.U?n.cloneElement(t,{children:F(t.props.children)}):t})):e;return n.createElement("nav",Object.assign({className:(0,l.i)(s.Z.jumpLinks,t&&s.Z.modifiers.center,a&&s.Z.modifiers.vertical,(0,p.wt)(x,s.Z),I&&s.Z.modifiers.expanded,y),"aria-label":v,ref:A},L),n.createElement("div",{className:s.Z.jumpLinksMain},n.createElement("div",{className:(0,l.i)("pf-v5-c-jump-links__header")},x&&n.createElement("div",{className:s.Z.jumpLinksToggle},n.createElement(m.zx,{variant:"plain",onClick:()=>Z(!I),"aria-label":O,"aria-expanded":I},n.createElement("span",{className:s.Z.jumpLinksToggleIcon},n.createElement(c.ZP,null)),h&&n.createElement("span",{className:(0,l.i)(s.Z.jumpLinksToggleText)}," ",h," "))),h&&P&&n.createElement("div",{className:(0,l.i)(s.Z.jumpLinksLabel)},h)),n.createElement("ul",{className:s.Z.jumpLinksList,role:"list"},F(u))))};u.displayName="JumpLinks"},4364:(e,t,a)=>{a.d(t,{d:()=>r});var i=a(5353),n=a(2747),l=a(8296),s=a(1315),o=a(6749);const r=e=>{var{isActive:t,href:a,node:r,children:d,onClick:p,className:m}=e,c=(0,i.__rest)(e,["isActive","href","node","children","onClick","className"]);const g=n.Children.toArray(d),f=g.filter((e=>e.type===o.U));return d=g.filter((e=>e.type!==o.U)),n.createElement("li",Object.assign({className:(0,l.i)(s.Z.jumpLinksItem,t&&s.Z.modifiers.current,m)},t&&{"aria-current":"location"},c),n.createElement("a",{className:s.Z.jumpLinksLink,href:a,onClick:p},n.createElement("span",{className:s.Z.jumpLinksLinkText},d)),f)};r.displayName="JumpLinksItem"},6749:(e,t,a)=>{a.d(t,{U:()=>o});var i=a(5353),n=a(2747),l=a(8296),s=a(1315);const o=e=>{var{children:t,className:a}=e,o=(0,i.__rest)(e,["children","className"]);return n.createElement("ul",Object.assign({className:(0,l.i)(s.Z.jumpLinksList,a),role:"list"},o),t)};o.displayName="JumpLinksList"},4277:(e,t,a)=>{a.d(t,{C:()=>d});var i=a(5353),n=a(2747),l=a(8296),s=a(1145),o=a(164),r=a(1495);const d=e=>{var{className:t="",children:a,stickyOnBreakpoint:d,hasShadowTop:p=!1,hasShadowBottom:m=!1,hasOverflowScroll:c=!1,"aria-label":g}=e,f=(0,i.__rest)(e,["className","children","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:u,getVerticalBreakpoint:h}=n.useContext(r.z1);return n.useEffect((()=>{c&&!g&&console.warn("PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[c,g]),n.createElement("div",Object.assign({},f,{className:(0,l.i)(s.Z.pageMainGroup,(0,o.wt)(d,s.Z,"sticky-",h(u),!0),p&&s.Z.modifiers.shadowTop,m&&s.Z.modifiers.shadowBottom,c&&s.Z.modifiers.overflowScroll,t)},c&&{tabIndex:0,role:"region","aria-label":g}),a)};d.displayName="PageGroup"},2045:(e,t,a)=>{a.d(t,{NP:()=>g});var i,n,l=a(5353),s=a(2747),o=a(1145),r=a(8296),d=a(164),p=a(1495);!function(e){e.default="default",e.light="light",e.dark="dark",e.darker="darker"}(i||(i={})),function(e){e.default="default",e.nav="nav",e.subNav="subnav",e.breadcrumb="breadcrumb",e.tabs="tabs",e.wizard="wizard"}(n||(n={}));const m={[n.default]:o.Z.pageMainSection,[n.nav]:o.Z.pageMainNav,[n.subNav]:o.Z.pageMainSubnav,[n.breadcrumb]:o.Z.pageMainBreadcrumb,[n.tabs]:o.Z.pageMainTabs,[n.wizard]:o.Z.pageMainWizard},c={[i.default]:"",[i.light]:o.Z.modifiers.light,[i.dark]:o.Z.modifiers.dark_200,[i.darker]:o.Z.modifiers.dark_100},g=e=>{var{className:t="",children:a,variant:i="default",type:g="default",padding:f,isFilled:u,isWidthLimited:h=!1,isCenterAligned:v=!1,stickyOnBreakpoint:b,hasShadowTop:w=!1,hasShadowBottom:_=!1,hasOverflowScroll:x=!1,"aria-label":k,component:P="section"}=e,O=(0,l.__rest)(e,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:y,getVerticalBreakpoint:L}=s.useContext(p.z1);s.useEffect((()=>{x&&!k&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[x,k]);const N=P;return s.createElement(N,Object.assign({},O,{className:(0,r.i)(m[g],(0,d.wt)(f,o.Z),(0,d.wt)(b,o.Z,"sticky-",L(y),!0),c[i],!1===u&&o.Z.modifiers.noFill,!0===u&&o.Z.modifiers.fill,h&&o.Z.modifiers.limitWidth,h&&v&&g!==n.subNav&&o.Z.modifiers.alignCenter,w&&o.Z.modifiers.shadowTop,_&&o.Z.modifiers.shadowBottom,x&&o.Z.modifiers.overflowScroll,t)},x&&{tabIndex:0},{"aria-label":k}),h&&s.createElement("div",{className:(0,r.i)(o.Z.pageMainBody)},a),!h&&a)};g.displayName="PageSection"},1494:(e,t,a)=>{a.d(t,{t:()=>E});var i=a(5353),n=a(2747);const l=({firstIndex:e=0,lastIndex:t=0,itemCount:a=0,itemsTitle:i="items",ofWord:l="of"})=>n.createElement(n.Fragment,null,n.createElement("b",null,e," - ",t)," ",l," ",n.createElement("b",null,a)," ",i);l.displayName="ToggleTemplate",a(6928);const s={button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",formControl:"pf-v5-c-form-control",menuToggle:"pf-v5-c-menu-toggle",modifiers:{bottom:"pf-m-bottom",static:"pf-m-static",first:"pf-m-first",last:"pf-m-last",sticky:"pf-m-sticky",compact:"pf-m-compact",pageInsets:"pf-m-page-insets",displaySummary:"pf-m-display-summary",displayFull:"pf-m-display-full",insetNone:"pf-m-inset-none",insetSm:"pf-m-inset-sm",insetMd:"pf-m-inset-md",insetLg:"pf-m-inset-lg",insetXl:"pf-m-inset-xl",inset_2xl:"pf-m-inset-2xl",displaySummaryOnSm:"pf-m-display-summary-on-sm",displayFullOnSm:"pf-m-display-full-on-sm",insetNoneOnSm:"pf-m-inset-none-on-sm",insetSmOnSm:"pf-m-inset-sm-on-sm",insetMdOnSm:"pf-m-inset-md-on-sm",insetLgOnSm:"pf-m-inset-lg-on-sm",insetXlOnSm:"pf-m-inset-xl-on-sm",inset_2xlOnSm:"pf-m-inset-2xl-on-sm",displaySummaryOnMd:"pf-m-display-summary-on-md",displayFullOnMd:"pf-m-display-full-on-md",insetNoneOnMd:"pf-m-inset-none-on-md",insetSmOnMd:"pf-m-inset-sm-on-md",insetMdOnMd:"pf-m-inset-md-on-md",insetLgOnMd:"pf-m-inset-lg-on-md",insetXlOnMd:"pf-m-inset-xl-on-md",inset_2xlOnMd:"pf-m-inset-2xl-on-md",displaySummaryOnLg:"pf-m-display-summary-on-lg",displayFullOnLg:"pf-m-display-full-on-lg",insetNoneOnLg:"pf-m-inset-none-on-lg",insetSmOnLg:"pf-m-inset-sm-on-lg",insetMdOnLg:"pf-m-inset-md-on-lg",insetLgOnLg:"pf-m-inset-lg-on-lg",insetXlOnLg:"pf-m-inset-xl-on-lg",inset_2xlOnLg:"pf-m-inset-2xl-on-lg",displaySummaryOnXl:"pf-m-display-summary-on-xl",displayFullOnXl:"pf-m-display-full-on-xl",insetNoneOnXl:"pf-m-inset-none-on-xl",insetSmOnXl:"pf-m-inset-sm-on-xl",insetMdOnXl:"pf-m-inset-md-on-xl",insetLgOnXl:"pf-m-inset-lg-on-xl",insetXlOnXl:"pf-m-inset-xl-on-xl",inset_2xlOnXl:"pf-m-inset-2xl-on-xl",displaySummaryOn_2xl:"pf-m-display-summary-on-2xl",displayFullOn_2xl:"pf-m-display-full-on-2xl",insetNoneOn_2xl:"pf-m-inset-none-on-2xl",insetSmOn_2xl:"pf-m-inset-sm-on-2xl",insetMdOn_2xl:"pf-m-inset-md-on-2xl",insetLgOn_2xl:"pf-m-inset-lg-on-2xl",insetXlOn_2xl:"pf-m-inset-xl-on-2xl",inset_2xlOn_2xl:"pf-m-inset-2xl-on-2xl"},pagination:"pf-v5-c-pagination",paginationNav:"pf-v5-c-pagination__nav",paginationNavControl:"pf-v5-c-pagination__nav-control",paginationNavPageSelect:"pf-v5-c-pagination__nav-page-select",paginationTotalItems:"pf-v5-c-pagination__total-items",themeDark:"pf-v5-theme-dark"};var o=a(8296),r=a(164),d=a(1973),p=a(400);const m=(0,p.I)({name:"AngleDoubleLeftIcon",height:512,width:448,svgPath:"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z",yOffset:0,xOffset:0});var c=a(3174);const g=(0,p.I)({name:"AngleDoubleRightIcon",height:512,width:448,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z",yOffset:0,xOffset:0});var f=a(6796),u=a(2607),h=a(1774);class v extends n.Component{constructor(e){super(e),this.handleNewPage=(e,t)=>{const{perPage:a,onSetPage:i}=this.props;return i(e,t,a,(t-1)*a,t*a)},this.state={userInputPage:this.props.page}}static parseInteger(e,t){let a=Number.parseInt(e,10);return Number.isNaN(a)||(a=a>t?t:a,a=a<1?1:a),a}onChange(e,t){const a=v.parseInteger(e.currentTarget.value,t);this.setState({userInputPage:Number.isNaN(a)?e.currentTarget.value:a})}onKeyDown(e,t,a,i){if(e.key===h.yu.Enter){const n=v.parseInteger(this.state.userInputPage,a);i(e,Number.isNaN(n)?t:n),this.handleNewPage(e,Number.isNaN(n)?t:n)}else/^\d*$/.test(e.key)||["Tab","Backspace","Delete","ArrowLeft","ArrowRight","Home","End","ArrowUp","ArrowDown"].includes(e.key)||e.preventDefault()}componentDidUpdate(e){this.props.page!==e.page&&this.props.page<=this.props.lastPage&&this.state.userInputPage!==this.props.page&&this.setState({userInputPage:this.props.page})}render(){const e=this.props,{page:t,perPage:a,onSetPage:l,isDisabled:p,itemCount:h,lastPage:v,firstPage:b,pagesTitle:w,pagesTitlePlural:_,toLastPageAriaLabel:x,toNextPageAriaLabel:k,toFirstPageAriaLabel:P,toPreviousPageAriaLabel:O,currPageAriaLabel:y,paginationAriaLabel:L,ofWord:N,onNextClick:S,onPreviousClick:E,onFirstClick:C,onLastClick:T,onPageInput:I,className:Z,isCompact:M}=e,A=(0,i.__rest)(e,["page","perPage","onSetPage","isDisabled","itemCount","lastPage","firstPage","pagesTitle","pagesTitlePlural","toLastPageAriaLabel","toNextPageAriaLabel","toFirstPageAriaLabel","toPreviousPageAriaLabel","currPageAriaLabel","paginationAriaLabel","ofWord","onNextClick","onPreviousClick","onFirstClick","onLastClick","onPageInput","className","isCompact"]),{userInputPage:j}=this.state;return n.createElement("nav",Object.assign({className:(0,o.i)(s.paginationNav,Z),"aria-label":L},A),!M&&n.createElement("div",{className:(0,o.i)(s.paginationNavControl,s.modifiers.first)},n.createElement(f.zx,{variant:f.Wu.plain,isDisabled:p||t===b||0===t,"aria-label":P,"data-action":"first",onClick:e=>{C(e,1),this.handleNewPage(e,1),this.setState({userInputPage:1})}},n.createElement(m,null))),n.createElement("div",{className:s.paginationNavControl},n.createElement(f.zx,{variant:f.Wu.plain,isDisabled:p||t===b||0===t,"data-action":"previous",onClick:e=>{const a=t-1>=1?t-1:1;E(e,a),this.handleNewPage(e,a),this.setState({userInputPage:a})},"aria-label":O},n.createElement(d.ZP,null))),!M&&n.createElement("div",{className:s.paginationNavPageSelect},n.createElement(u.oi,{"aria-label":y,type:"number",isDisabled:p||h&&t===b&&t===v&&h>=0||0===t,min:v<=0&&b<=0?0:1,max:v,value:j,onKeyDown:e=>this.onKeyDown(e,t,v,I),onChange:e=>this.onChange(e,v)}),(h||0===h)&&n.createElement("span",{"aria-hidden":"true"},N," ",w?(0,r._6)(v,w,_):v)),n.createElement("div",{className:s.paginationNavControl},n.createElement(f.zx,{variant:f.Wu.plain,isDisabled:p||t===v,"aria-label":k,"data-action":"next",onClick:e=>{const a=t+1<=v?t+1:v;S(e,a),this.handleNewPage(e,a),this.setState({userInputPage:a})}},n.createElement(c.ZP,null))),!M&&n.createElement("div",{className:(0,o.i)(s.paginationNavControl,s.modifiers.last)},n.createElement(f.zx,{variant:f.Wu.plain,isDisabled:p||t===v,"aria-label":x,"data-action":"last",onClick:e=>{T(e,v),this.handleNewPage(e,v),this.setState({userInputPage:v})}},n.createElement(g,null))))}}v.displayName="Navigation",v.defaultProps={className:"",isDisabled:!1,isCompact:!1,lastPage:0,firstPage:0,pagesTitle:"",pagesTitlePlural:"",toLastPageAriaLabel:"Go to last page",toNextPageAriaLabel:"Go to next page",toFirstPageAriaLabel:"Go to first page",toPreviousPageAriaLabel:"Go to previous page",currPageAriaLabel:"Current page",paginationAriaLabel:"Pagination",ofWord:"of",onNextClick:()=>{},onPreviousClick:()=>{},onFirstClick:()=>{},onLastClick:()=>{},onPageInput:()=>{}};var b=a(8021),w=a(8333),_=a(6726),x=a(6820),k=a(3364),P=a(9121);const O=({className:e,widgetId:t,page:a,itemCount:i,isDisabled:s=!1,minWidth:d,dropDirection:p="down",perPageOptions:m=[],itemsPerPageTitle:c="Items per page",perPageSuffix:g="per page",optionsToggleAriaLabel:f,ofWord:u="of",perPage:h=0,firstIndex:v=0,lastIndex:O=0,isLastFullPageShown:y=!1,itemsTitle:L="items",toggleTemplate:N,onPerPageSelect:S=(()=>null)})=>{const[E,C]=n.useState(!1),T=n.useRef(null),I=n.useRef(null),Z=n.useRef(null);n.useEffect((()=>{const e=e=>{var t,a,i;(E&&(null===(t=I.current)||void 0===t?void 0:t.contains(e.target))||(null===(a=T.current)||void 0===a?void 0:a.contains(e.target)))&&("Escape"!==e.key&&"Tab"!==e.key||(C(!1),null===(i=T.current)||void 0===i||i.focus()))},t=e=>{var t,a,i;0===e.detail&&E&&(null===(t=T.current)||void 0===t?void 0:t.contains(e.target))&&setTimeout((()=>{var e;const t=null===(e=null==I?void 0:I.current)||void 0===e?void 0:e.querySelector("li button:not(:disabled)");t&&t.focus()}),0),!E||(null===(a=null==T?void 0:T.current)||void 0===a?void 0:a.contains(e.target))||(null===(i=I.current)||void 0===i?void 0:i.contains(e.target))||C(!1)};return window.addEventListener("keydown",e),window.addEventListener("click",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("click",t)}}),[E,I]);const M=n.createElement(k.O,Object.assign({ref:T,onClick:()=>{C((e=>!e))}},f&&{"aria-label":f},{isDisabled:s||i&&i<=0,isExpanded:E},t&&{id:`${t}-toggle`},{variant:"plainText","aria-haspopup":"listbox"}),N&&"string"==typeof N&&(0,r.tJ)(N,{firstIndex:v,lastIndex:O,ofWord:u,itemCount:i,itemsTitle:L}),N&&"string"!=typeof N&&N({firstIndex:v,lastIndex:O,ofWord:u,itemCount:i,itemsTitle:L}),!N&&n.createElement(l,{firstIndex:v,lastIndex:O,ofWord:u,itemCount:i,itemsTitle:L})),A=n.createElement(w.v,{className:(0,o.i)(e),onSelect:()=>{var e;C((e=>!e)),null===(e=T.current)||void 0===e||e.focus()},ref:I},n.createElement(_.D,null,n.createElement(x.q,null,m.map((({value:e,title:t})=>n.createElement(b.s,{key:e,"data-action":`per-page-${e}`,isSelected:h===e,onClick:t=>((e,t)=>{let n=a;for(;Math.ceil(i/t)<n;)n--;if(y&&i/t!==n)for(;n>1&&i-t*n<0;)n--;return S(e,t,n,(n-1)*t,n*t)})(t,e)},t,` ${g}`))))));return n.createElement("div",{ref:Z},n.createElement(P.rD,{trigger:M,triggerRef:T,popper:A,popperRef:I,isVisible:E,direction:p,appendTo:Z.current||void 0,minWidth:void 0!==d?d:"revert"}))};O.displayName="PaginationOptionsMenu";var y=a(2472);const L="--pf-v5-c-pagination__nav-page-select--c-form-control--width-chars";var N;!function(e){e.bottom="bottom",e.top="top"}(N||(N={}));const S=[{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],E=e=>{var{children:t,className:a="",variant:d=N.top,isDisabled:p=!1,isCompact:m=!1,isSticky:c=!1,isStatic:g=!1,dropDirection:f,toggleTemplate:u,perPage:h=S[0].value,titles:b={items:"",page:"",pages:"",itemsPerPage:"Items per page",perPageSuffix:"per page",toFirstPageAriaLabel:"Go to first page",toPreviousPageAriaLabel:"Go to previous page",toLastPageAriaLabel:"Go to last page",toNextPageAriaLabel:"Go to next page",optionsToggleAriaLabel:"",currPageAriaLabel:"Current page",paginationAriaLabel:"Pagination",ofWord:"of"},firstPage:w=1,page:_=1,offset:x=null,isLastFullPageShown:k=!1,itemsStart:P=null,itemsEnd:C=null,itemCount:T,perPageOptions:I=S,widgetId:Z="options-menu",onSetPage:M=(()=>{}),onPerPageSelect:A=(()=>{}),onFirstClick:j=(()=>{}),onPreviousClick:B=(()=>{}),onNextClick:D=(()=>{}),onPageInput:F=(()=>{}),onLastClick:W=(()=>{}),ouiaId:X,ouiaSafe:H=!0,usePageInsets:z,inset:G}=e,R=(0,i.__rest)(e,["children","className","variant","isDisabled","isCompact","isSticky","isStatic","dropDirection","toggleTemplate","perPage","titles","firstPage","page","offset","isLastFullPageShown","itemsStart","itemsEnd","itemCount","perPageOptions","widgetId","onSetPage","onPerPageSelect","onFirstClick","onPreviousClick","onNextClick","onPageInput","onLastClick","ouiaId","ouiaSafe","usePageInsets","inset"]);const V=n.useRef(null),q=()=>T||0===T?Math.ceil(T/h)||0:U+1;n.useEffect((()=>{const e=V.current;((e,t)=>{if(!t)return;const a=String(e).length;a>=3?t.style.setProperty(L,`${a}`):t.style.setProperty(L,"2")})(q(),e)}),[h,T]);const $=f||("bottom"!==d||g?"down":"up");let U=_;null!==x&&(P=x+1,U=Math.max(Math.ceil(P/h),1),C=x+h);const J=q();let K=(U-1)*h+1,Y=U*h;(T||0===T)&&(K=T<=0?0:(U-1)*h+1,U<w&&T>0?U=w:U>J&&(U=J),T>=0&&(Y=U===J||0===T?T:U*h));const Q={firstIndex:K,lastIndex:Y,itemCount:T,itemsTitle:b.items,ofWord:b.ofWord};return n.createElement("div",Object.assign({ref:V,className:(0,o.i)(s.pagination,d===N.bottom&&s.modifiers.bottom,z&&s.modifiers.pageInsets,(0,r.wt)(G,s),m&&s.modifiers.compact,g&&s.modifiers.static,c&&s.modifiers.sticky,a)},Z&&{id:`${Z}-${d}-pagination`},(0,y.S$)(E.displayName,X,H,d),R),d===N.top&&n.createElement("div",{className:(0,o.i)(s.paginationTotalItems)},u&&"string"==typeof u&&(0,r.tJ)(u,Q),u&&"string"!=typeof u&&u(Q),!u&&n.createElement(l,{firstIndex:K,lastIndex:Y,itemCount:T,itemsTitle:b.items,ofWord:b.ofWord})),I&&I.length>0&&n.createElement(O,{itemsPerPageTitle:b.itemsPerPage,perPageSuffix:b.perPageSuffix,itemsTitle:m?"":b.items,optionsToggleAriaLabel:b.optionsToggleAriaLabel,perPageOptions:I,firstIndex:null!==P?P:K,lastIndex:null!==C?C:Y,ofWord:b.ofWord,isLastFullPageShown:k,itemCount:T,page:U,perPage:h,lastPage:J,onPerPageSelect:A,dropDirection:$,widgetId:`${Z}-${d}`,toggleTemplate:u,isDisabled:p}),n.createElement(v,{pagesTitle:b.page,pagesTitlePlural:b.pages,toLastPageAriaLabel:b.toLastPageAriaLabel,toPreviousPageAriaLabel:b.toPreviousPageAriaLabel,toNextPageAriaLabel:b.toNextPageAriaLabel,toFirstPageAriaLabel:b.toFirstPageAriaLabel,currPageAriaLabel:b.currPageAriaLabel,paginationAriaLabel:b.paginationAriaLabel,ofWord:b.ofWord,page:T&&T<=0?0:U,perPage:h,itemCount:T,firstPage:null!==P?P:1,lastPage:J,onSetPage:M,onFirstClick:j,onPreviousClick:B,onNextClick:D,onLastClick:W,onPageInput:F,isDisabled:p,isCompact:m}),t)};E.displayName="Pagination"},2884:(e,t,a)=>{a.d(t,{Y:()=>o});var i=a(5353),n=a(2747),l=a(8296),s=a(9566);const o=e=>{var{className:t,children:a,orientation:o,isPanelRight:r=!1,hasGutter:d,hasNoBackground:p,hasBorder:m}=e,c=(0,i.__rest)(e,["className","children","orientation","isPanelRight","hasGutter","hasNoBackground","hasBorder"]);return n.createElement("div",Object.assign({className:(0,l.i)(s.Z.sidebar,d&&s.Z.modifiers.gutter,p&&s.Z.modifiers.noBackground,r&&s.Z.modifiers.panelRight,s.Z.modifiers[o],t)},c),n.createElement("div",{className:(0,l.i)(s.Z.sidebarMain,m&&s.Z.modifiers.border)},a))};o.displayName="Sidebar"},7544:(e,t,a)=>{a.d(t,{T:()=>o});var i=a(5353),n=a(2747),l=a(8296),s=a(9566);const o=e=>{var{className:t,children:a,hasNoBackground:o,hasPadding:r}=e,d=(0,i.__rest)(e,["className","children","hasNoBackground","hasPadding"]);return n.createElement("div",Object.assign({className:(0,l.i)(s.Z.sidebarContent,o&&s.Z.modifiers.noBackground,r&&s.Z.modifiers.padding,t)},d),a)};o.displayName="SidebarContent"},660:(e,t,a)=>{a.d(t,{p:()=>d});var i,n=a(5353),l=a(2747),s=a(8296),o=a(9566),r=a(164);!function(e){e.default="default",e.width25="width_25",e.width33="width_33",e.width50="width_50",e.width66="width_66",e.width75="width_75",e.width100="width_100"}(i||(i={}));const d=e=>{var{className:t,children:a,variant:i="default",hasNoBackground:d,hasPadding:p,width:m}=e,c=(0,n.__rest)(e,["className","children","variant","hasNoBackground","hasPadding","width"]);return l.createElement("div",Object.assign({className:(0,s.i)(o.Z.sidebarPanel,"default"!==i&&o.Z.modifiers[i],d&&o.Z.modifiers.noBackground,p&&o.Z.modifiers.padding,(0,r.wt)(m,o.Z),t)},c),a)};d.displayName="SidebarPanel"},8774:(e,t,a)=>{a.d(t,{D:()=>o});var i=a(5353),n=a(2747),l=a(2873),s=a(8296);const o=e=>{var{children:t,className:a="",isVisited:o=!1}=e,r=(0,i.__rest)(e,["children","className","isVisited"]);return n.createElement("div",Object.assign({},r,{className:(0,s.i)(l.Z.content,o&&l.Z.modifiers.visited,a)}),t)};o.displayName="TextContent"},6487:(e,t,a)=>{a.d(t,{a:()=>o});var i=a(5353),n=a(2747),l=a(8296);a(4181);const s="pf-m-gutter",o=e=>{var{hasGutter:t,className:a="",children:o=null}=e,r=(0,i.__rest)(e,["hasGutter","className","children"]);return n.createElement("div",Object.assign({},r,{className:(0,l.i)("pf-v5-l-level",t&&s,a)}),o)};o.displayName="Level"},6050:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(5353),n=a(2747);const l=e=>{var{children:t=null}=e,a=(0,i.__rest)(e,["children"]);return n.createElement("div",Object.assign({},a),t)};l.displayName="LevelItem"},9851:(e,t,a)=>{a.d(t,{P:()=>o});var i=a(5353),n=a(2747),l=a(9059),s=a(8296);const o=e=>{var{hasGutter:t=!1,isWrappable:a=!1,className:o="",children:r=null,component:d="div"}=e,p=(0,i.__rest)(e,["hasGutter","isWrappable","className","children","component"]);const m=d;return n.createElement(m,Object.assign({},p,{className:(0,s.i)(l.Z.split,t&&l.Z.modifiers.gutter,a&&l.Z.modifiers.wrap,o)}),r)};o.displayName="Split"},4512:(e,t,a)=>{a.d(t,{J:()=>o});var i=a(5353),n=a(2747),l=a(9059),s=a(8296);const o=e=>{var{isFilled:t=!1,className:a="",children:o=null}=e,r=(0,i.__rest)(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},r,{className:(0,s.i)(l.Z.splitItem,t&&l.Z.modifiers.fill,a)}),o)};o.displayName="SplitItem"},3864:(e,t,a)=>{a.d(t,{ZP:()=>i});const i=(0,a(400).I)({name:"BookmarkIcon",height:512,width:384,svgPath:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z",yOffset:0,xOffset:0})},7582:(e,t,a)=>{a.d(t,{ZP:()=>i});const i=(0,a(400).I)({name:"OutlinedBookmarkIcon",height:512,width:384,svgPath:"M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z",yOffset:0,xOffset:0})},1315:(e,t,a)=>{a.d(t,{Z:()=>i}),a(7274);const i={button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",jumpLinks:"pf-v5-c-jump-links",jumpLinksItem:"pf-v5-c-jump-links__item",jumpLinksLabel:"pf-v5-c-jump-links__label",jumpLinksLink:"pf-v5-c-jump-links__link",jumpLinksLinkText:"pf-v5-c-jump-links__link-text",jumpLinksList:"pf-v5-c-jump-links__list",jumpLinksMain:"pf-v5-c-jump-links__main",jumpLinksToggle:"pf-v5-c-jump-links__toggle",jumpLinksToggleIcon:"pf-v5-c-jump-links__toggle-icon",jumpLinksToggleText:"pf-v5-c-jump-links__toggle-text",modifiers:{center:"pf-m-center",vertical:"pf-m-vertical",expandable:"pf-m-expandable",nonExpandable:"pf-m-non-expandable",expandableOnSm:"pf-m-expandable-on-sm",nonExpandableOnSm:"pf-m-non-expandable-on-sm",expandableOnMd:"pf-m-expandable-on-md",nonExpandableOnMd:"pf-m-non-expandable-on-md",expandableOnLg:"pf-m-expandable-on-lg",nonExpandableOnLg:"pf-m-non-expandable-on-lg",expandableOnXl:"pf-m-expandable-on-xl",nonExpandableOnXl:"pf-m-non-expandable-on-xl",expandableOn_2xl:"pf-m-expandable-on-2xl",nonExpandableOn_2xl:"pf-m-non-expandable-on-2xl",expanded:"pf-m-expanded",current:"pf-m-current"}}},1145:(e,t,a)=>{a.d(t,{Z:()=>i}),a(2084);const i={avatar:"pf-v5-c-avatar",brand:"pf-v5-c-brand",button:"pf-v5-c-button",contextSelector:"pf-v5-c-context-selector",dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",masthead:"pf-v5-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",pageInsets:"pf-m-page-insets",insetNone:"pf-m-inset-none",fill:"pf-m-fill",noFill:"pf-m-no-fill",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-v5-c-nav",notificationBadge:"pf-v5-c-notification-badge",page:"pf-v5-c-page",pageDrawer:"pf-v5-c-page__drawer",pageHeader:"pf-v5-c-page__header",pageHeaderBrand:"pf-v5-c-page__header-brand",pageHeaderBrandLink:"pf-v5-c-page__header-brand-link",pageHeaderBrandToggle:"pf-v5-c-page__header-brand-toggle",pageHeaderNav:"pf-v5-c-page__header-nav",pageHeaderTools:"pf-v5-c-page__header-tools",pageHeaderToolsGroup:"pf-v5-c-page__header-tools-group",pageHeaderToolsItem:"pf-v5-c-page__header-tools-item",pageMain:"pf-v5-c-page__main",pageMainBody:"pf-v5-c-page__main-body",pageMainBreadcrumb:"pf-v5-c-page__main-breadcrumb",pageMainDrawer:"pf-v5-c-page__main-drawer",pageMainGroup:"pf-v5-c-page__main-group",pageMainNav:"pf-v5-c-page__main-nav",pageMainSection:"pf-v5-c-page__main-section",pageMainSubnav:"pf-v5-c-page__main-subnav",pageMainTabs:"pf-v5-c-page__main-tabs",pageMainWizard:"pf-v5-c-page__main-wizard",pageSidebar:"pf-v5-c-page__sidebar",pageSidebarBody:"pf-v5-c-page__sidebar-body",themeDark:"pf-v5-theme-dark"}},9566:(e,t,a)=>{a.d(t,{Z:()=>i}),a(3919);const i={modifiers:{gutter:"pf-m-gutter",panelRight:"pf-m-panel-right",stack:"pf-m-stack",split:"pf-m-split",border:"pf-m-border",padding:"pf-m-padding",sticky:"pf-m-sticky",static:"pf-m-static",noBackground:"pf-m-no-background",widthDefault:"pf-m-width-default",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",width_100:"pf-m-width-100",widthDefaultOnSm:"pf-m-width-default-on-sm",width_25OnSm:"pf-m-width-25-on-sm",width_33OnSm:"pf-m-width-33-on-sm",width_50OnSm:"pf-m-width-50-on-sm",width_66OnSm:"pf-m-width-66-on-sm",width_75OnSm:"pf-m-width-75-on-sm",width_100OnSm:"pf-m-width-100-on-sm",widthDefaultOnMd:"pf-m-width-default-on-md",width_25OnMd:"pf-m-width-25-on-md",width_33OnMd:"pf-m-width-33-on-md",width_50OnMd:"pf-m-width-50-on-md",width_66OnMd:"pf-m-width-66-on-md",width_75OnMd:"pf-m-width-75-on-md",width_100OnMd:"pf-m-width-100-on-md",widthDefaultOnLg:"pf-m-width-default-on-lg",width_25OnLg:"pf-m-width-25-on-lg",width_33OnLg:"pf-m-width-33-on-lg",width_50OnLg:"pf-m-width-50-on-lg",width_66OnLg:"pf-m-width-66-on-lg",width_75OnLg:"pf-m-width-75-on-lg",width_100OnLg:"pf-m-width-100-on-lg",widthDefaultOnXl:"pf-m-width-default-on-xl",width_25OnXl:"pf-m-width-25-on-xl",width_33OnXl:"pf-m-width-33-on-xl",width_50OnXl:"pf-m-width-50-on-xl",width_66OnXl:"pf-m-width-66-on-xl",width_75OnXl:"pf-m-width-75-on-xl",width_100OnXl:"pf-m-width-100-on-xl",widthDefaultOn_2xl:"pf-m-width-default-on-2xl",width_25On_2xl:"pf-m-width-25-on-2xl",width_33On_2xl:"pf-m-width-33-on-2xl",width_50On_2xl:"pf-m-width-50-on-2xl",width_66On_2xl:"pf-m-width-66-on-2xl",width_75On_2xl:"pf-m-width-75-on-2xl",width_100On_2xl:"pf-m-width-100-on-2xl"},sidebar:"pf-v5-c-sidebar",sidebarContent:"pf-v5-c-sidebar__content",sidebarMain:"pf-v5-c-sidebar__main",sidebarPanel:"pf-v5-c-sidebar__panel"}},9059:(e,t,a)=>{a.d(t,{Z:()=>i}),a(6166);const i={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-v5-l-split",splitItem:"pf-v5-l-split__item"}},5140:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(5771),n=function(){return n=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};const l=function(e){var t,a=(0,i.useScalprum)(),l=(null===(t=a.api)||void 0===t?void 0:t.chrome)||{};return l=n(n({},l),{initialized:a.initialized}),"function"==typeof e?e(l):l}}}]);
//# sourceMappingURL=../sourcemaps/361.6db91109e0eec7c183e34217b4eb16c7.js.map