const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, DiscordAPIError, Embed} = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName("add-role")
    .setDescription("Adds a role to a user")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
    .addRoleOption(option =>
        option.setName("role")
        .setDescription("Role you wanna add")
        .setRequired(true)
        )
        .addUserOption(option =>
            option.setName("user")
            .setDescription("User to add the role to!")
            .setRequired(true)
            ),

        async execute(interaction) {
        

            const role = interaction.options.getRole("role")

            const target = interaction.options.getUser("user")
            const member = await interaction.guild.members.fetch(target.id);
            const mem = await interaction.guild.members.fetch(target.id);
const m = await interaction.guild.members.fetch('1075622549741895690')


            if(member.id === '1075622549741895690') {
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                    .setColor('DarkAqua')
                    .setTitle('Error')
                    .setDescription(' Cant add a role to myself ')
                ]})
                return;
            } 

            if (m.roles.highest.position <= mem.roles.highest.position) {
                interaction.reply({ content: `My role is lower than ${role} change this than re do the command`, ephermal: true})
            }
            if (m.roles.highest.position <= mem.roles.highest.position) {
                return;
            }
          


                        const r = role.id
            member.roles.add(r)
            

const embe = new EmbedBuilder()
.setColor('Blue')
                .setTitle("Added Role")
                .setDescription(` Added ${role} to ${target}`)

    await interaction.reply({ embeds: [embe]});

        }
}