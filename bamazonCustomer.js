//DEPENDENCIES
var inquirer = require('inquirer');
var mysql = require("mysql");

//Set up server
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

//functions that do stuff

//Connect to Database
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) {
    console.log(err);
  }
  // run the start function after the connection is made to prompt the user
  console.log("connected");
});
