const {
    SlashCommandBuilder,
    InteractionCollector,
    PermissionFlagsBits,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("role-to-all")
      .setDescription("Role that will be assigned to the all users.")
      .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
      .setDMPermission(false)
      .addSubcommand((subcommand) =>
        subcommand
          .setName("add")
          .setDescription("add role")
          .addRoleOption((option) =>
            option
              .setName("role")
              .setDescription("Select the Role")
              .setRequired(true)
          )
      )
      .addSubcommand((subcommand) =>
        subcommand
          .setName("remove")
          .setDescription("Role that will be removed to the all users.")
          .addRoleOption((option) =>
            option
              .setName("role2")
              .setDescription("Select the Role")
              .setRequired(true)
          )
      ),
  
    async execute(interaction) {
      const subcommand = interaction.options.getSubcommand();
  
      switch (subcommand) {
        case "add":
          {
            const mich = interaction.options.getRole("role");
  
            if (!mich)
              return interaction.reply({
                content: `<@${interaction.user.id}>, role not found`,
              });
  
            interaction.guild.members.cache
              .filter((m) => !m.user.bot)
              .forEach((member) => member.roles.add(mich));
  
            interaction.reply({
              content: `<@${interaction.user.id}>, role **${mich.name}** was added to all members`,
              ephemeral: true,
            });
          }
          break;
        case "remove":
          {
            const mich = interaction.options.getRole("role2");
  
            if (!mich)
              return interaction.reply({
                content: `<@${interaction.user.id}>, role not found`,
              });
  
            interaction.guild.members.cache
              .filter((m) => !m.user.bot)
              .forEach((member) => member.roles.remove(mich));
  
            interaction.reply({
              content: `<@${interaction.user.id}>, role **${mich.name}** was removed from all members`,
              ephemeral: true,
            });
          }
          break;
      }
    },
  };