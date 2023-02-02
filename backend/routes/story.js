var express = require('express')
const { createStory, createManyStory, updateStory, deleteStory, getSingleStory, getAllStory } = require('../controllers/StoryController.js')
var router = express.Router()

/* create story */
router.post('/', createStory)

/* create many story */
router.post('/createManyStory', createManyStory)

/* update story */
router.put('/:id', updateStory)

/* delete story */
router.delete('/:id', deleteStory)

/* getSingle story */
router.get('/:id', getSingleStory)

/* getAll story */
router.get('/', getAllStory)

module.exports = router
