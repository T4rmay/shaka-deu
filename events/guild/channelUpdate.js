const channelData = require('../../database/guildData/channelupdates');
const { MessageEmbed } = require('discord.js');

module.exports = async(oldChannel, newChannel) => {
    const data = await channelData.findOne(
        {
            GuildID: newChannel.guild.id,
        },
    );

    if (!data) return;

    if (oldChannel.name !== newChannel.name) {
        const nameEmbed = new MessageEmbed()
        .setTitle('**NEW: Channel Updates**')
        .addField('Channel Name Geändert:', `${oldChannel.name} -> ${newChannel.name}`)
        .setColor("GREEN")
        .setTimestamp();

        newChannel.guild.channels.cache.get(data.ChannelID).send({ embeds: [nameEmbed] });

    } else if (oldChannel.topic !== newChannel.topic) {
        const topicEmbed = new MessageEmbed()
        .setTitle('**NEW: Channel Updates**')
        .addField('Channel Topic Geändert:', `${oldChannel.topic} -> ${newChannel.topic}`)
        .setColor("GREEN")
        .setTimestamp();

        newChannel.guild.channels.cache.get(data.ChannelID).send({ embeds: [topicEmbed] });

    } else if (oldChannel.position !== newChannel.position) {
        const positionEmbed = new MessageEmbed()
        .setTitle('**NEW: Channel Updates**')
        .addField('Channel Position Geändert:', `${oldChannel.position} -> ${newChannel.position}`)
        .setColor("GREEN")
        .setTimestamp();

        newChannel.guild.channels.cache.get(data.ChannelID).send({ embeds: [positionEmbed] });

    } else if (oldChannel.type !== newChannel.type) {
        const typeEmbed = new MessageEmbed()
        .setTitle('**NEW: Channel Updates**')
        .addField('Channel Type Geändert:', `${oldChannel.type} -> ${newChannel.type}`)
        .setColor("GREEN")
        .setTimestamp();

        newChannel.guild.channels.cache.get(data.ChannelID).send({ embeds: [typeEmbed] });

    } else if (oldChannel.nsfw !== newChannel.nsfw) {
        const nsfwEmbed = new MessageEmbed()
        .setTitle('**NEW: Channel Updates**')
        .addField('Channel NSFW Geändert:', `${oldChannel.nsfw} -> ${newChannel.nsfw}`)
        .setColor("GREEN")
        .setTimestamp();

        newChannel.guild.channels.cache.get(data.ChannelID).send({ embeds: [nsfwEmbed] });

    } else if (oldChannel.bitrate !== newChannel.bitrate) {
        const bitrateEmbed = new MessageEmbed()
        .setTitle('**NEW: Channel Updates**')
        .addField('Channel Bitrate Geändert:', `${oldChannel.bitrate} -> ${newChannel.bitrate}`)
        .setColor("GREEN")
        .setTimestamp();

        newChannel.guild.channels.cache.get(data.ChannelID).send({ embeds: [bitrateEmbed] });

    } else if (oldChannel.userLimit !== newChannel.userLimit) {
        const userLimitEmbed = new MessageEmbed()
        .setTitle('**NEW: Channel Updates**')
        .addField('Channel UserLimit Geändert:', `${oldChannel.userLimit} -> ${newChannel.userLimit}`)
        .setColor("GREEN")
        .setTimestamp();

        newChannel.guild.channels.cache.get(data.ChannelID).send({ embeds: [userLimitEmbed] });

    } else if  (oldChannel.rateLimitPerUser !== newChannel.rateLimitPerUser) {
        const rateLimitPerUserEmbed = new MessageEmbed()
        .setTitle('**NEW: Channel Updates**')
        .addField('Channel RateLimitPerUser Geändert:', `${oldChannel.rateLimitPerUser} -> ${newChannel.rateLimitPerUser}`)
        .setColor("GREEN")
        .setTimestamp();

        newChannel.guild.channels.cache.get(data.ChannelID).send({ embeds: [rateLimitPerUserEmbed] });

    } else {
        return;
    };
};