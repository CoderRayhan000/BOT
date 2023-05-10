const { SlashCommandBuilder,EmbedBuilder, Client, ChatInputCommandInteraction } = require("discord.js")
const accountSchema = require('../../Ray/models/account')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("withdraw-to-wallet")
    .setDescription("Withdraw Wallet Money To Wallet")
    .addNumberOption((option) =>
    option
    .setName("amount")
    .setDescription("Amount Of Money U Want Withdrawen To Ur Walletiiiiiiiiiii")
    .setRequired(true)
    ),

    

async execute(interaction, client) {
    const { options, user, guild} = interaction

    const amount = options.getNumber("amount")
 
    let Data = await accountSchema.findOne({ Guild: interaction.guild.id,
User: user.id}).catch(err => { })



if (!Data) return interaction.channel.send({ content: "Please Create An Account First", ephemeral: true})

if(Data.Bank <= amount ) return interaction.channel.send({
    content: "U Dont have enough"
})

const bal = new EmbedBuilder()
          .setTitle("Account Balance")
          .setColor('Random')
          .setDescription(`**Wallet** $${Data.Wallet}\n **Bank** $${Data.Bank}\n **Total** $${Data.Wallet + Data.Bank}`)


if (Data.Bank >= amount) 

Data.Bank -= amount;

Data.Wallet += amount;

await Data.save(); return interaction.reply({ content: 
    `You Have Withdrew $${amount} to Wallet`,
    ephemeral: true
}) 




}
}
