const { Client, MembershipScreeningFieldType, ActionRow, GatewayIntentBits, ActivityType, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, Events, Partials, ChannelType, Interaction, PermissionFlagsBits } = require(`discord.js`);
const fs = require('fs');
const { botMainColor, botErrorColor } = require('./config.json')
const { QuickDB } = require("quick.db");
const db = require("quick.db")
const logs = require("discord-logs");


console.log('\nStarting up index.js\n')


const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

logs(client, {
  debug: true
});

      const config = require('./config.json')



/* Music System */
const { DisTube } = require('distube')
const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')

client.distube = new DisTube(client, {
    leaveOnEmpty: true,
    nsfw: true,
    emitNewSongOnly: true,
    leaveOnFinish: true,
    plugins: [new SpotifyPlugin(), new SoundCloudPlugin()]
})
module.exports = client;

client.voiceGenerator = new Collection();



client.commands = new Collection();

client.config = require('./config.json')

/* Embed Colors */
client.mainColor = parseInt(botMainColor);
client.errorColor = parseInt(botErrorColor);



const { handleLogs } = require('./functions/handelLogs');
const { loadEvents } = require('./functions/loadEvents');
const { loadCommands } = require('./functions/loadCommands');

    const { GiveawaysManager } = require("discord-giveaways");
    client.giveawaysManager = new GiveawaysManager(client, {
      storage: "./storage/giveaways.json",
      default: {
        botsCanWin: false,
        embedColor: "#2F3136",
        reaction: "🎉",
        lastChance: {
          enabled: true,
          content: `🛑 **Last chance to enter** 🛑`,
          threshold: 5000,
          embedColor: '#FF0000'
        }
      }
    });
    
    fs.readdir('./events', (_err, files) => {
      files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`[Event]   🎉 Loaded: ${eventName}`);
        client.giveawaysManager.on(eventName, (...file) => event.execute(...file, client)), delete require.cache[require.resolve(`./events/${file}`)];
      })
    })

    console.log('\nLogging into the bot\n')

    client.login("MTA1ODU0NzgyOTgwODg0NDg5MQ.Gt5TDk.38anl-ez8hQjHg0zh34-g1sPr9snEF3v6UQuvM").then(() => {
      console.log('\nLogged in succsesfully\n')
      console.log('\nLoading Events, Commands and Logs\n')
      handleLogs(client);
      loadEvents(client);
      loadCommands(client);
      
    })
