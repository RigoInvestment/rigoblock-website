webpackJsonp([0xd2a57dc1d883],{75:function(n,e,o){"use strict";function t(n,e,o){var t=a.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function u(n,e,o){return a.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=u;var a=[{plugin:o(333),options:{plugins:[]}},{plugin:o(328),options:{plugins:[],trackingId:"UA-42569144-2",anonymize:!0}}]},187:function(n,e,o){"use strict";var t;e.components={"component---src-templates-docs-js":o(305),"component---src-pages-404-js":o(302),"component---src-pages-about-js":o(303),"component---src-pages-index-js":o(304)},e.json=(t={"layout-index.json":o(8),"extensions-twig.json":o(321)},t["layout-index.json"]=o(8),t["extensions-html.json"]=o(316),t["layout-index.json"]=o(8),t["extensions-drupal-support.json"]=o(315),t["layout-index.json"]=o(8),t["extensions-html-support.json"]=o(320),t["layout-index.json"]=o(8),t["extensions-twig-support.json"]=o(326),t["layout-index.json"]=o(8),t["extensions-drupal-expressions.json"]=o(314),t["layout-index.json"]=o(8),t["extensions-twig-expressions.json"]=o(325),t["layout-index.json"]=o(8),t["extensions-drupal.json"]=o(310),t["layout-index.json"]=o(8),t["extensions-core.json"]=o(309),t["layout-index.json"]=o(8),t["extensions-drupal-configuration.json"]=o(313),t["layout-index.json"]=o(8),t["extensions-html-configuration.json"]=o(319),t["layout-index.json"]=o(8),t["extensions-twig-configuration.json"]=o(324),t["layout-index.json"]=o(8),t["extensions-drupal-components.json"]=o(312),t["layout-index.json"]=o(8),t["extensions-html-components.json"]=o(318),t["layout-index.json"]=o(8),t["extensions-twig-components.json"]=o(323),t["layout-index.json"]=o(8),t["extensions-drupal-cli.json"]=o(311),t["layout-index.json"]=o(8),t["extensions-html-cli.json"]=o(317),t["layout-index.json"]=o(8),t["extensions-twig-cli.json"]=o(322),t["layout-index.json"]=o(8),t["404.json"]=o(306),t["layout-index.json"]=o(8),t["about.json"]=o(308),t["layout-index.json"]=o(8),t["index.json"]=o(327),t["layout-index.json"]=o(8),t["404-html.json"]=o(307),t),e.layouts={"layout---index":o(301)}},188:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function u(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(1),c=t(i),l=o(6),p=t(l),f=o(122),d=t(f),m=o(53),h=t(m),g=o(75),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},y=function(n){function e(o){u(this,e);var t=a(this,n.call(this)),r=o.location;return d.default.getPage(r.pathname)||(r=s({},r,{pathname:"/404.html"})),t.state={location:r,pageResources:d.default.getResourcesForPathname(r.pathname)},t}return r(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);y.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=y,n.exports=e.default},53:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(362),a=t(u),r=(0,a.default)();n.exports=r},189:function(n,e,o){"use strict";var t=o(74),u={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var a=decodeURIComponent(o),r=a.slice(e.length);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),u[r])return u[r];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,t.matchPath)(r,{path:n.path})||(0,t.matchPath)(r,{path:n.matchPath}))return s=n,u[r]=n,!0}else{if((0,t.matchPath)(r,{path:n.path,exact:!0}))return s=n,u[r]=n,!0;if((0,t.matchPath)(r,{path:n.path+"index.html"}))return s=n,u[r]=n,!0}return!1}),s}}},190:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(98),a=t(u),r=o(75),s=(0,r.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},307:function(n,e,o){o(5),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(337)})})}},306:function(n,e,o){o(5),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(338)})})}},308:function(n,e,o){o(5),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(339)})})}},309:function(n,e,o){o(5),n.exports=function(n){return o.e(0x839093a01bb1,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(340)})})}},311:function(n,e,o){o(5),n.exports=function(n){return o.e(0x89f5fe66954d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(341)})})}},312:function(n,e,o){o(5),n.exports=function(n){return o.e(7540436863047,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(342)})})}},313:function(n,e,o){o(5),n.exports=function(n){return o.e(0x87d2a53097a6,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(343)})})}},314:function(n,e,o){o(5),n.exports=function(n){return o.e(0x76a5f5b8566c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(344)})})}},315:function(n,e,o){o(5),n.exports=function(n){return o.e(71468317605799,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(345)})})}},310:function(n,e,o){o(5),n.exports=function(n){return o.e(0xdc4c8783bcd1,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(346)})})}},317:function(n,e,o){o(5),n.exports=function(n){return o.e(0x684bbd39302c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(347)})})}},318:function(n,e,o){o(5),n.exports=function(n){return o.e(0xb36a256cf88a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(348)})})}},319:function(n,e,o){o(5),n.exports=function(n){return o.e(67593613414632,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(349)})})}},320:function(n,e,o){o(5),n.exports=function(n){return o.e(0x86084ebfcd68,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(350)})})}},316:function(n,e,o){o(5),n.exports=function(n){return o.e(0x86028b0a74f1,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(351)})})}},322:function(n,e,o){o(5),n.exports=function(n){return o.e(0xbb0c4c2ac9f3,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(352)})})}},323:function(n,e,o){o(5),n.exports=function(n){return o.e(73944398853416,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(353)})})}},324:function(n,e,o){o(5),n.exports=function(n){return o.e(26356930845929,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(354)})})}},325:function(n,e,o){o(5),n.exports=function(n){return o.e(54062291334786,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(355)})})}},326:function(n,e,o){o(5),n.exports=function(n){return o.e(67289373011392,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(356)})})}},321:function(n,e,o){o(5),n.exports=function(n){return o.e(70830407456377,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(357)})})}},327:function(n,e,o){o(5),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(358)})})}},8:function(n,e,o){o(5),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(100)})})}},301:function(n,e,o){o(5),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(191)})})}},122:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var u=o(1),a=(t(u),o(189)),r=t(a),s=o(53),i=t(s),c=void 0,l={},p={},f={},d={},m={},h=[],g=[],x={},y=[],j={},v=function(n){return n&&n.default||n},R=void 0,C=!0;R=o(192)({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(n){b(n,function(){y=y.filter(function(e){return e!==n}),R.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){R.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){R.onPostLoadPageResources(n)});var N=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},w=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},b=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])n.nextTick(function(){o(null,d[e])});else{var t=void 0;t="component---"===e.slice(0,12)?p.components[e]:"layout---"===e.slice(0,9)?p.layouts[e]:p.json[e],t(function(n,t){d[e]=t,o(n,t)})}},k=function(e,o){m[e]?n.nextTick(function(){o(null,m[e])}):b(e,function(n,t){if(n)o(n);else{var u=v(t());m[e]=u,o(n,u)}})},P=1,_={empty:function(){g=[],x={},j={},y=[],h=[]},addPagesArray:function(n){h=n;var e="";e="",c=(0,r.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return g.pop()},enqueue:function(n){if(!h.some(function(e){return e.path===n}))return!1;var e=1/P;P+=1,x[n]?x[n]+=1:x[n]=1,_.has(n)||g.unshift(n),g.sort(w);var o=c(n);return o.jsonName&&(j[o.jsonName]?j[o.jsonName]+=1+e:j[o.jsonName]=1+e,y.indexOf(o.jsonName)!==-1||d[o.jsonName]||y.unshift(o.jsonName)),o.componentChunkName&&(j[o.componentChunkName]?j[o.componentChunkName]+=1+e:j[o.componentChunkName]=1+e,y.indexOf(o.componentChunkName)!==-1||d[o.jsonName]||y.unshift(o.componentChunkName)),y.sort(N),R.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:j}},getPages:function(){return{pathArray:g,pathCount:x}},getPage:function(n){return c(n)},has:function(n){return g.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var u;if(o){if(t>=e.length)break;u=e[t++]}else{if(t=e.next(),t.done)break;u=t.value}var a=u;a.unregister()}window.location.reload()}})),C=!1;var t=c(e);if(!t)return console.log("A page wasn't found for \""+e+'"'),o();if(e=t.path,f[e])return n.nextTick(function(){o(f[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:f[e]})}),f[e];i.default.emit("onPreLoadPageResources",{path:e});var u=void 0,a=void 0,r=void 0,s=function(){if(u&&a&&(!t.layoutComponentChunkName||r)){f[e]={component:u,json:a,layout:r,page:t};var n={component:u,json:a,layout:r,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return k(t.componentChunkName,function(n,e){n&&console.log("Loading the component for "+t.path+" failed"),u=e,s()}),k(t.jsonName,function(n,e){n&&console.log("Loading the JSON for "+t.path+" failed"),a=e,s()}),void(t.layoutComponentChunkName&&k(t.layout,function(n,e){n&&console.log("Loading the Layout for "+t.path+" failed"),r=e,s()}))},peek:function(n){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(n){return g.length-g.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:_.getResourcesForPathname};e.default=_}).call(e,o(68))},359:function(n,e){n.exports=[{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-twig.json",path:"/extensions/twig/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-html.json",path:"/extensions/html/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-drupal-support.json",path:"/extensions/drupal/support/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-html-support.json",path:"/extensions/html/support/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-twig-support.json",path:"/extensions/twig/support/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-drupal-expressions.json",path:"/extensions/drupal/expressions/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-twig-expressions.json",path:"/extensions/twig/expressions/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-drupal.json",path:"/extensions/drupal/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-core.json",path:"/extensions/core/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-drupal-configuration.json",path:"/extensions/drupal/configuration/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-html-configuration.json",path:"/extensions/html/configuration/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-twig-configuration.json",path:"/extensions/twig/configuration/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-drupal-components.json",path:"/extensions/drupal/components/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-html-components.json",path:"/extensions/html/components/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-twig-components.json",path:"/extensions/twig/components/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-drupal-cli.json",path:"/extensions/drupal/cli/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-html-cli.json",path:"/extensions/html/cli/"},{componentChunkName:"component---src-templates-docs-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"extensions-twig-cli.json",path:"/extensions/twig/cli/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},192:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],u=[],a=function(){var n=e();n&&(u.push(n),o(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":u=u.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===u.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:u}},empty:function(){t=[],u=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(75),r=o(1),s=t(r),i=o(155),c=t(i),l=o(74),p=o(332),f=o(287),d=t(f),m=o(190),h=t(m),g=o(53),x=t(g),y=o(359),j=t(y),v=o(360),R=t(v),C=o(188),N=t(C),w=o(187),b=t(w),k=o(122),P=t(k);o(275),window.___emitter=x.default,P.default.addPagesArray(j.default),P.default.addProdRequires(b.default),window.asyncRequires=b.default,window.___loader=P.default,window.matchPath=l.matchPath;var _=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=_[n];return null!=e&&(h.default.replace(e.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var o=e.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var u=n.location.pathname;if(u===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o(193);var t=function(n){function e(o){o.page.path===P.default.getPage(n).path&&(x.default.off("onPostLoadPageResources",e),clearTimeout(t),window.___history.push(n))}var o=_[n];if(o&&(n=o.toPath),window.location.pathname!==n){var t=setTimeout(function(){x.default.off("onPostLoadPageResources",e),x.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);P.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):x.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],f=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},m=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,r.createElement)(i?i:f,null,(0,r.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,r.createElement)(m,{layout:!0,children:function(e){return(0,r.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,r.createElement)(N.default,u({page:!0},t)):(0,r.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},360:function(n,e){n.exports=[]},193:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(53),a=t(u),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},287:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,u="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(u,n=function(){for(o.removeEventListener(u,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},5:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),u=o.e,a=o.s;o.e=function(t,r){var s=!1,i=!0,c=function(n){r&&(r(o,n),r=null)};return!a&&e&&e[t]?void c(!0):(u(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},328:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",(e||{}).pathname),window.ga("send","pageview"))}},333:function(n,e,o){"use strict";var t=function(n){setTimeout(function(){var e=window.location.hash.replace("#","");if(""!==e){var o=document.getElementById(e);if(o){var t=o.offsetTop;window.scrollTo(0,t-n)}}},10)};e.onClientEntry=function(n,e){var o=0;e.offsetY&&(o=e.offsetY)},e.onRouteUpdate=function(n,e){var o=0;e.offsetY&&(o=e.offsetY),t(o)}},362:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},302:function(n,e,o){o(5),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(202)})})}},303:function(n,e,o){o(5),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(203)})})}},304:function(n,e,o){o(5),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(204)})})}},305:function(n,e,o){o(5),n.exports=function(n){return o.e(0xd72e590acfcb,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(205)})})}}});
//# sourceMappingURL=app-9dff72fa5a5bc3a30c58.js.map