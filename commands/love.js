const Discord = require("discord.js");
const path = require("path");

exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, "../core"));
  const Prismal = new PmlClient(Client, message);

  if (!args.join(" ")) {
    let helpScript = require("./help.js");
    helpScript.run(Client, message, (args = "love"));
    Prismal.derror("love", "No subcommand specified, contacting help handler");
    return;
  }

  var sayings = [
    "Divorce is imminent",
    "Definitely not compatible",
    "Atoms have more chemistry",
    "Honeymoon in Hell!",
    "Student debt",
    "Try querying when you acquire rights",
    "Trauma",
    "Heavy Trauma",
    "Have a happy life!",
    "Try querying again",
    "My calculations were corrupted, try again",
    "Ask another time",
    "I will tease and not tell you",
    "Why are you asking me?",
    "Think about what you're really asking me then try again",
    "You're gonna be so happy!",
    "I see lots of love!",
    "You both are adorable together",
    "No one could get in your way",
    "HAHAHAHAHAHA",
    "Save yourself the trouble",
    "Get a room",
    "I'm not a miracle worker",
  ];

  let role2 = args.slice(1).join(" ");
  let role = args[0];
  var result = Math.floor(Math.random() * sayings.length + 0);

  Prismal.newPrompt({
    type: "generic",
    title: "Are they meant to be?",
    content: [
      {
        name: "Asker:",
        value: `${message.author.username}#${message.author.discriminator}`,
      },
      {
        name: "Pairing:",
        value: `${role} ❤️ ${role2}`,
      },
      {
        name: "Compatibility:",
        value: sayings[result],
      },
    ],
    color: "#FDFDFD",
    footer: "Hardwick",
    thumbnail:
      "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/hearts-icon-18-256.png",
  });
};
