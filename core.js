// VERSION: 0.17.30-HARDWICK
// ~~~~~~ DO NOT DELETE THE UPPER LINE. LIKE, EVER. ~~~~~~
const Discord = require('discord.js');
const Client = new Discord.Client();
const DisTube = require('distube');
Client.distube = new DisTube(Client, { searchSongs: true, emitNewSongOnly: true, leaveOnFinish: true});
const db = require('quick.db');
const fs = require('fs');
const path = require('path');
const Pagination = require('discord-paginationembed');
const stores = './data/stores/';
require('dotenv').config();

class Prismal {
  constructor(Client, message) {
    this.Client = Client;
    this.message = message;
  }

  log(originName, message, timeBool = false) {
    var time;
    if (timeBool === true) {
      time = ` [${new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]} UTC]`;
    } else time = '';
    console.log(`\x1b[34mINFO\x1b[0m ${originName}: ${message}${time}`)
  }

  error(originName, message, timeBool = false) {
    var time;
    if (timeBool === true || process.env.DebugToggle === 1) {
      time = ` [${new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]} UTC]`
    } else {
      time = '';
    }
    console.log(`\x1b[41m~ERR\x1b[0m ${originName}: ${message}${time}`);
  }
  dlog(originName, message) {
    var time = ` [${new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]} UTC]`
    if (process.env.DebugToggle === 1) {
      console.log(`\x1b[35mDBUG\x1b[0m ${originName}: ${message}${time}`);
    }
  }
  derror(originName, message) {
    var time = ` [${new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]} UTC]`
    if (process.env.DebugToggle === 1) {
      console.log(`\x1b[35mD\x1b[0m\x1b[41mERR\x1b[0m ${originName}: ${message}${time}`);
    }
  }
  warn(originName, message, timeBool = false) {
    let time;
    if (timeBool === true || process.env.DebugToggle === 1) {
      time = ` [${new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]} UTC]`
    } else {
      time = '';
    }
    console.log(`\x1b[33mWARN\x1b[0m ${originName}: ${message}${time}`);
  }
  static _log(originName, message, timeBool = false) {
    var time;
    if (timeBool === true) {
      time = ` [${new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]} UTC]`;
    } else {
      time = '';
    }
    console.log(`\x1b[34mINFO\x1b[0m ${originName}: ${message}${time}`)
  }

  static _error(originName, message, timeBool = false) {
    var time;
    if (timeBool === true || process.env.DebugToggle === 1) {
      time = ` [${new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]} UTC]`
    } else {
      time = '';
    }
    console.log(`\x1b[41m~ERR\x1b[0m ${originName}: ${message}${time}`);
  }
  static _dlog(originName, message) {
    var time = ` [${new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]} UTC]`
    if (process.env.DebugToggle === 1) {
      console.log(`\x1b[35mDBUG\x1b[0m ${originName}: ${message}${time}`);
    }
  }
  static _derror(originName, message) {
    const time = ` [${new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]} UTC]`;
    if (process.env.DebugToggle === 1) {
      console.log(`\x1b[35mD\x1b[0m\x1b[41mERR\x1b[0m ${originName}: ${message}${time}`);
    } else {}
  }
  static _warn(originName, message, timeBool = false) {
    let time;
    if (timeBool === true || process.env.DebugToggle === 1) {
      time = ` [${new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0]} UTC]`
    } else {
      time = '';
    }
    console.log(`\x1b[33mWARN\x1b[0m ${originName}: ${message}${time}`);
  }

