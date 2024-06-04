const express = require('express')

const router = express.Router()

router.post('/register')
router.post('/activation/:link')

module.exports = router