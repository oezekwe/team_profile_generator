const inquirer= require('inquirer');
const createCard= require('./src/card-template.js');
const Manager= require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

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
    return inquirer.prompt([
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
    ]);
};

const InternQs= () =>{
    return inquirer.prompt([
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
    ]);
};

function createHTMLfile(){
    
}

function startApp(){
    console.log(ManagerQs());
    ManagerQs().then((replies)=>{
        const manager= new Manager(replies.name, replies.id, replies.email, replies.office);
        //for createCard
        inquirer.prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Would to hire an Engineer or Intern?',
                choices: ['Engineer', 'Intern']
            }
        ]).then((choiceE)=>{
            if(choiceE == 'Engineer'){
                EngineerQs().then((replies)=>{
                    const engineer= new Engineer(replies.name, replies.id, replies.email, replies.username);
                    //for createCard
                });
            }
            else{
                InternQs().then((replies)=>{
                    const intern= new Intern(replies.name, replies.id, replies.email, replies.school);
                    //for createCard
                });
            }
        })
    });
}

startApp();