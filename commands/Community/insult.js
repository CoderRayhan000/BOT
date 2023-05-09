const { SlashCommandBuilder, EmbedBuilder  } = require('discord.js')
const config = require('../../config.json')


module.exports = {
    data: new SlashCommandBuilder()
    .setName('insult')
    .setDescription('Insult a user')
    .addUserOption(option => option.setName('user').setDescription('User you want to insult').setRequired(true)
    )
    .addStringOption(option => 
        option.setName('insult').setDescription('What is the insult').setRequired(true)),

    async execute(interaction) {
        const ap = require('../../models/Ap')
        const Data = await ap.findOne({
            User: interaction.user.id
          })

        if 
        (Data)
        {
            const user = interaction.options.getUser('user')
            if(user.bot) {
                interaction.reply({ content: `Sorry you cant insult bots `, ephemeral: true})
            }
            if(config.pusers.includes(user.id)) {
                const user = interaction.options.getUser('user')
            const insult = interaction.options.getString('insult')

                const embed = new EmbedBuilder()
                .setColor('Blue')
                .setTitle('Insult')
                .setDescription(
                    `${user} the user ${interaction.user} has insulted you here is the insult **${insult}**`
                )
                await interaction.reply({ embeds: [embed]})
            } else {
                interaction.reply({ content: `Sorry but ${user} dosent have premuim. Only premuim users can insult each other :)`, ephemeral: true})
            }
           
            
        }   else {
            interaction.reply({ content: "Sorry user but you dont have premuim", ephemeral: true})
        
        }

    }
    
}