const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamGene = require('./teamgene');
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'index.html');
const allEmployees = [];

//const manager = new Manager(res.name, res.id...)
//allEmployees.push(manager)

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log('You must enter your name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee ID number?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                }
                else {
                    console.log('You must enter your employee ID number!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log('You must enter your email address!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                }
                else {
                    console.log('You must enter your office number address!');
                    return false;
                }
            }
        },

    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        allEmployees.push(manager);
        promptOptions();
    })
};

const promptOptions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select from the following employee types:',
            choices: ['Engineer', 'Intern', 'team complete']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                default:
                    teamComplete();
            }





        });

};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the Engineers name?',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                }
                else {
                    console.log('Must enter name!');
                    return false;
                }
            }     
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'what is your employee ID?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                }
                else {
                    console.log('Must enter employee ID!');
                    return false;
                }
            }     
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address?',
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log('Must enter email address!');
                    return false;
                }
            }     
        },
        {
            type: 'input',
            name: 'github',
            message: 'what is your GitHub Username?',
            validate: github => {
                if (github) {
                    return true;
                }
                else {
                    console.log('Must enter employee ID!');
                    return false;
                }
            }     
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        allEmployees.push(engineer)
        promptOptions();
    })


};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the Interns name?',
            validate: internName => {
                if (internName) {
                    return true;
                }
                else {
                    console.log('Must enter name!');
                    return false;
                }
            }     
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'what is your employee ID?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                }
                else {
                    console.log('Must enter employee ID!');
                    return false;
                }
            }     
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address?',
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log('Must enter email address!');
                    return false;
                }
            }     
        },
        {
            type: 'input',
            name: 'school',
            message: 'what is your school name?',
            validate: school => {
                if (school) {
                    return true;
                }
                else {
                    console.log('Must enter school name!');
                    return false;
                }
            }     
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        allEmployees.push(intern)
        promptOptions();
    })

};

const teamComplete = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, teamGene(allEmployees), "utf-8");
}

promptManager();