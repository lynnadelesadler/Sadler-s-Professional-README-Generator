// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub Username?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a email!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is your project name?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a project name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What kind of License should your project have?",
    default: "MIT",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What are your installation instructions?",
    default: "npm i",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter any info on how to install!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter command to run tests!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is your usage information?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter any info for usage!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter any how to contribute info!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

