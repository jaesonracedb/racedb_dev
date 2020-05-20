import React,{Component, useState, useEffect} from 'react';
import logoRDB from "./imgs/racedblogo-04-scaled.png";
export default class HomeNav extends Component{
  constructor(props){
    super(props)
    var PORT = process.env.PORT || 3001;
    const url = require('url');
    const http = require('http');
    const queryString =window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const loggedInQuery = urlParams.get('loggedIn');
    const tokenQuery = urlParams.get('token');
    var webPage = "https://race-db.herokuapp.com"
    this.state={
      loggedIn: props.loggedIn,
      name: props.name,
      username: props.username,
      token:props.token
    }
    console.log("NAME IS : "+this.state.name)
  
    fetch(webPage+':'+PORT+'/token-info/',{
      headers:{
        'Authorization': 'Bearer '+this.state.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).catch(()=>{
      console.log("ERRORS???")
    })
    .then(res=>{
      if(res.status===403){
        this.setState({
          loggedIn:false
        })
        return res.json()
      }
      else{return res.json()}
    })
    .then((body,err)=>{
      console.log("WELCOME: "+ body);
        console.log("Logged In")
        this.setState({
          name: body.name,
        })

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
    const loginUrl = webPage+":3000/login";
    const signupUrl = webPage+":3000/signup";
    const logoutUrl = webPage+":3000/";
    const createRaceUrl = webPage+":3000/add-event";
    let {name} = this.state;
    let {loggedIn} = this.state;
    let {token} = this.state;
    const homeUrl =webPage+":3000/?&loggedIn="+loggedIn+"&token="+token
    function IsLoggedIn(props){
      if(loggedIn){
        return <nav className="navbar navbar-expand-sm navbar-dark" id="homepageNav">
        <a className="navbar-brand ml-3" href={homeUrl}>
          <img src={logoRDB} alt="logo" style= {{width:"110px"}}/>
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
           <h5> Hi, {name}</h5>
          </li>
          <li className="nav-item">
            <a className="btn btn-outline-light my-2 my-sm-0" href={createRaceUrl} role="button">Create A Race</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={logoutUrl}>Logout</a>
          </li>
        </ul>
      </nav>
      }else{
        return <nav className="navbar navbar-expand-sm navbar-dark" id="homepageNav">
                <a className="navbar-brand ml-3" href={homeUrl}>
                  <img src={logoRDB} alt="logo" style= {{width:"110px"}}/>
                </a>

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
              </nav>
      }
    }
    return(
    <IsLoggedIn/>
    
    )
  }
}