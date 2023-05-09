const { SlashCommandBuilder,EmbedBuilder, Client, ChatInputCommandInteraction } = require("discord.js")
const accountSchema = require('../../models/account')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("withdraw-to-bank")
    .setDescription("Withdraw Wallet Money To Bank")
    .addNumberOption((option) =>
    option
    .setName("amount")
    .setDescription("Amount Of Money U Want Withdrawen To Ur Bank")
    .setRequired(true)
    ),

    

async execute(interaction, client) {
    const { options, user, guild} = interaction

    const amount = options.getNumber("amount")
 
    let Data = await accountSchema.findOne({ Guild: interaction.guild.id,
User: user.id}).catch(err => { })



if (!Data) return interaction.channel.send({ content: "Please Create An Account First", ephemeral: true})

if(Data.Wallet <= amount ) return interaction.channel.send({
    content: "U Dont have enough"
})

const bal = new EmbedBuilder()
          .setTitle("Account Balance")
          .setColor('Random')
          .setDescription(`**Wallet** $${Data.Wallet}\n **Bank** $${Data.Bank}\n **Total** $${Data.Wallet + Data.Bank}`)


if (Data.Wallet >= amount) 

Data.Wallet -= amount;

Data.Bank += amount;

await Data.save(); return interaction.channel.send({ content: 
    `You Have Withdrew $${amount} to Bank`
})


}
}