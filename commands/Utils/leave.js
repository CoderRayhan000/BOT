const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const leaveSchema = require('../../models/Leave');


module.exports = {
    data: new SlashCommandBuilder()
    .setName(`leave`)
    .setDescription(`Set up the leave`)
    .addSubcommand(subcommand =>
        subcommand
        .setName(`set`)
        .setDescription(`Setup the leave system`)
        .addChannelOption(option =>
            option.setName(`channel`)
            .setDescription(`The channel to send the leave message`)
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
        subcommand
        .setName(`remove`)
        .setDescription(`deletes the leave system`)
        ),


    async execute(interaction, client) {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: `You Need Administrator To Execute This Command!`, ephemeral: true})
        if (interaction.options.getSubcommand() === `set`) {
            const data = await leaveSchema.findOne({
                guildid: interaction.guild.id,
            })
            if(data) {
                const channel = interaction.options.getChannel(`channel`);

                await leaveSchema.findOneAndUpdate({
                    guildid: interaction.guild.id,
                    channel: channel.id,
                })



                await data.save();

                const embed1 = new EmbedBuilder()
                .setColor(`#00FFFF`)
                .setTitle(`Leave System`)
                .setDescription(`The Leave System Is setup succsesfully the channel is ${channel}`)
                .setTimestamp()


                await interaction.reply({ embeds: [embed1] });

            }

            if (!data) {
                const channel = interaction.options.getChannel(`channel`);
                const data = await leaveSchema.create({
                    guildid: interaction.guild.id,
                    channel: channel.id,
                })

                


                await data.save();

               
                const embed = new EmbedBuilder()
                .setColor(`#00FFFF`)
                .setTitle(`Leave System`)
                .setDescription(`The Leave System Is setup succsesfully the channel is ${channel}`)
                .setTimestamp()

                await interaction.reply({ embeds: [embed] });

            }

            
        }

        if (interaction.options.getSubcommand() === `remove`) {
            const data = await leaveSchema.findOne({
                guildid: interaction.guild.id,
            })

            if (!data) {
                await interaction.reply({ content: `No Leave Data Found!`, ephemeral: true })
            }
            else {
            await leaveSchema.findOneAndDelete({
                guildid: interaction.guild.id,
            })

            const embed3 = new EmbedBuilder()
            .setColor(`Aqua`)
            .setTitle(`Leave System`)
            .setDescription(`Leave System Removed`)

            await interaction.reply({ embeds: [embed3] });
        }


        }
    }

}