  newPrompt(args = {}) {
    let type = args.type;
    let title = args.title;
    let content = args.content;
    let footer = args.footer;
    let footerIcon = args.footerIcon;
    let color = args.color;
    let name = args.name;
    let icon = args.icon;
    let nameUrl = args.nameUrl;
    let url = args.url;
    let thumbnail = args.thumbnail;
    let image = args.image;
    let author = args.author;
    let tmpTime = args.tmpTime;

    let colorCalc = (Math.random() * 0xfffff * 1000000).toString(16);
    let randomColor = '0x' + colorCalc.slice(0, 6); // Calculate random color
    if (typeof color == 'undefined') {
      color = randomColor;
    }
    if (typeof title == 'undefined') {
      title = 'Untitled'
    }
    if (type === 'generic') {
      const Embed = new Discord.MessageEmbed();
      Embed.setColor(color);
      if (typeof author !== 'undefined') Embed.setAuthor(author);
      if (typeof name !== 'undefined' || typeof icon !== 'undefined' || typeof nameUrl !== 'undefined') Embed.setAuthor(name, icon, nameUrl);
      Embed.setTitle(title);
      if (typeof url !== 'undefined') Embed.setURL(url);
      if (typeof thumbnail !== 'undefined') Embed.setThumbnail(thumbnail);
      if (content instanceof Array) { // if content is not a discord embed field (name on top, value under it), send it as a default text field "description"
        Embed.addFields(content);
      } else if (!(content instanceof Array) && typeof content !== 'undefined'){
        Embed.setDescription(content);
      }
      if (typeof image !== 'undefined') Embed.setImage(image);
      if (typeof footer !== 'undefined' && typeof footerIcon == 'undefined') {
        Embed.setFooter(footer);
      } else if (typeof footer !== 'undefined' && typeof footerIcon !== 'undefined') {
        Embed.setFooter(footer, footerIcon);
      }
      if (typeof tmpTime !== 'undefined' && typeof tmpTime == "number") {
        this.message.delete({timeout: 1})
        this.message.reply(Embed)
        .then(msg => {msg.delete({timeout: tmpTime*1000}).catch(console.error)})
      } else {
        this.message.delete({timeout: 1})
        this.message.reply(Embed);
      }
      
    } else if (type === 'generic-dm') {
      const Embed = new Discord.MessageEmbed();
      Embed.setColor(color);
      if (typeof author !== 'undefined') Embed.setAuthor(author);
      if (typeof name !== 'undefined' || typeof icon !== 'undefined' || typeof nameUrl !== 'undefined') Embed.setAuthor(name, icon, nameUrl);
      Embed.setTitle(title);
      if (typeof url !== 'undefined') Embed.setURL(url);
      if (typeof thumbnail !== 'undefined') Embed.setThumbnail(thumbnail);
      if (content instanceof Array) { // if content is not a discord embed field (name on top, value under it), send it as a default text field "description"
        Embed.addFields(content);
      } else if (!(content instanceof Array) && typeof content !== 'undefined'){
        Embed.setDescription(content);
      }
      if (typeof image !== 'undefined') Embed.setImage(image);
      if (typeof footer !== 'undefined' && typeof footerIcon == 'undefined') {
        Embed.setFooter(footer);
      } else if (typeof footer !== 'undefined' && typeof footerIcon !== 'undefined') {
        Embed.setFooter(footer, footerIcon);
      }
      if (typeof tmpTime !== 'undefined' && typeof tmpTime == "number") {
        this.message.delete({timeout: 1})
        this.message.author.send(Embed)
        .then(msg => {msg.delete({timeout: tmpTime*1000}).catch(console.error)})
      } else {
        this.message.delete({timeout: 1})
        this.message.author.send(Embed);
      }
      
    } else if (type === 'help') {

      const Embed = new Discord.MessageEmbed();
      Embed.setColor(color);
      if (typeof author !== 'undefined') Embed.setAuthor(author);
      if (typeof name !== 'undefined' || typeof icon !== 'undefined' || typeof nameUrl !== 'undefined') Embed.setAuthor(name, icon, nameUrl);
      Embed.setTitle(`Help — ${process.env.BotName}`);
      if (content instanceof Array) {
        Embed.addFields(content);
      } else if (!(content instanceof Array) && typeof content !== 'undefined'){
        Embed.setDescription(content);
      }
      if (typeof url !== 'undefined') Embed.setURL(url);
      if (typeof thumbnail !== 'undefined') Embed.setThumbnail(thumbnail);
      if (typeof footer !== 'undefined' && typeof footerIcon == 'undefined') {
        Embed.setFooter(footer);
      } else if (typeof footer !== 'undefined' && typeof footerIcon !== 'undefined') {
        Embed.setFooter(footer, footerIcon);
      }
      if (typeof tmpTime !== 'undefined' && typeof tmpTime == "number") {
        this.message.delete({timeout: 1})
        this.message.author.send(Embed)
        .then(msg => {msg.delete({timeout: tmpTime*1000}).catch(console.error)})
      } else {
        this.message.delete({timeout: 1})
        this.message.author.send(Embed);
      }
    } else if (type === 'help-cmd') {
      const Embed = new Discord.MessageEmbed();
      Embed.setColor(color);
      if (typeof author !== 'undefined') Embed.setAuthor(author);
      if (typeof name !== 'undefined' || typeof icon !== 'undefined' || typeof nameUrl !== 'undefined') Embed.setAuthor(name, icon, nameUrl);
      Embed.setTitle(`Help — ${title}`);
      Embed.addFields(content);
      if (typeof url !== 'undefined') Embed.setURL(url);
      if (typeof thumbnail !== 'undefined') Embed.setThumbnail(thumbnail);
      if (typeof footer !== 'undefined' && typeof footerIcon == 'undefined') {
        Embed.setFooter(footer);
      } else if (typeof footer !== 'undefined' && typeof footerIcon !== 'undefined') {
        Embed.setFooter(footer, footerIcon);
      }
      if (typeof tmpTime !== 'undefined' && typeof tmpTime == "number") {
        this.message.delete({timeout: 1})
        this.message.reply(Embed)
        .then(msg => {msg.delete({timeout: tmpTime*1000}).catch(console.error)})
      } else {
        this.message.delete({timeout: 1})
        this.message.reply(Embed);
      }
    } else if (type === 'error') {
      const Embed = new Discord.MessageEmbed();
      Embed.setColor(0xeb1d02);
      if (typeof author !== 'undefined') Embed.setAuthor(author);
      Embed.setTitle(`Error — ${title}`);
      if (content instanceof Array) {
        Embed.addFields(content);
      } else if (!(content instanceof Array) && typeof content !== 'undefined'){
        Embed.setDescription(content);
      }
      Embed.setThumbnail('https://www.iconsdb.com/icons/preview/white/warning-2-xxl.png');
      Embed.setFooter(`Hardwick | ${process.env.VersionNum}`);
      if (typeof tmpTime !== 'undefined' && typeof tmpTime == "number") {
        this.message.delete({timeout: 1})
        this.message.reply(Embed)
        .then(msg => {msg.delete({timeout: tmpTime*1000}).catch(console.error)})
      } else {
        this.message.delete({timeout: 1})
        this.message.reply(Embed)
        .then(msg => {msg.delete({timeout: 7000}).catch(console.error)})
      }
    }
  }
  newPanel(args = {}) {
    let type = args.type;
    let pages = args.pages;
    let index = Object.entries(pages).length;
    let embeds = [];

    if (type === 'arrows') {
      for (var i = 0; i <= index--; i++) {
        let title = pages[`${i}`].title;
        let content = pages[`${i}`].content;
        let footer = pages[`${i}`].footer;
        let footerIcon = pages[`${i}`].footerIcon;
        let color = pages[`${i}`].color;
        let name = pages[`${i}`].name;
        let icon = pages[`${i}`].icon;
        let nameUrl = pages[`${i}`].nameUrl;
        let url = pages[`${i}`].url;
        let thumbnail = pages[`${i}`].thumbnail;
        let image = pages[`${i}`].image;
        let colorCalc = (Math.random() * 0xfffff * 1000000).toString(16);
        let randomColor = '0x' + colorCalc.slice(0, 6); // Calculate random color
        if (typeof color == 'undefined') {
          color = randomColor;
        }
        if (typeof title == 'undefined') {
          title = 'Untitled'
        }
        const Embed = new Discord.MessageEmbed();
        Embed.setColor(color);
        if (typeof name !== 'undefined' || typeof icon !== 'undefined' || typeof nameUrl !== 'undefined') Embed.setAuthor(name, icon, nameUrl);
        Embed.setTitle(title);
        if (typeof url !== 'undefined') Embed.setURL(url);
        if (typeof thumbnail !== 'undefined') Embed.setThumbnail(thumbnail);
        if (content instanceof Array) { // if content is not a discord embed field (name on top, value under it), send it as a default text field "description"
          Embed.addFields(content);
        } else if (!(content instanceof Array) && typeof content !== 'undefined'){
          Embed.setDescription(content);
        }
        if (typeof image !== 'undefined') Embed.setImage(image);
        if (typeof footer !== 'undefined' && typeof footerIcon == 'undefined') {
          Embed.setFooter(footer);
        } else if (typeof footer !== 'undefined' && typeof footerIcon !== 'undefined') {
          Embed.setFooter(footer, footerIcon);
        }
        embeds.push(Embed);
      }
      new Pagination.Embeds()
      .setArray(embeds)
      .setAuthorizedUsers([this.message.author.id])
      .setChannel(this.message.channel)
      .setPage(1)
      .setPageIndicator(false)
      .setDisabledNavigationEmojis(['jump', 'delete'])
      .build();
    }
  }
}
// This is the beginning of command handler

