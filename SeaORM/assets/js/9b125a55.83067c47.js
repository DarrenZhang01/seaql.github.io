"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[53808],{48859:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,v=s["".concat(p,".").concat(u)]||s[u]||c[u]||i;return n?a.createElement(v,l(l({ref:t},d),{},{components:n})):a.createElement(v,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(31308),r=(n(76687),n(48859));const i={},l="Derive Macros",o={unversionedId:"internal-design/derive-macro",id:"version-0.5.x/internal-design/derive-macro",title:"Derive Macros",description:"EntityModel",source:"@site/versioned_docs/version-0.5.x/09-internal-design/02-derive-macro.md",sourceDirName:"09-internal-design",slug:"/internal-design/derive-macro",permalink:"/SeaORM/docs/0.5.x/internal-design/derive-macro",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/09-internal-design/02-derive-macro.md",tags:[],version:"0.5.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1706866131,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:2,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"Traits and Types",permalink:"/SeaORM/docs/0.5.x/internal-design/trait-and-type"},next:{title:"Compare with Diesel",permalink:"/SeaORM/docs/0.5.x/internal-design/diesel"}},p={},m=[{value:"EntityModel",id:"entitymodel",level:2},{value:"Entity",id:"entity",level:2},{value:"Column",id:"column",level:2},{value:"Primary Key",id:"primary-key",level:2},{value:"Model",id:"model",level:2},{value:"Active Model",id:"active-model",level:2},{value:"Active Enum",id:"active-enum",level:2},{value:"Relation",id:"relation",level:2},{value:"Iterable",id:"iterable",level:2}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"derive-macros"},"Derive Macros"),(0,r.kt)("h2",{id:"entitymodel"},"EntityModel"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityModel"))," derive macro is the 'almighty' macro which automatically generates ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Column"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," from a given ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),"."),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveEntity"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," and it assumes ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Column"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Relation")," exist in the current scope. It also provides implementation of ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iden"))," and ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"IdenStatic"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,r.kt)("h2",{id:"column"},"Column"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveColumn"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Columns"),". It defines the identifier of each column by implementing ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iden"))," and ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"IdenStatic")),". The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EnumIter"))," is also derived, allowing iteration over all enum variants."),(0,r.kt)("h2",{id:"primary-key"},"Primary Key"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DerivePrimaryKey"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"PrimaryKeyToColumn"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," which defines tedious mappings between primary keys and columns. The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EnumIter"))," is also derived, allowing iteration over all enum variants."),(0,r.kt)("h2",{id:"model"},"Model"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveModel"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),", which provides setters and getters for all attributes in the model. It also implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"FromQueryResult"))," to convert a query result into the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),"."),(0,r.kt)("h2",{id:"active-model"},"Active Model"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveActiveModel"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveModelTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," which provides setters and getters for all active values in the active model."),(0,r.kt)("h2",{id:"active-enum"},"Active Enum"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveActiveEnum"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveEnum"))," for any enums."),(0,r.kt)("h2",{id:"relation"},"Relation"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"DeriveRelation"))," derive macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationTrait"))," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Relation"),"."),(0,r.kt)("h2",{id:"iterable"},"Iterable"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EnumIter"))," derived macro will implement ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iterable"))," to allow iteration over all enum variants."))}c.isMDXComponent=!0}}]);