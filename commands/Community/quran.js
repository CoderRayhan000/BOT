const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const { joinVoiceChannel, createAudioPlayer, createAudioResource, VoiceConnectionStatus } = require('@discordjs/voice');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('quran')
    .setDescription('Listen to the quraan')
    .addStringOption(option =>
        option.setName('surah')
        .setDescription('Surah')
        .setRequired(true)
        .addChoices
        ({name:'Fatiha',value:'1'},
        { name: "Baqarah", value: '2'},
        { name: "Imran", value: '3'},
        { name: "Nisa", value: '4'},

        )
        
    ),

        async execute(interaction, client) {
           
            if (!interaction.member.voice.channel) {
                await interaction.reply({content:'You must be in a voice channel to use this command.',ephemeral:true});
                return;
              }



const s = interaction.options.getString('surah')
let audioURL;

if (s === '1') {
  audioURL = 'https://server11.mp3quran.net/shatri/001.mp3';

  const connection = joinVoiceChannel({
    channelId: interaction.member.voice.channel.id,
    guildId: interaction.guild.id,
    adapterCreator: interaction.guild.voiceAdapterCreator
  });
 

    const audioPlayer = createAudioPlayer();

  connection.subscribe(audioPlayer);

  const audioResource = createAudioResource(audioURL);

  audioPlayer.play(audioResource)


  const embed = new EmbedBuilder()
  .setColor('Green')
  .setTitle('Quran: Surah Fatiha ')
  .setDescription('Playing Duration "1m 04s"')

  const pause = new ActionRowBuilder()
  .addComponents(
  new ButtonBuilder()
   .setCustomId('p')
    .setLabel('Pause') 
    .setStyle(ButtonStyle.Primary), )
    const re = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
     .setCustomId('r')
      .setLabel('Resume') 
      .setStyle(ButtonStyle.Primary), )
      
      const lvc = new ActionRowBuilder()
      .addComponents(
      new ButtonBuilder()
       .setCustomId('lvc')
        .setLabel('Stop & Leave VC') 
        .setStyle(ButtonStyle.Danger), )


 const mg = await interaction.reply({ embeds: [embed], components: [pause, re, lvc]})

const collector = await mg.createMessageComponentCollector();
collector.on('collect', async i => {
    if (i.customId === 'p') {
        if (i.user.id !== interaction.user.id) {
            return await i.reply(`Only ${i.user} can use these buttons`)
        }
        audioPlayer.pause(audioResource)
        interaction.channel.send({ content: `Paused Surah Fatiha`})
        await i.update({embeds: [embed]})
    }

    if (i.customId === 'r') {
      if (i.user.id !== interaction.user.id) {
        return await i.reply(`Only ${i.user} can use these buttons`)
    }

    audioPlayer.unpause(audioResource)
    interaction.channel.send({ content: `Unpaused Surah Fatiha`})
    await i.update({embeds: [embed]})



}



if(i.customId === 'lvc') {
  if (i.user.id !== interaction.user.id) {
    return await i.reply(`Only ${i.user} can use these buttons`)
}
audioPlayer.stop(audioResource)
connection.destroy(audioPlayer)
interaction.channel.send({ content: `Stopped Recitation & Left VC`})
await i.update({ embeds: [embed]})
}

})

}

if (s === '2') {
  audioURL = 'https://server11.mp3quran.net/shatri/002.mp3';

  const connection = joinVoiceChannel({
    channelId: interaction.member.voice.channel.id,
    guildId: interaction.guild.id,
    adapterCreator: interaction.guild.voiceAdapterCreator
  });
 

    const audioPlayer = createAudioPlayer();

  connection.subscribe(audioPlayer);

  const audioResource = createAudioResource(audioURL);

  audioPlayer.play(audioResource)


  const embed = new EmbedBuilder()
  .setColor('Green')
  .setTitle('Quran: Surah Baqarah ')
  .setDescription('Playing Duration "1h 58m 06s "')

  const pause = new ActionRowBuilder()
  .addComponents(
  new ButtonBuilder()
   .setCustomId('p')
    .setLabel('Pause') 
    .setStyle(ButtonStyle.Primary), )
    const re = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
     .setCustomId('r')
      .setLabel('Resume') 
      .setStyle(ButtonStyle.Primary), )
      
      const lvc = new ActionRowBuilder()
      .addComponents(
      new ButtonBuilder()
       .setCustomId('lvc')
        .setLabel('Stop & Leave VC') 
        .setStyle(ButtonStyle.Danger), )


 const mg = await interaction.reply({ embeds: [embed], components: [pause, re, lvc]})


 const collector = await mg.createMessageComponentCollector();
 collector.on('collect', async i => {
     if (i.customId === 'p') {
         if (i.user.id !== interaction.user.id) {
             return await i.reply(`Only ${i.user} can use these buttons`)
         }
         audioPlayer.pause(audioResource)
         interaction.channel.send({ content: `Paused Surah Baqarah`})
         await i.update({embeds: [embed]})
     }
 
     if (i.customId === 'r') {
       if (i.user.id !== interaction.user.id) {
         return await i.reply(`Only ${i.user} can use these buttons`)
     }
 
     audioPlayer.unpause(audioResource)
     interaction.channel.send({ content: `Unpaused Surah Baqarah`})
     await i.update({embeds: [embed]})
 
 
 
 }
 
 
 
 if(i.customId === 'lvc') {
   if (i.user.id !== interaction.user.id) {
     return await i.reply(`Only ${i.user} can use these buttons`)
 }
 audioPlayer.stop(audioResource)
 connection.destroy(audioPlayer)
 interaction.channel.send({ content: `Stopped Recitation & Left VC`})
 await i.update({ embeds: [embed]})
 }
 
 })



  
} 


