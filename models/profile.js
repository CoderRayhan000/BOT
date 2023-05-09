const { model, Schema } = require("mongoose");

let profile = new Schema({
  Guild: String,
  User: String,
  Wallet: Number,
  Bank: Number,
  Inventory: Object,
  Pets: Number,
  Pen: Number
});

module.exports = model("profile", profile);