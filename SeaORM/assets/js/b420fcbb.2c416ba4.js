"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[32379],{48859:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=p(r),c=a,d=y["".concat(s,".").concat(c)]||y[c]||m[c]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},71349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(31308),a=(r(76687),r(48859));const o={},i="Newtype",l={unversionedId:"generate-entity/newtype",id:"version-0.10.x/generate-entity/newtype",title:"Newtype",description:"You can define a newtype and use it as model field. Following traits have to be implemented.",source:"@site/versioned_docs/version-0.10.x/04-generate-entity/05-newtype.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/newtype",permalink:"/SeaORM/docs/0.10.x/generate-entity/newtype",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/04-generate-entity/05-newtype.md",tags:[],version:"0.10.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1698515150,formattedLastUpdatedAt:"Oct 28, 2023",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enumeration",permalink:"/SeaORM/docs/0.10.x/generate-entity/enumeration"},next:{title:"Select",permalink:"/SeaORM/docs/0.10.x/basic-crud/select"}},s={},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"newtype"},"Newtype"),(0,a.kt)("p",null,"You can define a newtype and use it as model field. Following traits have to be implemented."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Implements ",(0,a.kt)("inlineCode",{parentName:"li"},"From<newtype>")," for ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-query/0.27/sea_query/value/enum.Value.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::Value"))),(0,a.kt)("li",{parentName:"ol"},"Implements ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-orm/0.10/sea_orm/trait.TryGetable.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_orm::TryGetable"))," for ",(0,a.kt)("inlineCode",{parentName:"li"},"newtype")),(0,a.kt)("li",{parentName:"ol"},"Implements ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-query/0.27/sea_query/value/trait.ValueType.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::ValueType"))," for ",(0,a.kt)("inlineCode",{parentName:"li"},"newtype")),(0,a.kt)("li",{parentName:"ol"},"Implements ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/sea-query/0.27/sea_query/value/trait.Nullable.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::Nullable"))," for ",(0,a.kt)("inlineCode",{parentName:"li"},"newtype"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\nuse sea_orm::{TryGetError, TryGetable};\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(table_name = "json_vec")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub str_vec: Option<StringVec>,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {}\n\nimpl ActiveModelBehavior for ActiveModel {}\n\n#[derive(Clone, Debug, PartialEq, Eq)]\npub struct StringVec(pub Vec<String>);\n\nimpl From<StringVec> for Value {\n    fn from(source: StringVec) -> Self {\n        Value::String(serde_json::to_string(&source).ok().map(Box::new))\n    }\n}\n\nimpl sea_orm::TryGetable for StringVec {\n    fn try_get(res: &QueryResult, pre: &str, col: &str) -> Result<Self, TryGetError> {\n        let json_str: String = res.try_get(pre, col).map_err(TryGetError::DbErr)?;\n        serde_json::from_str(&json_str).map_err(|e| TryGetError::DbErr(DbErr::Json(e.to_string())))\n    }\n}\n\nimpl sea_query::ValueType for StringVec {\n    fn try_from(v: Value) -> Result<Self, sea_query::ValueTypeErr> {\n        match v {\n            Value::String(Some(x)) => Ok(StringVec(\n                serde_json::from_str(&x).map_err(|_| sea_query::ValueTypeErr)?,\n            )),\n            _ => Err(sea_query::ValueTypeErr),\n        }\n    }\n\n    fn type_name() -> String {\n        stringify!(StringVec).to_owned()\n    }\n\n    fn array_type() -> sea_orm::sea_query::ArrayType {\n        sea_orm::sea_query::ArrayType::String\n    }\n\n    fn column_type() -> sea_query::ColumnType {\n        sea_query::ColumnType::String(None)\n    }\n}\n\nimpl sea_query::Nullable for StringVec {\n    fn null() -> Value {\n        Value::String(None)\n    }\n}\n')))}m.isMDXComponent=!0}}]);