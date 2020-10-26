Discord = require('discord.js');
exports.run = (Client, message, args) => {

        if(!args.join(' ')) {

                const embed = new Discord.MessageEmbed()
                .setDescription("**Incorrect Usage!**")
                .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
                .setColor(15724786)
                .addField("**Usage:**", "+predict <question>", )
                .addField("**Remember:**", "Must be a yes/no question.")
                .setFooter("Hardwick™")

                message.channel.send(embed);
        return;
        }
        var sayings = ["It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "LOL!, definitely not",
        "I am definitely not answering that question at this time",
        "My sources say no",
        "It doesn't seem good at the moment",
        "Of course",
        "Very doubtful"];

       var result = Math.floor((Math.random() * sayings.length) + 0);
       const embed = new Discord.MessageEmbed()
        .setThumbnail("https://pbs.twimg.com/media/DkC3aChU4AAtZkL.png:large")
        .setColor(15724786)
        .addField("**Asker:**", message.author.username + "#" + message.author.discriminator)
        .addField("**Question:**",  args.join(' '))
        .addField("**Prediction:**", sayings[result])
        .setFooter("Hardwick™")
       message.channel.send(embed)
       }
