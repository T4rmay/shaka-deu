const prefixModel = require("../../database/guildData/leavechannel");

module.exports = {
  name: "leavechannel",
  description: "Change the goodbye channel per server!",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send("`Usage: =leavechannel <#channel|off>`");
    }
    if (message.mentions.channels.first()) {
      const data = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send(
          `Meister!! Ich habe Leave-Channel jetzt auf ${message.mentions.channels.first()}  eingestellt.`
        );

        let newData = new prefixModel({
          Bye: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.channel.send(
          `Meister!! Ich habe Leave-Channel jetzt auf ${message.mentions.channels.first()}  eingestellt.`
        );

        let newData = new prefixModel({
          Bye: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send(`Meister!! Leave-channel wurde jetzt deaktiviert!`);
      } else if (!data2) {
        return message.channel.send(`🚫 | Meister!! Leave-Channel wurde noch nicht eingerichtet! Bitte richten Sie erts einen Leave-Channel ein und dann versuchen Sie es nochmal :)`);
      }
    }
  },
};
