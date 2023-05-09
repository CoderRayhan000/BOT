const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('mc-meme')
    .setDescription('sends a random meme'),
    async execute (interaction) {

        async function meme() {
            await fetch(`https://www.reddit.com/r/MinecraftMemes/random/.json`)
            .then(async r => {
                let meme = await r.json();
                let title = meme[0].data.children[0].data.title;
                let image = meme[0].data.children[0].data.url;
                let author = meme[0].data.children[0].data.author;

                const embed = new EmbedBuilder()
                .setColor("Red")
                .setTitle(`${title}`)
                .setImage(`${image}`)
                .setURL(`${image}`)
                .setFooter({ text: author })

                await interaction.reply({ embeds: [embed] });
            })
        }
   
   meme();
   
    }

}