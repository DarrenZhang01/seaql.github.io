"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3961],{8859:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(1308),o=(n(6687),n(8859));const i={},a="The Vision",s={unversionedId:"next/vision",id:"version-0.1.x/next/vision",title:"The Vision",description:"We want to make Rust the best data engineering platform, with tools that span from development to production.",source:"@site/versioned_docs/version-0.1.x/05-next/02-vision.md",sourceDirName:"05-next",slug:"/next/vision",permalink:"/SeaStreamer/docs/0.1.x/next/vision",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.1.x/05-next/02-vision.md",tags:[],version:"0.1.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1705896026,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Roadmap",permalink:"/SeaStreamer/docs/0.1.x/next/roadmap"}},l={},c=[{value:"The <code>sed</code> for streams",id:"the-sed-for-streams",level:2},{value:"Inter Process Communication",id:"inter-process-communication",level:2},{value:"Inter Host Communication",id:"inter-host-communication",level:2},{value:"Your idea",id:"your-idea",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-vision"},"The Vision"),(0,o.kt)("p",null,"We want to make Rust the best data engineering platform, with tools that span from development to production."),(0,o.kt)("p",null,"Below is just part of my imagination, hopefully we will be able to realize them ",(0,o.kt)("em",{parentName:"p"},"some day"),"!"),(0,o.kt)("h2",{id:"the-sed-for-streams"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"sed")," for streams"),(0,o.kt)("p",null,"Since we've talked about shells a lot, it will be great if we have an equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"sed")," that allow us to filter, transform and combine structured messages with a scripting language."),(0,o.kt)("h2",{id:"inter-process-communication"},"Inter Process Communication"),(0,o.kt)("p",null,"Right now pipe is the only mechanism for connecting processors together, which is copy-heavy. For some high-through scenario, sharded memory could fair better."),(0,o.kt)("h2",{id:"inter-host-communication"},"Inter Host Communication"),(0,o.kt)("p",null,"Right now the only way to connect across host is to rely on a streaming server. In a containerized environment, it might make sense to allow processors to communicate privately via TCP streams."),(0,o.kt)("h2",{id:"your-idea"},"Your idea"),(0,o.kt)("p",null,"We welcome you to join our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/discussions"},"Discussions")," if you have ideas or insights!"))}u.isMDXComponent=!0}}]);