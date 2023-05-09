const {model, Schema} = require('mongoose');

let ticketSchema = new Schema({
    Guild: String,
    Channel: String,

});

module.exports = model("Ticket", ticketSchema);