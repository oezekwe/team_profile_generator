const fs = require('fs');
const inquirer= require('inquirer');
const createCard= require('./src/card-template.js');
const Manager= require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const team= [];

const ManagerQs= () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name: ',
            validate: nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter ID#: ',
            validate: IDinput=>{
                var num= parseFloat(IDinput);
                if(Number.isInteger(num)){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address: ',
            validate: inputEmail=>{
                if(inputEmail.includes('@') && (inputEmail.endsWith('.com') || 
                inputEmail.endsWith('.org') || inputEmail.endsWith('.net'))){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter office#: ',
            validate: phone=>{
                var num= parseFloat(phone);
                if(Number.isInteger(num)){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.')
                    return false;
                }
            } 
        }
    ]);
};

const EngineerQs= () =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name: ',
            validate: nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter ID#: ',
            validate: IDinput=>{
                var num= parseFloat(IDinput);
                if(Number.isInteger(num)){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address: ',
            validate: inputEmail=>{
                if(inputEmail.includes('@') && (inputEmail.endsWith('.com') || 
                inputEmail.endsWith('.org') || inputEmail.endsWith('.net'))){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter github\'s username: ',
            validate: user=>{
                if(user){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.')
                    return false;
                }
            } 
        }
    ]).then((replies)=>{
        const engineer= new Engineer(replies.name, replies.id, replies.email, replies.username);
        team.push(engineer);
        leaderChoice();
    })
};

const InternQs= () =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name: ',
            validate: nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter ID#: ',
            validate: IDinput=>{
                var num= parseFloat(IDinput);
                if(Number.isInteger(num)){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address: ',
            validate: inputEmail=>{
                if(inputEmail.includes('@') && (inputEmail.endsWith('.com') || 
                inputEmail.endsWith('.org') || inputEmail.endsWith('.net'))){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter school\'s name: ',
            validate: value=>{
                if(value){
                    return true;
                }
                else{
                    console.log('\nInvalid input. Please try again.')
                }
            }
        }
    ]).then((replies)=>{
        const intern= new Intern(replies.name, replies.id, replies.email, replies.school);
        team.push(intern);
        leaderChoice();
    })
};

const leaderChoice= ()=>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Would you like to hire an Engineer or Intern; or are have you finish building your team?',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ]).then((decision)=>{
        if(decision.employee==='Engineer'){
            EngineerQs();
        }
        else if(decision.employee==='Intern'){
            InternQs();
        }
        else{
            fs.writeFileSync('./dist/results.html', createCard(team));
        }
    })
};

function startApp(){
    //console.log(ManagerQs());
    ManagerQs().then((replies)=>{
        const manager= new Manager(replies.name, replies.id, replies.email, replies.office);
        team.push(manager);
        leaderChoice();
    });
}

startApp();