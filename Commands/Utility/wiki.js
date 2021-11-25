const Discord = module.require("discord.js");

module.exports = {
  name: "wiki",
  description: "Get Search Results from Wikipedia",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const search = args.join("_");
    const msg = args.join(" ");
    if (!msg) {
      return message.channel.send("🚫 | Meister! Sie müssen einen Text eingeben, nach dem gesucht werden soll!");
    }
    const link = `https://www.wikipedia.org/w/index.php?search=${search}&ns0=1`;
    const embed = new Discord.MessageEmbed()
      .setTitle("**Wikipedia Search**")
      .addField(`Sie suchten nach:`, `${msg}`)
      .addField(`Ergebnisse:`, `[Das habe ich gefunden](${link})`)
      .setColor("RANDOM");

    message.channel.send({ embeds: [embed] });
  },
};
