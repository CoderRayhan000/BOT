const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require ("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
  .setName("uno-reverse")
  .setDescription("Uno Reverse Meme"),

 async execute (interaction) {
   
const reve = new AttachmentBuilder('.../../memes/rev.gif');
   
const rev = new EmbedBuilder()
	.setTitle(`UNO REVERSE ${interaction.member.displayName}`)
	  .setColor("Blue")
  .setImage('attachment://rev.gif');

interaction.reply({ embeds: [rev], files: [reve] });
 }
}