
 const Discord = require('discord.js');
const request = require('superagent')

exports.run = (client, message, args) => {


    request.get('http://api.adviceslip.com/advice')
      .end((err, res) => {
        if (!err && res.status === 200) {
          try {
            JSON.parse(res.text)
          } catch (e) {
            global.i18n.send('API_ERROR', message.channel)
            return
          }
          const advice = JSON.parse(res.text)

          const embed = new Discord.MessageEmbed()
              .setThumbnail("http://www.askaboutgames.com/wp-content/uploads/2017/09/adviceicon-white.png")
              .setColor(15724786)
              .addField("**Advice:**", advice.slip.advice)
              .setFooter("Hardwick™")



          message.channel.send(embed)
        } else {
          global.logger.error(`REST call failed: ${err}, status code: ${res.status}`)
        }
      })
  }
