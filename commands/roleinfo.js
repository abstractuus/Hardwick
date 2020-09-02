const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let name = args.join(" ");
    let role = message.mentions.roles.first();
    let author = message.author;

    if (message.content.startsWith(name)) {
      //  message.delete(100);
    }


    if (message.content.includes(role)) {
      //  message.delete(100);
    }



    if (message.guild.member(author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {

    if(!args.join(" ")) {
        const error = new Discord.MessageEmbed()
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
            .setColor(15724786)
            .addField("**Usage:**", "roleinfo <@role>")
            .addField("**Tip:**", "Make sure that you spell the role name properly. Remember, role names are case sensitive.")
            .setFooter("Hardwick™")

            message.channel.send(error);

        return;

      }


    // If we can't find any role, then just default to the author's highest role
    if (!role) {
        const error = new Discord.MessageEmbed()
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
        .setColor(15724786)
        .addField("**Error:**", `${message.author}, ${name} isn't a role on this server.`)
        .addField("**Usage:**", "roleinfo <@role>")
        .addField("**Tip:**", "Make sure that you spelled the role name properly. Remember, role names are case sensitive.")
        .setFooter("Hardwick™")

    message.channel.send(error);

return;

}


    // Define our embed
    const embed = new Discord.MessageEmbed()
    .setAuthor("Moderation")
    .setThumbnail("https://spanning.com/wp-content/themes/spanning/images/icons/white/SPAN_WH_Icon_Whitepaper.png")
        .setColor(15724786)
        .setTitle(`ROLE - ${role.name}`)
        .addField('Members:', role.members.size, true)
        .addField('Hex Color: ', role.hexColor, true)
        .addField('Creation Date:', role.createdAt.toDateString(), true)
        .addField('Editable:', role.editable.toString(), true)
        .addField('Managed:', role.managed.toString(), true)
        .addField('ID:', role.id, true)
        .setFooter("Hardwick™");
    return message.channel.send({
        embed: embed
    });

} else {
    const error = new Discord.MessageEmbed()
.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Exclamation_mark_white_icon.svg/2000px-Exclamation_mark_white_icon.svg.png")
.setColor(15724786)
.addField("**Error:**", `You are not a moderator, ${message.author}!`)
.addField("**Tip:**", "Try this command when you have the permission 'Manage Roles' or 'Administrator'.")
.setFooter("Hardwick™")

message.channel.send(error);
}


}
