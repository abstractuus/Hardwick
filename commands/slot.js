const Discord = require("discord.js");
const path = require("path");

exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, "../core"));
  const Prismal = new PmlClient(Client, message);

  var replys1 = [
    ":gem:   :   :gem:   :   :gem: ",
    ":lemon:   :   :lemon:   :   :lemon: ",
    ":seven:   :   :seven:   :   :seven: ",
    ":bell:   :   :bell:   :   :bell:",
    ":cherries:   :   :cherries:   :   :cherries: ",
    ":star:   :   :star:   :   :star: ",
    ":gem:   :   :star:   :   :seven: ",
    ":star:   :   :bell:   :   :bell:",
    ":star:   :   :star:   :   :cherries: ",
    ":gem:   :   :gem:   :   :cherries:",
    ":gem:   :   :seven:   :   :seven: ",
    ":star:   :   :bell:   :   :lemon: ",
    ":star:   :   :star:   :   :cherries: ",
    ":seven:   :   :star:   :   :star: ",
    ":star:   :   :star:   :   :seven: ",
    ":gem:   :   :gem:   :   :seven: ",
  ];
  let reponse = replys1[Math.floor(Math.random() * replys1.length)];

  var replys2 = [
    ":gem:   :   :gem:   :   :gem: ",
    ":lemon:   :   :lemon:   :   :lemon: ",
    ":seven:   :   :seven:   :   :seven: ",
    ":bell:   :   :bell:   :   :bell:",
    ":cherries:   :   :cherries:   :   :cherries: ",
    ":gem:   :   :star:   :   :seven: ",
    ":star:   :   :bell:   :   :bell:",
    ":star:   :   :star:   :   :cherries: ",
    ":gem:   :   :gem:   :   :cherries:",
    ":gem:   :   :seven:   :   :seven: ",
    ":star:   :   :bell:   :   :lemon: ",
    ":star:   :   :star:   :   :cherries: ",
    ":seven:   :   :star:   :   :star: ",
    ":star:   :   :star:   :   :seven: ",
    ":gem:   :   :gem:   :   :seven: ",
    ":gem:   :   :cherries:   :   :cherries:",
    ":gem:   :   :bell:   :   :star:",
  ];
  let reponse2 = replys2[Math.floor(Math.random() * replys2.length)];
  var replys3 = [
    ":lemon:   :   :lemon:   :   :lemon: ",
    ":bell:   :   :bell:   :   :bell:",
    ":cherries:   :   :cherries:   :   :cherries: ",
    ":star:   :   :star:   :   :star: ",
    ":gem:   :   :star:   :   :seven: ",
    ":star:   :   :bell:   :   :bell:",
    ":star:   :   :star:   :   :cherries: ",
    ":gem:   :   :gem:   :   :cherries:",
    ":gem:   :   :seven:   :   :seven: ",
    ":star:   :   :bell:   :   :lemon: ",
    ":star:   :   :star:   :   :cherries: ",
    ":seven:   :   :star:   :   :star: ",
    ":star:   :   :star:   :   :seven: ",
    ":gem:   :   :gem:   :   :seven: ",
  ];
  let reponse3 = replys3[Math.floor(Math.random() * replys3.length)];
  
  message.channel.send("<@"+message.author.id+">");
  Prismal.newPrompt({
    type: "generic",
    title: ':slot_machine:  Slot machine  :slot_machine:',
    content: [
      {
        name: "**ˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍˍ**",
        value: "** **"
      },
      {
        name: `${reponse} \n \n${reponse2}  **←** \n \n${reponse3}`,
        value: "** **"
      },
      {
        name: "**‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾**",
        value: "** **"
      }
    ],
    color: '#FDFDFD',
    footer: `Hardwick | ${process.env.VersionNum}`
  });
};
