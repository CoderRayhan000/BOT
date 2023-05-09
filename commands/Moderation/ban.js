const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, DiscordAPIError } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Ban a user from the discord server.")
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addUserOption(option =>
            option.setName("target")
                .setDescription("User to be banned.")
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("reason")
                .setDescription("Reason for the ban.")
        ),

    async execute(interaction) {
        try {
        const { channel, options } = interaction;

        const user = options.getUser("target");
        const reason = options.getString("reason") || "No reason provided.";
        const target = user.id
        const member = await interaction.guild.members.fetch(target);
        const errEmbed = new EmbedBuilder()
            .setDescription(`You can't take action on ${user.username} since they have a higher role.`)
            .setColor(0xc72c3b);

        
        

        if (member.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({ embeds: [errEmbed], ephemeral: true });

        await member.ban({ reason })

           
            const embed = new EmbedBuilder()
            .setDescription(`Succesfully banned ${user} with reason: ${reason}`)
            .setColor(0x5fb041)
            .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        });
        } catch (error) {
            if (error instanceof  DiscordAPIError && error.code == 50013) {
                const { options } = interaction
                const user = options.getUser("target");

                const em = new EmbedBuilder()
                .setDescription(`You cannot ban ${user} since they have an higher role than me!`)
                .setColor('Red')
                interaction.reply({ embeds: [em]})
            }
        }
   
    }
}