const { Interaction, EmbedBuilder, ChannelType, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");
const fetch = require('node-fetch')
const userSchema = require('../../Ray/models/Tick2')
const b = require ('../../Ray/models/Blacklist')
const a = require('../../Ray/models/alert')
const v = require('../../Ray/models/Verify')
module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {


if(interaction.isButton) {

    const { channel, member, guild, customId, user } = interaction;


    switch (customId) {
case "create": 


const inticket = new EmbedBuilder()
.setColor('DarkButNotBlack')
      .setTitle(`Welcome To Ticket`)
    .setDescription(`Welcome To The Ticket Someone Will Be Here Soon`)

    const close = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setCustomId('close')
        .setLabel('Close Ticket')
        .setStyle(ButtonStyle.Danger), 
    )


const channel = await interaction.guild.channels.create({
    name: `ticket ${interaction.user.tag}`, 
    type: ChannelType.GuildText
});

channel.permissionOverwrites.create(interaction.user.id, { ViewChannel: true,            SendMessages: true} );
channel.permissionOverwrites.create(interaction.guild.id, { ViewChannel: false, SendMessages: false} );


channel.send({ embeds: [inticket], components: [close] });

channel.send({ content: `${interaction.user}`})


  interaction.reply({ content: `Your ticket has been created in ${channel}`, ephemeral: true})

 


  break;  

  case "close": {
  

const closed = new EmbedBuilder()
.setColor('Red')
.setTitle(" Closed The Ticket ")
.setDescription(`**User Who Closed Ticket** ${interaction.user}!`)
    
channel.permissionOverwrites.edit({ SendMessages: false});

await interaction.reply({ embeds: [closed]})



break;

  }
 
  case "hangman": {
    const { Hangman } = require('discord-gamecord');

const Game = new Hangman({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Hangman',
    color: '#5865F2'
  },
  hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
  customWord: '',
  timeoutTime: 60000,
  theme: 'nature',
  winMessage: 'You won! The word was **{word}**.',
  loseMessage: 'You lost! The word was **{word}**.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
Game.on('gameOver', result => {
  });

  break;
}

case "triva": {

   
    const { Trivia } = require('discord-gamecord');

const Game = new Trivia({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Trivia',
    color: '#5865F2',
    description: 'You have 60 seconds to guess the answer.'
  },
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  trueButtonStyle: 'SUCCESS',
  falseButtonStyle: 'DANGER',
  mode: 'multiple',  // multiple || single
  difficulty: 'easy',  // easy || medium || hard
  winMessage: 'You won! The correct answer is {answer}.',
  loseMessage: 'You lost! The correct answer is {answer}.',
  errMessage: 'Unable to fetch question data! Please try again.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});



Game.startGame();

Game.on('gameOver', result => {
});



break;
}
case "flo": {
  const { Flood } = require('discord-gamecord');

  const Game = new Flood({
    message: interaction,
    isSlashGame: true,
    embed: {
      title: 'Flood Game!',
      color: '#5865F2',
    },
    difficulty: 8,
    timeoutTime: 60000,
    buttonStyle: 'PRIMARY',
    emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
    winMessage: 'You won! You took **{turns}** turns.',
    loseMessage: 'You lost! You took **{turns}** turns.',
    playerOnlyMessage: 'Only {player} can use these buttons.'
  });
  
  Game.startGame();
  Game.on('gameOver', result => {
    interaction.channel.send({ content: `GG ${interaction.user}`})
  });

  break;
}
case "twozero": {
  const { TwoZeroFourEight } = require('discord-gamecord');

const Game = new TwoZeroFourEight({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: '2048',
    color: '#5865F2'
  },
  emojis: {
    up: '⬆️',
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
Game.on('gameOver', result => {
});
break;
}
case "mp": {
  const { MatchPairs } = require('discord-gamecord');

const Game = new MatchPairs({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Match Pairs',
    color: '#5865F2',
    description: '**Click on the buttons to match emojis with their pairs.**'
  },
  timeoutTime: 60000,
  emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
  winMessage: '**You won the Game! You turned a total of `{tilesTurned}` tiles.**',
  loseMessage: '**You lost the Game! You turned a total of `{tilesTurned}` tiles.**',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
Game.on('gameOver', result => {
  interaction.channel.send({ content: `GG ${interaction.user}`})
});
break;
}
case "ms": {
  const { Minesweeper } = require('discord-gamecord');

const Game = new Minesweeper({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Minesweeper',
    color: '#5865F2',
    description: 'Click on the buttons to reveal the blocks except mines.'
  },
  emojis: { flag: '🚩', mine: '💣' },
  mines: 5,
  timeoutTime: 60000,
  winMessage: 'You won the Game! You successfully avoided all the mines.',
  loseMessage: 'You lost the Game! Beaware of the mines next time.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
Game.on('gameOver', result => {
  interaction.channel.send({ content: `GG ${interaction.user}`})
});
break;
}
case "s": {
  const { Slots } = require('discord-gamecord');

  const Game = new Slots({
    message: interaction,
    isSlashGame: true,
    embed: {
      title: 'Slot Machine',
      color: '#5865F2'
    },
    slots: ['🍇', '🍊', '🍋', '🍌']
  });
  
  Game.startGame();
  Game.on('gameOver', result => {
    interaction.channel.send({ content: `GG ${interaction.user}`})
  });
  break;
}

case "snake": {
  const { Snake } = require('discord-gamecord');

const Game = new Snake({
  message: interaction,
  isSlashGame: true,
  embed: {
    title: 'Snake Game',
    overTitle: 'Game Over',
    color: '#5865F2'
  },
  emojis: {
    board: '⬛',
    food: '🍎',
    up: '⬆️', 
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
  foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
  stopButton: 'Stop',
  timeoutTime: 60000,
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
Game.on('gameOver', result => {
interaction.channel.send({ content: `GG ${interaction.user}`})
});
break;
}
case 'verify': {

const Verify = await v.findOne({ Guild: interaction.guild.id})

const Role = Verify.Role

  interaction.member.roles.add(Role)
 

}
}
}





  


        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return
        
        try{

          const Data = await b.findOne({
            User: interaction.user.id
          })
        

          if (Data) {
            const embed = new EmbedBuilder()
            .setTitle("Blacklisted User")
            .setDescription(
                `You are blacklisted from using this bot.\nReason: ${Data.Reason}`
              )
            .setColor("Red")
            .setTimestamp()
            return interaction.reply({ embeds: [embed] });
          }
          

            await command.execute(interaction, client);
        } catch (error) {
            console.log(error);
            await interaction.reply({
                content: 'There was an error while executing this command!', 
                ephemeral: true
            });
        }

        
       
          
    }
   
}
