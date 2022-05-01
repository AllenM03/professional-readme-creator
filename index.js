// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(".utils/generateMarkdown.js");

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
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information.",
    },
    {
        type: "input",
        name:"contributionGuidelines",
        message: "Please enter your contribution guidelines.",
    },
    {
        type: "input",
        name: "testing",
        message: "Please enter test instructions for your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Choose license for your project",
        license: ["MIT", "ISC", "GPL", "Apache", "BSD"],
    },
    {
        type: "input",
        name: "Username",
        message: "Enter your GitHub username",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Enter your email address",
    },
];

// function to write README file from generateMarkdown module
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return; console.log(err);
        }
        console.log("Successfully generated Markdown");
    });
};

// function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile(`${response.title}.md`, response);
    });
}

// Function call to initialize app
init();