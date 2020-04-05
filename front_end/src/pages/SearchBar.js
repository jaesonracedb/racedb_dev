import React, {Component} from 'react';

export default class SearchBar extends Component{
  render(){
    return(
      <div>
        <div class="container ml-3 mt-5">
          <div class="row mx-auto">
            <div class="col-xs-8 col-xs-offset-2">
              <div class="input-group">
                <div class="input-group-btn search-panel">
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <span id="search_concept">All</span> <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu scrollable-dropdown" role="menu">
                    <li><a href="#">Name</a></li>
                    <li><a href="#">Date</a></li>
                    <li><a href="#">Distance</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Type</a></li>
                  </ul>
                </div>
                <input type="hidden" name="search_param" value="all" id="search_param"/>
                <input type="text" class="form-control" name="x" id="search" placeholder="Search"/>
              </div>
            </div>
          </div>
        </div>

        <a class="ml-4">Search Results for: &lt;filter&gt; &lt;input&gt;</a>
      </div>

    )
  }
}
