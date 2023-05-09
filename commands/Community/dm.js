const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
 
 
 
module.exports = {
  data: new SlashCommandBuilder()
    .setName('dm-user')
    .setDescription('DMs a user')
    .setDMPermission(false)
    .addUserOption(option =>
        option.setName('user')
          .setDescription('The user to send the message to')
          .setRequired(true))
    .addStringOption(option =>
        option.setName('message')
          .setDescription('The message to send to the user')
          .setRequired(true)),
  async execute(interaction) {

    const member = interaction.options.getUser('user');
    const message = interaction.options.getString('message');
 
    const msgEmbed = new EmbedBuilder()
      .setColor(0x808080)
      .setTitle('Message Notice')
      .setDescription(`You have been sent a message. \n **Message:** \n ${message}\n **Info**\n The Member Who Sent The DM Is ${interaction.user.tag}\n The Person Who Sent This Is From\n ${interaction.guild} `)
      .setTimestamp()
      
 
      
let sendmsg = await member.send({ embeds: [msgEmbed] }).catch((err) => { 
  
    interaction.reply('Error')
})
    if (sendmsg) {
      await interaction.channel.sendTyping(),
        await interaction.reply({ content: `Sent Message To ${member.tag}`, enphermal: true})
    }
    if (!sendmsg) {
        await interaction.channel.send({ content: `Couldn't send a message to ${member.tag}`})
    }

}

}