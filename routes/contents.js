const express = require('express')
const router = express.Router()

const getContents = require('../controllers/getContents');

router.get('/getcontents', getContents)

module.exports = router