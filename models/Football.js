const { model, Schema } = require('mongoose')

let footballSchema = new Schema({
  Striker: String,
  Goalkeeper: String,
  SSide: String,
  GSide: String
  })

module.exports = model("football", footballSchema);