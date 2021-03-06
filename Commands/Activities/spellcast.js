const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "spellcast",
    description: "Play spellcast.io in Discord",
    aliases: ['spellc', 'scas'],
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('🚫 | Meister!! Sie müssen zuerst einem Sprachkanal beitreten!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'spellcast').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("SpellCast.io")
            .setDescription(`[Click Here](${invite.code}) um SpellCast.io zu spielen!\n\`\`\`\nNote: Diese Funktion ist für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Angefordert von Meister: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}