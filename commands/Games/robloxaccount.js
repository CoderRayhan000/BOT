const { SlashCommandBuilder,EmbedBuilder, Client, ChatInputCommandInteraction } = require("discord.js")
const robloxSchema = require('../../models/roblox')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("roblox-account")
    .setDescription("Create Roblox Account")
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
 
    let Data = await robloxSchema.findOne({ Guild: interaction.guild.id,
User: user.id}).catch(err => { })
    
    switch(options.getString("options")) {
        case "create": {
            if (Data) 
              return interaction.reply({ content: `You Already Have An Account! ${user}`})


          Data = new robloxSchema({
            Guild: interaction.guild.id,
            User: user.id,
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

