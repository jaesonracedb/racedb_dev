CREATE DATABASE racedb;
use racedb;
CREATE TABLE event(
  id int not null auto_increment primary key,
  name varchar(255) not null,
  event_date date default null,
  location_city varchar(250),
  state varchar(250),
  category varchar(250),
  distance varchar(250),
  swim_distance varchar(250),
  bike_distance varchar(250),
  run_distance varchar(250),
  website text,
  email varchar(250),
  summary text,
  race_type varchar(250),
  cycling_type varchar(250)
);

CREATE TABLE featured_events(
  id int not null auto_increment PRIMARY KEY,
  isFeatured boolean default 1,
  event_id int not null,
  CONSTRAINT `fk_featured_race` FOREIGN KEY (event_id) REFERENCES event(id)
);

CREATE TABLE user_account(
  username varchar(250) not null unique primary key,
  psswrd varchar(250) not null,
  lname varchar(250) not null,
  fname varchar(250) not null,
  minit varchar(250) not null,
  email varchar(250) not null unique
);

CREATE TABLE user_races(
  id int not null auto_increment primary key,
  username varchar(250) not null,
  saved_race int not null,
  CONSTRAINT `fk_saved_by` FOREIGN KEY (username) REFERENCES user_account(username),
  CONSTRAINT `fk_saved_race` FOREIGN KEY (saved_race) REFERENCES event(id)
);

CREATE TABLE organizer_account(
  username varchar(250) not null unique primary key,
  psswrd varchar(250) not null,
  lname varchar(250) not null,
  fname varchar(250) not null,
  minit varchar(250) not null,
  email varchar(250) not null unique,
  approved boolean not null default 0
);

CREATE TABLE admin_races(
  id int not null auto_increment primary key,
  username varchar(250) not null,
  administered_race int not null,
  CONSTRAINT `fk_administered_by` FOREIGN KEY (username) REFERENCES organizer_account(username),
  CONSTRAINT `fk_administered_race` FOREIGN KEY (administered_race) REFERENCES event(id)
);

CREATE TABLE review(
  id int not null auto_increment primary key,
  username varchar(250) not null,
  event_id int not null,
  comment text,
  created_at timestamp default current_timestamp,
  constraint `fk_commented_by` foreign key (username) references user_account(username),
  CONSTRAINT `fk_commented_race` foreign key (event_id) references event(id)
);

CREATE TABLE likes(
  id int not null auto_increment PRIMARY KEY,
  event_id int not null,
  username varchar(250) not null,
  CONSTRAINT `fk_liked_event` FOREIGN KEY(event_id) REFERENCES event(id),
  CONSTRAINT `fk_like_by` FOREIGN KEY(username) REFERENCES user_account(username)
);

CREATE TABLE rating(
 id int not null auto_increment primary key,
 rating int(1),
 username varchar(250) not null,
 event_id int not null,
 constraint `fk_user_rated` foreign key(username) references user_account(username),
 constraint `fk_event_rated` foreign key(event_id) references event(id)
);

CREATE TABLE user_photo(
  id int not null auto_increment primary key,
  photo_path text not null,
  is_deleted int(1) default 0,
  username varchar(250) not null,
  CONSTRAINT `fk_photo_of_user` FOREIGN KEY (username) REFERENCES user_account(username)
);

CREATE TABLE organizer_photo(
  id int not null auto_increment primary key,
  photo_path text not null,
  is_deleted int(1) default 0,
  username varchar(250) not null,
  CONSTRAINT `fk_photo_of_organizer` FOREIGN KEY (username) REFERENCES organizer_account(username)
);

CREATE TABLE race_photo(
  id int not null auto_increment primary key,
  photo_path text not null,
  is_deleted int(1) default 0,
  event_id int not null,
  CONSTRAINT `fk_photo_of_race` FOREIGN KEY (event_id) REFERENCES event(id)
);

-- CREATE TABLE activity_log(
--   id int not null auto_increment primary key,
--   username varchar(250) not null,
--   details text not null,
-- );
