const Discord = module.require("discord.js");

module.exports = {
  name: "orangetext",
  description: " Colors the Text woth Orange Color",
  aliases: ['oratext'],
  run: async (client, message, args) => {
    const text = args.join(" ");
    if (!text) {
      return message.channel.send("🚫 | Meister!! Sie müssen etwas Text eingeben!");
    }
    message.channel.send(`\`\`\`fix\n${text}\n\`\`\``);
  },
};
