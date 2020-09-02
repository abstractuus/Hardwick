const Discord = require('discord.js');


exports.run = (Client, message, args) => {

  var indexNum = null;
  var user = message.mentions.users.first() || message.author;

  console.log('Checking conditions');
  console.log(user.presence.activities);


//FOR LOOP FOR CONDITIONS
  for (i in user.presence.activities) {

    if (user.presence.activities[i].name === 'Spotify' && user.presence.activities[i].type === 'LISTENING') {
      indexNum = i;

//MAIN CHECK

  console.log(user.presence.activities[indexNum].name);
  console.log(user.presence.activities[indexNum].type);
  console.log('Conditions met');
  console.log('Moving on');

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


//SPOTIFY EMBED
          const embed2 = new Discord.MessageEmbed()
              .setAuthor('Track Information:')
              .setColor(15724786)
              .setThumbnail(trackImg)
              .setDescription(`
                \`🎵\` **Song name :**  \`${trackName}\`
                \`📀\` **Album :**  \`${trackAlbum}\`
                \`🎤\` **Author(s) :**  \`${trackAuthor}\`
                `)

          const embed = new Discord.MessageEmbed()
              .setAuthor('Track Information:')
              .setColor(15724786)
              .setThumbnail(trackImg)
              .setDescription(`
                \`🎵\` **Song name :**  \`${trackName}\`
                \`📀\` **Album :**  \`${trackAlbum}\`
                \`🎤\` **Author(s) :**  \`${trackAuthor}\`
                `)
              .addField('Listen here:', `[${trackUrl}](${trackUrl})`, false);

              if(trackUrl == "https://open.spotify.com/track/undefined" ) {

                   message.channel.send(embed2);

                   return;

              } else {

           message.channel.send(embed);

           return;

              }

          }

      }


  if (indexNum == null) {

    console.log('User is not listening to Spotify!');

    const error = new Discord.MessageEmbed()
     .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
     .setColor(15724786)
     .addField("**Error:**", `${user.username} is not listening to spotify.`)
     .addField("**Tip:**", "Make sure that you are visibly listening to spotify on discord.")
     .setFooter("Hardwick™")

     message.channel.send(error);

     return;

  }

}
