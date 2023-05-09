const { model, Schema } = require('mongoose')

let invSchema = new Schema({
    Pen: Number
  })

module.exports = model("inv", invSchema);