const generateManager= manager=>{
    return `
        <div class="card">
            <div class="cardHeader">
                <h2>Name</h2>
                <h3>Role</h3>
            </div>
            <div class="info">
                <ul>
                    <li>ID: </li>
                    <li>Email: </li>
                    <li>Office number: </li>
                </ul>
            </div>
        </div>
    `;
};

const generateEngineer= engineer=>{
    if(engineer===null){
        return '';
    }
    else{
        return `
        <div class="card">
            <div class="cardHeader">
                <h2>Name</h2>
                <h3>Role</h3>
            </div>
            <div class="info">
                <ul>
                    <li>ID: </li>
                    <li>Email: </li>
                    <li>Github: </li>
                </ul>
            </div>
        </div>
        `;
    }
};

const generateIntern= intern=>{
    if(intern===null){
        return '';
    }
    else{
        return `
        <div class="card">
            <div class="cardHeader">
                <h2>Name</h2>
                <h3>Role</h3>
            </div>
            <div class="info">
                <ul>
                    <li>ID: </li>
                    <li>Email: </li>
                    <li>School: </li>
                </ul>
            </div>
        </div>
        `;
    }
};

module.exports= (cardData)=>{
    return `<!DOCTYPE html> <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <div id="title_banner">My Team</div>
        ${generateManager(cardData.Manager)}
        ${generateEngineer(cardData.Engineer)}
        ${generateIntern(cardData.Intern)}
    </body>
    </html>`;
}

