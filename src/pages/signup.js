import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import styles from "./main.css"
import logoRDB from "./imgs/racedblogo-04-scaled.png"
export default class Homepage extends Component {
  render() {
    return (
  //<link rel="stylesheet" href="styling.css">
  /*<div>
    <nav class="navbar">
      <a id="face" href="https://www.facebook.com">
        <h2>face</h2>
      </a>


      <form id="login">
        <input type="text" id="l-username" placeholder="Email" />
        <input type="password" id="l-password" placeholder="Password" />
        <button id="login" onClick={this.login}>Log In</button>
      </form>
    </nav>

    <aside id="signup">
      <h2>Sign Up</h2>
        <form>
          <input type="text" id="s-name" placeholder="Name" /> <br/>
          <input type="text" id="s-email" placeholder="Email" /> <br/>
          <input type="password" id="s-password" placeholder="Password" /> <br/>
          <input type="text" id="s-about" placeholder="About" /> <br/>
          <input type="text" id="s-birthday" placeholder="Birthday" /> <br/>

          <button onClick={this.signup}>Sign Up</button>
        </form>
    </aside>
  </div> */

  <div class="application">
  <helmet>
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
  </helmet>

  <div class="body">
  <div class="content">
    <div class="content-inside">

  <nav class="navbar navbar-expand-sm navbar-dark">
    <a class="navbar-brand ml-3" href="#">
      <img src="logoRDB" alt="logo" style= {{width:"110px"}}/>
    </a>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="btn btn-outline-light my-2 my-sm-0" href="#" role="button">Create A Race</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sign Up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
    </ul>
  </nav>

  <div class="m-5 border">
  	<h3 class="mt-3 ml-5">Sign Up</h3>

  	<!--form-->
  	<div class="p-3">
  		<div class="row ml-4">
        <div class="col-xs ml-2">
  				<a>Last Name</a>
  			</div>
  			<div class="col-lg-4">
  				<input type="text" class="form-control">
  			</div>
        <div class="col-xs ml-2">
  				<a>First Name</a>
  			</div>
  			<div class="col-lg-4">
  				<input type="text" class="form-control">
  			</div>
        <div class="col-xs ml-2">
  				<a>Middle Initial</a>
  			</div>
  			<div class="col-lg-1">
  				<input type="text" class="form-control" maxlength="2">
  			</div>
  		</div>
  		<div class="row ml-4 mt-4">
  			<div class="col-xs ml-2">
  				<a>Username</a>
  			</div>
  			<div class="col-lg-4">
  				<input type="text" class="form-control">
  			</div>
  		</div>
  		<div class="row ml-4 mt-4">
        <div class="col-xs ml-2">
  				<a style="padding-right: 35px">Email</a>
  			</div>
  			<div class="col-lg-4">
  				<input type="email" class="form-control">
        </div>
      </div>
      <div class="row ml-4 mt-4">
        <div class="col-xs ml-2">
  				<a>Password</a>
  			</div>
  			<div class="col-lg-4">
  				<input type="password" class="form-control">
        </div>
        <div class="col-xs ml-2">
  				<a>Confirm Password</a>
  			</div>
  			<div class="col-lg-4">
  				<input type="password" class="form-control">
        </div>
      </div>
      <div class="row mt-3 ml-4">
        <button type="button">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
