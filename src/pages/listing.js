import React, { Component } from 'react';
import 'universal-cookie';
import StarRating from "./StarRating.js";
import StaticStar from "./StaticStar.js"
import Footer from "./Footer.js";
import {Helmet} from "react-helmet";
import HomeNav from "./HomeNav.js";
import "./css/main.css";
export default class Archive extends Component {
  constructor(props){
    super(props)
    const dotenv = require('dotenv')
    dotenv.config({ path: '../../../' })
    require('url');
    require('http');
    const queryString =window.location.search;
    console.log("url"+queryString);
    const urlParams = new URLSearchParams(queryString)
    const event_id = urlParams.get('id');
    const loggedInQuery = urlParams.get('loggedIn');
    const tokenQuery = urlParams.get('token');
  
    // const queryObject = url.parse(req.url.true).query;
    this.state={
      id: event_id,
      name: '',
      event_date: null,
      location_city:'',
      state: '',
      category:'',
      distance:'',
      swim_distance:'',
      bike_distance:'',
      run_distance:'',
      website:'',
      email:'',
      summary:'',
      race_type:'',
      cycling_type:'',
      loggedIn: loggedInQuery,
      token: tokenQuery,
    }
    fetch('/token-info/',{
      headers:{
        'Authorization': 'Bearer '+this.state.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res=>{return res.json()})
    .then((body,err)=>{
      console.log("Welcome: "+ body.name);
      if(err){
        console.log("Token not valid")
        this.setState({loggedIn:false});
      }else{
        console.log("Logged In")
        this.setState({
          name: body.name,
          username: body.username
        })
      } 
    })
    console.log("Race id is: "+ this.state.id)
    fetch('/get-race/'+this.state.id,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res=>{return res.json() })
    .then((body)=>{
      this.setState({
        name: body.race_info.name,
        event_date: body.race_info.event_date,
        location_city: body.race_info.location_city,
        state: body.race_info.state,
        category: body.race_info.category,
        distance: body.race_info.distance,
        swim_distance: body.race_info.swim_distance,
        bike_distance: body.race_info.bike_distance,
        run_distance: body.race_info.run_distance,
        website: body.race_info.website,
        email: body.race_info.email,
        summary: body.race_info.summary,
        race_type: body.race_info.race_type,
        cycling_type:body.race_info.cycling_type
      })
      console.log(body.race_info.name)
    })
  }
  // RENDER PART -----------------------------
  render() {
    let {id} = this.state;
    let {name} = this.state;
    let {event_date} = this.state;
    let {location_city}= this.state;
    let {state} = this.state;
    let {category} = this.state;
    let {loggedIn} = this.state;
    let {distance} = this.state;
    let {swim_distance} = this.state;
    let {bike_distance} = this.state;
    let {run_distance} = this.state;
    let {website} =this.state;
    let {email} = this.state;
    let {summary} = this.state;
    let {race_type} = this.state;
    let {cycling_type} = this.state;
    let websiteUrl = "http://"+website;
    console.log(this.state.category)
    var updatedUrl= website;
    if (!updatedUrl.match("~^(?:f|ht)tps?://~i")) {
        updatedUrl = "http://" +website;
    }
    console.log("URL: "+updatedUrl);

    function RunningInfo(props){
      return <p className="card-text"><b>Distance:</b>&nbsp;{distance}<br/></p>
    }
    function CyclingInfo(props){
      return <div><p className="card-text"><b>Type :</b>&nbsp;{cycling_type}</p><br/>
              <p className="card-text"><b>Distance:</b>&nbsp;{distance}</p></div>
    }
    function TriathlonInfo(props){
      return <div><p className="card-text"><b>Distance:</b>&nbsp;{distance}</p><br/>
                  <p className="card-text"><b>Swim Distance:</b>&nbsp;{swim_distance}</p><br/>
                  <p className="card-text"><b>Bike Distance:</b>&nbsp;{bike_distance}</p><br/>
                  <p className="card-text"><b>Run Distance:</b>&nbsp;{run_distance}</p><br/></div>
    }
    function ObstacleInfo(props){
      return <div><p className="card-text"><b>Distance:</b>&nbsp;{distance}</p><br/></div>
    }
    function OtherInfo(props){
      return <div><p className="card-text"><b>Race Type:</b>&nbsp;{race_type}</p><br/></div>
    }
    function SomeInfo(){
      return <h1>Failed</h1>;
    }
    function ExtraInfo(props){
      const whatCategory = props.category;
      if(whatCategory === 'running'){
        return <RunningInfo />;
      }else if(whatCategory === 'cycling'){
        return <CyclingInfo />;
      }else if(whatCategory === 'triathlon'){
        return <TriathlonInfo/>;
      }else if(whatCategory === 'obstacle'){
        return <ObstacleInfo/>;
      }else if(whatCategory === 'other'){
        return <OtherInfo/>;
      }else{
        return <SomeInfo/>;
      }
    }
    function DisplayRating(props){
      if(loggedIn){
        return <div className="card col-8 col-sm-5 col-md-5 col-lg-4 mb-5 p-3">
          <h5 className="card-title">Submit Rating</h5>
          
          <StarRating size='30' />

          {/* <textarea className="form-control" rows="5"></textarea>
          <button className="btn btn-sm btn-outline-primary ml-auto mt-1" type="submit">Submit</button> */}
        </div>
        }else {
          return <div/>
        }
    }
    return (
		<div className="application">
		<Helmet>
			<meta charSet="utf-8"/>
			{/*--sets width to device size, sets zoom-->*/}
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
			<title>raceDB</title>
			<link rel="stylesheet" href="main.css"/>

			{/*// --bootstrap stuff--*/}

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
		</Helmet>

		<div className="body">

		<HomeNav username={this.state.username} name={this.state.name} token={this.state.token} loggedIn={this.state.loggedIn}/>
      {/* CAROUSEL */}
    <div id="carouselExampleIndicators" className="carousel slide bg-dark" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-70" src="..." style={{height:300+"px"}} alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-70" src="..." style={{height:300+'px'}} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-70" src="..." style={{height:300+"px"}} alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    {/* CONTENT STARTS */}
    <div className="container-fluid col-xs-12 col-sm-10 col-md-8">
      <div className="mainInfo pb-4">
        <h1 className="h1-responsive mt-5 mx-xs-auto">{this.state.name}</h1>
        <StaticStar size="30"/>
      </div>
      <div className="eventContent">
        <div className="row pb-3">
          <div className="col-12 col-sm-10 col-md-6">
            <div className="card p-3 pb-md-5">
              <p className="card-text"><b>Category: </b>&nbsp;{this.state.category}</p>
              <p className="card-text"><b>Location:</b>&nbsp;{this.state.location_city}</p>
              <p className="card-text"><b>State:</b>&nbsp;{this.state.state}</p>
              <div className="extra-info">
              <ExtraInfo category={this.state.category}/>
              </div>{/*extra-info*/}
              <p className="card-text pt-2"><b>Summary:</b>{this.state.summary}</p><br/>
              {/*<!--filler br-->*/}
              <br/> <br/> <br/>
            </div>
            
          </div>
          {/* Email and Ad Section */}
          <div className="col-12 pt-4 pt-md-0 col-md-6 ml-md-auto">
            {/* //map to be improved */}
            <div className="card p-3 pb-3">
              <p className="card-text"><b>Email:</b>&nbsp;{this.state.email}</p>
              <p className="card-text"><b>Website:</b>&nbsp;<a href={updatedUrl}>{this.state.website}</a></p>
            </div>
            {/* //ads to be finished */}
            <div className="card mt-3 mb-3" >
                <img className="card-img-top" src="..." alt="insert ad here"/>
                <div className="card-body">
                 <p className="card-text"> An example of where an ad shall be placed</p>
                </div>

            </div>
          </div>

        </div>
        <div className="row pt-3 pl-3 ">
          
            <DisplayRating/>
        </div>
          
          
          
      </div>

    </div>

    <Footer/>    
      </div>
      </div>
    )
  }
}
