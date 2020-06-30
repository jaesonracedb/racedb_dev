const mysql = require('mysql');
module.exports = mysql.createConnection({
  host: "racedb-2.cqebmdklzbpy.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "Race63Db56",
  port: 3306,
  database: "racedb",
  multipleStatements: true
});
