const Category = require("../models/Category.js");

module.exports = {
    createManyCategory: async (req, res) => {
        let { categories } = req.body;
        try {
            const savedCategories = await Category.create(categories);
            return res
                .status(200)
                .json({
                    success: true,
                    message: "Successfully created categories",
                    data: savedCategories,
                });
        } catch (error) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: "Fail created categories",
                    errors: error,
                });
        }
    },

    createCategory: async (req, res) => {
        const category = new Category(req.body);
        try {
            const savedCategory = await category.save();
            //   res.header("Access-Control-Allow-Origin", "*");
            //   res.header("Access-Control-Allow-Methods", "GET, POST");
            //   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
            //   res.header("Access-Control-Allow-Credentials", "true");
            return res
                .status(200)
                .json({
                    success: true,
                    message: "Successfully created category",
                    data: savedCategory,
                });
        } catch (error) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: "Fail created category",
                    errors: error,
                });
        }
    },

    updateCategory: async (req, res) => {
        let { id } = req.params;
        try {
            const updatedCategory = await Category.findByIdAndUpdate(
                id,
                { $set: req.body },
                { new: true }
            );
            return res
                .status(200)
                .json({
                    success: true,
                    message: "Successfully updated category",
                    data: updatedCategory,
                });
        } catch (error) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: "Fail updated category",
                    errors: error,
                });
        }
    },

    getSingleCategory: async (req, res) => {
        let { id } = req.params;
        try {
            const category = await Category.findById(id);
            return res
                .status(200)
                .json({
                    success: true,
                    message: "Successfully get single category",
                    data: category,
                });
        } catch (error) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: "Fail get single category",
                    errors: error,
                });
        }
    },

    getAllCategory: async (req, res) => {
        try {
            const categories = await Category.find().sort({ createdAt: "desc" });
            return res
                .status(200)
                .json({
                    success: true,
                    count: categories.length,
                    message: "Successfully get all category",
                    data: categories,
                });
        } catch (error) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: "Fail get all category",
                    errors: error,
                });
        }
    },

    deleteCategory: async (req, res) => {
        let { id } = req.params;
        try {
            const category = await Category.findByIdAndDelete(id);
            return res
                .status(200)
                .json({
                    success: true,
                    message: "Successfully delete category",
                    data: category,
                });
        } catch (error) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: "Fail delete category",
                    errors: error,
                });
        }
    },
};
