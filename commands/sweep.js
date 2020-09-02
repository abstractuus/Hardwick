

exports.run = async (client, message, args) => {

    // get the delete count as an actual number.
    const amount = args.join(' '); // Amount of messages which should be deleted

    if(!amount || amount < 1 || amount > 100) {

      const error = new Discord.MessageEmbed()
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
      .setColor(15724786)
      .addField("**Error:**", "Specify a number between 1-100.")
      .addField("**Warning:**", "Messages **CANNOT** be recovered after this command has been used.")
      .setFooter("Hardwick™")

      message.channel.send(error);
      return;

    }



    await message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
    message.channel.bulkDelete(messages // Mix bb this wil delete all messages that have been fetched and are not older than 14 days (due to the Discord API but lets thank god for that (remembers thy queens))
)});

    message.channel.send("Messages have been cleared!");

}
