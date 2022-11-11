const licensesDetails = [
  {
    name: "MIT",
    badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    link: `https://opensource.org/licenses/MIT`,
  },
  {
    name: "Apache 2.0",
    badge: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    link: `https://opensource.org/licenses/Apache-2.0`,
  },
  {
    name: "GPL 3.0",
    badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    link: `https://www.gnu.org/licenses/gpl-3.0`,
  },
  {
    name: "BSD 3",
    badge: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
    link: `https://opensource.org/licenses/BSD-3-Clause`,
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ``;
  }
  let result = licensesDetails.filter(
    (licenseDetail) => licenseDetail.name == license
  );
  return result[0].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return ``;
  }
  let result = licensesDetails.filter(
    (licenseDetail) => licenseDetail.name == license
  );
  return result[0].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ``;
  }
  return `## License
  This application is licensed under [${license}](${renderLicenseLink(
    license
  )}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateTable(data) {
  if (!data.confirmTable) {
    return;
  }
  if (data.license == "None") {
    return `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)`;
  }
  return `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)`;
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ${generateTable(data)}
  ## Installation
  To install necessary dependencies, run the following command:
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing 
  ${data.contribute}
  ## Tests
  To run tests, run the following command:
  ${data.tests}
  ## Questions 
  If you have any questions about the repo, open an issue or contact me directly questions, you can email me at  ${
    data.email
  }. 
  You can find more of my work at [Link to my GitHub Profile](https://github.com/${
    data.username
  })`;
}

module.exports = generateMarkdown;