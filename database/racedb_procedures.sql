delimiter //
--To call a procedure input <CALL <procedureName(params)>>
-- ADDING RACES ---------------------------------------
create procedure add_race_running(in name varchar(250), in event_date varchar(250), in location_city varchar(250),in state varchar(250), in category varchar(250), in distance varchar(250), in website varchar(250), in email varchar(250), in summary text)
  BEGIN
    insert into event(name, event_date, location_city ,state, category, distance, website, email, summary)
      VALUES (name, STR_TO_DATE(event_date,'%m/%d/%Y'), location_city ,state, category, distance, website, email, summary);
  END;
//

create procedure add_race_obstacle(in name varchar(250), in event_date varchar(250), in location_city varchar(250), in state varchar(250), in category varchar(250), in distance varchar(250), in website varchar(250), in email varchar(250),in summary text)
  BEGIN
    insert into event(name, event_date, location_city ,state, category, distance, website, email, summary)
      VALUES (name, STR_TO_DATE(event_date,'%m/%d/%Y'), location_city ,state, category, distance, website, email, summary);
  END;
//

create procedure add_race_cycling(in name varchar(250), in event_date varchar(250), in location_city varchar(250), in state varchar(250), in category varchar(250), in cycling_type varchar(250), in distance varchar(250), in website varchar(250), in email varchar(250), in summary text)
  BEGIN
    insert into event(name, event_date, location_city, state, category, cycling_type, distance, website, email, summary)
      values (name, STR_TO_DATE(event_date,'%m/%d/%Y'), location_city, state, category, cycling_type, distance, website, email, summary);
  END;
//

create procedure add_race_triathlon(in name varchar(250), in event_date varchar(250), in location_city varchar(250), in state varchar(250), in category varchar(250), in distance varchar(250), in swim_distance varchar(250), in bike_distance varchar(250), in run_distance varchar(250), in website varchar(250), in email varchar(250), in summary text)
  BEGIN
    insert into event(name , event_date, location_city, state, category, distance, swim_distance, bike_distance, run_distance,  website, email ,summary)
      values (name , STR_TO_DATE(event_date,'%m/%d/%Y'), location_city, state, category, distance, swim_distance, bike_distance, run_distance,  website, email ,summary);
  END;
//

create procedure add_race_other(in name varchar(250), in event_date varchar(250), in location_city varchar(250), in state varchar(250), in category varchar(250), in website varchar(250), in email varchar(250), in summary text, in race_type varchar(250))
  BEGIN
    insert into event(name,event_date,location_city, state, category, website,email,summary,race_type)
      values (name,STR_TO_DATE(event_date,'%m/%d/%Y'),location_city, state, category, website,email,summary,race_type);
  END;
//
-- VIEW Functions---------------------------------------------------------
create procedure view_event_category(in category varchar(250))
  BEGIN
    select * from event where category=category;
  END;
//

create procedure event_running()
  BEGIN
    select * from event where category='running';
  END;
//

create procedure event_cycling()
  BEGIN
    select * from event where category='cycling';
  END;
//

create procedure event_triathlon()
  BEGIN
    select * from event where category='triathlon';
  END;
//

create procedure event_other()
  BEGIN
    select * from event where category='other';
  END;
//

create procedure event_obstacle()
  BEGIN
    select * from event where category='obstacle';
  END;
//

create procedure view_event_name(in name varchar(250))
  BEGIN
    select * from event where name=name;
  END;
//

create procedure view_event_loc(in loc varchar(250))
  BEGIN
    select * from event where location_city = loc;
  END;
//

create procedure view_event_state(in state varchar(250))
  BEGIN
    select * from event where state = state;
  END;
//

create procedure view_event_dist(in dist varchar(250))
  BEGIN
    select * from event where distance = dist;
  END;
//

create procedure view_event_swim_dist(in dist varchar(250))
  BEGIN
    select * from event where swim_distance = dist;
  END;
//

create procedure view_event_bike_dist(in dist varchar(250))
  BEGIN
    select * from event where bike_distance = dist;
  END;
//

create procedure view_event_run_dist(in dist varchar(250))
  BEGIN
    select * from event where run_distance = dist;
  END;
//

create procedure view_event_website(in webURL text)
  BEGIN
    select * from event where website = webURL;
  END;
//

create procedure view_event_email(in email varchar(250))
  BEGIN
    select * from event where email = email;
  END;
//

create procedure view_event_race_type(in type varchar(250))
  BEGIN
    select * from event where race_type = type;
  END;
//

create procedure view_event_cycling_type(in type varchar(250))
  BEGIN
    select * from event where cycling_type = type;
  END;
//
-- Search user

create procedure search_user_username(in username varchar(250))
  BEGIN
    select * from user_account where username = username;
  END;
//

create procedure search_user_lname(in lname varchar(250))
  BEGIN
    select * from user_account where lname = lname;
  END;
//

create procedure search_user_fname(in fname varchar(250))
  BEGIN
    select * from user_account where fname = fname;
  END;
//

create procedure search_user_email(in email varchar(250))
  BEGIN
    select * from user_account where email = email;
  END;
//


delimiter ;