Prismal._log('prismalcore', 'Initializing sanity check.')

// Sanity checks

if (typeof process.env.DiscordToken !== 'undefined') {
  Prismal._log('prismalsanity', 'Token defined.')
} else {
  Prismal._error('prismalsanity', 'Discord API token is not defined!')
  process.exit(0);
}
if (typeof process.env.GlobalPrefix !== 'undefined') {
  Prismal._log('prismalsanity', `Global prefix defined as \"${process.env.GlobalPrefix}\".`)
} else {
  Prismal._error('prismalsanity', 'Global prefix is not defined!');
  process.exit(0);
}
if (typeof process.env.BotName !== 'undefined') {
  Prismal._log('prismalsanity', `Bot name defined as \"${process.env.BotName}\".`)
} else {
  Prismal._warn('prismalsanity', 'Bot name is not defined. Expect undefined entries in some commands.')
}
if (typeof process.env.DebugToggle === 1) {
  Prismal._dlog('prismalsanity', 'Debug output is enabled.')
}

if (typeof process.env.DeveloperIds !== 'undefined') {
  Prismal._log('prismalsanity', `Developer IDs defined as \"${process.env.DeveloperIds.split('|')}\".`)
} else {
  Prismal._warn('prismalsanity', 'Developer IDs are not defined. Expect all commands for developer use only to be unusable.')
}

