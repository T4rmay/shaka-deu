const Discord = require("discord.js");
const OWNER_ID = require("../../config.json").OWNER_ID;
const ERROR_LOGS_CHANNEL = require("../../config.json").ERROR_LOGS_CHANNEL;
require("dotenv");

module.exports = {
  name: "botservers",
  description: "Check what Servers the bot is in!",
  aliases: ['botser', 'bserv'],
  botPerms: ["USE_EXTERNAL_EMOJIS"],
  run: async (client, message, args) => {
    try {
      if (message.author.id != OWNER_ID)
        return message.channel.send(
          `š Developer Only š`
        );
      let data = [];
      client.guilds.cache.forEach((x) => {
        message.channel.send(
          `š¹**${x.name}** | \`${x.memberCount}\` members (ID: ${x.id})\n............................`
        );
      });

      if (data.length > 0) {
        data.sort();
        data = `š¹ ` + data.join("\nš¹");
      } else {
        data = "[Kein Server gefunden]";
      }
    } catch (err) {
      const errorlogs = client.channels.cache.get(ERROR_LOGS_CHANNEL);

      message.channel.send(
        `Hoppla, wir haben gerade einen Fehler! Dieser Fehler wurde dem Support-Center gemeldet!`
      );

      errorlogs.send(`Fehler bei BS-Befehlen!\n\nError:\n\n ${err}`);
    }
  },
};
