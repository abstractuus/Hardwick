const stores = "./data/stores/";
const fs = require("fs");
const path = require("path");
require("dotenv").config();
exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, "../core"));
  const Prismal = new PmlClient(Client, message);
  const _ = null;
  var publishedArray = [];
  try {
    const commandStore = require(path.resolve(
      __dirname,
      `../data/stores/${args}.json`
    ));
    publishedArray.push({
      name: `**${commandStore.description}**`,
      value: `Usage: ${commandStore.name} ${commandStore.usage}`,
    });
    if (typeof commandStore.subcommands !== "undefined") {
      for (var i = 0; i < commandStore.subcommands.length; i++) {
        publishedArray.push({
          name: `_${commandStore.subcommands[i].name}_`,
          value: `${commandStore.subcommands[i].description}\nUsage: ${commandStore.name} ${commandStore.subcommands[i].usage}`,
        });
      }
    }
    Prismal.newPrompt({
      type: "help-cmd",
      title: commandStore.name,
      content: publishedArray,
      tmpTime: 15,
    });
  } catch (err) {
    if (err.code == "MODULE_NOT_FOUND") {
      var arrayDescription = new Array();
      var arrayUsage = new Array();
      var arrayName = new Array();
      var arrayFinal = new Array();
      fs.readdirSync(stores).forEach((file) => {
        f = path.resolve(__dirname, `../data/stores/${file}`);
        if (file.split(".").pop() == "json") {
          let commandStore = require(f);
          arrayDescription.push(`${commandStore.description}`);
          arrayUsage.push(`${commandStore.usage}`);
          arrayName.push(`${commandStore.name}`);
          arrayFinal.push({
            name: `${commandStore.name}`,
            value: `${commandStore.description} Usage: ${commandStore.name} ${commandStore.usage}`,
          });
        }
      });
      Prismal.newPrompt({
        type: "help",
        content: arrayFinal,
        tmpTime: 30,
      });
      Prismal.derror(
        "help",
        `Command help for \'${args[0]}\' called by guild-user reference ${message.guild.id}/${message.author.id}, but command does not exist`
      );
    }
  }
};
