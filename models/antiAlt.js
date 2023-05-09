const mongoose = require("mongoose");

const antiAltSchema = new mongoose.Schema({
Guild: String
});

module.exports = mongoose.model('antiAlt', antiAltSchema);