const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "youtube",
    description: "Watch Youtube in Discord!",
    aliases: ['youtube-together', 'together', 'ytg'],
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('🚫 | Meister!! Sie müssen zuerst einem Sprachkanal beitreten')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'youtubeDev').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Youtube Together")
            .setDescription(`[Click Here](${invite.code}) um Youtube Together zu akzeptieren!\n\`\`\`\nNote: Diese Funktion ist für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("RED")
            .setFooter(`Angefordert von Meister: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}