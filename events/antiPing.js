const Schema = require('../../Ray/models/antiPing')
const { PermssionBitField, EmbedBuilder } = require('discord.js')

module.exports = {
    name: "messageCreate",

    async execute(message) {


const Data = await Schema.findOne({
    Guild: message.guild.id
})

if(!Data) return;

const embed = new EmbedBuilder()
.setColor('Orange')
.setTitle(':warning:')
.setDescription(`You are not allowed to ping everyone ${message.author}`)
const ping = "@everyone"
const alarm = "@here"

if(message.content === (`${ping}`)) {
message.delete()
message.channel.send({ embeds: [embed]})
}

if(message.content === (`${alarm}`)) {
    message.delete()
    message.channel.send({ embeds: [embed]})
    }
    

    }
}
