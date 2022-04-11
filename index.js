// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(".utils/generateMardown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"name",
        message: "What is your name?",
    },
    {
        type:"input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type:"input",
        name:"description",
        message:"Please enter a description of your project.",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
