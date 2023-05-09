const { model, Schema } = require('mongoose')

let moneySchema = new Schema({
   Guild: String,
  User: String,
  Daily: Number,
  Inventory: String,
});

module.exports = model("MoneyActions", moneySchema);