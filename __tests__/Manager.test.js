const Manager= require('../lib/Manager');

test('create a manager object', () => {
    const manager= new Manager('Mike', 7, 'ozekwe@gmail.com', 2812924740);

    expect(manager.name).toBe('Mike');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('ozekwe@gmail.com');
});

test('get manager\'s name, id, email, and phone# from object', () => {
    const manager= new Manager('Mike', 7, 'ozekwe@gmail.com', 2812924740);

    expect(manager.getName()).toBe('Mike');
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toBe('ozekwe@gmail.com');
    expect(manager.phone).toEqual(expect.any(Number));
});

test('get type of job role from object', () => {
    const manager= new Manager('Mike', 7, 'ozekwe@gmail.com', 2812924740);
    
    expect(manager.getRole()).toBe('Manager');
});

test('checks if email contains @ and ends with .com, .net, or .org', ()=>{
    const email= 'ozekwe@gmail.com';
    var state;
    if(email.includes('@') && (email.endsWith('.com') || 
    email.endsWith('.org') || email.endsWith('.net'))){
        state= true;
    }
    else{
        state= false;
    }
    expect(state).toBe(true);
});
