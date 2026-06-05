-- 1 user with enum user_role
create type user_role as enum("user, admin, editor");
create table if not exists user(
    id serial primary key,
    username varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null ,
    role user_role DEFAULT 'user' not null,
    created_at timestamp default now(),
);
-- 3 education
create table if not exists education (
    id serial primary key,
    name varchar(255) null,
    major varchar(255) null,
    gpa varchar(255) null,
    year varchar(255) null,
    created_at timestamp default now(),
);
-- 4 education_degres
create table if not exists education_degres(
    id serial primary key,
    image_url varchar(500) not null,
    created_at timestamp default now(),
    by_education int not null,
    constraint fk_education
        foreign key (by_education)
        references education(id)
        on delete cascade
);