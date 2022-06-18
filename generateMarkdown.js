// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "![](https://img.shields.io/badge/license-MIT-green)";
  } else if (license === "Apache") {
    return "![](https://img.shields.io/badge/license-Apache-orange)";
  } else if (license === "GNU 3.0") {
    return "![](https://img.shields.io/badge/license-GNU GPLv.3-blue)";
  } else if (license === "ISC") {
    return "![](https://img.shields.io/badge/license-ISC-red)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache"){
    return "[Apache License](https://choosealicense.com/licenses/apache-2.0/)"
  } else if (license === "MIT"){
    return "[MIT License](https://choosealicense.com/licenses/mit/)";
  } else if (license === "GNU 3.0"){
    return "[GNU License](https://choosealicense.com/licenses/gpl-3.0/)";
  } else if (license === "ISC"){
    return "[ISC License](https://choosealicense.com/licenses/isc/)";
  } 
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){return `
  This project is licensed under the ${license} License - click the link to read the license.
  `
} else {
  return "";
}
    

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Contact](#Contact)
  - [License](#License)

  ## Description

  ${data.description}

  ## Installation
  
  ${data.installation}
  
  ## Usage

  > ${data.usage}

  ## Contributions
  
  ${data.contributions}
  
  ## Contact
  
  ${data.contact}

  ${data.email}

  ## License
 `;
}

module.exports ={
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
} 
