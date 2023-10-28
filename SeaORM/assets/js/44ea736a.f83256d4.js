"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[45084],{48859:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,y=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(31308),r=(n(76687),n(48859));const a={},i="One to Many",l={unversionedId:"relation/one-to-many",id:"version-0.4.x/relation/one-to-many",title:"One to Many",description:'A one-to-many relation is similar to one-to-one relation. In the previous section, we give the example of "a Cake entity has at most one Fruit topping". In one-to-many relation, we change the "at most one" constraint. So, we have a Cake entity that might have many Fruit toppings.',source:"@site/versioned_docs/version-0.4.x/06-relation/02-one-to-many.md",sourceDirName:"06-relation",slug:"/relation/one-to-many",permalink:"/SeaORM/docs/0.4.x/relation/one-to-many",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/06-relation/02-one-to-many.md",tags:[],version:"0.4.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1698515150,formattedLastUpdatedAt:"Oct 28, 2023",sidebarPosition:2,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"One to One",permalink:"/SeaORM/docs/0.4.x/relation/one-to-one"},next:{title:"Many to Many",permalink:"/SeaORM/docs/0.4.x/relation/many-to-many"}},s={},p=[{value:"Defining the Relation",id:"defining-the-relation",level:2},{value:"Defining the Inverse Relation",id:"defining-the-inverse-relation",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"one-to-many"},"One to Many"),(0,r.kt)("p",null,'A one-to-many relation is similar to one-to-one relation. In the previous section, we give the example of "a ',(0,r.kt)("inlineCode",{parentName:"p"},"Cake")," entity has at most one ",(0,r.kt)("inlineCode",{parentName:"p"},"Fruit"),' topping". In one-to-many relation, we change the "at most one" constraint. So, we have a ',(0,r.kt)("inlineCode",{parentName:"p"},"Cake")," entity that might have many ",(0,r.kt)("inlineCode",{parentName:"p"},"Fruit")," toppings."),(0,r.kt)("h2",{id:"defining-the-relation"},"Defining the Relation"),(0,r.kt)("p",null,"This is almost identical to defining a one-to-one relation; the only difference is that we use ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity::has_many()")," method here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{2,8,13} title="entity/cake.rs"',"{2,8,13}":!0,title:'"entity/cake.rs"'},"pub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n")),(0,r.kt)("h2",{id:"defining-the-inverse-relation"},"Defining the Inverse Relation"),(0,r.kt)("p",null,"It is the same as defining the one-to-one inverse relation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/fruit.rs"',title:'"entity/fruit.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n        }\n    }\n}\n\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n")))}m.isMDXComponent=!0}}]);