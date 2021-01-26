const Discord = require('discord.js');
const path = require('path');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

exports.run = (Client, message, args) => {

    const PmlClient = require(path.resolve(__dirname, "../core"));
    const Prismal = new PmlClient(Client, message);

    if (!args.join(' ')) {
		Prismal.derror('play', 'Please provide song query in order to play.');
		
		const helpScript = require(path.resolve(__dirname, './help.js'));
		helpScript.run(Client, message, (args = 'play'));
	}

    console.log("Command invoked");

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send("Join a channel first");
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send("Hardwick cant join. no permissions.");
    if (!permissions.has('SPEAK')) return message.channel.send("Hardwick cant talk. no permissions.");
    if (!args.length) return message.channel.send("Search something");

    const connection = await voiceChannel.join();

    const videoFinder = async (query) => {
        const videoResult = await ytSearch(query);

        return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

}
    const video = await videoFinder(args.join(' '));

    if(video) {
        const stream = ytdl(video.url, {filter: 'audioonly'});
        connection.play(stream, {seek: 0, volume: 1})
        .on('finish', () =>{
            voiceChannel.leave();
        })

        await message.reply(`Hardwick Now Playing ***${video.title}***`)

    } else {
        message.channel.send('No video results found');

    }

}