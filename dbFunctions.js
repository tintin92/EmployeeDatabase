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

    viewAllDepartments() {
        connection.query("SELECT * FROM department", function (err, results) {
            if (err) throw err;
            console.table(results);
        });
    }

    addEmployee() {
        inquirer
            .prompt([
                {
                    name: "first_name",
                    type: "input",
                    message:
                        "What is the first name of the employee you would like to add?",
                },
                {
                    name: "last_name",
                    type: "input",
                    message:
                        "What is the last name of the employee you would like to add?",
                },
                {
                    name: "role_id",
                    type: "number",
                    message: "What is the role id of the employee you would like to add?",
                    validate: function (input) {
                        if (typeof input === "NaN") {
                            return "Please proivde a number 1-10";
                        }
                        return true;
                    },
                },

                {
                    name: "manager_id",
                    type: "number",
                    message:
                        "What is the manager id # of the employee you would like to add?",
                    validate: function (input) {
                        if (typeof input === "NaN") {
                            return "Please proivde a number 1-10";
                        }
                        return true;
                    },
                },
            ])
            .then(function (answer) {
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        role_id: answer.role_id,
                        manager_id: answer.manager_id,
                    },
                    function (err, results) {
                        if (err) throw err;
                        console.log("You've added an employee!");
                    }
                );
            });
    }

    viewAllRoles() {
        connection.query("SELECT * FROM role", function (err, results) {
            if (err) throw err;
            console.table(results);

        });
    }


}
module.exports = DB;