const urban = require('relevant-urban'),
 Discord = require('discord.js');

exports.run = async (Client, message, args) => {
    if (!args[0]) {

      const error  = new Discord.MessageEmbed()
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
          .setColor(15724786)
          .addField("**Usage:**", "+urban <word>")
          .addField("**Tip:**", "Results may be vulgar.")
          .setFooter("Hardwick™")

      message.channel.send(error);
      return;

    }

    let res = await urban(args.join(' ')).catch(e => {

      const error = new Discord.MessageEmbed()
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
          .setColor(15724786)
          .addField("**Error:**", "That word was not found")
          .addField("**Usage:**", "+urban <word>.")
          .setFooter("Hardwick™")

      message.channel.send(error);

    });

    const embed = new Discord.MessageEmbed()
    .setColor(15724786)
    .setTitle(res.word)
    .setURL(res.urbanURL)
    .setDescription(`**Definition**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`)
    .addField('Author', res.author, true)
    .addField('Rating', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)

    if (res.tags.length > 0 && res.tags.join(', ').length < 1024) {

        embed.addField('Tags', res.tags.join(', '), true)
    }

message.channel.send(embed);


}
