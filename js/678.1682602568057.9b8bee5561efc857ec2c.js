"use strict";(self.webpackChunklearning_resources_app=self.webpackChunklearning_resources_app||[]).push([[678],{3678:(t,e,a)=>{a.r(e);var r=a(3264),n=a.n(r),l=a(3644),c=a.n(l),o=a(6530),i=a(9704),u=a(3719),s=a(8573),m=a.n(s),d=a(1712),p=function(t,e,a){if(a||2===arguments.length)for(var r,n=0,l=e.length;n<l;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))};function f(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return(0,u.JH)({},p([m(),(0,d.ZP)({errorDescriptionKey:["detail","stack"]})],t,!0))}var v=a(5140),k=a(3812),g=a(6848),y=function(t){var e,a,l,c=n().useContext(k.QuickStartContext),o=c.activeQuickStartID,i=c.allQuickStartStates,u=c.allQuickStarts,s=c.filter,m=c.setFilter,d=c.loading,p=(0,v.Z)(),f=p.quickStarts,y=(null==t?void 0:t.bundle)||"settings";null===(e=null==p?void 0:p.updateDocumentTitle)||void 0===e||e.call(p,"Learning Resources"),(0,r.useEffect)((function(){fetch("/api/quickstarts/v1/quickstarts?bundle=".concat(y)).then((function(t){return t.json()})).then((function(t){var e=t.data;return f.set("".concat(y),e.map((function(t){return t.content})))})).catch((function(t){console.log(t.message)}))}),[]);var E=function(t,e){return t.spec.displayName.localeCompare(e.spec.displayName)},S=n().useState((0,k.filterQuickStarts)(u||[],(null==s?void 0:s.keyword)||"",null===(a=null==s?void 0:s.status)||void 0===a?void 0:a.statusFilters,i||{}).sort(E)),h=S[0],C=S[1];n().useEffect((function(){var t;C((0,k.filterQuickStarts)(u||[],(null==s?void 0:s.keyword)||"",null===(t=null==s?void 0:s.status)||void 0===t?void 0:t.statusFilters,i||{}).sort(E))}),[i,u,null==s?void 0:s.keyword,null===(l=null==s?void 0:s.status)||void 0===l?void 0:l.statusFilters]);var Q=n().createElement(n().Fragment,null,n().createElement(k.QuickStartCatalogSection,null,n().createElement(g.TextContent,{className:"pf-u-mb-sm"},n().createElement(g.Text,{component:"h2"},"Quick starts"),n().createElement(g.Text,{component:"p",className:"catalog-sub"},"Quick starts for using the Red Hat Hybrid Cloud Console")),n().createElement(g.Gallery,{className:"pfext-quick-start-catalog__gallery",hasGutter:!0},null==u?void 0:u.filter((function(t){return!t.metadata.externalDocumentation})).map((function(t){var e=t.metadata.name;return n().createElement(g.GalleryItem,{key:e,className:"pfext-quick-start-catalog__gallery-item"},n().createElement(k.QuickStartTile,{quickStart:t,isActive:e===o,status:(0,k.getQuickStartStatus)(i||{},e)}))})))),n().createElement(g.Divider,null),n().createElement(k.QuickStartCatalogSection,null,n().createElement(g.TextContent,{className:"pf-u-mb-sm"},n().createElement(g.Text,{component:"h2"},"Documentation"),n().createElement(g.Text,{component:"p",className:"catalog-sub"},"Technical information for using the Red Hat Hybrid Cloud Console")),n().createElement(g.Gallery,{className:"pfext-quick-start-catalog__gallery",hasGutter:!0},null==u?void 0:u.filter((function(t){return t.metadata.externalDocumentation})).map((function(t){var e=t.metadata.name;return n().createElement(g.GalleryItem,{key:e,className:"pfext-quick-start-catalog__gallery-item"},n().createElement(k.QuickStartTile,{quickStart:t,isActive:e===o,status:(0,k.getQuickStartStatus)(i||{},e)}))})))));return d?n().createElement(k.LoadingBox,null):n().createElement(n().Fragment,null,n().createElement(k.QuickStartCatalogHeader,{title:"Learning Resources"}),n().createElement(g.Divider,{component:"div"}),n().createElement(k.QuickStartCatalogToolbar,null,n().createElement(g.ToolbarContent,null,n().createElement(g.ToolbarItem,{className:"pfext-quick-start-catalog-filter__input"},n().createElement(g.SearchInput,{placeholder:"Filter by keyword...",onChange:function(t,e){return function(t){var e,a=(0,k.filterQuickStarts)(u||[],t,null===(e=null==s?void 0:s.status)||void 0===e?void 0:e.statusFilters,i||{}).sort((function(t,e){return t.spec.displayName.localeCompare(e.spec.displayName)}));m("keyword",t),C(a)}(e)}})),n().createElement(k.QuickStartCatalogFilterStatusWrapper,{onStatusChange:function(t){var e=(0,k.filterQuickStarts)(u||[],(null==s?void 0:s.keyword)||"",t,i||{}).sort((function(t,e){return t.spec.displayName.localeCompare(e.spec.displayName)}));m("status",t),C(e)}}),n().createElement(k.QuickStartCatalogFilterCountWrapper,{quickStartsCount:h.length}))),n().createElement(g.Divider,{component:"div"}),0===h.length?n().createElement(k.QuickStartCatalogEmptyState,{clearFilters:function(){m("keyword",""),m("status",[]),(0,k.clearFilterParams)(),C((null==u?void 0:u.sort((function(t,e){return t.spec.displayName.localeCompare(e.spec.displayName)})))||[])}}):h.length!==(null==u?void 0:u.length)?n().createElement(k.QuickStartCatalog,{quickStarts:h}):Q)},E=a(5240),S=(a(9661),function(){return S=Object.assign||function(t){for(var e,a=1,r=arguments.length;a<r;a++)for(var n in e=arguments[a])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},S.apply(this,arguments)});var h=document.getElementById("root");c().render(n().createElement((function(t){return n().createElement(i.zt,{store:f.apply(void 0,[]).getStore()},n().createElement(o.BrowserRouter,{basename:(0,E.eb)(window.location.pathname)},n().createElement(y,S({},t))))}),null),h,(function(){return null==h?void 0:h.setAttribute("data-ouia-safe","true")}))}}]);
//# sourceMappingURL=../sourcemaps/678.0b1c1780744059918ac1399b22cfd8d5.js.map