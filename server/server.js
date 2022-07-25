const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Bond, Movie, Villain } = require('./models')
const villainController = require('./controllers/VillainController.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/bonds', async (req, res) => {
  const bonds = await Bond.find({})
  res.json(bonds)
})

app.get('/bonds/:id', async (req, res) => {
  try {
    const { id } = req.params
    const bond = await Bond.findById(id)
    if (!bond) throw Error('Bond not found')
    res.json(bond)
  } catch (e) {
    console.log(e)
    res.send('Bond not found!')
  }
})

app.get('/movies', async (req, res) => {
  const movies = await Movie.find({})
  res.json(movies)
})

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findById(id)
    if (!movie) throw Error('Movie not found')
    res.json(movie)
  } catch (e) {
    console.log(e)
    res.send('Movie not found!')
  }
})

app.get('/villains', async (req, res) => {
  const villains = await Villain.find({})
  res.json(villains)
})

app.get('/villains/:id', async (req, res) => {
  try {
    const { id } = req.params
    const villain = await Villain.findById(id)
    if (!villain) throw Error('Villain not found')
    res.json(villain)
  } catch (e) {
    console.log(e)
    res.send('Villain not found!')
  }
})

app.post('/villains', async (req, res) => {
  try {
    const newVillain = await new Villain(req.body)
    await newVillain.save()
    res.send(newVillain)
  } catch (error) {
    throw error
  }
})

app.put('/villains/:id', async (req, res) => {
  try {
    const villain = await Villain.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(villain)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.delete('/villains/:id', async (req, res) => {
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
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