// Sanity checks completed

Client.on('ready', () => {
  var s;
  var sch;
  var susr
  console.log();
  Prismal._log('prismalcore', 'Ready.');
  if (Client.guilds.cache.size > 1) {s = 's'}
  else {s = ''}
  if (Client.channels.cache.size > 1) {sch = 's'}
  else {sch = ''}
  if (Client.users.cache.size > 1) {susr = 's'}
  else {susr = ''}
  Prismal._log('pmlstat', `Connected to ${Client.guilds.cache.size} guild${s}, ${Client.channels.cache.size} channel${sch}, and ${Client.users.cache.size} user${susr}.`);
})

Client.on('message', message => {
  let originId;
  if (message.author.bot) return;
  if (message.channel.type !== 'dm') {
    originId = message.guild.id
    const guildPrefix = db.fetch(`prefix_${message.guild.id}`)
    if (guildPrefix === null) prefix = process.env.GlobalPrefix;
    else prefix = guildPrefix;
  } else if (message.channel.type === 'dm') {
    prefix = process.env.GlobalPrefix;
    originId = "DM"
  }
  if (message.content.indexOf(prefix) !== 0) return;
  let devPerms = process.env.DeveloperIds.split("|");
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var aliasedCommand;

  try {
    let commandScript = require(`./commands/${command}.js`);
    commandScript.run(Client, message, args, devPerms);
    Prismal._dlog('prismalcore', `Command \'${command}\' called by guild-user reference ${originId}/${message.author.id}`);
  } catch (err) {
    Prismal._derror('prismalcore', `Command ${command} called by guild-user reference ${originId}/${message.author.id} is not found, searching for aliases`);
    fs.readdirSync(stores).forEach(file => {
      f = path.resolve(__dirname, `data/stores/${file}`);
      if ((file.split('.').pop()) === 'json') {
        let commandStore = require(f);
        if (commandStore.aliases) {
          for (var i = 0; i < commandStore.aliases.length; i++) {
            if (commandStore.aliases[i] === command) {
              aliasedCommand = commandStore.name;
            }
          }
        }
      }
    })
    try {
      let commandScript = require(`./commands/${aliasedCommand}.js`);
      commandScript.run(Client, message, args, devPerms);
      Prismal._dlog('prismalcore', `Command \'${aliasedCommand}\' (under alias ${command}) called by guild-user reference ${originId}/${message.author.id}`);
    } catch (err) {
      Prismal._derror('prismalcore', `Command ${command} called by guild-user reference ${originId}/${message.author.id}, but command does not exist`);
    }
  }
})
module.exports = Prismal;
Client.login(process.env.DiscordToken);