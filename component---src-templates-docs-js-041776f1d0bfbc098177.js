webpackJsonp([0xd72e590acfcb],{40:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(){return r.default.createElement("footer",{className:"page-footer"},r.default.createElement(c.default,null),r.default.createElement(f.default,null))}t.__esModule=!0,t.default=a;var u=n(1),r=l(u),d=n(22),i=(l(d),n(54)),f=l(i),o=n(53),c=l(o);n(46),e.exports=t.default},46:function(e,t){},76:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(){return r.default.createElement("header",{className:"TopBar"},r.default.createElement("div",{className:"inner"},r.default.createElement("div",{className:"branding-wrap"},r.default.createElement(i.default,{to:"/",tiny:!0}))))}t.__esModule=!0,t.default=a;var u=n(1),r=l(u),d=n(22),i=l(d);n(101),e.exports=t.default},101:function(e,t){},77:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.title,n=e.description,l=e.children;return r.default.createElement("div",{className:"PageWrapper"},r.default.createElement(s.default,null,r.default.createElement("title",null,t," | Blockchain Token Pools"),r.default.createElement("meta",{name:"description",content:n})),r.default.createElement(i.default,null),l,r.default.createElement(o.default,null))}t.__esModule=!0,t.default=a;var u=n(1),r=l(u),d=n(76),i=l(d),f=n(40),o=l(f),c=n(73),s=l(c),m=n(6),p=l(m);n(102),a.propTypes={title:p.default.string.isRequired,children:p.default.element.isRequired,description:p.default.string.isRequired},e.exports=t.default},102:function(e,t){},205:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.data,n=t.markdownRemark,l=t.allMarkdownRemark,a=u(l.edges,n.headings,n.id);return d.default.createElement(f.default,{title:n.frontmatter.title,description:n.frontmatter.description,menu:a,section:n.fields.extension,edit:n.fields.ghEditUrl},d.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))}function u(e,t,n){return e.map(function(e){var l=e.node,a=[],u=!1;return l.id===n&&(u=!0,a=t.filter(s).map(function(e){return{title:e.value,to:m(e.value),below:[]}})),{title:l.fields.menuTitle,to:l.fields.slug,below:a,active:u}})}t.__esModule=!0,t.pageQuery=void 0,t.default=a;var r=n(1),d=l(r),i=n(55),f=l(i),o=n(77),c=(l(o),n(123)),s=(l(c),t.pageQuery="** extracted graphql fragment **",function(e){return 2===e.depth}),m=function(e){return"#"+e.toLowerCase().replace(/ /g,"-")}}});
//# sourceMappingURL=component---src-templates-docs-js-041776f1d0bfbc098177.js.map