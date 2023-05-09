const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require ("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
  .setName("rickroll")
  .setDescription("Rickroll Meme"),

 async execute (interaction) {
   
const rickfile = new AttachmentBuilder('.../../memes/rick.gif');
   
const rickroll = new EmbedBuilder()
	.setTitle(`Get Rickrolled By ${interaction.member.displayName}`)
	  .setColor("Blue")
  .setImage('attachment://rick.gif');

interaction.reply({ embeds: [rickroll], files: [rickfile] });
 }
}