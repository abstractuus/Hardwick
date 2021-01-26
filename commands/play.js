const Discord = require('discord');
const path = require('path');

exports.run = (Client, message, args) => {
    const PmlClient = require(path.resolve(__dirname, "../core"));
    const Prismal = new PmlClient(Client, message);

    if (!args.join(" ")) {
        Prismal.newPrompt({
            type: "error",
            title: "play",
            content: [
                {
                    name: "Please provide a query or song URL to play something.",
                    value: "I can't telepathically receive your song request, silly.",
                },
                {
                    name: "Usage:",
                    value: "play <query OR URL>"
                }
            ]
        })
    }
    try {
        Client.distube.play(message, args.join(" "))
    } catch (e) {
        message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
    }
    
}