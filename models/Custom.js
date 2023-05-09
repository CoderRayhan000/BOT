const { model, Schema } = require("mongoose");

let ccs = new Schema({
	Guild: String,
	Keyword: String,
	Reply: String,
	Type: String,
});

module.exports = model("CustomCommand", ccs);
