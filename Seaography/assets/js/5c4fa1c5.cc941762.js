"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,h=s["".concat(d,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Extending generated code",l={unversionedId:"extending-code",id:"extending-code",title:"Extending generated code",description:"When we are done generating the code we can then modify the Rust code based on our needs.",source:"@site/docs/04-extending-code.md",sourceDirName:".",slug:"/extending-code",permalink:"/Seaography/docs/next/extending-code",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/docs/04-extending-code.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1690536402,formattedLastUpdatedAt:"Jul 28, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project structure",permalink:"/Seaography/docs/next/project-structure"},next:{title:"Macros documentation",permalink:"/Seaography/docs/next/macros-documentation"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Major features",id:"major-features",level:2},{value:"Field guards",id:"field-guards",level:3},{value:"Query complexity and depth",id:"query-complexity-and-depth",level:3},{value:"Query depth limit",id:"query-depth-limit",level:4},{value:"Query depth limit",id:"query-depth-limit-1",level:4},{value:"More documentation",id:"more-documentation",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extending-generated-code"},"Extending generated code"),(0,a.kt)("p",null,"When we are done generating the code we can then modify the Rust code based on our needs."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In order to extend the existing code first you need to be comfortable with the libraries the generated code depends on."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/async-graphql/async-graphql"},"async_graphql")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm"},"sea_orm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/poem-web/poem"},"poem"))),(0,a.kt)("p",null,"Studying the generated code structure provides valuable information on where to find important features, for more info ",(0,a.kt)("a",{parentName:"p",href:"/docs/generated-project-structure"},"here"),"."),(0,a.kt)("p",null,"When you are comfortable enough with all the terms, you can jump into the folders and add new features or logic based on your objectives."),(0,a.kt)("h2",{id:"major-features"},"Major features"),(0,a.kt)("p",null,"Bellow there are some important features you might need:"),(0,a.kt)("h3",{id:"field-guards"},"Field guards"),(0,a.kt)("p",null,"With field guards you can protect specific queries or fields accessors from being accessed using custom guard function."),(0,a.kt)("p",null,"You can read more here ",(0,a.kt)("a",{parentName:"p",href:"https://async-graphql.github.io/async-graphql/en/field_guard.html"},"https://async-graphql.github.io/async-graphql/en/field_guard.html")),(0,a.kt)("h3",{id:"query-complexity-and-depth"},"Query complexity and depth"),(0,a.kt)("p",null,"The current generators doesn't prevent cyclic dependencies. A bad actor can use cyclic dependencies to perform unlimited nested queries and crash the server."),(0,a.kt)("p",null,"We have the following entities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Category {\n    pub id: i32,\n    pub name: String,\n    pub products: Vec<Product>\n}\n\npub struct Product {\n    pub id: i32,\n    pub name: String,\n    pub categories: Vec<Category>\n}\n")),(0,a.kt)("p",null,"You can perform the following query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    category {\n        nodes {\n            id,\n            name,\n            product {\n                id,\n                name,\n                category {\n                    id,\n                    name,\n                    product {\n                        id,\n                        name,\n                        category {\n                            [....]\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n")),(0,a.kt)("p",null,"To prevent this behavior we can enable with few lines of code query complexity calculator and depth limiter."),(0,a.kt)("h4",{id:"query-depth-limit"},"Query depth limit"),(0,a.kt)("p",null,"On .env change the line from this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# DEPTH_LIMIT=\n")),(0,a.kt)("p",null,"to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DEPTH_LIMIT=2 # depth limit number\n")),(0,a.kt)("h4",{id:"query-depth-limit-1"},"Query depth limit"),(0,a.kt)("p",null,"On .env change the line from this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# COMPLEXITY_LIMIT=\n")),(0,a.kt)("p",null,"to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"COMPLEXITY_LIMIT=32 # complexity limit number\n")),(0,a.kt)("h4",{id:"more-documentation"},"More documentation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://async-graphql.github.io/async-graphql/en/depth_and_complexity.html"},"https://async-graphql.github.io/async-graphql/en/depth_and_complexity.html")))}p.isMDXComponent=!0}}]);