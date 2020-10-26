const Discord = require("discord.js");
const path = require("path");

exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, "../core"));
  const Prismal = new PmlClient(Client, message);

  if (message.guild.emojis.cache.size < 1) {
    Prismal.newPrompt({
      type: "generic",
      title: "No emojis present!",
      content:
        "There are no emojis present in this server. Try adding some first!",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png",
      footer: "Hardwick",
    });
    return;
  }
  Prismal.newPrompt({
    type: "generic",
    title: "Emojis on this server",
    content: [
      {
        name: "Amount:",
        value: `${message.channel.guild.emojis.cache.size}`,
      },
      {
        name: "Emojis:",
        value: `${message.guild.emojis.cache.map((e) => e).join(", ")}`,
      },
      {
        name: "Tip:",
        value: "Hover over an emoji to see the name.",
      },
    ],
    footer: "Hardwick",
    color: "#dadfe8",
  });
};
