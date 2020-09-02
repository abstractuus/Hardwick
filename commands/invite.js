const Discord = require('discord.js');

exports.run = (client, message, args) => {

    client.generateInvite().then(link => {

        var embed = new Discord.MessageEmbed()
        .setThumbnail("https://pbs.twimg.com/media/Dj3fVupV4AAhIwD.png:large")
            .setColor(15724786)
            .addField("Invite me to a server:", "[Invite Hardwick](" + link + ")", false)
            .setFooter("Hardwick™");

        message.channel.send(embed);
    });
}
