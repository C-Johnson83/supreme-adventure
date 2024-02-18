const { Schema, model } = require("mongoose");

const giftSchema = new Schema({
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

const Gift = model("Gift", giftSchema);

module.exports = Gift;
