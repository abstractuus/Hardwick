const Discord = require('discord.js');
const path = require('path');

exports.run = (Client, message, args) => {
	const PmlClient = require(path.resolve(__dirname, '../core'));
	const Prismal = new PmlClient(Client, message);
	
	let guildCreatedAt = message.guild.createdAt.toUTCString();
	
	Prismal.newPrompt({
		type: 'generic',
		title: message.guild.name,
		color: '#FDFDFD',
		thumbnail: message.guild.iconURL(),
		content: [
			{
				name: 'Owner:',
				value: message.guild.owner.user.tag
			},
			{
				name: 'Date Created:',
				value: guildCreatedAt
			},
			{
				name: 'Members:',
				value: message.guild.memberCount
			},
			{
				name: 'Humans:',
				value: message.guild.members.cache.filter(member => !member.user.bot).size
			},
			{
				name: 'Bots:',
				value: message.guild.members.cache.filter(member => member.user.bot).size
			}
		],
		footer: 'Hardwick'
	})
}
