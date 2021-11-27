const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "fishington",
    description: "Play fishington.io in Discord",
    aliases: ['fton'],
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('🚫 | Meister!! Sie müssen zuerst einem Sprachkanal beitreten!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'fishington').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Fishington.io")
            .setDescription(`[Click Here](${invite.code}) um Poker zu spielen!\n\`\`\`\nNote: Diese Funktion ist für mobile Benutzer nicht verfügbar!!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Angefordert von Meister: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}