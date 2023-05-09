const cc = require('../../models/Custom');
const { EmbedBuilder } = require('discord.js')
module.exports = {
  name: "messageCreate",

  async execute(message, member) {
   
const Data = await cc.findOne({ Guild: message.guild.id})

if(!Data) return;

if(Data.Type === "Embed" && message.content === (`${Data.Keyword}`))  {
    message.channel.send({ embeds: [
        new EmbedBuilder()
        .setColor('Orange')
        .setDescription(`${Data.Reply}`)
    ]})
}

if(Data.Type === "Normal MSG" && message.content === (`${Data.Keyword}`))  {
    message.channel.send({ content:  `${Data.Reply}` 
    })
}


  },
};