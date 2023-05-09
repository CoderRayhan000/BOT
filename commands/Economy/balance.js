const { SlashCommandBuilder,EmbedBuilder, Client, ChatInputCommandInteraction } = require("discord.js")
const accountSchema = require('../../models/account')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("See Your Account Balance"),
    

async execute(interaction, client) {
    const { options, user, guild} = interaction
 
    let Data = await accountSchema.findOne({ Guild: interaction.guild.id,
User: user.id}).catch(err => { })

 if (!Data) return interaction.channel.send({ content: "Please Create An Account First", ephemeral: true})

          const bal = new EmbedBuilder()
          .setTitle("Account Balance")
          .setColor('Random')
          .setDescription(`**Wallet** $${Data.Wallet}\n **Bank** $${Data.Bank}\n **Total** $${Data.Wallet + Data.Bank}`)

          interaction.reply({ embeds: [bal] })
}
}