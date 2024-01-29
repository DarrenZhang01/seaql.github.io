"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[96628],{48859:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(31308),r=(n(76687),n(48859));const i={},l="Traits and Types",o={unversionedId:"internal-design/trait-and-type",id:"version-0.4.x/internal-design/trait-and-type",title:"Traits and Types",description:"Entity",source:"@site/versioned_docs/version-0.4.x/09-internal-design/01-trait-and-type.md",sourceDirName:"09-internal-design",slug:"/internal-design/trait-and-type",permalink:"/SeaORM/docs/0.4.x/internal-design/trait-and-type",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/09-internal-design/01-trait-and-type.md",tags:[],version:"0.4.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1706369934,formattedLastUpdatedAt:"Jan 27, 2024",sidebarPosition:1,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Custom Active Model",permalink:"/SeaORM/docs/0.4.x/advanced-query/custom-active-model"},next:{title:"Derive Macros",permalink:"/SeaORM/docs/0.4.x/internal-design/derive-macro"}},p={},m=[{value:"Entity",id:"entity",level:2},{value:"Column",id:"column",level:2},{value:"Primary Key",id:"primary-key",level:2},{value:"Model",id:"model",level:2},{value:"Active Model",id:"active-model",level:2},{value:"Relation",id:"relation",level:2},{value:"Related",id:"related",level:2}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"traits-and-types"},"Traits and Types"),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"A unit struct implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityTrait"))," representing a table in the database."),(0,r.kt)("p",null,"This trait contains the properties of an entity including"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Table Name (implemented ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityName")),")"),(0,r.kt)("li",{parentName:"ul"},"Column (implemented ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnTrait")),")"),(0,r.kt)("li",{parentName:"ul"},"Relation (implemented ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationTrait")),")"),(0,r.kt)("li",{parentName:"ul"},"Primary Key (implemented ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"PrimaryKeyTrait"))," and ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"PrimaryKeyToColumn")),")")),(0,r.kt)("p",null,"This trait also provides an API for CRUD actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select: ",(0,r.kt)("inlineCode",{parentName:"li"},"find"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"find_*")),(0,r.kt)("li",{parentName:"ul"},"Insert: ",(0,r.kt)("inlineCode",{parentName:"li"},"insert"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"insert_*")),(0,r.kt)("li",{parentName:"ul"},"Update: ",(0,r.kt)("inlineCode",{parentName:"li"},"update"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"update_*")),(0,r.kt)("li",{parentName:"ul"},"Delete: ",(0,r.kt)("inlineCode",{parentName:"li"},"delete"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"delete_*"))),(0,r.kt)("h2",{id:"column"},"Column"),(0,r.kt)("p",null,"An enum that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnTrait"))," representing all columns of the table and the column types and attributes."),(0,r.kt)("p",null,"It also implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"IdenStatic"))," provides mapping to column identifier with static lifetime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iterable"))," allows SeaORM core to iterate over all column variants")),(0,r.kt)("h2",{id:"primary-key"},"Primary Key"),(0,r.kt)("p",null,"An enum that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"PrimaryKeyTrait"))," representing the primary key. Each primary key variant must have a corresponding column variant."),(0,r.kt)("p",null,"It also implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"IdenStatic"))," provides mapping to primary key identifier with static lifetime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iterable"))," allows SeaORM core to iterate over all primary key variants")),(0,r.kt)("h2",{id:"model"},"Model"),(0,r.kt)("p",null,"A struct that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelTrait"))," storing the query result in memory. This is intended for readonly purposes, and it is stateless."),(0,r.kt)("p",null,"It also implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"FromQueryResult"))," converts raw query result into corresponding model")),(0,r.kt)("h2",{id:"active-model"},"Active Model"),(0,r.kt)("p",null,"A struct that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveModelTrait"))," representing insert/update actions. This is intended to be edited and saved into database."),(0,r.kt)("p",null,"It also implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveModelBehavior"))," defines handlers for different actions on an active model")),(0,r.kt)("h2",{id:"relation"},"Relation"),(0,r.kt)("p",null,"An enum that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationTrait"))," defined relations with other entities."),(0,r.kt)("p",null,"It also implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iterable"))," allows SeaORM core to iterate over all relation variants")),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("p",null,"A generic trait, ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Related")),", defines join paths to help you query related entities together, especially helpful in many-to-many relations."))}s.isMDXComponent=!0}}]);