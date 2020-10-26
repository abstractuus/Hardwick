const Discord = require('discord.js');


exports.run = (Client, message, args) => {

    const embed = new Discord.MessageEmbed()
       .setColor(15724786)
       .setThumbnail("https://yt3.ggpht.com/a-/AN66SAyjP4Yh2wnk18vxGd40ZEQvbdI3Z31Dop5U1A=s288-mo-c-c0xffffffff-rj-k-no")
       .addField("My Developer's Channel:", "https://www.youtube.com/channel/UCZ0NogoxMnh46EJFztOFVpg")
       .addField("Contact:", "jaykars #9085" )
       
    message.channel.send(embed);



   }
