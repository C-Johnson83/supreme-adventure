const { Schema, model } = require("mongoose");
const  itemSchema  = require('./Item')

const listSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        accessCode: {
            type: String,
            required: true
        },
        listType: {
            type: String,
            // required: true
        },
        listName: {
            type: String,
            required: true
        },
        eventDate: {
            type: Date
        },
        items: [itemSchema]
    })

const List = model("List", listSchema);

module.exports = List;
