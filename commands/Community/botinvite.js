const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("bot-invite")
    .setDescription("Invite Link to add this bot "),

    async execute(interaction, client) { 
         const embed = new EmbedBuilder()
         .setTitle(`${client.user.tag} Invite Link`)
         .setColor('Blue')
         .setDescription('**__https://discord.com/api/oauth2/authorize?client_id=1075622549741895690&permissions=8&scope=bot%20applications.commands__**')

         return interaction.reply({ embeds: [embed] })
    }
}