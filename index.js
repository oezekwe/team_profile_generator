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
            message: 'Type in the manager\'s name: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Type in ID#: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Type in email address: '
        },
        {
            type: 'input',
            name: 'office',
            message: 'Type in office number: '
        }
    ]);
};

const EngineerQs= () =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Type in the engineer\'s name: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Type in ID#: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Type in email address: '
        },
        {
            type: 'input',
            name: 'username',
            message: 'Type in github username: '
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
            message: 'Type in the intern\'s name: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Type in ID#: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Type in email address: '
        },
        {
            type: 'input',
            name: 'school',
            message: 'Type in school name: '
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
            message: 'Would you like to hire an Engineer or Intern or finish building your team?',
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
            const htmlData= createCard(team);
            fs.writeFileSync('./dist/results.html', htmlData);
        }
    })
};

function createHTMLfile(fileName, data){
    
}

function startApp(){
    //console.log(ManagerQs());
    ManagerQs().then((replies)=>{
        const manager= new Manager(replies.name, replies.id, replies.email, replies.office);
        team.push(manager);
        leaderChoice();
    });
}

startApp();