const express = require("express");
router = express.Router();
const {
  postSongs,
  getAllSongs,
  getSong,
  searchByTitle,
  searchByArtist,
  searchByGenre,
  updateSong,
  deletSong,
  helloworld,
} = require("../controllers/songs");
// const song = require("..models/songs");

// // // Getting All
// router.get("/", (req, res) => {
//   res.send("Helllo World");
// });
//
router.get("/test", helloworld); //get all
//
router.get("/all", getAllSongs); //get all
router.get("/:songID", getSong); // get by id
router.get("/searchByTitle/:songTitleID", searchByTitle); // get by title
router.get("/searchByArtist/:songArtistID", searchByArtist); // get by title
router.get("/searchByGenre/:songGenreID", searchByGenre); // get by title
router.post("/add", postSongs); // add
router.put("/update/:updateID", updateSong);
router.delete("/delete/:songID", deletSong); //delete by id

// // // Getting One
// // router.get("/", (req, res) => {});
// // // Creating One
// // router.get("/", (req, res) => {});
// // // Updating One
// // router.get("/", (req, res) => {});
// // // Deleting One
// // router.get("/", (req, res) => {});

module.exports = router;
