const Discord = require("discord.js")
const {  ApplicationCommandOptionType, SlashCommandBuilder } = require("discord.js");
const messages = require('../../Ray/utils/message');
const ms = require("ms")

module.exports = {
  data: new SlashCommandBuilder()
  .setName('start')
  .setDescription('🎉 Start a giveaway')
  .addStringOption(option => option.setName('duration').setDescription('Duration of the giveaway').setRequired(true))
  .addIntegerOption(option => option.setName('winners').setDescription('Winners of the giveaway').setRequired(true))
  .addStringOption(option => option.setName('prize').setDescription('Prize of the giveaway').setRequired(true))
  .addChannelOption(option => option.setName('channel').setDescription('Giveaway Channel').setRequired(true)),
 
  async execute(interaction, client) {

    // If the member doesn't have enough permissions
    if (!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")) {
      return interaction.reply({
        content: ':x: You need to have the manage messages permissions to start giveaways.',
        ephemeral: true
      });
    }

    const giveawayChannel = interaction.options.getChannel('channel');
    const giveawayDuration = interaction.options.getString('duration');
    const giveawayWinnerCount = interaction.options.getInteger('winners');
    const giveawayPrize = interaction.options.getString('prize');

    if (!giveawayChannel.isTextBased()) {
      return interaction.reply({
        content: ':x: Please select a text channel!',
        ephemeral: true
      });
    }
   if(isNaN(ms(giveawayDuration))) {
    return interaction.reply({
      content: ':x: Please select a valid duration!',
      ephemeral: true
    });
  }
    if (giveawayWinnerCount < 1) {
      return interaction.reply({
        content: ':x: Please select a valid winner count! greater or equal to one.',
      })
    }

   


   
   
    // start giveaway
    client.giveawaysManager.start(giveawayChannel, {
      // The giveaway duration
      duration: ms(giveawayDuration),
      // The giveaway prize
      prize: giveawayPrize,
      // The giveaway winner count
      winnerCount: parseInt(giveawayWinnerCount),
      
      // Messages
      messages,
    });
    interaction.reply({
      content:
        `Giveaway started in ${giveawayChannel}!`,
      ephemeral: true
    })

    
    }

  }
