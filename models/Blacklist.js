const mongoose = require("mongoose");

const blacklist = new mongoose.Schema({
User: String,
Reason: String,
});

module.exports = mongoose.model('black', blacklist);