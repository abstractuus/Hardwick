const Discord = require('discord.js');
const fs = require('fs');


exports.run = (client, message, args) => {

        //message.delete(100);


    const here = args.slice(3);

    if(!args.join(' ')) {
        const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Usage:**", "version <release #>")
        .addField("**Display all versions:**", "version list (Displays a list of all Hardwick verisons.")
        .addField("**Guidelines:**", `Displays changelog for specified version. Enter a version number after +version. Example: +version 1.0.0`)
        .setFooter("Hardwick™")

        message.channel.send(error);
        return;

    }

    if(args == "list") {
        const list = new Discord.MessageEmbed()
        .setThumbnail("https://www.macrium.com/files-2/Macrium-icon-white.png")
        .setColor(15724786)
        .setAuthor("Versions:")
        .setDescription(`1.0.0
         \ 1.0.1
         \ 1.0.2
         \ 1.0.3
         \ 1.0.4
         \ 1.0.5
         \ 1.0.6
         \ 1.0.7
         \ 2.0.0
         \ 3.0.0`)
        .setFooter("Hardwick™")

        message.channel.send(list)
    }
    if(args == "1.0.0") {
        const one = new Discord.MessageEmbed()
        .setAuthor("Changelog (05/08/18)")
        .setThumbnail("http://tintinsdeals.com/pictures/login-icon.png")
        .setColor(15724786)
        .addField("Version-", `• 1.0.0`)
        .addField("Changes-", `
        \ **-**Meme command has been restored and is fully working. Please stand by until I add more videos.
        \ **-**So far there is only 1 command "takealook"
        \ **-**Help command has been exponentially improved as well as changelog command.
        \ **-**Improved the calc command.
        \ **-**Added the invite command.
        \ **-**Improved the skip command.
        \ **-**Improved the design of the Flip/Roll commands.
        \ **-**Added a test command to test latency.
        \ **-**Added this changelog command.
        \ **-**Removed the ability to run commands from dms.`)
        .setFooter("Hardwick™")

        message.author.send(one);
    }

    if(args == "1.0.1") {
        const two = new Discord.MessageEmbed()
        .setAuthor("Changelog (7/08/18)")
        .setThumbnail("http://tintinsdeals.com/pictures/login-icon.png")
        .setColor(15724786)
        .addField("Version-", `• 1.0.1`)
        .addField("Changes-", `
        \ **-**Refined the translate command and released it to the public.
        \ **-**Added the command to the help page.`)
        .setFooter("Hardwick™")

        message.author.send(two);
    }

    if(args == "1.0.2") {
        const three = new Discord.MessageEmbed()
        .setAuthor("Changelog 08/08/18")
        .setThumbnail("http://tintinsdeals.com/pictures/login-icon.png")
        .setColor(15724786)
        .addField("Version-", `• 1.0.2`)
        .addField("Changes-", `
        \ **-**Improved joke embed.
        \ **-**Added report command.
        \ **-**Added report info to the help command.
        \ **-**Added notifications to the developer for when Hardwick joins/leaves a server.
        \ **-**Fundamentally improved the 8ball embed and changed to command from "8ball" to "predict".
        \ **-**Added the command "hardwick" (Check +help for more info on what it does.)
        \ **-**Added a shutdown command that only the developer can use.`)
        .setFooter("Hardwick™")

        message.author.send(three);
    }

    if(args == "1.0.3") {
        const four = new Discord.MessageEmbed()
        .setAuthor("Changelog (15/08/18)")
        .setThumbnail("http://tintinsdeals.com/pictures/login-icon.png")
        .setColor(15724786)
        .addField("Version-", `• 1.0.3`)
        .addField("Changes-", `
        \ **-**Improved the status embed; "Date Created:"
        \ **-**Added emoji command. (Displays the number of emojis present on a server and lists them.)
        \ **-**Mended the help command as the 2000 character limit prevented the it from functioning.`)
        .setFooter("Hardwick™")

        message.author.send(four);
    }

    if(args == "1.0.4") {
        const five = new Discord.MessageEmbed()
        .setAuthor("Changelog (8/09/18)")
        .setThumbnail("http://tintinsdeals.com/pictures/login-icon.png")
        .setColor(15724786)
        .addField("Version-", `• 1.0.4`)
        .addField("Changes-", `
        \ **-**Added "activity" command. Only developer can use it.`)
        .setFooter("Hardwick™")
        message.author.send(five);
    }


    if(args == "1.0.5") {
        const six = new Discord.MessageEmbed()
        .setAuthor("Changelog (14/09/18)")
        .setThumbnail("http://tintinsdeals.com/pictures/login-icon.png")
        .setColor(15724786)
        .addField("Version-", `• 1.0.5`)
        .addField("Changes-", `
        \ **-**Removed meme command. May return in the future.
        \ **-**Updated promo command with new content.
        \ **-**Added spotify command. Shows information about your current track.
        \ **-**REMOVED ALL MUSIC FEATURES FOR GOOD (sorry)
        \ **-**Added version command. Do +version for more details.`)
        .setFooter("Hardwick™")
        message.author.send(six);
    }

    if(args == "1.0.6") {
        const seven = new Discord.MessageEmbed()
        .setAuthor("Changelog (15/09/18)")
        .setThumbnail("http://tintinsdeals.com/pictures/login-icon.png")
        .setColor(15724786)
        .addField("Version-", `• 1.0.6`)
        .addField("Changes-", `
        \ **-**-Meme command has been restored and is fully working. Please stand by until I add more videos.
        So far there is only 1 command "takealook".
        \ **-**-Spotify command is 100% completed.
        \ **-**-Added hardwickstats command. (Allows you to see the "nerdy" stuff about Hardwick.)
        \ **-**Added roles command and created a moderation section within the features embed to prepare the moderation update.`)
        .setFooter("Hardwick™")
        message.author.send(seven);
    }


    if(args == "1.0.7") {
        const seven = new Discord.MessageEmbed()
        .setAuthor("Changelog (18/09/18)")
        .setThumbnail("http://tintinsdeals.com/pictures/login-icon.png")
        .setColor(15724786)
        .addField("Version-", `• 1.0.7`)
        .addField("Changes-", `
        \ **-**-New material has been added to the meme command.`)
        .setFooter(`Hardwick™`)
        message.author.send(seven);
    }


    if(args == "2.0.0") {
        const seven = new Discord.MessageEmbed()
        .setAuthor("Changelog (30/10/18)")
        .setThumbnail("http://tintinsdeals.com/pictures/login-icon.png")
        .setColor(15724786)
        .addField("Developer Notes-", `
        \ **+** Sorry that this update took a while! Have fun.`)
        .addField("Version-", `• 2.0.0 | Moderation Update.`)
        .addField("New Commands-", `
        \ **•** addrole
        \ **•** removerole
        \ **•** roleinfo
        \ **•** ban
        \ **•** kick
        \ **•** pardon
        \ **•** warn
        \ **•** latency
        \ **•** version
        \ **•** youtube`)
        .addField("Changes-", `
        \ **-** The limit for the sweep command is now set to 100 to prevent spam.
        \ **-** Changed the timer command to "remind" and gave it a makeover.
        \ **-** Removed the test command and replaced it with latency and improved the embed.
        \ **-** The meme command now has new content. Enjoy!
        \ **-** Look for the new commands in the help embed.    `)
        .setFooter("Hardwick™")
        message.author.send(seven);
    }

    if(args == "3.0.0") {
        const seven = new Discord.MessageEmbed()
        .setAuthor("Changelog (September 2nd 2020.)")
        .setThumbnail("http://tintinsdeals.com/pictures/login-icon.png")
        .setColor(15724786)
        .addField("Developer Notes-", `
        \ **+** Sorry that this update took so long! I took a break but TWO whole years!.`)
        .addField("Version-", `• 3.0.0 | **The Big Switch Update.**`)
        .addField("Prismal Core!", `I've been developing a universal bot core with a fellow developer to serve as a base for any bots you all would love to make. It is in the works but I've decided to switch Hardwick to PrismalCore. There's powerful features under Hardwick's hood now which means faster development so without further adieu!`)
        .addField("New Commands-", `**•** There unfortunately aren't any new commands since this update is meant as a switch to the new codebase. I've ported over most of Hardwick's commands but I've decided to pull a couple of commands for reworking: Such as moderation commands and some misc. commands. They'll be handled with love and care and be re-added better than ever!`)
        .addField("Changes-", `
        \ **-** All previous meme content has been wiped and repopulated with current memes! (Goodbye stale 2018 memes)
        \ **-** Thanks to PrismalCore, Hardwick now has a dynamic help command feature. Try it out: +help <command>.
        \ **-** The roll command has been upgraded with dice functionality. This means you can now use this command to play your favourite board games!
        \ **-** Hardwick has a problem! They may have picked up a nasty habit. Try +smoke to find out.`)
        .addField("What to expect next?", `Well I'm glad you asked!
        \ **-** I have a few new commands in the works! (Love Compatibility anyone?)
        \ **-** New meme content is coming! Expect 50+ new pictures and videos for your enjoyment.
        \ **-** More technical changes under Hardwick's hood to make it as smooth an experience than ever.(New Command Handler and Graphical Manager integrations.)
        \ **-** Ok end of list, you can go about your business knowing that Hardwick 3.0.0 is here!)`)

        .setFooter("Hardwick™")
        message.author.send(seven);
    }
}
