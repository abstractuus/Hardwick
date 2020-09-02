const Discord = require('discord.js');

exports.run = (client, message, args) => {

    //message.guild.emojis.create('https://i.imgur.com/w3duR07.png', 'rip')
    //.then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
    //.catch(console.error);

    if(message.guild.emojis.cache.size < 1) {

        const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Error:**", "There are no emojis present in this server. Try adding some first!")
        .setFooter("Hardwick™")

        message.channel.send(error);
        return;

    }



	const embed = new Discord.MessageEmbed()
        .setColor('#dadfe8')
        .addField('**Emojis Present:**', `${message.channel.guild.emojis.cache.size}`)
        .addField('**Emojis:**', `${message.guild.emojis.cache.map(e => e).join(', ')}`)
        .addField('**Emojis:**', `${message.guild.emojis.cache.map(e => e).join(', ')}`)
        .addField('**Tip:**', 'Hover over an emoji to see the name.')
        .setFooter("Hardwick™")



	message.channel.send(embed);
};
