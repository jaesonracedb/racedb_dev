import React, { Component, useEffect } from 'react';
// import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import styles from "./css/main.css";
import homepageBanner from "./imgs/Canva-Runners-in-a-Marathon-1024x680.jpg"
import logoRDB from "./imgs/racedblogo-04-scaled.png";
import stockImg from "./imgs/triathlon.jpg";
import featuredImg from "./imgs/default-running-thumbnail-1.png";
import featured1 from "./imgs/Featured/rsz_williamsburglogo.jpg";
import featured3 from "./imgs/Featured/rsz_nyrr.jpg";
import featured4 from "./imgs/Featured/rsz_gfny.jpg";
import featured2 from "./imgs/Featured/rsz_spartan.jpg";
import featured5 from "./imgs/Featured/rsz_duathlon.png";
import featured6 from "./imgs/Featured/rsz_ironman.png";
import logoRed from "./imgs/racedblogo-02-1024x640.png";
import running from "./imgs/running.jpg";
import triathlon from "./imgs/triathlon.jpg";
import cycling from "./imgs/cycling.jpg";
import other from "./imgs/other.jpg";
import obstacle from "./imgs/obstacle-race.jpg";
import HomeNav from "./HomeNav.js";
import HomepageSearch from "./HomepageSearch.js";


