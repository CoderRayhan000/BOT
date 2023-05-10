const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const as = require('../../Ray/models/AntiS')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('anti-swear')
    .setDescription('Anti swear system')
    .addSubcommand(subcommand =>
        subcommand
        .setName('enable')
        .setDescription('Enable the antiswear system')
        )
        .addSubcommand(subcommand =>
            subcommand
            .setName('disable')
            .setDescription('Disable the antiswear system')
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

    interaction.reply({ content: `Succesfully enabled the anti swear system for ${interaction.guild.name}`, ephemeral: true})
} else {
    const Data = await as.create({
        Guild: interaction.guild.id
    })

    interaction.reply({ content: `Succesfully enabled the anti swear system for ${interaction.guild.name}`, ephemeral: true})

}

                    }
                }

                switch(command) {
                    case 'disable': {
                        const Data = await as.findOne({
                            Guild: interaction.guild.id
                        })
                        if(!Data) {
                            interaction.reply({ content: `This server doesnt have anti swear enabled`, ephemeral: true})

                        } else {
                            const Data = await as.deleteOne({
                                Guild: interaction.guild.id
                            })

                            interaction.reply({ content: `Succesfully disabled the anti swear system for ${interaction.guild.name}`, ephemeral: true})

                        }
                    }
                }
            }

}
