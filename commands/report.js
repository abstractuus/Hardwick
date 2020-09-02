const Discord = require('discord.js');

exports.run = (client, message, args) => {


    if(!args.join(' ')) {
        const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Usage:**", "report <issue>")
        .addField("**Guidelines:**", "Your issue **MUST** be related to a non-functioning feature of Hardwick™. This command should not be used for anything other than its intended purpose.")
        .setFooter("Hardwick™")

        message.channel.send(error);
        return;
    }

    const embed = new Discord.MessageEmbed()
        .setThumbnail("https://pbs.twimg.com/media/DkBkgdOUYAA4TJt.png:large")
        .setColor(15724786)
        .addField("**Sender:**", message.author.username + "#" + message.author.discriminator)
        .addField("**Server name:**", message.guild.name)
        .addField("**Server ID:**", message.guild.id)
        .addField("**Bug:**", args.join(' '))
        .setFooter("Hardwick™")

        const public = new Discord.MessageEmbed()
        .setThumbnail("https://pbs.twimg.com/media/DkBkgdOUYAA4TJt.png:large")
        .setColor(15724786)
        .addField("**Sender:**", message.author.username)
        .setDescription("❌ **Your bug is being delivered!**")
        .addField("**Bug:**", args.join(' '))
        .setFooter("Hardwick™")

        const public2 = new Discord.MessageEmbed()
        .setThumbnail("https://pbs.twimg.com/media/DkBkgdOUYAA4TJt.png:large")
        .setColor(15724786)
        .addField("**Sender:**", message.author.username)
        .setDescription("✅ **Your bug has been sent!**")
        .addField("**Bug:**", args.join(' '))
        .setFooter("Hardwick™")


        client.users.cache.get("643884613961252915").send(embed)

        message.channel.send(public).then(sentMessage => sentMessage.edit(public2));




}
