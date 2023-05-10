const { SlashCommandBuilder,EmbedBuilder, Client, ChatInputCommandInteraction } = require("discord.js")
const accountSchema = require('../../Ray/models/account')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("beg")
    .setDescription("Beg For Money!"),
    
async execute(interaction, client) {

    const {user, guild} = interaction
 
    let Data = await accountSchema.findOne({ Guild: interaction.guild.id,
User: user.id}).catch(err => { })


if (!Data) return interaction.channel.send({ content: "Please Create An Account First Using /economy", ephemeral: true})

let good = Math.round((Math.random() * 500) + 10)
let bad = Math.round((Math.random() * -500) - 10)

const posN = [good, bad];

const amount = Math.round((Math.random() * posN.length));
const value = posN[amount];

if (!value) return interaction.reply({ content: ":x: Bad luck no money for you! :x:"})

Data.Wallet += value;
await Data.save();

if (value > 0) {
    const goodChoices = [
        "Good luck you got some money! You got",
        " A rich human gave you money! You got",
        "Somone gave you some money! You got",
    ]

    const posName = Math.round((Math.random () * goodChoices.length));

const embed = new EmbedBuilder()
          .setTitle("Your Beg Results")
          .setColor('Green')
          .setDescription(`Result: ${goodChoices[[posName]]} $${value}`)
 await interaction.reply({ embeds: [embed]})
} else {
    const badChoices = [
        "Somone stole your wallet and you lost",
        "Your bank account got hacked you lost",
        "You joined squid game and lost you lost",
        "You had to pay taxes you lost",
    ]

    const negName = Math.round((Math.random () * badChoices.length));

    const stringV = `${value}`

    const nonSymbol = await stringV.slice(1);

    const lost = new EmbedBuilder()
          .setTitle("Your Beg Results")
          .setColor('Green')
          .setDescription(`Result: ${badChoices[[negName]]} $${value}`)
    await interaction.reply({ embeds: [lost]})
}



}
}
