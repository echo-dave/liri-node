console.log('this is loaded');
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.seatgeak = {
  id: process.env.SEATGEIK_ID,
  secret: process.env.SEATGEEK_SECRET
};

exports.omdb = {
  id: process.env.OMDB_ID
};