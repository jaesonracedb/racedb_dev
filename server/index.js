require('dotenv').config()
var PORT = process.env.PORT || 80;
const mysql = require('mysql');
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path');
const port = process.env.PORT || 3001;

var con = require(__dirname+ '/db_config/mysql');

con.connect((err) => {
	if(err){
    console.log(err);
  }
	console.log("Connected to mysql");
});

const app = express()
// app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser())

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static(path.join(__dirname,'client/build')));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', __dirname)
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

app.listen(port, () => console.log(`Server listening at port ${port}`));
