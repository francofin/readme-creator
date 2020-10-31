// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenseBadge) }

  ## Description
  ${data.description}

  ## Table of Contents

  [Installation](#installation)

  *[Usage](#usage)
  ${renderLicenseLink(data.license)}
  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ## Installation

  To Install necessary dependencies, please run npm install, be sure to be in the correct directory

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}



  ## Contributing

  ${data.contributing}


  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions
  
  If you have any questions about the repo, ipen an issue and please contact me directly at ${data.email}. You can find more of my projects at [${data.repo}]


`;
};

function renderLicenseBadge(license) {
  return "![License](https://img.shields.io/badge/"+license+"?raw=true)";
};



function renderLicenseLink(license) {
  var link = "(https://opensource.org/licenses/"+license+")";
  if (license==='gpl-3.0') {
    link = "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  return link
};

module.exports = generateMarkdown;



// function renderLicenseSection() {

// }
