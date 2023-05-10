const {
  SlashCommandBuilder,
  EmbedBuilder,
  Client,
  ChatInputCommandInteraction,
} = require("discord.js");
const accountSchema = require('../../Ray/models/account');

const cooldowns = new Map();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("daily")
    .setDescription("Get Your Daily Coins"),

  async execute(interaction, client) {

    if (!cooldowns.has(interaction.commandName)) {
      cooldowns.set(interaction.commandName, new Map())
    }

    const now = Date.now()
    const timestamps = cooldowns.get(interaction.commandName)
    const cooldownAmount = 43280000;
    let expirationTime = timestamps.get(interaction.user.id) + cooldownAmount || 0;

    if ( now < expirationTime) {
      const timeLeft = expirationTime - now;
      const hoursLeft = Math.floor(timeLeft / 3600000)
      const minutesLeft = Math.floor((timeLeft % 3600000) / 60000)
      const secondsLeft = Math.floor((timeLeft % 60000) / 1000)
      const timeString = `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`
      return interaction.reply({
        content: `Please wait ${timeString} before using the /daily command again.`,
        ephemeral: true
      })
    }

    timestamps.set(interaction.user.id, now)
    setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount)
    const { options, user, guild } = interaction;

    let Data = await accountSchema
      .findOne({ Guild: interaction.guild.id, User: user.id })
      .catch((err) => {});

    if (!Data)
      return interaction.channel.send({
        content: "Please Create An Account First",
        ephemeral: true,
      });

    Data.Wallet += 500;
    Data.Bank += 500;
    await Data.save();

    const daily = new EmbedBuilder()
      .setTitle("Daily")
      .setColor('DarkBlue')
      .setDescription(
        `:dollar: You have now collected your daily of $500 in your Wallet and $500 in your bank\n **Total** $${Data.Wallet + Data.Bank} :dollar: `
      );

    interaction.reply({ embeds: [daily] });
  },
};
