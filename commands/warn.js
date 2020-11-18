const Discord = require('discord.js');
const path = require('path');

exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, '../core'));
  const Prismal = new PmlClient(Client, message);

  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let author = message.author;
  
  if(message.guild.member(author).hasPermission('BAN_MEMBERS' || 'KICK_MEMBERS')) {

    if(!args.join(" ")) {
      
      let helpScript = require("./help.js");
      helpScript.run(Client, message, (args = "warn"));
      Prismal.derror(
        "warn",
        "No subcommand specified, contacting help handler"
      );
      return;
    }



  if (!args.slice(1).join(' ')) {
    Prismal.newPrompt({
      type: 'error',
      title: 'warn',
      content: [
        {
          name: `${message.author.tag}, you must supply a reason for the warning.`,
          value: 'Usage: warn <@user> <reason>'
          
        }
      ],
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png',
      footer: `Hardwick | ${process.env.VersionNum}`
    })
    return;
  }

  if (message.mentions.users.size < 1) {
    Prismal.newPrompt({
      type: 'error',
      title: 'warn',
      content: [
        {
          name: `${message.author.tag}, you must supply a user to warn.`,
          value: 'Usage: warn <@user> <reason>'
        }
      ],
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png',
      footer: `Hardwick | ${process.env.VersionNum}`
    })
    return;
  }
  
  
  Prismal.newPrompt({
    type: 'generic',
    title: 'Warning issued',
    color: '#FDFDFD',
    thumbnail: 'https://www.materialui.co/materialIcons/alert/warning_white_384x384.png',
    content: [
      {
        name: 'Warned:',
        value: user
      },
      {
        name: 'By:',
        value: message.author.tag
      },
      {
        name: 'Reason:',
        value: reason
      }
    ],
    footer: `Hardwick | ${process.env.VersionNum}`
  })
  return;

} else {
  Prismal.newPrompt({
    type: 'error',
    title: 'warn',
    content: [
      {
        name: `You are not a moderator, ${message.author.tag}!`,
        value: '**Tip:** Try this command when you have the permission Ban Members, Kick Members or Administrator.'
      }
    ],
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png',
    footer: `Hardwick | ${process.env.VersionNum}`
  })
  return;
  }
}
