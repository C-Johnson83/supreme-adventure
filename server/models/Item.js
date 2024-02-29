const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  purchased: {
    type: Boolean,
    default: false  // Set default value to false for items that are not yet purchased
  }
});

module.exports = model('Item', itemSchema);
