const Intern= require('../lib/Intern');

test('create a intern object', () => {
    const intern= new Intern('Kyle', 45, 'kyle@gmail.com', 'Collins');

    expect(intern.name).toBe('Kyle');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('kyle@gmail.com');
    expect(intern.school).toBe('Collins');
});

test('get intern\'s name, id, email, and school\'s name from object', () => {
    const intern= new Intern('Kyle', 45, 'kyle@gmail.com', 'Collins');

    expect(intern.getName()).toBe('Kyle');
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toBe('kyle@gmail.com');
    expect(intern.getSchool()).toBe('Collins');
});

test('get type of job role from object', () => {
    const intern= new Intern('Kyle', 45, 'kyle@gmail.com', 'Collins');
    
    expect(intern.getRole()).toBe('Intern');
});