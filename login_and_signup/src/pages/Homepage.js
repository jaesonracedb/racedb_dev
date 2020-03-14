import React, { Component } from 'react';
import Cookies from 'universal-cookie';

export default class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    };
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
  }

  signup(e) {
    e.preventDefault();

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

  uploadPicture(e){
    e.preventDefault();
    const formData = new FormData();
    console.log(this.state.file);
    formData.append('file',this.state.file);
    console.log("Form data file: " );
    console.log(formData.get('file'));
    fetch('http://localhost:3001/eventUploadPicture', {
      method: "POST",
      body: formData
    })
  }


  onChangeHandler(e){
    e.preventDefault();
    Object.assign(this.state, { file:e.target.files[0] })
    console.log(this.state.file);
  }

  saveEvent(e){
    var eventDetails = {
      name: document.getElementById('e-name').value,
      event_date: document.getElementById('e-date').value,
      location_city: document.getElementById('e-city').value,
      state: document.getElementById('e-state').value,
      category: document.getElementById('e-category').value,
      distance: document.getElementById('e-distance').value,
      swim_distance: document.getElementById('e-swim_distance').value,
      bike_distance: document.getElementById('e-bike_distance').value,
      run_distance: document.getElementById('e-run_distance').value,
      website: document.getElementById('e-website').value,
      email: document.getElementById('e-email').value,
      summary: document.getElementById('e-summary').value,
      race_type: document.getElementById('e-race_type').value,
      cycling_type: document.getElementById('e-cycling_type').value

    }
    console.log(eventDetails);
    //TODO see if formdata is more useful in the long run
    // var eventDetailsFormData = new FormData(document.getElementById('editEventForm'));
    // console.log(eventDetailsFormData);

    fetch('http://localhost:3001/addEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventDetails)
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
      <section>
        <input type="file" id="file_pic" onChange={this.onChangeHandler}/>
        <button type="submit" onClick={this.uploadPicture}>Upload</button>
      </section>
      <aside id="editEventDetails">
        <h2>Edit Race Details</h2>
        <form id="eventForm">
          <input type="text" id="e-name" placeholder="Event Name" /> <br/>
          <input type="date" id="e-date"/> <br/>
          <input type="text" id="e-city" placeholder="City" /> <br/>
          <input type="text" id="e-state" placeholder="State" /> <br/>
          <input type="text" id="e-category" placeholder="Category" /> <br/>
          <input type="number" id="e-distance" placeholder="Total Distance" /> <br/>
          <input type="number" id="e-swim_distance" placeholder="Swim Distance" /> <br/>
          <input type="number" id="e-bike_distance" placeholder="Bike Distance" /> <br/>
          <input type="number" id="e-run_distance" placeholder="Run Distance" /> <br/>
          <input type="text" id="e-website" placeholder="Website Link" /> <br/>
          <input type="text" id="e-email" placeholder="Organizer e-mail" /> <br/>
          <input type="text" id="e-summary" placeholder="Race Description" /> <br/>
          <input type="text" id="e-race_type" placeholder="Race Type" /> <br/>
          <input type="text" id="e-cycling_type" placeholder="Cycling Type" /> <br/>
        </form>
      <button onClick={this.saveEvent}> Save Event </button>
      <button onClick={this.saveEventChanges}> Save Event Changes </button>
      </aside>
		</div>
    )
  }
}
