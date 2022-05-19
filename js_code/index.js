// Library packages (fs and inquirer)
const fs = require('fs');
const inquirer = require('inquirer');

// Questions to ask for input
inquirer
    .prompt([
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
    ])
    .then((data) => {
        // create file name from the title of the project
        const filename = `${data.Title.toLowerCase().split(' ').join(' ')}.md`;
        // generate the file
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success! The readme has been generated!')
        );
    });