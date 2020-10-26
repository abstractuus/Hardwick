const ms = require("ms");
const Discord = require('discord.js')


exports.run = (Client, message, args) => {




    if(!args.join(' ')) {
        const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Usage:**", "remind <time> <reminder>")
        .addField("**Guidelines:**", "Example: +remind 2s Check oven. +remind 2m Check oven. +remind 2h Check oven. etc.")
        .setFooter("Hardwick™")

        message.channel.send(error);
        return;
    }

    let reminderTime = args[0];

    if (!reminderTime){
        const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Error:**", "Please input a time.")
        .addField("**Guidelines:**", "Example: +remind 2s Check oven. +remind 2m Check oven. +remind 2h Check oven. etc.")
        .setFooter("Hardwick™")

        message.channel.send(error);
        return;
    }


    let reminder = args.slice(1).join(" ");


    if (!reminder){
        const error = new Discord.MessageEmbed()
        .setThumbnail("https://lh3.googleusercontent.com/proxy/axw2Xdh0Icrm8TVeS4ea7o9aZ3JdCT3Rfp_BJisGEawHWkqTP3WcQLoCr_iqkyFeKURh1Hx5Lw7YW0ONM7W5jUtyYpVxjQuYW0Qaz7R6jgJ6fZycooMAKbPOHX8zNGqtY79dT9SdN76T0HS45KuV-is7Zm0wG-gaXEhDcvCb1CuNj2o8mw")
        .setColor(15724786)
        .addField("**Error:**", "Please input a time.")
        .addField("**Guidelines:**", "Example: +remind 2s Check oven. +remind 2m Check oven. +remind 2h Check oven. etc.")
        .setFooter("Hardwick™")

        message.channel.send(error);
        return;
    }
    let remindEmbed = new Discord.MessageEmbed()
    .setThumbnail("https://lh3.googleusercontent.com/proxy/axw2Xdh0Icrm8TVeS4ea7o9aZ3JdCT3Rfp_BJisGEawHWkqTP3WcQLoCr_iqkyFeKURh1Hx5Lw7YW0ONM7W5jUtyYpVxjQuYW0Qaz7R6jgJ6fZycooMAKbPOHX8zNGqtY79dT9SdN76T0HS45KuV-is7Zm0wG-gaXEhDcvCb1CuNj2o8mw")
        .setColor(15724786)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Reminder:", `${reminder}`)
        .addField("Time:", `${reminderTime}`)
        .setTimestamp()
        .setFooter("Hardwick™")

    message.channel.send(remindEmbed);


    setTimeout(function() {
        let remindEmbed = new Discord.MessageEmbed()
        .setThumbnail("https://lh3.googleusercontent.com/proxy/axw2Xdh0Icrm8TVeS4ea7o9aZ3JdCT3Rfp_BJisGEawHWkqTP3WcQLoCr_iqkyFeKURh1Hx5Lw7YW0ONM7W5jUtyYpVxjQuYW0Qaz7R6jgJ6fZycooMAKbPOHX8zNGqtY79dT9SdN76T0HS45KuV-is7Zm0wG-gaXEhDcvCb1CuNj2o8mw")
            .setColor(15724786)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField("Reminder:",  `${reminder}`)
            .setTimestamp()
            .setFooter("Hardwick™")

        message.channel.send(remindEmbed);
        message.author.send(remindEmbed);
    }, ms(reminderTime));

}
