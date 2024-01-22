"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[6826],{8859:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(1308),a=(n(6687),n(8859));const o={},i="Async Programming in Rust",s={unversionedId:"introduction/async-programming",id:"version-0.3.x/introduction/async-programming",title:"Async Programming in Rust",description:"Async programming in Rust is a recent development, only having been stabilized in Rust 1.39. The async ecosystem is rapidly evolving, and SeaStreamer is an async-only library.",source:"@site/versioned_docs/version-0.3.x/01-introduction/02-async-programming.md",sourceDirName:"01-introduction",slug:"/introduction/async-programming",permalink:"/SeaStreamer/docs/introduction/async-programming",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaStreamer/versioned_docs/version-0.3.x/01-introduction/02-async-programming.md",tags:[],version:"0.3.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1705896026,formattedLastUpdatedAt:"Jan 22, 2024",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro to Stream Processing",permalink:"/SeaStreamer/docs/introduction/intro-to-streams"},next:{title:"SeaStreamer Concepts",permalink:"/SeaStreamer/docs/introduction/sea-streamer"}},l={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"async-programming-in-rust"},"Async Programming in Rust"),(0,a.kt)("p",null,"Async programming in Rust is a recent development, only having been stabilized in Rust ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rust/releases/tag/1.39.0"},(0,a.kt)("inlineCode",{parentName:"a"},"1.39")),". The async ecosystem is rapidly evolving, and SeaStreamer is an async-only library."),(0,a.kt)("p",null,"The first concept to learn is the ",(0,a.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/02_execution/02_future.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Future"))," trait. ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," allows us to achieve concurrency with little programming effort, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/futures/latest/futures/future/fn.join_all.html"},(0,a.kt)("inlineCode",{parentName:"a"},"future::join_all"))," to execute multiple tasks in parallel."),(0,a.kt)("p",null,"The second concept to learn is the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/futures-core/latest/futures_core/stream/trait.Stream.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Stream"))," trait. It's like ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/iter/trait.Iterator.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Iterator")),", but async. It is very powerful, and allows us to manipulate streams ergonomically by composing ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Fold"),"."),(0,a.kt)("p",null,"Third, there are multiple async runtimes in Rust. ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/async-std"},(0,a.kt)("inlineCode",{parentName:"a"},"async-std"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tokio"},(0,a.kt)("inlineCode",{parentName:"a"},"tokio"))," are the two most widely used in production, and SeaStreamer supports both of them. These async runtimes are multi-threaded, meaning that a Future may be moved between threads, but it can only happen at ",(0,a.kt)("inlineCode",{parentName:"p"},".await")," points. There is true parallelism - so race condition and contention can and do happen."),(0,a.kt)("p",null,"Understanding these concepts is essential to get your hands on real-time async programming in Rust."))}m.isMDXComponent=!0}}]);