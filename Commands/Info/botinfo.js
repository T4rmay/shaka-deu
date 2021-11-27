/**
* READ THIS BEFORE YOU CHANGE THE CONTENT OF THIS COMMAND!
* You are not allowed to change lines about this repo in this command.
* You can change bot name and owner name, but not the source of this bot.
* You are also not allowed to remove the credits from the footer to the orginal owner from this bot.
* If you want to change the description, you will have to add the line that: "[YOUR BOT NAME] is an modified instance of Naneko bot made by Simpleboy353.
* These points are not optional, but remarks from the dev team of Naneko.
*/

const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "Shows the bot info",
  aliases: ['binf'],
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.MessageEmbed()
      .setAuthor("Naneko's Info", client.user.avatarURL())
      .setColor("RANDOM")
      .setDescription(
        `**Bot Name: **Naneko \n**Owner: **꧁Saito꧂#6248 \n**Kategorien: **8 Kategorien \n**Commands: **${client.commands.size} Commands \n**Users:** ${
          client.users.cache.size
        } Users \n**Servers:** ${client.guilds.cache.size} Servers \n**Channels:** ${
          client.channels.cache.size
        } Channels`
      )
      .addField(
        "Über Naneko",
        "Naneko ist ein Open-Source-Mehrzweck-Discord-Bot mit Funktionen wie Moderation, Musik, Logging, Welcomer und vieles mehr!\nDen Link zum GitHub Repo können Sie hier finden: [GitHub Repo Here](https://github.com/XSaitoKungX/Naneko)"
      )
      .addField(
        "Einige nützliche Links",
        "**Holen Sie sich Ihren eigenen Bot!** **[Here](https://github.com/XSaitoKungX/Naneko)** \n**Need Help? Dann treten Sie unseren ** **[Support/Development Server](https://dsc.gg/infinity-support) bei** **für die nötigen Hilfen.**"
      )
      .setFooter("Viele Grüße, Naneko Development Team ❤");
    message.channel.send({ embeds: [embed] });
  },
};
