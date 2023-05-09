const mongoose = require("mongoose");

const antiNukeSchema = new mongoose.Schema({
  guildId: String,
  enabled: Boolean
});

module.exports = mongoose.model('antiNuke', antiNukeSchema);