const { model, Schema } = require('mongoose')

module.exports = model("AFK", new Schema({
    Guild: String,
    User: String,
    Status: String,
    Time: String
}))