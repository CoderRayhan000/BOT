const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")
const robloxSchema = require('../../Ray/models/roblox')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("roblox")
    .setDescription(" Play Number Of Games In Roblox +++ FREE ROBUX!!"),
    async execute(interaction) {
        let userAvatar = interaction.user.displayAvatarURL({ size: 64 });

        const { options, user, guild} = interaction
 
        let Data = await robloxSchema.findOne({ Guild: interaction.guild.id,
    User: user.id}).catch(err => { })


const embed = new EmbedBuilder()
.setColor('Random')
.setTitle(` __Roblox Home Page:__ User Playing Today Is ${interaction.user.tag}. Robux Count: ♾️`)
.setDescription(`**Games To Play**\n 1. Hangman\n 2. Triva\n 3. Flood Game!\n 4. 2048`)
.setFooter({ text: `${interaction.user.tag}`, iconURL: `${userAvatar}` })
        .setTimestamp();

        const hangman = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('hangman')
            .setLabel('Hangman!')
            .setStyle(ButtonStyle.Primary), 
        )
        
        const triva = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('triva')
            .setLabel('Triva!')
            .setStyle(ButtonStyle.Success), 
        )

        const flo = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('flo')
            .setLabel('Flood Game!')
            .setStyle(ButtonStyle.Secondary), 
        )

        const twozero = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('twozero')
            .setLabel('2048!')
            .setStyle(ButtonStyle.Primary), 
        )

        const mp = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('mp')
            .setLabel('Match Pairs!')
            .setStyle(ButtonStyle.Primary), 
        )

        const ms = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('ms')
            .setLabel('Mine Sweeper!')
            .setStyle(ButtonStyle.Primary), 
        )

        const s = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('s')
            .setLabel('Slots!')
            .setStyle(ButtonStyle.Danger), 
        )



if(!Data) { interaction.reply({ content: `${user} Please Create An Account To Play Roblox Using /roblox-account`, ephemeral: true}) 
        } else {
 interaction.reply({ embeds: [embed], components: [hangman, triva, flo, twozero, mp]})
        }
    }
}
