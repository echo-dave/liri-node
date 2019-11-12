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
        searchMusic(searchTerm);
        break;
    case 'spotify-this-song':
        console.log('searching song');
        searchSpot(searchTerm);

        //        console.log("search " + searchTerm);
        break;
    case 'movie-this':
        console.log('searching movies');
        searchMovies(searchTerm);

        break;
    case 'do-what-it-says':
        console.log('doing what it says');

        break;

}

// Spotify Search funtion
function searchSpot(searchTerm) {
    spotify.search({
        type: 'track',
        query: `"${searchTerm}"`,
    }, function (err, data) {
        if (err) {
            return console.log('Error: ' + err);
        }
        // loop through the resuling items
        for (let i = 0; i < data.tracks.items.length; i++) {
            console.log(`artist(s): `);
            //if multiple artists for a song listing loop through them
            for (let c = 0; c < data.tracks.items[i].artists.length; c++) {
                console.log("  " + data.tracks.items[i].artists[c].name);
            }
            //output remaining info for a song result
            console.log("track: \n  " + data.tracks.items[i].name);
            console.log("preview: \n  " + data.tracks.items[i].preview_url);
            console.log("albumn: \n  " + data.tracks.items[i].album.name);
            console.log("\n -------------- \n");


        }


    });
}

//search music events by band / peroformer name
function searchMusic (searchTerm) {
    axios.get(`https://api.seatgeek.com/2/events?client_id=${keys.seatgeak.id}&performers.slug=${searchTerm}`)
    .then(function (response){
        for (let i=0; i < response.data.events.length; i++) {
        console.log(`
Performer:
  ${response.data.events[i].performers[0].name}
venue:
  ${response.data.events[i].venue.name}
  ${response.data.events[i].venue.city}
  ${moment(response.data.events[i].datetime_local).format("MM/DD/YYYY")}
___________  `);
        }

    })
    .catch(function (error) {
        console.log("An error occured " + error);
    });


};

//search movies
function searchMovies (searchTerm) {
    axios.get(`http://www.omdbapi.com/?apikey=${keys.omdb.id}&t=${searchTerm}`)
    .then(function (response) {
        console.log(`
Title: ${response.data.Title}
Released: ${response.data.Year}
IMDB: ${response.data.imdbRating}
Rotten Tomatores: ${response.data.Ratings[1].Value}
Country Produced: ${response.data.Country}
Language: ${response.data.Language}
Plot: ${response.data.Plot}
Actors: ${response.data.Actors}`)


    })
    .catch (function(error){
        console.log("An error occured " + error);
    })

}