var express = require('express')
const { createCategory, getSingleCategory, getAllCategory, deleteCategory, updateCategory, createManyCategory } = require('../controllers/CategoryController.js')
var router = express.Router()

/* create category */
router.post('/', createCategory)

/* create many category */
router.post('/createManyCategory', createManyCategory)

/* update category */
router.put('/:id', updateCategory)

/* delete category */
router.delete('/:id', deleteCategory)

/* getSingle category */
router.get('/:id', getSingleCategory)

/* getAll category */
router.get('/', getAllCategory)

module.exports = router
