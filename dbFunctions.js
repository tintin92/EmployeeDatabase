const connection = require("./db/connection");
const inquirer = require("inquirer");

class DB {
    viewEmployees() {
        // query the database for all employees
        connection.query("SELECT * FROM employee", function (err, results) {
            if (err) throw err;
            console.table(results);
        });
    }
}



module.exports = DB;