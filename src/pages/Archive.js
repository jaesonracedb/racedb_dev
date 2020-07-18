import React, { Suspense, Component } from 'react';
// import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import Navbar from "./HomeNav.js";
import SearchBar from "./SearchBar.js"
import ArchiveCard from "./ArchiveCard.js"
import Pagination from "./Pagination.js"
import Footer from "./Footer.js"
// import styles from "./main.css"
// import logoRDB from "./imgs/racedblogo-04-scaled.png"
export default class Archive extends Component {
  constructor(props){
    super(props)
    const dotenv = require('dotenv')
    dotenv.config({ path: '../../../' })
    const url = require('url');
    const http = require('http');
    const queryString =window.location.search;
    console.log("url"+queryString);
    const urlParams = new URLSearchParams(queryString)
    const currentPage = urlParams.get('page');
    const currentFilter = urlParams.get('filter');
    const currentKey = urlParams.get('key');
    const loggedInQuery = urlParams.get('loggedIn');
    const tokenQuery = urlParams.get('token');
    var PORT = process.env.PORT || 3001;
    this.state={
      page: currentPage,
      filter: currentFilter,
      key: currentKey,
      search_results: [],
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
    console.log("Page is: "+this.state.page)
    fetch('/search-results/'+this.state.filter+'/'+this.state.key+'/id/'+this.state.page,{
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res=>{return res.json()})
    .then((body)=>{
      this.setState({
        search_results: body.search_results,
        totalCount: parseInt(body.totalCount)
      });
      console.log("List "+this.state.totalCount)
    })
  }
  render() {
    let {search_results} = this.state;
    let {totalCount} = this.state;
    let {page} = this.state;
    console.log("Total count in render: "+totalCount)
    function LoopCard(props){
      var pageResults = {search_results}.length;
      return <div>{search_results.map((value,index)=>{
        return <ArchiveCard id={value.id} title={value.name} date={value.event_date} distance={value.distance} category={value.category}/>
      })}</div>
    }
    function DisplayPagination(props){
      if(totalCount===undefined){
        return <div/>
      }else
      return <Pagination wait={2000} totalCount={totalCount} currentPage={page}/>
    }
    return (
		<div className="application">
		<Helmet>
			<meta charset="utf-8"/>
			{/*--sets width to device size, sets zoom-->*/}
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"/>

			<title>Racedb</title>
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

    <Navbar username={this.state.username} name={this.state.name} token={this.state.token} loggedIn={this.state.loggedIn}/>


    <SearchBar/>


		<div id="archive-2">
      <div className="search-body">
        <LoopCard/>
      </div>{/*Search-body*/}
      <div className="ml-4">
        <DisplayPagination/>
      </div>

  	</div>{/*archive2*/}
      </div>{/*content-inside*/}
      </div>{/*content*/}
      <Footer/>
  		</div>{/*body*/}
		</div>
    )
  }
}
