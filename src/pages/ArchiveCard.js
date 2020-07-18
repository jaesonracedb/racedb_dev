import React, {Component } from 'react';
import styles from "./css/archiveCard.css";
import Helmet from "react-helmet";
import StaticStar from "./StaticStar.js";
import logoRDB from "./imgs/racedblogo-04-scaled.png";
export default class ArchiveCard extends Component{
    constructor(props){
    super(props);
    const dotenv = require('dotenv')
    dotenv.config({ path: '../../../' })
    const url = require('url');
    const http = require('http');
    const queryString =window.location.search;
    console.log("url"+queryString);
    const urlParams = new URLSearchParams(queryString)
    const loggedInQuery = urlParams.get('loggedIn');
    const tokenQuery = urlParams.get('token');
    var PORT = process.env.PORT || 3001;
  
      this.state ={
        id: props.id,
        title: props.title,
        date: props.date,
        distance: props.distance,
        category: props.category,
        rating: 0,
        loggedIn: loggedInQuery,
        token: tokenQuery,
        url: "/listing?loggedIn="+loggedInQuery+"&token="+tokenQuery+"&id="+props.id

      }

    }
    render(){
      // var eventRace = "http://localhost:3000/listing?id="+this.state.id;
      // document.getElementById('eventLink').setAttribute("href",eventRace)
      return(
        <div className="application">
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

          <div className="card mx-4 mb-2 col-auto" id="archiveCard">
            <div className="row no-gutters my-3">
              <div className="col-auto">
                <img src={logoRDB} className="img-fluid" alt="img" height="200px" width="200px"/>
              </div>
              <div className="col-auto mt-1">
                <div className="card-block px-2">
                  <h5 className="h5-responsive card-title"><a href={this.state.url}>{this.state.title}</a></h5>
                  <p className="card-text">Date: {this.state.date}</p>
                  <p className="card-text">Distance: {this.state.distance}</p>
                  <p className="card-text">Category: {this.state.category}</p>
                  <StaticStar size="15"/>
                </div>
              </div>
            </div>
          </div>


        </div>
      )

    }
}
