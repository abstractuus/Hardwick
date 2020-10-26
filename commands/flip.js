const Discord = require("discord.js");
const path = require("path");

exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, "../core"));
  const Prismal = new PmlClient(Client, message);

  const rolled = Math.floor(Math.random() * 2) + 1;

  if (rolled == "1") {
    Prismal.newPrompt({
      type: "generic",
      title: "Coin Flip",
      content: [
        {
          name: "Result:",
          value: "You got **heads**!",
        },
      ],
      thumbnail: `${message.author.displayAvatarURL()}`,
      color: "#FDFDFD",
    });
  } else if (rolled == "2") {
    Prismal.newPrompt({
      type: "generic",
      title: "Coin Flip",
      content: [
        {
          name: "Result:",
          value: "You got **tails**!",
        },
      ],
      thumbnail: `${message.author.displayAvatarURL()}`,
      color: "#FDFDFD",
    });
  }
};
