// return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "![MIT](https://img.shields.io/badge/license-MIT-green)";
  } else if (license === "Apache") {
    return "![Apache](https://img.shields.io/badge/license-Apache-orange)";
  } else if (license === "GNU 3.0") {
    return "![GNU GPLv. 3](https://img.shields.io/badge/license-GNU-blue)";
  } else if (license === "ISC") {
    return "![ISC](https://img.shields.io/badge/license-ISC-red)";
  } else {
    return "";
  }
}

// return the license link
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

// return the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){return `## License
  This project is licensed under the ${renderLicenseLink(license)} - click the link to read the license.
  `
} else {
  return "";
}
    

}

// generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License?](#license)

  ## Description
 
  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  > ${data.usage}

  ## Contributions
  
  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions

  [My Github profile](https://github.com/${data.contact})

  Send me and email [here](mailto:${data.email}) to contact me directly.

  ${renderLicenseSection(data.license)}
 `;
}

module.exports ={
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
} 
