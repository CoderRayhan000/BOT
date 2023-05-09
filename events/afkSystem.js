const { Message, EmbedBuilder, Embed } = require('discord.js')
const DB = require('../../BOT/models/AFKSystem')

module.exports = {
    name: "messageCreate",
    /**
     * @param {Message} message
     */
    async execute(message, member, members) {
        const Data = await DB.findOne({ User: message.author.id })
        
        if(message.author.bot) return;

        if(!Data) return;
        if(message.author.id === Data.User) {
        await DB.deleteOne({ Guild: message.guild.id, User: message.author.id })

message.reply({ embeds: [
    new EmbedBuilder()
    .setColor('Orange')
    .setTitle(`AFK SYSTEM`)
    .setDescription(`Welcome back ${message.author.name} you went AFK <t:${Data.Time}:R> your **Status:** was __${Data.Status}__`)
]})

const tm = message.mentions.users.map(msg => msg.id);

if(tm.length > 0 ) {
    tm.forEach(m => {
        const Data =  DB.findOne({ User: m })

if(Data) {
    message.reply({ content: `The user is afk`})
} else return;
        
    })
}

        }


        
    }
}
