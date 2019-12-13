import mongoose from "mongoose";

const CommnetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Comment", CommnetSchema);
export default model;
