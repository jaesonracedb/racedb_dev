import React, {PureComponent} from 'react';
import "./css/main.css";
import {Helmet} from "react-helmet";
import HomeNav from "./HomeNav.js";

class AddEvent extends PureComponent {
  constructor(){
    super()
    const dotenv = require('dotenv')
    dotenv.config({ path: '../../../' })
    require('url');
    require('http');
    const queryString =window.location.search;
    console.log("url"+queryString);
    const urlParams = new URLSearchParams(queryString)
    const loggedInQuery = urlParams.get('loggedIn');
    
    const tokenQuery = urlParams.get('token');
    this.state= {
      // id: null,
      name: '',
      event_date: null,
      location_city: '',
      state:'',
      category: 'running',
      distance: '',
      swim_distance:'',
      bike_distance: '',
      run_distance: '',
      website: '',
      email: '',
      summary: '',
      race_type:'',
      cycling_type: '',
      loggedIn: loggedInQuery,
      token: tokenQuery,

    }
    fetch("/token-info/",{
      headers:{
        'Authorization': 'Bearer '+this.state.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).catch(error0 => console.log(error0))
    .then(res=>{return res.json()})
    .catch(error1 => console.log(error1))
    .then((body,err)=>{
      if(err){
        this.setState({loggedIn:false});
      }else{
        this.setState({
          name: body.user_name,
          username: body.username
        })
      } 
    }).catch(error2 => console.log(error2))
    this.handleAddEvent = this.handleAddEvent.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEvent_date = this.handleEvent_date.bind(this)
    this.handleLocationCity = this.handleLocationCity.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
    this.handleDistance = this.handleDistance.bind(this)
    this.handleSwimDistance = this.handleSwimDistance.bind(this)
    this.handleBikeDistance = this.handleBikeDistance.bind(this)
    this.handleRunDistance = this.handleRunDistance.bind(this)
    this.handleWebsite = this.handleWebsite.bind(this)
    this.handleEmail= this.handleEmail.bind(this)
    this.handleSummary = this.handleSummary.bind(this)
    this.handleRaceType = this.handleRaceType.bind(this)
    this.handleCyclingType = this.handleCyclingType.bind(this)
  }

  // UNSAFE_componentWillMount(){
  //     this.setState({
  //         name: this.handleNameChange,
  //         event_date: this.handleEvent_date ,
  //         location_city: this.handleLocationCity,
  //         state: this.handleState,
  //         category:this.handleCategory,
  //         distance:this.handleDistance,
  //         swim_distance:this.handleSwimDistance,
  //         bike_distance:this.handleBikeDistance,
  //         run_distance:this.handleRunDistance,
  //         website:this.handleWebsite,
  //         email:this.email,
  //         summary: this.handleSummary,
  //         race_type:this.handleRaceType,
  //         cycling_type:this.handleCyclingType
  //       })
  //       console.log(this.state)
  //     }

  handleAddEvent(e){
    fetch('/create-event',{
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify({
        "name": this.state.name,
        "event_date": this.state.event_date,
        "location_city": this.state.location_city,
        "state": this.state.state,
        "category": this.state.category,
        "distance": this.state.distance,
        "swim_distance": this.state.swim_distance,
        "bike_distance": this.state.bike_distance,
        "run_distance": this.state.run_distance,
        "website": this.state.website,
        "email": this.state.email,
        "summary": this.state.summary,
        "race_type": this.state.race_type,
        "cycling_type": this.state.cycling_type
      })
    }).catch()
    .then(function(response){
      return response.json()})
    .then((body)=>{
        if(body.success){
          // this.setState: body.message,
          alert("Successfully added race")
        }else{
          alert(body.error)
        }
      })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(this.state.category === nextState.category){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }

  handleNameChange(e){
    this.setState({
      name: e.target.value,
    })
  }

  handleEvent_date(e){
    this.setState({
      event_date: e.target.value,
    })
  }

  handleLocationCity(e){
    this.setState({
      location_city: e.target.value,
    })
  }

  handleState(e){
    this.setState({
      state: e.target.value,
    })
  }

  // let {handleDistance} = this.handleDistance;
  //   let {handleBikeDistance} = this.handleBikeDistance;
  //   let {handleRunDistance} = this.handleRunDistance;
  //   let {handleSwimDistance} = this.handleSwimDistance;
  //   let {handleRaceType} = this.handleRaceType;
  //   let {handleCyclingType} = this.handleCyclingType;
  handleCategory(e){
    if(e.target.value === "running" || e.target.value=== "obstacle"){
      document.getElementById("inputRaceDistance").disabled=false;
      document.getElementById("inputCyclingType").disabled=true;
      document.getElementById("inputSwimDistance").disabled=true;
      document.getElementById("inputBikeDistance").disabled=true;
      document.getElementById("inputRunDistance").disabled=true;
      document.getElementById("inputRaceType").disabled=true;
    }else if(e.target.value === "cycling"){
      document.getElementById("inputRaceDistance").disabled=false;
      document.getElementById("inputCyclingType").disabled=false;
      document.getElementById("inputSwimDistance").disabled=true;
      document.getElementById("inputBikeDistance").disabled=true;
      document.getElementById("inputRunDistance").disabled=true;
      document.getElementById("inputRaceType").disabled=true;
    }else if(e.target.value === "triathlon"){
      document.getElementById("inputRaceDistance").disabled=false;
      document.getElementById("inputCyclingType").disabled=true;
      document.getElementById("inputSwimDistance").disabled=false;
      document.getElementById("inputBikeDistance").disabled=false;
      document.getElementById("inputRunDistance").disabled=false;
      document.getElementById("inputRaceType").disabled=true;
    }else{
      document.getElementById("inputRaceDistance").disabled=true;
      document.getElementById("inputCyclingType").disabled=true;
      document.getElementById("inputSwimDistance").disabled=true;
      document.getElementById("inputBikeDistance").disabled=true;
      document.getElementById("inputRunDistance").disabled=true;
      document.getElementById("inputRaceType").disabled=false;
    }
    this.setState({
      category: e.target.value,
    })
  }

  handleDistance(e){
    this.setState({
      distance: e.target.value,
    })
  }

  handleSwimDistance(e){
    this.setState({
      swim_distance: e.target.value,
    })
  }

  handleBikeDistance(e){
    this.setState({
      bike_distance: e.target.value,
    })
  }

  handleRunDistance(e){
    this.setState({
      run_distance: e.target.value,
    })
  }

  handleWebsite(e){
    this.setState({
      website: e.target.value,
    })
  }

  handleEmail(e){
    this.setState({
      email: e.target.value,
    })
  }

  handleSummary(e){
    this.setState({
      summary: e.target.value,
    })
  }

  handleRaceType(e){
    this.setState({
      race_type: e.target.value,
    })
  }

  handleCyclingType(e){
    this.setState({
      cycling_type: e.target.value,
    })
  }

  render(){
    return(
      <div className="application"> {/*parent div, the whole div to return*/}
        <Helmet>
          <meta charSet="utf-8"/>
          {/*--sets width to device size, sets zoom-->*/}
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>

          <title>Racedb</title>

          {/*// --bootstrap stuff--*/}

        </Helmet>

        <div className="body">
          <div className="content">
            <div className="content-inside">
            <HomeNav username={this.state.username} name={this.state.user_name} token={this.state.token} loggedIn={this.state.loggedIn}/>
            <div>
              {/* START OF FORM */}
              <form className="pl-md-5 col-10 mx-auto" >
              <h3 className="mt-3 pt-5 pb-3">Add Your Race!</h3>


                <div className="form-row">
                  <div className="form-group col-md-5">
                    <label htmlFor="inputEmail4">Name</label>
                    <input type="text" name="nameIn" id="inputEmail4" className="form-control" placeholder="Input race name" onChange={this.handleNameChange} required/> <br/>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputDate4">Date</label>
                    <input type="date" name="event_dateIn" id="inputDate4" className="form-control" pattern="\d{4}-\d{2}-\d{2}" onChange={this.handleEvent_date} required/><br/>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="organizerEmail4">Organizer Email</label>
                    <input type="email" name="emailIn" id="organizerEmail4" className="form-control" placeholder="organizer@email.com" onChange={this.handleEmail} required/><br/>
                  </div>
                </div>


                <div className="form-row">
                <div className="form-group col-md-5">
                  <label htmlFor="inputLocation">Location</label>
                  <input type="text" name="location_cityIn" id="inputLocation" className="form-control" placeholder="Enter Location/City" onChange={this.handleLocationCity} required/><br/>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="inputState">State</label>
                  <input type="text" name="stateIn" id="inputState" className="form-control" placeholder="Input State" onChange={this.handleState} required/><br/>
                </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputCategory">Category</label>
                        <select name="categoryIn" className="form-control" id="inputCategory" placeholder="Input race category" onChange={this.handleCategory} required>
                          <option defaultValue value='running' id="running">Running</option>
                          <option value='cycling' id="cycling">Cycling</option>
                          <option value='triathlon' id="triathlon">Triathlon</option>
                          <option value='obstacle' id="obstacle">Obstacle</option>
                          <option value='other' id="other">Other</option>
                        </select><br/>
                  </div>
                </div>


                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="inputRaceDistance">Race Distance</label>
                    <input type="text" name="distanceIn" id="inputRaceDistance" disabled={false} className="form-control" placeholder="Input race Distance" onChange={this.handleDistance} required/><br/>
                  </div>
                  <div className="form-group col-md-3">
                      <label htmlFor="inputCyclingType">Cycling Type</label>
                      <input type="text" id="inputCyclingType" disabled={true} className="form-control nonRun" name="cycling_typeIn" placeholder="Input cycling type" onChange={this.handleCyclingType} required/><br/>
                  </div> 

                  <div className="form-group col-md-3">
                    <label htmlFor="inputSwimDistance">Swim Distance</label>
                    <input type="text" id="inputSwimDistance" disabled={true} className="form-control nonRun" name="swim_distanceIn" placeholder="Input swim distance" onChange={this.handleSwimDistance} required/><br/>
                  </div> 
                </div>

                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="inputBikeDistance">Bike Distance</label>
                    <input type="text" disabled={true} id="inputBikeDistance" className="form-control nonRun" name="bike_distanceIn" placeholder="Input bike distance" onChange={this.handleBikeDistance} required/><br/>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputRunDistance">Run Distance</label>
                    <input type="text" id="inputRunDistance" disabled={true} className="form-control nonRun" name="run_distanceIn" placeholder="Input run distance" onChange={this.handleRunDistance} required/><br/>
                  </div> 
                  <div className="form-group col-md-3">
                    <label htmlFor="inputRaceType">Race Type</label>
                    <input type="text" name="race_typeIn" disabled={true} id="inputRaceType" className="form-control nonRun" placeholder="Input race type" onChange={this.handleRaceType} required/><br/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-5">
                    <label htmlFor="inputWebsite">Race Website</label>
                    <input type="text" name="websiteIn" id="inputWebsite" className="form-control" placeholder="Input race website" onChange={this.handleWebsite} required/><br/>
                  </div>
                  <div className="form-group col-md-5">
                    <label htmlFor="inputSummary">Race Summary:</label>
                    <input type="text" name="summaryIn" id="inputSummary" className="form-control" placeholder="Input summary" onChange={this.handleSummary} required/><br/>
                  </div> 
                  </div>     


                <button type="submit" className="btn btn-danger featured-btn addEventButton" onClick={this.handleAddEvent}>Submit Race</button>
              </form>
              {/* END OF FORM */}
            </div>  {/* unnamed div enclosing tag */}
          </div>  {/* div class = content-inside enclosing tag */}
        </div>  {/* div class = content enclosing tag */}
      </div>  {/* div class = body enclosing tag */}

      {/*<script>
        document.getElementById('swimDistance').disabled = true;
      </script>
      */}
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    </div>

    );
  }
}
export default AddEvent;
