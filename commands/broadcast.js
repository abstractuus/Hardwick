const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if(!args.join(' ')) {
    const error = new Discord.MessageEmbed()
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
    .setColor(15724786)
    .addField("**Usage:**", "broadcast <message>")
    .setFooter("Hardwick™")

    message.channel.send(error);
    return;
  }

  const sayMessage = args.join(" ");

  const public2 = new Discord.MessageEmbed()
  .setThumbnail("https://www.iconsdb.com/icons/preview/white/speaker-xxl.png")
  .setColor(15724786)
  .addField("**Attention:**", sayMessage )
  .setFooter("Hardwick™")

    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(public2);
  }
