//require dependencies
const mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "C!ive.1804",
    database: "employees",
});

module.exports = connection;


