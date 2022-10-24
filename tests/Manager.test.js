const Manager = require('../lib/Manager')
const manager = new Manager('jared', '101184', 'jared@faketech.com', '184'); 

test ('Should create an instance of class manager', () => {
   	expect(manager.name).toBe('Jared')
   	expect(manager.id).toBe('101184')
	expect(manager.email).toBe('jared@faketech.com')
	expect(manager.officeNumber).toBe('184')
});

test ('if we get the name from getName() method', () => {
   expect(manager.getName()).toBe('jared');
});
 
test ('if we get the Id from getId() method', () => {
   expect(manager.getId()).toBe('jared');
});

test ('if we get the Email from getEmail() method', () => {
   expect(manager.getEmail()).toBe('jared');
});

test ('if we get the Role from getRole() method', () => {
   expect(manager.getRole()).toBe('Manager');
});

test ('if we get the Role from getOfficeNumber() method', () => {
   expect(manager.getRole()).toBe('184');
});

// test or it can be used as statement keyword
// 1 npm init
// 2 node i jest