const { model, Schema } = require(`mongoose`);

let welcomeSchema = new Schema({
    guildid: String,
    channel: String,
    role: String,
})


module.exports = model(`welcomeSchema`, welcomeSchema);