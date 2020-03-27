import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import styles from "./main.css"
import logoRDB from "./imgs/racedblogo-04-scaled.png"
export default class Archive extends Component {
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

		<nav class="navbar navbar-expand-sm navbar-dark" style={{backgroundcolor:"#2d4f78"}}>
			<a class="navbar-brand" href="#">
				<img src="logoRDB" alt="logo" style={{width:"110px"}}/>
			</a>

			<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
				<button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
			</form>

			<ul class="navbar-nav ml-auto">
			<li class="nav-item">
				<a class="btn btn-outline-light my-2 my-sm-0" href="#" role="button">Create A Race</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">About Us</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Contact Page</a>
			</li>
			</ul>
		</nav>

    <div id="carouselExampleIndicators" class="carousel slide mt-5 bg-dark" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-70" src="..." style="height:300px;" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-70" src="..." style="height:300px;" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-70" src="..." style="height:300px;" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div>
    	<h2 class="mt-5 ml-4">Placeholder Name</h2>
    	<h5 class="mt-2 ml-4">Placeholder Date</h5>
    	<span class="ml-4 fa fa-star checked"></span>
    	<span class="fa fa-star checked"></span>
    	<span class="fa fa-star checked"></span>
    	<span class="fa fa-star"></span>
    	<span class="fa fa-star"></span>
    </div>

    <hr width="80%">

    //info
    <div>
    	<div class="row">
    		<div class="col-sm-6 mr-5">
    			<div class="card ml-4 p-3">
    				<p class="card-text"><b>Location:</b>&nbsp;&lt;filler text&gt;</p>
    				<p class="card-text"><b>State:</b>&nbsp;&lt;filler text&gt;</p>
    				<p class="card-text"><b>Distance:</b>&nbsp;&lt;filler text&gt;</p>
    				<p class="card-text"><b>Summary:</b></p><br>
    				<!--filler br-->
    				<br><br><br>
    			</div>

    			<div class="card ml-4 mt-3 p-3">
    				<h5 class="card-title">Submit a Review</h5>
    				<div>
    					<span class="fa fa-star checked"></span>
    					<span class="fa fa-star checked"></span>
    					<span class="fa fa-star checked"></span>
    					<span class="fa fa-star"></span>
    					<span class="fa fa-star"></span>
    				</div>

    				<textarea class="form-control" rows="5"></textarea>
    				<button class="btn btn-sm btn-outline-primary ml-auto mt-1" type="submit">Submit</button>
    			</div>
    		</div>
    		<div class="col-sm-4">
    			//map to be improved
    			<div id="map-container-google-1" class="z-depth-1-half map-container" >
    				<iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style="border:0" allowfullscreen></iframe>
    			</div>

    			<div class="card p-3">
    				<p class="card-text"><b>Email:</b>&nbsp;&lt;filler&gt;</p>
    				<p class="card-text"><b>Number:</b>&nbsp;&lt;filler&gt;</p>
    			</div>

    			//ads to be finished
    			<div>
    			</div>

    			<div class="card mt-3 p-3">
    				<p class="card-text">Own or work here?&nbsp;<a href="#" class="text-primary">Claim it!</a></p>
    				<p class="card-text">See something wrong?&nbsp;<a href="#" class="text-danger">Report!</a></p>
    			</div>
    		</div>
    	</div>
    </div>
    )
  }
}
