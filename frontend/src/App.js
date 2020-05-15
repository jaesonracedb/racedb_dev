import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Homepage from "./pages/Homepage";
import AddEvent from "./pages/AddEvent";
<<<<<<< HEAD
import Archive from "./pages/Archive"
import Listing from "./pages/listing"
import Login from "./pages/login-signup"
import Signup from "./pages/Signup"
=======
import Archive from "./pages/Archive";
import Listing from "./pages/listing";
import Login from "./pages/login-signup";
import Signup from "./pages/Signup";
>>>>>>> 19cf805d0fd6f2b17914447eec27f7ba7e1b37b0

export default class App extends Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Homepage} />
            <Route exact={true} path="/add-event" component={AddEvent}/>
            <Route exact={true} path="/search" component={Archive}/>
            <Route exact={true} path="/login" component={Login}/>
            <Route exact={true} path="/listing" component={Listing}/>
            <Route exact={true} path="/signup" component={Signup}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
