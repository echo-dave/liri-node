require('./liri');
inquirer = require('inquirer');

inquirer.prompt([
    {
        type:"list",
        message:"what would you like to search for?",
        choices:["spotify", "live music", "movies"],
        default:"randomDo",
        name:"searchType"
    }
]).next({
    type:"input",
    message:"What do you want to search for?",
    name:"input"
}).then(function (answers){
    console.log(answers);
})
