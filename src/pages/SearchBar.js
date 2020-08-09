import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      filter:'name'
    }
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(e){
    if(e.target.value === "date"){
      document.getElementById("searchBox").placeholder="YYY-MM-DD"
    }
    else{
      document.getElementById("searchBox").placeholder="Search"
    }
    this.setState({
      filter:e.target.value
    })
  }

  render(){

    return(
      <div>
      <form className="search-bar">
        <div className="container ml-2 my-4">
          <div className="row mx-auto">
            <div className="col-xs-12">
              <div className="input-group">
                <div className="input-group-btn" id='select-filter'>
                <select class="browser-default custom-select" onChange={this.handleFilter}>
                  <option defaultValue value="name">Name</option>
                  <option value="date">Date</option>
                  <option value="distance">Distance</option>
                  <option value="location">Location</option>
                  <option value="category">Category</option>
                </select>
                </div>{/*input-group-btn search-panel*/}
                <input type="text" className="form-control" name="key" id="searchBox" placeholder="Search"/>
                <input type="hidden" className="form-control" name="filter" value={this.state.filter}/>
                <input type="hidden" className="form-control" name="page" value="1"/>
                <button type="submit" class="btn btn-primary mb-2" id="start-search"><i className="fa fa-search"></i></button>
              </div>{/*input-group*/}
            </div>{/*col-xs-8 col-xs-offset-2*/}
          </div>{/*row mx-auto*/}
        </div>{/*container ml-3 mt-5*/}
        </form>{/*Form*/}
      </div>

    )
  }
}
