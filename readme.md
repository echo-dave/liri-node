# Liri - a nodejs command line app  
## Purpose  
Liri is a node command line app that searches for songs, concerts, or movies based on queries issued to it through an Inquirer prompt system.

## Development
Liri was developed uing a total of 4 functions in searchFunctions.js: 3 for the search functions and one for the switch case use to determin which search is desired. Once all that as tested, Inquirer promps were added as liri.js to provide a more user friendly interface to avoid typos for the search functions. To run yourself you can clone the repo and run (assuming you have node installed) run `npm install` for getting the required modules instaled. Following that setup you can simply run `node liri.js`. 

### Updates
1. Once a search has been completed and returned it will now ask if you'd like to search again!
2. Now able to run `./liriBot` script to execute instead of `node liri.js`

### Technology  
* Node JS
* Node Moduels
    * Axios
    * DotEnv
    * fs
    * Moment
    * Node-spotify-api
    * Inquirer
* API data
    * Seatgeek
    * OMDB
    * Spotify

![LiriBotDemo](node_liri.gif)