// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {generateMarkdown} = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project? "
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project. "
    },
    {
        type: "input",
        name: "installation",
        message: "Installation Instructions? "
    },
    {
        type: "input",
        name: "usage",
        message: "What are the use cases for this application? "
    },
    {
        type: "input",
        name: "contributions",
        message: "How can others contribute to this project? "
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use? ",
        choices: ["MIT", "Apache"]
    },
    {
        type: "input",
        name: "contact",
        message: "Please enter your Github username. "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address. ",
        validate(input){
            // googled this one...
            if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(input)){
                return true;
            } 

            throw Error("Please write a valid email address");
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const formattedData = generateMarkdown(data);
    fs.writeFile(`./${fileName}`, formattedData)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
        writeToFile("README.md", answers)
    }) 
}

// Function call to initialize app
init();
