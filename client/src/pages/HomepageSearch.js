import React, {Component} from 'react';
import styles from "./css/main.css";
export default class SearchBar extends Component{
  constructor(props){
    const url = require('url');
    const http = require('http');
    const queryString =window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const loggedInQuery = urlParams.get('loggedIn');
    const tokenQuery = urlParams.get('token');
    super(props);
    this.state={
      filter:'name',
      key:'',
      loggedIn: loggedInQuery,
      token: tokenQuery 
    }
    this.handleFilter = this.handleFilter.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  handleKey(e){
    this.setState({
      key: e.target.value
    })
  }
  handleFilter(e){
    this.setState({
      filter:e.target.value
    })
  }

  render(){
    let {filter}= this.state;
    let {key}=this.state;
    const {loggedIn} = this.state;
    const {token} = this.state;
    const searchUrl = "http://localhost:3000/search?page=1&loggedIn="+loggedIn+"&token="+token
    return(
      <div>
      <form className="search-bar"  onSubmit={handleSearch}>
        {/*<div className="container ml-3 mt-5">*/}
          <div className="row mx-auto">
            <div className="col-xs-8 col-xs-offset-2" id="searchForm-col">
              <div className="input-group" id='searchBar'>
                <div className="input-group-btn search-panel" id='select-filter'>
                <select class="browser-default custom-select"  onChange={this.handleFilter}>
                  <option selected value="name">Name</option>
                  <option value="event_date">Date</option>
                  <option value="distance">Distance</option>
                  <option value="location">Location</option>
                  <option value="category">Category</option>
                </select>
                </div>{/*input-group-btn search-panel*/}
                <input type="text" className="form-control"  onChange={this.handleKey} name="key" id="search-key" placeholder="Search"/>
                <input type="hidden" className="form-control"  name="filter" value={this.state.filter}/>
                <input type="hidden" className="form-control" name="page" value="1"/>
                <button type="submit" class="btn btn-primary mb-2" id="start-search">Search</button>
              </div>{/*input-group*/}
            </div>{/*col-xs-8 col-xs-offset-2*/}
          </div>{/*row mx-auto*/}
        {/*</div> container ml-3 mt-5*/}
        </form>{/*Form*/}
      </div>

    )
    var searchForm = document.getElementById('searchBar');
    function handleSearch(event){
      event.preventDefault();
      var newsearchUrl = searchUrl+"&filter="+filter+"&key="+key;
      return window.location.href= newsearchUrl;

    }
    // function handleEnter(event) {
    //     if (event.keyCode === 13) {
    //       alert('pageResults')
    //       event.preventDefault();
    //       return {handleSearch};
    //     }
    // }

    // searchForm.addEventListener('submit', handleSearch);
  }
}
