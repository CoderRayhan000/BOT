const {SlashCommandBuilder, EmbedBuilder, Embed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('coinflip')
    .setDescription("Flip a coin")
    .addStringOption(option => option
        .setName("answer")
        .setDescription("Head or Tails")
        .setRequired(true)),

    async execute (interaction, client) {
        await interaction.deferReply()
        const { options } = interaction;

        const answer = options.getString("answer")
        const choice = ["Head", "Tails"]
        const text = Math.floor(Math.random() * choice.length);

        const embed1 = new EmbedBuilder()
        .setColor("Red")
        .setTitle("You lost!")
        .addFields({name: "Your Answer:", value:`🪙 ${answer}`, inline: true})
        .addFields({name: "My Answer:", value:`🪙 ${choice[text]}`, inline: true})

        const embed2 = new EmbedBuilder()
        .setColor("Green")
        .setTitle("You won!")
        .addFields({name: "Your answer:", value:`🪙 ${answer}`, inline: true})
        .addFields({name: "My answer:", value:`🪙 ${choice[text]}`, inline: true})

        if (answer == choice[text]) {
            await interaction.followUp({embeds: [embed2]})
        }

        if (answer !== choice[text]) {
            await interaction.followUp({embeds: [embed1]})
        }

    

    
    }
}