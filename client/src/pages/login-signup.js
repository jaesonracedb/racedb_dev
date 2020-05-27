import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import logoRDB from "./imgs/racedblogo-04-scaled.png"
import HomeNav from "./HomeNav.js";

export default class User extends Component {
  constructor(props) {
    super(props)
    const dotenv = require('dotenv')
    dotenv.config({ path: '../../../' })
    var PORT = process.env.PORT || 80;
    var webPage = "https://race-db.herokuapp.com"
    this.state ={
      username: '',
      password:'',
      loggedIn:false
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
    var PORT = process.env.PORT || 3001;
    var webPage = "https://race-db.herokuapp.com"
    fetch(webPage+':'+PORT+'/userLogin', {
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
          this.setState({
            loggedIn:true,
            token: body.token,
            rToken: body.refresh_token
          })
          const redirectUrl = webPage+"/?loggedIn=true&token="+body.token
          window.location.replace(redirectUrl);


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

    <HomeNav/>

    <div class="m-5 border">
    	<h3 class="mt-3 ml-5">Log In</h3>

    	{/*<!--form-->*/}
    	<div class="p-3">
    		<div class="row ml-4">
          <div class="col-xs ml-2">
    				<a>Username</a>
    			</div>
    			<div class="col-lg-4">
    				<input type="text" onChange={this.handleUsername} class="form-control"/>
    			</div>
    		</div>
        <div class="row ml-4 mt-4">
          <div class="col-xs ml-2">
    				<a>Password</a>
    			</div>
    			<div class="col-lg-4">
    				<input type="password" onChange={this.handlePassword} class="form-control"/>
          </div>
        </div>
        <div class="row mt-3 ml-4">
          <button type="button" onClick={this.login} class="btn btn-primary">Log In</button>
        </div>
      </div>
    </div>
    </div></div></div></div>

    )
  }
}
