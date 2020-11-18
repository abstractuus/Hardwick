const Discord = require("discord.js");
const path = require('path');

exports.run = (Client, message, args) => {
    const PmlClient = require(path.resolve(__dirname, '../core'));
    const Prismal = new PmlClient(Client, message);
    
    const rolled = Math.floor(Math.random() * 6) + 1;
    
    Prismal.newPrompt({
        type: 'generic',
        title: 'Single dice roll',
        content: [
            {
                name: 'You rolled:',
                value: rolled
            }
        ],
        thumbnail: message.author.displayAvatarURL(),
        color: '#FDFDFD',
        footer: `Hardwick | ${process.env.VersionNum}`,
        tmpTime: 5
    });
    return;
}
