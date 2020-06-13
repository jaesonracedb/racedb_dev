import React, {Component} from 'react';
import Helmet from 'react-helmet';
import logoRed from "./imgs/racedblogo-02-1024x640.png";

export default class Footer extends Component{
  render(){
    return(
      <div className="footer">
      <footer className="page-footer font-small pt-4">


      <div className="grayBlock" id="homepagefooter">
        <div className="row">
          <div className="col-md-4 mr-auto">
            <img src={logoRed} className="mx-auto d-block bg-dark mt-5" id="someLogo" alt="logo" style={{height:"400px",width:"640px"}}/>
          </div>
          <div className="col-md-4 mr-auto my-auto" align="center">
            <h4 style={{color:"white"}}> 1 - Create </h4>
            <p style={{color:"white"}}> Create a listing by adding your race to our directory. </p><br/>
            <h4 style={{color:"white"}}> 2 - Promote </h4>
            <p style={{color:"white"}}> Promote your race by advertising it through our site! </p><br/>
            <h4 style={{color:"white"}}> 3 - Claim </h4>
            <p style={{color:"white"}}> Claim your race if it already exists within our directory. </p><br/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur
              adipisicing elit.</p>
          </div>
          <div class="col-md-2 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>

      </div>


      </footer>
      </div>
    )
  }
}
