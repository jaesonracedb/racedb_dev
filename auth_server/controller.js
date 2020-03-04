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
			console.log("Case 1, user not found\n");
			if(err) throw err;
			res.send({
	      result: result,
	      success: false
	    });
		}else if(!(req.body.password === result.password)){
			console.log("Case 2, invalid password\n")
			res.send({
	      result: result,
	      success: false
	    });
			//TODO: Do hashed password check here
		}else{
			//Case 3: username and password are valid
			console.log("Case 3, login success\n");
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
