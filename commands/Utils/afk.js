const { CommandInteraction, Client, EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const DB = require("../../Ray/models/AFKSystem")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("afk")
    .setDescription("Set yourself away from keyboard!")
    .addSubcommand(
        command => 
        command.setName("set")
        .setDescription("Set your AFK status!")
        .addStringOption(
            option => 
            option.setName("status")
            .setDescription("Set your status message!")
            .setRequired(true)
        )
    ),
    
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    async execute(interaction, client) {
        const { guild, user, createdTimestamp, options } = interaction;

        const stat = options.getString("status")

            
            switch (options.getSubcommand()) {
                case "set": {
                    const Data = await DB.create({
                        Guild: interaction.guild.id,
                        User: interaction.user.id,
                        Status: stat,
                        Time: parseInt(createdTimestamp / 1000)

                    })

                    await Data.save();

                    const Response = new EmbedBuilder()
                    .setTitle("AFK System")
            .setColor('Orange')
            .setDescription(`✅ Your AFK status has been updated to ${stat}.`);

                    return interaction.reply({embeds: [Response], ephemeral: true})
                }
            }
        }
    }
