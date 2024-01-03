const router = require('express').Router()
const userController = require('../controllers/userController')
const { body } = require('express-validator')

router.post('/',
    body('username').notEmpty().withMessage("username is required !"),
    body('password').isLength({ min: 8 }).withMessage("minimum length of password is 8")
    , userController.store)

module.exports = router