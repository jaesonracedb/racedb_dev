import React, {PureComponent} from 'react';
import {Helmet} from "react-helmet";
import logoRDB from "./imgs/racedblogo-04-scaled.png";

class AddEvent extends PureComponent {
  constructor(){
    super()
    const url = require('url');
    const http = require('http');
    const queryString =window.location.search;
    console.log("url"+queryString);
    const urlParams = new URLSearchParams(queryString)
    const loggedInQuery = urlParams.get('loggedIn');
    const tokenQuery = urlParams.get('token');
    var PORT = process.env.PORT || 3001;
    var webPage = "https://race-db.herokuapp.com"
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
    fetch(webPage+":"+PORT+"/token-info/",{
      headers:{
        'Authorization': 'Bearer '+this.state.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res=>{return res.json()})
    .then((body,err)=>{
      console.log("Welcome: "+ body.name);
      if(err){
        console.log("Token not valid")
        this.setState({loggedIn:false});
      }else{
        console.log("Logged In")
        this.setState({
          name: body.user_name,
          username: body.username
        })
      } 
    })
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
    fetch(webPage+':'+PORT+'/add-event',{
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
    })
    .then(function(response){
      return response.json()})
    .then((body)=>{
        if(body.statusCode ===200){
          // this.setState: body.message,
        }else{
        }
      })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.category === nextState.category){
      return false;
    }else{
      return true;
    }
  }

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

  handleCategory(e){
    this.setState({
      category: e.target.value,
    })
    console.log("change this.state.category: "+ this.state.category);
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
    let {category}=this.state;
    let {handleBikeDistance} = this.handleBikeDistance;
    let {handleRunDistance} = this.handleRunDistance;
    let {handleDistance} = this.handleDistance;
    let {handleSwimDistance} = this.handleSwimDistance;
    let {handleRaceType} = this.handleRaceType;
    let {handleCyclingType} = this.handleCyclingType;
    function DisplayTritahlonFields(){
      return <div>
      <div class="row ml-4">
        <div class="col-xs ml-3">
          <a> Race Distance: </a>
        </div>
        <div class="col-lg-2 ml-3">
          <input type="text" name="distanceIn" class="form-control" placeholder="Input race Distance" onChange={handleDistance} required/><br/>
        </div>
        <div class="col-xs ml-3">
          <a> Swim Distance: </a>
        </div>
        <div class="col-lg-2 ml-3">
          <input type="text" id="swimDistance" class="form-control" name="swim_distanceIn" placeholder="Input swim distance" onChange={handleSwimDistance} required/><br/>
        </div>
      </div>
      <div class="row ml-4">
        <div class="col-xs ml-3">
          <a> Bike Distance: </a>
        </div>
        <div class="col-lg-2 ml-3">
          <input type="text" id="bikeDistance" class="form-control" name="bike_distanceIn" placeholder="Input bike distance" onChange={handleBikeDistance} required/><br/>
        </div>
        <div class="col-xs ml-3">
          <a> Run Distance: </a>
        </div>
        <div class="col-lg-2 ml-3">
          <input type="text" id="runDistance" class="form-control" name="run_distanceIn" placeholder="Input run distance" onChange={handleRunDistance} required/><br/>
        </div>
      </div>
      </div>
    }
    function DisplayObstacleRunningFields(){
      return <div class="row ml-4">
        <div class="col-xs ml-3">
          <a> Race Distance: </a>
        </div>
        <div class="col-lg-2 ml-3">
          <input type="text" name="distanceIn" class="form-control" placeholder="Input race Distance" onChange={handleDistance} required/><br/>
        </div>
        </div>
    }
    function DisplayOtherFields(){
      return <div class="row ml-4">
      <div class="col-xs ml-3">
        <a> Race Type: </a>
      </div>
      <div class="col-lg-2 ml-3">
        <input type="text" name="race_typeIn" class="form-control" placeholder="Input race type" onChange={handleRaceType} required/><br/>
      </div>
        </div>
    }
    function DisplayCyclingFields(){
      return <div class="row ml-4">
        <div class="col-xs ml-3">
          <a> Race Distance: </a>
        </div>
        <div class="col-lg-2 ml-3">
          <input type="text" name="distanceIn" class="form-control" placeholder="Input race Distance" onChange={handleDistance} required/><br/>
        </div>
        <div class="col-xs ml-3">
          <a> Cycling Type: </a>
        </div>
        <div class="col-lg-2 ml-3">
          <input type="text" id="CyclingType" class="form-control" name="cycling_typeIn" placeholder="Input cycling type" onChange={handleCyclingType} required/><br/>
        </div>
        </div>
    }
    function DisplayCategoryFields(props){
      if(props.currentCategory==='triathlon'){
        return <DisplayTritahlonFields/>
      }else if(props.currentCategory==='obstacle' || props.currentCategory==='running'){
        return <DisplayObstacleRunningFields/>
      }else if(props.currentCategory==='other'){
        return <DisplayOtherFields/>
      }else if(props.currentCategory==='cycling'){
        return <DisplayCyclingFields/>
      }
        else{
          return <div/>
        }
    }
    return(
      <div class="application"> {/*parent div, the whole div to return*/}
        <Helmet>
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
        </Helmet>

        <div class="body">
          <div class="content">
            <div class="content-inside">

            <HomeNav username={this.state.username} name={this.state.user_name} token={this.state.token} loggedIn={this.state.loggedIn}/>


            <div>
              <h3 class="mt-3 ml-5">Add Your Race!</h3>
              <br/>
              <form>
                <div class="row ml-4">
                  <div class="col-xs ml-3">
                    <a>Name:</a>
                  </div>
                  <div class="col-lg-4">
                    <input type="text" name="nameIn" class="form-control" placeholder="Input race name" onChange={this.handleNameChange} required/> <br/>
                  </div>
                  <div class="col-xs ml-3">
                    <a>Date: </a>
                  </div>
                  <div class="ml-3">
                    <input type="date" name="event_dateIn" class="form-control" required pattern="\d{4}-\d{2}-\d{2}" onChange={this.handleEvent_date} required/><br/>
                  </div>
                  <div class="col-xs ml-3">
                    <a> Organizer Email: </a>
                  </div>
                  <div class="col-lg-3 ml-3">
                    <input type="email" name="emailIn" class="form-control" placeholder="organizer@email.com" onChange={this.handleEmail} required/><br/>
                  </div>
                </div>
                <div class="row ml-4">
                  <div class="col-xs ml-3">
                    <a> Location: </a>
                  </div>
                  <div class="col-lg-3 ml-3">
                    <input type="text" name="location_cityIn" class="form-control" placeholder="Enter Location/City" onChange={this.handleLocationCity} required/><br/>
                  </div>
                  <div class="col-xs ml-3">
                    <a> State: </a>
                  </div>
                  <div class="col-lg-3 ml-3">
                    <input type="text" name="stateIn" class="form-control" placeholder="Input State" onChange={this.handleState} required/><br/>
                  </div>
                </div>

                <div class="row ml-4">
                <div class="col-xs ml-3">
                <a>Category: </a>
                </div>
                <div class="col-lg-3 ml-3">
                <select name="categoryIn" class="form-control" placeholder="Input race category" onChange={this.handleCategory} required>
                <option selected value='running' id="running">Running</option>
                <option value='cycling' id="cycling">Cycling</option>
                <option value='triathlon' id="triathlon">Triathlon</option>
                <option value='obstacle' id="obstacle">Obstacle</option>
                <option value='other' id="other">Other</option>
                </select><br/>
                </div>
                </div>
                <DisplayCategoryFields currentCategory={this.state.category}/>

                <div class="row ml-4">
                  <div class="col-xs ml-3">
                    <a> Race Website: </a>
                  </div>
                  <div class="col-lg-4 ml-3">
                    <input type="text" name="websiteIn" class="form-control" placeholder="Input race website" onChange={this.handleWebsite} required/><br/>
                  </div>
                </div>
                <div class="row ml-4">
                  <div class="col-xs ml-3">
                    <a> Race Summary: </a>
                  </div>
                  <div class="col-lg-4 ml-3">
                    <input type="text" name="summaryIn" class="form-control" placeholder="Input summary" onChange={this.handleSummary} required/><br/>
                  </div>
                </div>
              </form>
              <div class="row ml-4">
                <button className="addEventButton" type="submit" class="btn btn-primary" onClick={this.handleAddEvent}>Submit Race</button>
              </div>
            </div>  {/* unnamed div enclosing tag */}
          </div>  {/* div class = content-inside enclosing tag */}
        </div>  {/* div class = content enclosing tag */}
      </div>  {/* div class = body enclosing tag */}

      {/*<script>
        document.getElementById('swimDistance').disabled = true;
      </script>
      */}

    </div>

    );
  }
}
export default AddEvent;
