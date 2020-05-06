import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import styles from "./css/main.css"
import logoRDB from "./imgs/racedblogo-04-scaled.png"
export default class Archive extends Component {
  constructor(props){
    const url = require('url');
    const http = require('http');
    const queryString =window.location.search;
    console.log("url"+queryString);
    const urlParams = new URLSearchParams(queryString)
    const event_id = urlParams.get('id');
    // const queryObject = url.parse(req.url.true).query;
    super(props)
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
      cycling_type:''
    }
    console.log("Race id is: "+ this.state.id)
    fetch('http://localhost:3001/get-race/'+this.state.id,{
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
    return (
		<div className="application">
		<Helmet>
			<meta charSet="utf-8"/>
			{/*--sets width to device size, sets zoom-->*/}
			<meta name="viewport" content="width=device-width, initial-scale=1"/>

			<title>raceDB Homepage</title>
			<link rel="stylesheet" href="main.css"/>

			{/*// --bootstrap stuff--*/}
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
		</Helmet>

		<div className="body">

		<nav className="navbar navbar-expand-sm navbar-dark" id="homepageNav">
			<a className="navbar-brand" href="http://localhost:3000/">
				<img src={logoRDB} alt="logo" style={{width:"110px"}}/>
			</a>

			<form className="form-inline my-2 my-lg-0">
				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
				<button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
			</form>

			<ul className="navbar-nav ml-auto">
			<li className="nav-item">
				<a className="btn btn-outline-light my-2 my-sm-0" href="http://localhost:3000/add-event" role="button">Create A Race</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">About Us</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">Contact Page</a>
			</li>
			</ul>
		</nav>

    <div id="carouselExampleIndicators" className="carousel slide mt-5 bg-dark" data-ride="carousel">
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

    <div>
    	<h2 className="mt-5 ml-4">{this.state.name}</h2>
    	<h5 className="mt-2 ml-4">{this.state.event_date}</h5>
    	<span className="ml-4 fa fa-star checked"></span>
    	<span className="fa fa-star checked"></span>
    	<span className="fa fa-star checked"></span>
    	<span className="fa fa-star"></span>
    	<span className="fa fa-star"></span>
    </div>
    <div>
    	<div className="row">
    		<div className="col-sm-6 mr-5">
    			<div className="card ml-4 p-3">
            <p className="card-text"><b>Category: </b>&nbsp;{this.state.category}</p>
    				<p className="card-text"><b>Location:</b>&nbsp;{this.state.location_city}</p>
    				<p className="card-text"><b>State:</b>&nbsp;{this.state.state}</p>
            <div className="extra-info">
            <ExtraInfo category={this.state.category}/>
            </div>{/*extra-info*/}
    				<p className="card-text"><b>Summary:</b>{this.state.summary}</p><br/>
    				{/*<!--filler br-->*/}
    				<br/> <br/> <br/>
    			</div>

    			<div className="card ml-4 mt-3 p-3">
    				<h5 className="card-title">Submit a Review</h5>
    				<div>
    					<span className="fa fa-star checked"></span>
    					<span className="fa fa-star checked"></span>
    					<span className="fa fa-star checked"></span>
    					<span className="fa fa-star"></span>
    					<span className="fa fa-star"></span>
    				</div>

    				<textarea className="form-control" rows="5"></textarea>
    				<button className="btn btn-sm btn-outline-primary ml-auto mt-1" type="submit">Submit</button>
    			</div>
    		</div>
    		<div className="col-sm-4">
    			//map to be improved
    			<div id="map-container-google-1" className="z-depth-1-half map-container" >
    				<iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
    			</div>

    			<div className="card p-3">
    				<p className="card-text"><b>Email:</b>&nbsp;{this.state.email}</p>
    				<p className="card-text"><b>Website:</b>&nbsp;<a href={updatedUrl}>{this.state.website}</a></p>
    			</div>

    			//ads to be finished
    			<div>
    			</div>

    			<div className="card mt-3 p-3">
    				<p className="card-text">Own or work here?&nbsp;<a href="#" className="text-primary">Claim it!</a></p>
    				<p className="card-text">See something wrong?&nbsp;<a href="#" className="text-danger">Report!</a></p>
    			</div>
    		</div>
    	</div>
    </div>
    </div></div>
    )
  }
}
