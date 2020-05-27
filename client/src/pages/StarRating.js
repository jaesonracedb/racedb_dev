import React, {Component,useState} from 'react';
import {FaStar}from 'react-icons/fa';
import './css/star.css';

export default class StarRating extends Component {
    constructor(props){
        super(props);
        const dotenv = require('dotenv')
        dotenv.config({ path: '../../../' })
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
            event_id: idQuery,
            username: props.username
        }
        this.handleRating= this.handleRating.bind(this);
        this.handleHover = this.handleHover.bind(this);
        
        // add fetch rating here
        fetch(webPage+':'+PORT+'/token-info/',{
            headers:{
                'Authorization': 'Bearer '+this.state.token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res=>{return res.json()})
        .then((body,err)=>{
            console.log("Welcome: "+ body.name);
            if(err){
                console.log("Token not valid")
                this.setState({loggedIn:false});
            }else{
                console.log("Logged In")
                this.setState({
                name: body.name,
                loggedIn: true,
                username: body.username
                })
                fetch(webPage+':'+PORT+'/get-user-rating/',{
                    method:"POST",
                    headers:{
                        "Content-Type": 'application/json',
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        event_id:this.state.event_id,
                        username: body.username
                    })  
                })
                .then(res=>{return res.json()})
                .then((body1,err)=>{
                    console.log("RACE RATING IS: "+body1)
                    this.setState({
                        rating: body1.total,
                    })
                })
            } 
        })
    }
    handleHover(e){
        this.setState({
            hover: e.target.value
        })
    }
    handleRating(e){
        var PORT = process.env.PORT || 80;
        var webPage = "https://race-db.herokuapp.com"
        this.setState({
            rating: e.target.value
        })
        fetch(webPage+':'+PORT+'/add-like',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                event_id: this.state.event_id,
                rating: e.target.value
            })

        })
    }
    render(){
        return(
            <div>
                {[...Array(5)].map((star,i)=>{
                    const ratingValue = i+1;
                    return(
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                value={ratingValue} 
                                onClick={this.handleRating}
                                className="radioStar"
                                />
                            <FaStar 
                                className="star" 
                                size={this.state.size}
                                color={ratingValue <= (this.state.hover || this.state.rating) ? "#ffc107":"#e4e5e9"}
                                onMouseEnter={()=> this.setState({
                                    hover: ratingValue
                                })}
                                onMouseLeave={()=>this.setState({
                                    hover: null
                                })}
                            />
                        </label>
                    )
                })}
            </div>
        )
    }
}