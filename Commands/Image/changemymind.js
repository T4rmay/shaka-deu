const { Message } = require("discord.js");

const Discord = module.require("discord.js");

module.exports = {
  name: "changemymind",
  description: "Image Manipulation Command",
  aliases: ['cmmi'],
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const text = args.join("+");
    if (!text) {
      return message.channel.send("🚫 | Meister, Sie müssen etwas schreiben!!");
    }
    message.channel.send({
      files: [
        {
          attachment: `https://vacefron.nl/api/changemymind?text=${text}`,
          name: "changemymind.png",
        },
      ],
    });
  },
};