const prefixModel = require("../../database/guildData/prefix");
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const { DEFAULT_PREFIX, OWNER_ID } = require('../../config')
const { Collection } = require("discord.js")

module.exports = async (message, cooldowns) => {

  let client = message.client;

  const prefixData = await prefixModel.findOne({
    GuildID: message.guild.id,
  }).catch(err=>console.log(err))

  if (prefixData) {
    var PREFIX = prefixData.Prefix
  } else if (!prefixData) {
    PREFIX = DEFAULT_PREFIX
  }
  client.prefix = PREFIX;

  if (message.author.bot) return;


  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;

  const prefixRegex = new RegExp(
    `^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`
  );
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const p = matchedPrefix.length;
  const args = message.content.slice(p).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;
    //command enaled thing
    if(command.enabled === false) {
      return message.reply('This command is disabled!')
    }
    // ownerOnly thing
    if(command.ownerOnly === true) {
      if(!message.author.id === OWNER_ID) {
        return message.reply('dieser Befehl ist leider nur für Owner verfügbar!')
      }
    }
    // user permissions handler
  if (!message.member.permissions.has(command.userPerms || [])) {
    if(command.userPermError === null || command.userPermError === undefined) {
      return message.reply(`Sie brauchen  \`${command.userPerms}\` Rechte, um dieser Befehl verwenden zu können!!`);
    } else {
      return message.reply(command.userPermError)
    }
  }

  // bot permissions handler
  if (!message.guild.me.permissions.has(command.botPerms || [])) {
  if(command.botPermError === null || command.botPermError === undefined) {
    return message.reply(
      `Ups! :/  Ich brauche \`${command.botPerms}\` Rechte, um dieser Befehl vollständig ausführen zu können!!`
    );
 } else {
    return message.reply(command.botPermError)
  }
  }
      //guildOnly thing
  if(command.guildOnly === true) {
    console.log(message.channel.type)
    if(message.channel.type === 'DM' || message.channel.type === 'GROUP_DM') {
      return message.reply('dieser Befehl kann nur auf dem Server verwendet werden!!')
    }
  }
    //nsfw thingy
    if(command.nsfw === true) {
      if(message.channel.nsfw === false) {
        return message.reply(
          'es tut mir leid, aber Sie können dieser Befehl nicht hier benutzen! Dieser Channel muss NSFW-Channel sein, sonst funktioniert dieser Befehl nicht!')
      }
    }
  //min args and max args thing
  const arguments = message.content.split(/[ ]+/)

        arguments.shift()
        if (
          arguments.length < command.minArgs ||
          (command.maxArgs !== null && arguments.length > command.maxArgs)
        ) {
          return message.reply(command.expectedArgs)
          
        }

  // cooldowns
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `bitte warten Sie noch ${timeLeft.toFixed(
          1
        )} more second(s) before reusing the \`${command.name}\` Command.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.run(client, message, args, p, cooldowns);
  } catch (error) {
    console.error(error);
    let embed2000 = new MessageEmbed()
      .setDescription("🚫 | Meister, für dieser Befehl ist grade ein Problem aufgetreten!! Mein Meister **꧁Saito꧂#6248** versucht das noch zu beheben.")
      .setColor("BLUE");
    message.channel.send({ embeds: [embed2000] }).catch(console.error);
  }
};
/* 
example usage
module.exports = {
  name: "name",
  description: "description",
  aliases: [],
  botPerms: [],
  userPerms: [],
  expectedArgs: null,
  minArgs: 1,
  maxArgs: 2,
  ownerOnly: true,
  guildOnly: true,
  enabled: true,
  nsfw: false,
  userPermError: null,
  botPermError: null,
  run: async (client, message, args) => {
    //code
  },
};

*/
