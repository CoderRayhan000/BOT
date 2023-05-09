const { SlashCommandBuilder, CommandInteraction, PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription(`Clear a specific amount of messages from a user or channel!`)
    .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageMessages)
    .addIntegerOption(option => option
        .setName('amount')
        .setDescription(`The amount of messages that will be cleared`)
        .setRequired(true)
        )
        .addUserOption(option => option
            .setName('user')
            .setDescription(`Select a user to clear their messages`)
            .setRequired(false)
            ),
            async execute(interaction, client) {
                const {channel, options} = interaction;

                const amount = options.getInteger('amount');
                const user = options.getUser('user');

                const messages = await channel.messages.fetch({
                    limit: amount +1,
                });

                const res = new EmbedBuilder()
                    .setColor('Red')

                if(user) {
                    let i = 0;
                    const filtered = [];

                    (await messages).filter((msg) => {
                        if(msg.author.id === user.id && amount > i) {
                            filtered.push(msg);
                            i++;
                        }
                    });

                    await channel.bulkDelete(filtered).then(messages => {
                        res.setDescription(`:white_check_mark: | Successfully deleted ${messages.size} message(s) from ${user}!`);
                        interaction.reply({ embeds: [res] }).then(msg => {
                            setTimeout(() => msg.delete(), 1000)
                          })
                        
                    });
                } else {
                    await channel.bulkDelete(amount, true).then(messages => {
                        res.setDescription(`:white_check_mark: | Successfully deleted ${messages.size} message(s) from the channel!`);
                        interaction.reply({ embeds: [res] }).then(msg => {
                            setTimeout(() => msg.delete(), 1000)
                          })
                        
                    });
                }
            }
}