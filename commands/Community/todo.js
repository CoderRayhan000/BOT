const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const TD = require('../../Ray/models/TD')

const ap = require('../../models/Ap')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('to-do')
    .setDescription('To do system!')
    .addSubcommand((subcommand) =>
    subcommand
        .setName("add")
        .setDescription("Add a todo task")
        .addStringOption((option) => {
            return option
                .setName("name")
                .setDescription("Name of the task")
                .setRequired(true);
        })
        .addStringOption((option) => {
            return option
                .setName("description")
                .setDescription("Description of the task")
                .setRequired(true);
        })
    )
        .addSubcommand(subcommand => 
            subcommand.setName('check')
            .setDescription('Check someones todo list')
            .addUserOption(option => 
                option.setName("user")
                .setDescription("The user;s todo list you wanna see")
                .setRequired(true)

            )
        ),


        async execute(interaction, client) {
            
            const sc = interaction.options.getSubcommand();

            
              if(sc === "add") {
              

                    const  name = interaction.options.getString('name')
                    const d = interaction.options.getString('description')

                    const D = new TD({
                        Guild: interaction.guild,
                        User: interaction.user,
                        Name: name,
                        Description: d
                    })

                    await D.save();

                    interaction.reply({ embeds: [
                        new EmbedBuilder()
                        .setColor('Aqua')
                        .setTitle(`${interaction.user.name} TODO list`)
                        .setDescription(`${name} | ${d}`)
                    ]})
    
                

              } else if(sc === "check") {
                {
                  

                        const target = interaction.options.getUser("user")
                        const UserData = await TD.findOne({
                            User: target
                        })
                       
                        if(UserData) {
                    
                            const target = interaction.options.getUser("user")

        
                            const Data = await TD.findOne({
                                User: target
                            })
                           
            if(!Data) {
                interaction.reply({ content: `${target}  doesnt have a todo list`})
            } else {

                const  name = interaction.options.getString('name')
                const d = interaction.options.getString('description')
                const target = interaction.options.getUser("user")
                
                const Data = await TD.findOne({
                    Name: name,
                    Description: d
                })


              

                const embed = new EmbedBuilder()
                .setColor('Aqua')
                .setTitle(`${target.tag} TODO list\n If says "No Named" and "No Description" it means they dont have a todo list yet`)
                .setDescription(`${Data.Name} | ${Data.Description}`)

                await interaction.reply({ embeds: [embed]})
            
                          
                        } else {
                            interaction.reply({ content: `They havent made a todo list yet`})
                        }

                    }
                }
              }

        }
          
}
