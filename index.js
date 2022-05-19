// Library packages (fs and inquirer)
const fs = require('fs');
const inquirer = require('inquirer');

// Questions to ask for input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'Write a project description',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'Installation Instructions',
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'Usage Information',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'Contribution Guidelines',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'Test Instructions',
        },
    ]);
};
