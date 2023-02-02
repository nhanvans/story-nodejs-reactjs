var express = require('express');
var router = express.Router();
const categoryRouter = require('./category')
const storyRouter = require('./story')

router.use('/categories', categoryRouter)
router.use('/stories', storyRouter)

module.exports = router;
