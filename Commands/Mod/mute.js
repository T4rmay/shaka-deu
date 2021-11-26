const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'mute',
    description: 'Mutes the specified user.',
    usage: 'Mute @user [time] [reason]',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, Discord) => {
        // message.mentions.members.first() || message.guild.members.get(args[0])
        const member = message.mentions.members.first();
        if (!member) return message.channel.send('🚫 | Meister, Sie müssen jemanden erwähnen!!');
        if (member.id === message.author.id) return message.channel.send('🚫 | Meister!! Sie können sich selbst nicht muten!');
        if (member.id === client.id) return message.channel.send('🚫 | Meister, Sie können mich doch nicht muten!! :pleading_face:');

        let time = args[1];
        if (!time) return message.channel.send('Wie lange soll der User gemutet werden??');

        const reason = args.slice(2).join(' ');
        if (!reason) return message.channel.send('🚫 | Bitte sagen Sie mir den Grund!');

        const mutedRole = message.guild.roles.cache.find(role => role.name === "Muted");

        if (!mutedRole) {
            try {
                message.channel.send('Keine Muted-Rolle gefunden.. Die Rolle wird erstellt..!')
                let muterole = await message.guild.roles.create({
                    name: "Muted",
                    color: "DARK_VIVID_PINK",
                    permissions: [],
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.permissionOverwrites(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                    });
                });
                message.channel.send('✅ | **Muted-Rolle** wurde erfolgreich erstellt.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(role => role.name === 'Muted')
        if (member.roles.cache.has(role2)) return message.channel.send('Meister, dieser User wurde bereits gemutet!! ')

        if (member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Sie können dieser User nicht muten!!')

        await member.roles.add(role2)
        message.channel.send(`${member.user.username} wurde für ${ms(ms(time))} gemutet.\nGrund: ${reason}`);

        setTimeout(() => {
            member.roles.remove(role2)
        }, ms(time));
    },
};
