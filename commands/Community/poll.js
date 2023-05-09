const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder, ChannelType } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("poll")
        .setDescription("Create a poll!")
        .addStringOption(option =>
            option.setName("content")
                .setDescription("The description of the poll")
                .setRequired(true)
        )
        .addChannelOption(option =>
            option.setName("channel")
                .setDescription("Where the poll will be sent")
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("option1")
                .setDescription("Option 1")
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("option2")
                .setDescription("Option 2")
                .setRequired(true)
        ),
    async execute(interaction) {
        const { options } = interaction;

        const content = options.getString("content");
        const channel = options.getChannel("channel");
        const option1 = options.getString("option1");
        const option2 = options.getString("option2");

        const embed1 = new EmbedBuilder()
            .setColor("Red")
            .setDescription(`${content}\n\n:one: | ${option1}\n:two: | ${option2}`)
            .setTimestamp();

        try {

            const a = await channel.send({ embeds: [embed1] });
            await a.react("1️⃣");
            await a.react("2️⃣");
        
            await interaction.reply({ content: `Poll was successfully sent to ${channel}!`, ephemeral: true });
        } catch (err) {
            console.log(err);
        }
    }
}