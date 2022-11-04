const Intern = require('../lib/Intern')
const intern = new Intern('jared', '101184', 'jared@faketech.com', 'Los Angeles'); 

test ('Should create an instance of class intern', () => {
   expect(intern.name).toBe('jared')
   expect(intern.id).toBe('101184')
   expect(intern.email).toBe('jared@faketech.com')
   expect(intern.school).toBe('Los Angeles')
});

test ('if we get the name from getName() method', () => {
   expect(intern.getName()).toBe('jared');
});
 
test ('if we get the Id from getId() method', () => {
   expect(intern.getId()).toBe('101184');
});

test ('if we get the Email from getEmail() method', () => {
   expect(intern.getEmail()).toBe('jared@faketech.com');
});

test ('if we get the Role from getRole() method', () => {
   expect(intern.getRole()).toBe('Intern');
});

test ('if we get the Role from getSchool() method', () => {
   expect(intern.getSchool()).toBe('Los Angeles');
});

// test or it can be used as statement keyword
// 1 npm init
// 2 node i jest