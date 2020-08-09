import React, { Component } from 'react';
import 'universal-cookie';
import {Helmet} from "react-helmet";

import HomeNav from "./HomeNav.js";

export default class User extends Component {
  constructor(props) {
    super(props)
    const dotenv = require('dotenv')
    dotenv.config({ path: '../../../' })
    
  
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
    const credentials = {
      username: this.state.username,
      password: this.state.password
    }
    fetch('/userLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).catch()
      .then(response => response.json())
      .then(body => {
        // expecting { success: false }
        // OR { success: true, token, username }
        if (!body.success) {
          alert(body.message)
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
      }).catch()

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

    <div className="application">
    <Helmet>
      <meta charset="utf-8"/>
      {/*--sets width to device size, sets zoom-->*/}
      <link rel="stylesheet" href="main.css"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>

      <title>Racedb</title>

      {/*// --bootstrap stuff--*/}
    </Helmet>

    <div className="body">
    <div className="content">
      <div className="content-inside">

    <HomeNav/>

    <div className="col-md-5 m-5 mt-5 border mx-auto">
    	<h3 className="mt-3 ml-5">Log In</h3>

    	{/*<!--form-->*/}
    	<div className="p-3">
        <div className="form-group ml-md-4 mt-3 col-auto">
          <label htmlFor="inputUL">Username</label>
          <input type="text" id="inputUL" onChange={this.handleUsername} className="form-control"/>
        </div>
        <div className="form-group ml-md-4 mt-3 col-auto">
          <label htmlFor="inputPL">Password</label>
          <input type="password" id="inputPL" onChange={this.handlePassword} className="form-control"/>
        </div>

        <div className="row mt-3 ml-md-5">
          <button type="button" onClick={this.login} className="btn btn-primary featured-btn ml-auto mr-4 mt-1">Log In</button>
        </div>
      </div>
    </div>
    </div></div></div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </div>
    )
  }
}
