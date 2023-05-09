const { model, Schema } = require("mongoose");

let todo = new Schema({
	Guild: String,
    User: String,
    Name: String,
    Description: String,

});

module.exports = model("td", todo);
