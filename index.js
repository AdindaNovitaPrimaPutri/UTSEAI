const express = require("express");
const app = express();
const dotenv = require("dotenv");

require("dotenv").config();

const movieRouter = require("./routes/movie.router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/movie", movieRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
