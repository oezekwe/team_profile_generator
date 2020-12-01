const Engineer= require('../lib/Engineer');

test('create a engineer object', () => {
    const engineer= new Engineer('Sara', 27, 'ozekwe@gmail.com', 'oezekwe');

    expect(engineer.name).toBe('Sara');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('ozekwe@gmail.com');
    expect(engineer.github).toBe('oezekwe');
});

test('get engineer\'s name, id, email, and github username from object', () => {
    const engineer= new Engineer('Sara', 27, 'ozekwe@gmail.com', 'oezekwe');

    expect(engineer.getName()).toBe('Sara');
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toBe('ozekwe@gmail.com');
    expect(engineer.getGithub()).toBe('oezekwe');
});

test('get type of job role from object', () => {
    const engineer= new Engineer('Sara', 27, 'ozekwe@gmail.com', 'oezekwe');
    
    expect(engineer.getRole()).toBe('Engineer');
});