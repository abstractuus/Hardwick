
const Discord = require('discord.js');
const path = require('path');

exports.run = (Client, message, args) => {
   const PmlClient = require(path.resolve(__dirname, '../core'));
   const Prismal = new PmlClient(Client, message);
   
   Prismal.newPrompt({
      type: 'generic',
      title: 'Developers of Hardwick',
      content: [
         {
            name: `J. H. Jaskeran`,
            value: '[YouTube](https://www.youtube.com/channel/UCZ0NogoxMnh46EJFztOFVpg)\nDiscord — <@643884613961252915>'
         },
         {
            name: `Michele XVI`,
            value: `[Landing page](https://linktr.ee/michelexvi)\nDiscord — <@643897918419632146>`
         }
      ],
      thumbnail: 'https://avatars0.githubusercontent.com/u/40376273?s=400&u=e1ba56d8116319bdc06962b5cf13379ec0e88756&v=4',
      footer: `Hardwick | ${process.env.VersionNum}`,
      color: '#FDFDFD'      
   })
}
