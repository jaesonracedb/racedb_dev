const mysqlCon = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require(__dirname+ '/../db_config/mysql');
var Storage = require('dom-storage');
var localStorage = new Storage('./session_storage.json', { strict: false, ws: '  ' });


exports.createUser = async (req,res) =>{
	const {username,password,email,lastName,firstName,middleInit}= req.body;
	const queryString = "INSERT INTO user_account (username,psswrd,lname,fname,minit,email) values (?,?,?,?,?,?)"
	try{
		const salt = await bcrypt.genSalt()
		console.log("applying salt");
		const hashedPass = await bcrypt.hash(password, salt)
		console.log(" applying salt2");
		console.log('Creating User');
		db.query(queryString,[username,hashedPass,lastName,firstName,middleInit,email],(err,results)=>{
			if(err){
				console.log(err);
				results.sendStatus(500);
			}else{
				console.log("User Added")
				res.sendStatus(200);
			}
		})
	}catch{
		console.log("error applying salt");
		res.sendStatus(500);
	}
}
exports.userLogin = async (req, res) => {
  	console.log("User Log In");//Debug line
	console.log(req.body)
	try{
			//let sqlQrYStr = "SELECT * FROM user_account WHERE username=\'"+req.body.username + "\';";
 		let queryString = "SELECT * from user_account where username = ? LIMIT 1;";
			//TODO: Add password to querry when the password fieldhas been changed
		db.query(queryString,[req.body.username],(err, result) => {
			//Case 1: querry error or user does not exist
		console.log("debug line 1");
		if(err || !result.length){
			console.log("Case 1, user not found\n");
			if(err) throw err;
			res.send({
				result: result,
				success: false,
				status: 400,
				message: "User not found"
			});
		}else{
			console.log("debug line 1");
			console.log(req.body.password+" : "+ result[0].psswrd);
			bcrypt.compare(req.body.password,result[0].psswrd, (err1,res1)=>{
				if(err1){
					res1.sendStatus(500);
				}
				if(res1){
					console.log("Case 3, login success\n");
					let payload = {
						_id: result._id
					}
					let auth_token = jwt.sign(payload, 'THIS_IS_A_SECRET')
					res.send({
						success: true,
						token: auth_token
					});
				}else{
					console.log("invalid password\n")
					res.send({
						result: result,
						success: false,
						message: "Passwords do not match"
					});

				}
			})
		}
		});
	}catch{
		res.sendStatus(500);
	}
}
