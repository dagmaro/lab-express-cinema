const express = require("express");
const app = require("../app");
const MoviesModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// GET "/movies" => renderizar

router.get("/movies", (req, res, next) => {
  MoviesModel.find()
    //.select("title")
    .then((movies) => {
      console.log(movies);
      res.render("movie/movies.hbs", {
        listOfmovies: movies,
      });
    })
    .catch((error) => {
      next(error);
    });
});

// GET "/movie/id"
router.get("/movies/:movieId", (req, res, next) => {
  console.log(req.params.movieId);
  const { movieId } = req.params;
  MoviesModel.findById(movieId)
    .then((response) => {
      console.log(response);
      res.render("movie/details.hbs", {
        detailsOfOneMovie: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
