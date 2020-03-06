import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Homepage from "./pages/Homepage";
import AddEvent from "./pages/AddEvent";

export default class App extends Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Homepage} />
            <Route exact={true} path="/add-event" component={AddEvent}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
