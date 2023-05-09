const { model, Schema } = require("mongoose");

let level = new Schema({
  Guild: String,
  State: Number,
});

module.exports = model("switch-system", level);