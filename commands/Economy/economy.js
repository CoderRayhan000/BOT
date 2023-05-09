const { SlashCommandBuilder,EmbedBuilder, Client, ChatInputCommandInteraction } = require("discord.js")
const accountSchema = require('../../models/account')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("economy")
    .setDescription("Economy options")
    .addStringOption(
        option =>
        option.setName("options")
        .setDescription("Options")
        .addChoices(
            { name: "Create", value: "create"},
            { name: "Delete", value: "delete"},
        ).setRequired(true)),

async execute(interaction, client) {
    const { options, user, guild} = interaction
 
    let Data = await accountSchema.findOne({ Guild: interaction.guild.id,
User: user.id}).catch(err => { })
    
    switch(options.getString("options")) {
        case "create": {
            if (Data) 
              return interaction.reply({ content: `You Already Have An Account! ${user}`})


          Data = new accountSchema({
            Guild: interaction.guild.id,
            User: user.id,
            Bank: 5000,
            Wallet: 1000,
            Pen: 0,
            Pets: 0,
            Enchant: 0,
          })
          
 await Data.save()
 
interaction.reply({ content: "Your Account Has Been Created", ephemeral: true})
          
        }
        break;
        
      case "delete": {
        if (!Data) return interaction.reply({ content: "Please create an economy account first", ephemeral: true})

        await Data.delete()
        
        interaction.reply({ content: " Your Account Has Been Deleted"})

      }
        break;


        
    }
  }
}

