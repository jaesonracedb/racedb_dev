import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Footer extends Component{
  render(){
    return(
      <div>
      <Helmet>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

            <title>Racedb</title>

            {/*// --bootstrap stuff--*/}

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
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </div>
    )
  }
}
