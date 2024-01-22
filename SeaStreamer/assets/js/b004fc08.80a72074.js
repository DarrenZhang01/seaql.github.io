"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[242],{8859:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(1308),n=(r(6687),r(8859));const o={},i="The Roadmap",s={unversionedId:"whats-next/roadmap",id:"whats-next/roadmap",title:"The Roadmap",description:"Thank you for reading the documentation up to this chapter. Excuse me for asking you again, if you find this project interesting and/or useful, please star our GitHub repo! Your support is vital to the continued development of SeaStreamer.",source:"@site/docs/05-whats-next/01-roadmap.md",sourceDirName:"05-whats-next",slug:"/whats-next/roadmap",permalink:"/SeaStreamer/docs/next/whats-next/roadmap",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/docs/05-whats-next/01-roadmap.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1705896026,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intra Process",permalink:"/SeaStreamer/docs/next/processors/intra-process"},next:{title:"The Vision",permalink:"/SeaStreamer/docs/next/whats-next/vision"}},l={},p=[{value:"<code>sea-streamer-file</code>: File Backend",id:"sea-streamer-file-file-backend",level:2},{value:"<code>sea-streamer-redis</code>: Redis Cluster",id:"sea-streamer-redis-redis-cluster",level:2},{value:"Your proposal",id:"your-proposal",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-roadmap"},"The Roadmap"),(0,n.kt)("p",null,"Thank you for reading the documentation up to this chapter. Excuse me for asking you again, if you find this project interesting and/or useful, please star our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer"},"GitHub repo"),"! Your support is vital to the continued development of SeaStreamer."),(0,n.kt)("p",null,"Here are a few major components we plan to develop up next:"),(0,n.kt)("h2",{id:"sea-streamer-file-file-backend"},(0,n.kt)("inlineCode",{parentName:"h2"},"sea-streamer-file"),": File Backend"),(0,n.kt)("p",null,"An initial implementation is released in ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3"),". But there are still some TODOs:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Resumable: currently unimplemented. A potential implementation might be to commit into a local SQLite database."),(0,n.kt)("li",{parentName:"ol"},"Sharding: currently it only streams to Shard ZERO."),(0,n.kt)("li",{parentName:"ol"},"Verify: a utility program to verify and repair SeaStreamer binary file.")),(0,n.kt)("h2",{id:"sea-streamer-redis-redis-cluster"},(0,n.kt)("inlineCode",{parentName:"h2"},"sea-streamer-redis"),": Redis Cluster"),(0,n.kt)("p",null,"Redis support has been released in ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-streamer")," ",(0,n.kt)("inlineCode",{parentName:"p"},"0.2"),"! Basic stream sharding is implemented, but sharding without clustering is not very useful. "),(0,n.kt)("p",null,"In the future, we'd like to support Redis Cluster, right now it's pretty much a work-in-progress. It's quite a difficult task, because clients have to take responsibility when working with a cluster.\nIn Redis, shards and nodes is a dynamic M-N mapping - shards can be moved among nodes ",(0,n.kt)("em",{parentName:"p"},"at any time"),".\nIt makes testing much more difficult."),(0,n.kt)("p",null,"In Redis, consumers in the same group share the same shard, i.e. shared shard. In the future, we'd like to support 'owned shard' semantics, where each consumer will attempt to claim ownership of a shard, and other consumers in the group will not step in. This mimicks Kafka\u2019s consumer group behaviour."),(0,n.kt)("p",null,"Let us know if you'd like to help!"),(0,n.kt)("h2",{id:"your-proposal"},"Your proposal"),(0,n.kt)("p",null,"We welcome you to join our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/discussions"},"Discussions")," if you have thoughts and experience!"))}d.isMDXComponent=!0}}]);