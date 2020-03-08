import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import styles from "./main.css"
import logoRDB from "./imgs/racedblogo-04-scaled.png"
export default class Homepage extends Component {
  render() {
    return (
    <div class="application">
    <helmet>
      <meta charset="utf-8"/>
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
    </helmet>

    <div class="body">
    <div class="content">
      <div class="content-inside">

    <nav class="navbar navbar-expand-sm navbar-dark">
      <a class="navbar-brand ml-3" href="#">
        <img src="logoRDB" alt="logo" style= {{width:"110px"}}/>
      </a>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="btn btn-outline-light my-2 my-sm-0" href="#" role="button">Create A Race</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign Up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
    </nav>

    {/*// --Logo and Search-->*/}
    <div class="container header">
    	{/*// --bd-dark is there to see area while there is no picture-->*/}
    	<img src="imgs/racedblogo-04-scaled.png" id="bannerimagelogo" class="mx-auto d-block" alt="banner" style={{width:"450px"}}/>


      {/*// --from https://codepen.io/billzhao/pen/wzxrbW?editors=1000-->*/}
    	<div class="container">
    	  <div class="row mx-auto">
    	   <div class="col-xs-8 col-xs-offset-2">
    		<div class="input-group">
    		 <div class="input-group-btn search-panel">
    		  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    			<span id="search_concept">All</span> <span class="caret"></span>
    		  </button>
    		  <ul class="dropdown-menu scrollable-dropdown" role="menu">
    			<li><a href="#">Name</a></li>
    			<li><a href="#">Date</a></li>
    			<li><a href="#">Distance</a></li>
    			<li><a href="#">Location</a></li>
    			<li><a href="#">Type</a></li>
    		  </ul>
    		 </div>
    		 <input type="hidden" name="search_param" value="all" id="search_param"/>
    		 <input type="text" class="form-control" name="x" id="searchforevent" placeholder="Search" size="100%"/>
    		</div>
    	   </div>
    	  </div>
    	</div>

    	<nav class="navbar navbar-expand-lg navbar-light bg-light mt-3 mx-auto" id="categoryNav">
    		<a class="nav-link mx-auto" href="#">Running</a>
    		|
    		<a class="nav-link mx-auto" href="#">Triathlon</a>
    		|
    		<a class="nav-link mx-auto" href="#">Cycling</a>
    		|
    		<a class="nav-link mx-auto" href="#">Obstacle</a>
    		|
    		<a class="nav-link mx-auto" href="#">Other</a>
    	</nav>
    </div>



  {/*  // -- Exclusives -->*/}
    {/*// -- template from https://getbootstrap.com/docs/3.4/examples/jumbotron/, will be edited and modified accordingly -->*/}
    <div class="container" id="exclusivesdiv">
      <h2 align="center">Exclusives</h2>
      <br/>

      <div class="row">
        <div class="card-group">
        <div class="col-md-4">
          <div class="card border-secondary mb-3 rounded" >
            <img src="imgs/default-running-thumbnail-1.png" class="card-img-top" alt="category" alt="event"/>
            <div class="card-body">
              <h5 class="card-title">Event Title</h5>
              <p class="card-text">Date:<br/>
              Distance:<br/>
              Category:<br/></p>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>

        </div>
        <div class="col-md-4">
          <div class="card border-secondary mb-3" >
            <img src="imgs/default-running-thumbnail-1.png" class="card-img-top" alt="category" alt="event"/>
            <div class="card-body">
              <h5 class="card-title">Event Title</h5>
              <p class="card-text">Date:<br/>
              Distance:<br/>
              Category:<br/></p>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>

       </div>
        <div class="col-md-4">
          <div class="card border-secondary mb-3" >
            <img src="imgs/default-running-thumbnail-1.png" class="card-img-top" alt="category" alt="event"/>
            <div class="card-body">
              <h5 class="card-title">Event Title</h5>
              <p class="card-text">Date:<br/>
              Distance:<br/>
              Category:<br/></p>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="card-group">
      <div class="col-md-4">
        <div class="card border-secondary mb-3" >
          <img src="imgs/default-running-thumbnail-1.png" class="card-img-top" alt="category" alt="event"/>
          <div class="card-body">
            <h5 class="card-title">Event Title</h5>
            <p class="card-text">Date:<br/>
            Distance:<br/>
            Category:<br/></p>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>

      </div>
      <div class="col-md-4">
        <div class="card border-secondary mb-3" >
          <img src="imgs/default-running-thumbnail-1.png" class="card-img-top" alt="category" alt="event"/>
          <div class="card-body">
            <h5 class="card-title">Event Title</h5>
            <p class="card-text">Date:<br/>
            Distance:<br/>
            Category:<br/></p>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </div>
     </div>
      <div class="col-md-4">
        <div class="card border-secondary mb-3" >
          <img src="imgs/default-running-thumbnail-1.png" class="card-img-top" alt="category" alt="event"/>
          <div class="card-body">
            <h5 class="card-title">Event Title</h5>
            <p class="card-text">Date:<br/>
            Distance:<br/>
            Category:<br/></p>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
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

      <div class="row">
        <div class="col-md-4">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
        <div class="col-md-4">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
        <div class="col-md-4">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
        <div class="col-md-4">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
        <div class="col-md-4">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="location" style={{height:"200px",width:"300px"}}/>
        </div>
      </div>
    </div>

    <br/>


    <hr width="80%"/>
    <br/>

    <div>
      <h2 align="center">Categories</h2>

      <div class="row">
        <div class="col-md-4">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="category" style={{height:"200px",width:"300px"}}/>
        </div>
        <div class="col-md-4">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="category" style={{height:"200px",width:"300px"}}/>
        </div>
        <div class="col-md-4">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="category" style={{height:"200px",width:"300px"}}/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mx-auto">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="category" style={{height:"200px",width:"300px"}}/>
        </div>
        <div class="col-md-4 mx-auto">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="category" style={{height:"200px",width:"300px"}}/>
        </div>
      </div>
    </div>

    <br/>

    <hr width="80%"/>

    <br/>


    <div class="footer">
      <div class="row">
        <div class="col-md-4 ml-auto">
          <img src="#" class="mx-auto d-block bg-dark mt-5" alt="logo" style={{height:"400px",width:"400px"}}/>
        </div>
        <div class="col-md-4 mr-auto my-auto" align="center">
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

    <footer class="page-footer font-small pt-4">


      <div class="container-fluid text-center text-md-left">


        <div class="row" id="footer">


          <div class="col-md-6 mt-md-0 mt-3">


            <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
              repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
              harum esse fugiat. Itaque, culpa?</p>

          </div>


          <hr class="clearfix w-100 d-md-none pb-3"/>


          <div class="col-md-6 mb-md-0 mb-3">


            <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
              commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
              excepturi hic.</p>

          </div>


        </div>


      </div>



      <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>


    </footer>


    <br/><br/>

    </div>
</div>
    )
  }
}
