const Discord = module.require("discord.js");

module.exports = {
  name: "emojiid",
  description: "Get ID of emojis",
  aliases: ['emoid'],
  run: async (client, message, args) => {
    const name = args.join(" ");
    const emoji = message.guild.emojis.cache.find((r) => r.name === name);
    if (!name) {
      return message.channel.send("🚫 | Meister!! Bitte geben Sie den Emoji-Namen ein");
    }
    if (!emoji) {
      return message.channel.send(
        "🚫 | Die Emojis mit dem angegebenen Namen konnten nicht gefunden werden. Bitte vergewissern Sie sich, dass der Emoji-Name korrekt ist"
      );
    }
    new message.channel.send(`\`\`\`${emoji}\`\`\``);
  },
};
