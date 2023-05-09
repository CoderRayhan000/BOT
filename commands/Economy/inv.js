const { SlashCommandBuilder,EmbedBuilder, Client, ChatInputCommandInteraction } = require("discord.js")
const accountSchema = require('../../models/account')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("inv")
    .setDescription("See Your Account Inv"),
    

async execute(interaction, client) {
    const { options, user, guild} = interaction
 
    let Data = await accountSchema.findOne({ Guild: interaction.guild.id,
User: user.id}).catch(err => { })

 if (!Data) return interaction.channel.send({ content: "Please Create An Account First", ephemeral: true})

          const bal = new EmbedBuilder()
          .setTitle("Inventory")
          .setColor('Random')
          .setDescription(`**Pens** ${Data.Pen}\n Pets ${Data.Pets}`)

          interaction.reply({ embeds: [bal] })
}
}