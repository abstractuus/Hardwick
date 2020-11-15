const Discord = require('discord.js');
const path = require('path');

exports.run = (Client, message, args) => {

    if(!args.join(' ')) {
        const helpScript = require(path.resolve(__dirname, './help.js'));
        helpScript.run(Client, message, (args = 'shout'));
        Prismal.derror('shout', 'Nothing given to shout, contacting help handler');
        return;
    }
    
    message.delete().catch(O_o=>{});
    message.channel.send(args.join(' '), {
        tts: true
    })
}
