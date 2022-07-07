// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache license 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'Mozilla' ) {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache license 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla' ) {
    return '(https://opensource.org/licenses/MPL-2.0)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `Project is licensed under [${license}](${renderLicenseLink(
    license
  )}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contribution)
  - [Testing](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  #Contribution
  ${data.contribution}

 #Test
 ${data.test}

 ## Questions

`;
}

module.exports = generateMarkdown;