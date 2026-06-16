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
    data_start date null,
    data_end date null,
    logo text null,
    created_at timestamp default now(),
);
-- 4 education_degres
create table if not exists education_degres(
    id serial primary key,
    originalname varchar(500) not null,
    filename varchar(500) not null,
    path text not null,
    size int not null,
    encoding varchar(500) not null,
    created_at timestamp default now(),
    by_education int not null,
    constraint fk_education
        foreign key (by_education)
        references education(id)
        on delete cascade
);
-- 5 skill 
create table if not exists skill(
    id serial primary key,
    name varchar(255) not null,
    logo_url text,
    rating decimal(5,2) not null,
    created_at timestamp default now(),
);