// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None')
    return "";
  else 
    return license;
  // ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if (license != 'None'){
    parts = license.split(' ');
    if (parts.length == 1)
    link = `https://img.shields.io/badge/License-${license}-blue.svg`;
    else if (parts.length == 2)
      link = `https://img.shields.io/badge/License-${parts[0]}_${parts[1]}-blue.svg`;
  }
  return link; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let text = '';
  if (license != 'None')
    text = `![License: ${renderLicenseBadge(license)}](${renderLicenseLink(license)})`;
  return text;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  
  ${data.description}
    
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  
  \`\`\`md
  ${data.dependency}
  \`\`\`


  ## Usage
  
  ${data.use}
  

  ## License

  ${renderLicenseSection(data.licence)}

  
  ## Features
  
  The project has a lot of features, as in the following:
  
  ${data.feature}

  ## Contribute
  
  ${data.contribute}
  

  ## Tests
  
  To run tests, please run the following commands:

  \`\`\`md
  ${data.test}
  \`\`\`


  ## Questions

  If you have any questions, please contact me at ${data.email}. Alternatively, you can find my other projects at [${data.username}](https://github.com/${data.username}/).

  `;

}

module.exports = generateMarkdown;
