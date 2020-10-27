var path = require('path');
const Discord = require('discord.js');

exports.run = (Client, message, args) => {

  if(args.join(" ") == "list") {
    const help1 = new Discord.MessageEmbed()
    .setAuthor("Hardwick's Features and Commands List")
    .setThumbnail("http://www.magamezinc.com/magamezResourcesF/page-software/info.png")
    .setColor(15724786)
    .addField("**Prefix:**", `**"+"**`)
    .addField("**Categories:**", `
    \ **__Important Commands-__**
    \ **• hardwick** (Provides a welcome note from my developer and me.)
    \ **• report** (Sends a report of a known bug with Hardwick that you may have discovered, directly to the developer.)
    \ **• latency** (Reports latency between servers and Discord API.)
    \ **• update** (Displays any upcoming Hardwick updates if any.)

    \ **__Promotion-__**
    \ **• promo** (Displays my developer's contact.)
    \
    \ **__Fun-__**
    \ **• predict** (Ask silly questions and get your future foretold!)
    \ **• flip** (Flips a coin and displays the result.)
    \ **• roll** (Hardwick rolls a virtual dice and displays the number.)
    \ **• joke** (Tells a joke/riddle.)
    \ **• advice** (Sends you some unsolicited advice.)`)





    const error = new Discord.MessageEmbed()

    .setColor(15724786)
    .setDescription(`
    \ **• slot** (Rolls the slot machine. What outcome can you get?)
    \
    \ **__Misc-__**
    \ **• shout** (Hardwick uses Text-to-Speech to say the word/phrase you provide.)
    \ **• broadcast** (Sends a broadcast through in the current discord channel.)
    \ **• calc** (Calculates mathematical equations.)
    \ **• remind** (Set a reminder with a timer and Hardwick will make sure to update you when it finishes.)`)


    const error1 = new Discord.MessageEmbed()

    .setColor(15724786)
    .setDescription(`
    \ **• poll** (Generates a poll with desired topic for users to vote on!)
    \ **• urban**  (Displays an urban dictionary result for a specific word.)
    \ **• emojis** (Displays a list of the server's custom emojis.)
    \ **• spotify** (Displays in chat what a user is listening to on spotify.)
    \ **• meme** (Choose from Hardwick's curated list of memes and add your own quirky captions!)`)


    const error2 = new Discord.MessageEmbed()

    .setColor(15724786)
    .setDescription(`
    \ **__Utility-__**
    \ **• sweep** (Deletes a specified amount of messages up to 100.)
    \ **• status** (Displays server statistics such as: Owner, Date Created and Member Count.)
    \ **• invite** (Displays a bot invite link for Hardwick.)
    \ **• avatar** (Displays a mentioned user's discord profile picture.)`)



    const error3 = new Discord.MessageEmbed()

    .setColor(15724786)
    .setDescription(`
    \ **__Moderation-__**
    \ **• roles** (Displays the number of roles and the names.)
    \ **• roleinfo** (Shows you information about a specified role.)
    \ **• warn** (Warns a member.)`)
    .setFooter("Hardwick™")

    const chat = new Discord.MessageEmbed()
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
    .setColor(15724786)
    .addField("**Attention:**", `Hardwick's Feature and Command list has been sent to`)
    .addField("**User:**", `${message.author}` )
    .setFooter("Hardwick™")


    message.author.send(help1);
    message.author.send(error)
    message.author.send(error1)
    message.author.send(error2)
    message.author.send(error3)
    message.channel.send(chat)

  } else {

            const commandStore = require( path.resolve( __dirname, `./data/stores/primary/${args}.json`) );

            const help = new Discord.MessageEmbed()
                .setThumbnail("https://www.iconsdb.com/icons/preview/white/online-support-xxl.png")
                .setColor(15724786)
                .addField(`**${commandStore.name}:**`, `${commandStore.description}`)
                .addField(`**Usage:**`, `${commandStore.usage}`)
                .addField("**Tip:**", `${commandStore.tip}`)
                .setFooter("Hardwick™")

                message.channel.send(help);

            return;

            message.channel.send("That command doesn't exist.");


  }

}