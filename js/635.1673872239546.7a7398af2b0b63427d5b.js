/*! For license information please see 635.1673872239546.7a7398af2b0b63427d5b.js.LICENSE.txt */
(self.webpackChunklearning_resources_app=self.webpackChunklearning_resources_app||[]).push([[635],{8679:(e,t,r)=>{"use strict";var o=r(1296),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function p(e){return o.isMemo(e)?a:s[e.$$typeof]||n}s[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[o.Memo]=a;var f=Object.defineProperty,i=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(m){var n=l(r);n&&n!==m&&e(t,n,o)}var a=i(r);y&&(a=a.concat(y(r)));for(var s=p(t),b=p(r),d=0;d<a.length;++d){var S=a[d];if(!(c[S]||o&&o[S]||b&&b[S]||s&&s[S])){var $=u(r,S);try{f(t,S,$)}catch(e){}}}}return t}},6103:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,p=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.async_mode"):60111,y=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,l=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,d=r?Symbol.for("react.lazy"):60116,S=r?Symbol.for("react.block"):60121,$=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case i:case y:case c:case s:case a:case l:return e;default:switch(e=e&&e.$$typeof){case f:case u:case d:case b:case p:return e;default:return t}}case n:return t}}}function P(e){return h(e)===y}t.AsyncMode=i,t.ConcurrentMode=y,t.ContextConsumer=f,t.ContextProvider=p,t.Element=o,t.ForwardRef=u,t.Fragment=c,t.Lazy=d,t.Memo=b,t.Portal=n,t.Profiler=s,t.StrictMode=a,t.Suspense=l,t.isAsyncMode=function(e){return P(e)||h(e)===i},t.isConcurrentMode=P,t.isContextConsumer=function(e){return h(e)===f},t.isContextProvider=function(e){return h(e)===p},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return h(e)===u},t.isFragment=function(e){return h(e)===c},t.isLazy=function(e){return h(e)===d},t.isMemo=function(e){return h(e)===b},t.isPortal=function(e){return h(e)===n},t.isProfiler=function(e){return h(e)===s},t.isStrictMode=function(e){return h(e)===a},t.isSuspense=function(e){return h(e)===l},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===y||e===s||e===a||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===b||e.$$typeof===p||e.$$typeof===f||e.$$typeof===u||e.$$typeof===$||e.$$typeof===g||e.$$typeof===O||e.$$typeof===S)},t.typeOf=h},1296:(e,t,r)=>{"use strict";e.exports=r(6103)},2703:(e,t,r)=>{"use strict";var o=r(414);function n(){}function c(){}c.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,c,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:n};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7462:(e,t,r)=>{"use strict";function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},o.apply(this,arguments)}r.d(t,{Z:()=>o})}}]);