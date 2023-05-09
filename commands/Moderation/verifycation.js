const { SlashCommandBuilder } = require('@discordjs/builders');
const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, DiscordAPIError} = require('discord.js');
const verify = require('../../models/Verify')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('setup-verify')
    .setDescription('Setup the verify system')
    .addRoleOption(option => option.setName('role').setDescription('The role to give when someone gets verifyed').setRequired(true)),
    async execute(interaction) {



 const role = await interaction.options.getRole('role')
const Data = await verify.findOne({ Guild: interaction.guild.id })

const button = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
 .setCustomId('verify')
  .setLabel('✅ Verify') 
  .setStyle(ButtonStyle.Primary), )
if(Data) {
   
   

    const Data = await verify.findOneAndUpdate({
        Guild: interaction.guild.id,
        Role: role, 
    })

    await Data.save();
    const embed = new EmbedBuilder()
    .setTitle("Verifaction System")
    .setDescription(`Click the verify button to get ${role} role`)
    .setColor('Blue')
    
try {
const v = await interaction.channel.send({ embeds: [embed], components: [button]})
}catch (err) {
            console.log(err)
        }
    await interaction.reply({ content: `Sent the verifcation message`})


} else {
  
   

    const Data = await verify.create({
        Guild: interaction.guild.id,
        Role: role
        })

    await Data.save();
    const embed = new EmbedBuilder()
    .setTitle("Verifaction System")
    .setDescription(`Click the button to get ${role} `)
    .setColor('Blue')
    
try {
const v = await interaction.channel.send({ embeds: [embed], components: [button]})
}catch (err) {
            console.log(err)
        }
    await interaction.reply({ content: `Sent the verifcation message`})
   
}
}  
      }
