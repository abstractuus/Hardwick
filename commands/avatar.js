const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (args.join(" ") == "") {

      const error = new Discord.MessageEmbed()
          .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
          .setColor(15724786)
          .addField("**Error:**", "Mention a user first.")
          .addField("**Usage:**", "+avatar <@user>")
          .setFooter("Hardwick™")

      message.channel.send(error);

        return;

    } else {
        let user = message.mentions.users.first(); // Mentioned user

        let image = user.displayAvatarURL(); // Get image URL

        let embed = new Discord.MessageEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) // Set author
            .setColor(15724786) // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image) // Set image in embed
            .setFooter("Hardwick™")

        message.channel.send(embed); // Send embed
    }
}
