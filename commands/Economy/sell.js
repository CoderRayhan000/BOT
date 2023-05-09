const { SlashCommandBuilder,EmbedBuilder, Client, ChatInputCommandInteraction, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js") 
const accountSchema = require('../../models/account') 

module.exports = { data: new SlashCommandBuilder() 
    .setName("sell") 
    .setDescription("Sell Items")
    .addStringOption(
        option =>
        option.setName("sell")
        .setDescription("Item To sell")
        .addChoices(
            { name: "Pen", value: "pen"},
            { name: "Pets", value: "pets"},
        ).setRequired(true)),

async execute(interaction, client) {
const { options, user, guild} = interaction
 
    let Data = await accountSchema.findOne({ Guild: interaction.guild.id,
User: user.id}).catch(err => { })

let pen = await accountSchema.findOne({ Pen: Number}).catch(err => { })
    
    const pen1 = new EmbedBuilder()
    .setColor('Red')
    .setDescription(' You dont have any pens in your inventory use /inv to check how many pens you have')
    
    

    switch(options.getString("sell")) {
        case "pen": {
            if (!Data) return interaction.reply({ content: "Please create an economy account first", ephemeral: true})
            if (!Data.Pen > 0 ) return interaction.reply({ embeds: [pen1]})


          Data.Pen -= 1;
           Data.Wallet += 5;
        await Data.save();

        const sold = new EmbedBuilder()
    .setColor('Green')
    .setDescription(`You have sold your pen for $20\n **Wallet** $${Data.Wallet}`)

interaction.reply({ embeds: [sold]})           
        }
        break;
case "pets": {

    const pets = new EmbedBuilder()
    .setColor('Red')
    .setDescription(' You dont have any pets in your inventory use /inv to check how many pets you have')

    if (!Data) return interaction.reply({ content: "Please create an economy account first", ephemeral: true})
    if (!Data.Pets > 0 ) return interaction.reply({ embeds: [pets]})


  Data.Pets -= 1;
   Data.Wallet += 100;
await Data.save();



    

    const petbye = new EmbedBuilder()
    .setColor('Green')
    .setDescription(`You have sold your pet for $100\n **Wallet** $${Data.Wallet}`)

interaction.reply({ embeds: [petbye]})    
}
    }
    }
}
