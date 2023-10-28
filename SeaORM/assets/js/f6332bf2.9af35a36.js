"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[47213],{48859:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(31308),r=(n(76687),n(48859));const a={},o="One to One",l={unversionedId:"relation/one-to-one",id:"version-0.9.x/relation/one-to-one",title:"One to One",description:"A one-to-one relation is the most basic type of database relation. Let say a Cake entity has at most one Fruit topping.",source:"@site/versioned_docs/version-0.9.x/06-relation/01-one-to-one.md",sourceDirName:"06-relation",slug:"/relation/one-to-one",permalink:"/SeaORM/docs/0.9.x/relation/one-to-one",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.9.x/06-relation/01-one-to-one.md",tags:[],version:"0.9.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1698515150,formattedLastUpdatedAt:"Oct 28, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raw SQL",permalink:"/SeaORM/docs/0.9.x/basic-crud/raw-sql"},next:{title:"One to Many",permalink:"/SeaORM/docs/0.9.x/relation/one-to-many"}},p={},s=[{value:"Defining the Relation",id:"defining-the-relation",level:2},{value:"Defining the Inverse Relation",id:"defining-the-inverse-relation",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"one-to-one"},"One to One"),(0,r.kt)("p",null,"A one-to-one relation is the most basic type of database relation. Let say a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cake")," entity has at most one ",(0,r.kt)("inlineCode",{parentName:"p"},"Fruit")," topping."),(0,r.kt)("h2",{id:"defining-the-relation"},"Defining the Relation"),(0,r.kt)("p",null,"On the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cake")," entity, to define the relation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a new variant ",(0,r.kt)("inlineCode",{parentName:"li"},"Fruit")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Relation")," enum."),(0,r.kt)("li",{parentName:"ol"},"Define it with ",(0,r.kt)("inlineCode",{parentName:"li"},"Entity::has_one()"),"."),(0,r.kt)("li",{parentName:"ol"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"Related<Entity>")," trait.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{3,9,14} title="entity/cake.rs"',"{3,9,14}":!0,title:'"entity/cake.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_one(super::fruit::Entity).into(),\n        }\n    }\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n")),(0,r.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following eliminates the need for the ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationTrait")," implementation above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_one = "super::fruit::Entity")]\n    Fruit,\n}\n')),(0,r.kt)("h2",{id:"defining-the-inverse-relation"},"Defining the Inverse Relation"),(0,r.kt)("p",null,"On the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fruit")," entity, its ",(0,r.kt)("inlineCode",{parentName:"p"},"cake_id")," attribute is referencing the primary key of ",(0,r.kt)("inlineCode",{parentName:"p"},"Cake")," entity."),(0,r.kt)("p",null,"To define the inverse relation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a new enum variant ",(0,r.kt)("inlineCode",{parentName:"li"},"Relation::Cake")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Fruit")," entity."),(0,r.kt)("li",{parentName:"ol"},"Write the definition of it with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Entity::belongs_to()")," method, we always define the inverse relation using this method."),(0,r.kt)("li",{parentName:"ol"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"Related<cake::Entity>")," trait.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/fruit.rs"',title:'"entity/fruit.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n        }\n    }\n}\n\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n")),(0,r.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following eliminates the need for the ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationTrait")," implementation above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n}\n')))}m.isMDXComponent=!0}}]);