const messageData = require("../../database/guildData/messagelogs");
const { MessageEmbed } = require("discord.js");

module.exports = async(oldMessage, newMessage) => {
    const data = await messageData.findOne({
        GuildID: newMessage.guild.id
    })

    if (!data) return;

    const channel = data.ChannelID

    const embed = new MessageEmbed()
    .setTitle("**Message Edited**")
    .setDescription(`${newMessage.author} seine/ ihre Nachricht in ${newMessage.channel} geändert!`)
    .addField('Auf die Nachricht springen', `[Click Me](https://discord.com/channels/${newMessage.guild.id}/${newMessage.channel.id}/${newMessage.id})`)
    .addField(`Alte Message`, `${oldMessage.content}`, true)
    .addField('Neue Message', `${newMessage.content}`, true)
    .setColor('GREEN')
    .setTimestamp()

    newMessage.guild.channels.cache.get(data.ChannelID).send({ embeds: [embed] });
};
