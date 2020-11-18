const Discord = require("discord.js");
const path = require("path");

exports.run = (Client, message, args) => {
  const PmlClient = require(path.resolve(__dirname, "../core"));
  const Prismal = new PmlClient(Client, message);

  var indexNum = null;
  var user = message.mentions.users.first() || message.author;

  console.log("Checking conditions");
  console.log(user.presence.activities);

  //FOR LOOP FOR CONDITIONS
  for (i in user.presence.activities) {
    if (
      user.presence.activities[i].name === "Spotify" &&
      user.presence.activities[i].type === "LISTENING"
    ) {
      indexNum = i;

      //MAIN CHECK

      console.log(user.presence.activities[indexNum].name);
      console.log(user.presence.activities[indexNum].type);
      console.log("Conditions met");
      console.log("Moving on");

      var indexNums = null;

      //NESTED FOR LOOP FOR SPOTIFY DETAILS
      for (i in user.presence.activities) {
        indexNums = i;
      }

      var indexNumss = null;

      //SPOTIFY EMBED VARIABLES
      var trackImg = user.presence.activities[indexNum].assets.largeImageURL();
      var trackUrl = `https://open.spotify.com/track/${user.presence.activities[indexNum].syncID}`;
      var trackName = user.presence.activities[indexNum].details;
      var trackAlbum = user.presence.activities[indexNum].assets.largeText;
      var trackAuthor = user.presence.activities[indexNum].state;
      if (trackUrl == "https://open.spotify.com/track/undefined") {
        Prismal.newPrompt({
          type: "generic",
          title: "Track information:",
          content: [
            {
              name: "Song name:",
              value: trackName,
              inline: true
            },
            {
              name: "Album:",
              value: trackAlbum,
              inline: true
            },
            {
              name: "Author(s):",
              value: trackAuthor,
              inline: true
            }
          ],
          thumbnail: trackImg,
          color: "#FDFDFD"
        });
        return;
      } else {
        Prismal.newPrompt({
          type: "generic",
          title: "Track information:",
          content: [
            {
              name: "Title:",
              value: trackName,
              inline: true
            },
            {
              name: "Album:",
              value: trackAlbum,
              inline: true
            },
            {
              name: "Author(s):",
              value: trackAuthor,
              inline: true
            },
            {
              name: "Listen here:",
              value: `[${trackAuthor} — ${trackName}](${trackUrl})`,
              inline: true
            }
          ],
          thumbnail: trackImg,
          color: "#FDFDFD",
          footer: `Hardwick | ${process.env.VersionNum}`
        });
        return;
      }
    }
  }

  if (indexNum == null) {
    console.log("User is not listening to Spotify!");
    
    Prismal.newPrompt({
      type: 'error',
      title: 'spotify',
      content: [
        {
          name: 'Error:',
          value: `${user.username} is not listening to Spotify.`
        },
        {
          name: 'Tip:',
          value: 'Make sure that you are visibly listening to Spotify on Discord.'
        }
      ],
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png',
      footer: `Hardwick | ${process.env.VersionNum}`
    })
    return;
  }
};
