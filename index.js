// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection} = require("./generateMarkdown");
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
        name: "tests",
        message: "How can they run the tests? "
    },
    {
        type: "input",
        name: "contributions",
        message: "Who contributed to this project and how can others contribute?  "
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use? ",
        choices: ["MIT", "Apache", "GNU 3.0", "ISC", "none"]
    },
    {
        type: "input",
        name: "contact",
        message: "Please enter your Github username. "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address. "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const badge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);
    const licenseSection = renderLicenseSection(data.license);
    const formattedData = generateMarkdown(data);
    fs.writeFile(fileName, formattedData, (err)=>{
        if (err){
            console.log(err);
        }
    });
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
