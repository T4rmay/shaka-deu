const antiwordsData = require('../../database/guildData/antiwords');

module.exports = async (message) => {
  const antiwords = await antiwordsData.findOne(
    {
      GuildID: message.guild.id,
    },
  );

  if (antiwords) {
    if (
      message.content.match("bitch") || 
      message.content.match("hoe") || 
      message.content.match("slut") || 
      message.content.match("nigga") || 
      message.content.match("nigg") || 
      message.content.match("dick") || 
      message.content.match("cunt") || 
      message.content.match("shit") || 
      message.content.match("fuck") || 
      message.content.match("fick") || 
      message.content.match("schwanz")
    )
    {
      message.delete();
      message.channel.send("🚫 | **Solche Wörter sind hier strengend untersagt, bitte hören Sie auf damit!!**").then(msg => 
        {
          let time = '5s';
          setTimeout(function() {
            msg.delete();
          }, ms(time));
        });
    } else {
      return;
    }
  } else if (!antiwords) {
    return;
  };
};
