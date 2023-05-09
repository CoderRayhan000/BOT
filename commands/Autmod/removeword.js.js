const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const flag = require('../../models/flag')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('remove-flagword')
    .setDescription('Remove the flagword system'),

    async execute(interaction, client) {


const Data = await flag.findOne({
    Guild: interaction.guild.id
})

if(Data) {


await flag.findOneAndDelete({
    Guild: interaction.guild.id
})


interaction.reply({ embeds: [
    new EmbedBuilder()
    .setColor('Orange')
    .setTitle('Flagged Word System ')
    .setDescription(`Deleted the info from the database`)
]})
} else {
    
    interaction.reply({ embeds: [
        new EmbedBuilder()
        .setColor('Orange')
        .setTitle('Flagged Word System ')
        .setDescription(`No data found`)
    ]})
}

    }
}