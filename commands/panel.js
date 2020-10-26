const Discord = require('discord.js');
const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")


exports.run = (Client, message, args, tools) => {
    const done = new Discord.MessageEmbed()
    .setAuthor("Hardwick Control Panel")
    .setColor(15724786)
    .addField("Instructions:", "Press any button at the bottom of the embed for quick commands.")
    .addField("Buttons:", `
    \ To see the full list of features/commands, press '❔'.
    \ To shut off Hardwick, press '⏹'. Only my developer can do this.
    \ To view the current changelog, press '📳'.
    \ To view Hardwick's statistics, press '📶'.`)
    .addField("Version:", "3.0.0")
    .setThumbnail("https://cdn1.iconfinder.com/data/icons/MetroStation-PNG/256/MB__Control-Panel.png")
    .setFooter("Hardwick™")


  message.channel.send(done).then(msg => {

    msg.react('❔').then(msg.react('📳') && msg.react('⏹') && msg.react('📶').then( r => {

      const statsFilter = (reaction, user) => reaction.emoji.name === '📶' && user.id === message.author.id;
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '❔' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '📳' && user.id === message.author.id;
      const stopFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === '251397854562746368';
      const exitFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;


      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
      const stop = msg.createReactionCollector(stopFilter, { time: 60000 });
      const stats = msg.createReactionCollector(statsFilter, { time: 60000 });
      const exit = msg.createReactionCollector(exitFilter, { time: 60000 });


      stats.on('collect', r => {
        let cpuLol;
        cpuStat.usagePercent(function(err, percent, seconds) {
            if (err) {
                return console.log(err);
            }

            const duration = moment.duration(Client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            const embedStats = new Discord.MessageEmbed()
                .setTitle("**Hardwick Status:**")
                .setColor(15724786)
                .setThumbnail("https://i.imgur.com/fmkv90A.png")
                .addField("⭐ Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
                .addField("• Uptime ", `${duration}`, true)
                .addField("• Users", `${Client.users.size}`, true)
                .addField("• Servers", `${Client.guilds.size}`, true)
                .addField("• Channels ", `${Client.channels.size}`, true)
                .addField("• Discord.js", `v${version}`, true)
                .addField("• Node", `${process.version}`, true)
                .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField("• CPU usage", `\`${percent.toFixed(2)}%\``, true)
                .addField("• Arch", `\`${os.arch()}\``, true)
                .addField("• Platform", `\`\`${os.platform()}\`\``, true)
                .addField("API Latency", `${Math.round(Client.ping)}ms`)
            message.channel.send(embedStats)
        });
    });



    exit.on('collect', r => {
        message.delete();

    })

      stop.on('collect', r => {
        message.channel.bulkDelete(3)

      })

      backwards.on('collect', r => {
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


        message.channel.send(help1);
        message.channel.send(error)
        message.channel.send(error1)
        message.channel.send(error2)
        message.channel.send(error3)

      })

      forwards.on('collect', r => {
        const seven = new Discord.MessageEmbed()
        .setAuthor("Changelog (September 2nd, 2020.)")
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
        \ **-** New meme content is coming! Expect 50+ new content for your enjoyment.
        \ **-** More technical changes under Hardwick's hood to make it as smooth an experience than ever.(New Command Handler and Graphical Manager integrations.)
        \ **-** Ok end of list, you can go about your business knowing that Hardwick 3.0.0 is here!)`)

        .setFooter("Hardwick™")
        message.channel.send(seven);

      })

    })



    )})}
