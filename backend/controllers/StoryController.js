const Story = require("../models/Story.js")

module.exports = {

    createManyStory: async (req, res) => {
        let { stories } = req.body
        try {
            const savedStories = await Story.create(stories)
            return res.status(200).json({ success: true, message: "Successfully created stories", data: savedStories })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Fail created stories", errors: error })
        }
    },

    createStory: async (req, res) => {
        const story = new Story(req.body)
        try {
            const savedStory = await story.save()
            return res.status(200).json({ success: true, message: "Successfully created Story", data: savedStory })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Fail created Story", errors: error })
        }
    },

    updateStory: async (req, res) => {
        let { id } = req.params
        try {
            const updatedStory = await Story.findByIdAndUpdate(id, { $set: req.body }, { new: true })
            return res.status(200).json({ success: true, message: "Successfully updated Story", data: updatedStory })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Fail updated Story", errors: error })
        }
    },

    getSingleStory: async (req, res) => {
        let { id } = req.params
        try {
            const story = await Story.findById(id)
            return res.status(200).json({ success: true, message: "Successfully get single Story", data: story })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Fail get single Story", errors: error })
        }
    },

    getAllStory: async (req, res) => {
        //for pagination 
        const page = parseInt(req.query.page)
        try {
            if ((!page || page === NaN) && page !== 0) {
                const stories = await Story.find()
                return res.status(200).json({ success: true, count: stories.length, message: "Successfully get all Story", data: stories })
            }
            const stories = await Story.find().skip(page * 3).limit(3)
            return res.status(200).json({ success: true, count: stories.length, message: "Successfully get all Story", data: stories })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Fail get all Story", errors: error })
        }
    },

    deleteStory: async (req, res) => {
        let { id } = req.params
        try {
            const story = await Story.findByIdAndDelete(id)
            return res.status(200).json({ success: true, message: "Successfully delete Story", data: story })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Fail delete Story", errors: error })
        }
    },

    getStoryBySearch: async (req, res) => {
        const { name, author, category } = req.query
        try {
            const stories = await Story.find({ author: author })
            return res.status(200).json({ success: true, count: stories.length, message: "Successfully search stories", data: stories })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Fail search stories", errors: error })
        }
    },

    getFeaturedStory: async (req, res) => {
        try {
            const stories = await Story.find({ featured: true })
            return res.status(200).json({ success: true, count: stories.length, message: "Successfully featured stories", data: stories })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Fail featured stories", errors: error })
        }
    },

    getStoryCount: async (req, res) => {
        try {
            const storyCount = await Story.estimatedDocumentCount()
            return res.status(200).json({ success: true, message: "Successfully count stories", data: storyCount })
        } catch (error) {
            return res.status(500).json({ success: false, message: "Fail count stories", errors: error })
        }
    },
} 
