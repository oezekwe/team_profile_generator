const generateManager= manager=>{
    return `
        <div class="card">
            <div class="cardHeader">
                <h2>${manager.name}</h2>
                <h3><i class="fas fa-mug-hot">&ensp;</i>${manager.getRole()}</h3>
            </div>
            <div class="info">
                <ul>
                    <li>ID: ${manager.id}</li>
                    <li>Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
                    <li>Office number: ${manager.phone}</li>
                </ul>
            </div>
        </div>`;
};

const generateEngineer= engineer=>{
    return `
    <div class="card">
        <div class="cardHeader">
            <h2>${engineer.name}</h2>
            <h3><i class="fas fa-glasses">&ensp;</i>${engineer.getRole()}</h3>
        </div>
        <div class="info">
            <ul>
                <li>ID: ${engineer.id}</li>
                <li>Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
                <li>Github: <a href="https://github.com/${engineer.getGithub()}"
                target= "_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>`;
};

const generateIntern= intern=>{
    return `
    <div class="card">
        <div class="cardHeader">
            <h2>${intern.name}</h2>
            <h3><i class="fas fa-user-graduate">&ensp;</i>${intern.getRole()}</h3>
        </div>
        <div class="info">
            <ul>
                <li>ID: ${intern.id}</li>
                <li>Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
                <li>School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
};

const displayCards= cardData=>{
    const htmlcards= [];
    htmlcards.push(cardData.filter(person=>person.getRole() === 'Manager')
        .map(manager=>generateManager(manager))
    );
    htmlcards.push(cardData.filter(person=>person.getRole() === 'Engineer')
        .map(engineer=>generateEngineer(engineer)).join('')
    );
    htmlcards.push(cardData.filter(person=>person.getRole() === 'Intern')
        .map(intern=>generateIntern(intern)).join('')
    );
    return htmlcards.join('');
};

module.exports= (team)=>{
    return `<!DOCTYPE html> <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <script src="https://kit.fontawesome.com/d2314c2892.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <div id="title_banner">My Team</div>
        <div class="formatDeck">
        ${displayCards(team)}
        </div>
    </body>
    </html>`;
}

