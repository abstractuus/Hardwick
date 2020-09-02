const Discord = require('discord.js');
const Client = new Discord.Client();
const db = require('quick.db');
require('dotenv').config();
const devs = ['643884613961252915', '643897918419632146'];




Client.on('ready', () => {
  console.log('Hardwick Active Dev: Ready.');
})


Client.on('message', async message => {
  if (message.channel.type == 'dm') return;
  if(message.author.bot) return;

  guildPrefix = db.fetch('prefix_${message.guild.id}');
  if (guildPrefix === null) prefix = process.env.GlobalPrefix;
  else prefix = guildPrefix;

  if (message.content.indexOf(prefix) !== 0) return;

  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandScript = require(`./commands/${command}.js`);
    commandScript.run(Client, message, args);
  }
  catch(err) {
    console.log(err);
  }
});

Client.login(process.env.DiscordToken);
