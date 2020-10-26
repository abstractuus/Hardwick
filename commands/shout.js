const Discord = require('discord.js');

exports.run = (Client, message, args) => {

    if(!args.join(' ')) {

    const error = new Discord.MessageEmbed()
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
    .setColor(15724786)
    .addField("**Usage:**", "shout <message>")
    .setFooter("Hardwick™")

    message.channel.send(error);
    return;

    }


    message.delete().catch(O_o=>{});
    message.channel.send(args.join(' '), {
        tts: true
       })

}
