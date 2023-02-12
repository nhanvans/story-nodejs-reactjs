var express = require('express')
const { createStory, createManyStory, updateStory, deleteStory, getSingleStory, getAllStory, getStoryBySearch, getFeaturedStory, getStoryCount } = require('../controllers/StoryController.js')
var router = express.Router()

/* create story */
router.post('/', createStory)

/* create many story */
router.post('/createManyStory', createManyStory)

/* update story */
router.put('/:id', updateStory)

/* delete story */
router.delete('/:id', deleteStory)

/* get story by search */
router.get('/search/getStoryBySearch', getStoryBySearch)

/* get story by featured */
router.get('/search/getStoryByFeatured', getFeaturedStory)

/* get story by count */
router.get('/search/getStoryByCount', getStoryCount)

/* getSingle story */
router.get('/:id', getSingleStory)

/* getAll story */
router.get('/', getAllStory)

module.exports = router
