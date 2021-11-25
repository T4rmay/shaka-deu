const discord = module.require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  userPerms: ["BAN_MEMBERS"],
  botPerms: ["EMBED_LINKS", "BAN_MEMBERS"],
  run: async (client, message, args) => {
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Unspecified";

    const target = message.mentions.members.first() || message.guild.users.cache.get(args[0]);

    if (!target) {
      return message.channel.send(
        `🚫 | **${message.author.username}**, Bitte erwähnen Sie die Person, die Sie bannen möchten!!`
      );
    }

    if (target.id === message.author.id) {
      return message.channel.send(
        `🚫 | **${message.author.username}**, Sie können sich selbst nicht bannen!`
      );
    }
    if (target.id === message.guild.ownerId) {
      return message.channel.send("🚫 | Sie können der Server-Owner nicht bannen!");
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action : Ban")
      .setDescription(`Bannt: ${target} (${target.id})\nGrund: ${reason}`)
      .setColor("#ff2050")
      .setThumbnail(target.avatarURL)
      .setFooter(`Gebannt von: ${message.author.tag}`);

    await message.guild.bans.create(target, {
      reason: reason
    }).then(() => {
        message.channel.send({ embeds: [embed] });
      });
  },
};
