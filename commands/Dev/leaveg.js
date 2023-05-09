const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("leave-guild")
    .setDescription("a devoloper makes the bot leave a server!")
    .addStringOption(option =>
      option.setName("guildid")
          .setDescription("guildid")
          .setRequired(true)
    ),
                   
                    async execute(interaction, client) {

                      if(!interaction.user.id === '971634347197202453') return;

                      interaction.reply({ content: "Bot Has Left The Server", ephemeral: true})

                      const guildid = interaction.options.getString("guildid");

                      const guild = client.guilds.cache.get(guildid)

                      guild.leave().catch(() => {
                    return false;
                    });

                    }
}
