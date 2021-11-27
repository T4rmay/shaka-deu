const prefixModel = require("../../database/guildData/leavemessage");

module.exports = {
  name: "leavemessage",
  description: "Change the leave message per server!",
  userPerms: ["MANAGE_CHANNELS"],
  aliases: ['lemsg', 'byemsg'],
  run: async (client, message, args) => {
    const text = args.join(" ");
    if (!args[0]) {
      return message.channel.send(`\`Usage: =leavemessage <Text|off>\``);
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
          ByeMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.channel.send(`Meister!! Ich habe Leave-Message jetzt auf \n${newData.ByeMsg} eingestellt.`);
      } else if (!data) {
        let newData = new prefixModel({
          ByeMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.channel.send(`Meister!! Ich habe Leave-Message jetzt auf \n${newData.ByeMsg} eingestellt.`);
      }
    } else if (text === "off") {
      const data2 = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send(`Meister!! Leave-Message wurde jetzt deaktiviert!`);
      } else if (!data2) {
        return message.channel.send(`🚫 | Meister!! Leave-Channel wurde noch nicht eingerichtet! Bitte richten Sie erst einen Leave-Channel ein und dann versuchen Sie es nochmal :)`);
      }
    }
  },
};
