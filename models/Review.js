const { model, Schema } = require('mongoose')

let reviewSchema = new Schema({
  Guild: String,
    User: String,
    Reviews: Number,
    Stars: Number
  })

module.exports = model("review", reviewSchema);