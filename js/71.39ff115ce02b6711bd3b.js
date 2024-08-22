(self.webpackChunklearningResources=self.webpackChunklearningResources||[]).push([[71,738,527],{4281:(e,t,a)=>{"use strict";a.r(t);var n=a(4065),l=a.n(n),r=a(745),c=a(5140),s=a(474),i=a(5627),o=a(9947),u=a(4580),m=a(4277),g=a(2045),d=a(8907),p=a(2884),k=a(7544),E=a(660),h=a(3826),f=a(9739),v=a(8779);const S=()=>{const{getBundleData:e}=(0,c.Z)(),{bundleTitle:t}=e();return l().createElement(f.K,{className:"lr-c-catalog__header"},l().createElement(h.v,null,l().createElement(v.D,{className:"lr-c-catalog__header-bundle",headingLevel:"h2",size:"lg"},t)),l().createElement(h.v,null,l().createElement(v.D,{headingLevel:"h1",size:"2xl"},"Learning Resources")))};var b=a(6487),N=a(6050),y=a(5881);const C=({onSearchInputChange:e,quickStartsCount:t})=>l().createElement(b.a,{className:"pf-v5-u-pt-sm pf-v5-u-pb-sm lr-c-catalog__filter"},l().createElement(N.Z,{className:"pfext-quick-start-catalog-filter__input"},l().createElement(y.M,{placeholder:"Filter by keywords...",onChange:(t,a)=>e(a)})),l().createElement(N.Z,{className:"pf-v5-u-mr-md"},l().createElement(s.QuickStartCatalogFilterCountWrapper,{quickStartsCount:t})));var Q=a(8711),w=a(7173),P=a(5373),F=a(8191),_=a(2298),q=a(4429),D=a(5023),$=a(9851),I=a(4512),T=a(8774),x=a(8340),L=a(3174),R=a(8305),B=a(3864),J=a(7582);const A=()=>l().createElement(u.J,{className:"lr-c-bookmark__icon"},l().createElement(J.ZP,null)),Z=()=>l().createElement(u.J,{className:"lr-c-bookmark__icon"},l().createElement(B.ZP,null)),z=({quickStart:e,bookmarks:t,isActive:a,status:n})=>l().createElement("div",{className:"lr-c-quickstart_tile"},l().createElement(s.QuickStartTile,{action:null!==t?{"aria-label":t.isFavorite?`Remove quickstart ${e.spec.displayName} from bookmarks.`:`Bookmark quickstart ${e.spec.displayName}.`,icon:t.isFavorite?Z:A,onClick:e=>{e.preventDefault(),e.stopPropagation(),t.setFavorite(!t.isFavorite)}}:void 0,quickStart:{...e,spec:{...e.spec,icon:null}},isActive:a,status:n})),O=({children:e,sectionTitle:t,sectionCount:a,isExpandable:r=!0,rightTitle:c,sectionName:s})=>{const[i,o]=(0,n.useState)(!!a);return r?l().createElement(P.L,{isExpanded:i,isIndented:!0,onToggle:()=>o((e=>!e)),className:"lr-c-catalog-section",id:s,toggleContent:l().createElement($.P,null,l().createElement(I.J,{isFilled:!0},l().createElement(v.D,{headingLevel:"h3",size:"lg"},t,l().createElement(Q.C,{isRead:!a,className:"pf-u-ml-sm"},a))),l().createElement(I.J,null,c))},e):l().createElement("div",{className:"lr-c-catalog-section",id:s},l().createElement($.P,null,l().createElement(I.J,{isFilled:!0},l().createElement(v.D,{headingLevel:"h3",size:"lg"},t,l().createElement(Q.C,{className:"pf-u-ml-sm"},a))),l().createElement(I.J,null,c)),e?l().createElement("div",{className:"lr-c-catalog-section__static"},e):null)},U=({sectionTitle:e,sectionDescription:t,sectionCount:a,sectionQuickStarts:n,isExpandable:r=!0,activeQuickStartID:c,allQuickStartStates:i,rightTitle:o,emptyBody:u,toggleFavorite:m,sectionName:g})=>{const d=(0,R.useFlag)("platform.learning-resources.bookmarks");return 0===a&&r?l().createElement(F.k,{alignItems:{default:"alignItemsCenter"},id:g,className:"lr-c-catalog-section"},l().createElement(_.B,{className:"pf-v5-u-mr-sm"},l().createElement(w.zx,{className:"pf-c-expandable-section__toggle pf-v5-u-pl-0 pf-v5-u-pr-0",variant:"plain",isDisabled:!0,icon:l().createElement(L.ZP,null)})),l().createElement(_.B,null,l().createElement(I.J,{isFilled:!0},l().createElement(v.D,{headingLevel:"h3",size:"lg"},e,l().createElement(Q.C,{isRead:!1,className:"pf-u-ml-sm"},a))),l().createElement(I.J,null,o))):l().createElement(O,{sectionName:g,sectionCount:a,sectionTitle:e,isExpandable:r,rightTitle:o},t&&l().createElement(T.D,{className:"pf-u-mb-md"},l().createElement(x.x,null,t)),a?l().createElement(q.r,{hasGutter:!0},n.map((e=>l().createElement(D.L,{key:e.metadata.name},l().createElement(z,{quickStart:e,bookmarks:d?{isFavorite:e.metadata.favorite,setFavorite:t=>m(e.metadata.name,t)}:null,isActive:e.metadata.name===c,status:(0,s.getQuickStartStatus)(i||{},e.metadata.name)}))))):u)};var G=a(7208),M=a(4364);const H=({defaultActive:e,linkItems:t})=>{const a=n.useRef(null),[l,r]=n.useState(e),c=n.useCallback((e=>{document.location.href=`${document.location.pathname}#${e}`,r(e)}),[r]);return n.useEffect((()=>{"IntersectionObserver"in window&&(()=>{const e=Array.from(document.querySelectorAll(".lr-c-catalog-section"))||[],t=new IntersectionObserver((e=>{const t=e.find((e=>e.isIntersecting));t&&r(t?.target?.id)}),{threshold:.5});Array.from(e).forEach((e=>{t.observe(e)}))})()}),[]),n.createElement("div",{ref:a},n.createElement(G.P,{isVertical:!0,label:"Jump to section"},t.map((({id:e,label:t})=>n.createElement(M.d,{key:e,onClick:()=>c(e),isActive:l===e},t)))))};var K=a(5527),V=a.n(K);const W="/api/quickstarts/v1",Y="/quickstarts",j="/favorites",X=(e,t)=>e.spec.displayName.localeCompare(t.spec.displayName),ee=({bundle:e})=>{const t=(0,c.Z)(),{activeQuickStartID:a,allQuickStartStates:r,setFilter:f,loading:v}=l().useContext(s.QuickStartContext),b=(0,R.useFlag)("platform.learning-resources.bookmarks"),[N,y]=(0,n.useState)(window.innerHeight),Q=e||"settings",{contentReady:w,documentation:P,learningPaths:F,other:_,quickStarts:q,bookmarks:D,toggleFavorite:$}=(e=>{const t=(0,c.Z)(),{quickStarts:a}=t,[l,r]=(0,n.useState)(!1),[i,o]=(0,n.useState)([]),{allQuickStartStates:u,allQuickStarts:m=[],filter:g}=(0,n.useContext)(s.QuickStartContext),d=(0,n.useMemo)((()=>(0,s.filterQuickStarts)(m||[],g?.keyword||"",g?.status?.statusFilters,u||{}).sort(X).reduce(((e,t)=>{const a=function(e,t){return!!t.find((t=>t.quickstartName===e.metadata.name))}(t,i),n={...t,metadata:{...t.metadata,favorite:a}};return a&&e.bookmarks.push(n),t.metadata.externalDocumentation?e.documentation.push(n):t.metadata.otherResource?e.other.push(n):t.metadata.learningPath?e.learningPaths.push(n):e.quickStarts.push(n),e}),{documentation:[],quickStarts:[],other:[],learningPaths:[],bookmarks:[]})),[m,g,i]);async function p(e,a){const n=[...i],l=i.filter((t=>t.quickstartName!==e));a&&l.push({favorite:a,quickstartName:e}),o(l);const r=await t.auth.getUser();if(!r)throw new Error("User not logged in");const c=r.identity.internal?.account_id;try{await V().post(`${W}/${j}?account=${c}`,{quickstartName:e,favorite:a})}catch(e){console.error("Failed to update favorites",e),o(n)}}return(0,n.useEffect)((()=>{!async function(){const n=await t.auth.getUser();if(!n)throw new Error("User not logged in");const l=n.identity.internal?.account_id,c=e?`${W}/${Y}?bundle=${e}`:`${W}/${Y}?account=${l}`,s=[V().get(c).then((({data:t})=>{e?a.set(`${e}`,t.data.map((({content:e})=>e))):a.set(`${l}`,t.data.map((({content:e})=>e)))})),l?V().get(`${W}/${j}?account=${l}`).then((({data:e})=>e.data)):Promise.resolve([])],[,i]=await Promise.allSettled(s);"fulfilled"===i.status&&i.value&&o(i.value),r(!0)}()}),[e]),(0,n.useMemo)((()=>({...d,contentReady:l,toggleFavorite:p})),[d,l,p])})(Q),[I,T]=(0,n.useState)({count:D.length,perPage:20,page:1}),x=q.length+P.length+F.length+_.length;return t.updateDocumentTitle("Learning Resources"),(0,n.useEffect)((()=>{t.hideGlobalFilter(!0)}),[]),l().useLayoutEffect((()=>{function e(){y(window.innerHeight-(document.querySelector("header")?.getBoundingClientRect()?.height||0))}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),!w||v?l().createElement(s.LoadingBox,null):l().createElement(m.C,{id:"learning-resources-wrapper",style:{height:`${N}px`}},l().createElement(g.NP,{className:"pf-u-p-lg lr-c-catalog__header"},l().createElement(h.v,{className:"pf-u-mb-md"},l().createElement(S,null)),l().createElement(h.v,null,l().createElement(C,{quickStartsCount:x,onSearchInputChange:e=>{f("keyword",e)}}))),l().createElement(g.NP,{className:"pf-u-background-color-200 pf-m-fill"},l().createElement("div",{className:"pf-v5-u-h-100"},l().createElement(p.Y,{id:"content-wrapper",isPanelRight:!0,hasGutter:!0},l().createElement(k.T,{id:"quick-starts",className:"pf-u-background-color-200"},b&&l().createElement(l().Fragment,null,l().createElement(U,{sectionName:"bookmarks",toggleFavorite:$,sectionCount:D.length,emptyBody:l().createElement(o.u,{className:"lr-c-empty_bookmarks"},"No bookmarked resources yet. Click the"," ",l().createElement(u.J,{className:"lr-c-bookmark__icon"},l().createElement(J.ZP,null)),"icon to pin it to your bookmarks here."),sectionTitle:l().createElement("span",null,l().createElement(u.J,{className:"lr-c-bookmark__icon pf-v5-u-ml-sm pf-v5-u-pr-md"},l().createElement(B.ZP,null)),"Bookmarks"),rightTitle:l().createElement(d.t,{itemCount:D.length,perPage:I.perPage,page:I.page,onSetPage:(e,t)=>{T((e=>({...e,page:t})))},widgetId:"pagination-options-menu-top",onPerPageSelect:(e,t)=>T((e=>({...e,perPage:t}))),isCompact:!0}),isExpandable:!1,sectionQuickStarts:D.slice((I.page-1)*I.perPage,I.page*(I.perPage-1)+1),activeQuickStartID:a,allQuickStartStates:r}),l().createElement(i.i,{className:"pf-u-mt-lg pf-u-mb-lg"})),l().createElement(U,{sectionName:"documentation",toggleFavorite:$,sectionCount:P.length,sectionTitle:"Documentation",sectionDescription:"Technical information for using the service",sectionQuickStarts:P,activeQuickStartID:a,allQuickStartStates:r}),l().createElement(i.i,{className:"pf-u-mt-lg pf-u-mb-lg"}),l().createElement(U,{sectionName:"quick-starts",toggleFavorite:$,sectionCount:q.length,sectionTitle:"Quick starts",sectionDescription:"Step-by-step instructions and tasks",sectionQuickStarts:q,activeQuickStartID:a,allQuickStartStates:r}),l().createElement(i.i,{className:"pf-u-mt-lg pf-u-mb-lg"}),l().createElement(U,{sectionName:"learning-paths",toggleFavorite:$,sectionCount:F.length,sectionTitle:"Learning paths",sectionDescription:"Collections of learning materials contributing to a common use case",sectionQuickStarts:F,activeQuickStartID:a,allQuickStartStates:r}),l().createElement(i.i,{className:"pf-u-mt-lg pf-u-mb-lg"}),l().createElement(U,{sectionName:"other-content-types",toggleFavorite:$,sectionCount:_.length,sectionTitle:"Other content types",sectionDescription:"Tutorials, videos, e-books, and more to help you build your skills",sectionQuickStarts:_,activeQuickStartID:a,allQuickStartStates:r})),l().createElement(E.p,{variant:"sticky",className:"pf-u-background-color-200 pf-u-pl-lg pf-u-pl-0-on-lg"},l().createElement(H,{defaultActive:"bookmarks",linkItems:[{id:"bookmarks",label:`Bookmarks (${D.length})`},{id:"documentation",label:`Documentation (${P.length})`},{id:"quick-starts",label:`Quick starts (${q.length})`},{id:"learning-paths",label:`Learning paths (${F.length})`},{id:"other-content-types",label:`Other content types (${_.length})`}]}))))))},te=e=>l().createElement(ee,{...e}),ae=document.getElementById("root");ae&&(0,r.s)(ae).render(l().createElement((function(){return(0,n.useEffect)((()=>{ae?.setAttribute("data-ouia-safe","true")})),l().createElement(te,{bundle:"settings"})}),null))},5467:()=>{},1452:()=>{},8392:()=>{},4946:()=>{},2857:()=>{},108:()=>{},8992:()=>{},187:()=>{},1320:()=>{},8361:()=>{},479:()=>{},6025:()=>{},4839:()=>{},4282:()=>{},7274:()=>{},8572:()=>{},8379:()=>{},2084:()=>{},6928:()=>{},1508:()=>{},3919:()=>{},6822:()=>{},2143:()=>{},314:()=>{},9854:()=>{},8299:()=>{},1934:()=>{},4181:()=>{},6166:()=>{},3519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/71.22f03309f8fd624e842daf8dd479f26a.js.map