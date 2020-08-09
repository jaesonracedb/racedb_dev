import React, {Component } from 'react';
import "./css/archiveCard.css";
import "./css/main.css";
import Helmet from "react-helmet";
import logoRDB from "./imgs/racedblogo-04-scaled.png";
export default class ArchiveCard extends Component{
    constructor(props){
    super(props);
    const dotenv = require('dotenv')
    dotenv.config({ path: '../../../' })
    require('url');
    require('http');
    const queryString =window.location.search;
    
    console.log("url"+queryString);
    const urlParams = new URLSearchParams(queryString)
    const loggedInQuery = urlParams.get('loggedIn');
    const tokenQuery = urlParams.get('token');
 
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
      let sampleDate1 = new Date(this.state.date)
      let [month,day,year] = sampleDate1.toLocaleDateString().split("/");
      return(
        <div className="application">
          <Helmet>
            <meta charset="utf-8"/>
            {/*--sets width to device size, sets zoom-->*/}
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

            <title>Racedb</title>

            {/*// --bootstrap stuff--*/}
          </Helmet>

          <div className="card mx-4 mb-4 col-auto" id="archiveCard">
            <div className="row no-gutters my-3">
              <div className="col-auto">
                <img src={logoRDB} className="img-fluid" alt="img" height="200px" width="200px"/>
              </div>
              <div className="col-auto mt-1">
                <div className="card-block px-2">
                  <h5 className="h5-responsive card-title"><a href={this.state.url}>{this.state.title}</a></h5>
                  <p className="card-text">Date: {month}/{day}/{year}</p>
                  <p className="card-text">Distance: {this.state.distance}</p>
                  <p className="card-text">Category: {this.state.category}</p>
                  <a href={this.state.url} class="btn btn-danger featured-btn btn-md">View Race</a>
                </div>
              </div>
            </div>
          </div>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


        </div>
      )
      
    }
  }
  