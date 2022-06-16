// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "\n![](https://img.shields.io/badge/license-MIT-green)";
  } else if (license === "Apache") {
    return "\n![](https://img.shields.io/badge/license-Apache-green)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache"){
    return "\n[Apache License](https://www.apache.org/licenses/LICENSE-2.0.txt)"
  } else if (license === "MIT"){
    return "\n[MIT License](./mit_license.txt)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){return `\n## License

  This project is licensed under the ${license} License - see the LICENSE.md file for details`
} else {
  return "";
}
    

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}\n\n## Description\n\n${data.description}
  \n## Installation\n\n${data.installation}\n\n## Usage\n\n> ${data.usage}\n
  ## Contributions\n\n${data.contributions}\n\n## Contact\n\n${data.contact}
 \n${data.email}\n\n`;
}

module.exports ={
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
} 
