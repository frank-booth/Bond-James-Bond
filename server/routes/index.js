const { Router } = require('express')
const router = Router()
const bondController = require('../controllers/BondController.js')

router.get('/bonds', bondController.getAllBonds)
router.get('./bonds/:id', bondController.getBondById)
