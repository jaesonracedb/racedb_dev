import React, {Component} from 'react';

class AddEvent extends Component {
  constructor(){
    super()
    this.state= {
      // id: null,
      name: '',
      event_date: null,
      location_city: '',
      state:'',
      category: '',
      distance: '',
      swim_distance:'',
      bike_distance: '',
      run_distance: '',
      website: '',
      email: '',
      summary: '',
      race_type:'',
      cycling_type: ''
    }
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
    fetch('http://localhost:3001/add-event',{
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
      <div>
        <form>
          <input type="text" name="nameIn" placeholder="Input race name" onChange={this.handleNameChange} required/> <br/>
          <input type="date" name="event_dateIn" pattern="\d{4}-\d{2}-\d{2}" onChange={this.handleEvent_date} required/><br/>
          <input type="text" name="location_cityIn" placeholder="Enter Location/State" onChange={this.handleLocationCity} required/> <br/>
          <input type="text" name="stateIn" placeholder="Input State" onChange={this.handleState} required/><br/>
          <input type="text" name="categoryIn" placeholder="Input race category" onChange={this.handleCategory} required/><br/>
          <input type="text" name="distanceIn" placeholder="Input race Distance" onChange={this.handleDistance} required/><br/>
          <input type="text" name="swim_distanceIn" placeholder="Input swim distance" onChange={this.handleSwimDistance} required/><br/>
          <input type="text" name="bike_distanceIn" placeholder="Input bike distance" onChange={this.handleBikeDistance} required/><br/>
          <input type="text" name="run_distanceIn" placeholder="Input run distance" onChange={this.handleRunDistance} required/><br/>
          <input type="text" name="websiteIn" placeholder="Input race website" onChange={this.handleWebsite} required/><br/>
          <input type="email" name="emailIn" placeholder="Input organizer email" onChange={this.handleEmail} required/><br/>
          <input type="text" name="summaryIn" placeholder="Input summary" onChange={this.handleSummary} required/><br/>
          <input type="text" name="race_typeIn" placeholder="Input race type" onChange={this.handleRaceType} required/><br/>
          <input type="text" name="cycling_typeIn" placeholder="Input cycling type" onChange={this.handleCyclingType} required/><br/>
        </form>
        <button className="addEventButton" type="submit" onClick={this.handleAddEvent}>Submit Race</button>
      </div>
    );
  }
}
export default AddEvent;
