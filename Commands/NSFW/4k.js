const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK

module.exports = {
  name: "4k",
  category: "NSFW",
  description: "Sends 4k girl pics",
  usage: "[command]",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    try {
      //command
      var errMessage = "This is not an NSFW Channel";
      if (!message.channel.nsfw) {
        message.react("💢");

        return message.reply(errMessage).then((msg) => {
          setTimeout(() => msg.delete(), 3000);
        });
      }
      got("https://www.reddit.com/r/RealGirls/random.json")
        .then((response) => {
          let content = JSON.parse(response.body);
          var title = content[0].data.children[0].data.title;
          var amazeme = content[0].data.children[0].data.url;
          let wow = new discord.MessageEmbed()
            .setDescription(`**${title}**`)
            .setImage(amazeme)
            .setFooter(`Nice `)
            .setColor("RANDOM");
          message.channel.send({ embeds: [wow] });
        })
        .catch(console.error);
    } catch (err) {
      const errorlogs = client.channels.cache.get("912404023280304148");

      message.channel.send(
        `Hoppla, wir haben gerade einen Fehler! Dieser Fehler wurde dem Support-Center gemeldet!`
      );

      errorlogs.send(
        `Fehler in ${message.guild.name} von ${message.author.username} bei 4k-Befehlen!\n\nError:\n\n ${err}`
      );
    }
  },
};
