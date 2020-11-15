const Discord = require('discord.js');
const path = require('path');
const updateDetails = require( path.resolve( __dirname, "../data/assets/update.json") );

exports.run = (Client, message, args) => {
    const PmlClient = require(path.resolve(__dirname, '../core'));
    const Prismal = new PmlClient(Client, message);
    
    Prismal.newPrompt({
        type: 'generic',
        title: `Upcoming update`,
        content: [
            {
                name: 'Notes:',
                value: updateDetails.notes
            }
        ],
        thumbnail: 'https://www.iconsdb.com/icons/preview/white/cloud-download-xxl.png',
        color: '#FDFDFD',
        footer: updateDetails.version
    })
}
