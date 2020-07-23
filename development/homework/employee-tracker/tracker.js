var mysql = require("mysql");
var inquirer = require("inquirer");  
var cTable = require('console.table'); 
var chalk = require('chalk');

require('dotenv').config();

var connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.SQL_PW,
    database: "employeeTracker_db"
  }); 

  connection.connect(function(err) {
    if (err) throw err;
    // run the start function
     home();
  }); 
