"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[9279],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,g=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7572:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={slug:"gsoc-2022",title:"Google Summer of Code 2022",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,s={permalink:"/blog/gsoc-2022",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-03-08-gsoc-2022.md",source:"@site/blog/2022-03-08-gsoc-2022.md",title:"Google Summer of Code 2022",description:"GSoC 2022 Organization Profile",date:"2022-03-08T00:00:00.000Z",formattedDate:"March 8, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:1.555,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"gsoc-2022",title:"Google Summer of Code 2022",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"What's new in SeaORM 0.7.0",permalink:"/blog/2022-03-26-whats-new-in-0.7.0"},nextItem:{title:"What's new in SeaORM 0.6.0",permalink:"/blog/2022-02-07-whats-new-in-0.6.0"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com/programs/2022/organizations/seaql"},"GSoC 2022 Organization Profile")),(0,n.kt)("p",null,"We are super excited to be selected as a Google Summer of Code 2022 mentor organization. Thank you everyone in the SeaQL community for your support and adoption!"),(0,n.kt)("p",null,"In 2020, when we were developing systems in Rust, we noticed a missing piece in the ecosystem: an ORM that integrates well with the Rust async ecosystem. With that in mind, we designed SeaORM to have a familiar API that welcomes developers from node.js, Go, Python, PHP, Ruby and your favourite language."),(0,n.kt)("p",null,"The first piece of tool we released is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query"},"SeaQuery"),", a query builder with a fluent API. It has a simplified AST that reflects SQL syntax. It frees you from stitching strings together in case you needed to construct SQL dynamically and safely, with the advantages of Rust typings."),(0,n.kt)("p",null,"The second piece of tool is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-schema"},"SeaSchema"),", a schema manager that allows you to discover and manipulate database schema. The type definition of the schema is database-specific and thus reflecting the features of MySQL, Postgres and SQLite tightly."),(0,n.kt)("p",null,"The third piece of tool is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm"},"SeaORM"),', an Object Relational Mapper for building web services in Rust, whether it\'s REST, gRPC or GraphQL. We have "async & dynamic" in mind, so developers from dynamic languages can feel right at home.'),(0,n.kt)("p",null,"But why stops at three?"),(0,n.kt)("p",null,"This is just the foundation to setup Rust to be the best language for data engineering, and we have many more ideas on our idea list!"),(0,n.kt)("p",null,"Your participation is what makes us unique; your adoption is what drives us forward."),(0,n.kt)("p",null,"Thank you everyone for all your karma, it's the Rust community here that makes it possible. We will gladly take the mission to nurture open source developers during GSoC."),(0,n.kt)("p",null,"Prospective contributors, stay in touch with us. We also welcome any discussion on the future of the Rust ecosystem and the SeaQL organization."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/summer-of-code/blob/main/2022/README.md"},"GSoC 2022 Idea List")))}m.isMDXComponent=!0}}]);