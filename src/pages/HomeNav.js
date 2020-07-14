import React,{Component, useState, useEffect} from 'react';
import logoRDB from "./imgs/racedblogo-04-scaled.png";
import "./css/main.css";
import {Helmet} from "react-helmet";
export default class HomeNav extends Component{
  constructor(props){
    super(props)
    const dotenv = require('dotenv')
    dotenv.config({ path: '../../../' })
    var PORT = process.env.PORT || 3001;
    const url = require('url');
    const http = require('http');
    const queryString =window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const loggedInQuery = urlParams.get('loggedIn');
    const tokenQuery = urlParams.get('token');
    this.state={
      loggedIn: props.loggedIn,
      name: props.name,
      username: props.username,
      token:props.token
    }
    console.log("NAME IS : "+this.state.name)
  
    fetch('/token-info/',{
      headers:{
        'Authorization': 'Bearer '+this.state.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).catch((error10)=>{
      console.log(error10)
    })
    .then(res=>{
      console.log(res);
      if(res!== undefined && res.status===403 ){
        this.setState({
          loggedIn:false
        })
        return res.json()
      }
      else if(res !== undefined){return res.json()}
      else{
         return console.log("Critical Error")
      }
    })
    .then((body,err)=>{
      console.log("WELCOME: "+ body);
        console.log("Logged In")
        if(body !== undefined){
          this.setState({
            name: body.name,
          })
        }
    })
      // fetch('http://localhost:3001/refresh-user/',{
      //     method:"POST",
      //     headers:{
      //       'Content-Type': 'applicaton/json',
      //     },
      //     body: JSON.stringify({username: this.state.username})
      //   })
      //   .then( res=>{return res.json()})
      //   .then((body,err)=>{
      //     this.setState({
      //       token: body.token
      //     })       
      //   })
    // fetch('http://localhost:3001/check-token')
  }


  render(){
    const loginUrl = "/login";
    const signupUrl = "/signup";
    const logoutUrl = "/";
    const createRaceUrl = "/add-event";
    let {name} = this.state;
    let {loggedIn} = this.state;
    let {token} = this.state;
    const homeUrl ="/?&loggedIn="+loggedIn+"&token="+token
    function IsLoggedIn(props){
      if(loggedIn){
        return <nav className="navbar navbar-expand-md navbar-dark" id="homepageNav">
        <a className="navbar-brand ml-3" href={homeUrl}>
          <img src={logoRDB} alt="logo" style= {{width:"110px"}}/>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarNav2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="btn btn-outline-light my-2 my-sm-0" href={createRaceUrl} role="button">Create A Race</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={logoutUrl}>Logout</a>
          </li>
        </ul>
        </div>
      </nav>
        
      }else{
        return <nav className="navbar navbar-expand-md navbar-dark" id="homepageNav">
                <a className="navbar-brand ml-3" href={homeUrl}>
                  <img src={logoRDB} alt="logo" style= {{width:"110px"}}/>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                

                <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="btn btn-outline-light my-2 my-sm-0" href={createRaceUrl} role="button">Create A Race</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={signupUrl}>Sign Up</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={loginUrl}>Login</a>
                  </li>
                </ul>
                </div>
              </nav>
      }
    }
    return(
    <div>
    <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </Helmet>
    <IsLoggedIn/>
    </div>
    )
  }
}