const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const as = require('../../Ray/models/antiAlt')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('anti-alt')
    .setDescription('Anti alt system')
    .addSubcommand(subcommand =>
        subcommand
        .setName('enable')
        .setDescription('Enable the anti alt system')
        )
        .addSubcommand(subcommand =>
            subcommand
            .setName('disable')
            .setDescription('Disable the anti alt system')
            ),

            async execute(interaction, client) {

                const command = interaction.options.getSubcommand();

                switch(command) {
                    case 'enable': {
const Data = await as.findOne({ Guild: interaction.guild.id })

if(Data) {
    const Data = await as.findOneAndUpdate({
        Guild: interaction.guild.id
    })

    interaction.reply({ content: `Succesfully enabled the anti alt account system for ${interaction.guild.name}`, ephemeral: true})
} else {
    const Data = await as.create({
        Guild: interaction.guild.id
    })

    interaction.reply({ content: `Succesfully enabled the anti alt account system for ${interaction.guild.name}`, ephemeral: true})

}

                    }
                }
                switch(command) {
                    case 'disable': {
                        const Data = await as.findOne({
                            Guild: interaction.guild.id
                        })
                        if(!Data) {
                            interaction.reply({ content: `This server doesnt have anti alt enabled`, ephemeral: true})

                        } else {
                            const Data = await as.deleteOne({
                                Guild: interaction.guild.id
                            })

                            interaction.reply({ content: `Succesfully disabled the anti alt system for ${interaction.guild.name}`, ephemeral: true})

                        }
            }

}
            }
        }
