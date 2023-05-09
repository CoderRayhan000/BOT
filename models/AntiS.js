const mongoose = require('mongoose')

const antiSwearSchema = new mongoose.Schema({
    Guild: String
})

module.exports = mongoose.model('antiS', antiSwearSchema);