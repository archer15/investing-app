const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  target_id: { type: String, required: true },
  date: { type: Date, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("ChatSchema", ChatSchema);
