const { Collector, SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ActionRowBuilder, Message, ComponentType } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName("spam-button")
    .setDescription("Spam A Button For Points ( Mini-Game )"),

    async execute(interaction) {

        const embed = new EmbedBuilder()
        .setColor('Blurple')
        .setDescription(" Spam The Button For Points")

        const close = new ActionRowBuilder()
         .addComponents(
         new ButtonBuilder()
          .setCustomId('button')
           .setLabel('PRESS ME!') 
           .setStyle(ButtonStyle.Secondary), )

           interaction.reply({ content: "Mini Game Getting Started (When You Push Button Will Say Interaction Failed But It Worked)", ephemeral: true})
            interaction.channel.send({ embeds: [embed], components: [close] })

            
           
            const collector = await interaction.channel.createMessageComponentCollector();
            

            collector.on('collect', async i => {
              
                await  i.update({ embeds: [embed], components: [close] });
                

                interaction.channel.send({ content: `${i.user} Has Gottent 1 Point`})
                .then(msg => {
                    setTimeout(() => msg.delete(), 1000)
                  })
        
                
  

    });

    }
    }
