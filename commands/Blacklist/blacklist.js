const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const blacklist = require('../../models/Blacklist')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('blacklist')
    .setDescription('Blacklist a user or server')
        .addStringOption(option => option.setName('userid')
        .setDescription('Id of the user')
        .setRequired(true)
        )
        .addStringOption(option => option.setName('reason')
        .setDescription('Reason for the blacklist')
        .setRequired(true)
        ),

        async execute(interaction, client) {
           
if(interaction.user.id !== '971634347197202453') {
    interaction.reply(`You need to be a dev to use this command if you really think a user needs to be blacklisted dm RAYHAN#2838`)
}
            
                    
                    const user = interaction.options.getString('userid');
const reason = interaction.options.getString('reason')
const Data = await blacklist.findOne({ User: user })

if(Data) {
    interaction.reply({ content: "This user is already blacklisted", ephemeral: true})
} else {

    const Data = await blacklist.create({
        User: user,
        Reason: reason
    })

    await Data.save();

    interaction.reply({ content: `Succesfully blacklisted ${user}`, ephemeral: true})


                }
            }


        }