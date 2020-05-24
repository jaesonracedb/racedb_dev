import React, {Component,useState} from 'react';
import {FaStar}from 'react-icons/fa';
import './css/star.css';

export default class StaticStar extends Component {
    constructor(props){
        super(props);
        const url = require('url');
        const http = require('http');
        const queryString =window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const loggedInQuery = urlParams.get('loggedIn');
        const tokenQuery = urlParams.get('token');
        const idQuery = urlParams.get('id');
        var PORT = process.env.PORT || 80;
        var webPage = "https://race-db.herokuapp.com"
        this.state={
            size: props.size,
            rating: null,
            hover: null,
            loggedIn:loggedInQuery,
            token: tokenQuery,
            event_id: idQuery
        }
        fetch(webPage+':'+PORT+'/get-rating',{
            method:"POST",
            headers:{
                "Content-Type": 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify({
                event_id:this.state.event_id
            })  
        })
        .then(res=>{
            console.log("SUCCESS?")
            return res.json()})
        .then((body,err)=>{
            console.log("RACE RATING IS: "+body)
            if(err){
                console.log("Failed to get rating")
            }else{
                console.log("SUCCESSFULLY RETRIEVED RATING" + body.total)
                this.setState({
                    rating: body.total
                })
            }
        })
        // add fetch rating here
    }
    render(){
        return(
            <div>
                {[...Array(5)].map((star,i)=>{
                    const ratingValue = i+1;
                    return(
                        <label>
                            <FaStar 
                                className="star" 
                                size={this.state.size}
                                color={ratingValue <= (this.state.rating) ? "#ffc107":"#e4e5e9"}
                            />
                        </label>
                    )
                })}
            </div>
        )
    }
}