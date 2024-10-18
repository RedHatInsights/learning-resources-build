(self.webpackChunklearningResources=self.webpackChunklearningResources||[]).push([[146,680,415],{6714:(e,t,a)=>{"use strict";var n=a(1680),l=a.n(n),r=a(5338),c=a(881),s=a(6738),i=a(5322),o=a(3675),u=a(8490),m=a(4114),g=a(3802),d=a(8296),p=a(7021),k=a(5184),E=a(2839),h=a(3113),v=a(678),f=a(316);const S=()=>{const{getBundleData:e}=(0,c.A)(),{bundleTitle:t}=e();return l().createElement(v.B,{className:"lr-c-catalog__header"},l().createElement(h.a,null,l().createElement(f.h,{className:"lr-c-catalog__header-bundle",headingLevel:"h2",size:"lg"},t)),l().createElement(h.a,null,l().createElement(f.h,{headingLevel:"h1",size:"2xl"},"Learning Resources")))};var b=a(9259),N=a(8501),y=a(4629);const C=({onSearchInputChange:e,quickStartsCount:t})=>l().createElement(b.$,{className:"pf-v5-u-pt-sm pf-v5-u-pb-sm lr-c-catalog__filter"},l().createElement(N.o,{className:"pfext-quick-start-catalog-filter__input"},l().createElement(y.D,{placeholder:"Filter by keywords...",onChange:(t,a)=>e(a)})),l().createElement(N.o,{className:"pf-v5-u-mr-md"},l().createElement(s.QuickStartCatalogFilterCountWrapper,{quickStartsCount:t})));var Q=a(4992),w=a(2583),$=a(5886),F=a(6998),_=a(6553),q=a(7725),I=a(7321),D=a(666),A=a(3973),T=a(1976),P=a(2069),x=a(9015),B=a(1903),L=a(7603),R=a(3440);const z=()=>l().createElement(u.I,{className:"lr-c-bookmark__icon"},l().createElement(R.Ay,null)),G=()=>l().createElement(u.I,{className:"lr-c-bookmark__icon"},l().createElement(L.Ay,null)),O=({quickStart:e,bookmarks:t,isActive:a,status:n})=>l().createElement("div",{className:"lr-c-quickstart_tile"},l().createElement(s.QuickStartTile,{action:null!==t?{"aria-label":t.isFavorite?`Remove quickstart ${e.spec.displayName} from bookmarks.`:`Bookmark quickstart ${e.spec.displayName}.`,icon:t.isFavorite?G:z,onClick:e=>{e.preventDefault(),e.stopPropagation(),t.setFavorite(!t.isFavorite)}}:void 0,quickStart:{...e,spec:{...e.spec,icon:null}},isActive:a,status:n})),U=({children:e,sectionTitle:t,sectionCount:a,isExpandable:r=!0,rightTitle:c,sectionName:s})=>{const[i,o]=(0,n.useState)(!!a);return r?l().createElement($.Q,{isExpanded:i,isIndented:!0,onToggle:()=>o((e=>!e)),className:"lr-c-catalog-section",id:s,toggleContent:l().createElement(D.B,null,l().createElement(A.o,{isFilled:!0},l().createElement(f.h,{headingLevel:"h3",size:"lg"},t,l().createElement(Q.E,{isRead:!a,className:"pf-v5-u-ml-sm"},a))),l().createElement(A.o,null,c))},e):l().createElement("div",{className:"lr-c-catalog-section",id:s},l().createElement(D.B,null,l().createElement(A.o,{isFilled:!0},l().createElement(f.h,{headingLevel:"h3",size:"lg"},t,l().createElement(Q.E,{className:"pf-v5-u-ml-sm"},a))),l().createElement(A.o,null,c)),e?l().createElement("div",{className:"lr-c-catalog-section__static"},e):null)},H=({sectionTitle:e,sectionDescription:t,sectionCount:a,sectionQuickStarts:n,isExpandable:r=!0,activeQuickStartID:c,allQuickStartStates:i,rightTitle:o,emptyBody:u,toggleFavorite:m,sectionName:g})=>{const d=(0,B.useFlag)("platform.learning-resources.bookmarks");return 0===a&&r?l().createElement(F.s,{alignItems:{default:"alignItemsCenter"},id:g,className:"lr-c-catalog-section"},l().createElement(_.Z,{className:"pf-v5-u-mr-sm"},l().createElement(w.$n,{className:"pf-v5-c-expandable-section__toggle pf-v5-u-pl-0 pf-v5-u-pr-0",variant:"plain",isDisabled:!0,icon:l().createElement(x.Ay,null)})),l().createElement(_.Z,null,l().createElement(A.o,{isFilled:!0},l().createElement(f.h,{headingLevel:"h3",size:"lg"},e,l().createElement(Q.E,{isRead:!1,className:"pf-v5-u-ml-sm"},a))),l().createElement(A.o,null,o))):l().createElement(U,{sectionName:g,sectionCount:a,sectionTitle:e,isExpandable:r,rightTitle:o},t&&l().createElement(T.n,{className:"pf-v5-u-mb-md"},l().createElement(P.E,null,t)),a?l().createElement(q.Z,{hasGutter:!0},n.map((e=>l().createElement(I.K,{key:e.metadata.name},l().createElement(O,{quickStart:e,bookmarks:d?{isFavorite:e.metadata.favorite,setFavorite:t=>m(e.metadata.name,t)}:null,isActive:e.metadata.name===c,status:(0,s.getQuickStartStatus)(i||{},e.metadata.name)}))))):u)};var Z=a(7840),M=a(7670);const J=({defaultActive:e,linkItems:t})=>{const a=n.useRef(null),[l,r]=n.useState(e),c=n.useCallback((e=>{document.location.href=`${document.location.pathname}#${e}`,r(e)}),[r]);return n.useEffect((()=>{"IntersectionObserver"in window&&(()=>{const e=Array.from(document.querySelectorAll(".lr-c-catalog-section"))||[],t=new IntersectionObserver((e=>{const t=e.find((e=>e.isIntersecting));t&&r(t?.target?.id)}),{threshold:.5});Array.from(e).forEach((e=>{t.observe(e)}))})()}),[]),n.createElement("div",{ref:a},n.createElement(Z.G,{isVertical:!0,label:"Jump to section"},t.map((({id:e,label:t})=>n.createElement(M.$,{key:e,onClick:()=>c(e),isActive:l===e},t)))))};var K=a(1415),V=a.n(K);const W="/api/quickstarts/v1",Y="/quickstarts",j="/favorites",X=(e,t)=>e.spec.displayName.localeCompare(t.spec.displayName),ee=({bundle:e})=>{const t=(0,c.A)(),{activeQuickStartID:a,allQuickStartStates:r,setFilter:v,loading:f}=l().useContext(s.QuickStartContext),b=(0,B.useFlag)("platform.learning-resources.bookmarks"),[N,y]=(0,n.useState)(window.innerHeight),Q=e||"settings",{contentReady:w,documentation:$,learningPaths:F,other:_,quickStarts:q,bookmarks:I,toggleFavorite:D}=(e=>{const t=(0,c.A)(),{quickStarts:a}=t,[l,r]=(0,n.useState)(!1),[i,o]=(0,n.useState)([]),{allQuickStartStates:u,allQuickStarts:m=[],filter:g}=(0,n.useContext)(s.QuickStartContext),d=(0,n.useMemo)((()=>(0,s.filterQuickStarts)(m||[],g?.keyword||"",g?.status?.statusFilters,u||{}).sort(X).reduce(((e,t)=>{const a=function(e,t){return!!t.find((t=>t.quickstartName===e.metadata.name))}(t,i),n={...t,metadata:{...t.metadata,favorite:a}};return a&&e.bookmarks.push(n),t.metadata.externalDocumentation?e.documentation.push(n):t.metadata.otherResource?e.other.push(n):t.metadata.learningPath?e.learningPaths.push(n):e.quickStarts.push(n),e}),{documentation:[],quickStarts:[],other:[],learningPaths:[],bookmarks:[]})),[m,g,i]);async function p(e,a){const n=[...i],l=i.filter((t=>t.quickstartName!==e));a&&l.push({favorite:a,quickstartName:e}),o(l);const r=await t.auth.getUser();if(!r)throw new Error("User not logged in");const c=r.identity.internal?.account_id;try{await V().post(`${W}/${j}?account=${c}`,{quickstartName:e,favorite:a})}catch(e){console.error("Failed to update favorites",e),o(n)}}return(0,n.useEffect)((()=>{!async function(){const n=await t.auth.getUser();if(!n)throw new Error("User not logged in");const l=n.identity.internal?.account_id,c=e?`${W}/${Y}?bundle=${e}`:`${W}/${Y}?account=${l}`,s=[V().get(c).then((({data:t})=>{e?a.set(`${e}`,t.data.map((({content:e})=>e))):a.set(`${l}`,t.data.map((({content:e})=>e)))})),l?V().get(`${W}/${j}?account=${l}`).then((({data:e})=>e.data)):Promise.resolve([])],[,i]=await Promise.allSettled(s);"fulfilled"===i.status&&i.value&&o(i.value),r(!0)}()}),[e]),(0,n.useMemo)((()=>({...d,contentReady:l,toggleFavorite:p})),[d,l,p])})(Q),[A,T]=(0,n.useState)({count:I.length,perPage:20,page:1}),P=q.length+$.length+F.length+_.length;return t.updateDocumentTitle("Learning Resources"),(0,n.useEffect)((()=>{t.hideGlobalFilter(!0)}),[]),l().useLayoutEffect((()=>{function e(){y(window.innerHeight-(document.querySelector("header")?.getBoundingClientRect()?.height||0))}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),!w||f?l().createElement(s.LoadingBox,null):l().createElement(m.v,{id:"learning-resources-wrapper",style:{height:`${N}px`}},l().createElement(g.d8,{className:"pf-v5-u-p-lg lr-c-catalog__header"},l().createElement(h.a,{className:"pf-v5-u-mb-md"},l().createElement(S,null)),l().createElement(h.a,null,l().createElement(C,{quickStartsCount:P,onSearchInputChange:e=>{v("keyword",e)}}))),l().createElement(g.d8,{className:"pf-v5-u-background-color-200 pf-m-fill"},l().createElement("div",{className:"pf-v5-u-h-100"},l().createElement(p.B,{id:"content-wrapper",isPanelRight:!0,hasGutter:!0},l().createElement(k.Y,{id:"quick-starts",className:"pf-v5-u-background-color-200"},b&&l().createElement(l().Fragment,null,l().createElement(H,{sectionName:"bookmarks",toggleFavorite:D,sectionCount:I.length,emptyBody:l().createElement(o.p,{className:"lr-c-empty_bookmarks"},"No bookmarked resources yet. Click the"," ",l().createElement(u.I,{className:"lr-c-bookmark__icon"},l().createElement(R.Ay,null)),"icon to pin it to your bookmarks here."),sectionTitle:l().createElement("span",null,l().createElement(u.I,{className:"lr-c-bookmark__icon pf-v5-u-ml-sm pf-v5-u-pr-md"},l().createElement(L.Ay,null)),"Bookmarks"),rightTitle:l().createElement(d.d,{itemCount:I.length,perPage:A.perPage,page:A.page,onSetPage:(e,t)=>{T((e=>({...e,page:t})))},widgetId:"pagination-options-menu-top",onPerPageSelect:(e,t)=>T((e=>({...e,perPage:t}))),isCompact:!0}),isExpandable:!1,sectionQuickStarts:I.slice((A.page-1)*A.perPage,A.page*(A.perPage-1)+1),activeQuickStartID:a,allQuickStartStates:r}),l().createElement(i.c,{className:"pf-v5-u-mt-lg pf-v5-u-mb-lg"})),l().createElement(H,{sectionName:"documentation",toggleFavorite:D,sectionCount:$.length,sectionTitle:"Documentation",sectionDescription:"Technical information for using the service",sectionQuickStarts:$,activeQuickStartID:a,allQuickStartStates:r}),l().createElement(i.c,{className:"pf-v5-u-mt-lg pf-v5-u-mb-lg"}),l().createElement(H,{sectionName:"quick-starts",toggleFavorite:D,sectionCount:q.length,sectionTitle:"Quick starts",sectionDescription:"Step-by-step instructions and tasks",sectionQuickStarts:q,activeQuickStartID:a,allQuickStartStates:r}),l().createElement(i.c,{className:"pf-v5-u-mt-lg pf-v5-u-mb-lg"}),l().createElement(H,{sectionName:"learning-paths",toggleFavorite:D,sectionCount:F.length,sectionTitle:"Learning paths",sectionDescription:"Collections of learning materials contributing to a common use case",sectionQuickStarts:F,activeQuickStartID:a,allQuickStartStates:r}),l().createElement(i.c,{className:"pf-v5-u-mt-lg pf-v5-u-mb-lg"}),l().createElement(H,{sectionName:"other-content-types",toggleFavorite:D,sectionCount:_.length,sectionTitle:"Other content types",sectionDescription:"Tutorials, videos, e-books, and more to help you build your skills",sectionQuickStarts:_,activeQuickStartID:a,allQuickStartStates:r})),l().createElement(E.r,{variant:"sticky",className:"pf-v5-u-background-color-200 pf-v5-u-pl-lg pf-v5-u-pl-0-on-lg"},l().createElement(J,{defaultActive:"bookmarks",linkItems:[{id:"bookmarks",label:`Bookmarks (${I.length})`},{id:"documentation",label:`Documentation (${$.length})`},{id:"quick-starts",label:`Quick starts (${q.length})`},{id:"learning-paths",label:`Learning paths (${F.length})`},{id:"other-content-types",label:`Other content types (${_.length})`}]}))))))},te=e=>l().createElement(ee,{...e}),ae=document.getElementById("root");ae&&(0,r.H)(ae).render(l().createElement((function(){return(0,n.useEffect)((()=>{ae?.setAttribute("data-ouia-safe","true")})),l().createElement(te,{bundle:"settings"})}),null))},9826:()=>{},1741:()=>{},9829:()=>{},935:()=>{},6905:()=>{},9697:()=>{},1537:()=>{},1069:()=>{},4778:()=>{},4708:()=>{},2004:()=>{},4895:()=>{},3701:()=>{},1036:()=>{},3188:()=>{},8700:()=>{},1641:()=>{},545:()=>{},3091:()=>{},8497:()=>{},1453:()=>{},7553:()=>{},8195:()=>{},8469:()=>{},7077:()=>{},6752:()=>{},2580:()=>{},364:()=>{},3696:()=>{},2804:()=>{}}]);