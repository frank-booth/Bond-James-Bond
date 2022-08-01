const mongoose = require('mongoose')
const bondSchema = require('./Bond')
const movieSchema = require('./Movie')
const villainSchema = require('./Villain')

const Bond = mongoose.model('Bond', bondSchema)
const Movie = mongoose.model('Movie', movieSchema)
const Villain = mongoose.model('Villain', villainSchema)

module.exports = {
  Bond,
  Movie,
  Villain
}
