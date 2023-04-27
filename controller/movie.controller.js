const pool = require("../database/indexx");
const movieController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from movie");
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "Error",
        message: "Can't get The Movie You Wanted to See",
      });
    }
  },

  getByMovieid: async (req, res) => {
    try {
      const { movie_id, title } = req.params;
      const [rows, fields] = await pool.query(
        "select * from movie where movie_id = ? AND title = ?",
        [movie_id, title]
      );
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "Error",
        message: "Can't get The Movie You're Looking for",
      });
    }
  },

  create: async (req, res) => {
    try {
      const { title, duration, launch_date, rating, viewers } = req.body;
      const sql =
        "insert into movie (title, duration, launch_date, rating, viewers) values (?, ?, ?, ?, ?)";
      const [rows, fields] = await pool.query(sql, [
        title,
        duration,
        launch_date,
        rating,
        viewers,
      ]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "Error",
        message: "Failed to Add a New Movie",
      });
    }
  },

  update: async (req, res) => {
    try {
      const { title, duration, launch_date, rating, viewers } = req.body;
      const { movie_id } = req.params;
      const sql =
        "update movie set title = ?, duration = ?, launch_date = ?, rating = ?, viewers = ? where movie_id = ?";
      const [rows, fields] = await pool.query(sql, [
        title,
        duration,
        launch_date,
        rating,
        viewers,
        movie_id,
      ]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "Error",
        message: "Failed to Make Changes",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { movie_id } = req.params;
      const [rows, fields] = await pool.query(
        "delete from movie where movie_id = ?",
        [movie_id]
      );
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "Error",
        message: "Failed to Remove This Movie",
      });
    }
  },
};

module.exports = movieController;
