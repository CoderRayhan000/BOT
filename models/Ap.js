const mongoose = require("mongoose");

const addPremuim = new mongoose.Schema({
  User: String
});

module.exports = mongoose.model('ap', addPremuim);