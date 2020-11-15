const Discord = require("discord.js");
const path = require('path');
exports.run = async (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, '../core'));
  const Prismal = new PmlClient(Client, message);
  
  Prismal.newPrompt({
    type: 'generic',
    title: 'Roles',
    content: [
      {
        name: 'Amount:',
        value: message.guild.roles.cache.size
      },
      {
        name: 'Roles:',
        value: (message.guild.roles.cache.array()).join(', '),
        inline: true
      }
    ],
    thumbnail: 'https://www.iconsdb.com/icons/preview/white/theatre-masks-xxl.png',
    color: '#FDFDFD',
    footer: 'Hardwick'
  })
}
