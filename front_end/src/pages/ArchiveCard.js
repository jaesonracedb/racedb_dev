import React, {Component } from 'react';
import styles from "./css/archiveCard.css";
import Helmet from "react-helmet";

export default class ArchiveCard extends Component{
    constructor(props){
      super(props);
      this.state ={
        title: "",
        date: "",
        distance: "",
        category:"",
        rating: 0
      }
    }
    render(){
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
          <div className="body">
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
        </div>
      )
    }
}