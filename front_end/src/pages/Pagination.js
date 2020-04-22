import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class Pagination extends Component{
  constructor(props){
    const url = require('url');
    const http = require('http');
    const queryString =window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const currentPage = urlParams.get('page');
    const currentFilter = urlParams.get('filter');
    const currentKey = urlParams.get('key');
    const urlPage = "http://localhost:3000/search?filter="+currentFilter+"&key="+currentKey+"&page=";
    super(props);
    this.state={
      totalCount: props.totalCount,
      totalPages: Math.floor(props.totalCount/10)+1,
      currentPage: props.currentPage,
      url: urlPage,
      hidden: true
    }
    console.log("Curr Items == "+this.state.currentPage)
  }
  UNSAFE_componentDidMount(){
    setTimeout(()=>{
      this.setState({hidden:false});
    }, this.props.wait);
  }
  render(){
    let {url} = this.state;
    let {totalPages} = this.state;
    let {totalCount} = this.state;
    let {currentPage} = this.state;
    let {hidden}= this.state;
    var thisUrl = url+currentPage;
    var firstPage = url+"1";
    var lastPage = url+toString(totalPages);
    var prevPage = url+toString(currentPage-1);
    var prevPrevPage = url+toString(currentPage-2);
    var nextPage = url+toString(currentPage+1);
    var nextNextPage = url+toString(currentPage+2);
    var nextNum = currentPage+1;
    var prevNum = currentPage-1;
    var prevPrevNum = currentPage-2;
    function SinglePage(props){
      return <li className="page-item"><a className="page-link" href={thisUrl}>1</a></li>
    }
    function DoublePage(props){
      if(currentPage===1){
        return <div>
          <li className="page-item"><a className="page-link" href={thisUrl}>1</a></li>
          <li className="page-item"><a className="page-link" href={nextPage}>2</a></li>;
          <li className="page-item"><a className="page-link" href={lastPage}>&gt;</a></li>;
        </div>
      }else{
        return <div>
        <li className="page-item"><a className="page-link" href={firstPage}>&lt;</a></li>;
          <li className="page-item"><a className="page-link" href={prevPage}>1</a></li>
          <li className="page-item"><a className="page-link" href={thisUrl}>2</a></li>;
        </div>
      }
    }
    function MultiPage(props){

      if(currentPage===1){
        return <div>
          <li className="page-item"><a className="page-link" href={thisUrl}>1</a></li>
          <li className="page-item"><a className="page-link" href={nextPage}>2</a></li>
          <li className="page-item"><a className="page-link" href={nextNextPage}>3</a></li>
          <li className="page-item"><a className="page-link" href={nextPage}>&gt;</a></li>
          <li className="page-item"><a className="page-link" href={lastPage}>&gt;&gt;</a></li>
        </div>
      }else if(currentPage===lastPage){
        return <div>
        <li className="page-item"><a className="page-link" href={nextPage}>&lt;</a></li>
        <li className="page-item"><a className="page-link" href={lastPage}>&lt;&lt;</a></li>
          <li className="page-item"><a className="page-link" href={prevPrevPage}>{prevPrevNum}</a></li>
          <li className="page-item"><a className="page-link" href={prevPage}>{prevNum}</a></li>
          <li className="page-item"><a className="page-link" href={thisUrl}>{currentPage}</a></li>
        </div>
      }else{
        return <div>
        <li className="page-item"><a className="page-link" href={nextPage}>&lt;</a></li>
        <li className="page-item"><a className="page-link" href={lastPage}>&lt;&lt;</a></li>
        <li className="page-item"><a className="page-link" href={prevPage}>{prevNum}</a></li>
        <li className="page-item"><a className="page-link" href={thisUrl}>{currentPage}</a></li>
        <li className="page-item"><a className="page-link" href={nextPage}>{nextNum}</a></li>
        <li className="page-item"><a className="page-link" href={nextPage}>&gt;</a></li>
        <li className="page-item"><a className="page-link" href={lastPage}>&gt;&gt;</a></li>
        </div>
      }
    }
    function PrintPages(props){
      console.log("totalPages == "+totalPages)
      console.log("Total Items == "+totalCount)
      if(hidden){return <div/>}
      else{
      if(totalPages===1){
        return <SinglePage/>
      }else if(totalPages === 2){
        return <DoublePage/>
      }else{
        return <MultiPage/>
      }
      }
    }
    return(
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <PrintPages/>
        </ul>
      </nav>
    )
  }

}
Pagination.propTypes={
  wait: PropTypes.number.isRequired
};
