const mysqlCon = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require(__dirname+ '/../db_config/mysql');
var Storage = require('dom-storage');
require('dotenv').config()
var localStorage = new Storage('./session_storage.json', { strict: false, ws: '  ' });
// add to db alter table user_account add rToken varchar(250);

exports.createUser = async (req,res) =>{
	const {username,password,email,lastName,firstName,middleInit}= req.body;
	const queryString = "INSERT INTO user_account (username,psswrd,lname,fname,minit,email) values (?,?,?,?,?,?)"
	const ifEmailExist = "select COUNT(*) as emailCount from user_account where email REGEXP(?)"
	try{
		const salt = await bcrypt.genSalt()
		console.log("applying salt");
		const hashedPass = await bcrypt.hash(password, salt)
		console.log(" applying salt2");
		const emailRegEx = '\^' + email +'\$';
		db.query(ifEmailExist,[emailRegEx],(errV,resV)=>{
			console.log(resV[0].emailCount)
			if(errV){
				console.log("error validating email");
				console.log(errV);
				return res.sendStatus(500);
			}else{
				if(resV[0].emailCount >0 ){
					console.log('email Exists!');
				}else{
					db.query(queryString,[username,hashedPass,lastName,firstName,middleInit,email],(err,results)=>{
						if(err){
							console.log('Creating User');
							console.log(err);
							return res.sendStatus(500);
						}else{
							console.log("User Added")
							return res.sendStatus(200);
						}
					})
				}
			}
		})
	}catch{
		console.log("error applying salt");
		res.sendStatus(500);
	}
}
exports.sampleAuthenticate = (req,res)=>{
	console.log('Authenticated')
	const queryString = 'SELECT * FROM user_account where username REGEXP(?) LIMIT 1;';
	const usernameRegEx = '\^' + req.user.username  + '\$'
	console.log("debugging")
	console.log("Welcome, "+req.user.name);
	db.query(queryString,[usernameRegEx],(err,result)=>{
		if(err){
			return res.sendStatus(500);
		}else{
			return res.send({
				username: result[0].username,
				name: result[0].fname
			})
		}
	})
}

exports.refreshToken =(req,res)=>{
	console.log("Refreshing")
	const refresh_token = req.body.token
	var rFlag = false;
	const queryString = 'SELECT COUNT(*) as flag FROM user_account where rToken REGEXP(?);'
	const rTokRegEx = "\^"+refresh_token+"\$";
	db.query(queryString,[rTokRegEx], (err1,results)=>{
		if(refresh_token==null) return res.sendStatus(401)
		else if(!results[0].flag >0){
			console.log('Setting rflag true')
			rFlag = true;
			console.log(rFlag);
			return res.sendStatus(403)
		}else{
			console.log("Else station")
			jwt.verify(refresh_token,process.env.REFRESH_TOKEN_SECRET, (err2,user)=>{
				if(err2){
					console.log('Cannot verify')
					return res.sendStatus(403)
				}else{
					const accessToken = generateAccessToken({name: user.name, username: user.username})
					res.json({token: accessToken})
				}
			})
		}

	})
}
exports.logout = (req,res)=>{
	const queryString= 'update user_account set rToken = null where rToken REGEXP(?);'
	db.query(queryString,[req.body.token],(err,result)=>{
		if(err){
			console.log('Error in setting rtoken to null')
			return res.sendStatus(500);
		}else{
			return res.sendStatus(204);
		}
	})
}
exports.authenticateToken =(req,res,next) =>{
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	console.log('Authenticating')
	if(token == null) return res.sendStatus(401);
	else{
		jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
			if(err){
				return res.sendStatus(403);
			}else{
				req.user= user;
				next();
			}
		})
	}
}
function generateAccessToken(user){
	return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '30m' })
}
exports.userLogin = async (req, res) => {
  	console.log("User Log In");//Debug line
	console.log(req.body)
	try{
 		let queryString = "SELECT * from user_account where username REGEXP(?) LIMIT 1;";
			//TODO: Add password to querry when the password fieldhas been changed
		const usernameRegEx = '\^' + req.body.username  + '\$'
		db.query(queryString,[usernameRegEx],(err, result) => {
			//Case 1: querry error or user does not exist
			console.log("debug line 1");
			console.log(result);
		if(err || !result.length){
			console.log("Case 1, user not found\n");
			console.log(err);
			if(err) 
			return res.send({
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
						name: result[0].fname,
						username: result[0].username
					}
					const auth_token = generateAccessToken(payload)
					const refresh_token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)
					//push refresh token to db
					const queryStringRefresh = 'update user_account set rToken = ? where username REGEXP(?);'
					db.query(queryStringRefresh,[refresh_token,usernameRegEx],(err3,res3)=>{
						if(err3){
							console.log(err3)
						}else{
							console.log("Successfully changed refresh token");
						}
					})
					res.send({
						success: true,
						token: auth_token,
						refresh_token: refresh_token,
						status: 200
					});
				}else{
					console.log("invalid password\n")
					res.send({
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
