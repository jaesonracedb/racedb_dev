const mysql = require('mysql')
const jwt = require('jsonwebtoken')

var db = mysqlCon.createConnection({
	host: "localhost",
  user: "racedbadmin",
	password: "letskamown",
	database: "racedb"
});

exports.userLogin = (req, res) => {
  console.log("User Log In");//Debug line
  let sqlQrYStr = "SELECT * FROM user_account WHERE username=";
  let query = mysqlCon.query(sqlQrYStr, (err, result) => {
    if(err) throw err;
    console.log(result);//Debug line
    res.send({
      result: result,
      success: true
    });
  });
}
