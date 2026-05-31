-- 1 user with enum user_role
create type user_role as enum("user, admin, editor");
create table if not exists user(
    id serial primary key,
    username varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null ,
    role user_role DEFAULT 'user' not null,
    created_at TIMESTAMP DEFAULT NOW()
);
-- 3 education
CREATE TABLE IF NOT EXISTS education (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NULL,
    major VARCHAR(255) NULL,
    gpa VARCHAR(255) NULL,
    year VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
-- 4 education_degres
create table if not exists education_degres(
    id serial primary key,
    image_url varchar(500) not null,
    created_at timestamp default now(),
    by_seducation int not null,
    constraint fk_education
        foreign key (by_seducation)
        references education(id)
        on delete cascade
);