// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT";
} else if (license === "Apache 2.0") {
    return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
} else if (license === "GPL 3.0") {
    return "[General Public License 3.0](https://www.gnu.org/licenses/gpl-3.0)";
} else if (license === "BSD 3") {
    return "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
}else {
    return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "MIT") {
        return ` 
        ## License

        This project is licensed with [MIT License](https://opensource.org/licenses/MIT).`;
    } else if (license === "Apache 2.0") {
        return `
        ## License

        This project is licensed with [Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === "GPL 3.0") {
        return `
        ## License
        
        This project is licensed with [General Public License 3.0](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === "BSD 3") {
        return `
        ## License
        
        This project is licensed with [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
    } else {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Building Blocks

  ${data.technologies}

  ## Usage

  ${data.usage}

  ![Screenshot](${data.image})

  ## Features

  ${data.features}

  ## Contributors

  ${data.contributors}

  ## License

  ${renderLicenseBadge(data.license)}

  ## Deployed Project Link

  ${data.link}

  ## Contact

  ${data.contact}
`;
}

module.exports = generateMarkdown;