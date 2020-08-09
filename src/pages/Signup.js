import React, { Component } from 'react';
import styles from "./css/main.css";
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
      middleInit: null
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handlePass1= this.handlePass1.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);

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



  signup(e) {
    // e.preventDefault()
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
      middleInit: null
    }
    if(regExUser.test(thisUser)){
      if(regExName.test(thisFirstName) && regExName.test(thisLastName)){
          if(verifyPass1.length >= 8){
            if(verifyPass1 === verifyPass2){
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

    <div className="application">
    <Helmet>
      <meta charSet="utf-8"/>
      {/*--sets width to device size, sets zoom-->*/}
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
      
      <title>Racedb</title>

      {/*// --bootstrap stuff--*/}
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
    </Helmet>

    <div className="body">
    <div className="content">
      <div className="content-inside">
        
    <HomeNav/>

    <div className="col-md-3 mt-5 border mx-auto">
    	<h3 className="mt-3 ml-3 pt-3 ml-md-5" align="center">Signup</h3>

    	{/*<!--form-->*/}
    	<div className="p-3">
        <div className="form-group ml-md-4 mt-3 col-auto">
          <label htmlFor="inputU">Username</label>
          <input type="text" id="inputU" className="form-control" onChange={this.handleUsername}/>
        </div>
        

        <div className="form-group ml-md-4 mt-3 col-auto">
          <label htmlFor="inputEmail">Email</label>
          <input type="text" id="inputE" className="form-control" onChange={this.handleEmail}/>
        </div>

        <div className="form-group ml-md-4 mt-3 col-auto">
          <label htmlFor="inputP">Password</label>
          <input type="password" id="inputP" className="form-control" onChange={this.handlePass}/>
        </div>


        <div className="form-group ml-md-4 mt-3 col-auto">
          <label htmlFor="inputCP">Confirm Password</label>
          <input type="password" id="inputCP" className="form-control" onChange={this.handlePass1}/>
        </div>
        
        <div className="form-group ml-md-4 mt-3 col-auto">
          <label htmlFor="inputLN">Last Name</label>
          <input type="text" id="inputLN" className="form-control" onChange={this.handleLastName}/>
        </div>
        <div className="form-group ml-md-4 mt-3 col-auto">
          <label htmlFor="inputFN">First Name</label>
          <input type="text" className="form-control" id="inputFN" onChange={this.handleFirstName}/>
        </div>

        <div className="row mt-3 ml-md-4">
          <button type="button" className="btn btn-primary featured-btn ml-auto mr-3" onClick={this.signup}>Sign Up</button>
        </div>
      </div>
    </div>
    </div></div></div></div>

    )
  }
}
