const Discord = module.require("discord.js");
const imdb = require("imdb-api");

module.exports = {
  name: "imdb",
  description: "Get the information about series and movies",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    var state = "Disabled";
    if (state === "Disabled") {
      return message.channel.send(
        "Befehl wurde deaktiviert! Kontaktieren Sie den Bot-Besitzer für weitere Informationen!"
      );
    }
    const name = args.join(" ");
    if (!name) {
      return message.channel.send("Bitte geben Sie den Namen eines Films oder einer Serie an!");
    }

    const imob = new imdb.Client({ apiKey: "5e36f0db" });

    let movie = await imob.get({ name: args.join(" ") });

    const embed = new Discord.MessageEmbed()
      .setTitle(movie.Title)
      .setColor("RANDOM")
      .setThumbnail(movie.poster)
      .SetDescription(
        `Beschreibung: \`${movie.plot}\`\nRatings: \`${movie.ratings}\`\nCountry: \`${movie.country}\`\nSprache: \`${movie.languages}\`\nType: \`${movie.type}\``
      );
    message.chanel.send({ embeds: [embed] });
  },
};
