(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),o=a.n(r),l=a("NmYn"),i=a.n(l),c=a("OKom"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},O=a("pEPl"),j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,l=r.subDirectory,i=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},N=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),o=r===n,l=new RegExp(n+"(?!-)"),c=a.replace(l,r);return Object(d.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(d.b)(g.Link,{className:f.link,to:""+c},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},r))))))},n}(o.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,m=t.titleType,O=s.tabs,j=s.title,g=s.theme,f=s.description,v=s.keywords,x=n.data.site.pathPrefix,C=x?r.pathname.replace(x,""):r.pathname,k=O?C.split("/").filter(Boolean).slice(-1)[0]||i()(O[0],{lower:!0}):"";return Object(d.b)(b.a,{tabs:O,homepage:!1,theme:g,pageTitle:j,pageDescription:f,pageKeywords:v,titleType:m},Object(d.b)(u,{title:o?Object(d.b)(o,null):j,label:"label",tabs:O}),O&&Object(d.b)(y,{slug:C,tabs:O,currentTab:k}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:p})),Object(d.b)(N.a,{pageContext:t,location:r,slug:C,tabs:O,currentTab:k}),Object(d.b)(c.a,null))}},JExn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=i("AnchorLinks"),b=i("AnchorLink"),s={_frontmatter:l},p=r.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(b,{mdxType:"AnchorLink"},"Introduction"),Object(n.b)(b,{mdxType:"AnchorLink"},"Prepare Installation"),Object(n.b)(b,{mdxType:"AnchorLink"},"Begin Installation"),Object(n.b)(b,{mdxType:"AnchorLink"},"Validate installation"),Object(n.b)(b,{mdxType:"AnchorLink"},"Access Web Interface")),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Introduction")),Object(n.b)("p",null,"This page contains guidance on how to configure the Datapower Gateway\nrelease for both on-prem and IBM Cloud.  Note - you do not need to install this\nchart unless you are using DataPower as a standalone capability.\nWhen you install API Connect, it installs its own version of this chart\nas part of the APIC Cluster."),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Prepare Installation")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Change project to eventstreams"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"oc project datapower\n")))),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Begin Installation")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Go to CP4I Platform Home. Click ",Object(n.b)("strong",{parentName:"li"},"Create instance")," inside the\n",Object(n.b)("strong",{parentName:"li"},"DataPower")," tile."),Object(n.b)("li",{parentName:"ol"},"A window will pop up with a description of the requirements for\ninstalling. Click ",Object(n.b)("strong",{parentName:"li"},"Continue")," to the helm chart deployment configuration."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Overview")," to view the chart information and pre-reqs that were\ncovered in ",Object(n.b)("a",o({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation"),"."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Configure")),Object(n.b)("li",{parentName:"ol"},"Enter the Helm release name. In our example, ",Object(n.b)("strong",{parentName:"li"},"datapower")),Object(n.b)("li",{parentName:"ol"},"Enter Target Namespace - ",Object(n.b)("strong",{parentName:"li"},"datapower")),Object(n.b)("li",{parentName:"ol"},"Select a Cluster - ",Object(n.b)("strong",{parentName:"li"},"local-cluster"),"."),Object(n.b)("li",{parentName:"ol"},"Check the license agreement."),Object(n.b)("li",{parentName:"ol"},"Under Parameters click ",Object(n.b)("strong",{parentName:"li"},"All Parameters")," to expand.",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Ingress - icp-proxy address defined during icp / common-services\ninstallation - icp-proxy.","<","openshift-router-domain",">"),Object(n.b)("li",{parentName:"ol"},"Image Pull Secret - Set to ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled\nregistry or if offline use the ",Object(n.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your\ndatapower namespace.  Use ",Object(n.b)("inlineCode",{parentName:"li"},"oc get secrets")," to get the exact value for\nyour environment."))),Object(n.b)("li",{parentName:"ol"},"Scroll down to External access settings - enter the proxy\naddress - ",Object(n.b)("strong",{parentName:"li"},"icp-proxy.","<","openshift-router-domain",">",".")),Object(n.b)("li",{parentName:"ol"},"Note:  If you want to enable access to the WebUI and XML/Rest\nInterfaces for your datapower instance, you will need to change those\nmanually.  Otherwise, they will default to disabled."),Object(n.b)("li",{parentName:"ol"},"Scroll to the bottom. Click ",Object(n.b)("strong",{parentName:"li"},"Install"),".")),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Validate Installation")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"check pods using the command line",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"oc get pods -n datapower\nNAME                                      READY     STATUS    RESTARTS   AGE\ndp-1-ibm-datapower-icp4i-fb888677-mvd9q   1/1       Running   0          3m\n")))),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Access Web Interface")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Access the web interface (if enabled) by port-forwarding\nthe port defined in the deployment (default 9090)."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"kubectl port-forward pod/dp-pod-name 9090:9090\n")),Object(n.b)("p",{parentName:"li"},"Access the web UI with local port"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://localhost:9090"}),"https://localhost:9090"))),Object(n.b)("p",{parentName:"li"},"Login using default credentials"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"username: ",Object(n.b)("inlineCode",{parentName:"li"},"admin")),Object(n.b)("li",{parentName:"ul"},"password: ",Object(n.b)("inlineCode",{parentName:"li"},"admin"))),Object(n.b)("p",{parentName:"li"},"If other features such as SSH (default 9022) or REST management interface (default 5554) are enabled,\nthey can similarly be accessed via ",Object(n.b)("inlineCode",{parentName:"p"},"localhost")," by port-forwarding their respectively defined ports."))))}m.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-deploy-secure-gateway-index-mdx-37c461132aabd7507b35.js.map