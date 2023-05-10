const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const welcomeSchema = require('../../Ray/models/Join');


module.exports = {
    data: new SlashCommandBuilder()
    .setName(`welcome`)
    .setDescription(`Set up the welcome`)
    .addSubcommand(subcommand =>
        subcommand
        .setName(`set`)
        .setDescription(`Setup the welcome system`)
        .addChannelOption(option =>
            option.setName(`channel`)
            .setDescription(`The channel to send the welcome message`)
            .setRequired(true)
        )
        .addRoleOption(option =>
            option.setName(`welcome-role`)
            .setDescription(`Setup the welcome role!`)
            .setRequired(true))
    )
    .addSubcommand(subcommand =>
        subcommand
        .setName(`remove`)
        .setDescription(`deletes the welcome system`)
        ),


    async execute(interaction, client) {
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: `You Need Administrator To Execute This Command!`, ephemeral: true})
        if (interaction.options.getSubcommand() === `set`) {
            const data = await welcomeSchema.findOne({
                guildid: interaction.guild.id,
            })
            if(data) {
                const channel = interaction.options.getChannel(`channel`);
const role = interaction.options.getRole(`welcome-role`)
                await welcomeSchema.findOneAndUpdate({
                    guildid: interaction.guild.id,
                    channel: channel.id,
                    role: role.id,
                })



                await data.save();

                const embed1 = new EmbedBuilder()
                .setColor(`#00FFFF`)
                .setTitle(`Welcome System`)
                .setDescription(`The Welcome System Is setup succsesfully the channel is ${channel}`)
                .setTimestamp()


                await interaction.reply({ embeds: [embed1] });

            }

            if (!data) {
                const channel = interaction.options.getChannel(`channel`);
                const role = interaction.options.getRole(`welcome-role`)
                const member = await interaction.guild.bots.fetch('1058547829808844891');

                if(role.highest.position > message.guild.members.resolve(bot.user).roles.highest.position) {
console.log('cuz')
                }
                const data = await welcomeSchema.create({
                    guildid: interaction.guild.id,
                    channel: channel.id,
                    role: role.id,
                })

                


                await data.save();

               
                const embed = new EmbedBuilder()
                .setColor(`#00FFFF`)
                .setTitle(`Welcome System`)
                .setDescription(`The Welcome System Is setup succsesfully the channel is ${channel}`)
                .setTimestamp()

                await interaction.reply({ embeds: [embed] });

            }

            
        }

        if (interaction.options.getSubcommand() === `remove`) {
            const data = await welcomeSchema.findOne({
                guildid: interaction.guild.id,
            })

            if (!data) {
                await interaction.reply({ content: `No Welcome Data Found!`, ephemeral: true })
            }
            else {
            await welcomeSchema.findOneAndDelete({
                guildid: interaction.guild.id,
            })

            const embed3 = new EmbedBuilder()
            .setColor(`Aqua`)
            .setTitle(`Welcome System`)
            .setDescription(`Welcome System Removed`)

            await interaction.reply({ embeds: [embed3] });
        }


        }
    }

}
