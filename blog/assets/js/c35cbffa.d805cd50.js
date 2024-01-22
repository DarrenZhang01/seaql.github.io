"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[7958],{9680:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,d=c["".concat(o,".").concat(h)]||c[h]||m[h]||l;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(1308),n=(a(6687),a(9680));const l={slug:"2022-08-05-whats-new-in-seaquery-0.26.0",title:"What's new in SeaQuery 0.26.0",author:"SeaQL Team",author_title:"Ivan Krivosheev",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,s={permalink:"/blog/2022-08-05-whats-new-in-seaquery-0.26.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-08-05-whats-new-in-seaquery-0.26.0.md",source:"@site/blog/2022-08-05-whats-new-in-seaquery-0.26.0.md",title:"What's new in SeaQuery 0.26.0",description:"\ud83c\udf89 We are pleased to release SeaQuery 0.26.0! Here are some feature highlights \ud83c\udf1f:",date:"2022-08-05T00:00:00.000Z",formattedDate:"August 5, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:2.535,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Ivan Krivosheev",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-08-05-whats-new-in-seaquery-0.26.0",title:"What's new in SeaQuery 0.26.0",author:"SeaQL Team",author_title:"Ivan Krivosheev",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"Celebrating 3,000+ GitHub Stars \ud83c\udf89",permalink:"/blog/2022-08-12-3k-github-stars"},nextItem:{title:"Engineering at SeaQL.org",permalink:"/blog/2022-07-30-engineering"}},o={authorsImageUrls:[void 0]},p=[{value:"Dependency Upgrades",id:"dependency-upgrades",level:2},{value:"VALUES lists",id:"values-lists",level:2},{value:"Introduce sea-query-binder",id:"introduce-sea-query-binder",level:2},{value:"CASE WHEN statement support",id:"case-when-statement-support",level:2},{value:"Add support for Ip(4,6)Network and MacAddress",id:"add-support-for-ip46network-and-macaddress",level:2},{value:"Introduce sea-query-attr",id:"introduce-sea-query-attr",level:2},{value:"Add ability to alter foreign keys",id:"add-ability-to-alter-foreign-keys",level:2},{value:"Select DISTINCT ON",id:"select-distinct-on",level:2},{value:"Miscellaneous Enhancements",id:"miscellaneous-enhancements",level:2},{value:"Integration Examples",id:"integration-examples",level:2},{value:"Community",id:"community",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaQuery ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/releases/tag/0.26.0"},(0,n.kt)("inlineCode",{parentName:"a"},"0.26.0")),"! Here are some feature highlights \ud83c\udf1f:"),(0,n.kt)("h2",{id:"dependency-upgrades"},"Dependency Upgrades"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/356"},"#356"),"] We have upgraded a few major dependencies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Upgrade ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/launchbadge/sqlx"},(0,n.kt)("inlineCode",{parentName:"a"},"sqlx"))," to 0.6"),(0,n.kt)("li",{parentName:"ul"},"Upgrade ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/time-rs/time"},(0,n.kt)("inlineCode",{parentName:"a"},"time"))," to 0.3"),(0,n.kt)("li",{parentName:"ul"},"Upgrade ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/uuid-rs/uuid"},(0,n.kt)("inlineCode",{parentName:"a"},"uuid"))," to 1.0"),(0,n.kt)("li",{parentName:"ul"},"Upgrade ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/akubera/bigdecimal-rs"},(0,n.kt)("inlineCode",{parentName:"a"},"bigdecimal"))," to 0.3"),(0,n.kt)("li",{parentName:"ul"},"Upgrade ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/achanda/ipnetwork"},(0,n.kt)("inlineCode",{parentName:"a"},"ipnetwork"))," to 0.19")),(0,n.kt)("p",null,"Note that you might need to upgrade the corresponding dependency on your application as well."),(0,n.kt)("h2",{id:"values-lists"},"VALUES lists"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/350"},"#351"),"] Add support for VALUES lists"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'// SELECT * FROM (VALUES (1, \'hello\'), (2, \'world\')) AS "x"\nlet query = SelectStatement::new()\n    .expr(Expr::asterisk())\n    .from_values(vec![(1i32, "hello"), (2, "world")], Alias::new("x"))\n    .to_owned();\n\n assert_eq!(\n     query.to_string(PostgresQueryBuilder), \n     r#"SELECT * FROM (VALUES (1, \'hello\'), (2, \'world\')) AS "x""#\n );\n')),(0,n.kt)("h2",{id:"introduce-sea-query-binder"},"Introduce sea-query-binder"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/273"},"#273"),"] Native support SQLx without marcos"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query_binder::SqlxBinder;\n\n// Create SeaQuery query with prepare SQLx\nlet (sql, values) = Query::select()\n    .columns([\n        Character::Id,\n        Character::Uuid,\n        Character::Character,\n        Character::FontSize,\n        Character::Meta,\n        Character::Decimal,\n        Character::BigDecimal,\n        Character::Created,\n        Character::Inet,\n        Character::MacAddress,\n    ])\n    .from(Character::Table)\n    .order_by(Character::Id, Order::Desc)\n    .build_sqlx(PostgresQueryBuilder);\n\n// Execute query\nlet rows = sqlx::query_as_with::<_, CharacterStructChrono, _>(&sql, values)\n    .fetch_all(&mut pool)\n    .await?;\n\n// Print rows\nfor row in rows.iter() {\n    println!("{:?}", row);\n}\n')),(0,n.kt)("h2",{id:"case-when-statement-support"},"CASE WHEN statement support"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/304"},"#304"),"] Add support for ",(0,n.kt)("inlineCode",{parentName:"p"},"CASE WHEN")," statement"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let query = Query::select()\n    .expr_as(\n        CaseStatement::new()\n            .case(Expr::tbl(Glyph::Table, Glyph::Aspect).is_in(vec![2, 4]), Expr::val(true))\n            .finally(Expr::val(false)),\n        Alias::new("is_even")\n    )\n    .from(Glyph::Table)\n    .to_owned();\n    \nassert_eq!(\n    query.to_string(PostgresQueryBuilder),\n    r#"SELECT (CASE WHEN ("glyph"."aspect" IN (2, 4)) THEN TRUE ELSE FALSE END) AS "is_even" FROM "glyph""#\n);\n')),(0,n.kt)("h2",{id:"add-support-for-ip46network-and-macaddress"},"Add support for Ip(4,6)Network and MacAddress"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/309"},"#309"),"] Add support for Network types in PostgreSQL backend"),(0,n.kt)("h2",{id:"introduce-sea-query-attr"},"Introduce sea-query-attr"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/296"},"#296"),"] Proc-macro for deriving Iden enum from struct"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_query::gen_type_def;\n\n#[gen_type_def]\npub struct Hello {\n    pub name: String\n}\n\nprintln!("{:?}", HelloTypeDef::Name);\n')),(0,n.kt)("h2",{id:"add-ability-to-alter-foreign-keys"},"Add ability to alter foreign keys"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/299"},"#299"),"] Add support for ",(0,n.kt)("inlineCode",{parentName:"p"},"ALTER")," foreign Keys"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let foreign_key_char = TableForeignKey::new()\n    .name("FK_character_glyph")\n    .from_tbl(Char::Table)\n    .from_col(Char::FontId)\n    .from_col(Char::Id)\n    .to_tbl(Glyph::Table)\n    .to_col(Char::FontId)\n    .to_col(Char::Id)\n    .to_owned();\n\nlet table = Table::alter()\n    .table(Character::Table)\n    .add_foreign_key(&foreign_key_char)\n    .to_owned();\n\nassert_eq!(\n    table.to_string(PostgresQueryBuilder),\n    vec![\n        r#"ALTER TABLE "character""#,\n        r#"ADD CONSTRAINT "FK_character_glyph""#,\n        r#"FOREIGN KEY ("font_id", "id") REFERENCES "glyph" ("font_id", "id")"#,\n        r#"ON DELETE CASCADE ON UPDATE CASCADE,"#,\n    ]\n    .join(" ")\n);\n')),(0,n.kt)("h2",{id:"select-distinct-on"},"Select DISTINCT ON"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/250"},"#250"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let query = Query::select()\n    .from(Char::Table)\n    .distinct_on(vec![Char::Character])\n    .column(Char::Character)\n    .column(Char::SizeW)\n    .column(Char::SizeH)\n    .to_owned();\n    \n assert_eq!(\n     query.to_string(PostgresQueryBuilder),\n     r#"SELECT DISTINCT ON ("character") "character", "size_w", "size_h" FROM "character""#\n );\n')),(0,n.kt)("h2",{id:"miscellaneous-enhancements"},"Miscellaneous Enhancements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/353"},"#353"),"] Support ",(0,n.kt)("inlineCode",{parentName:"li"},"LIKE ... ESCAPE ..."),"  expression  "),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/306"},"#306"),"] Move ",(0,n.kt)("inlineCode",{parentName:"li"},"escape")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"unescape")," string to backend"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/365"},"#365"),"] Add method to make a column nullable"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/348"},"#348"),"] Add ",(0,n.kt)("inlineCode",{parentName:"li"},"is")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"is_not")," to Expr"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/349"},"#349"),"] Add ",(0,n.kt)("inlineCode",{parentName:"li"},"CURRENT_TIMESTAMP")," function"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/345"},"#345"),"] Add ",(0,n.kt)("inlineCode",{parentName:"li"},"in_tuple")," method to Expr"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/266"},"#266"),"] Insert Default"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/324"},"#324"),"] Make ",(0,n.kt)("inlineCode",{parentName:"li"},"sea-query-driver")," an optional dependency"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/334"},"#334"),"] Add ",(0,n.kt)("inlineCode",{parentName:"li"},"ABS")," function"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/332"},"#332"),"] Support ",(0,n.kt)("inlineCode",{parentName:"li"},"IF NOT EXISTS")," when create index"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/314"},"#314"),"] Support different ",(0,n.kt)("inlineCode",{parentName:"li"},"blob")," types in MySQL"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/331"},"#331"),"] Add ",(0,n.kt)("inlineCode",{parentName:"li"},"VarBinary")," column type"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/335"},"#335"),"] ",(0,n.kt)("inlineCode",{parentName:"li"},"RETURNING")," expression supporting ",(0,n.kt)("inlineCode",{parentName:"li"},"SimpleExpr"))),(0,n.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,n.kt)("p",null,"SeaQuery plays well with the other crates in the rust ecosystem. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/postgres"},"Postgres Example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/rusqlite"},"Rusqlite Example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_any"},"SQLx Any Example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_postgres"},"SQLx Postgres Example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_mysql"},"SQLx MySql Example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_sqlite"},"SQLx Sqlite Example"))),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."))}m.isMDXComponent=!0}}]);