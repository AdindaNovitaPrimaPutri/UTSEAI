const express = require("express");
const router = express.Router();

const movieController = require("../controller/movie.controller");

router.get("/", movieController.getAll);
router.get("/:movie_id/:title", movieController.getByMovieid);
router.post("/", movieController.create);
router.put("/:movie_id", movieController.update);
router.delete("/:movie_id", movieController.delete);

module.exports = router;
