const mysqlCon = require('mysql')
const jwt = require('jsonwebtoken')
const usr_cntrllr = require('./controllers/user_controller')

exports.userLogin = usr_cntrllr.userLogin;
