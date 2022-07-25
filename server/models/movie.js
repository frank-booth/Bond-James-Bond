const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
  {
    name: { type: String, required: true },
    year_released: { type: String, required: true },
    poster: { type: String, required: true },
    bond: { type: Schema.Types.ObjectId, ref: 'Bond' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('movies', Movie)
