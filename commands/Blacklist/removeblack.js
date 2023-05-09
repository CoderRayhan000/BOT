const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const blacklist = require('../../models/Blacklist')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('remove-blacklist')
    .setDescription('Blacklist a user or server')
        .addUserOption(option => option.setName('user')
        .setDescription('User for the un blacklist')
        .setRequired(true)
        ),

        async execute(interaction, client) {
           
if(interaction.user.id !== '971634347197202453') {
    interaction.reply(`You need to be a dev to use this command if you really think a user needs to be blacklisted dm RAYHAN#2838`)
}
            
                    
const user = interaction.options.getUser('user')
const Data = await blacklist.findOne({ User: user.id })

if(!Data) {
    interaction.reply({ content: "This user is not blacklisted", ephemeral: true})
} else {

    const Data = await blacklist.deleteOne({
        User: user.id
    })

    interaction.reply({ content: `Succesfully unblacklisted ${user}`, ephemeral: true})


                }
            }


        }
