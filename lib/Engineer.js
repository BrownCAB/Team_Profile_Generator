const Employee = require('./Employee');


class Engineer extends Employee {
    constructor (name, id, email, github) {
		// call the parent constructor here:
        super (name, id, email);
		
        this.githubUsername = githubUsername;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;