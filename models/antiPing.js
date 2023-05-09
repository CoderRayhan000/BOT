const mongoose = require("mongoose");

const antiPing = new mongoose.Schema({
Guild: String
});

module.exports = mongoose.model('noping', antiPing);