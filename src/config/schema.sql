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

-- 6 work
create table if not exists work (
    id serial primary key,
    name  varchar(255),
    position  varchar(255),
    github text,
    demo text,
    framework  varchar(255),
    description text,
    created_at timestamp default now(),
);

-- 7 image_work 
create table if not exists image_work (
    id serial primary key,
    originalname varchar(255) NOT NULL,
    path TEXT NOT NULL,
    filename VARCHAR(255) NOT NULL,
    size INT NOT NULL,
    encoding VARCHAR(255) NOT NULL,
    by_work INT NOT NULL,
    created_at timestamp default now(),
    constraint fk_image_work
        foreign key (by_work) references work(id)
        on delete cascade
);

-- 8 technology 
create table if not exists technology (
    id saerial primary key,
    name VARCHAR(255),
    by_work INT NOT NULL,
    created_at timestamp default now(),
    constraint fk_technology_work
        foreign key (by_work) references work(id)
        on delete cascade
);

-- 9 technology_tools
create table if not exists technology_tool (
    id serial primary key,
    name varchar(255) null,
    by_technology int not null,
    created_at timestamp default now(),
    constraint fk_tool_technology
        foreign key (by_technology) references technology(id)
        on delete cascade
);
-- 10 key_feature
create table if not exists key_feature (
    id serial primary key,
    name varchar(255) null,
    by_work int not null,
    description text null,
    created_at timestamp default now(),
    constraint fk_feature_work
        foreign key (by_work) references work(id)
        on delete cascade
);