const Discord = require('discord.js')
const path = require('path');

exports.run = async (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, '../core'));
  const Prismal = new PmlClient(Client, message);
  
  if (!args.join(' ')) {
    let helpScript = require('./help.js')
    helpScript.run(Client, message, args = 'broadcast');
    Prismal.derror('broadcast', 'No subcommand specified, contacting help handler');
    return;
  }
  const sayMessage = args.join(" ");
  
  Prismal.newPrompt({
    type: 'generic',
    title: 'Attention:',
    content: sayMessage,
    thumbnail: "https://www.iconsdb.com/icons/preview/white/speaker-xxl.png",
    color: "#FDFDFD",
    footer: 'Hardwick'
  })
}
