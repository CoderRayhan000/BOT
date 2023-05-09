const { model, Schema } = require('mongoose')

module.exports = model("Features", new Schema({
    GuildID: String,
    LevelSystem: {
        Enabled: {
            type: Boolean,
            default: true,
        },
        Background: {
            type: String,
            default: "https://cdn.discordapp.com/attachments/1058102258862137496/1074159264085590076/rank.png"
        }
    }
}))