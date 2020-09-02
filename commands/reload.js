 const Discord = require('discord.js');

 exports.run = async (client, message, args, level) => {

    const embed = new Discord.MessageEmbed()
    .setColor(15724786)
    .addField("**Status:**",`The command: **${args[0]}**, has been reloaded.`)
    .setThumbnail("https://flaticons.net/icons/Application/Command-Reset.png")
    .setFooter("Hardwickk™")


    if (message.author.id === '643884613961252915') {

      if (!args || args.size < 0) {
        
       message.channel.send("Must provide a command name to reload.");
       return;

      }

      delete require.cache[require.resolve(`./${args[0]}.js`)];
      message.channel.send(embed)
  }

}
