const express = require('express')
const router = express.Router()
const recordController = require('../controllers/record-controller')
const userController = require('../controllers/user-controller')


router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/records', recordController.getRecords)

router.use('/', (req, res) => res.redirect('/records'))

module.exports = router
