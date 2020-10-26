const Discord = require('discord.js');
const path = require('path');

exports.run = (Client, message, args) => {
    const PmlClient = require(path.resolve(__dirname, '../core'));
    const Prismal = new PmlClient(Client, message);
    
    if (!args.join(' ')) {
        let helpScript = require('./help.js')
        helpScript.run(Client, message, args = 'avatar');
        Prismal.derror('avatar', 'No subcommand specified, contacting help handler');
        return;
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL(); // Get image URL
        Prismal.newPrompt({
            type: 'generic',
            title: `${user.username}#${user.discriminator}`,
            image: image,
            color: '#FDFDFD',
            footer: 'Hardwick'
        })
    }
}
