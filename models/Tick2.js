const {model, Schema} = require('mongoose');

let ticket2 = new Schema({
    Guild: String,
    Channel: String,
    Claimed: Boolean,
    Claimer: String,
    Closed: Boolean,
    Closer: String,


});

module.exports = model("userTicket", ticket2);