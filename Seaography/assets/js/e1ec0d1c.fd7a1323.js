"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[890],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9260:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},l="DataLoader",i={unversionedId:"data-loader",id:"version-0.2.x/data-loader",title:"DataLoader",description:"Seaography uses asyncgraphql::dataloader in querying nested objects to tackle the N+1 problem.",source:"@site/versioned_docs/version-0.2.x/06-data-loader.md",sourceDirName:".",slug:"/data-loader",permalink:"/Seaography/docs/0.2.x/data-loader",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/versioned_docs/version-0.2.x/06-data-loader.md",tags:[],version:"0.2.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1694616044,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Macros documentation",permalink:"/Seaography/docs/0.2.x/macros-documentation"}},c={},s=[],p={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dataloader"},"DataLoader"),(0,r.kt)("p",null,"Seaography uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/async-graphql/latest/async_graphql/dataloader/index.html"},"async_graphql::dataloader")," in querying nested objects to tackle the N+1 problem."),(0,r.kt)("p",null,"Consider the following GraphQL query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  film(\n    pagination: { pages: { limit: 3, page: 0 }}\n    filters: { releaseYear: { gte: "2006" } }\n    orderBy: { title: ASC }\n  ) {\n    nodes {\n      filmId\n      title\n      description\n      releaseYear\n      filmActor {\n        actor {\n          actorId\n          firstName\n          lastName\n        }\n      }\n    }\n    pages\n    current\n  }\n}\n')),(0,r.kt)("p",null,"Behind the scene, the following SQL were queried:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT "film"."film_id",\n       "film"."title",\n       "film"."description",\n       "film"."release_year",\n       "film"."language_id",\n       "film"."original_language_id",\n       "film"."rental_duration",\n       "film"."rental_rate",\n       "film"."length",\n       "film"."replacement_cost",\n       "film"."rating",\n       "film"."special_features",\n       "film"."last_update"\nFROM "film"\nWHERE "film"."release_year" >= \'2006\'\nORDER BY "film"."title" ASC\nLIMIT 3 OFFSET 0\n\nSELECT "film_actor"."actor_id", "film_actor"."film_id", "film_actor"."last_update"\nFROM "film_actor"\nWHERE "film_actor"."film_id" IN (1, 3, 2)\n\nSELECT "actor"."actor_id", "actor"."first_name", "actor"."last_name", "actor"."last_update"\nFROM "actor"\nWHERE "actor"."actor_id" IN (24, 162, 20, 160, 1, 188, 123, 30, 53, 40, 2, 64, 85, 198, 10, 19, 108, 90)\n')),(0,r.kt)("p",null,"Take ",(0,r.kt)("inlineCode",{parentName:"p"},"film_actor")," as an example, we want to fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"film_actor")," with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"(1, 3, 2)")," from the database. We give the ID to ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader"),", it has two purposes - it tells ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader")," which rows to be fetched, and, as a unique ID to determine the caller and therefore the proper receiver of the query result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct FilmActorFK(pub sea_orm::Value);\n\n// film::Model\nimpl Model {\n    pub async fn FilmActor<'a>(\n        &self,\n        ctx: &async_graphql::Context<'a>,\n    ) -> Option<Vec<super::film_actor::Model>> {\n        let data_loader = ctx\n            .data::<async_graphql::dataloader::DataLoader<crate::OrmDataloader>>()\n            .unwrap();\n\n        let from_column: super::film::Column = // ...\n\n        let key = FilmActorFK(self.get(from_column));\n\n        let data: Option<_> = data_loader.load_one(key) // Batch querying with foreign keys\n            .await\n            .unwrap();\n\n        data\n    }\n}\n")),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader"),", it will execute the select in batch. Then, return a hashmap with ID as the key. This allow us to associate the query result with the receiver thus return the corresponding result to the proper receiver."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[async_trait::async_trait]\nimpl async_graphql::dataloader::Loader<FilmActorFK> for crate::OrmDataloader {\n    type Value = Vec<super::film_actor::Model>;\n    type Error = std::sync::Arc<sea_orm::error::DbErr>;\n\n    async fn load(\n        &self,\n        keys: &[FilmActorFK],\n    ) -> Result<std::collections::HashMap<FilmActorFK, Self::Value>, Self::Error> {\n        let key_values: Vec<_> = keys\n            .into_iter()\n            .map(|key| key.0.to_owned())\n            .collect();\n\n        let to_column: super::film_actor::Column = // ...\n\n        let data: std::collections::HashMap<FilmActorFK, Self::Value> = super::film_actor::Entity::find()\n            .filter(to_column.is_in(key_values)) // Filter by a batch of foreign keys\n            .all(&self.db)\n            .await?\n            .into_iter()\n            .map(|model| {\n                let key = FilmActorFK(model.get(to_column));\n                (key, model) // Collect rows into a hashmap with foreign key as the key\n            })\n            .into_group_map();\n\n        Ok(data)\n    }\n}\n")))}m.isMDXComponent=!0}}]);