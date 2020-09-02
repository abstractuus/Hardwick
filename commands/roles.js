const Discord = require("discord.js");

exports.run = async (client, message, args) => {


   const embed = new Discord.MessageEmbed()
      .setColor(15724786)
      .setThumbnail("https://www.iconsdb.com/icons/preview/white/theatre-masks-xxl.png")
      .addField("Number of Roles:", ` ${message.guild.roles.cache.size}`)
      .addField("Server Roles:",`${message.guild.roles.cache.array()}`,true)
      .setFooter("Hardwick™")
      message.channel.send(embed);
  }
