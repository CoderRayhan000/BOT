const { model, Schema } = require('mongoose')

let robloxSchema = new Schema({
  Guild: String,
    User: String,
  })

module.exports = model("roblox", robloxSchema);