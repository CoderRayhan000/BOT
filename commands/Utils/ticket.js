
const { discordSort, Message } = require("discord.js");

const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, ButtonInteraction, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('setup-ticket')
    .setDescription('Use this commanbd to setup the tickets'),
    async execute (interaction, client) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: "You must be a Staff Commander or a Head Developer to create a ticket message"})

        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('create')
            .setLabel('Create Ticket')
            .setStyle(ButtonStyle.Secondary), 
        )
        
        const close = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('closetick')
            .setLabel('Close Ticket')
            .setStyle(ButtonStyle.Secondary), 
        )

        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setTitle("Tickets & Support")
      .setDescription("Press The Create A Ticket Button To Create A Ticket (Staff Will Be At Your Ticket Soon) ")


      const inticket = new EmbedBuilder()
      .setColor('DarkButNotBlack')
      .setTitle(`Welcome To Ticket`)
    .setDescription(`Welcome To The Ticket Someone Will Be Here Soon`)

   const embed3 = new EmbedBuilder()
   .setColor('Aqua')
   .setDescription("Closing Ticket")
    

        await interaction.reply({ embeds: [embed],components: [button] });
      
    
    }
}