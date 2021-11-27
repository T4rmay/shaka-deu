const serverData = require("../../database/guildData/serverupdates")
const { MessageEmbed } = require("discord.js")

module.exports = async(oldGuild, newGuild) => {
    const data = await serverData.findOne({
        GuildID: newGuild.id
    })

    if (!data) return;

    if (newGuild.name !== oldGuild.name) {
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("**Server Updates**")
            .addField('Server Name Geändert', `${oldGuild.name} => ${newGuild.name}`)
            .setThumbnail(`${newGuild.iconURL()}`)
            .setTimestamp()

        newGuild.channels.cache.get(data.ChannelID).send({ embeds: [embed]});

    } else if (newGuild.iconURL() !== oldGuild.iconURL()) {
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("**Server Updates**")
            .addField('Server Icon Geändert', `[Old Icon](${oldGuild.iconURL()}) => [New Icon](${newGuild.iconURL()})`)
            .setThumbnail(`${newGuild.iconURL()}`)
            .setTimestamp()

        newGuild.channels.cache.get(data.ChannelID).send({ embeds: [embed]});

    } else if (newGuild.splashURL() !== oldGuild.splashURL()) {
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("**Server Updates**")
            .addField('Server Splash Geändert', `[Old Splash](${oldGuild.splashURL()}) => [New Splash](${newGuild.splashURL()})`)
            .setThumbnail(`${newGuild.splashURL()}`)
            .setTimestamp()

        newGuild.channels.cache.get(data.ChannelID).send({ embeds: [embed]});

    } else if (newGuild.memberCount !== oldGuild.memberCount) {
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("**Server Updates**")
            .addField('Server Members Geändert', `${oldGuild.memberCount} => ${newGuild.memberCount}`)
            .setThumbnail(`${newGuild.iconURL()}`)
            .setTimestamp()

        newGuild.channels.cache.get(data.ChannelID).send({ embeds: [embed]});

    } else if (newGuild.ownerId !== oldGuild.ownerId) {
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("**Server Updates**")
            .addField('Server Owner Geändert', `${oldGuild.owner.user.username} => ${newGuild.owner.user.username}`)
            .setThumbnail(`${newGuild.iconURL()}`)
            .setTimestamp()

        newGuild.channels.cache.get(data.ChannelID).send({ embeds: [embed]});
    } else {
        return;
    };
};
