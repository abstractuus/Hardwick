const stores = './data/stores/';
const fs = require('fs');
const path = require('path');
require('dotenv').config();
exports.run = (Client, message, args) => {
    const PmlClient = require(path.resolve(__dirname, '../core'));
    const Prismal = new PmlClient(Client, message);
    const _ = null;
    var publishedArray = [];
    try {
        const commandStore = require(path.resolve(__dirname, `../data/stores/${args}.json`));
        publishedArray.push({
            name: `**${commandStore.description}**`,
            value: `Usage: ${process.env.GlobalPrefix}${commandStore.name} ${commandStore.usage}`
        });
        if (typeof commandStore.subcommands !== "undefined") {
            for (var i = 0; i < commandStore.subcommands.length; i++) {
                publishedArray.push({
                    name: `_${commandStore.subcommands[i].name}_`,
                    value: `${commandStore.subcommands[i].description}\nUsage: ${process.env.GlobalPrefix}${commandStore.name} ${commandStore.subcommands[i].usage}`
                });
            }
        }
        Prismal.newPrompt({
            type: 'help-cmd',
            title: commandStore.name,
            content: publishedArray,
            thumbnail: 'https://images-ext-1.discordapp.net/external/TqGOZ6oz0cFzbkR3WD7s8sjpr14agmQb9SLKAEXC8oU/https/www.iconsdb.com/icons/preview/white/online-support-xxl.png',
            color: '#FDFDFD',
            footer: `Hardwick | ${process.env.VersionNum}`,
            tmpTime: 15
        });
    } catch (err) {
        if (err.code == 'MODULE_NOT_FOUND') {
            var arrayDescription = new Array();
            var arrayUsage = new Array();
            var arrayName = new Array();
            var arrayFinal = new Array();
            fs.readdirSync(stores).forEach(file => {
                f = path.resolve(__dirname, `../data/stores/${file}`);
                if ((file.split('.').pop()) == 'json') {
                    let commandStore = require(f);
                    arrayDescription.push(`${commandStore.description}`)
                    arrayUsage.push(`${commandStore.usage}`);
                    arrayName.push(`${commandStore.name}`);
                    arrayFinal.push({
                        name: `${commandStore.name}`,
                        value: `${commandStore.description} _Usage: ${process.env.GlobalPrefix}${commandStore.name} ${commandStore.usage}_`,
                        inline: true
                    });
                }
            });
            Prismal.newPrompt({
                type: 'help',
                content: arrayFinal,
                thumbnail: 'https://images-ext-1.discordapp.net/external/TqGOZ6oz0cFzbkR3WD7s8sjpr14agmQb9SLKAEXC8oU/https/www.iconsdb.com/icons/preview/white/online-support-xxl.png',
                color: '#FDFDFD',
                footer: `Hardwick | ${process.env.VersionNum}`,
                tmpTime: 30
            });
            Prismal.derror('help', `Command help for \'${args[0]}\' called by guild-user reference ${message.guild.id}/${message.author.id}, but command does not exist`);
        }
    }
}