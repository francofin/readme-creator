const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type:'input',
        name:'name',
        message: 'Please enter your name'
    },

    {
        type:'input',
        name:'email',
        message: 'Please enter your email'
    },

    {
        type:'input',
        name:'github',
        message: 'Please enter your github user repo'
    },

    {
        type:'input',
        name:'link',
        message: 'Please enter a link to your github repo'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your projects (Required)'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What are your main contributions to github',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Python']
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'PLease choose a License required by your repo',
        choices: ['MIT', 'gpl-3.0', 'MPL-2.0', 'OFL-1.1', 'EPL-1.0', 'Apache-2.0']
    },
    {
        type: 'checkbox',
        name: 'licenseBadge',
        message: 'PLease choose a Badge for the License Selected',
        choices: ['License-MIT-yellow.svg', 'License-GPLv3-blue.svg', 'License-MPL%202.0-brightgreen.svg', 'License-OFL%201.1-lightgreen.svg', 'License-EPL%201.0-red.svg', 'License-Apache%202.0-blue.svg']
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })

}

// function call to initialize program
init();
