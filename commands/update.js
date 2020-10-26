const Discord = require('discord.js');
const path = require('path');
const updateDetails = require( path.resolve( __dirname, "./data/assets/update.json") );

exports.run = (Client, message, args) => {

    const error = new Discord.MessageEmbed()
    .setColor(15724786)
    .addField("Upcoming Update:", updateDetails.name)
    .addField("Notes:", updateDetails.notes)
    .setThumbnail("https://www.iconsdb.com/icons/preview/white/cloud-download-xxl.png")
    .setFooter(updateDetails.version)

    message.channel.send(error);

}
