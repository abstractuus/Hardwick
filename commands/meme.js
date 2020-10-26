const Discord = require('discord.js');
var path = require('path');
const memes = require( path.resolve( __dirname, "./data/stores/meme.json") );
const memeSource = require( path.resolve( __dirname, "./data/assets/memesource.json") );


exports.run = (Client, message, args) => {

  if(args.join("") == "list") {
  const list = new Discord.MessageEmbed()
  .setThumbnail("http://www.mascotmedia.net/wp-content/uploads/2018/04/MM-M-Icon-White.png")
  .setDescription("**Usage:** meme | <caption> ")
  .setColor(15724786)
  .setAuthor("Hardwick's Meme Module")
  .addField("Pictures:",`
  \ **•** **look** | "Spongebob looking on with red eyes."
  \ **•** **hozier** | "Yah Gurul?"
  \ **•** **puta** | "Dora staring at that wannabe bitch."
  \ **•** **donotsee** | "Emoji closing it's eyes."
  \ **•** **jayson** | "So what I did on epteins island?".
  \ **•** **noflavour** | "Woman from spongebob eating something."`)
  .setFooter("Hardwick™")

  const list2 = new Discord.MessageEmbed()
  .setColor(15724786)
  .addField("Videos:",`
  \ **•** **crickets** | "Veggie tales characters staring at each other..."
  \ **•** **dorime** | "Dancing mouse dressed as a pope."
  \ **•** **mipan** | "Llama dancing to the mipan song!"
  \ **•** **kys** | "Dr. Phil dissapearing!"`)
  .setFooter("Hardwick™")

  const moduleAnnouncement = new Discord.MessageEmbed()
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
  .setColor(15724786)
  .addField("**Attention:**", `Hardwick's Meme Module has been sent to`)
  .addField("**User:**", `${message.author}` )
  .setFooter("Hardwick™")

  message.author.send(list);
  message.author.send(list2);
  message.channel.send(moduleAnnouncement);
  return;

} else {

  if(args.join(" ") == "list here") {

    const list = new Discord.MessageEmbed()
    .setThumbnail("http://www.mascotmedia.net/wp-content/uploads/2018/04/MM-M-Icon-White.png")
    .setDescription("**Usage:** meme | <caption> ")
    .setColor(15724786)
    .setAuthor("Hardwick's Meme Module")
    .addField("Pictures:",`
    \ **•** **look** | "Spongebob looking on with red eyes."
    \ **•** **hozier** | "Yah Gurul?"
    \ **•** **puta** | "Dora staring at that wannabe bitch."
    \ **•** **donotsee** | "Emoji closing it's eyes."
    \ **•** **jayson** | "So what I did on epteins island?".
    \ **•** **noflavour** | "Woman from spongebob eating something."`)
    .setFooter("Hardwick™")

    const list2 = new Discord.MessageEmbed()
    .setColor(15724786)
    .addField("Videos:",`
    \ **•** **crickets** | "Veggie tales characters staring at each other..."
    \ **•** **dorime** | "Dancing mouse dressed as a pope."
    \ **•** **mipan** | "Llama dancing to the mipan song!"
    \ **•** **kys** | "Dr. Phil dissapearing!"`)
    .setFooter("Hardwick™")

    message.channel.send(list);
    message.channel.send(list2);
    return;

    }

  }

  if(!args.join(" ")) {

    const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Usage:**", "meme <name> <caption>")
        .addField("**Tip:**", "Type 'meme list' or 'meme list here' to receive a list of Hardwick's memes.")
        .setFooter("Hardwick™")

    message.channel.send(error);
    return;
  }




  //Start of meme + caption code.

          const meme = args.shift().toLowerCase(); //Splits meme name from the caption
          console.log("----------------------------------");
          console.log("Finding meme in memes.json array");

          for (const line of memes.triggers) {

            if (meme == line) { //If the meme is found

              console.log(`Found ${line}`);

              var memeTrigger = line; //Make the meme trigger the meme line

              //End of first loop

               console.log("Finding root directory in memesource.json object");
              for (const root in memeSource) {  //For every root name in the object

                if (memeTrigger == root) { //If the root is found
                  console.log(`Found the directory, ${line}, which is ${memeSource[root]}`)

                  var memeToSend = memeSource[root]; //Make the meme to send the root directory.

                  message.channel.send(args.join(" "),{
                   files: [
                     memeToSend
                   ]
             })

           }

         }

       }

     }

   }
