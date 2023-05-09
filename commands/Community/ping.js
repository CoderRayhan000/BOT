const { SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Gets latency of the bot!"),

    async execute(interaction, client) {
        const msg = await interaction.reply({
            content: "Pinging...",
            fetchReply: true,
        });
        const latency = `${msg.createdTimestamp - interaction.createdTimestamp}`;

        interaction.editReply({
            content: `\nLatency is ${latency}ms\nAPI Latency is ${client.ws.ping}ms`,
        });
    },
};
