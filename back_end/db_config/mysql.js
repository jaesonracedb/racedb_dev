const mysql = require('mysql');
module.exports = mysql.createConnection({
  host: "localhost",
	user: "racedbadmin",
	password: "letskamown",
  database: "racedb",
  multipleStatements: true
});
