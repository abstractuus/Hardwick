const Discord = require('discord.js');

exports.run = (client, message, args) => {

      const rolled = Math.floor(Math.random() * 2) + 1;

      let headembed = new Discord.MessageEmbed()
      .setAuthor(`Coin Flip`)
      .addField(`Result:`, `You flipped onto: **Heads**!`)
      .setThumbnail(`${message.author.displayAvatarURL()}`)
      .setColor(15724786);

      let tailembed = new Discord.MessageEmbed()
      .setAuthor(`Coin Flip`)
      .addField(`Result:`, `You flipped onto: **Tails**!`)
      .setThumbnail(`${message.author.displayAvatarURL()}`)
      .setColor(15724786);

      if (rolled == "1")

      {
        message.channel.send(tailembed);
      }
      if (rolled == "2")
      {
        message.channel.send(headembed);

      }

    }
