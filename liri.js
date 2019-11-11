require("dotenv").config();
const fs = require("fs");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const moment = require("moment");