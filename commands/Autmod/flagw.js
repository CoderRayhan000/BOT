const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const flag = require('../../Ray/models/flag')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('flagword')
    .setDescription('Flag a word fo this server')

    .addStringOption(option => option.setName('word').setDescription('Word to flag').setRequired(true)),

    async execute(interaction, client) {

const word = interaction.options.getString('word')

const Data = await flag.findOne({
    Guild: interaction.guild.id
})

if(Data) {

    await flag.findOneAndUpdate({
        Guild: interaction.guild.id,
        Word: word
    })


interaction.reply({ embeds: [
    new EmbedBuilder()
    .setColor('Orange')
    .setTitle('Flagged Word System ')
    .setDescription(`Found data and updated data the word the bot has saved to the database is ${word}`)
]})
} else {
    const Data = await flag.create({
        Guild: interaction.guild.id,
        Word: word
    })

    await Data.save();

    interaction.reply({ embeds: [
        new EmbedBuilder()
        .setColor('Orange')
        .setTitle('Flagged Word System ')
        .setDescription(`Saved ${word} to the database`)
    ]})
}

    }
}
