module.exports = async(queue, client) => {

    const playingMessage = queue.metadata.guild.channels.cache.get(client.db.get(`playingchannel_${queue.metadata.guild.id}`))
    .messages.cache.get(client.db.get(`playingembed_${queue.metadata.guild.id}`), false, true);

    if (playingMessage && !playingMessage.deleted && playingMessage.deletable) {
      playingMessage.delete().catch(console.error);
    }
  
    return client.say.queueMessage(client, queue, "Ich habe den Sprachkanal verlassen, da ich allein gelassen wurde! :pleading_face:");
    
  };