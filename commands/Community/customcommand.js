const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const cc = require('../../Ray/models/Custom')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('customcommand')
    .setDescription('Make a custom command')
    .addStringOption(option => option.setName('keyword').setDescription('The word that triggers the bot').setRequired(true))
    .addStringOption(option => option.setName('reply').setDescription('The word that replys to the message').setRequired(true))
    .addStringOption(
        option =>
        option.setName('type')
        .setDescription('The type of message you want ')
        .addChoices(
            { name: "Embed", value: "embed"},
            { name: "Normal Message", value: "msg"},
        ).setRequired(true)),

    async execute(interaction, client) {

const word = interaction.options.getString('keyword')
const reply = interaction.options.getString('reply')
const type = interaction.options.getString('type')
const Data = await cc.findOne({
    Guild: interaction.guild.id
})
if(type === 'embed') {
if(Data) {
const embed = "Embed"
    await cc.findOneAndUpdate({
        Guild: interaction.guild.id,
        Keyword: word,
        Reply: reply,
        Type: embed
    })


interaction.reply({ embeds: [
    new EmbedBuilder()
    .setColor('Orange')
    .setTitle('Custom Command System ')
    .setDescription(`Keyword === ${word}\n Reply === ${reply}\n Type === ${embed}`)
]})
} else {
    const embed = "Embed"

    const Data = await cc.create({
        Guild: interaction.guild.id,
        Keyword: word,
        Reply: reply,
        Type: embed
    })

    await Data.save();

    interaction.reply({ embeds: [
        new EmbedBuilder()
        .setColor('Orange')
        .setTitle('Custom Command System ')
        .setDescription(`Keyword === ${Data.Keyword}\n Reply === ${Data.Reply}\n Type === ${Data.Type}`)
    ]})
}
} else {
    const msg = "Normal MSG"
    await cc.findOneAndUpdate({
        Guild: interaction.guild.id,
        Keyword: word,
        Reply: reply,
        Type: msg
    })


interaction.reply({ embeds: [
    new EmbedBuilder()
    .setColor('Orange')
    .setTitle('Custom Command System ')
    .setDescription(`Keyword === ${word}\n Reply === ${reply}\n Type === ${msg}`)
]})
} 
}

    }
