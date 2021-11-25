const prefixModel = require("../../database/guildData/joinmsg");

module.exports = {
  name: "joinmessage",
  description: "Change the welcome message per server!",
  aliases: ["joinmsg", "welcomemsg", "jmsg"],
  userPerms: ["MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    const text = args.join(" ");
    if (!args[0]) {
      return message.channel.send(`\`Usage: =joinmessage <Text|off>\``);
    }
    if (text !== "off") {
      const data = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });
        let newData = new prefixModel({
          JoinMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.channel.send(`Meister!! Ich habe Join-Message jetzt auf ${newData.JoinMsg} eingestellt.`);
      } else if (!data) {
        let newData = new prefixModel({
          JoinMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.channel.send(`Meister!! Ich habe Join-Message jetzt auf ${newData.JoinMsg} eingestellt.`);
      }
    } else if (text === "off") {
      const data2 = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send(`Meister!! Join-Message wurde jetzt deaktiviert!`);
      } else if (!data2) {
        return message.channel.send(`🚫 | Meister!! Join-Message wurde noch nicht eingerichtet! Bitte richten Sie erst einen Join-Message ein und dann versuchen Sie es nochmal :)`);
      }
    }
  },
};
