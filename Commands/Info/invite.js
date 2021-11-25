const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "Get the bot's",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription(
        "**Holen Sie sich den Einladungslink von Naneko: [Here](https://dsc.gg/naneko)**\n**Wenn Sie Hilfe benötigen? Dann treten Sie jetzt unseren [Support Server](https://dsc.gg/infinity-support) bei!**"
      )
      .setFooter(`Angefordert von: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
