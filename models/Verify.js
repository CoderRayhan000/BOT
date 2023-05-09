const {model, Schema} = require('mongoose');

let verifySchema = new Schema({
   Guild: String,
   Role: String,
   Answer: String
});

module.exports = model("verify", verifySchema);