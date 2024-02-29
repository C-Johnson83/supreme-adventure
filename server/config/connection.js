const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/supreme-adventure");

module.exports = mongoose.connection