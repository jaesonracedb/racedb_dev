import React, {Component} from 'react';

export default class Navbar extends Component{
  render(){
    return(
      <nav class="navbar navbar-expand-sm navbar-dark" style={{backgroundcolor:"#2d4f78"}}>
  			<a class="navbar-brand" href="#">
  				<img src="logoRDB" alt="logo" style={{width:"110px"}}/>
  			</a>

  			<form class="form-inline my-2 my-lg-0">
  				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  				<button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
  			</form>

  			<ul class="navbar-nav ml-auto">
  			<li class="nav-item">
  				<a class="btn btn-outline-light my-2 my-sm-0" href="#" role="button">Create A Race</a>
  			</li>
  			<li class="nav-item">
  				<a class="nav-link" href="#">About Us</a>
  			</li>
  			<li class="nav-item">
  				<a class="nav-link" href="#">Contact Page</a>
  			</li>
  			</ul>
  		</nav>
    )
  }
}
