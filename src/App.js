import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Homepage from "./pages/Homepage";
import AddEvent from "./pages/AddEvent";
import Archive from "./pages/Archive"
import Listing from "./pages/listing"
import Login_Signup from "./pages/login-signup"
import Signup from "./pages/signup"

export default class App extends Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Homepage} />
            <Route exact={true} path="/add-event" component={AddEvent}/>
            <Route exact={true} path="/search" component={Archive}/>
            <Route exact={true} path="/listing" component={Listing}/>
            <Route exact={true} path="/login" component={Login_Signup}/>
            <Route exact={true} path="/signup" component={Signup}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
