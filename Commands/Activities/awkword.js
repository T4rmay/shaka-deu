const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "awkword",
    description: "Spiele awkword.io in Discord",
    aliases: ['awkw'],
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('🚫 | Meister!! Sie müssen zuerst einem Sprachkanal beitreten!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'awkword').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Awkword.io")
            .setDescription(`[Click Here](${invite.code}) um Awkword.io zu spielen!\n\`\`\`\nNote: Diese Funktion ist für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Angefordert von Meister: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    },
};