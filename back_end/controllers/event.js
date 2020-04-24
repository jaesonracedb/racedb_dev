const db = require(__dirname+ '/../db_config/mysql');
// const expressValidator = require('express-validator');
// const jwt = require('jsonwebtoken');
var Storage = require('dom-storage');
var localStorage = new Storage('./session_storage.json', { strict: false, ws: '  ' });

exports.getFeatured = (req,res)=>{
  console.log('Getting Featured Shops');
  const GET_FEATURED = 'CALL view_featured_races()'
  db.query(GET_FEATURED, (err, featuredEvents)=>{
    if(!err){
      console.log("Successful fetched races");
      return res.json({
        featured: featuredEvents
      });
    }else{
      console.log("Error encountered while fetching featured races")
    }
  })
}

exports.getPageItems =(req,res)=>{
  const FILTER_QUERY = req.params.filter;
  const FILTER_KEY = req.params.key;
  const FILTER_ORDER = req.params.order;
  const START = ((parseInt(req.params.page)-1)*10);
  console.log("Query: "+FILTER_QUERY);
  console.log("STARTING ITEM: "+ START);
  if(FILTER_QUERY ==='category'){
    db.query('SELECT * FROM event WHERE category = ? ORDER BY ? DESC LIMIT ?,10',[FILTER_KEY,FILTER_ORDER, START], (err,results)=>{
      if(!err){
        db.query('SELECT count(*) AS sqlTotalCount FROM event where category = ?',[FILTER_KEY],(err1,results1)=>{
          return res.json({
            search_results: results,
            totalCount: results1[0].sqlTotalCount
          })
        })
      }else{
        console.log(err)
        res.send(err)
      }
    })
  }else if(FILTER_QUERY ==='name'){
    const NAME_KEY = '%'+FILTER_KEY+'%';
    db.query('SELECT * FROM event WHERE name LIKE ? ORDER BY ? DESC LIMIT ?,10',[NAME_KEY,FILTER_ORDER,START],(err,results)=>{
      if(!err){
        console.log("NAME_KEY is: "+NAME_KEY);
        db.query('SELECT COUNT(*) AS sqlTotalCount FROM event WHERE name LIKE ?',[NAME_KEY],(err1,results1)=>{
          return res.json({
            search_results: results,
            totalCount: results1[0].sqlTotalCount
          })
        })
      }else{
        console.log(err)
        res.send(err)
      }
    });
  }else if(FILTER_QUERY ==='event_date'){

  }else if(FILTER_QUERY ==='distance'){
    //modify for when there is no distance, example triathlon
    const DISTANCE_KEY = '%'+FILTER_KEY+'%';
    db.query('SELECT * FROM event WHERE distance LIKE ? ORDER BY ? DESC LIMIT ?,10',[DISTANCE_KEY,FILTER_ORDER,START],(err,results)=>{
      if(!err){
        console.log("DISTANCE_KEY is: "+DISTANCE_KEY);
        db.query('SELECT COUNT(*) AS sqlTotalCount FROM event WHERE distance LIKE ?',[DISTANCE_KEY],(err1,results1)=>{
          return res.json({
            search_results: results,
            totalCount: results1[0].sqlTotalCount
          })
        })
      }else{
        console.log(err)
        res.send(err)
      }
    });
  }else if(FILTER_QUERY === 'location'){
    const LOCATION_KEY = '%'+FILTER_KEY+'%';
    db.query('SELECT * FROM event WHERE state LIKE ? OR location_city LIKE ? ORDER BY state DESC LIMIT ?,10',[LOCATION_KEY,LOCATION_KEY,START],(err,results)=>{
      if(!err){
        console.log("LOCATION_KEY is: "+LOCATION_KEY);
        db.query('SELECT COUNT(*) AS sqlTotalCount FROM event WHERE location_city LIKE ?',[LOCATION_KEY],(err1,results1)=>{
          return res.json({
            search_results: results,
            totalCount: results1[0].sqlTotalCount
          })
        })
      }else{
        console.log(err)
        res.send(err)
      }
    });
  }else{
    console.log("Invalid search")
  }
}
exports.getRace = (req,res)=>{
  console.log('Getting Race');
  const RACE_ID = req.params.id;
  console.log(RACE_ID);
  db.query('SELECT * FROM event where id = ?',[RACE_ID],(err,results)=>{
    if(!err){
      console.log("Race id is: "+RACE_ID)
      console.log("Race Name: "+results[0].name)
      return res.json({
        race_info:results[0]
      })
    }else{
      console.log("error!")
      res.send(err)
    }
  })
}

