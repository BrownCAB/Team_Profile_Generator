const Engineer = require('../lib/Engineer')
const engineer = new engineer('jared', '101184', 'jared@faketech.com', '184'); 

test ('Should create an instance of class engineer', () => {
   	expect(engineer.name).toBe('Jared')
   	expect(engineer.id).toBe('101184')
   	expect(engineer.email).toBe('jared@faketech.com')
	expect(engineer.officeNumber).toBe('184')
});

test ('if we get the name from getName() method', () => {
   expect(engineer.getName()).toBe('jared');
});
 
test ('if we get the Id from getId() method', () => {
   expect(engineer.getId()).toBe('jared');
});

test ('if we get the Email from getEmail() method', () => {
   expect(engineer.getEmail()).toBe('jared');
});

test ('if we get the Role from getRole() method', () => {
   expect(engineer.getRole()).toBe('engineer');
});

test ('if we get the Role from getOfficeNumber() method', () => {
   expect(manager.getOfficeNumber()).toBe('184');
});

// test or it can be used as statement keyword
// 1 npm init
// 2 node i jest