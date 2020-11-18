const Discord = require('discord.js');
const path = require('path');

exports.run = (Client, message, args) => {
    const PmlClient = require(path.resolve(__dirname, '../core'));
    const Prismal = new PmlClient(Client, message);
    let verCode;
    
    // Version store
    const VersionStores = require(path.resolve(__dirname, '../data/assets/version.json'));
    
    // If no subcommand specified, contact help
    
    if (!args.join(' ')) {
        helpScript = require('./help.js');
        helpScript.run(Client, message, (args = "version"));
        Prismal.derror('version', 'No subcommand specified, contacting help handler');
        return;
    }
    
    if (args[0] == 'list') {
        Prismal.newPrompt({
            type: 'generic-dm',
            title: 'Versions',
            content: (VersionStores.versions).join('\n'),
            thumbnail: 'https://www.macrium.com/files-2/Macrium-icon-white.png',
            color: '#FDFDFD',
            footer: `Hardwick | ${process.env.VersionNum}`,
            tmpTime: 5
        })
        return;
    }
    
    
    if (args[0] == 'latest') {
        verCode = VersionStores.latest.replace(/\./g, '');
    } else {
        verCode = args[0].replace(/\./g, '');
    }
    
    
        
    Prismal.newPrompt({
        type: 'generic-dm',
        title: `Changelog (${VersionStores[verCode]['logDate']})`,
        content: VersionStores[verCode]['content'],
        thumbnail: 'http://tintinsdeals.com/pictures/login-icon.png',
        color: '#FDFDFD',
        footer: `Hardwick | ${process.env.VersionNum}`,
        tmpTime: 30

    })
}