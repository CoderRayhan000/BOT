const { Client } = require("discord.js");

module.exports = {
    name: 'guildCreate',
    once: false,
    async execute(guild, client) {
      const channel = guild.channels.cache.random();
      if (!channel) return;
      
      channel.send(`**Thanks For Adding Me :smiling_face_with_3_hearts:**
  I am Only running on slash commands <:slashcmd:1059598415127920650>
  To Get Started Join Voice Channel And Type </play:1088968086297780351>
  Want To See All of My Available Commands ? Then Type </help:1080512943021633594>
                   
  :question: Need Support or Found Bug Feel Free To Join Support Server
  :question: Wanna invite Me To Your Server Then Click Here
  Make Sure I Have All Required Permisions To Work
  
   ${guild.name}!`);

   const Channel = client.channels.cache.get('1063668340800901170');

   Channel.send({ content: `Joined guild`})

    },
  };
  