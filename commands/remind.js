const ms = require("ms");
const Discord = require('discord.js');
const path = require('path');


exports.run = (Client, message, args) => {
    const PmlClient = require(path.resolve(__dirname, '../core'));
    const Prismal = new PmlClient(Client, message);

    if(!args.join(' ')) {
        const helpScript = require(path.resolve(__dirname, './help.js'));
        helpScript.run(Client, message, (args = 'remind'));
        Prismal.derror('remind', 'Incorrect usage, contacting help handler');
        return;
    }

    let reminderTime = args[0];

    if (!reminderTime){
        
        Prismal.newPrompt({
            type: 'error',
            title: 'remind',
            content: [
                {
                    name: 'Error:',
                    value: 'Please input a time.'
                },
                {
                    name: 'Examples:',
                    value: '+remind 2m Check oven\n+remind 1h30m Play Among Us with the group server'
                }
            ],
            color: '#FDFDFD',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png',
            footer: `Hardwick | ${process.env.VersionNum}`
        })
        return;
    }


    let reminder = args.slice(1).join(" ");


    if (!reminder){
        
        Prismal.newPrompt({
            type: 'error',
            title: 'remind',
            content: [
                {
                    name: 'Error:',
                    value: 'Please input a time.'
                },
                {
                    name: 'Examples:',
                    value: '+remind 2m Check oven\n+remind 1h30m Play Among Us with the group server'
                }
            ],
            color: '#FDFDFD',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png',
            footer: `Hardwick | ${process.env.VersionNum}`
        })
        return;
    }
    Prismal.newPrompt({type: 'generic', title: 'Reminder set',
    content: [
        {name: 'For:', value: reminder}, {name: 'Time:', value: reminderTime}, {name: 'User:', value: message.author}
    ], color: '#FDFDFD', thumbnail: 'https://www.iconsdb.com/icons/preview/white/clock-8-xxl.png', footer: `Hardwick | ${process.env.VersionNum}`})
    
    

    setTimeout(function() {
        message.channel.send(`<@${message.author.id}>`);
        Prismal.newPrompt({type: 'generic', title: `Reminder`,
        content: [
            {name: 'For:', value: reminder}, {name: 'Time:', value: reminderTime}], color: '#FDFDFD', thumbnail: 'https://www.iconsdb.com/icons/preview/white/clock-8-xxl.png', footer: `Hardwick | ${process.env.VersionNum}`})
        
    }, ms(reminderTime));

}
