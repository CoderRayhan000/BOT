const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.EmbedBuilder()
          .setTitle(`🎁 YES!`)
          .setColor('Random')
          .setDescription(`Hello ${member.user}\n You Have Won The Giveaway!`)
          .setTimestamp()
          .setFooter({
            text: `${member.user.username}`, 
            iconURL: member.user.displayAvatarURL()
           })
        ]
      }).catch(e => {})
    });

  }
}