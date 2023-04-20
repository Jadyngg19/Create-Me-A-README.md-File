// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./Utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide a title for your project.",
    },

    {
        type: "input",
        name: "description",
        message: "Please describe what your project is and what purpose it serves.",
    },

    {
        type: "input",
        name: "installation",
        message: "Please explain what is needed to use this application.",
    },

    {
        type: "input",
        name: "technologies",
        message: "Please list the technologies used to create this project.",
    },

    {
        type: "input",
        name: "usage",
        message: "Please explain how this project can be used.",
    },

    {
        type: "input",
        name: "features",
        message: "Please list the main features of your project.",
    },

    {
        type: "input",
        name: "image",
        message: "Please provide the relative path to your image that best represents what your project looks like.",
    },

    {
        type: "input",
        name: "contributors",
        message: "Please list the contributors to this project (if there are any).",
    },

    {
        type: "checkbox",
        name: "license",
        message: "Please select the license that was used in your project.",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"]
    },

    {
        type: "input",
        name: "link",
        message: "Please provide the link to your deployed project.",
    },

    {
        type: "input",
        name: "contact",
        message: "Please provide your name and email address so you can be contacted in regard to questions concerning this project.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Putting README.md file together...");
        writeToFile("../Develop/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();