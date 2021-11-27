const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "betrayal",
    description: "Play betrayal.io in Discord",
    aliases: ['bty', 'bety'],
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('🚫 | Meister!! Sie müssen zuerst einem Sprachkanal beitreten!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'betrayal').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Betrayal.io")
            .setDescription(`[Click Here](${invite.code}) um Betrayal.io zu spielen!\n\`\`\`\nNote: Diese Funktion ist für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Angefordert von Meister: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}