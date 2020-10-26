const Discord = require('discord.js');

exports.run = (Client, message, args) => {

  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let author = message.author;

  if (message.content.startsWith(user)) {
    //delete message
}


if (message.content.includes(reason)) {
   //delete message
}

  if(message.guild.member(author).hasPermission('BAN_MEMBERS' || 'KICK_MEMBERS')) {

    if(!args.join(" ")) {
        const error = new Discord.MessageEmbed()
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
            .setColor(15724786)
            .addField("**Usage:**", "warn <@user> <reason>")
            .setFooter("Hardwick™")

            message.channel.send(error);

        return;

      }



  if (!args.slice(1).join(' ')) {
    const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Error:**", `${message.author.tag}, you must supply a reason for the warning.`)
        .addField("**Usage:**", "warn <@user> <reason>")
        .setFooter("Hardwick™")

        message.channel.send(error);
        return;
  }

  if (message.mentions.users.size < 1) {
    const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Error:**", `${message.author.tag}, you must supply a user to warn.`)
        .addField("**Usage:**", "warn <@user> <reason>")
        .setFooter("Hardwick™")

        message.channel.send(error);
        return;
  }

  const embed = new Discord.MessageEmbed()
  .setAuthor("Moderation")
    .setColor(15724786)
    .setTimestamp()
    .setThumbnail("https://www.materialui.co/materialIcons/alert/warning_white_384x384.png")
    .addField("Warned:", `${user}`)
    .addField("By:", `${message.author.tag}`)
    .addField(`Reason:`,` ${reason}`)
    .setFooter("Hardwick™")

    message.channel.send(embed)
    return;

} else {
    const error = new Discord.MessageEmbed()
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
    .setColor(15724786)
    .addField("**Error:**", `You are not a moderator, ${message.author.tag}!`)
    .addField("**Tip:**", "Try this command when you have the permission 'Ban Members' / Kick Members or 'Administrator'.")
    .setFooter("Hardwick™")

    message.channel.send(error);
    return;

  }


}
