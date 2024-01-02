const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')
const { body } = require('express-validator')

// POST /api/article: Create a new item.
// GET /api/article: Get all items.
// GET /api/article/:id: Get a specific item by ID.
// PUT /api/article/:id: Update a specific item by ID.
// DELETE /api/article/:id: Delete a specific item by ID.


router.get('/article', apiController.index)
router.post('/article',
    body('title').notEmpty().withMessage("title is required"),
    body('snippet').notEmpty().withMessage("snippet is required"),
    body('body').notEmpty().withMessage("body is required")
    , apiController.create)

router.put('/article/:id',
    body('title').notEmpty().withMessage("title is required"),
    body('snippet').notEmpty().withMessage("snippet is required"),
    body('body').notEmpty().withMessage("body is required")
    , apiController.update)




module.exports = router