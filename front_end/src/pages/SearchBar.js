import React, {Component} from 'react';

export default class SearchBar extends Component{
  render(){
    return(
      <div>
        <div className="container ml-3 mt-5">
          <div className="row mx-auto">
            <div className="col-xs-8 col-xs-offset-2">
              <div className="input-group">
                <div className="input-group-btn search-panel">
                  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <span id="search_concept">All</span> <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu scrollable-dropdown" role="menu">
                    <li><a href="#">Name</a></li>
                    <li><a href="#">Date</a></li>
                    <li><a href="#">Distance</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Type</a></li>
                  </ul>
                </div>
                <input type="hidden" name="search_param" value="all" id="search_param"/>
                <input type="text" className="form-control" name="x" id="search" placeholder="Search"/>
              </div>
            </div>
          </div>
        </div>

        <a className="ml-4">Search Results for: &lt;filter&gt; &lt;input&gt;</a>
      </div>

    )
  }
}
