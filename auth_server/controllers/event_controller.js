const mysqlCon = require('mysql');
const jwt = require('jsonwebtoken');
const formidable =  require('formidable');
const fs = require('fs');
const path = require('path');

var db = mysqlCon.createConnection({
	host: "localhost",
  user: "racedbadmin",
	password: "letskamown",
	database: "racedb"
});


exports.eventUploadPicture = (req, res) => {
	console.log("Upload Event Picture");
	// create an incoming form object
  var form = new formidable.IncomingForm().parse(req);
  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;
	form.keepExtensions = true;
  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '../pictures');
	console.log("Upload directory: " + form.uploadDir);
	// console.log("File name: " + form.file.name);
  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', (field, file) => {
		console.log(file.name);
    fs.rename(file.path, path.join(form.uploadDir, file.name), (err) => {
			if(err) throw err;
			console.log("File Upload done");
		});
		fs.close();
  });
  // log any errors that occur
  form.on('error', (err) => {
    console.log('An error has occured: \n' + err);
  });
  // once all the files have been uploaded, send a response to the client
  form.on('end', () => {
    res.end('success');
  });
  // parse the incoming request containing the form data
	// const form = formidable({ multiples: true, uploadDir: './pictures/' });
	//
	// form.parse(req, (err, fields, files) => {
	//   console.log('fields:', fields);
	//   console.log('files:', files);
	// });
	// var form = new formidable.IncomingForm(),
  //     files = [],
  //     fields = [];
	// form.keepExtensions = true;
  // form.uploadDir = './pictures';
	//
  // form
  //   .on('field', function(field, value) {
  //     console.log(field, value);
  //     fields.push([field, value]);
  //   })
  //   .on('file', function(field, file) {
  //     console.log(field, file);
  //     files.push([field, file]);
  //   })
  //   .on('end', function() {
  //     console.log('-> upload done');
  //     res.writeHead(200, {'content-type': 'text/plain'});
  //     res.write('received fields:\n\n '+util.inspect(fields));
  //     res.write('\n\n');
  //     res.end('received files:\n\n '+util.inspect(files));
  //   })
	// 	.on('error', (err) => {console.log(err)
	// 	});
  // form.parse(req);
	// process.on('unhandledRejection', async err => {
  // console.error('Unhandled rejection', JSON.stringify(err));
	// });
	//
	// process.on('uncaughtException', async err => {
  // console.error('Uncaught exception', JSON.stringify(err));
	// });

}

exports.eventEditDetails = (req,res) => {
	//TODO add check if logged in
	console.log("Edit Event");//Debug Line
	var query;
	var params;
	var rt = req.body.race_type.toLowerCase();

	for(s in req.body){
		//console.log(req.body[s]);//Debug line
		req.body[s] = "\'" + req.body[s] + "\'";
		//console.log(req.body[s]);//Debug line
	}

}

exports.addEvent = (req,res) => {
	console.log("Add Event");//Debug Line
	var query;
	var params;
	var rt = req.body.race_type.toLowerCase();

	for(s in req.body){
		//console.log(req.body[s]);//Debug line
		req.body[s] = "\'" + req.body[s] + "\'";
		//console.log(req.body[s]);//Debug line
	}

	params = req.body.name + "," + req.body.event_date + "," + req.body.location_city + "," + req.body.state + "," + req.body.category + "," + req.body.distance + "," + req.body.swim_distance + "," + req.body.bike_distance + "," + req.body.run_distance + "," + req.body.website + "," + req.body.email + "," + req.body.summary + "," + req.body.cycling_type;
	console.log(params);//Debug Line
	console.log(req.body.race_type.toLowerCase());//Debug Line
	if(rt === "running"){
		query = "CALL add_race_running(" + params + " );";
	}else if(rt === "obstacle"){
		query = "CALL add_race_obastacle(" + params + " );";
	}else if(rt === "cycling"){
 		query = "CALL add_race_cycling(" + params + " );";
	}else if(rt === "triathlon"){
		query = "CALL add_race_triathlon(" + params + " );";
	}else{
		query = "CALL add_race_others(" + params + " );";
	}
	console.log(query);//Debug Line
	let result = db.query(query, (err, result) => {
		console.log(err);
		console.log("Query result: \n" + result);
	});
}
