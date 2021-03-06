import React, {Component} from 'react';
import logoRDB from "./imgs/racedblogo-04-scaled.png";

export default class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundcolor:"#2d4f78"}}>
  			<a className="navbar-brand" href="http://localhost:3000">
  				<img src={logoRDB} alt="logo" style={{width:"110px"}}/>
  			</a>

  			<form className="form-inline my-2 my-lg-0">
  				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  				<button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
  			</form>

  			<ul className="navbar-nav ml-auto">
  			<li className="nav-item">
  				<a className="btn btn-outline-light my-2 my-sm-0" href="http://localhost:3000/add-event" role="button">Create A Race</a>
  			</li>
  			<li className="nav-item">
  				<a className="nav-link" href="#">About Us</a>
  			</li>
  			<li className="nav-item">
  				<a className="nav-link" href="#">Contact Page</a>
  			</li>
  			</ul>
  		</nav>
    )
  }
}
