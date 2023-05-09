const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const antiPing = require('../../models/antiPing')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('anti-ping')
    .setDescription('Anti ping system')
    .addSubcommand(subcommand =>
        subcommand
        .setName('enable')
        .setDescription('Enable the anti ping system')
        )
        .addSubcommand(subcommand =>
            subcommand
            .setName('disable')
            .setDescription('Disable the anti ping system')
            ),

            async execute(interaction, client) {

                const command = interaction.options.getSubcommand();

                switch(command) {
                    case 'enable': {
const Data = await antiPing.findOne({ Guild: interaction.guild.id })

if(Data) {
    const Data = await antiPing.findOneAndUpdate({
        Guild: interaction.guild.id
    })

    interaction.reply({ content: `Succesfully enabled the anti ping system for ${interaction.guild.name}`, ephemeral: true})
} else {
    const Data = await antiPing.create({
        Guild: interaction.guild.id
    })

    interaction.reply({ content: `Succesfully enabled the anti ping system for ${interaction.guild.name}`, ephemeral: true})

}

                    }
                }
                switch(command) {
                    case 'disable': {
                        const Data = await antiPing.findOne({
                            Guild: interaction.guild.id
                        })
                        if(!Data) {
                            interaction.reply({ content: `This server doesnt have anti ping enabled`, ephemeral: true})

                        } else {
                            const Data = await antiPing.deleteOne({
                                Guild: interaction.guild.id
                            })

                            interaction.reply({ content: `Succesfully disabled the anti ping system for ${interaction.guild.name}`, ephemeral: true})

                        }
            }

}
            }
        }