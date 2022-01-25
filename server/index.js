const express = require("express");
const cors = require("cors");
// const movieCtrl = require('./movieController')
const {
  getAllMovies,
  createMovie,
  deleteMovie,
  updateMovie,
} = require("./movieController");
const app = express();

app.use(cors());
app.use(express.json());

// movie end points
app.get("/api/movies", getAllMovies);
app.post("/api/movies", createMovie);
app.delete("/api/movies/:id", deleteMovie);
app.put("/api/movies/:id", updateMovie);

const port = 4004;

app.listen(port, () => console.log(`server is running on ${port}`));
