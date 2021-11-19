---
slug: 2021-11-19-whats-new-in-0.4.0
title: What's new in SeaORM 0.4.0
author: SeaQL Team
author_title: Chris Tsang
author_url: https://github.com/SeaQL
author_image_url: https://www.sea-ql.org/SeaORM/img/SeaQL.png
tags: [news]
---

🎉 We are pleased to release SeaORM [`0.4.0`](https://github.com/SeaQL/sea-orm/releases/tag/0.4.0) today! Here are some feature highlights 🌟:

## ActiveEnum

[[#258](https://github.com/SeaQL/sea-orm/pull/258)] You can now use custom enum in model where each enum variants are serialized into database value of string, integer or native database enum. Please find [here](/SeaORM/docs/basic-crud/active-enum) for the in-depth documentation.

```rust
#[derive(Debug, Clone, PartialEq, DeriveEntityModel)]
#[sea_orm(table_name = "active_enum")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    // Use our custom enum in a model
    pub category: Option<Category>,
    pub color: Option<Color>,
    pub tea: Option<Tea>,
}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]
// An enum serialized into database as a string value
pub enum Category {
    #[sea_orm(string_value = "B")]
    Big,
    #[sea_orm(string_value = "S")]
    Small,
}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "i32", db_type = "Integer")]
// An enum serialized into database as an integer value
pub enum Color {
    #[sea_orm(num_value = 0)]
    Black,
    #[sea_orm(num_value = 1)]
    White,
}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]
// An enum serialized into database as a database native enum
pub enum Tea {
    #[sea_orm(string_value = "EverydayTea")]
    EverydayTea,
    #[sea_orm(string_value = "BreakfastTea")]
    BreakfastTea,
}

#[derive(Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
```

Contributed by:

<div class="row">
    <div class="col col--3 margin-bottom--md">
        <div class="avatar">
            <a class="avatar__photo-link avatar__photo avatar__photo--sm" href="https://github.com/billy1624">
                <img src="https://avatars.githubusercontent.com/u/30400950?v=4" />
            </a>
            <div class="avatar__intro">
                <div class="avatar__name">
                    Billy Chan
                </div>
            </div>
        </div>
    </div>
</div>

## Supports RETURNING Clause on PostgreSQL

[[#292](https://github.com/SeaQL/sea-orm/pull/292)] When performing insert or update operation on `ActiveModel` against PostgreSQL, RETURNING clause will be used to avoid excessive querying of inserted or updated model from the database.

```rust
// For PostgreSQL
cake::ActiveModel {
    name: Set("Apple Pie".to_owned()),
    ..Default::default()
}
.insert(&postgres_db)
.await?;

assert_eq!(
    postgres_db.into_transaction_log(),
    vec![Transaction::from_sql_and_values(
        DbBackend::Postgres,
        r#"INSERT INTO "cake" ("name") VALUES ($1) RETURNING "id", "name""#,
        vec!["Apple Pie".into()]
    )]);
```

```rust
// For MySQL & SQLite
cake::ActiveModel {
    name: Set("Apple Pie".to_owned()),
    ..Default::default()
}
.insert(&other_db)
.await?;

assert_eq!(
    other_db.into_transaction_log(),
    vec![
        Transaction::from_sql_and_values(
            DbBackend::MySql,
            r#"INSERT INTO `cake` (`name`) VALUES (?)"#,
            vec!["Apple Pie".into()]
        ),
        Transaction::from_sql_and_values(
            DbBackend::MySql,
            r#"SELECT `cake`.`id`, `cake`.`name` FROM `cake` WHERE `cake`.`id` = ? LIMIT ?"#,
            vec![15.into(), 1u64.into()]
        )]);
```

Contributed by:

<div class="row">
    <div class="col col--3 margin-bottom--md">
        <div class="avatar">
            <a class="avatar__photo-link avatar__photo avatar__photo--sm" href="https://github.com/billy1624">
                <img src="https://avatars.githubusercontent.com/u/30400950?v=4" />
            </a>
            <div class="avatar__intro">
                <div class="avatar__name">
                    Billy Chan
                </div>
            </div>
        </div>
    </div>
    <div class="col col--3 margin-bottom--md">
        <div class="avatar">
            <a class="avatar__photo-link avatar__photo avatar__photo--sm" href="https://github.com/marlon-sousa">
                <img src="https://avatars.githubusercontent.com/u/21093041?v=4" />
            </a>
            <div class="avatar__intro">
                <div class="avatar__name">
                    Marlon Brandão de Sousa
                </div>
            </div>
        </div>
    </div>
</div>

## Axum Integration Example

[[#297](https://github.com/SeaQL/sea-orm/pull/297)] Introducing [Axum integration example](https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example) which is Axum version of [Actix4](https://github.com/SeaQL/sea-orm/tree/master/examples/actix4_example) and [Actix3](https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example) integration examples.

Contributed by:

<div class="row">
    <div class="col col--3 margin-bottom--md">
        <div class="avatar">
            <a class="avatar__photo-link avatar__photo avatar__photo--sm" href="https://github.com/YoshieraHuang">
                <img src="https://avatars.githubusercontent.com/u/38752027?v=4" />
            </a>
            <div class="avatar__intro">
                <div class="avatar__name">
                    Yoshiera
                </div>
            </div>
        </div>
    </div>
</div>

## Rust Edition 2021

[[#273](https://github.com/SeaQL/sea-orm/pull/273)] Updating all SeaORM crates to [Rust Edition 2021](https://blog.rust-lang.org/2021/10/21/Rust-1.56.0.html#rust-2021)

Contributed by:

<div class="row">
    <div class="col col--3 margin-bottom--md">
        <div class="avatar">
            <a class="avatar__photo-link avatar__photo avatar__photo--sm" href="https://github.com/sno2">
                <img src="https://avatars.githubusercontent.com/u/43641633?v=4" />
            </a>
            <div class="avatar__intro">
                <div class="avatar__name">
                    Carter Snook
                </div>
            </div>
        </div>
    </div>
</div>

## PaginatorTrait

[[#306](https://github.com/SeaQL/sea-orm/pull/306)] Refactor `paginate()` & `count()` utilities into `PaginatorTrait`. You can use the paginator as usual but you might need to import `PaginatorTrait` manually when upgrading to `0.4.x`.

```rust
use futures::TryStreamExt;
use sea_orm::{entity::*, query::*, tests_cfg::cake};

let mut cake_stream = cake::Entity::find()
    .order_by_asc(cake::Column::Id)
    .paginate(db, 50)
    .into_stream();

while let Some(cakes) = cake_stream.try_next().await? {
    // Do something on cakes: Vec<cake::Model>
}
```

Contributed by:

<div class="row">
    <div class="col col--3 margin-bottom--md">
        <div class="avatar">
            <a class="avatar__photo-link avatar__photo avatar__photo--sm" href="https://github.com/YoshieraHuang">
                <img src="https://avatars.githubusercontent.com/u/38752027?v=4" />
            </a>
            <div class="avatar__intro">
                <div class="avatar__name">
                    Yoshiera
                </div>
            </div>
        </div>
    </div>
</div>

## Database Specific Schema Helper

[[#309](https://github.com/SeaQL/sea-orm/pull/309)] The helper struct `Schema` converting `EntityTrait` into different `sea-query` statement now has to be initialized with `DbBackend`.

```rust
use sea_orm::{tests_cfg::*, DbBackend, Schema};
use sea_orm::sea_query::TableCreateStatement;

// Before `0.4.x`
let _: TableCreateStatement = Schema::create_table_from_entity(cake::Entity);

// Now
let schema: Schema = Schema::new(DbBackend::MySql);
let _: TableCreateStatement = schema.create_table_from_entity(cake::Entity);
```

Contributed by:

<div class="row">
    <div class="col col--3 margin-bottom--md">
        <div class="avatar">
            <a class="avatar__photo-link avatar__photo avatar__photo--sm" href="https://github.com/billy1624">
                <img src="https://avatars.githubusercontent.com/u/30400950?v=4" />
            </a>
            <div class="avatar__intro">
                <div class="avatar__name">
                    Billy Chan
                </div>
            </div>
        </div>
    </div>
</div>

## Disable SQLx Logging

[[#290](https://github.com/SeaQL/sea-orm/pull/290)] You can now disable SQLx statement logging when initializing the connection.

```rust
let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());
opt.max_connections(100)
    .min_connections(5)
    .connect_timeout(Duration::from_secs(8))
    .idle_timeout(Duration::from_secs(8))
    // Disable SQLx statement logging
    .sqlx_logging(false);

let db = Database::connect(opt).await?;
```

Contributed by:

<div class="row">
    <div class="col col--3 margin-bottom--md">
        <div class="avatar">
            <a class="avatar__photo-link avatar__photo avatar__photo--sm" href="https://github.com/tyt2y3">
                <img src="https://avatars.githubusercontent.com/u/1782664?v=4" />
            </a>
            <div class="avatar__intro">
                <div class="avatar__name">
                    Chris Tsang
                </div>
            </div>
        </div>
    </div>
</div>

## Community

SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future.

Here is the roadmap for SeaORM [`0.5.x`](https://github.com/SeaQL/sea-orm/milestone/5).