import React, { Component } from 'react';
// import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import Navbar from "./Navbar.js";
import ArchiveCard from "./ArchiveCard.js"
import Footer from "./Footer.js"
// import styles from "./main.css"
// import logoRDB from "./imgs/racedblogo-04-scaled.png"
export default class Archive extends Component {
  render() {
    return (
		<div class="application">
		<Helmet>
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
		</Helmet>

		<div className="body">
    <div className="content">
    <div className="content-inside">

<Navbar/>



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

    <ArchiveCard/>

		</div>
    </div>
    </div>
    <Footer/>
		</div>
		</div>
    )
  }
}
