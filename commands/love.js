Discord = require('discord.js');
exports.run = (client, message, args) => {

        if(!args.join(' ')) {

                const embed = new Discord.MessageEmbed()
                .setDescription("**Incorrect Usage!**")
                .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
                .setColor(15724786)
                .addField("**Usage:**", "+love <@user1> <@user2>", )
                .addField("**Remember:**", "You must mention two users.")
                .setFooter("Hardwick™")

                message.channel.send(embed);
        return;
        }
        var sayings = ["Divorce is imminent",
        "Definitely not compatible",
        "Atoms have more chemistry",
        "Honeymoon in Hell!",
        "Student debt",
        "Try querying when you aquire rights",
        "Trauma",
        "Heavy Trauma",
        "Have a happy life!",
        "Try querying again",
        "My calculations were corrupted, try again",
        "Ask another time",
        "I will tease and not tell you",
        "Why are you asking me?",
        "Think about what you're really asking me then try again",
        "You're gonna be so happy!",
        "I see lots of love!",
        "You both are adorable together",
        "No one could get in your way",
        "HAHAHAHAHAHA",
        "Save yourself the trouble",
        "Get a room",
        "I'm not a miracle worker"];

       let role2 = args.slice(1).join(' ');
       let role = args[0];
       var result = Math.floor((Math.random() * sayings.length) + 0);
       const embed = new Discord.MessageEmbed()
        .setThumbnail("https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/hearts-icon-18-256.png")
        .setColor(15724786)
        .addField("**Asker:**", message.author.username + "#" + message.author.discriminator)
        .addField("**Pairing:**",  role + '❤️' + role2)
        .addField("**Compatibility:**", sayings[result])
        .setFooter("Hardwick™")
       message.channel.send(embed)
       }
