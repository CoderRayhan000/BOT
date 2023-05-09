const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
data: new SlashCommandBuilder()
    .setName('hangman')
    .setDescription('Play hangman in discord!'),
async execute(message) {
    const { Hangman } = require('discord-gamecord');

const Game = new Hangman({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Hangman',
    color: '#5865F2'
  },
  hangman: { hat: '🎩', head: '🙂', shirt: '👕', pants: '🩳', boots: '👞👞' },
  customWord: null,
  timeoutTime: 60000,
  theme: 'nature',
  winMessage: 'You won! The word was **{word}**.',
  loseMessage: 'You lost! The word was **{word}**.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
Game.on('gameOver', result => {
});
    }
};
// this is my code for hangman