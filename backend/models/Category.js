const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema(
  {
    name: { type: String, maxLength: 225, required: true, unique: true },
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", Category);
