(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"013z":function(t,e,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),i=a("q1tI"),r=a.n(i),o=a("NmYn"),s=a.n(o),l=a("OKom"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a("qKvR"),h=function(t){var e,a=t.title,n=t.tabs,i=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(e={},e[u.withTabs]=i.length,e))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a("pEPl"),O=a("BAC9"),g=function(t){var e=t.relativePagePath,a=t.repository,n=m.data.site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,s=r+"/edit/"+i.branch+o+"/src/pages"+e;return r?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},v=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),j=a("I8xM");var y=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props,e=t.tabs,a=t.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=e.map((function(t){var e,i=s()(t,{lower:!0}),r=i===n,o=new RegExp(n+"(?!-)"),l=a.replace(o,i);return Object(d.b)("li",{key:t,className:p()((e={},e[j.selectedItem]=r,e),j.listItem)},Object(d.b)(f.Link,{className:j.link,to:""+l},t))}));return Object(d.b)("div",{className:j.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:j.list},i))))))},n}(r.a.Component),w=a("MjG9");e.a=function(t){var e=t.pageContext,a=t.children,i=t.location,r=t.Title,o=e.frontmatter,b=void 0===o?{}:o,p=e.relativePagePath,u=e.titleType,m=b.tabs,O=b.title,f=b.theme,j=b.description,x=b.keywords,N=n.data.site.pathPrefix,P=N?i.pathname.replace(N,""):i.pathname,k=m?P.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:m,homepage:!1,theme:f,pageTitle:O,pageDescription:j,pageKeywords:x,titleType:u},Object(d.b)(h,{title:r?Object(d.b)(r,null):O,label:"label",tabs:m}),m&&Object(d.b)(y,{slug:P,tabs:m,currentTab:k}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(g,{relativePagePath:p})),Object(d.b)(v.a,{pageContext:e,location:i,slug:P,tabs:m,currentTab:k}),Object(d.b)(l.a,null))}},pEPl:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(t){t.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},tEsJ:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return o})),a.d(e,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var o={},s={_frontmatter:o},l=i.a;function c(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,["components"]);return Object(n.b)(l,r({},s,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The capabilities provided with the Cloud Pak for Integration\ncan be installed using the instructions in\nthe sections above in the\nCloud Pak Playbook."),Object(n.b)("p",null,"In addition, there is the option of installing and uninstalling\nthese capabilities using scripts developed by the IBM Garage\nSolution Engineering team. Also available are Tekton pipelines\nfor installing and uninstalling the capabilities."),Object(n.b)("p",null,"The scripts and pipeline artifacts, along with instructions\nhow to use them, are provided at the link below:"),Object(n.b)("p",null,Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cp4i-setup/blob/master/README.md"}),"Cloud Pak for Integration Installation Scripts & Pipelines")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integration-scripts-index-mdx-1330b9db467ab4e6ef4a.js.map