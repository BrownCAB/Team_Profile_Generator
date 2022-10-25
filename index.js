const inquirer = require('inquirer');
const Manager = require('inquirer');
const Engineer = require('inquirer');
const Intern = require('inquirere');

const generateSite = require('./src/generate-site.js');
const fs = require("fs");
const path = require("path");
const OUTPPUT_DIR = path.resolve(_dirname, "output")
const outputPath = path.join(OUTPPUT_DIR, "team_profile.html");
const teamMembers = [];

const promptManager = () => {
	return inquirer.prompt([
	{
		type: 'input',
		name: 'name',
		message: 'What is your name? (Required)',
		validate: nameInput => {
			if (nameInput) {
				return true;
			} else {
				console.log('Please enter your name!');
				return false;
			} 
		}
	},
	{
		type: 'input',
		name: 'employeedId',
		message: 'Enter your employee ID. (Required)',
		validate: employeeId => {
			if (employeeId) {
				return true;
			} else {
				console.log('Please enter your ID!');
				return false;
			}
		}	
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address? (Required)',
		validate: email => {
			if (email)	{
				return true;
			} else {
				console.log('Please enter your email!');
				return false;
			}
		}	
	},
	{
		type: 'input',
		name: 'officeNumber',
		message: 'What is your office number? (Required)',
		validate: officeNumber => {
			if (officeNumber) {
				return true;
			} else {
				console.log('Please enter your office number!');
				return false;
			}
		}	
	},	
	]).then(answers => {
		console.log(answers);
		const manager = new Manager(answer.name, answers.employeeId, answers.email, answer.officeNumber);
		teamMembers.push(manager);
		propmtMenu();
	})
};

const promptMenu = () => {
	return inquirer.prompt ([
	{
		type: 'list',
		name: 'menu',
		message: 'Please select your teams members:',
		choices: ['add an engineer', 'add an intern', 'finish buidling my team']	
	}])
	.then (userChoice => {
		switch (userChoice.menu) {
			case 'add an engineer':
				promptEngineer();
				break;
			case "add an intern":
				prompIntern();
				break;
			default:
				buildTeam();	
		}
	});
};

const promptEngineer = () => {
	console.log(`
	==================
	Add a New Engineer
	==================
	`);
	
	return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is the name of engineer? (Required)',
			validate: engineerName => {
			if (engineerName) {
				return true;
			} else {
				console.log('Please enter the name of engineer!');
				return false;
			}
		}
	},					
	{
		type: 'input',
		name: 'employeedId',
		message: 'Enter your employee ID. (Required)',
		validate: employeeId => {
			if (employeeId) {
				return true;
			} else {
				console.log('Please enter your ID!');
				return false;
			}
		}	
	},
	{
		type: 'input',
		name: 'githubUsername',
		message: 'Enter your GitHub username. (Required)',
		validate: githubUsername => {
			if (githubUsername) {
				return true;
			} else {
				console.log('Please enter your GitHub username!');
				return false;
			}
		}	
	}
	]).then(answers => {
		const engineer = new Engineer(answer.name, answers.employeeId, answers.email, answer.officeNumber);
			teamMembers.push(engineer);
			promptMenu();
	})
};

const promptIntern = () {
	console.log(`
	================
	Add a New Intern
	================
	`);
	
	return inquirer.prompt ([
		{
			type: 'input',
			name: 'name',
			message: 'What is the name of intern? (Required)',
			validate: internName => {
			if (internName) {
				return true;
			} else {
				console.log('Please enter the name of intern!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'employeedId',
		message: 'Enter your employee ID. (Required)',
		validate: employeeId => {
			if (employeeId) {
				return true;
			} else {
				console.log('Please enter your ID!');
				return false;
			}
		}	
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address? (Required)',
		validate: email => {
			if (email)	{
				return true;
			} else {
				console.log('Please enter your email!');
				return false;
			}
		}	
	},
	{
		type: 'input',
		name: 'school',
		message: 'What is your school name? (Required)',
		validate: school => {
			if (school)	{
				return true;
			} else {
				console.log('Please enter your school name!');
				return false;
			}
		}	
	}	
]).then(answers => {
	console.log(answers);
	const intern = new Intern (answer.name, answers.employeeId, answers.email, answer.officeNumber);
	teamMember.push(intern);
	promptMenu();
	})
};

const buildTeam = () => {
	console.log(`
	=========================
	Finished building my team
	=========================
	`);
	// Create the directory if the outout path doesn't exist
	if (!fs.existSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR)
	}
	fs.writeFileSync(outputPath, generateSite(teamMemebers), "utf-8");
}

promptManager();