export default class Homepage extends Component {
  constructor(props){
    super(props);
    const dotenv = require('dotenv').config()
    // dotenv.config({ path: '../../../' })
    console.log("ENV PORT: "+ process.env.PORT)
    const url = require('url');
    const http = require('http');
    const queryString =window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const loggedInQuery = urlParams.get('loggedIn');
    const tokenQuery = urlParams.get('token');
    var PORT = process.env.PORT || 3001;
    console.log("PORT IS: "+PORT)
    this.state={
      featured: [],
      loggedIn:loggedInQuery,
      token: tokenQuery
    }
    console.log('GETTING INFO USER ' + this.state.loggedIn)
  
    fetch("/token-info/",{
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

    fetch("/get-featured",{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(body => {
        console.log(body)
        this.setState({
          featured: body.featured[0]
        })
        console.log(body.featured[0])
      })
      console.log("fetched: "+PORT);
  }
  

  render() {
    const loginUrl = "/login";
    const {loggedIn} = this.state;
    const {token} = this.state;
    const locationUrl =  "/search?filter=location&page=1&loggedIn="+loggedIn+"&token="+token+"&key=";
    const categoriesUrl=  "/search?filter=category&page=1&loggedIn="+loggedIn+"&token="+token+"&key=";
    const featuredUrl =  "/listing?loggedIn="+loggedIn+"&token="+token+"&id=";
    return (
    <div className="application">
    <Helmet>
      <meta charset="utf-8"/>
      {/*--sets width to device size, sets zoom-->*/}
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"/>

      <title>raceDB Homepage</title>

      {/*// --bootstrap stuff--*/}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"/>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"/>
      <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Helmet>

    <div className="body">
    <div className="content">
      <div className="content-inside">
    <HomeNav username={this.state.username} name={this.state.name} token={this.state.token} loggedIn={this.state.loggedIn}/>

    {/*// --Logo and Search-->*/}
    <div className="container-fluid header" id="bannerHeader">
    	{/*// --bd-dark is there to see area while there is no picture-->*/}


      {/*search field*/}
    	<div className="container" id="formSearchHome">
      <img src={logoRDB} alt="Racedb" id="bannerLogo"/>
    	  <div className="row mx-auto">
    	   <div className="col-xs-8 col-xs-offset-2 col-md-10 mx-auto" id="homeSearch">
    		<HomepageSearch />{/*input-group*/}
    	   </div> {/*col-xs-8 col-xs-offset-2*/}
    	  </div>{/*row mx-auto*/}
    	</div> {/*container*/}
      
      
      {/*Quick Category search*/}
      <div className="container-fluid col-xs-12 col-md-12 col-lg-8 mx-auto">
    	<div class="btn-group btn-group flex-wrap mx-auto" align="center" id="categoryNav">
    		<a class="btn btn-secondary" href={categoriesUrl+'running'}>Running</a>
    		<a className="btn btn-secondary" href={categoriesUrl+'triathlon'}>Triathlon</a>
    		<a className="btn btn-secondary" href={categoriesUrl+'cycling'}>Cycling</a>
    		<a className="btn btn-secondary" href={categoriesUrl+'obstacle'}>Obstacle</a>
    		<a className="btn btn-secondary" href={categoriesUrl+'other'}>Other</a>
      </div>
      </div>
    </div>



  {/*  // -- Exclusives -->*/}
    {/*// -- template from https://getbootstrap.com/docs/3.4/examples/jumbotron/, will be edited and modified accordingly -->*/}
    <div className="container mx-auto" id="exclusivesdiv" align="center">
      <h2 align="center" class="sectionTitle">Featured Races</h2>
      <div className="row">
        
        {/* Featured Card first Row FIRST card START */}
        <div className=" col-xs-8 col-md-6 col-lg-4">
          <div className="card border-secondary mb-3 rounded" >
            <img src={featured1} className="card-img-top" alt="Card image cap"/>
            <div className="card-body">
              {this.state.featured.map((ft,index) => {
                if(index ===0)
                return <div key={ft.id}>
                  <h5 className="card-title"><a href={featuredUrl+ft.id}>{ft.name}</a></h5>
                  <p className="card-text">Date: {ft.event_date}<br/>
                  Distance: {ft.distance}<br/>
                  Category: {ft.category}<br/></p>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>

                </div>
              })}
            </div>
          </div>
          </div>
          
          
        {/* Featured Card first Row SECOND card START */}    
        <div className=" col-xs-8 col-md-6 col-lg-4">
          <div className="card border-secondary mb-3" >
            <img src={featured2} className="card-img-top" alt="category" alt="event"/>
            <div className="card-body">
            {this.state.featured.map((ft,index) => {
              if(index ===1)
              return <div key={ft.id}>
                <h5 className="card-title"><a href={featuredUrl+ft.id}>{ft.name}</a></h5>
                <p className="card-text">Date: {ft.event_date}<br/>
                Distance: {ft.distance}<br/>
                Category: {ft.category}<br/></p>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>

              </div>
            })}
            </div>
          </div>
       </div>
       {/* Featured Card first Row THIRD card START */}        
       <div className=" col-xs-8 col-md-6 col-lg-4">
        
          <div className="card border-secondary mb-3" >
            <img src={featured3} className="card-img-top" alt="category" alt="event"/>
            <div className="card-body">
            {this.state.featured.map((ft,index) => {
              if(index ===2)
              return <div key={ft.id}>
                <h5 className="card-title"><a href={featuredUrl+ft.id}>{ft.name}</a></h5>
                <p className="card-text">Date: {ft.event_date}<br/>
                Distance: {ft.distance}<br/>
                Category: {ft.category}<br/></p>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>

              </div>
            })}
            </div>
          </div>
        
        </div>
     

      {/* Featured Card SECOND Row FIRST card START */}        
      <div className="col-xs-8 col-md-6 col-lg-4">
        <div className="card border-secondary mb-3" >
          <img src={featured4} className="card-img-top" alt="category" alt="event"/>
          <div className="card-body">
          {this.state.featured.map((ft,index) => {
            if(index ===3)
            return <div key={ft.id}>
              <h5 className="card-title"><a href={featuredUrl+ft.id}>{ft.name}</a></h5>
              <p className="card-text">Date: {ft.event_date}<br/>
              Distance: {ft.distance}<br/>
              Category: {ft.category}<br/></p>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>

            </div>
          })}
          </div>
        </div>
      </div>

      {/* Featured Card SECOND Row SECOND card START */}             
      <div className="col-xs-8 col-md-6 col-lg-4">
        <div className="card border-secondary mb-3" >
          <img src={featured5} className="card-img-top" alt="category" alt="event"/>
          <div className="card-body">
          {this.state.featured.map((ft,index) => {
            if(index ===4)
            return <div key={ft.id}>
              <h5 className="card-title"><a href={featuredUrl+ft.id}>{ft.name}</a></h5>
              <p className="card-text">Date: {ft.event_date}<br/>
              Distance: {ft.distance}<br/>
              Category: {ft.category}<br/></p>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>

            </div>
          })}
          </div>
        </div>
     </div>

     {/* Featured Card SECOND Row THIRD card START */}        
      <div className="col-xs-8 col-md-6 col-lg-4">
        <div className="card border-secondary mb-3" >
          <img src={featured6} className="card-img-top" alt="category" alt="event"/>
          <div className="card-body">
          {this.state.featured.map((ft,index) => {
            if(index ===5)
            return <div key={ft.id}>
              <h5 className="card-title"><a href={featuredUrl+ft.id}>{ft.name}</a></h5>
              <p className="card-text">Date: {ft.event_date}<br/>
              Distance: {ft.distance}<br/>
              Category: {ft.category}<br/></p>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>

            </div>
          })}
          </div>
        </div>
      </div>
    
    </div>
    {/*  */}
    </div>



    <div className="grayBlock" id="locationsdiv">
      <h2 align="center" style={{color:"white"}} class="sectionTitle">Locations</h2>
      <div class="container-fluid" align="center">

        
        <div className="row" id="locationsfirstrow">
          <div className="col-xs-8 col-md-6 col-lg-4 mb-3 mb-md-3" id="location1">
            <div className='locContainer' class="img-thumbnail">
              <a className ='homepageLocaton' href={locationUrl+'new-york'} style={{color:"black"}}>
                <img src={stockImg} className="mx-auto d-block bg-dark mt-5 locationImg" class="img-thumbnail" alt="New York" style={{width:"100%"}}/>
                <div className="locationText" class="caption" align="center">
                  <h5>New York</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xs-8 col-md-6 col-lg-4 mb-3 mb-md-3" id="location1">
            <div className='locContainer' class="img-thumbnail">
              <a className ='homepageLocaton' href={locationUrl+'new-jersey'} style={{color:"black"}}>
                <img src={stockImg} className="mx-auto d-block bg-dark mt-5 locationImg" class="img-thumbnail" alt="New York" style={{width:"100%"}}/>
                <div className="locationText" class="caption" align="center">
                  <h5>New Jersey</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xs-8 col-md-6 col-lg-4 mb-3 mb-md-3" id="location1">
            <div className='locContainer' class="img-thumbnail">
              <a className ='homepageLocaton' href={locationUrl+'maryland'} style={{color:"black"}}>
                <img src={stockImg} className="mx-auto d-block bg-dark mt-5 locationImg" class="img-thumbnail" alt="New York" style={{width:"100%"}}/>
                <div className="locationText" class="caption" align="center">
                  <h5>Maryland</h5>
                </div>
              </a>
            </div>
          </div>
        
      
      
        
          <div className="col-xs-8 col-md-6 col-lg-4 mb-3 mb-md-0" id="location1">
            <div className='locContainer' class="img-thumbnail">
              <a className ='homepageLocaton' href={locationUrl+'maine'} style={{color:"black"}}>
                <img src={stockImg} className="mx-auto d-block bg-dark mt-5 locationImg" class="img-thumbnail" alt="New York" style={{width:"100%"}}/>
                <div className="locationText" class="caption" align="center">
                  <h5>Maine</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xs-8 col-md-6 col-lg-4 mb-3 mb-md-0" id="location1">
            <div className='locContainer' class="img-thumbnail">
              <a className ='homepageLocaton' href={locationUrl+'connecticut'} style={{color:"black"}}>
                <img src={stockImg} className="mx-auto d-block bg-dark mt-5 locationImg" class="img-thumbnail" alt="New York" style={{width:"100%"}}/>
                <div className="locationText" class="caption" align="center">
                  <h5>Connecticut</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xs-8 col-md-6 col-lg-4" id="location1">
            <div className='locContainer' class="img-thumbnail">
              <a className ='homepageLocaton' href={locationUrl+'california'} style={{color:"black"}}>
                <img src={stockImg} className="mx-auto d-block bg-dark mt-5 locationImg" class="img-thumbnail" alt="New York" style={{width:"100%"}}/>
                <div className="locationText" class="caption" align="center">
                  <h5>California</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      
    </div>
      </div>
{/* END OF LOCATIONS */}
{/* START OF CATEGORIES */}

    <div class="container-fluid mx-auto" id="categoriesdiv" align="center">
      <h2 align="center" class="sectionTitle">Categories</h2>
      <div className="row" id="categoriesfirstrow">
        <div className="col-md-6 col-lg-4 mb-2">
          <div className='locContainer' class="img-thumbnail">
            <a className ='homepageLocaton' href={categoriesUrl+'running'} style={{color:"black"}}>
              <img src={running} className="mx-auto d-block bg-dark mt-5" class="img-thumbnail" alt="category" style={{width:"100%"}}/>
              <div className="locationText" class="caption" align="center">
                <h5>Running</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-2">
          <div className='locContainer' class="img-thumbnail">
            <a className ='homepageLocaton' href={categoriesUrl+'cycling'} style={{color:"black"}}>
              <img src={running} className="mx-auto d-block bg-dark mt-5" class="img-thumbnail" alt="category" style={{width:"100%"}}/>
              <div className="locationText" class="caption" align="center">
                <h5>Cycling</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-2">
          <div className='locContainer' class="img-thumbnail">
            <a className ='homepageLocaton' href={categoriesUrl+'triathlon'} style={{color:"black"}}>
              <img src={running} className="mx-auto d-block bg-dark mt-5" class="img-thumbnail" alt="category" style={{width:"100%"}}/>
              <div className="locationText" class="caption" align="center">
                <h5>Triathlon</h5>
              </div>
            </a>
          </div>
        </div>
          <div className="col-md-6 col-lg-4 offset-lg-2 mb-2">
            <div className='locContainer' class="img-thumbnail">
              <a className ='homepageLocaton' href={categoriesUrl+'obstacle'} style={{color:"black"}}>
                <img src={running} className="mx-auto d-block bg-dark mt-5" class="img-thumbnail" alt="category" style={{width:"100%"}}/>
                <div className="locationText" class="caption" align="center">
                  <h5>Obstacle</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-md-2">
            <div className='locContainer' class="img-thumbnail">
              <a className ='homepageLocaton' href={categoriesUrl+'other'} style={{color:"black"}}>
                <img src={running} className="mx-auto d-block bg-dark mt-5" class="img-thumbnail" alt="category" style={{width:"100%"}}/>
                <div className="locationText" class="caption" align="center">
                  <h5>Other</h5>
                </div>
              </a>
            </div>
          </div>
      </div>
    </div>



    <div className="grayBlock" id="homepagefooter">
      <div className="row">
        <div className="col-md-4 mr-auto">
          <img src={logoRed} className="mx-auto d-block bg-dark mt-5" id="someLogo" alt="logo"/>
        </div>
        <div className="col-md-4 mr-auto my-auto" align="center">
          <h4 style={{color:"white"}}> 1 - Create </h4>
          <p style={{color:"white"}}> Create a listing by adding your race to our directory. </p><br/>
          <h4 style={{color:"white"}}> 2 - Promote </h4>
          <p style={{color:"white"}}> Promote your race by advertising it through our site! </p><br/>
          <h4 style={{color:"white"}}> 3 - Claim </h4>
          <p style={{color:"white"}}> Claim your race if it already exists within our directory. </p><br/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
          <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur
            adipisicing elit.</p>
        </div>
        <div class="col-md-2 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
      </div>

    </div>


</div>

    </div>
</div>
</div>
    )
  }
}
