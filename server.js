require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
//use of cors//
//Access to XMLHttpRequest at 'http://localhost:5000/songs/test' from origin 'http://localhost:3000' has been blocked by CORS policy:
//Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested
//resource.
const mongoose = require("mongoose");
const songsRouter = require("./routes/songs");

// //configure mongoose to connect mangodb Atlas not local
const mdbUrl = process.env.DATABASE_URL;
// //params
const conneectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//
mongoose
  .connect(mdbUrl, conneectionParams)
  .then(() => {
    console.log("mangodb atlas connected");
  })
  .catch((e) => {
    console.log("Error:", "");
  });

//for deduging
const db = mongoose.Connection;

//meddile_wares
app.use(express.json()); // to accespt json
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/songs", songsRouter);

// //router
// const songsRouter = require("./routes/songs");
// //use routes
// app.use("/songs", songsRouter);

app.listen(process.env.PORT, () => console.log("server started"));
