const { Router } = require('express')
const router = Router()
const bondController = require('../controllers/BondController.js')
const movieController = require('../controllers/MovieController.js')
const villainController = require('../controllers/VillainController.js')

router.get('/bonds', bondController.getAllBonds)
router.get('./bonds/:id', bondController.getBondById)

router.get('/movies', movieController.getAllMovies)
router.get('./movies/:id', movieController.getMovieById)

router.get('/villains', villainController.getAllVillains)
router.get('./villains/:id', villainController.getVillainById)
router.post('./villains', villainController.createVillain)
router.put('./villains/:id', villainController.updateVillain)
router.delete('./villains/:id', villainController.deleteVillain)
