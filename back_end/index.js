const mysql = require('mysql');
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// var con = mysql.createConnection({
// 	host: "localhost",
// 	user: "racedbadmin",
// 	password: "letskamown",
//   database: "racedb"
// });
//
// con.connect((err) => {
// 	if(err){
//     throw err;
//   }
// 	console.log("Connected to mysql");
// });

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())

// CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods' ,'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Access-Control-Allow-Methods,Origin,Accept,Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})
app.options('*', function (req,res) { res.sendStatus(200); });

// Declare Routes
require('./router/router')(app)

app.listen(3001, (err) => { if (!err) { console.log('Server listening at port 3001') } } )
