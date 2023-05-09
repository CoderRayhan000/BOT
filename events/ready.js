const { Client, ActivityType } = require("discord.js");
const { activityInterval, database } = require('../../config.json')
const mongoose = require('mongoose')

module.exports = {
  name: "ready",
  rest: false,
  once: false,
  /**
   * @param {Client} client
   */
  async execute(client) {
console.log('\nConncectng to the database\n')
    /* Connect to database */
    if(!database) return;
    mongoose.connect(database, {}).then(() => console.log("The client is now connected to the database!")  
    ).catch((err) => console.error(err))
    console.log('\nSetting the activity up!\n')
client.user.setPresence({
            activities: [{ name: `Being Made`, type: ActivityType.Listening }],
            status: 'dnd',
        });
        console.log('\nSetup activity\n')
    console.log(
      `\nLogged in as ${client.user.tag} and running on ${client.guilds.cache.size} Server!\n`
    );
  },
};
