const { model, Schema } = require('mongoose')

let accountSchema = new Schema({
  Guild: String,
    User: String,
    Pen: Number,
    Pets: Number,
    Enchant: Number,
    Bank: Number,
    Wallet: Number
  })

module.exports = model("Account", accountSchema);