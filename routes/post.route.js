const express = require('express')
const postModel = require('../models/post.model')
const postController = require('../controllers/post.controller')

const router = express.Router()

router.get('/get', postController.getAll)
router.post('/create', postController.create)

module.exports = router
