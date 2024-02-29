const { Schema, model } = require("mongoose");

const listSchema = new Schema({
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
    items: [{
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
            default: false
        }
    }]
});

const List = model("List", listSchema);

module.exports = List;
