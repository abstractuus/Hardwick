const Discord = require("discord.js");
const path = require("path");

exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, "../core"));
  const Prismal = new PmlClient(Client, message);

  Prismal.newPrompt({
    type: "generic",
    title: "Greetings!",
    content: [
      {
        name: "Notes:",
        value:
          "To see the full list of features/commands that I am capable of performing, please do **+help**. If there is any bug or issue with any of the commands, please do **+report <issue>**. This will send a direct message to my developer, informing them of the problem.",
      },
      {
        name: "Version:",
        value: "3.0.0",
      },
      {
        name: "Developer:",
        value: "https://github.com/abstractuus",
      },
    ],
    thumbnail: "https://pbs.twimg.com/media/DkD2VZEU8AAxHoZ.png:large",
    color: "#FDFDFD",
    footer: "Hardwick",
  });
};
