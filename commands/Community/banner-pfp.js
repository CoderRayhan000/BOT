const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("overview-info")
        .setDescription("Get the avatar or banner of the Discord server.")
        .addStringOption((option) =>
            option
                .setName("option")
                .setDescription("*Choose an option.")
                .setRequired(true)
                .addChoices(
                    { name: "Icon", value: "icon" },
                    { name: "Banner", value: "banner" }
                )
        ),
    /**    
    * @param {ChatInputCommandInteraction} interaction 
    */
    async execute(interaction) {
        const option = interaction.options.getString("option");

        switch (option) {
            case "icon":
                const servericon = interaction.guild.iconURL({ size: 1024 })

                if (!servericon) return interaction.reply({ content: ':warning: | This server does not have an icon.' });

                const icon = new EmbedBuilder()
                    .setColor("Red")
                    .setTitle(`${interaction.guild.name}'s Icon`)
                    .setImage(servericon)
                    .setTimestamp();

                await interaction.reply({ embeds: [icon], ephemeral: true }); // add ephemeral if you want
                break;
            case "banner":
                const serverbanner = interaction.guild.bannerURL({ size: 1024 });

                if (!serverbanner) return interaction.reply({ content: ':warning: | This server does not have a banner.', ephemeral: true })

                const banner = new EmbedBuilder()
                    .setColor("Red")
                    .setTitle(`${interaction.guild.name}'s Banner`)
                    .setImage(serverbanner)
                    .setTimestamp();

                await interaction.reply({ embeds: [banner], ephemeral: true }); // add ephemeral if you want
                break;
        }
    }
}