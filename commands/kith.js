const path = require('path');

exports.run = async (Client, message) => {
	message.channel.send('**Here\'s a kith..** :grin:').then(async msg => {
		setTimeout(() => {
			msg.edit(':flushed:');
		}, 500);
		setTimeout(() => {
			msg.edit(':smiling_face_with_3_hearts:');
		}, 2000);
		setTimeout(() => {
			msg.edit(':kissing_smiling_eyes:');
		}, 2500);
		setTimeout(() => {
			msg.edit(':kissing_heart:');
		}, 3000);
		setTimeout(() => {
			msg.edit(':kissing_heart::heart:');
		}, 3500);
		setTimeout(() => {
			msg.edit(':kissing_heart::heart::sparkling_heart:');
		}, 4000);
		setTimeout(() => {
			msg.edit(':kissing_heart::heart::sparkling_heart::heart:');
		}, 4500);
		setTimeout(() => {
			msg.edit(':kissing_heart::heart::sparkling_heart:');
		}, 5000);
		setTimeout(() => {
			msg.edit(':kissing_heart::heart:');
		}, 5500);
		setTimeout(() => {
			msg.edit(':kissing_heart:');
		}, 6000);
		setTimeout(() => {
			msg.edit(':kissing_heart:');
		}, 6500);
		setTimeout(() => {
			msg.edit(':kissing_heart::heart:');
		}, 7000);
		setTimeout(() => {
			msg.edit(':kissing_heart::heart::sparkling_heart:');
		}, 7500);
		setTimeout(() => {
			msg.edit(':kissing_heart::heart::sparkling_heart::heart:');
		}, 8000);
		setTimeout(() => {
			msg.edit(':kissing_heart::heart::sparkling_heart:');
		}, 8500);
		setTimeout(() => {
			msg.edit(':kissing_heart::heart:');
		}, 9000);
		setTimeout(() => {
			msg.edit(':kissing_heart:');
		}, 9500);
	});
	
	
}