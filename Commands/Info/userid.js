const Discord = module.require("discord.js");

module.exports = {
  name: "userid",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const mention = message.mentions.members.first();
    if (!mention) return message.channel.send("🚫 | Meister, Sie müssen jemanden erwähnen, um deren ID zu bekommen!!");
    const lolicon = mention.user.avatarURL;
    const lolid = new Discord.MessageEmbed()
      .setThumbnail(mention.user.avatarURL)
      .setColor("RANDOM")
      .setTitle("Hier ist " + `${mention.user.username}\'s ID`)
      .setDescription(`${mention.id}`)
      .setThumbnail(lolicon);
    message.channel.send({ embeds: [lolid] });
  },
};
