// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [    
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'what is your project name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project?',
      name: 'description',
    },    
    {
      type: 'input',
      message: "What are the features of your project?",
      name: 'feature',
    },     
    {
      type: 'list',
      message: 'What kind of licence should your project have?',
      name: 'licence',
      choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },

    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'dependency',
      default: 'npm i',
    },
    {
      type: 'input',
      message: "What command should be run to run test?",
      name: 'test',
      default: 'npm test',
    },
    {
      type: 'input',
      message: "What does the user need to know about using the repo?",
      name: 'use',
    }, 
    {
      type: 'input',
      message: "What does the user need to know about contributing to the repo?",
      name: 'contribute',
    }, 
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('Generating README.md.....');
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
inquirer
  .prompt(questions)
  .then(data => {
    let template = generateMarkdown(data);
    writeToFile("README.md", template);
    })
}

// Function call to initialize app
init();
