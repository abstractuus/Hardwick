const Discord = require('discord.js');
const path = require('path');

exports.run = (Client, message, args) => {
    const PmlClient = require(path.resolve(__dirname, '../core'));
    const Prismal = new PmlClient(Client, message);
    
    const CaseId = Math.floor(Math.random() * 10000) + 1;

    if(!args.join(' ')) {
        
        Prismal.newPrompt({
            type: 'error',
            title: 'report',
            content: [
                {
                    name: 'Usage:',
                    value: 'report <issue>'
                },
                {
                    name: 'Guidelines:',
                    value: 'Your issue **MUST** be related to a non-functioning feature of hardwick. This command should not be used for anything other than its intended purpose.'
                }
            ],
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png',
            footer: `Hardwick | ${process.env.VersionNum}`
        })        
        return;
    }
    
    const embed = new Discord.MessageEmbed()
        .setThumbnail("https://pbs.twimg.com/media/DkBkgdOUYAA4TJt.png:large")
        .setColor(15724786)
        .setTitle('New bug report')
        .addField("Sender:", `<@${message.author.id}>`)
        .addField("Server name:", message.guild.name)
        .addField("Server ID:", `\`${message.guild.id}\``)
        .addField("Bug:", args.join(' '))
        .setFooter(`Case ID ${CaseId}`)
        
    Prismal.newPrompt({
        type: 'generic',
        title: 'Bug report sent',
        content: [
            {
                name: 'Sender:',
                value: `<@${message.author.id}>`
            },
            {
                name: 'Bug:',
                value: args.join(' ')
            }
        ],
        thumbnail: 'https://pbs.twimg.com/media/DkBkgdOUYAA4TJt.png:large',
        color: '#FDFDFD',
        footer: `✅ — Case ID ${CaseId}`
    })
    Client.channels.cache.get("777591380469612574").send(embed)
}
