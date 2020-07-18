import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import styles from "./css/main.css";
export default class SearchBar extends Component{
  constructor(props){
    super(props);
    const dotenv = require('dotenv')
    dotenv.config({ path: '../../../' })
    const url = require('url');
    const http = require('http');
    const queryString =window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const loggedInQuery = urlParams.get('loggedIn');
    const tokenQuery = urlParams.get('token');
    var PORT = process.env.PORT || 3001;

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
    const searchUrl = "/search?page=1&loggedIn="+loggedIn+"&token="+token
    return(
      <div>
    <Helmet >
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    </Helmet>
      <form className="search-bar"  onSubmit={handleSearch}>
        {/*<div className="container ml-3 mt-5">*/}
          <div className="row mx-auto">
            <div className="col-xs-8 col-xs-offset-2" id="searchForm-col">
              <div className="input-group" id='searchBar'>
                <div className="input-group-btn search-panel" id='select-filter'>
                <select className="browser-default custom-select"  onChange={this.handleFilter}>
                  <option defaultValue value="name">Name</option>
                  <option value="event_date">Date</option>
                  <option value="distance">Distance</option>
                  <option value="location">Location</option>
                  <option value="category">Category</option>
                </select>
                </div>{/*input-group-btn search-panel*/}
                <input type="text" className="form-control"  onChange={this.handleKey} name="key" id="search-key" placeholder="Search"/>
                <input type="hidden" className="form-control"  name="filter" value={this.state.filter}/>
                <input type="hidden" className="form-control" name="page" value="1"/>
                <button type="submit" className="btn btn-primary mb-2" id="start-search"><i className="fa fa-search"></i></button>
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
