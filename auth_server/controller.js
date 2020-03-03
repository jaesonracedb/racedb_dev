const mysqlCon = require('mysql')
const jwt = require('jsonwebtoken')

var db = mysqlCon.createConnection({
	host: "localhost",
  user: "racedbadmin",
	password: "letskamown",
	database: "racedb"
});

exports.userLogin = (req, res) => {
  console.log("User Log In");//Debug line
	console.log(req.body)
	let sqlQrYStr = "SELECT * FROM user_account WHERE username=\'"+req.body.username + "\';";
	console.log(sqlQrYStr);
	let result = db.query(sqlQrYStr, (err, result) => {
		console.log(result);//Debug line

		//Case 1: querry error or user does not exist
    if(err || result == {}){
			if(err) throw err;
			res.send({
	      result: result,
	      success: true
	    });
		}else if(false){
			//TODO: Case 2: Password does not match the username
		}else{
			//Case 3: username and password are valid
			let auth_token = jwt.sign(result.id, 'THIS_IS_A_SECRET')
			res.send({
	      result: result,
	      success: true,
				token: auth_token
	    });
		}
  });
}
