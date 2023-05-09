const mongoose = require("mongoose");

const automod = new mongoose.Schema({
  Guild: String,
  LogChannel: String,
  AntiUnverifiedBot: Boolean,
  AntiSwear: Boolean,
  AntiLink: Boolean,
  AntiPing: Boolean,
  AntiAltAccount: Boolean,
});

module.exports = mongoose.model('automod', automod);