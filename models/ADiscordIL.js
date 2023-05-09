const mongoose = require("mongoose");

const antiDiscordIL = new mongoose.Schema({
Guild: String
});

module.exports = mongoose.model('antiInvite', antiDiscordIL);