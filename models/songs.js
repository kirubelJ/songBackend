//Schema
const mongoose = require("mongoose");

const Songs = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
});

const Song = mongoose.model("Songs", Songs);

module.exports = Song;
