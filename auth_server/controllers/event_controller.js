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
