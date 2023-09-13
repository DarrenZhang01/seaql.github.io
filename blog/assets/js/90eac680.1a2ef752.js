"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[5076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<s;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8240:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const s={slug:"2023-04-03-intro-sea-streamer",title:"Introducing SeaStreamer \ud83c\udf0a",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},o=void 0,i={permalink:"/blog/2023-04-03-intro-sea-streamer",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2023-04-03-intro-sea-streamer.md",source:"@site/blog/2023-04-03-intro-sea-streamer.md",title:"Introducing SeaStreamer \ud83c\udf0a",description:"We are pleased to introduce SeaStreamer to the Rust community today. SeaStreamer is a stream processing toolkit to help you build stream processors in Rust.",date:"2023-04-03T00:00:00.000Z",formattedDate:"April 3, 2023",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:4.915,hasTruncateMarker:!1,authors:[{name:"Chris Tsang",title:"SeaQL Team",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],frontMatter:{slug:"2023-04-03-intro-sea-streamer",title:"Introducing SeaStreamer \ud83c\udf0a",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},prevItem:{title:"Announcing SeaORM 0.12 \ud83d\udc1a",permalink:"/blog/2023-08-12-announcing-seaorm-0.12"},nextItem:{title:"What's new in SeaORM 0.11.0",permalink:"/blog/2023-02-08-whats-new-in-seaorm-0.11.0"}},l={authorsImageUrls:[void 0]},m=[{value:"High level async API",id:"high-level-async-api",level:2},{value:"Trait-based abstract interface",id:"trait-based-abstract-interface",level:2},{value:"Redis Streams Support",id:"redis-streams-support",level:2},{value:"Enum-based generic interface",id:"enum-based-generic-interface",level:2},{value:"Good old unix pipe",id:"good-old-unix-pipe",level:2},{value:"Testable",id:"testable",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Roadmap",id:"roadmap",level:2},{value:"People",id:"people",level:2},{value:"Community",id:"community",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{href:"https://www.sea-ql.org/SeaStreamer/"},(0,n.kt)("img",{src:"https://www.sea-ql.org/SeaStreamer/img/SeaStreamer%20banner.png"})),(0,n.kt)("p",null,"We are pleased to introduce ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/"},"SeaStreamer")," to the Rust community today. SeaStreamer is a stream processing toolkit to help you build stream processors in Rust."),(0,n.kt)("p",null,"At SeaQL we want to make Rust the best programming platform for data engineering. Where SeaORM is the essential tool for working with SQL databases, SeaStreamer aims to be your essential toolkit for working with streams."),(0,n.kt)("p",null,"Currently SeaStreamer provides integration with Kafka and Redis."),(0,n.kt)("p",null,"Let's have a quick tour of SeaStreamer."),(0,n.kt)("h2",{id:"high-level-async-api"},"High level async API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"High level async API that supports both ",(0,n.kt)("inlineCode",{parentName:"li"},"async-std")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"tokio")),(0,n.kt)("li",{parentName:"ul"},"Mutex-free implementation",(0,n.kt)("sup",{parentName:"li",id:"fnref-1-e1956f"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1-e1956f",className:"footnote-ref"},"1")),": concurrency achieved by message passing"),(0,n.kt)("li",{parentName:"ul"},"A comprehensive type system that guides/restricts you with the API")),(0,n.kt)("p",null,"Below is a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-kafka/src/bin/consumer.rs"},"basic Kafka consumer"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[tokio::main]\nasync fn main() -> Result<()> {\n    env_logger::init();\n\n    let stream: StreamUrl = "kafka://streamer.sea-ql.org:9092/my_stream".parse()?;\n    let streamer = KafkaStreamer::connect(stream.streamer(), Default::default()).await?;\n    let mut options = KafkaConsumerOptions::new(ConsumerMode::RealTime);\n    options.set_auto_offset_reset(AutoOffsetReset::Earliest);\n    let consumer = streamer\n        .create_consumer(stream.stream_keys(), options)\n        .await?;\n\n    loop {\n        let mess = consumer.next().await?;\n        println!("{}", mess.message().as_str()?);\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/sea-streamer/latest/sea_streamer/trait.Consumer.html#tymethod.stream"},(0,n.kt)("inlineCode",{parentName:"a"},"Consumer::stream()"))," returns an object that implements the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/futures-core/latest/futures_core/stream/trait.Stream.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Stream"))," trait, which allows you to do neat things:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"let items = consumer\n    .stream()\n    .take(num)\n    .map(process_message)\n    .collect::<Vec<_>>()\n    .await\n")),(0,n.kt)("h2",{id:"trait-based-abstract-interface"},"Trait-based abstract interface"),(0,n.kt)("p",null,"All SeaStreamer backends implement a common abstract interface, offering you a familiar API. Below is a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-redis/src/bin/consumer.rs"},"basic Redis consumer"),", which is nearly the same as the previous example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[tokio::main]\nasync fn main() -> Result<()> {\n    env_logger::init();\n\n    let stream: StreamUrl = "redis://localhost:6379/my_stream".parse()?;\n    let streamer = RedisStreamer::connect(stream.streamer(), Default::default()).await?;\n    let mut options = RedisConsumerOptions::new(ConsumerMode::RealTime);\n    options.set_auto_stream_reset(AutoStreamReset::Earliest);\n    let consumer = streamer\n        .create_consumer(stream.stream_keys(), options)\n        .await?;\n\n    loop {\n        let mess = consumer.next().await?;\n        println!("{}", mess.message().as_str()?);\n    }\n}\n')),(0,n.kt)("h2",{id:"redis-streams-support"},"Redis Streams Support"),(0,n.kt)("p",null,"SeaStreamer Redis provides a Kafka-like stream semantics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Non-group streaming with AutoStreamReset option"),(0,n.kt)("li",{parentName:"ul"},"Consumer-group-based streaming with auto-ack and/or auto-commit"),(0,n.kt)("li",{parentName:"ul"},"Load balancing among consumers with automatic failover"),(0,n.kt)("li",{parentName:"ul"},"Seek/rewind to point in time")),(0,n.kt)("p",null,"You don't have to call ",(0,n.kt)("inlineCode",{parentName:"p"},"XADD"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"XREAD"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"XACK"),", etc... anymore!"),(0,n.kt)("h2",{id:"enum-based-generic-interface"},"Enum-based generic interface"),(0,n.kt)("p",null,"The trait-based API requires you to designate the concrete ",(0,n.kt)("inlineCode",{parentName:"p"},"Streamer")," type for monomorphization, otherwise the code cannot compile."),(0,n.kt)("p",null,"Akin to how SeaORM implements runtime-polymorphism, SeaStreamer provides a enum-based generic streamer, in which the backend is selected ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"on runtime")),"."),(0,n.kt)("p",null,"Here is an illustration (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/resumable.rs"},"full example"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'// sea-streamer-socket\npub struct SeaConsumer {\n    backend: SeaConsumerBackend,\n}\n\nenum SeaConsumerBackend {\n    #[cfg(feature = "backend-kafka")]\n    Kafka(KafkaConsumer),\n    #[cfg(feature = "backend-redis")]\n    Redis(RedisConsumer),\n    #[cfg(feature = "backend-stdio")]\n    Stdio(StdioConsumer),\n}\n\n// Your code\nlet uri: StreamerUri = "kafka://localhost:9092".parse()?; // or\nlet uri: StreamerUri = "redis://localhost:6379".parse()?; // or\nlet uri: StreamerUri = "stdio://".parse()?;\n\n// SeaStreamer will be backed by Kafka, Redis or Stdio depending on the URI\nlet streamer = SeaStreamer::connect(uri, Default::default()).await?;\n\n// Set backend-specific options\nlet mut options = SeaConsumerOptions::new(ConsumerMode::Resumable);\noptions.set_kafka_consumer_options(|options: &mut KafkaConsumerOptions| { .. });\noptions.set_redis_consumer_options(|options: &mut RedisConsumerOptions| { .. });\nlet mut consumer: SeaConsumer = streamer.create_consumer(stream_keys, options).await?;\n\n// You can still retrieve the concrete type\nlet kafka: Option<&mut KafkaConsumer> = consumer.get_kafka();\nlet redis: Option<&mut RedisConsumer> = consumer.get_redis();\n')),(0,n.kt)("p",null,'So you can "write once, stream anywhere"!'),(0,n.kt)("h2",{id:"good-old-unix-pipe"},"Good old unix pipe"),(0,n.kt)("p",null,"In SeaStreamer, ",(0,n.kt)("inlineCode",{parentName:"p"},"stdin")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"stdout")," can be used as stream source and sink."),(0,n.kt)("p",null,"Say you are developing some processors to transform a stream in several stages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"./processor_1 --input kafka://localhost:9092/input --output kafka://localhost:9092/stage_1 &\n./processor_2 --input kafka://localhost:9092/stage_1 --output kafka://localhost:9092/stage_2 &\n./processor_3 --input kafka://localhost:9092/stage_2 --output kafka://localhost:9092/output &\n")),(0,n.kt)("p",null,"It would be great if we can simply ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"pipe"))," the processors together right?"),(0,n.kt)("p",null,"With SeaStreamer, you can do the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"./processor_1 --input kafka://localhost:9092/input --output stdio:///stream |\n./processor_2 --input stdio:///stream --output stdio:///stream |\n./processor_3 --input stdio:///stream --output kafka://localhost:9092/output\n")),(0,n.kt)("p",null,"All ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"without recompiling"))," the stream processors! Now, you can develop locally with the comfort of using ",(0,n.kt)("inlineCode",{parentName:"p"},"|"),", ",(0,n.kt)("inlineCode",{parentName:"p"},">"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"<")," and your favourite unix program in the shell."),(0,n.kt)("h2",{id:"testable"},"Testable"),(0,n.kt)("p",null,"SeaStreamer encourages you to write tests at all levels:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can execute tests involving several ",(0,n.kt)("em",{parentName:"li"},"stream processors")," in the same ",(0,n.kt)("em",{parentName:"li"},"OS process")),(0,n.kt)("li",{parentName:"ul"},"You can execute tests involving several ",(0,n.kt)("em",{parentName:"li"},"OS processes")," by connecting them with pipes"),(0,n.kt)("li",{parentName:"ul"},"You can execute tests involving several ",(0,n.kt)("em",{parentName:"li"},"stream processors")," with Redis / Kafka")),(0,n.kt)("p",null,"All against the same piece of code! Let SeaStreamer take away the boilerplate and mocking facility from your codebase."),(0,n.kt)("p",null,"Below is an example of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-stdio/tests/loopback.rs"},"intra-process testing"),", which can be run with ",(0,n.kt)("inlineCode",{parentName:"p"},"cargo test")," without any dependency or side-effects:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'let stream = StreamKey::new("test")?;\nlet mut options = StdioConnectOptions::default();\noptions.set_loopback(true); // messages produced will be feed back to consumers\nlet streamer = StdioStreamer::connect(StreamerUri::zero(), options).await?;\nlet producer = streamer.create_producer(stream.clone(), Default::default()).await?;\nlet mut consumer = streamer.create_consumer(&[stream.clone()], Default::default()).await?;\n\nfor i in 0..5 {\n    let mess = format!("{}", i);\n    producer.send(mess)?;\n}\n\nlet seq = collect(&mut consumer, 5).await;\nassert_eq!(seq, [0, 1, 2, 3, 4]);\n')),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"If you are eager to get started with SeaStreamer, you can checkout our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/tree/main/examples"},"set of examples"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/consumer.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"consumer")),": A basic consumer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/producer.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"producer")),": A basic producer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/processor.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"processor")),": A basic stream processor"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/resumable.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"resumable")),": A resumable stream processor that continues from where it left off"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/buffered.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"buffered")),": An advanced stream processor with internal buffering and batch processing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/blocking.rs"},(0,n.kt)("inlineCode",{parentName:"a"},"blocking")),": An advanced stream processor for handling blocking / CPU-bound tasks")),(0,n.kt)("p",null,"Read the official ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaStreamer/docs/index/"},"documentation")," to learn more."),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"A few major components we ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaStreamer/docs/whats-next/roadmap/"},"plan to develop"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"File Backend"),(0,n.kt)("li",{parentName:"ul"},"Redis Cluster")),(0,n.kt)("p",null,"We welcome you to join our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-streamer/discussions"},"Discussions")," if you have thoughts or ideas!"),(0,n.kt)("h2",{id:"people"},"People"),(0,n.kt)("p",null,"SeaStreamer is designed and developed by the same mind who brought you ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/"},"SeaORM"),":"),(0,n.kt)("div",{class:"container"},(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--12 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Chris Tsang")))))),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,"SeaQL.org is an independent open-source organization run by passionate \ufe0fdevelopers. If you like our projects, please star \u2b50 and share our repositories. If you feel generous, a small donation via ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," will be greatly appreciated, and goes a long way towards sustaining the organization \ud83d\udea2."),(0,n.kt)("p",null,"SeaStreamer is a community driven project. We welcome you to participate, contribute and together build for Rust's future \ud83e\udd80."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1-e1956f"},"except ",(0,n.kt)("inlineCode",{parentName:"li"},"sea-streamer-stdio"),", but only contends on consumer add/drop",(0,n.kt)("a",{parentName:"li",href:"#fnref-1-e1956f",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);