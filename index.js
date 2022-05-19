// Library packages (fs and inquirer)
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const licenses = require('./js_code/licenses');
const generateMD = require('./js_code/mdTemplate');
const mdTemplate = require('./js_code/mdTemplate');
const writeFileAsync = util.promisify(fs.writeFile);

// Questions to ask for input
function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a project description',
            name: 'description',
        },
        {
            type: 'list',
            message: 'What licensing does is this under?',
            choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla','MIT','Apache','Boost',],
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
            message: 'What are the contribution guidelines?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitHub',
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
async function init() {
  try {
    const answers = await promptUser();
    answers.licenseTag = licenseTag(answers.licenseTag);
    let readMeData = generateMD(answers);
    await writeFileAsync(`${promptUser.title.toLowerCase().split(' ').join(' ')}.md`);
  } catch (err) {
    throw err;
    };
};

    // async function init() {
    //     try {
    //       const answers = await promptUser();
    //       answers.license = licenseTag(answers.licenses);
    //       let readMeData = generateMD(answers);
    //       await writeFileAsync(`${data.Title.toLowerCase().split(' ').join(' ')}.md`);
    //       console.log('Success! The readme has been generated!');
    //     } catch (err) {
    //       throw err;
    //     }
    //   }
      
      // function call to run function
init();
    

    // .then((data) => {
    //     // create file name from the title of the project
    //     const filename = `${data.Title.toLowerCase().split(' ').join(' ')}.md`;
    //     // generate the file
    //     const answers = await inquirer.prompt(questions);
    //     answers.licenseBadge = licenseTag(answers.license);
    //     let readMeData = generateMD(answers);
    //     await writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //         err ? console.log(err) : console.log('Success! The readme has been generated!'));
    // });


    