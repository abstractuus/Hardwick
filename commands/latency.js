const Discord = require("discord.js");

exports.run = async (Client, message, args) => {

        message.delete(100); 
    
    
    
    

    let msgping1 = new Date();

    let Clientping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
    .setThumbnail("http://solarflare.com/Media/Default/ICONS/White/Solarflare_UltraHighBandwidth_300x300White.png")
        .setColor(15724786)
        .addField("API Latency", `${Math.round(Client.ping)}ms`)
        .addField('Message Ping: ', '~' + Math.round(msgping2) + 'ms')
        .setFooter("Hardwick™")

        
    return message.channel.send(pingembed);
        

};

