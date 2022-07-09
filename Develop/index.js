// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const generateReadme = require('./utils/generateReadme');
const writeFile = require('./utils/generateReadme');

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
      choices: ['Apache license 2.0, MIT, Mozilla']
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

function init() {
  inquirer
  .prompt(questions)
  .then(generateMarkdown => {
    return writeFile(generateMarkdown);
  })
  .then(generateReadme => {
    console.log(generateReadme);
  })
  .catch(err => {
    console.log(err);
  });
    // .then(data => {fs.writeFile('example.md',data)})
}
// This is a function to write a readme file, and to initialize the app

// Function call to initialize app
init();