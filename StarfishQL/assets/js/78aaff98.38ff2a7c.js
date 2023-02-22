"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,h=f["".concat(l,".").concat(d)]||f[d]||c[d]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},o="Overview",s={unversionedId:"architecture-of-graph-query-engine/overview",id:"architecture-of-graph-query-engine/overview",title:"Overview",description:"The graph query engine is a Rust backend application powered by the rocket web framework and the SeaQL ecosystem.",source:"@site/docs/02-architecture-of-graph-query-engine/01-overview.md",sourceDirName:"02-architecture-of-graph-query-engine",slug:"/architecture-of-graph-query-engine/overview",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/overview",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/02-architecture-of-graph-query-engine/01-overview.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677062123,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Visualizing Dependency Graph",permalink:"/StarfishQL/docs/install-and-config/visualizing-dependency-graph"},next:{title:"Defining Graph Schema",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/defining-graph-schema"}},l={},p=[{value:"Handling requests",id:"handling-requests",level:2},{value:"Invoking operations",id:"invoking-operations",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The graph query engine is a Rust backend application powered by the ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/rocket"},"rocket")," web framework and the ",(0,a.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/"},"SeaQL ecosystem"),"."),(0,a.kt)("h2",{id:"handling-requests"},"Handling requests"),(0,a.kt)("p",null,"Being a web application, StarfishQL expects input from the web in the form of HTTP requests (specifically, POST requests only)."),(0,a.kt)("p",null,"We defined the query language in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON")," format, because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is the go-to format for data transmission on the web."),(0,a.kt)("li",{parentName:"ul"},"Most, if not all, web developers know it."),(0,a.kt)("li",{parentName:"ul"},"Most, if not all, web frameworks support it."),(0,a.kt)("li",{parentName:"ul"},"It is easy to understand (arguable, but prettify and visualization tools surely help)."),(0,a.kt)("li",{parentName:"ul"},"It is easy to write (even trivial if the request sender uses JavaScript)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crates.io/crates/serde"},(0,a.kt)("inlineCode",{parentName:"a"},"serde"))," and ",(0,a.kt)("a",{parentName:"li",href:"https://crates.io/crates/serde_json"},(0,a.kt)("inlineCode",{parentName:"a"},"serde_json"))," provide nice tools for dealing with JSON data in Rust.")),(0,a.kt)("p",null,"As such, we've designed the input layer of the engine to always take the JSON-formatted body of a POST request",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", regardless of the operation, for consistency."),(0,a.kt)("p",null,"The engine listens at the following endpoints for the corresponding operation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/schema")," - Define/Reset the schema"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/mutate")," - Perform mutate operations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/query")," - Perform queries")),(0,a.kt)("h2",{id:"invoking-operations"},"Invoking operations"),(0,a.kt)("p",null,"Each request received by the engine at different endpoints tells the engine ",(0,a.kt)("em",{parentName:"p"},"what to do"),", while the body specifies ",(0,a.kt)("em",{parentName:"p"},"how to do it")," with parameters."),(0,a.kt)("p",null,"In the following sub-sections, each possible operation that StarfishQL's query engine supports will be investigated in details."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"As per the ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET"},"standards"),", GET requests do not have bodies. So please don't feel too surprised to see query operations specified in POST requests.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);