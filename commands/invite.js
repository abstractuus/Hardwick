const Discord = require("discord.js");
const path = require("path");

exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, "../core"));
  const Prismal = new PmlClient(Client, message);

  Client.generateInvite().then((link) => {
    Prismal.newPrompt({
      type: "generic",
      title: "Invite me to a server:",
      content: `[Invite Hardwick](${link})`,
      thumbnail: "https://pbs.twimg.com/media/Dj3fVupV4AAhIwD.png:large",
      color: "#FDFDFD",
      footer: "Hardwick",
    });
  });
};
