const { Villain } = require('../models')

const getAllVillains = async () => {
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

const createNewVillain = async (req, res) => {
  try {
    const newVillain = await newVillain(req.body)
    res.send(newVillain)
  } catch (error) {
    throw error
  }
}

const updateVillain = async (req, res) => {
  try {
    const villainId = req.params.villainId
    const updatedVillain = await Villain.update(req.body, {
      where: { id: villainId },
      returning: true
    })
    res.send(updatedObject)
  } catch (error) {
    throw error
  }
}

const deleteVillain = async (req, res) => {
  try {
    const villainId = req.params.villainId
    await Villain.destory({ where: { id: villainId } })
    res.send({ msg: `object with ID ${villainId} deleted` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllVillains,
  getVillainById,
  createNewVillain,
  updateVillain,
  deleteVillain
}
