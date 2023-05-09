const {model, Schema} = require('mongoose');

let warnSchema = new Schema({
    Guild: String,
    WUser: String,
    EUser: String,
    Reason: String,
    Warns: Number,

});

module.exports = model("warn", warnSchema);
