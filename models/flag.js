const mongoose = require("mongoose");

const flagSchema = new mongoose.Schema({
  Guild: String,
  Word: String
});

module.exports = mongoose.model('flagword', flagSchema);