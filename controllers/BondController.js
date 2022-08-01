const { Bond } = require('../models')

const getAllBonds = async (req, res) => {
  try {
    const bonds = await Bond.find({})
    if (bonds.length > 0) {
      res.send(bonds)
    }
  } catch (error) {
    throw error
  }
}

const getBondById = async (req, res) => {
  try {
    const bond = await Bond.findById(req.params.id)
    res.send(bond)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllBonds,
  getBondById
}
