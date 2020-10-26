const Discord = require('discord.js');

exports.run = (Client, message, args) => {

const done = new Discord.MessageEmbed()
.setColor(15724786)
.addField("Greetings!", "Thank you for inviting me to this server!")
.addField("Notes:", "To see the full list of features/commands that I am capable of performing, please do **+help**. If there is any bug or issue with any of the commands, please do **+report <issue>**. This will send a direct message to my developer, informing them of the problem.")
.addField("Version:", "3.0.0")
.addField("Developer:", "https://github.com/sievxis")
.setThumbnail("https://pbs.twimg.com/media/DkD2VZEU8AAxHoZ.png:large")
.setFooter("Hardwick™")


message.channel.send(done);

}
