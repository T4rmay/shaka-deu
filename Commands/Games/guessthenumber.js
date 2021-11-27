const Discord = module.require("discord.js");
const djsGames = require('djs-games')

module.exports = {
  name: "guessthenumber",
  description: "Guess The Number.",
  aliases: ['gtno'],
  run: async (client, message, args) => {
    const guessTheNumber = new djsGames.GuessTheNumber()
    guessTheNumber.startGame(message)
  },
};
