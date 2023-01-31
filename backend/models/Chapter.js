const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Chapter = new Schema(
  {
    story: { type: Schema.Types.ObjectId, ref: 'Story' },
    title: { type: String, maxLength: 225, required: true },
    content: { type: String },
    num: { type:Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chapter", Chapter);
