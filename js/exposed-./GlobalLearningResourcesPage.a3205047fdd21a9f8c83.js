(self.webpackChunklearningResources=self.webpackChunklearningResources||[]).push([[298],{5627:(e,t,a)=>{"use strict";a.d(t,{i:()=>o});var n=a(5353),l=a(4065),s=a(8296);a(8992);const r={divider:"pf-v5-c-divider",modifiers:{hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",vertical:"pf-m-vertical",insetNone:"pf-m-inset-none",insetXs:"pf-m-inset-xs",insetSm:"pf-m-inset-sm",insetMd:"pf-m-inset-md",insetLg:"pf-m-inset-lg",insetXl:"pf-m-inset-xl",inset_2xl:"pf-m-inset-2xl",inset_3xl:"pf-m-inset-3xl",horizontalOnSm:"pf-m-horizontal-on-sm",verticalOnSm:"pf-m-vertical-on-sm",insetNoneOnSm:"pf-m-inset-none-on-sm",insetXsOnSm:"pf-m-inset-xs-on-sm",insetSmOnSm:"pf-m-inset-sm-on-sm",insetMdOnSm:"pf-m-inset-md-on-sm",insetLgOnSm:"pf-m-inset-lg-on-sm",insetXlOnSm:"pf-m-inset-xl-on-sm",inset_2xlOnSm:"pf-m-inset-2xl-on-sm",inset_3xlOnSm:"pf-m-inset-3xl-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",verticalOnMd:"pf-m-vertical-on-md",insetNoneOnMd:"pf-m-inset-none-on-md",insetXsOnMd:"pf-m-inset-xs-on-md",insetSmOnMd:"pf-m-inset-sm-on-md",insetMdOnMd:"pf-m-inset-md-on-md",insetLgOnMd:"pf-m-inset-lg-on-md",insetXlOnMd:"pf-m-inset-xl-on-md",inset_2xlOnMd:"pf-m-inset-2xl-on-md",inset_3xlOnMd:"pf-m-inset-3xl-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",verticalOnLg:"pf-m-vertical-on-lg",insetNoneOnLg:"pf-m-inset-none-on-lg",insetXsOnLg:"pf-m-inset-xs-on-lg",insetSmOnLg:"pf-m-inset-sm-on-lg",insetMdOnLg:"pf-m-inset-md-on-lg",insetLgOnLg:"pf-m-inset-lg-on-lg",insetXlOnLg:"pf-m-inset-xl-on-lg",inset_2xlOnLg:"pf-m-inset-2xl-on-lg",inset_3xlOnLg:"pf-m-inset-3xl-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",verticalOnXl:"pf-m-vertical-on-xl",insetNoneOnXl:"pf-m-inset-none-on-xl",insetXsOnXl:"pf-m-inset-xs-on-xl",insetSmOnXl:"pf-m-inset-sm-on-xl",insetMdOnXl:"pf-m-inset-md-on-xl",insetLgOnXl:"pf-m-inset-lg-on-xl",insetXlOnXl:"pf-m-inset-xl-on-xl",inset_2xlOnXl:"pf-m-inset-2xl-on-xl",inset_3xlOnXl:"pf-m-inset-3xl-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",verticalOn_2xl:"pf-m-vertical-on-2xl",insetNoneOn_2xl:"pf-m-inset-none-on-2xl",insetXsOn_2xl:"pf-m-inset-xs-on-2xl",insetSmOn_2xl:"pf-m-inset-sm-on-2xl",insetMdOn_2xl:"pf-m-inset-md-on-2xl",insetLgOn_2xl:"pf-m-inset-lg-on-2xl",insetXlOn_2xl:"pf-m-inset-xl-on-2xl",inset_2xlOn_2xl:"pf-m-inset-2xl-on-2xl",inset_3xlOn_2xl:"pf-m-inset-3xl-on-2xl"}};var i,c=a(164);!function(e){e.hr="hr",e.li="li",e.div="div"}(i||(i={}));const o=e=>{var{className:t,component:a=i.hr,inset:o,orientation:m}=e,d=(0,n.__rest)(e,["className","component","inset","orientation"]);const p=a;return l.createElement(p,Object.assign({className:(0,s.i)(r.divider,(0,c.wt)(o,r),(0,c.wt)(m,r),t)},"hr"!==a&&{role:"separator"},d))};o.displayName="Divider"},5373:(e,t,a)=>{"use strict";a.d(t,{L:()=>E});var n=a(5353),l=a(4065);a(8361);const s="pf-m-expanded",r="pf-m-detached",i="pf-m-truncate",c="pf-m-limit-width",o="pf-m-display-lg",m="pf-m-indented",d="pf-m-active";var p=a(8296);const u="--pf-v5-c-expandable-section--m-truncate__content--LineClamp",g="3";var f,h=a(3174),v=a(164),b=a(4709);!function(e){e.default="default",e.truncate="truncate"}(f||(f={}));const x=(e,t)=>{!t||e<1||t.style.setProperty(u,e.toString())};class E extends l.Component{constructor(e){super(e),this.expandableContentRef=l.createRef(),this.observer=()=>{},this.checkToggleVisibility=()=>{var e;if(null===(e=this.expandableContentRef)||void 0===e?void 0:e.current){const e=this.props.truncateMaxLines||parseInt(g),t=this.expandableContentRef.current.scrollHeight/parseInt(getComputedStyle(this.expandableContentRef.current).lineHeight);this.setState({hasToggle:t>e})}},this.resize=()=>{const{offsetWidth:e}=this.expandableContentRef.current;this.state.previousWidth!==e&&(this.setState({previousWidth:e}),this.checkToggleVisibility())},this.handleResize=(0,v.Ds)(this.resize,250),this.state={isExpanded:e.isExpanded,hasToggle:!0,previousWidth:void 0}}calculateToggleText(e,t,a,n){return n&&""!==t?t:n||""===a?e:a}componentDidMount(){if(this.props.variant===f.truncate){const e=this.expandableContentRef.current;this.setState({previousWidth:e.offsetWidth}),this.observer=(0,b.p)(e,this.handleResize,!1),this.props.truncateMaxLines&&x(this.props.truncateMaxLines,e),this.checkToggleVisibility()}}componentDidUpdate(e){if(this.props.variant===f.truncate&&(e.truncateMaxLines!==this.props.truncateMaxLines||e.children!==this.props.children)){const e=this.expandableContentRef.current;x(this.props.truncateMaxLines,e),this.checkToggleVisibility()}}componentWillUnmount(){this.props.variant===f.truncate&&this.observer()}render(){const e=this.props,{onToggle:t,isActive:a,className:u,toggleText:g,toggleTextExpanded:b,toggleTextCollapsed:x,toggleContent:E,children:_,isExpanded:N,isDetached:k,displaySize:y,isWidthLimited:O,isIndented:S,contentId:C,toggleId:L,variant:I,truncateMaxLines:T}=e,M=(0,n.__rest)(e,["onToggle","isActive","className","toggleText","toggleTextExpanded","toggleTextCollapsed","toggleContent","children","isExpanded","isDetached","displaySize","isWidthLimited","isIndented","contentId","toggleId","variant","truncateMaxLines"]);k&&!L&&console.warn("ExpandableSection: The toggleId value must be passed in and must match the toggleId of the ExpandableSectionToggle.");let w=t,z=N;const q=C||(0,v.Ki)("expandable-section-content"),R=L||(0,v.Ki)("expandable-section-toggle");void 0===N&&(z=this.state.isExpanded,w=(e,a)=>{this.setState({isExpanded:a},(()=>t(e,this.state.isExpanded)))});const P=this.calculateToggleText(g,b,x,z),X=!k&&l.createElement("button",{className:(0,p.i)("pf-v5-c-expandable-section__toggle"),type:"button","aria-expanded":z,"aria-controls":q,id:R,onClick:e=>w(e,!z)},I!==f.truncate&&l.createElement("span",{className:(0,p.i)("pf-v5-c-expandable-section__toggle-icon")},l.createElement(h.ZP,{"aria-hidden":!0})),l.createElement("span",{className:(0,p.i)("pf-v5-c-expandable-section__toggle-text")},E||P));return l.createElement("div",Object.assign({className:(0,p.i)("pf-v5-c-expandable-section",z&&s,a&&d,k&&r,"lg"===y&&o,O&&c,S&&m,I===f.truncate&&i,u)},M),I===f.default&&X,l.createElement("div",{ref:this.expandableContentRef,className:(0,p.i)("pf-v5-c-expandable-section__content"),hidden:I!==f.truncate&&!z,id:q,"aria-labelledby":R,role:"region"},_),I===f.truncate&&this.state.hasToggle&&X)}}E.displayName="ExpandableSection",E.defaultProps={className:"",toggleText:"",toggleTextExpanded:"",toggleTextCollapsed:"",onToggle:(e,t)=>{},isActive:!1,isDetached:!1,displaySize:"default",isWidthLimited:!1,isIndented:!1,variant:"default"}},5023:(e,t,a)=>{"use strict";a.d(t,{L:()=>s});var n=a(5353),l=a(4065);const s=e=>{var{children:t=null,component:a="div"}=e,s=(0,n.__rest)(e,["children","component"]);const r=a;return l.createElement(r,Object.assign({},s),t)};s.displayName="GalleryItem"},9851:(e,t,a)=>{"use strict";a.d(t,{P:()=>i});var n=a(5353),l=a(4065),s=a(9059),r=a(8296);const i=e=>{var{hasGutter:t=!1,isWrappable:a=!1,className:i="",children:c=null,component:o="div"}=e,m=(0,n.__rest)(e,["hasGutter","isWrappable","className","children","component"]);const d=o;return l.createElement(d,Object.assign({},m,{className:(0,r.i)(s.Z.split,t&&s.Z.modifiers.gutter,a&&s.Z.modifiers.wrap,i)}),c)};i.displayName="Split"},4512:(e,t,a)=>{"use strict";a.d(t,{J:()=>i});var n=a(5353),l=a(4065),s=a(9059),r=a(8296);const i=e=>{var{isFilled:t=!1,className:a="",children:i=null}=e,c=(0,n.__rest)(e,["isFilled","className","children"]);return l.createElement("div",Object.assign({},c,{className:(0,r.i)(s.Z.splitItem,t&&s.Z.modifiers.fill,a)}),i)};i.displayName="SplitItem"},9059:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(6166);const n={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-v5-l-split",splitItem:"pf-v5-l-split__item"}},2313:function(e,t,a){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var l=a(4065);function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return JSON.stringify(e)}catch(e){return"undefined"}}var r={resolved:!1,rejected:!1,error:void 0,promise:void 0,result:void 0};t.default=function(e,t,a){var i=(0,l.useRef)(new Map),c=(0,l.useState)(0)[1];function o(){c((function(e){return e+1}))}return{loader:function(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];var m=s.apply(void 0,l),d=i.current.get(m);if(null==d?void 0:d.rejected)throw d.error;if(null==d?void 0:d.resolved)return d.result;if(null==d?void 0:d.promise)throw d.promise;throw i.current.get(m)||i.current.set(m,n({},r)),(d=i.current.get(m)).promise=e.apply(void 0,l).then((function(e){var a=i.current.get(m);if(!a)throw"No loader cache";return a.promise=void 0,a.resolved=!0,a.result=e,null==t||t(e),o(),e})).catch((function(e){var t=i.current.get(m);if(!t)throw"No loader cache";return t.promise=void 0,t.rejected=!0,t.error=e,null==a||a(e),o(),e})),d.promise},purgeCache:function(){i.current.clear(),o()}}}},8889:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalLearningResourcesPage:()=>Pe,default:()=>Xe});var n=a(4065),l=a.n(n),s=a(5627),r=a(9739),i=a(3826),c=a(8774),o=a(8340);const m=()=>l().createElement("div",{className:"lr-c-global-learning-resources-page__header"},l().createElement("img",{className:"pf-v5-u-ml-lg pf-v5-u-mr-lg",width:"48px",height:"48px",src:"/apps/frontend-assets/console-landing/ansible.svg",alt:"Learning resources icon"}),l().createElement(s.i,{className:"pf-v5-u-pt-md pf-v5-u-pb-md",orientation:{default:"vertical"},inset:{default:"insetSm"}}),l().createElement(c.D,null,l().createElement(r.K,{className:"pf-v5-u-m-lg"},l().createElement(i.v,null,l().createElement(o.x,{component:o.q.h1},"All Learning Resources")),l().createElement(i.v,null,l().createElement(o.x,{component:o.q.p},"See learning resources for services and features across the Hybrid Cloud Console. Find additional resources on"," ",l().createElement(o.x,{component:o.q.a,href:"https://developers.redhat.com/",target:"_blank",rel:"noopener noreferrer"},"Developers.RedHat.com"),","," ",l().createElement(o.x,{component:o.q.a,href:"https://cloud.redhat.com/",target:"_blank",rel:"noopener noreferrer"},"Cloud.RedHat.com"),", and on"," ",l().createElement(o.x,{component:o.q.a,href:"https://www.redhat.com/",target:"_blank",rel:"noopener noreferrer"},"RedHat.com"),".")))));var d,p=a(8057),u=a(5262),g=a(5323),f=a(9873),h=a(5140),v=a(3098);!function(e){e.All="all",e.Bookmarks="bookmarks"}(d||(d={}));const b=({loader:e})=>{const[t]=(0,v.useSearchParams)(),a=(0,h.Z)(),[,n]=e?.(a.auth.getUser)??[{},[]],s=n.reduce(((e,t)=>t.metadata.favorite?e+1:e),0);return l().createElement(u.m,{"aria-label":"Tab",role:"region",className:"lr-c-global-learning-resources-tabs pf-v5-u-pt-md pf-v5-u-pl-xl",activeKey:t.get("tab")},l().createElement(g.O,{eventKey:"all",title:l().createElement(v.Link,{className:"lr-c-global-learning-resources-tabs__link",to:{pathname:".",search:`?tab=${d.All}`}},l().createElement(f.T,{className:"lr-c-global-learning-resources-tabs__title"},"All learning resources (",e?n.length:l().createElement(p.$,{size:"md"}),")")),tabContentId:"refTabResources"}),l().createElement(g.O,{eventKey:"bookmarks",title:l().createElement(v.Link,{className:"lr-c-global-learning-resources-tabs__link",to:{pathname:".",search:`?tab=${d.Bookmarks}`}},l().createElement(f.T,{className:"lr-c-global-learning-resources-tabs__title"},"My bookmarked resources (",e?s:l().createElement(p.$,{size:"md"}),")")),tabContentId:"refTabBookmarks"}))};var x=a(7173),E=a(9851),_=a(4512),N=a(4623),k=a(6484),y=a(400);const O=(0,y.I)({name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0}),S=(0,y.I)({name:"SortAmountDownAltIcon",height:512,width:512,svgPath:"M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z",yOffset:0,xOffset:0});var C=a(8285),L=a(5373);const I=({categoryId:e,categoryName:t,categoryData:a})=>{const[s,m]=(0,n.useState)(!0);return l().createElement(L.L,{toggleText:t,onToggle:(e,t)=>{m(t)},isExpanded:s},a.map(((t,a)=>l().createElement(r.K,{component:"div",className:"pf-v5-u-mt-md",key:a},l().createElement(c.D,null,t.group?l().createElement(o.x,{component:o.q.small,className:"pf-u-mb-0"},t.group):null,t.data.map((t=>l().createElement(i.v,{key:e,className:"pf-v5-u-display-flex"},l().createElement(C.X,{label:l().createElement("div",{className:"lr-c-global-learning-resources-page__filters--checkbox"},t.icon?l().createElement("img",{className:"lr-c-global-learning-resources-page__filters--checkbox-icon pf-v5-u-mr-sm",src:"/apps/frontend-assets/console-landing/ansible.svg",alt:t.filterLabel}):null,t.filterLabel),id:t.id})))))))))},T=({loader:e})=>{const[t,a]=(0,n.useState)(""),s=(0,h.Z)(),[c]=e(s.auth.getUser);return l().createElement(r.K,{hasGutter:!0,className:"lr-c-global-learning-resources-page__filters pf-v5-u-p-lg"},l().createElement(i.v,null,l().createElement(E.P,null,l().createElement(_.J,{isFilled:!0},l().createElement(N.L,null,l().createElement(k.v,{icon:l().createElement(O,null),value:t,placeholder:"Find by name ...",onChange:(e,t)=>{a(t)}}))),l().createElement(_.J,null,l().createElement(x.zx,{variant:"plain"},l().createElement(S,null))))),c.data.categories.map(((e,t)=>l().createElement(i.v,{key:t},l().createElement(I,{categoryId:e.categoryId,categoryName:e.categoryName,categoryData:e.categoryData})))))};var M=a(5023),w=a(3417),z=a(2643),q=a(4429),R=a(9947),P=a(7880),X=a(5353),D=a(8296),j=a(1203);const A="--pf-v5-c-empty-state__icon--Color",$=e=>{var{className:t,icon:a,color:l}=e,s=(0,X.__rest)(e,["className","icon","color"]);const r=n.createElement(a,null).type===p.$;return n.createElement("div",Object.assign({className:(0,D.i)(j.Z.emptyStateIcon)},l&&!r&&{style:{[A]:l}}),n.createElement(a,Object.assign({className:t,"aria-hidden":!r},s)))};$.displayName="EmptyStateIcon";var F=a(5106),Z=a(315);const H=e=>{var{children:t,className:a}=e,l=(0,X.__rest)(e,["children","className"]);return n.createElement("div",Object.assign({className:(0,D.i)(j.Z.emptyStateActions,a)},l),t)};H.displayName="EmptyStateActions";const U=(0,y.I)({name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0});a(598);const V="pf-m-selectable",W="pf-m-clickable",B="pf-m-selected",G="pf-m-current",K="pf-m-disabled",J="pf-m-selectable-raised",Y="pf-m-non-selectable-raised",Q="pf-m-selected-raised",ee="pf-m-compact",te="pf-m-display-lg",ae="pf-m-flat",ne="pf-m-plain",le="pf-m-rounded",se="pf-m-expanded",re="pf-m-full-height",ie="pf-m-no-fill";var ce=a(2472);const oe=n.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1,isClickable:!1,isSelectable:!1,isSelected:!1,isClicked:!1,isDisabled:!1}),me=e=>{var{children:t,id:a="",className:l,component:s="div",isCompact:r=!1,isSelectable:i=!1,isClickable:c=!1,isDisabled:o=!1,isSelectableRaised:m=!1,isSelected:d=!1,isClicked:p=!1,isDisabledRaised:u=!1,isFlat:g=!1,isExpanded:f=!1,isRounded:h=!1,isLarge:v=!1,isFullHeight:b=!1,isPlain:x=!1,ouiaId:E,ouiaSafe:_=!0,hasSelectableInput:N=!1,selectableInputAriaLabel:k,onSelectableInputChange:y=(()=>{})}=e,O=(0,X.__rest)(e,["children","id","className","component","isCompact","isSelectable","isClickable","isDisabled","isSelectableRaised","isSelected","isClicked","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const S=s,C=(0,ce.S$)(me.displayName,E,_),[L,I]=n.useState(""),[T,M]=n.useState();r&&v&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),v=!1);const w=n.useRef(!1);return n.useEffect((()=>{k?M({"aria-label":k}):L?M({"aria-labelledby":L}):N&&!w.current&&(M({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[N,k,L]),n.createElement(oe.Provider,{value:{cardId:a,registerTitleId:e=>{I(e),w.current=!!e},isExpanded:f,isClickable:c,isSelectable:i,isSelected:d,isClicked:p,isDisabled:o,hasSelectableInput:N}},N&&n.createElement("input",Object.assign({className:"pf-v5-screen-reader",id:`${a}-input`},T,{type:"checkbox",checked:d,onChange:e=>y(e,a),disabled:u,tabIndex:-1})),n.createElement(S,Object.assign({id:a,className:(0,D.i)("pf-v5-c-card",r&&ee,f&&se,g&&ae,h&&le,v&&te,b&&re,x&&ne,u?(0,D.i)(Y):m?(0,D.i)(J,d&&Q):i&&c?(0,D.i)(V,W,(d||p)&&G):i?(0,D.i)(V,d&&B):c?(0,D.i)(W,p&&G):"",o&&K,l),tabIndex:m?"0":void 0},O,C),t))};me.displayName="Card";const de=e=>{var{children:t,className:a,component:l="div"}=e,s=(0,X.__rest)(e,["children","className","component"]);const{cardId:r,registerTitleId:i}=n.useContext(oe),c=l,o=r?`${r}-title`:"";return n.useEffect((()=>(i(o),()=>i(""))),[i,o]),n.createElement("div",{className:(0,D.i)("pf-v5-c-card__title")},n.createElement(c,Object.assign({className:(0,D.i)("pf-v5-c-card__title-text",a),id:o||void 0},s),t))};de.displayName="CardTitle";const pe=e=>{var{children:t,className:a,component:l="div",isFilled:s=!0}=e,r=(0,X.__rest)(e,["children","className","component","isFilled"]);const i=l;return n.createElement(i,Object.assign({className:(0,D.i)("pf-v5-c-card__body",!s&&ie,a)},r),t)};pe.displayName="CardBody";const ue=e=>{var{children:t,className:a,component:l="div"}=e,s=(0,X.__rest)(e,["children","className","component"]);const r=l;return n.createElement(r,Object.assign({className:(0,D.i)("pf-v5-c-card__footer",a)},s),t)};ue.displayName="CardFooter";var ge=a(4580),fe=a(5488);const he=(0,y.I)({name:"TagIcon",height:512,width:512,svgPath:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z",yOffset:0,xOffset:0});var ve=a(8148),be=a(5527),xe=a.n(be),Ee=a(3864),_e=a(7582);const Ne=()=>l().createElement(ge.J,{className:"lr-c-bookmark__icon"},l().createElement(_e.ZP,null)),ke=()=>l().createElement(ge.J,{className:"lr-c-bookmark__icon"},l().createElement(Ee.ZP,null));var ye;!function(e){e.Content="content",e.ProductFamilies="product-families",e.UseCase="use-case"}(ye||(ye={}));const Oe=({quickStart:e,purgeCache:t,quickStartTags:a})=>{const s=(0,h.Z)(),[r,i]=(0,n.useState)(e.metadata.favorite),m=new URL(e.spec.link?.href??"https://access.redhat.com/"),d=e.spec.type?.color;return l().createElement(me,{className:"lr-c-global-learning-resources-quickstart__card pf-v5-u-p-sm"},l().createElement(c.D,{className:"lr-c-global-learning-resources-quickstart__card--content"},l().createElement(de,{component:"div",className:"lr-c-global-learning-resources-quickstart__card--title"},l().createElement("div",{className:"lr-c-global-learning-resources-quickstart__card--title-container"},l().createElement(o.x,{component:o.q.h3},e.spec.displayName)),l().createElement(x.zx,{onClick:async a=>{const n=await s.auth.getUser();if(!n)throw new Error("User not logged in");const l=n.identity.internal?.account_id;a.preventDefault(),a.stopPropagation();try{i((e=>!e)),await xe().post(`${ve.Sg}/${ve.I_}?account=${l}`,{quickstartName:e.metadata.name,favorite:!r}),t()}catch(t){i(e.metadata.favorite)}},variant:"plain","aria-label":e.metadata.favorite?"Unbookmark learning resource":"Bookmark learning resource"},r?l().createElement(ke,null):l().createElement(Ne,null))),l().createElement(pe,{component:"div"},l().createElement("div",{className:"lr-c-global-learning-resources-quickstart__card--body pf-v5-u-mb-md"},l().createElement(fe._,{isCompact:!0,color:d},e.spec.type?.text),l().createElement(o.x,{component:o.q.small},m.hostname)),l().createElement(o.x,{component:o.q.p},e.spec.description)),l().createElement(ue,{className:"lr-c-global-learning-resources-quickstart__card--footer"},l().createElement(o.x,{component:o.q.small},a[ye.ProductFamilies].map((e=>e?.cardLabel)).join(", ")),l().createElement(o.x,{component:o.q.small},a[ye.UseCase].length>0?l().createElement(ge.J,{className:"pf-v5-u-mr-sm"},l().createElement(he,null)):void 0,a[ye.UseCase].map((e=>e?.cardLabel)).join(", ")))))},Se=(e,t)=>t.metadata.tags.reduce(((t,a)=>{const n=a.kind;if(function(e,t){return Object.prototype.hasOwnProperty.call(t,e)}(n,t)){const l=e[a.kind][a.value];l&&t[n].push(l)}return t}),{[ye.ProductFamilies]:[],[ye.UseCase]:[]}),Ce=({quickStarts:e,purgeCache:t,filterMap:a})=>l().createElement(q.r,{hasGutter:!0,className:"lr-c-global-learning-resources-page__content--gallery"},e.map((e=>{const n=Se(a,e);return l().createElement(M.L,{key:e.metadata.name,className:"lr-c-global-learning-resources-page__content--gallery-card-wrapper"},l().createElement(Oe,{quickStart:e,purgeCache:t,quickStartTags:n,key:e.metadata.name}))}))),Le=({quickStarts:e,purgeCache:t,filterMap:a})=>{const[,n]=(0,v.useSearchParams)();if(0===e.reduce(((e,t)=>t.metadata.favorite?e+1:e),0))return l().createElement(z.b,null,l().createElement(R.u,{className:"lr-c-global-learning-resources-page__content--empty"},l().createElement(P.t,{titleText:"No resources bookmarked",headingLevel:"h4",icon:l().createElement($,{icon:U})}),l().createElement(F.B,null,"You don't have any bookmarked learning resources. Click the icon in cards on the 'All learning resources' tab to bookmark a resource."),l().createElement(Z.O,null,l().createElement(H,null,l().createElement(x.zx,{variant:"link",onClick:()=>n({tab:d.All})},"Go to the 'All learning resources' tab")))));const s=e.filter((e=>e.metadata.favorite));return l().createElement(q.r,{hasGutter:!0,className:"lr-c-global-learning-resources-page__content--gallery"},s.map((e=>{if(e.metadata.favorite){const n=Se(a,e);return l().createElement("div",{key:e.metadata.name,className:"lr-c-global-learning-resources-page__content--gallery-card-wrapper"},l().createElement(Oe,{quickStart:e,purgeCache:t,quickStartTags:n,key:e.metadata.name}))}})))},Ie=({loader:e,purgeCache:t})=>{const a=(0,h.Z)(),[s,r]=(0,v.useSearchParams)();(0,n.useEffect)((()=>{r({tab:d.All})}),[]);const[i,c]=e(a.auth.getUser),o=(0,n.useMemo)((()=>{const e={};return i.data.categories.forEach((t=>{const a=t.categoryId;e[a]||(e[a]={}),t.categoryData.forEach((t=>{t.data.forEach((t=>{e[a][t.id]={id:t.id,cardLabel:t.cardLabel,filterLabel:t.filterLabel}}))}))})),e}),[i]);return l().createElement("div",{className:"pf-v5-u-p-md"},l().createElement(w.I,{id:"refTabResources",hidden:s.get("tab")!==d.All},l().createElement(Ce,{quickStarts:c,filterMap:o,purgeCache:t})),l().createElement(w.I,{id:"refTabBookmarks",hidden:s.get("tab")!==d.Bookmarks},l().createElement(Le,{quickStarts:c,purgeCache:t,filterMap:o})))};var Te=a(2313),Me=a.n(Te);const we=async function(){return(await xe().get(`${ve.Sg}${ve.d5}${ve.Oq}`)).data},ze="/api/quickstarts/v1",qe=async function(e,t){const a=await e();if(!a)throw new Error("User not logged in");const n=a.identity.internal?.account_id,l=`${ze}/${ve.d5}`,s=xe().get(l,{params:{account:n,bundle:t}}).then((({data:e})=>e.data.map((({content:e})=>e)))),r=n?xe().get(`${ze}//favorites`,{params:{account:n}}).then((({data:e})=>e.data)):Promise.resolve([]),[i,c]=await Promise.all([s,r]),o={};return c.forEach((e=>{o[e.quickstartName]=e.favorite})),i.map((e=>{const t=e.metadata.name;return{...e,metadata:{...e.metadata,favorite:!!o[t]}}}))},Re=function(e,t){return Promise.all([we(),qe(e,t)])},Pe=()=>{const{loader:e,purgeCache:t}=Me()(Re);return l().createElement("div",{className:"lr-c-global-learning-resources-page"},l().createElement("div",{className:"lr-c-global-learning-resources-page__top-container"},l().createElement(m,null),l().createElement(n.Suspense,{fallback:l().createElement(b,null)},l().createElement(b,{loader:e}))),l().createElement("div",{className:"lr-c-global-learning-resources-page__main"},l().createElement(n.Suspense,{fallback:l().createElement(p.$,{size:"xl","aria-label":"Learning resources are being loaded."})},l().createElement(T,{loader:e}),l().createElement(Ie,{loader:e,purgeCache:t}))))},Xe=Pe},8392:()=>{},598:()=>{},2857:()=>{},8992:()=>{},187:()=>{},8361:()=>{},8379:()=>{},6024:()=>{},3390:()=>{},2143:()=>{},6166:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./GlobalLearningResourcesPage.945f275e17611215119e3fb3c3330cc6.js.map