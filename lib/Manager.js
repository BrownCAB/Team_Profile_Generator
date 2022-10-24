const Employee = require('./Employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber)
	// Call parent constructor here;
	super(name, id, email);
	
	this.officeNumber = officeNumber;
}

getOffNumber() {
	return this.OfficeNumber;
}

getRole() {
        return "Manager";
}
	
module.exports = Manager