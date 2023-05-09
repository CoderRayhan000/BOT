const { SlashCommandBuilder, EmbedBuilder, client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot-info')
        .setDescription('Get statistics on the bot!'),

    async execute(interaction, client) {

        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 23
        let minutes = Math.floor(client.uptime / 60000) % 60
        let seconds = Math.floor(client.uptime / 1000) % 60
        let totalUptime = `\`${days}\` days, \`${hours}\` hours, \`${minutes}\` minutes`

        let totalMembers = client.users.cache.size;
        let totalServers = client.guilds.cache.size;

        let botPfp = client.user.displayAvatarURL()

        const embed = new EmbedBuilder()
            .setTitle(`${client.user.name} Info`)
            .setColor('Green')
            .addFields(
                { name: "**💻Developer(s)**", value: "👑 KING RAYHAN#3371", inline: true },
                { name: "**🌍Language**", value: "JS", inline: true },
                { name: "**🌐Total Servers**", value: `${totalServers}`, inline: false },
                { name: "**🧔Total Members**", value: `${totalMembers}`, inline: true },
            )

        await interaction.reply({ embeds: [embed] });
    }
}
    
