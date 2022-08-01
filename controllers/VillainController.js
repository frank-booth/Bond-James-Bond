const { Villain } = require('../models')

const getAllVillains = async (req, res) => {
  try {
    const villains = await Villain.find({})
    if (villains.length > 0) {
      res.send(villains)
    }
  } catch (error) {
    throw error
  }
}

const getVillainById = async (req, res) => {
  try {
    const villain = await Villain.findById(req.params.id)
    res.send(villain)
  } catch (error) {
    throw error
  }
}

const createVillain = async (req, res) => {
  try {
    const newVillain = await new Villain(req.body)
    await newVillain.save()
    res.send(newVillain)
  } catch (error) {
    throw error
  }
}

const updateVillain = async (req, res) => {
  try {
    const villain = await Villain.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(villain)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteVillain = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Villain.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send(`Villain with ID ${id} deleted`)
    }
    throw new Error('Villain not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllVillains,
  getVillainById,
  createVillain,
  updateVillain,
  deleteVillain
}
