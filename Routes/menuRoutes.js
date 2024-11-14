const express = require('express')
const router = express.Router()
const menuController = require('../Controllers/menuController')

router.post('/addMenu',menuController.addMenu)
router.get('/getMenu',menuController.getMenu)
module.exports = router