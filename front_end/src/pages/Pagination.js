import React, {Component} from 'react';

export default class Pagination extends Component{
  render(){
    return(
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="http://localhost:3000/search?page=1">1</a></li>
          <li className="page-item"><a className="page-link" href="http://localhost:3000/search?page=2">2</a></li>
          <li className="page-item"><a className="page-link" href="http://localhost:3000/search?page=3">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    )
  }
}
