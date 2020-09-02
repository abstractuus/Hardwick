const math = require('mathjs');
const Discord = require('discord.js');


exports.run = (client, message, args) => {

    if (!args.join(" ")) {
        const Discord = require('discord.js');
        const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Usage:**", "calc <equation>")
        .addField("**Guidelines:**", "Please enter a calculation to be solved.")
        .setFooter("Hardwick™")

        message.channel.send(error);
        return;

    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        const Discord = require('discord.js');
        const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Error:**", `${err}`)
        .addField("**Usage:**", "calc <equation>")
        .addField("**Guidelines:**", "Please enter a **valid** equation to be solved.")
        .setFooter("Hardwick™")
        return message.channel.send(error)
    }

    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()
        .setThumbnail("http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calculator-icon.png")
        .setColor(15724786)
        .addField("**Input:**", question, true)
        .addField("**Result:**", answer)
        .setFooter("Hardwick™")

    message.channel.send({
        embed
    })
};
