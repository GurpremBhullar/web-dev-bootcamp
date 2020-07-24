
var inquirer = require('inquirer'); 
var fs = require('fs'); 
var axios = require('axios'); 
var ghApi = require ('./utils/api.js'); 
var gnr8MD = require ('./utils/generateMarkdown.js')


inquirer
  .prompt([
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
      }, 
      {
        type: "input",
        message: "Enter the title of your project:",
        name: "title"
      }, 
      {
        type: "editor",
        message: "Enter a brief description of your project:",
        name: "description"
      },    
      {
        type: "input",
        message: "How is your project licensed:",
        name: "license"
      },   
      {
        type: "input",
        message: "Who contributed to your project:",
        name: "contributing"
      },  
      {
        type: "input",
        message: "Which, if any, tests were run on your project:",
        name: "tests"
      },   
  ])

  .then(answers => {

  })
  .catch(error => {
    if(error.isTtyError) {
 
    } else {
 
    }
  });

  