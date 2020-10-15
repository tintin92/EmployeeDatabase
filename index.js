//require dependencies
const inquirer = require("inquirer")
const logo = require("asciiart-logo")
const DB = require("./dbFunctions")
const db = new DB()
const connection = require("./db/connection")

connection.connect(function (err) {
    if (err) throw err;
    startMenu();
})

function initialize() {
    const logoText = logo({ name: "Employee Manager" }).render();
    console.log(logoText);
}

function startMenu() {
    initialize();
    inquirer
        .prompt({
            type: "list",
            name: "choice",
            message: "How would you like to get started today?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES",
                }, 
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE",
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE",
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES",
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE",
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS",
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT",
                },
                {
                    name: "Quit",
                    value: "QUIT",
                },
            ],
        }).then(function (answer) {
            switch (answer.choice) {
                case "VIEW_EMPLOYEES":
                    db.viewEmployees();
                    break;

                case "ADD_EMPLOYEE":
                    db.addEmployee();
                    break;

                case "UPDATE_EMPLOYEE_ROLE":
                    db.updateEmployeeRole()
                    break;

                case "VIEW_ROLES":
                    db.viewAllRoles()
                    break;

                case "ADD_ROLE":
                    db.addRole()
                    break;

                case "VIEW_DEPARTMENTS":
                    db.viewAllDepartments()
                    break;

                case "ADD_DEPARTMENT":
                    db.addDepartment()
                    break;

                case "QUIT":
                    startMenu();
                    break;

            }
        });
}




