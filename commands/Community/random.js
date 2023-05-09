const { SlashCommandBuilder } = require('@discordjs/builders');
const {EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('random-system')
    .setDescription('User /random-number,letter or /dice-roll!')
    .addSubcommand(subcommand =>
      subcommand
        .setName('random-number')
        .setDescription('Generates a random number')
        )
        .addSubcommand(subcommand =>
          subcommand
            .setName('random-letter')
            .setDescription('Generates a random letter')
            )
            .addSubcommand(subcommand =>
              subcommand
                .setName('dice-roll')
                .setDescription('Do a dice roll 1-6')
                ),


    async execute(interaction) {
      const command = interaction.options.getSubcommand();

      switch(command) {

case 'random-number': 

const choice = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]

    const ball = Math.round((Math.random() * choice.length))

    const embed = new EmbedBuilder()

    await interaction.reply({
      embeds: [
        embed.setTitle("Random Number")
          .setDescription(`Here is the random number`)
          .setColor('Blue')
          .addFields(
            { name: "Result", value: `${choice[ball]}`, inline: true },
          )
          .setTimestamp()
      ]
    })


      }
       
      switch(command) {
  case 'random-letter':
    const choice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const ball = Math.round((Math.random() * choice.length))

    const embed = new EmbedBuilder()

    await interaction.reply({
      embeds: [
        embed.setTitle("Random Letter")
          .setDescription(`Here is the random letter`)
          .setColor('Blue')
          .addFields(
            { name: "Result", value: `${choice[ball]}`, inline: true },
          )
          .setTimestamp()
      ]
    })
      }

      switch(command) {
        case 'dice-roll': 
        const choice = ["1", "2", "3", "4", "5"]

    const ball = Math.round((Math.random() * choice.length))

    const embed = new EmbedBuilder()

    await interaction.reply({
      embeds: [
        embed.setTitle("Dice Rolll")
          .setDescription(`Here is the results from the dice roll`)
          .setColor('Blue')
          .addFields(
            { name: "Result", value: `${choice[ball]}`, inline: true },
          )
          .setTimestamp()
      ]
    })
      }
    }

}