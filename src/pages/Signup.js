import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Helmet} from "react-helmet";
import logoRDB from "./imgs/racedblogo-04-scaled.png"
import HomeNav from "./HomeNav.js";
// Fix error messages
export default class Signup extends Component {
  constructor(props) {
    super(props)
    const dotenv = require('dotenv')
    dotenv.config({ path: '../../../' })
    this.state={
      username:'',
      password:'',
      password1: '',
      email: '',
      firstName: '',
      lastName: '',
      middleInit: ''
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handlePass1= this.handlePass1.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleMiddleInit = this.handleMiddleInit.bind(this);
    this.signup= this.signup.bind(this);
  }
  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  }
  handlePass(e){
    this.setState({
      password:e.target.value
    })
  }
  handlePass1(e){
    this.setState({
      password1: e.target.value
    })
  }
  handleEmail(e){
    this.setState({
      email:e.target.value
    })
  }
  handleFirstName(e){
    this.setState({
      firstName: e.target.value
    })
  }
  handleLastName(e){
    this.setState({
      lastName: e.target.value
    })
  }
  handleMiddleInit(e){
    this.setState({
      middleInit: e.target.value
    })
  }


  signup(e) {
    // e.preventDefault()
    console.log("signing Up"+this.state.username);
    let thisFirstName= this.state.firstName;
    let thisLastName = this.state.lastName;
    let thisMiddleInit = this.state.middleInit;
    let verifyPass1 = this.state.password;
    let verifyPass2 = this.state.password1;
    let thisUser = this.state.username;
    var PORT = process.env.PORT || 3001;
    const regExName = /^([a-zA-Z0-9\s])*$/;
    const regExUser = /^([a-zA-Z0-9\_])*$/;
    const newUser = {
      username: this.state.username,
      password:this.state.password,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      middleInit: this.state.middleInit
    }
    if(regExUser.test(thisUser)){
      if(regExName.test(thisFirstName) && regExName.test(thisLastName) && regExName.test(thisMiddleInit)){
          if(verifyPass1.length >= 8){
            if(verifyPass1 === verifyPass2){
              console.log("Signed Up");
            fetch('/create-user', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newUser)
            }).catch(error10 => console.log(error10))
              .then(response => response.json())
              .then(body => {
                if (body.success) {
                  alert('Account Created!');
                } else {
                  alert('Failed to sign up')
                }
              })
            }else{
              alert('Passwords do not match!')
            }
          }else{
            alert("Error: Password is too short");
          }
      }else{
        alert("Error: Invalid Characters in name")
      }
    }else{
      alert("Error: Invalid Username")
    }
    

    

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

    <div class="col-md-3 mt-5 border mx-auto">
    	<h3 class="mt-3 ml-3 pt-3 ml-md-5" align="center">Signup</h3>

    	{/*<!--form-->*/}
    	<div class="p-3">
        <div class="form-group ml-md-4 mt-3 col-auto">
          <label for="inputU">Username</label>
          <input type="text" id="inputU" className="form-control" onChange={this.handleUsername}/>
        </div>
        

        <div class="form-group ml-md-4 mt-3 col-auto">
          <label for="inputEmail">Email</label>
          <input type="text" id="inputE" className="form-control" onChange={this.handleEmail}/>
        </div>

        <div class="form-group ml-md-4 mt-3 col-auto">
          <label for="inputP">Password</label>
          <input type="password" id="inputP" className="form-control" onChange={this.handlePass}/>
        </div>


        <div class="form-group ml-md-4 mt-3 col-auto">
          <label for="inputCP">Confirm Password</label>
          <input type="password" id="inputCP" class="form-control" onChange={this.handlePass1}/>
        </div>
        
        <div class="form-group ml-md-4 mt-3 col-auto">
          <label for="inputLN">Last Name</label>
          <input type="text" id="inputLN" class="form-control" onChange={this.handleLastName}/>
        </div>
        <div class="form-group ml-md-4 mt-3 col-auto">
          <label for="inputFN">First Name</label>
          <input type="text" class="form-control" id="inputFN" onChange={this.handleFirstName}/>
        </div>
        <div class="form-group ml-md-4 mt-3 col-auto">
          <label for="inputMI">M.I.</label>
          <input type="text" class="form-control" id="inputMI" onChange={this.handleMiddleInit}/>
        </div>


        <div class="row mt-3 ml-md-4">
          <button type="button" class="btn btn-primary ml-auto mr-3" onClick={this.signup}>Sign Up</button>
        </div>
      </div>
    </div>
    </div></div></div></div>

    )
  }
}
