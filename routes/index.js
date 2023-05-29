const express = require('express')
const router = express.Router()
const recordController = require('../controllers/record-controller')
const userController = require('../controllers/user-controller')
const { authenticated } = require('../middleware/auth')
const { generalErrorHandler } = require('../middleware/error-handler')
const passport = require('../config/passport')

router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
router.get('/logout', userController.logout)

router.get('/records/create', authenticated, recordController.createRecord)
router.get('/records/:id/edit', authenticated, recordController.editRecord)
router.put('/records/:id', authenticated, recordController.putRecord)
router.delete('/records/:id', authenticated, recordController.deleteRecord)
router.post('/records', authenticated, recordController.postRecord)
router.get('/records', authenticated, recordController.getRecords)

router.use('/', (req, res) => res.redirect('/records'))
router.use('/', generalErrorHandler)

module.exports = router
