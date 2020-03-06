import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Homepage from "./pages/Homepage";

export default class App extends Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Homepage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
