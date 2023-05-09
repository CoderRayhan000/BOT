const { model, Schema } = require(`mongoose`);

let leaveSchema = new Schema({
    guildid: String,
    channel: String,
})


module.exports = model("leave", leaveSchema);