const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "lettertile",
    description: "Play lettertile.io in Discord",
    aliases: ['lett'],
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('🚫 | Meister!! Sie müssen zuerst einem Sprachkanal beitreten!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'lettertile').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("LetterTile.io")
            .setDescription(`[Click Here](${invite.code}) um LetterTile.io zu spielen!\n\`\`\`\nNote: Diese Funktion ist für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Angefordert von Meister: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}