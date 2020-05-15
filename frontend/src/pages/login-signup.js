import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import logoRDB from "./imgs/racedblogo-04-scaled.png"
import HomeNav from "./HomeNav.js";

export default class User extends Component {
  constructor(props) {
    super(props)
    this.state ={
      username: '',
      password:''
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.login  = this.login.bind(this);
  }
  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  }
  login(e) {
    e.preventDefault()
    console.log("Login button pressed\n");
    const credentials = {
      username: this.state.username,
      password: this.state.password
    }

    fetch('http://localhost:3001/userLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(body => {
        // expecting { success: false }
        // OR { success: true, token, username }

        if (!body.success) {
          alert('Unable to login')
        }

        else {
          // save the token as a cookie
          alert("Login successful!");
          

          const cookies = new Cookies()
          // cookies.set('authToken', body.token)
          cookies.set('authToken', body.token, {path: '/', expires: new Date(Date.now()+3600000)});

          // store username in localStorage
          localStorage.setItem('username', body.username)

          //window.location.replace('http://localhost:3000/dashboard')

        }
      })

  }
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

<<<<<<< HEAD
    <nav class="navbar navbar-expand-sm navbar-dark">
      <a class="navbar-brand ml-3" href="http://localhost:3000/">
        <img src={logoRDB} alt="logo" style= {{width:"110px"}}/>
      </a>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="btn btn-outline-light my-2 my-sm-0" href="http://localhost:3000/add-event" role="button">Create A Race</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign Up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
    </nav>
=======
    <HomeNav/>
>>>>>>> 19cf805d0fd6f2b17914447eec27f7ba7e1b37b0

    <div class="m-5 border">
    	<h3 class="mt-4 ml-5">Log In</h3>

    	{/*<!--form-->*/}
    	<div class="m-4">
    		<div class="row ml-4">
          <div class="col-xs ml-3">
    				<a>Username</a>
    			</div>
<<<<<<< HEAD
    			<div class="col-lg-4 ml-3">
    				<input type="text" class="form-control"/>
=======
    			<div class="col-lg-4">
    				<input type="text" onChange={this.handleUsername} class="form-control"/>
>>>>>>> 19cf805d0fd6f2b17914447eec27f7ba7e1b37b0
    			</div>
    		</div>
        <div class="row ml-4 mt-4">
          <div class="col-xs ml-3">
    				<a>Password</a>
    			</div>
<<<<<<< HEAD
    			<div class="col-lg-4 ml-4">
    				<input type="password" class="form-control"/>
          </div>
        </div>
        <div class="row mt-3 ml-4">
          <button type="button" class="btn btn-primary ml-3 my-2">Log In</button>
=======
    			<div class="col-lg-4">
    				<input type="password" onChange={this.handlePassword} class="form-control"/>
          </div>
        </div>
        <div class="row mt-3 ml-4">
          <button type="button" onClick={this.login} class="btn btn-primary">Log In</button>
>>>>>>> 19cf805d0fd6f2b17914447eec27f7ba7e1b37b0
        </div>
      </div>
    </div>
    </div></div></div></div>

    )
  }
}
