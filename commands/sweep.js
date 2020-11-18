const Discord = require('discord.js');
const path = require('path');

exports.run = async (Client, message, args) => {
    const PmlClient = require(path.resolve(__dirname, '../core'));
    const Prismal = new PmlClient(Client, message);
    
    message.delete()
    // get the delete count as an actual number.
    const amount = Math.trunc(args[0]);
    
    if (!amount || amount < 1 || amount > 99) {
        const helpScript = require(path.resolve(__dirname, './help.js'));
        helpScript.run(Client, message, (args = 'sweep'));
        Prismal.derror('sweep', 'Number is invalid, contacting help handler');
        return;
    }
    
    await message.channel.messages.fetch({limit: amount+1}).then(messages => {
        message.channel.bulkDelete(messages)
    })
    
    let hasBeen;
    
    if (amount == 1) {
        hasBeen = "message has been";
    } else if (amount > 1) {
        hasBeen = "messages have been";
    }
    
    Prismal.newPrompt({
        type: 'generic',
        title: `${amount} ${hasBeen} deleted!`,
        color: '#FDFDFD',
        tmpTime: 5
    })
    return;
}