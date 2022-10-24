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
		switch (userchoice.menu) {
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

