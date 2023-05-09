const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, PermissionFlagsBits, ButtonStyle, ActionRowBuilder, ChannelType } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("suggest")
        .setDescription("Place a suggestion.")
        .addStringOption(option =>
            option.setName("name")
                .setDescription("Name Your Suggestion")
                .setRequired(true)       
        )
        .addStringOption(option =>
            option.setName("description")
                .setDescription("Describe your suggestion clearly.")
                .setRequired(true)
        )
        .addChannelOption(option =>
          option.setName("channel")
              .setDescription("Channel you want to send your suggestion to.")
              .setRequired(true)
              .addChannelTypes(ChannelType.GuildText)
      ),

    async execute(interaction) {
        const { guild, options, member } = interaction;

        const name = options.getString("name");
        const description = options.getString("description");
        const channel = options.getChannel("channel")

        const embed = new EmbedBuilder()
            .setColor("Green")
          .setDescription(`A Suggestion Made By ${member}`)
            .addFields(
                { name: "Suggestion:", value: `${name}`},
              { name: "Description:", value: `${description}` },
            )
      .setFooter( { text: member.user.tag, iconURL: member.displayAvatarURL ({ dynamic: true}) })
      await guild.channels.cache.get(channel)
      channel.send({
        embeds: ([embed]),
      }).then((s) => {
        s.react('✅');
        s.react('❌');
      }).catch((err) => {
      throw err;  
      });

      interaction.reply({ content: ":white_check_mark: | Your Suggestion Has Been Submitted", ephemeral: true })

      }
    }