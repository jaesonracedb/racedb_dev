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




		<div>
			<div class="container ml-3 mt-5">
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
							<input type="text" class="form-control" name="x" id="search" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>

			<a class="ml-4">Search Results for: &lt;filter&gt; &lt;input&gt;</a>
		</div>


		<div>

			<div class="card ml-3 w-50">
				<div class="row no-gutters">
					<div class="col-auto pt-4 px-3">
						<img src="imgs/072218_AG_Triathlon_Getty_0155-1024x683.jpg" class="img-fluid" alt="" height="170" width="320"/>
					</div>
					<div class="col">
						<div class="card-block px-2 pb-2">
							<img class="card-img-left" src="#" alt="" height="170" width="320"/>
							<h4 class="card-title">Ad Race</h4>
							<p class="card-text">Filter:</p>
							<p class="card-text">Date:</p>
							<p class="card-text">Distance:</p>
							<p class="card-text">Category:</p>
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




		<footer class="page-footer font-small pt-4 mt-3 bg-dark text-white">


		  <div class="container-fluid text-center text-md-left">


			<div class="row">


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

		</div>
		</div>
    )
  }
}
