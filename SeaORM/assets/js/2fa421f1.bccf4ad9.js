"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Aggregate Functions",c={unversionedId:"advanced-query/aggregate-function",id:"version-0.4.x/advanced-query/aggregate-function",title:"Aggregate Functions",description:"You can group results selected from SeaORM find with the group_by method, and if you wish to further restrict the grouped result set, the having method can help you achieve that.",source:"@site/versioned_docs/version-0.4.x/08-advanced-query/03-aggregate-function.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/aggregate-function",permalink:"/SeaORM/docs/0.4.x/advanced-query/aggregate-function",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/08-advanced-query/03-aggregate-function.md",tags:[],version:"0.4.x",lastUpdatedBy:"darkmmon",lastUpdatedAt:1689732227,formattedLastUpdatedAt:"Jul 19, 2023",sidebarPosition:3,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Conditional Expressions",permalink:"/SeaORM/docs/0.4.x/advanced-query/conditional-expression"},next:{title:"Custom Joins",permalink:"/SeaORM/docs/0.4.x/advanced-query/custom-joins"}},u={},s=[{value:"Group By",id:"group-by",level:2},{value:"Having",id:"having",level:2}],l={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aggregate-functions"},"Aggregate Functions"),(0,a.kt)("p",null,"You can group results selected from SeaORM find with the ",(0,a.kt)("inlineCode",{parentName:"p"},"group_by")," method, and if you wish to further restrict the grouped result set, the ",(0,a.kt)("inlineCode",{parentName:"p"},"having")," method can help you achieve that."),(0,a.kt)("h2",{id:"group-by"},"Group By"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"group_by")," method can take a column of the entity or a complex ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .group_by(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name""#\n);\n')),(0,a.kt)("h2",{id:"having"},"Having"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"having")," method can take any conditional expressions introduced in the previous section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .having(cake::Column::Id.eq(4))\n        .having(cake::Column::Id.eq(5))\n        .build(DbBackend::MySql)\n        .to_string(),\n    "SELECT `cake`.`id`, `cake`.`name` FROM `cake` HAVING `cake`.`id` = 4 AND `cake`.`id` = 5"\n);\n')))}d.isMDXComponent=!0}}]);