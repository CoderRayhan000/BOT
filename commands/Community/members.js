const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("member-count")
    .setDescription("Get the server's member count"),

  async execute(interaction) {
    const guild = interaction.guild;
    const members = await guild.members.fetch({ force: true });

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("Member Count")
      .setDescription(`**${guild.name}'s** Member Count.`)
      .addFields(
        {
          name: `**Members:**`,
          value: `${members.filter((member) => !member.user.bot).size} members`,
        },
        {
          name: `**Bots:**`,
          value: `${members.filter((member) => member.user.bot).size} bots`,
        },
        { name: `**Total Members:**`, value: `${members.size} members` }
      )
      .setFooter({ text: guild.name, iconURL: guild.iconURL() })
      .setTimestamp();

    interaction.reply({
      embeds: [embed],
    });
  },
};