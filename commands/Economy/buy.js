const { SlashCommandBuilder,EmbedBuilder, Client, ChatInputCommandInteraction, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js") 
const accountSchema = require('../../models/account') 


module.exports = { data: new SlashCommandBuilder() 
    .setName("buy") 
    .setDescription("buy")
    .addStringOption(
        option =>
        option.setName("item")
        .setDescription("Item To Buy")
        .addChoices(
            { name: "Pen", value: "pen"},
        ).setRequired(true)),

async execute(interaction, client) {
const { options, user, guild} = interaction
 
let Data = await accountSchema.findOne({ Guild: interaction.guild.id,
    User: user.id}).catch(err => { })

    let pen = await accountSchema.findOne({ Pen: Number}).catch(err => { })


    
    switch(options.getString("item")) {
        case "pen": {
            if (!Data) return interaction.reply({ content: "Please create an economy account first", ephemeral: true})
        
            Data.Wallet -= 5
            Data.Pen += 1
          await Data.save()

        interaction.reply({ content: "You Bought A Pen"})
           
        }
        break;

    }
    }
}
