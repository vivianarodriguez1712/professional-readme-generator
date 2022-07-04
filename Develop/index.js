// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
       type: 'input',
       name: 'name',
       message: 'What is the title of you project?'
    },
    {
       type: 'input',
       name: 'description',
       message: 'Provide a breif description of what your project is about, what it does, and why you chose this?'   
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide detailed instructions on how to install this program'  
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide detailed instructions on how to use it' 
    },
    {
       type: 'input',
       name: 'contribution',
       message: 'If anybody else helped on this project, provide their names and github profile links'
    },
    {
       type: 'input',
       name: 'test',
       message: 'Provide instructions on how to test your project'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license for your project',
      choices: ['Apache license 2.0, Artistic license 2.0, Boost Software License 1.0']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username'  
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions) 
}

// Function call to initialize app
init();