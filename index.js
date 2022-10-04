// Library packages (fs and inquirer)
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const licenses = require('./js_code/licenses');
const generateMD = require('./js_code/mdTemplate');
const mdTemplate = require('./js_code/mdTemplate');
const writeFileAsync = util.promisify(fs.writeFile);

// Questions to ask for input
const promptUser = () => {
    return inquirer.prompt([
      {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
          type: 'input',
          message: 'What is the user story?',
          name: 'userstory',
        },
        {
            type: 'input',
            message: 'Write a project description',
            name: 'description',
        },
        {
            type: 'list',
            message: 'What licensing does is this under?',
            choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla','MIT','Apache','Boost','Unlicensed'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contribution',
        },
        {
            type: 'checkbox',
            message: 'What applications did you use?',
            choices: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'MySQL', 'MongoDB', 'Mongoose', 'React', 'JWT', 'GraphQL', 'Node.JS', 'Express.js', 'Styled Components'],
            name: 'application',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ]);
};

function licenseTag(value) {

    if (value === "GNU AGPLv3") {
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU LGPLv3") {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Mozilla") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (value === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === "Apache") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else {
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
};

// function to initialize program and create README file
const generateReadMe = ({ username, email, userstory, installation, usage, title, description, license, contributing, application }) =>
    `
# ${title}
![Github](https://img.shields.io/badge/license-${license}-yellow.svg)

## User Story
${userstory}

## Description
    
 ${description}
    
# Table of Contents
    
-[Installation](#installation)
    
-[Usage](#usage)
    
-[License](#license)
    
-[Contributing](#contributing)
    
-[Test](#test)
    
-[Questions](#questions) 

# Installation
To install the repository, please use the following command:
 ${installation} 
    
# Usage
${usage} 
    
# License
This repository is licensed under ${license}

# Contributing
${contributing}
    
# Application
Applications used in making this:
${application}
    
# Questions 
  For any questions and comments please email me at: ${email}.
  To view my other projects visit: ${username} on Github `;

const init = () => {
    promptUser()

    .then((answers) => fs.writeFileSync('ExampleREADME.md', generateReadMe(answers)))
        .then(() => console.log('Transfered to ExampleREADME.md'))
        .catch((err) => console.error(err));
}

init();