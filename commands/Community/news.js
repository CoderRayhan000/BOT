const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('news')
    .setDescription('Get The Latest News By BBC NEWS'),
    async execute (interaction) {

        async function meme() {
            await fetch(`https://www.reddit.com/r/news/random/.json`)
            .then(async r => {
                let meme = await r.json();
                let title = meme[0].data.children[0].data.title;
                let author = meme[0].data.children[0].data.author;

                const embed = new EmbedBuilder()
                .setColor("Red")
                .setTitle(`${title}`)
                .setFooter({ text: author })

                await interaction.reply({ embeds: [embed] });
            })
        }
   
   meme();
   
    }

}