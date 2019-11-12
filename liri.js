const Spotify = require('node-spotify-api');
require("dotenv").config();
const fs = require("fs");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const moment = require("moment");

//commands
let commandInput = process.argv[2];
let searchTerm = "";

for (let i = 3; i < process.argv.length; i++) {
    searchTerm += `${process.argv[i]} `;
//   console.log("arg " + i, process.argv[i]);
}

//console.log(commandInput);
//console.log(searchTerm);

/* concert-this
spotify-this-song
movie-this
do-what-it-says */

switch (commandInput) {
    case 'concert-this':
        console.log('searching concert');

        break;
    case 'spotify-this-song':
        console.log('searching song');
       searchSpot(searchTerm);

//        console.log("search " + searchTerm);
        break;
    case 'movie-this':
        console.log('searching movies');

        break;
    case 'do-what-it-says':
        console.log('doing what it says');

        break;

}


function searchSpot(searchTerm) {spotify.search({
    type: 'track',
    query: `"${searchTerm}"`,
}, function (err, data) {
    if (err) {
        return console.log('Error: ' + err);
    }
    for (let i = 0; i < data.tracks.items.length; i++) {
        // console.log(data.tracks.items[i]);
        console.log(`artist(s): `);
        for (let c = 0; c < data.tracks.items[i].artists.length; c++) {
            console.log("  " + data.tracks.items[i].artists[c].name);
        }

        console.log("track: \n  " + data.tracks.items[i].name);
        console.log("preview: \n  " + data.tracks.items[i].preview_url);
        console.log("albumn: \n  " + data.tracks.items[i].album.name);
        console.log("\n -------------- \n");


    }


});
}