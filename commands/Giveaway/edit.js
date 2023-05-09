const { ApplicationCommandOptionType, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('edit')
        .setDescription('🎉 Edit a giveaway')
        .addStringOption(option => option.setName('giveaway').setDescription('ID of the giveaway').setRequired(true))
        .addStringOption(option => option.setName('duration').setDescription('Duration of the giveaway').setRequired(true))
        .addIntegerOption(option => option.setName('winners').setDescription('Winners of the giveaway').setRequired(true))
        .addStringOption(option => option.setName('prize').setDescription('Prize of the giveaway').setRequired(true)),

    async execute(interaction, client) {

        // If the member doesn't have enough permissions
        if (!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return interaction.reply({
                content: ':x: You need to have the manage messages permissions to start giveaways.',
                ephemeral: true
            });
        }
        const gid = interaction.options.getString('giveaway');
        const time = interaction.options.getString('duration');
        const winnersCount = interaction.options.getInteger('winners');
        const prize = interaction.options.getString('prize');
        
        await interaction.deferReply({
         ephemeral: true
        })
        // Edit the giveaway
        try {
        await client.giveawaysManager.edit(gid, {
            newWinnersCount: winnersCount,
            newPrize: prize,
            addTime: time
        })
        } catch(e) {
return interaction.editReply({
            content:
                `No giveaway found with the given message ID: \`${gid}\``,
            ephemeral: true
        });
        }
        interaction.editReply({
            content:
                `This giveaway has now been edited!`,
            ephemeral: true
        });
    }

};
