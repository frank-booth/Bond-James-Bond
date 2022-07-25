const { Movie } = require('../models')

const getAllMovies = async () => {
  try {
    const movies = await Movie.find({})
    if (movies.length > 0) {
      res.send(movies)
    }
  } catch (error) {
    throw error
  }
}

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.send(movie)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllMovies,
  getMovieById
}
