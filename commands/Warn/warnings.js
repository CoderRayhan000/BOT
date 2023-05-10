const { SlashCommandBuilder, EmbedBuilder, PermissionBitField } = require('discord.js')
const Warn = require('../../Ray/models/Warn')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("warnings")
    .setDescription("Gets a members warning count")
    .addUserOption(option => 
        option.setName('target')
        .setDescription('The member you would like see there warn count')
        .setRequired(true)),

        async execute(interaction) {
const m = interaction.options.getUser('target')

const W = await Warn.findOne({
        WUser: m.id
})
if(W) {
        const embed = new EmbedBuilder()
        .setColor('Purple')
        .setDescription(`<:yes:1043770969866633286> ${m.tag} has **${W.Warns}** warns` )
        
        
        await interaction.reply({ embeds: [embed]});
} else {
        if(!W) {
                interaction.reply({ embeds: [
new EmbedBuilder()
.setColor('Orange')
.setDescription(`${m.tag} has no warns`)
                ]})
        } 
}



        }
}
