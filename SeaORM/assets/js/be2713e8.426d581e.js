"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[75405],{48859:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,y=s["".concat(p,".").concat(c)]||s[c]||d[c]||i;return n?a.createElement(y,l(l({ref:t},m),{},{components:n})):a.createElement(y,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(31308),r=(n(76687),n(48859));const i={},l="Entity Structure",o={unversionedId:"generate-entity/entity-structure",id:"version-0.5.x/generate-entity/entity-structure",title:"Entity Structure",description:"Let's look at a simple Cake entity.",source:"@site/versioned_docs/version-0.5.x/03-generate-entity/02-entity-structure.md",sourceDirName:"03-generate-entity",slug:"/generate-entity/entity-structure",permalink:"/SeaORM/docs/0.5.x/generate-entity/entity-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/03-generate-entity/02-entity-structure.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1698515150,formattedLastUpdatedAt:"Oct 28, 2023",sidebarPosition:2,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"Using sea-orm-cli",permalink:"/SeaORM/docs/0.5.x/generate-entity/sea-orm-cli"},next:{title:"Expanded Entity Structure",permalink:"/SeaORM/docs/0.5.x/generate-entity/expanded-entity-structure"}},p={},u=[{value:"Entity",id:"entity",level:2},{value:"Table Name",id:"table-name",level:3},{value:"Column",id:"column",level:2},{value:"Column Type",id:"column-type",level:3},{value:"Additional Properties",id:"additional-properties",level:3},{value:"Ignore Attribute",id:"ignore-attribute",level:3},{value:"Primary Key",id:"primary-key",level:2},{value:"Auto Increment",id:"auto-increment",level:3},{value:"Composite Key",id:"composite-key",level:3},{value:"Relation",id:"relation",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entity-structure"},"Entity Structure"),(0,r.kt)("p",null,"Let's look at a simple ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs"},"Cake")," entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "cake")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveEntityModel")," macro does all the heavy lifting of defining an ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," with associating ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKey"),"."),(0,r.kt)("h3",{id:"table-name"},"Table Name"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name")," attribute specifies the corresponding table in the database.\nOptionally, you can also specify the database schema or database name by ",(0,r.kt)("inlineCode",{parentName:"p"},"schema_name"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(table_name = "cake", schema_name = "public")]\npub struct Model { ... }\n')),(0,r.kt)("h2",{id:"column"},"Column"),(0,r.kt)("h3",{id:"column-type"},"Column Type"),(0,r.kt)("p",null,"The column type will be derived automatically with the following mapping:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rust type"),(0,r.kt)("th",{parentName:"tr",align:null},"Database Type ",(0,r.kt)("br",null)," (",(0,r.kt)("a",{parentName:"th",href:"https://docs.rs/sea-orm/0.5/sea_orm/entity/enum.ColumnType.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnType")),")"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Char")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"u8, i8"),(0,r.kt)("td",{parentName:"tr",align:null},"TinyInteger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"u16, i16"),(0,r.kt)("td",{parentName:"tr",align:null},"SmallInteger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"u32, i32"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"u64, i64"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInteger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"f32"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"f64"),(0,r.kt)("td",{parentName:"tr",align:null},"Double")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NaiveDate"),(0,r.kt)("td",{parentName:"tr",align:null},"Date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NaiveTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTime (chrono::NaiveDateTime)"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTimeWithTimeZone (chrono::DateTime","<","FixedOffset",">",")"),(0,r.kt)("td",{parentName:"tr",align:null},"TimestampWithTimeZone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uuid (uuid::Uuid)"),(0,r.kt)("td",{parentName:"tr",align:null},"Uuid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Json (serde_json::Value)"),(0,r.kt)("td",{parentName:"tr",align:null},"Json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal (rust_decimal::Decimal)"),(0,r.kt)("td",{parentName:"tr",align:null},"Decimal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vec","<","u8",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Binary")))),(0,r.kt)("p",null,"You can override the default mappings between a Rust type and ",(0,r.kt)("inlineCode",{parentName:"p"},"ColumnType")," by the ",(0,r.kt)("inlineCode",{parentName:"p"},"column_type")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text")]\npub name: String\n')),(0,r.kt)("h3",{id:"additional-properties"},"Additional Properties"),(0,r.kt)("p",null,"You can add additional properties ",(0,r.kt)("inlineCode",{parentName:"p"},"unique"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"indexed")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nullable")," to a column."),(0,r.kt)("p",null,"If you specified a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"column_type")," for an optional attribute, you must also specify ",(0,r.kt)("inlineCode",{parentName:"p"},"nullable"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text", unique, indexed, nullable)]\npub name: Option<String>\n')),(0,r.kt)("h3",{id:"ignore-attribute"},"Ignore Attribute"),(0,r.kt)("p",null,"If you want to ignore a particular model attribute such that it maps to no database column, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ignore")," annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(ignore)]\npub ignore_me: String\n")),(0,r.kt)("h2",{id:"primary-key"},"Primary Key"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"primary_key")," attribute to mark a column as the primary key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key)]\npub id: i32\n")),(0,r.kt)("h3",{id:"auto-increment"},"Auto Increment"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"auto_increment")," is implied for ",(0,r.kt)("inlineCode",{parentName:"p"},"primary_key")," column. Override it by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key, auto_increment = false)]\npub id: i32\n")),(0,r.kt)("h3",{id:"composite-key"},"Composite Key"),(0,r.kt)("p",null,"This is usually the case in junction tables, where a two-column tuple is used as the primary key. Simply annotate multiple columns to define a composite primary key. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"auto_increment")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," for composite key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Model {\n    #[sea_orm(primary_key)]\n    pub cake_id: i32,\n    #[sea_orm(primary_key)]\n    pub fruit_id: i32,\n}\n")),(0,r.kt)("h2",{id:"relation"},"Relation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro is a simple wrapper to impl the ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationTrait"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n')),(0,r.kt)("p",null,"expands into"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Learn more about relations in the next section."))}d.isMDXComponent=!0}}]);