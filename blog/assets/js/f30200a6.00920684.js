"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[3962],{3905:(t,a,e)=>{e.d(a,{Zo:()=>m,kt:()=>v});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var l=r.createContext({}),c=function(t){var a=r.useContext(l),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},m=function(t){var a=c(t.components);return r.createElement(l.Provider,{value:a},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=c(e),h=n,v=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return e?r.createElement(v,i(i({ref:a},m),{},{components:e})):r.createElement(v,i({ref:a},m))}));function v(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,i=new Array(o);i[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=t,s[p]="string"==typeof t?t:n,i[1]=s;for(var c=2;c<o;c++)i[c]=e[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}h.displayName="MDXCreateElement"},4629:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=e(7462),n=(e(7294),e(3905));const o={slug:"2022-02-07-whats-new-in-0.6.0",title:"What's new in SeaORM 0.6.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,s={permalink:"/blog/2022-02-07-whats-new-in-0.6.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-02-07-whats-new-in-0.6.0.md",source:"@site/blog/2022-02-07-whats-new-in-0.6.0.md",title:"What's new in SeaORM 0.6.0",description:"\ud83c\udf89 We are pleased to release SeaORM 0.6.0 today! Here are some feature highlights \ud83c\udf1f:",date:"2022-02-07T00:00:00.000Z",formattedDate:"February 7, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:4.4,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-02-07-whats-new-in-0.6.0",title:"What's new in SeaORM 0.6.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"Google Summer of Code 2022",permalink:"/blog/gsoc-2022"},nextItem:{title:"What's new in SeaORM 0.5.0",permalink:"/blog/2022-01-01-whats-new-in-0.5.0"}},l={authorsImageUrls:[void 0]},c=[{value:"Migration",id:"migration",level:2},{value:"Support DateTimeUtc &amp; DateTimeLocal in Model",id:"support-datetimeutc--datetimelocal-in-model",level:2},{value:"Mock Join Results",id:"mock-join-results",level:2},{value:"Support Max Connection Lifetime Option",id:"support-max-connection-lifetime-option",level:2},{value:"SeaORM CLI &amp; Codegen Updates",id:"seaorm-cli--codegen-updates",level:2},{value:"Sponsor",id:"sponsor",level:2},{value:"Community",id:"community",level:2}],m={toc:c},p="wrapper";function u(t){let{components:a,...e}=t;return(0,n.kt)(p,(0,r.Z)({},m,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaORM ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.6.0"},(0,n.kt)("inlineCode",{parentName:"a"},"0.6.0"))," today! Here are some feature highlights \ud83c\udf1f:"),(0,n.kt)("h2",{id:"migration"},"Migration"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/335"},"#335"),"] Version control you database schema with migrations written in SeaQuery or in raw SQL. View ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/migration/setting-up-migration"},"migration docs")," to learn more."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Setup the migration directory by executing ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-orm-cli migrate init"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"migration\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 m20220101_000001_create_table.rs\n    \u2514\u2500\u2500 main.rs\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Defines the migration in SeaQuery."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_schema::migration::prelude::*;\n\npub struct Migration;\n\nimpl MigrationName for Migration {\n    fn name(&self) -> &str {\n        "m20220101_000001_create_table"\n    }\n}\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table( ... )\n            .await\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .drop_table( ... )\n            .await\n    }\n}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Apply the migration by executing ",(0,n.kt)("inlineCode",{parentName:"p"},"sea-orm-cli migrate"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate\nApplying all pending migrations\nApplying migration 'm20220101_000001_create_table'\nMigration 'm20220101_000001_create_table' has been applied\n")))),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Designed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Chris Tsang")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.kt)("h2",{id:"support-datetimeutc--datetimelocal-in-model"},"Support DateTimeUtc & DateTimeLocal in Model"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/489"},"#489"),"] Represents database's timestamp column in Model with attribute of type ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTimeLocal")," (",(0,n.kt)("inlineCode",{parentName:"p"},"chrono::DateTime<Local>"),") or ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTimeUtc")," (",(0,n.kt)("inlineCode",{parentName:"p"},"chrono::DateTime<Utc>"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "satellite")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub satellite_name: String,\n    pub launch_date: DateTimeUtc,\n    pub deployment_date: DateTimeLocal,\n}\n')),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/lz1998"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/9082086?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"lz1998"))),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Chris Tsang")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/charleschege"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/33346042?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Charles\xb7Chege"))),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.kt)("h2",{id:"mock-join-results"},"Mock Join Results"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/455"},"#455"),"] Constructs mock results of related model with tuple of model."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let db = MockDatabase::new(DbBackend::Postgres)\n    // Mocking result of cake with its related fruit\n    .append_query_results(vec![vec![(\n        cake::Model {\n            id: 1,\n            name: "Apple Cake".to_owned(),\n        },\n        fruit::Model {\n            id: 2,\n            name: "Apple".to_owned(),\n            cake_id: Some(1),\n        },\n    )]])\n    .into_connection();\n\nassert_eq!(\n    cake::Entity::find()\n        .find_also_related(fruit::Entity)\n        .all(&db)\n        .await?,\n    vec![(\n        cake::Model {\n            id: 1,\n            name: "Apple Cake".to_owned(),\n        },\n        Some(fruit::Model {\n            id: 2,\n            name: "Apple".to_owned(),\n            cake_id: Some(1),\n        })\n    )]\n);\n')),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/cemoktra"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/15634263?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Bastian")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/cemoktra"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/15634263?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Bastian"))),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.kt)("h2",{id:"support-max-connection-lifetime-option"},"Support Max Connection Lifetime Option"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/493"},"#493"),"] You can set the maximum lifetime of individual connection with the ",(0,n.kt)("inlineCode",{parentName:"p"},"max_lifetime")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());\nopt.max_lifetime(Duration::from_secs(8))\n    .max_connections(100)\n    .min_connections(5)\n    .connect_timeout(Duration::from_secs(8))\n    .idle_timeout(Duration::from_secs(8))\n    .sqlx_logging(true);\n\nlet db = Database::connect(opt).await?;\n')),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.kt)("h2",{id:"seaorm-cli--codegen-updates"},"SeaORM CLI & Codegen Updates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/433"},"#433"),"] Generates the ",(0,n.kt)("inlineCode",{parentName:"li"},"column_name")," macro attribute for column which is not named in snake case"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/335"},"#335"),"] Introduces migration subcommands ",(0,n.kt)("inlineCode",{parentName:"li"},"sea-orm-cli migrate"))),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Gabriel-Paulucci"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/43076727?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Gabriel Paulucci")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.kt)("h2",{id:"sponsor"},"Sponsor"),(0,n.kt)("p",null,"Our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," profile is up! If you feel generous, a small donation will be greatly appreciated."),(0,n.kt)("p",null,"A big shout out to our sponsors \ud83d\ude07:"),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/exzachlyvv"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/46034847?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Zachary Vander Velden")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Shane Sveller")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/sakti"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/196178?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Sakti Dwi Cahyono")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm"},(0,n.kt)("img",{style:{width:"100%"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Unnamed Sponsor"))))),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."),(0,n.kt)("p",null,"Here is the roadmap for SeaORM ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/7"},(0,n.kt)("inlineCode",{parentName:"a"},"0.7.x")),"."))}u.isMDXComponent=!0}}]);