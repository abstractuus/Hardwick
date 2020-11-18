const Discord = require('discord.js');
const path = require('path');
exports.run = (Client, message, args) => {
       
       const PmlClient = require(path.resolve(__dirname, '../core'));
       const Prismal = new PmlClient(Client, message);

        if(!args.join(' ')) {
               Prismal.newPrompt({
                      type: 'error',
                      title: 'predict',
                      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png',
                      content: [
                             {
                                    name: 'Usage:',
                                    value: '+predict <question>'
                             },
                             {
                                    name: 'Remember:',
                                    value: 'Must be a yes/no question.'
                             }
                      ],
                      footer: `Hardwick | ${process.env.VersionNum}`
               })
        return;
        }
        var sayings = ["It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "LOL!, definitely not",
        "I am definitely not answering that question at this time",
        "My sources say no",
        "It doesn't seem good at the moment",
        "Of course",
        "Very doubtful"];

       var result = Math.floor((Math.random() * sayings.length) + 0);
       
       Prismal.newPrompt({
              type: 'generic',
              title: 'Here is my prediction...',
              content: [
                     {
                            name: 'Asker:',
                            value: `<@${message.author.id}>`
                     },
                     {
                            name: 'Question:',
                            value: args.join(' ')
                     },
                     {
                            name: 'Prediction:',
                            value: sayings[result]
                     }
              ],
              thumbnail: 'https://pbs.twimg.com/media/DkC3aChU4AAtZkL.png:large',
              color: '#FDFDFD',
              footer: `Hardwick | ${process.env.VersionNum}`
       })
       }
