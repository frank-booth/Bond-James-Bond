const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bond = new Schema(
  {
    name: { type: String, required: true },
    years: { type: String, required: true },
    movie_count: { type: Number, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Bond
