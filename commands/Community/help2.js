const {
    ComponentType,
    EmbedBuilder,
    SlashCommandBuilder,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("help2")
      .setDescription("Get a list of all the commands form the discord bot."),
    async execute(interaction, client) {
      const emojis = {
        info: "📝",
        moderation: "🛠️",
        community: "⚙️",
        giveaway : "🎉",
        economy: "💵",
        games: "🎮",
        uttils: "🖥️",
        developer: "🚫",
        random: "❓",
        setup: "⚙️"
      };
  const embed = new EmbedBuilder()
  .setColor('Green')
  .setTitle(`${client.user.name} Help`)
  .setDescription(`Hi my name is ${client.user.name} and I am a bot made by RAYHAN##2838 I have over 100 commands I am also a mulitpurpose bot read below to find out the feauters of the bot\n\n Feautures\n Automod: \n Community: \n  Developer: \n Economoy: \n Games\n Giveaway\n Moderation: \n Point system\n Quran recitation\n Random system\n Setup\n Uttils\n Warn`)
      const Community = new ActionRowBuilder() 
      .addComponents( 
        new ButtonBuilder() 
        .setCustomId('c')
         .setLabel('Community') 
         .setEmoji('1103889306554220585')
         .setStyle(ButtonStyle.Primary), )

   interaction.reply({ embeds: [embed], components: [Community]})
    },
  };