const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Bond, Movie, Villain } = require('./models')

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

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
