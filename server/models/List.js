const { Schema, model } = require("mongoose");

const listSchema = new Schema(
    {
        owner: {
            type: String,
            required: true
        },
        accessCode: {
            type: String,
            required: true
        },
        listType: {
            type: String,
            required: true
        },
        listName: {
            type: String,
            required: true
        },
        eventDate: {
            type: Date
        },
        items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
    }
);

const List = model("List", listSchema);

module.exports = List;