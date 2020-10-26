Discord = require('discord.js');

exports.run = (Client, message, args) => {

 var sayings = [
"Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all.",
"My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.",
 "The shovel was a ground-breaking invention.",
 "I wouldn’t buy anything with velcro. It’s a total rip-off.",
 "Why don’t skeletons ever go trick or treating? Because they have no body to go with.",
 "A salesman talked my uncle into buying 10 000 personalized pens for his business with the promise that he would be eligible to win a 32-foot yacht. A born gambler, my uncle agreed. Well, he won, and a few weeks after the pens arrived, his prize showed up: a 12-inch plastic yacht with 32 plastic feet glued to the bottom.",
 "I’ve just written a song about tortillas; actually, it’s more of a rap",
 "So what if I don’t know what “Armageddon” means? It’s not the end of the world.",
 "250 lbs here on Earth is 94.5 lbs on Mercury. No, I’m not fat. I’m just not on the right planet.",
 "If we shouldn’t eat at night, why do they put a light in the fridge?",
 "If I got 50 cents for every failed math exam, I’d have $ 6.30 now."];



var result = Math.floor((Math.random() * sayings.length) + 0);

const embed = new Discord.MessageEmbed()
        .setThumbnail("https://pbs.twimg.com/media/DkBhhw_VsAAic7S.png:large")
        .setColor(15724786)
        .addField("**Joke:**", sayings[result])
        .setFooter("Hardwick™")
        
message.channel.send(embed);

 }
