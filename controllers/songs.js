//test
const helloworld = (req, res) => {
  res.send("hellow world");
  res.end();
};
const Song = require("../models/songs");
//

//Create Songs
const postSongs = async (req, res) => {
  console.log(req.body);
  try {
    const { title } = req.body;
    const { artist } = req.body;
    const { album } = req.body;
    const { genre } = req.body;
    //
    const newSong = new Song({
      title: title,
      artist: artist,
      album: album,
      genre: genre,
    });
    //
    const savedSong = await newSong.save();
    res.status(200).json({ success: true, data: savedSong });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};

//const GetAllSons
const getAllSongs = async (req, res) => {
  try {
    const getAll = await Song.find();
    res.status(200).json({ success: true, data: getAll });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};

//get Song
const getSong = async (req, res) => {
  const songID = req.params.songID;
  try {
    const getSongByID = await Song.find({ _id: songID });
    res.status(201).json({ success: true, data: getSongByID });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};

//Search by title
const searchByTitle = async (req, res) => {
  const songTitleID = req.params.songTitleID;
  try {
    const getSongByTitleID = await Song.find({ title: songTitleID });
    res.status(201).json({ success: true, data: getSongByTitleID });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};
//

//Search by artist
const searchByArtist = async (req, res) => {
  const songArtistID = req.params.songArtistID;
  try {
    const getSongByArtistID = await Song.find({ artist: songArtistID });
    res.status(201).json({ success: true, data: getSongByArtistID });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};
//

//Search by gener
const searchByGenre = async (req, res) => {
  const songGenreID = req.params.songGenreID;
  try {
    const getSongByGenreID = await Song.find({ genre: songGenreID });
    res.status(201).json({ success: true, data: getSongByGenreID });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};
//

// update Songs
const updateSong = async (req, res) => {
  const updateID = req.params.updateID;
  const { title } = req.body;
  const { artist } = req.body;
  const { album } = req.body;
  const { genre } = req.body;

  //
  try {
    const song = await Song.updateOne(
      { _id: updateID },
      {
        $set: {
          title: title,
          artist: artist,
          album: album,
          genre: genre,
        },
      }
    );

    const updatedSongData = await Song.find({ _id: updateID });
    res.status(200).json({ success: true, data: updatedSongData });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};

//delete song
const deletSong = async (req, res) => {
  const songID = req.params.songID;
  try {
    //await Song.remove({_id: songID});  // onld method which didnt work
    await Song.deleteOne({ _id: songID }); // updated method
    res.status(200).json({ success: true, data: "Song deleted!" });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
    console.log(error);
  }
};

module.exports = {
  postSongs,
  getAllSongs,
  getSong,
  searchByTitle,
  searchByArtist,
  searchByGenre,
  updateSong,
  deletSong,
  helloworld,
};

// module.exports = {
//   helloworld,
// };
