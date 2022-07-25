const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Villain = new Schema(
  {
    name: { type: String, required: true },
    movies: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    bond: { type: Schema.Types.ObjectId, ref: 'Bond' }
  },
  { timestamps: true }
)

module.exports = Villain
