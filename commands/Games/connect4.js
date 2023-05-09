const { SlashCommandBuilder } = require('@discordjs/builders');
const { Connect4 } = require('discord-gamecord');

module.exports = {
data: new SlashCommandBuilder()
    .setName('connect4')
    .setDescription('Connect 4 In Discord')
    .addUserOption((option) => option
    .setName("user")
    .setDescription("User U Want to play with")
    .setRequired(true)
    ),

async execute(interaction) {
const { options } = interaction
    const Game = new Connect4({
        isSlashGame: true,
        opponent: options.getUser("user"),
        embed: {
          title: 'Connect4 Game',
          statusTitle: 'Status',
          color: '#5865F2'
        },
        emojis: {
          board: '⚪',
          player1: '🔴',
          player2: '🟡'
        },
        mentionUser: true,
        timeoutTime: 60000,
        buttonStyle: 'PRIMARY',
        turnMessage: '{emoji} | Its turn of player **{player}**.',
        winMessage: '{emoji} | **{player}** won the Connect4 Game.',
        tieMessage: 'The Game tied! No one won the Game!',
        timeoutMessage: 'The Game went unfinished! No one won the Game!',
        playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
      });
      
      Game.startGame();
      Game.on('gameOver');


}
}