"use strict";(self.webpackChunklearningResources=self.webpackChunklearningResources||[]).push([[178],{9947:(e,n,t)=>{t.d(n,{I:()=>i,u:()=>s});var i,l=t(65353),a=t(32747),r=t(38296),o=t(51203);!function(e){e.xs="xs",e.sm="sm",e.lg="lg",e.xl="xl",e.full="full"}(i||(i={}));const s=e=>{var{children:n,className:t,variant:s=i.full,isFullHeight:c}=e,d=(0,l.__rest)(e,["children","className","variant","isFullHeight"]);return a.createElement("div",Object.assign({className:(0,r.i)(o.Z.emptyState,"xs"===s&&o.Z.modifiers.xs,"sm"===s&&o.Z.modifiers.sm,"lg"===s&&o.Z.modifiers.lg,"xl"===s&&o.Z.modifiers.xl,c&&o.Z.modifiers.fullHeight,t)},d),a.createElement("div",{className:(0,r.i)(o.Z.emptyStateContent)},n))};s.displayName="EmptyState"},24396:(e,n,t)=>{t.d(n,{FS:()=>r,tL:()=>a});var i=t(32747),l=t(80164);const a=(e,n,t=(e=>document.activeElement.contains(e)),i=(e=>e),l=["A","BUTTON","INPUT"],a=!1,r=!1,o=!0,s=!0)=>{const c=document.activeElement,d=e.key;let m=null;if(!a&&["ArrowUp","ArrowDown"].includes(d)){e.preventDefault(),e.stopImmediatePropagation();let l=-1;n.forEach(((e,a)=>{if(t(e)){let e=0;for(;!m&&e<n.length&&-1*e<n.length;)"ArrowUp"===d?e--:e++,l=a+e,l>=n.length&&(l=0),l<0&&(l=n.length-1),m=i(n[l])}}))}if(!r&&["ArrowLeft","ArrowRight"].includes(d)){e.preventDefault(),e.stopImmediatePropagation();let i=-1;n.forEach(((a,r)=>{if(t(a)){const t=n[r].querySelectorAll(l.join(","));if(!t.length||s){let e=c;for(;e;)if(e="ArrowLeft"===d?e.previousElementSibling:e.nextElementSibling,e&&l.includes(e.tagName)){m=e;break}}else t.forEach(((n,l)=>{e.target===n&&(i=l+("ArrowLeft"===d?-1:1),i>=t.length&&(i=0),i<0&&(i=t.length-1),m=t[i])}))}}))}m&&(o&&(c.tabIndex=-1,m.tabIndex=0),m.focus())};class r extends i.Component{constructor(){super(...arguments),this.keyHandler=e=>{const{isEventFromContainer:n}=this.props;if(n?!n(e):!this._isEventFromContainer(e))return;const{isActiveElement:t,getFocusableElement:i,noVerticalArrowHandling:l,noHorizontalArrowHandling:r,noEnterHandling:o,noSpaceHandling:s,updateTabIndex:c,validSiblingTags:d,additionalKeyHandler:m,createNavigableElements:u,onlyTraverseSiblings:g}=this.props;m&&m(e);const p=u();if(!p)return void console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");const f=e.key;o||"Enter"===f&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),s||" "===f&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),a(e,p,t,i,d,l,r,c,g)},this._isEventFromContainer=e=>{const{containerRef:n}=this.props;return n.current&&n.current.contains(e.target)}}componentDidMount(){l.Nq&&window.addEventListener("keydown",this.keyHandler)}componentWillUnmount(){l.Nq&&window.removeEventListener("keydown",this.keyHandler)}render(){return null}}r.displayName="KeyboardHandler",r.defaultProps={containerRef:null,createNavigableElements:()=>null,isActiveElement:e=>document.activeElement===e,getFocusableElement:e=>e,validSiblingTags:["BUTTON","A"],onlyTraverseSiblings:!0,updateTabIndex:!0,noHorizontalArrowHandling:!1,noVerticalArrowHandling:!1,noEnterHandling:!1,noSpaceHandling:!1}},99138:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var i=t(32747),l=t.n(i),a=t(10820);const r=e=>l().createElement(a.A,{...e})}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./RootApp.24bf12451177943493fa576e75f022b1.js.map