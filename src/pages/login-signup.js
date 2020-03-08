import React, { Component } from 'react';
import Cookies from 'universal-cookie';

export default class User extends Component {
  constructor(props) {

  }

  signup(e) {
    e.preventDefault()

    const newUser = {
      name: document.getElementById('s-name').value,
      email: document.getElementById('s-email').value,
      password: document.getElementById('s-password').value,
	    about: document.getElementById('s-password').value,
	    birthday: document.getElementById('s-birthday').value
    }

    fetch('http://localhost:3001/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(body => {
        if (body.success) {
          alert('Successfully signed up!')
        } else {
          alert('Failed to sign up')
        }
      })

  }

  login(e) {
    e.preventDefault()
    console.log("Login button pressed\n");
    const credentials = {
      username: document.getElementById('l-username').value,
      password: document.getElementById('l-password').value
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
		<div>
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
		</div>
    )
  }
}
