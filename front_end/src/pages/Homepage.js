import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import styles from "./main.css"
import logoRDB from "./imgs/racedblogo-04-scaled.png"
export default class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={
      featured: []
    }
    fetch('http://localhost:3001/get-featured',{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(body => {
        this.setState({
          featured: body.featured[0]
        })
        console.log(body.featured[0])
      })
      console.log("fetched")
  }

  render() {


    return (
    <div className="application">
    <Helmet>
      <meta charset="utf-8"/>
      {/*--sets width to device size, sets zoom-->*/}
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <title>raceDB Homepage</title>
      <link rel="stylesheet" href="main.css"/>

      {/*// --bootstrap stuff--*/}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"/>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Helmet>

    <div className="body">
    <div className="content">
      <div className="content-inside">

    <nav className="navbar navbar-expand-sm navbar-dark">
      <a className="navbar-brand ml-3" href="#">
        <img src="logoRDB" alt="logo" style= {{width:"110px"}}/>
      </a>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="btn btn-outline-light my-2 my-sm-0" href="#" role="button">Create A Race</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
      </ul>
    </nav>

    {/*// --Logo and Search-->*/}
    <div className="container header">
    	{/*// --bd-dark is there to see area while there is no picture-->*/}
    	<img src="imgs/racedblogo-04-scaled.png" id="bannerimagelogo" className="mx-auto d-block" alt="banner" style={{width:"450px"}}/>


      {/*// --from https://codepen.io/billzhao/pen/wzxrbW?editors=1000-->*/}
    	<div className="container">
    	  <div className="row mx-auto">
    	   <div className="col-xs-8 col-xs-offset-2">
    		<div className="input-group">
    		 <div className="input-group-btn search-panel">
    		  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
    			<span id="search_concept">All</span> <span className="caret"></span>
    		  </button>
    		  <ul className="dropdown-menu scrollable-dropdown" role="menu">
    			<li><a href="#">Name</a></li>
    			<li><a href="#">Date</a></li>
    			<li><a href="#">Distance</a></li>
    			<li><a href="#">Location</a></li>
    			<li><a href="#">Type</a></li>
    		  </ul>
    		 </div>
    		 <input type="hidden" name="search_param" value="all" id="search_param"/>
    		 <input type="text" className="form-control" name="x" id="searchforevent" placeholder="Search" size="100%"/>
    		</div>
    	   </div>
    	  </div>
    	</div>

    	<nav className="navbar navbar-expand-lg navbar-light bg-light mt-3 mx-auto" id="categoryNav">
    		<a className="nav-link mx-auto" href="#">Running</a>
    		|
    		<a className="nav-link mx-auto" href="#">Triathlon</a>
    		|
    		<a className="nav-link mx-auto" href="#">Cycling</a>
    		|
    		<a className="nav-link mx-auto" href="#">Obstacle</a>
    		|
    		<a className="nav-link mx-auto" href="#">Other</a>
    	</nav>
    </div>



  {/*  // -- Exclusives -->*/}
    {/*// -- template from https://getbootstrap.com/docs/3.4/examples/jumbotron/, will be edited and modified accordingly -->*/}
    <div className="container" id="exclusivesdiv">
      <h2 align="center">Exclusives</h2>
      <br/>
      <div className="row">
        <div className="card-group">
        <div className="col-md-4">
          <div className="card border-secondary mb-3 rounded" >
            <img src="imgs/default-running-thumbnail-1.png" className="card-img-top" alt="category" alt="event"/>
            <div className="card-body">
              {this.state.featured.map((ft,index) => {
                if(index ===0)
                return <div>
                  <h5 className="card-title">{ft.name}</h5>
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
        <div className="col-md-4">
          <div className="card border-secondary mb-3" >
            <img src="imgs/default-running-thumbnail-1.png" className="card-img-top" alt="category" alt="event"/>
            <div className="card-body">
            {this.state.featured.map((ft,index) => {
              if(index ===1)
              return <div>
                <h5 className="card-title">{ft.name}</h5>
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
        <div className="col-md-4">
          <div className="card border-secondary mb-3" >
            <img src="imgs/default-running-thumbnail-1.png" className="card-img-top" alt="category" alt="event"/>
            <div className="card-body">
            {this.state.featured.map((ft,index) => {
              if(index ===2)
              return <div>
                <h5 className="card-title">{ft.name}</h5>
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
    </div>
    <div className="row">
      <div className="card-group">
      <div className="col-md-4">
        <div className="card border-secondary mb-3" >
          <img src="imgs/default-running-thumbnail-1.png" className="card-img-top" alt="category" alt="event"/>
          <div className="card-body">
          {this.state.featured.map((ft,index) => {
            if(index ===3)
            return <div>
              <h5 className="card-title">{ft.name}</h5>
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
      <div className="col-md-4">
        <div className="card border-secondary mb-3" >
          <img src="imgs/default-running-thumbnail-1.png" className="card-img-top" alt="category" alt="event"/>
          <div className="card-body">
          {this.state.featured.map((ft,index) => {
            if(index ===4)
            return <div>
              <h5 className="card-title">{ft.name}</h5>
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
      <div className="col-md-4">
        <div className="card border-secondary mb-3" >
          <img src="imgs/default-running-thumbnail-1.png" className="card-img-top" alt="category" alt="event"/>
          <div className="card-body">
          {this.state.featured.map((ft,index) => {
            if(index ===5)
            return <div>
              <h5 className="card-title">{ft.name}</h5>
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
    </div>
    </div>
    <div>
    <hr width="80%"/>
    <br/>
    </div>

    <div>
      <h2 align="center">Locations</h2>

      <div className="row">
        <div className="col-md-4">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
        <div className="col-md-4">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
        <div className="col-md-4">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
        <div className="col-md-4">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
        <div className="col-md-4">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
      </div>
    </div>

    <br/>


    <hr width="80%"/>
    <br/>

    <div>
      <h2 align="center">Categories</h2>

      <div className="row">
        <div className="col-md-4">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="category" style={{height:"200px",width:"300px"}}/>
        </div>
        <div className="col-md-4">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="category" style={{height:"200px",width:"300px"}}/>
        </div>
        <div className="col-md-4">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="category" style={{height:"200px",width:"300px"}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="category" style={{height:"200px",width:"300px"}}/>
        </div>
        <div className="col-md-4 mx-auto">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="category" style={{height:"200px",width:"300px"}}/>
        </div>
      </div>
    </div>

    <br/>

    <hr width="80%"/>

    <br/>


    <div className="footer">
      <div className="row">
        <div className="col-md-4 ml-auto">
          <img src="#" className="mx-auto d-block bg-dark mt-5" alt="logo" style={{height:"400px",width:"400px"}}/>
        </div>
        <div className="col-md-4 mr-auto my-auto" align="center">
          <br/><br/>
          <h4> 1 - Create </h4>
          <p> Create a listing by adding your race to our directory. </p><br/>
          <h4> 2 - Promote </h4>
          <p> Promote your race by advertising it through our site! </p><br/>
          <h4> 3 - Claim </h4>
          <p> Claim your race if it already exists within our directory. </p><br/>
        </div>
      </div>
    </div>


    </div>
    </div>

    <footer className="page-footer font-small pt-4">


      <div className="container-fluid text-center text-md-left">


        <div className="row" id="footer">


          <div className="col-md-6 mt-md-0 mt-3">


            <h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
              repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
              harum esse fugiat. Itaque, culpa?</p>

          </div>


          <hr className="clearfix w-100 d-md-none pb-3"/>


          <div className="col-md-6 mb-md-0 mb-3">


            <h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
              commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
              excepturi hic.</p>

          </div>


        </div>


      </div>



      <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>


    </footer>


    <br/><br/>

    </div>
</div>
    )
  }
}
