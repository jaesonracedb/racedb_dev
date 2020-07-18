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
    this.setState({
      filter:e.target.value
    })
  }
  render(){
    var filter = 'Filter';

    return(
      <div>
      <form className="search-bar">
        <div className="container ml-2 mt-4">
          <div className="row mx-auto">
            <div className="col-xs-12">
              <div className="input-group">
                <div className="input-group-btn search-panel" id='select-filter'>
                <select class="browser-default custom-select" onChange={this.handleFilter}>
                  <option defaultValue value="name">Name</option>
                  <option value="event_date">Date</option>
                  <option value="distance">Distance</option>
                  <option value="location">Location</option>
                  <option value="category">Category</option>
                </select>
                </div>{/*input-group-btn search-panel*/}
                <input type="text" className="form-control" name="key" id="search" placeholder="Search"/>
                <input type="hidden" className="form-control" name="filter" value={this.state.filter}/>
                <input type="hidden" className="form-control" name="page" value="1"/>
                <button type="submit" class="btn btn-primary mb-2" id="start-search"><i className="fa fa-search"></i></button>
              </div>{/*input-group*/}
            </div>{/*col-xs-8 col-xs-offset-2*/}
          </div>{/*row mx-auto*/}
        </div>{/*container ml-3 mt-5*/}
        </form>{/*Form*/}
        <a className="ml-4" id="searchbarSubtext">Search Results for: &lt;filter&gt; &lt;input&gt;</a>
      </div>

    )
  }
}
