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

//functions that do stuff!
//function to display inventory DB and prompt
function startBamazon() {
  var inventory = [];

  connection.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;

    inventory = result;

    for(var i = 0; i < inventory.length; i++){
      console.log("Product ID: " + result[i].item_id);
      console.log("Product Name: " + result[i].product_name);
      console.log("Price: " + result[i].price);
      console.log("-------------");
    }
    runInquirer();
  });

}

//function to run Inquirer
function runInquirer() {


  inquirer.prompt([
      {
      name: "productID",
      type: "input",
      message: "What is the ID of the product you'd like to buy?"}, 
        
      {
        name: "quantity",
        type: "input",
        message: "How many?"
      }
    ]).then(function(answer){

      var productID = answer.productID;
      var quantity = answer.quantity;

      checkInventory( productID, quantity);
    });
}

//function to check inventory, p = product ID, q = quantity 
function checkInventory(p,q) {
  //if there's no inventory print message and prevent order
  //else run function to fill order

  fillOrder(n);
}

//function to fill order
function fillOrder(n) {
 //update the database
 //show customer the total cost
}

//Connect to Database
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) {
    console.log(err);
  }
  // run the start function after the connection is made to prompt the user
  startBamazon();
});
