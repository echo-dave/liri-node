search = require('./searchFunction.js');
inquirer = require('inquirer');


goSearch();
function goSearch() {
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
        // let searchWhat = new Promise(function (resolve, reject) {
        //     search.switchCases(answers.commandInput, answers.searchTerm);
        // })

        // searchWhat.then(function (fulfilled) {
        //     console.log("search");
        //     anotherSearch();
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        search.switchCases(answers.commandInput, answers.searchTerm)
            .then(function (fulfilled) {
                console.log("search");
                anotherSearch();
            })
            .catch(function (error) {
                console.log(error);
            });
    });
};


// Search not working due to unfulfilled promise 
function anotherSearch() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "make another search?",
            name: "reRun"
        }
    ]).then(function (answers) {
        if (answers.reRun) {
            goSearch();
        }
    })
}