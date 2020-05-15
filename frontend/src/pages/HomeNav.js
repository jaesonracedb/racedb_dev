import React,{Component} from 'react';
import logoRDB from "./imgs/racedblogo-04-scaled.png";
export default class HomeNav extends Component{
  render(){
    const loginUrl = "http://localhost:3000/login";
    const signupUrl = "http://localhost:3000/signup";
    const homeUrl ="http://localhost:3000";
    return(
    <nav className="navbar navbar-expand-sm navbar-dark" id="homepageNav">
        <a className="navbar-brand ml-3" href={homeUrl}>
          <img src={logoRDB} alt="logo" style= {{width:"110px"}}/>
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="btn btn-outline-light my-2 my-sm-0" href="http://localhost:3000/add-event" role="button">Create A Race</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={signupUrl}>Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={loginUrl}>Login</a>
          </li>
        </ul>
      </nav>
    )
  }
}