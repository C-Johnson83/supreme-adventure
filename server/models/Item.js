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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  }
});

const Item = model("Item", itemSchema);

module.exports = Item;
