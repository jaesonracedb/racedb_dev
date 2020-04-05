import React, { Component } from 'react';
// import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import Navbar from "./Navbar.js";
import SearchBar from "./SearchBar.js"
import ArchiveCard from "./ArchiveCard.js"
import Pagination from "./Pagination.js"
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


<SearchBar/>


		<div>

    <ArchiveCard/>
    <Pagination/>
		</div>
    </div>
    </div>
    <Footer/>
		</div>
		</div>
    )
  }
}
