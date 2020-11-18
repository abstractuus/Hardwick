const urban = require('relevant-urban');
const Discord = require('discord.js');
const path = require('path');

exports.run = async (Client, message, args) => {
    const PmlClient = require(path.resolve(__dirname, '../core'));
    const Prismal = new PmlClient(Client, message);
    // If no word given, contact help handler
    
    if (!args[0]) {
        const helpScript = require(path.resolve(__dirname, './help.js'));
        helpScript.run(Client, message, (args = 'urban'));
        Prismal.derror('urban', 'No word specified, contacting help handler');
    }
    
    let res = await urban(args.join(' ')).catch (e => {
        Prismal.newPrompt({
            type: 'error',
            title: 'urban',
            content: [
                {
                    name: 'That search term was not found.',
                    value: `**Usage:** ${process.env.GlobalPrefix}urban <query>`
                }
            ],
            color: '#FDFDFD',
            footer: `Hardwick | ${process.env.VersionNum}`,
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png'
        });
    });
    
    Prismal.newPrompt({
        type: 'generic',
        title: res.word,
        url: res.urbanURL,
        thumbnail: 'https://www.iconsdb.com/icons/preview/white/literature-xxl.png',
        color: '#FDFDFD',
        footer: `Hardwick | ${process.env.VersionNum}`,
        content: [
            {
                name: 'Definition:',
                value: res.definition
            },
            {
                name: 'Example:',
                value: res.example
            },
            {
                name: 'Author:',
                value: res.author,
                inline: true
            },
            {
                name: 'Rating:',
                value: `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`
            }
        ]
    })
}

