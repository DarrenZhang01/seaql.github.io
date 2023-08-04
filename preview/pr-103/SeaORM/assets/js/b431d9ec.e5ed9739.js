"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[93232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},36152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="SeaORM Concepts",p={unversionedId:"introduction/sea-orm",id:"introduction/sea-orm",title:"SeaORM Concepts",description:"In SeaORM, a database with a collection of tables is called a Schema.",source:"@site/docs/01-introduction/03-sea-orm.md",sourceDirName:"01-introduction",slug:"/introduction/sea-orm",permalink:"/preview/pr-103/SeaORM/docs/next/introduction/sea-orm",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/01-introduction/03-sea-orm.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1691123874,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Async Programming",permalink:"/preview/pr-103/SeaORM/docs/next/introduction/async"},next:{title:"Tutorial & Examples",permalink:"/preview/pr-103/SeaORM/docs/next/introduction/tutorial"}},l={},c=[],s={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seaorm-concepts"},"SeaORM Concepts"),(0,a.kt)("p",null,"In SeaORM, a database with a collection of tables is called a ",(0,a.kt)("inlineCode",{parentName:"p"},"Schema"),"."),(0,a.kt)("p",null,"Each table corresponds to an ",(0,a.kt)("a",{parentName:"p",href:"/preview/pr-103/SeaORM/docs/next/generate-entity/entity-structure#entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))," in SeaORM, which helps you perform ",(0,a.kt)("inlineCode",{parentName:"p"},"CRUD")," (Create, Read, Update, and Delete) operations on relevant tables."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," trait provides an API for you to inspect its properties (",(0,a.kt)("a",{parentName:"p",href:"/preview/pr-103/SeaORM/docs/next/generate-entity/entity-structure#column"},(0,a.kt)("inlineCode",{parentName:"a"},"Column")),", ",(0,a.kt)("a",{parentName:"p",href:"/preview/pr-103/SeaORM/docs/next/generate-entity/entity-structure#relation"},(0,a.kt)("inlineCode",{parentName:"a"},"Relation"))," and ",(0,a.kt)("a",{parentName:"p",href:"/preview/pr-103/SeaORM/docs/next/generate-entity/entity-structure#primary-key"},(0,a.kt)("inlineCode",{parentName:"a"},"PrimaryKey")),") at runtime."),(0,a.kt)("p",null,"Each table has multiple columns, which are referred to as ",(0,a.kt)("inlineCode",{parentName:"p"},"attribute"),"."),(0,a.kt)("p",null,"These attributes and their values are grouped in a Rust struct (a ",(0,a.kt)("a",{parentName:"p",href:"/preview/pr-103/SeaORM/docs/next/generate-entity/expanded-entity-structure#model"},(0,a.kt)("inlineCode",{parentName:"a"},"Model")),") so that you can manipulate them."),(0,a.kt)("p",null,"However, ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," is for read operations only. To perform insert, update, or delete, you need to use ",(0,a.kt)("a",{parentName:"p",href:"/preview/pr-103/SeaORM/docs/next/generate-entity/expanded-entity-structure#active-model"},(0,a.kt)("inlineCode",{parentName:"a"},"ActiveModel"))," which attaches meta-data on each attribute."),(0,a.kt)("p",null,"Finally, there is no singleton (global context) in SeaORM. Application code is responsible for managing the ownership of the ",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseConnection"),". We do provide integration examples for web frameworks including ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"axum")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"poem")," to help you get started quickly."))}m.isMDXComponent=!0}}]);