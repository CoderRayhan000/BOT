const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const accountSchema = require('../../models/account')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("add-money")
    .setDescription(" Add money to a user ")
    .addNumberOption(option => 
        option.setName("number")
        .setDescription("Number of money to add")
        .setRequired(true))
        .addUserOption(option =>
            option.setName("user")
            .setDescription("User to give money to")
            .setRequired(true)),

            async execute(interaction, client ) {
                const amount = interaction.options.getNumber("number")
                const target  = interaction.options.getUser("user")
                let Data = await accountSchema.findOne({ User: target.id })
let UserD = await accountSchema.findOne({ User: interaction.user.id})
if(interaction.user.id === target.id ) interaction.reply({ content: `${interaction.user} you are not allowed to give your self points silly :smile:`})
if(interaction.user.id === target.id ) return;

                if(!UserD) {
                    interaction.reply({ content: `Sorry ${interaction.user} you must have an account make one using </setup-points:1092344289444507769> comamnd`, ephermal: true})
                } 
                if(!Data) {
                    interaction.reply({ content: `Sorry but ${target} doesnt have an account please ask him to make an account!  `, ephermal: true })
                }
                
                if(UserD.Wallet <= amount) {
                    interaction.reply({ embeds: [
                        new EmbedBuilder()
                        .setColor('Red')
                        .setTitle("Error")
                        .setDescription(`Sorry User but you dont have enough money\n > The amount you have is ${UserD.Wallet} the amount you wanna pay is ${amount}`)
                    ]})
                }

                if(UserD && Data) {
                    UserD.Wallet -= amount
                    Data.Wallet += amount

                    await Data.save();
                    

                    const embed = new EmbedBuilder()
                    .setColor('DarkGrey')
                    .setDescription(`You have given ${amount} to ${target}. Have fun ${target}!\n  User now has ${Data.Wallet}`)

                    interaction.reply({ embeds: [embed]})
                }
            }
}