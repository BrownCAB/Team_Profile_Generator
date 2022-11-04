const Employee = require('../lib/Employee')
const employee = new Employee('jared', '101184', 'jared@faketech.com'); 

test ('Should create an instance of class Employee', () => {
   expect(typeof employee).toBe("object")
   expect(employee.name).toBe('jared')
   expect(employee.id).toBe('101184')
   expect(employee.email).toBe('jared@faketech.com')
});

test ('if we get the name from getName() method', () => {
   expect(employee.getName()).toBe('jared');
});

test ('if we get the Id from getId() method', () => {
   expect(employee.getId()).toBe('101184');
});

test ('if we get the Email from getEmail() method', () => {
   expect(employee.getEmail()).toBe('jared@faketech.com');
});

test ('if we get the Role from getRole() method', () => {
   expect(employee.getRole()).toBe('Employee');
});

// test or it can be used as statement keyword
// 1 npm init
// 2 node i jest