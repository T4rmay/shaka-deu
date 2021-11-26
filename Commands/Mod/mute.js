const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'mute',
    description: 'Mutes the specified user.',
    usage: 'Mute @user [time] [reason]',
    // userPerms: ["MANAGE_GUILD"],
    // botPerms: ["EMBED_LINKS", "MANAGE_GUILD"],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, Discord) => {

        if (!message.member.permissions.has('MANAGE_ROLES'))
        return message.channel.send('🚫 | Meister, Sie können dieser Command leider nicht benutzen, da Sie keine Rechte dafür haben!!');

        if (!message.guild.me.permissions.has('MANAGE_ROLES'))
        return message.channel.send('🚫 | Meister, ich habe leider keine Rechte dafür!! :pleading_face:');

        const member = message.mentions.members.first();
        let time = args[1];
        const reason = args.slice(1).join(' ');
        const role = message.guild.roles.cache.find(role => role.name === 'Muted');

        if (!member) return message.channel.send('🚫 | Meister, Sie müssen jemanden erwähnen!!');
        if (!time) return message.channel.send('Wie lange soll der User gemutet werden??');
        if (!reason) return message.channel.send('🚫 | Bitte sagen Sie mir den Grund!');

        if (member.id === message.author.id) return message.channel.send('🚫 | Meister!! Sie können sich selbst nicht muten!')
        if (member.id === client.id) return message.channel.send('🚫 | Meister, Sie können mich doch nicht muten!! :pleading_face:')

        if (!role) {
            try {
                message.channel.send('Keine Muted-Rolle gefunden.. Die Rolle wird erstellt..!')
                let muteRole = await message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        permissions: [],
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muteRole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                    })
                });
                message.channel.send(
                    new MessageEmbed()
                    .setDescription('✅ | **Muted-Rolle** wurde erfolgreich erstellt.')
                    .setColor("GREEN")
                )
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(role => role.name === 'Muted');
        if (member.roles.cache.has(role2)) return message.channel.send('Meister, dieser User wurde bereits gemutet!! ');

        if (member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Sie können dieser User nicht muten!!');

        await member.roles.add(role2);
        message.channel.send(`${member.user.username} wurde für ${ms(ms(time))} gemutet.\nGrund: ${reason}`);

        setTimeout(() => {
            member.roles.remove(role2)
        }, ms(time))
    },
};
