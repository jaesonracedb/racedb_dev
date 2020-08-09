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
    var PORT = process.env.PORT || 3001;
  
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
    fetch('/userLogin', {
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
          const redirectUrl = "/?loggedIn=true&token="+body.token
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
    <Helmet>
      <meta charset="utf-8"/>
      {/*--sets width to device size, sets zoom-->*/}
      <link rel="stylesheet" href="main.css"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>

      <title>Racedb</title>

      {/*// --bootstrap stuff--*/}
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </Helmet>

    <div class="body">
    <div class="content">
      <div class="content-inside">

    <HomeNav/>

    <div class="col-md-5 m-5 mt-5 border mx-auto">
    	<h3 class="mt-3 ml-5">Log In</h3>

    	{/*<!--form-->*/}
    	<div class="p-3">
        <div class="form-group ml-md-4 mt-3 col-auto">
          <label for="inputUL">Username</label>
          <input type="text" id="inputUL" onChange={this.handleUsername} class="form-control"/>
        </div>
        <div class="form-group ml-md-4 mt-3 col-auto">
          <label for="inputPL">Password</label>
          <input type="password" id="inputPL" onChange={this.handlePassword} class="form-control"/>
        </div>

        <div class="row mt-3 ml-md-5">
          <button type="button" onClick={this.login} class="btn btn-primary featured-btn ml-auto mr-4 mt-1">Log In</button>
        </div>
      </div>
    </div>
    </div></div></div></div>

    )
  }
}
