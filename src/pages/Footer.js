import React, {Component} from 'react';
import Helmet from 'react-helmet';
import logoRed from "./imgs/racedblogo-02-1024x640.png";

export default class Footer extends Component{
  render(){
    return(
      <div>
      <Helmet>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta http-equiv="x-ua-compatible" content="ie=edge"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
          <link href="css/bootstrap.min.css" rel="stylesheet"/>
          <link href="css/mdb.min.css" rel="stylesheet"/>
          <link href="css/style.css" rel="stylesheet"/>  

            <title>Racedb</title>

            {/*// --bootstrap stuff--*/}
      </Helmet>
      <footer className="page-footer font-small stylish-color-dark pt-4" id="homepagefooter">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="font-weight-bold text-uppercase">Footer Content</h5>
                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.</p>
                </div>
                <hr className="clearfix w-100 d-md-none"/>
                <div className="col-md-3 mb-md-0 mb-3">
                   <h5 className="font-weight-bold text-uppercase">Links</h5>
                    <ul className="list-unstyled">
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
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="font-weight-bold text-uppercase">Links</h5>
                    <ul className="list-unstyled">
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
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="http://racedb.org.com/">Racedb.org</a>
          </div>

      </footer>
      </div>
    )
  }
}
