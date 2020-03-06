const db = require(__dirname+ '/../db_config/mysql');
// const expressValidator = require('express-validator');
// const jwt = require('jsonwebtoken');
var Storage = require('dom-storage');
var localStorage = new Storage('./session_storage.json', { strict: false, ws: '  ' });

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
