const mysql = require('mysql');
module.exports = mysql.createConnection({
  host: "localhost",
	user: "racebdadmin",
	password: "letskamown",
  database: "racedb",
  multipleStatements: true
});
