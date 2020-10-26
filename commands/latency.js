const Discord = require("discord.js");
const path = require("path");

exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, "../core"));
  const Prismal = new PmlClient(Client, message);

  let result = {
    name: "Warning:",
    value:
      "Discord may be undergoing an outage event. Head over to https://status.discord.com/ to monitor developing situtations.",
  };
  let color;

  let msgping1 = new Date();
  let Clientping = new Date() - message.createdAt;
  let msgping2 = new Date() - msgping1;

  if (Math.round(Client.ws.ping) < 60) {
    color = "#00ff00";
    Prismal.newPrompt({
      type: "generic",
      title: "Pong!",
      content: [
        {
          name: "API latency:",
          value: `${Math.round(Client.ws.ping)} ms`,
        },
        {
          name: "Message ping:",
          value: `~${Math.round(msgping2)} ms`,
        },
      ],
      thumbnail:
        "https://www.iconsdb.com/icons/preview/white/ping-pong-xxl.png",
      color: color,
      footer: "Hardwick",
    });
  } else if (
    Math.round(Client.ws.ping) >= 60 &&
    Math.round(Client.ws.ping) < 100
  ) {
    color = "#ffa500";
    Prismal.newPrompt({
      type: "generic",
      title: "Pong!",
      content: [
        {
          name: "API latency:",
          value: `${Math.round(Client.ws.ping)} ms`,
        },
        {
          name: "Message ping:",
          value: `~${Math.round(msgping2)} ms`,
        },
      ],
      thumbnail:
        "https://www.iconsdb.com/icons/preview/white/ping-pong-xxl.png",
      color: color,
      footer: "Hardwick",
    });
  } else if (Math.round(Client.ws.ping) >= 100) {
    color = "#eb1d02";
    Prismal.newPrompt({
      type: "generic",
      title: "​Pong!",
      content: [
        {
          name: "API latency:",
          value: `${Math.round(Client.ws.ping)} ms`,
        },
        {
          name: "Message ping:",
          value: `~${Math.round(msgping2)} ms`,
        },
        result,
      ],
      thumbnail:
        "https://www.iconsdb.com/icons/preview/white/ping-pong-xxl.png",
      color: color,
      footer: "Hardwick",
    });
  }
};
