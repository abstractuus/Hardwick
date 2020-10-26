const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');
const stores = path.resolve(__dirname, '../data/stores/');


exports.run = (Client, message, args, devPerms) => {
    const PmlClient = require(path.resolve(__dirname, '../core'));
    const Prismal = new PmlClient(Client, message);
    const _ = null;

    if (!args.join(' ')) {
        let helpScript = require('./help.js')
        helpScript.run(Client, message, args = 'command');
        Prismal.derror('command', 'No subcommand specified, contacting help handler');
        return;
    }
    if (args[0] == 'list') {
        let commands = "";
        fs.readdirSync(stores).forEach(file => {
            f = path.resolve(__dirname, `../data/stores/${file}`);
            if ((file.split('.').pop()) == 'json') {
                let commandStore = require(f);
                commands = commands.concat(', ', `${commandStore.name}`)
            }
        });
        commandList = commands.substring(2);
        Prismal.newPrompt({
            type: 'generic',
            title: 'Commands recognized',
            content: commandList,
            tmpTime: 10
        });

    }
    if (args[0] == 'reload') {
        if (devPerms.indexOf(message.author.id) !== -1) {
            delete require.cache[require.resolve(`./${args[1]}.js`)];
            Prismal.newPrompt({
                type: 'generic',
                title: '✅ Reload succeeded',
                content: `${process.env.BotName} has reloaded **${args[1]}**.`,
                tmpTime: 5
            });
        } else {
            Prismal.newPrompt({
                type: 'error',
                title: 'command reload',
                content: `You\'re not a verified developer of ${process.env.BotName}. Add developer IDs separated by \`|\` in your \`.env\` file.`
            });
        }
    }
}