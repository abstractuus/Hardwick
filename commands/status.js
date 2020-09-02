const Discord = require('discord.js');

exports.run = (client, message, args) => {

	const embed = new Discord.MessageEmbed()

		.setAuthor(message.guild.name)
    .setColor('#dadfe8')
		.addField('**Owner:**', `${message.guild.owner.user.tag}`)
		.addField('**Date Created:**', `${message.guild.createdAt}`)
		.setThumbnail(`${message.guild.iconURL()}`)
		.addField('**Members:**', `${message.guild.memberCount}`)
		.addField('**Humans:**', `${message.guild.members.cache.filter(member => !member.user.bot).size}`)
		.addField('**Bots:**', `${message.guild.members.cache.filter(member => member.user.bot).size}`)

	message.channel.send(embed);

}
