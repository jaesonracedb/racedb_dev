const mysqlCon = require('mysql');
const jwt = require('jsonwebtoken');
const formidable =  require('formidable');
const fs = require('fs');

var db = mysqlCon.createConnection({
	host: "localhost",
  user: "racedbadmin",
	password: "letskamown",
	database: "racedb"
});


exports.eventUploadPicture = (req, res) => {
	console.log("Upload Event Picture");
	var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.filetoupload.path;
    var newpath = './pictures/' + files.filetoupload.name;
		console.log(oldpath)
		console.log(newpath)
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write('File uploaded and moved!');
			console.log('File uploaded and moved!');
      res.end();
    });
	});
	// console.log(req.headers);
	// console.log(req.body);
	// const path = require("path");
	// const multer = require("multer");
	//
	// const storage = multer.diskStorage({
	//    destination: "./pictures/",
	//    filename: function(req, file, cb){
	//       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
	//    }
	// });
	//
	// const upload = multer({
	//    storage: storage,
	//    limits:{fileSize: 1000000},
	// }).single('image');
}

exports.eventEditDetails = (req,res) => {
	//TODO add check if logged in

}

exports.addEvent = (req,res) => {
	console.log("Add Event");//Debug Line
	var query;
	var params;

	for(s in req.body){
		//console.log(req.body[s]);//Debug line
		req.body[s] = "\'" + req.body[s] + "\'";
		//console.log(req.body[s]);//Debug line
	}

	params = req.body.name + "," + req.body.event_date + "," + req.body.location_city + "," + req.body.state + "," + req.body.category + "," + req.body.distance + "," + req.body.swim_distance + "," + req.body.bike_distance + "," + req.body.run_distance + "," + req.body.website + "," + req.body.email + "," + req.body.summary + "," + req.body.cycling_type;
	console.log(params);//Debug Line
	switch(req.body.race_type.toLowerCase()){
		case 'running':
			query = "CALL add_race_running(" + params + " );";
		break;
		case 'obstacle':
			query = "CALL add_race_obastacle(" + params + " );";
		break;
		case 'cycling':
			query = "CALL add_race_cycling(" + params + " );";
		break;
		case 'triathlon':
			query = "CALL add_race_triathlon(" + params + " );";
		break;
			query = "CALL add_race_others(" + params + " );";
		default:

	}
	console.log(query);//Debug Line
	let result = db.query(query, (err, result) => {
		console.log("Query result: \n" + result);
	});
}
