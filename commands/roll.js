const Discord = require("discord.js");


exports.run = (client, message, args) => {


    const rolled = Math.floor(Math.random() * 6) + 1;

      let embed = new Discord.MessageEmbed()
      .setAuthor(`Single Dice Roll`)
      .addField("You rolled:", rolled)
      .setThumbnail(`${message.author.displayAvatarURL()}`)
      .setColor(15724786);

      message.channel.send(embed);
      return;

}
