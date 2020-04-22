import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      filter:'Name'
    }
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(e){
    this.setState({
      filter:e.target.value
    })
  }
  render(){
    var filter = 'Filter';

    return(
      <div>
      <form className="search-bar" id='searchBar'>
        <div className="container ml-3 mt-5">
          <div className="row mx-auto">
            <div className="col-xs-8 col-xs-offset-2">
              <div className="input-group">
                <div className="input-group-btn search-panel">
                <select class="browser-default custom-select" id='select-filter' onChange={this.handleFilter}>
                  <option selected value="name">Name</option>
                  <option value="event_date">Date</option>
                  <option value="distance">Distance</option>
                  <option value="location">Location</option>
                  <option value="category">Type</option>
                </select>
                </div>{/*input-group-btn search-panel*/}
                <input type="text" className="form-control" name="key" id="search" placeholder="Search"/>
                <input type="hidden" className="form-control" name="filter" value={this.state.filter}/>
                <input type="hidden" className="form-control" name="page" value="1"/>
                <button type="submit" class="btn btn-primary mb-2" id="start-search">Search</button>
              </div>{/*input-group*/}
            </div>{/*col-xs-8 col-xs-offset-2*/}
          </div>{/*row mx-auto*/}
        </div>{/*container ml-3 mt-5*/}
        </form>{/*Form*/}
        <a className="ml-4">Search Results for: &lt;filter&gt; &lt;input&gt;</a>
      </div>

    )
    var searchForm = document.getElementById('searchBar');
    function handleSearch(event){
      alert("Hi!!!!!!!!!!!!!!!")
    }
    searchForm.addEventListener('submit', handleSearch);
  }
}
