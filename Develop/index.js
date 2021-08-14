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
        name:'expected_launch',
        message: 'What is the expected launch of the project?'
    },
    {
        type:'input',
        name:'date_created',
        message: 'Please enter date Created'
    },

    {
        type:'input',
        name:'email',
        message: 'Please enter your email'
    },

    {
        type:'input',
        name:'repo',
        message: 'Please enter your github user repo'
    },
    {
        type:'input',
        name:'installation',
        message: 'Please enter the dependencies required to be installed for this project'
    },
    {
        type:'input',
        name:'year',
        message: 'Please enter a copyright year for your project'
    },

    {
        type:'input',
        name:'link',
        message: 'Please enter a link to your github profile'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Provide a Title for your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your projects (Required)'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What are the main Languages used in this Project?',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Python']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please Enter Usage guidelines'
    },
    {
        type: 'confirm',
        name: 'contribute',
        message: 'Is this project open for Contributions?',
        default: false
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter Instructions for contributing',
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
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter Instructions on how to run tests.',
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
