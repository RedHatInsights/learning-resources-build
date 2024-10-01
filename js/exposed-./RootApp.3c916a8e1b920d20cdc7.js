(self.webpackChunklearningResources=self.webpackChunklearningResources||[]).push([[216],{3675:(e,t,a)=>{"use strict";a.d(t,{p:()=>o,s:()=>n});var n,l=a(8674),r=a(1680),i=a(3774),s=a(8463);!function(e){e.xs="xs",e.sm="sm",e.lg="lg",e.xl="xl",e.full="full"}(n||(n={}));const o=e=>{var{children:t,className:a,variant:o=n.full,isFullHeight:c}=e,m=(0,l.__rest)(e,["children","className","variant","isFullHeight"]);return r.createElement("div",Object.assign({className:(0,i.A)(s.A.emptyState,"xs"===o&&s.A.modifiers.xs,"sm"===o&&s.A.modifiers.sm,"lg"===o&&s.A.modifiers.lg,"xl"===o&&s.A.modifiers.xl,c&&s.A.modifiers.fullHeight,a)},m),r.createElement("div",{className:(0,i.A)(s.A.emptyStateContent)},t))};o.displayName="EmptyState"},2976:(e,t,a)=>{"use strict";a.d(t,{TH:()=>r,oV:()=>i});var n=a(1680),l=a(7931);const r=(e,t,a=e=>document.activeElement.contains(e),n=e=>e,l=["A","BUTTON","INPUT"],r=!1,i=!1,s=!0,o=!0)=>{const c=document.activeElement,m=e.key;let u=null;if(!r&&["ArrowUp","ArrowDown"].includes(m)){e.preventDefault(),e.stopImmediatePropagation();let l=-1;t.forEach(((e,r)=>{if(a(e)){let e=0;for(;!u&&e<t.length&&-1*e<t.length;)"ArrowUp"===m?e--:e++,l=r+e,l>=t.length&&(l=0),l<0&&(l=t.length-1),u=n(t[l])}}))}if(!i&&["ArrowLeft","ArrowRight"].includes(m)){e.preventDefault(),e.stopImmediatePropagation();let n=-1;t.forEach(((r,i)=>{if(a(r)){const a=t[i].querySelectorAll(l.join(","));if(!a.length||o){let e=c;for(;e;)if(e="ArrowLeft"===m?e.previousElementSibling:e.nextElementSibling,e&&l.includes(e.tagName)){u=e;break}}else a.forEach(((t,l)=>{e.target===t&&(n=l+("ArrowLeft"===m?-1:1),n>=a.length&&(n=0),n<0&&(n=a.length-1),u=a[n])}))}}))}u&&(s&&(c.tabIndex=-1,u.tabIndex=0),u.focus())};class i extends n.Component{constructor(){super(...arguments),this.keyHandler=e=>{const{isEventFromContainer:t}=this.props;if(t?!t(e):!this._isEventFromContainer(e))return;const{isActiveElement:a,getFocusableElement:n,noVerticalArrowHandling:l,noHorizontalArrowHandling:i,noEnterHandling:s,noSpaceHandling:o,updateTabIndex:c,validSiblingTags:m,additionalKeyHandler:u,createNavigableElements:d,onlyTraverseSiblings:g}=this.props;u&&u(e);const p=d();if(!p)return void console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");const v=e.key;s||"Enter"===v&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),o||" "===v&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),r(e,p,a,n,m,l,i,c,g)},this._isEventFromContainer=e=>{const{containerRef:t}=this.props;return t.current&&t.current.contains(e.target)}}componentDidMount(){l.Sw&&window.addEventListener("keydown",this.keyHandler)}componentWillUnmount(){l.Sw&&window.removeEventListener("keydown",this.keyHandler)}render(){return null}}i.displayName="KeyboardHandler",i.defaultProps={containerRef:null,createNavigableElements:()=>null,isActiveElement:e=>document.activeElement===e,getFocusableElement:e=>e,validSiblingTags:["BUTTON","A"],onlyTraverseSiblings:!0,updateTabIndex:!0,noHorizontalArrowHandling:!1,noVerticalArrowHandling:!1,noEnterHandling:!1,noSpaceHandling:!1}},4748:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(1680),l=a.n(n),r=a(8753);const i=e=>l().createElement(r.j,{...e})},8753:(e,t,a)=>{"use strict";a.d(t,{j:()=>w});var n=a(1680),l=a.n(n),r=a(881),i=a(6738),s=a(5322),o=a(3675),c=a(8490),m=a(4114),u=a(3802),d=a(8296),g=a(7021),p=a(5184),v=a(2839),k=a(3113),h=a(2952),E=a(8621),f=a(8782),b=a(3223),S=a(7603),y=a(3440),N=a(1903),A=a(7275);const w=({bundle:e})=>{const t=(0,r.A)(),{activeQuickStartID:a,allQuickStartStates:w,setFilter:C,loading:F}=l().useContext(i.QuickStartContext),I=(0,N.useFlag)("platform.learning-resources.bookmarks"),[Q,x]=(0,n.useState)(window.innerHeight),T=e||"settings",{contentReady:_,documentation:$,learningPaths:q,other:D,quickStarts:P,bookmarks:H,toggleFavorite:L}=(0,A.Ay)(T),[R,B]=(0,n.useState)({count:H.length,perPage:20,page:1}),U=P.length+$.length+q.length+D.length;return t.updateDocumentTitle("Learning Resources"),(0,n.useEffect)((()=>{t.hideGlobalFilter(!0)}),[]),l().useLayoutEffect((()=>{function e(){x(window.innerHeight-(document.querySelector("header")?.getBoundingClientRect()?.height||0))}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),!_||F?l().createElement(i.LoadingBox,null):l().createElement(m.v,{id:"learning-resources-wrapper",style:{height:`${Q}px`}},l().createElement(u.d8,{className:"pf-v5-u-p-lg lr-c-catalog__header"},l().createElement(k.a,{className:"pf-v5-u-mb-md"},l().createElement(h.A,null)),l().createElement(k.a,null,l().createElement(E.A,{quickStartsCount:U,onSearchInputChange:e=>{C("keyword",e)}}))),l().createElement(u.d8,{className:"pf-v5-u-background-color-200 pf-m-fill"},l().createElement("div",{className:"pf-v5-u-h-100"},l().createElement(g.B,{id:"content-wrapper",isPanelRight:!0,hasGutter:!0},l().createElement(p.Y,{id:"quick-starts",className:"pf-v5-u-background-color-200"},I&&l().createElement(l().Fragment,null,l().createElement(f.A,{sectionName:"bookmarks",toggleFavorite:L,sectionCount:H.length,emptyBody:l().createElement(o.p,{className:"lr-c-empty_bookmarks"},"No bookmarked resources yet. Click the"," ",l().createElement(c.I,{className:"lr-c-bookmark__icon"},l().createElement(y.Ay,null)),"icon to pin it to your bookmarks here."),sectionTitle:l().createElement("span",null,l().createElement(c.I,{className:"lr-c-bookmark__icon pf-v5-u-ml-sm pf-v5-u-pr-md"},l().createElement(S.Ay,null)),"Bookmarks"),rightTitle:l().createElement(d.d,{itemCount:H.length,perPage:R.perPage,page:R.page,onSetPage:(e,t)=>{B((e=>({...e,page:t})))},widgetId:"pagination-options-menu-top",onPerPageSelect:(e,t)=>B((e=>({...e,perPage:t}))),isCompact:!0}),isExpandable:!1,sectionQuickStarts:H.slice((R.page-1)*R.perPage,R.page*(R.perPage-1)+1),activeQuickStartID:a,allQuickStartStates:w}),l().createElement(s.c,{className:"pf-v5-u-mt-lg pf-v5-u-mb-lg"})),l().createElement(f.A,{sectionName:"documentation",toggleFavorite:L,sectionCount:$.length,sectionTitle:"Documentation",sectionDescription:"Technical information for using the service",sectionQuickStarts:$,activeQuickStartID:a,allQuickStartStates:w}),l().createElement(s.c,{className:"pf-v5-u-mt-lg pf-v5-u-mb-lg"}),l().createElement(f.A,{sectionName:"quick-starts",toggleFavorite:L,sectionCount:P.length,sectionTitle:"Quick starts",sectionDescription:"Step-by-step instructions and tasks",sectionQuickStarts:P,activeQuickStartID:a,allQuickStartStates:w}),l().createElement(s.c,{className:"pf-v5-u-mt-lg pf-v5-u-mb-lg"}),l().createElement(f.A,{sectionName:"learning-paths",toggleFavorite:L,sectionCount:q.length,sectionTitle:"Learning paths",sectionDescription:"Collections of learning materials contributing to a common use case",sectionQuickStarts:q,activeQuickStartID:a,allQuickStartStates:w}),l().createElement(s.c,{className:"pf-v5-u-mt-lg pf-v5-u-mb-lg"}),l().createElement(f.A,{sectionName:"other-content-types",toggleFavorite:L,sectionCount:D.length,sectionTitle:"Other content types",sectionDescription:"Tutorials, videos, e-books, and more to help you build your skills",sectionQuickStarts:D,activeQuickStartID:a,allQuickStartStates:w})),l().createElement(v.r,{variant:"sticky",className:"pf-v5-u-background-color-200 pf-v5-u-pl-lg pf-v5-u-pl-0-on-lg"},l().createElement(b.A,{defaultActive:"bookmarks",linkItems:[{id:"bookmarks",label:`Bookmarks (${H.length})`},{id:"documentation",label:`Documentation (${$.length})`},{id:"quick-starts",label:`Quick starts (${P.length})`},{id:"learning-paths",label:`Learning paths (${q.length})`},{id:"other-content-types",label:`Other content types (${D.length})`}]}))))))}},8621:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var n=a(6738),l=a(9259),r=a(8501),i=a(4629),s=a(1680),o=a.n(s);const c=({onSearchInputChange:e,quickStartsCount:t})=>o().createElement(l.$,{className:"pf-v5-u-pt-sm pf-v5-u-pb-sm lr-c-catalog__filter"},o().createElement(r.o,{className:"pfext-quick-start-catalog-filter__input"},o().createElement(i.D,{placeholder:"Filter by keywords...",onChange:(t,a)=>e(a)})),o().createElement(r.o,{className:"pf-v5-u-mr-md"},o().createElement(n.QuickStartCatalogFilterCountWrapper,{quickStartsCount:t})))},2952:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var n=a(678),l=a(3113),r=a(316),i=a(1680),s=a.n(i),o=a(881);const c=()=>{const{getBundleData:e}=(0,o.A)(),{bundleTitle:t}=e();return s().createElement(n.B,{className:"lr-c-catalog__header"},s().createElement(l.a,null,s().createElement(r.h,{className:"lr-c-catalog__header-bundle",headingLevel:"h2",size:"lg"},t)),s().createElement(l.a,null,s().createElement(r.h,{headingLevel:"h1",size:"2xl"},"Learning Resources")))}},8782:(e,t,a)=>{"use strict";a.d(t,{A:()=>y});var n=a(6738),l=a(4992),r=a(2583),i=a(5886),s=a(6998),o=a(6553),c=a(7725),m=a(7321),u=a(666),d=a(3973),g=a(1976),p=a(2069),v=a(316),k=a(1680),h=a.n(k),E=a(9015),f=a(1903),b=a(4198);const S=({children:e,sectionTitle:t,sectionCount:a,isExpandable:n=!0,rightTitle:r,sectionName:s})=>{const[o,c]=(0,k.useState)(!!a);return n?h().createElement(i.Q,{isExpanded:o,isIndented:!0,onToggle:()=>c((e=>!e)),className:"lr-c-catalog-section",id:s,toggleContent:h().createElement(u.B,null,h().createElement(d.o,{isFilled:!0},h().createElement(v.h,{headingLevel:"h3",size:"lg"},t,h().createElement(l.E,{isRead:!a,className:"pf-v5-u-ml-sm"},a))),h().createElement(d.o,null,r))},e):h().createElement("div",{className:"lr-c-catalog-section",id:s},h().createElement(u.B,null,h().createElement(d.o,{isFilled:!0},h().createElement(v.h,{headingLevel:"h3",size:"lg"},t,h().createElement(l.E,{className:"pf-v5-u-ml-sm"},a))),h().createElement(d.o,null,r)),e?h().createElement("div",{className:"lr-c-catalog-section__static"},e):null)},y=({sectionTitle:e,sectionDescription:t,sectionCount:a,sectionQuickStarts:i,isExpandable:u=!0,activeQuickStartID:k,allQuickStartStates:y,rightTitle:N,emptyBody:A,toggleFavorite:w,sectionName:C})=>{const F=(0,f.useFlag)("platform.learning-resources.bookmarks");return 0===a&&u?h().createElement(s.s,{alignItems:{default:"alignItemsCenter"},id:C,className:"lr-c-catalog-section"},h().createElement(o.Z,{className:"pf-v5-u-mr-sm"},h().createElement(r.$n,{className:"pf-v5-c-expandable-section__toggle pf-v5-u-pl-0 pf-v5-u-pr-0",variant:"plain",isDisabled:!0,icon:h().createElement(E.Ay,null)})),h().createElement(o.Z,null,h().createElement(d.o,{isFilled:!0},h().createElement(v.h,{headingLevel:"h3",size:"lg"},e,h().createElement(l.E,{isRead:!1,className:"pf-v5-u-ml-sm"},a))),h().createElement(d.o,null,N))):h().createElement(S,{sectionName:C,sectionCount:a,sectionTitle:e,isExpandable:u,rightTitle:N},t&&h().createElement(g.n,{className:"pf-v5-u-mb-md"},h().createElement(p.E,null,t)),a?h().createElement(c.Z,{hasGutter:!0},i.map((e=>h().createElement(m.K,{key:e.metadata.name},h().createElement(b.A,{quickStart:e,bookmarks:F?{isFavorite:e.metadata.favorite,setFavorite:t=>w(e.metadata.name,t)}:null,isActive:e.metadata.name===k,status:(0,n.getQuickStartStatus)(y||{},e.metadata.name)}))))):A)}},3223:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var n=a(7840),l=a(7670),r=a(1680);const i=({defaultActive:e,linkItems:t})=>{const a=r.useRef(null),[i,s]=r.useState(e),o=r.useCallback((e=>{document.location.href=`${document.location.pathname}#${e}`,s(e)}),[s]);return r.useEffect((()=>{"IntersectionObserver"in window&&(()=>{const e=Array.from(document.querySelectorAll(".lr-c-catalog-section"))||[],t=new IntersectionObserver((e=>{const t=e.find((e=>e.isIntersecting));t&&s(t?.target?.id)}),{threshold:.5});Array.from(e).forEach((e=>{t.observe(e)}))})()}),[]),r.createElement("div",{ref:a},r.createElement(n.G,{isVertical:!0,label:"Jump to section"},t.map((({id:e,label:t})=>r.createElement(l.$,{key:e,onClick:()=>o(e),isActive:i===e},t)))))}},4198:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var n=a(1680),l=a.n(n),r=a(6738),i=a(7603),s=a(3440),o=a(8490);const c=()=>l().createElement(o.I,{className:"lr-c-bookmark__icon"},l().createElement(s.Ay,null)),m=()=>l().createElement(o.I,{className:"lr-c-bookmark__icon"},l().createElement(i.Ay,null)),u=({quickStart:e,bookmarks:t,isActive:a,status:n})=>l().createElement("div",{className:"lr-c-quickstart_tile"},l().createElement(r.QuickStartTile,{action:null!==t?{"aria-label":t.isFavorite?`Remove quickstart ${e.spec.displayName} from bookmarks.`:`Bookmark quickstart ${e.spec.displayName}.`,icon:t.isFavorite?m:c,onClick:e=>{e.preventDefault(),e.stopPropagation(),t.setFavorite(!t.isFavorite)}}:void 0,quickStart:{...e,spec:{...e.spec,icon:null}},isActive:a,status:n}))},7275:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>g,SC:()=>u,YY:()=>m,rx:()=>c,tE:()=>o});var n=a(1680),l=a(1415),r=a.n(l),i=a(6738),s=a(881);const o="/api/quickstarts/v1",c="/quickstarts",m="/favorites",u="/filters",d=(e,t)=>e.spec.displayName.localeCompare(t.spec.displayName),g=e=>{const t=(0,s.A)(),{quickStarts:a}=t,[l,u]=(0,n.useState)(!1),[g,p]=(0,n.useState)([]),{allQuickStartStates:v,allQuickStarts:k=[],filter:h}=(0,n.useContext)(i.QuickStartContext),E=(0,n.useMemo)((()=>(0,i.filterQuickStarts)(k||[],h?.keyword||"",h?.status?.statusFilters,v||{}).sort(d).reduce(((e,t)=>{const a=function(e,t){return!!t.find((t=>t.quickstartName===e.metadata.name))}(t,g),n={...t,metadata:{...t.metadata,favorite:a}};return a&&e.bookmarks.push(n),t.metadata.externalDocumentation?e.documentation.push(n):t.metadata.otherResource?e.other.push(n):t.metadata.learningPath?e.learningPaths.push(n):e.quickStarts.push(n),e}),{documentation:[],quickStarts:[],other:[],learningPaths:[],bookmarks:[]})),[k,h,g]);async function f(e,a){const n=[...g],l=g.filter((t=>t.quickstartName!==e));a&&l.push({favorite:a,quickstartName:e}),p(l);const i=await t.auth.getUser();if(!i)throw new Error("User not logged in");const s=i.identity.internal?.account_id;try{await r().post(`${o}/${m}?account=${s}`,{quickstartName:e,favorite:a})}catch(e){console.error("Failed to update favorites",e),p(n)}}return(0,n.useEffect)((()=>{!async function(){const n=await t.auth.getUser();if(!n)throw new Error("User not logged in");const l=n.identity.internal?.account_id,i=e?`${o}/${c}?bundle=${e}`:`${o}/${c}?account=${l}`,s=[r().get(i).then((({data:t})=>{e?a.set(`${e}`,t.data.map((({content:e})=>e))):a.set(`${l}`,t.data.map((({content:e})=>e)))})),l?r().get(`${o}/${m}?account=${l}`).then((({data:e})=>e.data)):Promise.resolve([])],[,d]=await Promise.allSettled(s);"fulfilled"===d.status&&d.value&&p(d.value),u(!0)}()}),[e]),(0,n.useMemo)((()=>({...E,contentReady:l,toggleFavorite:f})),[E,l,f])}},9826:()=>{},1741:()=>{},9829:()=>{},935:()=>{},6905:()=>{},9697:()=>{},1537:()=>{},1069:()=>{},4778:()=>{},4708:()=>{},2004:()=>{},4895:()=>{},3701:()=>{},1036:()=>{},3188:()=>{},8700:()=>{},1641:()=>{},545:()=>{},3091:()=>{},8497:()=>{},1453:()=>{},7553:()=>{},8195:()=>{},8469:()=>{},7077:()=>{},6752:()=>{},2580:()=>{},364:()=>{},3696:()=>{},2804:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./RootApp.a6b8a3c9b9e170582932e3aa1d031408.js.map