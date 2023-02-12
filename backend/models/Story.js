const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Story = new Schema(
  {
    name: { type: String, maxLength: 225, required: true, unique: true },
    image: { type: String },
    author: { type: String, maxLength: 255, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    description: { type: String },
    source: { type: String, maxLength: 255},
    total_chapter: { type: Number, required: true},
    status: { type: String, default: 'Đang ra', required: true },
    chapters: [{ type: Schema.Types.ObjectId, ref: 'Chapter' }],
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", Story);
