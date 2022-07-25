const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Villain = new Schema(
  {
    name: { type: String, required: true },
    movies: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    bond_Id: { type: Schema.Types.ObjectId, ref: 'Bond' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('villains', Villain)