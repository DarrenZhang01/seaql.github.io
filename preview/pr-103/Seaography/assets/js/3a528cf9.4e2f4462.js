"use strict";(self.webpackChunkseaography=self.webpackChunkseaography||[]).push([[690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,u=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return r?n.createElement(u,i(i({ref:t},s),{},{components:r})):n.createElement(u,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="DataLoader",l={unversionedId:"data-loader",id:"data-loader",title:"DataLoader",description:"TODO",source:"@site/docs/06-data-loader.md",sourceDirName:".",slug:"/data-loader",permalink:"/preview/pr-103/Seaography/docs/next/data-loader",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Seaography/docs/06-data-loader.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1691123874,formattedLastUpdatedAt:"Aug 4, 2023",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Macros documentation",permalink:"/preview/pr-103/Seaography/docs/next/macros-documentation"}},c={},p=[],s={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dataloader"},"DataLoader"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("p",null,"Consider the following GraphQL query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  film(\n    pagination: { page: { limit: 3, page: 0 } }\n    filters: { releaseYear: { eq: 2006 } }\n    orderBy: { title: ASC }\n  ) {\n    nodes {\n      title\n      description\n      releaseYear\n      actor {\n        nodes {\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Behind the scene, the following SQL were queried:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  `film`.`film_id`,\n  `film`.`title`,\n  `film`.`description`,\n  `film`.`release_year`,\n  `film`.`language_id`,\n  `film`.`original_language_id`,\n  `film`.`rental_duration`,\n  `film`.`rental_rate`,\n  `film`.`length`,\n  `film`.`replacement_cost`,\n  `film`.`rating`,\n  `film`.`special_features`,\n  `film`.`last_update`\nFROM\n  `film`\nWHERE\n  `film`.`release_year` = ?\nORDER BY\n  `film`.`title` ASC\nLIMIT\n  ? OFFSET ?\n\nSELECT\n  `actor`.`actor_id`,\n  `actor`.`first_name`,\n  `actor`.`last_name`,\n  `actor`.`last_update`\nFROM\n  `actor`\n  INNER JOIN `film_actor` ON `film_actor`.`actor_id` = `actor`.`actor_id`\n  INNER JOIN `film` ON `film`.`film_id` = `film_actor`.`film_id`\nWHERE\n  `film`.`film_id` = ?\n  AND (TRUE)\n")))}d.isMDXComponent=!0}}]);