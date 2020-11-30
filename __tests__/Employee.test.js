const Employee= require('../lib/Employee');

test('create a employee object', () => {
    const employee= new Employee('John', 4, 'nezekwe@comcast.net');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('nezekwe@comcast.net');
});

test('get employee\'s name, id, and email from object', () => {
    const employee= new Employee('Luke', 4, 'nezekwe@comcast.net');

    expect(employee.getName()).toBe('Luke');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toBe('nezekwe@comcast.net');
});

test('get type of job role from object', () => {
    const employee= new Employee('Luke', 4, 'nezekwe@comcast.net');
    
    expect(employee.getRole()).toBe('Employee');
});