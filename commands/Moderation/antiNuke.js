const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const antiNuke = require("../../Ray/models/Antinuke");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup-antinuke")
    .setDescription("Setup AntiNuke for your server"),

  async execute(interaction, client) {

    
    const guildId = interaction.guildId;
    const enabled = interaction.options.getBoolean("enabled");

    // const { guild, user, options } = interaction; nothing is being is used

    let antiNukers = await antiNuke.findOne({ guildId: guildId });
    if (!antiNukers) {
      antiNukers = new antiNuke({
        guildId: guildId,
        enabled: true,
      });
      antiNukers.save();
      interaction.reply({ content: `Setup the anti nuke system`})

    } else {
      antiNukers.enabled = false;
      antiNukers.save();
      interaction.reply({ content: `Found data so deleted the system `})
    }
   

  }
}
