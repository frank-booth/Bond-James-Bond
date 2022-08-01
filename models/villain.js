const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Villain = new Schema(
  {
    name: { type: String, required: true },
    movies: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    bond: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Villain
