import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Homepage from "./pages/Homepage";
import AddEvent from "./pages/AddEvent";
import Archive from "./pages/Archive";
import Listing from "./pages/listing";
import Login from "./pages/login-signup";
import Signup from "./pages/Signup";

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
