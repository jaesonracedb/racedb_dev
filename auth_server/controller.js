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
	//TODO: Add password to querry when the password fieldhas been changed
	console.log(sqlQrYStr);
	let result = db.query(sqlQrYStr, (err, result) => {
		console.log(result);//Debug line

		//Case 1: querry error or user does not exist
    if(err || !result.length){
			console.log("Case 1\n");
			if(err) throw err;
			res.send({
	      result: result,
	      success: true
	    });
		}else if(false){
			console.log("Case 2\n")
			//TODO: Case 2: Password does not match the username
		}else{
			//Case 3: username and password are valid
			console.log("Case 3\n");
			let payload = {
				_id: result._id
			}
			let auth_token = jwt.sign(payload, 'THIS_IS_A_SECRET')
			res.send({
	      result: result,
	      success: true,
				token: auth_token
	    });
		}
  });
}
