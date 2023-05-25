DATABASE CONFIGURATION

Database name : game_hub

Tables :
	- users
	- games
	- genres
	- screenshots
	- covers

users :
	- **user_id**
	- email
	- password
	- salt

played_list :
	- **user_id**
	- **game_id**

playing_list :
	- **user_id**
	- **game_id**

wish_list :
	- **user_id**
	- **game_id**

games :
	- **game_id**
	- title
	- rating
	- summary
	- release_date
	- url

genres :
	- **game_id**
	- genre_1
	- genre_2
	- genre_3
	- genre_4

screenshots :
	- **game_id**
	- screenshot_1
	- screenshot_2
	- screenshot_3

covers :
	- **game_id**
	- small_cover
	- big_cover

platforms :
	- **game_id**
	- platform_1
	- platform_2
	- platform_3
	- platform_4

Commands used :

CREATE TABLE covers (
game_id int primary key,
cover_1	varchar(80),
cover_2	varchar(80),
cover_3	varchar(80)
);

CREATE TABLE screenshots (
game_id	int	primary key,
sreenshot_1 varchar(80),
sreenshot_2 varchar(80),
sreenshot_3 varchar(80)
);

CREATE TABLE genres (
game_id int primary key,
genre_1	varchar(80),
genre_2	varchar(80),
genre_3	varchar(80)
);

CREATE TABLE games (
game_id int primary key,
title varchar(80),
rating double precision,
summary varchar(3000),
release_date int,
url varchar(100),
foreign key (game_id) references covers(game_id) on delete cascade on update cascade, 
foreign key (game_id) references screenshots(game_id) on delete cascade on update cascade, 
foreign key (game_id) references genres(game_id) on delete cascade on update cascade,
foreign key (game_id) references platforms(game_id) on delete cascade on update cascade
);

CREATE TABLE wish_list (
user_id int,
game_id int,
primary key (user_id,game_id)
);

CREATE TABLE playing_list (
user_id int,
game_id int,
primary key (user_id,game_id)
);

CREATE TABLE played_list (
user_id int,
game_id int,
primary key (user_id,game_id)
);

CREATE TABLE users (
user_id int primary key,
email varchar(80),
password varchar(255),
salt varchar(10),
foreign key (user_id, user_id) references playing_list(user_id,game_id) on delete cascade on update cascade,
foreign key (user_id, user_id) references played_list(user_id,game_id) on delete cascade on update cascade,
foreign key (user_id, user_id) references wish_list(user_id,game_id) on delete cascade on update cascade
);

CREATE TABLE platforms (
game_id int primary key,
platform_1 varchar(50),
platform_2 varchar(50),
platform_3 varchar(50),
platform_4 varchar(50)
);

