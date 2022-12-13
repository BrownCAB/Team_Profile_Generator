const Engineer = require('../lib/Engineer')
const engineer = new Engineer('jared', '101184', 'jared@faketech.com', 'github.com'); 

test ('Should create an instance of class engineer', () => {
   expect(engineer.name).toBe('jared')
   expect(engineer.id).toBe('101184')
   expect(engineer.email).toBe('jared@faketech.com')
   expect(engineer.github).toBe('github.com')
});

test ('if we get the name from getName() method', () => {
   expect(engineer.getName()).toBe('jared');
});
 
test ('if we get the Id from getId() method', () => {
   expect(engineer.getId()).toBe('101184');
});

test ('if we get the Email from getEmail() method', () => {
   expect(engineer.getEmail()).toBe('jared@faketech.com');
});

test ('if we get the Role from getRole() method', () => {
   expect(engineer.getRole()).toBe('Engineer');
});

test ('if we get the github repo URL from getGithub() method', () => {
   expect(engineer.getGithub()).toBe('github.com');
});

// test or it can be used as statement keyword
// 1 npm init
// 2 node i jest