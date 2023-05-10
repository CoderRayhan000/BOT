const {
    Client,
    EmbedBuilder,
    PermissionFlagsBits,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
  } = require("discord.js");
const Schema = require("../../Ray/models/AntiS");
const AntiSwear = require('../../Ray/System/BadWords.json');

module.exports = {
  name: "messageCreate",

  async execute(message) {
   

    const data = await Schema.findOne({
        Guild: message.guild.id
    })

      if (!data) return;

      const Swear = AntiSwear.known_links;


      const embed = new EmbedBuilder()
      .setColor('Blue')
      .setDescription(
        `:warning: ${message.author} no swearing in ${message.guild.name}.`
      );

    for (let i in Swear) {
      if (message.content.toLowerCase().includes(Swear[i].toLowerCase())) {
        try {
          await message.delete();
          message.channel.send({ embeds: [embed]})
        } catch (err) {
          return;
        }

  }
}
  }
}
