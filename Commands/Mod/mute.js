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

        const member = message.mentions.members.first();
        let time = args[1];
        const reason = args.slice(2).join(' ');
        const role = message.guild.roles.cache.find(role => role.name === 'Muted')

        if (!member) return message.reply('🚫 | Meister, Sie müssen jemanden erwähnen!!');
        if (!time) return message.reply('Wie lange soll der User gemutet werden??');
        if (!reason) return message.reply('🚫 | Bitte sagen Sie mir den Grund!');

        if (member.id === message.author.id) return message.reply('🚫 | Meister!! Sie können sich selbst nicht muten!')
        if (member.id === client.id) return message.reply('🚫 | Meister, Sie können mich doch nicht muten!! :pleading_face:')

        if (!role) {
            try {
                message.channel.send('Keine Muted-Rolle gefunden.. Die Rolle wird erstellt..!')
                let muterole = await message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        permissions: [],
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
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
        let role2 = message.guild.roles.cache.find(role => role.name === 'Muted')
        if (member.roles.cache.has(role2)) return message.reply('Meister, dieser User wurde bereits gemutet!! ')

        if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply('Sie können dieser User nicht muten!!')


        await member.roles.add(role2)
        message.channel.send(`${member.user.username} wurde für ${ms(ms(time))} gemutet.\nGrund: ${reason}`)

        setTimeout(() => {
            member.roles.remove(role2)
        }, ms(time))

    }



}