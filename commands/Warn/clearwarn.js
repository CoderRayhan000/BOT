const { SlashCommandBuilder, EmbedBuilder, PermissionBitField } = require('discord.js')
const Warn = require('../../models/Warn')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("clearwarn")
    .setDescription("Clear a members warnings")
    .addUserOption(option => 
        option.setName('target')
        .setDescription('The member you would like clear the warnings of')
        .setRequired(true))
        .addNumberOption(option => option.setName('number') .setDescription('The number of warns you would like remove').setRequired(true)),

        async execute(interaction) {


const member = interaction.options.getUser('target');
const wn = interaction.options.getNumber('number');
const w = "Warn"

const W = await Warn.findOne({
        WUser: member.id
})

if(wn > W.Warns ) return interaction.reply({ content: `<:X_:1037643884064419840> You can only clear ${W.Warns} amount of warnings from ${member.tag}`, ephemeral: true });



W.Warns -= wn

await W.save();

const embed = new EmbedBuilder()
.setColor('Blue')
.setTitle(w)
.setDescription(`<:yes:1043770969866633286> ${member} now has **${W.Warns}** warns` )


await interaction.reply({ embeds: [embed]});


        }
}