exports.addEvent = (req,res)=>{
  // console.log()
  // const id = req.body.id
  // const name=  req.body.name
  // const event_date = req.body.event_date
  // const location_city = req.body.location_city
  // const state = req.body.state
  // const category = req.body.category
  // const distance = req.body.distance
  // const swim_distance= req.body.swim_distance
  // const bike_distance= req.body.bike_distance
  // const run_distance= req.body.run_distance
  // const website= req.body.website
  // const email= req.body.email
  // const summary= req.body.summary
  // const race_type= req.body.race_type
  // const cycling_type= req.body.cycling_type
    const {name,event_date,location_city,state,category,distance,swim_distance,bike_distance,run_distance,website,email,summary,race_type,cycling_type}=req.body;
  console.log("adding event...");
  console.log(req.body);
    if(req.body.category==='running'){
        console.log("Selected Running category");
      const queryString= "INSERT INTO event (name,event_date,location_city,state,category,distance,website,email,summary) VALUES(?,?,?,?,?,?,?,?,?)"
      db.query(queryString,[name, event_date, location_city ,state, category, distance, website, email, summary], (err,results)=>{
        console.log("name is: "+name+"Location: "+location_city);
        if(err){
          console.log(err);
          res.sendStatus(500)
        }else{
          var raceEvent = results[0]
          localStorage.setItem('event',raceEvent);
          console.log("added race");
        }
      })
  }else if(req.body.category === "cycling"){
    const queryString ="INSERT INTO event(name, event_date, location_city, state, category, cycling_type, distance, website, email, summary) values (?,?,?,?,?,?,?,?,?,?);"
    db.query(queryString,[name, event_date, location_city, state, category, cycling_type, distance, website, email, summary],(err,results,fields)=>{
      console.log("name is: "+name+"Location: "+location_city);
      if(err){
        console.log(err);
        res.sendStatus(500)
      }else{
        var raceEvent = results[0]
        localStorage.setItem('event',raceEvent);
        console.log("added race");
    }
    })
  }else if(req.body.category === "obstacle"){
    const queryString="insert into event(name, event_date, location_city ,state, category, distance, website, email, summary) values (?,?,?,?,?,?,?,?,?);"
    db.query(queryString,[name, event_date, location_city ,state, category, distance, website, email, summary],(err,results,fields)=>{
      console.log("name is: "+name+"Location: "+location_city);
      if(err){
        console.log(err);
        res.sendStatus(500)
      }else{
        var raceEvent = results[0]
        localStorage.setItem('event',raceEvent);
        console.log("added race");
    }
  })
  }else if(req.body.category==="other"){
    const queryString="INSERT INTO event(name,event_date,location_city, state, category, website,email,summary,race_type) VALUES (?,?,?,?,?,?,?,?,?)"
    db.query(queryString,[name,event_date,location_city, state, category, website,email,summary,race_type],(err,results,field)=>{
      console.log("name is: "+name+"Location: "+location_city);
      if(err){
        console.log(err);
        res.sendStatus(500)
      }else{
        var raceEvent = results[0]
        localStorage.setItem('event',raceEvent);
        console.log("added race");
    }
  })
  }else if(req.body.category="triathlon"){
    const queryString="INSERT INTO event(name , event_date, location_city, state, category, distance, swim_distance, bike_distance, run_distance,  website, email ,summary) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)"
    db.query(queryString,[name , event_date, location_city, state, category, distance, swim_distance, bike_distance, run_distance,  website, email ,summary],(err,results,fields)=>{
      console.log("name is: "+name+"Location: "+location_city);
      if(err){
        console.log(err);
        res.sendStatus(500)
      }else{
        var raceEvent = results[0]
        localStorage.setItem('event',raceEvent);
        console.log("added race");
    }
  })
  }else{
    console.log("Failed to find category");
  }


}
