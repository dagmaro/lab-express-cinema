// 1. conectar a la BD
require("../db");

// 2. acceder al modelo
const MoviesModel = require("../models/Movie.model.js");
const moviesArr = require("./movies.json");

// 3. insertar a la data en la DB

async function insertMovies () {
  try{
      const response = await MoviesModel.insertMany(moviesArr)
  } catch (err) {
      console.log(err)
  }
}
insertMovies()