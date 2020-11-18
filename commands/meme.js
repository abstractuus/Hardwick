const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');
const memeSource = require(path.resolve(__dirname, '../data/assets/memesource.json'));

exports.run = (Client, message, args) => {
	const PmlClient = require(path.resolve(__dirname, '../core'));
	const Prismal = new PmlClient(Client, message);
	
	var pictureList = '';
	var videoList = '';
	var counter = -1;
	var title;
	const memeKeys = Object.keys(memeSource);

	if (!args.join(' ')) {
		Prismal.derror('meme', 'No trigger specified, contacting help handler');
		
		const helpScript = require(path.resolve(__dirname, './help.js'));
		helpScript.run(Client, message, (args = 'meme'));
	}
	
	if (args.join(' ') == 'list') {
		for (i in memeSource) {
			if (memeSource[i]['type'] == 'image') {
				counter++;
				title = memeKeys[counter];
				pictureList += `**${title}** — ${memeSource[i]['description']}\n`;
				
			} else if (memeSource[i]['type'] == 'video') {
				counter++;
				title = memeKeys[counter];
				videoList += `**${i}** — ${memeSource[i]['description']}\n`;
			}
		}
		Prismal.newPrompt({
			type: 'generic-dm',
			title: 'Memes — Hardwick',
			thumbnail: 'https://www.iconsdb.com/icons/preview/white/theatre-masks-xxl.png',
			footer: `Hardwick | ${process.env.VersionNum}`,
			content: [
				{
					name: '📸',
					value: pictureList,
					inline: true
				},
				{
					name: '🎬',
					value: videoList,
					inline: true
				}
			],
			color: '#FDFDFD'
		})
		return;
	} else if (args.join(' ') == 'list here') {
		for (i in memeSource) {
			if (memeSource[i]['type'] == 'image') {
				counter++;
				title = memeKeys[counter];
				pictureList += `**${title}** — ${memeSource[i]['description']}\n`;
				
			} else if (memeSource[i]['type'] == 'video') {
				counter++;
				title = memeKeys[counter];
				videoList += `**${i}** — ${memeSource[i]['description']}\n`;
			}
		}
		Prismal.newPrompt({
			type: 'generic',
			title: 'Memes — Hardwick',
			thumbnail: 'https://www.iconsdb.com/icons/preview/white/theatre-masks-xxl.png',
			footer: `Hardwick | ${process.env.VersionNum}`,
			content: [
				{
					name: '📸',
					value: pictureList,
					inline: true
				},
				{
					name: '🎬',
					value: videoList,
					inline: true
				}
			],
			color: '#FDFDFD'
		})
		return;
	}
	for (i in memeKeys) {
		if (args[0] == memeKeys[i]) {
			message.channel.send((args.join(" ")).replace(args[0], ''),{
				   files: [
					 memeSource[`${args[0]}`].filePath
				    ]
			})
		}
	}
	return;
}
