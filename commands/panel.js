const Discord = require('discord.js');
const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const path = require('path');


exports.run = (Client, message, args, tools) => {
    const done = new Discord.MessageEmbed()
    .setTitle("Hardwick Control Panel")
    .setColor(15724786)
    .addField("Instructions:", "Press any button at the bottom of the embed for quick commands.")
    .addField("Buttons:", `
    \ To see the full list of features/commands, press '❔'.
    \ To shut off Hardwick, press '⏹'. Only my developer can do this.
    \ To view the current changelog, press '📳'.
    \ To view Hardwick's statistics, press '📶'.`)
    .addField("Version:", process.env.VersionNum)
    .setThumbnail("https://cdn1.iconfinder.com/data/icons/MetroStation-PNG/256/MB__Control-Panel.png")
    .setFooter(`Hardwick | ${process.env.VersionNum}`)


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
                .setTitle("**Hardwick status:**")
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
                .addField("API Latency", `${Math.round(Client.ws.ping)}ms`)
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
        const helpScript = require(path.resolve(__dirname, './help.js'));
        helpScript.run(Client, message, args);
      })

      forwards.on('collect', r => {
        const clogScript = require(path.resolve(__dirname, './version.js'));
        clogScript.run(Client, message, (args = 'latest'));
      })

    })



    )})}
