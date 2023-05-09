const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ChannelType, Embed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("spam-message")
        .setDescription("Spam a message to a certain channel (x3)")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .addStringOption(option =>
            option.setName("message")
                .setDescription("The Spam Message")
                .setRequired(true)
        )
        .addChannelOption(option =>
            option.setName("channel")
                .setDescription("Where do you want the message to be sent to?")
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText)
        ),
    async execute(interaction) {
        const { options } = interaction;

        const message = options.getString("message");
        const channel = options.getChannel("channel");


        const embed = new EmbedBuilder()
        .setColor('DarkNavy')
        .setDescription(message)
        .setTimestamp()

        try {
            const m = await channel.send({ embeds: [embed] });
             await channel.send({ embeds: [embed]})
            await channel.send({ embeds: [embed]})
            await channel.send({ embeds: [embed]})
            await channel.send({ embeds: [embed]})

            await interaction.reply({ content: "Spam message was succesfully sent to the channel.", ephemeral: true });
        } catch (err) {
            console.log(err);
        }
    }
    }