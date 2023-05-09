const mongoose = require("mongoose");

const devalert = new mongoose.Schema({
User: String,
Alert: String,
Seen: String
});

module.exports = mongoose.model('alerts', devalert);