if(s === '3') {
  audioURL = 'https://server11.mp3quran.net/shatri/003.mp3';

  const connection = joinVoiceChannel({
    channelId: interaction.member.voice.channel.id,
    guildId: interaction.guild.id,
    adapterCreator: interaction.guild.voiceAdapterCreator
  });
 

    const audioPlayer = createAudioPlayer();

  connection.subscribe(audioPlayer);

  const audioResource = createAudioResource(audioURL);

  audioPlayer.play(audioResource)


  const embed = new EmbedBuilder()
  .setColor('Green')
  .setTitle('Quran: Surah Imran ')
  .setDescription('Playing Duration "1h 9m 49s" ')

  const pause = new ActionRowBuilder()
  .addComponents(
  new ButtonBuilder()
   .setCustomId('p')
    .setLabel('Pause') 
    .setStyle(ButtonStyle.Primary), )
    const re = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
     .setCustomId('r')
      .setLabel('Resume') 
      .setStyle(ButtonStyle.Primary), )
      
      const lvc = new ActionRowBuilder()
      .addComponents(
      new ButtonBuilder()
       .setCustomId('lvc')
        .setLabel('Stop & Leave VC') 
        .setStyle(ButtonStyle.Danger), )


 const mg = await interaction.reply({ embeds: [embed], components: [pause, re, lvc]})


 const collector = await mg.createMessageComponentCollector();
 collector.on('collect', async i => {
     if (i.customId === 'p') {
         if (i.user.id !== interaction.user.id) {
             return await i.reply(`Only ${i.user} can use these buttons`)
         }
         audioPlayer.pause(audioResource)
         interaction.channel.send({ content: `Paused Surah Imran`})
         await i.update({embeds: [embed]})
     }
 
     if (i.customId === 'r') {
       if (i.user.id !== interaction.user.id) {
         return await i.reply(`Only ${i.user} can use these buttons`)
     }
 
     audioPlayer.unpause(audioResource)
     interaction.channel.send({ content: `Unpaused Surah Imran`})
     await i.update({embeds: [embed]})
 
 
 
 }
 
 
 
 if(i.customId === 'lvc') {
   if (i.user.id !== interaction.user.id) {
     return await i.reply(`Only ${i.user} can use these buttons`)
 }
 audioPlayer.stop(audioResource)
 connection.destroy(audioPlayer)
 interaction.channel.send({ content: `Stopped Recitation & Left VC`})
 await i.update({ embeds: [embed]})
 }
 
 })

        
}

if(s === '4') {
  audioURL = 'https://server11.mp3quran.net/shatri/004.mp3';

  const connection = joinVoiceChannel({
    channelId: interaction.member.voice.channel.id,
    guildId: interaction.guild.id,
    adapterCreator: interaction.guild.voiceAdapterCreator
  });
 

    const audioPlayer = createAudioPlayer();

  connection.subscribe(audioPlayer);

  const audioResource = createAudioResource(audioURL);

  audioPlayer.play(audioResource)


  const embed = new EmbedBuilder()
  .setColor('Green')
  .setTitle('Quran: Surah Nisa ')
  .setDescription('Playing Duration "1h 9m 49s" ')

  const pause = new ActionRowBuilder()
  .addComponents(
  new ButtonBuilder()
   .setCustomId('p')
    .setLabel('Pause') 
    .setStyle(ButtonStyle.Primary), )
    const re = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
     .setCustomId('r')
      .setLabel('Resume') 
      .setStyle(ButtonStyle.Primary), )
      
      const lvc = new ActionRowBuilder()
      .addComponents(
      new ButtonBuilder()
       .setCustomId('lvc')
        .setLabel('Stop & Leave VC') 
        .setStyle(ButtonStyle.Danger), )


 const mg = await interaction.reply({ embeds: [embed], components: [pause, re, lvc]})


 const collector = await mg.createMessageComponentCollector();
 collector.on('collect', async i => {
     if (i.customId === 'p') {
         if (i.user.id !== interaction.user.id) {
             return await i.reply(`Only ${i.user} can use these buttons`)
         }
         audioPlayer.pause(audioResource)
         interaction.channel.send({ content: `Paused Surah Nisa`})
         await i.update({embeds: [embed]})
     }
 
     if (i.customId === 'r') {
       if (i.user.id !== interaction.user.id) {
         return await i.reply(`Only ${i.user} can use these buttons`)
     }
 
     audioPlayer.unpause(audioResource)
     interaction.channel.send({ content: `Unpaused Surah Nisa`})
     await i.update({embeds: [embed]})
 
 
 
 }
 
 
 
 if(i.customId === 'lvc') {
   if (i.user.id !== interaction.user.id) {
     return await i.reply(`Only ${i.user} can use these buttons`)
 }
 audioPlayer.stop(audioResource)
 connection.destroy(audioPlayer)
 interaction.channel.send({ content: `Stopped Recitation & Left VC`})
 await i.update({ embeds: [embed]})
 }
 
 })

}


}
}