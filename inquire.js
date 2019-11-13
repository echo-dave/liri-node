search = require('./liri.js');
inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "list",
        message: "what would you like to search for?",
        choices: ["spotify-this-song", "concert-this", "movie-this", "do-what-it-says"],
        default: "do-what-it-says",
        name: "commandInput"
    },
    {
        type: "input",
        message: "What do you want to search for?",
        name: "searchTerm",
        when: function (answers) {
            return answers.commandInput !== "do-what-it-says"
        }
    }

]).then(function (answers) {
    search.switchCases(answers.commandInput, answers.searchTerm);
    // console.log(answers);
})