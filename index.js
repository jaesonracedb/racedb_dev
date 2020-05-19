const mysql = require('mysql');
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const pino = require('express-pino-logger')();
const cors = require('cors')

var con = require(__dirname+ '/db_config/mysql');

con.connect((err) => {
	if(err){
    console.log(err);
  }
	console.log("Connected to mysql");
});

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser())
app.use(pino)


// CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods' ,'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Access-Control-Allow-Methods,Origin,Accept,Content-Type','Authorization')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})
app.use(cors())
app.options('*', cors())
app.options('*', function (req,res) { res.sendStatus(200); });

// Declare Routes
require('./router/router')(app)

app.listen(3001, (err) => { if (!err) { console.log('Server listening at port 3001') } } )